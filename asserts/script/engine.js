var Balloon = (function () {
    function Balloon(left) {
        this._colors = [
            "#FF8080", "#00CC99", "#000000", "#FFFFFF", "#A1D300", "#DCDCDC",
            "#FFFF00", "#0000FF", "#FF00FF", "#FF99FF", "#FF9900", "#996633",
            "#666699", "#66FF33", "#808080", "#F2F2F2", "#333333", "#595959",
            "#FF0066", "#FFCC99", "#CCCCFF", "#993333", "#996600"
        ];
        this._left = left;
    }
    Balloon.prototype.create = function () {
        var element = document.createElement('DIV');
        var color = this._getColor();
        element.classList.add('o-balloon');
        element.appendChild(new Cord().create());
        element.appendChild(new Head(color).create());
        element.appendChild(new Leg(color).create());
        element.style.left = this._left + "px";
        element.style.background = color;
        return element;
    };
    Balloon.prototype._getColor = function () {
        var index = parseInt(Math.random() * parseInt(this._colors.length));
        return this._colors[index];
    };
    return Balloon;
}());
var Cloud = (function () {
    function Cloud(top, left) {
        this._top = top;
        this._left = left;
    }
    Cloud.prototype.create = function () {
        var cloud = document.createElement('DIV');
        cloud.classList.add('o-cloud--1');
        cloud.style.top = this._top + "px";
        cloud.style.left = this._left + "px";
        for (var i = 2; i <= 5; i++) {
            var child = document.createElement('SPAN');
            child.classList.add("o-cloud--" + i);
            cloud.appendChild(child);
        }
        return cloud;
    };
    return Cloud;
}());
var Cord = (function () {
    function Cord() {
    }
    Cord.prototype.create = function () {
        var element = document.createElement('SPAN');
        element.classList.add('o-balloon__cord');
        return element;
    };
    return Cord;
}());
var Head = (function () {
    function Head(color) {
        this._color = color;
    }
    Head.prototype.create = function () {
        var element = document.createElement('SPAN');
        element.classList.add('o-balloon__head');
        element.style.background = this._color;
        return element;
    };
    return Head;
}());
var Leg = (function () {
    function Leg(color) {
        this._color = color;
    }
    Leg.prototype.create = function () {
        var element = document.createElement('SPAN');
        element.classList.add('o-balloon__leg');
        element.style.background = this._color;
        return element;
    };
    return Leg;
}());
function buildClouds() {
    var nuvens = 5;
    for (var i = 0; i < nuvens; i++) {
        var top_1 = parseInt(Math.random() * 500);
        var left = parseInt(Math.random() * 900);
        document.body.appendChild(new Cloud(top_1, left).create());
    }
}
function insertingBalloons() {
    setInterval(function () {
        var left = parseInt(Math.random() * 1280);
        document.body.appendChild(new Balloon(left).create());
    }, 1000);
}
function insertScore() {
    document.body.appendChild(new Score().create());
}
function playSound() {
    var sound = new Audio('asserts/sounds/game.mp3');
    sound.play();
}
function startGame() {
    document.body.removeChild(document.getElementsByClassName('o-info--play')[0]);
    playSound();
    insertScore();
    buildClouds();
    insertingBalloons();
}
function score(ballon) {
    var score = document.getElementsByClassName('o-score')[0];
    var sound = new Audio('asserts/sounds/score.mp3');
    sound.play();
    score.textContent = parseInt(score.textContent) + 1;
    document.body.removeChild(ballon);
}
window.addEventListener('keyup', function (e) {
    var SPACE_CODE = 32;
    if (e.keyCode === SPACE_CODE)
        startGame();
});
window.addEventListener('click', function (e) {
    if (e.target.classList.contains('o-balloon'))
        score(e.target);
});
var Score = (function () {
    function Score() {
    }
    Score.prototype.create = function () {
        var score = document.createElement('SPAN');
        score.classList.add('o-score');
        score.textContent = '0';
        return score;
    };
    return Score;
}());
