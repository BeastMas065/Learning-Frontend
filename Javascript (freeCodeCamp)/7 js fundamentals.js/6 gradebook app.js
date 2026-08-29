function getAverage(arr){
  let sum = 0;
  for (let i of arr){
    sum+=i;
  }
  return sum / arr.length;
}
function getGrade(score){
  if (score === 100){
    return "A+";
  } else if (score >= 90){
    return "A";
  } else if (score >= 80){
    return "B";
  } else if (score >= 70){
    return "C";
  } else if (score >= 60){
    return "D";
  } else {
    return "F";
  }
}
function hasPassingGrade(score){
  return !(getGrade(score) === "F");
}
function studentMsg(arr, score){
  const avg = getAverage(arr);
  if (hasPassingGrade(score)){
    return `Class average: ${avg}. Your grade: ${getGrade(score)}. You passed the course.`
  } else {
    return `Class average: ${avg}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}
