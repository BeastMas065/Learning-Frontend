function pairElement(string){
  const results = [];
  const one = ['A', 'T'];
  const three = ['T', 'A'];
  const two = ['G', 'C'];
  const four = ['C', 'G'];
  for (let char of string){
    if (char === 'A'){
      results.push(one)
    } else if (char === 'T') {
      results.push(three)
    }else if (char === 'G'){
      results.push(two)
    } else if (char === 'C') {
      results.push(four)
    }
  }
  return results
}

console.log(pairElement("ATCGA"))
