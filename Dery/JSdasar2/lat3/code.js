const tombol = document.querySelector('#tombol');
let a = 0 ;
tombol.addEventListener('click', function(){
    
    fetch('quote.json')
        .then(respon => respon.json())
        .then(respon => {
            const quot = respon.quotes; 
            let card = '';
            quot.forEach(q => card += tampil(q));
            const tampung = document.querySelector('#quote');
            tampung.innerHTML = card;
       
        });
        a++
});


function tampil (q) {
    return `<p>${q.quote}<br>"${q.author}"</p>`;
}

// {
//     manusa : [
//         {"nama":"A" , "umur":13},
//         {"nama":"B" , "umur":12},
//         {"nama":"C" , "umur":15},
//         {"nama":"D" , "umur":11},
//         {"nama":"E" , "umur":23},
//         {"nama":"F" , "umur":43}
//     ]
// }