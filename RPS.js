
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

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! ${humanChoice} and ${computerChoice} are equal.`);
        }
        else {
            switch(humanChoice) {
                case 'rock':
                    if (computerChoice === 'paper') {
                        console.log(`You LOSE! Paper beats rock.`);
                        computerScore++;
                    }
                    else if (computerChoice === 'scissors') {
                        console.log(`You WIN! Rock beats scissors.`);
                        humanScore++;
                    }
                    break;
                case 'paper':
                    if (computerChoice === 'rock') {
                        console.log(`You WIN! Paper beats rock.`);
                        humanScore++;
                    }
                    else if (computerChoice === 'scissors') {
                        console.log(`You LOSE! Scissors beats paper.`);
                        computerScore++;
                        }
                    break;
                case 'scissors':
                    if (computerChoice === 'rock') {
                        console.log(`You LOSE! Rock beats scissors.`);
                        computerScore++;
                    }
                    else if (computerChoice === 'paper') {
                        console.log(`You WIN! Scissors beats paper.`);
                        humanScore++;
                    }
                    break;
                default:
                    return;
            }
        }

        console.log(`Scores:\n Human: ${humanScore}\n Computer: ${computerScore}`);
    }


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

