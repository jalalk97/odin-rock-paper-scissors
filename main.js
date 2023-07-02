const moves = {
  0: "Rock",
  1: "Paper",
  2: "Scissors",
};

const WIN = 1;
const LOSS = -1;
const DRAW = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = getRandomInt(Object.keys(moves).length);
  return moves[choice];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  switch (computerSelection) {
    case "Rock":
      switch (playerSelection) {
        case "Rock":
          console.log("It's a draw!");
          return DRAW;
        case "Paper":
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
          return WIN;
        case "Scissors":
          console.log(
            `You Lose! ${computerSelection} beats ${playerSelection}`
          );
          return LOSS;
        default:
          throw new Error(`Invalid option: ${playerSelection}`);
      }

    case "Paper":
      switch (playerSelection) {
        case "Rock":
          console.log(
            `You Lose! ${computerSelection} beats ${playerSelection}`
          );
          return LOSS;
        case "Paper":
          console.log("It's a draw!");
          return DRAW;
        case "Scissors":
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
          return WIN;
        default:
          throw new Error(`Invalid option: ${playerSelection}`);
      }

    case "Scissors":
      switch (playerSelection) {
        case "Rock":
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
          return WIN;
        case "Paper":
          console.log(
            `You Lose! ${computerSelection} beats ${playerSelection}`
          );
          return LOSS;
        case "Scissors":
          console.log("It's a draw!");
          return DRAW;
        default:
          throw new Error(`Error: Invalid option: ${playerSelection}`);
      }

    default:
      throw new Error(`Error: Invalid option: ${computerSelection}`);
  }
}
