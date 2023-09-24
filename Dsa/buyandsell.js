var maxProfit = function(prices) {
    let min = prices[0];
    let diff = 0;
    for(let i= 1;i < prices.length; i++) {
      if(min > prices[i]) {
        min = prices[i]
      } else {
        diff = Math.max(diff, prices[i]-min)
      }
    }
    return diff
 };