//Implement a function to find the sum of all integers within a given range
let arr = [1,3,4,5,2,7,8,3]

function SumOfAllElements(arr) {
    let sum = 0;
    for(let i= 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum)
}
SumOfAllElements(arr)
const initialValue = 0;
let reduce = arr.reduce((acc, curr) => acc + curr,initialValue )

console.log(reduce)
