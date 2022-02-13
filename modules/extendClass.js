import {store, priceStore, caloriesStore} from '../Store/store.js';

class CreateMenu {
    constructor() {
        this.priceCounter = 0;
        this.caloriesCounter = 0;
        this.menu = this;
        this.positions = [];
    }

    calculatePrice(...args) {
        const arg = args.flat();

        for (let i = 0; i < arg.length; i++) {
            for (const name in this.menu){
                if (name === arg[i])
                    this.priceCounter += this.menu[name].price;
            }
        }
        return this.priceCounter;
    }

    calculateCalories(...args) {
        const arg = args.flat();

        for (let i = 0; i < arg.length; i++){
            for (const name in this.menu){
                if (name === arg[i])
                    this.caloriesCounter += this.menu[name].calories;
            }
        }
        return this.caloriesCounter;
    }

    addPositions(...args) {
        const arg = args.flat();

        if (Object.isFrozen(this.positions))
            return console.log(this.positions);
        for (let i = 0; i < arg.length; i++) {
            this.positions.push(arg[i]);
        }
        return this.positions;
    }

    removePositions(...args) {
        if (Object.isFrozen(this.positions) || this.positions === [])
            return console.log(this.positions);
        let arg = args.flat();

        for (let i = 0; i < arg.length; i++) {
            for (let j = 0; j < this.positions.length; j++) {
                if (arg[i] === this.positions[j]){
                    this.positions.splice(j, 1);
                    break;
                }
            }
        }
        return this.positions;
    }

    payPositions() {
        Object.freeze(this.positions);
        store.push(this.positions);
        priceStore.push(this.calculatePrice(this.positions))
        caloriesStore.push(this.calculateCalories(this.positions))
    }
}

export default CreateMenu;
