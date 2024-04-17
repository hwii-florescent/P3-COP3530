export default function searchNameInJson(node, searchName) {
    if (!node) {
      return [];  // Return an empty array if the node is null
    }
  
    // Convert the search string to lowercase for case-insensitive matching
    searchName = searchName.toLowerCase();
  
    // Initialize an array to hold matching objects
    let results = [];
  
    // Check both min_name and max_name at the current node
    const minName = node.min_name.toLowerCase();
    const maxName = node.max_name.toLowerCase();
  
    // If the search term is found in either name, add an object to the results
    if (minName.includes(searchName) || maxName.includes(searchName)) {
      results.push({
        name: node.max_name, // Use max_name as the name
        filename: node.filename
      });
    }
  
    // Recursively search the left and right subtrees and concatenate their results
    const leftResults = searchNameInJson(node.left, searchName);
    const rightResults = searchNameInJson(node.right, searchName);
  
    // Concatenate the current results with those from the left and right subtrees
    results = results.concat(leftResults, rightResults);
  
    // Return the accumulated results
    return results;
  }
  