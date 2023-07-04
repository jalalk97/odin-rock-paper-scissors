const POSSIBLE_MOVES = ["Rock", "Paper", "Scissors"];
const WIN = 1;
const LOSS = -1;
const DRAW = 0;
const NUMBER_OF_GAMES = 5;

const buttons = [
  document.querySelector("#rock-button"),
  document.querySelector("#paper-button"),
  document.querySelector("#scissors-button"),
];
const scoreDiv = document.querySelector("#score");
const announcementDiv = document.querySelector("#announcement");
const restartButton = document.querySelector("#restart-button");

let wins;
let losses;

resetGame();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = getRandomInt(POSSIBLE_MOVES.length);
  return POSSIBLE_MOVES[choice];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function winMessage(playerSelection, computerSelection) {
  return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function lossMessage(playerSelection, computerSelection) {
  return `You Lose! ${playerSelection} loses to ${computerSelection}`;
}

function drawMessage() {
  return "It's a draw!";
}

function errorMessage(selection) {
  return `Invalid option: ${selection}`;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(computerSelection);
  switch (computerSelection) {
    case "Rock":
      switch (playerSelection) {
        case "Rock":
          return DRAW;
        case "Paper":
          return WIN;
        case "Scissors":
          return LOSS;
        default:
          throw new Error(errorMessage(playerSelection));
      }

    case "Paper":
      switch (playerSelection) {
        case "Rock":
          return LOSS;
        case "Paper":
          return DRAW;
        case "Scissors":
          return WIN;
        default:
          throw new Error(errorMessage(playerSelection));
      }

    case "Scissors":
      switch (playerSelection) {
        case "Rock":
          return WIN;
        case "Paper":
          return LOSS;
        case "Scissors":
          return DRAW;
        default:
          throw new Error(errorMessage(playerSelection));
      }

    default:
      throw new Error(errorMessage(computerSelection));
  }
}

function isGameOver() {
  return wins == NUMBER_OF_GAMES || losses == NUMBER_OF_GAMES;
}

function displayScore() {
  scoreDiv.textContent = `${wins} - ${losses}`;
}

function resetGame() {
  wins = 0;
  losses = 0;
  displayScore();
  POSSIBLE_MOVES.forEach((_, i) => {
    buttons[i].disabled = false;
  });
  restartButton.classList.add("hidden");
  announcementDiv.textContent = "";
}

const handleMove = (playerSelection) => () => {
  if (isGameOver()) {
    return;
  }

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  if (result == WIN) {
    wins++;
    announcementDiv.textContent = winMessage(
      playerSelection,
      computerSelection
    );
  } else if (result == LOSS) {
    losses++;
    announcementDiv.textContent = lossMessage(
      playerSelection,
      computerSelection
    );
  } else if (result == DRAW) {
    announcementDiv.textContent = drawMessage();
  }
  displayScore();

  if (isGameOver()) {
    if (wins == NUMBER_OF_GAMES) {
      announcementDiv.textContent = "Game Over, You Won!";
    } else if (losses == NUMBER_OF_GAMES) {
      announcementDiv.textContent = "Game Over, You Lost.";
    }
    POSSIBLE_MOVES.forEach((_, i) => {
      buttons[i].disabled = true;
    });
    restartButton.classList.remove("hidden");
  }
};

POSSIBLE_MOVES.forEach((move, i) => {
  buttons[i].addEventListener("click", handleMove(move));
});

restartButton.addEventListener("click", resetGame);
