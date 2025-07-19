const choices = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const reset = document.getElementById("resetGame")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
const drawCountDisplay = document.getElementById("drawCountDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const roundInfo = document.getElementById("roundInfo")

rock.addEventListener("click", () => playRound("rock"))
paper.addEventListener("click", () => playRound("paper"))
scissors.addEventListener("click", () => playRound("scissors"))
reset.addEventListener("click", () => resetGame())

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
        result = `You lose because ${computerChoice} beats ${playerSelect}`
        computerScore++
    }
    resultDisplay.textContent = result
    roundInfo.textContent = `You chose ${playerSelect} and computer chose ${computerChoice}`
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
    drawCountDisplay.textContent = `Draw Count: ${drawScore}`
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    roundInfo.textContent = "Click the buttons"
    resultDisplay.textContent = "Good luck!"
    playerScoreDisplay.textContent = `Player Score: 0`
    computerScoreDisplay.textContent = `Computer Score: 0`
    drawCountDisplay.textContent = `Draw Count: 0`
}







