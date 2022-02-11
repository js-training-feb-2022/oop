/* Класс, объекты которого описывают параметры гамбургера.
@constructor */
class Hamburger{
  constructor(){
  }
 /*  узнать размер выбранного гамбургера
  @return {Object} размер гамбургера */
  get size(){
    return this._size
  }
/*   задать размер гамбургера
  @param {String} размер*/
  set size(hamburgerSize){
    switch(hamburgerSize){
      case 'big':
        this._size = {
          sizeType : hamburgerSize,
          price: 100,
          cal: 40,
        }
        break;

        case 'small':
          this._size= {
            sizeType : hamburgerSize,
            price: 50,
            cal: 20,
          }
          break;
          default:
            console.log('This size is not on the menu. Try "big" or "small"')
    }
  }
 /*  узнать начинку в гамбургере
  @return {Object} объект с начинкой */
  get stuffing(){
    return this._stuffing
  }
/*   задать начинку гамбургеру
  @param {String} тип начинки*/
  set stuffing(stuffingType){
    switch(stuffingType){
      case 'cheese':
        this._stuffing = {
          stuffingType: stuffingType,
          price: 10,
          cal: 20
        } 
        break;
        case 'salad':
          this._stuffing = {
            stuffingType: stuffingType,
            price: 10,
            cal: 20
          }
          break;
          case 'potato':
            this._stuffing= {
              stuffingType: stuffingType,
              price: 15,
              cal:10
            } 
            break;
            default:
              console.log('This stuffing is not on the menu. Try "cheeze", "salad" or "potato"')
    }
  }
};

/* класс, объекты которого описывают салат
@constructor */
class Salad{
  constructor(){}
/*   выбрать тип салата
  @param {String} тип салата
  @param {Number} количество салата в граммах*/
  settypeOfSalad(saladType, gramms){
    if(gramms > 0 && typeof gramms ==  'number'){        
        switch(saladType){
        case 'caesar':
        this._item = {
          saladType: saladType,
          price: 100 * (gramms / 100),
          cal: 20 * (gramms / 100),
          gramms: gramms,
        }
        break;
        case 'olivie':
          this._item = {
            saladType: saladType,
            price: 50 * (gramms / 100),
            cal: 80 * (gramms / 100),
            gramms: gramms,
          }
          break;
          default:
            console.log('This salad is not on menu. Try "olivie" or "caesar"')
    }
  }  else{
    console.log('This gramms are not defined. Enter a positive number greater than 100')
  }
  }
/*   узнать тип салата
  @return {Object} объект с салатом */
  get typeOfSalad(){
    return this.__typeOfSalad;
  }
}
/* класс, описывающий свойства напитка
@constructor */
class Drink{
  constructor(){}
/*   выбрать тип напитка
  @param {String} тип напитка */
  set typeOfDrink(drinkType){
    switch(drinkType){
      case 'cola':
        this._typeOfDrink = {
          drinkType : drinkType,
          price:50,
          cal:40
        }
        break;
        case 'coffee':
          this._typeOfDrink={
            drinkType: drinkType,
            price:80,
            cal:20
          }
          break;
          default:
            console.log('This drink is not on menu. Try "cola" or "coffee"')

    }
  }
  /*   узнать тип напитка
  @return {Object} объект с напитком */
  get typeOfSalad(){
    return this._typeOfDrink;
  }
}
/* класс описывающий заказ
@constructor */
class Order{
  constructor(){
/*     оплата заказа
 */    this.payment = false;
/*  пустой массив в который мы помещаем выбранные блюда
 */    this.orderList = []    
  }
/*   оплата заказа и заморозка сущностей объекта Order и массива с списком блюд
 */  payOrder(){
    this.payment = true;
    Object.freeze(this)
    Object.freeze(this.orderList)
  }
/*   проверка наличия в выбранных блюдах необходимых параметров. В гамбургере размер и начинка, в Салате - тип салата, в напитке - тип напитка
@param {Object} блюдо, которое нужно добавить в заказ    
@return {Boolean} результат проверки
*/  checkIngridients(menuItem){
      let result = false;
      if(menuItem instanceof Hamburger){
      if(menuItem.hasOwnProperty('_size')){
        if(menuItem.hasOwnProperty('_stuffing')){
          result=true;
        }else{
          console.log('Add stuffing in your hamburger')
        }          
      }else{
        console.log('Choose size of your hamburger')
      }
    }
      if(menuItem instanceof Salad){
        if(menuItem.hasOwnProperty('_item')){
          result = true
        }
        else{
          console.log('Choose type of salad')
        }
      } 
      if(menuItem instanceof Drink){
        if(menuItem.hasOwnProperty('_typeOfDrink')){
          result = true;
        }
        else{
          console.log('Choose type of drink')
        }        
      }    
    
    return result; 
 
  }
/*   добавление выбранного блюда в заказ. Перед этим - проверка на наличия в блюде всех необходимых параметров
  @param {Object} выбранное блюдо */
  add(menuItem){
    if(this.checkIngridients(menuItem)){
      this.orderList.push(menuItem)
    }  
  }
 /*  удаление выбранного блюда из заказа
  @param {Object} выбранное блюдо */
  delete(menuItem){
    this.orderList.includes(menuItem) ? this.orderList.splice(this.orderList.indexOf(menuItem),1) : console.log(`There is no ${menuItem} in your order`)
  }
 /*  Посчитать стоимость заказа
  @return {Number} общая стоимость заказа */
  sumOrderPrice(){
   let  orderPrice = 0
    for (let i=0; i<this.orderList.length; i++){  
      if(this.orderList[i] instanceof Hamburger){
        orderPrice+=this.orderList[i]._size.price
        orderPrice+=this.orderList[i].stuffing.price
      }else if(this.orderList[i] instanceof Salad) {
        orderPrice+=this.orderList[i]._item.price
      } else{
        orderPrice+=this.orderList[i]._typeOfDrink.price
      }
    }return orderPrice;
  }
/*   посчитать калории
  @return {Number} калории всего заказа */
  sumCalories(){
  let  orderCalories = 0
  for (let i=0; i<this.orderList.length; i++){  
    if(this.orderList[i] instanceof Hamburger){
      orderCalories+=this.orderList[i]._size.cal
      orderCalories+=this.orderList[i].stuffing.cal
    }else if(this.orderList[i] instanceof Salad) {
      orderCalories+=this.orderList[i]._item.cal
    } else{
      orderCalories+=this.orderList[i]._typeOfDrink.cal
    }
  }return orderCalories
  }
}
/* создаем заказ */
let myOrder = new Order()
/* создаем гамбургер  */
let bigHamburger = new Hamburger()
/* выбираем размер и начинку для гамбургера
 */bigHamburger.size= 'big'
bigHamburger.stuffing = 'cheese'
/* добавляем гамбургер в заказ
 */ myOrder.add(bigHamburger)
/*  создаем салат 
 */let mySalad = new Salad;
/*  выбираем тип салат */
mySalad.settypeOfSalad('olivie', 2340)
/* добавляем салат в заказ */
myOrder.add(mySalad)
/* создаем напиток
 */let myDrink = new Drink();
/*  выбираем тип напитка
 */myDrink.typeOfDrink = 'cola'
/*  добавляем напиок в заказ
 */myOrder.add(myDrink)
/*  удаляем напиток из заказа
 */ 
  myOrder.delete(myDrink)
/*создаем другой напиток */
mySecDrink = new Drink();
/* выбираем тип напитка 
 */mySecDrink.typeOfDrink = 'coffee'
/*  считаем калории в заказе
 */ myOrder.sumCalories()
/*  считаем сумму заказа
 */myOrder.sumOrderPrice();
/*   оплачиваем заказ
 */myOrder.payOrder() 



