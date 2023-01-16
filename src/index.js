const { allData } = require('./data')
const Cart = require('./Cart')

allData.forEach((suite) => {
  const cart = new Cart()
  suite.data.forEach(({ quantity, ...rest }) => {
    cart.addProduct({ ...rest }, quantity)
  })
  print(cart)
})

function print(cart) {
  console.log('.......begin block.............')
  console.log(cart.bill())
  console.log('.............end block.............')
}
