// Object Of Protos
// doing some same thing with different way
const bookProtos = {
  getSummary: function () {
    return `${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}`;
  },
  getAges: function () {
    const tahunSekarang = new Date().getFullYear() - this.tahun;
    return `${this.judul} sudah berusia ${tahunSekarang} tahun`;
  }
}

// Create Objek
// const buku1 = Object.create(bookProtos);
// buku1.judul = 'buku 1';
// buku1.penulis = 'Dimas';
// buku1.tahun = '2020';

// Sintaks Object Create
const buku1 = Object.create(bookProtos, {
  judul: {value: 'Buku 1'},
  penulis: {value: 'Dimas'},
  tahun: {value: '2020'}
});

console.log(buku1)