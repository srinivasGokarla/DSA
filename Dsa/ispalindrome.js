var isPalindrome = function (x) {
    let reminder = 0;
    let reverse = 0;
    let number = x;
    if (x < 0) {
      return false;
    }
  
    while (number !== 0) {
      reminder = number % 10;
      reverse = reverse * 10 + reminder;
      number = Math.floor(number / 10);
    }
    return x === reverse;
  };