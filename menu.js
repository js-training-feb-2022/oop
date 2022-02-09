"use strict";

import { Hamburger } from "./components/Hamburger.js"
import { Order } from "./components/Order.js"
import { Coffee, Cola } from "./components/drinks.js"
import { Caesar, Olivier } from "./components/salads.js"

const buttons = document.getElementsByClassName("button")
Array.from(buttons).forEach(button => button.addEventListener('click', (e) => {
    displayItem(e.target.innerHTML);
}))

const order = document.getElementById("order");
function displayItem(name) {
    let item = document.createElement("p");
    item.innerHTML = name;
    order.append(item);
}
// let olivier = new Olivier(150);
// let cola = new Cola();
// let order1 = new Order(olivier, cola);
// order1.display()
// let coffee = new Coffee();
// order1.add(coffee);
// let hamburger = new Hamburger("SIZE_LARGE", "STUFFING_CHEESE");
// order1.add(hamburger);
// let hamburger_small = new Hamburger("SIZE_LARGE", "STUFFING_POTATO");
// order1.add(hamburger_small);
// console.log(order1.calculateTotalCalories());
// console.log(order1.calculateTotalPrice());
// console.log(order1.isPaid);
// order1.add(cola);
// order1.delete("pos2");
// order1.display();
// order1.pay();
// order1.add(cola);
