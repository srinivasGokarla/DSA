function runProgram(input) {
    input = input.trim().split("\n")
  let N = Number(input[0])
  let str = input[1].trim().split("")
binarySubstringCharacter(N, str)
    }
function binarySubstringCharacter(N, str) {
    let count0 = 0;
    let count1 = 0;
    let max0 = 0;
    let max1 = 0;

    for (let i = 0; i < N; i++) {
        if (str[i] === '0') {
            count0++;
            count1 = 0;
            if (count0 > max0) {
                max0 = count0;
            }
        } else if (str[i] === '1') {
            count1++;
            count0 = 0;
            if (count1 > max1) {
                max1 = count1;
            }
        }
    }

    if (max0 > max1) {
        console.log('0');
    } else {
        console.log('1');
    }
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