let counter = 1;
let outputDiv = document.querySelector(".output");

do {if (outputDiv){
    outputDiv.innerHTML += `<p>The number is ${counter}</p>`;
    counter++}
} while (counter <= 5);