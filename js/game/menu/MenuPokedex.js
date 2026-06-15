import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { pokemonByNumber } from '../data/pokemon/pokemonData.js';
import { MenuPokedexPokemon } from './MenuPokedexPokemon.js';

export class MenuPokedex extends MenuComponent {
	constructor(menu) {
		super(menu);	
		this.key = 'pokedex';
		this.render();
		this.pokemonInfo = new MenuPokedexPokemon(this);
	}

	render() {
		this.pokemonContainer = new Element(this.container, { className: 'menu-pokedex-pokemon-container' }).element;
		this.pokemon = [];

		for (let i = 1; i <= 387; i++) {
			this.pokemon[i] = new Element(this.pokemonContainer, { className: 'menu-pokedex-pokemon-unseen' }).element;
		
			this.pokemon[i].style.backgroundImage = `url("${pokemonByNumber[i].sprite.base}")`;
			this.pokemon[i].addEventListener('click', () => {
				this.pokemonInfo.open(pokemonByNumber[i]);
			})	
		}
		this.completed = new Element(this.container, { className: 'menu-pokedex-completed' }).element;
	}

	update() {
		const dexPokemon = this.menu.main.pokedex.getSeenCatchedAndShiny();

		dexPokemon.seen.forEach(pokemonNum => {
			this.pokemon[pokemonNum].className = 'menu-pokedex-pokemon-seen';
		})

		dexPokemon.catched.forEach(pokemonNum => {
			this.pokemon[pokemonNum].className = 'menu-pokedex-pokemon-catched';
		})

		dexPokemon.shiny.forEach(pokemonNum => {
			this.pokemon[pokemonNum].innerHTML = '<span class="stroke" style="color: var(--yellow); font-size: 8px; padding-left: 15px; line-height: 40px;">★</span>';
		})

		this.completed.innerText = `${dexPokemon.catched.length.toString().padStart(3, '0')}/${Object.keys(this.menu.main.pokedex.pokemon).length}`;

		this.pokemonContainer.style.overflowY = (this.menu.main.player.apachan) ? 'auto' : 'hidden';
	}

	open() {
		super.open(); 
	    this.update();
	}
}

