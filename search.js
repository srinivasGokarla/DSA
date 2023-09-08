var search = function(nums, target) {
    let ans = -1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
           ans = i;
        } 
    }
    return ans
};