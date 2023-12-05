let choice = ["rock", "paper", "scissors"];

let computerSelection = "";

let playerScore = 0
let computerScore = 0;
let maxScore = 5;
// let playerScoreText = document.querySelector(".player-score").textContent = `Player score: ${playerScore}`;
// let computerScoreText = document.querySelector(".cpu-score").textContent = `CPU score: ${computerScore}`;

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
        if (playerScore < maxScore) {
        playerScore++;
        }

        }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        if (playerScore < maxScore) {
        playerScore++;
        }
        
    }
    else if (playerSelection == "scissors" && computerSelection === "paper") {
        if (playerScore < maxScore) {
        playerScore++;
        }

        
    }
    else {
        if (computerScore < maxScore && playerScore < maxScore) {
        computerScore++;
        }

    }
    // playerScoreText = document.querySelector(".player-score").textContent = `Player score: ${playerScore}`;
    // computerScoreText = document.querySelector(".cpu-score").textContent = `CPU score: ${computerScore}`;
    // console.log(playerScoreText, computerScoreText)
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
    //use Math.random to extract a random choice in the choice array to return one of three options
}

function playGame() {
    let img = document.createElement("img")
    let playerChoice = document.querySelector(".player-choice").textContent = playerSelection
    let computerSelection = getComputerChoice();
    let cpuChoice = document.querySelector(".cpu-choice")

    if (computerScore === "rock") {
        img.src = "rps-images/rock.png";
        img.style.height = "150px";
        img.style.width = "150px"
        cpuChoice.append(img);
    } else if (computerSelection === "paper") {
        img.src = "rps-images/paper.png";
        img.style.height = "150px";
        img.style.width = "150px"
        cpuChoice.append(img);
    }
    else {
        img.src = "rps-images/scissors.png";
        img.style.height = "150px";
        img.style.width = "150px"
        cpuChoice.append(img);
    }


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


