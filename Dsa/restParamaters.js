console.log('Welcome to the Rest Parameters lab!')

// Start your code here
function sumAll(...numbers){
   
   const result = numbers.reduce((total,numbers) => total + numbers, 0)
   return result

}

export {sumAll}