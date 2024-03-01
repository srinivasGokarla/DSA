
var countSmaller = function(nums) {
    const result = new Array(nums.length).fill(0);

    const indexedNums = nums.map((num, index) => ({ num, index }));
      const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        
        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;
        let rightCount = 0;
        while (leftIndex < left.length || rightIndex < right.length) {
            if (rightIndex === right.length || (leftIndex < left.length && left      [leftIndex].num <= right[rightIndex].num)) {
                merged.push(left[leftIndex]);
                result[left[leftIndex].index] += rightCount;
                leftIndex++;
            } else {
                merged.push(right[rightIndex]);
                rightCount++; 
                rightIndex++;
            }
        }
        
        return merged;
    };
    
    mergeSort(indexedNums);
    
    return result;
};