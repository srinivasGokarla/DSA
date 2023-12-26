function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0]);
    let gas = input[1].trim().split(" ").map(Number)
    let cy = input[2].trim().split(" ").map(Number)
 console.log(GasStation(gas,cy))
}
function GasStation(gas,cy) {
    let remSum = 0;
    let start = 0, sum = 0;
    for(let i= 0; i < gas.length; i++) {
        let remain = gas[i]-cy[i];
        if(remSum >= 0) {
            remSum += remain
        } else {
            remSum = remain;
            start = i;


        }
        sum += remain
    }
    if(sum >= 0) {
        return start
    } else {
        return -1
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`5
  1 2 3 4 5
  3 4 5 1 2`);
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