const userScoreElem = document.getElementById('user-score'),
   computerScoreElem = document.getElementById('computer-score'),
   scoreBoard = document.querySelector('.score-board'),
   result = document.querySelector('.result > p'),
   rock = document.getElementById('r'),
   paper = document.getElementById('p'),
   scissors = document.getElementById('s'),
   userLable = document.getElementById('user-label');
let userScore = 0,
   computerScore = 0;

let userName;
userName = prompt(`What's your name`, 'user');
userLable.innerHTML = userName;

const smallUserWord = userName.fontsize(3).sup();
const smallComputerWord = 'comp'.fontsize(3).sup();

function getComputerChoice() {
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];
}

function convertToWord(letter) {
   if (letter === 'r') return 'Rock';
   if (letter === 'p') return 'Pock';
   return 'Scissors';
}

function win(userChoise, computerChoice) {
   userScoreElem.innerHTML = userScore++;
   result.innerHTML = `${convertToWord(userChoise)}${smallUserWord} beats ${convertToWord(
      computerChoice
   )}${smallComputerWord}. You win!`;
   document.getElementById(userChoise).classList.add('green-glow');
   setTimeout(() => document.getElementById(userChoise).classList.remove('green-glow'), 300);
}

function lose(userChoise, computerChoice) {
   computerScoreElem.innerHTML = computerScore++;
   result.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord} beats ${convertToWord(
      userChoise
   )}${smallUserWord}. You lose!`;
   document.getElementById(userChoise).classList.add('red-glow');
   setTimeout(() => document.getElementById(userChoise).classList.remove('red-glow'), 300);
}

function draw(userChoise, computerChoice) {
   result.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord} ${convertToWord(
      userChoise
   )}${smallUserWord}. It's draw!`;
   document.getElementById(userChoise).classList.add('grey-glow');
   setTimeout(() => document.getElementById(userChoise).classList.remove('grey-glow'), 300);
}

function game(userChoise) {
   const computerChoice = getComputerChoice();
   switch (userChoise + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
         win(userChoise, computerChoice);
         break;
      case 'rp':
      case 'ps':
      case 'sr':
         lose(userChoise, computerChoice);
         break;
      case 'rr':
      case 'pp':
      case 'ss':
         draw(userChoise, computerChoice);
         break;
   }
}

function main() {
   rock.addEventListener('click', () => game('r'));
   paper.addEventListener('click', () => game('p'));
   scissors.addEventListener('click', () => game('s'));
}

main();
