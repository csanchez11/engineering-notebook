const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

/**
 * Reverse the array in place to get the secret message
 */

const reverseWordsOutOfPlace = (arr) => {
  let reversed = arr.reverse();

  let arrOfWords = reversed.join('').split(' ');

  for ( let i = 0; i < arrOfWords.length; i++) {
    let forewardsWord = arrOfWords[i].split('').reverse().join('');
    arrOfWords[i] = forewardsWord;
  }
  return arrOfWords.join(' ').split('');
};

console.log(reverseWordsOutOfPlace(message))