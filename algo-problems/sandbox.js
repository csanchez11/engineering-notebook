const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};
function dfsIterative(graph, startNode) {
  const visited = new Set();
  const stack = [startNode]; // Use an array as a stack

  console.log("DFS Traversal (Iterative):");
  while (stack.length > 0) {
    const node = stack.pop(); // Pop the top node

    if (!visited.has(node)) {
      visited.add(node);
      console.log(node); // Process the node

      const neighbors = graph[node];
      if (neighbors) {
        // Add neighbors to the stack in reverse order to maintain DFS order
        // (or simply iterate and push, the stack's LIFO property ensures deep exploration)
        for (let i = neighbors.length - 1; i >= 0; i--) {
          const neighbor = neighbors[i];
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
}
dfsIterative(graph, 'A');