function generatePassword(len){
  const inventory = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const word = [];
  for(let i =0; i<len;i++){
    let index = Math.floor(Math.random() * inventory.length)
    word.push(inventory[index])
  }
  return word.join('')
}

const password = generatePassword(3)
console.log("Generated password: " + password)
