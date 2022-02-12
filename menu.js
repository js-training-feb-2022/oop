"use strict";

import { Hamburger } from "./components/Hamburger.js"
import { Order } from "./components/Order.js"
import { Drink } from "./components/Drink.js"
import { Salad } from "./components/Salad.js"

let olivier = new Salad("OLIVIER", 150);
let caesar = new Salad("CAESAR", 200);
let cola = new Drink("COLA");
let order1 = new Order(olivier, caesar, cola);
order1.display()
console.log(order1.calculateTotalCalories());
console.log(order1.calculateTotalPrice());
let coffee = new Drink("COFFEE");
order1.add(coffee);
let hamburger = new Hamburger("SIZE_LARGE", "STUFFING_CHEESE");
console.log(hamburger.calculateCalories());
order1.add(hamburger);
let hamburger_small = new Hamburger("SIZE_SMALL", "STUFFING_POTATO");
order1.add(hamburger_small);
console.log(hamburger_small.calculateCalories());
console.log(order1.calculateTotalCalories());
console.log(order1.calculateTotalPrice());
console.log(order1.checkPaid());
order1.add(cola);
order1.delete("pos2");
order1.display();
order1.pay();
order1.add(cola);