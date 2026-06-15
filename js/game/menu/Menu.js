import { Element } from '../../utils/Element.js';
import { saveData } from '../../file/data.js';
import { text } from '../../file/text.js';

import { Popup } from '../../utils/Popup.js';
import { MenuPlayer } from './MenuPlayer.js';
import { MenuTeam } from './MenuTeam.js';
import { MenuBag } from './MenuBag.js';
import { MenuPokedex } from './MenuPokedex.js';
import { MenuMap } from './MenuMap.js';
import { MenuSettings } from './MenuSettings.js';
import { MenuAchievements } from './MenuAchievements.js';
import { playSound } from '../../file/audio.js';

const BUTTON = ['player', 'team', 'bag', 'pokedex', 'map', 'settings', 'achievements', 'save', 'close', 'exit']

export class Menu {
	constructor(main) {
		this.main = main;
		this.available = true;
		this.isOpen = false;
		this.current = null;
		this.render();

		this.pokedex = new MenuPokedex(this);
		this.team = new MenuTeam(this);
		this.bag = new MenuBag(this);
		this.settings = new MenuSettings(this);
		this.achievements = new MenuAchievements(this);
		this.player = new MenuPlayer(this);
		this.map = new MenuMap(this);

		this.confirmExit = new MenuExit(this);
	}

	render() {
		this.container = new Element(this.main.gameMenuScene, { className: 'game-menu' }).element;
		this.info = new Element(this.main.gameMenuScene, { className: 'game-menu-info' }).element;
		this.button = {};

		BUTTON.forEach((label) => {
			this.button[label] = new Element(this.container, { className: 'game-menu-button' }).element;
			
			const langText = text.gameMenu[label][this.main.lang];

			this.button[label].innerText = 
				label === 'player' 
					? this.main.player.name.toUpperCase() 
					: langText.toUpperCase();

			this.button[label].addEventListener('mouseover', () => {
				this.info.innerText = text.gameMenu.hints[label][this.main.lang];
			});

			this.button[label].addEventListener('mouseout', () => {
				const key = this.current?.key;
				this.info.innerText = key ? text.gameMenu.hints[key][this.main.lang] : text.gameMenu.hints.default[this.main.lang];
			});

			this.button[label].addEventListener('click', () => this.buttonHandler(label));
			this.button[label].addEventListener('mouseover', () => playSound('hover0', 'ui'));
		});
	}

	toggle() {
		if (!this.available) return;
		if (this.isOpen) this.close();
		else this.open();
	}

	open() {
		playSound('select', 'ui');
		this.isOpen = true;
		this.main.gameMenuScene.style.display = "block";

		Object.keys(this.button).forEach(key => {
			this.button[key].className = 'game-menu-button';
		});

		this.button.player.className = 'game-menu-button-selected';

		this.player.open();
		this.current = this.player;
		this.info.innerText = text.gameMenu.hints[this.current.key][this.main.lang];
	}

	close() {
		playSound('close', 'ui')
		if (this.current != null) {
			this.current.close();
			this.current = null;
		}
		this.isOpen = false;
		this.main.gameMenuScene.style.display = 'none';
	}

	buttonHandler(btn) {
		if (!['save', 'close', 'exit'].includes(btn)) {
			Object.keys(this.button).forEach(key => {
				this.button[key].className = 'game-menu-button';
			});
			this.button[btn].className = 'game-menu-button-selected';
		}

		switch(btn) {
			case 'player':
				playSound('buttonB', 'ui');
				this.player.open();	
				break;
			case 'team':
				playSound('buttonB', 'ui');
				this.team.open();
				break;
			case 'bag':
				playSound('buttonB', 'ui');
				this.bag.open();
				break;
			case 'pokedex':
				playSound('buttonB', 'ui');
				this.pokedex.open();
				break;
			case 'map':
				playSound('buttonB', 'ui');
				this.map.open();
				break;
			case 'settings':
				playSound('buttonB', 'ui');
				this.settings.open();
				break;
			case 'achievements':
				playSound('buttonB', 'ui');
				this.achievements.open();
				break;
			case 'save':
				playSound('start', 'ui')
				saveData(
					this.main.player, this.main.team, this.main.box, this.main.inventory, 
					this.main.pokedex, this.main.rival, this.main.npcs, this.main.eventStatus,
					this.main.routeData, this.main.cityData
				); 
				break;
			case 'close':
				this.close();
				break;
			case 'exit':
				this.confirmExit.open()
				break;
		}
	}
}

export class MenuExit extends Popup {
	constructor(component) {
		super(400, 120);
        this.component = component;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;
	}

	render() {
		const lang = this.component.main.lang;

		this.promp = new Element(this.popup, { className: 'popup-route-capture-prompt', text: text.gameMenu.exitConfirm[lang] }).element;

		this.buttonCancel = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-cancel stroke', text: text.misc.cancel[lang] }).element;
        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;

        this.buttonCancel.addEventListener('click', () => this.close());
        this.buttonAccept.addEventListener('click', () => this.exit());

        this.buttonCancel.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonAccept.addEventListener('mouseover', () => playSound('hover0', 'ui'));
	}

	exit(pokemon) {
		window.location.reload();
	}

	close(mute = false) {
		if (!mute) playSound('close', 'ui')
		super.close(); 
	}
}