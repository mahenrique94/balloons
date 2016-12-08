/// <reference path="./balloon.model.ts"/>
/// <reference path="./cord.model.ts"/>
/// <reference path="./head.model.ts"/>
/// <reference path="./leg.model.ts"/>
/// <reference path="./cloud.model.ts"/>

function buildClouds() : void {
    const nuvens : number = 5;
    for (let i = 0; i < nuvens; i++) {
        let top : number = parseInt(Math.random() * 500);
        let left : left = parseInt(Math.random() * 900);
        document.body.appendChild(new Cloud(top, left).create());
    }
}

function insertingBalloons() : void {
    setInterval(() => {
        let left : number = parseInt(Math.random() * 1280);
        document.body.appendChild(new Balloon(left).create());
    }, 1000);
}

function insertScore() : void {
    document.body.appendChild(new Score().create());
}

function playSound() : void {
    let sound : Audio = new Audio('asserts/sounds/game.mp3');
    sound.play();
}

function startGame() : void {
    document.body.removeChild(document.getElementsByClassName('o-info--play')[0]);
    playSound();
    insertScore();    
    buildClouds();
    insertingBalloons();
}

function score(ballon : HTMLObjectElement) : void {
    let score : HTMLObjectElement = document.getElementsByClassName('o-score')[0];
    let sound : Audio = new Audio('asserts/sounds/score.mp3');
    sound.play();
    score.textContent = parseInt(score.textContent) + 1;
    document.body.removeChild(ballon);
}

window.addEventListener('keyup', e => {
    const SPACE_CODE : number = 32;
    if (e.keyCode === SPACE_CODE)
        startGame();
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('o-balloon'))
        score(e.target);
});