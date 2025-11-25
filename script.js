let userChoice = "";
let computerChoice = "";
let winner = "";

let userWins = 0;
let computerWins = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const userChoiceText = document.getElementById("userChoice");
const computerChoiceText = document.getElementById("computerChoice");
const winnerText = document.getElementById("winner");
const playAgainButton = document.getElementById("playAgain");

updateOutput();

rockButton.onclick = function () {
  userChoice = "rock";
  getComputerChoice();
  playRound();
  updateOutput();
};
paperButton.onclick = function () {
  userChoice = "paper";
  getComputerChoice();
  playRound();
  updateOutput();
};
scissorsButton.onclick = function () {
  userChoice = "scissors";
  getComputerChoice();
  playRound();
  updateOutput();
};
playAgainButton.onclick = function () {
  restartRound();
};

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
