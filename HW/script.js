//Make your order
var order = {
    largeBurgers: {
        quontity: 1,
        cheese: 2,
        salad: 0,
        potatoes: 4
    },
    smallBurgers: {
        quontity: 1,
        cheese: 0,
        salad: 0,
        potatoes: 0
    },
    olivie: 150,
    cesar: 150,
    cola: 1,
    coffe: 1
};
function Order(){
    this.price = 0;
    this.cal = 0;
}
Order.prototype.add_cheese = function (num) {
    this.price += (10 * num);
    this.cal += (20 * num);
}
Order.prototype.add_salad = function (num) {
    this.price += (20 * num);
    this.cal += (5 * num);
}
Order.prototype.add_potatoes = function (num) {
    this.price += (15 * num);
    this.cal += (10 * num);
}
Order.prototype.addLargeBurger = function (num){
    this.price += (100 * num);
    this.cal += (40 * num);
}
Order.prototype.addSmallBurger = function(num){
    this.price += (50 * num);
    this.cal += (20 * num);
}
Order.prototype.addCesar = function(weight) {
    this.price += ((weight * 100) / 100);
    this.cal += ((weight * 20) / 100);
}
Order.prototype.addOlivie = function(weight) {
    this.price += ((weight * 50) / 100);
    this.cal += ((weight * 80) / 100);
}
Order.prototype.addCola = function(){
    this.price += 50;
    this.cal += 40;
}
Order.prototype.addCoffe = function(){
    this.price += 80;
    this.cal += 20;
}
function makeorder() {
    var bill = new Order();
    bill.addlargeBurger(order.largeBurgers.quontity);
    bill.addSmallBurger(order.smallBurgers.quontity);
    bill.add_cheese(order.largeBurgers.cheese);
    bill.add_potatoes(order.largeBurgers.potatoes);
    bill.add_salad(order.largeBurgers.salad);
    bill.add_cheese(order.smallBurgers.cheese);
    bill.add_potatoes(order.smallBurgers.potatoes);
    bill.add_salad(order.smallBurgers.salad);
    bill.addCesar(order.cesar);
    bill.addOlivie(order.olivie);
    bill.addCoffe(order.coffe);
    bill.addCola(order.cola);

    console.log("Your bill:");
    console.log(bill);
    console.log("Your order cost: " + bill.price + " tugrikov");
    console.log("And have " + bill.cal + " cal");
}
makeorder();