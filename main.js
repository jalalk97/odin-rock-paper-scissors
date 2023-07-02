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
