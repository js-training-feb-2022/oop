export class MenuItem {
    constructor(name) {
        this.name = name;
        this.price = null;
        this.calories = null;
    }

    getName() {
        return this.name;
    }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
    
}