//Write a function to find the maximum of two numbers.

let[a,b,c] = [12,17,9]

if(a < b) {
    console.log("b:",b)
} else if(a > b) {
    console.log("a:",a)
} else {
    console.log("Two Are Equal")
}


//Write a function to find the maximum of three numbers.


if(a < b && c < b) {
    console.log("b:",b)
} else if(a < c && b < c) {
    console.log("c:",c)
} else if(a < b && c < a) {
    console.log("a:", a)
} else {
    console.log("All Are Equal")
}
