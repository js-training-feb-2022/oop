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
        if (this.positions.length === 0) return console.log('First you need to order');
        for (let i = 0; i < this.positions.length; i++) {
            if(this.positions[i] === 'SIZE_LARGE' || this.positions[i] === 'SIZE_SMALL')
                console.log(this.positions[i]);
        }
    }

    getStuffing() {
        if (this.positions.length === 0) return console.log('First you need to order')
        for (let i = 0; i < this.positions.length; i++) {
            if(this.positions[i] !== 'SIZE_LARGE' && this.positions[i] !== 'SIZE_SMALL')
                console.log(this.positions[i]);
        }
    }
}
export default Hamburger;
