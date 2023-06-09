const minutosEl = document.querySelector('#minutos');
const segundosEl = document.querySelector('#segundos');
const milisegEl = document.querySelector('#milisegundos');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const resume = document.querySelector('#resume');
const reset = document.querySelector('#reset');

let intervalo;
let minutos = 0;
let segundos = 0;
let miliseg = 0;
let isPaused = false;

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
resume.addEventListener('click', resumeTimer);
reset.addEventListener('click', resetTimer);

function startTimer(){
    intervalo = setInterval(() => {
        if(!isPaused){
            miliseg += 10;

            if(miliseg === 1000){
                segundos++;
                miliseg = 0;
            }
            if(segundos === 60){
                minutos++;
                segundos = 0;
            }

            minutosEl.textContent = formatTime(minutos);
            segundosEl.textContent = formatTime(segundos);
            milisegEl.textContent = formatMiliseg(miliseg);
        }
    }, 10);

    start.style.display = 'none';
    pause.style.display = 'block';
}

function pauseTimer(){
    isPaused = true;
    pause.style.display = 'none';
    resume.style.display = 'block';
}

function resumeTimer(){
    isPaused = false;
    pause.style.display = 'block';
    resume.style.display = 'none';
}

function resetTimer(){
    clearInterval(intervalo);
    minutos = 0;
    segundos = 0;
    miliseg = 0;

    minutosEl.textContent = '00';
    segundosEl.textContent = '00';
    milisegEl.textContent = '000';

    start.style.display = 'block';
    pause.style.display = 'none';
    resume.style.display = 'none';
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMiliseg(time){
    return time < 100 ? `${time}`.padStart(3,'0') : time;
}