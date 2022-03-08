import { Hamburger } from './Hamburger.js'
import { Salad } from './Salad.js';
import { Beverage } from './Beverage.js';
import { Order } from './Order.js';


const bigHamburgerWithCheese = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
const smallHamburgerWithPotatoes = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
const ceasar300 = new Salad(Salad.CEASAR, 300);
const sameCeasar300 = new Salad(Salad.CEASAR, 300);
const cola = new Beverage(Beverage.COLA);
const coffee = new Beverage(Beverage.COFFEE);

let order = new Order(bigHamburgerWithCheese, ceasar300, cola);

order.addItem(coffee); //Coffee has been added to order! 
order.removeItem(smallHamburgerWithPotatoes); //Small hamburger with potatoes is not in the order!
order.removeItem(sameCeasar300); //Ceasar 300gr was removed from order!

order.payForTheOrder();// prints check;

order.addItem(coffee); //The order cannot be changed, it has already been paid!
order.removeItem(coffee); //The order cannot be changed, it has already been paid!

order.printTotalPrice(); //Total price: 240MNT
order.printTotalCalories(); //Total calories: 120ccal
order.printCheck();// prints check