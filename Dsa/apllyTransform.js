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

export const map1 = function (arr, fn) {
	const result = []

	for (let i = 0; i < arr.length; i++) {
		result.push(fn(arr[i], i))
	}

	return result
}