class PriceAndCaloricity {
    constructor(price, caloricity) {
        this.price = price;
        this.caloricity = caloricity;
    }

    calculate(PriceOrCaloricity) {
        let value;
        if (this.kind === this.kind1) {
            value = this['kind1props']()[PriceOrCaloricity];
        } else if (this.kind === this.kind2) {
            value = this['kind2props']()[PriceOrCaloricity];
        }

        return value;
    }

}

class Meal extends PriceAndCaloricity {
    constructor(kind1, price1, cal1, kind2, price2, cal2, price, caloricity) {
        
        super(price, caloricity);

        this.kind1 = kind1;

        this.kind2 = kind2;

        this.kind1props = () => new PriceAndCaloricity(price1, cal1);

        this.kind2props = () => new PriceAndCaloricity(price2, cal2);
    }

    getKind() {
        return this.kind;
    }
}

class Hamburger extends Meal {
    constructor(kind, stuffing) {

        super('маленький', 50, 20, 'большой', 100, 40);

        this.kind = kind;

        this.stuffing = stuffing;
    }

    STUFFING_CHEESE = () => new PriceAndCaloricity(10, 20);

    STUFFING_SALAD = () => new PriceAndCaloricity(20, 5);

    STUFFING_POTATO = () => new PriceAndCaloricity(15, 10);

    calculateHamburger(PriceOrCaloricity) {
        let valueBystuffing;
        if (this.stuffing === 'сыр') {
            valueBystuffing = this.STUFFING_CHEESE()[PriceOrCaloricity]
        } else if (this.stuffing === 'салат') {
            valueBystuffing = this.STUFFING_SALAD()[PriceOrCaloricity]
        } else if (this.stuffing === 'картофель') {
            valueBystuffing = this.STUFFING_POTATO()[PriceOrCaloricity]
        }
        return super.calculate(PriceOrCaloricity) + valueBystuffing;
    }

    getStuffing() {
        return this.stuffing;
    }

}

class Salad extends Meal {
    constructor(kind){

        super('Цезарь', 100, 20, 'Оливье', 50, 80)

        this.kind = kind;
    }
}

class Drink extends Meal {
    constructor(kind){

        super('Кола', 50, 40, 'Кофе', 80, 20)

        this.kind = kind;
    }
}

let hamburger2 = new Hamburger('маленький', 'сыр');
console.log(hamburger2.getKind());
console.log(hamburger2.getStuffing());
console.log(hamburger2.calculateHamburger('price'));
console.log(hamburger2.calculateHamburger('caloricity'));

let salad2 = new Salad('Оливье');
console.log(salad2.getKind());
console.log(salad2.calculate('price'));
console.log(salad2.calculate('caloricity'));

let drink2 = new Drink('Кофе');
console.log(drink2.getKind());
console.log(drink2.calculate('price'));
console.log(drink2.calculate('caloricity'));