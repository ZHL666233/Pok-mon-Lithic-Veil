import { Init } from './js/init/Init.js';
import { loadData } from './js/file/data.js';

const BASE_WIDTH = 800;
const BASE_HEIGHT = 576;

function resizeScreen() {
    const screen = document.getElementById('screen');
    if (!screen) return;

    const scaleX = window.innerWidth / BASE_WIDTH;
    const scaleY = window.innerHeight / BASE_HEIGHT;
    const scale = Math.min(scaleX, scaleY);

    // Mantiene el sistema de coordenadas lógico (800x576) y solo escala visualmente.
    // Centra el juego en la ventana.
    screen.style.transformOrigin = 'top left';
    screen.style.transform = `translate(${(window.innerWidth - BASE_WIDTH * scale) / 2}px, ${(window.innerHeight - BASE_HEIGHT * scale) / 2}px) scale(${scale})`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('dragstart', event => event.preventDefault());

    const data = loadData();
    new Init(data);

    resizeScreen();
    window.addEventListener('resize', resizeScreen);
});

