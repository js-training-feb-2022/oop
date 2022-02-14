class Beverage {
  constructor(item) {
    this.item = item;
  }

  getName() {
    return this.item.name;
  }

  calculatePrice() {
    return this.item.price;
  }

  calculateCalories() {
    return this.item.calories;
  }  
};

Beverage.COLA = {
  name: 'Cola',
  price: 50, 
  calories: 40
};
Beverage.COFFEE = {
  name: 'Coffee',
  price: 80, 
  calories: 20
};

export { Beverage };