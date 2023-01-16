const { TYPES } = require('../constants')
/**
 *
 * @param product_name
 * @returns {string}
 */
function getType(product_name) {
  var type = undefined
  var keys = Object.keys(TYPES)
  var i = 0

  while (type == undefined && i < keys.length) {
    if (product_name.match(TYPES[keys[i]].regex)) {
      type = keys[i]
    }

    i++
  }

  return type || 'other'
}

module.exports = { getType }
