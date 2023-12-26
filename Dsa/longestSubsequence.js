function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line  = 1;
    for(let i= 0; i < test; i++) {
        let N = Number(input[line++])
        let arr = input[line++].trim().split(' ').map(Number)
        LongestSubsequence(arr,N)
    }

}

function LongestSubsequence(arr,N) {
    let end = [arr[0]];
    for(let i= 1; i < N; i++) {
        if(arr[i] > end[end.length- 1]) {
            end.push(arr[i])
        } else {
  let left = 0;
  let right = end.length - 1;
  while(left < right) {
    const mid = Math.floor((left+ right) / 2);
    if(end[mid] < arr[i]) {
        left = mid +1
    } else {
        right = mid -1;

    }
  }
  end[left] = arr[i]
        }
    }
    console.log(end)
   
}



if (process.env.USERNAME === "srini") {
  runProgram(`1
  6
  8 6 7 4 10 8 `);
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