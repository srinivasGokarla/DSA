function runProgram(input) {
    input = input.trim().split("\n");
    let n = Number(input[0])
    let arr = input[1].trim().split(" ").map(Number);
   
    
    bubbleSort(arr,n);
}

function bubbleSort(arr,n) {
    let numSwaps = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                numSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numSwaps} swaps`);
    console.log(`First Element: ${arr[0]}`);
    console.log(`Last Element: ${arr[n - 1]}`);
}


  if (process.env.USERNAME === "srini") {
    runProgram(`3
    3 2 1`);
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