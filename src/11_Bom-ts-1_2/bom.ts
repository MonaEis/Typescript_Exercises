let timeInput = document.querySelector<HTMLDivElement>(".zeit");
const startBtn = document.querySelector("button");
let counter = 100;

startBtn?.addEventListener("click", timeRunsDown)

if(timeInput){
    timeInput.innerHTML = `${counter}%`;
}

function timeRunsDown() {
    counter = 101;
    
    console.log("ich bin geklickt")
    const timeRunsDownInterval = setInterval(() => {
        counter --;
        if (counter >= 0) {
            if(timeInput){
                timeInput.innerHTML = `${counter}%`;
            }
        } else {
            clearInterval(timeRunsDownInterval)
        }
        
    }, 80);

}