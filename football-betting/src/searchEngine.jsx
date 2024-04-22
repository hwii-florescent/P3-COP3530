function searchEngine(node, playerName) {
  if (!node) {
      return null; // Base case: node is null, playerName not found
  }

  // Check if playerName is within the current node's range
  if (playerName >= node.min_name && playerName <= node.max_name) {
      return node.filename; // Return the filename where the player's data is stored
  } else if (playerName < node.min_name) {
      return searchEngine(node.left, playerName); // Search left subtree
  } else {
      return searchEngine(node.right, playerName); // Search right subtree
  }
}

export default searchEngine;