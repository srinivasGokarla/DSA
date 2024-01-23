function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findAlternatePrimes(start, end) {
    const alternatePrimes = [];
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        alternatePrimes.push(i);
        i += 2; // Skip the next number to get the "alternate" primes
      }
    }
  
    return alternatePrimes;
  }
  
  const alternatePrimesInRange = findAlternatePrimes(10, 50);
  console.log(alternatePrimesInRange);
  