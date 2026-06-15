import { Blackscreen } from './Blackscreen.js';

export class Window {
    constructor(title, width, height) {
        this.isOpen = false;
        this.title = title;
        this.width = width;
        this.height = height;
        
        this.window = document.createElement("div");
        this.window.className = "window";
        this.window.style.width = `${width}px`;
        this.window.style.height = `${height}px`;

        this.window.style.left = `50%`;
        this.window.style.top = `50%`;
        this.window.style.transform = 'translate(-50%, -50%)';
        this.window.style.position = "fixed"; 

        this.header = document.createElement("div");
        this.header.className = "window-header";

        this.name = document.createElement("div");
        this.name.className = "window-name";
        this.name.innerHTML = title;

        this.closeButton = document.createElement("div");
        this.closeButton.innerHTML = "X";
        this.closeButton.className = "window-close";
        this.closeButton.addEventListener("click", () => this.close());

        this.scene = document.createElement("div");
        this.scene.className = "window-scene";

        this.container = document.createElement("div");
        this.container.className = "window-container";

        this.header.appendChild(this.closeButton);
        this.header.appendChild(this.name);
        this.window.appendChild(this.header);
        this.window.appendChild(this.scene);
        this.scene.appendChild(this.container);
    }

    open(bs = false) {
        if (this.isOpen) return;
        this.isOpen = true;
        if (bs) this.blackscreen = new Blackscreen(this.window);
        else document.body.appendChild(this.window);
    }

    close() {
        if (this.blackscreen) this.blackscreen.destroy();
        this.isOpen = false;
        this.window.remove();
    }
}
