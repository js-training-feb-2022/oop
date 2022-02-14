let Order = require('./order').Order,
    Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad;

let order = new Order();

let smallBurger = new Hamburger(Hamburger.SIZE_SMALL, 'salad');

order.addToOrder(smallBurger);

let bigBurger = new Hamburger(Hamburger.SIZE_LARGE, 'salad');

bigBurger.changeStuffingCount('cheese', 5);

order.addToOrder(bigBurger);

let saladOlive = new Salad(Salad.TYPE_OLIVE, 300);

saladOlive.changeWeight(150);
order.addToOrder(saladOlive);

let coffeeDrink = new Drink(Drink.TYPE_COFFEE);

order.addToOrder(coffeeDrink);

console.log(order.getDishes());

console.log('total price: ' + order.calculateTotalPrice());
console.log('total calories: ' + order.calculateTotalCalories());

order.pay();

let smallBurger2 = new Hamburger(Hamburger.SIZE_SMALL, 'potato')

order.addToOrder(smallBurger2);

console.log(order.getDishes());
