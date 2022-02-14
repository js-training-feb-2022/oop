function Drink(options) {
  Position.call(this, options);
}

Drink.prototype = Object.create(Position.prototype);

const drinkType = {};
drinkType.coffee = {
  name: "Кофе",
  calories: 20,
  price: 80,
};

drinkType.cola = {
  name: "Кола",
  calories: 40,
  price: 50,
};
