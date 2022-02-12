function PriceAndCaloricity(price, caloricity) {
    this.price = price;
    this.caloricity = caloricity;
}

PriceAndCaloricity.prototype.calculate = function (PriceOrCaloricity) {
    let value;
    if (this.kind === this.kind1) {
        value = this['kind1props']()[PriceOrCaloricity];
    } else if (this.kind === this.kind2) {
        value = this['kind2props']()[PriceOrCaloricity];
    }

    return value;
}

function Meal(kind1, price1, cal1, kind2, price2, cal2) {

    this.kind1 = kind1;

    this.kind2 = kind2;

    this['kind1props'] = () => new PriceAndCaloricity(price1, cal1);

    this['kind2props'] = () => new PriceAndCaloricity(price2, cal2);
}

Meal.prototype = Object.create(PriceAndCaloricity.prototype);

Meal.prototype.getKind = function () {
    return this.kind;
}

function Hamburger(kind, stuffing) {

    Meal.call(this, 'маленький', 50, 20, 'большой', 100, 40);

    this.kind = kind;

    this.stuffing = stuffing;

    this.STUFFING_CHEESE = () => new PriceAndCaloricity(10, 20);

    this.STUFFING_SALAD = () => new PriceAndCaloricity(20, 5);

    this.STUFFING_POTATO = () => new PriceAndCaloricity(15, 10);

}

Hamburger.prototype = Object.create(Meal.prototype);

Hamburger.prototype.calculateHamburger = function (PriceOrCaloricity) {
    let valueBystuffing;
    if (this.stuffing === 'сыр') {
        valueBystuffing = this.STUFFING_CHEESE()[PriceOrCaloricity]
    } else if (this.stuffing === 'салат') {
        valueBystuffing = this.STUFFING_SALAD()[PriceOrCaloricity]
    } else if (this.stuffing === 'картофель') {
        valueBystuffing = this.STUFFING_POTATO()[PriceOrCaloricity]
    }
    return this.calculate(PriceOrCaloricity) + valueBystuffing;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

function Salad(kind, mass) {

    Meal.call(this, 'Цезарь', 100, 20, 'Оливье', 50, 80)

    this.kind = kind;

    this.mass = mass;
}

Salad.prototype = Object.create(Meal.prototype);

Salad.prototype.calculateSalad = function (PriceOrCaloricity) {
    return this.mass / 100 * this.calculate(PriceOrCaloricity);
}

function Drink(kind) {

    Meal.call(this, 'Кола', 50, 40, 'Кофе', 80, 20)

    this.kind = kind;
}

Drink.prototype = Object.create(Meal.prototype);

function Order(array) {
    this.array = array;

    this.editable = true;
}

Order.prototype.calculateOrder = function (PriceOrCaloricity) {
    return this.array.reduce((p, c) => {
        if (c instanceof Hamburger) {
            return c.calculateHamburger(PriceOrCaloricity) + p;
        } else if (c instanceof Salad) {
            return c.calculateSalad(PriceOrCaloricity) + p;
        } else if (c instanceof Drink) {
            return c.calculate(PriceOrCaloricity) + p;
        }

    }, 0);
}

Order.prototype.addPosition = function (position) {
    if (this.editable === true) {
        this.array.push(position);
        return `Вы добавили ${position.kind}`;
    } else {
        return `Вы не можете изменить заказ после оплаты`;
    }

}

Order.prototype.removePosition = function (position) {
    if (this.editable === true) {
        if (this.array.includes(position)) {
            this.array.splice(this.array.indexOf(position), 1);
            return `Вы удалили ${position.kind}`;
        } else {
            return `Такая позиция не найдена`
        }

    } else {
        return `Вы не можете изменить заказ после оплаты`;
    }
}

Order.prototype.pay = function () {
    if (this.editable === true) {
        this.editable = false;
        return 'Оплата прошла успешно';
    } else {
        return 'Заказ уже был оплачен';
    }

}

let hamburger1 = new Hamburger('маленький', 'картофель');
console.log(hamburger1.getKind());
console.log(hamburger1.getStuffing());
console.log(hamburger1.calculateHamburger('price'));
console.log(hamburger1.calculateHamburger('caloricity'));

let salad1 = new Salad('Цезарь', 150);
console.log(salad1.getKind());
console.log(salad1.calculateSalad('price'));
console.log(salad1.calculateSalad('caloricity'));
let salad2 = new Salad('Оливье', 50);

let drink1 = new Drink('Кола');
console.log(drink1.getKind());
console.log(drink1.calculate('price'));
console.log(drink1.calculate('caloricity'));

let order1 = new Order([hamburger1, hamburger1, salad1, salad2, drink1, drink1])
console.log(order1.calculateOrder('price'));
console.log(order1.calculateOrder('caloricity'));

console.log(order1.addPosition(salad2));
console.log(order1.removePosition(salad1));
console.log(order1.removePosition(salad1));
console.log(order1.pay());
console.log(order1.removePosition(salad1));
console.log(order1.addPosition(salad2));
console.log(order1.pay());