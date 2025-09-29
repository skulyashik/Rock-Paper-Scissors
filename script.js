function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = 'Камень';
    return computerChoice;
  } else if (computerChoice === 2) {
    computerChoice = 'Ножницы';
    return computerChoice;
  } else {
    computerChoice = 'Бумага'
    return computerChoice;
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Выберите один из вариантов: Ножницы, Камень, Бумага.');
  if (humanChoice == 'Камень' || humanChoice == 'Ножницы' || humanChoice == 'Бумага') {
    return humanChoice;
  } else {
    return alert('Неправильный ввод, попробуйте ещё раз.');
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice == 'Бумага' && getComputerChoice == 'Камень') {
    humanScore += 1;
    console.log(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Игрок выйграл`);
  } else if (getHumanChoice == 'Камень' && getComputerChoice == 'Ножницы') {
    humanScore += 1;
    console.log(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Игрок выйграл`);
  } else if (getHumanChoice == 'Ножницы' && getComputerChoice == 'Бумага') {
    humanScore += 1;
    console.log(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Игрок выйграл`)
  } else if (getHumanChoice == getComputerChoice) {
    console.log(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Ничья.`)
  } else {
    computerScore += 1;
    console.log(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Компьютер выйграл`);
  }
}