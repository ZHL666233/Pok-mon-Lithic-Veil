import { WorldEvent } from '../manager/WorldEvent.js';
import { playMusic } from '../../file/audio.js';

export class Location {
	constructor(main) {
		this.main = main;
		this.worldEvent = [];
		this.render();
	}

	render() {
	    this.canvas = document.createElement('canvas');
	    this.c = this.canvas.getContext('2d');
	    this.c.imageSmoothingEnabled = false;

	    this.background = new Image();

	    this.canvas.width = 400;  // resolución interna (lógica del juego)
	    this.canvas.height = 288;

	    // El tamaño visual se controla a través del contenedor #screen y el escalado,
	    // manteniendo la resolución interna para no romper el sistema de coordenadas.
	    this.canvas.style.width = '100%';   // ocupa todo el área de #game-scene/#screen
	    this.canvas.style.height = '100%';
	    this.canvas.style.imageRendering = 'pixelated';

	    this.main.scene.appendChild(this.canvas);
	}

	// loadLocation(newLocation, ignoreFade = false) {
	// 	WorldEvent.destroyAllActives(); // TEST
	// 	this.main.scene.style.pointerEvents = 'none';
	// 	this.main.keys.inputLocked = true;

	// 	if (ignoreFade) {
	// 		this.loadLocationBasic(newLocation)
	// 	} else {
	// 		const fadeDuration = 600;
	// 	    const startFadeOut = performance.now();

	// 	    const fadeOut = (now) => {
	// 	        const elapsed = now - startFadeOut;
	// 	        let progress = Math.min(elapsed / fadeDuration, 1);
	// 	        progress = 1 - Math.pow(1 - progress, 3);

	// 	        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	// 	        this.c.globalAlpha = 1 - progress;
	// 	        this.c.drawImage(this.background, 0, 0);
	// 	        this.c.globalAlpha = 1;

	// 	        if (progress < 1) {
	// 	            requestAnimationFrame(fadeOut);
	// 	        } else {
	// 	            this.loadLocationWithFadeIn(newLocation);
	// 	        }
	// 	    };

	// 	    requestAnimationFrame(fadeOut);
	// 	}
	// }
	
	loadLocation(newLocation, ignoreFade = false) {
	    WorldEvent.destroyAllActives();
	    this.main.scene.style.pointerEvents = 'none';
	    this.main.keys.inputLocked = true;

	    if (ignoreFade) {
	        this.loadLocationBasic(newLocation);
	    } else {
	        const fadeDuration = 600;
	        const startFadeOut = performance.now();

	        const oldBackground = this.background; 

	        const fadeOut = (now) => {
	            const elapsed = now - startFadeOut;
	            let progress = Math.min(elapsed / fadeDuration, 1);
	            progress = 1 - Math.pow(1 - progress, 3);

	            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	            this.c.globalAlpha = 1 - progress;
	            this.c.drawImage(oldBackground, 0, 0);
	            this.c.globalAlpha = 1;

	            if (progress < 1) {
	                requestAnimationFrame(fadeOut);
	            } else {
	                this.loadLocationWithFadeIn(newLocation);
	            }
	        };

	        requestAnimationFrame(fadeOut);
	    }
	}

	loadLocationWithFadeIn(newLocation) {
	    this.location = newLocation;
	    this.main.player.setLocation(this.location);

	    this.main.currentSong = newLocation.song;
	    playMusic(this.main.currentSong);

	    this.canvas.style.visibility = 'hidden';

	    const newBackground = window.loadImage(this.location.background);
	        
	    if (newBackground.complete) {
	        this.background = newBackground;
	        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	        this.canvas.style.visibility = 'visible';
	    
	        const duration = 600;
	        const start = performance.now();
	    
	        const fadeIn = (now) => {
	            const elapsed = now - start;
	            let progress = Math.min(elapsed / duration, 1);
	            progress = 1 - Math.pow(1 - progress, 3); 
	    
	            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	            this.c.globalAlpha = progress;
	            this.c.drawImage(this.background, 0, 0);
	            this.c.globalAlpha = 1;
	    
	            if (progress < 1) {
	                requestAnimationFrame(fadeIn);
	            }
	        };
	        requestAnimationFrame(fadeIn);
	    } else {
	        newBackground.onload = () => {
	            this.background = newBackground;
	    
	            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	            this.canvas.style.visibility = 'visible';
	    
	            const duration = 600;
	            const start = performance.now();
	    
	            const fadeIn = (now) => {
	                const elapsed = now - start;
	                let progress = Math.min(elapsed / duration, 1);
	                progress = 1 - Math.pow(1 - progress, 3); 
	    
	                this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	                this.c.globalAlpha = progress;
	                this.c.drawImage(this.background, 0, 0);
	                this.c.globalAlpha = 1;
	    
	                if (progress < 1) {
	                    requestAnimationFrame(fadeIn);
	                }
	            };
	            requestAnimationFrame(fadeIn);
	        };
	    }

	    this.loadEvents();
	}

	loadLocationBasic(newLocation) {
	    this.location = newLocation;
	    this.main.player.setLocation(this.location);

	    this.main.currentSong = newLocation.song;
	    playMusic(this.main.currentSong);

	    const bgImage = window.loadImage(this.location.background);
	    if (bgImage.complete) {
	        this.background = bgImage;
	        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	        this.c.drawImage(this.background, 0, 0);
	    } else {
	        this.background = bgImage;
	        this.background.onload = () => {
	            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
	            this.c.drawImage(this.background, 0, 0);
	        };
	    }

	    this.loadEvents();
	}

	loadEvents() {
		this.main.scene.style.pointerEvents = 'auto';
		this.main.keys.inputLocked = false;

	    WorldEvent.destroyAllActives();
	    this.worldEvent = [];

	    Object.keys(this.location.worldEvent).forEach((key, i) => {
	        let eventData = { ...this.location.worldEvent[key] }; 
	        eventData.name = eventData.name.map(name => name.replace('PLAYER_NAME', this.main.player.name)); 
	        this.worldEvent[i] = new WorldEvent(this.main, eventData);
	    });
	}
}
