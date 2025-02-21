const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

const upperDrinks = drinks.map((drink) => drink.toUpperCase());
console.log(upperDrinks);

const iLikeDrinks = upperDrinks.map((drink) => `I like ` + drink)
console.log(iLikeDrinks);
