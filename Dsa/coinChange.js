function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let arr = input[1].trim().split(' ').map(Number)
    let target = Number(input[2])
 
    console.log(CoinChange(arr, target))
}

function CoinChange(arr, target,N) {
    const dp = Array(target+1).fill(10000)
    dp[0] = 0;
    for(const coin of arr) {
        for(let i = coin; i <= target; i++) {
            dp[i] = Math.min(dp[i], dp[i-coin]+1)

        }
    }
    return dp[target] === 100000 ? -1 : dp[target]
}




if (process.env.USERNAME === "srini") {
  runProgram(`5
  1 2 3 5 6
  10 `);
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