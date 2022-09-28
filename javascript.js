// Generating a Random Computer Choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("Something is wrong.")
    };
}

// Play One Round

const playerSelection = (prompt("Pick among 'Rock, Paper, Scissors' to start the game'")).toLowerCase(); 

const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {

switch(true) {
    case (playerSelection === computerSelection):
        return `It\'s a tie! You both picked ${playerSelection} `;
        break;
    case (playerSelection === 'rock' && computerSelection ==='scissors'):
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
    case (playerSelection === 'paper' && computerSelection === 'rock'):
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
        break;
    default:
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        break;
}
}

console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))