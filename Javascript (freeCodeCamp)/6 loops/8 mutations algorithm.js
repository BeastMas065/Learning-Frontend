function mutation(arr){
  let result = true;
  for (const letter of arr[1].toLowerCase()) {
    if (!(arr[0].toLowerCase().includes(letter))){
      result = false;
    }
  }
  return result;
}