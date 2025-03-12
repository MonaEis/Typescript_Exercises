window.setTimeout(() => {
    console.log("%c Part 1", "color: coral")
    console.log("Ich zeige einen Random-Text an 🤓")
}, 14000);

console.log("%c Part 2", "color: coral");

let counter = 12;

const countDown = setInterval(() => {
    counter--;
    if(counter === 11) {
        console.log("Start: Warten für 3 Sekunden")
    } else if (counter === 9){
        console.log(counter)
        console.log("Erledigt. Du hast 3 Sekunden verschwendet.")
    } else if (counter === 0){
        console.log("Endlich Feierabend");
        clearInterval(countDown)
    } else {
        console.log(counter)

    }
}, 1000);