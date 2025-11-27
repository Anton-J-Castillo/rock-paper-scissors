let userChoice = "";
let computerChoice = "";
let winner = "";

let userWins = 0;
let computerWins = 0;

const choices = document.querySelectorAll(".choice");

const userChoiceText = document.querySelector("#userChoice");
const computerChoiceText = document.querySelector("#computerChoice");
const winnerText = document.querySelector("#winner");
const playAgainButton = document.querySelector("#playAgain");

updateOutput();

choices.forEach((button) => {
  button.addEventListener("click", function () {
    userChoice = button.getAttribute("id");
    getComputerChoice();
    playRound();
    updateOutput();
  });
});

playAgainButton.addEventListener("click", function () {
  restartRound();
});

function playRound() {
  if (userChoice === computerChoice) {
    winner = "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "user";
  } else {
    winner = "computer";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
  const randInt = getRandomInt(3);
  switch (randInt) {
    case 1: {
      computerChoice = "rock";
      break;
    }
    case 2: {
      computerChoice = "paper";
      break;
    }
    case 3: {
      computerChoice = "scissors";
      break;
    }
  }
}

function updateOutput() {
  if (userChoice) {
    userChoiceText.textContent = `User Choice: ${userChoice}`;
    userChoiceText.classList.remove("hidden");
  } else {
    userChoiceText.classList.add("hidden");
  }

  if (computerChoice) {
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;
    computerChoiceText.classList.remove("hidden");
  } else {
    computerChoiceText.classList.add("hidden");
  }

  if (winner) {
    winnerText.textContent = `Winner: ${winner}`;
    winnerText.classList.remove("hidden");
    playAgainButton.classList.remove("hidden");
  } else {
    winnerText.classList.add("hidden");
    playAgainButton.classList.add("hidden");
  }
}

function restartRound() {
  winner === "user"
    ? userWins++
    : winner === "tie"
    ? console.log("tie")
    : computerWins++;

  userChoice = "";
  computerChoice = "";
  winner = "";

  updateOutput();

  console.log(userWins, computerWins);
}
