const numberInput = document.querySelector<HTMLInputElement>("#number");
const form = document.querySelector(".loop-me");
const divOutput = document.querySelector<HTMLParagraphElement>(".output")

form?.addEventListener("submit", addOToLoop3);

// - einfachste Lösung:

function addOToLoop3(event: Event) {
    event.preventDefault();
    let string = "";
    if (numberInput){
    for(let i = 1; i <= Number(numberInput.value); i++){
        string += "o";
    }} 
    if(divOutput){
        divOutput.innerHTML = `L${string}p`;
    }
}




function addOToLoop1(event: Event) {
    event.preventDefault();
    let loopString: string[] = [];
    if (numberInput){
    for (let i = 0; i < Number(numberInput.value); i++){
        loopString.push("o");
    }}
    if (divOutput) {
        divOutput.innerHTML = `L${loopString.join("")}p`;
    }
}



function addOToLoop2(event: Event) {
    event.preventDefault();
    let o = "o"
    if(numberInput && divOutput){
        console.log(o.repeat(Number(numberInput.value)));
        divOutput.innerHTML = `L${o.repeat(Number(numberInput.value))}p`;
    }
    
}


// for (let i = 1; i <= numberInput.value; i++){
//     if(numberInput.value) {
//         divOutput?.innerHTML = `<h3>L${numberInput[i]}</h3>`;
        
//     }
// }

