const bullseyeGreen = document.querySelector('.bullseye-green');
const bullseyeRed = document.querySelector('.bullseye-red');
const score = document.querySelector('.score');
const playerOneScore = document.querySelector('.pl-score-one');
const playerTwoScore = document.querySelector('.pl-score-two');
const playerThreeScore = document.querySelector('.pl-score-three');
const playerFourScore = document.querySelector('.pl-score-four');
const target = document.querySelectorAll('.target');
const cont = document.querySelectorAll('.container div');
const contOne = document.querySelectorAll('.container-one div');
const contTwo = document.querySelectorAll('.container-two div');
const contThree = document.querySelectorAll('.container-three div');
const player = document.querySelectorAll('.player');
const playBtn = document.querySelector('.start__container-btn');
const startCont = document.querySelector('.start');
const scorePlayers = document.querySelectorAll('.pl-score');
const typeGame501 = document.getElementById('tg-five');
const typeGame301 = document.getElementById('tg-three');
const gameType = document.querySelectorAll('.game-type');
const numPlayer = document.querySelectorAll('.num-player');

score.innerHTML = 0;
let click = 0;
let scoreValue = 0;
let playerScore = [];
let lastPlayer = player[player.length - 1];

numPlayer.forEach(el => {
    el.addEventListener('click' , function(){
        el.classList.add('is-active');
    })
});

gameType.forEach(el => {
    el.addEventListener('click', function () {
        if (el.id == 'tg-five') {
            scorePlayers.forEach(el => {
                el.innerHTML = 501;
            })
            scoreValue = 0;       
            typeGame501.classList.add('is-active')
        }else if (el.id == 'tg-three') {
            scorePlayers.forEach(el => {
                el.innerHTML = 301;
            })
            score.innerHTML = 301;          
            typeGame301.classList.add('is-active')
        }else {
            console.log('test')
        }
    })
});

playBtn.addEventListener('click', function () {
    
    if (typeGame501.classList.contains('is-active')) {
        startCont.style.display = 'none'
    }else{
        alert('Please choose a game type!');
    }
});

// player.forEach(el => {
//     el.addEventListener('click', function () {
//         if (el.id == 'one') {
//             playerOneScore.textContent = scoreValue;           
//             playerScore.push({ id: 'one', score: scoreValue });
//             scoreValue = 0;
//             score.innerHTML = 0;
//             click = 0;
//         } else if (el.id == 'two') {
//             playerTwoScore.textContent = scoreValue;
//             playerScore.push({ id: 'two', score: scoreValue });
//             scoreValue = 0;
//             score.innerHTML = 0;
//             click = 0;
//         } else if (el.id == 'three') {
//             playerThreeScore.textContent = scoreValue;
//             playerScore.push({ id: 'three', score: scoreValue });
//             scoreValue = 0;
//             score.innerHTML = 0;
//             click = 0;
//         } else if (el.id == 'four') {
//             playerFourScore.textContent = scoreValue;
//             playerScore.push({ id: 'four', score: scoreValue });
//             scoreValue = 0;
//             score.innerHTML = 0;
//             click = 0;
//         }
//     })
// })

function clickCheck() {
    if (click == 3) {
        let currentPlayer = document.querySelector('.player.is-active');
        let currentPlayerScore;

        for (let i = 0; i < scorePlayers.length; i++) {
            if (scorePlayers[i] && scorePlayers[i].classList.contains(currentPlayer.id)) {
                currentPlayerScore = scorePlayers[i];
            }
        }
        currentPlayerScore.textContent = currentPlayerScore.textContent - scoreValue;       
        playerScore.push({ id: currentPlayer.id, score: scoreValue });
        click = 0;
        score.innerHTML = 0;
        scoreValue = 0;

        if (lastPlayer == currentPlayer) {
            currentPlayer.classList.remove('is-active'); 
            player[0].classList.add('is-active');
        }else {     
            currentPlayer.classList.remove('is-active');   
            currentPlayer.nextElementSibling.classList.add('is-active');
        }

        if (currentPlayerScore.textContent == 0) {
            console.log('kraj')
        }
    }
};

cont.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML) * 2;
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue)

        clickCheck();
    })
});

contOne.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML);
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue);

        clickCheck();
    })
});

contTwo.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML) * 3
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue);

        clickCheck();
    })
});

contThree.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML);
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue);

        clickCheck();
    })
});

bullseyeGreen.addEventListener('click', function () {
    click += 1;
    if (click > 3) return;
    scoreValue += parseInt(bullseyeGreen.innerHTML);
    score.innerHTML = scoreValue;
    localStorage.setItem(score, scoreValue)

    clickCheck();
});

bullseyeRed.addEventListener('click', function () {
    click += 1;
    if (click > 3) return;
    scoreValue += parseInt(bullseyeRed.innerHTML);
    score.innerHTML = scoreValue;
    localStorage.setItem(score, scoreValue)

    clickCheck();
});

