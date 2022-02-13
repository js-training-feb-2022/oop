const menu = {
    "hamburger": {
        "size": {
            "small": {
                "price": 50,
                "calories": 20
            },
            "big": {
                "price": 100,
                "calories": 40
            }
        },
        "stuffing": {
            "cheese": {
                "price": 10,
                "calories": 20
            },
            "salad": {
                "price": 20,
                "calories": 5
            },
            "potato": {
                "price": 50,
                "calories": 20
            }
        }
    },
    "salad": {
        "caesar": {
            "price": 100,
            "calories": 20
        },
        "olivier": {
            "price": 50,
            "calories": 80
        }
    },
    "drink":{
        "coffee": {
            "price": 80,
            "calories": 20
        },
        "cola": {
            "price": 50,
            "calories": 40
        }
    }
}



class Dish {
    constructor(stuffing, size){
        this.stuffing = stuffing;
        this.size = size;
    }
}
class Drink extends Dish {
    constructor(stuffing, size){
        super(stuffing, size);
        this.name = `${this.stuffing}`;
    }
    calculatePrice() {
        let stuffing = menu.drink[this.stuffing];
        let price = stuffing.price;
        return price;
    }
    calculateCalories() {
        let stuffing = menu.drink[this.stuffing];
        let calories = stuffing.calories;
        return calories;
    }
}

class Salad extends Dish {
    constructor(stuffing, size){
        super(stuffing, size);
        this.name = `${this.stuffing} salad`;
    }
    calculatePrice() {
        let stuffing = menu.salad[this.stuffing];
        let price = stuffing.price;
        return price * Number(this.size) / 100;
    }
    calculateCalories() {
        let stuffing = menu.salad[this.stuffing];
        let calories = stuffing.calories;
        return calories * Number(this.size) / 100;
    }
}


class Hamburger extends Dish {
    constructor(stuffing, size){
        super(stuffing, size);
        this.name = `${this.size} hamburger with ${this.stuffing}`;
    }
    calculatePrice() {
        let size = menu.hamburger.size[this.size];
        let stuffing = menu.hamburger.stuffing[this.stuffing];
        let totalPrice = size.price + stuffing.price;
        return totalPrice;
    }
    calculateCalories() {
        let size = menu.hamburger.size[this.size];
        let stuffing = menu.hamburger.stuffing[this.stuffing];
        let totalCalories = size.calories + stuffing.calories;
        return totalCalories;
    }
}









class Order {
    constructor() {
        this.listOfItems = [];
        this.isPaid = false;
    }
    addItem(item) {
        if (this.isPaid) {
            console.log("The order has already been paid, adding is not possible.");
            return;
        }
        this.listOfItems.push(item);
        console.log(`You added to your order ${item.name}.`);      
    }
    removeItem(item) {
        if (this.isPaid) {
            console.log("The order has already been paid, removing is not possible.");
            return;
        }
        if (!this.listOfItems.includes(item)){
            console.log("There is no same position in your order, removing is not possible.");
            return;
        }
        let list = this.listOfItems;
        let pos = list.indexOf(item);
        list = list.splice(pos, 1);
        console.log(`You removed from your order ${item.name}.`);   
    }
    calculatePrice(){
        let orderPrice = this.listOfItems.reduce((res, curr) => res += curr.calculatePrice(), 0);
        console.log(`Total cost: ${orderPrice} tugrics.`);
    }
    calculateCalories(){
        let orderCalories = this.listOfItems.reduce((res, curr) => res += curr.calculateCalories(), 0);
        console.log(`Total calories: ${orderCalories} ccal.`);
    }
    pay() {
        if(!this.isPaid) {
            this.isPaid = true;
            console.log("The order has been successfully paid.");
        } else {
            console.log("The order has already been paid, re-payment is not possible.");
        }
    }
}

let order = new Order();
let burger = new Hamburger("cheese", "big");
let cola = new Drink("cola");
let coffee = new Drink("coffee");
let salad = new Salad("caesar", "1000")

console.log(burger);
console.log(cola);
console.log(coffee);
console.log(order);
console.log(salad);

order.addItem(burger);
order.addItem(salad);
order.addItem(coffee);
order.removeItem(cola);
order.calculatePrice();
order.calculateCalories();
console.log(order);
order.pay();
order.pay();
console.log(order);
