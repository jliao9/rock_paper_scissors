let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let computerSelection = computerPlay();
let playerSelection;

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
        score.innerHTML = "<b>It's a tie!</b>";
        roundCount +=1;
        scores();
    }   else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                score.innerHTML = "<b> You lose!</b> -- You chose rock but paper beats rock!<p> "
                computerScore += 1;
                roundCount +=1;
                scores();
        }   if (computerSelection === "scissors") {
                score.innerHTML = "<b>You win!</b> -- Rock beats scissors!";
                playerScore += 1;
                roundCount +=1;
                scores();
        }
    }   else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                score.innerHTML = "<b>You lose!</b> -- Scissors beats paper!";
                computerScore += 1;
                roundCount +=1;
                scores();
        }   if (computerSelection === "rock") {
                score.innerHTML = "<b>You win!</b> -- Paper beats rock!";
                playerScore += 1;
                roundCount +=1;
                scores();
        }
    }   else if (playerSelection === "scissors"){
            if (computerSelection === "paper") {
                score.innerHTML = "<b>You win!</b> -- Scissors beats paper";
                playerScore += 1;
                roundCount +=1;
                scores();
        }   if (computerSelection === "rock"){
                score.innerHTML = "<b>You lose!</b> -- Rock beats scissors";
                computerScore += 1;
                roundCount +=1;
                scores();
    }
    end();
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
                reset.textContent = "Good game! You won! Try again!"
                playerScore === 0;
                computerScore === 0;
        }
        if (computerScore === 5) {
                reset.textContent ="Oh no! The computer won! Try again!"
                playerScore === 0;
                computerScore === 0;
        }
}
