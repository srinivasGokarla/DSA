//Create a function that checks if a given string is a palindrome.

let str = "amma";

let ans = "";
for(let i= str.length-1; i >= 0; i--) {
    ans = ans + str[i]
}
//console.log(ans)
if(ans == str) {
    console.log("Its Palindrome")
} else {
    console.log("It's Not a Palindrome")
}
