import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';

export class WindowTutorial extends Window {
	constructor(component) {
		const title = text.menu.button['tutorial'][JSON.parse(window.localStorage.getItem("data")).config.language.text].toUpperCase();

	    super(title, 600, 450); 
	    this.component = component;
	    this.render();
	    this.page = 0;
	}

	render = () => {
		this.name = new Element(this.container, { className: 'tutorial-name super-stroke' }).element;
		this.image = new Element(this.container, { className: 'tutorial-image' }).element;
		this.description = new Element(this.container, { className: 'tutorial-description super-stroke' }).element;
		this.arrowLeft = new Element(this.container, { className: 'tutorial-arrow tutorial-arrow-left super-stroke', text: '<' }).element;
		this.arrowRight = new Element(this.container, { className: 'tutorial-arrow tutorial-arrow-right super-stroke', text: '>' }).element;
		this.index = new Element(this.container, { className: 'tutorial-index super-stroke' }).element;

		this.arrowLeft.addEventListener('click', () => { this.changePage(-1) })
		this.arrowRight.addEventListener('click', () => { this.changePage(1) })
  	}

  	update = () => {
  		const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;
  		this.name.innerText = text.menu.tutorial.name[this.page][lang];
  		this.description.innerText = text.menu.tutorial.description[this.page][lang];
  		this.index.innerText = `${this.page+1}/13`;
  		this.image.style.backgroundImage = `url("./assets/images/tutorial/${this.page+1}.png")`
  	}

  	changePage = (pos) => {
  		playSound('option', 'ui');
  		this.page += pos;
  		if (this.page < 0) this.page = 12;
  		if (this.page == 13) this.page = 0;
  		this.update();
  	}

  	open() {
	    super.open(true); 
	    this.update();
  	}

  	close() {
  		playSound('close', 'ui');
	    super.close(); 
  	}
}