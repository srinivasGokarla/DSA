function runProgram(input) {
    input = input.trim().split("\n")
    let str = input[0].trim().split("");

console.log(Duplicate(str))
}

function Duplicate(str) {
  const arr = [];
  
  for (let i = 0; i < str.length; i++) {
    if (arr.length > 0 && arr[arr.length - 1] === str[i]) {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }

  return arr.length === 0 ? "Empty String" : arr.join("");
}


  if (process.env.USERNAME === "srini") {
    runProgram(`aaabccddd`);
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