let cek = document.getElementById('cek');
cek.addEventListener('keyup', cekNama);

function cekNama() {
    let nilai = document.getElementById('cek').value.toUpperCase();

    let nama = document.getElementById('nama');

    let li = nama.querySelectorAll('li.items');

    for (let i=0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(nilai) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}