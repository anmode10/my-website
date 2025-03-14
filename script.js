document.addEventListener("DOMContentLoaded", function () {
  gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
  gsap.from("section", { duration: 1, opacity: 0, stagger: 0.3, ease: "power2.inOut" });
  gsap.from("footer", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
});

function openQuiz(topic) {
  let question, answer;
  if (topic === "oxygen") {
    question = "What percentage of Earth's atmosphere is oxygen? (Enter a number)";
    answer = "21";
  } else if (topic === "nitrogen") {
    question = "What is the most abundant gas in Earth's atmosphere?";
    answer = "nitrogen";
  } else if (topic === "argon") {
    question = "Argon is a: \n a) Noble gas \n b) Reactive gas \n c) Flammable gas";
    answer = "a";
  } else if (topic === "co2") {
    question = "Carbon dioxide is a major contributor to: \n a) Global cooling \n b) Greenhouse effect \n c) Ozone layer depletion";
    answer = "b";
  }
  
  const userAnswer = prompt(question);
  alert(userAnswer.toLowerCase() === answer.toLowerCase() ? "Correct!" : "Oops! Try again.");
}

// Earth Animation
const canvas = document.getElementById("earthCanvas");
const ctx = canvas.getContext("2d");
let angle = 0;

function drawEarth() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.restore();
  angle += 0.01;
  requestAnimationFrame(drawEarth);
}

if (canvas) {
  drawEarth();
}
