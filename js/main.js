// computerChoice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  let computerSelection;

  if (randomNumber === 1) {
    computerSelection = "rock";
  } else if (randomNumber === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

// playerChoice
function getPlayerChoice() {
  let playerSelection;

  const selectRock = document.querySelector("#btnRock");
  selectRock.addEventListener("click", () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
  });

  const selectPaper = document.querySelector("#btnPaper");
  selectPaper.addEventListener("click", () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
  });

  const selectScissors = document.querySelector("#btnScissors");
  selectScissors.addEventListener("click", () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
  });
}

// playRound
function playRound(computerSelection, playerSelection) {
  let result;

  if (computerSelection === playerSelection) {
    result = "Tie Game!"; // tie game scenario
  }
  // computer wins scenario
  else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerSelection = computerSelection
      .toUpperCase()
      .charAt(0)
      .concat(computerSelection.slice(1)); // capitalize the first letter of the second sentence
    result = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    computerScore += 1; // increment the computerScore;
  }
  // player wins scenario
  else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    playerSelection = playerSelection
      .toUpperCase()
      .charAt(0)
      .concat(playerSelection.slice(1)); // capitalize the first letter of the second sentence
    result = `You Win! ${playerSelection} beats ${computerSelection}!`;
    playerScore += 1; // increment the playerScore
  }

  displayResult.textContent = result;

  displayComputerScore.textContent = `Computer: ${computerScore}`;
  displayPlayerScore.textContent = `Player: ${playerScore}`;

  if (computerScore === 5) {
    displayFinalScore.textContent = "Computer wins the game!";
  } else if (playerScore === 5) {
    displayFinalScore.textContent = "You win the game!";
  }
}

let computerScore = 0;
let playerScore = 0;

const displayResult = document.querySelector("#result");
const displayFinalScore = document.querySelector("#finalScore");

const displayComputerScore = document.querySelector("#computerScore");
const displayPlayerScore = document.querySelector("#playerScore");

getPlayerChoice();
