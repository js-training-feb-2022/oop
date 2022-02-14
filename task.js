// you can see an example of interaction with the order at the end of the file

class Item {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    calculatePrice() {
        throw new Error("abstract method");
    }

    calculateCalories() {
        throw new Error("abstract method");
    }
}

class HamburgerStuffing {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    getPrice() {
        return this.price;
    }

    getCalories() {
        return this.calories;
    }
}

const cheese = new HamburgerStuffing(10, 20);
const salad = new HamburgerStuffing(20, 5);
const potato = new HamburgerStuffing(15, 10);

class Hamburger extends Item {
    constructor(price, calories, stuffing) {
        super(price, calories);

        this.stuffings = [stuffing];
    }

    calculatePrice() {
        return this.price + this.stuffings.map(s => s.getPrice()).reduce((total, price) => total + price);
    }

    calculateCalories() {
        return this.price + this.stuffings.map(s => s.getCalories()).reduce((total, price) => total + price);
    }

    addStuffing(stuffing) {
        this.stuffings.push(stuffing);
    }
}

class SmallHamburger extends Hamburger {
    constructor(stuffing) {
        super(50, 20, stuffing);
    }
}


class BigHamburger extends Hamburger {
    constructor(stuffing) {
        super(100, 40, stuffing);
    }
}

class Salad extends Item {
    constructor(price, calories, weight) {
        super(price, calories);

        this.weight = weight;
    }

    calculatePrice() {
        return this.price * (this.weight / 100);
    }

    calculateCalories() {
        return this.calories * (this.weight / 100);
    }
}

class Caesar extends Salad {
    constructor(weight) {
        super(100, 20, weight);
    }
}

class Olivier extends Salad {
    constructor(weight) {
        super(50, 80, weight);
    }
}

class Drink extends Item {
    constructor(price, calories) {
        super(price, calories);
    }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}

const cola = new Drink(50, 40);
const coffee = new Drink(80, 20);

class Order {
    constructor() {
        this.items = [];
        this.isPaid = false;
    }

    addItem(item) {
        if (this.isPaid) {
            throw new Error("can not add item to paid order")
        }

        this.items.push(item);
    }

    removeItem(number) {
        if (this.isPaid) {
            throw new Error("can not remove item from paid order")
        }
        if(this.items.length === 0) {
            throw new Error("can not remove item from empty order")
        }
        this.items.splice(number, 1);
    }

    getNumberedItems() {
        let numberedItems = {};
        for (let i = 0; i < this.items.length; i++) {
            numberedItems[i] = this.items[i];
        }
        return numberedItems;
    }

    getPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.items.length; i++) {
            totalPrice += this.items[i].calculatePrice();
        }
        return `Стоимость заказа: ${totalPrice} тугриков`;
    }

    getCalories() {
        let totalCalories = 0;
        for (let i = 0; i < this.items.length; i++) {
            totalCalories += this.items[i].calculateCalories();
        }
        return `Калорийность заказа: ${totalCalories} ккал`;
    }

    pay() {
        this.isPaid = true;
        Object.freeze(this.items);
    }
}

// example

let order = new Order();
const hamburger = new SmallHamburger(salad);
hamburger.addStuffing(cheese);
order.addItem(hamburger);
order.addItem(new Olivier(150));
order.addItem(coffee);
order.addItem(cola);

console.log(order.getNumberedItems());

order.removeItem(3);

console.log(order.getNumberedItems());

order.pay();

// after payment will raise an error.
// order.removeItem(0);

console.log(order.getPrice());
console.log(order.getCalories());

 