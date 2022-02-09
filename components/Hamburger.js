export class Hamburger {
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