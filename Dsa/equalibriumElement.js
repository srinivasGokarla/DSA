function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let n = Number(input[line++]);
        let arr = input[line++].trim().split(' ').map(Number)
       // console.log(arr,n)
       console.log(equalibirium(n,arr))
    }
    }
    function equalibirium(n,arr) {
        let total = arr.reduce((acc, num) => acc+num, 0);
        let leftsum = 0;
        for(let i= 0; i < n; i++) {
            total -= arr[i];
            if(leftsum == total) {
                return i
            }
            leftsum += arr[i]
        }
        return -1
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