import { Element } from '../../utils/Element.js';
import { Counter } from '../../utils/Counter.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { text, formatNumberWithCommas } from '../../file/text.js';
import { itemList, itemListApachan, localList, farmList, discShopList } from '../data/item/itemMartData.js';
import { playSound } from '../../file/audio.js';

const TITLE = ['POKÉMART', 'TIENDA POKÉMON', '友好商店']
const TITLE_FARM = ['FARM', 'GRANJA', '农场']
const TITLE_DISCSHOP = ['DISC SHOP', 'TIENDA DE DISCOS', '光盘商店']

export class PokeMart extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.data;
        this.render();
        this.itemInfo = new PokeMartItem(this);
    }

    render() {	
    	this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = 'var(--white)';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '0px';
        this.container.style.overflow = 'hidden';

        this.martItemContainer = new Element(this.container, { className: 'poke-mart-item-container' }).element;
        this.martItem = [];
    }

	open(pokeMartData) {
        playSound('buttonB', 'ui');
        const lang = this.main.lang;

        super.open(true); 
        this.main.goldUI.style.display = 'block';
        this.main.menu.available = false; 
        this.data = pokeMartData;
        this.title = TITLE[lang];

        if (this.data.location == 'farm') this.title = TITLE_FARM[lang];
        if (this.data.location == 'discShop') this.title = TITLE_DISCSHOP[lang];

        this.name.innerText = this.title;

        this.update();
    }

    update() {
        this.main.goldUI.innerText = `$${formatNumberWithCommas(this.main.player.gold)}`; 
        this.listItems();
    }

    listItems() {
        const lang = this.main.lang;

        this.martItem.forEach(item => {
            if (item && item.parentNode) {
                item.parentNode.removeChild(item);
            }
        });

        this.martItem = [];
        let newList = [];

        if (this.data.location == 'farm') {
            newList = farmList;
        } else if (this.data.location == 'discShop') {
            newList = discShopList;
        } else {
            if (this.main.player.region == 2) {
                 for (let i = 0; i <= this.main.player.lithicDojos; i++) {
                    itemListApachan[i].forEach(it => {
                        newList.push(it);
                    });
                }
            } else {
                for (let i = 0; i <= this.main.player.badges.length; i++) {
                    itemList[i].forEach(it => {
                        newList.push(it);
                    });
                }
            }
            

            localList[this.data.location].forEach(it => {
                newList.push(it);   
            });
        }

        const withOrderID = newList
            .filter(item => typeof item.orderID === 'number')
            .sort((a, b) => {
                if (a.orderID === b.orderID) {
                    return a.name[lang].localeCompare(b.name[lang]);
                }
                return a.orderID - b.orderID;
            });

        const withoutOrderID = newList
            .filter(item => typeof item.orderID !== 'number')
            .sort((a, b) => a.name[lang].localeCompare(b.name[lang]));

        const finalList = [...withOrderID, ...withoutOrderID];

        finalList.forEach((item, index) => {
            this.martItem[index] = new Element(this.martItemContainer, { className: 'poke-mart-item' }).element;
            this.martItem[index].icon = new Element(this.martItem[index], { className: 'poke-mart-item-icon', image: item.image }).element;
            this.martItem[index].name = new Element(this.martItem[index], { className: 'poke-mart-item-name' }).element;
            this.martItem[index].price = new Element(this.martItem[index], { className: 'poke-mart-item-price' }).element;

            this.martItem[index].name.innerText = item.name[lang];
            this.martItem[index].price.innerText = `$${formatNumberWithCommas(item.price)}`;

            if (localList[this.data.location]?.includes(item)) {
                this.martItem[index].style.color = 'var(--red)';
                this.martItem[index].name.innerText += " (!)";
            }

            this.martItem[index].addEventListener('click', () => this.itemInfo.open(item));
            this.martItem[index].addEventListener('mouseenter', () => playSound('hover1', 'ui'));
        });
    }

    close() {
        super.close();
        this.main.goldUI.style.display = 'none';
        playSound('close', 'ui');
        if (this.itemInfo.isOpen) this.itemInfo.close();
        if (this.itemInfo.tmInfo.isOpen) this.itemInfo.tmInfo.close();
        this.main.menu.available = true;
    }
}


class PokeMartItem extends Popup {
    constructor(component) {
        super(400, 280);
        this.component = component;
        this.item = null;
        this.quantity = null;
        this.cost = null;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;

        this.tmInfo = new PokeMartItemInfoTM(this);
    }

    render() {
        const lang = this.component.main.lang;
        
        this.itemBg = new Element(this.popup, { className: 'popup-poke-mart-item-bg' }).element;

        this.itemContainer = new Element(this.popup, { className: 'popup-poke-mart-item-container' }).element;
        this.icon = new Element(this.itemContainer, { className: 'popup-poke-mart-item-icon' }).element;
        this.name = new Element(this.itemContainer, { className: 'popup-poke-mart-item-name stroke' }).element;
        this.tmButtonInfo = new Element(this.itemContainer, { className: 'popup-poke-mart-item-tm-button-info stroke', text: "?" }).element;
        this.description = new Element(this.popup, { className: 'popup-poke-mart-item-description' }).element;

        this.amountContainer = new Element(this.popup, { className: 'popup-poke-mart-item-amount-container' }).element;
        this.amount = new Counter(this.amountContainer, { 
            className: 'popup-poke-mart-item-amount', 
            maxlength: 4,
            onlyNumbers: true,
            minValue: 1, 
            onInput: () => this.amountUpdate() 
        }).element;
        this.less = new Element(this.amountContainer, { className: 'popup-poke-mart-item-amount-button popup-poke-mart-item-amount-button-less stroke', text: '-' }).element;
        this.more = new Element(this.amountContainer, { className: 'popup-poke-mart-item-amount-button popup-poke-mart-item-amount-button-more stroke', text: '+' }).element;
        this.price = new Element(this.amountContainer, { className: 'popup-poke-mart-item-amount-price' }).element;

        this.buttonCancel = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-cancel stroke', text: text.misc.cancel[lang] }).element;
        this.buttonBuy = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.pokeMart.buy[lang] }).element;

        this.less.addEventListener('click', () => {
            if (this.amount.value > 1) this.amount.value--;
            playSound('option', 'ui')
            this.amountUpdate();
        })

        this.more.addEventListener('click', () => {
            if (this.amount.value >= 999) return
            playSound('option', 'ui')
            this.amount.value++;
            this.amountUpdate();
        })
        this.less.addEventListener('mouseover', () => playSound('hover1', 'ui'));
        this.more.addEventListener('mouseover', () => playSound('hover1', 'ui'));

        this.tmButtonInfo.addEventListener('click', () => this.tmInfo.open(this.item));
        this.tmButtonInfo.addEventListener('mouseover', () => playSound('hover1', 'ui'));

        this.buttonCancel.addEventListener('click', () => this.close());
        this.buttonBuy.addEventListener('click', () => this.purchase());
        this.buttonCancel.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonBuy.addEventListener('mouseover', () => playSound('hover0', 'ui'));
    }

    amountUpdate() {
        this.quantity = this.amount.value;
        this.cost = this.quantity * this.item.price;
        this.price.innerText = `$${formatNumberWithCommas(this.cost)}`;

        if (this.cost > this.component.main.player.gold) {
            this.price.style.color = '#C03B3B';
            this.buttonBuy.style.filter = 'brightness(0.8)';
            this.buttonBuy.style.pointerEvents = 'none';
        } else {
            this.price.style.color = '#222425';
            this.buttonBuy.style.filter = 'revert-layer';
            this.buttonBuy.style.pointerEvents = 'revert-layer';
        }
    }

    update() {
        const lang = this.component.main.lang;

        this.name.innerText = this.item.name[lang];
        this.icon.style.backgroundImage = `url("${this.item.image}")`;
        this.description.innerText = (this.item.description[lang] || this.item.description[0]);

        (this.item.type === 'tm') ? this.tmButtonInfo.style.display = 'block' : this.tmButtonInfo.style.display = 'none';
    }

    purchase() {
        if (this.cost > this.component.main.player.gold) return;
        playSound('purchase','ui')
        this.component.main.player.changeGold(-this.cost);
        this.component.main.inventory.addItem(this.item, this.quantity)
        this.component.update();
        this.close(true);
    }

    open(item) {
        playSound('open','ui')
        super.open(); 
        this.item = item;
        this.update();
        this.amount.value = 1;
        this.amountUpdate()
    }

    close(mute = false) {
        if (!mute) playSound('close','ui')
        super.close(); 
    }

}

class PokeMartItemInfoTM extends Popup {
    constructor(component) {
        super(600, 350);
        this.component = component;
        this.item = null;
        this.render();

        this.popup.style.backgroundColor = `#e9e9e8`;
        this.popup.style.border = '2px solid black';
        this.popup.style.borderRadius = '5px';
        this.popup.style.outline = "0px";

        this.header = document.createElement("div");
        this.header.className = "game-menu-pop-header";
        this.popup.appendChild(this.header);

        this.closeButton = document.createElement("div");
        this.closeButton.innerHTML = "X";
        this.closeButton.className = "game-menu-pop-close";
        this.closeButton.addEventListener("click", () => this.close());
        this.header.appendChild(this.closeButton);
    }

    render() {
        this.name = new Element(this.popup, { className: 'menu-bag-info-item-name' }).element;
        this.description = new Element(this.popup, { className: 'menu-bag-info-item-description' }).element;
        this.useContainer = new Element(this.popup, { className: 'menu-bag-info-item-use-container' }).element; 

        this.moveInfoContainer = new Element(this.useContainer, {}).element;
        this.moveInfoContainer.style.position = 'absolute';
        this.moveInfoContainer.style.top = '0px';
        this.moveInfoContainer.style.bottom = '85px';
        this.moveInfoContainer.style.width = '100%';
        this.moveInfoContainer.style.textAlign = 'left';

        this.moveInfoType = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-type stroke' }).element;
        this.moveInfoCategory = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-category stroke' }).element;
        this.moveInfoPower = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info menu-team-pokemon-move-info-power stroke' }).element;
        this.moveInfoDescriptionContainer = new Element(this.moveInfoContainer, { className: 'menu-team-pokemon-move-info-description-container' }).element;
        this.moveInfoDescriptionText = new Element(this.moveInfoDescriptionContainer, { className: 'menu-team-pokemon-move-info-description-text stroke' }).element;
        this.teamPokemonContainer = new Element(this.useContainer, { className: 'route-team-pokemon-container' }).element;

    }

    update() {
        const lang = this.component.component.main.lang;
        this.name.innerText = this.item.name[lang];
        this.description.innerText = (this.item.description[lang] || this.item.description[0]);

        this.moveInfoType.innerText = `${text.misc.type[lang]}: ${this.item.move.type.name[lang].toUpperCase()}`;
        this.moveInfoCategory.innerText = `${text.misc.category[lang]}: ${text.misc[this.item.move.class][lang].toUpperCase()}`;
        this.moveInfoPower.innerText = `${text.misc.power[lang]}: ${this.item.move.power}`;
        this.moveInfoDescriptionText.innerHTML = `${(this.item.move.description[lang] || this.item.move.description[0])}`;

        this.drawTeam(); 
    }

    drawTeam() {
        const lang = this.component.component.main.lang;
        this.teamPokemonContainer.innerHTML = "";
        
        this.teamPokemon = [];

        this.component.component.main.team.pokemon.forEach((pokemon, pos) => { 
            this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
            this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
            this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `Lv. ${pokemon.lvl}` }).element;

            const sprite = document.createElement('img');
            sprite.src = pokemon.sprite.base;
            sprite.className = 'route-team-pokemon-sprite';
            this.teamPokemon[pos].appendChild(sprite);

            this.teamPokemon[pos].subText = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-sub-text stroke' }).element;
            this.teamPokemon[pos].subText.style.color = `var(--white)`;
            this.teamPokemon[pos].style.pointerEvents = 'none'
            
            if (!pokemon.specie.tm.includes(this.item.id)) {
                this.teamPokemon[pos].style.pointerEvents = 'none';
                this.teamPokemon[pos].subText.style.color = `#F44336`;
                this.teamPokemon[pos].subText.innerText = text.misc.notAble[lang].toUpperCase();
            } else {
                if (this.item.move.name[0] == pokemon.moves[0].name[0] || this.item.move.name[0] == pokemon.moves[1]?.name[0]) {
                    this.teamPokemon[pos].style.pointerEvents = 'none';
                    this.teamPokemon[pos].subText.style.color = `#FFC107`;
                    this.teamPokemon[pos].subText.innerText = text.misc.learned[lang].toUpperCase();
                } else if (pokemon.moves.length == 2) {
                    this.teamPokemon[pos].style.pointerEvents = 'none';
                    this.teamPokemon[pos].subText.style.color = `#FFC107`;
                    this.teamPokemon[pos].subText.innerText = text.misc.noSpace[lang].toUpperCase();
                }  else {
                    this.teamPokemon[pos].subText.style.color = `#4CAF50`;
                    this.teamPokemon[pos].subText.innerText = text.misc.able[lang].toUpperCase();
                }               
            }
        })   
    }  

    open(item) {
        playSound('open','ui');
        super.open(); 
        this.item = item;
        this.update();
    }

    close() {
        playSound('close','ui');
        super.close(); 
    }

}