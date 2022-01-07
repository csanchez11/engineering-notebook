/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 *
 *
 * Takes in an array of numbers and returns the first number that occurs an even number of times.
 *
 * 6 technically beats 4 but because the first appearance is after, means that it is building an internal object within the function then iterates over the object to find first even length.  The problem is that it is auto-sorting my object because teh keys are numbers. I don't know if this is intended.
 *
 * Input = array
 * output = number
*/

var evenOccurrence = function(arr) {
  // create empty object variable
  let occurrences = {};
  // iterate over the array arr
  for (var i = 0; i < arr.length; i++){
    let number = arr[i]
    // if element does not exist in object
    if(!occurrences[number]){
      // create new key with value 1
      occurrences[number] = 1;
    } else if(occurrences[number]){
      // increment value at key
      occurrences[number]++;
    }
  }

  // iterate over object
  for (var key in occurrences){
    // if value is even
    if(occurrences[key] % 2 === 0){
      // return key
      return key;
    }
  }

};
