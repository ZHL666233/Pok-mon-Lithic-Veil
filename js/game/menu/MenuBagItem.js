import { MenuPop } from './MenuPop.js';
import { Popup } from '../../utils/Popup.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { city } from '../data/location/cityData.js';
import { nature } from '../data/pokemon/natureData.js';
import { itemTm } from '../data/item/itemTmData.js';
import { Pokemon } from '../manager/Pokemon.js';
import { generateHiddenPower } from '../data/pokemon/moveData.js';
import { playSound } from '../../file/audio.js';

const DISC_MOVE_POOL = {
	normal: [1, 2, 5, 10, 11, 16, 18, 41, 43, 51, 68, 83, 84, 88, 109, 112, 117, 120, 162 ],
	water: [8, 17, 21, 29, 47, 74, 77, 129, 159 ],
	fire: [15, 73, 75, 86, 110, 125, 155, 175 ],
	psychic: [3, 20, 64, 65, 90, 158 ],
	flying: [6, 14, 24, 57, 59, 99, 106, 177],
	grass: [7, 25, 27, 72, 78, 80, 98, 115, 136, 157, 176, 180 ],
	ground: [9, 36, 60, 69, 93, 94, 108, 114, 124, 126, 164 ],
	bug: [12, 26, 33, 49, 50, 92, 95, 130 ],
	dark: [13, 70, 81, 103, 138, 139, 141, 146, 149],
	rock: [19, 23, 40, 87, 128, 179 ],
	fighting: [22, 39, 46, 54, 133, 161, 173 ],
	ghost: [28, 63, 101, 143 ],
	steel: [30, 34, 35, 38, 58, 150, 168 ],
	electric: [31, 61, 79, 123, 135, 145, 178 ],
	poison: [32, 53, 91, 97, 100, 142, 144, 169 ],
	ice: [44, 56, 62, 66, 118, 119],
	dragon: [113, 132, 134, 172, ]
}

export class MenuBagItem extends MenuPop {
	constructor(component) {
		super(component, 600, 350);
		this.item = null;

        this.container.style.backgroundColor = `#e9e9e8`;
        
		this.render();
		this.eggPokemonData = new EggPokemon(this);
	}

	render() {
		const lang = this.component.menu.main.lang;

		this.name = new Element(this.container, { className: 'menu-bag-info-item-name' }).element;
		this.description = new Element(this.container, { className: 'menu-bag-info-item-description' }).element;
		this.useContainer = new Element(this.container, { className: 'menu-bag-info-item-use-container' }).element;	
	}

	update() {
		const lang = this.component.menu.main.lang;
		this.name.innerText = this.item.name[lang];
		this.description.innerText = (this.item.description[lang] || this.item.description[0]);

		if (this.item.type == 'key') this.useContainer.innerText = text.misc.keyItem[lang].toUpperCase();
		else if (this.item.type == 'tm') this.drawTM();
		else if (this.item.type == 'tm') this.drawTM();
		else if (this.item.isEvolutive) this.useContainer.innerText = text.misc.evolutionItem[lang].toUpperCase();
		else if (this.item.isEgg) this.drawEgg();
		else if (this.item.target == 'auto') this.drawAutoConsumable();
		else if (this.item.type == 'consumable' && this.item.target == 'pokemon') this.drawSelectConsumable();

		if (this.item.key == 'redButton') {
			this.useContainer.innerText = '';
			this.hatchButton = new Element(this.useContainer, { className: 'menu-bag-info-item-use-red-button stroke', text: text.route.push[lang] }).element;
			this.hatchButton.addEventListener('click', () => { this.redButtonPress() } )
		}
	}

	drawEgg() {
		const lang = this.component.menu.main.lang;
		
		if (this.item.use.hatch[0] < this.item.use.hatch[1]) {
			const per = (this.item.use.hatch[0] / this.item.use.hatch[1]) * 100;
			if (per < 25) this.useContainer.innerText = text.egg[0][lang];
			else if (per < 10) this.useContainer.innerText = text.egg[1][lang];
			else if (per < 10) this.useContainer.innerText = text.egg[2][lang];
			else  this.useContainer.innerText = text.egg[3][lang];
		} else {
			this.hatchButton = new Element(this.useContainer, { className: 'menu-bag-info-item-use-button stroke' }).element;
			this.hatchButton.innerText = text.egg.hatch[lang].toUpperCase();
			this.hatchButton.addEventListener('click', () => { this.useItem() })
		}
	}

	drawTM() {
		const lang = this.component.menu.main.lang;
		this.drawTeam(); 

		this.moveInfoContainer = new Element(this.useContainer, {}).element;
		this.moveInfoContainer.style.position = 'absolute';
		this.moveInfoContainer.style.top = '0px';
		this.moveInfoContainer.style.bottom = '85px';
		this.moveInfoContainer.style.width = '100%';
		this.moveInfoContainer.style.textAlign = 'left';

		this.moveInfoType = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-type stroke' }).element;
		this.moveInfoCategory = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-category stroke' }).element;
		this.moveInfoPower = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-power stroke' }).element;
		this.moveInfoDescriptionContainer = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info-description-container' }).element;
		this.moveInfoDescriptionText = new Element(this.moveInfoDescriptionContainer, { className: 'menu-team-pokemon-move-info-description-text stroke' }).element;

		this.moveInfoType.innerText = `${text.misc.type[lang]}: ${this.item.move.type.name[lang].toUpperCase()}`;
		this.moveInfoCategory.innerText = `${text.misc.category[lang]}: ${text.misc[this.item.move.class][lang].toUpperCase()}`;
		this.moveInfoPower.innerText = `${text.misc.power[lang]}: ${this.item.move.power}`;
		this.moveInfoDescriptionText.innerHTML = `${(this.item.move.description[lang] || this.item.move.description[0])}`;
	}

	drawAutoConsumable() {
		const lang = this.component.menu.main.lang;
		this.useButton = new Element(this.useContainer, { className: 'menu-bag-info-item-use-button stroke' }).element;
		this.useButton.innerText = text.misc.use[lang].toUpperCase();
		this.useButton.addEventListener('click', () => { this.useItem() })
	}

	drawSelectConsumable() {
		const lang = this.component.menu.main.lang;
		this.consumeText = new Element(this.useContainer, { className: 'menu-bag-info-item-consume-text' }).element;
		let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount})`];
		this.consumeText.innerText = newText[lang];
		this.drawTeam(); 
	}

	redButtonPress() {
		playSound('fart', 'ui');
		if (this.component.menu.main.player.location.name[0] == 'Hertz Vault') {
			this.close();
			this.component.menu.close();
			this.component.menu.main.npcs['magnemite'].state = 2;
	       	this.component.menu.main.dialogue.startDialogue(this.component.menu.main.npcs['magnemite']);
		}	
	}

	drawTeam() {
		const lang = this.component.menu.main.lang;
		this.teamPokemonContainer = new Element(this.useContainer, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];

        this.component.menu.main.team.pokemon.forEach((pokemon, pos) => { 
            this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
	        this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
	        this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `Lv. ${pokemon.lvl}` }).element;

	        const sprite = document.createElement('img');
	        sprite.src = pokemon.sprite.base;
	        sprite.className = 'route-team-pokemon-sprite';
	        this.teamPokemon[pos].appendChild(sprite);

	        // Mostrar vida
	        if (this.item.use.effect == 'heal' || this.item.use.effect == 'revive') {
	        	this.teamPokemon[pos].healthBarContainer = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-health-bar-container' }).element;
	        	this.teamPokemon[pos].healthBarProgress = new Element(this.teamPokemon[pos].healthBarContainer, { className: 'route-team-pokemon-health-bar-progress' }).element;

		        const hpPercent = (pokemon.hp[0] / pokemon.hp[1]) * 100;
		        this.teamPokemon[pos].healthBarProgress.style.width = `${Math.max(0, hpPercent)}%`;
		        this.teamPokemon[pos].healthBarProgress.style.backgroundColor =
		            hpPercent > 50 ? '#4CAF50' :
		            hpPercent > 20 ? '#FFC107' : '#F44336';

		        this.teamPokemon[pos].expBarContainer = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-exp-bar-container' }).element;
		        this.teamPokemon[pos].expBarProgress = new Element(this.teamPokemon[pos].expBarContainer, { className: 'route-team-pokemon-exp-bar-progress' }).element;

		        const expPercent = (pokemon.exp[0] / pokemon.exp[1]) * 100;
		        this.teamPokemon[pos].expBarProgress.style.width = `${Math.max(0, expPercent)}%`;
		        this.teamPokemon[pos].expBarProgress.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';   
	        }

	        this.teamPokemon[pos].addEventListener('click', () => { 
		        this.useItem(pokemon, pos);
		    });

	        // Mostrar IVs/Apto/No apto
	        if (this.item.type == 'tm' || this.item.use.effect == 'suplement' || this.item.use.effect == 'mint' ||  this.item.use.effect == 'level50' ||
	        	this.item.use.effect == 'level75' || this.item.use.effect == 'disc' || this.item.use.effect == 'levelUp' || this.item.use.effect == 'shinyFlask') {
	        	this.teamPokemon[pos].subText = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-sub-text stroke' }).element;
	        	this.teamPokemon[pos].subText.style.color = `var(--white)`;
	        }

	        // Compatibilidad
	        if (this.item.type == 'tm') {
	        	if (!pokemon.specie.tm.includes(this.item.id)) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();
	        	} else {
	        		if (this.item.move.name[0] == pokemon.moves[0].name[0] || this.item.move.name[0] == pokemon.moves[1]?.name[0]) {
	        			this.teamPokemon[pos].style.pointerEvents = 'none';
	        			this.teamPokemon[pos].subText.style.color = `#FFC107`;
	        			this.teamPokemon[pos].subText.innerText = text.misc.learned[lang].toUpperCase();
	        		} else if (pokemon.moves.length == 2) {
	        			this.teamPokemon[pos].style.pointerEvents = 'none';
	        			this.teamPokemon[pos].subText.style.color = `#FFC107`;
	        			this.teamPokemon[pos].subText.innerText = text.misc.noSpace[lang].toUpperCase();
	        		}  else {
	        			this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        			this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        		}       		
	        	}
	        }
	        else if (this.item.use.effect == 'heal') {
	        	if (pokemon.hp[0] == 0) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].style.filter = 'grayscale(100%)';
	        	} if (pokemon.hp[0] == pokemon.hp[1]) this.teamPokemon[pos].style.pointerEvents = 'none';
	        }
	        else if (this.item.use.effect == 'revive') {
	        	if (pokemon.hp[0] == 0) this.teamPokemon[pos].style.filter = 'grayscale(100%)';
	        	if (pokemon.hp[0] > 0) this.teamPokemon[pos].style.pointerEvents = 'none';
	        } 
	        else if (this.item.use.effect == 'suplement') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	if (pokemon.iv[this.item.use.iv] == 31) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.route.max[lang];
	        	} else this.teamPokemon[pos].subText.innerText = pokemon.iv[this.item.use.iv]; 	
	        }
	        else if (this.item.use.effect == 'mint') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	this.teamPokemon[pos].subText.innerText = pokemon.nature.name[lang];
	        	if (pokemon.nature == nature[this.item.use.nature]) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        	} 
	        }
	        else if (this.item.use.effect == 'levelUp') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	if (pokemon.lvl >= this.component.menu.main.player.levelCap) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.route.max[lang];
	        	} else {
	        		this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        	}
	        }
	        else if (this.item.use.effect == 'disc') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	if (pokemon.moves.length == 2) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();
	        	} else {
	        		this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        	}
	        }
	        else if (this.item.use.effect == 'level50') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	if (pokemon.lvl >= 50) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.route.max[lang];
	        	} else {
	        		this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        	}
	        }
	        else if (this.item.use.effect == 'level75') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	if (pokemon.lvl >= 75) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.route.max[lang];
	        	} else {
	        		this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        	}
	        }
	        else if (this.item.use.effect == 'shinyFlask') {
	        	this.teamPokemon[pos].subText.classList.add('stroke')
	        	if (pokemon.shiny) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();
	        	} else {
	        		this.teamPokemon[pos].style.pointerEvents = 'all';
	        		this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        	}
	        } else if (this.item.use.effect == 'transmutationFlask') {
	        	this.teamPokemon[pos].type = new Element(this.teamPokemon[pos], { className: 'menu-bag-item-pokemon-type' }).element;

	        	this.teamPokemon[pos].type.innerHTML = ``;
				pokemon.type.forEach(type => {
					this.teamPokemon[pos].type.innerHTML += `<img src="${type.icon}" width="43.2px" heigth="16.2px"> `;
				})
	        }
        })   
    }	

	useItem(target = null, pos = null) {
		const lang = this.component.menu.main.lang;

		switch(this.item.use.effect) {
			case 'teleport':
				playSound('teleport', 'ui')
				this.close(true);
				this.component.close();
				this.component.menu.close();
				if (this.item.use.city) this.component.menu.main.location.loadLocation(this.component.menu.main.cityData[this.item.use.city]);
				else this.component.menu.main.location.loadLocation(this.component.menu.main.routeData[this.item.use.route]);
				this.component.menu.main.player.region = this.item.use.region;
				this.component.menu.main.inventory.removeItem(this.item);
				break;
			case 'learnTM':
				playSound('obtain', 'ui');
				if (this.item.move.prismatic != undefined) this.item.move.type = target.type[0];

				if (this.item.id === 151) {
					target.moves.push(generateHiddenPower(target.type[0]))
				} else target.moves.push(this.item.move)
				
				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();
				this.close();
				break;
			case 'heal': 
			case 'revive': 
				target.changeHp(this.item.use.restore);
				playSound('heal', 'ui');
				if (this.item.amount > 1) {
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();

				const hpPercent = (target.hp[0] / target.hp[1]) * 100;
		        this.teamPokemon[pos].healthBarProgress.style.width = `${Math.max(0, hpPercent)}%`;
		        this.teamPokemon[pos].healthBarProgress.style.backgroundColor =
	            hpPercent > 50 ? '#4CAF50' :
	            hpPercent > 20 ? '#FFC107' : '#F44336';

				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();

				if (this.item.use.effect == 'heal' && target.hp[0] == target.hp[1]) this.teamPokemon[pos].style.pointerEvents = 'none';
		        else if (this.item.use.effect == 'revive') {
		        	this.teamPokemon[pos].style.filter = 'revert-layer';
		        	if (target.hp[0] == 0) this.teamPokemon[pos].style.filter = 'grayscale(100%)';
		        	if (target.hp[0] > 0) this.teamPokemon[pos].style.pointerEvents = 'none';
		        }
				break;
			case 'suplement':
				playSound('obtain', 'ui');
				target.iv[this.item.use.iv]++;
				target.stat = Pokemon.setStat(target.specie, target.iv, target.lvl, target.nature);
				if (this.item.amount > 1) {
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();

				if (!this.component.menu.main.player.achievement[47].status)  {
		        	this.component.menu.main.player.achievement[47].progress[0]++;
		        	if (this.component.menu.main.player.achievement[47].progress[0] == this.component.menu.main.player.achievement[47].progress[1]) {
		        		this.component.menu.main.player.achievement[47].status = true;
						this.component.menu.main.player.unlockAchievement(47);
		        	}
				} 

				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();

				if (target.iv[this.item.use.iv] == 31) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.innerText = text.route.max[lang];
	        	} else this.teamPokemon[pos].subText.innerText = target.iv[this.item.use.iv]; 	
				break;
			case 'mint':
				playSound('obtain', 'ui');
				target.nature = nature[this.item.use.nature];
				target.stat = Pokemon.setStat(target.specie, target.iv, target.lvl, target.nature);
				if (this.item.amount > 1) {
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();

				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();

	        	this.teamPokemon[pos].style.pointerEvents = 'none';
	        	this.teamPokemon[pos].subText.innerText = target.nature.name[lang];
				break;
			case 'egg':
				playSound('obtain', 'ui');
				const pokemonHatchedData = this.item.use.pokemon;
				const pokemonHatched = new Pokemon(
					pokemonHatchedData.specie, 
					pokemonHatchedData.lvl,
					pokemonHatchedData.nature, 
					pokemonHatchedData.iv, 
					pokemonHatchedData.moves, 
					null,
					null,
					pokemonHatchedData.type,
					pokemonHatchedData.shiny,
					pokemonHatchedData.transumted,
				)

				if (!this.component.menu.main.player.achievement[46].status)  {
		        	this.component.menu.main.player.achievement[46].progress[0]++;
		        	if (this.component.menu.main.player.achievement[46].progress[0] == this.component.menu.main.player.achievement[46].progress[1]) {
		        		this.component.menu.main.player.achievement[46].status = true;
						this.component.menu.main.player.unlockAchievement(46);
		        	}
				} 

				this.component.menu.main.inventory.removeItem(this.item);
				this.eggPokemonData.open(pokemonHatched);
				this.component.update();
				this.close();
				break;
			case 'levelUp':
				playSound('levelUp', 'ui');
				target.lvlUp();

				if (!this.component.menu.main.player.achievement[25].status && target.lvl >= 25)  {
					this.component.menu.main.player.achievement[25].status = true;
					this.component.menu.main.player.unlockAchievement(25);
				} 
				if (!this.component.menu.main.player.achievement[26].status && target.lvl >= 50)  {
					this.component.menu.main.player.achievement[26].status = true;
					this.component.menu.main.player.unlockAchievement(26);
				} 
				if (!this.component.menu.main.player.achievement[27].status && target.lvl >= 75)  {
					this.component.menu.main.player.achievement[27].status = true;
					this.component.menu.main.player.unlockAchievement(27);
				} 
				if (!this.component.menu.main.player.achievement[28].status && target.lvl == 100)  {
					this.component.menu.main.player.achievement[28].status = true;
					this.component.menu.main.player.unlockAchievement(28);
				}

				this.teamPokemon[pos].level.innerText = `Lv. ${target.lvl}`;
				if (this.item.amount > 1) {
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();
				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();

	        	if (target.lvl >= this.component.menu.main.player.levelCap) {
	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`;
	        		this.teamPokemon[pos].subText.innerText = text.route.max[lang];
	        	} else {
	        		this.teamPokemon[pos].subText.style.color = `#4CAF50`;
	        		this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
	        	}
				break;
			case 'level50':
				playSound('levelUp', 'ui');
				target.lvl = 49;
				target.lvlUp();

				if (!this.component.menu.main.player.achievement[25].status)  {
					this.component.menu.main.player.achievement[25].status = true;
					this.component.menu.main.player.unlockAchievement(25);
				} 
				if (!this.component.menu.main.player.achievement[26].status)  {
					this.component.menu.main.player.achievement[26].status = true;
					this.component.menu.main.player.unlockAchievement(26);
				}

				this.teamPokemon[pos].level.innerText = `Lv. ${target.lvl}`;
				if (this.item.amount > 1) {
					this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`; 
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();
	        		
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();
				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();
				break;
			case 'level75':
				playSound('levelUp', 'ui');
				target.lvl = 74;
				target.lvlUp();

				if (!this.component.menu.main.player.achievement[25].status)  {
					this.component.menu.main.player.achievement[25].status = true;
					this.component.menu.main.player.unlockAchievement(25);
				} 
				if (!this.component.menu.main.player.achievement[26].status)  {
					this.component.menu.main.player.achievement[26].status = true;
					this.component.menu.main.player.unlockAchievement(26);
				} 
				if (!this.component.menu.main.player.achievement[27].status)  {
					this.component.menu.main.player.achievement[27].status = true;
					this.component.menu.main.player.unlockAchievement(27);
				}

				this.teamPokemon[pos].level.innerText = `Lv. ${target.lvl}`;
				if (this.item.amount > 1) {
					this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`; 
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();

					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();
				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();
				break;
			case 'disc':
				playSound('obtain', 'ui');
				let moves = DISC_MOVE_POOL[this.item.use.type];
				let num = moves[Math.floor(Math.random() * moves.length)];
				let tm = itemTm[`tm${num}`]

				target.moves.push(tm.move);
				
				if (this.item.amount > 1) {
					this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`; 
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();

					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];
				} else this.close();
				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();

				break;
			case 'transmutationFlask':
				playSound('obtain', 'ui');
				target.setTransmuted();
				if (this.item.amount > 1) {
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];

					this.teamPokemon[pos].type.innerHTML = ``;
					target.type.forEach(type => {
						this.teamPokemon[pos].type.innerHTML += `<img src="${type.icon}" width="43.2px">`;
					})

				} else this.close();

				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();
				break;
			case 'shinyFlask':
				playSound('obtain', 'ui');
				target.setShiny();
				if (this.item.amount > 1) {
					let newText = [`CLICK ON A POKÉMON TO CONSUME  (x${this.item.amount - 1})`, `HAZ CLICK EN UN POKÉMON PARA CONSUMIR (x${this.item.amount - 1})`];
					this.consumeText.innerText = newText[lang];

	        		this.teamPokemon[pos].style.pointerEvents = 'none';
	        		this.teamPokemon[pos].subText.style.color = `#F44336`; 
	        		this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();

	        		const sprite = document.createElement('img');
				    sprite.src = target.sprite.base;
				    sprite.className = 'route-team-pokemon-sprite';
				    this.teamPokemon[pos].appendChild(sprite);
				    this.component.menu.main.pokedex.shinyPokemon(target.specie.n);
				} else this.close();

				this.component.menu.main.inventory.removeItem(this.item);
				this.component.update();
				break;
		}		
	}

	open(item) {
		playSound('open', 'ui');
		super.open(); 
		this.item = item;
		this.useContainer.innerHTML = ""; 
	    this.update();
	}

	close(mute = false) {
		if (!mute) playSound('close', 'ui');
		super.close(); 
	}

}

class EggPokemon extends Popup {
    constructor(component) {
        super(400, 300);
        this.component = component;
        this.pokemon;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;
    }

    render() {
        const lang = this.component.component.menu.main.lang;
        this.promp = new Element(this.popup, { className: 'popup-route-capture-prompt' }).element;
        this.prompBottom = new Element(this.popup, { className: 'popup-route-capture-prompt-bottom' }).element;

       
        this.pokemonContainer = new Element(this.popup, { className: 'popup-route-capture-pokemon-container' }).element;
        this.sprite = new Element(this.pokemonContainer, { className: 'popup-route-capture-pokemon-sprite' }).element;
        this.name = new Element(this.pokemonContainer, { className: 'popup-route-capture-pokemon-name stroke' }).element;
        this.level = new Element(this.pokemonContainer, { className: 'popup-route-capture-pokemon-level stroke' }).element;
        
        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;
        this.buttonAccept.style.right = '50%';
        this.buttonAccept.style.transform = 'translate(50%)';
        this.buttonAccept.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonAccept.addEventListener('click', () => this.close());
    }

    update() {
        const lang = this.component.component.menu.main.lang;

        this.promp.innerText = text.egg.hatched[lang];
        this.prompBottom.innerText = text.route.capturePromptBottom[lang];
        this.name.innerText = this.pokemon.name;
        this.level.innerText = `${text.stats.short.level[lang]} ${this.pokemon.lvl}`;
       
        this.sprite.innerHTML = "";
        const sprite = document.createElement('img');
        sprite.src = this.pokemon.image;
        sprite.className = 'route-team-pokemon-sprite';
        this.sprite.appendChild(sprite);

        this.component.component.menu.main.pokedex.seePokemon(this.pokemon.specie.n);
        this.component.component.menu.main.pokedex.catchPokemon(this.pokemon.specie.n);
        if (this.pokemon.shiny) this.component.component.menu.main.pokedex.shinyPokemon(this.pokemon.specie.n);

        if (this.component.component.menu.main.team.pokemon.length < 6) this.component.component.menu.main.team.addPokemon(this.pokemon);
        else this.component.component.menu.main.box.storePokemon(this.pokemon);
    }

    open(pokemon) {
        super.open(); 
        this.pokemon = pokemon;
        this.update();
    }

    close() {
        super.close(); 
    }

}