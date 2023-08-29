//Implement a function to find the largest element in an array.

let arr = [1,5,6,1,7,2,1,3,4]
let max = arr[0]
for(let  i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i]
    }
}

console.log(max)
