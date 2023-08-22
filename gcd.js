function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let line = 1
    for(i = 0; i < N; i++) {
       let[a,b] = input[line++].trim().split(" ").map(Number)
    console.log(gcd(a,b)) 
    }
    
    }
    function gcd(a,b) {
        if(a == 0) {
            return b
        } else {
            return gcd(b % a,a)
        }
    }
    
    
    if (process.env.USERNAME === "") {
      runProgram(`2
      6 9
      2 25`);
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