// Objek Literal
const book1 = {
  judul: 'Book 1',
  penulis: 'Dimas Seto',
  tahun : '2020',

  getSummary: function(){
    return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
  }
}

// buat 2 buku
const book2 = {
  judul: 'Book 2',
  penulis: 'Melina Seto',
  tahun : '2010',

  getSummary: function(){
    return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
  }
}
// Pro Tips
// get values from objek
// console.log(Object.values(book1))
// get keys from objek
// console.log(Object.keys(book1))

console.log(book1.getSummary())
console.log(book2.getSummary())

// kita menulis fungsi 2 kali, dengan membuat 2 objek berbeda -> masuk ke materi construktor
