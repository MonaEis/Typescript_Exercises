const numberInputForm = document.querySelector("form");
const userNumberInput = document.querySelector<HTMLInputElement>("#number");
const outputDiv = document.querySelector(".output");

numberInputForm?.addEventListener("submit", malZwei)

function malZwei (event: Event) {
    event.preventDefault();
    let userNumber;
        if (userNumberInput){
           userNumber = Number(userNumberInput.value) *2
    }

        if (outputDiv) {
            outputDiv.innerHTML = `Das Doppelte ist: ${userNumber}`
        }
}