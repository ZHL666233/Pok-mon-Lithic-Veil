import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { text } from '../../file/text.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { Pokemon } from '../manager/Pokemon.js';
import { playSound, playMusic } from '../../file/audio.js';
import { namePool, pokemonPool } from '../data/npc/trainerBCData.js';

const TITLE = ['POKÉMON GYM', 'GIMNASIO POKÉMON', '宝可梦道馆']
const TITLE_LEAGUE = ['POKÉMON LEAGUE', 'LIGA POKÉMON', '宝可梦联盟']
const TITLE_DOJO = ['POKÉMON DOJO', 'DOJO POKÉMON', '宝可梦道场']
const TITLE_BC = ['BATTLE CENTER', 'CENTRO COMBATE', '对战中心']

export class Gym extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.leader;
        this.pokemonNumber;
        this.playerTeam;
        this.streak;
        this.render();
    }

    render() {  
        const lang = this.main.lang;

        this.title = TITLE[lang];
        this.name.innerText = this.title;

        this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = 'var(--white)';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '0px';
        this.container.style.overflow = 'hidden';
        this.container.style.backgroundSize = 'cover';
        this.container.style.backgroundPosition = 'center';
        this.container.style.backgroundImage = 'url("./assets/images/background/gym.png")';
        this.container.style.imageRendering = 'pixelated';
        this.prompt = new Element(this.container, { className: 'gym-prompt stroke' }).element;

        this.teamPokemonContainer = new Element(this.container, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];

        this.selectedPokemonContainer = new Element(this.container, { className: 'gym-selected-pokemon-container' }).element;
        this.selectedPokemon = [];

        this.leaderPokemonContainer = new Element(this.container, { className: 'gym-leader-pokemon-container' }).element;
        this.leaderPokemon = [];

        this.buttonReady = new Element(this.container, { className: 'gym-button-ready stroke', text: text.gym.ready[lang].toUpperCase() }).element;
        this.buttonReady.addEventListener('click', () => {
            this.main.currentSong = this.leader.song;
            playMusic(this.main.currentSong);
            this.close(true);
            if (this.leader.region == 'johto') {
                this.main.trainerBattle.open(
                    this.playerTeam, 
                    this.leader.team[this.main.player.badges.length], 
                    `VS ${(this.leader.name[lang] || this.leader.name[0]).toUpperCase()}`,
                    this.leader.name[0].toLowerCase(),
                    this.leader.badge
                );
            } else if (this.leader.region == 'kanto') {
                this.main.trainerBattle.open(
                    this.playerTeam, 
                    this.leader.team, 
                    `VS ${(this.leader.name[lang] || this.leader.name[0]).toUpperCase()}`,
                    this.leader.name[0].toLowerCase(),
                    this.leader.badge
                );
            } else if (this.leader.region == 'league') {
                this.main.trainerBattle.open(
                    this.playerTeam, 
                    this.leader.team, 
                    `VS ${(this.leader.name[lang] || this.leader.name[0]).toUpperCase()}`,
                    this.leader.name[0].toLowerCase(),
                    null,
                    'league'
                );
            } else if (this.leader.region == 'apachan') {
                this.main.trainerBattle.open(
                    this.playerTeam, 
                    this.leader.team, 
                    `VS ${(this.leader.name[lang] || this.leader.name[0]).toUpperCase()}`,
                    this.leader.name[0].toLowerCase(),
                    'apachan'
                );
            } else if (this.leader.region == 'battleCenter') {
                this.main.trainerBattle.open(
                    this.playerTeam, 
                    this.leader.team, 
                    `VS ${(this.leader.name[lang] || this.leader.name[0]).toUpperCase()}`,
                    this.leader.name[0].toLowerCase(),
                    'battleCenter',
                    null,
                    null,
                    this.streak
                );
            }     
        })
    }

    updateTeamPokemon(pokemon, pos) {
        const lang = this.main.lang;

        this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
        this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
        this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `${text.stats.short.level[lang]} ${pokemon.lvl}` }).element;

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprite.base;
        sprite.className = 'route-team-pokemon-sprite';
        this.teamPokemon[pos].appendChild(sprite);

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

        this.teamPokemon[pos].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
        this.teamPokemon[pos].addEventListener('click', () => { 
            this.updatePlayerTeam(pokemon, pos)
        });
    }

    updateSelectedPokemon() {
        const lang = this.main.lang;
        
        this.selectedPokemonContainer.innerHTML = '';
        this.selectedPokemon = [];
        this.playerTeam.forEach((pokemon, i) => {
            this.selectedPokemon[i] = new Element(this.selectedPokemonContainer, { className: 'route-team-pokemon' }).element;
            this.selectedPokemon[i].name = new Element(this.selectedPokemon[i], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
            this.selectedPokemon[i].level = new Element(this.selectedPokemon[i], { className: 'route-team-pokemon-level stroke', text: `${text.stats.short.level[lang]} ${pokemon.lvl}` }).element;

            this.selectedPokemon[i].name.style.position = 'absolute';
            this.selectedPokemon[i].name.style.bottom = '60px';
            this.selectedPokemon[i].name.style.width = '100%';
            this.selectedPokemon[i].name.style.textAlign = 'center'
            this.selectedPokemon[i].level.style.position = 'absolute';
            this.selectedPokemon[i].level.style.bottom = '53px';
            this.selectedPokemon[i].level.style.width = '100%';
            this.selectedPokemon[i].level.style.textAlign = 'center';

            const sprite = document.createElement('div');
            const frameWidth = pokemon.specie.sprite.idle.size[0] / pokemon.specie.sprite.idle.framesX; 
            const frameHeight = pokemon.specie.sprite.idle.size[1] / pokemon.specie.sprite.idle.framesY; 
            const col = 0; 
            const row = 4; 
            const offsetX = -(col * frameWidth); 
            const offsetY = -(row * frameHeight); 

            sprite.className = 'route-team-pokemon-sprite';
            sprite.style.width = `${frameWidth}px`;
            sprite.style.height = `${frameHeight}px`;
            sprite.style.backgroundImage = `url(${pokemon.sprite.idle.src})`;
            sprite.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
            sprite.style.backgroundRepeat = 'no-repeat';
            this.selectedPokemon[i].appendChild(sprite);
        })
    }

    checkReady() {
        const lang = this.main.lang;

        const leaderName = this.leader.name[lang] || this.leader.name[0];
        this.promptText = [
            `Select ${this.pokemonNumber} Pokémon to face ${leaderName}. [${this.playerTeam.length}/${this.pokemonNumber}]`,
            `Selecciona ${this.pokemonNumber} Pokémon para enfrentarte a ${leaderName}. [${this.playerTeam.length}/${this.pokemonNumber}]`
        ];

        if (this.leader.region == 'league') {
            this.promptText = [
                `Select ${this.pokemonNumber} Pokémon to face ${leaderName}, ${this.leader.hint[lang]}. [${this.playerTeam.length}/${this.pokemonNumber}]`,
                `Selecciona ${this.pokemonNumber} Pokémon para enfrentarte a ${leaderName}, ${this.leader.hint[lang]}. [${this.playerTeam.length}/${this.pokemonNumber}]`
            ]
        } 

        if (this.leader.region == 'battleCenter') {
            this.promptText = [
                `Showdown #${this.streak+1}\n Select ${this.pokemonNumber} Pokémon to face ${leaderName}. [${this.playerTeam.length}/${this.pokemonNumber}]`,
                `Enfrentamiento #${this.streak+1}\n Selecciona ${this.pokemonNumber} Pokémon para enfrentarte a ${leaderName}. [${this.playerTeam.length}/${this.pokemonNumber}]`
            ]
        } 
        
        this.prompt.innerText = this.promptText[lang];

        if (this.playerTeam.length === this.pokemonNumber) {
            this.buttonReady.style.filter = 'revert-layer';
            this.buttonReady.style.pointerEvents = 'revert-layer';
        } else {
            this.buttonReady.style.filter = 'brightness(0.8)';
            this.buttonReady.style.pointerEvents = 'none';
        }
    }

    open(leader, streak) {
        const lang = this.main.lang;
        super.open(true); 

        this.main.menu.available = false;
        this.main.team.pokemon.forEach(pokemon => {
            pokemon.hp[0] = pokemon.hp[1];
        });

        if (leader == 'battleCenter') {
            this.streak = streak;
            this.leader = this.generateBattleCenterTrainer();
            this.pokemonNumber = 3;
            this.title = TITLE_BC[lang];
            this.container.style.backgroundImage = 'url("./assets/images/background/gym.png")';
            this.main.recordUI.style.display = 'block';
            this.main.recordUI.innerText = `${text.misc.record[lang]}: ${this.main.player.battleCenterRecord}`
        } else {
            this.leader = this.main.trainers[leader];
            this.pokemonNumber = (this.leader.region == 'johto') ? this.leader.team[this.main.player.badges.length].length : 5;
            if (this.leader.region == 'kanto') this.updateKantoLeaderTeam();
            if (this.leader.region == 'league') {
                this.container.style.backgroundImage = 'url("./assets/images/background/league.png")';
                this.title = TITLE_LEAGUE[lang]
            } else if (this.leader.region == 'apachan') {
                this.container.style.backgroundImage = 'url("./assets/images/background/gym.png")';
                this.title = TITLE_DOJO[lang];
            } else {
                this.container.style.backgroundImage = 'url("./assets/images/background/gym.png")';
                this.title = TITLE[lang];
            }
        }  
        
        this.name.innerText = this.title;

        this.playerTeam = [];

        this.teamPokemonContainer.innerHTML = '';
        this.teamPokemon = [];
        this.main.team.pokemon.forEach((pokemon, i) => { 
            this.updateTeamPokemon(pokemon, i);   
        })
        this.updateSelectedPokemon();
        this.displayEnemyTeam();
        this.checkReady();
    }

    updatePlayerTeam(pokemon, pos) {
        playSound('option', 'ui');
        const index = this.playerTeam.indexOf(pokemon);
        if (index !== -1) {
            this.playerTeam.splice(index, 1);
        } else if (this.playerTeam.length < this.pokemonNumber) {
            this.playerTeam.push(pokemon);
        }
        this.updateSelectedPokemon()
        this.checkReady();
    }

    displayEnemyTeam() {
        const lang = this.main.lang;
        this.leaderPokemonContainer.innerHTML = '';

        if (this.leader.region == 'johto') {
            this.leader.team[this.main.player.badges.length].forEach((pokemon, i) => {
                this.leaderPokemon[i] = new Element(this.leaderPokemonContainer, { className: 'route-team-pokemon' }).element;
                this.leaderPokemon[i].name = new Element(this.leaderPokemon[i], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
                this.leaderPokemon[i].level = new Element(this.leaderPokemon[i], { className: 'route-team-pokemon-level stroke', text: `${text.stats.short.level[lang]} ${pokemon.lvl}` }).element;

                const sprite = document.createElement('img');
                sprite.src = pokemon.sprite.base;
                sprite.className = 'route-team-pokemon-sprite';

                this.leaderPokemon[i].appendChild(sprite);
            })
        } else {
            this.leader.team.forEach((pokemon, i) => {
                this.leaderPokemon[i] = new Element(this.leaderPokemonContainer, { className: 'route-team-pokemon' }).element;
                this.leaderPokemon[i].name = new Element(this.leaderPokemon[i], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
                this.leaderPokemon[i].level = new Element(this.leaderPokemon[i], { className: 'route-team-pokemon-level stroke', text: `${text.stats.short.level[lang]} ${pokemon.lvl}` }).element;

                const sprite = document.createElement('img');
                sprite.src = pokemon.sprite.base;
                sprite.className = 'route-team-pokemon-sprite';

                this.leaderPokemon[i].appendChild(sprite);
            })
        }  
    }

    updateKantoLeaderTeam() {
        this.leader.team.forEach(pokemon => {
            pokemon.lvl = (this.main.player.levelCap == 100) ? 84 : this.main.player.levelCap;
            pokemon.stat = Pokemon.setStat(pokemon.specie, pokemon.iv, pokemon.lvl, pokemon.nature);
        })
    }

    generateBattleCenterTrainer() {
        let nameGenerated = namePool[Math.floor(Math.random() * namePool.length)]
        return {
            name: [nameGenerated, nameGenerated],
            team: this.generateBattleCenterTeam(),
            region: 'battleCenter',
        }
    }

    generateBattleCenterTeam() {
        const pool = [...pokemonPool];
        const team = [];

        for (let i = 0; i < 3 && pool.length; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            team.push(pool[idx]);
            pool.splice(idx, 1);          
        }

        const iv = 31 + Math.floor(this.streak / 5)

        return [
            new Pokemon(pokemon[team[0]], 100, null, { hp: iv, atk: iv, def: iv, spa: iv, spd: iv, spe: iv }),
            new Pokemon(pokemon[team[1]], 100, null, { hp: iv, atk: iv, def: iv, spa: iv, spd: iv, spe: iv }),
            new Pokemon(pokemon[team[2]], 100, null, { hp: iv, atk: iv, def: iv, spa: iv, spd: iv, spe: iv }), 
        ];
    }

    close(mute = false) {
        if (!mute) playSound('close', 'ui');
        this.main.team.pokemon.forEach(pokemon => {
            pokemon.hp[0] = pokemon.hp[1];
        });
        super.close();
        this.main.recordUI.style.display = 'none';
        this.main.menu.available = true;
    }
}