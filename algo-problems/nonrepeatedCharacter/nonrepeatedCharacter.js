/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let lowerCaseString = string.toUpperCase()
  let characterCount = {};
  let letters = lowerCaseString.split('');
  for ( var i = 0; i < letters.length; i++){
    let character = letters[i];

    // if characterCount.character exists
    if (characterCount[character]){
      // increment count
      characterCount[character]++;
    }
    // if character is undefined in characterCount
    if (characterCount[character] === undefined){
      // set characterCount.character equal to 1
      characterCount[character] = 1;
    }
  }

  for (var count in characterCount){
    // if (characterCount.count === 1)
    if (characterCount[count] === 1) {
      // return count
      return count;
    }
  }

};


/*
Split the string into an array of each character
iterate over the array and add each character to an object where each key is the letter and the value is the count. When done iterate over the object and return the first key with 1 as the value
*/