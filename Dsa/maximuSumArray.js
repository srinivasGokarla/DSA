function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line  = 1;
    for(let i= 0; i < test; i++) {
        let N = Number(input[line++])
        let arr = input[line++].trim().split(' ').map(Number)
        MaximumSumArray(arr,N)
    }

}

function MaximumSumArray(arr,N) {
    let max = arr[0];
    let res = arr[0];
    for(let i= 1; i < N; i++) {
        max = Math.max(arr[i], max+arr[i]);
        res  = Math.max(res, max)
    }
    console.log(res)
}


if (process.env.USERNAME === "srini") {
  runProgram(`2
  5
  1 2 0 4 5
  5
  3 -4 1 2 -1 `);
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