import CreateMenu from './extendClass.js';

class Beverages extends CreateMenu {
    constructor() {
        super();
        this.menu = Beverages;
    }

    static COLA = {
        price: 50,
        calories: 40
    };

    static COFFEE = {
        price: 80,
        calories: 20
    };
}
export default Beverages;
