//Calculate the power of a number using recursion.
let n = 4, a = 2
function powerrRecussion(n,a) {
    if( n == 0) {
        return 1
    } else {
        return (a * powerrRecussion(n-1,a) )
    }
}
console.log(powerrRecussion(n,a))
