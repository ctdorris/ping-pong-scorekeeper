const maxScore = document.querySelector('#maxScore');
const scoreboard = document.querySelector('#scoreboard');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');

let player1Score = 0;
let player2Score = 0;

function updateScore(score) {
    const maxScoreValue = parseInt(maxScore.value);
    scoreboard.innerText = `${player1Score} to ${player2Score}`;
    if (maxScoreValue === score){
        player1.disabled = true;
        player2.disabled = true;
    }
}

reset.addEventListener('click', function(){
    player1Score = 0;
    player2Score = 0;
    scoreboard.innerText = `${player1Score} to ${player2Score}`;
    player1.disabled = false;
    player2.disabled = false;
});

player1.addEventListener('click', function(){
    player1Score ++;
    updateScore(player1Score);
});

player2.addEventListener('click', function(){
    player2Score ++;
    updateScore(player2Score);
});