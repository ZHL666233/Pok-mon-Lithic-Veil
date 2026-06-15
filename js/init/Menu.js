import { Init } from './Init.js';
import { Element } from '../utils/Element.js';
import { WindowSettings } from './WindowSettings.js';
import { WindowNewGame } from './WindowNewGame.js';
import { WindowTutorial } from './WindowTutorial.js';
import { WindowCredits } from './WindowCredits.js';
import { text } from '../file/text.js';
import { Main } from '../game/Main.js';
import { playSound } from '../file/audio.js';

const BUTTON = ['play', 'tutorial', 'settings', 'credits', 'exit']

export class Menu {
	constructor(data) {
		this.data = data;
		this.newGame = new WindowNewGame(this);
		this.settings = new WindowSettings(this);
		this.tutorial = new WindowTutorial(this);
		this.credits = new WindowCredits(this);
		this.render();
	}

	render = () => {
		this.scene = new Element(document.getElementById("screen"), { className: 'menu-scene' }).element;
		this.title = new Element(this.scene, { className: 'menu-title', text: 'POKÉMON LITHIC VEIL' }).element;
		this.version = new Element(this.scene, { className: 'menu-version', text: 'v 1.0.20' }).element;

		this.button = {};
		const buttonContainer = new Element(this.scene, { className: 'menu-button-container' }).element;

		// 汉化标识
		const creditEl = new Element(this.scene, { className: 'menu-credit', text: '人民汉化' }).element;
		creditEl.style.position = 'absolute';
		creditEl.style.left = '10px';
		creditEl.style.bottom = '10px';
		creditEl.style.fontSize = '10px';
		creditEl.style.color = '#1b1b19';

		BUTTON.forEach((label) => {
			this.button[label] = new Element(buttonContainer, { className: 'menu-button' }).element;
			this.button[label].addEventListener('click', () => { this.buttonHandler(label) })
			this.button[label].addEventListener('mouseover', () => { playSound('hover1', 'ui') })
		})

		this.update();
	}

	update = () => {
		const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;
		BUTTON.forEach((label) => {
			this.button[label].innerText = text.menu.button[label][lang];
		})

		if (this.data.save.player) {
			this.button['play'].innerText = text.menu.button['play'][lang];
		} else this.button['play'].innerText = text.menu.button['newGame'][lang];
	}

	buttonHandler = (btn) => {
		playSound('click1', 'ui')
		switch(btn) {
			case 'play':
				if (!this.data.save.player) this.newGame.open();
				else this.startGame();
				break;
			case 'settings':
				this.settings.open();
				break;
			case 'tutorial':
				this.tutorial.open();
				break;
			case 'credits':
				this.credits.open();
				break;
			case 'exit':
				if (window.electron?.closeApp) {
					window.electron.closeApp();
					return; 
				}
				this.destroy();
				new Init(this.data);
				break;
		}
	}

	destroy = () => {
		BUTTON.forEach((label) => {
			this.button[label].removeEventListener('click', () => this.buttonHandler(label));
		});

		this.scene.remove();
	}

	startGame = () => {
		const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

		this.destroy();
		playSound('start', 'ui');

	    const overlay = document.createElement('div');
	    overlay.className = 'super-stroke'
	    overlay.style.cursor = `url("./assets/images/misc/cursor-loading.png") 0 0, auto`;
	    overlay.style.position = 'absolute';
	    overlay.style.width = '100%';
	    overlay.style.height = '100%';
	    overlay.style.backgroundColor = '#111'; 
	    overlay.style.zIndex = 9999;  
	    overlay.style.display = 'flex';
	    overlay.style.justifyContent = 'center';
	    overlay.style.alignItems = 'center';
	    overlay.style.color = 'var(--white)';
	    overlay.style.fontSize = '20px';
	    overlay.textContent = text.menu.loading[lang]; 

	    document.getElementById("screen").appendChild(overlay);
	    
	    setTimeout(() => {
	        document.getElementById("screen").removeChild(overlay);
	        window.main = new Main(this.data);
	    }, 1000); 

	}
}

