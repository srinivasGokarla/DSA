/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
    let sum = 0;
    let arr = []
    for(let i= 0; i < nums.length; i++) {
        sum = sum + nums[i]
        arr.push(sum)
    }
    return arr
}

export default runningSum
