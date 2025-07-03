/**
 * Recreate Array.prototype's flat, map, reduce, filter from scratch
 */

// flattens to
Array.prototype.myFlat = function(depth = 1) {
  if (depth < 0) {
    return this;
  }
  const resultArr = [];
  this.forEach(element => {
    if (Array.isArray(element) && depth > 0){
      resultArr.push(...element.myFlat(depth - 1));
    } else {
      resultArr.push(element)
    }
  })
  return resultArr
};

const myTestArray = [1,2,3,[4,5,6],7,[[[8]],9]];

// console.log(myTestArray.myFlat());
// console.log(myTestArray.flat());

// invokes a callback function on every element in array and returns separate array
Array.prototype.myMap = function(callback, thisArg = this) {
  const resultArr = [];
  thisArg.forEach((element, index, thisArg) => {
    resultArr.push(callback(element, index, thisArg))
  });

  return resultArr
};

const myTestArray1 = [1,2,3,4,5,6,7,8,9,0];
// console.log(myTestArray1.myMap((elem) => elem * 2))
// console.log(myTestArray1.map((elem) => elem * 2))

Array.prototype.myReduce = function(callback, initialValue) {
  let firstValue = initialValue !== undefined ? initialValue : this[0];
  let firstIdx = initialValue ? 0 : 1;
  let accumulator = firstValue;
  for(let x = firstIdx; x < this.length; x++){
    accumulator = callback(accumulator, this[x])
  }
  return accumulator
};

// console.log(myTestArray1.myReduce((acc, curr) => acc + curr))
// console.log(myTestArray1.reduce((acc, curr) => acc + curr))
// prints out new array with values that meet the filtercallback
Array.prototype.myFilter = function(callback) {
  let result = [];

  for(let x = 0; x < this.length; x++){
    if (callback(this[x]) === true){
      result.push(this[x]);
    }
  }
  return result
};

// console.log(myTestArray1.myFilter((elem) => elem > 2))
// console.log(myTestArray1.filter((elem) => elem > 2))

// fills the array with the value from start to end
Array.prototype.myFill = function(value, start = 0, end = this.length - 1) {
  for (let x = start; x < end; x++){
    if (x < this.length){
      this[x] = value;
    }
  }
};

const arr1 = new Array(5);
const arr2 = [];
// arr1.myFill(2,2,5)
// arr2.myFill(2,2,5)
// console.log(arr1);
// console.log(arr2)

Function.prototype.myCall = function (thisArg, ...args){
  if (thisArg === null){
    this
  }
  thisArg.func = this;
  return thisArg.func(...args);
}

const person = {
  name: "John",
  greet: function(message, addedMessage) {
    console.log(`${message} ${this.name}, ${addedMessage}`);
  }
};

const anotherPerson = {
  name: "Jane"
};

// person.greet.myCall(anotherPerson, "Hello", "I love you!"); // Output: Hello, Jane!

Array.prototype.myConcat = function (arr){
  arr.forEach(elem => this.push(elem))
  return this
}
// const myTestArray2 = [1,2,3,4,5,6,7,8,9,0];
// const myTestArray3 = [1,2,3,4,5,6,7,8,9,0];
// console.log(myTestArray2.myConcat(myTestArray3));


class Person {
  #privateVariable = 'sanchez';
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`)
    this.#sayBye();
  }
  #sayBye() {
    console.log(`Bye ${this.name} ${this.#privateVariable}`)
  }
}

const chris = new Person('chris')

// chris.greet();
console.log(chris.greet())
// chris.sayBye();

const letterToNumber = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
}
var convertToTitle = function(columnNumber) {
  let number = 0;
  let idx = columnNumber.length - 1;

  while (idx >= 0){
      let char = columnNumber.charAt(idx);
      let place = (columnNumber.length - 1) - idx
      number += ((26**place)*letterToNumber[char])
      idx--
  }
  return number
};
console.log(convertToTitle("ZZY")) // 701


// take [3,4,5] and return [20, 15, 12]
const multiplier = (arr) => {
  return arr.map((elem, i, givenArr) => {
    let nextI = (i + 1) % (arr.length);
    let nextI2 = (i + 2) % (arr.length);
    return givenArr[nextI] * givenArr[nextI2]
  });
}

console.log(multiplier([3,4,5]));