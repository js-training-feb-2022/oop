class HamburgerStuffing{
    constructor(stuffing){
        const STUFFING_CHEESE={
            name: 'cheese',
            price: 10,
            calories: 20,
        }
        const STUFFING_SALAD = {
            name: 'salad',
            price: 20,
            calories: 5,
        }
        const STUFFING_POTATO = {
            name:'potato',
            price: 15,
            calories: 10,
        }
        if (stuffing.toLowerCase()=='cheese')
            this.stuffing=STUFFING_CHEESE;
        else if (stuffing.toLowerCase()=='salad')
                this.stuffing=STUFFING_SALAD;
        else if (stuffing.toLowerCase()=='potato')
                this.stuffing=STUFFING_POTATO;
        else if (stuffing=='nothing'||stuffing==''){
                alert(`we'll not give you a burger without stuffing, cursed Jew!`);
                this.burgerSize=undefined;
                return 0;
            }
        else {
            alert(`we have not ${stuffing}, choose cheese, salad of potato`);
            this.burgerSize=undefined;
            return 0;
        }
    }
    getStuffing(){
        console.log(this.stuffing.name);
    }
    getCalories(){
        console.log(this.stuffing.calories);
    }
}

class Hamburger extends HamburgerStuffing{
    constructor(size, stuffing){
        const SIZE_SMALL = {
            name: 'small',
            price: 50,
            calories: 20,
        }
        const SIZE_BIG = {
            name: 'big',
            price: 100,
            calories: 40,
        }
        super(stuffing);
        if (size.toLowerCase()=='small')
            this.size=SIZE_SMALL;
        else if (size.toLowerCase()=='big')
                this.size=SIZE_BIG;
        else {
            alert('choose size of burger - big or small?');
            this.stuffing=undefined;
            return 0;
        }
    }
    getSize(){
        console.log(this.size.name);
    }
    getCalories(){
        return this.size.calories+this.stuffing.calories;
    }
    getPrice(){
        return this.size.price+this.stuffing.price;
    }
}

class Salad{
    constructor(title, weight=100){
        const CAESAR = {
            name: 'caesar',
            price: 100,
            calories: 20,
        }
        const OLIVIER = {
            name: 'olivier',
            price: 50,
            calories: 80,
        }
        if (/ar/i.test(title) || /cez/i.test(title))
            this.salad=CAESAR;
        else if (/oli/i.test(title))
                this.salad=OLIVIER;
        else {
            alert(`we haven't ${title}, choose caesar or olivier!`)
        }
        if (weight!=+weight)
            alert ('write a number!');
        else this.weight=weight;
    }
    getCalories(){
        return this.salad.calories*this.weight/100;
    }
    getPrice(){
        return this.salad.price*this.weight/100;
    }
}

class Drink{
    constructor(title){
        const COLA = {
            name: 'cola',
            price: 50,
            calories: 40,
        }
        const COFFEE = {
            name: 'coffee',
            price: 80,
            calories: 20,
        }
        if (/ola/i.test(title) || /psi/i.test(title))
            this.drink = COLA;
        else if (/cof/i.test(title))
                this.drink = COFFEE;
        else {
            alert (`we have not ${title}, choose Cola or coffee`);
            return 0;
        }
    }
    getCalories(){
        return this.drink.calories;
    }
    getPrice(){
        return this.drink.price;
    }
    
}

function Order(){
    this.burger = [];
    this.salad = [];
    this.drink = [];
}

Order.prototype.addHamburger = function(size, toping){
    this.burger.push(new Hamburger(size, toping));
};
Order.prototype.deleteHamburger = function(numberOfBurger){
    if (this.burger.length==0){
        alert('you have nothing for deleting');
        console.log(this);
        return 0;
    }
    if (this.burger.length>1 && numberOfBurger==undefined){
        alert('select the burger that you want to delete');
        console.log(this);
        return 0;
    }
    this.burger.splice(numberOfBurger-1,1);
    console.log(this);
}
Order.prototype.addSalad = function(title, weight){
    this.salad.push(new Salad(title, weight));
};
Order.prototype.deleteSalad = function(numberOfSalad){
    if (this.salad.length==0){
        alert('you have nothing for deleting');
        console.log(this);
        return 0;
    }
    if (this.salad.length>1 && numberOfSalad==undefined){
        alert('select the salad that you want to delete');
        console.log(this);
        return 0;
    }
    this.salad.splice(numberOfSalad-1,1);
    console.log(this);
}
Order.prototype.addDrink = function(title){
    this.drink.push(new Drink(title));
    console.log(this);
};
Order.prototype.deleteDrink = function(numberOfDrink){
    if (this.drink.length==0){
        alert('you have nothing for deleting');
        console.log(this);
        return 0;
    }
    if (this.drink.length>1 && numberOfDrink==undefined){
        alert('select the salad that you want to delete');
        console.log(this);
        return 0;
    }
    this.drink.splice(numberOfDrink-1);
    console.log(this.drink);
}
Order.prototype.calculatePrice = function(){
    let summ=0;
    for (let i=0; i<3; i++){
        for (let item of this[Object.getOwnPropertyNames(this)[i]]){
            summ=summ+item.getPrice();
        }
    }
    console.log(summ);
}
Order.prototype.calculateCalories = function(){
    let summCal=0;
    for (let i=0; i<3; i++){
        for (let item of this[Object.getOwnPropertyNames(this)[i]]){
            summCal=summCal+item.getCalories();
        }
    }
    console.log(summCal);
}
Order.prototype.payForOrder = function(){
    for (let i=0; i<Object.getOwnPropertyNames(this).length; i++){
        Object.freeze(this[Object.getOwnPropertyNames(this)[i]]);        
    }
    console.log('Bon appetit!');
}