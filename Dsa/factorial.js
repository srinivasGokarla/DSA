//Calculate the factorial of a number using a recursive function.

let n = 5;

function factiorial(n) {
    if(n === 0) 
        return 1
    else
        return n * factiorial(n-1)
    
}

console.log(factiorial(n))
