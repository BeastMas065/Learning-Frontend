const isLeapYear = num => {
  if (num%4==0) {
    if (num%100==0) {
      if (num%400 == 0){
        return `${num} is a leap year.`;
      } else {
        return `${num} is not a leap year.`;
      }
    } else {
        return `${num} is a leap year.`;
      }
  } else {
    return `${num} is not a leap year.`;
    }
}

const year = 2000;
let result = isLeapYear(year);
console.log(result);