/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr=nums.filter(numbers=>numbers!==val)
    nums.length=0;
    nums.push(...arr);
    return nums.length;
};