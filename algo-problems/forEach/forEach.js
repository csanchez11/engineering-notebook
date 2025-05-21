// Given an array, return an array where the each value is the product of the next two items: E.g. [3, 4, 5] -> [20, 15, 12]
/**
 *  input = arr
 *  output = arr
 *  constraints = numbersints, 0-2^31 pos and neg, space complexity?
 *  edge cases = less than three numbers
 *
 * if inplace you need to store the first two index values
 */


// function forEach(arr) {
//   const result = [];
//   for(let x = 0; x < arr.length; x++){
//     let plusOne = x + 1;
//     let plusTwo = x + 2;
//     if (plusOne > arr.length - 1){
//       plusOne = plusOne % (arr.length)
//     }
//     if (plusTwo > arr.length - 1){
//       plusTwo = plusTwo % (arr.length)
//     }
//     let product = arr[plusOne] * arr[plusTwo]
//     result.push(product);
//   }
//   return result
// };

function forEach(arr) {
    if (arr.length < 3){
      return arr
    }
    // store the first two elements at the end
    arr.push(arr[0], arr[1])

    for(let x = 0; x < arr.length - 2; x++){
      let plusOne = x + 1;
      let plusTwo = x + 2;
      let product = arr[plusOne] * arr[plusTwo]
      arr[x] = product;
    }

    // pop the stored two elements off the back
    arr.pop();
    arr.pop();

    return arr
  };

console.log(forEach([3, 4, 5] ));