import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class PuzzleNumberCombination extends Window {
    constructor(main) {
        super(null, 200, 150);
        this.main = main;
        this.combination = [];
        this.combinationValues = [0, 0, 0, 0];
        this.cb = null;
        this.render();
    }

    render() {
        const lang = this.main.lang;

    	this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = 'var(--white)';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '0px';
        this.container.style.overflow = 'hidden';
        this.container.style.backgroundSize = 'cover';
        this.container.style.backgroundPosition = 'bottom';
        this.container.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.numberContainer = new Element(this.container, { className: 'puzzle-number-container' }).element;

        this.numberBox = {};
        this.numberValue = {};
        this.numberUp = {}
        this.numberDown = {}

        for (let i = 0; i < 4; i++) {
            this.numberBox[i] = new Element(this.numberContainer, { className: 'puzzle-number-box' }).element;
            this.numberUp[i] = new Element(this.numberBox[i], { className: 'puzzle-number-up stroke', text: '+' }).element;
            this.numberValue[i] = new Element(this.numberBox[i], { className: 'puzzle-number-value' }).element;
            this.numberDown[i] = new Element(this.numberBox[i], { className: 'puzzle-number-down stroke', text: '-' }).element;

            this.numberUp[i].addEventListener('click', () => { this.changeCombinationValue(i, 1) });
            this.numberDown[i].addEventListener('click', () => { this.changeCombinationValue(i, -1) });
            this.numberUp[i].addEventListener('mouseenter', () => { playSound('hover0', 'ui') });
            this.numberDown[i].addEventListener('mouseenter', () => { playSound('hover0', 'ui') });
        }
    }

    open(title, combination, cb) {
        const lang = this.main.lang;

        this.title = title[lang];
        this.name.innerText = this.title;
        this.combination = combination;
        this.cb = cb;

        super.open(true); 
        this.main.menu.available = false;
        this.updateCombinationValues();
    }

    updateCombinationValues = () => {
        this.combinationValues.forEach((value, i) => {
            this.numberValue[i].innerText = value;
        })
        this.checkCombination();
    }

    changeCombinationValue(pos, dir) {
        playSound('option', 'ui');
        this.combinationValues[pos] += dir;
        if (this.combinationValues[pos] > 9) this.combinationValues[pos] = 0;
        else if (this.combinationValues[pos] < 0) this.combinationValues[pos] = 9;
        this.updateCombinationValues();
    }

    checkCombination() {
        let res = this.combinationValues.join('');
        if (res === this.combination) {
            this.close();
            this.cb();
        }
    }

    close() {
        super.close(); 
        playSound('click1', 'ui');
        this.main.menu.available = true;
    }
}