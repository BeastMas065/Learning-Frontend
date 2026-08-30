function bouncer(arr){
  const arrr = []
  for (let member of arr){
    if (member){
      arrr.push(member)
    }
  }
  return arrr
}
