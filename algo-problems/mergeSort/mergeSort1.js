// 2022.01.29


// cut array into two arrays until has only one element
// pair the two arrays into order
// recursive
//
// if array is 1 element
  // return
// find the mid point
// slice array around midpoint
  // return the mergeSort on the halves


const mergeSort = function(arr) {
  if(arr.length <= 1){
    return arr
  }
  let midpoint = Math.floor(arr.length/2);
  let arr1 = arr.slice(0, midpoint);
  let arr2 = arr.slice(midpoint);
  return merge(mergeSort(arr1), mergeSort(arr2));
};

const merge = function(arr1, arr2){
  let result = [];
  let firstIdx = 0;
  let secondIdx = 0;

  while(firstIdx < arr1.length && secondIdx < arr2.length){
    if (arr1[firstIdx] < arr2[secondIdx]){
      result.push(arr1[firstIdx]);
      firstIdx++
    } else {
      result.push(arr2[secondIdx]);
      secondIdx++
    }
  }
  // console.log(result)
  return result.concat(arr1.slice(firstIdx)).concat(arr2.slice(secondIdx));
};


let arrEx = [3,7,34,9,0,1,65,3,6,11,2,6,8,-4];
console.log(mergeSort(arrEx));