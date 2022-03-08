class Order {

  constructor(...items) {
    this.isPaid = false;
    this.items = items;
  }

  addItem(item) {
    if (this.isPaid) {
      console.log('The order cannot be changed, it has already been paid!');
      return;
    }

    this.items.push(item);

    console.log(`${item.getName()} has been added to order!`);
  }

  removeItem(item) {
    if (this.isPaid) {
      console.log('The order cannot be changed, it has already been paid!');   
      return; 
    }

    const itemIndex = this.items.findIndex(prop => {
      return prop.getName() === item.getName();
    });

    if (itemIndex < 0) {
      console.log(`${item.getName()} is not in the order!`);
      return;
    }

    this.items.splice(itemIndex, 1);
    console.log(`${item.getName()} was removed from order!`);
  }

  payForTheOrder() {
    this.isPaid = true;
    console.log('Order has been paid!')
    this.printCheck();
  }

  calculatePrice() {
    let result = 0;
    for (let item of this.items) {
      result = result + item.calculatePrice();
    }
    return result;
  }

  printTotalPrice() {
    console.log(`Total price: ${this.calculatePrice()}MNT`);
  }

  calculateCalories() {
    let result = 0;
    for (let item of this.items) {
      result = result + item.calculateCalories();
    }
    return result;
  }

  printTotalCalories() {
    console.log(`Total calories: ${this.calculateCalories()}ccal`);
  } 

  printCheck() {
    let result = '';
    for (let item of this.items) {
      result = result + `${item.getName()}: ${item.calculatePrice()}MNT/${item.calculateCalories()}ccal\n`
    }

    result = result + `\nTotal: ${this.calculatePrice()}MNT/${this.calculateCalories()}ccal`;

    console.log(result);
  }

}

export { Order };