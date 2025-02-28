const button = document.querySelector("button");
const outputDiv = document.querySelector(".umwickeln");
let counter = -1;

button?.addEventListener("click", addForms);

function addForms(){
    console.log("es passiert was");
    
    counter++;
    console.log("hier Clickcount:",counter);
    if(outputDiv && counter !== 0 && !counter.toString().includes("0") ){ //+ hier nochmal fragen, wegen den zehnerzahlen
        const newFormCircle = document.createElement("div");
        newFormCircle.classList.add("rechteck");

        const number = document.createElement("p");
        number.innerHTML = counter.toString();

        console.log(outputDiv);

        newFormCircle.appendChild(number)
        outputDiv.append(newFormCircle)
    } else {
        const newFormSquare = document.createElement("div");
        newFormSquare.classList.add("weiss");

        const number = document.createElement("p");
        number.innerHTML = counter.toString();

        console.log(outputDiv);

        newFormSquare.appendChild(number)

        if(outputDiv){
            outputDiv.append(newFormSquare)
        }
    }
  
};