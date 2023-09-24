function equalStacks(h1, h2, h3) {
    let sum1 = sum(h1)
    let sum2 = sum(h2)
    let sum3 = sum(h3)
    
    let i1 = 0, i2 = 0, i3 = 0;
    
    while (sum1 !== sum2 || sum2 !== sum3 || sum3 !== sum1) {
        if (sum1 >= sum2 && sum1 >= sum3) {
            sum1 -= h1[i1];
            i1++;
        } else if (sum2 >= sum1 && sum2 >= sum3) {
            sum2 -= h2[i2];
            i2++;
        } else if (sum3 >= sum1 && sum3 >= sum2) {
            sum3 -= h3[i3];
            i3++;
        }
    }
    return sum1;
}