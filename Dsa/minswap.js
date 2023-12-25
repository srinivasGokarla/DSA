function runProgram(input) {
    input = input.trim().split("\n");
    let test = Number(input[0])
    let line = 1;
    for(let i= 0; i < test;i++) {
        let n = Number(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number)
        

    console.log(minSwaps(arr,n));
    }
}

function minSwaps(arr,n) {
  
    let onesAtOdd = 0;
    let zerosAtEven = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 1 && i % 2 === 0) {
            onesAtOdd++;
        } else if (arr[i] === 0 && i % 2 !== 0) {
            zerosAtEven++;
        }
    }
    if (onesAtOdd === zerosAtEven) {
        return onesAtOdd; 
    } else {
        return -1;
    }
}



if (process.env.USERNAME === "srini") {
    runProgram(`2
    3
    1 1 1
    2
    1 0`);
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
