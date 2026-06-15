import { Element } from './Element.js';
import { playSound } from '../file/audio.js'; 

export class Input {
    constructor(container, labelText, options = {}) {
        this.container = container;
        this.labelText = labelText; 
        this.options = options;

        this.render();
    }

    render() {
        this.input = new Element(this.container, { className: 'input-container' }).element;

        this.label = new Element(this.input, { className: 'input-label', text: this.labelText }).element;

        this.value = document.createElement('input');
        this.value.className = 'input-value';
        this.value.setAttribute("type", "text");

        if (this.options.maxlength) this.value.setAttribute("maxlength", this.options.maxlength);
        if (this.options.placeholder)  this.value.placeholder = this.options.placeholder;

        this.value.addEventListener('keydown', () => {
            const keySound = Math.random() < 0.5 ? 'key0' : 'key1';
            playSound(keySound, 'ui');
        });

        this.input.appendChild(this.value);
    }
}