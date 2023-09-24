//Remove duplicates from an arr without using built-in functions.

let arr = [1, 2, 1, 3, 1, 4, 4, 5, 7];

let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}
let res = [];
for (k in obj) {
   console.log(k)
  res.push(k);
}

console.log(res);

// by using set

let ans = new Set(arr);
console.log(ans);

// using filter

function removeDuplicatesUsingFilter(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(removeDuplicatesUsingFilter(arr));

/////////using reduce
function removeDuplicatesUsingReduce(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}

console.log(removeDuplicatesUsingReduce(arr));

//using spred operators
function removeDuplicatesUsingES6(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicatesUsingES6(arr));
