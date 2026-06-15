import { Blackscreen } from '../../utils/Blackscreen.js';

export class MenuPop {
	constructor(component, width, height) {
		this.component = component;
		this.isOpen = false;
		this.width = width;
        this.height = height;

		this.container = document.createElement("div");
		this.container.className = 'game-menu-pop-container';
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;

        this.container.style.left = `50%`;
        this.container.style.top = `50%`;
        this.container.style.transform = 'translate(-50%, -50%)';

        this.header = document.createElement("div");
        this.header.className = "game-menu-pop-header";
        this.container.appendChild(this.header);

        this.closeButton = document.createElement("div");
        this.closeButton.innerHTML = "X";
        this.closeButton.className = "game-menu-pop-close";
        this.closeButton.addEventListener("click", () => this.close());
        this.header.appendChild(this.closeButton);
	}

	toggle() {
		this.isOpen ? this.close() : this.open();
	}

	open() {
		this.blackscreen = new Blackscreen(this.container);
		this.isOpen = true;
		this.component.menu.available = false;
		this.container.style.display = "block";
	}

	close() {	
		this.blackscreen.destroy();
		this.isOpen = false;
		this.component.menu.available = true
		this.container.style.display = 'none';
	}
}
