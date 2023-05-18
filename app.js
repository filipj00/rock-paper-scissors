
// Variables
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const info = document.querySelector('.info');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const winBox = document.querySelector('.win-box');
const playAgain = document.querySelector('.play-again');

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

// Buttons with EventListeners
rock.addEventListener('click', function() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', function() {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', function() {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// Function that allows to play single round.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        info.innerText = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        info.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        info.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    roundCount++;
    updateScores();

    if (roundCount === 5) {
        endGame();
        playAgain.style.display = 'block';
    }
}

// Function to update player and computer scores
function updateScores() {
    player.innerText = playerScore;
    computer.innerText = computerScore;
}

// Function to end the game and display the result
function endGame() {
    if (playerScore > computerScore) {
        winBox.innerText = "Congratulations! You win! :)";  
    } else if (playerScore < computerScore) {
        winBox.innerText = "Unfortunately you lose :(";
    } else {
        winBox.innerText = "It's a tie!";
    }

    // Disable buttons after the game ends
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
