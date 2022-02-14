/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param {string} name        Название позиции
 * @param {number} calories    Количество калорий
 * @param {number} price       Цена
 */
function Position({name, calories, price}) {
    this.name=name;
    this.calories=calories;
    this.price=price;
}

/**
 * Узнать Название позиции
 *  @return {string} name        Название позиции
 */
Position.prototype.getName = function () {
    return this.name;
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Position.prototype.getCalories = function () {
    return this.calories;
}

/**
 * Узнать цену позиции
 * @return {Number} Цена в тугриках
 */
Position.prototype.getPrice  = function () {
    return this.price;
}