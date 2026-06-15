import { Pokemon } from '../manager/Pokemon.js'; 

export class Box {
    constructor(main, boxData) {
        this.main = main;
        this.pokemon = boxData.map(data => Pokemon.fromOriginalData(data)); 
    }

    storePokemon(pokemon) {
        this.pokemon.push(pokemon);
    }

    withdrawPokemon(pokemon) {
        const index = this.pokemon.indexOf(pokemon);
        this.pokemon.splice(index, 1)[0];    
    }
}
