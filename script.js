function getComputerChoice() {
    number = random3();
    if (number == 0) {
        return "rock";
    }
    else if (number == 1) {
        return "paper";
    }
    return "scissors";
}

function random3() {
    while (true) {
        let number = Math.floor(Math.random() * 10);
        if (number < 3) {
            return number;
        }
        continue;
    }
}
const playerSelection = prompt().toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "draw";
    }
    else if(playerSelection == "rock"){
        switch (computerSelection){
            case "paper":
                return "You Lose!";
            case "scissors":
                return "You Win!";
        }
    }
    else if(playerSelection == "paper"){
        switch (computerSelection){
            case "rock":
                return "You Win!";
            case "scissors":
                return "You Lose!";
        }
    }
    else if(playerSelection == "scissors"){
        switch (computerSelection){
            case "paper":
                return "You Win!";
            case "rock":
                return "You Lose!"
        }
    }   
}
console.log(playRound(playerSelection, computerSelection));