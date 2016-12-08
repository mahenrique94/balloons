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
        element.classList.add('balloon');
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
var Cord = (function () {
    function Cord() {
    }
    Cord.prototype.create = function () {
        var element = document.createElement('SPAN');
        element.classList.add('balloon__cord');
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
        element.classList.add('balloon__head');
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
        element.classList.add('balloon__leg');
        element.style.background = this._color;
        return element;
    };
    return Leg;
}());
var Nuvem = (function () {
    function Nuvem(top, left) {
        this._top = top;
        this._left = left;
    }
    Nuvem.prototype.create = function () {
        var cloud = document.createElement('DIV');
        cloud.classList.add('cloud--1');
        cloud.style.top = this._top + "px";
        cloud.style.left = this._left + "px";
        for (var i = 2; i <= 5; i++) {
            var child = document.createElement('DIV');
            child.classList.add("cloud--" + i);
            cloud.appendChild(child);
        }
        return cloud;
    };
    return Nuvem;
}());
var nuvens = 5;
for (var i = 0; i < nuvens; i++) {
    var top_1 = parseInt(Math.random() * 500);
    var left = parseInt(Math.random() * 900);
    document.body.appendChild(new Nuvem(top_1, left).create());
}
setInterval(function () {
    var left = parseInt(Math.random() * 1280);
    document.body.appendChild(new Balloon(left).create());
}, 1000);
