import { MenuPop } from './MenuPop.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

const STATS = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

export class MenuTeamPokemon extends MenuPop {
	constructor(component) {
		super(component, 650, 450);
		this.pokemon = null;
		this.pokemonTeamPosition = null;
		this.moveSelected = 0;

		this.container.style.backgroundColor = `#e9e9e8`;
		this.container.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
		this.render();
	}

	render() {
		const lang = this.component.menu.main.lang;

		this.statContainer = new Element(this.container, { className: 'menu-team-pokemon-stat-container' }).element;
		this.stats = [];
		STATS.forEach(stat => {
			this.stats[stat] = new Element(this.statContainer, { className: 'menu-team-pokemon-stat' }).element;
		})

		this.infoContainer = new Element(this.container, { className: 'menu-team-pokemon-info-container' }).element;
		this.name = new Element(this.infoContainer, { className: 'menu-team-pokemon-name' }).element;
		this.level = new Element(this.infoContainer, { className: 'menu-team-pokemon-level' }).element;
		this.pokemonHealthBarContainer = new Element(this.infoContainer, { className: 'menu-team-pokemon-health-bar-container' }).element;
		this.pokemonHealthBarProgress = new Element(this.pokemonHealthBarContainer, { className: 'menu-team-pokemon-health-bar-progress' }).element;
		this.pokemonExpBarContainer = new Element(this.infoContainer, { className: 'menu-team-pokemon-exp-bar-container' }).element;
		this.pokemonExpBarProgress = new Element(this.pokemonExpBarContainer, { className: 'menu-team-pokemon-exp-bar-progress' }).element;
		this.sprite = new Element(this.infoContainer, { className: 'menu-team-pokemon-sprite' }).element;
		this.type = new Element(this.infoContainer, { className: 'menu-team-pokemon-type' }).element;
		this.levelButton = new Element(this.infoContainer, { className: 'menu-team-pokemon-level-button' }).element;
		this.levelButton.addEventListener('click', () => { this.levelUp() });
		this.levelButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui'); });

		this.movesetContainer = new Element(this.container, { className: 'menu-team-pokemon-moveset-container' }).element;
		this.moves = [];
		for (let i = 0; i < 2; i++) {
			this.moves[i] = new Element(this.movesetContainer, { className: 'menu-team-pokemon-move-disabled' }).element;
			this.moves[i].addEventListener('click', () => {
			 	playSound('option', 'ui');
				this.moveSelected = i;
				this.displayMove(this.moveSelected);
			})
			this.moves[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui'); });
		}

		this.moveInfoType = new Element(this.container, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-type stroke' }).element;
		this.moveInfoCategory = new Element(this.container, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-category stroke' }).element;
		this.moveInfoPower = new Element(this.container, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-power stroke' }).element;
		this.moveInfoDescriptionContainer = new Element(this.container, { className: 'menu-team-pokemon-move-info-description-container' }).element;
		this.moveInfoDescriptionText = new Element(this.moveInfoDescriptionContainer, { className: 'menu-team-pokemon-move-info-description-text stroke' }).element;

		this.prevPokemon = new Element(this.infoContainer, { className: 'menu-team-pokemon-prev-pokemon stroke', text: '<' }).element;
		this.nextPokemon = new Element(this.infoContainer, { className: 'menu-team-pokemon-next-pokemon stroke', text: '>' }).element;
		this.prevPokemon.addEventListener('click', () => { this.changePokemon(-1) });
		this.nextPokemon.addEventListener('click', () => { this.changePokemon(1) });
		this.prevPokemon.addEventListener('mouseenter', () => { playSound('hover1', 'ui'); });
		this.nextPokemon.addEventListener('mouseenter', () => { playSound('hover1', 'ui'); });
	}

	update() {
		const lang = this.component.menu.main.lang;

		this.name.innerText = this.pokemon.name;
		if (this.pokemon.shiny) {
	        this.name.innerHTML += '<span class="stroke" style="color: var(--yellow); font-size: 16px; padding-left: 4px;" >★</span>'
	    }
		this.sprite.style.backgroundImage = `url("${this.pokemon.image}")`;

		this.type.innerHTML = ``;
		this.pokemon.type.forEach(type => {
			this.type.innerHTML += `<img src="${type.icon}"> `;
		})
		
		this.level.innerText = `${text.stats.level[lang]} ${this.pokemon.lvl}`;

		STATS.forEach(stat => {
			this.stats[stat].innerHTML = `
				<span class="menu-team-pokemon-stat-label">${text.stats[stat][lang]}</span>
		   		<span class="menu-team-pokemon-stat-value">${this.pokemon.stat[stat]}</span>
		   		<span class="menu-team-pokemon-stat-value">(${this.pokemon.iv[stat]})</span>
			`;
			if (this.pokemon.nature[stat] === 1.1) this.stats[stat].style.color = "#e63f1e";
			else if (this.pokemon.nature[stat] === 0.9) this.stats[stat].style.color = "var(--blue)";
			else this.stats[stat].style.color = "revert-layer";
		})

		const hpPercent = (this.pokemon.hp[0] / this.pokemon.hp[1]) * 100;
        this.pokemonHealthBarProgress.style.width = `${Math.max(0, hpPercent)}%`;
        this.pokemonHealthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

 		const expPercent = (this.pokemon.exp[0] / this.pokemon.exp[1]) * 100;
        this.pokemonExpBarProgress.style.width = `${Math.max(0, expPercent)}%`;
        this.pokemonExpBarProgress.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';

        if (this.pokemon.lvl < this.component.menu.main.player.levelCap) {
        	this.levelButton.className = expPercent === 100 ? 'menu-team-pokemon-level-button' : 'menu-team-pokemon-level-button-disabled';    
			this.levelButton.innerText = `${text.stats.levelButton[lang]} (${Math.floor(Math.pow(this.pokemon.lvl * 1.8, 1.7))}$)`;
        } else {
        	this.levelButton.className = 'menu-team-pokemon-level-button-disabled';    
			this.levelButton.innerText = `${text.stats.levelButton[lang]} (Max)`;
        }

        if (this.component.menu.main.player.gold < Math.floor(Math.pow(this.pokemon.lvl * 1.8, 1.7))) this.levelButton.className = 'menu-team-pokemon-level-button-disabled';

		//Moves
		for (let i = 0; i < 2; i++) {
			this.moves[i].className = 'menu-team-pokemon-move-disabled';
			this.moves[i].style.backgroundColor = '#9098a0';
			this.moves[i].innerText = text.misc.unlearned[lang].toUpperCase();
		}
		this.pokemon.moves.forEach((move, i) => {
			this.moves[i].className = 'menu-team-pokemon-move stroke';
			this.moves[i].innerText = move.name[lang].toUpperCase();
			this.moves[i].style.backgroundColor = move.type.color;
		})

		this.displayMove(this.moveSelected);

		//Change Pokemon
		if (this.component.menu.main.team.pokemon.length == 1) {
			this.prevPokemon.style.display = 'none';
			this.nextPokemon.style.display = 'none';
		} else {
			this.prevPokemon.style.display = 'block';
			this.nextPokemon.style.display = 'block';
		}
	}

	levelUp() {
		playSound('levelUp', 'ui');
		let cost = Math.floor(Math.pow(this.pokemon.lvl * 1.8, 1.7));

		if (this.pokemon.lvl < 100 && this.component.menu.main.player.gold >= cost) {
			this.component.menu.main.player.changeGold(-cost);
			this.pokemon.lvlUp();
			this.component.update();
			this.update();

			if (!this.component.menu.main.player.achievement[25].status && this.pokemon.lvl >= 25)  {
				this.component.menu.main.player.achievement[25].status = true;
				this.component.menu.main.player.unlockAchievement(25);
			} 
			if (!this.component.menu.main.player.achievement[26].status && this.pokemon.lvl >= 50)  {
				this.component.menu.main.player.achievement[26].status = true;
				this.component.menu.main.player.unlockAchievement(26);
			} 
			if (!this.component.menu.main.player.achievement[27].status && this.pokemon.lvl >= 75)  {
				this.component.menu.main.player.achievement[27].status = true;
				this.component.menu.main.player.unlockAchievement(27);
			} 
			if (!this.component.menu.main.player.achievement[28].status && this.pokemon.lvl == 100)  {
				this.component.menu.main.player.achievement[28].status = true;
				this.component.menu.main.player.unlockAchievement(28);
			}
		}
	}

	displayMove(pos) {
		const lang = this.component.menu.main.lang;
		this.moves.forEach(move => {
			move.style.pointerEvents = 'revert-layer';
			move.style.filter = 'revert-layer';
		});

		this.moves[pos].style.pointerEvents = 'none';
		this.moves[pos].style.filter = 'brightness(1)';

		this.moveInfoType.innerText = `${text.misc.type[lang]}: ${this.pokemon.moves[pos].type.name[lang].toUpperCase()}`
		this.moveInfoCategory.innerText = `${text.misc.category[lang]}: ${text.misc[this.pokemon.moves[pos].class][lang].toUpperCase()}`
		this.moveInfoPower.innerText = `${text.misc.power[lang]}: ${this.pokemon.moves[pos].power}`
		this.moveInfoDescriptionText.innerHTML = `${this.pokemon.moves[pos].description[lang] || this.pokemon.moves[pos].description[0]}`
	}

	changePokemon(dir) {
		playSound('option', 'ui');
		this.pokemonTeamPosition += dir;
		if (this.pokemonTeamPosition == -1) this.pokemonTeamPosition = this.component.menu.main.team.pokemon.length - 1;
		if (this.pokemonTeamPosition == this.component.menu.main.team.pokemon.length) this.pokemonTeamPosition = 0;
		this.pokemon = this.component.menu.main.team.pokemon[this.pokemonTeamPosition];
		this.moveSelected = 0;
	    this.update();
	}

	open(pokemon, pos) {
		playSound('open', 'ui');
		super.open(); 
		this.pokemon = pokemon;
		this.pokemonTeamPosition = pos;
		this.moveSelected = 0;
	    this.update();
	}

	close() {
		playSound('close', 'ui');
		super.close(); 
	}
}