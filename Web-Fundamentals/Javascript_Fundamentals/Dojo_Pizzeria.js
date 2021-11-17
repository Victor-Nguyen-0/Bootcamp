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

// function randomPizza