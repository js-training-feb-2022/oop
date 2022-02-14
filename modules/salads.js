import CreateMenu from './extendClass.js';

class Salads extends CreateMenu {
    constructor() {
        super();
        this.menu = Salads;
    }

    static CEZAR =
        {
            price: 100,
            calories: 20
        };

    static OLIVIE = {
        price: 50,
        calories: 80
    };
}

export default Salads;
