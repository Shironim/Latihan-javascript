// Class Buku
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class
class UI{
  static displayBooks(){
    // const storedBooks = [
    //   {
    //     title: 'buku 1',
    //     author: 'aku',
    //     isbn : 12345
    //   },
    //   {
    //     title: 'buku 2',
    //     author: 'dia',
    //     isbn : 67890
    //   }
    // ];
    // const books = storedBooks;
    
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    const list = document.querySelector('#displayBuku');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class='btn btn-info btn-sm edit'>EDIT</a></td>
      <td><a href="#" class='btn btn-danger btn-sm delete'>X</a></td>
    `;

    list.appendChild(row);
  }

  static clearField(){
    document.querySelector('#judul').value = '';
    document.querySelector('#penulis').value = '';
    document.querySelector('#isbn').value = '';
  }

  static deleteBook(el){
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className){
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#buku-form'); 
      // setelah apa.insertBefore(apa yang mau diinsert, sebelum apa);
      container.insertBefore(div,form);
      // make disappear after 3 second
      setTimeout(() => document.querySelector('.alert').remove(),3000);
  } 

  static readDataBook(el){
    
    const isbn = el.parentElement.previousElementSibling.textContent;
    const penulis = el.parentElement.previousElementSibling.previousElementSibling.textContent;
    const judul = el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    
    document.querySelector('#judul').value = judul;
    document.querySelector('#penulis').value = penulis;
    document.querySelector('#isbn').value = isbn;
    // console.log(el.parentElement.parentElement.index)

    // return judul;
    // console.log(judul,penulis,isbn);
  }
}

// class Store : handle Storage
class Store{
  static getBooks(){
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    }else{
      // localStorage menyimpan string, sementara kita menggunakan objek, sehingga item yang tersimpan dalam books harus diubah dalam JSON
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books',JSON.stringify(books));
  }
  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach((book,index) => {
      if (book.isbn === isbn) {
        books.splice(index,1);
      }
    });

    localStorage.setItem('books',JSON.stringify(books));
  }
}

// Event : Display books

document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event : Add a book
document.querySelector('#buku-form').addEventListener('submit',(e)=>{
  e.preventDefault()
  // get form value
  const judul = document.querySelector('#judul').value;
  const penulis = document.querySelector('#penulis').value;
  const isbn = document.querySelector('#isbn').value;

  if (judul == '' || penulis == '' || isbn == '') {
    UI.showAlert('Please Fill Form','info')
  }else{
    if (e.submitter.classList.contains('tambah')) {
      // instatiate book
      const book = new Book(judul,penulis,isbn);
      // cek apakah buku sudah terinisialisasi dengan nilai sesuai form
      // console.log(book)

      // Add book to Store
      Store.addBook(book);

      // add book to UI
      UI.addBookToList(book);

      // function clear field
      UI.clearField();
      // Buku Berhasil Ditambahkan
      UI.showAlert('Buku Berhasil Ditambahkan','success')
      console.log('tambah')
    }else if (e.submitter.classList.contains('edit')) {
      const book = {
        title: judul,
        author: penulis,
        isbn: isbn
      };
      // Remove book
      Store.removeBook(book.isbn);
      
      // Add book to Store
      Store.addBook(book);

      // function clear field
      UI.clearField();

      // Buku Berhasil di edit
      UI.showAlert('Buku Berhasil diedit','success')
    }
  }
});

// Event book
document.querySelector('#displayBuku').addEventListener('click',(e) =>{
  // delete book
  if (e.target.classList.contains('delete')) {
    UI.deleteBook(e.target);
    UI.showAlert('Buku Dihapus','danger');
    
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    // Remove book
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    // Edit Book
  }else if(e.target.classList.contains('edit')){
    UI.readDataBook(e.target);
  }
});
