const question = [
  {
    question:
      "Which OOP concept in Java allows a class to have more than one method with the same name but different parameters?",
    answer: [
      { text: "Abstraction", correct: false },
      { text: "Method Overriding", correct: false },
      { text: "Method Overloading", correct: true },
      { text: "Encapsulation", correct: false },
    ],
  },
  {
    question: "What is the time complexity of binary search in a sorted array?",
    answer: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question: "Which data structure uses FIFO (First In, First Out)?",
    answer: [
      { text: "Queue", correct: true },
      { text: "Stack", correct: false },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false },
    ],
  },
  {
    question: "Which of the following is not a programming paradigm?",
    answer: [
      { text: "Object-oriented", correct: false },
      { text: "Functional", correct: false },
      { text: "Procedural", correct: false },
      { text: "Hexadecimal", correct: true },
    ],
  },
  {
    question:
      "Which of the following sorting algorithms has the best average-case time complexity?",
    answer: [
      { text: "Bubble Sort", correct: false },
      { text: "Insertion", correct: false },
      { text: "Merge Sort", correct: true },
      { text: "Section Sort", correct: false },
    ],
  },
  {
    question: "In computer networks, what does DNS stand for?",
    answer: [
      { text: "Data network System", correct: false },
      { text: "Domain Name System", correct: true },
      { text: "Digital Node Service", correct: false },
      { text: "Distributed Network Server", correct: false },
    ],
  },
  {
    question:
      "Which OOP principle allows multiple classes to be treated through a common interface?",
    answer: [
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: false },
      { text: "Polymorphism", correct: true },
      { text: "Abstraction", correct: false },
    ],
  },
  {
    question: "Which keyword in Java is used to inherit a class?",
    answer: [
      { text: "Implement", correct: false },
      { text: "inherit", correct: false },
      { text: "extends", correct: true },
      { text: "superclass", correct: false },
    ],
  },
  {
    question: "What does encapsulation primarily protect in Java?",
    answer: [
      { text: "Methods", correct: false },
      { text: "Constructors", correct: false },
      { text: "Packages", correct: false },
      { text: "Data (fields)", correct: true },
    ],
  },
  {
    question: "Which method cannot be overridden in Java?",
    answer: [
      { text: "abstract method", correct: false },
      { text: "public method", correct: false },
      { text: "static method", correct: true },
      { text: "instance method", correct: false },
    ],
  },
  {
    question: "Which of the following is true about constructors in Java?",
    answer: [
      { text: "They must have a return type", correct: false },
      { text: "Their name must match the class name", correct: true },
      { text: "They cannot be overloaded", correct: false },
      { text: "They must be private", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
