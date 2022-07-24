let playerScore = 0;
let computerScore = 0;
let roundCount = 0;


const rockPlay = document.querySelector("#rock");
const paperPlay = document.querySelector("#paper");
const scissorsPlay = document.querySelector("#scissors");
const score = document.querySelector("#result");

// computerPlay returns random integer from numberConvert playerPlay returns typed value from userPrompt
function computerPlay(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerSelection = computerPlay();
let playerSelection;

rockPlay.addEventListener("click", () => {
        playerSelection = "rock";
        playRound("rock", computerSelection);
});

paperPlay.addEventListener("click", () => {
        playerSelection = "paper";
        playRound("paper", computerSelection);
});


scissorsPlay.addEventListener("click", () => {
        playerSelection = "scissors";
        playRound("scissors", computerSelection);
});


//function that plays a single round of rps given parameter from both computer and player
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        score.textContent = "It's a tie!";
    }   else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                score.textContent = "You lose! Paper beats rock!";
        }   if (computerSelection === "scissors") {
                score.textContent = "You win! Rock beats scissors";
        }   else {
                score.textContent = "Error: Try again!"
        }
    }   else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                score.textContent = "You lose! Scissors beats paper!";
        }   if (computerSelection === "rock") {
                score.textContent = "You win! Paper beats rock!";
        }   else {
                score.textContent = "Error: Try again!"
        }

    }   else if (playerSelection === "scissors"){
            if (computerSelection === "paper") {
                score.textContent = "You win! Scissors beats paper";
        }   if (computerSelection === "rock"){
                score.textContent = "You lose! Rock beats scissors";
        }   else {
                score.textContent = "Error: Try again!"
        }
    }
}

console.log("You chose " + playerSelection);
console.log("The computer chose " + computerSelection);
console.log("You have won " + playerScore + " times.");
console.log("The computer has won " + computerScore + " times.");
console.log("This is round " + roundCount);

