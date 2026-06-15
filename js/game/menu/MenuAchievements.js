import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { text, formatNumberWithCommas } from '../../file/text.js';

export class MenuAchievements extends MenuComponent {
	constructor(menu) {
		super(menu);	
		this.key = 'achievements';
		this.render();

		this.container.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
	}

	render() {
		this.container.style.zIndex = 1;
		const lang = this.menu.main.lang;

		this.achievementTotalContainer = new Element(this.container, { className: 'menu-achievements-achievement-total-container' }).element;
		this.achievementTotalLabel = new Element(this.container, { className: 'menu-achievements-achievement-total-label', text: text.misc.progress[lang] }).element;
		this.achievementTotalProgress = new Element(this.container, { className: 'menu-achievements-achievement-total-progress' }).element;
		this.achievementTotalBarContainer = new Element(this.container, { className: 'menu-achievements-achievement-total-bar-container' }).element;
		this.achievementTotalBarProgress = new Element(this.achievementTotalBarContainer, { className: 'menu-achievements-achievement-total-bar-progress' }).element;

		this.achievementsContainer = new Element(this.container, { className: 'menu-achievements-achievements-container' }).element;
		this.achievementBox = {};

		this.drawAchievementList();
	}

	drawAchievementList() {
		const lang = this.menu.main.lang;

		Object.keys(this.menu.main.player.achievement).forEach(key => {
			this.achievementBox[key] = new Element(this.achievementsContainer, { className: 'menu-achievements-achievement-box' }).element;
			this.achievementBox[key].description = new Element(this.achievementBox[key], { className: 'menu-achievements-achievement-description' }).element;
			this.achievementBox[key].progress = new Element(this.achievementBox[key], { className: 'menu-achievements-achievement-progress' }).element;
			this.achievementBox[key].description.innerText = this.menu.main.player.achievement[key].description[lang] || this.menu.main.player.achievement[key].description[0]
		})
	}

	update() {
		const lang = this.menu.main.lang;

		Object.keys(this.menu.main.player.achievement).forEach(key => {
			if (this.menu.main.player.achievement[key].hidden) {
				this.achievementBox[key].description.innerText = '???'
			} else this.achievementBox[key].description.innerText = this.menu.main.player.achievement[key].description[lang] || this.menu.main.player.achievement[key].description[0];

			if (this.menu.main.player.achievement[key].status) {
				this.achievementBox[key].classList.add('stroke')
				this.achievementBox[key].style.backgroundColor = 'var(--green)';
				this.achievementBox[key].style.color = 'var(--white)';
				this.achievementBox[key].progress.innerHTML = `✔`;
				this.achievementBox[key].progress.className = 'menu-achievements-achievement-completed';
			} else if (this.menu.main.player.achievement[key].progress != undefined && !this.menu.main.player.achievement[key].hidden) {
				this.achievementBox[key].progress.className = 'menu-achievements-achievement-progress';
				if (key > 32 && key < 39) 
					this.achievementBox[key].progress.innerHTML = `(${formatNumberWithCommas(this.menu.main.player.achievement[key].progress[0])})`;
				else 
					this.achievementBox[key].progress.innerHTML = `(${this.menu.main.player.achievement[key].progress[0]}/${this.menu.main.player.achievement[key].progress[1]})`;		
			}
		})

		this.achievementTotalProgress.innerText = `${ Math.round(this.menu.main.player.achievementProgress * 10) / 10 }%`;
		this.achievementTotalBarProgress.style.width = `${this.menu.main.player.achievementProgress}%`;
	}

	open() {
		this.container.style.zIndex = 1;
		super.open(); 
	    this.update();
	}
}
