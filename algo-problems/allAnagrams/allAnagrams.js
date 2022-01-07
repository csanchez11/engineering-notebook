/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {

  var results = [];

  // Edge Case Sting is only 1 character
  if (string.length === 1){
    results.push(string);
    return results;
  }

  // iterate over teh string
  for (var i = 0; i < string.length; i++){
    // pull out first letter
    let firstLetter = string[i];
    // create a string of remaining characters using substring
    let lettersLeft = string.substring(0,i) + string.substring(i+1);
    // find all anagrams of remaining characters
    let innerCombos = allAnagrams(lettersLeft)
    //iterate over array of inner permutations
    for (var j = 0; j < innerCombos.length; j++){
      //concatenate first character into all inner combos
      let anagram = firstLetter + innerCombos[j];
      //push to results array
      results.push(anagram);
    }
  }

  return results;
};

/*
Split  string into array of letters to choose from
create result array
create recursion function that takes in array of choices and previously selected letter
stops when array is empty
  iterate over array passed in and select letter
    slice that letter out of the array
    pass the selected letter and new array into recursion function

return result array

var allAnagrams = function(string) {
  var letters = string.split('');
  var results = [];

  //create recursion function that takes in array of letters and previous letter/s selected
  var recursion = function (array, previousSelected = "") {
    //if previousletter exists good else set equal to empty string var
    //if array.length === 0
    if (array.length === 0) {
      // push previous letters string into results array
      results.push(previousSelected)
      //return previous letters
      return;
    }
    //iterate over the array
    for (var i = 0; i < array.length; i++){
      //concatenate the string with selected letter
      previousSelected.concat(array[i]);
      // slice letter out of array
      array.splice(i,1);
      //return recursion function with new array and letter
      return recursion(array, previousSelected);
    }

  }
  recursion(letters, '');
  return results;
};



*/