import { pokemon } from '../pokemon/pokemonData.js';

export const itemConsumable = {
	medicine: {
		key: 'medicine',
		name: ['Medicine', 'Medicina', '伤药'],
		description: [
			'Restores 10 HP to a Pokémon outside of battle.', 
			'Restaura 10PS a un Pokémon fuera de combate.', '在战斗外回复宝可梦10HP。'
		],
		image: './assets/images/item/medicine.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'heal',
			restore: 10
		},
		orderID: 0,
		price: 150
	},
	medicineStrong: {
		key: 'medicineStrong',
		name: ['Strong Medicine', 'Medicina Fuerte', '强效伤药'],
		description: [
			'Restores 40 HP to a Pokémon outside of battle.', 
			'Restaura 40PS a un Pokémon fuera de combate.', '在战斗外回复宝可梦40HP。'
		],
		image: './assets/images/item/medicine-strong.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'heal',
			restore: 40
		},
		orderID: 1,
		price: 400
	},
	medicineTotal: {
		key: 'medicineTotal',
		name: ['Medicine Total', 'Medicina Total', '全满伤药'],
		description: [
			'Restores 100 HP to a Pokémon outside of battle.', 
			'Restaura 100PS a un Pokémon fuera de combate.', '在战斗外回复宝可梦100HP。'
		],
		image: './assets/images/item/medicine-total.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'heal',
			restore: 100
		},
		orderID: 2,
		price: 600
	},
	revive: {
		key: 'revive',
		name: ['Revive', 'Revivir', '复活草'],
		description: [
			'Revives a Pokémon outside of battle.', 
			'Revive a un Pokémon fuera de combate.', '在战斗外复活宝可梦。'
		],
		image: './assets/images/item/revive.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'revive',
			restore: 1
		},
		orderID: 3,
		price: 1000
	},
	maxRevive: {
		key: 'maxRevive',
		name: ['Max Revive', 'Revivir Máximo', '全满复活草'],
		description: [
			'Revives and fully heals a Pokémon outside of battle.', 
			'Revive y cura totalmente a un Pokémon fuera de combate.', '在战斗外复活并完全回复宝可梦。'
		],
		image: './assets/images/item/max-revive.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'revive',
			restore: 999
		},
		orderID: 4,
		price: 2500
	},
	tpNewBarkTown: {
		key: 'tpNewbarkTown',
		name: ['TP New Bark Town', 'TP Pueblo Primavera', '传送石 若叶镇'],
		description: [
			'Teleport stone that takes you back to New Bark Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Primavera. Puede usarse desde el mapa.', '传送石，带你回到若叶镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'newBarkTown-1',
			region: 0
		},
		orderID: 5,
		price: 50
	},
	tpCherrygroveCity: {
		key: 'tpCherrygroveCity',
		name: ['TP Cherrygrove City', 'TP Ciudad Cerezo', '传送石 吉花市'],
		description: [
			'Teleport stone that takes you back to Cherrygrove City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Cerezo.  Puede usarse desde el mapa.', '传送石，带你回到吉花市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'cherrygroveCity-1',
			region: 0
		},
		orderID: 6,
		price: 50
	},
	tpVioletCity: {
		key: 'tpVioletCity',
		name: ['TP Violet City', 'TP Ciudad Malva', '传送石 桔梗市'],
		description: [
			'Teleport stone that takes you back to Violet City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Malva.  Puede usarse desde el mapa.', '传送石，带你回到桔梗市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'violetCity-1',
			region: 0
		},
		orderID: 7,
		price: 50
	},
	tpAzaleaTown: {
		key: 'tpAzaleaTown',
		name: ['TP Azalea Town', 'TP Pueblo Azalea', '传送石 桧皮镇'],
		description: [
			'Teleport stone that takes you back to Azalea Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Azalea.  Puede usarse desde el mapa.', '传送石，带你回到桧皮镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'azaleaTown-1',
			region: 0
		},
		orderID: 8,
		price: 50
	},
	tpGoldenrodCity: {
		key: 'tpGoldenrodCity',
		name: ['TP Goldenrod City', 'TP Ciudad Trigal', '传送石 满金市'],
		description: [
			'Teleport stone that takes you back to Goldenrod City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Trigal. Puede usarse desde el mapa.', '传送石，带你回到满金市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'goldenrodCity-1',
			region: 0
		},
		orderID: 9,
		price: 50
	},
	tpEcruteakCity: {
		key: 'tpEcruteakCity',
		name: ['TP Ecruteak City', 'TP Ciudad Iris', '传送石 圆朱市'],
		description: [
			'Teleport stone that takes you back to Ecruteak City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Iris. Puede usarse desde el mapa.', '传送石，带你回到圆朱市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'ecruteakCity-1',
			region: 0
		},
		orderID: 10,
		price: 50
	},
	tpOlivineCity: {
		key: 'tpOlivineCity',
		name: ['TP Olivine City', 'TP Ciudad Olivo', '传送石 浅葱市'],
		description: [
			'Teleport stone that takes you back to Olivine City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Olivo. Puede usarse desde el mapa.', '传送石，带你回到浅葱市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'olivineCity-1',
			region: 0
		},
		orderID: 11,
		price: 50
	},
	tpMahoganyTown: {
		key: 'tpMahoganyTown',
		name: ['TP Mahogany Town', 'TP Pueblo Caoba', '传送石 卡吉镇'],
		description: [
			'Teleport stone that takes you back to Mahogany Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Caoba. Puede usarse desde el mapa.', '传送石，带你回到卡吉镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'mahoganyTown',
			region: 0
		},
		orderID: 12,
		price: 50
	},
	tpCianwoodCity: {
		key: 'tpCianwoodCity',
		name: ['TP Cianwood City', 'TP Ciudad Orquídea', '传送石 湛蓝市'],
		description: [
			'Teleport stone that takes you back to Cianwood City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Orquídea. Puede usarse desde el mapa.', '传送石，带你回到湛蓝市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'cianwoodCity-2',
			region: 0
		},
		orderID: 13,
		price: 50
	},
	tpBlackthornCity: {
		key: 'tpBlackthornCity',
		name: ['TP Blackthorn City', 'TP Ciudad Endrino', '传送石 烟墨市'],
		description: [
			'Teleport stone that takes you back to Blackthorn City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Endrino. Puede usarse desde el mapa.', '传送石，带你回到烟墨市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'blackthornCity-2',
			region: 0
		},
		orderID: 14,
		price: 50
	},
	tpPalletTown: {
		key: 'tpPalletTown',
		name: ['TP Pallet Town', 'TP Pueblo Paleta', '传送石 真新镇'],
		description: [
			'Teleport stone that takes you back to Pallet Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Paleta. Puede usarse desde el mapa.', '传送石，带你回到真新镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'palletTown-1',
			region: 1
		},
		orderID: 15,
		price: 50
	},
	tpViridianCity: {
		key: 'tpViridianCity',
		name: ['TP Viridian City', 'TP Ciudad Verde', '传送石 常磐市'],
		description: [
			'Teleport stone that takes you back to Viridian City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Verde. Puede usarse desde el mapa.', '传送石，带你回到常磐市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'viridianCity-1',
			region: 1
		},
		orderID: 16,
		price: 50
	},
	tpPewterCity: {
		key: 'tpPewterCity',
		name: ['TP Pewter City', 'TP Ciudad Plateada', '传送石 深灰市'],
		description: [
			'Teleport stone that takes you back to Pewter City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Plateada. Puede usarse desde el mapa.', '传送石，带你回到深灰市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'pewterCity-1',
			region: 1
		},
		orderID: 17,
		price: 50
	},
	tpCeruleanCity: {
		key: 'tpCeruleanCity',
		name: ['TP Cerulean City', 'TP Ciudad Celeste', '传送石 华蓝市'],
		description: [
			'Teleport stone that takes you back to Cerulean City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Celeste. Puede usarse desde el mapa.', '传送石，带你回到华蓝市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'ceruleanCity-3',
			region: 1
		},
		orderID: 18,
		price: 50
	},
	tpVermilionCity: {
		key: 'tpVermilionCity',
		name: ['TP Vermilion City', 'TP Ciudad Carmín', '传送石 枯叶市'],
		description: [
			'Teleport stone that takes you back to Vermilion City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Carmín. Puede usarse desde el mapa.', '传送石，带你回到枯叶市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'vermilionCity-2',
			region: 1
		},
		orderID: 19,
		price: 50
	},
	tpLavenderTown: {
		key: 'tpLavenderTown',
		name: ['TP Lavender Town', 'TP Pueblo Lavanda', '传送石 紫苑镇'],
		description: [
			'Teleport stone that takes you back to Lavender Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Lavanda. Puede usarse desde el mapa.', '传送石，带你回到紫苑镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'lavenderTown-1',
			region: 1
		},
		orderID: 20,
		price: 50
	},
	tpCeladonCity: {
		key: 'tpCeladonCity',
		name: ['TP Celadon City', 'TP Ciudad Azulona', '传送石 玉虹市'],
		description: [
			'Teleport stone that takes you back to Celadon City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Azulona. Puede usarse desde el mapa.', '传送石，带你回到玉虹市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'celadonCity-1',
			region: 1
		},
		orderID: 21,
		price: 50
	},
	tpSaffronCity: {
		key: 'tpSaffronCity',
		name: ['TP Saffron City', 'TP Ciudad Azafrán', '传送石 金黄市'],
		description: [
			'Teleport stone that takes you back to Saffron City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Azafrán. Puede usarse desde el mapa.', '传送石，带你回到金黄市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'saffronCity-1',
			region: 1
		},
		orderID: 22,
		price: 50
	},
	tpFuchsiaCity: {
		key: 'tpFuchsiaCity',
		name: ['TP Fuchsia City', 'TP Ciudad Fucsia', '传送石 浅红市'],
		description: [
			'Teleport stone that takes you back to Fuchsia City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Fucsia. Puede usarse desde el mapa.', '传送石，带你回到浅红市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'fuchsiaCity-1',
			region: 1
		},
		orderID: 23,
		price: 50
	},
	tpCinnabarIsland: {
		key: 'tpCinnabarIsland',
		name: ['TP Cinnabar Island', 'TP Isla Canela', '传送石 红莲岛'],
		description: [
			'Teleport stone that takes you back to Cinnabar Island. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Isla Canela. Puede usarse desde el mapa.', '传送石，带你回到红莲岛。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'cinnabarIsland-1',
			region: 1
		},
		orderID: 24,
		price: 50
	},
	tpIndigoPlateau: {
		key: 'tpIndigoPlateau',
		name: ['TP Indigo Plateau', 'TP Meseta Añil', '传送石 石英高原'],
		description: [
			'Teleport stone that takes you back to Indigo Plateau.', 
			'Telepiedra que te lleva de vuelta a Meseta Añil.', '传送石，带你回到石英高原。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			route: 'indigoPlateau-1',
			region: 1
		},
		orderID: 25,
		price: 50
	},
	tpLithicTown: {
		key: 'tpLithicTown',
		name: ['TP Lithic Town', 'TP Pueblo Lítico', '传送石 石之镇'],
		description: [
			'Teleport stone that takes you back to Lithic Town.  Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Lítico. Puede usarse desde el mapa.', '传送石，带你回到石之镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'lithicTown-2',
			region: 2
		},
		orderID: 26,
		price: 50
	},
	tpFlintCity: {
		key: 'tpFlintCity',
		name: ['TP Flint City', 'TP Ciudad Pedernal', '传送石 燧石市'],
		description: [
			'Teleport stone that takes you back to Flint City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Pedernal. Puede usarse desde el mapa.', '传送石，带你回到燧石市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'flintCity-1',
			region: 2
		},
		orderID: 27,
		price: 50
	},
	tpBrokenStoneCity: {
		key: 'tpBrokenStoneCity',
		name: ['TP Broken Stone City', 'TP Ciudad Piedraquebrada', '传送石 碎石市'],
		description: [
			'Teleport stone that takes you back to Broken Stone City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Piedraquebrada. Puede usarse desde el mapa.', '传送石，带你回到碎石市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'brokenStoneCity-1',
			region: 2
		},
		orderID: 28,
		price: 50
	},
	tpOpalTown: {
		key: 'tpOpalTown',
		name: ['TP Opal Town', 'TP Pueblo Ópalo', '传送石 蛋白镇'],
		description: [
			'Teleport stone that takes you back to Opal Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Ópalo. Puede usarse desde el mapa.', '传送石，带你回到蛋白镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'opalTown-1',
			region: 2
		},
		orderID: 29,
		price: 50
	},
	tpVitreousCity: {
		key: 'tpVitreousCity',
		name: ['TP Vitreous City', 'TP Ciudad Vítrea', '传送石 玻璃市'],
		description: [
			'Teleport stone that takes you back to Vitreous City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Vítrea. Puede usarse desde el mapa.', '传送石，带你回到玻璃市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'vitreousCity-1',
			region: 2
		},
		orderID: 30,
		price: 50
	},
	tpMarbleCity: {
		key: 'tpMarbleCity',
		name: ['TP Marble City', 'TP Ciudad Mármol', '传送石 大理石市'],
		description: [
			'Teleport stone that takes you back to Marble City. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Ciudad Mármol. Puede usarse desde el mapa.', '传送石，带你回到大理石市。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'marbleCity-1',
			region: 2
		},
		orderID: 31,
		price: 50
	},
	tpTarpatchTown: {
		key: 'tpTarpatchTown',
		name: ['TP Tarpatch Town', 'TP Pueblo Alquitrán', '传送石 柏油镇'],
		description: [
			'Teleport stone that takes you back to Tarpatch Town. Can be used from the map.', 
			'Telepiedra que te lleva de vuelta a Pueblo Alquitrán. Puede usarse desde el mapa.', '传送石，带你回到柏油镇。可从地图使用。'
		],
		image: './assets/images/item/tp.png',
		target: 'auto',
		type: 'consumable',
		use: {
			effect: 'teleport',
			city: 'tarpatchTown-1',
			region: 2
		},
		orderID: 32,
		price: 50
	},
	rareCandy: {
		key: 'rareCandy',
		name: ['Rare Candy', 'Carameloraro', '神奇糖果'],
		description: [
			'Levels up a Pokémon', 
			'Sube a un Pokémon de nivel.', '让宝可梦提升1级。'
		],
		image: './assets/images/item/rare-candy.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'levelUp',
		},
		orderID: 39,
		price: 25000
	},
	expCandy: {
		key: 'expCandy',
		name: ['Exp. Candy', 'Caramelo Exp.', '经验糖果'],
		description: [
			'Raises a Pokémon to level 50.', 
			'Sube a un Pokémon a nivel 50.', '让宝可梦升到50级。'
		],
		image: './assets/images/item/exp-candy.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'level50',
		},
		orderID: 40,
		price: 200000
	},
	superExpCandy: {
		key: 'superExpCandy',
		name: ['Super Exp. Candy', 'Super Caramelo Exp.', '超级经验糖果'],
		description: [
			'Raises a Pokémon to level 75.', 
			'Sube a un Pokémon a nivel 75.', '让宝可梦升到75级。'
		],
		image: './assets/images/item/super-exp-candy.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'level75',
		},
		orderID: 40,
		price: 500000
	},
	carbos: {
		key: 'carbos',
		name: ["Carbos", 'Carburante', '速度增强剂'],
		description: [
			'Increases Speed IVs by 1.', 
			'Aumenta los IVs de Velocidad en 1.', '速度个体值+1。'
		],
		image: './assets/images/item/carbos.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'suplement',
			iv: 'spe'
		},
		orderID: 41,
		price: 6000
	},
	iron: {
		key: 'iron',
		name: ["Iron", 'Hierro', '防御增强剂'],
		description: [
			'Increases Defense IVs by 1.', 
			'Aumenta los IVs de Defensa en 1.', '防御个体值+1。'
		],
		image: './assets/images/item/iron.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'suplement',
			iv: 'def'
		},
		orderID: 42,
		price: 6000
	},
	zinc: {
		key: 'zinc',
		name: ["Zinc", 'Zinc', '特防增强剂'],
		description: [
			'Increases Special Defense IVs by 1.', 
			'Aumenta los IVs de Defensa Especial en 1.', '特防个体值+1。'
		],
		image: './assets/images/item/zinc.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'suplement',
			iv: 'spd'
		},
		orderID: 43,
		price: 6000
	},
	hpUp: {
		key: 'hpUp',
		name: ["HP Up", 'Más PS', 'HP增强剂'],
		description: [
			'Increases Health IVs by 1.', 
			'Aumenta los IVs de Salud en 1.', 'HP个体值+1。'
		],
		image: './assets/images/item/hp-up.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'suplement',
			iv: 'hp'
		},
		orderID: 44,
		price: 6000
	},
	calcium: {
		key: 'calcium',
		name: ["Calcium", 'Calcio', '特攻增强剂'],
		description: [
			'Increases Special Attack IVs by 1.', 
			'Aumenta los IVs de Ataque Especial en 1.', '特攻个体值+1。'
		],
		image: './assets/images/item/calcium.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'suplement',
			iv: 'spa'
		},
		orderID: 45,
		price: 6000
	},
	protein: {
		key: 'protein',
		name: ["Protein", 'Proteina', '攻击增强剂'],
		description: [
			'Increases Attack IVs by 1.', 
			'Aumenta los IVs de Ataque en 1.', '攻击个体值+1。'
		],
		image: './assets/images/item/protein.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'suplement',
			iv: 'atk'
		},
		orderID: 46,
		price: 6000
	},
	fireStone: {
		key: 'fireStone',
		name: ['Fire Stone', 'Piedra fuego', '火之石'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/fire-stone.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 49,
		price: 5000
	},
	waterStone: {
		key: 'waterStone',
		name: ['Water Stone', 'Piedra agua', '水之石'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/water-stone.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 49,
		price: 5000
	},
	leafStone: {
		key: 'leafStone',
		name: ['Leaf Stone', 'Piedra hoja', '叶之石'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/leaf-stone.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 49,
		price: 5000
	},
	thunderStone: {
		key: 'thunderStone',
		name: ['Thunder Stone', 'Piedra trueno', '雷之石'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/thunder-stone.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 49,
		price: 5000
	},
	moonStone: {
		key: 'moonStone',
		name: ['Moon Stone', 'Piedra lunar', '月之石'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/moon-stone.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 49,
		price: 5000
	},
	sunStone: {
		key: 'sunStone',
		name: ['Sun Stone', 'Piedra solar', '日之石'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/sun-stone.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 49,
		price: 5000
	},
	dragonScale: {
		key: 'dragonScale',
		name: ['Dragon scale', 'Esc. dragón', '龙之鳞片'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/dragon-scale.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 51,
		price: 8000
	},
	metalCoat: {
		key: 'metalCoat',
		name: ['Metal coat', 'Rev. metálico', '金属膜'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/metal-coat.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 51,
		price: 8000
	},
	kingsRock: {
		key: 'kingsRock',
		name: ["King's Rock", 'Roca del rey', '王者之证'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/kings-rock.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 51,
		price: 8000
	},
	upgrade: {
		key: 'upgrade',
		name: ["Upgrade", 'Mejora', '升级数据'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/up-grade.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 51,
		price: 8000
	},
	razorFang: {
		key: 'razorFang',
		name: ["Razor Fang", 'Colm. agudo', '锐利之牙'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/razor-fang.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 51,
		price: 8000
	},
	loveSweet: {
		key: 'loveSweet',
		name: ["Love sweet", 'Conf. corazón', '心之甜点'],
		description: [
			'Some Pokémon need it to evolve.', 
			'Algunos Pokémon lo necesitan para evolucionar.', '某些宝可梦进化所需的道具。'
		],
		image: './assets/images/item/love-sweet.png',
		target: 'pokemon',
		type: 'consumable',
		isEvolutive: true,
		orderID: 51,
		price: 300
	},
	lonelyMint: {
		key: 'lonleyMint',
		name: ['Lonely Mint', 'Menta huraña', '孤独薄荷'],
		description: [
			'Increases Attack, decreases Defense', 
			'Incrementa el Ataque, decrementa la Defensa.', '攻击↑ 防御↓'
		],
		image: './assets/images/item/mint-attack.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
			effect: 'mint',
			nature: 5		
		},
		orderID: 60,
		price: 15000
	},
	adamantMint: {
	    key: 'adamantMint',
	    name: ['Adamant Mint', 'Menta firme', '固执薄荷'],
	    description: [
	      	'Increases Attack, decreases Special Attack',
	      	'Incrementa el Ataque, disminuye el Ataque Especial.', '攻击↑ 特攻↓'
	    ],
	    image: './assets/images/item/mint-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      	effect: 'mint',
	      	nature: 6
	    },
	    orderID: 60,
	    price: 15000
	},
	naughtyMint: {
	    key: 'naughtyMint',
	    name: ['Naughty Mint', 'Menta pícara', '顽皮薄荷'],
	    description: [
	      'Increases Attack, decreases Special Defense',
	      'Incrementa el Ataque, disminuye la Defensa Especial.', '攻击↑ 特防↓'
	    ],
	    image: './assets/images/item/mint-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 7
	    },
	    orderID: 60,
	    price: 15000
	},
	braveMint: {
	    key: 'braveMint',
	    name: ['Brave Mint', 'Menta audaz', '勇敢薄荷'],
	    description: [
	      'Increases Attack, decreases Speed',
	      'Incrementa el Ataque, disminuye la Velocidad.', '攻击↑ 速度↓'
	    ],
	    image: './assets/images/item/mint-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 8
	    },
	    orderID: 60,
	    price: 15000
	},
	boldMint: {
	    key: 'boldMint',
	    name: ['Bold Mint', 'Menta osada', '大胆薄荷'],
	    description: [
	      'Increases Defense, decreases Attack',
	      'Incrementa la Defensa, disminuye el Ataque.', '防御↑ 攻击↓'
	    ],
	    image: './assets/images/item/mint-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 9
	    },
	    orderID: 61,
	    price: 15000
	},
	impishMint: {
	    key: 'impishMint',
	    name: ['Impish Mint', 'Menta agitada', '淘气薄荷'],
	    description: [
	      'Increases Defense, decreases Special Attack',
	      'Incrementa la Defensa, disminuye el Ataque Especial.', '防御↑ 特攻↓'
	    ],
	    image: './assets/images/item/mint-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 10
	    },
	    orderID: 61,
	    price: 15000
	},
	laxMint: {
	    key: 'laxMint',
	    name: ['Lax Mint', 'Menta floja', '悠闲薄荷'],
	    description: [
	      'Increases Defense, decreases Special Defense',
	      'Incrementa la Defensa, disminuye la Defensa Especial.', '防御↑ 特防↓'
	    ],
	    image: './assets/images/item/mint-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 11
	    },
	  orderID: 61,
	  price: 15000
	},
	relaxedMint: {
	    key: 'relaxedMint',
	    name: ['Relaxed Mint', 'Menta plácida', '温顺薄荷'],
	    description: [
	      'Increases Defense, decreases Speed',
	      'Incrementa la Defensa, disminuye la Velocidad.', '防御↑ 速度↓'
	    ],
	    image: './assets/images/item/mint-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 12
	    },
	    orderID: 61,
	    price: 15000
	},
	modestMint: {
	    key: 'modestMint',
	    name: ['Modest Mint', 'Menta modesta', '内敛薄荷'],
	    description: [
	      'Increases Special Attack, decreases Attack',
	      'Incrementa el Ataque Especial, disminuye el Ataque.', '特攻↑ 攻击↓'
	    ],
	    image: './assets/images/item/mint-special-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 13
	    },
	    orderID: 62,
	    price: 15000
	},
	mildMint: {
	    key: 'mildMint',
	    name: ['Mild Mint', 'Menta afable', '温和薄荷'],
	    description: [
	      'Increases Special Attack, decreases Defense',
	      'Incrementa el Ataque Especial, disminuye la Defensa.', '特攻↑ 防御↓'
	    ],
	    image: './assets/images/item/mint-special-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 14
	    },
	    orderID: 62,
	    price: 15000
	},
	rashMint: {
	    key: 'rashMint',
	    name: ['Rash Mint', 'Menta alocada', '马虎薄荷'],
	    description: [
	      'Increases Special Attack, decreases Special Defense',
	      'Incrementa el Ataque Especial, disminuye la Defensa Especial.', '特攻↑ 特防↓'
	    ],
	    image: './assets/images/item/mint-special-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 15
	    },
	    orderID: 62,
	    price: 15000
	},
	quietMint: {
	    key: 'quietMint',
	    name: ['Quiet Mint', 'Menta mansa', '冷静薄荷'],
	    description: [
	      'Increases Special Attack, decreases Speed',
	      'Incrementa el Ataque Especial, disminuye la Velocidad.', '特攻↑ 速度↓'
	    ],
	    image: './assets/images/item/mint-special-attack.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 16
	    },
	    orderID: 62,
	    price: 15000
	},
	calmMint: {
	    key: 'calmMint',
	    name: ['Calm Mint', 'Menta serena', '沉着薄荷'],
	    description: [
	      'Increases Special Defense, decreases Attack',
	      'Incrementa la Defensa Especial, disminuye el Ataque.', '特防↑ 攻击↓'
	    ],
	    image: './assets/images/item/mint-special-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 17
	    },
	    orderID: 63,
	    price: 15000
	},
	gentleMint: {
	    key: 'gentleMint',
	    name: ['Gentle Mint', 'Menta amable', '温顺薄荷'],
	    description: [
	      'Increases Special Defense, decreases Defense',
	      'Incrementa la Defensa Especial, disminuye la Defensa.', '特防↑ 防御↓'
	    ],
	    image: './assets/images/item/mint-special-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 18
	    },
	    orderID: 63,
	    price: 15000
	},
	carefulMint: {
	    key: 'carefulMint',
	    name: ['Careful Mint', 'Menta cauta', '慎重薄荷'],
	    description: [
	      'Increases Special Defense, decreases Special Attack',
	      'Incrementa la Defensa Especial, disminuye el Ataque Especial.', '特防↑ 特攻↓'
	    ],
	    image: './assets/images/item/mint-special-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 19
	    },
	    orderID: 63,
	    price: 15000
	},
	sassyMint: {
	    key: 'sassyMint',
	    name: ['Sassy Mint', 'Menta grosera', '自大薄荷'],
	    description: [
	      'Increases Special Defense, decreases Speed',
	      'Incrementa la Defensa Especial, disminuye la Velocidad.', '特防↑ 速度↓'
	    ],
	    image: './assets/images/item/mint-special-defense.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 20
	    },
	    orderID: 63,
	    price: 15000
	},
	timidMint: {
	    key: 'timidMint',
	    name: ['Timid Mint', 'Menta miedosa', '胆小薄荷'],
	    description: [
	      'Increases Speed, decreases Attack',
	      'Incrementa la Velocidad, disminuye el Ataque.', '速度↑ 攻击↓'
	    ],
	    image: './assets/images/item/mint-speed.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 21
	    },
	    orderID: 64,
	    price: 15000
	},
	hastyMint: {
	    key: 'hastyMint',
	    name: ['Hasty Mint', 'Menta activa', '急躁薄荷'],
	    description: [
	      'Increases Speed, decreases Defense',
	      'Incrementa la Velocidad, disminuye la Defensa.', '速度↑ 防御↓'
	    ],
	    image: './assets/images/item/mint-speed.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 22
	    },
	    orderID: 64,
	    price: 15000
	},
	jollyMint: {
	    key: 'jollyMint',
	    name: ['Jolly Mint', 'Menta alegre', '爽朗薄荷'],
	    description: [
	      'Increases Speed, decreases Special Attack',
	      'Incrementa la Velocidad, disminuye el Ataque Especial.', '速度↑ 特攻↓'
	    ],
	    image: './assets/images/item/mint-speed.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 23
	    },
	    orderID: 64,
	    price: 15000
	},
	naiveMint: {
	    key: 'naiveMint',
	    name: ['Naive Mint', 'Menta ingenua', '天真薄荷'],
	    description: [
	      'Increases Speed, decreases Special Defense',
	      'Incrementa la Velocidad, disminuye la Defensa Especial.', '速度↑ 特防↓'
	    ],
	    image: './assets/images/item/mint-speed.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 24
	    },
	    orderID: 64,
	    price: 15000
	},
	seriousMint: {
	    key: 'seriousMint',
	    name: ['Serious Mint', 'Menta seria', '认真薄荷'],
	    description: [
	      'No stat changes.',
	      'Sin cambios en las estadísticas.', '能力无变化。'
	    ],
	    image: './assets/images/item/mint-neutral.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	      effect: 'mint',
	      nature: 4
	    },
	    orderID: 65,
	    price: 1000
	},
	fireDisc: {
		key: 'fireDisc',
		name: ['Fire Disc', 'Disco Fuego', '火之光盘'],
		description: [
			'Teaches a Fire-type move', 
			'Enseña un movimiento de tipo Fuego.', '教授一个火属性招式'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
	      effect: 'disc',
	      type: 'fire',
	    },
		orderID: 66,
		price: 80000
	},
	waterDisc: {
		key: 'waterDisc',
		name: ['Water Disc', 'Disco Agua', '水之光盘'],
		description: [
			'Teaches a Water-type move', 
			'Enseña un movimiento de tipo Agua.', '教授一个水属性招式'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
	      effect: 'disc',
	      type: 'water'
	    },
		orderID: 66,
		price: 80000
	},
	bugDisc: {
		key: 'bugDisc',
		name: ['Bug Disc', 'Disco Bicho', '虫之光盘'],
		description: [
			'Teaches a Bug-type move', 
			'Enseña un movimiento de tipo Bicho.', '教授一个虫属性招式'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
	      effect: 'disc',
	      type: 'bug'
	    },
		orderID: 66,
		price: 80000
	},
	ghostDisc: {
		key: 'ghostDisc',
		name: ['Ghost Disc', 'Disco Fantasma', '幽灵光盘'],
		description: [
			'Teaches a Ghost-type move', 
			'Enseña un movimiento de tipo Fantasma.', '教授一个幽灵属性招式'
		],
		image: './assets/images/item/tm-ghost.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
	      effect: 'disc',
	      type: 'ghost'
	    },
		orderID: 66,
		price: 80000
	},
	darkDisc: {
		key: 'darkDisc',
		name: ['Dark Disc', 'Disco Siniestro', '恶之光盘'],
		description: [
			'Teaches a Dark-type move', 
			'Enseña un movimiento de tipo Siniestro.', '教授一个恶属性招式'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
	      effect: 'disc',
	      type: 'dark'
	    },
		orderID: 66,
		price: 80000
	},
	fightingDisc: {
		key: 'fightingDisc',
		name: ['Fighting Disc', 'Disco Lucha', '格斗光盘'],
		description: [
			'Teaches a Fighting-type move', 
			'Enseña un movimiento de tipo Lucha.', '教授一个格斗属性招式'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
	      effect: 'disc',
	      type: 'fighting'
	    },
		orderID: 66,
		price: 80000
	},
	normalDisc: {
		key: 'normalDisc',
		name: ['Normal Disc', 'Disco Normal', '一般光盘'],
		description: [
			'Teaches a Normal-type move', 
			'Enseña un movimiento de tipo Normal.', '教授一个一般属性招式'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'normal'
		},
		orderID: 66,
		price: 80000
	},
	grassDisc: {
		key: 'grassDisc',
		name: ['Grass Disc', 'Disco Planta', '草之光盘'],
		description: [
			'Teaches a Grass-type move', 
			'Enseña un movimiento de tipo Planta.', '教授一个草属性招式'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'grass'
		},
		orderID: 66,
		price: 80000
	},
	electricDisc: {
		key: 'electricDisc',
		name: ['Electric Disc', 'Disco Eléctrico', '电之光盘'],
		description: [
			'Teaches an Electric-type move', 
			'Enseña un movimiento de tipo Eléctrico.', '教授一个电属性招式'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'electric'
		},
		orderID: 66,
		price: 80000
	},
	iceDisc: {
		key: 'iceDisc',
		name: ['Ice Disc', 'Disco Hielo', '冰之光盘'],
		description: [
			'Teaches an Ice-type move', 
			'Enseña un movimiento de tipo Hielo.', '教授一个冰属性招式'
		],
		image: './assets/images/item/tm-ice.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'ice'
		},
		orderID: 66,
		price: 80000
	},
	poisonDisc: {
		key: 'poisonDisc',
		name: ['Poison Disc', 'Disco Veneno', '毒之光盘'],
		description: [
			'Teaches a Poison-type move', 
			'Enseña un movimiento de tipo Veneno.', '教授一个毒属性招式'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'poison'
		},
		orderID: 66,
		price: 80000
	},
	groundDisc: {
		key: 'groundDisc',
		name: ['Ground Disc', 'Disco Tierra', '地面光盘'],
		description: [
			'Teaches a Ground-type move', 
			'Enseña un movimiento de tipo Tierra.', '教授一个地面属性招式'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'ground'
		},
		orderID: 66,
		price: 80000
	},
	flyingDisc: {
		key: 'flyingDisc',
		name: ['Flying Disc', 'Disco Volador', '飞行光盘'],
		description: [
			'Teaches a Flying-type move', 
			'Enseña un movimiento de tipo Volador.', '教授一个飞行属性招式'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'flying'
		},
		orderID: 66,
		price: 80000
	},
	psychicDisc: {
		key: 'psychicDisc',
		name: ['Psychic Disc', 'Disco Psíquico', '超能力光盘'],
		description: [
			'Teaches a Psychic-type move', 
			'Enseña un movimiento de tipo Psíquico.', '教授一个超能力属性招式'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'psychic'
		},
		orderID: 66,
		price: 80000
	},
	rockDisc: {
		key: 'rockDisc',
		name: ['Rock Disc', 'Disco Roca', '岩石光盘'],
		description: [
			'Teaches a Rock-type move', 
			'Enseña un movimiento de tipo Roca.', '教授一个岩石属性招式'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'rock'
		},
		orderID: 66,
		price: 80000
	},
	dragonDisc: {
		key: 'dragonDisc',
		name: ['Dragon Disc', 'Disco Dragón', '龙之光盘'],
		description: [
			'Teaches a Dragon-type move', 
			'Enseña un movimiento de tipo Dragón.', '教授一个龙属性招式'
		],
		image: './assets/images/item/tm-dragon.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'dragon'
		},
		orderID: 66,
		price: 80000
	},
	steelDisc: {
		key: 'steelDisc',
		name: ['Steel Disc', 'Disco Acero', '钢之光盘'],
		description: [
			'Teaches a Steel-type move', 
			'Enseña un movimiento de tipo Acero.', '教授一个钢属性招式'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'consumable',
		use: {
		  effect: 'disc',
		  type: 'steel'
		},
		orderID: 66,
		price: 80000
	},
	transmutationFlask: {
	    key: 'transmutationFlask',
	    name: ['Transmutation Flask', 'Frasco Alteración', '转化烧瓶'],
	    description: [
	      'Transmute a Pokémon.',
	      'Transmuta a un Pokémon.', '转化一只宝可梦。'
	    ],
	    image: './assets/images/item/lure.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	        effect: 'transmutationFlask',
	    },
	    orderID: 70,
	    price: 999
	},
	shinyFlask: {
	    key: 'shinyFlask',
	    name: ['Shiny Flask', 'Frasco Variocolor', '闪光烧瓶'],
	    description: [
	      'Turns a Pokémon into a shiny one.',
	      'Convierte a un Pokémon en variocolor.', '将宝可梦变为闪光。'
	    ],
	    image: './assets/images/item/super-lure.png',
	    target: 'pokemon',
	    type: 'consumable',
	    use: {
	        effect: 'shinyFlask',
	    },
	    orderID: 70,
	    price: 999
	},
	clownsEgg: {
		key: 'clownsEgg',
		name: ["Clown's Egg", 'Huevo del Payaso', '小丑的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 500],
			pokemon: {
				specie: pokemon['mrmime'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: true,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	stolenEgg: {
		key: 'stolenEgg',
		name: ["Stolen Egg", 'Huevo robado', '被盗的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 100],
			pokemon: {
				specie: pokemon['eevee'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	ecoEgg: {
		key: 'ecoEgg',
		name: ["Eco Hunter's Egg", 'Huevo de la Eco-cazadora', '生态猎人的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 200],
			pokemon: {
				specie: pokemon['heracross'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	scytherEgg: {
		key: 'scytherEgg',
		name: ["Scyther Egg", 'Huevo Scyther', '飞天螳螂的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 150],
			pokemon: {
				specie: pokemon['scyther'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: 100
	},
	pinsirEgg: {
		key: 'pinsirEgg',
		name: ["Pinsir Egg", 'Huevo Pinsir', '大甲的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 150],
			pokemon: {
				specie: pokemon['pinsir'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: 100
	},
	laprasEgg: {
		key: 'laprasEgg',
		name: ["Lapras Egg", 'Huevo Lapras', '拉普拉斯的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 200],
			pokemon: {
				specie: pokemon['lapras'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: 250
	},
	porygonEgg: {
		key: 'porygonEgg',
		name: ["Porygon Egg", 'Huevo Porygon', '多边兽的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 300],
			pokemon: {
				specie: pokemon['porygon'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: 400
	},
	dratiniEgg: {
		key: 'dratiniEgg',
		name: ["Dratini Egg", 'Huevo Dratini', '迷你龙的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 400],
			pokemon: {
				specie: pokemon['dratini'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: 500
	},
	gyaradosEgg: {
		key: 'gyaradosEgg',
		name: ["Gyarados Egg", 'Huevo Gyarados', '暴鲤龙的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 100],
			pokemon: {
				specie: pokemon['magikarp'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: true,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	salamenceEgg: {
		key: 'salamenceEgg',
		name: ["Salamence Egg", 'Huevo Salamence', '暴飞龙的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 100],
			pokemon: {
				specie: pokemon['bagon'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: true,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	mewEgg: {
		key: 'mewEgg',
		name: ["Mew Egg", 'Huevo Mew', '梦幻的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 500],
			pokemon: {
				specie: pokemon['mew'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	celebiEgg: {
		key: 'celebiEgg',
		name: ["Celebi Egg", 'Huevo Celebi', '雪拉比的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 500],
			pokemon: {
				specie: pokemon['celebi'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	jirachiEgg: {
		key: 'jirachiEgg',
		name: ["Jirachi Egg", 'Huevo Jirachi', '基拉祈的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 500],
			pokemon: {
				specie: pokemon['jirachi'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	raikouEgg: {
		key: 'raikouEgg',
		name: ["Raikou Egg", 'Huevo Raikou', '雷公的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 250],
			pokemon: {
				specie: pokemon['raikou'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	suicuneEgg: {
		key: 'suicuneEgg',
		name: ["Suicune Egg", 'Huevo Suicune', '水君的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 250],
			pokemon: {
				specie: pokemon['suicune'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	enteiEgg: {
		key: 'enteiEgg',
		name: ["Entei Egg", 'Huevo Entei', '炎帝的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 250],
			pokemon: {
				specie: pokemon['entei'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	zapdosEgg: {
		key: 'zapdosEgg',
		name: ["Zapdos Egg", 'Huevo Zapdos', '闪电鸟的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 300],
			pokemon: {
				specie: pokemon['zapdos'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	articunoEgg: {
		key: 'articunoEgg',
		name: ["Articuno Egg", 'Huevo Articuno', '急冻鸟的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 300],
			pokemon: {
				specie: pokemon['articuno'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	moltresEgg: {
		key: 'moltresEgg',
		name: ["Moltres Egg", 'Huevo Moltres', '火焰鸟的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 300],
			pokemon: {
				specie: pokemon['moltres'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	mewtwoEgg: {
		key: 'mewtwoEgg',
		name: ["Mewtwo Egg", 'Huevo Mewtwo', '超梦的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 800],
			pokemon: {
				specie: pokemon['mewtwo'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	hoohEgg: {
		key: 'hoohEgg',
		name: ["Ho-Oh Egg", 'Huevo Ho-Oh', '凤王的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 750],
			pokemon: {
				specie: pokemon['hooh'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	lugiaEgg: {
		key: 'lugiaEgg',
		name: ["Lugia Egg", 'Huevo Lugia', '洛奇亚的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 750],
			pokemon: {
				specie: pokemon['lugia'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	deoxysEgg: {
		key: 'deoxysEgg',
		name: ["Deoxys Egg", 'Huevo Deoxys', '代欧奇希斯的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 1000],
			pokemon: {
				specie: pokemon['deoxys'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	rayquazaEgg: {
		key: 'rayquazaEgg',
		name: ["Rayquaza Egg", 'Huevo Rayquaza', '烈空坐的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 900],
			pokemon: {
				specie: pokemon['rayquaza'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	groudonEgg: {
		key: 'groudonEgg',
		name: ["Groudon Egg", 'Huevo Groudon', '固拉多的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 750],
			pokemon: {
				specie: pokemon['groudon'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	kyogreEgg: {
		key: 'kyogreEgg',
		name: ["Kyogre Egg", 'Huevo Kyogre', '盖欧卡的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 750],
			pokemon: {
				specie: pokemon['kyogre'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	latiosEgg: {
		key: 'latiosEgg',
		name: ["Latios Egg", 'Huevo Latios', '拉帝欧斯的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 600],
			pokemon: {
				specie: pokemon['latios'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	latiasEgg: {
		key: 'latiasEgg',
		name: ["Latias Egg", 'Huevo Latias', '拉帝亚斯的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 600],
			pokemon: {
				specie: pokemon['latias'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	regiceEgg: {
		key: 'regiceEgg',
		name: ["Regice Egg", 'Huevo Regice', '雷吉艾斯的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 250],
			pokemon: {
				specie: pokemon['regice'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	registeelEgg: {
		key: 'registeelEgg',
		name: ["Registeel Egg", 'Huevo Registeel', '雷吉斯奇鲁的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 250],
			pokemon: {
				specie: pokemon['registeel'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	regirockEgg: {
		key: 'regirockEgg',
		name: ["Regirock Egg", 'Huevo Regirock', '雷吉洛克的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 250],
			pokemon: {
				specie: pokemon['regirock'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
	missingnoEgg: {
		key: 'missingnoEgg',
		name: ["Missingno Egg", 'Huevo Missingno', 'Missingno的蛋'],
		description: [
			"Wonder what's inside?", 
			'¿Qué habrá dentro?', '里面会是什么呢？'
		],
		image: './assets/images/item/egg.png',
		target: null,
		type: 'consumable',
		use: {
			effect: 'egg',
			hatch: [0, 1],
			pokemon: {
				specie: pokemon['missingno'],
				lvl: 5,	
				nature: null,
				iv: null,
				moves: null,
				type: null,
				shiny: false,
				transumted: false,
			}
		},
		isEgg: true,
		orderID: 75,
		price: null
	},
}