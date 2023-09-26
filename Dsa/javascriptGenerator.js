console.log('JavaScript Generators Lab')

// Create your generator function and use it below
export function* countUp(limit) {
   
        for(let i= 1; i <= limit; i++) {
            yield i
        }
}
export const counter = countUp(5)

for(let k in counter) {
    console.log(k)
}
