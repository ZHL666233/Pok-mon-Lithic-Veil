import { Main } from '../game/Main.js';
import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { Selector } from '../utils/Selector.js';
import { Input } from '../utils/Input.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';
import { city } from '../game/data/location/cityData.js';
import { pokemon } from '../game/data/pokemon/pokemonData.js';
import { Pokemon } from '../game/manager/Pokemon.js';

const SECTION = ['characterCreation'];

const OPTION = {
 	trainer: [
		['Red', 'Red', '小赤'],
		['Leaf', 'Leaf', '小叶'],
		['Blue', 'Blue', '小蓝'],
		['Ethan', 'Ethan', '小响'],
		['Lyra', 'Lyra', '琴音'],
		['Silver', 'Silver', '小银']
	],
 	starter: [
		['Bulbasaur', 'Bulbasaur', '妙蛙种子'],
		['Charmander', 'Charmander', '小火龙'],
		['Squirtle', 'Squirtle', '杰尼龟'],
		['Chikorita', 'Chikorita', '菊草叶'],
		['Cyndaquil', 'Cyndaquil', '火球鼠'],
		['Totodile', 'Totodile', '小锯鳄']
	],
 	rivalStarter: ['venusaur', 'charizard', 'blastoise', 'meganium', 'typhlosion', 'feraligatr']
}

export class WindowNewGame extends Window {
	constructor(component) {
		const title = text.menu.button['newGame'][JSON.parse(window.localStorage.getItem("data")).config.language.text].toUpperCase();

	    super(title, 600, 450); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

		this.section = {};
		this.selector = {};

		SECTION.forEach((label) => {
			this.section[label] = new Element(this.container, { className: 'window-section' }).element;
			this.section[label].header = new Element(this.section[label], { className: 'window-section-header super-stroke' }).element;
			this.section[label].selector = new Element(this.section[label], { className: 'window-section-selector super-stroke' }).element;
		})
		
		this.selector['name'] = new Input(
            this.section['characterCreation'].selector,
            text.menu.newGame.name[lang],
            { placeholder: '[...]', maxlength: 10 }
        );

		this.selector['trainer'] = new Selector(
            this.section['characterCreation'].selector,
            text.menu.newGame.sprite[lang],
            OPTION.trainer,
            { lang: lang },
            (indx) => {
            	this.spriteTrainer.style.backgroundImage = `url("./assets/images/trainer/${OPTION.trainer[indx][0].toLowerCase()}.png")`;
            }
        );

		this.selector['starter'] = new Selector(
            this.section['characterCreation'].selector,
            text.menu.newGame.starter[lang],
            OPTION.starter,
            { lang: lang },
            (indx) => {
            	this.spritePokemon.style.backgroundImage = `url("./assets/images/pokemon/image/${OPTION.starter[indx][0].toLowerCase()}.png")`;    
            }
        );

		this.spriteContainer = new Element(
			this.section['characterCreation'], 
			{ className: 'new-game-sprite-container' 
		}).element;

		this.spriteTrainer = new Element(
			this.spriteContainer, { className: 'new-game-sprite new-game-sprite-trainer',
			 image: `./assets/images/trainer/${OPTION.trainer[0][0].toLowerCase()}.png` 
		}).element;

		this.spritePokemon = new Element(
			this.spriteContainer, { className: 'new-game-sprite new-game-sprite-pokemon', 
			image: `./assets/images/pokemon/image/${OPTION.starter[0][0].toLowerCase()}.png` 
		}).element;

		this.section['characterCreation'].button = 
			new Element(
				this.section['characterCreation'], 
				{ className: 'window-section-button', 
				text: text.menu.newGame.button[lang].toUpperCase() 
			}).element;

		this.section['characterCreation'].button.addEventListener('click', () => this.createCharacter());
  	}

  	update = () => {
  		const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

  		this.title = text.menu.button.newGame[lang].toUpperCase();
  		this.name.innerText = this.title;

  		SECTION.forEach((label) => {
			this.section[label].header.innerText = text.menu.newGame.section[label][lang];
		})

		this.section['characterCreation'].button.innerText = text.menu.newGame.button[lang].toUpperCase();
  	}

  	open() {
	    super.open(true); 
	    this.update();
  	}

  	createCharacter() {
  		if (this.selector['name'].value.value.trim() === "") {
			return;
		}

		const today = new Date();
		const day = String(today.getDate()).padStart(2, '0');
		const month = String(today.getMonth() + 1).padStart(2, '0'); 
		const year = today.getFullYear();
		const formattedDate = `${day}-${month}-${year}`;
  		const data = JSON.parse(window.localStorage.getItem("data"));

	    data.save = {
	        player: {
	       		name: this.selector['name'].value.value,
	       		sprite: `./assets/images/trainer/${OPTION.trainer[this.selector['trainer'].currentIndex][0].toLowerCase()}.png`,
	       		savedLocation: city['newBarkTown-1'],
	       		location: city['newBarkTown-1'],
	       		gold: 500,
	       		region: 0,
	       		start: formattedDate,
	        },
	        team: [new Pokemon(pokemon[OPTION.starter[this.selector['starter'].currentIndex][0].toLowerCase()], 5)],
	        box: [],
	        inventory: {},
	        pokedex: this.createPokedex(),
	        rival: this.createRivals(),
	        npcs: {},
	    }

	    window.localStorage.setItem("data", JSON.stringify(data));

  		this.close();
  		this.component.destroy();
  		playSound('start', 'ui');
		new Main(JSON.parse(window.localStorage.getItem("data")));
  	}

  	createPokedex() {
		const pokedexData = {};
		for (let i = 1; i <= 251; i++) {
            pokedexData[i] = "unseen";
        }
        pokedexData[pokemon[OPTION.starter[this.selector['starter'].currentIndex][0].toLowerCase()].n] = "catched";
        return pokedexData;
  	}

  	createRivals() {
		const rivals = [];

		let playerIndx = this.selector['trainer'].currentIndex;
		let starterIndx = this.selector['starter'].currentIndex;

		const rivalIndxMap = [2, 2, 0, 5, 5, 3];
		const rivalStarterIndxMap = [1, 2, 0, 4, 5, 3];

		let rivalIndx = rivalIndxMap[playerIndx];
		let rivalStarterIndx = rivalStarterIndxMap[starterIndx];

		rivals[0] = {
			name: OPTION.trainer[rivalIndx][0],
			sprite: OPTION.trainer[rivalIndx][0],
			starter: OPTION.rivalStarter[rivalStarterIndx],
		};

		let filteredTrainer = OPTION.trainer.filter((_, index) => index !== playerIndx && index !== rivalIndx);
		let filteredStarter = OPTION.rivalStarter.filter((_, index) => index !== starterIndx && index !== rivalStarterIndx);

		for (let i = 0; i < 4; i++) {
			rivals[i + 1] = {
				name: filteredTrainer[i][0],
				sprite: filteredTrainer[i][0],
				starter: filteredStarter[i],
			};
		}
		return rivals;
	}

	close() {
  		playSound('close', 'ui');
	    super.close(); 
  	}
}