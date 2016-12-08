class Score implements Obj {

    public create() : HTMLObjectElement {
        let score : HTMLObjectElement = document.createElement('SPAN');
        score.classList.add('o-score');
        score.textContent = '0';
        return score;
    }

}