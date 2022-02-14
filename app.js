import { Order } from './models/Order.js';
import { Drink } from './models/Drink.js';
import { Hamburger } from './models/Hamburger.js';
import { Salad } from './models/Salad.js';

const order = new Order();

const dish = new Hamburger('hamburger', 'small', 'cheese');
const secondDish = new Hamburger('hamburger', 'big', 'cheese');
const sideDish = new Salad('olivier', 270);
const drink = new Drink('coffee');

order.addToOrder(dish);
order.addToOrder(secondDish);
order.addToOrder(sideDish);
order.addToOrder(drink);

console.log(order);

order.removeFromOrder(secondDish);

console.log(order);

order.pay();

order.addToOrder(secondDish);

console.log(order);