import { MenuItem } from "./MenuItem.js"

const drinkList = ["COFFEE", "COLA"];

export class Drink extends MenuItem{
    constructor(name) {
        if (!name) {
            throw new Error("Enter drink name");
        }
        if (!drinkList.includes(name)) {
            throw new Error("No such drink on the menu!")
        }
        super(name);
        this.price = Drink[name].price;
        this.calories = Drink[name].calories;
    }

    static get COFFEE() { return { price: 50, calories: 40} }
    static get COLA() { return { price: 50, calories: 20} }

}