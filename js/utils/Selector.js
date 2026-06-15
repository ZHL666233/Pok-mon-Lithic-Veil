import { Element } from './Element.js';
import { playSound } from '../file/audio.js';

export class Selector {
    constructor(container, labelText, values, options = {}, cb) {
        this.container = container;
        this.labelText = labelText; 
        this.values = values;
        this.options = options;
        this.cb = cb;
        this.currentIndex = options.currentIndex ?? 0;

        this.render();
    }

    render() {
        this.selector = new Element(this.container, { className: 'selector-container' }).element;

        this.label = new Element(this.selector, { className: 'selector-label', text: this.labelText }).element;
        this.leftArrow = new Element(this.selector, { className: 'selector-arrow', text: "◄" }).element;
        this.value = new Element(this.selector, { className: 'selector-value', text: this.getCurrentValue() }).element;
        this.rightArrow = new Element(this.selector, { className: 'selector-arrow', text: "►" }).element;

        this.leftArrow.addEventListener('click', () => this.previousValue());
        this.rightArrow.addEventListener('click', () => this.nextValue());

        if (this.options.className) {
            this.selector.classList.add(this.options.className);
        }
    }

    previousValue() {
        playSound('option', 'ui');
        this.currentIndex = (this.currentIndex - 1 + this.values.length) % this.values.length;
        this.updateValue();
    }

    nextValue() {
        playSound('option', 'ui');
        this.currentIndex = (this.currentIndex + 1) % this.values.length;
        this.updateValue();
    }

    updateValue() {
        this.value.innerText = this.getCurrentValue();
        if (this.cb) this.cb(this.currentIndex);
    }

    updateLabelText(newLabel) {
        this.labelText = newLabel; 
        this.label.innerText = this.labelText;
    }

    getCurrentValue() {
        if (this.options.lang !== undefined) return this.values[this.currentIndex][this.options.lang]
        return this.values[this.currentIndex];
    }

    setNewCurrentValue(newValueIndex) {
        if (newValueIndex < 0 || newValueIndex >= this.values.length) return;
        this.currentIndex = newValueIndex;
        this.updateValue();
    }

    
}
