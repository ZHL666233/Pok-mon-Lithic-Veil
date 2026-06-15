import { MenuPop } from './MenuPop.js';
import { Element } from '../../utils/Element.js';
import { playSound } from '../../file/audio.js';
import { text } from '../../file/text.js';
import { itemTm } from '../data/item/itemTmData.js';
import { pokemonByNumber } from '../data/pokemon/pokemonData.js';

const STATS = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
const STATS_MAX = ['255', '134', '230', '154', '230', '150'];

export class MenuPokedexPokemon extends MenuPop {
	constructor(component) {
		super(component, 450, 350);
		this.pokemon = null;
		this.moveData;

		this.container.style.backgroundColor = `#e9e9e8`;
		this.container.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';

		this.render();
	}

	render() {
		const lang = this.component.menu.main.lang;

		this.moveData = Object.values(itemTm).map(tm => tm.move.name[lang]);

		this.topContainer = new Element(this.container, { className: 'menu-pokedex-pokemon-top-container' }).element;
		this.prevArrow = new Element(this.topContainer, { className: 'menu-pokedex-pokemon-arrow stroke', text: '<' }).element;
		this.name = new Element(this.topContainer, { className: 'menu-pokedex-pokemon-name' }).element;
		this.nextArrow = new Element(this.topContainer, { className: 'menu-pokedex-pokemon-arrow stroke', text: '>' }).element;

		this.prevArrow.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
		this.nextArrow.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });

		this.prevArrow.addEventListener('click', () => { this.changePokemon(-1) });
		this.nextArrow.addEventListener('click', () => { this.changePokemon(1) });

		this.sprite = new Element(this.container, { className: 'menu-pokedex-pokemon-sprite' }).element;
		this.type = new Element(this.container, { className: 'menu-pokedex-pokemon-type' }).element;

		this.moveTitle = new Element(this.container, { className: 'menu-pokedex-pokemon-move-title stroke', text: text.stats.moves[lang]}).element;
		this.moveContainer = new Element(this.container, { className: 'menu-pokedex-pokemon-move-container' }).element;
		this.moves = [];

		this.statContainer = new Element(this.container, { className: 'menu-pokedex-pokemon-stat-container' }).element;
		this.statRow = {};

		STATS.forEach(stat => {
			this.statRow[stat] = new Element(this.statContainer, { className: 'menu-pokedex-pokemon-stat-row' }).element;
			this.statRow[stat].label = new Element(this.statRow[stat], { className: 'menu-pokedex-pokemon-stat-label', text: text.stats.short[stat][lang] }).element;
			this.statRow[stat].value = new Element(this.statRow[stat], { className: 'menu-pokedex-pokemon-stat-value'}).element;
		})
	}

	update() {
		const lang = this.component.menu.main.lang;

		this.sprite.style.backgroundImage = `url("${this.pokemon.image}")`

		STATS.forEach((stat, i) => {
			this.statRow[stat].value.style.width = `${Math.min((this.pokemon.base[stat] / 150) * 75, 75)}%`;
		});

		this.type.innerHTML = ``;
		this.pokemon.type.forEach(type => {
			this.type.innerHTML += `<img src="${type.icon}"> `;
		})

		this.moves = [];
		this.moveContainer.innerHTML = "";

		const status = this.component.menu.main.pokedex.getSeenAndCatchedByNumber(this.pokemon.n);
		switch(status) {
			case 'unseen':
				this.name.innerText = `#${this.pokemon.n.toString().padStart(3, '0')} - ???`;
				this.sprite.style.filter = `brightness(0)`;
				this.pokemon.tm.forEach((tm, i) => {
					this.moves[i] = new Element(this.moveContainer, { className: 'menu-pokedex-pokemon-move', text: '???' }).element;
				})

				break;
			case 'seen':
				this.name.innerText = `#${this.pokemon.n.toString().padStart(3, '0')} - ${this.pokemon.name[lang]}`;
				this.sprite.style.filter = `grayscale(100%)`;
				this.pokemon.tm.forEach((tm, i) => {
					this.moves[i] = new Element(this.moveContainer, { className: 'menu-pokedex-pokemon-move', text: this.moveData[tm-1] }).element;
				})
				break;
			case 'shiny':
			case 'catched':
				this.name.innerText = `#${this.pokemon.n.toString().padStart(3, '0')} - ${this.pokemon.name[lang]}`;
				this.sprite.style.filter = `revert-layer`;
				this.pokemon.tm.forEach((tm, i) => {
					this.moves[i] = new Element(this.moveContainer, { className: 'menu-pokedex-pokemon-move', text: this.moveData[tm-1] }).element;
				})
				break;
		}	
	}

	changePokemon(dir) {
		playSound('option', 'ui');
		let nextPokemonNumber = this.pokemon.n + dir;
		if (nextPokemonNumber == 0) nextPokemonNumber = 251;
		else if (nextPokemonNumber == 252) nextPokemonNumber = 1;
		this.pokemon = pokemonByNumber[nextPokemonNumber];

		this.update();
	}

	open(pokemon) {
		playSound('open', 'ui');
		super.open(); 
		this.pokemon = pokemon;
	    this.update();
	}

	close() {
		playSound('close', 'ui')
		super.close(); 
	}
}