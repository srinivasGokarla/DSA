/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums) {
    let index = 0
    for(let i= 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index++] = nums[i]
        } 
        }
     for(let i= index; i < nums.length; i++) {
        nums[i] = 0
     }
}


let nums = [0,1,0,3,12]
function moveZeroes(nums) {
    let zero = [],normal = []
    for(let i= 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            zero.push(nums[i])
        } else {
            normal.push(nums[i])
        }
    }
    normal.push(zero)
    console.log([normal.join(" ")])
}
moveZeroes(nums)