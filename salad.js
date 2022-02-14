let MenuItem = require('./menuItem').MenuItem,
    Error = require('./error').Error;

function Salad(type, weight) {
  MenuItem.call(this, type);
  this._weight = weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.constructor = Salad;

//Цена и калории указаны за 100г

Salad.TYPE_CAESAR = { name: 'caesar', price: 100, calories: 20 };
Salad.TYPE_OLIVE = { name: 'olive', price: 50, calories: 80 };

//Вес салата
Salad.prototype.getWeight = function() {
  return this._weight;
};

//Изменить вес салата
Salad.prototype.changeWeight = function(value) {
  if (value > 100) {
    this._weight = value
  } else {
    throw new Error('Weight less than 100g');
  }
};

//Цена за 100г

Salad.prototype.calculatePrice = function() {
  let thisType = this.getType();
  let pricePerGram = thisType.price / 100;

  return pricePerGram * this.getWeight();
};

//Калорийность за 100г
Salad.prototype.calculateCalories = function() {
  let thisType = this.getType();
  let caloriesPerGram = thisType.calories / 100;

  return caloriesPerGram * this.getWeight();
};

module.exports = {
  Salad: Salad
};