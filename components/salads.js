class Salad {
    constructor(price, calories, weight) {
        this.weight = weight;
        this.price = price;
        this.calories = calories;
    }

    static get CAESAR() { return { price: 100, calories: 20} }
    static get OLIVIER() { return { price: 50, calories: 80} }

    calculatePrice() {
        return this.price * this.weight/100;
    }

    calculateCalories() {
        return this.calories * this.weight/100;
    }
}

class Caesar extends Salad {
    constructor(weight) {
        super(Salad.CAESAR.price, Salad.CAESAR.calories, weight);
        this.weight = weight;
    }
}

class Olivier extends Salad {
    constructor(weight) {
        super(Salad.OLIVIER.price, Salad.OLIVIER.calories, weight);
        this.weight = weight;
    }
}

export { Caesar, Olivier }