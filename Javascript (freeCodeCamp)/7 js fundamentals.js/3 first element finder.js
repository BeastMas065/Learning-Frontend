function findElement(arr, func){
  for (const value of arr){
    if (func(value)){
      return value;
    }
  }
}