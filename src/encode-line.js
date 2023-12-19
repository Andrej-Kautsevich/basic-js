const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';

  let result = '';
  let currentSymbol = str[0];
  let counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    if (symbol === currentSymbol) {
      counter += 1;
    } else {
      result += counter > 1 ? counter + currentSymbol : currentSymbol;
      counter = 1;
      currentSymbol = symbol;
    }
  }
  result += counter > 1 ? counter + currentSymbol : currentSymbol;
  
  return result;
}

module.exports = {
  encodeLine
};
