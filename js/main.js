// Call the game
playGame(5);

// Play Game
function playGame(rounds) {
  let computerScore = 0;
  let userScore = 0;

  for (let i = 0; i < rounds; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    // if the user cancels the prompt
    if (playerSelection === "The user cancelled the game.") {
      alert("Maybe next time.");
      return; // stop further code execution
    }

    console.log(`User: ${playerSelection}\nComputer: ${computerSelection}`);

    const roundResult = playRound(computerSelection, playerSelection);
    console.log(`Result: ${roundResult}`);

    // keeping score
    if (roundResult.includes("You Lose")) {
      computerScore += 1;
    } else if (roundResult.includes("You Win")) {
      userScore += 1;
    }

    // If either player reaches the required score, exit the loop
    if (computerScore >= rounds || userScore >= rounds) {
      break;
    }
  }

  // If the game is tied after all rounds, play one more round to determine the overall winner
  if (computerScore === userScore) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    if (playerSelection === "The user cancelled the game.") {
      alert("Maybe next time.");
      return;
    }

    console.log(`User: ${playerSelection}\nComputer: ${computerSelection}`);

    const roundResult = playRound(computerSelection, playerSelection);
    console.log(`Result: ${roundResult}`);

    // Determine the overall game result after the extra round
    if (roundResult.includes("You Lose")) {
      computerScore += 1;
    } else if (roundResult.includes("You Win")) {
      userScore += 1;
    }
  }

  // Determine the overall game result after all rounds and the extra round
  if (computerScore > userScore) {
    console.log("Final result: Computer wins the game!");
  } else if (userScore > computerScore) {
    console.log("Final result: You win the game!");
  }
}

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
  let playerChoice = prompt("Please enter 'rock', 'paper' or 'scissors'.");

  if (playerChoice === null) {
    // alert("Maybe next time."); // if the prompt is cancelled (relocated to the playGame(rounds) function, you can remove it from here)
    return "The user cancelled the game.";
  } else {
    playerChoice = playerChoice.toLowerCase().trim();
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      alert("You didn't enter 'rock', 'paper' or 'scissors'!");
      return getPlayerChoice(); // Repeat the function and return the result
    }
    return playerChoice; // Return the valid choice
  }
}

// playRound
function playRound(computerSelection, playerSelection) {
  let result;

  if (playerSelection === "The user cancelled the game.") {
    return "The game wasn't played."; // logged result if the prompt is cancelled
  }

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
