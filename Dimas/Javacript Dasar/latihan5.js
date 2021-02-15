function tambah(){
    const judul = document.querySelector('#judul').value;
    const penulis = document.querySelector('#penulis').value;
    const isbn = document.querySelector('#isbn').value;

    const displayBuku = document.querySelector('#displayBuku');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${judul}</td>
        <td>${penulis}</td>
        <td>${isbn}</td>
    `;
}
document.addEventListener('DOMContentLoaded',tambah())
// displayBuku.appendChild(row)

 