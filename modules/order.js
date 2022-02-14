import {store} from "../Store/store.js";
import Hamburger from './hamburgers.js'
import Salads from "./salads.js";
import Beverages from "./beverages.js";
import CreateMenu from "./extendClass.js";

class Order extends CreateMenu {
    constructor() {
        super();
        this.isPay = false;
        this.hamburger = new Hamburger();
        this.salads = new Salads();
        this.drinks = new Beverages();
    }

    addPositions(...args) {
        if (this.isPay === true)
            return console.log('cant add');
        store.push(...args);
    }

    calculateCalories() {
        this.caloriesCounter = 0;
        this.caloriesCounter = this.hamburger.calculateCalories() + this.salads.calculateCalories() + this.drinks.calculateCalories();
        return console.log(this.caloriesCounter);
    }

    calculatePrice() {
        this.priceCounter = 0;
        this.priceCounter = this.hamburger.calculatePrice() + this.salads.calculatePrice() + this.drinks.calculatePrice();
        return console.log(this.priceCounter);
    }


    removePositions(item) {
        if (this.isPay === true || store === [])
            return store;

        for (let j = 0; j < store.length; j++) {
            if (store[j].includes(item)) {
                store[j].splice(store[j].indexOf(item), 1);
                break;
            }
        }
        return store;
    }

    payPositions() {
        this.isPay = true;
        console.log(store);
        console.log('Total Price:');
        this.calculatePrice();
        console.log('\nTotal Calories:');
        this.calculateCalories();
    }
}

export default Order;
