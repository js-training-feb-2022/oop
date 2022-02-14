let MenuItem = require('./menuItem').MenuItem,
    Error = require('./error').Error;

function Hamburger(size, stuffingName) {
  MenuItem.call(this, size);
  let stuffing = {};
  stuffing[stuffingName] = 1;
  this._stuffing = stuffing;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.constructor = Hamburger;

Hamburger.SIZE_SMALL = { name: 'Small Hamburger', price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { name: 'Big Hamburger', price: 100, calories: 40 };

Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

//Начинки
Hamburger.prototype.getStuffing = function() {
  return this._stuffing;
};


//Изменить или добавить начинку
Hamburger.prototype.changeStuffingCount = function(name, value) {
  let stuffing = this.getStuffing();
  if (value < 1 || countStuffingSum(stuffing) < 1) {
    throw new Error('Stuffing count can\'t be less then 1')
  } else {
    stuffing[name] = value || 1;
  }
};

//Цена гамбургера
Hamburger.prototype.calculatePrice = function() {
  let sum = this.getType().price;
  let stuffing = this.getStuffing();

  for (let key in stuffing) {
    let thisStuffItem = getStuffingByName(key);
    sum += thisStuffItem.price * stuffing[key];
  }
  return sum;
};

//Калорийность гамбургера
Hamburger.prototype.calculateCalories = function() {
  let sum = this.getType().calories;
  let stuffing = this.getStuffing();

  for (let key in stuffing) {
    let thisStuffItem = getStuffingByName(key);
    sum += thisStuffItem.calories * stuffing[key];
  }
  return sum;
};

let stuffingArray = {
  cheese: Hamburger.STUFFING_CHEESE,
  salad: Hamburger.STUFFING_SALAD,
  potato: Hamburger.STUFFING_POTATO
};

function getStuffingByName(name) {
  return stuffingArray[name];
}

function countStuffingSum(stuffing) {
  let sum = 0;
  for (let key in stuffing) {
    sum += stuffing[key];
  }
  return sum;
}

module.exports = {
  Hamburger: Hamburger
};