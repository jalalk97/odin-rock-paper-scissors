const moves = {
  0: "Rock",
  1: "Paper",
  2: "Scissors",
};

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
  switch (capitalize(computerSelection)) {
    case "Rock":
      switch (capitalize(playerSelection)) {
        case "Rock":
          return "It's a draw!";
        case "Paper":
          return `You Win! ${playerSelection} beats ${computerSelection}`;
        case "Scissors":
          return `You Lose! ${computerSelection} beats ${playerSelection}`;
        default:
          throw new Error(`Invalid option: ${playerSelection}`);
      }

    case "Paper":
      switch (capitalize(playerSelection)) {
        case "Rock":
          return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case "Paper":
          return "It's a draw!";
        case "Scissors":
          return `You Win! ${playerSelection} beats ${computerSelection}`;
        default:
          throw new Error(`Invalid option: ${playerSelection}`);
      }

    case "Scissors":
      switch (capitalize(playerSelection)) {
        case "Rock":
          return `You Win! ${playerSelection} beats ${computerSelection}`;
        case "Paper":
          return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case "Scissors":
          return "It's a draw!";
        default:
          throw new Error(`Invalid option: ${playerSelection}`);
      }

    default:
      throw new Error(`Invalid option: ${computerSelection}`);
  }
}
