function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let arr = input[1].trim().split(' ').map(Number)
    let target = Number(input[2])
 if( SumExist(arr,N,target)) {
    console.log("yes")
 } else {
    console.log("no")
 }
}
function SumExist(arr,N,target) {
    if(target == 0) {
        return true
    } if(N == 0) {
        return false
    }
    if(arr[N-1] > target) {
        return SumExist(arr,N-1,target)
    }
    return SumExist(arr,N-1, target) | SumExist(arr,N-1,target-arr[N-1])
}





if (process.env.USERNAME === "srini") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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