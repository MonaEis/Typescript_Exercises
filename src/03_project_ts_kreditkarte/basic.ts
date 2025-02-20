const inputCardNumber = document.querySelector<HTMLInputElement>("#input-c-number");
const inputCardHolder = document.querySelector<HTMLInputElement>("#input-c-holder");
const inputExpirationDate = document.querySelector<HTMLInputElement>("#input-date");
const inputCVV = document.querySelector<HTMLInputElement>("#input-cvv");

const outputCardNumber = document.querySelector<HTMLParagraphElement>(".nummer-eintragen");
const outputCardHolder = document.querySelector<HTMLParagraphElement>(".full-name");
const outputExpiresDate = document.querySelector<HTMLParagraphElement>(".date");

const outputSubmit = document.querySelector<HTMLInputElement>(".button");

const outError = document.querySelector(".error-speech");

outputSubmit?.addEventListener("click", fillInCard);


function fillInCard(event: Event) {
    event.preventDefault();
    if (inputCardNumber.value != "" && inputCardHolder.value != "" && inputExpirationDate.value != "" && inputCVV.value != "" && outputCardNumber.value != "" &&outputCardHolder.value != "" && outputExpiresDate.value != ""){
        console.log("ist da");
        outputCardNumber.innerHTML = inputCardNumber.value;
        outputCardHolder.innerHTML = inputCardHolder.value;
        outputExpiresDate.innerHTML = inputExpirationDate.value;
        outError.innerHTML = "";
        } else {
            outError.innerHTML = "Alle Felder müssen ausgefüllt sein!"
        }
} 







// function fillInCard2(event: Event) {
//     event.preventDefault();
//     if (inputCardNumber) {
//         inputCardNumber.classList.remove("error")
//     }
//     if (inputCardHolder) {
//         inputCardHolder.classList.remove("error")
//     }
//     if (inputExpirationDate) {
//         inputExpirationDate.classList.remove("error")
//     }
//     if (inputCVV) {
//         inputCVV.classList.remove("error")
//     }
//     if (outError) {
//         outError.innerHTML = "";
//     }

//     if (!inputCardNumber.value || !inputCardHolder.value || !inputExpirationDate.value || !inputCVV.value){
//         outError.innerHTML = "Alle Felder müssen ausgefüllt sein!"
//         console.log("Fehler");
//         if (inputCardNumber) {
//             if (!inputCardNumber.value) inputCardNumber.classList.add("error")
//         }
//         if (inputCardHolder) {
//             if (!inputCardHolder.value) inputCardHolder.classList.add("error")
//         }
//         if (inputExpirationDate) {
//             if (!inputExpirationDate.value) inputExpirationDate.classList.add("error")
//         }
//         if (inputCVV) {
//             if (!inputCVV.value) inputCVV.classList.add("error")
//         }
//         } else {
//         console.log("ist da");
//         outputCardNumber.innerHTML = inputCardNumber.value.replace(/(\d{4})(?=\d)/g, "$1 ");
//         outputCardHolder.innerHTML = inputCardHolder.value;
//         outputExpiresDate.innerHTML = inputExpirationDate.value;
//         }
// } 

// function fillInCard(event: Event) {
//     event.preventDefault();
//     if (!inputCardNumber.value || !inputCardHolder.value || !inputExpirationDate.value || !inputCVV.value || !outputCardNumber.value || !outputCardHolder.value || !outputExpiresDate.value){
//         outError.innerHTML = "Alle Felder müssen ausgefüllt sein!"
//         } else {
            
//             console.log("ist da");
//         outputCardNumber.innerHTML = inputCardNumber.value;
//         outputCardHolder.innerHTML = inputCardHolder.value;
//         outputExpiresDate.innerHTML = inputExpirationDate.value;
//         outError.innerHTML = "";
//         }
// } 


// function fillInCard(event: Event) {
//     event.preventDefault();
//     if (!inputCardNumber.value || !inputCardHolder.value || !inputExpirationDate.value || !inputCVV.value || !outputCardNumber.value || !outputCardHolder.value || !outputExpiresDate.value) {
//         // if(outError){
//         outError.innerHTML = "Alle Felder müssen ausgefüllt sein!"
//     // }
//         if (inputCardNumber) {
//             if (!inputCardNumber.value) inputCardNumber.classList.add("error")
//         }
//         if (inputCardHolder) {
//             if (!inputCardHolder.value) inputCardHolder.classList.add("error")
//         }
//         if (inputExpirationDate) {
//             if (!inputExpirationDate.value) inputExpirationDate.classList.add("error")
//         }
//         if (inputCVV) {
//             if (!inputCVV.value) inputCVV.classList.add("error")
//         }
//     } else {
        
//         console.log("ist da");
//         outputCardNumber.innerHTML = inputCardNumber.value;
//         outputCardHolder.innerHTML = inputCardHolder.value;
//         outputExpiresDate.innerHTML = inputExpirationDate.value;
//         outError.innerHTML = "";
//     }
// } 