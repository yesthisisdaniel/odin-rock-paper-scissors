let choice = ["rock", "paper", "scissors"];
//create array for the choices of rock, paper, and scissors

let playerSelection = "";
let computerSelection = "";
//these variables need to be empty since there is no need for the program to run the variables/functions when the browsers loads the program
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
//function that takes the input from player and computer and compares them to determine winne + add points when needed


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
        //the while loop will run until either the computer or the player reaches 5 points


        //playerSelection and computerSelection declared INSIDE the function so that they do not run OUTSIDE the function more than need
        let playerSelection = getPlayerChoice()
        // playerSelection declared and intialized to the function getPlayerSchoice so that when playGame() run THEN the player is prompted to input an answer
        console.log(playerSelection)
        //prinot out the playerSelection to the console so that we know what we chose but more importantly to confirm the output is correct
        let computerSelection = getComputerChoice();
        console.log(computerSelection)
        //the same as the comments above
        
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

    //this conditional needs top be ran outside of the loop otherwise the conditional would keep running due to the loop
        
}

playGame();



//create function to get computer choice *
//have the function randomly return rock paper or scissors **


