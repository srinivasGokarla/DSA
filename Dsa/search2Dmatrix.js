var searchMatrix = function(matrix, target) {
    const m = matrix.length;
      const n = matrix[0].length;
      let left = 0;
      let right = m * n - 1;
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          const midElement = matrix[Math.floor(mid / n)][mid % n];
  
          if (midElement === target) {
              return true;
          } else if (midElement < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  
      return false;
  };