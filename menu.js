"use strict";

import { Hamburger } from "./components/Hamburger.js"
import { Order } from "./components/Order.js"
import { Drink } from "./components/Drink.js"
import { Salad } from "./components/Salad.js"

// to set up initial order
let olivier = new Salad("OLIVIER", 150);
let caesar = new Salad("CAESAR", 200);
let cola = new Drink("COLA");
let order1 = new Order(olivier, caesar, cola);
order1.display()

// to calculate order calories and price
console.log(order1.calculateTotalCalories());
console.log(order1.calculateTotalPrice());

// to add items to the order
let coffee = new Drink("COFFEE");
order1.add(coffee);
let hamburger = new Hamburger("SIZE_LARGE", "STUFFING_CHEESE");
order1.add(hamburger);
let hamburger_small = new Hamburger("SIZE_SMALL", "STUFFING_POTATO");
order1.add(hamburger_small);

// methods for calculating
console.log(hamburger_small.calculateCalories());
console.log(order1.calculateTotalCalories());
console.log(order1.calculateTotalPrice());

// to check pay status 
console.log(order1.checkPaid());

// add another cola
order1.add(cola);

// to display name of an item
console.log(hamburger.getName());
console.log(order1.positions.pos2.getName());

// to delete an item
order1.delete("pos2");
order1.display();

// to pay
order1.pay();

// not able to add or delete after the order has been paid
order1.add(cola);
order1.delete("pos6");
order1.display();