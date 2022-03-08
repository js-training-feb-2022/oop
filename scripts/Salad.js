import { FoodItem } from './FoodItem.js';

class Salad extends FoodItem{

  constructor(type, weight) {
    super(type);
    this.weight = weight;
  }

  getName() {
    return `${super.getName()} ${this.weight}gr`;
  }

  calculatePrice() {
    return super.calculatePrice() * this.weight / 100;
  }

  calculateCalories() {
    return super.calculateCalories() * this.weight / 100;
  }

}

Salad.OLIVIE = {
  name: 'Olivie',
  price: 50, 
  calories: 80
};
Salad.CEASAR = {
  name: 'Ceasar',
  price: 100, 
  calories: 20
};

export { Salad };