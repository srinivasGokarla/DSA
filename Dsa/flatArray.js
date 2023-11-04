// We have one int array 
const array = [123,[23,46],4,5,[5,6,7,[87,6]]]
// Create a flat array and find the lowest amount
//  const arr = [].concat(...array)

//  console.log(merge)
const flatArray = array.flat()
  const merge = [].concat(...flatArray)
 // console.log(merge)

let min = merge[0]
 for(let i =0; i < merge.length; i++) {
     if(min > merge[i]) {
         min = merge[i]
     }
 }
 
  console.log(min)
 const minValue = Math.min(...merge)
 console.log(minValue)
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }