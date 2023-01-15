
const Cart = require('./Cart');
var cart = new Cart();
cart.addProduct({
  price: 12.49,
  name:'book',
  type: 'book'
}, 2);

cart.addProduct({
  price: 14.99,
  name:'Music CD',
  type: 'other'
}, 1);

cart.addProduct({
  price: 0.85,
  name:'Chocolate Bar',
  type: 'food'
}, 1);


console.log(cart.bill())