//Cara untuk membuat object pada javascript
//1. Object Literal
//Problem : tidak efektif 
// let mahasiswa1 = {
//     nama: 'Rifqi MK',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log("Halo selamat makan!");
//     }
// }

// let mahasiswa2 = {
//     nama: 'Mulya',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log("Halo selamat makan!");
//     }
// }

//2. Function Declaration

// const methodMahasiswa = {

//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log("Halo ${this.nama}") 
//     },

//     olahraga : function(jam) {
//         this.energi -= jam;
//         console.log("Selamat olahraga");
//     },

//     tidur : function(jam) {
//         this.energi += jam*2;
//         console.log("Selamat tidur");
//     }

// }


// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Rifqi = Mahasiswa('Rifqi',10);
// let Mulya = Mahasiswa("Mulya",20);


// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
// }


// Mahasiswa.prototype.olahraga = function(jam){
//     this.energi -= jam;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += 2*jam;
// }
// let Rifqi = new Mahasiswa("Rifqi",40);


//Versi Class
class Mahasiswa {
    constructor (nama,energi){
        this.nama = nama;
        this.energi=energi;
    }

    makan(porsi){
        this.energi += porsi;
    }
    
    
    olahraga(jam){
        this.energi -= jam;
    }
    
    tidur(jam){
        this.energi += 2*jam;
    }

}

let Rifqi = new Mahasiswa("Rifqi",50);

//3. Constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log("Halo ${this.nama}") 
//     }

//     this.olahraga = function(jam) {
//         this.energi -= jam;
//         console.log("Selamat olahraga");
//     }
// }

// let Rifqi = new Mahasiswa ("Rifqi",15);

