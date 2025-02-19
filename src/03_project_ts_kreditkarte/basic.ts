const inputCardNumber = document.querySelector<HTMLInputElement>("#input-c-number");
const inputCardHolder = document.querySelector<HTMLInputElement>("#input-c-holder");
const inputExpirationDate = document.querySelector<HTMLInputElement>("#input-date");
const inputCVV = document.querySelector<HTMLInputElement>("#input-cvv");

const outputCardNumber = document.querySelector<HTMLParagraphElement>(".nummer-eintragen");
const outputCardHolder = document.querySelector<HTMLParagraphElement>(".full-name");
const outputExpiresDate = document.querySelector<HTMLParagraphElement>(".date");

const outputSubmit = document.querySelector<HTMLInputElement>(".button");

outputSubmit?.addEventListener("click", fillInCard);

function fillInCard(event: Event) {
    event.preventDefault();
    if (inputCardNumber && inputCardHolder && inputExpirationDate && inputCVV && outputCardNumber &&outputCardHolder && outputExpiresDate){
        console.log("ist da");
        outputCardNumber.innerHTML = inputCardNumber.value;
        outputCardHolder.innerHTML = inputCardHolder.value;
        outputExpiresDate.innerHTML = inputCVV.value;
        
    }
}