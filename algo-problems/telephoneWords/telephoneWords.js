/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  let results = [];
  const recursion = (letter, index) => {
    if (letter.length === digitString.length) {
      results.push(letter);
      return;
    }
    let letterString = phoneDigitsToLetters[digitString[index]];
    for (let i = 0; i < letterString.length; i++) {
      recursion(letter + letterString[i], index + 1);
    }
  };
  recursion("", 0);
  return results;
};


// TODO: return every combination that can be spelled on a phone with these digits

console.log( telephoneWords('274') );


// var telephoneWords = function(digitString) {
//   // create results array;
//   let results = [];
//   // create edge case stop points for 0, 1 and .length < 0
//   if (digitString === '0' || digitString === '1') {
//     results.push(digitString);
//     console.log(results, "line 50")
//     return results;
//   }
//   if (digitString.length === 0){
//     return results;
//   }

//   // pull out string of letters
//   let letterString = phoneDigitsToLetters[digitString[0]];

//   // iterate over associated letters
//   for (let i = 0; i < letterString.length; i++){
//     // set first character varaible = string[i]
//     let firstChar = letterString[i];
//     // create substring of digitstring
//     let digitSubString = digitString.substring(1)
//     // set variable = to array that is returned when invoking telephone words on substring
//     let innerCombos = telephoneWords(digitSubString);
//     console.log(innerCombos)
//     //iterate over that array
//     for (let j = 0; j < innerCombos.length; j++){
//       //concatenate first letter with result of letters of array[i]
//       let word = firstChar + innerCombos[i];
//       // push into the results array
//       results.push(word);
//       // return results
//       return results;
//     }
//   }
//   return results;
// };
