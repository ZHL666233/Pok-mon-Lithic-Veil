import { Pokemon } from '../manager/Pokemon.js'; 
import { achievementList } from '../manager/achievement.js'; 
import { text } from '../../file/text.js'; 
import { playSound } from '../../file/audio.js'; 

export class Player {
	constructor(main, playerData) {
		this.main = main;
		this.name = playerData.name;
		this.sprite = playerData.sprite;
		this.savedLocation = playerData.savedLocation;
		this.location = playerData.location;
		this.start = playerData.start;
		this.gold = playerData.gold;
		this.region = playerData.region;
		this.pokedexProgress = playerData.pokedexProgress || 1;
		this.badges = playerData.badges || [];
		this.lithicDojos = playerData.lithicDojos || 0;
		this.levelCap = playerData.levelCap || 13;
		this.hof = playerData.hof || [[], []]
		this.potion = playerData.potion || { charge: [0, 0], type: 'potion', heal: 20 };
		this.pokeball = playerData.pokeball || { bonusRate: 0, type: 'pokeball' };
		this.shinyCharm = playerData.shinyCharm || false;
		this.expCharm = playerData.expCharm || false;
		this.catchingCharm = playerData.catchingCharm || false;
		this.amuletCoin = playerData.amuletCoin || false;	
		this.mysticCharm = playerData.mysticCharm || false;
		this.bikeUpgrade = playerData.bikeUpgrade || false;
		this.casinoHack = playerData.casinoHack || false;
		this.timePlayed = playerData.timePlayed || 0;
		//achievs
		this.achievement = playerData.achievement || achievementList;
		this.achievementProgress = playerData.achievementProgress || 0;
		this.unownForms = playerData.unownForms || [];
		this.battleCenterRecord = playerData.battleCenterRecord || 0;
		//apachan
		this.apachan = playerData.apachan || false;
		this.apachanPotionSaved = playerData.apachanPotionSaved || { charge: [0, 0], type: 'potion', heal: 20 };
		this.apachanPokeballSaved = playerData.apachanPokeballSaved || { bonusRate: 0, type: 'pokeball' };
		this.apachanGoldSaved = playerData.apachanGoldSaved || 0;
		this.apachanPokemonSaved = playerData?.apachanPokemonSaved?.map(data => Pokemon.fromOriginalData(data)) || [];
		this.apachanItemSaved = playerData.apachanItemSaved || {};  
		this.apachanCharms = playerData.apachanCharms || [];  
	}

	setLocation = (newLocation) => this.location = newLocation;
	setSavedLocation = (newLocation) => this.savedLocation = newLocation;

	changeGold(amount) {
		this.gold += amount;
		if (this.gold < 0) this.gold = 0;

		if (amount > 0) {
			if (!this.achievement[33].status) {
	            this.achievement[33].progress[0] += amount;
	            if (this.achievement[33].progress[0] >= this.achievement[33].progress[1]) {
	            	this.achievement[33].status = true;
	            	this.unlockAchievement(33);
	            } 
	        };
	        if (!this.achievement[35].status) {
	            this.achievement[35].progress[0] += amount;

	            if (this.achievement[35].progress[0] >= this.achievement[35].progress[1]) {
	            	this.achievement[35].status = true;
	            	this.unlockAchievement(35);
	            }  
	        };
	        if (!this.achievement[37].status) {
	            this.achievement[37].progress[0] += amount;

	            if (this.achievement[37].progress[0] >= this.achievement[37].progress[1]) {
	            	this.achievement[37].status = true;
	            	this.unlockAchievement(37);
	            }
	        }
		}
	}

	obtainPotion = () => {
		this.potion.charge[0]++;
		this.potion.charge[1]++;
	}

	upgradePotion = () => {
		if (this.potion.type == 'potion') {
			this.potion.type = 'superPotion';
			this.potion.heal = 40;
			this.main.inventory.item.potion.name = ['Super Potion', 'Superpoción', '超级伤药'];
			this.main.inventory.item.potion.description = [
				'Restores 40HP to the active Pokémon in battle.\nRefilled at the Pokémon Center.', 
				'Restaura 40PS al Pokémon activo en combate. \nSe rellena en el Centro Pokémon.'
			];
			this.main.inventory.item.potion.image = './assets/images/item/super-potion.png';
			this.achievement[50].status = true;
	        this.unlockAchievement(50);
		} else if (this.potion.type == 'superPotion'){
			this.potion.type = 'hyperPotion';
			this.potion.heal = 60;
			this.main.inventory.item.potion.name = ['Hyper Potion', 'Hiperpoción', '高级伤药'];
			this.main.inventory.item.potion.description = [
				'Restores 60HP to the active Pokémon in battle.\nRefilled at the Pokémon Center.', 
				'Restaura 60PS al Pokémon activo en combate. \nSe rellena en el Centro Pokémon.'
			];
			this.main.inventory.item.potion.image = './assets/images/item/hyper-potion.png';
			this.achievement[52].status = true;
	        this.unlockAchievement(52);
		} else if (this.potion.type == 'hyperPotion'){
			this.potion.type = 'maxPotion';
			this.potion.heal = 100;
			this.main.inventory.item.potion.name = ['Max Potion', 'Poción máxima', '全满伤药'];
			this.main.inventory.item.potion.description = [
				'Restores 100HP to the active Pokémon in battle.\nRefilled at the Pokémon Center.', 
				'Restaura 100PS al Pokémon activo en combate. \nSe rellena en el Centro Pokémon.'
			];
			this.main.inventory.item.potion.image = './assets/images/item/max-potion.png';
			this.achievement[54].status = true;
	        this.unlockAchievement(54);
		}
	}

	upgradePokeball = () => {
		if (this.pokeball.type == 'pokeball') {
			this.pokeball.type = 'greatball';
			this.pokeball.bonusRate = 0.25;
			this.main.inventory.item.pokeball.name = ['Great Ball', 'Superball', '超级球'];
			this.main.inventory.item.pokeball.description = [
				'Allows you to add Pokémon to your party.\nCapture multiplier: x1.25', 
				'Permite a los Pokémon unirse a tu grupo. \nMultiplicador de captura: x1.25'
			];
			this.main.inventory.item.pokeball.image = './assets/images/item/greatball.png';
			this.achievement[51].status = true;
	        this.unlockAchievement(51);
		} else if (this.pokeball.type == 'greatball') {
			this.pokeball.type = 'ultraball';
			this.pokeball.bonusRate = 0.5;
			this.main.inventory.item.pokeball.name = ['Ultra Ball', 'Ultraball', '高级球'];
			this.main.inventory.item.pokeball.description = [
				'Allows you to add Pokémon to your party.\nCapture multiplier: x1.5', 
				'Permite a los Pokémon unirse a tu grupo. \nMultiplicador de captura: x1.5'
			];
			this.main.inventory.item.pokeball.image = './assets/images/item/ultraball.png';
			this.achievement[53].status = true;
	        this.unlockAchievement(53);
		} else if (this.pokeball.type == 'ultraball') {
			this.pokeball.type = 'masterball';
			this.pokeball.bonusRate = 9;
			this.main.inventory.item.pokeball.name = ['Master Ball', 'Masterball', '大师球'];
			this.main.inventory.item.pokeball.description = [
				'Allows you to add Pokémon to your party.\nCapture multiplier: x10', 
				'Permite a los Pokémon unirse a tu grupo.\nMultiplicador de captura: x10'
			];
			this.main.inventory.item.pokeball.image = './assets/images/item/masterball.png';
			this.achievement[55].status = true;
	        this.unlockAchievement(55);
		}
	}

	upgradeBike = () => {
		this.main.inventory.item.waterBike.name = ['Super Water Bike', 'Super Bici Acuática', '超级水上自行车']
		this.main.inventory.item.waterBike.description = [
			'Allows passage through deep waters and marine currents.', 
			'Permite atravesar aguas profundas y corrientes marinas.'
		]
		this.main.inventory.item.waterBike.image = './assets/images/item/water-bike-upgraded.png';
		this.bikeUpgrade = true;
	}

	getSaveData() {
		return {
			name: this.name,
			sprite: this.sprite,
			location: this.location,
			savedLocation: this.savedLocation,
			start: this.start,
			gold: this.gold,
			region: this.region,
			pokedexProgress: this.pokedexProgress,
			badges: this.badges,
			lithicDojos: this.lithicDojos,
			hof: this.hof,
			levelCap: this.levelCap,
			potion: this.potion,
			pokeball: this.pokeball,
			shinyCharm: this.shinyCharm,
			expCharm: this.expCharm,
			catchingCharm: this.catchingCharm,
			amuletCoin: this.amuletCoin,
			mysticCharm: this.mysticCharm,
			bikeUpgrade: this.bikeUpgrade,
			casinoHack: this.casinoHack,
			timePlayed: this.timePlayed,
			//achievs
			achievement: this.achievement,
			achievementProgress: this.achievementProgress,
			unownForms: this.unownForms,
			battleCenterRecord : this.battleCenterRecord,
			//apachan
			apachan: this.apachan,
			apachanGoldSaved: this.apachanGoldSaved,
			apachanPotionSaved: this.apachanPotionSaved,
			apachanPokeballSaved: this.apachanPokeballSaved,
			apachanPokemonSaved: this.apachanPokemonSaved,
			apachanItemSaved: this.apachanItemSaved,
			apachanCharms: this.apachanCharms,
		};
	}

	unlockAchievement(n) {
		const lang = this.main.lang;
		playSound('achievement', 'ui');
		if (n === undefined) this.main.notification.display(`<span style="color: var(--red);">${text.misc.achievement[lang]}</span>`);
		else this.main.notification.display(`<span style="color: var(--red);">${text.misc.achievement[lang]}</span> ${this.achievement[n].description[lang] || this.achievement[n].description[0]}.`);

		this.achievement[78].progress[0]++;
		this.achievementProgress += 1.27;

		if (this.achievement[78].progress[0] == 78) {
			this.achievement[78].status = true;
			this.achievementProgress = 100;
			this.main.notification.display(this.achievement[78].description[lang] || this.achievement[78].description[0])
		}
	}

	updateLevelCap() {
		const levels = [13, 17, 21, 29, 37, 43, 48, 55, 60, 63, 66, 69, 72, 75, 78, 81, 84, 100]; 
		if (this.levelCap != 100) this.levelCap = levels[this.badges.length];
	}

	updateApachanLevelCap() {
		const levels = [15, 23, 28, 36, 42, 100]; 
		this.lithicDojos++;
		this.levelCap = levels[this.lithicDojos];

		this.achievement[2].progress[0]++;
		this.achievement[10].progress[0]++;
		if (this.achievement[2].progress[0] == this.achievement[2].progress[1]) {
			this.achievement[2].status = true;
			this.achievement[10].status = true;
			this.unlockAchievement(2);
			this.unlockAchievement(10);
		}
	}	

	obtainBadge(badge) {
		this.badges.push(badge);
		this.updateLevelCap();

		if (!this.achievement[0].status) {
			this.achievement[0].progress[0]++;
			if (this.achievement[0].progress[0] == this.achievement[0].progress[1]) {
				this.achievement[0].status = true;
				this.unlockAchievement(0);
			}
		} else {
			this.achievement[1].progress[0]++;
			if (this.achievement[1].progress[0] == this.achievement[1].progress[1]) {
				this.achievement[1].status = true;
				this.unlockAchievement(1);
			}
		}
	}

	setHallOfFame(n) {
		this.hof[n] = [...this.main.team.pokemon];
	}

	getTimePlayed() {
		const hours = Math.floor(this.timePlayed / 60);
	    const minutes = this.timePlayed % 60;
	    return `${hours}h ${minutes}min`;
	}

	goToApachan() {
		this.setSavedLocation(this.main.routeData['route56-1'],);
		this.apachan = true;
		this.levelCap = 15;

		this.apachanGoldSaved = structuredClone(this.gold);
		this.apachanPotionSaved = structuredClone(this.potion);
		this.apachanPokeballSaved = structuredClone(this.pokeball);
		this.apachanItemSaved = structuredClone(this.main.inventory.item)
		this.apachanCharms = [
			structuredClone(this.shinyCharm),
			structuredClone(this.expCharm),
			structuredClone(this.catchingCharm),
			structuredClone(this.amuletCoin),
			structuredClone(this.mysticCharm),
		];
		this.main.team.pokemon.forEach(pokemon => { this.main.box.storePokemon(pokemon); })
		this.apachanPokemonSaved = this.main.box.pokemon;

		this.main.box.pokemon = []
		this.main.team.pokemon = [];
        this.main.inventory.item = {};
		this.gold = 0;
		this.potion = { charge: [3, 3], type: 'potion', heal: 20 };
		this.pokeball = { bonusRate: 0, type: 'pokeball' };

		this.shinyCharm = false;
		this.expCharm = false;
		this.catchingCharm = false;
		this.amuletCoin = false;	
		this.mysticCharm = false;

		this.achievement[2].hidden = false;
		this.achievement[5].hidden = false;
		this.achievement[6].hidden = false;
		this.achievement[7].hidden = false;
		this.achievement[12].hidden = false;
		this.achievement[20].hidden = false;
		this.achievement[21].hidden = false;
		this.achievement[22].hidden = false;
		this.achievement[67].hidden = false;
		this.achievement[68].hidden = false;
		this.achievement[69].hidden = false;
		this.achievement[70].hidden = false;
		this.achievement[71].hidden = false;
		this.achievement[72].hidden = false;
		this.achievement[73].hidden = false;
		this.achievement[74].hidden = false;
		this.achievement[75].hidden = false;
		this.achievement[76].hidden = false;

		this.achievement[12].status = true;
		this.unlockAchievement(12);
	}

	returnFromApachan() {
		this.gold += this.apachanGoldSaved;
		this.apachanGoldSaved = 0;
		this.potion = this.apachanPotionSaved;
		this.pokeball = this.apachanPokeballSaved;

		this.shinyCharm = this.apachanCharms[0];
		this.expCharm = this.apachanCharms[1];
		this.catchingCharm = this.apachanCharms[2];
		this.amuletCoin = this.apachanCharms[3];	
		this.mysticCharm = this.apachanCharms[4];

		// ITEMS
		this.main.inventory.removeItem(this.main.inventory.searchItem('pokeball'));
        this.main.inventory.removeItem(this.main.inventory.searchItem('expShare'));
        this.main.inventory.removeItem(this.main.inventory.searchItem('potion'), 3);
        this.main.inventory.removeItem(this.main.inventory.searchItem('pokeRadar'));
        this.main.inventory.removeItem(this.main.inventory.searchItem('rod'));

        Object.keys(this.apachanItemSaved).forEach(key => {
            this.main.inventory.addItem(this.apachanItemSaved[key], this.apachanItemSaved[key].amount)
        })
  
		this.main.box.pokemon = [...this.main.box.pokemon, ...this.apachanPokemonSaved];
	}
}