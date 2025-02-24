let zahlen = 1;
let outputDiv = document.querySelector(".output")

do {
   if (zahlen % 2 === 0){
    if(outputDiv){
   outputDiv.innerHTML += `<p>${zahlen}</p>`;
}
   }
   zahlen ++
} while(zahlen <=20);