/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
export const arrayStringsAreEqual = function (word1, word2) {
    let str = "";
    let str1 = ''
    for(let i =0; i < word1.length; i++) {
        str= str + word1[i]
    }
     for(let i =0; i < word2.length; i++) {
        str1= str1 + word2[i]
    }
    if(str === str1) {
        return true 
    } else {
        return false
    }
}

export const arrayStringsAreEqual1 = function (word1, word2) {
	const str1 = word1.join('')
	const str2 = word2.join('')

	return str1 === str2
}
