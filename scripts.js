const hamburgerSmall = {name: 'small', price: 50, calories: 20};
const hamburgerBig = {name: 'big', price: 100, calories: 40};

const stuffingCheese = {name: 'cheese', price: 10, calories: 20};
const stuffingSalad = {name: 'salad', price: 20, calories: 5};
const stuffingPotato = {name: 'potato', price: 15, calories: 10};

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing;
  }

  calculatePrice() {
    let sum = this.getSize().price;
    sum += this.getStuffing().price;
    return sum;
  }

  calculateCalories() {
    let calor = this.getSize().calories;
    calor += this.getStuffing().calories;
    return calor;
  } 
}
