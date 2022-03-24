const menu = {
    "hamburger": {
        "size": {
            "small": {
                "price": 50,
                "calories": 20
            },
            "big": {
                "price": 100,
                "calories": 40
            }
        },
        "stuffing": {
            "cheese": {
                "price": 10,
                "calories": 20
            },
            "salad": {
                "price": 20,
                "calories": 5
            },
            "potato": {
                "price": 50,
                "calories": 20
            }
        }
    },
    "salad": {
        "caesar": {
            "price": 100,
            "calories": 20
        },
        "olivier": {
            "price": 50,
            "calories": 80
        }
    },
    "drink": {
        "coffee": {
            "price": 80,
            "calories": 20
        },
        "cola": {
            "price": 50,
            "calories": 40
        }
    }
}

function PriceAndCaloricity(price, caloricity) {
    this.price = price;
    this.caloricity = caloricity;
}

PriceAndCaloricity.prototype.calculate = function (PriceOrCaloricity) {
    let value;
    if (this.kind === this.sizeKind) {
        value = this['sizeProps']()[PriceOrCaloricity];
    } else if (this.kind === this.stuffingKind) {
        value = this['stuffingProps']()[PriceOrCaloricity];
    }

    return value;
}

function Meal(sizeKind, sizePrice, sizeCaloricity, stuffingKind, stuffingPrice, stuffingCaloricity) {

    this.sizeKind = sizeKind;

    this.stuffingKind = stuffingKind;

    this['sizeProps'] = () => new PriceAndCaloricity(sizePrice, sizeCaloricity);

    this['stuffingProps'] = () => new PriceAndCaloricity(stuffingPrice, stuffingCaloricity);
}

Meal.prototype = Object.create(PriceAndCaloricity.prototype);

Meal.prototype.getKind = function () {
    return this.kind;
}

function Hamburger(kind, stuffing) {    
    let size = menu.hamburger.size;
    let stuff = menu.hamburger.stuffing;

    Meal.call(this, 'small', size.small.price, size.small.calories, 'big', size.big.price, size.small.calories);

    this.kind = kind;

    this.stuffing = stuffing;

    this.STUFFING_CHEESE = () => new PriceAndCaloricity(stuff.cheese.price, stuff.cheese.calories);

    this.STUFFING_SALAD = () => new PriceAndCaloricity(stuff.salad.price, stuff.salad.calories);

    this.STUFFING_POTATO = () => new PriceAndCaloricity(stuff.potato.price, stuff.potato.calories);

}

Hamburger.prototype = Object.create(Meal.prototype);

Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.calculateHamburger = function (PriceOrCaloricity) {
    let valueBystuffing;
    switch (this.stuffing) {
        case 'cheese':
            valueBystuffing = this.STUFFING_CHEESE()[PriceOrCaloricity];
            break;
        case 'salad':
            valueBystuffing = this.STUFFING_SALAD()[PriceOrCaloricity];
            break;
        case 'potato':
            valueBystuffing = this.STUFFING_POTATO()[PriceOrCaloricity];
            break;
    }

    return this.calculate(PriceOrCaloricity) + valueBystuffing;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

function Salad(kind, mass) {
    let caesar = menu.salad.caesar;
    let olivier = menu.salad.olivier;

    Meal.call(this, 'caesar', caesar.price, caesar.calories, 'olivier', olivier.price, olivier.calories)

    this.kind = kind;

    this.mass = mass;
}

Salad.prototype = Object.create(Meal.prototype);

Salad.prototype.calculateSalad = function (PriceOrCaloricity) {
    let hundredPercent = 100;

    return this.mass / hundredPercent * this.calculate(PriceOrCaloricity);
}

function Drink(kind) {
    let cola = menu.drink.cola;
    let coffee = menu.drink.cola;
    let drinkArgs = [this, 'cola', cola.price, cola.calories, 'coffee', coffee.price, coffee.calories]

    Meal.call(...drinkArgs)

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
    if (this.editable) {
        this.array.push(position);
        return `Вы добавили ${position.kind}`;
    } else {
        return `Вы не можете изменить заказ после оплаты`;
    }

}

Order.prototype.removePosition = function (position) {
    if (this.editable) {
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
    if (this.editable) {
        this.editable = false;
        return 'Оплата прошла успешно';
    } else {
        return 'Заказ уже был оплачен';
    }

}

let hamburger1 = new Hamburger('small', 'potato');
console.log(hamburger1.getKind());
console.log(hamburger1.getStuffing());
console.log(hamburger1.calculateHamburger('price'));
console.log(hamburger1.calculateHamburger('caloricity'));

let salad1 = new Salad('caesar', 150);
console.log(salad1.getKind());
console.log(salad1.calculateSalad('price'));
console.log(salad1.calculateSalad('caloricity'));
let salad2 = new Salad('olivier', 50);

let drink1 = new Drink('cola');
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