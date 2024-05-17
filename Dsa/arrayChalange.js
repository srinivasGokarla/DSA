function ArrayChallenge(strArr) {
    const parentMap = {};
    const childrenMap = {};
  
    for (let pair of strArr) {
      // Remove parentheses and split the pair into child and parent
      pair = pair.slice(1, -1);
      let [child, parent] = pair.split(',').map(Number);
  
      // Check if the child already has a parent (invalid tree)
      if (parentMap.hasOwnProperty(child)) {
        return "false";
      }
  
      // Assign the parent to the child
      parentMap[child] = parent;
  
      // Add the child to the parent's children list
      if (!childrenMap.hasOwnProperty(parent)) {
        childrenMap[parent] = [];
      }
      childrenMap[parent].push(child);
  
      // Check if the parent has more than 2 children (invalid tree)
      if (childrenMap[parent].length > 2) {
        return "false";
      }
    }
  
    // There should be exactly one root (a node without a parent)
    let rootCount = 0;
    for (let node of new Set([...Object.keys(parentMap).map(Number), ...Object.keys(childrenMap).map(Number)])) {
      if (!parentMap.hasOwnProperty(node)) {
        rootCount++;
        if (rootCount > 1) {
          return "false";
        }
      }
    }
  
    return rootCount === 1 ? "true" : "false";
  }
  
  // Test cases
  console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // Output: true
  console.log(ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])); // Output: false
  