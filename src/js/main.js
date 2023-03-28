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

score.innerHTML = 0;
let click = 0;
let scoreValue = 0;
let playerScore = [];

playBtn.addEventListener('click' , function() {
    startCont.style.display = 'none';
});

player.forEach(el => {
    el.addEventListener('click', function () {
        if (el.id == 'one') {
            playerOneScore.textContent = scoreValue;
            playerScore.push({ id: 'one', score: scoreValue });
            console.log(playerScore)
            scoreValue = 0;
            score.innerHTML = 0;
            click = 0;
        } else if (el.id == 'two') {
            playerTwoScore.textContent = scoreValue;
            playerScore.push({ id: 'two', score: scoreValue });
            console.log(playerScore)
            scoreValue = 0;
            score.innerHTML = 0;
            click = 0;
        } else if (el.id == 'three') {
            playerThreeScore.textContent = scoreValue;
            playerScore.push({ id: 'three', score: scoreValue });
            console.log(playerScore)
            scoreValue = 0;
            score.innerHTML = 0;
            click = 0;
        } else if (el.id == 'four') {
            playerFourScore.textContent = scoreValue;
            playerScore.push({ id: 'four', score: scoreValue });
            console.log(playerScore)
            scoreValue = 0;
            score.innerHTML = 0;
            click = 0;
        } else {
            return;
        }
    })
})

function clickCheck() {
    if(click == 3) {
        let currentPlayer = document.querySelector('.player.is-active');
        let currentPlayerScore;

        for(let i = 0; i < scorePlayers.length; i++) {
            if(scorePlayers[i].classList.contains(currentPlayer.id)) {
                currentPlayerScore = scorePlayers[i];
            }
        }

        currentPlayerScore.textContent = scoreValue;
        playerScore.push({ id: currentPlayer.id, score: scoreValue });
        scoreValue = 0;
        score.innerHTML = 0;
        click = 0;
        currentPlayer.classList.remove('is-active');
        currentPlayer.nextElementSibling.classList.add('is-active');
    }
}


cont.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;   
        scoreValue += parseInt(el.innerHTML) * 2;
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue)

        clickCheck();
    })
})

contOne.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML);
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue);

        clickCheck();
    })
})

contTwo.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML) * 3
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue);

        clickCheck();
    })
})

contThree.forEach(el => {
    el.addEventListener('click', function () {
        click += 1;
        if (click > 3) return;
        scoreValue += parseInt(el.innerHTML);
        score.innerHTML = scoreValue;
        localStorage.setItem(score, scoreValue);

        clickCheck();
    })
})

bullseyeGreen.addEventListener('click', function () {
    click += 1;
    if (click > 3) return;
    scoreValue += parseInt(bullseyeGreen.innerHTML);
    score.innerHTML = scoreValue;
    localStorage.setItem(score, scoreValue)

    clickCheck();
})

bullseyeRed.addEventListener('click', function () {
    click += 1;
    if (click > 3) return;
    scoreValue += parseInt(bullseyeRed.innerHTML);
    score.innerHTML = scoreValue;
    localStorage.setItem(score, scoreValue)

    clickCheck();
})

