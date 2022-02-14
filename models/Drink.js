import { Dish } from './Dish.js';
import { drinkVariations } from '../menu.js';

export class Drink extends Dish {
    constructor(name) {
        super(name);
    }

    getName() {
        return this.name;
    }
    
    calculatePrice() {
        super.calculatePrice();
        return drinkVariations.name[this.getName()].price;
    }

    calculateCalories() {
        super.calculateCalories();
        return drinkVariations.name[this.getName()].calories;
    }
}