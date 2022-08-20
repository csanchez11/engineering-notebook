/**
 * Return all words starting with a prefix
 * Ex:
 * Words: [Apple Application Banana Boore Book]
 * Prefix: ['App', 'Boo']
 * Return: [Apple, Application], [Boore, Book]
 *
 * iterate over the words and see if the word has either  of the prefixes
 */



 const prefixFinder = (words, prefixes) => {
  let result = [];
  for(let j = 0; j < prefixes.length; j++) {
    let prefixArray = [];
    for(let i = 0; i < words.length; i++) {
      // see if word contains one of the prefixes
      let foundPrefixes = prefixHelper(words[i], prefixes[j]);
      if (foundPrefixes && foundPrefixes.length){
        prefixArray.push(foundPrefixes);
      }
    }
    if (prefixArray.length){
      result.push(prefixArray);
    }
  }
  return result;
};

/**
 * Returns word of prefixes found or null if none exist
 */
const prefixHelper = (word, prefix) => {
  let pre = prefix.toUpperCase();
  let wordUpper = word.toUpperCase();
  if (wordUpper.indexOf(pre) === 0){
    return word
  }
  return null
};


let arr1 = ['Apple', 'Application', 'Banana', 'Boore', 'Book'];
let prefix1 = ['App', 'Boo'];

console.log(prefixFinder(arr1, prefix1));