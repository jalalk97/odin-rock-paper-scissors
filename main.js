const POSSIBLE_MOVES = ["Rock", "Paper", "Scissors"];
const WIN = 1;
const LOSS = -1;
const DRAW = 0;
const NUMBER_OF_GAMES = 5;

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

function game() {
  let wins = 0;
  let losses = 0;
  while (true) {
    const playerSelection = capitalize(prompt("Your move: "));
    const computerSelection = getComputerChoice();
    console.log(`Your move: ${playerSelection}`);
    console.log(`The computer's move: ${computerSelection}`);
    try {
      const result = playRound(playerSelection, computerSelection);
      if (result == LOSS) {
        losses++;
      } else if (result == WIN) {
        wins++;
      }
      console.log(`Score: Player ${wins} - ${losses} Computer\n`);
      if (wins == NUMBER_OF_GAMES) {
        console.log("Game Over. You Won!");
        break;
      }
      if (losses == NUMBER_OF_GAMES) {
        console.log("Game Over. You Lost.");
        break;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

game();
