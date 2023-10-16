//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
    if(n <= 0) {
      throw new Error('Only positive numbers are allowed');
    }
    const iterate = (number,step) => {
      if(number == 1) {
        return step
      } 
      return number % 2 === 0 ?
      iterate(number / 2, step+1) :
      iterate(3*number+1,step+1)
    }
    return iterate(n,0)
  
  };
  