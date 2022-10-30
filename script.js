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
    if (winRecords.length > loseRecords.length) {
        return "You Win the game!!!!";
    }
    return "You Lost the game to a computer!";
}

function displayRunningScore(winRecords, loseRecords, record) {
    const computer = document.querySelector(".computerScore");
    const user = document.querySelector(".userScore");
    const recordContainer = document.querySelector(".recordContainer");
    computer.innerText = "Computer: " + loseRecords.length;
    user.innerText = "You: " + winRecords.length;
    recordContainer.innerText = record;
}

function announceWinner() {
    getResult(records);
    const announcement = document.createElement("div")
    announcement.classList.add("announcement")
    announcement.innerText = getResult(records);
    announcement.addEventListener("click", () => history.go(0))
    document.body.innerHTML = "";
    document.body.appendChild(announcement);
    records = [];
}
let records = [];
let winRecords;
let loseRecords;
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", () => {
    const record = playRound(button.textContent, getComputerChoice());
    records.push(record);
    winRecords = records.filter(element => element == "You Win!");
    loseRecords = records.filter(element => element == "You Lose!");
    displayRunningScore(winRecords, loseRecords, record)
    console.log(loseRecords.length)
    if ((winRecords.length == 5) || (loseRecords.length == 5)) {
        announceWinner();
    }
}));