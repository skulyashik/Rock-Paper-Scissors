function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = 'Rock';
    return computerChoice;
  } else if (computerChoice === 2) {
    computerChoice = 'Scissors';
    return computerChoice;
  } else {
    computerChoice = 'Paper'
    return computerChoice;
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Choose one of the options: Scissors, Rock, Paper.');
  humanChoice = (humanChoice.at(0).toUpperCase()) + (humanChoice.slice(1).toLowerCase());
  if (humanChoice == 'Rock' || humanChoice == 'Scissors' || humanChoice == 'Paper') {
    return humanChoice;
  } else {
    return alert('Incorrect input, please try again.');
  }
}

  let humanScore = 0;
  let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice == 'Paper' && getComputerChoice == 'Rock') {
    humanScore += 1;
    alert(`Player chose ${getHumanChoice}, the computer ${getComputerChoice}. The player won`);
  } else if (getHumanChoice == 'Rock' && getComputerChoice == 'Scissors') {
    humanScore += 1;
    alert(`Player chose ${getHumanChoice}, the computer ${getComputerChoice}. The player won`);
  } else if (getHumanChoice == 'Scissors' && getComputerChoice == 'Paper') {
    humanScore += 1;
    alert(`Player chose ${getHumanChoice}, the computer ${getComputerChoice}. The player won`)
  } else if (getHumanChoice == getComputerChoice) {
    alert(`Player chose ${getHumanChoice}, the computer ${getComputerChoice}. Draw.`)
  } else {
    computerScore += 1;
    alert(`Player chose ${getHumanChoice}, the computer ${getComputerChoice}. The computer won`);
  }
}

function playGame(){
  alert(`Welcome to Rock, Paper, Scissors!\n\nClick "Close" to begin.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`Round 1\n\nSCORE: You have ${humanScore} points. The computer has ${computerScore} points.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`Round 2\n\nSCORE: You have ${humanScore} points. The computer has ${computerScore} points.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`Round 3\n\nSCORE: You have ${humanScore} points. The computer has ${computerScore} points.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`Round 4\n\nSCORE: You have ${humanScore} points. The computer has ${computerScore} points.`)
  playRound(getHumanChoice(), getComputerChoice())
  alert(`Round 5\n\nSCORE: You have ${humanScore} points. The computer has ${computerScore} points.`)
  if (humanScore > computerScore) {
    alert(`VICTORY\nYou scored more points than the computer.`)
  } else {
    alert(`LOSS\nUnfortunately, you lost.`)
  }
  humanScore = 0;
  computerScore = 0;
}