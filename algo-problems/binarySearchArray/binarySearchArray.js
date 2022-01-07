/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  // set first beginning and endpoint
  var beg = 0;
  var end = array.length-1;
  // Find first midpoint
  var mid = Math.ceil((end + beg)/2);
  // while midpoint != target
  while (mid !== end) {
    if (array[mid] === target){
      return mid;
    } else if (array[mid] < target){
      beg = mid;
      mid = Math.ceil((end + beg)/2);
    } else if (array[mid] > target){
        end = mid-1;
        mid = Math.ceil((end + beg)/2);
      }
    }
    if (array[mid] === target){
      return mid;
    } else {
    return null;
  }
};
