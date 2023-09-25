function findDifference(nums1, nums2) {
    const answer = [
        nums1.filter(num => !nums2.includes(num)),
        nums2.filter(num => !nums1.includes(num))
    ];

    return answer;
}

const findDifference = function (nums1, nums2) {const set1 = new Set(nums1)
	const set2 = new Set(nums2)

	const diff1 = [...set1].filter((x) => !set2.has(x))
	const diff2 = [...set2].filter((x) => !set1.has(x))

	return [diff1, diff2]
}

export { findDifference }
