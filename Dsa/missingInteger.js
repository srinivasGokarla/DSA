function runProgram(input) {
    input = input.trim().split("\n")
    let arr = input[0].trim().split(" ").map(Number).sort((a,b)=> a-b)
    //console.log(arr)
    let n = arr.length;
    let max = (arr[n-1]*(arr[n-1]+1))/2
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = sum + arr[i]
    }
    console.log(max-sum)
    //console.log(max,sum)
    }
    
    
    
    if (process.env.USERNAME === "") {
      runProgram(``);
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