import { FoodItem } from './FoodItem.js';

class Beverage extends FoodItem {};

Beverage.COLA = {
  name: 'Cola',
  price: 50, 
  calories: 40
};
Beverage.COFFEE = {
  name: 'Coffee',
  price: 80, 
  calories: 20
};

export { Beverage };