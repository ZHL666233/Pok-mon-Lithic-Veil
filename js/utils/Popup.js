import { Blackscreen } from './Blackscreen.js';

export class Popup {
    constructor(width, height) {
        this.isOpen = false;
        this.width = width;
        this.height = height;
        
        this.popup = document.createElement("div");
        this.popup.className = "popup";
        this.popup.style.width = `${width}px`;
        this.popup.style.height = `${height}px`;

        this.popup.style.left = `50%`;
        this.popup.style.top = `50%`;
        this.popup.style.transform = 'translate(-50%, -50%)';
        this.popup.style.position = "fixed"; 
    }

    open() {
        if (this.isOpen) return;
        this.isOpen = true;
        this.blackscreen = new Blackscreen(this.popup);
    }

    close() {
        this.blackscreen.destroy();
        this.isOpen = false;
        this.popup.remove();
    }

}
