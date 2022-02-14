class General {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const drinkCola = {name: 'cola', price: 50, calories: 40};
const drinkCoffee = {name: 'coffee', price: 80, calories: 20};

class Drink extends General {
  constructor(name) {
    super(name);
  }

  calculatePrice() {
    return this.getName().price;
  }

  calculateCalories() {
    return this.getName().calories;
  }
}

const saladCesar = {name: 'cesar', price: 100, calories: 20};
const saladOliver = {name: 'oliver', price: 50, calories: 80};

class Salad extends General {
  constructor(name, weight) {
    super(name);
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }  

  changeWeight(amount) {
    if(amount != 100) {
      this.weight = amount;
    }
  }

  calculatePrice() {
    let type = this.getName(); 
    let priceforGramm = type.price / 100;
    return priceforGramm * this.getWeight();
  }

  calculateCalories() {
    let type = this.getName();
    let calorForGramm = type.calories / 100;
    return calorForGramm * this.getWeight();
  }
}
