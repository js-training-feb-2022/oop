import { Dish } from './Dish.js';
import { hamburgerVariations  } from '../menu.js';

export class Hamburger extends Dish {
    constructor (name, size, stuffing) {
        super(name);
        this.size = size;
        this.stuffing = stuffing;
    }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        super.calculatePrice();
        return hamburgerVariations.size[this.getSize()].price + hamburgerVariations.stuffing[this.getStuffing()].price;
    }

    calculateCalories() {
        super.calculateCalories();
        return hamburgerVariations.size[this.getSize()].calories + hamburgerVariations.stuffing[this.getStuffing()].calories;
    }
}