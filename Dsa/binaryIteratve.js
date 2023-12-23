
function runProgram(input) {
    input = input.trim().split("\n")
  let[n,k] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  console.log(BinaryIterative(arr,0,n-1,k))
 
     }
     function BinaryIterative(arr,lo,hi,k) {
        while(lo <= hi) {
let mid = (lo + Math.floor((hi-lo)/2))
if(arr[mid] == k) {
    return 1
} else if(arr[mid] > k) {
    hi = mid -1
} else if(arr[mid] < k) {
    lo = mid +1 ;
    return -1
}
        }
     }

 
    
   
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5 0
      2 -2 0 3 4`);
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