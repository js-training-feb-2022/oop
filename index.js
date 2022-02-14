class FoodType {
  #price;
  #calories;
  #name;
  constructor(price, calories, name) {
    this.#price = price;
    this.#calories = calories;
    this.#name = name;
  }
  get calories() {
    return this.#calories;
  }
  get price() {
    return this.#price;
  }
  get name() {
    return this.#name;
  }
}
const SIZE_LARGE = new FoodType(100, 40, 'large');
const SIZE_SMALL = new FoodType(50, 20, 'small');
const STUFFING_CHEESE = new FoodType(10, 20, 'with cheese');
const STUFFING_SALAD = new FoodType(20, 5, 'with salad');
const STUFFING_POTATO = new FoodType(15, 10, 'with potatoes');
const TYPE_CESAR = new FoodType(100, 20, 'cesar');
const TYPE_OLIVIE = new FoodType(50, 80, 'olivie');
const TYPE_COKE = new FoodType(50, 40, 'Coca-Cola');
const TYPE_COFFEE = new FoodType(80, 20, 'coffee');

class OrderItem {
  constructor(name, type) {
    this.getName = () => name;
    this.getType = () => type;
  }
  calculatePrice() {
    return this.getType().price;
  }
  calculateCalories() {
    return this.getType().calories;
  }
}

class Salad extends OrderItem {
  constructor(title, weight) {
    const type = new FoodType((title.price * weight) / 100, (title.calories * weight) / 100, `${title.name} ${weight} gr.`);
    super('Salad', type);
  }
  static get TYPE_CESAR() {
    return TYPE_CESAR;
  }
  static get TYPE_OLIVIE() {
    return TYPE_OLIVIE;
  }
}
class Drink extends OrderItem {
  constructor(type) {
    super('Drink', type);
  }
  static get TYPE_COKE() {
    return TYPE_COKE;
  }
  static get TYPE_COFFEE() {
    return TYPE_COFFEE;
  }
}

class Hamburger extends OrderItem {
  constructor(size, stuffing) {
    const type = new FoodType(size.price + stuffing.price, size.calories + stuffing.calories, `${size.name} ${stuffing.name}`);
    super('Hamburger', type);
  }
  static get SIZE_SMALL() {
    return SIZE_SMALL;
  }
  static get SIZE_LARGE() {
    return SIZE_LARGE;
  }
  static get STUFFING_CHEESE() {
    return STUFFING_CHEESE;
  }
  static get STUFFING_SALAD() {
    return STUFFING_SALAD;
  }
  static get STUFFING_POTATO() {
    return STUFFING_POTATO;
  }
}

class Order {
  #payed = false;
  #order = [];
  getOrder() {
    this.#order.map((item, ind) => {
      console.log(`${ind + 1}) ${item.getName()} type: ${item.getType().name}`);
    });
  }
  calculatePrice() {
    return this.#order.reduce((sum, item) => sum + item.calculatePrice(), 0);
  }
  calculateCalories() {
    return this.#order.reduce((acc, item) => acc + item.calculateCalories(), 0);
  }
  showPrice() {
    console.log(`Total order price: ${this.calculatePrice()}`);
  }
  showCalories() {
    console.log(`Total order calories: ${this.calculateCalories()}`);
  }
  addHamburger(size, stuffing) {
    this.#addItem(new Hamburger(size, stuffing));
  }
  addSalad(name, weight) {
    this.#addItem(new Salad(name, weight));
  }
  addDrink(type) {
    this.#addItem(new Drink(type));
  }
  #addItem(item) {
    if (!this.#payed) {
      this.#order.push(item);
    } else {
      console.log("You've already payed! Please, make a new order.");
    }
  }
  deleteItem(index) {
    if (!this.#payed) {
      if (index > 0 && this.#order.length > index - 1) {
        console.log(`${this.#order[index - 1].getName()} is removed from order`);
        this.#order.splice(index - 1, 1);
      } else {
        console.log('Please enter a valid item index');
      }
    } else {
      console.log("You've already payed! Please, make a new order.");
    }
  }
  pay(money) {
    const price = this.calculatePrice();
    if (money >= price) {
      if (money > price) {
        console.log(`Your change is ${money - price}`);
      }
      this.#payed = true;
      console.log('Order is succesfull!');
    } else {
      console.log(`${money} is not enough. Damn you capitalism!`);
    }
  }
}

function restarauntSim() {
  const order = new Order();
  order.addDrink(Drink.TYPE_COKE);
  order.addHamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  order.addHamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
  order.addSalad(Salad.TYPE_CESAR, 300);
  order.getOrder();
  order.showCalories();
  order.showPrice();
  order.pay(100);
  order.deleteItem(1);
  order.addDrink(Drink.TYPE_COFFEE);
  order.getOrder();
  order.pay(1000);
  order.addDrink(Drink.TYPE_COKE);
}
restarauntSim();
