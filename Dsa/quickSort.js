function runProgram(input) {
    input = input.trim().split("\n");
    let n = Number(input[0])
    let arr = input[1].trim().split(" ").map(Number);
   
    
 console.log(quickSort(arr).join(" "))
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let floor = arr[Math.floor(arr.length / 2)];
  let lo = arr.filter(element => element < floor);
  let mid = arr.filter(element => element === floor);
  let hi = arr.filter(element => element > floor);

  return [...quickSort(lo), ...mid, ...quickSort(hi)];
}


  if (process.env.USERNAME === "srini") {
    runProgram(`5
    3 5 0 9 8`);
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