import { pokemon } from '../data/pokemon/pokemonData.js';
import { nature } from '../data/pokemon/natureData.js';
import { type as typeData} from '../data/pokemon/typeData.js';
import { text } from '../../file/text.js';

export class Pokemon {
	constructor(
		specie,
		lvl,
		givenNature = null,
		givenIv = null,
		givenMoves = null,
		givenExp = null,
		givenHp = null,
		givenTypes = null,
		givenShiny = false,
		givenTransumted = false,
		givenForm = null
	) {
		this.specie = specie;
		this.specieKey = Object.keys(pokemon).find(k => pokemon[k] === specie);
		this.lvl = lvl;
		const pokeLang = JSON.parse(window.localStorage.getItem("data")).config.language.text;
		this.name = Array.isArray(specie.name) ? specie.name[pokeLang] : specie.name;

		this.image = structuredClone(specie.image);
		this.portrait = structuredClone(specie.portrait);
		this.sprite = structuredClone(specie.sprite);
		this.type = structuredClone(givenTypes) || structuredClone(specie.type);

		this.nature = givenNature || Pokemon.setNature();
		this.iv = givenIv || Pokemon.setIv();

		this.moves = givenMoves || Pokemon.setMoves(specie, this.type[0]);

		this.stat = Pokemon.setStat(specie, this.iv, lvl, this.nature);
		const fullHp = this.stat.hp;
		this.hp = givenHp || [fullHp, fullHp];

		this.exp = givenExp || [0, Math.pow(lvl, 3)];
		this.shiny = givenShiny;
		this.transmuted = givenTransumted;
		this.form = givenForm;

		if (this.form) this.setUnown();
		if (this.shiny) this.setShiny();
	}

	getOriginalData() {
		return {
			specie: this.specie,
			lvl: this.lvl,
			nature: this.nature,
			iv: this.iv,
			moves: this.moves,
			exp: this.exp,
			hp: this.hp,
			type: this.type,
			shiny: this.shiny,
			transmuted: this.transmuted,
			form: this.form,
		};
	}

	static fromOriginalData(data) {
		const specie = pokemon[data.specieKey]
		return new Pokemon(
			data.specie,
			data.lvl,
			data.nature,
			data.iv,
			data.moves,
			data.exp,
			data.hp,
			data.type,
			data.shiny,
			data.transumted,
			data.form
		);
	}

	static setNature() {
		const natureList = Object.values(nature);
		const randomIndex = Math.floor(Math.random() * natureList.length);
		return natureList[randomIndex];
	}

	static setIv() {
		return {
			hp: Math.floor(Math.random() * 32), 
			atk: Math.floor(Math.random() * 32), 
			def: Math.floor(Math.random() * 32), 
			spa: Math.floor(Math.random() * 32), 
			spd: Math.floor(Math.random() * 32), 
			spe: Math.floor(Math.random() * 32) 
		};
	}

	static setMoves(specie, type) {
		const moves = [];
		const pool = [...specie.movePool];
		while (moves.length < 2 && pool.length > 0) {
			const index = Math.floor(Math.random() * pool.length);
			moves.push(pool.splice(index, 1)[0]);	
		}

		if (moves.length > 1 && Math.random() < 0.5) {
			moves.pop();
		}

		moves.forEach(move => {
			if (move != undefined) {
				if (move.prismatic) move.type = type;
			}
		})

		return moves;
	}

	static setStat(specie, iv, lvl, nature) {
		return {
			hp: Math.floor((((2 * specie.base.hp + iv.hp) * lvl) / 100) + lvl + 10),
			atk: Math.floor(((((2 * specie.base.atk + iv.atk) * lvl) / 100) + 5) * nature.atk),
			def: Math.floor(((((2 * specie.base.def + iv.def) * lvl) / 100) + 5) * nature.def),
			spa: Math.floor(((((2 * specie.base.spa + iv.spa) * lvl) / 100) + 5) * nature.spa),
			spd: Math.floor(((((2 * specie.base.spd + iv.spd) * lvl) / 100) + 5) * nature.spd),
			spe: Math.floor(((((2 * specie.base.spe + iv.spe) * lvl) / 100) + 5) * nature.spe)
		};
	}

	static randomGender() {
		return Math.random() < 0.5 ? 'male' : 'female';
	}

	lvlUp() {
		this.lvl++;
		this.exp = [0, Math.pow(this.lvl, 3)];
		this.stat = Pokemon.setStat(this.specie, this.iv, this.lvl, this.nature);
		this.hp = [this.stat.hp, this.stat.hp];
	}

	evolve(pos) {
		const newSpecie = structuredClone(pokemon[this.specie.evolution[pos].pokemon]);
		this.specie = newSpecie;
		const pokeLang = JSON.parse(window.localStorage.getItem("data")).config.language.text;
		this.name = Array.isArray(newSpecie.name) ? newSpecie.name[pokeLang] : newSpecie.name;
		this.image = newSpecie.image;
		this.portrait = newSpecie.portrait;
		this.sprite = newSpecie.sprite;
		if (!this.transmuted) this.type = newSpecie.type;
		if (this.shiny) this.setShiny();
		this.stat = Pokemon.setStat(newSpecie, this.iv, this.lvl, this.nature);
		this.hp = [this.stat.hp, this.stat.hp];
	}

	setTransmuted() {
		this.transmuted = true;
		let typeNumber = Math.floor(Math.random() * 2) + 1;

		const typesArray = Object.values(typeData);
		const nums = getTwoUniqueRandomNumbers();
		
		this.type = [];

		for (let i = 0; i < typeNumber; i++) {
			this.type[i] = typesArray[nums[i]];
		}

		this.moves.forEach(move => {
			if (move.prismatic) move.type = this.type[0];
		})
	}

	setShiny() {
		this.shiny = true;

		if (this.form == null) {
			this.image = this.specie.imageShiny;
			this.portrait = this.specie.portraitShiny;
			this.sprite.base = this.specie.sprite.baseShiny;
			this.sprite.idle.src = this.specie.sprite.idle.srcShiny;
			this.sprite.attack.src = this.specie.sprite.attack.srcShiny;
		} else {
			this.image = `./assets/images/pokemon/image-shiny/unown${this.form}.png`;
	        this.portrait = `./assets/images/pokemon/portrait-shiny/unown${this.form}.png`;
			this.sprite.base = `./assets/images/pokemon/sprite-shiny/unown${this.form}.png`;
			this.sprite.idle.src = `./assets/images/pokemon/sprite-shiny/unown${this.form}-idle.png`;
			this.sprite.attack.src = `./assets/images/pokemon/sprite-shiny/unown${this.form}-attack.png`;
		}
	}

	changeHp(amount) {
		this.hp[0] += amount;
		if (this.hp[0] < 0) this.hp[0] = 0;
		else if (this.hp[0] > this.hp[1]) this.hp[0] = this.hp[1];
	}

	setUnown() {
        if (this.form == null) this.form = Math.floor(Math.random() * 26) 
        	
        this.image = `./assets/images/pokemon/image/unown${this.form}.png`;
        this.portrait = `./assets/images/pokemon/portrait/unown${this.form}.png`;
		this.sprite.base = `./assets/images/pokemon/sprite/unown${this.form}.png`;
		this.sprite.idle.src = `./assets/images/pokemon/sprite/unown${this.form}-idle.png`;
		this.sprite.attack.src = `./assets/images/pokemon/sprite/unown${this.form}-attack.png`;
	}
}

export function generateEgg(team, eggKey) {
	const shufledTeam = shuffleArray(team);
	let shinyChance = 10;
	let isShiny = false;

	shufledTeam.forEach(pkmn => {
		if (pkmn.shiny) shinyChance += 10;
	})

	let shinyTry = Math.floor(Math.random() * 100);
	if (shinyTry < shinyChance) isShiny = true;

	let newTypes = shufledTeam[4].type;
	if (shufledTeam[5].type[0] != newTypes[0] && shufledTeam[5].type[0] != newTypes[1]) {
		newTypes[0] = shufledTeam[5].type[0]
	}

	const today = new Date();

	const day = String(today.getDate()).padStart(2, '0');
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const year = today.getFullYear();

	return {
		key: eggKey,
		name: [`${text.egg.name[0]} ${month}-${day}-${year}`, `${text.egg.name[1]} ${day}-${month}-${year}`, `${text.egg.name[2]} ${month}-${day}-${year}`],
		description: [
			text.egg.desc[0], 
			text.egg.desc[1],
			text.egg.desc[2]
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		description: [
			text.egg.desc[0], 
			text.egg.desc[1],
			text.egg.desc[2]
		],
		use: {
			effect: 'egg',
			hatch: [0, Math.floor(50 + Math.random() * 251)],
			pokemon: {
				specie: pokemon[shufledTeam[0].specie.egg],
				lvl: 5,	
				nature: shufledTeam[1].nature,
				iv: shufledTeam[2].iv,
				moves: [shufledTeam[3].moves[0]],
				type: newTypes,
				shiny: isShiny,
				transumted: true,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	}
}

function getTwoUniqueRandomNumbers(min = 0, max = 16) {
	const first = Math.floor(Math.random() * (max - min + 1)) + min;

	let second;
	do {
	  	second = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (second === first);

	return [first, second];
}

function shuffleArray(array) {
	const clonedArray = JSON.parse(JSON.stringify(array)); 
	for (let i = clonedArray.length - 1; i > 0; i--) {
	    const j = Math.floor(Math.random() * (i + 1));
	    [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
	}
	return clonedArray;
}