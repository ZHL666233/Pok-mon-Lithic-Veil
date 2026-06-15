import { Pokemon } from '../manager/Pokemon.js'; 

export class Team {
	constructor(main, teamData) {
		this.main = main;
		this.pokemon = teamData.map(data => Pokemon.fromOriginalData(data));
	}

	hasPokemon(pokemon) {
		return this.pokemon.includes(pokemon);
	}

	addPokemon(pokemon) {
		pokemon.hp[0] = pokemon.hp[1];
		this.pokemon.push(pokemon);
	}

	removePokemon(pokemon) {
		const index = this.pokemon.indexOf(pokemon);
		this.pokemon.splice(index, 1);
	}

	isPokemonInTeam(pokemonName) {
		let includes = false;
		this.pokemon.forEach(pokemon => {
			if (pokemon.name == pokemonName) includes = true;
		})
		return includes;
	}

	isTypeInTeam(typeName) {
		let includes = false

		this.pokemon.forEach(pokemon => {
			pokemon.type.forEach(type => {
				if (type.name[0] === typeName) includes = true;;
			})
		})

		return includes;
	}
}

