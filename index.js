const choices = ["rock", "paper", "scissors"];
document.getElementById("rock")
document.getElementById("paper")
document.getElementById("scissors")
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(playerSelect) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    let result = ""

    if (playerSelect === computerChoice) {
        result = "Draw"
        drawScore++
    } else if (
        (playerSelect === "rock" && computerChoice === "scissors") ||
        (playerSelect === "paper" && computerChoice === "rock") ||
        (playerSelect === "scissors" && computerChoice === "paper")
    ) {
        result = `You win because ${playerSelect} beats ${computerChoice}`
        playerScore++
    } else {
        console.log(`You lose because ${computerChoice} beats ${playerSelect}`)
        computerScore++
    }
    console.log(`You won ${playerScore} times and computer won ${computerScore} times.`)
}



