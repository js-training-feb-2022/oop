import { MenuItem } from "./MenuItem.js";

const sizeList = ["SIZE_SMALL", "SIZE_LARGE"];
const stuffingList = ["STUFFING_CHEESE", "STUFFING_SALAD", "STUFFING_POTATO"];

export class Hamburger extends MenuItem {
    constructor(size, stuffing) {
        if (arguments.length !== 2) {
            throw new Error("You need to choose size and stuffing!")
        }
        
        if (!sizeList.includes(size)) {
            throw new Error("No such size on the menu!")
        } else if (!stuffingList.includes(stuffing)) {
            throw new Error("No such stuffing on the menu!")
        }

        super(`${size.slice(5)} HAMBURGER with ${stuffing.slice(9)}`);
        this.size = size;
        this.stuffing = stuffing;
        this.price = this.calculatePrice();
        this.calories = this.calculateCalories();
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