const timeOutput = document.getElementById("time");
const timeInputUser = document.getElementById("minutes") as HTMLInputElement;

const startBtn = document.getElementById("start-button");
const pauseBtn = document.getElementById("pause-button");
const restartBtn = document.getElementById("restart-button");

let counter = 0;
let intervallCountdown: number;

startBtn?.addEventListener("click", () => startCountDown());

function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`
}


function startCountDown() {
    if (timeInputUser) {
        counter = Number(timeInputUser.value) * 60;
    }

    if (timeOutput) {
        timeOutput.innerHTML = formatTime(counter);
    }

    intervallCountdown = setInterval(() => {
        counter--;
        if(timeOutput) timeOutput.innerText = formatTime(counter);
        
        if(counter <= 0) {
            clearInterval(intervallCountdown);
            alert("Countdown beendet!")
        }
    }, 1000)
}
