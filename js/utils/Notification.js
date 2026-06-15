import { Element } from './Element.js';

export class Notification {
    constructor() {
        this.container = new Element(document.getElementById('screen'), { className: 'notification-container' }).element; 
    }

    display(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = message;

        this.container.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'notification-fade-out 0.5s forwards';
            setTimeout(() => notification.remove(), 500); 
        }, 3000);
    }
}
