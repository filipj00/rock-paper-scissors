function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`
    }       
}


function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors: ").toLowerCase()
        const computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)
        console.log(result)

        if (result.startsWith("You win!")) {
            playerScore++
        } else if (result.startsWith("You lose!")) {
            computerScore++
        }
    }

    console.log("--Final score--")
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

    if (playerScore > computerScore) {
        console.log("Congratulations! You win! :)")
    } else if (playerScore < computerScore) {
        console.log("Unfortunatelly you lose :(")
    } else {
        console.log("It's a tie! Play again!")
    }
}

game()