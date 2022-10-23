function getComputerChoice() {
    number = random3();
    if (number == 0) {
        return "Rock";
    }
    else if (number == 1) {
        return "Paper";
    }
    return "Scissors";
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
console.log(getComputerChoice());