import { playSound } from '../../file/audio.js';
import { item } from '../data/item/itemData.js'

const regiSequence = ["ArrowUp", "ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "ArrowRight"];
let regiPosition = 0;

export class KeyController {
	constructor(main) {
		this.main = main;
		this.inputLocked = false;
		this.listen();
		this.initLongPressMenu();
	}

	listen() {
		window.addEventListener('keydown', (e) => {
			if(this.inputLocked) return;
			switch(e.key) {
				case 'Escape':
					this.main.menu.toggle();

					if (this.main.pokeCenter.isOpen) this.main.pokeCenter.close();
					if (this.main.pokeMart.isOpen) {
						if (this.main.pokeMart.itemInfo.tmInfo.isOpen) this.main.pokeMart.itemInfo.tmInfo.close();
						else if (this.main.pokeMart.itemInfo.isOpen) this.main.pokeMart.itemInfo.close();
						else this.main.pokeMart.close();
					}
					if (this.main.gym.isOpen) this.main.gym.close();
					if (this.main.evolutionDojo.isOpen) this.main.evolutionDojo.close();
					if (this.main.route.isOpen) this.main.route.close();
					if (this.main.trainerBattle.isOpen) this.main.trainerBattle.close();
					if (this.main.staticPokemon.isOpen) this.main.staticPokemon.close();

					if (this.main.menu.team.pokemonInfo.isOpen) this.main.menu.team.pokemonInfo.close();
					if (this.main.menu.bag.itemInfo.isOpen) this.main.menu.bag.itemInfo.close();
					if (this.main.menu.pokedex.pokemonInfo.isOpen) this.main.menu.pokedex.pokemonInfo.close();
					break;
				case 'z':
					if (this.main.player.location === this.main.routeData['route42-3'] && !this.main.eventStatus.zCaveOpen) {
						playSound('secret1', 'ui');
						this.main.eventStatus.zCaveOpen = true;
						this.main.routeData['route42-3'] = this.main.routeData['route42-3bis'];
	         			this.main.location.loadLocation(this.main.routeData['route42-3'], true);
					}
					break;	
				case 'm':
					if (!this.main.menu.available) return;
					this.main.menu.open();
					this.main.menu.buttonHandler('map');
					break;	
				case 'e':
					if (!this.main.menu.available) return;
					this.main.menu.open();
					this.main.menu.buttonHandler('team');
					break;	
				case 'i':
					if (!this.main.menu.available) return;
					this.main.menu.open();
					this.main.menu.buttonHandler('bag');
					break;	
				case 'm':
					if (!this.main.menu.available) return;
					this.main.menu.open();
					this.main.menu.buttonHandler('map');
					break;	
				case 'a':
					if (!this.main.menu.available) return;
					this.main.menu.open();
					this.main.menu.buttonHandler('achievements');
					break;	
				case 'p':
					if (!this.main.menu.available) return;
					this.main.menu.open();
					this.main.menu.buttonHandler('pokedex');
					break;
			}

			if (this.main.player.location.name[0] == 'Ancient Tomb' && !this.main.eventStatus.regirock) {
				const key = event.key;

		        if (key === regiSequence[regiPosition]) {
		          	regiPosition++;
		          	if (regiPosition === regiSequence.length) {
		            	regiPosition = 0; 
		            	playSound('secret1', 'ui');
		            	this.main.eventStatus.regirock = true;
		            	this.main.routeData['ancientTomb-1'] = this.main.routeData['ancientTomb-1bis'];
                        this.main.location.loadLocation(this.main.routeData['ancientTomb-1'], true);
		          	}
		        } else {
		          	regiPosition = 0; 
		        }
			}
		});
	}

	// Permite abrir/cerrar el menú con una pulsación larga en pantallas táctiles,
	// pero solo cuando se presiona en un área vacía (no en objetos con tooltip).
	// Reutiliza exactamente la misma lógica que la tecla Escape.
	initLongPressMenu() {
		const LONG_PRESS_DURATION = 600; // ms
		const screen = document.getElementById('screen');
		if (!screen) return;

		let pressTimer = null;
		let moved = false;
		let touchStartElement = null;
		let touchStartX = 0;
		let touchStartY = 0;

		// Verifica si un elemento tiene tooltip o es interactivo
		const hasTooltipOrInteractive = (element) => {
			if (!element) return false;
			
			// Verificar si tiene clase world-event (tiene tooltip)
			if (element.classList && element.classList.contains('world-event')) {
				return true;
			}
			
			// Verificar si es un botón de menú o elemento interactivo
			if (element.classList && (
				element.classList.contains('game-menu-button') ||
				element.classList.contains('menu-player-badge') ||
				element.closest('.world-event') !== null
			)) {
				return true;
			}
			
			// Verificar si está dentro de un elemento con tooltip
			const worldEventParent = element.closest('.world-event');
			if (worldEventParent) return true;
			
			return false;
		};

		const startPress = (event) => {
			if (this.inputLocked) return;
			moved = false;

			// Solo considerar toques primarios
			if (event.touches && event.touches.length > 1) return;

			// Obtener el elemento bajo el punto de toque
			const touch = event.touches[0];
			touchStartX = touch.clientX;
			touchStartY = touch.clientY;
			touchStartElement = document.elementFromPoint(touchStartX, touchStartY);

			// Si el elemento tiene tooltip o es interactivo, no abrir el menú
			if (hasTooltipOrInteractive(touchStartElement)) {
				return;
			}

			if (pressTimer !== null) clearTimeout(pressTimer);
			pressTimer = setTimeout(() => {
				if (this.inputLocked || moved) return;

				// Verificar nuevamente que no estamos sobre un elemento con tooltip
				const currentElement = document.elementFromPoint(touchStartX, touchStartY);
				if (hasTooltipOrInteractive(currentElement)) {
					return;
				}

				// Lógica idéntica a pulsar Escape
				this.main.menu.toggle();

				if (this.main.pokeCenter.isOpen) this.main.pokeCenter.close();
				if (this.main.pokeMart.isOpen) {
					if (this.main.pokeMart.itemInfo.tmInfo.isOpen) this.main.pokeMart.itemInfo.tmInfo.close();
					else if (this.main.pokeMart.itemInfo.isOpen) this.main.pokeMart.itemInfo.close();
					else this.main.pokeMart.close();
				}
				if (this.main.gym.isOpen) this.main.gym.close();
				if (this.main.evolutionDojo.isOpen) this.main.evolutionDojo.close();
				if (this.main.route.isOpen) this.main.route.close();
				if (this.main.trainerBattle.isOpen) this.main.trainerBattle.close();
				if (this.main.staticPokemon.isOpen) this.main.staticPokemon.close();

				if (this.main.menu.team.pokemonInfo.isOpen) this.main.menu.team.pokemonInfo.close();
				if (this.main.menu.bag.itemInfo.isOpen) this.main.menu.bag.itemInfo.close();
				if (this.main.menu.pokedex.pokemonInfo.isOpen) this.main.menu.pokedex.pokemonInfo.close();
			}, LONG_PRESS_DURATION);
		};

		const cancelPress = () => {
			if (pressTimer !== null) {
				clearTimeout(pressTimer);
				pressTimer = null;
			}
			touchStartElement = null;
			touchStartX = 0;
			touchStartY = 0;
		};

		const onMove = (event) => {
			if (!pressTimer || !event.touches || event.touches.length === 0) {
				moved = true;
				return;
			}

			const touch = event.touches[0];
			const deltaX = Math.abs(touch.clientX - touchStartX);
			const deltaY = Math.abs(touch.clientY - touchStartY);

			// Si se mueve más de 10px, cancelar
			if (deltaX > 10 || deltaY > 10) {
				moved = true;
				if (pressTimer !== null) {
					clearTimeout(pressTimer);
					pressTimer = null;
				}
				return;
			}

			// Si ahora estamos sobre un elemento con tooltip, cancelar el timer del menú
			const currentElement = document.elementFromPoint(touch.clientX, touch.clientY);
			if (hasTooltipOrInteractive(currentElement)) {
				moved = true;
				if (pressTimer !== null) {
					clearTimeout(pressTimer);
					pressTimer = null;
				}
			}
		};

		screen.addEventListener('touchstart', startPress, { passive: true });
		screen.addEventListener('touchend', cancelPress, { passive: true });
		screen.addEventListener('touchcancel', cancelPress, { passive: true });
		screen.addEventListener('touchmove', onMove, { passive: true });
	}
}