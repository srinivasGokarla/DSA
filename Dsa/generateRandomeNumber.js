//Write a function that generates a random number between two given numbers.

let [min,max] = [2,70]
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log( getRndInteger(min, max))
