function pyramid(char, rows, bool){
  let returner = '\n'; 
  if (bool){
    for (let i = rows; i>=1; i--){
      returner += ' '.repeat(rows - i) + char.repeat(2 * i - 1) + '\n';
    }
    return returner;
  }
  for (let i = 1; i<=rows; i++){
    returner += ' '.repeat(rows - i) + char.repeat(2 * i - 1) + '\n';
  }
  return returner;
}

console.log(pyramid("o", 4, true))
