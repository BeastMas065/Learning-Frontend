function repeatStringNumTimes(str, num){
  let string = '';
  if (num > 0) {
    for (let i=1; i<=num ; i++){
      string += str;
    }
  }
  return string;
}