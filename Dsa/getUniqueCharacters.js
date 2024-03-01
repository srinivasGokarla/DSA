function getUniqueCharacter(s) {
    // Write your code here
    const obj = {}
    for(const char of s) {
        obj[char] = (obj[char] || 0) + 1;
    }
    for(let i= 0; i < s.length; i++) {
        if(obj[s[i]] === 1) {
            return i+1
        }
    }
    return -1

}