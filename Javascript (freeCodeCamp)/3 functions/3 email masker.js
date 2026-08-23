function maskEmail (email){
  let at = email.indexOf("@");
  return email.slice(0,1) + "*".repeat(at-2) + email.slice(at-1);
}

const email = "aqheelsharief@gmail.com";
console.log(maskEmail(email));