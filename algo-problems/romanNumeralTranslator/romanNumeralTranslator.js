
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 *
 * output = numerical sum value
 * input is either a roman numeral or not a string
 * constraints all positive values greater than 0
 * edge cases non-string values
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

// var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
// };

// Jan 6 2022
  // return null if not a string
  // split into an array
  // iterate over the array
    // add to sum
    // if current element is greater than the previous
      // subtract previous from current element before adding to sum
  // return sum

var translateRomanNumeral = function(romanNumeral) {
  if(typeof romanNumeral !== 'string'){
    return null;
  }

  var romArray = romanNumeral.split('');
  var sum = 0;
  var previous;
  var letter;
  for(var i = 0; i < romArray.length; i++){
    letter = romArray[i];
    if(previous && DIGIT_VALUES[previous] < DIGIT_VALUES[letter]) {
      sum += DIGIT_VALUES[letter] - 2*DIGIT_VALUES[previous];
    } else {
      sum += DIGIT_VALUES[letter];
    }
    previous = letter;
  }
  return sum;
};

console.log(translateRomanNumeral('LVIII')); // 58
console.log(translateRomanNumeral('III')); // 3
console.log(translateRomanNumeral('IX')); // 9
console.log(translateRomanNumeral('MCMXCIV')); // 1994