function PriceAndCaloricity(size, price, caloricity) {
    this.size = size;
    this.price = price;
    this.caloricity = caloricity;
}

PriceAndCaloricity.prototype.calculate = function (PriceOrCaloricity){
    let valueBySize, valueBystuffing
    if(this.size === 'маленький'){
        valueBySize = this.SIZE_SMALL()[PriceOrCaloricity]
    }else if(this.size === 'большой'){
        valueBySize = this.SIZE_LARGE().PriceOrCaloricity
    }

    if(this.stuffing === 'сыр'){
        valueBystuffing = this.STUFFING_CHEESE().PriceOrCaloricity
    }else if(this.stuffing === 'салат'){
        valueBystuffing = this.STUFFING_SALAD().PriceOrCaloricity
    }else if(this.stuffing === 'картофель'){
        valueBystuffing = this.STUFFING_POTATO()[PriceOrCaloricity]
    }
    return valueBySize + valueBystuffing;
}

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.SIZE_SMALL = () => new PriceAndCaloricity( 'маленький', 50, 20 );
    this.SIZE_LARGE = {

    }
    this.STUFFING_CHEESE = {

    }
    this.STUFFING_SALAD = {

    }
    this.STUFFING_POTATO = () => new PriceAndCaloricity( 'маленький', 15, 10 );
}

Hamburger.prototype = Object.create(PriceAndCaloricity.prototype);

console.log( Hamburger.prototype )

Hamburger.prototype.getSize = function () {
    return this.size;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
   return Hamburger.prototype.calculate("price")
}

Hamburger1 = new Hamburger('маленький', 'картофель');
console.log(Hamburger1.getSize());
console.log(Hamburger1.getStuffing());
Hamburger1.SIZE_SMALL().size = 'big';
console.log(Hamburger1.SIZE_SMALL().size);
console.log(Hamburger1.calculatePrice());