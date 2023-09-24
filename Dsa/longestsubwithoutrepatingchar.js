//brute force

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for(let i= 0; i < s.length; i++) {
        let char = new Set();
        for(let j = i; j < s.length; j++) {
            if(!char.has(s[j])) {
                char.add(s[j])
                max = Math.max(max, j - i + 1);
            } else {
                break
            }
        }
    }
    return max

};
// optimazation with object
let maxLength = 0;
  let charMap = {};
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (charMap[currentChar] >= left) {
      left = charMap[currentChar] + 1;
    }
    charMap[currentChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
