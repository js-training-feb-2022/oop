import { FoodItem } from './FoodItem.js';

class Hamburger {
  constructor(size, stuffing) {
    this.size = new FoodItem(size);
    this.stuffing = new FoodItem(stuffing);
  }

  getName() {
    return `${this.size.getName()} hamburger with ${this.stuffing.getName()}`;
  }

  calculatePrice() {
    return this.size.calculatePrice() + this.stuffing.calculatePrice();
  }

  calculateCalories() {
    return this.size.calculateCalories() + this.stuffing.calculateCalories();
  }

}

Hamburger.SIZE_SMALL = {
  name: 'Small',
  price: 50, 
  calories: 20
};
Hamburger.SIZE_LARGE = {
  name: 'Big',
  price: 100, 
  calories: 40
};
Hamburger.STUFFING_CHEESE = {
  name: 'cheese',
  price: 10, 
  calories: 20
};
Hamburger.STUFFING_SALAD = {
  name: 'salad',
  price: 20, 
  calories: 5
};
Hamburger.STUFFING_POTATO = {
  name: 'potatoes',
  price: 15, 
  calories: 10
};

export { Hamburger };