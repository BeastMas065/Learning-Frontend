function titleCase(string){
  let str = string.slice().toLowerCase();
  str = str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
  for (let char=1; char<str.length; char++){
    if (str[char-1]=== ' '){
      str = str.slice(0,char)+ str.slice(char, char+1).toUpperCase() + str.slice(char+1, str.length)
    } 
  }
  return str;
}

console.log(titleCase("I like to code"))
console.log(titleCase("sHoRt AnD sToUt"))
