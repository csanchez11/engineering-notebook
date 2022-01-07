/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/


var makeChange = function(total) {
  let combos = 0
  let coins = [1, 2, 5, 10, 20, 50, 100, 200];

  findCombos = (index, total) => {
    let currentCoin = coins[index];
    if (index === 0) {
      total % currentCoin === 0 && combos++;
      return;
    }
    while (total >= 0) {
      findCombos(index - 1, total);
      total -= currentCoin;
    }
  }

  findCombos(coins.length - 1, total);
  return combos;

};



// var makeChange = function(total) {

//   var coins = [1,2,5,10,20,50,100,200];
//   var count = 0;

//   for (var a = total; a >= 0; a -= coins[coins.length-1]) {
//     for (var b = a; b >= 0; b -= coins[coins.length-2]) {
//       for (var c = b; c >= 0; c -= coins[coins.length-3]) {
//         for (var d = c; d >= 0; d -= coins[coins.length-4]) {
//           for (var e = d; e >= 0; e -= coins[coins.length-5]) {
//             for (var f = e; f >= 0; f -= coins[coins.length-6]) {
//               for (var g = f; g >= 0; g -= coins[coins.length-7]) {
//                 count++;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return count;
// };