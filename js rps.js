let choice = ["rock", "paper", "scissors"];

let computerSelection = "";

let playerScore = 0
let computerScore = 0;
let maxScore = 5;
let playerScoreText = document.querySelector(".player-score").textContent = `Player score: ${playerScore}`;
let computerScoreText = document.querySelector(".cpu-score").textContent = `CPU score: ${computerScore}`;

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
        
    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;

        }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        
    }
    else if (playerSelection == "scissors" && computerSelection === "paper") {
        playerScore++;

        
    }
    else {
        computerScore++;

    }
    playerScoreText = document.querySelector(".player-score").textContent = `Player score: ${playerScore}`;
    computerScoreText = document.querySelector(".cpu-score").textContent = `CPU score: ${computerScore}`;
    // console.log(playerScoreText, computerScoreText)
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
    //use Math.random to extract a random choice in the choice array to return one of three options
}

function playGame() {
    let playerChoice = document.querySelector(".player-choice").textContent = `Player Chose: ${playerSelection}`
        
    let computerSelection = getComputerChoice();
    let cpuChoice = document.querySelector(".cpu-choice").textContent = `Computer Chose: ${computerSelection}`

    compare(playerSelection, computerSelection);
    endGame();
    
    

    
}

function endGame() {
    if (playerScore === maxScore) {
        console.log("you won")
    }
    else if (computerScore === maxScore) {
        console.log("you lost")
    }
    
}



//create function to get computer choice *
//have the function randomly return rock paper or scissors **


