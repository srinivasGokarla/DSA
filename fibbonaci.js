//Implement a function that returns the nth Fibonacci number.

let n = 5;
function fibbonaci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibbonaci(n - 1) + fibbonaci(n - 2);
    }
}

console.log(fibbonaci(n))
