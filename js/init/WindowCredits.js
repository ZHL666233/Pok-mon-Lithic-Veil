import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';

const SECTION = ['developer', 'testers', 'assets']
const textData = {
	developer: [
		`Developed by <a href="https://x.com/khydra98" target="_blank" class="link-red">KHYDRA</a>.`,
		`Desarrollado por <a href="https://x.com/khydra98" target="_blank" class="link-red">KHYDRA</a>.`
	],
	testers: [
		`Testers: <a href="https://x.com/cuarzomyr" target="_blank" class="link-blue">KHYTRAYER</a> & SINGA.`,
		`Testeado por <a href="https://x.com/cuarzomyr" target="_blank" class="link-blue">KHYTRAYER</a> & SINGA.`
	],
	disclaimer: [
		`
		This is a non-profit fangame created by a single person, and it is not affiliated with, sponsored by, or approved by Nintendo, Game Freak, or The Pokémon Company. <br><br>
		All characters, names, sprites, music, and other materials related to Pokémon are the property of their respective owners: © Nintendo, Game Freak, Creatures Inc.`,
		`
		Este es un juego fangame sin fines de lucro creado por una sola persona, y no está afiliado, patrocinado ni aprobado por Nintendo, Game Freak o The Pokémon Company. <br><br> 
		Todos los personajes, nombres, sprites, música y demás materiales relacionados con Pokémon son propiedad de sus respectivos dueños: © Nintendo, Game Freak, Creatures Inc.
		`
	],
	assets: [
		`
		Pokémon: <a href="https://sprites.pmdcollab.org/#/" target="_blank" class="link-blue">PMDCollab</a>. 
		<br> Pokémon: <a href="https://github.com/PMDCollab/SpriteCollab/blob/master/credit_names.txt" target="_blank" class="link-blue">Contributors</a>.
		<br> Tileset: <a href="https://www.deviantart.com/ozotwo/art/Pokemon-Tileset-Fire-Red-Leaf-Green-Outdoors-C-446156842" target="_blank" class="link-blue">Ozotwo</a>.
		<br> Items: <a href="https://msikma.github.io/pokesprite/overview/inventory.html" target="_blank" class="link-blue">PokéSprite</a>.
		<br> Music: <a href="https://downloads.khinsider.com/forums/index.php?members/2925200/" target="_blank" class="link-blue">ShinRetsuden</a>, 
		<a href="https://downloads.khinsider.com/forums/index.php?members/2322973/" target="_blank" class="link-blue">AceTrainerX3</a>.
		<br> Pokémon cries: <a href="https://www.sounds-resource.com/ds_dsi/pokemonblackwhite/sound/1173/"  target="_blank"  class="link-blue">Redblueyellow & Mysticus</a>.
		<br> Cursor: <a href="https://kenney-assets.itch.io/cursor-pack" target="_blank" class="link-blue">Kenney</a>.
		`,
		`
		Pokémon: <a href="https://sprites.pmdcollab.org/#/" target="_blank" class="link-blue">PMDCollab</a>.
		<br> Pokémon: <a href="https://github.com/PMDCollab/SpriteCollab/blob/master/credit_names.txt" target="_blank" class="link-blue">Contribuidores</a>. 
		<br> Tileset: <a href="https://www.deviantart.com/ozotwo/art/Pokemon-Tileset-Fire-Red-Leaf-Green-Outdoors-C-446156842" target="_blank" class="link-blue">Ozotwo</a>.
		<br> Objetos: <a href="https://msikma.github.io/pokesprite/overview/inventory.html" target="_blank" class="link-blue">PokéSprite</a>.
		<br> Música: <a href="https://downloads.khinsider.com/forums/index.php?members/2925200/" target="_blank" class="link-blue">ShinRetsuden</a>, 
		<a href="https://downloads.khinsider.com/forums/index.php?members/2322973/" target="_blank" class="link-blue">AceTrainerX3</a>.
		<br> Pokémon gritos: <a href="https://www.sounds-resource.com/ds_dsi/pokemonblackwhite/sound/1173/" target="_blank" class="link-blue">Redblueyellow & Mysticus</a>.
		<br> Cursor: <a href="https://kenney-assets.itch.io/cursor-pack" target="_blank" class="link-blue">Kenney</a>.
		`
	],

}

export class WindowCredits extends Window {
	constructor(component) {
		const title = text.menu.button['credits'][JSON.parse(window.localStorage.getItem("data")).config.language.text].toUpperCase();

	    super(title, 600, 450); 
	    this.component = component;
	    this.render();
	}

	render = () => {
		this.disclaimer = new Element(this.container, { className: 'window-credits-disclaimer stroke' }).element; 
		this.section = {};

		SECTION.forEach((label) => {
			this.section[label] = new Element(this.container, { className: 'window-section super-stroke' }).element;
			this.section[label].header = new Element(this.section[label], { className: 'window-section-header super-stroke' }).element;
			this.section[label].paragraph = new Element(this.section[label], { className: 'window-section-paragraph super-stroke' }).element;
		})

  	}

  	update = () => {
  		const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

  		this.title = text.menu.button.credits[lang].toUpperCase();
  		this.name.innerText = this.title;

  		SECTION.forEach((label) => {
			this.section[label].header.innerText = text.menu.credits.section[label][lang];
		})

  		this.disclaimer.innerHTML = textData.disclaimer[lang];
  		this.section['developer'].paragraph.innerHTML = textData.developer[lang];
  		this.section['testers'].paragraph.innerHTML = textData.testers[lang];
  		this.section['assets'].paragraph.innerHTML = textData.assets[lang];
  	}

  	open() {
	    super.open(true); 
	    this.update();
  	}

  	close() {
  		playSound('close', 'ui');
	    super.close(); 
  	}
}