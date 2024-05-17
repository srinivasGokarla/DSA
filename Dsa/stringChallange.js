function StringChallenge(str) {
    let maxUniqueCount = 0;
    
    // Iterate through the string to find all pairs of matching characters
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                // Extract the substring between the pair of matching characters
                let substring = str.slice(i + 1, j);
                
                // Create a Set to count unique characters
                let uniqueChars = new Set(substring);
                
                // Update maxUniqueCount if we found a larger number of unique characters
                maxUniqueCount = Math.max(maxUniqueCount, uniqueChars.size);
            }
        }
    }
    
    return maxUniqueCount;
}

// Test cases
console.log(StringChallenge("ahyjakh")); // Output: 4
console.log(StringChallenge("ghececgkaem")); // Output: 5
console.log(StringChallenge("mmmerme")); // Output: 3
console.log(StringChallenge("abccdefghi")); // Output: 0
