function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1
    for(let i= 0; i < test; i++) {
        let str = input[line++].trim().split("")
       // console.log(str)
    unique(str)
    }
    }
    
    function unique(str) {
           let obj = {};
           let res = []
       for(let j= 0; j < str.length; j++) {
           if(obj[str[j]] === undefined) {
               obj[str[j]] = 1
           } else {
               obj[str[j]] += 1
           }
       }
       for(let k in obj) {
           if(obj[k] > 1) {
              res.push(k)
           }
       }
       if(res.length === 0) {
           console.log("UNIQUE")
       } else {
           console.log("NO")
       }
       //console.log(res)
    }
    
    if (process.env.USERNAME === "") {
      runProgram(``);
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