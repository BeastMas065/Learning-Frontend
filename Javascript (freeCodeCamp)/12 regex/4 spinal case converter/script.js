const spinalCase = str => {
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str = str.toLowerCase();
  str = str.replace(/[\s_]+/g, "-");

  return str;
};

console.log(spinalCase("This Is Spinal Tap"));