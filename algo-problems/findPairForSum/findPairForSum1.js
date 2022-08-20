/**
 * Given an unsorted integer array, find a pair with the given sum in it.
 *
 * Input:
 *
 *  nums = [8, 7, 2, 5, 3, 1]
 *  target = 10
 *
 *  Output:
 *
 *  Pair found (8, 2)
 *  or
 *  Pair found (7, 3)
 *
 * iterate over the array and store element and complement in a map to find later so that I have a shorter time complexity
 */

const findTarget = (arr, target) => {
  let hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (hashmap[complement]){
      return `Pair Found: (${complement}, ${arr[i]})`
    } else {
      hashmap[arr[i]] = complement;
    }

  }
};

let nums = [8, 7, 2, 5, 3, 1];
let target = 10;
console.log(findTarget(nums,target))