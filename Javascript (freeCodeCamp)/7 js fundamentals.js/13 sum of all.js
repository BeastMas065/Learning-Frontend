function sumAll(arr){
  let count = 0;
  for (let i =  Math.min(...arr); i<= Math.max(...arr); i++){ 
    count+= i;
  }
  return count;
}
