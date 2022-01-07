// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  let counter = 0;
  for (i = 0; i <= str1.length; i++){
    for (j = 0; j <= str2.length; j++){
      if (str1[i] === str2[j]){
        counter++
      }
    }
  }
  return str2.length - counter;
}
