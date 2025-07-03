/**
 * Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes)
 * and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
 *
 * sounds like twoSum
 */


const inFlightEntertainment = (flightLength, movieLengths) => {
  const cache = new Map();

  for (let i = 0; i < movieLengths.length; i++){
    if (cache.has(flightLength - movieLengths[i])){
      return true
    } else {
      cache.set(movieLengths[i])
    }
  }
  return false
}