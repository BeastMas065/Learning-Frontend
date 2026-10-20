function quicksort(array){
  if (array.length <= 1) return array

  const pivot = array[0]
  const pivotArray = []
  const leftPart = []
  const rightPart = []
  for (let i of array){
    if (i<pivot) leftPart.push(i)
    else if (i===pivot) pivotArray.push(i)
    else rightPart.push(i)
  }
  const left = quicksort(leftPart)
  const right = quicksort(rightPart)
  return [...left, ...pivotArray, ...right]
}
