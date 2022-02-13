import store from '../Store/store.js';

class CreateMenu {
    constructor() {
        this.priceCounter = 0;
        this.caloriesCounter = 0;
        this.menu = this;
        this.positions = [];
    }

    calculatePrice(...args) {
        for (let i = 0; i < args.length; i++) {
            for (const name in this.menu){
                if (name === args[i])
                    this.priceCounter += this.menu[name].price;
            }
        }
        return console.log(this.priceCounter);
    }

    calculateCalories(...args) {
        for (let i = 0; i < args.length; i++){
            for (const name in this.menu){
                if (name === args[i])
                    this.caloriesCounter += this.menu[name].calories;
            }
        }
        return console.log(this.caloriesCounter);
    }

    addPositions() {
        if (Object.isFrozen(this.positions))
            return console.log(this.positions);
        for (let i = 0; i < arguments.length; i++) {
            this.positions.push(arguments[i]);
        }
        return this.positions;
    }

    removePositions() {
        if (Object.isFrozen(this.positions) || this.positions === [])
            return console.log(this.positions);
        for (let i = 0; i < arguments.length; i++) {
            for (let j = 0; j < this.positions.length; j++) {
                if (arguments[i] === this.positions[j])
                    this.positions.splice(j, 1);
            }
        }
        return this.positions;
    }

    payPositions() {
        Object.freeze(this.positions);
        store.push(this.positions);
    }
}

export default CreateMenu;
