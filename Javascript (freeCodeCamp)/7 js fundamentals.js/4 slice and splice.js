function frankenSplice(arr1, arr2, i){
  const arr = arr2.slice();
  arr.splice(i, 0, ...arr1);
  return arr;
}
