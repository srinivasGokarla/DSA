function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let N = Number(input[line++])
        console.log(SquareRoot(N))
    }
}
function SquareRoot(N) {
    if(N < 0) {
        return NaN
    }
    if(N === 0 ||  N === 1) {
        return N;
    }
    let start = 0, end =  N; result = 0;
    while(start <=  end) {
        let mid =  start + ((end - start) >> 1)
        if(mid * mid  === N) {
            return mid;
        }
        if(mid * mid < N) {
            start = mid +1;
            result = mid;
        } else {
            end = mid - 1;

        }

    }
    return result;
   
}

if (process.env.USERNAME === "") {
  runProgram(`2
  4
  8`);
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