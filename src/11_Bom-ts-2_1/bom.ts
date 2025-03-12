const divOutput = document.querySelector<HTMLDivElement>(".message");
const countdown = document.querySelector("#count");

if (countdown) {
    let counter = 10;
    countdown.innerHTML = counter.toString();

    let intervallCountdown = setInterval(() => {
        counter--;
        countdown.innerHTML = counter.toString();
        if (counter === 0) {
            clearInterval(intervallCountdown)
            if (divOutput){
                divOutput.style.opacity = "0";
            }
        }
    }, 200);
}