function uniteUnique(...arrays){
  const result = []
  for(let arr of arrays){
    for (let i of arr){
      if (!(result.includes(i))){
        result.push(i);
      }
    }
  }
  return result
}
