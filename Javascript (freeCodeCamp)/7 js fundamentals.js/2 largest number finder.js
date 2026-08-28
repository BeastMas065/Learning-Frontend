function largestOfAll(arrays){
  const largest = [];
  for (const array of arrays){
    largest.push(Math.max(...array));
  }
  return largest;
}