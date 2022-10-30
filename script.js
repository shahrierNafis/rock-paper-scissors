function getComputerChoice() {
    number = getRandom3();
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

function getResult(records) {
    let winrecords = records.filter(element => element == "You Win!");
    let loserecords = records.filter(element => element == "You Lose!");
    if (winrecords.length > loserecords.length) {
        return "You Win the game!!!!";
    }
    else if (winrecords.length == loserecords.length) {
        return "The game is a Tie!";
    }
    return "You Lost the game to a computer!";
}

function displayRunningScore(record) {
    const scoreContainer = document.querySelector(".scoreContainer");
    const score = document.createElement("div");
    score.innerText = record;
    scoreContainer.appendChild(score);
}

function announceWinner(){
    getResult(records);
    document.querySelector(".scoreContainer").innerHTML = getResult(records);
    records = [];
}
let records = [];
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", () => {
    const record = playRound(button.textContent, getComputerChoice());
    records.push(record);
    displayRunningScore(record)
    if (records.length == 5) {
        announceWinner();
    }
}));