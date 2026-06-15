import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { MenuTeamPokemon } from './MenuTeamPokemon.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class MenuTeam extends MenuComponent {
	constructor(menu) {
		super(menu);
		this.key = 'team';
		this.render();
		this.pokemonInfo = new MenuTeamPokemon(this);
	}

	render() {
		this.pokemonContainer = [];
		this.pokemonSprite = [];
		this.pokemonName = [];
		this.pokemonLevel = [];
		this.pokemonHealth = [];
		this.pokemonHealthBarContainer = [];
		this.pokemonHealthBarProgress = [];

		for (let i = 0; i < 6; i++) {
			this.pokemonContainer[i] = new Element(this.container, { className: 'menu-team-container' }).element;
			this.pokemonSprite[i] = new Element(this.pokemonContainer[i], { className: 'menu-team-sprite' }).element;
			this.pokemonName[i] = new Element(this.pokemonContainer[i], { className: 'menu-team-name' }).element;
			this.pokemonLevel[i] = new Element(this.pokemonContainer[i], { className: 'menu-team-level' }).element;
			this.pokemonHealth[i] = new Element(this.pokemonContainer[i], { className: 'menu-team-health' }).element;
			this.pokemonHealthBarContainer[i] = new Element(this.pokemonContainer[i], { className: 'menu-team-health-bar-container' }).element;
			this.pokemonHealthBarProgress[i] = new Element(this.pokemonHealthBarContainer[i], { className: 'menu-team-health-bar-progress' }).element;

			this.pokemonContainer[i].addEventListener('click', () => {
				this.pokemonInfo.open(this.menu.main.team.pokemon[i], i);
			})
			this.pokemonContainer[i].addEventListener('mouseenter', () => playSound('hover4', 'ui'));
		}
	}

	update() {
		const lang = this.menu.main.lang;

		for (let i = 0; i < 6; i++) this.pokemonContainer[i].style.display = 'none';
		this.menu.main.team.pokemon.forEach((pokemon, i) => {
			this.pokemonContainer[i].style.display = 'block';
			this.pokemonContainer[i].style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
			this.pokemonSprite[i].style.backgroundImage = `url("${pokemon.portrait}")`;
			this.pokemonName[i].innerText = pokemon.name;
			this.pokemonLevel[i].innerHTML = `${text.stats.level[lang]} ${pokemon.lvl}`;
			this.pokemonHealth[i].innerText = `${pokemon.hp[0]}/${pokemon.hp[1]}`;

			const hpPercent = (pokemon.hp[0] / pokemon.hp[1]) * 100;
	        this.pokemonHealthBarProgress[i].style.width = `${Math.max(0, hpPercent)}%`;
	        this.pokemonHealthBarProgress[i].style.backgroundColor =
	            hpPercent > 50 ? '#4CAF50' :
	            hpPercent > 20 ? '#FFC107' : '#F44336';

	        if (hpPercent === 0) this.pokemonContainer[i].style.filter = 'grayscale(100%)';
	        else this.pokemonContainer[i].style.filter = 'revert-layer';

	        if (pokemon.exp[0] === pokemon.exp[1]) this.pokemonLevel[i].innerHTML += `<span style="color: var(--red);">↑</span>`;
	        if (pokemon.shiny) {
	        	this.pokemonName[i].innerHTML += '<span class="stroke" style="color: var(--yellow); font-size: 16px; padding-left: 4px;" >★</span>'
	        }
		})
	}

	open() {
		super.open(); 
	    this.update();
	}
}