let playerScore = 0;
let computerScore = 0;
let roundCount = 0;


// computerPlay returns random integer from numberConvert playerPlay returns typed value from userPrompt
function computerPlay(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playerPlay(){
    let userPrompt = prompt("Choose your player: rock, paper, or scissors").toLowerCase();
    if (userPrompt !== "rock" && userPrompt !== "scissors" && userPrompt !== "paper") {
        return "Please choose a real player!";
    } else {
        return userPrompt;
    }
}


//function that plays a single round of rps given parameter from both computer and player
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundCount += 1;
        return "It's a tie!";
    }   else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                computerScore += 1;
                roundCount += 1;
                return "You lose! Paper beats rock!";
        }   if (computerSelection === "scissors") {
                playerScore +=1
                roundCount += 1;
                return "You win! Rock beats scissors";
        }   else {
                return "Error: Try again!"
        }
    }   else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                computerScore += 1;
                roundCount += 1;
                return "You lose! Scissors beats paper!";
        }   if (computerSelection === "rock") {
                playerScore += 1;
                roundCount += 1;
                return "You win! Paper beats rock!";
        }   else {
                return "Error: Try again!"
        }

    }   else if (playerSelection === "scissors"){
            if (computerSelection === "paper") {
                playerScore += 1;
                roundCount += 1;
                return "You win! Scissors beats paper";
        }   if (computerSelection === "rock"){
                computerScore +=1;
                roundCount += 1;
                return "You lose! Rock beats scissors";
        }   else {
                return "Error: Try again!"
        }
    }
}
const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log("You chose " + playerSelection);
console.log("The computer chose " + computerSelection);
console.log("You have won " + playerScore + " times.");
console.log("The computer has won " + computerScore + " times.");
console.log("This is round " + roundCount);

// returns winner of round

function game(){
    playRound();{
        }for (i=0;i<5;i++){
            if (playerScore > computerScore){
                return "You win!";
        }   else if (computerScore > playerScore){
                return "You lose!";
        }   else {
                return "It's a tie!";
        }
        }
        }
