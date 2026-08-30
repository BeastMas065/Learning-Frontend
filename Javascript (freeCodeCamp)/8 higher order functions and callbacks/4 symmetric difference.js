function diffArray(arr1, arr2){
  const merged = arr1.filter(item => !arr2.includes(item))
  merged.push(...arr2.filter(item => !arr1.includes(item)));
  return merged;
}