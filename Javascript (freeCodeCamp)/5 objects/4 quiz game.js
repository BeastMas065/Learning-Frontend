const questions = [];
const question1 = {
  category: "easy",
  question: "mother of all programming languages?",
  choices: ["C", "Python", "HTML"],
  answer: "C"
};
const question2 = {
  category: "medium",
  question: "Which programming language is known for its use in web development?",
  choices: ["JavaScript", "C++", "Java"],
  answer: "JavaScript"
};

const question3 = {
  category: "easy",
  question: "Which language is used to style web pages?",
  choices: ["HTML", "CSS", "Python"],
  answer: "CSS"
};

const question4 = {
  category: "hard",
  question: "Which programming language is known for its simple and readable syntax?",
  choices: ["Python", "C", "Assembly"],
  answer: "Python"
};

const question5 = {
  category: "easy",
  question: "What does HTML stand for?",
  choices: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
  answer: "HyperText Markup Language"
};

questions.push(question1, question2, question3, question4, question5);

const getRandomQuestion = arr => arr[Math.floor(Math.random() * arr.length)];
const getRandomComputerChoice = choices => choices[Math.floor(Math.random()* choices.length)];

const getResults = (question, given) => {
  if (question.answer === given) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
