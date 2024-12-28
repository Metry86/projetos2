const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")


constrelogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();


    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (seg < 10) seg = "0" + seg



    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

// FORMA DIFERENTE

// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     document.getElementById('horas').textContent = hours;
//     document.getElementById('minutos').textContent = minutes;
//     document.getElementById('segundos').textContent = seconds;
// }
// setInterval(updateClock, 1000);

// FORMA DIFERENTE