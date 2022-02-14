function Salad(options, weight) {
  Position.call(this, options);
  this.weight = weight;
}

Salad.prototype = Object.create(Position.prototype);

const saladType = {};
saladType.caesar = {
  name: "Цезарь",
  calories: 20,
  price: 100,
};

saladType.olivier = {
  name: "Оливье",
  calories: 80,
  price: 50,
};

Salad.prototype.getName = function () {
  return this.name + " " + this.weight + " гр.";
};

Salad.prototype.getCalories = function () {
  return (this.calories * this.weight) / 100;
};

Salad.prototype.getPrice = function () {
  return (this.price * this.weight) / 100;
};