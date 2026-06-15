import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { text, formatNumberWithCommas } from '../../file/text.js';
import { Tooltip } from '../../utils/Tooltip.js';

const STATS = ['gold', 'pokedex', 'badges', 'start', 'time'];
const BADGES = ["boulderBadge", "cascadeBadge", "thunderBadge", "rainbowBadge", "soulBadge", "marshBadge",
  				"volcanoBadge", "earthBadge", "zephyrBadge", "hiveBadge", "plainBadge", "fogBadge",
  				"stormBadge", "mineralBadge", "glacierBadge", "risingBadge"];

const BADGE_DATA = {
	boulderBadge: ['Boulder Badge - Pewter City', 'Medalla Roca - Ciudad Plateada', '灰色徽章 - 深灰市'],
	cascadeBadge: ['Cascade Badge - Cerulean City', 'Medalla Cascada - Ciudad Celeste', '蓝色徽章 - 华蓝市'],
	thunderBadge: ['Thunder Badge - Vermilion City', 'Medalla Trueno - Ciudad Carmín', '橙色徽章 - 枯叶市'],
	rainbowBadge: ['Rainbow Badge - Celadon City', 'Medalla Arcoiris - Ciudad Azulona', '彩虹徽章 - 玉虹市'],
	soulBadge: ['Soul Badge - Fuchsia City', 'Medalla Alma - Ciudad Fucsia', '粉色徽章 - 浅红市'],
	marshBadge: ['Marsh Badge - Saffron City', 'Medalla Pantano - Ciudad Azafrán', '金色徽章 - 金黄市'],
	volcanoBadge: ['Volcano Badge - Cinnabar Island', 'Medalla Volcán - Isla Canela', '深红徽章 - 红莲岛'],
	earthBadge: ['Earth Badge - Viridian City', 'Medalla Tierra - Ciudad Verde', '绿色徽章 - 常磐市'],
	zephyrBadge: ['Zephyr Badge - Violet City', 'Medalla Céfiro - Ciudad Malva', '飞翼徽章 - 桔梗市'],
	hiveBadge: ['Hive Badge - Azalea Town', 'Medalla Colmena - Pueblo Azalea', '昆虫徽章 - 桧皮镇'],
	plainBadge: ['Plain Badge - Goldenrod City', 'Medalla Planicie - Ciudad Trigal', '标准徽章 - 满金市'],
	fogBadge: ['Fog Badge - Ecruteak City', 'Medalla Niebla - Ciudad Iris', '魅影徽章 - 圆朱市'],
	stormBadge: ['Storm Badge - Cianwood City', 'Medalla Tormenta - Ciudad Orquídea', '打击徽章 - 湛蓝市'],
	mineralBadge: ['Mineral Badge - Olivine City', 'Medalla Mineral - Ciudad Olivo', '钢铁徽章 - 浅葱市'],
	glacierBadge: ['Glacier Badge - Mahogany Town', 'Medalla Glaciar - Pueblo Caoba', '冰之徽章 - 卡吉镇'],
	risingBadge: ['Rising Badge - Blackthorn City', 'Medalla Dragón - Ciudad Endrino', '升龙徽章 - 烟墨市'],
}

export class MenuPlayer extends MenuComponent {
	constructor(menu) {
		super(menu);	
		this.key = 'player';
		this.render();
	}

	render() {
		const lang = this.menu.main.lang;

		this.bgImage = new Element(this.container, { className: 'menu-player-bg-image' }).element;
		this.name = new Element(this.container, { className: 'menu-player-name', text: this.menu.main.player.name.toUpperCase() }).element;
		this.sprite = new Element(this.container, { className: 'menu-player-sprite', image: this.menu.main.player.sprite }).element;

		this.statContainer = new Element(this.container, { className: 'menu-player-stat-container' }).element;
		this.stats = [];

		STATS.forEach(stat => {
			this.stats[stat] = new Element(this.statContainer, { className: 'menu-player-stat' }).element;
		})
		
		this.badgeContainer = new Element(this.container, { className: 'menu-player-badge-container' }).element;
		this.badges = [];
		this.tooltip = [];

		BADGES.forEach((badge, i) => {
			this.badges[badge] = new Element(this.badgeContainer, { className: 'menu-player-badge', image: `./assets/images/badge/${BADGES[i]}.png` }).element;
			this.tooltip[badge] = new Tooltip(this.badges[badge], BADGE_DATA[badge][lang]);
		})

		this.hofLabel = new Element(this.container, { className: 'menu-player-hof-label', text: text.route.hallOfFame[lang] }).element;

		this.hofContainer = new Element(this.container, { className: 'menu-player-hof-container' }).element;
		this.hofs = [];

		for (let i = 0; i < 12; i++) {
			this.hofs[i] = new Element(this.hofContainer, { className: 'menu-player-hof' }).element;
		}
	}

	update() {
		const lang = this.menu.main.lang;
		const player = this.menu.main.player;
		
		this.stats['gold'].innerHTML = `
		  	<span class="menu-player-stat-label">${text.gameMenu.menuPlayer['gold'][lang]}</span>
		  	<span class="menu-player-stat-value">$${formatNumberWithCommas(player.gold)}</span>
		`;

		this.stats['pokedex'].innerHTML = `
		  	<span class="menu-player-stat-label">${text.gameMenu.menuPlayer['pokedex'][lang]}</span>
		  	<span class="menu-player-stat-value">${this.menu.main.pokedex.totalSeen()}/${Object.keys(this.menu.main.pokedex.pokemon).length} 
		  	${this.menu.main.pokedex.totalCatched()}/${Object.keys(this.menu.main.pokedex.pokemon).length}</span>
		`;

		this.stats['badges'].innerHTML = `
		  	<span class="menu-player-stat-label">${text.gameMenu.menuPlayer['badges'][lang]}</span>
		  	<span class="menu-player-stat-value">${player.badges.length}/16</span>
		`;

		this.stats['start'].innerHTML = `
		  	<span class="menu-player-stat-label">${text.gameMenu.menuPlayer['start'][lang]}</span>
		  	<span class="menu-player-stat-value">${player.start}</span>
		`;	

		this.stats['time'].innerHTML = `
		  	<span class="menu-player-stat-label">${text.gameMenu.menuPlayer['time'][lang]}</span>
		  	<span class="menu-player-stat-value">${player.getTimePlayed()}</span>
		`;

		player.badges.forEach((badge => {
			this.badges[badge].style.filter = "brightness(1)";
		}))

		for (let i = 0; i < 2; i++) {
			player.hof[i].forEach((pokemon, indx) => {
				this.hofs[(i*6)+indx].style.backgroundImage = `url("${pokemon.portrait}")`;
			})
		}
	}

	open() {
		super.open(); 
	    this.update();
	}
}
