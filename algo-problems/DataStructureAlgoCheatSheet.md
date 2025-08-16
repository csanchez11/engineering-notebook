# Data Structure Algorithm Cheat Sheet

## Graphs
For Shortest path use Breadth First Search to move level by level
For sparce graphs with fewer connections use Depth First Search, good for finding all possible paths

### Graph Matrix
A graph matrix, also known as an Adjacency Matrix will be a two-dimensional array with the "weights" represented in each node.
Graphs can be directed or undirected, below is undirected if a node is connected to another, communication is bi-directional

``` JavaScript
const graphMatrix = [
  [null, 0, 2, 4],
  [3, 4, 2, 7],
  [1, 9, 5, 8],
  [6, 0, 3, 1],
]

const twoDArray = Array.from(Array(rows), () => new Array(cols).fill(0));
```

### Graph List
A Graph List is also known as an Adjacency List and looks like an Object with keys of each node and the value being an array of adjacent nodes.

``` JavaScript
const graphMatrix = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam']
}
```

## Breadth First Search
This search method is used to traverse trees and graphs, level by level. It is really helpful to find the shortest path between nodes in a graph/tree or find the deepest path in a tree. This is great for Wide trees

```JavaScript
function bfs (root) {
  const queue = [root];
  const visited = {}
  while(queue.length > 0){
    const node = queue.shift();
    // DO SOMETHING WITH NODE
    if (!visited[node.left]) { queue.push(node.left) }
    if (!visited[node.right]) { queue.push(node.right) }
  }
  return //Something
}
```


## Depth First Search
Also used to traverse trees and graphs but better for deep trees rather than wide trees. Great for exploring all possible paths

- Iterative approach uses a stack
- You can also do DFS recursively

```JavaScript
function dfs (root) {
  const stack = [root];
  const visited = {}
  while(stack.length > 0){
    const node = queue.pop();
    // DO SOMETHING WITH NODE
    if (!visited[node.left]) { stack.push(node.left) }
    if (!visited[node.right]) { stack.push(node.right) }
  }
  return //Something
}

const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};
function dfsRecursive(graph, startNode, visited = {}) {
  visited[startNode] = true;
  console.log(startNode); // Process the node

  const neighbors = graph[startNode];
  if (neighbors) {
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsRecursive(graph, neighbor, visited);
      }
    }
  }
};
dfsRecursive(graph, 'A');
```

## Linked List
```JavaScript
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
```

### Remove Head
head = head.next

### Remove node from middle
node(n-1) --> node(n) --> node(n+1)
node(n-1).next    -->     node(n+1)

### Remove last node
node(n) --> node(n+1) --> null
node(n).next --> null

### Trick for edge cases near the head
let dummy = new ListNode(0, head);