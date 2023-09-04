//Find the longest word in a sentence using a function.

let str = "my name is srinivas"
let words = str.trim().split(" ")
console.log(words)
let longestWord = "";
let max = 0;
for (const word of words) {
    const cleanedWord = word.replace(/[.,!?]/g, '');
    if (cleanedWord.length > max) {
      max = cleanedWord.length;
      longestWord = cleanedWord;
    }
  }

  console.log(longestWord);
  
  //using foreach
  function findLongestWord(sentence) {
  const words = sentence.split(/\s+/);
  let longestWord = "";

  words.forEach((word) => {
    const cleanedWord = word.replace(/[.,!?]/g, '');
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  });

  return longestWord;
}

//using reduce 

function findLongestWord(sentence) {
  const words = sentence.split(/\s+/);

  return words.reduce((longest, current) => {
    const cleanedWord = current.replace(/[.,!?]/g, '');
    return cleanedWord.length > longest.length ? cleanedWord : longest;
  }, "");
}
//using array sorting

function findLongestWord(sentence) {
  const words = sentence.split(/\s+/);

  const longestWord = words
    .map((word) => word.replace(/[.,!?]/g, ''))
    .sort((a, b) => b.length - a.length)[0];

  return longestWord || "";
}

//using recursion

function findLongestWord(sentence) {
  function findLongestInArray(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    const rest = findLongestInArray(arr.slice(1));
    return arr[0].length > rest.length ? arr[0] : rest;
  }

  const words = sentence.split(/\s+/);
  const cleanedWords = words.map((word) => word.replace(/[.,!?]/g, ''));

  return findLongestInArray(cleanedWords);
}

