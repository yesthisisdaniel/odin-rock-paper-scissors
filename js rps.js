let choice = ["rock", "paper", "scissors"];
//create array for the choices of rock, paper, and scissors

let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

console.log(`Player score: ${playerScore}`)
console.log(`Computer score: ${computerScore}`)

function compare(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        alert("It\'s a tie, wop wop");
    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return playerScore++;

        }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return playerScore++;
        
    }
    else if (playerSelection == "scissors" && computerSelection === "paper") {
        return playerScore++;
        
    }
    else {
        return computerScore++;
    }
}
//function that takes the input from player and computer and compares them to then return the result


function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
    //use Math.random to extract a random choice in the choice array to return one of three options
}
function getPlayerChoice() {
    const choice = prompt("What is your answer?");
    return choice.toLowerCase();
    //gets the player's input using a prompt, then using toLowerCase to accept case-insensitive input
}

function playGame() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = getPlayerChoice()
        console.log(playerSelection)
        let computerSelection = getComputerChoice();
        console.log(computerSelection)
        compare(playerSelection, computerSelection);
        // console.log(playerScore);
        // console.log(computerScore);
        console.log(`Score: Player: ${playerScore} Computer: ${computerScore}`);
    }

    if (playerScore === 5) {
        console.log("You win!");
    }
    else {
        console.log("You lost.")
    }
        
}

playGame();



//create function to get computer choice *
//have the function randomly return rock paper or scissors **


