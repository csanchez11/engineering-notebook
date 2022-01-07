/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
*/

var rockPaperScissors = function () {
  var throws = ["R", "P", "S"];
  var possibilities = [];
  // create a for loop that iterates over the posibilites array
    // create a for loop that iterates over the posibilites array
      // create a for loop that iterates over the posibilites array
        //create a string variable that concatenates all three throws into one throw
        //push that throw into the possibilities array
  for (var i = 0; i < throws.length; i++){
    for (var j = 0; j < throws.length; j++){
      for (var k = 0; k < throws.length; k++){
        possibilities.push(throws[i] + throws[j] + throws[k]);
      }
    }
  }

  return possibilities;
};

/*
Take an array of possible throws [R, P, S]
iterate over array 3 times, one for every throw in concatenate the string and push to the output array
*/


//// EXTRA CREDIT ////
//  Extra credit:
//    - Make your function return answers for any number of rounds.
//
//  Example:
//  rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]

/*
Given an input that represents the number of throws, the function will create a tree with a parent node representing each posibility and a generation of nodes for every throw. The function will then iterate over every node recursively and concatenate the possibilities or every lineage of nodes.

var tree = {
  R:{ R:{...}}
  P:{ R:{...}}
  S:{ R:{
          R:{...}
          P:{...}
          S:{...}
         }
      P:{
          R:{...}
          P:{...}
          S:{...}
         }
      S: {
          R:{...}
          P:{...}
          S:{...}
         }
    }
  }

var node = {R:null, P:null, S:null}

var rockPaperScissors = function (num) {
  //create an outcome array
  //create a throws array
  //create a recursion function ....???

  // return outcome array
*/
