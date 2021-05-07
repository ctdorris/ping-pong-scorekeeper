const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if (player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        };
        player.display.textContent = player.score;
    };
};

p1.button.addEventListener('click', function(){
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function(){
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}


// Original code

// const maxScore = document.querySelector('#maxScore');
// const p1Scoreboard = document.querySelector('#p1Score');
// const p2Scoreboard = document.querySelector('#p2Score')
// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#player2');
// const reset = document.querySelector('#reset');

// let player1Score = 0;
// let player2Score = 0;
// let winningScore = 5;
// let isGameOver = false;


// function updateScore(score, board, player) {
//     let maxScoreValue = parseInt(maxScore.value);
//     // board.innerText = score;
//     if (winningScore === score){
//         // player1.disabled = true;
//         // player2.disabled = true;
//     } else if (player === 1){
//         player1Score ++;
//         board.textContent = player1Score;
//     } else if (player === 2){
//         player2Score++;
//         board.textContent = player2Score;
//     }
// }

// reset.addEventListener('click', function(){
//     player1Score = 0;
//     player2Score = 0;
//     p1Scoreboard.innerText = player1Score;
//     p2Scoreboard.innerText = player2Score;
//     player1.disabled = false;
//     player2.disabled = false;
// });

// player1.addEventListener('click', function(){
//     // player1Score ++;
//     let player = 1;
//     updateScore(player1Score, p1Scoreboard, player);
// });

// player2.addEventListener('click', function(){
//     // player2Score ++;
//     let player = 2;
//     updateScore(player2Score, p2Scoreboard, player);
// });