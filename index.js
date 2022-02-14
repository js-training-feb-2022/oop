
const menuParams = {
    'HAMBURGER_SIZE_SMALL': {price: 50, calories: 20},
    'HAMBURGER_SIZE_LARGE': {price: 100, calories: 40},
    'STUFFING_CHEESE': {price: 10, calories: 20},
    'STUFFING_SALAD': {price: 20, calories: 5},
    'STUFFING_POTATO': {price: 15, calories:10},
    'CAESAR': {price: 100, calories: 20},
    'OLIVIER': {price: 50, calories: 80},
    'COKE': {price: 50, calories: 40},
    'COFFEE': {price: 80, calories: 20}
};

class MenuItem {
    constructor(menuItem) {
        this.menuItem = menuItem;
    }

    getmenuItem() {
        return this.menuItem;
    }

    calculatePrice() {
        return menuParams[this.menuItem].price;
    }

    calculateCalories() {
        return menuParams[this.menuItem].calories;
    }    
}

class Hamburger extends MenuItem {
    constructor(menuItem, stuffing) {
        super(menuItem);
        this.stuffing = stuffing;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        return super.calculatePrice() + menuParams[this.stuffing].price;
    }

    calculateCalories() {
        return super.calculateCalories() + menuParams[this.stuffing].calories;
    }    
}

class Salad extends MenuItem {    
    constructor(menuItem, weight) {
        super(menuItem);
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    calculatePrice() {
        return super.calculatePrice() * this.weight / 100;
    }
    
    calculateCalories() {
        return super.calculateCalories() * this.weight / 100;
    }    
}

class Drink extends MenuItem {
    constructor(menuItem) {
        super(menuItem);
    }
}

class Order {
    constructor(...items) {
        this.isPaid = false;
        this.orderList = [...items];
    }

    addItem(item) {
        if (item.getmenuItem().startsWith('HAMBURGER') && !item.getStuffing()) {
            console.log(`Please choose stuffing! Can't add item ${item.getmenuItem()}`);
            return null
        }

        if (!this.isPaid) {
            this.orderList.push(item);
            let message = `Added item ${item.getmenuItem()}`;
            console.log(message);
            return message;
        } else {
            let message = `The order is paid, can't add item ${item.getmenuItem()}`;
            console.log(message);
            return message;
        }
    }
    
    removeItem(item) {
        if (!this.isPaid) {
            let removeIndex = this.orderList.indexOf(item);
            if (removeIndex === -1) {
                let message = `There is no ${item.getmenuItem()} in your order. Can't remove it!`;
                console.log(message);
                return message;
            } else {
                this.orderList.splice(removeIndex, 1);
                let message = `Deleted item ${item.getmenuItem()}`;
                console.log(message);
                return message;
            }
        } else {
            let message = `The order is paid, can't delete item ${item.getmenuItem()}`;
            console.log(message);
            return message;
        }
    }

    calculateOrderPrice() {
        let orderCost = 0;
    
        this.orderList.forEach(item => {
            orderCost += item.calculatePrice();
        });

        console.log(`Your order costs ${orderCost}`);
        return orderCost;
    }

    calculateOrderCalories() {
        let calories = 0;
    
        this.orderList.forEach(item => {
            calories += item.calculateCalories();
        });

        console.log(`Your order has ${calories} calories`);

        return calories;
    }
    
    pay() {
        this.isPaid = true;
        let message = 'Order is paid';
        console.log(message);
    }

    printCurrentOrder() {
        console.log(this.orderList);
    }
}

const order = new Order();
const burger1 = new Hamburger('HAMBURGER_SIZE_LARGE', 'STUFFING_CHEESE');
const burger2 = new Hamburger('HAMBURGER_SIZE_SMALL', 'STUFFING_POTATO');
const burger3 = new Hamburger('HAMBURGER_SIZE_LARGE', 'STUFFING_SALAD');
const coke = new Drink('COKE');
const salad1 = new Salad('OLIVIER', 200);
const salad2 = new Salad('CAESAR', 150);

order.addItem(burger2);
order.addItem(burger3);
order.addItem(salad1);
order.addItem(coke);
order.removeItem(salad2);
order.removeItem(burger3);
order.pay();
order.removeItem(burger1);
order.removeItem(burger2);
order.addItem(coke);
order.calculateOrderPrice();
order.calculateOrderCalories();
order.printCurrentOrder();
