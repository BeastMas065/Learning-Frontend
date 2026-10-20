const insertionSort = array => { 
  let i = 1;
  while (i<array.length){
    while (i>=1 && array[i]<array[i-1]){
      let temp = array[i]
      array[i] = array[i-1]
      array[i-1] = temp
      i--
    }
    i++
  }
  return array
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))