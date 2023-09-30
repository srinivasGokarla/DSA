/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function (nums) {
    nums.sort()
    for(let i= 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]) {
            return true
        } else {
            return false
        }
    }
}
export const containsDuplicate1 = function (nums) {
	return new Set(nums).size !== nums.length
}