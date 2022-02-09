class Drink {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    static get COFFEE() { return { price: 50, calories: 40} }
    static get COLA() { return { price: 50, calories: 20} }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}

class Coffee extends Drink {
    constructor() {
        super(Drink.COFFEE.price, Drink.COFFEE.calories);
    }
}

class Cola extends Drink {
    constructor() { 
        super(Drink.COLA.price, Drink.COLA.calories);
    }    
}

export { Coffee, Cola }