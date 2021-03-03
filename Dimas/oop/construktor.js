// ES5
// Constructor
// function Book(){
//   console.log('Inisialisasi Book')
// }
// setiap meng inisialisasi Book, fungsi Book akan dipanggil / dijalankan (construktor)
// const buku1 = new Book()
// const buku2 = new Book()

// // // // // // // //
function Book(judul,penulis,tahun) {
  this.judul = judul;
  this.penulis = penulis;
  this.tahun = tahun;

  // kita tambah fungsi / disebut method, yang bisa digunakan untuk semua objek yang dibuat
  this.getSummary = function() {
    return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
  }

  // dengan cara ini, fungsi akan berada dalam objek, tetapi kita mau objek hanya berisi data bukan fungsi

  // masuk ke materi -> prototipe

}

// hasilnya akan sama dengan objek literal, tetapi sekarang jika kita punya 2 atau lebih buku, hanya perlu menginisialiasi nya lagi tanpa menulis ulang
const buku1 = new Book('buku 1','Dimas Seto','2020')
const buku2 = new Book('buku 2','Melina Seto','2010')
console.log(buku1.getSummary())
console.log(buku2.getSummary())
