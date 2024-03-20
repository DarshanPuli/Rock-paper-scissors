let scoreCount = {
    won: 0,
    lost: 0,
    draw: 0
}

function playGame(playerChoice) {
    let computerMove = getComputerMove();
    response = getResponse(playerChoice, computerMove);
    updateScore(response);
    setMove(playerChoice, computerMove);
    displayPosition(response);
}
function displayPosition(response){
    document.querySelector('.display-position').innerHTML= response;
}

function displayScore() {
    document.querySelector('.display-score').innerHTML = `WINS :   ${scoreCount.won}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LOST : ${scoreCount.lost}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TIE : ${scoreCount.draw}`;
}

function getResponse(playerChoice, computerMove) {
    if (playerChoice === 'rock') {
        if (computerMove === 'rock') {
            response = 'tie';
        } else if (computerMove === 'paper') {
            response = 'you win';
        } else {
            response = 'you lose';
        }
    } else if (playerChoice === 'paper') {
        if (computerMove === 'paper') {
            response = 'tie';
        } else if (computerMove === 'scissor') {
            response = 'you win';
        } else {
            response = 'you lose';
        }
    } if (playerChoice === 'scissor') {
        if (computerMove === 'scissor') {
            response = 'tie';
        } else if (computerMove === 'rock') {
            response = 'you win';
        } else {
            response = 'you lose';
        }
    }
    return response;
}

function setMove(playerChoice, computerMove) {
    document.querySelector('.display-moves').innerHTML = `<div class="random"><p class="move-para">YOUR MOVE</p> : <img id="image" src="./images/${playerChoice}-emoji.png"> <p class="move-para">COMPUTER MOVE</p> : <img id="image" src="./images/${computerMove}-emoji.png"></div>`;
}

function updateScore(response) {
    if (response === 'you win') {
        scoreCount.won++;
    } else if (response === 'tie') {
        scoreCount.tie++;
    } else {
        scoreCount.lost++;
    }
}

function getComputerMove() {
    let computerMove = '';
    let x = Math.random();
    if (x <= 1 / 3) {
        computerMove = 'rock';
    } else if (x > 1 / 3 && x <= 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissor';
    }
    return computerMove;
}