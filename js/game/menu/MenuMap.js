import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { playSound } from '../../file/audio.js';
import { item }  from '../data/item/itemData.js';
import { text } from '../../file/text.js';

export class MenuMap extends MenuComponent {
	constructor(menu) {
		super(menu);	
		this.key = 'map';
		this.regionSelected = 0;
		this.render();
	}

	render() {
		const lang = this.menu.main.lang;

		this.map = new Element(this.container, {className: 'menu-map'}).element;
		this.title = new Element(this.map, { className: 'menu-map-title super-stroke', text: text.route.regionJohto[lang] }).element;
		this.selectedUbication = new Element(this.container, { className: 'menu-map-selected-ubication super-stroke' }).element;

		this.johto = {};
		this.kanto = {};
		this.apachan = {};

		Object.keys(UBICATION_JOHTO).forEach(ubication => {
			UBICATION_JOHTO[ubication].pos.forEach((tile, n) => {
				this.johto[`${ubication}-${n}`] = new Element(this.map, { className: 'menu-map-ubication' }).element;
				this.johto[`${ubication}-${n}`].style.left = `${UBICATION_JOHTO[ubication].pos[n].x * 11.875 }px`;
				this.johto[`${ubication}-${n}`].style.top = `${1 + UBICATION_JOHTO[ubication].pos[n].y * 11.8235 }px`;
				this.johto[`${ubication}-${n}`].style.width = `${UBICATION_JOHTO[ubication].size[n].w * 11.875 }px`;
				this.johto[`${ubication}-${n}`].style.height = `${UBICATION_JOHTO[ubication].size[n].h * 11.8235 }px`;
				this.johto[`${ubication}-${n}`].addEventListener('mouseenter', () => { this.hoverUbication(UBICATION_JOHTO[ubication].name[lang] || UBICATION_JOHTO[ubication].name[0]) });
				this.johto[`${ubication}-${n}`].addEventListener('mouseleave', () => { this.selectedUbication.innerHTML = "" });
			})

			if (UBICATION_JOHTO[ubication].tp) this.johto[`${ubication}-0`].addEventListener('click', () => { this.tryTeleport(UBICATION_JOHTO[ubication]) })
		})

		Object.keys(UBICATION_KANTO).forEach(ubication => {
			UBICATION_KANTO[ubication].pos.forEach((tile, n) => {
				this.kanto[`${ubication}-${n}`] = new Element(this.map, { className: 'menu-map-ubication' }).element;
				this.kanto[`${ubication}-${n}`].style.left = `${UBICATION_KANTO[ubication].pos[n].x * 11.875 }px`;
				this.kanto[`${ubication}-${n}`].style.top = `${UBICATION_KANTO[ubication].pos[n].y * 11.8235 }px`;
				this.kanto[`${ubication}-${n}`].style.width = `${UBICATION_KANTO[ubication].size[n].w * 11.875 }px`;
				this.kanto[`${ubication}-${n}`].style.height = `${UBICATION_KANTO[ubication].size[n].h * 11.8235 }px`;
				this.kanto[`${ubication}-${n}`].addEventListener('mouseenter', () => { this.hoverUbication(UBICATION_KANTO[ubication].name[lang] || UBICATION_KANTO[ubication].name[0]) });
				this.kanto[`${ubication}-${n}`].addEventListener('mouseleave', () => { this.selectedUbication.innerHTML = "" });
			})

			if (UBICATION_KANTO[ubication].tp) this.kanto[`${ubication}-0`].addEventListener('click', () => { this.tryTeleport(UBICATION_KANTO[ubication]) })
		})

		Object.keys(UBICATION_APACHAN).forEach(ubication => {
			UBICATION_APACHAN[ubication].pos.forEach((tile, n) => {
				this.apachan[`${ubication}-${n}`] = new Element(this.map, { className: 'menu-map-ubication' }).element;
				this.apachan[`${ubication}-${n}`].style.left = `${UBICATION_APACHAN[ubication].pos[n].x * 11.875 }px`;
				this.apachan[`${ubication}-${n}`].style.top = `${UBICATION_APACHAN[ubication].pos[n].y * 11.8235 }px`;
				this.apachan[`${ubication}-${n}`].style.width = `${UBICATION_APACHAN[ubication].size[n].w * 11.875 }px`;
				this.apachan[`${ubication}-${n}`].style.height = `${UBICATION_APACHAN[ubication].size[n].h * 11.8235 }px`;
				this.apachan[`${ubication}-${n}`].addEventListener('mouseenter', () => { this.hoverUbication(UBICATION_APACHAN[ubication].name[lang] || UBICATION_APACHAN[ubication].name[0]) });
				this.apachan[`${ubication}-${n}`].addEventListener('mouseleave', () => { this.selectedUbication.innerHTML = "" });
			})

			if (UBICATION_APACHAN[ubication].tp) this.apachan[`${ubication}-0`].addEventListener('click', () => { this.tryTeleport(UBICATION_APACHAN[ubication]) })
		})

		this.arrowRight = new Element(this.map, { className: 'menu-map-arrow-kanto super-stroke', text: '►' }).element;
		this.arrowLeft = new Element(this.map, { className: 'menu-map-arrow-johto super-stroke', text: '◄' }).element;

		this.arrowRight.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.arrowLeft.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.arrowRight.addEventListener('click', () => {
			playSound('option', 'ui');
			this.displayRegion(1);
		})
		this.arrowLeft.addEventListener('click', () => {
			playSound('option', 'ui');
			this.displayRegion(-1);
		})
	}

	displayRegion(pos) {
		this.regionSelected += pos;
		if (this.regionSelected == -1) this.regionSelected = 2;
		if (this.regionSelected == 2 && !this.menu.main.player.apachan) this.regionSelected = 1;
		if (this.regionSelected > 2 ) this.regionSelected = 0;

		if (this.regionSelected == 0) this.displayJohto()
		if (this.regionSelected == 1) this.displayKanto()
		if (this.regionSelected == 2) this.displayApachan()
	}

	displayJohto() {
		this.regionSelected = 0;
		const lang = this.menu.main.lang;
		this.map.style.backgroundImage = `url("./assets/images/map/johto.png")`;
		this.title.innerText = text.route.regionJohto[lang];

		Object.keys(UBICATION_JOHTO).forEach(ubication => {

			UBICATION_JOHTO[ubication].pos.forEach((tile, n) => {
				this.johto[`${ubication}-${n}`].style.display = 'block';
				if (UBICATION_JOHTO[ubication].name[0] == this.menu.main.player.location.name[0]) {
					this.johto[`${ubication}-${n}`].classList.add('flash-yellow');
				} else this.johto[`${ubication}-${n}`].className = 'menu-map-ubication';
			})
		})

		Object.keys(UBICATION_KANTO).forEach(ubication => {
			UBICATION_KANTO[ubication].pos.forEach((tile, n) => {
				this.kanto[`${ubication}-${n}`].style.display = 'none';
			})
		})

		Object.keys(UBICATION_APACHAN).forEach(ubication => {
			UBICATION_APACHAN[ubication].pos.forEach((tile, n) => {
				this.apachan[`${ubication}-${n}`].style.display = 'none';
			})
		})

		this.arrowRight.style.display = 'block';
		(!this.menu.main.player.apachan) ? this.arrowLeft.style.display = 'none' : this.arrowLeft.style.display = 'block';
	}

	displayKanto() {
		this.regionSelected = 1;
		const lang = this.menu.main.lang;
		this.map.style.backgroundImage = `url("./assets/images/map/kanto.png")`;
		this.title.innerText = text.route.regionKanto[lang];

		Object.keys(UBICATION_KANTO).forEach(ubication => {
			UBICATION_KANTO[ubication].pos.forEach((tile, n) => {
				this.kanto[`${ubication}-${n}`].style.display = 'block';
				if (UBICATION_KANTO[ubication].name[0] == this.menu.main.player.location.name[0]) {
					this.kanto[`${ubication}-${n}`].classList.add('flash-yellow');
				} else this.kanto[`${ubication}-${n}`].className = 'menu-map-ubication';
			})
		})

		Object.keys(UBICATION_JOHTO).forEach(ubication => {
			UBICATION_JOHTO[ubication].pos.forEach((tile, n) => {
				this.johto[`${ubication}-${n}`].style.display = 'none';
			})
		})

		Object.keys(UBICATION_APACHAN).forEach(ubication => {
			UBICATION_APACHAN[ubication].pos.forEach((tile, n) => {
				this.apachan[`${ubication}-${n}`].style.display = 'none';
			})
		})

		this.arrowLeft.style.display = 'block';
		(!this.menu.main.player.apachan) ? this.arrowRight.style.display = 'none' : this.arrowRight.style.display = 'block';
	}

	displayApachan() {
		this.regionSelected = 2;
		const lang = this.menu.main.lang;
		this.map.style.backgroundImage = `url("./assets/images/map/apachan.png")`;
		this.title.innerText = text.route.regionApachan[lang];

		Object.keys(UBICATION_APACHAN).forEach(ubication => {
			UBICATION_APACHAN[ubication].pos.forEach((tile, n) => {
				this.apachan[`${ubication}-${n}`].style.display = 'block';
				if (UBICATION_APACHAN[ubication].name[0] == this.menu.main.player.location.name[0]) {
					this.apachan[`${ubication}-${n}`].classList.add('flash-yellow');
				} else this.apachan[`${ubication}-${n}`].className = 'menu-map-ubication';
			})
		})

		Object.keys(UBICATION_JOHTO).forEach(ubication => {
			UBICATION_JOHTO[ubication].pos.forEach((tile, n) => {
				this.johto[`${ubication}-${n}`].style.display = 'none';
			})
		})

		Object.keys(UBICATION_KANTO).forEach(ubication => {
			UBICATION_KANTO[ubication].pos.forEach((tile, n) => {
				this.kanto[`${ubication}-${n}`].style.display = 'none';
			})
		})

		this.arrowRight.style.display = 'block';
		this.arrowLeft.style.display = 'block';
	}

	hoverUbication(ubication) {
		this.selectedUbication.innerHTML = ubication;
	}

	tryTeleport(ubication) {
		let item = this.menu.main.inventory.searchItem(ubication.tp.item);
		if (item) {
			playSound('teleport', 'ui');
			this.menu.close(true);
			if (item.use.city) this.menu.main.location.loadLocation(this.menu.main.cityData[item.use.city]);
			else this.menu.main.location.loadLocation(this.menu.main.routeData[item.use.route]);
			this.menu.main.inventory.removeItem(item);
			this.menu.main.player.region = item.use.region;
		}
	}

	open() {
		super.open(); 
		this.regionSelected = this.menu.main.player.region;
	    if (this.regionSelected == 0) this.displayJohto();
	    else if (this.regionSelected == 1) this.displayKanto()
	    else this.displayApachan();
	}
}

const UBICATION_APACHAN = {
	route56: {
		name: ['Route 56', 'Ruta 56', '56号道路'],
		pos: [{ x: 14, y: 18 }],
		size: [{ w: 1, h: 3 }],
	},
	pokemonLab: {
		name: ['Pokémon Lab.', 'Laboratorio Pokémon', '宝可梦研究所'],
		pos: [{ x: 14, y: 18 }],
		size: [{ w: 1, h: 1 }]
	},
	lithicTown: {
		name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
		pos: [{ x: 14, y: 21 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpLithicTown'
		}
	},
	route57: {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		pos: [{ x: 15, y: 21 }],
		size: [{ w: 7, h: 1 }],
	},
	route62: {
		name: ['Route 62', 'Ruta 62', '62号道路'],
		pos: [{ x: 17, y: 18 }],
		size: [{ w: 1, h: 3 }],
	},
	flintCity: {
		name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
		pos: [{ x: 16, y: 16 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpFlintCity'
		}
	},
	route59: {
		name: ['Route 59', 'Ruta 59', '59号道路'],
		pos: [{ x: 22, y: 21 }],
		size: [{ w: 1, h: 1 }],
	},
	route60: {
		name: ['Route 60', 'Ruta 60', '60号道路'],
		pos: [{ x: 23, y: 21 }, { x: 29, y: 22 }],
		size: [{ w: 7, h: 1 }, { w: 1, h: 1 }],
	},
	route61: {
		name: ['Route 61', 'Ruta 61', '61号道路'],
		pos: [{ x: 29, y: 17 }],
		size: [{ w: 1, h: 4 }],
	},
	battleCenter: {
		name: ['Battle Center', 'Centro Batalla', '对战中心'],
		pos: [{ x: 29, y: 17 }],
		size: [{ w: 1, h: 1 }],
	},
	marbleCity: {
		name: ['Marble City', 'Ciudad Mármol', '大理石市'],
		pos: [{ x: 28, y: 23 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpMarbleCity'
		}
	},
	route55: {
		name: ['Route 55', 'Ruta 55', '55号道路'],
		pos: [{ x: 10, y: 21 }],
		size: [{ w: 4, h: 1 }],
	},
	route54: {
		name: ['Route 54', 'Ruta 54', '54号道路'],
		pos: [{ x: 10, y: 22 }],
		size: [{ w: 1, h: 4 }],
	},
	route53: {
		name: ['Route 53', 'Ruta 53', '53号道路'],
		pos: [{ x: 8, y: 24 }],
		size: [{ w: 2, h: 1 }],
	},
	route52: {
		name: ['Route 52', 'Ruta 52', '52号道路'],
		pos: [{ x: 10, y: 26 }, { x: 11, y: 27 }],
		size: [{ w: 1, h: 2 }, { w: 1, h: 1 }],
	},
	brokenStoneCity: {
		name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'],
		pos: [{ x: 12, y: 26 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpBrokenStoneCity'
		}
	},
	route51: {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		pos: [{ x: 14, y: 26 }, { x: 16, y: 24 }, { x: 17, y: 24 }, { x: 17, y: 27 }, { x: 19, y: 25 }, { x: 20, y: 26 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 4 }, { w: 2, h: 1 }, { w: 2, h: 1 }, { w: 1, h: 3 }, { w: 2, h: 1 }],
	},
	opalTown: {
		name: ['Opal Town', 'Pueblo Ópalo', '蛋白镇'],
		pos: [{ x: 19, y: 24 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpOpalTown'
		}
	},
	route58: {
		name: ['Route 58', 'Ruta 58', '58号道路'],
		pos: [{ x: 20, y: 24 }, { x: 21, y: 22 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 2 }],
	},
	steelCave: {
		name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
		pos: [{ x: 22, y: 26 }, { x: 23, y: 26 }, { x: 23, y: 28 }],
		size: [{ w: 1, h: 1 }, { w: 1, h: 2 }, { w: 2, h: 1 }],
	},
	route50: {
		name: ['Route 50', 'Ruta 50', '50号道路'],
		pos: [{ x: 25, y: 28 }],
		size: [{ w: 3, h: 1 }],
	},
	route63: {
		name: ['Route 63', 'Ruta 63', '63号道路'],
		pos: [{ x: 17, y: 12 }],
		size: [{ w: 1, h: 4 }],
	},
	route64: {
		name: ['Route 64', 'Ruta 64', '64号道路'],
		pos: [{ x: 16, y: 13 }],
		size: [{ w: 1, h: 1 }],
	},
	vitreousCity: {
		name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
		pos: [{ x: 14, y: 12 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpVitreousCity'
		}
	},
	route65: {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		pos: [{ x: 13, y: 13 }, { x: 12, y: 11 }],
		size: [{ w: 1, h: 1 }, { w: 1, h: 4 }],
	},
	narrowPassage: {
		name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
		pos: [{ x: 12, y: 15 }],
		size: [{ w: 1, h: 3 }],
	},
	ancientTunnel: {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		pos: [{ x: 12, y: 8 }, { x: 13, y: 8 }],
		size: [{ w: 1, h: 3 }, { w: 8, h: 1 }],
	},
	route66: {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		pos: [{ x: 20, y: 9 }, { x: 22, y: 11 }, { x: 21, y: 10 }],
		size: [{ w: 1, h: 2 }, { w: 1, h: 1 }, { w: 4, h: 1 }],
	},
	route67: {
		name: ['Route 67', 'Ruta 67', '67号道路'],
		pos: [{ x: 22, y: 12 }],
		size: [{ w: 1, h: 5 }],
	},
	tarpatchTown: {
		name: ['Tarpatch Town', 'Pueblo Alquitrán', '柏油镇'],
		pos: [{ x: 25, y: 10 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpTarpatchTown'
		}
	},
	route68: {
		name: ['Route 68', 'Ruta 68', '68号道路'],
		pos: [{ x: 26, y: 10 }],
		size: [{ w: 2, h: 1 }],
	},
	dragonLair: {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		pos: [{ x: 28, y: 10 }, { x: 30, y: 11 }],
		size: [{ w: 3, h: 1 }, { w: 1, h: 1 }],
	},
	mirageIsland: {
		name: ['Mirage Island', 'Isla espejismo', '幻影岛'],
		pos: [{ x: 34, y: 14 }, { x: 35, y: 15 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 1 }],
	},
}

const UBICATION_JOHTO = {
	newBarkTown: {
		name: ['New Bark Town', 'Pueblo Primavera', '若叶镇'],
		pos: [{ x: 34, y: 20 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpNewbarkTown'
		}
	},
	route27: {
		name: ['Route 27', 'Ruta 27', '27号道路'],
		pos: [{ x: 35, y: 20 }],
		size: [{ w: 6, h: 1 }]
	},
	route29: {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		pos: [{ x: 29, y: 20 }, { x: 32, y: 21 }],
		size: [{ w: 5, h: 1 }, { w: 1, h: 1 }]
	},
	route49: {
		name: ['Route 49', 'Ruta 49', '49号道路'],
		pos: [{ x: 32, y: 22 }, { x: 31, y: 25 }],
		size: [{ w: 1, h: 4 }, { w: 1, h: 1 }]
	},
	route46: {
		name: ['Route 46', 'Ruta 46', '46号道路'],
		pos: [{ x: 31, y: 17 }, { x: 32, y: 14 }],
		size: [{ w: 1, h: 3 }, { w: 1, h: 4 }, ]
	},
	mansion: {
		name: ['Mansion', 'Mansión', '大宅'],
		pos: [{ x: 30, y: 19 }],
		size: [{ w: 1, h: 1 }]
	},
	cherrygroveCity: {
		name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
		pos: [{ x: 27, y: 20 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpCherrygroveCity'
		}
	},
	cherryGrovrIslet: {
		name: ['Cherry Islet', 'Islote Cereza', '樱花小岛'],
		pos: [{ x: 25, y: 21 }],
		size: [{ w: 2, h: 1 }],
	},
	cherryGrotto: {
		name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
		pos: [{ x: 28, y: 22 }],
		size: [{ w: 1, h: 1 }],
	},
	route30: {
		name: ['Route 30', 'Ruta 30', '30号道路'],
		pos: [{ x: 27, y: 16 }],
		size: [{ w: 1, h: 4 }]
	},
	route31: {
		name: ['Route 31', 'Ruta 31', '31号道路'],
		pos: [{ x: 26, y: 15 }, { x: 29, y: 16 }],
		size: [{ w: 4, h: 1 }, { w: 1, h: 4 }]
	},
	violetCity: {
		name: ['Violet City', 'Ciudad Malva', '桔梗市'],
		pos: [{ x: 23, y: 14 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpVioletCity'
		}
	},
	route32: {
		name: ['Route 32', 'Ruta 32', '32号道路'],
		pos: [{ x: 24, y: 16 }, { x: 23, y: 17 }],
		size: [{ w: 1, h: 2 }, { w: 1, h: 7 }]
	},
	unionCave: {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		pos: [{ x: 21, y: 23 }, { x: 22, y: 23 }, { x: 20, y: 25 }],
		size: [{ w: 1, h: 3 }, { w: 1, h: 1 }, { w: 1, h: 1 }]
	},
	route33: {
		name: ['Route 33', 'Ruta 33', '33号道路'],
		pos: [{ x: 18, y: 25 }, { x: 19, y: 26 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 1 }]
	},
	azaleaTown: {
		name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
		pos: [{ x: 16, y: 25 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpAzaleaTown'
		}
	},
	ilexForest: {
		name: ['Ilex Forest', 'Encinar', '桐树林'],
		pos: [{ x: 16, y: 23 }],
		size: [{ w: 1, h: 2 }]
	},
	route34: {
		name: ['Route 34', 'Ruta 34', '34号道路'],
		pos: [{ x: 16, y: 21 }],
		size: [{ w: 1, h: 2 }]	
	},
	GoldenrodCity: {
		name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
		pos: [{ x: 15, y: 19 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpGoldenrodCity'
		}
	},
	route35: {
		name: ['Route 35', 'Ruta 35', '35号道路'],
		pos: [{ x: 16, y: 17 }],
		size: [{ w: 1, h: 2 }]
	},
	route36: {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		pos: [{ x: 16, y: 14 }, { x: 17, y: 15 }, { x: 20, y: 14 }, { x: 22, y: 16 }],
		size: [{ w: 1, h: 3 }, { w: 6, h: 1 }, { w: 1, h: 1 }, { w: 1, h: 1 }]
	},
	ruinsOfAlph: {
		name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
		pos: [{ x: 22, y: 17 }],
		size: [{ w: 1, h: 1 }]
	},
	route37: {
		name: ['Route 37', 'Ruta 37', '37号道路'],
		pos: [{ x: 16, y: 12 }],
		size: [{ w: 1, h: 2 }]	
	},
	nationalPark: {
		name: ['National Park', 'Parque Nacional', '自然公园'],
		pos: [{ x: 15, y: 17 }],
		size: [{ w: 1, h: 1 }]
	},
	ecruteakCity: {
		name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'],
		pos: [{ x: 16, y: 10 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpEcruteakCity'
		}
	},
	burnedBurrow: {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		pos: [{ x: 16, y: 9 }],
		size: [{ w: 1, h: 1 }]
	},
	route38: {
		name: ['Route 38', 'Ruta 38', '38号道路'],
		pos: [{ x: 14, y: 10 }, { x: 14, y: 8 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 2 }]
	},
	lithicForest: {
		name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
		pos: [{ x: 10, y: 10 }],
		size: [{ w: 4, h: 1 }]
	},
	route39: {
		name: ['Route 39', 'Ruta 39', '39号道路'],
		pos: [{ x: 9, y: 10 }],
		size: [{ w: 1, h: 2 }]
	},
	olivineCity: {
		name: ['Olivine City', 'Ciudad Olivo', '浅葱市'],
		pos: [{ x: 8, y: 12 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpOlivineCity'
		}
	},
	route40: {
		name: ['Route 40', 'Ruta 40', '40号道路'],
		pos: [{ x: 8, y: 14 }],
		size: [{ w: 1, h: 1 }]
	},
	route41: {
		name: ['Route 41', 'Ruta 41', '41号道路'],
		pos: [{ x: 8, y: 15 }, { x: 8, y: 18 }, { x: 7, y: 21 }],
		size: [{ w: 1, h: 2 }, { w: 1, h: 4 }, { w: 1, h: 1 }]
	},
	whirlCave: {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		pos: [{ x: 8, y: 17 }],
		size: [{ w: 1, h: 1 }]
	},
	cianwoodCity: {
		name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'],
		pos: [{ x: 5, y: 21 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpCianwoodCity'
		}
	},
	cliffEdgeGate: {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		pos: [{ x: 3, y: 22 }, { x: 3, y: 20 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 2 }]
	},
	route47: {
		name: ['Route 47', 'Ruta 47', '47号道路'],
		pos: [{ x: 3, y: 18 }],
		size: [{ w: 1, h: 2 }]
	},
	route48: {
		name: ['Route 48', 'Ruta 48', '48号道路'],
		pos: [{ x: 4, y: 15 }],
		size: [{ w: 1, h: 4 }]
	},
	safariZone: {
		name: ['Safari Zone', 'Zona Safari', '狩猎地带'],
		pos: [{ x: 4, y: 14 }],
		size: [{ w: 1, h: 1 }]
	},
	route42: {
		name: ['Route 42', 'Ruta 42', '42号道路'],
		pos: [{ x: 18, y: 10 }, { x: 19, y: 11 }],
		size: [{ w: 6, h: 1 }, { w: 1, h: 1 }]
	},
	mtMortar: {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		pos: [{ x: 19, y: 9 }],
		size: [{ w: 4, h: 1 }]
	},
	mahoganyTown: {
		name: ['Mahogany Town', 'Pueblo Caoba', '卡吉镇'],
		pos: [{ x: 24, y: 10 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpMahoganyTown'
		}
	},
	route43: {
		name: ['Route 43', 'Ruta 43', '43号道路'],
		pos: [{ x: 24, y: 7 }],
		size: [{ w: 1, h: 3 }]
	},
	lakeOfRage: {
		name: ['Lake of Rage', 'Lago de la Furia', '愤怒之湖'], 
		pos: [{ x: 24, y: 6 }],
		size: [{ w: 1, h: 1 }]
	},
	route44: {
		name: ['Route 44', 'Ruta 44', '44号道路'],
		pos: [{ x: 25, y: 10 }, { x: 28, y: 8 }],
		size: [{ w: 4, h: 1 }, { w: 1, h: 2 }]
	},
	icePath: {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		pos: [{ x: 29, y: 8 }, { x: 31, y: 5 }, { x: 32, y: 5 }],
		size: [{ w: 3, h: 1 }, { w: 1, h: 3 }, { w: 4, h: 1 }]
	},
	blackthornCity: {
		name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
		pos: [{ x: 33, y: 6 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpBlackthornCity'
		}
	},
	blackthornCliff: {
		name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'], 
		pos: [{ x: 33, y: 8 }],
		size: [{ w: 1, h: 1 }]
	},
	route45: {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		pos: [{ x: 33, y: 14 }, { x: 36, y: 7 }, { x: 34, y: 9 }, { x: 34, y: 10 }],
		size: [{ w: 4, h: 1 }, { w: 1, h: 7 },  { w: 2, h: 1 },  { w: 1, h: 1 }]
	},
	darkCave: {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		pos: [{ x: 37, y: 11 }, { x: 33, y: 15 }, { x: 34, y: 13 }, { x: 29, y: 12 }, { x: 29, y: 13 }],
		size: [{ w: 1, h: 2 }, { w: 2, h: 1 }, { w: 1, h: 1 }, { w: 7, h: 1 }, { w: 1, h: 2 }]
	}
}

const UBICATION_KANTO = {
	palletTown: {
		name: ['Pallet Town', 'Pueblo Paleta', '真新镇'],
		pos: [{ x: 18, y: 15 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpPalletTown'
		}
	},
	route1: {
		name: ['Route 1', 'Ruta 1', '1号道路'],
		pos: [{ x: 18, y: 14 }],
		size: [{ w: 1, h: 1 }]
	},
	route21: {
		name: ['Route 21', 'Ruta 21', '21号道路'],
		pos: [{ x: 18, y: 16 }, { x: 19, y: 22 }, { x: 22, y: 22 }],
		size: [{ w: 1, h: 7 }, { w: 3, h: 1 }, { w: 1, h: 7 }]
	},
	cinnabarIsland: {
		name: ['Cinnabar Island', 'Isla Canela', '红莲岛'],
		pos: [{ x: 22, y: 29 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpCinnabarIsland'
		}
	},
	viridianCity: {
		name: ['Viridian City', 'Ciudad Verde', '常磐市'],
		pos: [{ x: 17, y: 12 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpViridianCity'
		}
	},
	route2: {
		name: ['Route 2', 'Ruta 2', '2号道路'],
		pos: [{ x: 16, y: 12 }, { x: 15, y: 9 }],
		size: [{ w: 1, h: 1 }, { w: 1, h: 1 }]
	},
	stormShortcut: {
		name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
		pos: [{ x: 12, y: 12 }],
		size: [{ w: 4, h: 1 }]
	},
	viridianForest: {
		name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
		pos: [{ x: 15, y: 11 }, { x: 15, y: 10 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 1 }]
	},
	pewtwerCity: {
		name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
		pos: [{ x: 15, y: 7 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpPewterCity'
		}
	},
	route3: {
		name: ['Route 3', 'Ruta 3', '3号道路'],
		pos: [{ x: 17, y: 7 }],
		size: [{ w: 2, h: 1 }]
	},
	route4: {
		name: ['Route 4', 'Ruta 4', '4号道路'],
		pos: [{ x: 18, y: 5 }, { x: 22, y: 5 }],
		size: [{ w: 1, h: 2 }, { w: 3, h: 1 }]
	},
	mtMoon: {
		name: ['Mt. Moon', 'Monte Moon', '月见山'],
		pos: [{ x: 18, y: 4 }],
		size: [{ w: 5, h: 1 }]
	},
	ceruleanCity: {
		name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
		pos: [{ x: 25, y: 4 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpCeruleanCity'
		}
	},
	route24: {
		name: ['Route 24', 'Ruta 24', '24号道路'],
		pos: [{ x: 26, y: 3 }],
		size: [{ w: 1, h: 1 }]
	},
	route25: {
		name: ['Route 25', 'Ruta 25', '25号道路'],
		pos: [{ x: 26, y: 2 }],
		size: [{ w: 2, h: 1 }]
	},
	route9: {
		name: ['Route 9', 'Ruta 9', '9号道路'],
		pos: [{ x: 28, y: 5 }],
		size: [{ w: 5, h: 1 }]
	},
	route10: {
		name: ['Route 10', 'Ruta 10', '10号道路'],
		pos: [{ x: 33, y: 5 }, { x: 33, y: 8 }],
		size: [{ w: 1, h: 2 }, { w: 1, h: 1 }]
	},
	powerPlant: {
		name: ['Power Plant', 'Central Eléctrica', '发电厂'],
		pos: [{ x: 33, y: 7 }],
		size: [{ w: 1, h: 1 }]
	},
	lavenderTown: {
		name: ['Lavender Town', 'Pueblo Lavanda', '紫苑镇'],
		pos: [{ x: 33, y: 9 }],
		size: [{ w: 1, h: 1 }],
		tp: {
			item: 'tpLavenderTown'
		}
	},
	rockTunnel: {
		name: ['Rock Tunnel', 'Tunel roca', '岩山隧道'],
		pos: [{ x: 32, y: 6 }],
		size: [{ w: 1, h: 3 }]
	},
	route8: {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		pos: [{ x: 29, y: 9 }, { x: 30, y: 10 }, { x: 31, y: 12 }],
		size: [{ w: 4, h: 1 }, { w: 1, h: 3 }, { w: 2, h: 1 }]
	},
	mtEmber: {
		name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
		pos: [{ x: 33, y: 12 }],
		size: [{ w: 1, h: 1 }]
	},
	route11: {
		name: ['Route 11', 'Ruta 11', '11号道路'],
		pos: [{ x: 28, y: 14 }, { x: 30, y: 13 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 4 }]
	},
	route14: {
		name: ['Route 14', 'Ruta 14', '14号道路'],
		pos: [{ x: 30, y: 17 }],
		size: [{ w: 1, h: 2 }]
	},
	route15: {
		name: ['Route 15', 'Ruta 15', '15号道路'],
		pos: [{ x: 27, y: 18 }, { x: 27, y: 17 }],
		size: [{ w: 3, h: 1 }, { w: 1, h: 1 }]
	},
	fuchsiaCity: {
		name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
		pos: [{ x: 25, y: 18 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpFuchsiaCity'
		}
	},
	route19: {
		name: ['Route 19', 'Ruta 19', '19号道路'],
		pos: [{ x: 25, y: 20 }],
		size: [{ w: 1, h: 10 }]
	},
	route20: {
		name: ['Route 20', 'Ruta 20', '20号道路'],
		pos: [{ x: 23, y: 29 }],
		size: [{ w: 2, h: 1 }]
	},
	seafomCave: {
		name: ['Seafom Cave', 'Cueva Espuma', '双子洞窟'],
		pos: [{ x: 25, y: 30 }],
		size: [{ w: 1, h: 1 }]
	},
	saffronCity: {
		name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
		pos: [{ x: 26, y: 9 }],
		size: [{ w: 3, h: 2 }],
		tp: {
			item: 'tpSaffronCity'
		}
	},
	route6: {
		name: ['Route 6', 'Ruta 6', '6号道路'],
		pos: [{ x: 26, y: 11 }],
		size: [{ w: 1, h: 2 }]
	},
	vermilionCity: {
		name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
		pos: [{ x: 26, y: 13 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpVermilionCity'
		}
	},
	route7: {
		name: ['Route 7', 'Ruta 7', '7号道路'],
		pos: [{ x: 25, y: 9 }],
		size: [{ w: 1, h: 1 }]
	},
	celadonCity: {
		name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
		pos: [{ x: 23, y: 9 }],
		size: [{ w: 2, h: 2 }],
		tp: {
			item: 'tpCeladonCity'
		}
	},
	route5: {
		name: ['Route 5', 'Ruta 5', '5号道路'],
		pos: [{ x: 26, y: 6 }],
		size: [{ w: 1, h: 3 }]
	},
	route12: {
		name: ['Route 12', 'Ruta 12', '12号道路'],
		pos: [{ x: 31, y: 14 }, { x: 32, y: 15 }, { x: 31, y: 17 }],
		size: [{ w: 2, h: 1 }, { w: 1, h: 2 }, { w: 2, h: 1 }]
	},
	route13: {
		name: ['Route 13', 'Ruta 13', '13号道路'],
		pos: [{ x: 33, y: 15 }, { x: 34, y: 14 }],
		size: [{ w: 3, h: 1 }, { w: 1, h: 1 }]
	},
	hertzVault: {
		name: [`Hertz Vault`, `Bóveda de Hertz`, `赫兹地窖`],
		pos: [{ x: 36, y: 15 }],
		size: [{ w: 1, h: 1 }]
	},
	route27: {
		name: ['Route 27', 'Ruta 27', '27号道路'],
		pos: [{ x: 0, y: 20 }],
		size: [{ w: 4, h: 1 }]
	},
	route26: {
		name: ['Route 26', 'Ruta 26', '26号道路'],
		pos: [{ x: 4, y: 20 }, { x: 6, y: 18 }],
		size: [{ w: 4, h: 1 }, { w: 1, h: 2 }]
	},
	leagueReception: {
		name: ['Pokémon League Reception', 'Recepción de la Liga Pokémon', '联盟接待处'],
		pos: [{ x: 6, y: 17 }],
		size: [{ w: 1, h: 1 }]
	},
	victoryRoad: {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		pos: [{ x: 6, y: 12 }],
		size: [{ w: 1, h: 5 }]
	},
	route28: {
		name: ['Route 28', 'Ruta 28', '28号道路'],
		pos: [{ x: 5, y: 14 }, { x: 4, y: 13 }],
		size: [{ w: 1, h: 1 }, { w: 1, h: 2 }]
	},
	mtSilver: {
		name: ['Mt. Silver', 'Monte Plateado', '白银山'],
		pos: [{ x: 4, y: 11 }],
		size: [{ w: 1, h: 2 }]
	},
	indigoPlateau: {
		name: ['Indigo Plateau', 'Meseta Añil', '石英高原'],
		pos: [{ x: 6, y: 9 }],
		size: [{ w: 1, h: 3 }],
		tp: {
			item: 'tpIndigoPlateau'
		}
	},
	pokemonLeague: {
		name: ['Pokémon League', 'Liga Pokémon', '宝可梦联盟'],
		pos: [{ x: 6, y: 9 }],
		size: [{ w: 1, h: 1 }]
	},
}