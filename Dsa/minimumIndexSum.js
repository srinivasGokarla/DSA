/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
    let minIndexSum = Infinity
	let result = []

	for (let i = 0; i < list1.length; i++) {
		const indexInList2 = list2.indexOf(list1[i])
		if (indexInList2 > -1) {
			const indexSum = i + indexInList2
			if (indexSum < minIndexSum) {
				minIndexSum = indexSum
				result = [list1[i]]
			} else if (indexSum === minIndexSum) {
				result.push(list1[i])
			}
		}
	}

	return result
}

export default findRestaurant
