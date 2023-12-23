//Enter code here
function runProgram(input) {
    input = input.trim().split("\n")
  let n = Number(input[0])
  let str = input[1].trim().split("")
  subSequence(str,0,[],n)
 
     }

     function subSequence(str,cur,out,n) {
        if(n == cur) {
            console.log(out.join(""))
            return
        }
        if(out.length != 0) {
            console.log(out.join(""))
        }
        for(let  i= cur; i < n; i++) {
            out.push(str[i])
            subSequence(str,i+1,out,n) 
            out.pop()
        }
     }
    
    
   
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4
      abcd`);
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