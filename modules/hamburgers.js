import CreateMenu from './extendClass.js';
import {store, storeHamburger} from "../Store/store.js";

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
        for (let i = 0; i < store.length; i++) {
            if(store[i].includes('SIZE_LARGE'))
                console.log(store[i].slice(store[i].indexOf('SIZE_LARGE'), store[i].indexOf('SIZE_LARGE')+1));
            if(store[i].includes('SIZE_SMALL'))
                console.log(store[i].slice(store[i].indexOf('SIZE_SMALL'), store[i].indexOf('SIZE_SMALL')+1));
        }
    }

    getStuffing() {
        const args = store.flat();
        for (let i = 0; i < args.length; i++) {
            for (const name in this.menu) {
                if (name === args[i])
                    storeHamburger.push(args[i]);
            }
        }

        for (let i = 0; i < storeHamburger.length; i++) {
            if(storeHamburger[i] !== 'SIZE_LARGE' && storeHamburger[i] !== 'SIZE_SMALL')
                console.log(storeHamburger[i]);
        }
    }
}
export default Hamburger;
