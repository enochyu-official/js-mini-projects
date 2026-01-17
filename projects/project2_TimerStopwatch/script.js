// Variables
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');
const ms = document.getElementById('millisecond');

let timeStarted;
let timePassed = 0;
let counter;
let runningStatus = false;


// Functions
function start() {
  if (!runningStatus) {
    timeStarted = Date.now() - timePassed;
    counter = setInterval(display, 1);
    runningStatus = true;
  }
}

function pause() {
  if (runningStatus) {
    clearInterval(counter);
    timePassed = Date.now() - timeStarted;
    runningStatus = false;
    startBtn.textContent = "Resume";
  }
}

function reset() {
  timePassed = 0;
  clearInterval(counter);
  runningStatus = false;

  hr.textContent = `00`;
  min.textContent = `00`;
  sec.textContent = `00`;
  ms.textContent = `000`;
  startBtn.textContent = "Start";
}

function display() {
  timePassed = Date.now() - timeStarted;
  let finalHr = String(Math.floor(timePassed / (60 * 60 * 1000))).padStart(2, '0');
  let finalMin = String(Math.floor(timePassed / (60 * 1000)) % 60).padStart(2, '0');
  let finalSec = String(Math.floor(timePassed / 1000) % 60).padStart(2, '0');
  let finalMs = String(timePassed % 1000).padStart(3, '0');

  hr.textContent = `${finalHr}`;
  min.textContent = `${finalMin}`;
  sec.textContent = `${finalSec}`;
  ms.textContent = `${finalMs}`;
}


// Execution
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
