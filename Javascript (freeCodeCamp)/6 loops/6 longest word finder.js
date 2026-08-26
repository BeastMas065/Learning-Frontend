function findLongestWordLength(str){
  let high = '';
  const sentence = str.split(" ");
  for (const word of sentence){
    if (word.length > high.length){
      high = word
    }
  }
  return high.length
}