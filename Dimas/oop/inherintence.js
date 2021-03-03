// Book Construktor
function Book(judul,penulis,tahun) {
  this.judul = judul;
  this.penulis = penulis;
  this.tahun = tahun;
}

// kita buat fungsi berada dalam protitipe Book
Book.prototype.getSummary = function () {
  return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
}

// Magazine Construktor -> inherit Book
function Magazine(judul, penulis, tahun, bulan) {
  // memanggil Book
  Book.call(this, judul, penulis, tahun)

  this.bulan = bulan
}

// Inherit Prototipe Book, untuk bisa menggunakan prototipe yang ada di Book
Magazine.prototype = Object.create(Book.prototype)

// instantiate
// tetapi masih menggunakan contruktor Book
const mag1 = new Magazine('Mag1','Dimas', '2010','Maret')

// menggunakan constructor Magazine sendiri
Magazine.prototype.constructor = Magazine;

console.log(mag1)