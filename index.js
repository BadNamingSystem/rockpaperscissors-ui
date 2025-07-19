const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    console.log(`Computer chose ${computerChoice}`);
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Type rock, paper, or scissors OR CLICK CANCEL if just loaded.").toLowerCase().trim();
        if (playerChoice === "") {
            console.log("Game cancelled.");
            return null;
        }
        if (!choices.includes(playerChoice)) {
            alert("Invalid choice! Type rock, paper, or scissors");
        }
    } while (!choices.includes(playerChoice));

    if (choices.includes(playerChoice)) {
        console.log(`You chose ${playerChoice}`);
        return playerChoice;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    const roundsToPlay = 5;

    function playRound(playerSelect, computerSelect) {
        if (playerSelect === computerSelect) {
            console.log("Draw");
            drawScore++
        } else if (
            (playerSelect === "rock" && computerSelect === "scissors") ||
            (playerSelect === "paper" && computerSelect === "rock") ||
            (playerSelect === "scissors" && computerSelect === "paper")
        ) {
            console.log(`You win because ${playerSelect} beats ${computerSelect}`)
            playerScore++
        } else {
            console.log(`You lose because ${computerSelect} beats ${playerSelect}`)
            computerScore++
        }
    }

    for (let i = 0; i < roundsToPlay; i++) {
        console.log(`\n--- Round ${i + 1} of ${roundsToPlay} ---`);
        const playerSelect = getPlayerChoice();
        const computerSelect = getComputerChoice();
        playRound(playerSelect, computerSelect);
        console.log(`You won ${playerScore} times and computer won ${computerScore} times.`)
    }
    console.log(`\n --- GAME OVER! ---`)
    console.log(`Final score - ${playerScore} to ${computerScore}`);
    console.log(`${drawScore} draw/s.`);
    if (playerScore > computerScore) {
        console.log("Congratulations, you won the game!")
    } else if (computerScore > playerScore) {
        console.log("Computer won. Don't be a sucky boi!")
    } else {
        console.log("It's a tie ... boring.")
    }
}

playGame();
