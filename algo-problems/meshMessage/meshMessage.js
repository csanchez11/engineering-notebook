const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
  'Liam'    : ['Miguel'],
  'Lucas'   : ['Adam'],
  'Scott'   : ['Omar'],
  'Nathan'  : ['Noam', 'Miguel'],
  'Sofia'   : ['Adam']
};


// jayden to adam   ['Jayden', 'Amelia', 'Adam']
/**
 * Input two name strings, and accumulator array
 * output array of shortest path between two target names
 * constraints large network, everyone is connected
 * edge cases: only one path, multiple paths of diff lengths or same lengths,
 *
 * iterate the array to look for a name
 * take each name and iterate their array for the name
 */
const meshMessage = function(network, name1, name2){

  const queue = [name1];
  const output = [];
  const nodePath = {};
  nodePath[name1] = 'START';

  while (queue.length > 0){
    let current = queue.shift();
    if (current === name2){
      output.push(current);
      while(current != name1){
        let prev = nodePath[current];
        output.unshift(prev);
        current = prev;
      }
      break;
    }
    network[current].forEach((person) => {
      if (!nodePath[person]){
        queue.push(person);
        nodePath[person] = current;
      }
    })
  }
  return output
}

// console.log(meshMessage(network, 'Jayden', 'Adam'));// [ 'Jayden', 'Amelia', 'Adam' ]
console.log(meshMessage(network, 'Min', 'Liam'));// [ 'Min', 'Jayden', 'Amelia', 'Miguel', 'Liam' ]
// console.log(meshMessage(network, 'Omar', 'Liam'));// [ 'Omar', 'Ren', 'Jayden', 'Amelia', 'Miguel', 'Liam' ]
// console.log(meshMessage(network, 'Lucas', 'Liam'));// [ 'Lucas', 'Adam', 'Miguel', 'Liam' ]
