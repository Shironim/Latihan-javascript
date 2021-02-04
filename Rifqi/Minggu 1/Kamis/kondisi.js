var start = prompt("Masukkan angka awal : ")
var berhenti = prompt("Masukkan angka batas : ")

for (let i = start; i<=berhenti; i++){
    if (i % 2 == 0){
        document.write("<p>"+i+" Angka Genap </p>");
    } else if (i % 2 != 0){
        document.write("<p>"+i+" Angka Ganjil </p>");
    }
}  