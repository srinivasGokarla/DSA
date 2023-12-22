//Enter code here
function runProgram(input) {
  input = input.trim().split("\n")
  let test = Number(input[0])
 // console.log(test)
let line = 1;
for(let i= 1; i <=test; i++) {
  let n = Number(input[line++])
 // console.log(n)
 Prime(n)
}
 
}
function Prime(n) {
  if (n <= 1) {
      console.log("No");
      return;
  }

  let isPrime = true;
  for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
          isPrime = false;
          break;
      }
  }

  if (isPrime) {
      console.log("Yes");
  } else {
      console.log("No");
  }
}


if (process.env.USERNAME === "srini") {
runProgram(`4
1
2
3
4`);
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