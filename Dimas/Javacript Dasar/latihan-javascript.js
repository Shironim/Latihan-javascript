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
function pwdChecker(){
  const pwd = document.getElementById('password').value;
  const pwd2 = document.getElementById('password2').value;
  // const patt = /[0-9]/;
  if (pwd != pwd2) {
    document.getElementById('demo').innerHTML = "Password beda";
  }else{
    alert('Selamat');
  }

}
// input data //ditambah dengan string method
function biodata(){
  const namaDepan = document.getElementById('namaDepan').value;
  const namaBelakang = document.getElementById('namaBelakang').value;
  const tempatLhr = document.getElementById('tempatLhr').value;
  const tanggal = document.getElementById('tanggal').value;
  const bulan = document.getElementById('bulan').value;
  const tahun = document.getElementById('tahun').value;
  const alamat = document.getElementById('alamat').value;

  document.getElementById('namaLengkap').innerHTML = namaDepan + ' ' + namaBelakang;
  document.getElementById('ttl').innerHTML = tempatLhr + ', ' + tanggal + ' ' + bulan + ' ' + tahun;
  document.getElementById('almt').innerHTML = alamat;
}
// buat objek mobil -> tampilkan nilainya