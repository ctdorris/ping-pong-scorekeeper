const maxScore = document.querySelector('#maxScore');
const p1Scoreboard = document.querySelector('#p1Score');
const p2Scoreboard = document.querySelector('#p2Score')
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');

let player1Score = 0;
let player2Score = 0;

function updateScore(score, board) {
    const maxScoreValue = parseInt(maxScore.value);
    board.innerText = score;
    if (maxScoreValue === score){
        player1.disabled = true;
        player2.disabled = true;
    }
}

reset.addEventListener('click', function(){
    player1Score = 0;
    player2Score = 0;
    p1Scoreboard.innerText = player1Score;
    p2Scoreboard.innerText = player2Score;
    player1.disabled = false;
    player2.disabled = false;
});

player1.addEventListener('click', function(){
    player1Score ++;
    updateScore(player1Score, p1Scoreboard);
});

player2.addEventListener('click', function(){
    player2Score ++;
    updateScore(player2Score, p2Scoreboard);
});