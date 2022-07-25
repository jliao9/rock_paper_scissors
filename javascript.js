let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let computerSelection = computerPlay();
let playerSelection;

const buttons = document.querySelectorAll("button");
const rockPlay = document.querySelector("#rock");
const paperPlay = document.querySelector("#paper");
const scissorsPlay = document.querySelector("#scissors");
const score = document.querySelector("#result");
const results = document.querySelector(".scoreboard");
const current = document.querySelector(".current");
const reset = document.querySelector(".reset");

function computerPlay(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
    
}

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


function playRound(playerSelection) {
        let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        score.textContent = `It's a tie!`;
        roundCount +=1;
        scores();
        end();
    }   else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                score.textContent =  `You lose this round!-- You chose ${playerSelection} but the computer chose ${computerSelection}...${computerSelection} beats ${playerSelection}!`
                computerScore += 1;
                roundCount +=1;
                scores();
                end();
        }   if (computerSelection === "scissors") {
                score.textContent =  `You win this round!-- You chose ${playerSelection} while the computer chose ${computerSelection}`
                playerScore += 1;
                roundCount +=1;
                scores();
                end();
        }
    }   else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                score.textContent =  `You lose this round!-- You chose ${playerSelection} but the computer chose ${computerSelection}`
                computerScore += 1;
                roundCount +=1;
                scores();
                end();
        }   if (computerSelection === "rock") {
                score.textContent =  `You win this round!-- You chose ${playerSelection} while the computer chose ${computerSelection}`
                playerScore += 1;
                roundCount +=1;
                scores();
                end();
        }
    }   else if (playerSelection === "scissors"){
            if (computerSelection === "paper") {
                score.textContent =  `You win this round!-- You chose ${playerSelection} while the computer chose ${computerSelection}`
                playerScore += 1;
                roundCount +=1;
                scores();
                end();
        }   if (computerSelection === "rock"){
                score.textContent =  `You lose this round!-- You chose ${playerSelection} but the computer chose ${computerSelection}`
                computerScore += 1;
                roundCount +=1;
                scores();
                end();
    }
}};

function scores() {
        current.textContent =` It is currently ${playerScore} to ${computerScore} out of ${roundCount}`;
        if (playerScore === computerScore){
                results.textContent = `You are currently tied.`;

        }
        if (playerScore > computerScore ){
                results.textContent = `You are currently in the lead!`;

        }
        if (computerScore > playerScore) {
                results.textContent = `The computer is in the lead!`;

        }
};


function end() {
        if (playerScore === 5) {
                reset.textContent = "Good game! You won! Restart to try again!"
                buttons.forEach(button => {
                        button.disabled = true;
                });
        }
        if (computerScore === 5) {
                reset.textContent ="Oh no! The computer won! Restart to try again!"
                buttons.forEach(button => {
                        button.disabled = true;
                });
        }
}
