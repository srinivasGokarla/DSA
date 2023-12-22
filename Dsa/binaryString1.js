function runProgram(input) {
    input = input.trim().split("\n")
  let N = Number(input[0])
  let str = input[1].trim().split("")
  binarySubstringLength(N, str)
    }
    function binarySubstringLength(N, str) {
        let count = 1;
        let max = 1;
    
        for (let i = 0; i < N - 1; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            } else {
                count = 1;
            }
    
            if (count > max) {
                max = count;
            }
        }
    
        console.log(max);
    }
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`7
      1000100`);
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