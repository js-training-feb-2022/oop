import Hamburger from './modules/hamburgers.js'
import Salads from "./modules/salads.js";
import Beverages from "./modules/beverages.js";
import Order from "./modules/order.js";

const hamburger = new Hamburger();
const salad = new Salads();
const drink = new Beverages();

// 'STUFFING_CHEESE', 'SIZE_SMALL', 'STUFFING_POTATO', 'STUFFING_SALAD', 'SIZE_LARGE' - Параметры гамбургера
// 'CEZAR', 'OLIVIE' - Параметры салата
// 'COFFEE', 'COLA' - Параметры напитка

// getSize, getStuffing - методы только для класса гамбургер
//calculatePrice, calculateCalories, addPositions, removePositions, payPositions - методы расчета, добавления и удаления

const burger = ['SIZE_LARGE', 'STUFFING_SALAD', 'STUFFING_CHEESE']
const burger2 = ['STUFFING_SALAD', 'SIZE_SMALL', 'STUFFING_POTATO']
const salads = ['CEZAR', 'OLIVIE', 'CEZAR', 'OLIVIE']
const drinks = ['COFFEE', 'COLA']
const drinks2 = ['COLA']

let order = new Order();
order.addPositions(burger, burger2, salads, drinks, drinks2)


// for example:

// console.log(hamburger.calculatePrice())
// console.log(salad.calculateCalories())
// console.log(drink.calculateCalories())
// hamburger.getStuffing()
// hamburger.getSize()
// order.calculateCalories()
// order.calculatePrice()
// order.removePositions('COLA');
// order.payPositions()
