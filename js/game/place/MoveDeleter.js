import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { text } from '../../file/text.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { type } from '../data/pokemon/typeData.js';
import { item } from '../data/item/itemData.js';
import { playSound } from '../../file/audio.js';

const TITLE = ['MOVE DELETER', 'QUITA-MOVIMIENTOS', '遗忘招式导师']
const NO_DATA = ['NO DATA', 'SIN DATOS', '无数据'];

export class MoveDeleter extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.data;
        this.render();
        this.pokemonInfo = new MoveDeleterPokemon(this);
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
        this.container.style.backgroundImage = 'url("./assets/images/background/dojo.png")';
        this.container.style.imageRendering = 'pixelated';
        this.teamPokemonContainer = new Element(this.container, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];

    }

    update() {
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

        this.teamPokemon[pos].addEventListener('click', () => { 
           this.pokemonInfo.open(pokemon);
        });
    }

    open() {
        playSound('buttonB', 'ui');
    	super.open(true); 
        this.main.menu.available = false; 
	    this.update();
    }

    close() {
        playSound('close', 'ui');
        super.close();
        if (this.pokemonInfo.isOpen) this.pokemonInfo.close();
        this.main.menu.available = true;
    }
}

class MoveDeleterPokemon extends Popup {
    constructor(component) {
        super(400, 300);
        this.component = component;
        this.pokemon;
        this.movePos;
        this.move;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;    
    }

    render() {
        const lang = this.component.main.lang;

        this.pokemonContainer = new Element(this.popup, { className: 'dojo-pokemon-container' }).element;
        this.icon = new Element(this.pokemonContainer, { className: 'dojo-pokemon-icon' }).element;
        this.name = new Element(this.pokemonContainer, { className: 'dojo-pokemon-name' }).element;

        this.buttonCancel = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-cancel stroke', text: text.misc.cancel[lang] }).element;
        this.buttonUnlearn = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.unlearn[lang] }).element;

        this.movePrev = new Element(this.popup, { className: 'dojo-evolution-arrow dojo-evolution-prev stroke', text: '<' }).element;
        this.moveNext = new Element(this.popup, { className: 'dojo-evolution-arrow dojo-evolution-next stroke', text: '>' }).element;

        this.cost = new Element(this.popup, { className: 'move-deleter-cost',  text: text.moveDeleter.cost[lang].toUpperCase() }).element;
        this.prompt = new Element(this.popup, { className: 'move-deleter-prompt',  text: text.moveDeleter.error[lang].toUpperCase() }).element;

        this.moveContainer = new Element(this.popup, { className: 'move-deleter-container' }).element;
        this.moveName = new Element(this.moveContainer, { className: 'move-deleter-name stroke' }).element;
        this.moveDescription = new Element(this.moveContainer, { className: 'move-deleter-description stroke' }).element;

        this.movePrev.addEventListener('click', () => this.changeMove(-1))
        this.moveNext.addEventListener('click', () => this.changeMove(1))
        this.buttonCancel.addEventListener('click', () => this.close());
        this.buttonUnlearn.addEventListener('click', () => this.unlearn());

        this.movePrev.addEventListener('mouseover', () => playSound('hover1', 'ui'));
        this.moveNext.addEventListener('mouseover', () => playSound('hover1', 'ui'));
        this.buttonCancel.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonUnlearn.addEventListener('mouseover', () => playSound('hover0', 'ui'));
    }

    refresh() {
        this.movePrev.style.display = 'none';
        this.moveNext.style.display = 'none';
        this.buttonUnlearn.style.filter = 'revert-layer';
        this.buttonUnlearn.style.pointerEvents = 'all';
        this.cost.style.display = 'none';
        this.prompt.style.display = 'none';
        this.moveContainer.style.display = 'none';
        this.moveName.innerHTML = "";
        this.moveDescription.innerHTML = "";
    }

    update() {
        const lang = this.component.main.lang;
        this.refresh();

        this.name.innerText = this.pokemon.name;
        this.icon.style.backgroundImage = `url("${this.pokemon.sprite.base}")`;
        
        if (this.pokemon.moves.length == 1 ) {
            this.buttonUnlearn.style.filter = 'brightness(0.8)';
            this.buttonUnlearn.style.pointerEvents = 'none'; 
            this.prompt.style.display = 'block';
        } else {
            if (this.component.main.player.gold < 100) {
                this.buttonUnlearn.style.filter = 'brightness(0.8)';
                this.buttonUnlearn.style.pointerEvents = 'none'; 
            }
            this.movePrev.style.display = 'block';
            this.moveNext.style.display = 'block';
            this.cost.style.display = 'block';
            this.moveContainer.style.display = 'block';
            this.displayMove();
        }
    }

    unlearn() {
        this.component.main.player.changeGold(-100);
        playSound('purchase', 'ui');
        const index = this.pokemon.moves.indexOf(this.move);
        if (index !== -1) {
            this.pokemon.moves.splice(index, 1); 
        }

        this.close(true);
    }

    changeMove(pos) {
        playSound('option', 'ui');
        this.movePos += pos;
        if (this.movePos < 0) this.movePos = this.pokemon.moves.length - 1;
        else if (this.movePos == this.pokemon.moves.length) this.movePos = 0;
        this.selectMove();
    }

    selectMove() {
        this.move = this.pokemon.moves[this.movePos];
        this.update();
    }

    displayMove() {
        const lang = this.component.main.lang;
        this.moveName.innerHTML = this.move.name[lang].toUpperCase();
        this.moveDescription.innerHTML = (this.move.description[lang] || this.move.description[0]);
    }

    open(pokemon) {
        playSound('click1', 'ui');
        super.open(); 
        this.pokemon = pokemon;
        this.movePos = 0;
        this.selectMove();
    }

    close(mute = false) {
        if (!mute) playSound('close', 'ui');
        super.close()
    }
}