class Cord implements Obj {

    public create() : HTMLObjectElement {
        let element : HTMLObjectElement = document.createElement('SPAN');
        element.classList.add('o-balloon__cord');
        return element;
    }

}
