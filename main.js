import Hamburger from './modules/hamburgers.js'
import Salads from "./modules/salads.js";
import Beverages from "./modules/beverages.js";
import store from "./Store/store.js";

const hamburger = new Hamburger();
const salad = new Salads();
const drink = new Beverages();

// 'STUFFING_CHEESE', 'SIZE_SMALL', 'STUFFING_POTATO', 'STUFFING_SALAD', 'SIZE_LARGE' - Параметры гамбургера
// 'CEZAR', 'OLIVIE' - Параметры салата
// 'COFFEE', 'COLA' - Параметры напитка

// getSize, getStuffing - методы только для класса гамбургер
//calculatePrice, calculateCalories, addPositions, removePositions, payPositions - методы расчета

// for example:
hamburger.addPositions('SIZE_LARGE', 'STUFFING_SALAD');
hamburger.payPositions();
salad.addPositions('CEZAR', 'OLIVIE');
salad.payPositions();
drink.addPositions('COFFEE');
drink.payPositions();

function getOrder() {
    if (store.length === 0)
        return console.log('Order is empty')

    for (let i = 0; i < store.length; i++) {
        if (i === 0)
            console.log(`\nYour order:\n------`);
        console.log(`${i}) ${store[i]}`)
    }
}

getOrder();

