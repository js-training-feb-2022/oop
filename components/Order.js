export class Order {
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
        console.log(`${item.name} added`);
    }

    delete(position) {
        if (Object.isFrozen(this)) {
            console.log("This order has been already paid and can no longer be altered");
            return
        }
        if (this.positions.hasOwnProperty(position)) {
            console.log(`${this.positions[position].name} has been deleted`)
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

    checkPaid() {
        return this.isPaid ? "Order has been paid" : "Order has not been paid";
    }

    pay() {
        this.isPaid = true;
        Object.freeze(this);
    }
}
