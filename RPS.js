
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
    
    let input = prompt("Enter 'R' for rock, 'P' for paper, or 'S' for scissors.");
    if (input) {
        input = input.toUpperCase();
        switch(input) {
            case 'R':
                return 'rock';
            case 'P':
                return 'paper';
            case 'S':
                return 'scissors';
            default:
                alert("Enter 'R', 'P', or 'S' only!");
                return getHumanChoice();
        }
    }
    else {
        alert('Bye!');
        return input;
    }
}