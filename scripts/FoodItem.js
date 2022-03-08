class FoodItem {
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

export { FoodItem };