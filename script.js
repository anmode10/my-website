// Oxygen Quiz Interaction
document.getElementById("oxygen-quiz").addEventListener("click", function() {
  const answer = prompt("What percentage of Earth's atmosphere is oxygen? (Enter a number)");
  if (answer == 21) {
    document.getElementById("oxygen-answer").textContent = "Correct! Oxygen makes up about 21% of the atmosphere.";
  } else {
    document.getElementById("oxygen-answer").textContent = "Oops! The correct answer is 21%.";
  }
});

// Nitrogen Quiz Interaction
document.getElementById("nitrogen-quiz").addEventListener("click", function() {
  const answer = prompt("What is the most abundant gas in Earth's atmosphere?");
  if (answer.toLowerCase() === "nitrogen") {
    document.getElementById("nitrogen-answer").textContent = "Correct! Nitrogen makes up about 78% of Earth's atmosphere.";
  } else {
    document.getElementById("nitrogen-answer").textContent = "Oops! The correct answer is Nitrogen.";
  }
});

// Argon Quiz Interaction
document.getElementById("argon-quiz").addEventListener("click", function() {
  const answer = prompt("Argon is a: \n a) Noble gas \n b) Reactive gas \n c) Flammable gas");
  if (answer.toLowerCase() === "a") {
    document.getElementById("argon-answer").textContent = "Correct! Argon is a noble gas.";
  } else {
    document.getElementById("argon-answer").textContent = "Oops! The correct answer is Noble gas.";
  }
});

// Carbon Dioxide Quiz Interaction
document.getElementById("co2-quiz").addEventListener("click", function() {
  const answer = prompt("Carbon dioxide is a major contributor to: \n a) Global cooling \n b) Greenhouse effect \n c) Ozone layer depletion");
  if (answer.toLowerCase() === "b") {
    document.getElementById("co2-answer").textContent = "Correct! Carbon dioxide is a major contributor to the greenhouse effect.";
  } else {
    document.getElementById("co2-answer").textContent = "Oops! The correct answer is Greenhouse effect.";
  }
});
