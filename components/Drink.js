import { MenuItem } from "./MenuItem.js"

export class Drink extends MenuItem{
    constructor(name, price, calories) {
        super(name);
        this.price = Drink[name].price;
        this.calories = Drink[name].price;
    }

    static get COFFEE() { return { price: 50, calories: 40} }
    static get COLA() { return { price: 50, calories: 20} }

}