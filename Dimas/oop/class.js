// Class ES6
class Book{
  constructor(judul, penulis, tahun){
    this.judul = judul;
    this.penulis = penulis;
    this.tahun = tahun;
  }
  // Just Like Classes in PHP / Python
  getSummary(){
    return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
  }
  getAges(){
    const tahunSekarang = new Date().getFullYear() - this.tahun;
    return `${this.judul} sudah berusia ${tahunSekarang} tahun`;
  }
  revised(newTahun){
    this.tahun = newTahun;
    this.revise = true;
  }

  // static method -> you can use without instatiate objek

  static topBook(){
    return 'Dimas & Seto'
  }
}

// Instantiate Objek
const buku1 = new Book('Buku1', 'Dimas', '2020');
// console.log(buku1)

// to acces static method, you cannot call a static on an object, only on an object class
console.log(Book.topBook())