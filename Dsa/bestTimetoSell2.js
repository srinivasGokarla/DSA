function runProgram(input) {
    input = input.trim().split('\n')
    let test = Number(input[0]);
    let line = 1;
    for(let i= 0; i < test; i++) {
        let n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
       // console.log(arr,n)
        console.log(bestTime(arr,n))
    }
    }
    function bestTime(arr,n) {
        let prof = 0;
        for(let i= 1; i < arr.length; i++) {
            if(arr[i] > arr[i-1]) {
                prof += arr[i] - arr[i-1]
            }
        }
        return prof
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