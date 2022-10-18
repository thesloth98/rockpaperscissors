// Generating a Random Computer Choice
const computerChoice = () => {
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

// Score variables
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

// Play One Round
const playerSelection =  prompt("Pick among 'Rock, Paper, Scissors' to start the game'").toLowerCase();

const computerSelection = computerChoice();

const playRound = (playerSelection, computerSelection) => {
    switch(true) {
    case (playerSelection === computerSelection):
        return `It\'s a tie! You both picked ${playerSelection} `;
        break;
    case (playerSelection === 'rock' && computerSelection ==='scissors'):
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
    case (playerSelection === 'paper' && computerSelection === 'rock'):
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}! Your score: ${playerScore} vs. Computer score: ${computerScore}`;
        break;
    default:
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection} Your score: ${playerScore} vs. Computer score: ${computerScore}`;
        break;
    } 
}

// Looping the game

// const game = () => {
//  for (let i=0; i<5; i++) {
//     playerPlay();
//     computerChoice();
//     if (i == 5) {
//      if (playerScore > computerScore) {
//         console. log ("Congrats! You beat the Computer!");
//      } else if (playerScore == computerScore) {
//        console.log ("It's a tie.");
//      } else {
//         console.log ("You lose. The Computer has beaten you.");
//      }
//      console.log(playerScore);
//      console.log(computerScore);
//     } else {
//         return PlayRound();
//     }
// }
// }

// const reset = () => {
//     playerScore =0;
//     computerScore=0;
// }

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))