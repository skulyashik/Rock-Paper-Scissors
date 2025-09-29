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

function getHumanChoice() {
  humanChoice = prompt('Выберите один из вариантов: Ножницы, Камень, Бумага.');
  if (humanChoice == 'Камень' || humanChoice == 'Ножницы' || humanChoice == 'Бумага') {
    return humanChoice;
  } else {
    return alert('Неправильный ввод, попробуйте ещё раз.');
  }
}
