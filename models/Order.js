const checkForAvailability = (item, arr) => arr.includes(item);

export class Order {
    constructor() {
        this.price = 0;
        this.calories = 0;
        this.isPaid = false;
        this.orderList = [];
    }

    addToOrder(dish) {
        if (this.isPaid) {
            console.log('Cannot add new positions. Order is already paid!')
        } else {
            this.orderList.push(dish);
            this.price += dish.calculatePrice();
            this.calories += dish.calculateCalories();
        }
    }

    removeFromOrder(dish) {
        if (this.isPaid) {
            console.log('Cannot remove positions. Order is already paid!')
        } else if (checkForAvailability(dish, this.orderList)) {
            const positionInBill = this.orderList.indexOf(dish);
            this.orderList = this.orderList.filter((item, i) => i !== positionInBill);
            this.price -= dish.calculatePrice();
            this.calories -= dish.calculateCalories();
        } else {
            console.log('This dish was not ordered!');
        }
    }

    pay() {
        this.isPaid = true;
    }
}