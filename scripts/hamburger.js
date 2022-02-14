function Hamburger(size, filler) {
  this.filler = new Filler(filler);
  Position.call(this, size);
}

Hamburger.prototype = Object.create(Position.prototype);
const hamburgerSize = {};
hamburgerSize.small = {
  name: "Маленький",
  calories: 20,
  price: 50,
};

hamburgerSize.big = {
  name: "Большой",
  calories: 40,
  price: 100,
};
/**
 * Узнать имя гамбургера
 */
Hamburger.prototype.getName = function () {
  return this.name + " гамбургер с " + this.filler.getName();
};

Hamburger.prototype.getCalories = function () {
  return this.calories + this.filler.getCalories();
};

Hamburger.prototype.getPrice = function () {
  return this.price + this.filler.getPrice();
};