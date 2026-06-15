import { Element } from '../../utils/Element.js';

export class MenuComponent {
	constructor(menu) {
		this.menu = menu;
		this.isOpen = false;
		this.container = new Element(this.menu.main.gameMenuScene, { className: 'game-menu-container' }).element;
	}

	toggle() {
		this.isOpen ? this.close() : this.open();
	}

	open() {
		if (this.isOpen) return;
		if (this.menu.current != null) this.menu.current.close();
		this.menu.current = this;
		this.isOpen = true;
		this.container.style.display = "block";
	}

	close() {
		this.menu.current = null;
		this.isOpen = false;
		this.container.style.display = 'none';
	}
}
