// x = random integer producing rps, i = random integer producing computerPlay

let x = Math.floor((Math.random()*3)+1);
let i = Math.floor((Math.random()*3)+1);

const rps = ["Rock", "Paper", "Scissors"];
const randomized = Math.floor(Math.random() * rps.length);
console.log(randomized);


// random integer from 1-3 converted with 1=rock, 2=paper, 3=scissors

function numberConvert(x) {
    if (x === 1){
    return "Rock";
    } else if (x == 2) {
        return "Scissors";
    } else if (x == 3) {
        return "Paper";
    } else {
        return "Error: Please reload page!";
    }
}

// computerPlay returns random integer from numberConvert
function computerPlay(i){
    return numberConvert(x);
}

function playerPlay(i){
    return
}
//function that plays a single round of rps given parameter from both computer and player
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }   else if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return "You win! Rock beats paper!";
        }   if (computerSelection === "Scissors") {
                return "You lose! Scissors beats rock";
        }   else {
                return "Error: Try again!"
        }
    }   else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                return "You lose! Scissors beats paper!";
        }   if (computerSelection === "Rock") {
                return "You win! Paper beats rock!";
        }   else {
                return "Error: Try again!"
        }

    }   else if (playerSelection === "Scissors"){
            if (computerSelection === "Paper") {
                return "You win! Scissors beats paper";
        }   if (computerSelection == "Rock"){
                return "You lose! Rock beats scissors";
        }   else {
                return "Error: Try again!"
        }
    }
}
const playerSelection = "Paper"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection)

// returns winner of round