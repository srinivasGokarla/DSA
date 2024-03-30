/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let s = nums[0]
      for (let j = 1; j < nums.length && nums[j] === nums[j - 1] + 1; ++j) {
        s += nums[j]
      }
      const set = new Set(nums)
      for (let x = s; ; ++x) {
        if (!set.has(x)) return x
      }
    };