const permuteString = (str, pre = "", arr = []) => {
  if (!str.length) {
    arr.push(pre);
    return arr;
  }

  for (let ch of str) {
    const remainingString = str.replace(ch, "");
    permuteString(remainingString, pre + ch, arr);
  }

  return [...new Set(arr)];
};

console.log(permuteString("far"));

console.log(permuteString("fcc"));
