function dropElements(arr, func){
  for(let i in arr){
    if(func(arr[i])){
      return arr.slice(i,arr.length);
    }
  }
  return []
}
