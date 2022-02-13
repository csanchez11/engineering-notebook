/**
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.



 1 - 2
 2 - 4
 3 - 8
 4 - 16
 output = arr of arrays
 input - array of nums between -10 and 10
 constraints = -10 - 10 for num, nums has max length of 10, all nums are unique
 edge = 1 element, 10 elements,


  @param {number[]} nums
  @return {number[][]}

 */
 var subsets = function(nums) {
  let result = [[]];

  for (let i = 0; i < nums.length; i++) {
      let copyOfResult = result.slice();
      copyOfResult.forEach( (subArray) => {
          let copySubArr = subArray.slice();
          copySubArr.push(nums[i]);
          result.push(copySubArr);
      })
  }
  return result;
};