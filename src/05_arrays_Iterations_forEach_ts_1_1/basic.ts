const getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

const sortedGetraenke = [...getraenke].sort();
console.log(sortedGetraenke);

const outputDiv = document.querySelector(".output");


// sortedGetraenke.forEach((singleGetraenk) => console.log(singleGetraenk))

function myDrinks() {
    if (outputDiv) {
        sortedGetraenke.forEach((singleGetraenk) => outputDiv.innerHTML += `<p>${singleGetraenk}</p>`);                           
    } 
}

myDrinks()


