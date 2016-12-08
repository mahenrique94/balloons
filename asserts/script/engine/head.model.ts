class Head implements Obj {

    private _color : string;
   
    constructor(color : string) {
        this._color = color;
    }

    public create() : HTMLObjectElement {
        let element : HTMLObjectElement = document.createElement('SPAN');
        element.classList.add('balloon__head');
        element.style.background = this._color;
        return element;
    }

}