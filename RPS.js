
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3 + 1);
    switch(randInt) {
        case 1: 
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getHumanChoice() {
    
    let input = prompt("Enter rock, paper, or scissors.");

    if (input) {
        input = input.toLowerCase();
        switch(input) {
            case 'rock':
            case 'paper':
            case 'scissors':
                return input;
            default: 
                alert("Check your spelling!");
                return getHumanChoice();
        }
    }
    else {
        alert('Bye!');
        return input;
    }
}


function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);