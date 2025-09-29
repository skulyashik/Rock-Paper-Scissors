function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return computerChoice = 'Камень';
  } else if (computerChoice === 2) {
    return computerChoice = 'Ножницы';
  } else {
    return computerChoice = 'Бумага';
  }
}
