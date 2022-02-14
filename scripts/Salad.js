class Salad{

  constructor(type, weight) {
    this.type = type;
    this.weight = weight;
  }

  getName() {
    return `${this.type.name} ${this.weight}gr`;
  }

  calculatePrice() {
    return this.type.price * this.weight / 100;
  }

  calculateCalories() {
    return this.type.calories * this.weight / 100;
  }

}

Salad.OLIVIE = {
  name: 'Olivie',
  price: 50, 
  calories: 80
};
Salad.CEASAR = {
  name: 'Ceasar',
  price: 100, 
  calories: 20
};

export { Salad };