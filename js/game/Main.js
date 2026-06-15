import { Element } from '../utils/Element.js';
import { Notification } from '../utils/Notification.js';
import { Player } from './core/Player.js';
import { Team } from './core/Team.js';
import { Inventory } from './core/Inventory.js';
import { Box } from './core/Box.js';
import { Pokedex } from './core/Pokedex.js';
import { Location } from './component/Location.js';
import { Dialogue } from './component/Dialogue.js';
import { Route } from './component/Route.js';
import { TrainerBattle } from './component/TrainerBattle.js';
import { StaticPokemon } from './component/StaticPokemon.js';
import { PokeCenter } from './place/PokeCenter.js';
import { PokeMart } from './place/PokeMart.js';
import { EvolutionDojo } from './place/EvolutionDojo.js';
import { Casino } from './place/Casino.js';
import { ExchangeHouse } from './place/ExchangeHouse.js';
import { PuzzleNumberCombination } from './place/PuzzleNumberCombination.js';
import { MoveDeleter } from './place/MoveDeleter.js';
import { Gym } from './place/Gym.js';
import { KeyController } from './component/KeyController.js';
import { getNPCs } from './data/npc/npcData.js';
import { getTrainers } from './data/npc/trainerData.js';
import { route } from './data/location/routeData.js';
import { city } from './data/location/cityData.js';
import { eventStatus } from './manager/eventStatus.js';
import { Menu } from './menu/Menu.js';

import { playSound } from '../file/audio.js';

export class Main {
	constructor(data) {
		// SCENES
		this.scene = new Element(document.getElementById("screen"), { id: 'game-scene' }).element;
		this.eventScene = new Element(this.scene, { id: 'event-scene' }).element;
		this.dialogueScene = new Element(this.scene, { id: 'dialogue-scene' }).element;
		this.gameMenuScene = new Element(this.scene, { id: 'game-menu-scene' }).element;
		this.notification = new Notification();
		
		// DATA
		this.data = data.save;
		this.lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

		this.eventStatus = this.data.eventStatus || eventStatus;
		this.routeData = this.data.routeData || route;
		this.cityData = this.data.cityData || city;

		// CORE
		this.player = new Player(this, this.data.player);
		this.team = new Team(this, this.data.team);
		this.inventory = new Inventory(this, this.data.inventory); 
		this.pokedex = new Pokedex(this, this.data.pokedex);
		this.box = new Box(this, this.data.box); 

		// NPC 
		this.rival = this.data.rival;
		this.trainers = getTrainers(this, this.rival);
		this.npcs = getNPCs(this, this.data.npcState);

		// COMPONENTS
		this.dialogue = new Dialogue(this);	
		this.location = new Location(this);
		this.route = new Route(this);
		this.trainerBattle = new TrainerBattle(this);
		this.staticPokemon = new StaticPokemon(this);
		this.menu = new Menu(this);
		this.keys = new KeyController(this);

		// PLACES
		this.pokeCenter = new PokeCenter(this);
		this.pokeMart = new PokeMart(this);
		this.gym = new Gym(this);
		this.evolutionDojo = new EvolutionDojo(this);
		this.casino = new Casino(this);
		this.exchangeHouse = new ExchangeHouse(this);
		this.moveDeleter = new MoveDeleter(this);
		this.puzzleNumberCombination = new PuzzleNumberCombination(this);

		if (this.player.location.name[0] == 'Steel Tomb' && !this.eventStatus.registeel) {
			playSound('secret1', 'ui');
		    this.eventStatus.registeel = true;
		    this.routeData['steelTomb-1'] = this.routeData['steelTomb-1bis'];
		    this.player.location = this.routeData['steelTomb-1'];
		}
		this.location.loadLocation(this.player.location);
		
		this.goldUI = new Element(document.getElementById('screen'), { className: 'gold-ui stroke' }).element; 
		this.tokenUI = new Element(document.getElementById('screen'), { className: 'token-ui stroke' }).element; 
		this.ticketUI = new Element(document.getElementById('screen'), { className: 'ticket-ui stroke' }).element; 
		this.recordUI = new Element(document.getElementById('screen'), { className: 'record-ui stroke' }).element; 

		setInterval(() => {
		    this.player.timePlayed++;   
		}, 60000);
	}


}

