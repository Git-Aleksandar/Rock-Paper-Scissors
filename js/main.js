// Play
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

console.log(`User: ${playerSelection}\nComputer: ${computerSelection}`); // display computerSelection and playerSelection
console.log(`Result: ${playRound(computerSelection, playerSelection)}`); // display result

// computerChoice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// playerChoice
function getPlayerChoice() {
  let playerSelection;
  let playerChoice = prompt("Please enter 'rock', 'paper' or 'scissors'.");
  playerSelection = playerChoice.toLowerCase().trim();
  return playerSelection;
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
  }

  return result;
}
