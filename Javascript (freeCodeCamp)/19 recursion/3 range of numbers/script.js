function rangeOfNumbers (startNum, endNum){
  let countDown = []
  if (endNum<startNum) return [];
  countDown = rangeOfNumbers(startNum, endNum - 1)
  countDown.push(endNum)
  return countDown
}
