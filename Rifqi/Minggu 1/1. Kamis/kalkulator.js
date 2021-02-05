function kalkulator(){
    var bil1 = parseInt(document.getElementById("bil1").value);
    var bil2 = parseInt(document.getElementById("bil2").value);
    var hitung = document.getElementById("hitung").value;
    if (hitung == "+"){
        document.getElementById("hasil").value = bil1 + bil2;
    }
    else if (hitung == "-") {
        document.getElementById("hasil").value = bil1 - bil2;
    }
    else if (hitung == "*") {
        document.getElementById("hasil").value = bil1 * bil2;
    }
    else if (hitung == "/") {
        document.getElementById("hasil").value = bil1 / bil2;
    }
}