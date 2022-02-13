import CreateMenu from './extendClass.js';

class Hamburger extends CreateMenu {
    constructor() {
        super();
        this.menu = Hamburger;
    }

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };

    static SIZE_LARGE = {
        price: 100,
        calories: 40
    };
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }

    getSize() {
        let result = [...(new Set(arguments))];
        return console.log(result.join(''));
    }

    getStuffing(...stuffing) {
        let result = new Set(stuffing);
        return console.log([...result].join(' '));
    }

    calculatePrice(...arg) {
        const args = [...(new Set(arg))];
        super.calculatePrice(...args);
    }

    calculateCalories(...arg) {
        const args = [...(new Set(arg))];
        super.calculateCalories(...args);
    }
}
export default Hamburger;
