
function runProgram(input) {
    input = input.trim().split("\n")
  let n = Number(input[0])
  let arr = input[1].trim().split(" ").map(Number)
  let min = arr[0];
  for(let i= 0; i < arr.length; i++) {
    if(min > arr[i]) {
        min = arr[i]
    }
  }
 console.log(min)
 
 
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