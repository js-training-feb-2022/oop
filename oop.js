function PriceAndCaloricity(price, caloricity) {
    this.price = price;
    this.caloricity = caloricity;
}


function Hamburger(size, stuffing) {

    this.size = size;

    this.stuffing = stuffing;

    this.SIZE_SMALL = () => new PriceAndCaloricity(50, 20);

    this.SIZE_LARGE = () => new PriceAndCaloricity(100, 40);

    this.STUFFING_CHEESE = () => new PriceAndCaloricity(10, 20);

    this.STUFFING_SALAD = () => new PriceAndCaloricity(20, 5);

    this.STUFFING_POTATO = () => new PriceAndCaloricity(15, 10);

}

Hamburger.prototype.calculate = function (PriceOrCaloricity) {
    let valueBySize, valueBystuffing
    if (this.size === 'маленький') {
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

//Hamburger.prototype = Object.create(PriceAndCaloricity.prototype);

//console.log( Hamburger.prototype )

Hamburger.prototype.getSize = function () {
    return this.size;
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

function SaladOrDrink( kind1, kind2 ){
    this.kind1 = kind1;
    this.kind2 = kind2;
}

function Salad(kind) {

    this.kind = kind;

    this.CAESAR = () => new PriceAndCaloricity(100, 20);

    this.OLIVIER = () => new PriceAndCaloricity(50, 80);

}

Salad.prototype.calculate = function (PriceOrCaloricity) {
    let value
    if (this.kind === 'Цезарь') {
        value = this.CAESAR()[PriceOrCaloricity]
    } else if (this.kind === 'Оливье') {
        value = this.OLIVIER()[PriceOrCaloricity]
    }

    return value;
}

Salad.prototype.getKind = function () {
    return this.kind;
}

Salad.prototype.getKind = function () {
    return this.kind;
}

let Hamburger1 = new Hamburger('маленький', 'картофель');
console.log(Hamburger1.getSize());
console.log(Hamburger1.getStuffing());
console.log(Hamburger1.calculatePrice());
console.log(Hamburger1.calculateCalories());

let Salad1 = new Salad('Цезарь');
console.log(Salad1.getKind());
console.log(Salad1.calculate('price'));