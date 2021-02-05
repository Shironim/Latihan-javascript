// Latihan kondisi & perulangan

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log('Genap');
  }else if (i % 2 == 1){
    console.log('ganjil');
  }
}

// Array
let arr = [1,2,3,4,5,6];

for(i = 0;i<arr.length;i++){
  console.log(arr[i]);
}

// objek
let orang = {
  nama: 'dimas',
  umur : '20',
  alamat : {
    jalan : 'JL Taman kendalisada',
    nomor : '8A',
    kelurahan : 'Wonotingal',
    kecamatan : 'Candisari',
  },
  kuliah : true,
}
// akses ke dalam objek
// document.write(orang.nama)
// console.log(orang)

function munculkan(){
  nama = document.getElementById('nama').value;
  // console.log(nama)
  document.getElementById('demo').innerHTML = nama;
}

// password checker 
// input data //ditambah dengan string method
// buat objek mobil -> tampilkan nilainya