const computerChoiceDisplay = document.getElementById('Computer-choice');
const yourChoiceDisplay = document.getElementById('Your-choice');
const resultDisplay = document.getElementById('Result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>
{
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    generatecomputerChoiceDisplay()
    getResult()
}
))
function generatecomputerChoiceDisplay()  {
    const randomNumber = Math.floor(Math.random() *3)+1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice ='scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(userChoice === computerChoice){
        result = 'Draw!'
    }
    if(userChoice === 'rock' && computerChoice === 'paper'       ){
        result = 'lose!'
    }
    if(userChoice === 'rock' && computerChoice === 'scissors'       ){
        result = 'win!'
    }
    if(userChoice === 'paper' && computerChoice === 'rock'       ){
        result = 'win!'
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'       ){
        result = 'lose!'
    }
    if(userChoice === 'scissors' && computerChoice === 'paper'       ){
        result = 'win!'
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'       ){
        result = 'lose!'
    }
    resultDisplay.innerHTML = result
    console.log(result);

}

