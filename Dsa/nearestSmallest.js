function runProgram(input) {
    input = input.trim().split("\n");
    let test = Number(input[0])
    let line = 1;
    for(let i= 0; i < test;i++) {
        let n = Number(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number)
        const result = NearestElement(arr,n);
        console.log(result.join(' '));
    }
}
function NearestElement(arr,n) {
    const n = arr.length;
    const result = [];

    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }

        stack.push(arr[i]);
    }

    return result;
}

if (process.env.USERNAME === "srini") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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
