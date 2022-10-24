function getComputerChoice() {
    number = getrandom3();
    if (number == 0) {
        return "rock";
    }
    else if (number == 1) {
        return "paper";
    }
    return "scissors";
}

function getRandom3() {
    while (true) {
        let number = Math.floor(Math.random() * 10);
        if (number < 3) {
            return number;
        }
        continue;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }
    else if (playerSelection == "rock") {
        switch (computerSelection) {
            case "paper":
                return "You Lose!";
            case "scissors":
                return "You Win!";
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return "You Win!";
            case "scissors":
                return "You Lose!";
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "paper":
                return "You Win!";
            case "rock":
                return "You Lose!"
        }
    }
}

function game() {

    let playerSelection;
    let computerSelection;
    let record = [];
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt().toLowerCase();
        computerSelection = getComputerChoice();
        record[i] = playRound(playerSelection, computerSelection);
    }
    console.log(record);
    console.log(getResult(record));
}

function getResult(record) {
    let winRecord = record.filter(element => element == "You Win!");
    let loseRecord = record.filter(element => element == "You Lose!");
    if (winRecord.length > loseRecord.length) {
        return "You Win!";
    }
    else if (winRecord.length == loseRecord.length) {
        return "draw";
    }
    return "You Lose!";
}

game();