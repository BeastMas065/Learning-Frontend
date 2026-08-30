function destroyer(arr,...args){
  for (let i of args) arr = arr.filter(num => num !== i)
  return arr;
}