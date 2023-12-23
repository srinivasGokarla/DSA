
function runProgram(input) {
    input = input.trim().split("\n")
  let[n,k] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  arr.sort((a,b) => {
    return a -b;
  })
  let count = [0];
  NumberOfOccurance(0,n,k,arr,count)
  console.log(count[0])
 
     }
  function NumberOfOccurance(lo,hi,k,arr,count) {
if(lo >= hi) {
    return
}
let mid = Math.floor((hi+lo)/2)
if(arr[mid]  == k) {
    count[0]++;
    NumberOfOccurance(lo,mid,k,arr,count)
    NumberOfOccurance(mid+1,hi,k,arr,count)
}else if(arr[mid] > k) {
return NumberOfOccurance(lo,mid,k,arr,count)
} else {
    return NumberOfOccurance(mid+1,hi,k,arr,count)
}

  } 
    
    if (process.env.USERNAME === "srini") {
      runProgram(`6 3
      2 3 3 3 6 9`);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }