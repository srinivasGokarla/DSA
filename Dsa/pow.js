var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    
    const halfPow = myPow(x, Math.floor(n / 2));
    const result = halfPow * halfPow;
    if (n % 2 === 1) {
        return result * x;
    }
    
    return result;
};