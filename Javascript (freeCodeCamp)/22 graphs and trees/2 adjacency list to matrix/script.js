const adjacencyListToMatrix = list => {
  const matrix = []
  Object.entries(list).forEach(([key, value]) => {
    const one = Array(Object.keys(list).length).fill(0)
    for (let val of value){
      one[val] = 1
    }
    console.log(one)
    matrix.push(one)
  })
  return matrix
}