function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let line = 1
    for(i = 0; i < N; i++) {
       let[a,b] = input[line++].trim().split(" ").map(Number)
       const mod = 1000000007;
       let g = a[0];
       for (let j = 1; j < n; j++) {
           g = gcd(g, a[j]);
       }

    const result = powerMod(a, BigInt(b), BigInt(mod));
  //  console.log(result.toString());
    console.log(gcd(a,b)) 

    }
    let product = 1;
    for (let num of a) {
        product = (product * num) % MOD;
    }
    const result = BigInt(product) ** BigInt(g) % BigInt(MOD);
    console.log(result.toString());
    
    }
    function gcd(a,b) {
      while (b) {
        [a, b] = [b, a % b];
    }
    return a;
    }
    // function powerMod(a,b, mod) {
    //     let result = BigInt(1);
    //      let base = BigInt(a);
     
    //      while (b > 0n) {
    //          if (b % 2n === 1n) {
    //              result = (result * base) % mod;
    //          }
    //          base = (base * base) % mod;
    //          b = b >> 1n;
    //      }
     
    //      return result;
    //  }
    
    
    if (process.env.USERNAME === "") {
      runProgram(`2
      6 9
      2 25`);
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
