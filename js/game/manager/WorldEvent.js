import { Element } from '../../utils/Element.js';
import { Tooltip } from '../../utils/Tooltip.js';
import { playSound, crySound } from '../../file/audio.js';

export class WorldEvent {
	static actives = [];

	constructor(main, data) {
		this.main = main;

		this.position = { x: data.position.x, y: data.position.y };
		this.size = { h: data.size.h, w: data.size.w };
		this.name = data.name[main.lang] || data.name[0];
		this.eventData = data.event;

		this.container = new Element(this.main.eventScene, { className: 'world-event' }).element;

		if (this.eventData.image) {
			this.container.style.backgroundImage = `url(${this.eventData.image})`;
			this.container.style.imageRendering = 'pixelated';
		}
		
		if (!data.event.invisible) {
			this.tooltip = new Tooltip(this.container, this.name);
		} else this.container.style.cursor = `url('./assets/images/misc/cursor.png') 0 0, auto`;

		this.render();
	}

	render() {
		const { x, y } = this.position;
		const { h, w } = this.size;

		Object.assign(this.container.style, {
			left: `${x * 32}px`,
			top: `${y * 32}px`,
			height: `${h * 32}px`,
			width: `${w * 32}px`,
		});


		WorldEvent.actives.push(this.container);
		
		this.container.addEventListener('click', () => this.eventHandler());
	}

	eventHandler() {
		if (this.eventData.condition) {
			let conditionPass = this.conditionHandler(this.eventData.condition);
			if (!conditionPass) {
				playSound('pop1', 'ui');
				return this.main.dialogue.startDialogue(this.main.npcs[this.eventData.condition.exception]);		
			}
		}

	    switch (this.eventData.type) {
	        case 'travelCity':
	        	this.eventData.sound ? playSound(this.eventData.sound, 'ui') : playSound('step', 'ui');
	            this.main.location.loadLocation(this.main.cityData[this.eventData.location]);
	            break;
	        case 'travelRoute':
	        	this.eventData.sound ? playSound(this.eventData.sound, 'ui') : playSound('step', 'ui');
	        	if (this.eventData.location == 'route38-3') {
	        		let puzzle = this.checkPikachuPuzzle();
	        		(puzzle) ? this.main.location.loadLocation(this.main.routeData['route38-3bis']) : this.main.location.loadLocation(this.main.routeData[this.eventData.location]);
	        	} 
	        	else if (this.eventData.location == 'iceTomb-1' && !this.main.eventStatus.regice) this.checkRegicePuzzle();
	        	else if (this.eventData.location == 'mirageCave-1' && !this.main.eventStatus.missingno) this.checkMissingnoPuzzle();
	        	else if (this.eventData.location == 'lunarSanctuary-1' && !this.main.eventStatus.latios) this.checkLatiosPuzzle();
	        	else if (this.eventData.location == 'solarSanctuary-1' && !this.main.eventStatus.latias) this.checkLatiasPuzzle();
	            else this.main.location.loadLocation(this.main.routeData[this.eventData.location]);
	            break;
	        case 'gym':	
	        	const gymData = this.eventData;
				this.main.gym.open(gymData);
	        	break; 
	        case 'pokeCenter':
	        	if (this.eventData.inRoute) this.main.pokeCenter.open(this.main.routeData[this.eventData.location]);
	        	else this.main.pokeCenter.open(this.main.cityData[this.eventData.location]);
	        	break;
	        case 'pokeMart':	
	        	const pokeMartData = this.eventData;
				this.main.pokeMart.open(pokeMartData);
	        	break;
	        case 'dialogue':
	        	if (!this.eventData.invisible) playSound('buttonB', 'ui');
	         	const npcId = this.eventData.npc;
				if (npcId && this.main.npcs[npcId]) {
					this.main.dialogue.startDialogue(this.main.npcs[npcId], this.eventData.tw);
				}
	        	break;
	        case 'routeBattle':
				this.main.route.open(this.eventData);
	        	break;
	        case 'evolutionDojo':
	         	this.main.evolutionDojo.open();
	        	break;
	        case 'moveDeleter':
	         	this.main.moveDeleter.open();
	        	break;
	         case 'casino':
	         	this.main.casino.open();
	        	break;
	        case 'exchangeHouse':
	         	this.main.exchangeHouse.open();
	        	break;
	        case 'cut':
	         	playSound('cut', 'ui');
	         	this.main.routeData[this.eventData.location] = this.main.routeData[this.eventData.newLocation];
	         	this.main.location.loadLocation(this.main.routeData[this.eventData.newLocation], true);
	        	break;
	        case 'rockSmash':
	         	playSound('rockSmash', 'ui');
	         	if (this.eventData.city) {
	         		this.main.cityData[this.eventData.city] = this.main.cityData[this.eventData.newCity];
	         		this.main.location.loadLocation(this.main.cityData[this.eventData.newCity], true);
	         	} else {
	         		this.main.routeData[this.eventData.route] = this.main.routeData[this.eventData.newRoute];
	         		this.main.location.loadLocation(this.main.routeData[this.eventData.newRoute], true);
	         	}	
	        	break;
	        case 'cry':
	        	crySound(this.eventData.n)
	        	break;
	    }
	}

	conditionHandler(condition) {
		let able = false;
		switch (condition.type) {
			case 'item':
				if (this.main.inventory.searchItem(condition.item)) able = true;
			break;
			case 'bikeUpgrade':
				if (this.main.player.bikeUpgrade) able = true;
			break;
		}

		return able;
	}

	static destroyAllActives() {
		WorldEvent.actives.forEach((evt) => {
			if (evt.parentNode) evt.parentNode.removeChild(evt);
		});
		WorldEvent.actives = [];
	}

	checkPikachuPuzzle() {
		let check = false;
		this.main.team.pokemon.forEach(pokemon => {
			if (pokemon.specie.n == 25 || pokemon.specie.n == 26 || pokemon.specie.n == 172) {
				pokemon.moves.forEach(move => {
					if (move.name[0] == 'Surf') check = true;
				})
			}
		})

		return check;
	}

	checkRegicePuzzle() {
		if (this.main.team.pokemon[0]?.specie.n == '369' && this.main.team.pokemon[5]?.specie.n == '321') {
			playSound('secret1', 'ui');
		    this.main.eventStatus.regice = true;
		    this.main.routeData['iceTomb-1'] = this.main.routeData['iceTomb-1bis'];
		}
		this.main.location.loadLocation(this.main.routeData[this.eventData.location]);
	}

	checkMissingnoPuzzle() {
		let team = this.main.team.pokemon;

		const firstCondition =
			team[0]?.specie.n == '201' && team[0]?.form === 11 && // L
			team[1]?.specie.n == '201' && team[1]?.form === 8 && // I
			team[2]?.specie.n == '201' && team[2]?.form === 19 && // T
			team[3]?.specie.n == '201' && team[3]?.form === 7 && // H
			team[4]?.specie.n == '201' && team[4]?.form === 8 && // I
			team[5]?.specie.n == '201' && team[5]?.form === 2; // C

		const secondCondition =
			team[0]?.specie.n == '201' && team[0]?.form === 11 && // L
			team[1]?.specie.n == '201' && team[1]?.form === 8 && // I
			team[2]?.specie.n == '201' && team[2]?.form === 19 && // T
			team[3]?.specie.n == '201' && team[3]?.form === 8 && // I
			team[4]?.specie.n == '201' && team[4]?.form === 2 && // C
			team[5]?.specie.n == '201' && team[5]?.form === 14; // O

		if (firstCondition || secondCondition) {
			playSound('secret1', 'ui');
			this.main.eventStatus.missingno = true;
			this.main.routeData['mirageCave-1'] = this.main.routeData['mirageCave-1bis'];
		}

		this.main.location.loadLocation(this.main.routeData[this.eventData.location]);
	}

	checkLatiosPuzzle() {
		const solution = [197, 337, 359, 36, 198, 164]
		let isSolved = true;

		let team = this.main.team.pokemon;
		let pokemonNumbers = this.main.team.pokemon.map((pokemon) => pokemon.specie.n);

		solution.forEach((num) => {
			if (!pokemonNumbers.includes(num)) isSolved = false
		})

		if (isSolved) {
			playSound('secret1', 'ui');
			this.main.eventStatus.latios = true;
			this.main.routeData['lunarSanctuary-1'] = this.main.routeData['lunarSanctuary-1bis'];
		}

		this.main.location.loadLocation(this.main.routeData[this.eventData.location]);
	}

	checkLatiasPuzzle() {
		const solution = [196, 338, 192, 182, 357, 178]
		let isSolved = true;

		let team = this.main.team.pokemon;
		let pokemonNumbers = this.main.team.pokemon.map((pokemon) => pokemon.specie.n);

		solution.forEach((num) => {
			if (!pokemonNumbers.includes(num)) isSolved = false
		})

		if (isSolved) {
			playSound('secret1', 'ui');
			this.main.eventStatus.latias = true;
			this.main.routeData['solarSanctuary-1'] = this.main.routeData['solarSanctuary-1bis'];
		}

		this.main.location.loadLocation(this.main.routeData[this.eventData.location]);
	}

}
