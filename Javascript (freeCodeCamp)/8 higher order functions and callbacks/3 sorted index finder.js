function getIndexToIns(arr, num){
  arr.sort((a,b)=> a-b)
  return arr.findIndex(number => number>=num) === -1 ? arr.length : arr.findIndex(number => number>=num);
}

console.log(getIndexToIns([3, 10, 5], 11))