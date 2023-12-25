function runProgram(input) {
    input = input.trim().split("\n")
    let n = Number(input[0]);
    let line = 1;
    for(let i = 0; i < n; i++){
        let str = input[line++].trim().split("")
       // console.log(str)
       console.log(isBalanced(str))
    }
    
   }
  

function isBalanced(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (let i = 0; i < str.length; i++) {
        const currentBracket = str[i];

        if (openingBrackets.includes(currentBracket)) {
            stack.push(currentBracket);
        } else if (closingBrackets.includes(currentBracket)) {
            const lastOpeningBracket = stack.pop();

            if (
                !lastOpeningBracket ||
                openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(currentBracket)
            ) {
                return 'not balanced';
            }
        }
    }
    return stack.length === 0 ? 'balanced' : 'not balanced';
}



  if (process.env.USERNAME === "srini") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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