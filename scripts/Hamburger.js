class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  getName() {
    return `${this.size.name} hamburger with ${this.stuffing.name}`;
  }

  calculatePrice() {
    return this.size.price + this.stuffing.price;
  }

  calculateCalories() {
    return this.size.calories + this.stuffing.calories;
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