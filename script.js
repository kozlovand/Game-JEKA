const crab = document.getElementById('crab');
const cactus = document.getElementById('cactus');
const start = document.getElementById('start');

document.addEventListener("keydown",function(event) {
  jump();
});

function jump() {
   if (crab.classList != "jump") {
    crab.classList.add("jump")
   }
   setTimeout (function (){
    crab.classList.remove("jump")
   },300) 
}

const btn = document.querySelector('.btn-start');
btn.addEventListener('click', function() {
    if (btn.innerHTML === 'Stop') {
      btn.innerHTML = 'Start';
      cactus.classList.remove('pushbtn');
      start.classList.remove('active');
      start.classList.remove('startBtn');

    } else {
      btn.innerHTML = 'Stop';
      cactus.classList.add('pushbtn');
      start.classList.add('active');
      start.classList.add('startBtn');
    }
})

let isAlive = setInterval( function(){
  let crabTop = parseInt(window.getComputedStyle(crab).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && crabTop >=95){
    alert("Сегодня без 'Белого русского', сорри")
    cactus.classList.remove('pushbtn')
    start.classList.remove('active')
    btn.innerHTML = 'Start'
    clearInterval(interval);
    timer.textContent = '00:00:00';
  }
}, 10)

//Секундомер
let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

start.addEventListener('click', () => {
  if (btn.innerHTML === 'Stop') {
    interval = setInterval(updateTime, 1000);
  }
  else {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = '00:00:00';
  }
});