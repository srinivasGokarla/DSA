function runProgram(input) {
input = input.trim().split("\n")
let test = Number(input[0])
let line = 1;
for(let i = 0 ; i < test.length ; i++) {
    let n = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)
    containerWithWater(arr,n)
 }

}
function containerWithWater(arr,n) {
    let l = 0, r = n-1, area = 0;
    while(l < r) {
        area = Math.max(area,Math.min(arr[i],
            arr[r]) * (r-1))
           
            if(arr[i]  < arr[r]) {
                l += 1;
            } else {
                r -= 1
            }
            console.log(area)
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`1
  9
  1 8 6 2 5 4 8 3 7`);
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