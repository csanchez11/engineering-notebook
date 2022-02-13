/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Edge cases:
  large strings
  empty strings
constraints:
  1 <= strs.length <= 104
  0 <= strs[i].length <= 100
  strs[i] consists of lowercase English letters.

  create result array
  create  a map to track groups
  iterate over strs array
    split, sort, join each string
    create array for key key: []
    add it to the key with the value being the original str

  push each value array into the result array

  return result array

*/

const groupAnagrams = (strs) => {
  let map = {};
  let result = [];

  for (let i = 0; i < strs.length; i++){
    let sortedString = strs[i].split('').sort().join('');
    if (map[sortedString] === undefined) {
      map[sortedString] = [];
    }
      map[sortedString].push(strs[i]);
  }
  for (let key in map){
    result.push(map[key]);
  }

  return result;
};

// const groupAnagrams = strs => {
//     const map = {};

//     for (let str of strs) {

//         const key = [...str].sort().join('');
//         console.log(key);

//         if (!map[key]) {
//             map[key] = [];
//         }

//         map[key].push(str);
//     }

//     return Object.values(map);
// };