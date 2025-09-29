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
  humanChoice = (humanChoice.at(0).toUpperCase()) + (humanChoice.slice(1).toLowerCase());
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
    alert(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Игрок выйграл`);
  } else if (getHumanChoice == 'Камень' && getComputerChoice == 'Ножницы') {
    humanScore += 1;
    alert(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Игрок выйграл`);
  } else if (getHumanChoice == 'Ножницы' && getComputerChoice == 'Бумага') {
    humanScore += 1;
    alert(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Игрок выйграл`)
  } else if (getHumanChoice == getComputerChoice) {
    alert(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Ничья.`)
  } else {
    computerScore += 1;
    alert(`Игрок выбрал ${getHumanChoice}, компьютер ${getComputerChoice}. Компьютер выйграл`);
  }
}

function playGame(){
  alert(`Добро пожаловать в игру "Камень, ножницы, бумага"! \n\nЧтобы начать нажмите "Close"`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`1 раунд\n\nСЧЁТ: У вас ${humanScore} очков. У компьютера ${computerScore} очков.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`2 раунд\n\nСЧЁТ: У вас ${humanScore} очков. У компьютера ${computerScore} очков.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`3 раунд\n\nСЧЁТ: У вас ${humanScore} очков. У компьютера ${computerScore} очков.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`4 раунд\n\nСЧЁТ: У вас ${humanScore} очков. У компьютера ${computerScore} очков.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`5 раунд\n\nСЧЁТ: У вас ${humanScore} очков. У компьютера ${computerScore} очков.`)
  if (humanScore > computerScore) {
    alert(`ПОБЕДА\nВы набрали больше очков чем компьютер.`)
  } else {
    alert(`ПРОИГРЫШ\nК сожалению, вы проиграли.`)
  }
  humanScore = 0;
  computerScore = 0;
}