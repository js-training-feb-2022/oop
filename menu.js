"use strict";

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    static get SIZE_SMALL() { return { price: 50, calories: 20 } }
    static get SIZE_LARGE() { return { price: 100, calories: 40 } }
    static get STUFFING_CHEESE() { return { price: 10, calories: 20 } }
    static get STUFFING_SALAD() { return { price: 20, calories: 5 } }
    static get STUFFING_POTATO() { return { price: 15, calories: 10 } }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        return Hamburger[this.size].price + Hamburger[this.stuffing].price;
    }

    calculateCalories() {
        return Hamburger[this.size].calories + Hamburger[this.stuffing].calories;
    }
}

class Salad {
    constructor(price, calories, weight) {
        this.weight = weight;
        this.price = price;
        this.calories = calories;
    }

    static get CAESAR() { return { price: 100, calories: 20} }
    static get OLIVIER() { return { price: 50, calories: 80} }

    calculatePrice() {
        return this.price * this.weight/100;
    }

    calculateCalories() {
        return this.calories * this.weight/100;
    }
}

class Caesar extends Salad {
    constructor(weight) {
        super(Salad.CAESAR.price, Salad.CAESAR.calories, weight);
        this.weight = weight;
    }
}

class Olivier extends Salad {
    constructor(weight) {
        super(Salad.OLIVIER.price, Salad.OLIVIER.calories, weight);
        this.weight = weight;
    }
}

class Drink {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    static get COFFEE() { return { price: 50, calories: 40} }
    static get COLA() { return { price: 50, calories: 20} }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}

class Coffee extends Drink {
    constructor() {
        super(Drink.COFFEE.price, Drink.COFFEE.calories);
    }
}

class Cola extends Drink {
    constructor() { 
        super(Drink.COLA.price, Drink.COLA.calories);
    }    
}

class Order {
    constructor(...items) {
        this.posCount = 0;
        this.positions = {};
        for(let item of items) {
            this.posCount++;
            this.positions[`pos${this.posCount}`] = item;
        }
        this.isPaid = false;
    }

    display() {
        console.log(this);
    }

    add(item) {
        if (Object.isFrozen(this)) {
            console.log("This order has been already paid and can no longer be altered");
            return
        }
        this.posCount++;
        this.positions[`pos${this.posCount}`] = item;
        console.log("item added");
    }

    delete(position) {
        if (Object.isFrozen(this)) {
            console.log("This order has been already paid and can no longer be altered");
            return
        }
        if (this.positions.hasOwnProperty(position)) {
            delete this.positions[position];
        } else {
            console.log("No such position in this order")
        }
    }

    calculateTotalPrice() {
        return Object.values(this.positions).reduce((prev, cur) => prev + cur.calculatePrice(), 0);
    }

    calculateTotalCalories() {
        return Object.values(this.positions).reduce((prev, cur) => prev + cur.calculateCalories(), 0);
    }

    pay() {
        this.isPaid = true;
        Object.freeze(this);
    }
}

let olivier = new Olivier(150);
let cola = new Cola();
let order1 = new Order(olivier, cola);
order1.display()
let coffee = new Coffee();
order1.add(coffee);
let hamburger = new Hamburger("SIZE_LARGE", "STUFFING_CHEESE");
order1.add(hamburger);
let hamburger_small = new Hamburger("SIZE_LARGE", "STUFFING_POTATO");
order1.add(hamburger_small);
console.log(order1.calculateTotalCalories());
console.log(order1.calculateTotalPrice());
console.log(order1.isPaid);
order1.add(cola);
order1.delete("pos2");
order1.display();
order1.pay();
order1.add(cola);
