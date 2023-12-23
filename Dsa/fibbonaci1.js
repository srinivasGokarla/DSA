function runProgram(input) {
    input = input.trim().split("\n")
   let N = Number(input[0])
   console.log(fibbonaci(N))
     }
    
    
    function fibbonaci(N) {
      if(N == 0 || N ==1) {
        return N
      }
      return (fibbonaci(N-1) + fibbonaci(N-2))
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4`);
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