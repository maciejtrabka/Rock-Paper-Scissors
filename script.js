let computerScore = 0;
let playerScore = 0;
let index = 0;
const gameWinnerContainer = document.querySelector("h5");
const playerScoreContainer = document.querySelector("#playerScore");
const computerScoreContainer = document.querySelector("#computerScore");
const scoreContainer = document.querySelector("h1");

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
  playerChoice = "rock";
  playGame();
});
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  playerChoice = "paper";
  playGame();
});
const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  playerChoice = "scissors";
  playGame();
});

function getComputerChoice() {
  let gameElements = ["rock", "paper", "scissors"];
  return gameElements[Math.floor(Math.random() * gameElements.length)];
}

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

function showRoundScore(roundScore) {
  const score = document.createElement("div");
  score.textContent = roundScore;
  scoreContainer.appendChild(score);
}

function showGameWinner() {
  const score = document.createElement("div");
  if (playerScore > computerScore) {
    score.textContent = "YOU WON THE GAME";
  } else if (playerScore < computerScore) {
    score.textContent = "YOU LOST THE GAME";
  } else {
    score.textContent = "NOBODY. IT'S A TIE";
  }
  scoreContainer.appendChild(score);
}

function playGame() {
  playRound(getComputerChoice(), playerChoice);
  showRoundScore(roundScore);
  playerScoreContainer.textContent = `Computer score: ${computerScore}`;
  computerScoreContainer.textContent = `Player score: ${playerScore}`;
  if (index === 4) {
    showGameWinner();
  }
  index += 1;
}
