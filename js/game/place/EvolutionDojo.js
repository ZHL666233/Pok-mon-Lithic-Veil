import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { text, formatNumberWithCommas } from '../../file/text.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { type } from '../data/pokemon/typeData.js';
import { item } from '../data/item/itemData.js';
import { playSound } from '../../file/audio.js';

const TITLE = ['EVOLUTION DOJO', 'DOJO EVOLUCIÓN', '进化道场']
const NO_DATA = ['NO DATA', 'SIN DATOS', '无数据'];

export class EvolutionDojo extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.data;
        this.render();
        this.pokemonInfo = new EvolutionDojoPokemon(this);
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
        this.container.style.imageRendering = 'pixelated';
        this.container.style.backgroundImage = 'url("./assets/images/background/dojo.png")';

        this.teamPokemonContainer = new Element(this.container, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];
    }

    update() {
        this.main.goldUI.innerText = `$${formatNumberWithCommas(this.main.player.gold)}`; 
    	this.teamPokemonContainer.innerHTML = '';
        this.teamPokemon = [];
        this.main.team.pokemon.forEach((pokemon, i) => { 
            this.updateTeamPokemon(pokemon, i);   
        })
    }

    updateTeamPokemon(pokemon, pos) {
        this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
        this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
        this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `Lv. ${pokemon.lvl}` }).element;

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

        this.teamPokemon[pos].addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
        this.teamPokemon[pos].addEventListener('click', () => { 
           this.pokemonInfo.open(pokemon);
        });
    }

    open() {
        playSound('buttonB', 'ui');
    	super.open(true); 
        this.main.goldUI.style.display = 'block';
        this.main.menu.available = false; 
	    this.update();
    }

    close() {
        playSound('close', 'ui');
        super.close();
        this.main.goldUI.style.display = 'none';
        if (this.pokemonInfo.isOpen) this.pokemonInfo.close();
        this.main.menu.available = true;
    }
}

class EvolutionDojoPokemon extends Popup {
    constructor(component) {
        super(400, 300);
        this.component = component;
        this.pokemon;
        this.evolutionPos;
        this.evolution;
        this.canEvolve;

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;
        this.component = component;
       
        this.render();
    }

    render() {
        const lang = this.component.main.lang;

        this.backgroundPokemonActual = new Element(this.popup, { className: 'dojo-background-pokemon dojo-background-pokemon-actual' }).element;
        this.backgroundPokemonEvolution = new Element(this.popup, { className: 'dojo-background-pokemon dojo-background-pokemon-evolution' }).element;

        this.pokemonContainer = new Element(this.popup, { className: 'dojo-pokemon-container' }).element;
        this.icon = new Element(this.pokemonContainer, { className: 'dojo-pokemon-icon' }).element;
        this.name = new Element(this.pokemonContainer, { className: 'dojo-pokemon-name' }).element;

        this.evolutionContainer = new Element(this.popup, { className: 'dojo-evolution-container' }).element;
        this.evolutionName = new Element(this.evolutionContainer, { className: 'dojo-evolution-name stroke' }).element;

        this.evolutionConditionContainer = new Element(this.evolutionContainer, { className: 'dojo-evolution-condition-container' }).element;
        this.evolutionCondition = [];
        this.evolutionConditionLabel = [];
        this.evolutionConditionValue = [];

        this.evolutionPrev = new Element(this.popup, { className: 'dojo-evolution-arrow dojo-evolution-prev stroke', text: '<' }).element;
        this.evolutionNext = new Element(this.popup, { className: 'dojo-evolution-arrow dojo-evolution-next stroke', text: '>' }).element;
        this.evolutionPrev.style.top = '125px'
        this.evolutionNext.style.top = '125px'

        this.buttonCancel = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-cancel stroke', text: text.misc.cancel[lang] }).element;
        this.buttonEvolve = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.evolve[lang] }).element;

        this.evolutionPrev.addEventListener('click', () => this.changeEvolution(-1))
        this.evolutionNext.addEventListener('click', () => this.changeEvolution(1))
        this.buttonCancel.addEventListener('click', () => this.close());
        this.buttonEvolve.addEventListener('click', () => this.evolve());

        this.evolutionPrev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
        this.evolutionNext.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
        this.buttonCancel.addEventListener('mouseenter', () => { playSound('hover0', 'ui') });
        this.buttonEvolve.addEventListener('mouseenter', () => { playSound('hover0', 'ui') });
    }

    refresh() {
        this.canEvolve = true;
        this.buttonEvolve.style.pointerEvents = 'revert-layer';
        this.buttonEvolve.style.filter = 'revert-layer';
        this.evolutionPrev.style.display = 'none';
        this.evolutionNext.style.display = 'none';
        this.backgroundPokemonActual.style.backgroundImage = 'revert-layer';
        this.backgroundPokemonEvolution.style.backgroundImage = 'revert-layer';
        this.evolutionName.innerText = "";
        this.evolutionConditionContainer.innerHTML = "";
        this.evolutionCondition = [];
        this.evolutionConditionLabel = [];
        this.evolutionConditionValue = [];
    }

    update() {
        const lang = this.component.main.lang;
        this.refresh();

        this.name.innerText = this.pokemon.name;
        this.icon.style.backgroundImage = `url("${this.pokemon.sprite.base}")`;
        
        this.backgroundPokemonActual.style.backgroundImage = `url("${this.pokemon.image}")`;
        
        if (this.evolution) {
            this.backgroundPokemonEvolution.style.backgroundImage = `url("${pokemon[this.evolution.pokemon].image}")`;
            this.evolutionName.innerText = this.evolution.pokemon.toUpperCase();

            this.displayCondition();

            if (this.pokemon.specie.evolution.length > 1) {
                this.evolutionPrev.style.display = 'block';
                this.evolutionNext.style.display = 'block';
            }
        } else {
            this.canEvolve = false;
            this.buttonEvolve.style.pointerEvents = 'none';
            this.buttonEvolve.style.filter = 'brightness(0.8)';
            this.evolutionName.innerText = NO_DATA[lang];
        }
    }

    changeEvolution(pos) {
        playSound('option', 'ui');
        this.evolutionPos += pos;
        if (this.evolutionPos < 0) this.evolutionPos = this.pokemon.specie.evolution.length - 1;
        else if (this.evolutionPos == this.pokemon.specie.evolution.length) this.evolutionPos = 0;
        this.selectEvolution();
    }

    selectEvolution() {
        this.evolution = this.pokemon.specie.evolution[this.evolutionPos];
        this.update();
    }

    displayCondition() {
        const lang = this.component.main.lang;

        Object.keys(this.evolution.condition).forEach((key, i) => {
            this.evolutionCondition[i] = new Element(this.evolutionConditionContainer, { className: 'dojo-evolution-condition stroke' }).element;
            this.evolutionConditionLabel[i] = new Element(this.evolutionCondition[i], { className: 'dojo-evolution-condition-label' }).element;
            this.evolutionConditionValue[i] = new Element(this.evolutionCondition[i], { className: 'dojo-evolution-condition-value' }).element;

            switch(key) {
                case 'level':
                    this.evolutionConditionLabel[i].innerText = text.stats.level[lang];
                    this.evolutionConditionValue[i].innerText = this.evolution.condition[key];
                    (this.pokemon.lvl >= this.evolution.condition[key]) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'move':
                    this.evolutionConditionLabel[i].innerText = text.stats.move[lang];
                    this.evolutionConditionValue[i].innerText = type[this.evolution.condition[key]].name[lang].toUpperCase();
                    if (
                        JSON.stringify(this.pokemon.moves[0]?.type) == JSON.stringify(type[this.evolution.condition[key]]) || 
                        JSON.stringify(this.pokemon.moves[1]?.type) == JSON.stringify(type[this.evolution.condition[key]])) {
                        this.checkCondition(i, true);
                    }
                    else this.checkCondition(i, false);
                    break;
                case 'atk':
                    this.evolutionConditionLabel[i].innerText = text.stats.atk[lang];
                    this.evolutionConditionValue[i].innerText = `+${this.evolution.condition[key]}`;
                    (this.pokemon.stat['atk'] > this.evolution.condition[key]) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'spa':
                    this.evolutionConditionLabel[i].innerText = text.stats.spa[lang];
                    this.evolutionConditionValue[i].innerText = `+${this.evolution.condition[key]}`;
                    (this.pokemon.stat['spa'] > this.evolution.condition[key]) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'def':
                    this.evolutionConditionLabel[i].innerText = text.stats.def[lang];
                    this.evolutionConditionValue[i].innerText = `+${this.evolution.condition[key]}`;
                    (this.pokemon.stat['def'] > this.evolution.condition[key]) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'spe':
                    this.evolutionConditionLabel[i].innerText = text.stats.spe[lang];
                    this.evolutionConditionValue[i].innerText = `+${this.evolution.condition[key]}`;
                    (this.pokemon.stat['spe'] > this.evolution.condition[key]) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'item':
                    this.evolutionConditionLabel[i].innerText = text.stats.item[lang];
                    this.evolutionConditionValue[i].innerText = item.consumable[this.evolution.condition[key]].name[lang].toUpperCase();

                    (this.component.main.inventory.searchItem(this.evolution.condition[key])) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'time':
                    this.evolutionConditionLabel[i].innerText = text.misc.time[lang];
                    this.evolutionConditionValue[i].innerText = text.misc[this.evolution.condition[key]][lang].toUpperCase();

                    (this.isNight() && this.evolution.condition[key] == 'night' || !this.isNight() && this.evolution.condition[key] == 'day') ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
                case 'cost':
                    this.evolutionConditionLabel[i].innerText = text.misc.cost[lang];
                    this.evolutionConditionValue[i].innerText = `$${formatNumberWithCommas(this.evolution.condition[key])}`;
                    (this.component.main.player.gold >= this.evolution.condition[key]) ? this.checkCondition(i, true) : this.checkCondition(i, false);
                    break;
            }
        })
    }

    isNight() {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 18 || hour < 6;
    }

    checkCondition(i, bool) {
        if (bool) {
            this.evolutionCondition[i].style.color = `var(--green)`;
        } else {
            this.evolutionCondition[i].style.color = `#e63f1e`;
            this.canEvolve = false;
            this.buttonEvolve.style.pointerEvents = 'none';
            this.buttonEvolve.style.filter = 'brightness(0.8)';
        }
    }

    evolve() {
        playSound('obtain', 'ui');

        Object.keys(this.evolution.condition).forEach((key, i) => {
            switch(key) {
                case 'item':
                    this.component.main.inventory.removeItem(this.component.main.inventory.searchItem(this.evolution.condition[key]));
                    break;
                case 'cost':
                    this.component.main.player.changeGold(-this.evolution.condition[key])
                    break;
            }
        })
        
        this.pokemon.evolve(this.evolutionPos);
        this.component.update();

        this.component.main.pokedex.seePokemon(this.pokemon.specie.n);
        this.component.main.pokedex.catchPokemon(this.pokemon.specie.n);
        if (this.pokemon.shiny) this.component.main.pokedex.shinyPokemon(this.pokemon.specie.n);

        if (!this.component.main.player.achievement[29].status) {
            this.component.main.player.achievement[29].progress[0]++;
            if (this.component.main.player.achievement[29].progress[0] === this.component.main.player.achievement[29].progress[1]) {
                this.component.main.player.achievement[29].status = true;
                this.component.main.player.unlockAchievement(29);
            }
        }

        if (!this.component.main.player.achievement[30].status) {
            this.component.main.player.achievement[30].progress[0]++;
            if (this.component.main.player.achievement[30].progress[0] === this.component.main.player.achievement[30].progress[1]) {
                this.component.main.player.achievement[30].status = true;
                this.component.main.player.unlockAchievement(30);
            }
        }

        if (!this.component.main.player.achievement[31].status) {
            this.component.main.player.achievement[31].progress[0]++;
            if (this.component.main.player.achievement[31].progress[0] === this.component.main.player.achievement[31].progress[1]) {
                this.component.main.player.achievement[31].status = true;
                this.component.main.player.unlockAchievement(31);
            }
        }
        
        this.close(true);
    }

    open(pokemon) {
        playSound('click1', 'ui');
        super.open(); 
        this.pokemon = pokemon;
        if (this.pokemon.specie.evolution) {
            this.evolutionPos = 0;
            this.selectEvolution();
        }
        else {
            this.evolution = null;
            this.update();
        }
    }

    close(mute = false) {
        if (!mute) playSound('close', 'ui');
        super.close()
    }
}