const timeOutput = document.getElementById("time");
const timeInputUser = document.getElementById("minutes");

const startBtn = document.getElementById("start-button");
const pauseBtn = document.getElementById("pause-button");
const restartBtn = document.getElementById("restart-button");

if (timeOutput) {
    let counter = 0;
    timeOutput.innerHTML = counter.toString();
}