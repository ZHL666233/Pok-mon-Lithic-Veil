import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { text } from '../../file/text.js';
import { saveData } from '../../file/data.js';
import { Pokemon } from '../manager/Pokemon.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { playSound } from '../../file/audio.js';

const TITLE = ['POKÉMON CENTER', 'CENTRO POKÉMON', '宝可梦中心'];
const BUTTON = ['heal', 'box', 'unionRoom'];
const STATS = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
const UNION_OPTION = ['strong', 'transmuted', 'shiny'];
const FILTER_LABEL = ['n', 'name', 'lvl', 'type', 'shiny'];

const UNION_POOL = [
    'bulbasaur', 'charmander', 'squirtle', 'caterpie', 'weedle', 'pidgey', 'rattata', 'spearow', 'ekans', 
    'sandshrew', 'nidoranm', 'nidoranf', 'clefairy', 'vulpix', 'zubat', 'oddish', 'paras', 'venonat', 'pikachu',
    'diglett', 'meowth', 'psyduck', 'mankey', 'growlithe', 'poliwag', 'abra', 'machop', 'bellsprout', 'tentacool',
    'geodude', 'ponyta', 'slowpoke', 'magnemite', 'farfetchd', 'doduo', 'seel', 'grimer', 'shellder', 'gastly',
    'onix', 'drowzee', 'krabby', 'voltorb', 'exeggcute', 'cubone', 'tyrogue', 'lickitung', 'koffing', 'rhyhorn',
    'tangela', 'horsea', 'goldeen', 'staryu', 'scyther', 'pinsir', 'magikarp',
    'ditto', 'eevee', 'porygon', 'omanyte', 'kabuto', 'dratini', 'jigglypuff',
    'chikorita', 'cyndaquil', 'totodile', 'sentret', 'hoothoot', 'ledyba', 'spinarak', 'chinchou', 'pichu', 'cleffa',
    'igglybuff', 'togepi', 'natu', 'mareep', 'marill', 'hoppip', 'aipom', 'sunkern', 'yanma', 'wooper', 'murkrow',
    'misdreavus', 'wobbuffet', 'girafarig', 'pineco', 'dunsparce', 'gligar', 'snubbull', 'qwilfish',
    'shuckle', 'sneasel', 'teddiursa', 'slugma', 'swinub', 'corsola', 'remoraid', 'delibird', 'smoochum',
    'houndour', 'phanpy', 'stantler', 'smeargle', 'miltank', 'larvitar', 'magby', 'elekid', 'sudowoodo'
]

const UNION_POOL_APACHAN = [
    'bulbasaur', 'charmander', 'squirtle', 'caterpie', 'weedle', 'pidgey', 'rattata', 'spearow', 'ekans', 
    'sandshrew', 'nidoranm', 'nidoranf', 'clefairy', 'vulpix', 'zubat', 'oddish', 'paras', 'venonat', 'pikachu',
    'diglett', 'meowth', 'psyduck', 'mankey', 'growlithe', 'poliwag', 'abra', 'machop', 'bellsprout', 'tentacool',
    'geodude', 'ponyta', 'slowpoke', 'magnemite', 'farfetchd', 'doduo', 'seel', 'grimer', 'shellder', 'gastly',
    'onix', 'drowzee', 'krabby', 'voltorb', 'exeggcute', 'cubone', 'tyrogue', 'lickitung', 'koffing', 'rhyhorn',
    'chansey', 'tangela', 'kangaskhan', 'horsea', 'goldeen', 'staryu', 'scyther', 'pinsir', 'tauros', 'magikarp',
    'lapras', 'ditto', 'eevee', 'porygon', 'omanyte', 'kabuto', 'aerodactyl', 'snorlax', 'dratini', 'jigglypuff',
    'chikorita', 'cyndaquil', 'totodile', 'sentret', 'hoothoot', 'ledyba', 'spinarak', 'chinchou', 'pichu', 'cleffa',
    'igglybuff', 'togepi', 'natu', 'mareep', 'marill', 'hoppip', 'aipom', 'sunkern', 'yanma', 'wooper', 'murkrow',
    'misdreavus', 'wobbuffet', 'girafarig', 'pineco', 'dunsparce', 'gligar', 'snubbull', 'qwilfish',
    'shuckle', 'heracross', 'sneasel', 'teddiursa', 'slugma', 'swinub', 'corsola', 'remoraid', 'delibird', 'smoochum',
    'mantine', 'skarmory', 'houndour', 'phanpy', 'stantler', 'smeargle', 'miltank', 'larvitar', 'magby', 'elekid', 'sudowoodo',
    'treecko', 'torchic', 'mudkip', 'poochyena', 'zigzagoon', 'wurmple', 'lotad', 'seedot', 'taillow', 'wingull',
    'ralts', 'surskit', 'shroomish', 'slakoth', 'nincada', 'whismur', 'makuhita', 'azurill', 'nosepass', 'skitty', 'aron',
    'gulpin', 'numel', 'spoink', 'spinda', 'trapinch','swablu', 'barboach', 'corphish', 'baltoy', 'lileep', 'anorith', 'mawile', 'sableye',
    'feebas', 'shuppet', 'duskull', 'snorunt', 'spheal', 'clamperl', 'torkoal', 'zangoose', 'seviper', 'lunatone',
    'solrock', 'castform', 'kecleon', 'absol', 'luvdisc','tropius', 'beldum', 'bagon', 'cacnea', 'meditite',
    'plusle', 'minun', 'volbeat', 'illumise', 'roselia', 'carvanha', 'wailmer', 'electrike'
]

export class PokeCenter extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.location;
        this.render();
        this.storageOpen = false;
        this.unionRoomOpen = false;
        this.storagePokemonSelected;

        this.sortFilter = {};

        this.pokemonURData = new UnionRoomPokemon(this);
    }

    render() {
        const lang = this.main.lang;

    	this.title = TITLE[this.main.lang];
        this.name.innerText = this.title;

    	this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = '#888';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '0px';
        this.container.style.overflow = 'hidden';
        this.container.style.backgroundSize = 'cover';
        this.container.style.backgroundPosition = 'center';
        this.container.style.backgroundImage = 'url("./assets/images/background/pokeCenter.png")';

        this.descriptionContainer = new Element(this.container, { className: 'poke-center-description-container' }).element;
        this.description = new Element(this.descriptionContainer, { className: 'poke-center-description' }).element;
        this.description.innerHTML = text.pokeCenter.description['default'][lang];
        
        this.buttonContainer = new Element(this.container, { className: 'poke-center-button-container' }).element;
        this.button = {};

        BUTTON.forEach((label) => {
            this.button[label] = new Element(this.buttonContainer, { className: 'poke-center-button stroke' }).element;
            this.button[label].innerText = text.pokeCenter[label][lang].toUpperCase();
            this.button[label].addEventListener('click', () => { this.buttonHandler(label) });
            this.button[label].addEventListener('mouseenter', () => { 
                playSound('hover0', 'ui');
                this.description.innerHTML = text.pokeCenter.description[label][lang];
            })   
        });

        this.buttonContainer.addEventListener('mouseleave', () => { 
            this.description.innerHTML = text.pokeCenter.description['default'][lang];
        })    

        this.storageScene = new Element(this.container, { className: 'poke-center-storage-scene' }).element;  

        this.storageBoxContainer = new Element(this.storageScene, { className: 'poke-center-storage-box-container' }).element; 
        this.storageBoxCase = new Element(this.storageBoxContainer, { className: 'poke-center-storage-box-case' }).element;  
        this.storageBoxSlot = [];

        this.storageInfoContainer = new Element(this.storageScene, { className: 'poke-center-storage-info-container' }).element; 
        this.storageInfoName = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-name stroke' }).element; 
        this.storageInfoLevel = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-level stroke' }).element; 
        this.storageInfoImage = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-image' }).element; 
        this.storageInfoType = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-type' }).element; 
        this.storageInfoStatContainer = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-stat-container stroke' }).element; 
        this.storageInfoStat = {};
        STATS.forEach(stat => {
            this.storageInfoStat[stat] = new Element(this.storageInfoStatContainer, { className: 'poke-center-storage-info-stat' }).element;
        })

        this.storageReleaseButton = new Element(this.storageInfoContainer, { className: 'poke-center-storage-release-button stroke', text: text.pokeCenter.storage.release[lang] }).element; 
        this.storageReleaseButton.addEventListener('click', () => { this.releasePokemon() })
        this.storageReleaseButton.addEventListener('mouseenter', () => { playSound('hover0', 'ui') });

        this.storageInfoMovesetContainer = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-moveset-container' }).element; 
        this.storageInfoMove = [];
        for (let i = 0; i < 2; i++) this.storageInfoMove[i] = new Element(this.storageInfoMovesetContainer, {}).element;

        this.storageInfoButtonSwap = new Element(this.storageInfoContainer, { className: 'poke-center-storage-info-stat-button-swap stroke' }).element; 
        this.storageInfoButtonSwap.addEventListener('click', () => { this.swapStoragePokemon() })
        this.storageInfoButtonSwap.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.storageFilterContainer = new Element(this.storageScene, { className: 'poke-center-storage-filter-container stroke' }).element;  
        this.storageFilterButton = {};

        FILTER_LABEL.forEach((label) => {
            this.storageFilterButton[label] = new Element(this.storageFilterContainer, { className: 'poke-center-storage-filter-button', text: text.pokeCenter.storage[label][lang]}).element; 
            this.storageFilterButton[label].addEventListener('click', () => { this.sortBy(label) });
            this.storageFilterButton[label].addEventListener('mouseenter', () => { playSound('hover4', 'ui') });
        })

        this.storageTeamContainer = new Element(this.storageScene, { className: 'poke-center-storage-team-container' }).element;  
        this.storageTeamSlot = [];
        for (let i = 0; i < 6; i++) {
            this.storageTeamSlot[i] = new Element(this.storageTeamContainer, { className: 'poke-center-storage-team-slot-disabled' }).element; 
            this.storageTeamSlot[i].addEventListener('click', () => { this.displayStoragePokemonInfo(this.main.team.pokemon[i], this.storageTeamSlot[i]) }) 
            this.storageTeamSlot[i].addEventListener('mouseenter', () => { playSound('hover4', 'ui') });
        }

        this.storageReturn = new Element(this.storageScene, { className: 'poke-center-storage-return stroke', text: text.misc.back[lang].toUpperCase() }).element;  
        this.storageReturn.addEventListener('click', () => { this.closeStorage() })
        this.storageReturn.addEventListener('mouseenter', () => { playSound('hover0', 'ui') });

        this.unionRoomScene = new Element(this.container, { className: 'poke-center-union-room-scene' }).element;  

        this.unionRoomOptionContainer = new Element(this.unionRoomScene, { className: 'poke-center-union-room-option-container' }).element;
        this.unionRoomOption = {};

        UNION_OPTION.forEach((label) => {
            this.unionRoomOption[label] = new Element(this.unionRoomOptionContainer, { className: 'poke-center-union-room-option super-stroke' }).element;
            this.unionRoomOption[label].style.backgroundImage = `url("./assets/images/misc/${label}.png")`;
            this.unionRoomOption[label].innerText = text.pokeCenter.tickets[label][lang].toUpperCase();
            this.unionRoomOption[label].addEventListener('click', () => { this.buttonURHandler(label) }); 
            this.unionRoomOption[label].addEventListener('mouseenter', () => { playSound('hover4', 'ui') });
        });

        this.unionRoomReturn = new Element(this.unionRoomScene, { className: 'poke-center-union-room-return stroke', text: text.misc.back[lang].toUpperCase() }).element;  
        this.unionRoomReturn.addEventListener('click', () => { this.closeUnionRoom() });
        this.unionRoomReturn.addEventListener('mouseenter', () => { playSound('hover0', 'ui') });
    }

    buttonHandler(btn) {
        switch(btn) {
            case 'heal': 
                this.healTeam();
                break;
            case 'box': 
                this.openStorage();
                break;
            case 'unionRoom': 
                this.openUnionRoom();
                break;
        }
	}

    healTeam() {
        playSound('heal', 'ui');
        this.main.player.setSavedLocation(this.location);
        this.main.player.potion.charge[0] = this.main.player.potion.charge[1];
        this.main.team.pokemon.forEach(pokemon => {
            pokemon.hp[0] = pokemon.hp[1];
        });
    }

    openStorage() {
        playSound('storage', 'ui');
        this.storageScene.style.display = 'block';
        this.storageOpen = true;
        this.updateStorage();
        this.displayStoragePokemonInfo(this.main.team.pokemon[0]);
        this.storageReleaseButton.style.pointerEvents = 'none';
        this.storageReleaseButton.style.opacity = 0.7;
    }

    updateStorage() {
        this.updateStorageTeam();
        this.updateStorageBox();
    }

    displayStoragePokemonInfo(pokemon, slot = null) {
        playSound('click1', 'ui');

        const lang = this.main.lang;
        this.storagePokemonSelected = pokemon;
        this.markSelection();

        this.storageInfoName.innerText = pokemon.name[lang];
        this.storageInfoLevel.innerText = `${text.stats.level[lang]} ${pokemon.lvl}`;
        this.storageInfoImage.style.backgroundImage = `url("${pokemon.image}")`;

        this.storageInfoType.innerHTML = "";
        pokemon.type.forEach(type => {
            this.storageInfoType.innerHTML += `<img src="${type.icon}"> `;
        })
        
        STATS.forEach(stat => {
            this.storageInfoStat[stat].innerHTML = `
                <span class="poke-center-storage-info-stat-label">${text.stats[stat][lang]}</span>
                <span class="poke-center-storage-info-stat-value">${pokemon.stat[stat]}</span>
                <span class="poke-center-storage-info-stat-value">(${pokemon.iv[stat]})</span>
            `;
            if (pokemon.nature[stat] === 1.1) this.storageInfoStat[stat].style.color = "var(--red)";
            else if (pokemon.nature[stat] === 0.9) this.storageInfoStat[stat].style.color = "var(--blue)";
            else this.storageInfoStat[stat].style.color = "revert-layer";
        })

        for (let i = 0; i < 2; i++) {
            this.storageInfoMove[i].className = 'poke-center-storage-info-move-disabled stroke';
            this.storageInfoMove[i].style.backgroundColor = '#9098a0';
            this.storageInfoMove[i].innerText = text.misc.unlearned[lang].toUpperCase();
        }

        pokemon.moves.forEach((move, i) => {
            this.storageInfoMove[i].className = 'poke-center-storage-info-move stroke';
            this.storageInfoMove[i].innerText = move.name[lang].toUpperCase();
            this.storageInfoMove[i].style.backgroundColor = move.type.color;
        })

        this.storageInfoButtonSwap.style.opacity = 'revert-layer';
        this.storageInfoButtonSwap.style.pointerEvents = 'revert-layer';

        if (!this.main.team.hasPokemon(pokemon)) { // AÑADIR AL EQUIPO
            this.storageReleaseButton.style.pointerEvents = 'all';
            this.storageReleaseButton.style.opacity = 1;
            this.storageInfoButtonSwap.innerText = text.pokeCenter.storage.add[lang].toUpperCase();
            this.storageInfoButtonSwap.style.backgroundColor = '#4CAF50';
            if (this.main.team.pokemon.length === 6) {
                this.storageInfoButtonSwap.style.opacity = 0.7;
                this.storageInfoButtonSwap.style.pointerEvents = 'none';
            }
        } else { // RETIRAR DEL EQUIPO
            this.storageReleaseButton.style.pointerEvents = 'none';
            this.storageReleaseButton.style.opacity = 0.7;
            this.storageInfoButtonSwap.innerText = text.pokeCenter.storage.remove[lang].toUpperCase();
            this.storageInfoButtonSwap.style.backgroundColor = '#F44336';
            if (this.main.team.pokemon.length === 1) {
                this.storageInfoButtonSwap.style.opacity = 0.7;
                this.storageInfoButtonSwap.style.pointerEvents = 'none';
            }
        }
    }

    swapStoragePokemon() {
        let pokemon = this.storagePokemonSelected;
        if (this.main.team.hasPokemon(pokemon)) { // RETIRAR DEL EQUIPO - AÑADIR A LA CAJA
            playSound('unequip', 'ui');
            this.main.box.storePokemon(pokemon);
            this.main.team.removePokemon(pokemon);
        } else { // AÑADIR AL EQUIPO - RETIRAR DE LA CAJA
            playSound('equip', 'ui');
            this.main.team.addPokemon(pokemon);
            this.main.box.withdrawPokemon(pokemon);
        }
        this.updateStorage();
        this.displayStoragePokemonInfo(pokemon);
    }

    updateStorageTeam() {
        this.storageTeamSlot.forEach(slot => {
            slot.className = 'poke-center-storage-team-slot-disabled';
            slot.style.backgroundImage = `revert-layer`;
        })

        this.main.team.pokemon.forEach((pokemon, i) => {
            this.storageTeamSlot[i].className = 'poke-center-storage-team-slot';
            this.storageTeamSlot[i].style.backgroundImage = `url("${pokemon.portrait}")`;
        })
    }

   updateStorageBox() {
        this.storageBoxCase.replaceChildren();
        this.storageBoxSlot = [];

        const { pokemon } = this.main.box;

        pokemon.forEach((poke, index) => {
            const slot = new Element(this.storageBoxCase, { className: 'poke-center-storage-box-slot' }).element;
            slot.style.backgroundImage = `url("${poke.sprite.base}")`;

            slot.addEventListener('click', () => {
                this.displayStoragePokemonInfo(poke);
            });
            slot.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
            this.storageBoxSlot[index] = slot;
        });
    }

    sortBy(key, order = 'asc') {
        const lang = this.main.lang;

        if (this.sortFilter['key'] === key) {
            if (this.sortFilter['order'] === 'asc') {
                this.sortFilter['order'] = 'desc';
                order = 'desc';
            } else if (this.sortFilter['order'] === 'desc') {
                this.sortFilter['order'] = 'asc';
                order = 'asc';
            }
        } else {
            this.sortFilter['key'] = key;
            this.sortFilter['order'] = 'asc';
        }

        this.updateFilterLabels(key, order);

        const dir = order === 'asc' ? 1 : -1;

        this.main.box.pokemon.sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            if (key === 'n') {
                valA = a.specie[key];
                valB = b.specie[key];
                if ((valA === valB) && a.form != b.form) {
                    valA = a.form;
                    valB = b.form;
                } 
            }

            if (key === 'type') {
                valA = a.type[0].name[lang];
                valB = b.type[0].name[lang];
            }

            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * dir;
            }

            if (key === 'shiny') {
                valA = a.shiny;
                valB = b.shiny;
            }

            return (valA - valB) * dir;
        });

        this.updateStorage();
    }

    updateFilterLabels(selected, order) {
        const lang = this.main.lang;

        FILTER_LABEL.forEach((label) => {
            this.storageFilterButton[label].innerHTML = text.pokeCenter.storage[label][lang];
        })
        this.storageFilterButton[selected].innerHTML += (order === 'asc') ? " ↑" : " ↓"

    }

    markSelection() {
        const selectedFilter = 'brightness(1.05) drop-shadow(0 0 3px black) contrast(120%)';

        this.storageBoxSlot.forEach((slot, index) => {
            slot.style.filter = 'revert-layer';
            slot.style.pointerEvents = 'revert-layer'; 
            if (this.main.box.pokemon[index] === this.storagePokemonSelected)  {
                slot.style.filter = 'brightness(1.05) drop-shadow(0 0 3px black) contrast(120%)';  
                slot.style.pointerEvents = 'none'; 
            }
        });

        this.storageTeamSlot.forEach((slot, index) => {
            slot.style.filter = 'revert-layer';
            slot.style.boxShadow = 'revert-layer';  
            slot.style.pointerEvents = 'revert-layer';  
            if (this.main.team.pokemon[index] === this.storagePokemonSelected) {
                slot.style.filter = 'brightness(1.1)';  
                slot.style.boxShadow = 'inset 0 0 3px black';  
                slot.style.pointerEvents = 'none'; 
            }
        })
    }

    releasePokemon() {
        playSound('unequip', 'ui');
        let name = this.storagePokemonSelected.name;
        let position = 0;

        this.storageBoxSlot.forEach((slot, index) => {
            if (this.main.box.pokemon[index] === this.storagePokemonSelected)  {
                position = index;
            }
        });

        this.main.box.withdrawPokemon(this.storagePokemonSelected);
        this.displayStoragePokemonInfo(this.main.team.pokemon[0]);
        this.storageReleaseButton.style.pointerEvents = 'none';
        this.storageReleaseButton.style.opacity = 0.7;

        if (this.main.box.pokemon.length > 0) {
            if (this.main.box.pokemon.length > position) this.displayStoragePokemonInfo(this.main.box.pokemon[position]);
            else this.displayStoragePokemonInfo(this.main.box.pokemon[this.main.box.pokemon.length-1]);
            this.storageReleaseButton.style.pointerEvents = 'all';
            this.storageReleaseButton.style.opacity = 1;
        }
            
        this.updateStorageBox();
        this.markSelection();
        
        if (!this.main.player.achievement[32].status) {
            this.main.player.achievement[32].status = true;
            this.main.player.achievement[32].description = [
                `You're a monster, ${name} misses you`,
                `Eres un monstruo, ${name} te añora`
            ];
            this.main.player.unlockAchievement(32);
        }
    }

    closeStorage() {
        playSound('close', 'ui');
        this.storageScene.style.display = 'none';
        this.storageOpen = false;
    }

    openUnionRoom() {
        playSound('storage', 'ui');
        this.unionRoomScene.style.display = 'block';
        this.unionRoomOpen = true;
        this.updateUnionRoom();
    }

    updateUnionRoom() {
        const lang = this.main.lang;
        let tickets = this.main.inventory.searchItem('unionTicket');
        if (tickets) this.main.ticketUI.innerText = `${tickets.amount} ${text.misc.tickets[lang]}`;
        else this.main.ticketUI.innerText = `0 ${text.misc.tickets[lang]}`;    
    }

    buttonURHandler(label) {
        let tickets = this.main.inventory.searchItem('unionTicket');
        
        if (!tickets) {
            playSound('pop1', 'ui')
            return;
        }
        
        playSound('obtain', 'ui')
        this.main.inventory.removeItem(tickets);
        var obtainedPokemon;

        const specie = (this.main.player.apachan) ? 
            pokemon[UNION_POOL_APACHAN[Math.floor(Math.random() * UNION_POOL_APACHAN.length)]] : 
            pokemon[UNION_POOL[Math.floor(Math.random() * UNION_POOL.length)]];

        switch (label) {
            case 'strong':
                obtainedPokemon = new Pokemon(specie, 5, null, {
                    hp: Math.floor(Math.random() * 11) + 21, 
                    atk: Math.floor(Math.random() * 11) + 21, 
                    def: Math.floor(Math.random() * 11) + 21, 
                    spa: Math.floor(Math.random() * 11) + 21, 
                    spd: Math.floor(Math.random() * 11) + 21, 
                    spe: Math.floor(Math.random() * 11) + 21 
                })
                break;
            case 'transmuted':
                obtainedPokemon = new Pokemon(specie, 5);
                obtainedPokemon.setTransmuted();
                break;
            case 'shiny':
                obtainedPokemon = new Pokemon(specie, 5);
                obtainedPokemon.setShiny();
                break;
        }

        if (!this.main.player.achievement[45].status) {
            this.main.player.achievement[45].progress[0]++;
            if (this.main.player.achievement[45].progress[0] === this.main.player.achievement[45].progress[1]) {
                this.main.player.achievement[45].status = true;
                this.main.player.unlockAchievement(45);
            }       
        }

        this.pokemonURData.open(obtainedPokemon)
        this.updateUnionRoom();
    }

    closeUnionRoom() {
        playSound('close', 'ui');
        this.unionRoomScene.style.display = 'none';
        this.unionRoomOpen = false;
    }

	open(pokeCenterLocation) {
        playSound('buttonB', 'ui');
        saveData(
            this.main.player, this.main.team, this.main.box, this.main.inventory, 
            this.main.pokedex, this.main.rival, this.main.npcs, this.main.eventStatus,
            this.main.routeData, this.main.cityData
        ); 
        super.open(true); 
        this.main.ticketUI.style.display = 'block';
        this.updateUnionRoom();
        this.main.menu.available = false;
        this.location = pokeCenterLocation;
        this.description.innerHTML = text.pokeCenter.description['default'][this.main.lang];
    }

    close() {
        playSound('close', 'ui');
        saveData(
            this.main.player, this.main.team, this.main.box, this.main.inventory, 
            this.main.pokedex, this.main.rival, this.main.npcs, this.main.eventStatus,
            this.main.routeData, this.main.cityData
        ); 
        this.main.ticketUI.style.display = 'none';

        if (this.storageOpen) this.closeStorage();
        if (this.unionRoomOpen) this.closeUnionRoom();
        if (this.pokemonURData.isOpen) this.pokemonURData.close()
        super.close();
       
        this.main.menu.available = true;
    }
}

class UnionRoomPokemon extends Popup {
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
        
        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;
        this.buttonAccept.style.right = '50%';
        this.buttonAccept.style.transform = 'translate(50%)';
        this.buttonAccept.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonAccept.addEventListener('click', () => this.close());
    }

    update() {
        const lang = this.component.main.lang;

        this.promp.innerText = text.pokeCenter.tickets.prompt[lang];
        this.prompBottom.innerText = text.route.capturePromptBottom[lang];
        this.name.innerText = this.pokemon.name;
        this.level.innerText = `${text.stats.short.level[lang]} ${this.pokemon.lvl}`;

        this.sprite.innerHTML = "";
        const sprite = document.createElement('img');
        sprite.src = this.pokemon.image;
        sprite.className = 'route-team-pokemon-sprite';
        this.sprite.appendChild(sprite);

        this.component.main.pokedex.seePokemon(this.pokemon.specie.n);
        this.component.main.pokedex.catchPokemon(this.pokemon.specie.n);
        if (this.pokemon.shiny) this.component.main.pokedex.shinyPokemon(this.pokemon.specie.n);

        if (this.component.main.team.pokemon.length < 6 ) this.component.main.team.addPokemon(this.pokemon);
        else this.component.main.box.storePokemon(this.pokemon);
    }

    open(pokemon) {
        super.open(); 
        this.pokemon = pokemon;
        this.update();
    }

    close() {
        playSound('click1', 'ui');
        super.close(); 
    }

}