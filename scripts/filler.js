function Filler(options) {
  Position.call(this, options);
}

Filler.prototype = Object.create(Position.prototype);

const fillerType = {};
fillerType.cheese = {
  name: "сыром",
  calories: 20,
  price: 10,
};

fillerType.salad = {
  name: "салатом",
  calories: 5,
  price: 20,
};

fillerType.fries = {
  name: "картофелем",
  calories: 10,
  price: 15,
};

