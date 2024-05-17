function SearchingChallenge(strArr) {
    // Convert input array of strings into a 2D array of integers
    const matrix = strArr.map(row => row.split('').map(Number));
    const rows = matrix.length;
    const cols = matrix[0].length;
    let holesCount = 0;
  
    // Helper function to perform DFS
    function dfs(x, y) {
      if (x < 0 || y < 0 || x >= rows || y >= cols || matrix[x][y] === 1) {
        return;
      }
      
      // Mark the cell as visited by setting it to 1
      matrix[x][y] = 1;
      
      // Visit all 4 adjacent cells
      dfs(x + 1, y); // down
      dfs(x - 1, y); // up
      dfs(x, y + 1); // right
      dfs(x, y - 1); // left
    }
  
    // Iterate through each cell in the matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          // Start a new DFS search for a new contiguous region
          dfs(i, j);
          holesCount++;
        }
      }
    }
  
    return holesCount;
  }
  
  // Test cases
  console.log(SearchingChallenge(["01111", "01101", "00011", "11110"])); // Output: 3
  console.log(SearchingChallenge(["1011", "0010"])); // Output: 2
  console.log(SearchingChallenge(["10111", "10101", "11101", "11111"])); // Output: 2
  