import {store} from '../Store/store.js';

class CreateMenu {
    constructor() {
        this.priceCounter = 0;
        this.caloriesCounter = 0;
        this.menu = this;
        this.positions = [];
    }

    calculatePrice() {
        this.priceCounter = 0;
        const arg = store.flat(2);

        for (let i = 0; i < arg.length; i++) {
            for (const name in this.menu) {
                if (name === arg[i])
                    this.priceCounter += this.menu[name].price;
            }
        }
        return this.priceCounter;
    }

    calculateCalories() {
        const arg = store.flat(2);
        this.caloriesCounter = 0;

        for (let i = 0; i < arg.length; i++) {
            for (const name in this.menu) {
                if (name === arg[i]){
                    this.caloriesCounter += this.menu[name].calories;
                    this.positions.push(arg[i]);
                }
            }
        }
        return this.caloriesCounter;
    }
}

export default CreateMenu;
