import Hamburger from './modules/hamburgers.js'
import Salads from "./modules/salads.js";
import Beverages from "./modules/beverages.js";

const hamburger = new Hamburger();
// hamburger.getSize()

// hamburger.getStuffing('STUFFING_CHEESE', 'STUFFING_SALAD', 'STUFFING_POTATO')
// hamburger.getStuffing('STUFFING_CHEESE', 'STUFFING_SALAD', 'STUFFING_POTATO','STUFFING_POTATO')
// hamburger.calculatePrice('SIZE_SMALL', 'STUFFING_SALAD', 'STUFFING_POTATO', 'STUFFING_POTATO', 'STUFFING_POTATO')
// hamburger.calculateCalories('SIZE_SMALL', 'STUFFING_POTATO', 'STUFFING_SALAD')
// hamburger.addPositions('STUFFING_CHEESE', 'STUFFING_SALAD', 'STUFFING_POTATO')
// hamburger.removePositions('STUFFING_SALAD')
// hamburger.payPositions()
// hamburger.addPositions('STUFFING_CHEESE', 'STUFFING_SALAD', 'STUFFING_POTATO')

const item = new Salads()
item.calculatePrice('OLIVIE', 'OLIVIE', 'CEZAR');
// item.addPositions('OLIVIE', 'OLIVIE', 'CEZAR');
// item.addPositions();
// item.removePositions('CEZAR', 'OLIVIE');
// item.payPositions()
// item.removePositions('OLIVIE');
// item.addPositions('OLIVIE', 'CEZAR');

// item.calculateCalories('OLIVIE', 'OLIVIE', 'CEZAR');
// newItem.calculateCalories('olivie', 'olivie', 'cezar');
//
const bever = new Beverages();
//
bever.calculateCalories('COFFEE', 'COFFEE', 'COLA')
bever.calculatePrice('COFFEE', 'COFFEE', 'COLA')
