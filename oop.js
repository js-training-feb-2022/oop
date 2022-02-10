function PriceAndCaloricity(price, caloricity) {
    this.price = price;
    this.caloricity = caloricity;
}

PriceAndCaloricity.prototype.calculate = function (PriceOrCaloricity, kind1props, kind2props) {
    let value;
    if (this.kind === this.kindList.kind1) {
        value = this[kind1props]()[PriceOrCaloricity];
    } else if (this.kind === this.kindList.kind2) {
        value = this[kind2props]()[PriceOrCaloricity];
    }

    return value;
}

PriceAndCaloricity.prototype.getKind = function () {
    return this.kind;
}

function Meal(kind1, price1, cal1, kind2, price2, cal2) {

    this.kind1 = kind1;

    this.kind2 = kind2;

    this[kind1] = () => new PriceAndCaloricity(price1, cal1);

    this[kind2] = () => new PriceAndCaloricity(price2, cal2);
}

function Hamburger(kind, stuffing) {

    this.kind = kind;

    this.stuffing = stuffing;

    this.SIZE_SMALL = () => new PriceAndCaloricity(50, 20);

    this.SIZE_LARGE = () => new PriceAndCaloricity(100, 40);

    this.STUFFING_CHEESE = () => new PriceAndCaloricity(10, 20);

    this.STUFFING_SALAD = () => new PriceAndCaloricity(20, 5);

    this.STUFFING_POTATO = () => new PriceAndCaloricity(15, 10);

}

Hamburger.prototype = Object.create(PriceAndCaloricity.prototype);

Hamburger.prototype.calculate = function (PriceOrCaloricity) {
    let valueBySize, valueBystuffing
    if (this.kind === 'маленький') {
        valueBySize = this.SIZE_SMALL()[PriceOrCaloricity]
    } else if (this.size === 'большой') {
        valueBySize = this.SIZE_LARGE()[PriceOrCaloricity]
    }

    if (this.stuffing === 'сыр') {
        valueBystuffing = this.STUFFING_CHEESE()[PriceOrCaloricity]
    } else if (this.stuffing === 'салат') {
        valueBystuffing = this.STUFFING_SALAD()[PriceOrCaloricity]
    } else if (this.stuffing === 'картофель') {
        valueBystuffing = this.STUFFING_POTATO()[PriceOrCaloricity]
    }
    return valueBySize + valueBystuffing;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    return Hamburger.prototype.calculate.call(this, 'price')
}

Hamburger.prototype.calculateCalories = function () {
    return Hamburger.prototype.calculate.call(this, 'caloricity')
}

function Salad(kind) {

    this.kind = kind;

    this.kindList = {
        kind1: 'Цезарь',
        kind2: 'Оливье',
    }

    this['CAESAR'] = () => new PriceAndCaloricity(100, 20);

    this['OLIVIER'] = () => new PriceAndCaloricity(50, 80);

}

Salad.prototype = Object.create(PriceAndCaloricity.prototype);

Salad.prototype.getKind = function () {
    return this.kind;
}

function Drink(kind) {

    this.kind = kind;

    this.kindList = {
        kind1: 'Кола',
        kind2: 'Кофе',
    }

    this['Кола'] = () => new PriceAndCaloricity(50, 40);

    this['Кофе'] = () => new PriceAndCaloricity(80, 20);

}

Drink.prototype = Object.create(PriceAndCaloricity.prototype);

let Hamburger1 = new Hamburger('маленький', 'картофель');
console.log(Hamburger1.getKind());
console.log(Hamburger1.getStuffing());
console.log(Hamburger1.calculatePrice());
console.log(Hamburger1.calculateCalories());

let Salad1 = new Salad('Цезарь');
console.log(Salad1.getKind());
console.log(Salad1.calculate('price', 'CAESAR', 'OLIVIER'));
console.log(Salad1.calculate('caloricity', 'CAESAR', 'OLIVIER'));

let Drink1 = new Drink('Кола');
console.log(Drink1.getKind());
console.log(Drink1.calculate('price', 'Кола', 'Кофе'));
console.log(Drink1.calculate('caloricity', 'Кола', 'Кофе'));