enum PizzaSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    Familie = "Familie",
};

enum PizzaIngredients {
    Cheese = "Cheese", 
    Onion ="Onion", 
    Salami ="Salami",
    Olive="Olive",
    Paprika = "Paprika",
    Mozzarella ="Mozzarella",
    Tuna = "Tuna",
};

type Pizza = {
    size: PizzaSize,
    ingredients: PizzaIngredients[],
};

const pizzaTonno: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Tuna, PizzaIngredients.Onion, PizzaIngredients.Cheese]
};
console.log(pizzaTonno);


const pizzaSalami: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Salami, PizzaIngredients.Mozzarella]
};
console.log(pizzaSalami);

const pizzaVeggi: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Onion, PizzaIngredients.Olive, PizzaIngredients.Paprika,  PizzaIngredients.Cheese]
}
console.log(pizzaVeggi);

const pizzaCalzone: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Onion, PizzaIngredients.Olive, PizzaIngredients.Paprika,  PizzaIngredients.Cheese, PizzaIngredients.Salami]
}
console.log(pizzaVeggi);