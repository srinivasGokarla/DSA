function checkPalindrome(N, str) {
    let start = 0;
    let end = N - 1;
    let isPalindrome = true;
         while (start < end) {
        if (str[start] !== str[end]) {
            isPalindrome = false;
            break;
        }
        start++;
        end--;
    }

     if (isPalindrome) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

