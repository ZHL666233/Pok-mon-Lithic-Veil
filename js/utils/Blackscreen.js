import { Window } from './Window.js';

export class Blackscreen {
	constructor(scene) {
		this.scene = scene;
		this.element = this.create();
	}

	create = () => {
		const element = document.createElement('div');

		element.style.position = 'fixed'; 
		element.style.top = '0';
		element.style.left = '0';
		element.style.height = '100%'; 
		element.style.width = '100%';
		element.style.background = 'rgba(0, 0, 0, 0.6)';
		element.style.zIndex = 99;
        document.getElementById('screen').appendChild(element);
        element.appendChild(this.scene);
        return element;
	}

	destroy = () => {
		if (this.element && this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
		}
	}
}