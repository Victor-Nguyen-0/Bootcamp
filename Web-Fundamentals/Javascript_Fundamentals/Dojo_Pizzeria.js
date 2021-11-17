function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var sandwich =[]
    sandwich.crustType = crustType
    sandwich.sauceType = sauceType
    sandwich.cheeses = cheeses
    sandwich.toppings = toppings
    return sandwich
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
// console.log(pizza1)

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(pizza2)

let pizza3 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["green peppers", "mushrooms"])
// console.log(pizza3)

let pizza4 = pizzaOven("hand tossed", "traditional", ["mozzarella"], ["none"])
// console.log(pizza4)

let crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
]

let sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
]

let cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
]

let toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
]

// ^^^^ gave set values to pull from arrays

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

// ^^^^ maybe want 0, maybe want 2 cheeses --> randomize number of cheeses || floor for full integer, random for 0-1 times max, add min to guarantee minimum value

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

// ^^^^ floor returns an integer value; random gives between 0-1, arr.length makes it give close to number of array values

function randomPizza () {
    let pizza = {}
    pizza.crustType = randomPick(crustTypes)
    pizza.sauceType = randomPick(sauceTypes)
    pizza.cheeses = []
    pizza.toppings = []
    for(let i=0; i<randomRange(5,1); i++) {
        pizza.cheeses.push(randomPick(cheeses))
    }
    for(let i=0; i<randomRange(4,0); i++) {
        pizza.toppings.push(randomPick(toppings))
    }
    return pizza
}

console.log(randomPizza())