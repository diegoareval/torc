const BASIC_TAX = 0.1;
const IMPORTED_TAX = 0.05; // 5 % for imported product
const PRODUCT_REGEX = /^([0-9]+) ((?:[A-z]+ )*(?:[A-z]+ at){1}) ((?:[0-9]{1,})(?:.[0-9]{1,2})*)$/g;

const TYPES =
  {
    'food' : {
      tax: 0,
      regex: /(chocolate)/g
    },
    'book' : {
      tax: 0,
      regex: /(book)/g
    },
    'medical' : {
      tax: 0,
      regex: /(pills)/g
    },
    'other': {
      tax: BASIC_TAX,
      regex: /[A-z]*/g
    }
  };

  module.exports = {
    BASIC_TAX, IMPORTED_TAX, PRODUCT_REGEX, TYPES
  }