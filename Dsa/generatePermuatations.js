function runProgram(input) {
    input = input.trim().split("\n")
  let N = Number(input[0])
  let arr = input[1].trim().split(" ").map(Number)
  arr2.sort((a,b) => a-b)
  let str = "";
  for(let i= 0; i < arr2.length; i++) {
    console.log(arr2[i].toString().split("").join(" "))
  }

     }
     let arr2 = [];

    function GeneratePermutations(arr,n,cur) {
        if(cur == n) {
arr2.push(+arr.join(""))
return
        }
        for(let i = cur; i < n; i++) {
            swap(arr,i,cur)
            GeneratePermutations(arr,n,cur+1) 
            swap(arr,i,cur)
        }
    }
    function swap(arr,f,s) {
        temp = arr[f];
        arr[f] = arr[s];
        arr[s] = temp;
    }
    
   
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      1 2 3`);
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