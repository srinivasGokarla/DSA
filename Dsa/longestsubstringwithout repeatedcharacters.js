function findLongestSubstring(str) {
    let longest = 0;
    let start = 0;
    const charIndexMap = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charIndexMap[char] >= start) {
        start = charIndexMap[char] + 1;
      }
      charIndexMap[char] = i;
      const currentLength = i - start + 1;
      longest = Math.max(longest, currentLength);
    }
  
    return longest;
  }
  
  const inputString = "abcabcbb";
  const longestSubstringLength = findLongestSubstring(inputString);
  console.log("Longest substring length without repeated characters: " + longestSubstringLength);