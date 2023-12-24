
function runProgram(input) {
    input = input.trim().split("\n")
  let test = Number(input[0])
let line = 1;
for(let i= 0; i < test; i++) {
    let N = Number(input[line++])
   if (isPowerOfTwo(N) == true) {
       console.log("True")
   } else {
       console.log("False")
   }
}
 
     }
     function isPowerOfTwo(N) {
       
        return N > 0 && (N & (N - 1)) === 0;

    }
    
   

    if (process.env.USERNAME === "srini") {
      runProgram(`2
      2
      3`);
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