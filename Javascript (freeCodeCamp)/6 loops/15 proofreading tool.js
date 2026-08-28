const isPalindrome = word => word.toLowerCase() === word.split('').reverse().join('').toLowerCase()

function findPalindromeBreaks(words) {
  const indices = [];
  for (const word in words) {
    if (!isPalindrome(words[word])){
      indices.push(Number(word));
    }
  }
  return indices;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = [];
  const indices = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    phrases.push(words.slice(i, i + phraseLength).join(" "));
  }

  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < phrases.length; j++) {
      if (i !== j && phrases[i] === phrases[j]) {
        indices.push(i);
        break;
      }
    }
  }

  return indices;
}

function analyzeTexts(texts, phraseLength){
  const objects = []
  for (const words of texts){
    objects.push({repeatedPhrases: findRepeatedPhrases(words, phraseLength), palindromeBreaks: findPalindromeBreaks(words)})
  }
  return objects;
}
