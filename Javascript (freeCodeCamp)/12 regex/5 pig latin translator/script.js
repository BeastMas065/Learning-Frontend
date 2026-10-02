const translatePigLatin = str => {
  const reg = /[aeiou]/i;
  const p = str.search(reg);
  if (p===0) str= str+'way';
  else if (p === -1) str = str+'ay'
  else str = str.slice(p,str.length) + str.slice(0,p) + 'ay';
  return str
}
