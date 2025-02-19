const yearInputForm = document.querySelector("form");
const userYearInput = document.querySelector<HTMLInputElement>("#geb-jahr");
const outputDiv = document.querySelector(".output");

yearInputForm?.addEventListener("submit", ageOutput)

function ageOutput(event: Event) {
    event.preventDefault();
    let userAge: number;

    if (userYearInput) {
        userAge = (new Date().getFullYear()) - Number(userYearInput.value);

        if (outputDiv) {
            outputDiv.innerHTML = `Dein Alter ist ${userAge}`
        }
    }
}