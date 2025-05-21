/**
Write a function for doing an in-place ↴ shuffle of a list.
The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.

Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

output same array that has been shuffled
input list
constraints in place shuffle,
edge cases, extremely short list or extremely long list, no elements, 1 element
*/

function get_random(floor, ceiling) {
  // returns random number >= floor and <=ceiling

};
//
function inPlaceShuffle (list) {
  if (list.length < 2) return

  for (let i = 0; i < list.length; i++) {
    let randNum = get_random(i, list.length - 1);

  }
};