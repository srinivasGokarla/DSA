function runProgram(input) {
    input = input.trim().split("\n");
    let n = Number(input[0]);
    let line = 1;
    const result = []; 

    for (let i = 0; i < n; i++) {
        let operations = input[line++].trim().split(" ");

        const output = performOperations(operations);
        result.push(...output); 
    }

    result.forEach(element => console.log(element));
}

function MinStack() {
    this.stack = [];
    this.minStack = [];
}

MinStack.prototype.push = function (x) {
    this.stack.push(x);
    const currentMin = this.getMin();
    this.minStack.push(Math.min(x, currentMin));
};

MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.getMin = function () {
    return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Infinity;
};

function performOperations(operations) {
    const minStack = new MinStack();
    const result = [];

    for (const operation of operations) {
        if (operation.includes('push')) {
            const [, x] = operation.split(' ');
            minStack.push(parseInt(x));
        } else if (operation === 'pop') {
            minStack.pop();
        } else if (operation === 'getMin') {
            result.push(minStack.getMin());
        }
    }

    return result;
}

if (process.env.USERNAME === "srini") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
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
