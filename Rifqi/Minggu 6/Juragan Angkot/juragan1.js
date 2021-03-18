var angkot = 1;
var jmlangkot = 10;
var rusak = 7;

while (angkot <rusak) {
    console.log("Angkot No. "+angkot+" beroperasi dengan baik");
    angkot++;
}

for (angkot=rusak; angkot <= jmlangkot; angkot++){
    console.log("Angkot No. "+angkot+" sedang tidak beroperasi");
}