class Nuvem implements Obj {

    private _top : number;
    private _left : number;

    constructor(top : number, left : number) {
        this._top = top;
        this._left = left;
    }

    public create() : HTMLObjectElement {
        let cloud : HTMLObjectElement = document.createElement('DIV');
        cloud.classList.add('cloud--1');
        cloud.style.top = `${this._top}px`;
        cloud.style.left = `${this._left}px`;
        for (let i = 2; i <= 5; i++) {
            let child : HTMLObjectElement = document.createElement('DIV');
            child.classList.add(`cloud--${i}`);
            cloud.appendChild(child);
        }
        return cloud;
    }

}