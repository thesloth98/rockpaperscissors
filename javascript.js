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

function playRound(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
                    console.log(`It\'s a tie! You both picked ${playerSelection} `);
                } else if (playerSelection === 'rock' && computerSelection ==='scissors') {
                    playerScore++;
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
                } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                    playerScore++;
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
                } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                    playerScore++;
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
                } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                    computerScore++;
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                    computerScore++;
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                    computerScore++;
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                } else {
                    return `Something went wrong.`
                }
}

// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection))

//Looping the game
function game() {
    //Loop
    for (let i = 0; 1 < 5; i++) {
        let round = `Round: ${i+1}`;
        console.log(round);
        
        if (i == 5) {
            if (playerScore > computerScore) {
            return 'Player is the winner.';
          } else if (playerScore < computerScore) {
            return 'Computer is the winner.';
          } else {
            return 'There is no game winner. We have a tie.';
          }
        } else if (i < 5 ) {
            const playerSelection =  prompt("Pick among 'Rock, Paper, Scissors' to start the game'").toLowerCase();
            const computerSelection = computerChoice();
            console.log(playRound(playerSelection,computerSelection));
        }
    }

    console.log(`Player Score: ${playerScore} <-----> Computer Score: ${computerScore}`)

}


game();

// function game() {
// function playRound(playerSelection, computerSelection) {
//  for (let i=0; i<5; i++) {
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
//         return playRound();
//     }
//     }
// }
// }

// const reset = () => {
//     playerScore =0;
//     computerScore=0;
// }

// function game() {
//     for (let i=0; i < 5; i++) {
//         const playerSelection = prompt("Pick among 'Rock, Paper, Scissors' to start the game'").toLowerCase();
//         const computerSelection = computerChoice();
//         if (i == 5) {
//                  if (playerScore > computerScore) {
//                     console. log ("Congrats! You beat the Computer!");
//                  } else if (playerScore == computerScore) {
//                    console.log ("It's a tie.");
//                  } else {
//                     console.log ("You lose. The Computer has beaten you.");
//                  }
//                  console.log(playerScore);
//                  console.log(computerScore);
//                 }
//     }
// }