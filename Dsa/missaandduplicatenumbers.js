function findDuplicateAndMissing(nums) {
    let duplicate = -1;
    let missing = -1;
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] !== nums[nums[i] - 1]) {
            // Swap the numbers to their correct positions
            [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
        } else {
            i++;
        }
    }
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicate = nums[i];
            missing = i + 1;
            break;
        }
    }
    
    return [duplicate, missing];
}

// Example 1
const nums1 = [1, 2, 3, 4, 3];
const result1 = findDuplicateAndMissing(nums1);
console.log(result1); // Output: [3, 5]

// Example 2
const nums2 = [1, 2, 2];
const result2 = findDuplicateAndMissing(nums2);
console.log(result2); // Output: [2, 3]