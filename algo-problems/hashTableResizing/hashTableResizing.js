/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
console.log(getIndexBelowMaxForKey('bryan',6));
var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    var bucket = [];
    //run the key thru the hashing function to get an index number
    var hashIndex = getIndexBelowMaxForKey(key, storageLimit)
    // if storage at index does not have a bucket
    if( !storage[hashIndex] ){
      // create an array bucket
      // push the key;value into that bucket
      bucket[0] = [key, value];
      //set storage array at hashIndex equal to bucket
      storage[hashIndex] = bucket;
    } else {
    // else
    var found = false;
      //iterate over the bucket
      for ( var i = 0; i < storage[hashIndex].length; i++){
        // if the key already exists in bucket
        if (storage[hashIndex][i][0] === key){
          // reset value
          found = true;
          storage[hashIndex][i][1] = value;
        }
      }
      //else push value into bucket at given index
      if( found === false ){
        storage[hashIndex] = bucket.push([key, value])
      }
    }

    // resize storage limit //
    if( storage.length > .75*storageLimit ){
      storageLimit *= 2
    }
  };

  result.retrieve = function(key) {
    var hashIndex = getIndexBelowMaxForKey(key, storageLimit)
    // if nothing exists at storage[hashIndex]
    if( !storage[hashIndex] ){
      // return undefined
      return undefined;
    } else {
      // iterate over the bucket at storage[hashIndex]
      for ( var i = 0; i < storage[hashIndex].length; i++){
        // if bucket[i][0] === key
        if ( storage[hashIndex][i][0] === key ){
          // return value at bucket[i][1]
          return storage[hashIndex][i][1];
        }
      }
      // else return undefined
      return undefined;
    }
  };

  result.remove = function(key) {
    var hashIndex = getIndexBelowMaxForKey(key, storageLimit)
    if ( !storage[hashIndex] ){
      return undefined;
    }
    // iterate over the bucket at storage[hashIndex]
    for ( var i = 0; i < storage[hashIndex].length; i++){
      // if key matches key
      if ( storage[hashIndex][i][0] === key ){
        // remove tuple from bucket
        storage[hashIndex].splice(i,1);
      }
    }

    // resize
    if( storage.length < .25*storageLimit ){
      storageLimit /= 2;
    }
  };

  return result;
};


// let ht = makeHashTable();
// ht.insert('chris', 'sanchez');
// ht.insert('bryan', 'martinez');
// ht.insert('katy','kelley');
// console.log(ht.retrieve('chris'));