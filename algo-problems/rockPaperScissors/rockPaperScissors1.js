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
* output = array of trings
* input =
* constraints = multiple hands
* edge cases = lots of hands equal lots of possibilities

create an array of roll options [R,P,S]
create a loop for first match
  create a loop for second match
    create a loop for third match
      concatenate each hand
      push to result array


*/


const rockPaperScissors = () => {
  let result = [];
  let possibleThrows = ['R', 'P', 'S'];
  for (let i = 0; i < possibleThrows.length; i++ ){
    for (let j = 0; j < possibleThrows.length; j++ ){
      for (let k = 0; k < possibleThrows.length; k++ ){
        let outcome = possibleThrows[i] + possibleThrows[j] + possibleThrows[k];
        result.push(outcome);
      }
    }
  }
  return result;
}

console.log(rockPaperScissors())