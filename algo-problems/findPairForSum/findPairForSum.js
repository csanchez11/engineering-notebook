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
 */

const finder = function (nums, target) {
  let map = new Map();
  let resultStatement = '';

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if(map.has(complement)){
        resultStatement += ' Pair found (' + complement + ', ' + nums[i] + ')';
    }
    map.set(nums[i],complement)
  }
  return resultStatement === '' ? 'Pair not found' : resultStatement;
};


console.log(finder([8, 7, 2, 5, 3, 1], 10))