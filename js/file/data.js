export const loadData = () => {
	const data = window.localStorage.getItem("data");
	if (!data) {
        let newData = {
            config: {
            	language: {		
            		text: 2,
            	},
            	audio: {
            		master: 10,
					music: 1,
					ui: 10,
					effects: 6,
            	},
            },
            scale: 1,
            save: {}
        };
        window.localStorage.setItem("data", JSON.stringify(newData));
        return newData;
    }
	return JSON.parse(data); 
}

export const saveData = (player, team, box, inventory, pokedex, rival, npcs, eventStatus, routeData, cityData) => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    const npcState = {};
    for (const [key, value] of Object.entries(npcs)) {
        npcState[key] = value.state;
    }

    const save = {
        player: player.getSaveData(),
        team: team.pokemon.map(pkmn => pkmn.getOriginalData()),
        box: box.pokemon.map(pkmn => pkmn.getOriginalData()),
        inventory: inventory.getSaveData(),
        pokedex: pokedex.getSaveData(),
        rival: rival,
        npcState: npcState,
        eventStatus: eventStatus,
        routeData: routeData, 
        cityData: cityData, 
    };

    data.save = save;
    window.localStorage.setItem("data", JSON.stringify(data));
}
