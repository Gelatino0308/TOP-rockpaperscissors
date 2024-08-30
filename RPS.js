
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

let humanScore;
let computerScore;
let currRoundNum;
let pastRoundNum;

function playGame() {

    humanScore = 0;
    computerScore = 0;
    currRoundNum = 1;
    pastRoundNum = 0;
    
    //to replace the div of new game button with score panel and round winner
    btnNewGame.parentNode.removeChild(btnNewGame);
    const infoPanel = document.querySelector("#infoPanel");

    const prevDivScore = infoPanel.querySelector(".divScore");
    if(prevDivScore) {
        prevDivScore.parentNode.removeChild(prevDivScore);
    }

    const prevRoundWinner = infoPanel.querySelector(".divRoundWinner");
    if(prevRoundWinner) {
        prevRoundWinner.parentNode.removeChild(prevRoundWinner);
    }
    
    infoPanel.classList.remove("divNewGame");

    //creating score panel 
    const divScore = document.createElement("div");

    const h4Score = document.createElement("h4");
    const pScores = document.createElement("p");
    const pCurrRound = document.createElement("p");

    h4Score.textContent = 'Scores:';
    pScores.textContent = `Player: ${humanScore}    |    Computer: ${computerScore}`;
    pCurrRound.textContent = `Current Round: ${currRoundNum}`;

    divScore.appendChild(pCurrRound);
    divScore.appendChild(h4Score);
    divScore.appendChild(pScores);

    infoPanel.appendChild(divScore);
    divScore.classList.add("divScore");
    
    //creating round winner panel
    const divRoundWinner = document.createElement("div");
    divRoundWinner.classList.add("divRoundWinner");
    infoPanel.appendChild(divRoundWinner);


    const btnRPS = document.querySelector(".RPS-section");

    btnRPS.addEventListener("click", (event) => {
        let target = event.target;

        infoPanel.classList.add("divInGame");

        const playerSelection = target.id;
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
        pCurrRound.textContent = `Current Round: ${++currRoundNum}`;
        pScores.textContent = `Player: ${humanScore}    |    Computer: ${computerScore}`;

        if (humanScore >= 5 || computerScore >= 5) {
            divScore.removeChild(pCurrRound);
            divScore.removeChild(h4Score);
            divScore.removeChild(pScores);

            btnNewGame = document.createElement("button");
            btnNewGame.setAttribute("id", "newgame");
            btnNewGame.textContent = "New Game";
            divScore.appendChild(btnNewGame);
            btnNewGame.addEventListener("click", playGame);

            if (humanScore === computerScore) {
                divRoundWinner.textContent = "FINAL GAME RESULT: IT'S A TIE";
            }
            else {
                humanScore > computerScore ? divRoundWinner.textContent = "FINAL GAME RESULT: CONGRATS! YOU WIN!!!" 
                                            : divRoundWinner.textContent = "FINAL GAME RESULT: COMPUTER WINS =(";
            }
        }
    });

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            divRoundWinner.textContent = "";
            divRoundWinner.textContent = `Round#${++pastRoundNum} Result: It's a tie! ${humanChoice} and ${computerChoice} are equal.`;
        }
        else {
            switch(humanChoice) {
                case 'rock':
                    if (computerChoice === 'paper') {
                        divRoundWinner.textContent = "";
                        divRoundWinner.textContent = `Round#${++pastRoundNum} Result: You LOSE! Paper beats rock.`;
                        computerScore++;
                    }
                    else if (computerChoice === 'scissors') {
                        divRoundWinner.textContent = "";
                        divRoundWinner.textContent = `Round#${++pastRoundNum} Result: You WIN! Rock beats scissors.`;
                        humanScore++;
                    }
                    break;
                case 'paper':
                    if (computerChoice === 'rock') {
                        divRoundWinner.textContent = "";
                        divRoundWinner.textContent = `Round#${++pastRoundNum} Result: You WIN! Paper beats rock.`;
                        humanScore++;
                    }
                    else if (computerChoice === 'scissors') {
                        divRoundWinner.textContent = "";
                        divRoundWinner.textContent = `Round#${++pastRoundNum} Result: You LOSE! Scissors beats paper.`;
                        computerScore++;
                        }
                    break;
                case 'scissors':
                    if (computerChoice === 'rock') {
                        divRoundWinner.textContent = "";
                        divRoundWinner.textContent = `Round#${++pastRoundNum} Result: You LOSE! Rock beats scissors.`;
                        computerScore++;
                    }
                    else if (computerChoice === 'paper') {
                        divRoundWinner.textContent = "";
                        divRoundWinner.textContent = `Round#${++pastRoundNum} Result: You WIN! Scissors beats paper.`;
                        humanScore++;
                    }
                    break;
            }
        }
    }
}

let btnNewGame = document.querySelector("#newgame");
btnNewGame.addEventListener("click", playGame);