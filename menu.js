"use strict";

const DRINKS = {
    COFFEE: { price: 50, calories: 40 },
    COLA: { price: 50, calories: 20 }
}

const SALADS = {
    CAESAR: { price: 100, calories: 20},
    OLIVIER: { price: 50, calories: 80}
}

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        const SIZE_SMALL = { price: 50, calories: 20 }
        const SIZE_LARGE = { price: 100, calories: 40 }
        const STUFFING_CHEESE = { price: 10, calories: 20 }
        const STUFFING_SALAD = { price: 20, calories: 5 }
        const STUFFING_POTATO = { price: 15, calories: 10 }
    }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        let chargeSize;
        let chargeStuffing;
        switch(size) {
            case "small":
                chargeSize = SIZE_SMALL.price;
                break;
            case "large":
                chargeSize = SIZE_LARGE.price;
                break;
        }

        switch(stuffing) {
            case "cheese":
                chargeStuffing = STUFFING_CHEESE.price;
                break;
            case "salad":
                chargeStuffing = STUFFING_SALAD.price;
                break;
            case "potato":
                chargeStuffing = STUFFING_POTATO.price;
                break;
        }

        return chargeSize + chargeStuffing;
    }
}

class Salad {
    constructor(price, calories, weight) {
        this.weight = weight;
        this.price = price;
        this.calories = calories;
    }

    calculatePrice() {
        return this.price * this.weight/100;
    }

    calculateCalories() {
        return this.calories * this.weight/100;
    }
}

class Caesar extends Salad {
    constructor(weight) {
        super(SALADS.CAESAR.price, SALADS.CAESAR.calories, weight);
        this.weight = weight;
    }
}

class Olivier extends Salad {
    constructor(weight) {
        super(SALADS.OLIVIER.price, SALADS.OLIVIER.calories, weight);
        this.weight = weight;
    }
}

class Drink {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}

class Coffee extends Drink {
    constructor() {
        super(DRINKS.COFFEE.price, DRINKS.COFFEE.calories);
    }
}

class Cola extends Drink {
    constructor() { 
        super(DRINKS.COLA.price, DRINKS.COLA.calories);
    }    
}

class Order {
    constructor(...items) {
        this.items = items;
        this.totalPrice = this.calculateTotalPrice();
        this.totalCalories = this.calculateTotalCalories();
        this.isPaid = false;
    }

    add(item) {
        if (Object.isFrozen(this)) {
            console.log("This order has been already paid and can no longer be altered");
            return
        }
        this.items.push(item);
    }

    delete(position) {
        if (Object.isFrozen(this)) {
            console.log("This order has been already paid and can no longer be altered");
            return
        }
        this.items.splice(position, 1);
    }

    calculateTotalPrice() {
        return this.items.reduce((prev, cur) => prev + cur.calculatePrice(), 0);
    }

    calculateTotalCalories() {
        return this.items.reduce((prev, cur) => prev + cur.calculateCalories(), 0)
    }

    pay() {
        this.isPaid = true;
        Object.freeze(this);
    }
}

let olivier = new Olivier(150);
let cola = new Cola();
let order1 = new Order(olivier, cola);
console.log(olivier);
console.log(cola);
console.log(order1);
console.log(order1.calculateTotalCalories());
let coffee = new Coffee();
order1.add(coffee);
console.log(order1.calculateTotalPrice());
order1.pay();
console.log(order1.isPaid);
order1.add(cola);
console.log(order1.items);

