class Balloon implements Obj {

    private _left : number;
    private _colors : Array<String> = [
        "#FF8080", "#00CC99", "#000000", "#FFFFFF", "#A1D300", "#DCDCDC",
        "#FFFF00", "#0000FF", "#FF00FF", "#FF99FF", "#FF9900", "#996633",
        "#666699", "#66FF33", "#808080", "#F2F2F2", "#333333", "#595959",
        "#FF0066", "#FFCC99", "#CCCCFF", "#993333", "#996600"
    ];
    
    constructor(left : number) {
        this._left = left;
    }
    
    public create() : HTMLObjetElement {
        let element : HTMLObjetElement = document.createElement('DIV');
        let color : string = this._getColor();
        element.classList.add('balloon');
        element.appendChild(new Cord().create());
        element.appendChild(new Head(color).create());
        element.appendChild(new Leg(color).create());
        element.style.left = this._left + "px";
        element.style.background = color;
        return element;
    }
   
    private _getColor() : string {
        let index : number = parseInt(Math.random() * parseInt(this._colors.length));
        return this._colors[index];
    }

}
