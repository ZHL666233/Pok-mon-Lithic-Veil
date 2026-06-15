import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { MenuBagItem } from './MenuBagItem.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

const FILTER_TAB = ['all', 'consumable', 'tm', 'key'];

export class MenuBag extends MenuComponent {
	constructor(menu) {
		super(menu);	
		this.key = 'bag';
		this.filter = 0;
		this.render();
		this.itemInfo = new MenuBagItem(this);
	}

	render() {
		this.container.style.zIndex = 1;
		const lang = this.menu.main.lang;

		this.filterContainer = new Element(this.container, { className: 'menu-bag-filter-container stroke' }).element;
		this.filterPrev = new Element(this.filterContainer, { className: 'menu-bag-filter-arrow', text: `<` }).element;
		this.filterLabel = new Element(this.filterContainer, { className: 'menu-bag-filter-label' }).element;
		this.filterNext = new Element(this.filterContainer, { className: 'menu-bag-filter-arrow', text: `>` }).element;


		this.filterPrev.addEventListener('mouseenter', () => playSound('hover1', 'ui'));
		this.filterNext.addEventListener('mouseenter', () => playSound('hover1', 'ui'));
		this.filterPrev.addEventListener('click', () => {
			playSound('option', 'ui');
			this.filter--;
			if (this.filter === -1) this.filter = FILTER_TAB.length - 1;
			this.update();
		})

		this.filterNext.addEventListener('click', () => {
			playSound('option', 'ui');
			this.filter++;
			if (this.filter === FILTER_TAB.length) this.filter = 0;
			this.update();
		})

		this.itemContainer = new Element(this.container, { className: 'menu-bag-item-container' }).element;
		this.item = [];
	}

	update() {
		const lang = this.menu.main.lang;
		this.filterLabel.innerText = text.misc[FILTER_TAB[this.filter]][lang].toUpperCase();

		this.item.forEach(item => {
			if (item && item.parentNode) {
				item.parentNode.removeChild(item);
			}
		});

		this.item = [];

		let visibleIndex = 0;

		const allItems = Object.values(this.menu.main.inventory.item)
			.filter(item => this.filter === 0 || item.type === FILTER_TAB[this.filter]);

		const itemsWithOrderID = allItems
			.filter(item => typeof item.orderID === 'number')
			.sort((a, b) => {
				if (a.orderID === b.orderID) {
					return a.name[lang].localeCompare(b.name[lang]);
				}
				return a.orderID - b.orderID;
			});

		const itemsWithoutOrderID = allItems
			.filter(item => typeof item.orderID !== 'number')
			.sort((a, b) => a.name[lang].localeCompare(b.name[lang]));

		const sortedItems = [...itemsWithOrderID, ...itemsWithoutOrderID];

		sortedItems.forEach(item => {
			this.item[visibleIndex] = new Element(this.itemContainer, { className: 'menu-bag-item' }).element;
			this.item[visibleIndex].icon = new Element(this.item[visibleIndex], { className: 'menu-bag-item-icon', image: item.image }).element;
			this.item[visibleIndex].name = new Element(this.item[visibleIndex], { className: 'menu-bag-item-name' }).element;
			this.item[visibleIndex].amount = new Element(this.item[visibleIndex], { className: 'menu-bag-item-amount' }).element;

			this.item[visibleIndex].name.innerText = item.name[lang];
			this.item[visibleIndex].amount.innerText = `x${item.amount}`;

			this.item[visibleIndex].addEventListener('click', () => {
				this.itemInfo.open(item);
			});
			this.item[visibleIndex].addEventListener('mouseenter', () => playSound('hover1', 'ui'));

			visibleIndex++;
		});
	}

	open() {
		super.open(); 
	    this.update();
	}

}
