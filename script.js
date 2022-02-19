let { log } = console;

const SIZE_SMALL = {param: "SIZE_SMALL", price: 50, calories: 20 };
const SIZE_LARGE = {param: "SIZE_LARGE", price: 100, calories: 40 };
const STUFFING_CHEESE = {param: "STUFFING_CHEESE", price: 10, calories: 20 };
const STUFFING_SALAD = {param: "STUFFING_SALAD", price: 20, calories: 5 };
const STUFFING_POTATO = {param: "STUFFING_POTATO", price: 15, calories: 10 };
const SALAD_CAESAR = {param: "SALAD_CAESAR", weight: 100, price: 100, calories: 20};
const SALAD_OLIVIE = {param: "SALAD_OLIVIE", weight: 100, price: 50, calories: 80};
const DRINK_COKE = {param: "DRINK_COKE", price: 50, calories: 40 };
const DRINK_COFFEE = {param: "DRINK_COFFEE", price: 80, calories: 20 };

class Dish {
  constructor(...args) {
    this.args = args;
  }
  get price() {
    if (this.weight) {
      return (this.weight / this.portion) * this.args[0].price;
    } else {
        log(this.args)
      return this.args
        .map((item) => {
          return item.price;
        })
        .reduce((sum, el) => sum + el, 0);
    }
  }
  get calories() {
      if (this.weight) {
          return (this.weight / this.portion) * this.args[0].calories;
      } else {
        return this.args.map((item) => {
        return item.calories;
      })
      .reduce((sum, el) => sum + el, 0);
      }
   
  }
  get name() {
    return this.args.map((item) => {
      if (item.param) {
        return item.param;
      }
    });
  }
}

class Hamburger extends Dish {
  constructor(size, stuffing) {
    super(size, stuffing);
    this.size = size.param;
    this.stuffing = stuffing.param;
  }
  getSize() {
    log(`${this.name} size is ${this.size}`);
  }
  getStuffing() {
    log(`${this.name} stuffing is ${this.stuffing}`);
  }
  calculatePrice() {
    log(`${this.name} price is ${this.price}`);
  }
  calculateCalories() {
    log(`${this.name} calories is ${this.calories}`);
  }
}

class Salad extends Dish {
  constructor(name, weight) {
    super(name);
    this.weight = weight;
    this.portion = 100;
  }
  calculatePrice() {
    log(`${this.name} price is ${this.price}`);
  }
  calculateCalories() {
    log(`${this.name} calories is ${this.calories}`);
  }
}

class Drink extends Dish {
  constructor(data) {
    super(data);
  }
}

class Order {
  constructor() {
    this.price = 0;
    this.calories = 0;
    this.list = [];
  }

  addItem(item) {
    if (Object.isFrozen(this)) {
      log("Cannot to change paid order");
    } else {
      this.list.push(item);
      log(`You add ${item.name} in a list`);
    }
  }

  removeItem(item) {
    if (Object.isFrozen(this)) {
      log("Cannot to change paid order");
    } 
    if (Number.isInteger(item)) {
        log(`${this.list[item].name } is removed`);
        this.list.splice(item, 1);
    } else if (this.list.includes(item)) {
      log(`${item.name} is removed`);
      this.list.splice(this.list.indexOf(item), 1);
    } else {
      log("This item isn't ordered, yet");
    }
    viewCalories();
    viewPrice();
  }

  calculateCalories() {
    let res = this.list
      .map((el) => {
        return el.calories;
      })
      .reduce((total, item) => total + item, 0);
    log(`There are ${res} calories in this order`);
    return res;
  }

  calculatePrice() {
    let res = this.list
      .map((el) => {
        log(el);
        return el.price;
      })
      .reduce((total, item) => total + item, 0);
    log(`There are ${res} tugriks for this order`);
    return res;
  }

  pay() {
    log("This order is paid");
    Object.freeze(this);
  }
}

/* --------------------------------------------- */

let buttons = document.querySelectorAll('button');
let weight = document.querySelector("#weight_input");
let mainScreen = document.querySelector(".checker");
let hamSizeScreen = document.querySelector(".hamSize");
let stuffingScreen = document.querySelector(".hamStuffing");
let saladScreen = document.querySelector('.saladChecker');
let saladWeightScreen = document.querySelector('.saladWeight');
let drinkScreen = document.querySelector('.drinkChecker');
let OrderList = document.querySelector('.orderList');
let finalCalories = document.querySelector('.finalCalories');
let finalPrice = document.querySelector('.finalPrice');

let order = new Order();

function createHamburger(data) {
    order.addItem(new Hamburger(data[0], data[1]));
    let li = document.createElement('li');
    OrderList.append(li);
    li.append(`You add ${ data[0].param }, ${ data[1].param } in a list`);
    viewCalories();
    viewPrice();
}

function createSalad (data) {
    order.addItem(new Salad(data[0], data[1]));
    let li = document.createElement('li');
    OrderList.append(li);
    li.append(`You add ${ data[0].param }, ${ data[1] } in a list`);
    viewCalories();
    viewPrice();
}

function createDrink (data) {
    order.addItem(new Drink(...data));
    let li = document.createElement('li');
    OrderList.append(li);
    li.append(`You add ${ data[0].param } in a list`);
    viewCalories();
    viewPrice();
}

function viewCalories() {
    finalCalories.innerHTML = `${ order.calculateCalories() }`; 
}

function viewPrice() {
    finalPrice.innerHTML = `${ order.calculatePrice() }`;
}

let arr = [];

addEventListener("click", function (e) {
    function arrCheck () {
        if(arr.length != 0) {
        arr = [];
    }
    } 
  if (e.target.classList.contains("Hamburger")) {
    mainScreen.classList.toggle("visible");
    hamSizeScreen.classList.toggle("visible");
  } else if (e.target.classList.contains("bigHamburger")) {
    arrCheck();
    arr.push(SIZE_LARGE);
    hamSizeScreen.classList.toggle("visible");
    stuffingScreen.classList.toggle("visible");
  } else if (e.target.classList.contains("smallHamburger")) {
    arrCheck();
    arr.push(SIZE_SMALL);
    hamSizeScreen.classList.toggle("visible");
    stuffingScreen.classList.toggle("visible");
  } else if (e.target.classList.contains("addCheese")) {
    stuffingScreen.classList.toggle("visible");
    mainScreen.classList.toggle("visible");
    arr.push(STUFFING_CHEESE);
    createHamburger(arr);
  } else if (e.target.classList.contains("addPotato")) {
    arr.push(STUFFING_POTATO);
    createHamburger(arr);
    stuffingScreen.classList.toggle("visible");
    mainScreen.classList.toggle("visible");
  } else if (e.target.classList.contains("addSalad")) {
    arr.push(STUFFING_SALAD);
    createHamburger(arr);
    stuffingScreen.classList.toggle("visible");
    mainScreen.classList.toggle("visible")
  } else if (e.target.classList.contains("Salad")) {
    mainScreen.classList.toggle('visible');
    saladScreen.classList.toggle('visible')
  } else if (e.target.classList.contains("caesar")) {
    arrCheck();
    arr.push(SALAD_CAESAR);
    saladWeightScreen.classList.toggle('visible');
    saladScreen.classList.toggle('visible');
  } else if (e.target.classList.contains("olivie")) {
    arrCheck();
    arr.push(SALAD_OLIVIE);
    saladWeightScreen.classList.toggle('visible');
    saladScreen.classList.toggle('visible');
  } else if (e.target.classList.contains("saladWeightButton")) {
    if (weight.value != '') {
        arr.push(weight.value);
        createSalad(arr);
        saladWeightScreen.classList.toggle('visible');
        mainScreen.classList.toggle("visible");
        weight.value = '';
    } else {
        log('salad weight is empty');
    }
  } else if (e.target.classList.contains("Drink")) {
    mainScreen.classList.toggle("visible");
    drinkScreen.classList.toggle('visible')
  } else if(e.target.classList.contains("coke")) {
    arrCheck();
    arr.push(DRINK_COKE);
    createDrink(arr);
    mainScreen.classList.toggle("visible");
    drinkScreen.classList.toggle('visible')
  } else if(e.target.classList.contains("coffee")) {
    arrCheck();
    arr.push(DRINK_COFFEE);
    createDrink(arr);
    mainScreen.classList.toggle("visible");
    drinkScreen.classList.toggle('visible')
  } else if (e.target.tagName == 'LI')  {
      if (!Object.isFrozen(order)) {
        let node = e.target.parentNode;
        let index = [...node.children].indexOf(e.target) - 1;
        order.removeItem(index);
        e.target.remove();
      }
  } else if (e.target.classList.contains("payButton")) {
      order.pay();
      buttons.forEach(el => {
          el.setAttribute('disabled', true);
      });
  }
});