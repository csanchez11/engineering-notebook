var removeElement = function(nums, val) {
  var k = 0;
  for(var i = 0; i < nums.length; i++){
      if(nums[i] === val){
          nums.splice(i,1);
          i--
      } else {
          k++
      }
  }
  return k;
};

// removeElement([3,2,2,3], 3);

var shortestPalindrome = function(s) {
  const reverseString = s.split('').reverse().join('');
  const length = s.length;

  for (let i = 0; i < length; i++) {
    console.log(i, `${reverseString.slice(0, i)}${s}`)
      if (s.slice(0, length - i) === reverseString.slice(i)) {
          return `${reverseString.slice(0, i)}${s}`;
      }
  }

  return '';
};
shortestPalindrome('abbacd'); // dcabbacd