/**
 * @param {number} num
 * @return {number}

 output = num
 input = num
 constraints = nums 0 -infinity
 edge cases = 0, 3 or more digits

 num = 486

 486 % 10 = 6
 48  % 10 = 8
 4  % 10 = 4

 sum = 18
 num = 18

 18 % 10 = 8
 1 % 10 = 1

 sum = 9


 while num > 9
    pop off the last digit and add to sum until
    set num to the sum of each digit
 */
    const addDigits = function(num) {
      if (num <= 9) {
          return num;
      }
      let sum = 0;
      while (num/10 > 1) {
        let reducedNum = Math.floor(num /10);
        let lastDig = num % 10;
        sum = lastDig + reducedNum
        num = reducedNum
      }
    return addDigits(sum)
  };

console.log(addDigits(38))