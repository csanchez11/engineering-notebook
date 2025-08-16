/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 * bubbleSort([5, 2, 4, 1, 6, 3]); // yields [1, 2, 3, 4, 5, 6]
 *
*/

// Feel free to add helper functions if needed.



// var bubbleSort = function (array) {
//   // create a for loop that iterates over the length of the array
//   for (var i = 0; i < array.length; i++) {
//     //create a second for loop that iterates over the length of the array
//     for (var j = 0; j < array.length; j++) {
//       //if the current array element > the next array element
//       if (array[j] > array[j + 1]) {
//         //invoke swap function
//         swap(array, j, j + 1);
//       }
//     }
//   }
//   return array;
// }

// var swap = (array, indexA, indexB) => {
//   var temp = array[indexA];

//   array[indexA] = array[indexB];
//   array[indexB] = temp;
// }

function bubbleSort(arr) {
  for(let x = 0; x < arr.length; x++){
    for(let y = 0; y < arr.length; y++){
      if(arr[y] > arr[y+1]){
        let temp = arr[y];
        arr[y] = arr[y+1]
        arr[y+1] = temp
      }
      console.log(x, y)
    }
  }
  return arr
}

console.log(bubbleSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
console.log(bubbleSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]