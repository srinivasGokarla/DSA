function runProgram(input) {
    input = input.trim().split("\n")
    let str = input[0].trim().split("");
    const postfixExpression = infixToPostfix(str);
    console.log(postfixExpression);
}
function infixToPostfix(str) {
    const stack = [];
    const output = [];
    const operatorPriority = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (isOperand(currentChar)) {
            output.push(currentChar);
        } else if (currentChar === '(') {
            stack.push(currentChar);
        } else if (currentChar === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }

            if (stack.length === 0) {
              
                return "Invalid Expression";
            }

            stack.pop(); 
        } else if (isOperator(currentChar)) {
            while (
                stack.length > 0 &&
                operatorPriority[stack[stack.length - 1]] >= operatorPriority[currentChar]
            ) {
                output.push(stack.pop());
            }

            stack.push(currentChar);
        }
    }

    while (stack.length > 0) {
        if (stack[stack.length - 1] === '(') {
        
            return "Invalid Expression";
        }
        output.push(stack.pop());
    }

    return output.join('');
}

function isOperand(char) {
    return /^[a-zA-Z]+$/.test(char);
}

function isOperator(char) {
    return /^[-+*/]$/.test(char);
}





  if (process.env.USERNAME === "srini") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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