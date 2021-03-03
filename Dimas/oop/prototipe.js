function Book(judul,penulis,tahun) {
  this.judul = judul;
  this.penulis = penulis;
  this.tahun = tahun;
}

// kita buat fungsi berada dalam protitipe Book
Book.prototype.getSummary = function () {
  return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
}
Book.prototype.getAges = function () {
  const tahunSekarang = new Date().getFullYear() - this.tahun;
  return `${this.judul} sudah berusia ${tahunSekarang} tahun`;
}
// revised / ganti tahun, manipulasi data
Book.prototype.revised = function(newTahun) {
  this.tahun = newTahun;
  this.revise = true;
}
// dengan cara ini akan menghasilkan output yang sama. yang membedakan sekarang fungsi akan berada di prototipe
const buku1 = new Book('buku 1','Dimas Seto','2020')
const buku2 = new Book('buku 2','Melina Seto','2010')

console.log(buku1)
console.log(buku1.getAges())
// ganti tahun buku 1
buku1.revised('2018')
console.log(buku1)
console.log(buku1.getAges())