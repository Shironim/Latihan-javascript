const btnubahwarna = document.getElementById("btnubahwarna");
// const body = document.getElementsByTagName("body")[0];
btnubahwarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('class', 'hijau-muda');
    document.body.classList.toggle('hijau-muda') //apabila diklik background jadi hijau muda diklik lagi kembali putih
}

const tRandomBG = document.createElement('button');
const teksButton = document.createTextNode('Acak Background');
tRandomBG.appendChild(teksButton);
tRandomBG.setAttribute('type','button');
btnubahwarna.after(tRandomBG);

tRandomBG.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1)  ;
    const g = Math.round(Math.random() * 255 + 1)  ;
    const b = Math.round(Math.random() * 255 + 1)  ;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';//merubah warna secara random
});

const sliderred = document.querySelector('input[name=sliderred]');
const slidergreen = document.querySelector('input[name=slidergreen]');
const sliderblue = document.querySelector('input[name=sliderblue]');


sliderred.addEventListener('input', function(){
    const r = sliderred.value;
    const g = slidergreen.value;
    const b = sliderblue.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

slidergreen.addEventListener('input', function(){
    const r = sliderred.value;
    const g = slidergreen.value;
    const b = sliderblue.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sliderblue.addEventListener('input', function(){
    const r = sliderred.value;
    const g = slidergreen.value;
    const b = sliderblue.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


document.body.addEventListener('mousemove', function(event) {
    const Positionx = Math.round((event.clientX / window.innerWidth) *255);
    const Positiony = Math.round((event.clientY / window.innerHeight) *255);
    document.body.style.backgroundColor = 'rgb('+ Positionx +','+ Positiony +',100)';
})