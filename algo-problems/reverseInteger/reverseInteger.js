/**
 * reverse a positive integer without transforming it to another datatype
 */

var reverseNum = function(num) {
  var newNum = Math.abs(num);
  var rev = 0;
    while(newNum > 0){
      rev = rev*10 + newNum%10;
      newNum = Math.floor(newNum/10);
    }
  return rev
};

console.log(reverseNum(1234)) //4321
console.log(reverseNum(0)) // 0