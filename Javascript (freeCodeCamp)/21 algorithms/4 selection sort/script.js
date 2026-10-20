const selectionSort = array =>{
  let i = 0;
  let j = 0;
  let min = 0;
  while (i<array.length){
    j=i
    min = j
    while (j<array.length){
      if (array[j]<array[min]) {
        min = j
      }
      j++
    }
    let temp = array[min];
    array[min] = array[i]
    array[i] = temp
    i++
  }
  return array
}
