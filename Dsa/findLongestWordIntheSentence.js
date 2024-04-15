//find the longest word in the sentence without use inbuild functions

let str = "My name IS Gokarla Srinivas JaisriramJairam"
function longestWord(str) {
if(str.trim().length === 0) {
    return false
}
//let words = str.split(" ").sort((a,b) => a.length - b.length)
// console.log(words)
// return words.at(-1)

let check = str.split(" ")

return check.reduce((acc, curr) => acc.length > curr.length ? acc : curr, "")
}

console.log(longestWord(str))