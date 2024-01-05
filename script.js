console.log("Hello. It's a rock, paper, scissors game! ");

function getComputerChoice() {
  let gameElements = ["rock", "paper", "scissors"];
  return gameElements[Math.floor(Math.random() * gameElements.length)];
}

function getPlayerChoice() {
  return prompt(`Enter your choice.
  Rock
  Paper
  Scissors `).toLowerCase();
}

let roundScore;
function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return (roundScore = "It's a tie.");
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    roundScore = "You Lose! Rock beats scissors!";
    computerScore++;
    return roundScore;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    roundScore = "You Lose! Paper beats rock!";
    computerScore++;
    return roundScore;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    roundScore = "You Lose! Scissors beats paper!";
    computerScore++;
    return roundScore;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    roundScore = "You Won. Rock beats scissors!";
    playerScore++;
    return roundScore;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    roundScore = "You Won. Paper beats rock!";
    playerScore++;
    return roundScore;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    roundScore = "You Won. Scissors beats paper!";
    playerScore++;
    return roundScore;
  } else {
    console.log("You provided wrong input");
  }
}

let computerScore = 0;
let playerScore = 0;
function playGame() {
  for (let index = 0; index < 5; index++) {
    playRound(getComputerChoice(), getPlayerChoice());
    console.log(roundScore);
    console.log(`Player score is ${playerScore}`);
    console.log(`Computer score is ${computerScore}`);
    if (index === 4) {
      if (playerScore > computerScore) {
        console.log("YOU WON THE GAME");
      } else if (playerScore < computerScore) {
        console.log("YOU LOST THE GAME");
      } else {
        console.log("IT'S A TIE");
      }
    }
  }
}
console.log(playGame());
