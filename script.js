// Quiz Data
const quizData = {
  oxygen: {
    question: "What percentage of Earth's atmosphere is oxygen?",
    options: ["21%", "78%", "10%", "30%"],
    answer: "21%"
  },
  nitrogen: {
    question: "Which gas is the most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    answer: "Nitrogen"
  },
  argon: {
    question: "Argon is mainly used in which industry?",
    options: ["Food", "Welding", "Medicine", "Textiles"],
    answer: "Welding"
  },
  co2: {
    question: "Which process removes carbon dioxide from the air?",
    options: ["Respiration", "Combustion", "Photosynthesis", "Oxidation"],
    answer: "Photosynthesis"
  }
};

// Open Quiz Modal
function openQuiz(gas) {
  const quizTitle = document.getElementById("quiz-title");
  const quizQuestion = document.getElementById("quiz-question");
  const quizOptions = document.getElementById("quiz-options");
  const quizFeedback = document.getElementById("quiz-feedback");

  quizTitle.innerText = `${gas.toUpperCase()} Quiz`;
  quizQuestion.innerText = quizData[gas].question;
  quizOptions.innerHTML = "";

  quizData[gas].options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => checkAnswer(gas, option);
    quizOptions.appendChild(button);
  });

  document.getElementById("quiz-modal").style.display = "block";
}

// Check Answer
function checkAnswer(gas, selectedOption) {
  const quizFeedback = document.getElementById("quiz-feedback");
  if (selectedOption === quizData[gas].answer) {
    quizFeedback.innerHTML = "<span style='color:green;'>Correct!</span>";
  } else {
    quizFeedback.innerHTML = "<span style='color:red;'>Wrong answer. Try again!</span>";
  }
}

// Close Quiz Modal
function closeQuiz() {
  document.getElementById("quiz-modal").style.display = "none";
}

// Add Moving Earth Image Dynamically
window.onload = function () {
  const homeSection = document.getElementById("home");
  const earthImage = document.createElement("div");
  earthImage.classList.add("earth-animation");
  homeSection.appendChild(earthImage);
};
