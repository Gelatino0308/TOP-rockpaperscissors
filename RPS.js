
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


const btnNewGame = document.querySelector("#newgame");

btnNewGame.addEventListener("click", () => {

    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    let roundNum = 1;
    
    //to replace the div of new game button with score panel and round winner
    const divNewGame = document.querySelector(".divNewGame");
    divNewGame.parentNode.removeChild(divNewGame);
    const contentBody = document.querySelector("body");

    //creating score panel 
    const divScore = document.createElement("div");

    const h4Score = document.createElement("h4");
    const pScores = document.createElement("p");
    const pCurrRound = document.createElement("p");

    h4Score.textContent = 'Score:';
    pScores.textContent = `Player: ${humanScore}    |    Computer: ${computerScore}`;
    pCurrRound.textContent = `Current Round: ${roundNum}`;

    divScore.appendChild(pCurrRound);
    divScore.appendChild(h4Score);
    divScore.appendChild(pScores);

    contentBody.appendChild(divScore);
    divScore.classList.add("divScore");
    
    //creating round winner panel
    const divRoundWinner = document.createElement("div");
    // divRoundWinner.classList.add("divRoundWinner");
    contentBody.appendChild(divRoundWinner);

    const btnRPS = document.querySelector(".RPS-section");

    btnRPS.addEventListener("click", (event) => {
        let target = event.target;

        const playerSelection = target.id;
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore === computerScore) {
                console.log("IT'S A TIE");
            }
            else {
                console.log(humanScore > computerScore ? 'Winner: HUMAN' : 'Winner: COMPUTER');
            }
        }
    });

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
                    return 'quit';
            }
        }
    
        console.log(`Scores:\n Human: ${humanScore}\n Computer: ${computerScore}`);
    }
});