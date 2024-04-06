function runProgram(input) {
    input = input.trim().split("\n");
   console.log(input)
    
        let [m, n] = input[0].trim().split(" ").map(Number);
        let magazine = input[1].trim().split(" ");
        let note = input[2].trim().split(" ");
      console.log( magazine, m,n)
        console.log(checkMagazine(magazine, note))
    }

    
    function checkMagazine(magazine, note) {
    const mWords = {};
    const nWords = {};
    for (const w of magazine) {
        mWords[w] = (mWords[w] || 0) + 1;
    }

    for (const w of note) {
        nWords[w] = (nWords[w] || 0) + 1;
    }

    console.log(mWords);
    console.log(nWords);
    for (const w in nWords) {
        if (!mWords[w] || nWords[w] > mWords[w]) {
            
            return "no";
        }
    }
   return "Yes"
}
    

if (process.env.USERNAME === "srini") {
    runProgram(`6 4
give me one grand today night
give one grand today`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.trim();
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.trim();
        runProgram(read);
        process.exit(0);
    });
}