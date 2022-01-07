/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  // create results array
  let results = [''];
  let array = str.split(''); // [a,b,c]

  //iterate over the array
  for (let i = 0; i < array.length; i++){
    //set length of results array as end point to prevent infinite loop
    let length = results.length;
    //iterate over length
    for (let j= 0; j < length; j++){
      //push string results into results array
      results.push(results[j]+ array[i])
    }
  }

  return results;
};

