//Reverse a string without using the built-in reverse() function.
let str = "srinivas";
function reverseString(str) {
    let  res = "";
    for(let i = str.length-1; i >= 0; i--) {
        res = res + str[i]
    }
    return res 
    
}

console.log(reverseString(str))

