const { IMPORTED_TAX, PRODUCT_REGEX, TYPES } = require('./constants')
const { getType } = require('./helpers')

/**
 * Parse the input string
 * @param product_string
 * @returns {{price: number, quantity: number, name: string, imported: boolean, type: string}}
 */
function analize(product_string) {
  var regex = new RegExp(PRODUCT_REGEX)
  var elements = regex.exec(product_string)

  if (!elements || elements.length < 3) {
    throw new Error('Parsing error: ')
  }

  var name = elements[2].replace(' at', '')
  var type = getType(name)

  return {
    price: parseFloat(elements[3]),
    quantity: parseInt(elements[1]),
    name: name,
    type: type,
  }
}

/**
 * Calculate taxed price for product
 * @param product
 * @returns {string}
 */
function getTaxedPriceOf(product) {
  var price = product.getPrice()
  var taxedPrice = price
  var type = product.getType()

  if (product.isImported()) {
    // price + rounded value of tax
    taxedPrice = price + Math.ceil(price * IMPORTED_TAX * 20) / 20
  }
  // taxedPrice + rounded value of tax
  taxedPrice += Math.ceil(price * TYPES[type].tax * 20) / 20

  return taxedPrice.toFixed(2)
}

module.exports.analize = analize
module.exports.getTaxedPriceOf = getTaxedPriceOf
