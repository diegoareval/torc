const { input1, input2, input3 } = require('./data')
const Cart = require('./Cart')
var cart1 = new Cart()
var cart2 = new Cart()
var cart3 = new Cart()

input1.forEach(({ quantity, ...rest }) => {
  cart1.addProduct({ ...rest }, quantity)
})
print(cart1)

input2.forEach(({ quantity, ...rest }) => {
  cart2.addProduct({ ...rest }, quantity)
})

print(cart2)

input3.forEach(({ quantity, ...rest }) => {
  cart3.addProduct({ ...rest }, quantity)
})

print(cart3)

function print(cart) {
  console.log('.......begin block.............')
  console.log(cart.bill())
  console.log('.............end block.............')
}
