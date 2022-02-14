let MenuItem = require('./menuItem').MenuItem;

function Drink(type) {
  MenuItem.call(this, type);
}

Drink.prototype = Object.create(MenuItem.prototype);
Drink.constructor = Drink;

Drink.TYPE_COLA = { name: 'cola', price: 50, calories: 40 };
Drink.TYPE_COFFEE = { name: 'coffee', price: 80, calories: 20 };

//Цена напитка
Drink.prototype.calculatePrice = function() {
  return this.getType().price;
};

//Калорийность
Drink.prototype.calculateCalories = function() {
  return this.getType().calories;
};

module.exports = {
  Drink: Drink
};