const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separatorValue, additionSeparatorValue, repeatTimes;

  if (options.separator) {
    separatorValue = options.separator
  } else {
    separatorValue = '+'
  }

  if (options.additionSeparator) {
    additionSeparatorValue = options.additionSeparator
  } else {
    additionSeparatorValue = '|';
  }

  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes
  } else {
    repeatTimes = 1;
  }

  let additionString = '';

  if ('addition' in options) {
    if (options.additionRepeatTimes) {
      const repeatArray = Array(options.additionRepeatTimes).fill(String(options.addition));
      additionString = repeatArray.join(additionSeparatorValue);
    } else {
      additionString = String(options.addition);
    }
  }

  const string = String(str) + additionString;
  const repeatArray = Array(repeatTimes).fill(string);

  const repeatString = repeatArray.join(separatorValue);
  return repeatString;
}

module.exports = {
  repeater
};
