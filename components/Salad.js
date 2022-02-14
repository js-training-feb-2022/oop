import { MenuItem } from "./MenuItem.js"

const saladList = ["CAESAR", "OLIVIER"];

export class Salad extends MenuItem {
    constructor(name, weight = 100) {
        if (!name) {
            throw new Error("Enter salad name!");
        } else if (!saladList.includes(name)) {
            throw new Error("No such salad on the menu!");
        }

        super(name);
        this.weight = weight;
        this.price = Salad[name].price;
        this.calories = Salad[name].calories;
    }

    static get CAESAR() { return { price: 100, calories: 20} }
    static get OLIVIER() { return { price: 50, calories: 80} }

    calculatePrice() {
        return this.price * this.weight/100;
    }

    calculateCalories() {
        return this.calories * this.weight/100;
    }

    getWeight() {
        return this.weight;
    }
}