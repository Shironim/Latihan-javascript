const KumQuiz = [
    {
        tanya:"bahasa pemrograman apa yang digunakan pada web ini ?",
        a:"Javascript",
        b:"Html",
        c:"Python",
        d:"C",    
        benar:"a"
    },{
        tanya:"siapa nama MC di anime naruto",
        a:"Boruto",
        b:"Sasuke",
        c:"Naruto",
        d:"Guy",    
        benar:"c"
    },{
        tanya:"Tahun berapa Javascript dibuat",
        a:"1890",
        b:"1996",
        c:"1991",
        d:"1995",    
        benar:"d"
    }
];

const pertanyaan = document.getElementById('pertanyaan');

const a_per = document.getElementById('a_per');
const b_per = document.getElementById('b_per');
const c_per = document.getElementById('c_per');
const d_per = document.getElementById('d_per');
const kirim =  document.getElementById('kirim');
let curdat = 0;

let scor = 0;

quiz();
function quiz(){
    const a = KumQuiz[curdat];
    pertanyaan.innerHTML = a.tanya;  
    a_per.innerText = a.a;
    b_per.innerText = a.b;
    c_per.innerText = a.c;
    d_per.innerText = a.d;
    
}

function selected (){
    const jawabs = document.querySelectorAll(".jawab");
    let jawaban = undefined;
    jawabs.forEach((jawabs) => {
        if(jawabs.checked) {
            jawaban = jawabs.id; 
        }
    });

    return jawaban;
}

kirim.addEventListener('click', () => {
    const jawab = selected();
    if(jawab) {
        curdat++;
        if(curdat < KumQuiz.length){
            quiz();
        }else {
            alert("selesai");
        }
    }
});
