let { log } = console;

class SmallHam {
    constructor () {
        this.price = 50;
        this.calories = 20;
        this.cheese = 0;
        this.salad = 0;
        this.potato = 0;
    }

    addCheese () {
        this.price += 10;
        this.calories += 20;
        this.cheese = 1;
        return this;
    }

    addSalad () {
        this.price += 20;
        this.calories += 5;
        this.salad += 1;
        return this;
    }
    addPotato () {
        this.price +=15;
        this.calories += 10;
        this.potato += 1;
        return this;
    }
    removeCheese () {
        if (this.cheese <= 0) {
            log('Сыр нельзя удалить, его пока нет в гамбургере')
            return this;
        }
        this.price -= 10;
        this.calories -= 20;
        this.cheese -= 1;
        return this;
    }

    removeSalad () {
        if (this.salad <= 0) {
            log('Салат нельзя удалить, его пока нет в гамбургере')
            return this;
        }
        this.price -= 20;
        this.calories -= 5;
        this.salad -=1;
        return this;
    }
    removePotato () {
        if (this.potato <= 0) {
            log('Картошку нельзя удалить, её пока нет в гамбургере')
            return this;
        }
        this.price -=15;
        this.calories -= 10;
        this.potato -= 1;
        return this;
    }
    totalOrder () {
        log(this.price + ' ' + this.calories) 
        return this;
    }
} 

class BigHam extends SmallHam {
    price = 100;
    calories = 40;
}

let newHam = new BigHam();
log(newHam.addPotato().addCheese().removeCheese().totalOrder())


function hamburger (size, stuffing) {

}