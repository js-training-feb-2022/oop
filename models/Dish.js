export class Dish {
    constructor(name) {
        this.name = name;
    }

    calculatePrice() {
        console.log(`Calculating ${this.name} price...`);
    }

    calculateCalories() {
        console.log(`Calculating ${this.name} calories...`);
    }
}