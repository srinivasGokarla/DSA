function largest(arr, n) {
    
    if(n <=  0) {
        console.log("Invalid paramaters")
    }  else if(n <= arr.length) {
       //console.log("Testing")
        console.log([...new Set(arr.sort((a,b)=> b-a))][n-1])
       
    }
  }
  
  console.log(largest([1,2,3,4], 5))