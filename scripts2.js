class Order {
  constructor() {
    this.total = [];
    this.paid = false;
  }

  getPaid() {
    return this.paid;
  }

  getTotalAmount() {
    return this.total;
  }

  addToTotal(item) {
    if(!this.getPaid()) {
      this.total.push(item);
    } else {return `order is paid, u cant change it`}
  }

  deleteFromTotal(index) {
    if(!this.getPaid()) {
      if(this.total.length > 0) {
        let position = index - 1;
        this.getTotalAmount().splice(position, 1);
      } else {return `order is empty, it is nothing to delete`}      
    } else {return `order is paid, u cant change it`}
  }

  getTotalPrice() {
    let totalOrder = this.getTotalAmount();
    if(totalOrder.length > 0) {
      let totalPrice = 0;
      for(let i=0; i < totalOrder.length; i++) {
        totalPrice += totalOrder[i].calculatePrice();
      }
      return totalPrice;
    } else {return `order is empty`}
  }

  getTotalCalories() {
    let totalOrder = this.getTotalAmount();
    if(totalOrder.length > 0) {
      let totalCalories = 0;
      for(let i=0; i < totalOrder.length; i++) {
        totalCalories += totalOrder[i].calculateCalories();
      }
      return totalCalories;
    } else {return `order is empty`}
  }

  alreadyPaid() {
    this.paid = true;
    Object.freeze(this.total); 
  }
}

// // проверка как работает счет
// let ord = new Order();
// let smallBurg = new Hamburger(hamburgerSmall, stuffingCheese);
// // добавим бургер
// ord.addToTotal(smallBurg);
// console.log(ord.getTotalAmount());  //  [Hamburger] 
// console.log(ord.getTotalPrice());  //  60
// console.log(ord.getTotalCalories());  //  40
// // добавим напиток
// let cola = new Drink(drinkCola);
// ord.addToTotal(cola);
// console.log(ord.getTotalAmount());  //  (2) [Hamburger, Drink] 
// console.log(ord.getTotalPrice());  //  110
// console.log(ord.getTotalCalories());  //  80
// // добавим другой напиток
// let coff = new Drink(drinkCoffee);
// ord.addToTotal(coff);
// console.log(ord.getTotalPrice());  //  190
// // удалить третью позицию из счета
// ord.deleteFromTotal(2); 
// console.log(ord.getTotalPrice());  //  140
// console.log(ord.getTotalAmount());  //  (2) [Hamburger, Drink] 
// // удалить остальное из заказа
// ord.deleteFromTotal(0);  
// ord.deleteFromTotal(1);  
// console.log(ord.getTotalAmount());  //  []
// // получить стоимость пустого заказа
// console.log(ord.getTotalPrice());  //  'order is empty'
// // удалить чтото из пустого заказа
// ord.deleteFromTotal(0);  //  
// console.log(ord.deleteFromTotal());  //  order is empty, it is nothing to delete
// // добавим кофе, бургер и салат 150г
// ord.addToTotal(coff);  //  +80 / 20
// ord.addToTotal(smallBurg);  //  +50 + 10 / 20 + 20
// let salad = new Salad(saladCesar, 150);
// ord.addToTotal(salad);  //  +150 / 30
// console.log(ord.getTotalPrice());  //  290 верно
// console.log(ord.getTotalCalories());  //  90 верно
// // добавим статус счета "оплачен"
// ord.alreadyPaid();
// // пробуем удалить или добавить чтото в оплаченный счет
// console.log(ord.deleteFromTotal(0));  //  order is paid, u cant change it
// console.log(ord.addToTotal(cola));  //  order is paid, u cant change it
