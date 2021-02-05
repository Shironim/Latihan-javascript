function barang() {
    var hargabrg = parseInt(document.getElementById("hargabrg").value);
    var jumlahbrg = parseInt(document.getElementById("jumlahbrg").value);
    var totalharga = hargabrg*jumlahbrg;
    document.getElementById("totalharga").innerHTML=totalharga;
    var bayar;
    if (totalharga > 150000){
        var diskonharga=0.15;
        bayar=totalharga-(totalharga*diskonharga);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("diskonharga").innerHTML="15%";
    }
    else{
        document.getElementById("bayar").innerHTML=totalharga;
        document.getElementById("diskonharga").innerHTML="0%";
    }
}