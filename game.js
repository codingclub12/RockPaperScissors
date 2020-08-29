var userChoice;
var computerChoice;
var result;
var ranNum;

const displayResult = document.getElementById('result');
const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const resetBtn = document.getElementById('reset');
const possibleChoices = document.querySelectorAll('.choices');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e =>
{
  userChoice = e.target.id;
  ranNum = Math.floor(Math.random() * 3) + 1;
  generateCompChoice();
  compareChoices();
  computerPick.innerHTML = computerChoice;
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = result;
}));

function generateCompChoice()
{
  if(ranNum == 1)
  {
    computerChoice = 'rock';
  }
  else if(ranNum == 2)
  {
    computerChoice = 'paper';
  }
  else if(ranNum == 3)
  {
    computerChoice = 'scissors';
  }
}
function reset(){
  computerChoice = '?';
  computerPick.innerHTML = computerChoice;
  ranNum = 0;
  userChoice = '?';
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = '?';
}

function compareChoices(){
  if(userChoice == computerChoice)
  {
    result = "It's a tie game!";
  }
  else if (userChoice == 'scissors' && computerChoice == 'paper')
  {
    result = "YOU WIN!!!";
  }
   else if (userChoice == 'paper' && computerChoice == 'rock')
  {
    result = "YOU WIN!!!";
  }
   else if (userChoice == 'rock' && computerChoice == 'scissors')
  {
    result = "YOU WIN!!!";
  }
   else if (userChoice == 'rock' && computerChoice == 'paper')
  {
    result = "Computer Wins.";
  }
   else if (userChoice == 'paper' && computerChoice == 'scissors')
  {
    result = "Computer Wins.";
  }
   else if (userChoice == 'scissors' && computerChoice == 'rock')
  {
    result = "Computer Wins.";
  }
}