function modifyConsecutiveXVowels(text) {
    const xvowelRegex = /[aeiouy]{2}/gi;
  
    return text.replace(xvowelRegex, (match) => {
      const firstVowel = match.charAt(0);
      const nextLetterCode = (firstVowel.charCodeAt(0) + 3) % 122;
      const nextLetter = String.fromCharCode(nextLetterCode); vowel
      return nextLetter + match.charAt(1).toUpperCase();
    });
  }
  const inputText = "testing the curious function";
  const result = modifyConsecutiveXVowels(inputText);
  console.log(result); // Output: "testing the curlOus function"
  
  