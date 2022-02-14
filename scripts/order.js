function Order() {
  this.isPayed = false;
  this.positions = [];
}

Order.prototype.addPosition = function (position) {
  this.positions.push(position);
};

Order.prototype.deletePosition = function (positionId) {
  this.positions.splice(positionId, 1);
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Order.prototype.getCalories = function () {
  return this.positions.reduce(function (acc, cur) {
    return acc + cur.getCalories();
  }, 0);
};

/**
 * Узнать цену заказа
 * @return {Number} Цена в тугриках
 */
Order.prototype.getPrice = function () {
  return this.positions.reduce(function (acc, cur) {
    return acc + cur.getPrice();
  }, 0);
};