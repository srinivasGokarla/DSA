function runProgram(input) {
    input = input.trim().split("\n")
  let N = Number(input[0])
  let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a -b)
  let res = [];
  for(let i= 0; i < arr.length; i++) {
    res.push(arr[i]*i)
  }
  let sum = 0;
  for(let j= 0; j < res.length; j++) {
    sum += res[j]
  }
  console.log(sum)
     }
    
    
   
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4
      2 5 1 6`);
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