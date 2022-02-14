let Error = require('./error').Error;


function Order() {
  this._dishes = [];
  this._isPaid = false;
}

//Оплачен ли заказ
Order.prototype.getPaid = function() {
  return this._isPaid;
};

//Список блюд в заказе
Order.prototype.getDishes = function() {
  return this._dishes;
};

//Добавить блюдо в заказ
Order.prototype.addToOrder = function(item) {
  if (!this.getPaid()) {
    this._dishes.push(item);
  } else {
    throw new Error('Adding of item was rejected. Order is closed')
  }
};

//Удалить блюдо позицию из заказа
Order.prototype.deletePositionFromOrder = function(index) {
  if (!this.getPaid()) {
    let dishPosition = index - 1;
    this.getDishes().splice(dishPosition, 1);
  } else {
    throw new Error('Deleting of item was rejected. Order is closed')
  }
};

//Итоговая стоимость заказа
Order.prototype.calculateTotalPrice = function() {
  let thisOrder = this.getDishes();
  if (thisOrder.length > 0) {
    let totalPrice = 0;
    for (let index = 0; index < thisOrder.length; index++) {
      totalPrice += thisOrder[index].calculatePrice();
    }
    return totalPrice;
  } else {
    throw new Error('Calculating price is not available. Order is empty')
  }
};

//Итоговая калорийность заказа
Order.prototype.calculateTotalCalories = function() {
  let thisOrder = this.getDishes();
  if (thisOrder.length > 0) {
    let totalCalories = 0;
    for (let index = 0; index < thisOrder.length; index++) {
      totalCalories += thisOrder[index].calculateCalories();
    }
    return totalCalories;
  } else {
    throw new Error('Calculating calories is not available. Order is empty');
  }
};

//Оплатить заказ
Order.prototype.pay = function() {
  this._isPaid = true;
  Object.freeze(this._dishes);
};

module.exports = {
  Order: Order
};