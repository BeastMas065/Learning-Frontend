const myReplace = (str, word, new_word) => {
  if (word[0] === word[0].toUpperCase()) {
    new_word = new_word[0].toUpperCase() + new_word.slice(1);
  } else {
    new_word = new_word[0].toLowerCase() + new_word.slice(1);
  }

  return str.replace(word, new_word);
};