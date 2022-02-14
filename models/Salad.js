import { Dish } from './Dish.js';
import { saladVariations  } from '../menu.js';

export class Salad extends Dish {
    constructor(name, weight) {
        super(name);
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    calculatePrice() {
        super.calculatePrice();
        return saladVariations.name[this.getName()].price * (this.getWeight() / 100);
    }

    calculateCalories() {
        super.calculateCalories();
        return saladVariations.name[this.getName()].calories * (this.getWeight() / 100);
    }
}