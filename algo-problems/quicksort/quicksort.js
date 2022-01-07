/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 *
 * Sounds like it picks a pivot element
 * creates two arrays one of elements below pivot and one of elements above
 * sort each half then combine with pivot in the middle to form a new sorted array
 */


var quicksort = function(array) {
  //create recursion stopper for array less than or equal to 1 element
  if (array.length <= 1){
    return array;
  }
  //set pivot
  let pivot = array[0]
  //create two empty arrays
  let arr1 = [];
  let arr2 = [];
  //iterate over array
  for (let i = 1; i < array.length; i++){
    //if element is less than pivot
    if (array[i] < pivot){
      //push into array1
      arr1.push(array[i]);
    } else {
    //else
      //push into array2
      arr2.push(array[i]);
    }
  }

  //Sort both arrays recursively..helper function?
  let copyArr1 = quicksort(arr1);
  let copyArr2 = quicksort(arr2);

  //concatenates the arrays with the pivot into new result array
  copyArr1.push(pivot);
  let resultArray = copyArr1.concat(copyArr2)
  //return result array
  return resultArray
};
