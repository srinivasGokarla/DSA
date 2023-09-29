/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
export const map = function (arr, fn) {
    let n = fn;
    let newArray = []
    for(let i= 0; i < arr.length; i++) {
        newArray.push(arr[i] + i)
    }
    return newArray
}
