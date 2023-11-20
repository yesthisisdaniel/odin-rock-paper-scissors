let choice = ["rock", "paper", "scissors"];

let computerSelection = "";

let playerScore = 0;
let computerScore = 0;

console.log(`Player score: ${playerScore}`)
console.log(`Computer score: ${computerScore}`)
let gameButtons = document.querySelectorAll(".game-button");
let playerSelection = "";

gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        playerSelection = button.value;

        playGame();
    })
})









function compare(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        console.log("It\'s a tie, wop wop");
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
//function that takes the input from player and computer and compares them to determine winne + add points when needed


function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
    //use Math.random to extract a random choice in the choice array to return one of three options
}

function playGame() {
    let playerChoice = document.querySelector(".player-choice").textContent = `Player Chose: ${playerSelection}`
        
    let computerSelection = getComputerChoice();
    let cpuChoice = document.querySelector(".cpu-choice").textContent = `Computer Chose: ${computerSelection}`

        
        
    compare(playerSelection, computerSelection);
        
    console.log(`Score: Player: ${playerScore} Computer: ${computerScore}`);
    
    if (playerScore === 5) {
        console.log("You win!");
    }
    else {
        console.log("You lost.")
    }

    
}



//create function to get computer choice *
//have the function randomly return rock paper or scissors **


