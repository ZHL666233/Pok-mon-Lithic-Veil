import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { item } from '../data/item/itemData.js';
import { generateHiddenPower } from '../data/pokemon/moveData.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { Pokemon } from '../manager/Pokemon.js'; 
import { useMove } from '../manager/damageCalculator.js';
import { text } from '../../file/text.js';
import { playSound, crySound } from '../../file/audio.js';

export class Route extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.data;
        this.travel;
        this.enemy;
        this.spriteInterval = { player: null, enemy: null };
        this.captureActive = 0;
        this.expShareActive = false;
        this.radarActive = false;
        this.denySwap = false;
        this.autobattle = false;
        this.render();

        this.battle = {
            player: null,
            enemy: null,
            loop: null,
            moveSelected: 0,
            chargeMax: 100,
            playerCharge: 0,
            enemyCharge: 0,
            playerRatio: 0,
            enemyRatio: 0,
            playerSlowed: 0,
            enemySlowed: 0,
            playerStuned: 0,
            enemyStuned: 0,
            playerCombo: {
                moveName: '', 
                count: 0     
            },
            enemyCombo: {
                moveName: '', 
                count: 0 
            }
        };

        this.streak = 0;
        this.capturing = false;
        this.captureData = new RoutePokemonCaptured(this);
        this.defeatedData = new RouteDefeated(this);
    }

    render() {
        const lang = this.main.lang;

        this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = '#888';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '1px';
        this.container.style.backgroundSize = 'cover';
        this.container.style.imageRendering = 'pixelated';
        
        this.playerPokemon = new Element(this.container, { className: 'route-player-pokemon' }).element;
        this.enemyPokemon = new Element(this.container, { className: 'route-enemy-pokemon' }).element;

        this.movesetContainer = new Element(this.container, { className: 'route-moveset-container' }).element;
        this.moves = [];
        this.movesComboContainer = [];
        this.movesComboBalls = [[], []];

        for (let i = 0; i < 2; i++) {
            this.moves[i] = new Element(this.movesetContainer, { className: 'route-move stroke' }).element;
            this.moves[i].style.display = 'none';

            this.movesComboContainer[i] = new Element(this.movesetContainer, { className: 'route-move-combo-container stroke' }).element;
            this.movesComboContainer[i].style.display = 'none';

            this.moves[i].addEventListener('click', () => { 
                playSound('click1', 'ui');
                this.selectMove(i); 
            })
            this.moves[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })  
        }

        this.teamPokemonContainer = new Element(this.container, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];

        this.travelButton = new Element(this.container, { className: 'route-travel-button stroke' }).element;
        this.travelButton.addEventListener('click', () => { this.useTravel() })
        this.travelButton.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

        this.autobattleButton = new Element(this.container, { className: 'route-autobattle-button stroke' }).element;
        this.autobattleStatus = new Element(this.autobattleButton, { className: 'route-autobattle-status stroke', text: text.route.statusOff[lang] }).element;
        this.autobattleButton.addEventListener('click', () => { this.swapAutobattle() });
        this.autobattleButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.potionButton = new Element(this.container, { className: 'route-potion-button' }).element;
        this.potionAmount = new Element(this.potionButton, { className: 'route-potion-amount stroke' }).element;
        this.potionButton.addEventListener('click', () => { this.usePotion() });
        this.potionButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.captureButton = new Element(this.container, { className: 'route-capture-button stroke' }).element;
        this.captureStatus = new Element(this.captureButton, { className: 'route-capture-status stroke', text: text.route.statusOn[lang] }).element;
        this.captureButton.addEventListener('click', () => { this.swapCaptureMode() });
        this.captureButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.expShareButton = new Element(this.container, { className: 'route-exp-share-button stroke' }).element;
        this.expShareStatus = new Element(this.expShareButton, { className: 'route-exp-share-status stroke', text: text.route.statusOff[lang] }).element;
        this.expShareButton.addEventListener('click', () => { this.swapExpShare() });
        this.expShareButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.radarButton = new Element(this.container, { className: 'route-radar-button stroke' }).element;
        this.radarStatus = new Element(this.radarButton, { className: 'route-radar-status stroke', text: text.route.statusOff[lang] }).element;
        this.radarButton.addEventListener('click', () => { this.swapRadar() });
        this.radarButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.radarContainer = new Element(this.container, { className: 'route-radar-container' }).element;
        this.radarPokemon = {};

        this.battleInfoContainer = new Element(this.container, { className: 'route-battle-info-container' }).element;
    }
 
    update() {
        this.title = (this.data.title[this.main.lang] || this.data.title[0]).toUpperCase();
        this.name.innerText = this.title;
        this.container.style.backgroundImage = `url("${this.data.background}")`;

        this.teamPokemonContainer.innerHTML = '';
        this.teamPokemon = [];

        for (let i = 0; i < 2; i++) {
            this.moves[i].style.display = 'none';
            this.movesComboContainer[i].style.display = 'none';
        }

        this.main.team.pokemon.forEach((pokemon, i) => { 
            this.updateTeamPokemon(pokemon, i);   
        })

        this.enemy = this.generateRoutePokemon();
        this.battle.enemy = this.enemy;
        this.displayPokemon(this.enemy, 'enemy');
        this.displayPotion();
        this.displayExpShare();
        this.displayTravel(); 
        this.displayRadar();
        this.captureButton.style.backgroundImage = `url("${this.main.inventory.item['pokeball'].image}")`;
        this.autobattleButton.style.backgroundImage = `url("./assets/images/item/autobattle.png")`;
    }   

    swapAutobattle = () => {
        const lang = this.main.lang;
        this.autobattle = !this.autobattle;
        playSound('option', 'ui');

        if (this.autobattle) {
            this.autobattleStatus.innerText = text.route.statusOn[lang];
            this.autobattleStatus.style.color = 'var(--green)';
            this.addBattleInfoMessage(text.route.autobattleOn[lang]);
        } else {
            this.autobattleStatus.innerText = text.route.statusOff[lang];
            this.autobattleStatus.style.color = '#e63f1e';
            this.addBattleInfoMessage(text.route.autobattleOff[lang]);
        }
    }

    swapCaptureMode = () => {
        const lang = this.main.lang;
        this.captureActive += 1;
        playSound('option', 'ui');

        if (this.captureActive == 0) {
            this.captureStatus.innerText = text.route.statusOn[lang];
            this.captureStatus.style.color = 'var(--green)';
            this.addBattleInfoMessage(text.route.captureModeOn[lang]);
        } else if (this.captureActive == 1){
            this.captureStatus.innerText = text.route.statusShiny[lang];
            this.captureStatus.style.color = 'var(--yellow)';
            this.addBattleInfoMessage(text.route.captureModeShiny[lang]);
        } else {
            this.captureActive = -1;
            this.captureStatus.innerText = text.route.statusOff[lang];
            this.captureStatus.style.color = '#e63f1e';
            this.addBattleInfoMessage(text.route.captureModeOff[lang]);
        }
    }

    swapExpShare = () => {
        const lang = this.main.lang;
        this.expShareActive = !this.expShareActive;
        playSound('option', 'ui');

        if (this.expShareActive) {
            this.expShareStatus.innerText = text.route.statusOn[lang];
            this.expShareStatus.style.color = 'var(--green)';
            this.addBattleInfoMessage(text.route.expShareModeOn[lang]);
        } else {
            this.expShareStatus.innerText = text.route.statusOff[lang];
            this.expShareStatus.style.color = '#e63f1e';
            this.addBattleInfoMessage(text.route.expShareModeOff[lang]);
        }
    }

    swapRadar = () => {
        const lang = this.main.lang;
        this.radarActive = !this.radarActive;
        playSound('option', 'ui');

        if (this.radarActive) {
            this.radarStatus.innerText = text.route.statusOn[lang];
            this.radarStatus.style.color = 'var(--green)';
            this.radarContainer.style.display = 'flex';
            this.addBattleInfoMessage(text.route.radarOn[lang]);
        } else {
            this.radarStatus.innerText = text.route.statusOff[lang];
            this.radarStatus.style.color = '#e63f1e';
            this.radarContainer.style.display = 'none';
            this.addBattleInfoMessage(text.route.radarOff[lang]);
        }
    }

    updateRadar = () => {
        this.radarPokemon = {};
        this.radarContainer.innerHTML = "";
      
        this.data.pokemon.forEach((routePokemon, i) => {
            this.radarPokemon[routePokemon.name] = new Element(this.radarContainer, { className: 'route-radar-pokemon' }).element;

            const sprite = document.createElement('img');
            sprite.src = pokemon[routePokemon.name].sprite.base;
            sprite.className = 'route-team-pokemon-sprite';
            this.radarPokemon[routePokemon.name].appendChild(sprite);

            if ((this.main.pokedex.pokemon[pokemon[routePokemon.name].n]) == "unseen") this.radarPokemon[routePokemon.name].style.filter = 'brightness(0)'
        })
    }

    usePotion = () => {
        if (this.battle.player == null || this.battle.player.hp[0] == 0) return;
        playSound('potion', 'effect');
        const lang = this.main.lang;
        this.main.player.potion.charge[0]--;
        this.battle.player.changeHp(this.main.player.potion.heal);
        this.displayPotion();

        const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
        this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
        this.playerPokemonHealthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (this.battle.player.teamHpBar) {
            this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
            this.battle.player.teamHpBar.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';
        }
        if (this.battle.player.hp[0] <= 0) this.endBattle("enemy");

        this.addBattleInfoMessage(`${this.battle.player.name} +${this.main.player.potion.heal} ${text.stats.hp[lang].toUpperCase()}`);
    }

    displayPotion = () => {
        if (this.main.player.potion.charge[0] == 0) {
            this.potionButton.style.pointerEvents = 'none';
        } else this.potionButton.style.pointerEvents = 'revert-layer';

        this.potionButton.style.backgroundImage = `url("${this.main.inventory.item['potion'].image}")`;
        this.potionAmount.innerText = `x${this.main.player.potion.charge[0]}`;
    }

    displayExpShare = () => {
        if (this.main.inventory.searchItem('expShare')) {
            this.expShareButton.style.backgroundImage = `url("${this.main.inventory.item['expShare'].image}")`;
            this.expShareButton.style.display = 'block';
        }
    }

    displayRadar = () => {
        if (this.main.inventory.searchItem('pokeRadar')) {
            this.radarButton.style.backgroundImage = `url("${this.main.inventory.item['pokeRadar'].image}")`;
            this.radarButton.style.display = 'block';
            this.updateRadar();
        }
    }

    displayTravel = () => {
        if (this.travel) {
            this.travel.battles[0] = 0;
            this.travelButton.style.display = 'block';
            this.travelButton.style.pointerEvents = 'none'; 
            this.travelButton.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            this.travelButton.innerText = `${this.travel.battles[0]}/${this.travel.battles[1]}`
        } else {
            this.travelButton.style.display = 'none';
        }
    }

    updateTravel = () => {
        if (this.travel.battles[0] >= this.travel.battles[1]) return;

        this.travel.battles[0]++;
        this.travelButton.innerText = `${this.travel.battles[0]}/${this.travel.battles[1]}`;
        
        if (this.travel.battles[0] == this.travel.battles[1]) {
            const lang = this.main.lang;

            this.travelButton.innerText = text.route.travel[lang].toUpperCase();
            this.travelButton.style.backgroundColor = "var(--red)";
            this.travelButton.style.pointerEvents = 'all';
        }
    }

    useTravel = () => {
        playSound('step', 'ui');

        if (!this.travel.isCity) this.main.location.loadLocation(this.main.routeData[this.travel.location]);
        else this.main.location.loadLocation(this.main.cityData[this.travel.location]);

        if (this.travel.travelKanto) {
            this.main.player.region = 1;
            if (!this.main.player.achievement[11].status) {
                this.main.player.achievement[11].status = true;
                this.main.player.unlockAchievement(11);
            }
        } else if (this.travel.travelJohto) this.main.player.region = 0;

        this.close();
    }

    updateTeamPokemon(pokemon, pos) {
        const lang = this.main.lang;
        this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
        this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
        this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `${text.stats.short.level[lang]} ${pokemon.lvl}` }).element;

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprite.base;
        sprite.className = 'route-team-pokemon-sprite';
        sprite.style.pointerEvents = 'none'
        this.teamPokemon[pos].appendChild(sprite);

        this.teamPokemon[pos].healthBarContainer = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-health-bar-container' }).element;
        this.teamPokemon[pos].healthBarProgress = new Element(this.teamPokemon[pos].healthBarContainer, { className: 'route-team-pokemon-health-bar-progress' }).element;

        const hpPercent = (pokemon.hp[0] / pokemon.hp[1]) * 100;
        this.teamPokemon[pos].healthBarProgress.style.width = `${Math.max(0, hpPercent)}%`;
        this.teamPokemon[pos].healthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (hpPercent === 0) {
            this.teamPokemon[pos].style.filter = 'grayscale(100%)';
            this.teamPokemon[pos].style.pointerEvents = 'none'
        } else {
            this.teamPokemon[pos].style.filter = 'revert-layer';
            this.teamPokemon[pos].style.pointerEvents = 'revert-layer'
        }

        this.teamPokemon[pos].expBarContainer = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-exp-bar-container' }).element;
        this.teamPokemon[pos].expBarProgress = new Element(this.teamPokemon[pos].expBarContainer, { className: 'route-team-pokemon-exp-bar-progress' }).element;

        const expPercent = (pokemon.exp[0] / pokemon.exp[1]) * 100;
        this.teamPokemon[pos].expBarProgress.style.width = `${Math.max(0, expPercent)}%`;
        this.teamPokemon[pos].expBarProgress.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';

        this.teamPokemon[pos].addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
        this.teamPokemon[pos].addEventListener('click', () => { 
            if (pokemon.hp[0] <= 0 || this.denySwap || this.battle.player === pokemon) return;
            this.removePokemonElements('player');

            this.battle.player = pokemon;
            this.battle.player.teamHpBar = this.teamPokemon[pos].healthBarProgress;
            this.battle.player.teamExpBar = this.teamPokemon[pos].expBarProgress;
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = 0;

            this.displayPokemon(pokemon, 'player');
        });

        if ( this.battle.player == pokemon) {
            this.battle.player.teamHpBar = this.teamPokemon[pos].healthBarProgress;
            this.battle.player.teamExpBar = this.teamPokemon[pos].expBarProgress;
        }
    }

    generateRoutePokemon() {
        const encounterTable = this.data.pokemon;
        const roll = Math.random() * 100;
        let cumulativeChance = 0;
        let selected = null;

        for (const entry of encounterTable) {
            cumulativeChance += entry.chance;
            if (roll <= cumulativeChance) {
                selected = entry;
                break;
            }
        }

        const level = Math.floor(Math.random() * (selected.maxLevel - selected.minLevel + 1)) + selected.minLevel;
        const specie = pokemon[selected.name.toLowerCase()];

        this.main.pokedex.seePokemon(specie.n);
        if (this.main.inventory.searchItem('pokeRadar')) this.updateRadar();
        let routePokemon = new Pokemon(specie, level);
        if (specie.name[0] === 'UNOWN') {
            routePokemon.setUnown();
            routePokemon.moves = [];
            routePokemon.moves.push(generateHiddenPower(specie.type[0]))
        }
        
        //shiny
        let shinyOdds = this.main.player.shinyCharm ? 1600 : 3200;
        let n = Math.floor(Math.random() * shinyOdds);
        if (n < 1) {
            routePokemon.setShiny();
            if (!this.main.player.achievement[39].status) {
                this.main.player.achievement[39].status = true;
                this.main.player.unlockAchievement(39);
            }

            if (!this.main.player.achievement[40].status) {
                this.main.player.achievement[40].progress[0]++;
                if (this.main.player.achievement[40].progress[0] === this.main.player.achievement[40].progress[1]) {
                    this.main.player.achievement[40].status = true;
                    this.main.player.unlockAchievement(40);
                }
            };

            if (!this.main.player.achievement[41].status) {
                this.main.player.achievement[41].progress[0]++;
                if (this.main.player.achievement[41].progress[0] === this.main.player.achievement[41].progress[1]) {
                    this.main.player.achievement[41].status = true;
                    this.main.player.unlockAchievement(41);
                }
            };
        }

        this.battle.enemySlowed = 0;
        this.battle.enemyStuned = 0;

        return routePokemon;
    }

    displayPokemon(pokemon, pos, mode = 'idle') {
        if (!this.isOpen) return;
        const lang = this.main.lang;
        const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;
        crySound(pokemon.specie.n);

        if (pokemon.shiny) playSound('shiny', 'effect');
        this.animateSprite(pokemon, pos, mode);

        this.displayBattleBar(pos);

        if (pos === 'player') {
            this.displayPokemonMoves(pokemon);
            this.battle.playerCharge = 0;
            this.battle.playerCombo = {
                moveName: '', 
                count: 0  
            }
        } else {
            this.addBattleInfoMessage(`${pokemon.name} ${text.stats.short.level[lang]} ${pokemon.lvl}`);
            this.battle.enemyCombo = {
                moveName: '', 
                count: 0      
            }
        }

        if (this.playerPokemon.innerHTML && this.enemyPokemon.innerHTML && this.battle.player && this.battle.enemy) {
            this.animateSprite(this.battle.player, 'player', 'attack');
            this.animateSprite(this.battle.enemy, 'enemy', 'attack');
            this.setBattleBobAnimation(true, 'player');   
            this.setBattleBobAnimation(true, 'enemy');   

            this.startBattleLoop();
        }
    }

    displayPokemonMoves(pokemon) {
        const lang = this.main.lang;

        for (let i = 0; i < 2; i++) {
            this.moves[i].style.display = 'none';
            this.movesComboContainer[i].innerHTML = "";
            this.movesComboContainer[i].style.display = 'none';
            this.movesComboBalls[i] = [];
        }

        pokemon.moves.forEach((move, i) => {
            this.moves[i].style.display = 'block';
            this.moves[i].innerText = move.name[lang].toUpperCase();
            this.moves[i].style.backgroundColor = move.type.color;
            if (move.combo) {
                this.movesComboContainer[i].style.display = 'flex';
                for (let j = 0; j < move.combo.length - 1; j++) {
                    this.movesComboBalls[i][j] = new Element(this.movesComboContainer[i], { className: 'route-move-combo-ball' }).element;
                }
                this.movesComboContainer[i].style.left = (i == 1) ? '278px' : (pokemon.moves.length == 1) ? '166px' : '54px';
            }
        })

        this.selectMove(0);
    }

    selectMove(movePosition) {
        this.battle.moveSelected = movePosition;

        for (let i = 0; i < 2; i++) {
            this.moves[i].className = 'route-move stroke';
            if (i === movePosition) this.moves[i].className = 'route-move-selected stroke';
        }
    }

    animateSprite(pokemon, pos, mode = 'idle') {
        const ANIMATION_CYCLE_MS = 1100;  
        const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;
        let sprite = target.querySelector('.route-pokemon-animated-sprite');

        if (!sprite) {
            sprite = document.createElement('div');
            sprite.className = 'route-pokemon-animated-sprite';
            target.appendChild(sprite);
        }

        if (this.spriteInterval[pos]) {
            clearInterval(this.spriteInterval[pos]);
            this.spriteInterval[pos] = null;
        }

        const spriteData = pokemon.sprite[mode];
        const frameW = spriteData.size[0] / spriteData.framesX;
        const frameH = spriteData.size[1] / spriteData.framesY;

        sprite.style.backgroundImage = `url("${spriteData.src}")`;
        sprite.style.width = `${frameW}px`;
        sprite.style.height = `${frameH}px`;
        sprite.style.position = 'absolute';
        sprite.style.left = `calc(50% + ${spriteData.correctionX || 0}px)`;
        sprite.style.bottom = `${spriteData.correctionY || 0}px`;
        sprite.style.backgroundRepeat = 'no-repeat';
        sprite.style.imageRendering = 'pixelated';
        sprite.style.backgroundSize = `${spriteData.size[0]}px ${spriteData.size[1]}px`;

        const totalFrames = spriteData.framesX;               
        const frameTimeMs = ANIMATION_CYCLE_MS / totalFrames; 

        const baseFrameY = spriteData.position; 
        let frame = 0;

        const setFrame = () => {
            const currentX = frame % totalFrames;             
            sprite.style.backgroundPosition =
                `${-currentX * frameW}px ${-baseFrameY * frameH}px`;
        };

        setFrame(); 

        this.spriteInterval[pos] = setInterval(() => {
            frame = (frame + 1) % totalFrames;  
            setFrame();
        }, frameTimeMs);
    }

    displayBattleBar(pos) {
        const isPlayer = pos == 'player';
        const base = isPlayer ? this.playerPokemon : this.enemyPokemon;

        const healthContainer = new Element(base, { className: 'route-pokemon-health-bar-container' }).element;
        const healthBar = new Element(healthContainer, { className: 'route-pokemon-health-bar-progress' }).element;

        const chargeContainer = new Element(base, { className: 'route-pokemon-charge-bar-container' }).element;
        const chargeBar = new Element(chargeContainer, { className: 'route-pokemon-charge-bar-progress' }).element;

        if (isPlayer) {
            healthContainer.style.transform = 'scaleX(-1)';
            chargeContainer.style.transform = 'scaleX(-1)';

            this.playerPokemonHealthBarContainer = healthContainer;
            this.playerPokemonHealthBarProgress = healthBar;
            this.playerPokemonChargeBarContainer = chargeContainer;
            this.playerPokemonChargeBarProgress = chargeBar;         
        } else {
            this.enemyPokemonHealthBarContainer = healthContainer;
            this.enemyPokemonHealthBarProgress = healthBar;
            this.enemyPokemonChargeBarContainer = chargeContainer;
            this.enemyPokemonChargeBarProgress = chargeBar;
        }

        const currentHp = isPlayer ? this.battle.player.hp[0] : this.battle.enemy.hp[0];
        const maxHp = isPlayer ? this.battle.player.hp[1] : this.battle.enemy.hp[1];
        const hpPercent = (currentHp / maxHp) * 100;

        healthBar.style.width = `${Math.max(0, hpPercent)}%`;
        healthBar.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        chargeBar.style.width = `0%`;
    }

    startBattleLoop() {
        if (this.battle.loop) {
            clearInterval(this.battle.loop);
            this.battle.loop = null;
        }

        const playerSpe = (this.battle.player.stat.spe * 0.9) + 35;
        const enemySpe = (this.battle.enemy.stat.spe * 0.9) + 35;
        const totalSpe = playerSpe + enemySpe;

        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

        this.battle.playerRatio = clamp(playerSpe / totalSpe, 0.3, 0.7);
        this.battle.enemyRatio = clamp(enemySpe / totalSpe, 0.3, 0.7);

        this.battle.loop = setInterval(() => {
            if (this.battle.enemyStuned > 0) {
                this.battle.enemyStuned--;
                if (this.battle.enemyStuned === 0) this.setBattleBobAnimation(true, 'enemy');
                this.battle.enemyCharge += this.battle.enemyRatio * 0;
            } else if (this.battle.enemySlowed > 0) {
                this.battle.enemySlowed--;
                this.battle.enemyCharge += this.battle.enemyRatio * 3;
            } else this.battle.enemyCharge += this.battle.enemyRatio * 6;
            
            if (this.battle.playerStuned > 0) {
                this.battle.playerStuned--;
                if (this.battle.playerStuned === 0) this.setBattleBobAnimation(true, 'player');
                this.battle.playerCharge += this.battle.playerRatio * 0;
            } else if (this.battle.playerSlowed > 0) {
                this.battle.playerSlowed--;
                this.battle.playerCharge += this.battle.playerRatio * 3;
            } else this.battle.playerCharge += this.battle.playerRatio * 6;

            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;

            if (this.battle.playerCharge >= this.battle.chargeMax) {
                this.battle.playerCharge = 0;
                this.playerAttack();
            }

            if (this.battle.enemyCharge >= this.battle.chargeMax) {
                this.battle.enemyCharge = 0;
                this.enemyAttack();
            }
        }, 100);
    }

    updateComboUI() {
        this.battle.player.moves.forEach((move, i) => {
            if (move.combo) {
                if (move === this.battle.player.moves[this.battle.moveSelected]) {
                    if (this.battle.playerCombo.count == move.combo.length - 1) {
                        this.movesComboBalls[i].forEach(ball => ball.style.backgroundColor = 'revert-layer')
                    } else this.movesComboBalls[i][this.battle.playerCombo.count].style.backgroundColor = move.type.color;
                } else {
                    this.movesComboBalls[i].forEach(ball => ball.style.backgroundColor = 'revert-layer')
                } 
            }
        })
    }

    criticalChance(move) {
        const baseCriticalChance = 0.0625;
        const moveCriticalBonus = move.criticalBonus ?? 0;
        const criticalChance = baseCriticalChance + moveCriticalBonus;
        const critical = Math.random() < criticalChance ? 1.5 : 1;
        return critical;
    }

    playerAttack() {
        const lang = this.main.lang;
        const move = this.battle.player.moves[this.battle.moveSelected];
        let bonusPower = 0;

        if (move.payback) {
            this.main.team.pokemon.forEach((pokemon, i) => { 
                if (pokemon.hp[0] == 0) bonusPower += move.payback;
            })
        }

        if (move.combo) {
            if (this.battle.playerCombo.moveName == move.name[0]) {
                this.battle.playerCombo.count++; 
                if (this.battle.playerCombo.count == move.combo.length) this.battle.playerCombo.count = 0;
            } else {
                this.battle.playerCombo = {
                    moveName: move.name[0],
                    count: 0
                }
            }
            bonusPower = move.combo[this.battle.playerCombo.count];
        } else if (this.battle.playerCombo.moveName != '') {
            this.battle.playerCombo = {
                moveName: '',
                count: 0
            }       
        }
        this.updateComboUI();

        const critical = this.criticalChance(move);
        const damage = useMove(move, this.battle.player, this.battle.enemy, bonusPower, critical);
        let message;

        if (critical == 1) {
            message = (lang == 0) ? `${this.battle.player.name} uses ${move.name[lang].toUpperCase()}` : (lang == 1) ? `${this.battle.player.name} usa ${move.name[lang].toUpperCase()}` : `${this.battle.player.name} 使用了 ${move.name[lang].toUpperCase()}`;
        } else {
            message = (lang == 0) ? `${this.battle.player.name} uses ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : (lang == 1) ? `${this.battle.player.name} usa ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : `${this.battle.player.name} 使用了 ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}`;
            this.showStatusAnimation('critical', 'player')
        }

        this.addBattleInfoMessage(message);

        if (move.fakeOut && this.battle.enemy.hp[0] == this.battle.enemy.hp[1]) {
            this.showStatusAnimation('flinch', 'enemy')
            this.battle.enemyCharge = 0;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.slow) {
            this.showStatusAnimation('slow', 'enemy')
            this.battle.enemySlowed = move.slow;
        }

        if (move.autoStun) {
            this.showStatusAnimation('stun', 'player');
            this.setBattleBobAnimation(false, 'player'); 
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = move.autoStun;
        }
        
        if (move.stun && Math.random() < move.stunChance) {
            this.showStatusAnimation('stun', 'enemy');
            this.setBattleBobAnimation(false, 'enemy'); 

            this.battle.enemySlowed = 0;
            this.battle.enemyStuned = move.stun;
        }

        this.battle.enemy.changeHp(-damage);

        const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
        this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
        this.enemyPokemonHealthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (move.chargeBonus) {
            this.battle.playerCharge += move.chargeBonus;
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.pursuit) {
            this.battle.playerCharge += (this.battle.enemyCharge * 0.8);
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.restore) {
            this.battle.player.changeHp(Math.floor(damage * move.restore));
            const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
            this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.playerPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            if (this.battle.player.teamHpBar) {
                this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
                this.battle.player.teamHpBar.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            }
        }

        if (move.chargeOnKill && this.battle.enemy.hp[0] == 0) {
            this.battle.playerCharge += move.chargeOnKill;
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.restoreOnKill && this.battle.enemy.hp[0] == 0) {
            this.battle.player.changeHp(Math.floor(this.battle.player.hp[0] * move.restoreOnKill));
            const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
            this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.playerPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            if (this.battle.player.teamHpBar) {
                this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
                this.battle.player.teamHpBar.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            }
        }

        if (move.autoDamage) {
            let recoil = damage * move.autoDamage;
            if (recoil >= this.battle.player.hp[0]) recoil = this.battle.player.hp[0] - 1;

            this.battle.player.changeHp(-recoil);
            const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
            this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.playerPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
                
            if (this.battle.player.teamHpBar) {
                this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
                this.battle.player.teamHpBar.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            }
        }

        if (move.gold) {
            let goldEarn =  Math.min(Math.ceil(damage * move.gold), move.goldMax); 
            this.main.player.changeGold(goldEarn);
            this.showGoldAnimation(goldEarn, true);
        }

        if (this.battle.enemy.hp[0] <= 0) this.endBattle("player");
        if (this.battle.enemy.hp[0] > 0) {
            if (move.capture) this.tryCapture();
        }
    }

    enemyAttack() {
        const lang = this.main.lang;
        let move;
        let bonusPower = 0;

        if (this.battle.enemy.moves.length === 1) { move = this.battle.enemy.moves[0];
        } else {
            const randomIndex = Math.floor(Math.random() * this.battle.enemy.moves.length);
            move = this.battle.enemy.moves[randomIndex];
        }

        if (move.combo) {
            if (this.battle.enemyCombo.moveName == move.name[0]) {
                bonusPower = move.combo[this.battle.enemyCombo.count];
                this.battle.enemyCombo.count++;
                if (this.battle.enemyCombo.count == move.combo.length) this.battle.enemyCombo.count = 0;
            } else {
                this.battle.enemyCombo = {
                    moveName: move.name[0],
                    count: 0
                }
            }
        } else if (this.battle.enemyCombo.moveName != '') {
            this.battle.enemyCombo = {
                moveName: '',
                count: 0
            }
        }

        const critical = this.criticalChance(move);
        const damage = useMove(move, this.battle.enemy, this.battle.player, bonusPower, critical);
        let message;

        if (critical == 1) {
            message = (lang == 0) ? `${this.battle.enemy.name} uses ${move.name[lang].toUpperCase()}` : (lang == 1) ? `${this.battle.enemy.name} usa ${move.name[lang].toUpperCase()}` : `${this.battle.enemy.name} 使用了 ${move.name[lang].toUpperCase()}`;
        } else {
            message = (lang == 0) ? `${this.battle.enemy.name} uses ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : (lang == 1) ? `${this.battle.enemy.name} usa ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : `${this.battle.enemy.name} 使用了 ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}`;
            this.showStatusAnimation('critical', 'enemy')
        }

        this.addBattleInfoMessage(message);

        if (move.fakeOut && this.battle.player.hp[0] == this.battle.player.hp[1]) {
            this.showStatusAnimation('flinch', 'player');
            this.battle.playerCharge = 0;
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.slow) {
            this.showStatusAnimation('slow', 'player');
            this.battle.playerSlowed = move.slow;
        }

        if (move.autoStun) {
            this.showStatusAnimation('stun', 'enemy');
            this.setBattleBobAnimation(false, 'enemy'); 
            this.battle.enemySlowed = 0;
            this.battle.enemyStuned = move.autoStun;
        }
        
        if (move.stun && Math.random() < move.stunChance) {
            this.showStatusAnimation('stun', 'player');
            this.setBattleBobAnimation(false, 'player');
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = move.stun;
        }

        this.battle.player.changeHp(-damage)

        const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
        this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
        this.playerPokemonHealthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (this.battle.player.teamHpBar) {
            this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
            this.battle.player.teamHpBar.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (move.chargeBonus) {
            this.battle.enemyCharge += move.chargeBonus;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.pursuit) {
            this.battle.enemyCharge += (this.battle.playerCharge * 0.8);
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.restore) {
            this.battle.enemy.changeHp(Math.floor(damage * move.restore));
            const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
            this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.enemyPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (move.chargeOnKill && this.battle.player.hp[0] == 0) {
            this.battle.enemyCharge += move.chargeOnKill;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.restoreOnKill && this.battle.player.hp[0] == 0) {
            this.battle.enemy.changeHp(Math.floor(this.battle.enemy.hp[0] * move.restoreOnKill));
            const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
            this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.enemyPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (move.autoDamage) {
            let recoil = damage * move.autoDamage;
            if (recoil >= this.battle.enemy.hp[0]) recoil = this.battle.enemy.hp[0] - 1;

            this.battle.enemy.changeHp(-recoil);
            const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
            this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.enemyPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (this.battle.player.hp[0] <= 0) this.endBattle("enemy");
    }

    endBattle(winner) {

        playSound('faint', 'effect');
        this.setBattleBobAnimation(false, 'player');
        this.setBattleBobAnimation(false, 'enemy');  
        clearInterval(this.battle.loop);
        this.battle.loop = null;

        if (winner === "player") {
            //test
            this.streak++;
            this.battle.enemyCharge = 0;
            this.enemyPokemonChargeBarProgress.style.width = '0%';
            this.playerPokemonChargeBarProgress.style.width =`${Math.min(100, this.battle.playerCharge)}%`;

            if (this.streak == 100 && !this.main.player.achievement[42].status) {
                this.main.player.achievement[42].status = true;
                this.main.player.unlockAchievement(42);
            }

            if (this.streak == 500 && !this.main.player.achievement[43].status) {
                this.main.player.achievement[43].status = true;
                this.main.player.unlockAchievement(43);
            }

            if (this.streak == 1000 && !this.main.player.achievement[44].status) {
                this.main.player.achievement[44].status = true;
                this.main.player.unlockAchievement(44);
            }

            if (this.battle.enemy.specie.n === 93 && this.main.inventory.searchItem('urn')) {
                this.main.inventory.removeItem(this.main.inventory.searchItem('urn'));
                this.main.inventory.addItem(item.key.urnHaunter, 1);
            }
            //test

            this.updateEggs();
            if (this.travel) this.updateTravel();
            this.tryCapture();

            const goldBase = this.battle.enemy.specie.gold;
            const goldMax = Math.floor(goldBase * 2.2); 
            const mysticGoldBonus = this.main.player.mysticCharm ? 2 : 1;
            const amuletBonus = this.main.player.amuletCoin ? 2 : 1;

            let goldEarn = Math.floor(Math.random() * (goldMax - goldBase + 1)) + goldBase + Math.ceil(this.battle.enemy.lvl / 1.5);

            if (this.main.player.region != 2) goldEarn += (this.main.player.badges.length * 1.5);
            else if (this.main.inventory.item['lithicStone']) goldEarn += ((this.main.inventory.item['lithicStone'].amount * 5) + 15);
    
            if (this.battle.enemy.lvl > 10) goldEarn += 4;
            if (this.battle.enemy.lvl > 20) goldEarn += 13;
            if (this.battle.enemy.lvl > 30) goldEarn += 25;
            if (this.battle.enemy.lvl > 40) goldEarn += 30;
            if (this.battle.enemy.lvl > 50) goldEarn += 41;
            if (this.battle.enemy.lvl > 55) goldEarn += 55;
            if (this.battle.enemy.lvl > 60) goldEarn += 58;
            if (this.battle.enemy.lvl > 65) goldEarn += 64;

            goldEarn = Math.floor(goldEarn * amuletBonus * mysticGoldBonus);

            if (this.travel == undefined) goldEarn = Math.floor(goldEarn * 1.3);

            if (this.streak > 100) goldEarn = Math.ceil(goldEarn * 0.9);
            if (this.streak > 200) goldEarn = Math.ceil(goldEarn * 0.8);
            if (this.streak > 500) goldEarn = Math.ceil(goldEarn * 0.8);
            if (this.streak > 1000) goldEarn = Math.ceil(goldEarn * 0.8);
            if (this.streak > 2000) goldEarn = Math.ceil(goldEarn * 0.7);

            this.main.player.changeGold(goldEarn);
            this.showGoldAnimation(goldEarn);

            const expBase = Math.floor(this.battle.enemy.specie.exp * this.battle.enemy.lvl * 0.3) + 10;
            const charmBonus = this.main.player.expCharm ? 1.75 : 1;
            const mysticExpBonus = this.main.player.mysticCharm ? 2 : 1;
            let lvlExpBonus = 1;
            if (this.battle.enemy.lvl > 40) lvlExpBonus = 1.25;
            if (this.battle.enemy.lvl > 50) lvlExpBonus = 1.5;
            if (this.battle.enemy.lvl > 60) lvlExpBonus = 2;

            let expEarn = Math.ceil(expBase * charmBonus * mysticExpBonus * lvlExpBonus);

            if (this.expShareActive) {
                expEarn = Math.floor(expEarn * 0.5);
                this.main.team.pokemon.forEach((pokemon, i) => { 
                    if (pokemon.hp[0] > 0) {
                        pokemon.exp[0] += expEarn;  
                        if (pokemon.exp[0] > pokemon.exp[1]) pokemon.exp[0] = pokemon.exp[1]; 
                        const expPercent = (pokemon.exp[0] / pokemon.exp[1]) * 100;
                        this.teamPokemon[i].expBarProgress.style.width = `${Math.max(0, expPercent)}%`;
                        this.teamPokemon[i].expBarProgress.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';
                    }       
                })
            } else {
                this.battle.player.exp[0] += expEarn;
                if (this.battle.player.exp[0] > this.battle.player.exp[1]) this.battle.player.exp[0] = this.battle.player.exp[1];
                const expPercent = (this.battle.player.exp[0] / this.battle.player.exp[1]) * 100;
                this.battle.player.teamExpBar.style.width = `${Math.max(0, expPercent)}%`;
                this.battle.player.teamExpBar.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';
            }

            if (JSON.parse(window.localStorage.getItem("data")).config.autoLevel) { // AUTO LVL UP
                const lang = this.main.lang;
                this.main.team.pokemon.forEach((pokemon, i) => { 
                    if (pokemon.exp[0] === pokemon.exp[1] && pokemon.lvl < this.main.player.levelCap) {
                        let cost = Math.floor(Math.pow(pokemon.lvl * 1.8, 1.7));

                        if (pokemon.lvl < 100 && this.main.player.gold >= cost) {
                            this.main.player.changeGold(-cost);
                            pokemon.lvlUp();
                            let textCapture = [`${pokemon.name} Level Up (-$${cost})`, `${pokemon.name} Sube de nivel (-$${cost})`];
                            this.main.notification.display(textCapture[lang]);
                            if (!this.main.player.achievement[25].status && pokemon.lvl >= 25)  {
                                this.main.player.achievement[25].status = true;
                                this.main.player.unlockAchievement(25);
                            } 
                            if (!this.main.player.achievement[26].status && pokemon.lvl >= 50)  {
                                this.main.player.achievement[26].status = true;
                                this.main.player.unlockAchievement(26);
                            } 
                            if (!this.main.player.achievement[27].status && pokemon.lvl >= 75)  {
                                this.main.player.achievement[27].status = true;
                                this.main.player.unlockAchievement(27);
                            } 
                            if (!this.main.player.achievement[28].status && pokemon.lvl == 100)  {
                                this.main.player.achievement[28].status = true;
                                this.main.player.unlockAchievement(28);
                            }

                            if (this.battle.player == pokemon) {
                                this.playerPokemonHealthBarProgress.style.width = `100%`;
                                this.playerPokemonHealthBarProgress.style.backgroundColor = '#4CAF50';
                            }

                            this.teamPokemonContainer.innerHTML = '';
                            this.teamPokemon = [];
                            this.main.team.pokemon.forEach((pokemon, i) => { 
                                this.updateTeamPokemon(pokemon, i);   
                            }) 
                        }
                        const expPercent = (this.battle.player.exp[0] / this.battle.player.exp[1]) * 100;         
                    }       
                })
            }
    
            this.removePokemonElements('enemy');
            this.animateSprite(this.battle.player, 'player', 'idle');
        } else {
            //test
            this.battle.playerCharge = 0;
            this.playerPokemonChargeBarProgress.style.width = '0%';
            this.enemyPokemonChargeBarProgress.style.width =`${Math.min(100, this.battle.enemyCharge)}%`
            //test

            // mostarr pokemon debilitado en grupo
            this.main.team.pokemon.forEach((pokemon, pos) => { 
                if (pokemon.hp[0] == 0)  {
                    this.teamPokemon[pos].style.filter = 'grayscale(100%)';
                    this.teamPokemon[pos].style.pointerEvents = 'none'
                }
            })

            this.removePokemonElements('player');
            this.animateSprite(this.battle.enemy, 'enemy', 'idle');

            this.checkDefeated();
        }

        if (winner === "player" && !this.capturing) this.nextBattle();
    }

    nextBattle() {
        this.denySwap = true;
        setTimeout(() => {
            this.denySwap = false;
            this.capturing = false;
            this.enemy = this.generateRoutePokemon();
            this.battle.enemy = this.enemy;
            this.displayPokemon(this.enemy, 'enemy');
        }, 800);
    }

    tryCapture() {
        if (this.captureActive == -1) return;
        if (this.captureActive == 1 && !this.battle.enemy.shiny) return;
        if (this.battle.enemy.lvl > this.main.player.levelCap && !this.battle.enemy.shiny) return;

        let charmBonus = this.main.player.catchingCharm ? 1.5 : 0;
        let initBonus = (this.battle.enemy.lvl < 4) ? 5 : 0;
        let pokeballRate = this.main.player.pokeball.bonusRate;
        let pokemonRate = this.battle.enemy.specie.catchRate;
        let capture = (pokemonRate * pokeballRate) + pokemonRate + charmBonus + initBonus; 

        if (this.data.safari != undefined) {
            capture += 20;
        }

        let captureTry = Math.floor(Math.random() * 100);

        if (captureTry <= capture || this.battle.enemy.shiny) { 

            if (JSON.parse(window.localStorage.getItem("data")).config.captureWindow) { // SKIP DE CAPTURA
                const lang = this.main.lang;
                this.main.pokedex.catchPokemon(this.battle.enemy.specie.n);
                if (this.battle.enemy.shiny) this.main.pokedex.shinyPokemon(this.battle.enemy.specie.n);

                this.battle.enemy.hp[0] = this.battle.enemy.hp[1];
                if (this.main.team.pokemon.length < 6 ) {
                    this.main.team.addPokemon(this.battle.enemy);

                    this.teamPokemonContainer.innerHTML = '';
                    this.teamPokemon = [];
                    this.main.team.pokemon.forEach((pokemon, i) => { 
                        this.updateTeamPokemon(pokemon, i);   
                    })
                } else {
                    this.main.box.storePokemon(this.battle.enemy);
                }

                if (this.battle.enemy.specie.n === 201) this.captureUnown();
                let textCapture = [`You caught a ${this.battle.enemy.name}`, `Has capturado un ${this.battle.enemy.name}`];

                this.main.notification.display(textCapture[lang]);
                return;
            }

            // TEST REPETIDO PARA FALSO TORTAZO
            // Detener el bucle de la batalla
            this.setBattleBobAnimation(false, 'player'); 
            this.setBattleBobAnimation(false, 'enemy');   
            clearInterval(this.battle.loop);
            this.battle.loop = null;

            this.battle.playerCharge = 0;
            this.battle.enemyCharge = 0;
            this.playerPokemonChargeBarProgress.style.width = '0%';
            this.enemyPokemonChargeBarProgress.style.width = '0%';

            this.capturing = true;
            this.captureData.open(this.battle.enemy);
        }
    }
    
    captureUnown() {
        if (this.main.player.unownForms.includes(this.battle.enemy.form)) return;
        this.main.player.unownForms.push(this.battle.enemy.form);
        this.main.player.achievement[23].progress[0]++;
        if (this.main.player.achievement[23].progress[0] == this.main.player.achievement[23].progress[1]) {
            this.main.player.achievement[23].status = true;
            this.main.player.unlockAchievement(23);
        }
    }

    removePokemonElements(pos) {
        const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;

        if (pos === 'player') {
            for (let i = 0; i < 2; i++) {
                this.moves[i].style.display = 'none';
                this.movesComboContainer[i].style.display = 'none';
            }
        }

        const sprite = target.querySelector('.route-pokemon-animated-sprite');
        if (sprite) {
            target.removeChild(sprite);
        }

        const healthBarContainer = target.querySelector('.route-pokemon-health-bar-container');
        if (healthBarContainer) {
            target.removeChild(healthBarContainer);
        }

        const chargeBarContainer = target.querySelector('.route-pokemon-charge-bar-container');
        if (chargeBarContainer) {
            target.removeChild(chargeBarContainer);
        }
    }

    addBattleInfoMessage(messageText) {
        const messageElement = new Element(this.battleInfoContainer, { 
            className: 'route-battle-info-message', 
            text: messageText 
        }).element;

        messageElement.style.opacity = '1';
        messageElement.style.transition = 'opacity 0.5s';

        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.parentNode.removeChild(messageElement);
                }
            }, 500); 
        }, 2000);
    }

    setBattleBobAnimation(active, position) {
        if (position === 'player') {
            const playerSprite = this.playerPokemon.querySelector('.route-pokemon-animated-sprite');
            if (playerSprite) {
                if (active){
                    playerSprite.classList.add('route-pokemon-bob');
                    this.animateSprite(this.battle.player, 'player', 'attack');
                } 
                else {
                    playerSprite.classList.remove('route-pokemon-bob');
                    this.animateSprite(this.battle.player, 'player', 'idle');
                }
            }
        } else if (position === 'enemy') {
            const enemySprite = this.enemyPokemon.querySelector('.route-pokemon-animated-sprite');
            if (enemySprite) {
                if (active) {
                    enemySprite.classList.add('route-pokemon-bob-enemy');
                    this.animateSprite(this.battle.enemy, 'enemy', 'attack');
                }
                else {
                    enemySprite.classList.remove('route-pokemon-bob-enemy');
                    this.animateSprite(this.battle.enemy, 'enemy', 'idle');
                }
            }
        }
    }

    showGoldAnimation(amount, pay = false) {
        playSound('purchase', 'ui')
        const goldPopup = document.createElement('div');
        goldPopup.className = 'stroke';
        goldPopup.innerText = `+${amount}${text.route.goldUnit[this.main.lang]}`;

        goldPopup.style.position = 'absolute';
        goldPopup.style.left = '40%';
        goldPopup.style.top = (pay) ? '30%' : '35%';
        goldPopup.style.transform = 'translate(-50%, -40%)';
        goldPopup.style.fontSize = '12px';
        goldPopup.style.color = 'var(--yellow)';
        goldPopup.style.fontWeight = 'bold';
        goldPopup.style.pointerEvents = 'none';
        goldPopup.style.zIndex = 1000;
        goldPopup.style.opacity = 1;
        goldPopup.style.transition = 'transform 2s ease-out, opacity 2s ease-out';

        this.container.appendChild(goldPopup);

        this.container.appendChild(goldPopup);
        goldPopup.offsetHeight; 
        goldPopup.style.transform = 'translate(-50%, -150%)';
        goldPopup.style.opacity = 0;

        setTimeout(() => {
            if (goldPopup && goldPopup.parentNode) {
                goldPopup.parentNode.removeChild(goldPopup);
            }
        }, 2000);
    }

    showStatusAnimation(status, target) {
        const statusPopup = document.createElement('div');
        statusPopup.className = 'stroke';
        const lang = this.main.lang;

        statusPopup.style.position = 'absolute';
        statusPopup.style.top = '40%';
        if (target == 'player') statusPopup.style.left = '40%';
        else statusPopup.style.left = '60%';

        statusPopup.style.transform = 'translate(-50%, -50%)';
        statusPopup.style.fontSize = '10px';
        statusPopup.style.pointerEvents = 'none';
        statusPopup.style.zIndex = 1000;
        statusPopup.style.opacity = 1;
        statusPopup.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        statusPopup.style.fontWeight = 'bold';
       
        switch(status) {
            case 'slow':
                statusPopup.style.color = 'var(--blue)';
                statusPopup.innerText = text.route.statusSlowed[lang];
                break;
            case 'stun':
                statusPopup.style.color = 'var(--yellow)';
                statusPopup.innerText = text.route.statusStuned[lang];
                break;
            case 'flinch':
                statusPopup.style.color = 'var(--red)';
                statusPopup.innerText = text.route.statusFlinched[lang];
                break;
            case 'critical':
                statusPopup.style.color = 'var(--orangeRed)';
                statusPopup.innerText = '!';
        }

        this.container.appendChild(statusPopup);

        this.container.appendChild(statusPopup);
        statusPopup.offsetHeight; 
        statusPopup.style.transform = 'translate(-50%, -150%)';
        statusPopup.style.opacity = 0;

        setTimeout(() => {
            if (statusPopup && statusPopup.parentNode) {
                statusPopup.parentNode.removeChild(statusPopup);
            }
        }, 1000);
    }

    updateEggs() {
        let inventory = this.main.inventory.item;

        Object.keys(inventory).forEach(key => {
            if (inventory[key]?.use?.effect === 'egg') {
                if (inventory[key].use.hatch[0] < inventory[key].use.hatch[1]) inventory[key].use.hatch[0]++;
            }
        })
    }

    checkDefeated() {
        let defeat = true;
        for (let i = 0; i < this.main.team.pokemon.length; i++) {
            const pokemon = this.main.team.pokemon[i];
            if (pokemon.hp[0] > 0) {
                defeat = false;
                if (this.autobattle) {
                    this.removePokemonElements('player');

                    this.battle.player = pokemon;
                    this.battle.player.teamHpBar = this.teamPokemon[i].healthBarProgress;
                    this.battle.player.teamExpBar = this.teamPokemon[i].expBarProgress;
                    this.battle.playerSlowed = 0;
                    this.battle.playerStuned = 0;

                    this.displayPokemon(pokemon, 'player');
                    return; 
                }
            }
        }
        if (defeat) this.defeatedData.open();
    }

    open(routeData) {
        super.open(true); 
        this.main.menu.available = false;
        this.streak = 0;
        this.travel = null;
        this.capturing = false;
        this.data = routeData;
        this.battleInfoContainer.innerHTML = '';
        
        if (routeData.travel) this.travel = JSON.parse(JSON.stringify(routeData.travel));
        if (this.travel && this.main.inventory.searchItem('runningShoes')) this.travel.battles[1] = Math.floor(this.travel.battles[1] * 0.75);

        this.update();
    }

    close(mute = false) {
        super.close();
        if (!mute) playSound('close', 'ui');
        if (this.battle.loop) {
            clearInterval(this.battle.loop);
            this.battle.loop = null;
        }

        ['player', 'enemy', '玩家'].forEach(pos => {
            if (this.spriteInterval[pos]) {
                clearInterval(this.spriteInterval[pos]);
                this.spriteInterval[pos] = null;
            }
            const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;
            target.innerHTML = '';
        });

        this.battle = {
            player: null,
            enemy: null,
            loop: null,
            moveSelected: 0,
            chargeMax: 100,
            playerCharge: 0,
            enemyCharge: 0,
            playerRatio: 0,
            enemyRatio: 0,
            //TEST
            playerSlowed: 0,
            enemySlowed: 0,
            playerStuned: 0,
            enemyStuned: 0,
            playerCombo: {
                moveName: '', 
                count: 0      
            },
            enemyCombo: {
                moveName: '', 
                count: 0     
            }
        };

        this.main.menu.available = true;
    }
}

class RoutePokemonCaptured extends Popup {
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
        const lang = this.component.main.lang;
        this.promp = new Element(this.popup, { className: 'popup-route-capture-prompt' }).element;
        this.prompBottom = new Element(this.popup, { className: 'popup-route-capture-prompt-bottom' }).element;

        this.pokemonContainer = new Element(this.popup, { className: 'popup-route-capture-pokemon-container' }).element;
        this.sprite = new Element(this.pokemonContainer, { className: 'popup-route-capture-pokemon-sprite' }).element;
        this.name = new Element(this.pokemonContainer, { className: 'popup-route-capture-pokemon-name stroke' }).element;
        this.level = new Element(this.pokemonContainer, { className: 'popup-route-capture-pokemon-level stroke' }).element;
        
        this.buttonCancel = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-cancel stroke', text: text.misc.cancel[lang] }).element;
        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;

        this.buttonCancel.addEventListener('click', () => this.close());
        this.buttonAccept.addEventListener('click', () => this.capture());

        this.buttonCancel.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonAccept.addEventListener('mouseover', () => playSound('hover0', 'ui'));
    }

    update() {
        const lang = this.component.main.lang;

        const prompt = [`Do you want ${this.pokemon.name} to join your party?`, `¿Quieres que ${this.pokemon.name} se una a tu grupo?`]

        this.promp.innerText = prompt[lang];
        this.prompBottom.innerText = text.route.capturePromptBottom[lang];
        this.name.innerText = this.pokemon.name;
        this.level.innerText = `${text.stats.short.level[lang]} ${this.pokemon.lvl}`;

        this.sprite.innerHTML = "";
        const sprite = document.createElement('img');
        sprite.src = this.pokemon.image;
        sprite.className = 'route-team-pokemon-sprite';
        this.sprite.appendChild(sprite);
    }

    open(pokemon) {
        playSound('obtain', 'ui');
        super.open(); 
        this.pokemon = pokemon;
        this.update();
    }

    capture() {
        this.component.main.pokedex.catchPokemon(this.pokemon.specie.n);
        if (this.pokemon.shiny) this.component.main.pokedex.shinyPokemon(this.pokemon.specie.n);

        this.pokemon.hp[0] = this.pokemon.hp[1];
        if (this.component.main.team.pokemon.length < 6 ) {
            this.component.main.team.addPokemon(this.pokemon);

            this.component.teamPokemonContainer.innerHTML = '';
            this.component.teamPokemon = [];
            this.component.main.team.pokemon.forEach((pokemon, i) => { 
                this.component.updateTeamPokemon(pokemon, i);   
            })
        } else {
            this.component.main.box.storePokemon(this.pokemon);
        }

        if (this.pokemon.specie.n === 201) this.captureUnown();

        this.close();
    }

    captureUnown() {
        if (this.component.main.player.unownForms.includes(this.pokemon.form)) return;
        this.component.main.player.unownForms.push(this.pokemon.form);
        this.component.main.player.achievement[23].progress[0]++;
        if (this.component.main.player.achievement[23].progress[0] == this.component.main.player.achievement[23].progress[1]) {
            this.component.main.player.achievement[23].status = true;
            this.component.main.player.unlockAchievement(23);
        }
    }

    close() {
        playSound('click1', 'ui');
        super.close(); 
        this.component.nextBattle();
    }
}

class RouteDefeated extends Popup {
    constructor(component) {
        super(400, 300);
        this.component = component;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;
    }

    render() {
        const lang = this.component.main.lang;
        this.promp = new Element(this.popup, { className: 'popup-route-capture-prompt' }).element;
        this.prompBottom = new Element(this.popup, { className: 'popup-route-capture-prompt-bottom ' }).element;

        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;
        this.buttonAccept.style.right = '50%';
        this.buttonAccept.style.transform = 'translate(50%)';
        this.buttonAccept.addEventListener('click', () => this.close());
        this.buttonAccept.addEventListener('mouseover', () => playSound('hover0', 'ui'));

        this.sprite = new Element(this.popup, { className: 'popup-route-capture-pokemon-sprite' }).element;
        this.sprite.style.top = '45%';
        const sprite = document.createElement('img');
        sprite.src = './assets/images/misc/ghost.png';
        sprite.className = 'route-team-pokemon-sprite';
        this.sprite.appendChild(sprite);
    }

    update() {
        const lang = this.component.main.lang;

        this.promp.innerText = text.route.defeatedPrompt[lang];
        this.prompBottom.innerText = text.route.defeatedPromptBottom[lang];
    }

    open() {
        super.open(); 
        this.update();
    }

    close() {
        playSound('click1', 'ui');
        this.component.main.player.potion.charge[0] = this.component.main.player.potion.charge[1];
        this.component.main.team.pokemon.forEach(pokemon => {
            pokemon.hp[0] = pokemon.hp[1];
        });

        this.component.main.location.loadLocation(this.component.main.player.savedLocation);
        this.component.close(true);
        super.close(); 
    }
}