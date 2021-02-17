document.getElementById("berat").addEventListener('input', function(x) {
    let berat = x.target.value;
    document.getElementById('kg').innerHTML = berat/1000;
    document.getElementById('ouncs').innerHTML = berat*16;
    document.getElementById('pound').innerHTML = berat*0.00220462;
});