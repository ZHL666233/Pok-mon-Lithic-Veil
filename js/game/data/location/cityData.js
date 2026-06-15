export const city = {
	'newBarkTown-1': {
		name: ['New Bark Town', 'Pueblo Primavera', '若叶镇'],
		background: "assets/images/map/johto/city/newBarkTown-1.png",
		song: "newBarkTown",
		worldEvent: {
			pokemonLaboratory: {
				name: [`Pokemon Laboratory`, `Laboratorio Pokémon`,
				`宝可梦研究所`],
				position: { x: 7, y: 0 },
				size: { w: 7, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'professorElm'
				},
			},
			playerHouse: {
				name: [`PLAYER_NAME's House`, `Casa de PLAYER_NAME`,
				`玩家的家`],
				position: { x: 4, y: 9.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'mom'
				},
			},
			rivalHouse: {
				name: [`Neighbor's House`, `Casa vecina`,
				`邻居的家`],
				position: { x: 16, y: 9.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'rivalMom'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 16, y: 5 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'pokemonBreeder'
				},
			},
			sign: {
				name: [`Sign`, `Cartel`,
				`路牌`],
				position: { x: 12, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signNewBarkTown',
					tw: false
				},
			},	
			signboardA: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 8, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardANewBarkTown',
					tw: false
				},
			},	
			signboardB: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 10, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBNewBarkTown',
					tw: false
				},
			},
			mailboxPlayer: {
				name: [`PLAYER_NAME's Mailbox`, `Buzón de PLAYER_NAME`,
				`玩家的邮箱`],
				position: { x: 3, y: 12.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'mailboxPlayer',
					tw: false
				},
			},	
			mailboxRival: {
				name: [`Neighbor's Mailbox`, `Buzón vecino`,
				`邻居的邮箱`],
				position: { x: 15, y: 12.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'mailboxRival',
					tw: false
				},
			},
			route29: {
				name: [`Route 29`, `Ruta 29`,
				`29号道路`],
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 4.6 },
				event: {
					condition: {
						type: 'item',
						item: 'pokeball',
						exception: 'needPokeball'
					},
					type: 'travelRoute',
					location: 'route29-1'
				},
			},
			route27: {
				name: [`Route 27`, `Ruta 27`,
				`27号道路`],
				position: { x: 22, y: 7 },
				size: { w: 3, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['New Bark Town', 'Pueblo Primavera', '若叶镇'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 41, maxLevel: 45, chance: 20 },
						{ name: 'chinchou', minLevel: 44, maxLevel: 46, chance: 20 },
						{ name: 'magikarp', minLevel: 43, maxLevel: 45, chance: 15 },
						{ name: 'shellder', minLevel: 42, maxLevel: 46, chance: 15 },
						{ name: 'staryu', minLevel: 41, maxLevel: 44, chance: 8 },
						{ name: 'lanturn', minLevel: 40, maxLevel: 42, chance: 5 },
						{ name: 'tentacruel', minLevel: 42, maxLevel: 43, chance: 5 }, 
						{ name: 'seadra', minLevel: 41, maxLevel: 42, chance: 3 },
						{ name: 'starmie', minLevel: 41, maxLevel: 42, chance: 3 },
						{ name: 'squirtle', minLevel: 40, maxLevel: 43, chance: 3 },
						{ name: 'gyarados', minLevel: 41, maxLevel: 44, chance: 2 },
						{ name: 'lapras', minLevel: 40, maxLevel: 43, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 50], 
			        	location: 'route27-1',
			        	travelKanto: true
			        }
				},
			},		
		}
	},
	'cherrygroveCity-1': {
		name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
		background: "assets/images/map/johto/city/cherrygroveCity-1.png",
		song: "cherrygroveCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 15, y: 3.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'cherrygroveCity-1'
				},
			},
			smallHouseA: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 11},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'ladyCherrygroveCity'
				},
			},
			smallHouseB: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 6, y: 7},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'bikerCherrygroveCity'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 7},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardCherrygroveCity',
					tw: false
				},
			},	
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 13.8, y: 16 },
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cherrygroveCity-2'
				},
			},
			route29: {
				name: [`Route 29`, `Ruta 29`,
				`29号道路`],
				position: { x: 22, y: 6.8},
				size: { w: 3, h: 4.6 },
				event: {
					type: 'travelRoute',
					location: 'route29-4'
				},
			},	
			route30: {
				name: [`Route 30`, `Ruta 30`,
				`30号道路`],
				position: { x: 6.8, y: 0},
				size: { w: 4.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route30-1'
				},
			},	
		}
	},
	'cherrygroveCity-2': {
		name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
		background: "assets/images/map/johto/city/cherrygroveCity-2.png",
		song: "cherrygroveCity",
		worldEvent: {
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 19, y: 3},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'cherrygroveCity'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 10, y: 6},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'oldManCherrygroveCity'
				},
			},
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 13.8, y: 0},
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cherrygroveCity-1'
				},
			},
			cherryIslet: {
				name: ['Cherry Islet', 'Islote Cereza', '樱花小岛'],
				position: { x: 0, y: 6},
				size: { w: 4.5, h: 9 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Cherry Islet', 'Islote Cereza', '樱花小岛'],
					background: './assets/images/background/battle18.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 38, maxLevel: 45, chance: 40 },
						{ name: 'chinchou', minLevel: 39, maxLevel: 45, chance: 20 },
						{ name: 'shellder', minLevel: 37, maxLevel: 44, chance: 10 },
						{ name: 'magikarp', minLevel: 38, maxLevel: 45, chance: 10 },
						{ name: 'staryu', minLevel: 40, maxLevel: 44, chance: 8 },
						{ name: 'tentacruel', minLevel: 41, maxLevel: 45, chance: 8 }, 
						{ name: 'corsola', minLevel: 42, maxLevel: 46, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'cherryIslet-1'
			        }
				},
			},
			sign: {
				name: [`Sign`, `Cartel`,
				`路牌`],
				position: { x: 17, y: 10},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signCherrygroveCity',
					tw: false
				},
			},
			rockClister: {
				name: [`Rock cluster`, `Cúmulo de rocas`,
				`岩石堆`],
				position: { x: 17.9, y: 15.9 },
				size: { w: 4.4, h: 2 },
				event: {
					condition: {
						type: 'item',
						item: 'powerBracelet',
						exception: 'needPowerBracelet'
					},
					type: 'rockSmash',
					city: 'cherrygroveCity-2',
					newCity: 'cherrygroveCity-2bis',
				},
			},
		}
	},
	'cherrygroveCity-2bis': {
		name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
		background: "assets/images/map/johto/city/cherrygroveCity-2bis.png",
		song: "cherrygroveCity",
		worldEvent: {
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 19, y: 3},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'cherrygroveCity'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 10, y: 6},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'oldManCherrygroveCity'
				},
			},
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 13.8, y: 0},
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cherrygroveCity-1'
				},
			},
			cherryGrotto: {
				name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
				position: { x: 17.9, y: 15.9 },
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'cherryGrotto-1'
				},
			},
			cherryIslet: {
				name: ['Cherry Islet', 'Islote Cereza', '樱花小岛'],
				position: { x: 0, y: 6},
				size: { w: 4.5, h: 9 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Cherry Islet', 'Islote Cereza', '樱花小岛'],
					background: './assets/images/background/battle18.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 38, maxLevel: 45, chance: 40 },
						{ name: 'chinchou', minLevel: 39, maxLevel: 45, chance: 20 },
						{ name: 'shellder', minLevel: 37, maxLevel: 44, chance: 10 },
						{ name: 'magikarp', minLevel: 38, maxLevel: 45, chance: 10 },
						{ name: 'staryu', minLevel: 40, maxLevel: 44, chance: 8 },
						{ name: 'tentacruel', minLevel: 41, maxLevel: 45, chance: 8 }, 
						{ name: 'corsola', minLevel: 42, maxLevel: 46, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'cherryIslet-1'
			        }
				},
			},
			sign: {
				name: [`Sign`, `Cartel`,
				`路牌`],
				position: { x: 17, y: 10},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signCherrygroveCity',
					tw: false
				},
			},
		}
	},
	'violetCity-1': {
		name: ['Violet City', 'Ciudad Malva', '桔梗市'],
		background: "assets/images/map/johto/city/violetCity-1.png",
		song: "violetCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 17, y: 2.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'violetCity-1'
				},
			},
			pokemonAcademy: {
				name: ['Pokémon´Academy', 'Academia Pokémon', '宝可梦学院'],
				position: { x: 4, y: 10.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'earl'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 4, y: 1},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'artistVioletCity'
				},
			},
			violetCityA: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 10.7, y: 0},
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelCity',
					location: 'violetCity-2'
				},
			},
			violetCityB: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 0, y: 2.8},
				size: { w: 2, h: 4.6 },
				event: {
					type: 'travelCity',
					location: 'violetCity-3'
				},
			},
			route31: {
				name: [`Route 31`, `Ruta 31`,
				`31号道路`],
				position: { x: 23, y: 6.8},
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route31-1'
				},
			},	
			signboardA: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 13, y: 6},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardAVioletCity',
					tw: false
				},
			},	
			signboardB: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 3, y: 13},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBVioletCity',
					tw: false
				},
			},	
		}
	},
	'violetCity-2': {
		name: ['Violet City', 'Ciudad Malva', '桔梗市'],
		background: "assets/images/map/johto/city/violetCity-2.png",
		song: "violetCity",
		worldEvent: {
			dojo: {
				name: [`Evolution Dojo`, `Dojo Evolución`,
				`进化道场`],
				position: { x: 10, y: 0.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'evolutionDojo',
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 16, y: 10},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardCVioletCity',
					tw: false
				},
			},
			violetCity: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 10.7, y: 16},
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelCity',
					location: 'violetCity-1'
				},
			},
		}
	},
	'violetCity-3': {
		name: ['Violet City', 'Ciudad Malva', '桔梗市'],
		background: "assets/images/map/johto/city/violetCity-3.png",
		song: "violetCity",
		worldEvent: {
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 11, y: 1},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'falkner'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 7, y: 9},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'violetCity'
				},
			},
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 16, y: 9.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'researcherVioletCity'
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 10, y: 4.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymVioletCity',
					tw: false
				},
			},
			violetCity: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 23, y: 2.8},
				size: { w: 2, h: 4.6 },
				event: {
					type: 'travelCity',
					location: 'violetCity-1'
				},
			},
			route32: {
				name: [`Route 32`, `Ruta 32`,
				`32号道路`],
				position: { x: 10.7, y: 16},
				size: { w: 4.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route32-1'
				},
			},	
			route36: {
				name: [`Route 36`, `Ruta 36`,
				`36号道路`],
				position: { x: 0, y: 2.8},
				size: { w: 2, h: 4.6 },
				event: {
					type: 'travelRoute',
					location: 'route36-1'
				},
			},	
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 4, y: 10 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselVioletCity',
					tw: false
				},
			},
		}
	},
	'azaleaTown-1': {
		name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
		background: "assets/images/map/johto/city/azaleaTown-1.png",
		song: "azaleaTown",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 9, y: 0.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'azaleaTown-1'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 10, y: 9},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'bugsy'
				},
			},
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 18, y: 1.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'doctorAzaleaTown'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 4},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardAzaleaTown',
					tw: false
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 9, y: 12.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymAzaleaTown',
					tw: false
				},
			},	
			route33: {
				name: ['Route 33', 'Ruta 33', '33号道路'],
				position: { x: 23, y: 6.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'travelRoute',
					location: 'route33-1'
				},
			},
			azaleaTown: {
				name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
				position: { x: 0, y: 8.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'travelCity',
					location: 'azaleaTown-2'
				},
			},
		}
	},
	'azaleaTown-2': {
		name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
		background: "assets/images/map/johto/city/azaleaTown-2.png",
		song: "azaleaTown",
		worldEvent: {
			azaleaTown: {
				name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
				position: { x: 23, y: 8.8},
				size: { w: 2, h: 4.4 },
				event: {
					type: 'travelCity',
					location: 'azaleaTown-1'
				},
			},
			bigNiceHouse: {
				name: ['Big nice house', 'Gran casa bonita', '漂亮的大房子'],
				position: { x: 14, y: 6.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'fishermanAzaleaTown'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 3, y: 10},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'azaleaTown'
				},
			},
			ilexForest: {
				name: ['Ilex Forest', 'Encinar', '桐树林'],
				position: { x: 7, y: 0},
				size: { w: 4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ilexForest-1'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 11, y: 13},
				size: { w: 10, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
					background: './assets/images/background/battle19.png',
					song: "newBarkTown",
					pokemon: [ 
						{ name: 'magikarp', minLevel: 5, maxLevel: 8, chance: 70 }, 
						{ name: 'poliwag', minLevel: 8, maxLevel: 11, chance: 20 },
			            { name: 'psyduck', minLevel: 8, maxLevel: 11, chance: 10 },
			        ],
				},
			},	
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 13, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselAzaleaTown',
					tw: false
				},
			},
		}
	},
	'goldenrodCity-1': {
		name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
		background: "assets/images/map/johto/city/goldenrodCity-1.png",
		song: "goldenrodCity",
		worldEvent: {
			signboardA: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 8},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardAGoldenrodCity',
					tw: false
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 10, y: 4.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'goldenrodCity-1'
				},
			},
			longHouse: {
				name: ['Long house', 'Casa larga', '长屋'],
				position: { x: 11, y: 12},
				size: { w: 6, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'magicianGoldenrodCity'
				},
			},
			route34: {
				name: [`Route 34`, `Ruta 34`,
				`34号道路`], 
				position: { x: 4.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route34-2'
				},
			},
			goldenrodCityA: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 0, y: 8.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-2'
				},
			},
			goldenrodCityB: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 4.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-4'
				},
			},
			goldenrodCityC: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 23, y: 8.8},
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-5'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 4, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselAGoldenrodCity',
					tw: false
				},
			},
		}
	},
	'goldenrodCity-2': {
		name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
		background: "assets/images/map/johto/city/goldenrodCity-2.png",
		song: "goldenrodCity",
		worldEvent: {
			cottage: {
				name: ['Cottage', 'Casita', '小别墅'],
				position: { x: 19, y: 4},
				size: { w: 3, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'gamblerGoldenrodCity'
				},
			},
			goldenrodCityA: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 23, y: 8.8},
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-1'
				},
			},
			goldenrodCityB: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 10.8, y: 0},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-3'
				},
			},
		}
	},
	'goldenrodCity-3': {
		name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
		background: "assets/images/map/johto/city/goldenrodCity-3.png",
		song: "goldenrodCity",
		worldEvent: {
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 9, y: 0},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'goldenrodCity'
				},
			},
			bigNiceHouse: {
				name: ['Big nice house', 'Gran casa bonita', '漂亮的大房子'],
				position: { x: 16, y: 2.5},
				size: { w: 7, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'archaeologistGoldenrodCity'
				},
			},
			goldenrodCityA: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 10.8, y: 16},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-2'
				},
			},
			goldenrodCityB: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 23, y: 6.8},
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-4'
				},
			},
		}
	},
	'goldenrodCity-4': {
		name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
		background: "assets/images/map/johto/city/goldenrodCity-4.png",
		song: "goldenrodCity",
		worldEvent: {
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 10, y: 11},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'whiteney'
				},
			},
			building: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 14, y: 0},
				size: { w: 7, h: 7 },
				event: {
					type: 'dialogue',
					npc: 'businessmanGoldenrodCity'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 1, y: 10},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'littleGirlGoldenrodCity'
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 9, y: 14.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymGoldenrodCity'
				},
			},
			goldenrodCityA: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 4.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-1'
				},
			},
			goldenrodCityB: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-3'
				},
			},
			route35: {
				name: ['Route 35', 'Ruta 35', '35号道路'], 
				position: { x: 4.7, y: 0 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route35-1'
				},
			},	
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 23, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBGoldenrodCity',
					tw: false
				},
			},
		}
	},
	'goldenrodCity-5': {
		name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
		background: "assets/images/map/johto/city/goldenrodCity-5.png",
		song: "goldenrodCity",
		worldEvent: {
			casino: {
				name: ['Casino', 'Casino', '赌场'],
				position: { x: 4, y: 0.5},
				size: { w: 7, h: 4.9 },
				event: {
					type: 'casino',
				},
			},			
			exchangeHouse: {
				name: ['Exchange House', 'Casa de Canjes', '交换屋'],
				position: { x: 13, y: 0.5},
				size: { w: 3, h: 3.5 },
				event: {
					type: 'exchangeHouse',
				},
			},
			witchsLair: {
				name: ["Witch's Lair", 'Guarida de la Bruja', '女巫巢穴'],
				position: { x: 19, y: 2.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'piruja'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 13, y: 13},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'swimmerGoldenrodCity'
				},
			},
			signboardB: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 11, y: 4},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBGoldenrodCity',
					tw: false
				},
			},
			signboardC: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 18, y: 5},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardCGoldenrodCity',
					tw: false
				},
			},
			goldenrodCity: {
				name: ['Goldenrod City', 'Ciudad Trigal', '满金市'], 
				position: { x: 0, y: 8.8},
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-1'
				},
			},
		}
	},
	'ecruteakCity-1': {
		name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'],
		background: "assets/images/map/johto/city/ecruteakCity-1.png",
		song: "ecruteakCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 17, y: 7.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'ecruteakCity-1'
				},
			},	
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 4, y: 7},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'morty'
				},
			},
			ruralHouse: {
				name: ['Rural house', 'Casa rural', '乡村小屋'],
				position: { x: 17, y: 0.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'janitorEcruteakCity'
				},
			},
			signboardA: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 16, y: 11},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardAEcruteakCity',
					tw: false
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 3, y: 10.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymEcruteakCity',
					tw: false
				},
			},
			route37: {
				name: ['Route 37', 'Ruta 37', '37号道路'], 
				position: { x: 11.8, y: 15 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route37-2'
				},
			},
			route38: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 0, y: 11.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route38-1'
				},
			},
			ecruteakCityA: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 23, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-2'
				},
			},
			ecruteakCityB: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 11.8, y: 0},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-3'
				},
			},
		}
	},
	'ecruteakCity-2': {
		name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'],
		background: "assets/images/map/johto/city/ecruteakCity-2.png",
		song: "ecruteakCity",
		worldEvent: {
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 4, y: 8},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'ecruteakCity'
				},
			},
			ruralHouse: {
				name: ['Rural house', 'Casa rural', '乡村小屋'],
				position: { x: 15, y: 8.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'jugglerEcruteakCity'
				},
			},
			ecruteakCity: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 0, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-1'
				},
			},
			route42: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 23, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route42-1'
				},
			},		
		}
	},
	'ecruteakCity-3': {
		name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'],
		background: "assets/images/map/johto/city/ecruteakCity-3.png",
		song: "ecruteakCity",
		worldEvent: {
			occultistsCabin: {
				name: ["Occultist's Cabin", 'Cabaña del Ocultista', '邪教徒小屋'],
				position: { x: 17, y: 4},
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ocultistEcruteakCity'
				},
			},
			signboardB: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 16, y: 7},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBEcruteakCity',
					tw: false
				},
			},
			ecruteakCity: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 11.8, y: 16},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-1'
				},
			},
			burnedBurrow: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'], 
				position: { x: 8, y: 8},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-1'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 2, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselAEcruteakCity',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 2, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBEcruteakCity',
					tw: false
				},
			},
		}
	},
	'olivineCity-1': {
		name: ['Olivine City', 'Ciudad Olivo', '浅葱市'],
		background: "assets/images/map/johto/city/olivineCity-1.png",
		song: "violetCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 18, y: 2.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'olivineCity-1'
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 7, y: 9.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'explorerOlivineCity'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 13, y: 9.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'collectorOlivineCity'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 15, y: 3},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardOlivineCity',
					tw: false
				},
			},
			route39: {
				name: ['Route 39', 'Ruta 39', '39号道路'], 
				position: { x: 7.9, y: 0},
				size: { w: 5.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route39-3'
				},
			},
			olivineCityA: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 15.9, y: 16},
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-2'
				},
			},
			olivineCityB: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 0, y: 5.9},
				size: { w: 3.2, h: 2.2 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-3'
				},
			},
			olivineCityC: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 23, y: 8.7},
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-4'
				},
			},
		}
	},
	'olivineCity-2': {
		name: ['Olivine City', 'Ciudad Olivo', '浅葱市'],
		background: "assets/images/map/johto/city/olivineCity-2.png",
		song: "violetCity",
		worldEvent: {
			boat: {
				name: ['SS. Aqua', 'SS. Aqua', '水流号'],
				position: { x: 10.8, y: 14.8 },
				size: { w: 4.4, h: 2.4 },
				event: {
					type: 'dialogue',
					npc: 'boatOlivineCity'
				},
			},
			cozyHouse: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 20, y: 2.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'lifeGuardOlivineCity'
				},
			},
			olivineCity: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 15.9, y: 0},
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-1'
				},
			},
			route40: {
				name: ['Route 40', 'Ruta 40', '40号道路'], 
				position: { x: 0, y: 8.8},
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelRoute',
					location: 'route40-1'
				},
			},
		}
	},
	'olivineCity-3': {
		name: ['Olivine City', 'Ciudad Olivo', '浅葱市'],
		background: "assets/images/map/johto/city/olivineCity-3.png",
		song: "violetCity",
		worldEvent: {
			lighthouse: {
				name: ['Lighthouse', 'Faro', '灯塔'], 
				position: { x: 1.5, y: 0},
				size: { w: 8, h: 9 },
				event: {
					type: 'dialogue',
					npc: 'lighthouseKeeper'
				},
			},
			olivineCity: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 23, y: 6},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-1'
				},
			},
		}
	},
	'olivineCity-4': {
		name: ['Olivine City', 'Ciudad Olivo', '浅葱市'],
		background: "assets/images/map/johto/city/olivineCity-4.png",
		song: "violetCity",
		worldEvent: {
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 16, y: 3},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'jasmine'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 7, y: 10},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'olivineCity'
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 3, y: 4.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'gardenerOlivineCity'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 9, y: 4.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'richBoyOlivineCity'
				},
			},
			cozyHouseC: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 15, y: 10.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'sailorOlivineCity'
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 15, y: 6.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymOlivineCity',
					tw: false
				},
			},
			olivineCity: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 0, y: 8.7},
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-1'
				},
			},
		}
	},
	'cianwoodCity-1': {
		name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'],
		background: "assets/images/map/johto/city/cianwoodCity-1.png",
		song: "cianwoodCity",
		worldEvent: {
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 15, y: 2},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardCianwoodCity',
					tw: false
				},
			},
			cianwoodCityCity: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 10.4, y: 16},
				size: { w: 3.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cianwoodCity-2'
				},
			},
			route41: {
				name: ['Route 41', 'Ruta 41', '41号道路'], 
				position: { x: 22, y: 2},
				size: { w: 3, h: 4 },
				event: {
					type: 'travelRoute',
					location: 'route41-2'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 15, y: 12},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'seerCianwoodCity'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 1, y: 5},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'chuck'
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 8, y: 8.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymCianwoodCity',
					tw: false
				},
			},
			
		}
	},
	'cianwoodCity-2': {
		name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'],
		background: "assets/images/map/johto/city/cianwoodCity-2.png",
		song: "cianwoodCity",
		worldEvent: {
			cianwoodCityA: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 10.4, y: 0},
				size: { w: 3.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cianwoodCity-1'
				},
			},
			cianwoodCityB: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 0, y: 13.9 },
				size: { w: 2, h: 2.3 },
				event: {
					type: 'travelCity',
					location: 'cianwoodCity-3'
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 16, y: 5.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'cianwoodCity-2'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 6, y: 7},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'oldWomanCianwoodCity'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 2, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCianwoodCity',
					tw: false
				},
			},
		}
	},
	'cianwoodCity-3': {
		name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'],
		background: "assets/images/map/johto/city/cianwoodCity-3.png",
		song: "cianwoodCity",
		worldEvent: {
			cianwoodCity: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 23, y: 13.9 },
				size: { w: 2, h: 2.3 },
				event: {
					type: 'travelCity',
					location: 'cianwoodCity-2'
				},
			},
			cliffEdgeGate: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 4, y: 3},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-1'
				},
			},
			ruralHouse: {
				name: ['Rural house', 'Casa rural', '乡村小屋'],
				position: { x: 13, y: 6},
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'hikerCianwoodCity'
				},
			},
		}
	},
	'mahoganyTown': {
		name: ['Mahogany Town', 'Pueblo Caoba', '卡吉镇'],
		background: "assets/images/map/johto/city/mahoganyTown.png",
		song: "cherrygroveCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 18, y: 10.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'mahoganyTown'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 5, y: 4},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'pryce'
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 8, y: 11.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'surferMahoganyTown'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 16, y: 3.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'clownMahoganyTown'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 9},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardMahoganyTown',
					tw: false
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 7.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymMahoganyCity',
					tw: false
				},
			},
			route42: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 0, y: 11.8},
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route42-2'
				},
			},
			route43: {
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 9.7, y: 0},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route43-1'
				},
			},
			route44: {
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 22, y: 5.8},
				size: { w: 3, h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route44-1'
				},
			},	
		}
	},
	'blackthornCity-1': {
		name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'],
		background: "assets/images/map/johto/city/blackthornCity-1.png",
		song: "azaleaTown",
		worldEvent: {
			prettyLittleHouse: {
				name: ['Pretty little house', 'Casita bonita', '漂亮小屋'],
				position: { x: 20, y: 11.5},
				size: { w: 3, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'touristBlackthornCity'
				},
			},
			blackthornCity: {
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 0, y: 10.8},
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-2'
				},
			},
			icePath: {
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 16, y: 5},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-10'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 23, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'blackthornCityHiddenItem',
					invisible: true
				},
			},

		}
	},
	'blackthornCity-2': {
		name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'],
		background: "assets/images/map/johto/city/blackthornCity-2.png",
		song: "azaleaTown",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 4, y: 3.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'blackthornCity-2'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 11, y: 4},
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'blackthornCity'
				},
			},
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 9, y: 11.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'geologistBlackthornCity'
				},
			},
			signboardB: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 17, y: 10},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBBlackthornCity',
					tw: false
				},
			},
			blackthornCityA: {
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 23, y: 10.8},
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-1'
				},
			},
			blackthornCityB: {
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 2.4, y: 16 },
				size: { w: 3.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-3'
				},
			},	
			blackthornCliff: {
				name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
				position: { x: 0, y: 7.8},
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'blackthornCliff-1'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 16, y: 14 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselABlackthornCity',
					tw: false
				},
			},
		}
	},
	'blackthornCity-3': {
		name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'],
		background: "assets/images/map/johto/city/blackthornCity-3.png",
		song: "azaleaTown",
		worldEvent: {
			archaeologicalCenter: {
				name: ['Archaeological center', 'Centro arqueológico', '考古中心'],
				position: { x: 3, y: 5},
				size: { w: 7, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'scientistBlackthornCity'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 15, y: 2},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'clair'
				},
			},
			signboardArchaeologicalCenter: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 7, y: 8.5},
				size: { w: 2, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardArchaeologicalCenter',
					tw: false
				},
			},
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 5.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymBlackthornCity',
					tw: false
				},
			},
			blackthornCity: {
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 2.4, y: 0},
				size: { w: 3.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-2'
				},
			},
			route45: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 23, y: 5.8},
				size: { w: 3, h: 3.8 },
				event: {
					type: 'travelRoute',
					location: 'route45-1'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 4, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBBlackthornCity',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 7, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCBlackthornCity',
					tw: false
				},
			},
		}
	},

	// KANTO
	'vermilionCity-1': {
		name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
		background: "assets/images/map/kanto/city/vermilionCity-1.png",
		song: "vermilionCity",
		worldEvent: {
			boat: {
				name: ['SS. Aqua', 'SS. Aqua', '水流号'],
				position: { x: 16.8, y: 13.8 },
				size: { w: 4.4, h: 2.4 },
				event: {
					type: 'dialogue',
					npc: 'boatVermilionCity'
				},
			},
			vermilionCityA: {
				name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
				position: { x: 16, y: 0 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'vermilionCity-2'
				},
			},
			vermilionCityB: {
				name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
				position: { x: 22, y: 6.8 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'travelCity',
					location: 'vermilionCity-3'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 4, y: 8},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'surge'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 3, y: 11.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymVermilionCity',
					tw: false
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 13, y: 6},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardVermilionCity',
					tw: false
				},
			},
		}
	},
	'vermilionCity-2': {
		name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
		background: "assets/images/map/kanto/city/vermilionCity-2.png",
		song: "vermilionCity",
		worldEvent: {
			vermilionCity: {
				name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
				position: { x: 16, y: 16 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'vermilionCity-1'
				},
			},
			route6: {
				name: ['Route 6', 'Ruta 6', '6号道路'],
				position: { x: 11.4, y: 0 },
				size: { w: 3.2, h: 1.5 },
				event: {
					type: 'travelRoute',
					location: 'route6-1'
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 1, y: 1.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'vermilionCity-2'
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 3, y: 8.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'sailorVermilionCity'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 10, y: 8.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'fanaticVermilionCity'
				},
			},
			cozyHouseC: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 15, y: 1.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'fisherVermilionCity'
				},
			},
		}
	},
	'vermilionCity-3': {
		name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
		background: "assets/images/map/kanto/city/vermilionCity-3.png",
		song: "vermilionCity",
		worldEvent: {
			vermilionCity: {
				name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
				position: { x: 0, y: 6.8 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'travelCity',
					location: 'vermilionCity-1'
				},
			},
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 22, y: 2.8 },
				size: { w: 3, h: 2.6 },
				event: {
					type: 'travelRoute',
					location: 'route11-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 8, y: 3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'vermilionCity'
				},
			},
			cozyHouse: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 16, y: 6.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'hikerVermilionCity'
				},
			},
		}
	},
	'celadonCity-1': {
		name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
		background: "assets/images/map/kanto/city/celadonCity-1.png",
		song: "celadonCity",
		worldEvent: {
			celadonCityA: {
				name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
				position: { x: 0, y: 3.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'celadonCity-2'
				},
			},
			celadonCityB: {
				name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
				position: { x: 13.4, y: 16 },
				size: { w: 3.8, h: 2 },
				event: {
					type: 'travelCity',
					location: 'celadonCity-3'
				},
			},
			route7: {
				name: ['Route 7', 'Ruta 7', '7号道路'],
				position: { x: 23, y: 1.9 },
				size: { w: 2, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route7-1'
				},
			},
			building: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 7, y: 7.5},
				size: { w: 4, h: 5.5 },
				event: {
					type: 'dialogue',
					npc: 'batherCeladonCity'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 3},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardACeladonCity',
					tw: false
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 8, y: 0 },
				size: { w: 5, h: 4 },
				event: {
					type: 'pokeCenter',
					location: 'celadonCity-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 17, y: 8 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'celadonCity'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 0, y: 8 },
				size: { w: 5, h: 9 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
					background: './assets/images/background/battle25.png',
					song: "newBarkTown",
					pokemon: [ 
						{ name: 'seaking', minLevel: 52, maxLevel: 58, chance: 35 }, 
						{ name: 'poliwhirl', minLevel: 54, maxLevel: 57, chance: 15 }, 
						{ name: 'psyduck', minLevel: 54, maxLevel: 56, chance: 10 }, 
						{ name: 'goldeen', minLevel: 53, maxLevel: 58, chance: 8 }, 
						{ name: 'magikarp', minLevel: 54, maxLevel: 57, chance: 7 }, 
						{ name: 'starmie', minLevel: 52, maxLevel: 58, chance: 7 }, 
						{ name: 'seadra', minLevel: 52, maxLevel: 56, chance: 7 }, 
						{ name: 'staryu', minLevel: 54, maxLevel: 56, chance: 6 }, 
						{ name: 'politoed', minLevel: 54, maxLevel: 59, chance: 5 },    
			        ],
				},
			},
		}
	},
	'celadonCity-2': {
		name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
		background: "assets/images/map/kanto/city/celadonCity-2.png",
		song: "celadonCity",
		worldEvent: {
			celadonCity: {
				name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
				position: { x: 22, y: 3.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'celadonCity-1'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 14, y: 0},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'erika'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 13, y: 3.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymCeladonCity',
					tw: false
				},
			},
			building: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 4, y: 0},
				size: { w: 6, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'fishmongerCeladonCity'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 3, y: 6 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'alchemistCeladonCity'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 2, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselACeladonCity',
					tw: false
				},
			},
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 21, y: 8 },
				size: { w: 4, h: 9 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
					background: './assets/images/background/battle25.png',
					song: "newBarkTown",
					pokemon: [ 
						{ name: 'seaking', minLevel: 52, maxLevel: 58, chance: 35 }, 
						{ name: 'slowbro', minLevel: 54, maxLevel: 57, chance: 15 }, 
						{ name: 'psyduck', minLevel: 54, maxLevel: 56, chance: 10 }, 
						{ name: 'slowpoke', minLevel: 53, maxLevel: 58, chance: 8 }, 
						{ name: 'magikarp', minLevel: 54, maxLevel: 57, chance: 7 }, 
						{ name: 'starmie', minLevel: 52, maxLevel: 58, chance: 7 }, 
						{ name: 'seadra', minLevel: 52, maxLevel: 56, chance: 7 }, 
						{ name: 'golduck', minLevel: 54, maxLevel: 56, chance: 6 }, 
						{ name: 'politoed', minLevel: 54, maxLevel: 59, chance: 5 },    
			        ],
				},
			},
		}
	},
	'celadonCity-3': {
		name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
		background: "assets/images/map/kanto/city/celadonCity-3.png",
		song: "celadonCity",
		worldEvent: {
			celadonCity: {
				name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
				position: { x: 13.4, y: 0 },
				size: { w: 3.8, h: 2 },
				event: {
					type: 'travelCity',
					location: 'celadonCity-1'
				},
			},
			buildingA: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 2, y: 0.5 },
				size: { w: 4, h: 5.5 },
				event: {
					type: 'dialogue',
					npc: 'mathematicalCeladonCity'
				},
			},
			buildingB: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 8, y: 0.5 },
				size: { w: 4, h: 5.5 },
				event: {
					type: 'dialogue',
					npc: 'intellectualCeladonCity'
				},
			},
			smallHouseA: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 18, y: 4 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'addictCeladonCity'
				},
			},
			smallHouseB: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 9 },
				size: { w: 6, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'cheaterCeladonCity'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 10, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBCeladonCity',
					tw: false
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 22, y: 15 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBCeladonCity',
					tw: false
				},
			},
			casino: {
				name: ['Casino', 'Casino', '赌场'],
				position: { x: 3, y: 8.5 },
				size: { w: 7, h: 4.9 },
				event: {
					type: 'casino',
				},
			},			
			exchangeHouse: {
				name: ['Exchange House', 'Casa de Canjes', '交换屋'],
				position: { x: 10, y: 8.5},
				size: { w: 3, h: 3.5 },
				event: {
					type: 'exchangeHouse',
				},
			},
		}
	},
	'ceruleanCity-1': {
		name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
		background: "assets/images/map/kanto/city/ceruleanCity-1.png",
		song: "ceruleanCity",
		worldEvent: {
			ceruleanCity: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 23, y: 11.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-2'
				},
			},
			route4: {
				name: ['Route 4', 'Ruta 4', '4号道路'],
				position: { x: 0, y: 2 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route4-3'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 13, y: 11},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardCeruleanCity',
					tw: false
				},
			},
			niceHouseA: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 3, y: 5.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'conspiracyGuyCeruleanCity'
				},
			},
			niceHouseB: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 13, y: 4.5},
				size: { w: 6, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'saneNeighborCeruleanCity'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 22, y: 6 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselACeruleanCity',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 20, y: 6 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselBCeruleanCity',
					tw: false
				},
			},
		}
	},
	'ceruleanCity-2': {
		name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
		background: "assets/images/map/kanto/city/ceruleanCity-2.png",
		song: "ceruleanCity",
		worldEvent: {
			ceruleanCityA: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 0, y: 11.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-1'
				},
			},
			ceruleanCityB: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 23, y: 11.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-3'
				},
			},
			route5: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 10.8, y: 15.5 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route5-1'
				},
			},
			route24: {
				name: ['Route 24', 'Ruta 24', '24号道路'],
				position: { x: 3.5, y: 0 },
				size: { w: 4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route24-1'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 11, y: 2 },
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'misty'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 18, y: 5.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymCeruleanCity',
					tw: false
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 18, y: 8 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'ceruleanCity'
				},
			},
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 6, y: 8.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'starGuardianCeruleanCity'
				},
			},
		}
	},
	'ceruleanCity-3': {
		name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
		background: "assets/images/map/kanto/city/ceruleanCity-3.png",
		song: "ceruleanCity",
		worldEvent: {
			ceruleanCity: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 0, y: 11.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-2'
				},
			},
			route9: {
				name: ['Route 9', 'Ruta 9', '9号道路'],
				position: { x: 22.5, y: 3.7 },
				size: { w: 2.5, h: 2.7 },
				event: {
					type: 'travelRoute',
					location: 'route9-1'
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 4, y: 7.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'ceruleanCity-3'
				},
			},
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 2, y: 1.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'witnessCeruleanCity'
				},
			},
			bikeShop: {
				name: ['Bike Shop', 'Tienda de bicis', '自行车店'],
				position: { x: 16, y: 7.4 },
				size: { w: 3, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'bikeShopCeruleanCity'
				},
			},
		}
	},
	'cinnabarIsland-1': {
		name: ['Cinnabar Island', 'Isla Canela', '红莲岛'],
		background: "assets/images/map/kanto/city/cinnabarIsland-1.png",
		song: "cinnabarIsland",
		worldEvent: {
			route20: {
				name: ['Route 20', 'Ruta 20', '20号道路'],
				position: { x: 23, y: 7.8 },
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelRoute',
					location: 'route20-1'
				},
			},
			route21: {
				name: ['Route 21', 'Ruta 21', '21号道路'],
				position: { x: 15.3, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route21-1'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 13, y: 10 },
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'blaine'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 12, y: 13.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymCinnabarIsland',
					tw: false
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardCinnabarIsland-1',
					tw: false
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 3, y: 3.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'cinnabarIsland-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 9, y: 4 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'cinnabarIsland'
				},
			},
		}
	},
	'lavenderTown-1': {
		name: ['Lavender Town', 'Pueblo Lavanda', '紫苑镇'],
		background: "assets/images/map/kanto/city/lavenderTown-1.png",
		song: "lavenderTown",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 0, y: 9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'route8-2'
				},
			},
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 11.9, y: 0 },
				size: { w: 2.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route10-3'
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 5, y: 1.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'lavenderTown-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 20, y: 10 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'lavenderTown'
				},
			},
			oldHouseA: {
				name: ['Old house', 'Casa antigua', '老房子'],
				position: { x: 5, y: 10.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'oldLadyLavenderTown'
				},
			},
			oldHouseAB: {
				name: ['Old house', 'Casa antigua', '老房子'],
				position: { x: 11, y: 10.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'archaeologistLavenderTown'
				},
			},
			pokemonTower: {
				name: ['Pokémon Tower', 'Torre Pokémon', '宝可梦塔'],
				position: { x: 16, y: 0},
				size: { w: 9, h: 7 },
				event: {
					type: 'dialogue',
					npc: 'pokemonTower'
				},
			},
			signboardA: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardALavenderTown',
					tw: false
				},
			},	
			signboardB: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 22, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBLavenderTown',
					tw: false
				},
			},	
		}
	},
	'fuchsiaCity-1': {
		name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
		background: "assets/images/map/kanto/city/fuchsiaCity-1.png",
		song: "fuchsiaCity",
		worldEvent: {
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 8, y: 2},
				size: { w: 6, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
					background: './assets/images/background/battle19.png',
					song: "newBarkTown",
					pokemon: [ 
						{ name: 'goldeen', minLevel: 53, maxLevel: 58, chance: 18 }, 
						{ name: 'poliwhirl', minLevel: 54, maxLevel: 57, chance: 15 }, 
						{ name: 'krabby', minLevel: 54, maxLevel: 57, chance: 17 }, 
						{ name: 'psyduck', minLevel: 54, maxLevel: 56, chance: 10 }, 
						{ name: 'seaking', minLevel: 52, maxLevel: 58, chance: 15 }, 
						{ name: 'corsola', minLevel: 52, maxLevel: 58, chance: 7 }, 
						{ name: 'seadra', minLevel: 52, maxLevel: 56, chance: 7 }, 
						{ name: 'kingler', minLevel: 54, maxLevel: 56, chance: 6 }, 
						{ name: 'gyarados', minLevel: 54, maxLevel: 59, chance: 5 },    
			        ],
				},
			},	
			route15: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 22, y: 7.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route15-2'
				},
			},
			fuchsiaCity: {
				name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
				position: { x: 2.8, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'fuchsiaCity-2'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 15, y: 1},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'koga'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 4.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymFuchsiaCity',
					tw: false
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 2, y: 1.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'fuchsiaCity-1'
				},
			},
			warmHouseA: {
				name: ['Warm house', 'Casa cálida', '温暖小屋'],
				position: { x: 7, y: 12.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'ninjaFuchsiaCity'
				},
			},
			warmHouseB: {
				name: ['Warm house', 'Casa cálida', '温暖小屋'],
				position: { x: 13, y: 12.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'ecoHunterFuchsiaCity'
				},
			},
			route18: {
				name: ['Route 18', 'Ruta 18', '18号道路'],
				position: { x: 0, y: 9},
				size: { w: 2.5, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'policemanFuchsiaCity'
				},
			},
		}
	},
	'fuchsiaCity-2': {
		name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
		background: "assets/images/map/kanto/city/fuchsiaCity-2.png",
		song: "fuchsiaCity",
		worldEvent: {
			fuchsiaCity: {
				name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
				position: { x: 2.8, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'fuchsiaCity-1'
				},
			},
			route19: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 10.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route19-1'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 8, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardFuchsiaCity',
					tw: false
				},
			},	
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 8, y: 2 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'fuchsiaCity'
				},
			},
			warmHouseA: {
				name: ['Warm house', 'Casa cálida', '温暖小屋'],
				position: { x: 15, y: 2.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'birdWatcherFuchsiaCity'
				},
			},
			warmHouseB: {
				name: ['Warm house', 'Casa cálida', '温暖小屋'],
				position: { x: 16, y: 9.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'poacherFuchsiaCity'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 21, y: 14 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselFuchsiaCity',
					tw: false
				},
			},
		}
	},
	'palletTown-1': {
		name: ['Pallet Town', 'Pueblo Paleta', '真新镇'],
		background: "assets/images/map/kanto/city/palletTown-1.png",
		song: "palletTown",
		worldEvent: {
			route21: {
				name: ['Route 21', 'Ruta 21', '21号道路'],
				position: { x: 5.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route21-2'
				},
			},
			route1: {
				name: ['Route 1', 'Ruta 1', '1号道路'],
				position: { x: 11.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route1-1'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 9, y: 10 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardPalletTown',
					tw: false
				},
			},
			sign: {
				name: [`Sign`, `Cartel`,
				`路牌`],
				position: { x: 5, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signPalletTown',
					tw: false
				},
			},
			pokemonLaboratory: {
				name: [`Pokemon Laboratory`, `Laboratorio Pokémon`,
				`宝可梦研究所`],
				position: { x: 14, y: 9.5 },
				size: { w: 7, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'professorOak'
				},
			},
			houseA: {
				name: [`House`, `Casa`,
				`房屋`],
				position: { x: 6, y: 3.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'housePalletTown',
					tw: false
				},
			},
			houseB: {
				name: [`House`, `Casa`,
				`房屋`],
				position: { x: 15, y: 3.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'housePalletTown',
					tw: false
				},
			},
			mailboxA: {
				name: [`Mailbox`, `Buzón`,
				`邮箱`],
				position: { x: 5, y: 6.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'mailboxRival',
					tw: false
				},
			},	
			mailboxB: {
				name: [`Mailbox`, `Buzón`,
				`邮箱`],
				position: { x: 14, y: 6.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'mailboxRival',
					tw: false
				},
			},	
		}
	},
	'pewterCity-1': {
		name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
		background: "assets/images/map/kanto/city/pewterCity-1.png",
		song: "pewterCity",
		worldEvent: {
			pewterCity: {
				name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
				position: { x: 1.8, y: 0 },
				size: { w: 2.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'pewterCity-2'
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 7, y: 7.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'pewterCity-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 14, y: 8 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'pewterCity'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardPewterCity',
					tw: false
				},
			},	
			route2: {
				name: ['Route 2', 'Ruta 2', '2号道路'],
				position: { x: 13.7, y: 15 },
				size: { w: 3.6, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route2-2'
				},
			},
			modernHouse: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 16, y: 2.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'rookiePewterCity'
				},
			},
		}
	},
	'pewterCity-2': {
		name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
		background: "assets/images/map/kanto/city/pewterCity-2.png",
		song: "pewterCity",
		worldEvent: {
			route3: {
				name: ['Route 3', 'Ruta 3', '3号道路'],
				position: { x: 22, y: 5.9 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route3-1'
				},
			},
			pewterCity: {
				name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
				position: { x: 1.8, y: 15 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'pewterCity-1'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 11, y: 1 },
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'brock'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 18, y: 4.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymPewterCity',
					tw: false
				},
			},
			modernHouseA: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 4, y: 9.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'forgetfulLadyPewterCity'
				},
			},
			modernHouseB: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 18, y: 9.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'girlPewterCity'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 3, y: 1 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselAPewterCity',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 4, y: 3 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselBPewterCity',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 8, y: 2 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselCPewterCity',
					tw: false
				},
			},
		}
	},
	'viridianCity-1': {
		name: ['Viridian City', 'Ciudad Verde', '常磐市'],
		background: "assets/images/map/kanto/city/viridianCity-1.png",
		song: "pewterCity",
		worldEvent: {
			viridianCity: {
				name: ['Viridian City', 'Ciudad Verde', '常磐市'],
				position: { x: 5.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'viridianCity-2'
				},
			},
			route1: {
				name: ['Route 1', 'Ruta 1', '1号道路'],
				position: { x: 5.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route1-2'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 10, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardViridianCity',
					tw: false
				},
			},	
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 15, y: 9.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'viridianCity-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 17, y: 3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'viridianCity'
				},
			},
			traditionalHouse: {
				name: ['Traditional house', 'Casa tradicional', '传统房屋'],
				position: { x: 5, y: 9.5 },
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'philosopherViridianCity'
				},
			},
		}
	},
	'viridianCity-2': {
		name: ['Viridian City', 'Ciudad Verde', '常磐市'],
		background: "assets/images/map/kanto/city/viridianCity-2.png",
		song: "pewterCity",
		worldEvent: {
			viridianCity: {
				name: ['Viridian City', 'Ciudad Verde', '常磐市'],
				position: { x: 5.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'viridianCity-1'
				},
			},
			route2: {
				name: ['Route 2', 'Ruta 2', '2号道路'],
				position: { x: 0, y: 2 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route2-1'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 5, y: 8 },
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'giovanni'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 11.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymViridianCity',
					tw: false
				},
			},
			sign: {
				name: [`Sign`, `Cartel`,
				`路牌`],
				position: { x: 21, y: 2 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signViridianCity',
					tw: false
				},
			},
			traditionalHouse: {
				name: ['Traditional house', 'Casa tradicional', '传统房屋'],
				position: { x: 15, y: 8.5 },
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'oldManViridianCity'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 6, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselViridianCity',
					tw: false
				},
			},
		}
	},
	'saffronCity-1': {
		name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
		background: "assets/images/map/kanto/city/saffronCity-1.png",
		song: "pewterCity",
		worldEvent: {
			route5: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 11.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route5-2'
				},
			},
			route7: {
				name: ['Route 7', 'Ruta 7', '7号道路'],
				position: { x: 0, y: 7.7 },
				size: { w: 3, h: 3.8 },
				event: {
					type: 'travelRoute',
					location: 'route7-1'
				},
			},
			saffronCityA: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 5.5, y: 16 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-3'
				},
			},
			saffronCityB: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 20.5, y: 16 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-3'
				},
			},
			saffronCityC: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 23, y: 9 },
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-2'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 11, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardSaffronCity',
					tw: false
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 5, y: 3.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'saffronCity-1'
				},
			},
			buildingA: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 7, y: 10.5 },
				size: { w: 6, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'mechanicSaffronCity'
				},
			},
			buildingB: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 17, y: 8.5 },
				size: { w: 5, h: 6.5 },
				event: {
					type: 'dialogue',
					npc: 'tenantSaffronCity'
				},
			},
		}
	},
	'saffronCity-2': {
		name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
		background: "assets/images/map/kanto/city/saffronCity-2.png",
		song: "pewterCity",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 23, y: 6.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route8-1'
				},
			},
			saffronCityA: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 0, y: 9 },
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-1'
				},
			},
			saffronCityB: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 19.5, y: 16 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-4'
				},
			},
			gym: {
				name: ['Pokémon Gym', 'Gimnasio Pokémon', '宝可梦道馆'],
				position: { x: 9, y: 2},
				size: { w: 7, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'sabrina'
				},
			},	
			signboardGym: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 8, y: 5.5},
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'signboardGymSaffronCity',
					tw: false
				},
			},
			building: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 2, y: 0 },
				size: { w: 5, h: 7 },
				event: {
					type: 'dialogue',
					npc: 'mayorSaffronCity'
				},
			},
		}
	},
	'saffronCity-3': {
		name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
		background: "assets/images/map/kanto/city/saffronCity-3.png",
		song: "pewterCity",
		worldEvent: {
			saffronCityA: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 5.5, y: 0 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-1'
				},
			},
			saffronCityB: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 20.5, y: 0 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-1'
				},
			},
			saffronCityC: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 23, y: 6 },
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-4'
				},
			},
			route6: {
				name: ['Route 6', 'Ruta 6', '6号道路'],
				position: { x: 7.8, y: 15 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route6-2'
				},
			},
			radio: {
				name: ['Radio', 'Radio', '收音机'],
				position: { x: 5, y: 2 },
				size: { w: 5, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'radioHostSaffronCity'
				},
			},
		}
	},
	'saffronCity-4': {
		name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
		background: "assets/images/map/kanto/city/saffronCity-4.png",
		song: "pewterCity",
		worldEvent: {
			saffronCityA: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 0, y: 6 },
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-3'
				},
			},
			saffronCityB: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 19.5, y: 0 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-2'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 15, y: 2 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'saffronCity'
				},
			},
			building: {
				name: ['Building', 'Edificio', '建筑'],
				position: { x: 6, y: 1.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'explorerSaffronCity'
				},
			},
		}
	},
	// APACHAN
	'lithicTown-1': {
		name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
		background: "assets/images/map/apachan/city/lithicTown-1.png",
		song: "pewterCity",
		worldEvent: {
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 2, y: 3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'lithicTown'
				},
			},
			smallHouseA: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 8 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'oldManLithicTown'
				},
			},
			smallHouseB: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 10, y: 8 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'plantGirlLithicTown'
				},
			},
			route56: {
				name: ['Route 56', 'Ruta 56', '56号道路'],
				position: { x: 5.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route56-3'
				},
			},
			route55: {
				name: ['Route 55', 'Ruta 55', '55号道路'],
				position: { x: 0, y: 10.8 },
				size: { w: 2.6, h: 3.5 },
				event: {
					type: 'travelRoute',
					location: 'route55-1'
				},
			},
			lithicTown: {
				name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
				position: { x: 22, y: 3.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'lithicTown-2'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 10, y: 15},
				size: { w: 7, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
					background: './assets/images/background/battle19.png',
					pokemon: [ 
						{ name: 'azurill', minLevel: 5, maxLevel: 8, chance: 39 }, 
						{ name: 'barboach', minLevel: 5, maxLevel: 8, chance: 25 },
						{ name: 'clamperl', minLevel: 8, maxLevel: 11, chance: 15 },
						{ name: 'wailmer', minLevel: 8, maxLevel: 11, chance: 10 },
			            { name: 'luvdisc', minLevel: 8, maxLevel: 11, chance: 7 },
			            { name: 'carvanha', minLevel: 8, maxLevel: 11, chance: 3 },
			            { name: 'feebas', minLevel: 8, maxLevel: 11, chance: 1 },
			        ],
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 10 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardLithicTown',
					tw: false
				},
			},
		}
	},
	'lithicTown-2': {
		name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
		background: "assets/images/map/apachan/city/lithicTown-2.png",
		song: "pewterCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 14, y: 0 },
				size: { w: 5, h: 4 },
				event: {
					type: 'pokeCenter',
					location: 'lithicTown-2'
				},
			},		
			lithicTown: {
				name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
				position: { x: 0, y: 3.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'lithicTown-1'
				},
			},
			route57: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 22, y: 3.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route57-1'
				},
			},
			dojo: {
				name: ['Lithic Dojo', 'Dojo Lítico', '石之道场'],
				position: { x: 2, y: 7.5 },
				size: { w: 7, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'adrian'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 13, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselALithicTown',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 16, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBLithicTown',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 14, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCLithicTown',
					tw: false
				},
			},
		}
	},
	'brokenStoneCity-1': {
		name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'],
		background: "assets/images/map/apachan/city/brokenStoneCity-1.png",
		song: "ceruleanCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 17, y: 2.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'brokenStoneCity-1'
				},
			},		
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 11, y: 3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'brokenStoneCity'
				},
			},
			route52: {
				name: ['Route 52', 'Ruta 52', '52号道路'], 
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route52-2'
				},
			},
			brokenStoneCity: {
				name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'], 
				position: { x: 5.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'brokenStoneCity-2'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 2, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselABrokenStoneCity',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 4, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBBrokenStoneCity',
					tw: false
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 4, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardABrokenStoneCity',
					tw: false
				},
			},
		}
	},
	'brokenStoneCity-2': {
		name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'],
		background: "assets/images/map/apachan/city/brokenStoneCity-2.png",
		song: "ceruleanCity",
		worldEvent: {
			moveDeleterHouse: {
				name: [`Move Deleter House`, `Casa del Quita-movimientos`,
				`遗忘爷爷的家`],
				position: { x: 2, y: 8.5},
				size: { w: 5, h: 4.5},
				event: {
					type: 'moveDeleter',
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 4, y: 1.5 },
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'trainerBrokenStoneCity'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 13, y: 3.5 },
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'technicianBrokenStoneCity'
				},
			},
			brokenStoneCityA: {
				name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'], 
				position: { x: 5.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'brokenStoneCity-1'
				},
			},
			brokenStoneCityB: {
				name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'], 
				position: { x: 23, y: 2 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'brokenStoneCity-3'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 16, y: 1 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCBrokenStoneCity',
					tw: false
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 7, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute43',
					tw: false
				},
			},
		}
	},
	'brokenStoneCity-3': {
		name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'],
		background: "assets/images/map/apachan/city/brokenStoneCity-3.png",
		song: "ceruleanCity",
		worldEvent: {
			dojo: {
				name: ['Lithic Dojo', 'Dojo Lítico', '石之道场'],
				position: { x: 14, y: 8.5 },
				size: { w: 7, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'manny'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 3, y: 5 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'potterBrokenStoneCity'
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 12, y: 2.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'karatekaBrokenStoneCity'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 20, y: 2.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'minerBrokenStoneCity'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 2, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselDBrokenStoneCity',
					tw: false
				},
			},
			brokenStoneCity: {
				name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'], 
				position: { x: 0, y: 2 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'brokenStoneCity-2'
				},
			},
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 23, y: 12.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route51-1'
				},
			},
		}
	},
	'opalTown-1': {
		name: ['Opal Town', 'Pueblo Ópalo', '蛋白镇'],
		background: "assets/images/map/apachan/city/opalTown-1.png",
		song: "nationalPark",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 12, y: 0 },
				size: { w: 5, h: 4 },
				event: {
					type: 'pokeCenter',
					location: 'opalTown-1'
				},
			},		
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 17, y: 0 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'opalTown'
				},
			},
			dojo: {
				name: ['Lithic Dojo', 'Dojo Lítico', '石之道场'],
				position: { x: 3, y: 8.5 },
				size: { w: 7, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'ruben'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 4, y: 0 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'gardenerOpalTown'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 17, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselAOpalTown',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 19, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBOpalTown',
					tw: false
				},
			},
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 0, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route51-5'
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 12.8, y: 15.5 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route51-10'
				},
			},
			route58: {
				name: ['Route 58', 'Ruta 58', '58号道路'], 
				position: { x: 23, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route58-4'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 19, y: 14 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'opalTownHiddenItem',
					invisible: true
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 17, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardOpalTown',
					tw: false
				},
			},
		}
	},
	'flintCity-1': {
		name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
		background: "assets/images/map/apachan/city/flintCity-1.png",
		song: "goldenrodCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 18, y: 2.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'flintCity-1'
				},
			},		
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 12, y: 3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'flintCity'
				},
			},
			cozyHouseA: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 3, y: 0},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'hikerFlintCity'
				},
			},
			cozyHouseB: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 11, y: 10.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'occultistFlintCity'
				},
			},
			cozyHouseC: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 3, y: 10.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'streetArtistFlintCity'
				},
			},
			flintCity: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 0, y: 6.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'flintCity-2'
				},
			},
			route62: {
				name: ['Route 62', 'Ruta 62', '62号道路'], 
				position: { x: 16.8, y: 15.8 },
				size: { w: 3.4, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'route62-2'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 21, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselAFlintCity',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 22, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBFlintCity',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 23, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCFlintCity',
					tw: false
				},
			},
		}
	},
	'flintCity-2': {
		name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
		background: "assets/images/map/apachan/city/flintCity-2.png",
		song: "goldenrodCity",
		worldEvent: {
			flintCityA: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 22, y: 6.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'flintCity-1'
				},
			},
			flintCityB: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 0, y: 6.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'flintCity-3'
				},
			},
			flintCityC: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 11.9, y: 0 },
				size: { w: 3.2, h: 3 },
				event: {
					type: 'travelCity',
					location: 'flintCity-4'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 20, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardAFlintCity',
					tw: false
				},
			},
		}
	},
	'flintCity-3': {
		name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
		background: "assets/images/map/apachan/city/flintCity-3.png",
		song: "goldenrodCity",
		worldEvent: {
			flintCity: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 22, y: 6.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'flintCity-2'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 20, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBFlintCity',
					tw: false
				},
			},
			dojo: {
				name: [`Evolution Dojo`, `Dojo Evolución`,
				`进化道场`],
				position: { x: 15, y: 0},
				size: { w: 5, h: 4 },
				event: {
					type: 'evolutionDojo',
				},
			},
			smallHouseA: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 3, y: 4 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'blacksmithFlintCity'
				},
			},
			smallHouseB: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 9, y: 4 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'neighborFlintCity'
				},
			},
		}
	},
	'flintCity-4': {
		name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
		background: "assets/images/map/apachan/city/flintCity-4.png",
		song: "goldenrodCity",
		worldEvent: {
			flintCity: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 11.9, y: 16 },
				size: { w: 3.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'flintCity-2'
				},
			},
			route63: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 18.8, y: 0 },
				size: { w: 3.4, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'route63-1'
				},
			},
			dojo: {
				name: ['Lithic Dojo', 'Dojo Lítico', '石之道场'],
				position: { x: 5, y: 5.5 },
				size: { w: 7, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'swiker'
				},
			},
		}
	},
	'vitreousCity-1': {
		name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
		background: "assets/images/map/apachan/city/vitreousCity-1.png",
		song: "azaleaTown",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 15, y: 0.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'vitreousCity-1'
				},
			},	
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 7, y: 8.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'residentVitreousCity'
				},
			},	
			vitreousCity: {
				name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
				position: { x: 0, y: 12 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelCity',
					location: 'vitreousCity-2'
				},
			},
			route64: {
				name: ['Route 64', 'Ruta 64', '64号道路'], 
				position: { x: 22.5, y: 4.9 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route64-2'
				},
			},
		}
	},
	'vitreousCity-2': {
		name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
		background: "assets/images/map/apachan/city/vitreousCity-2.png",
		song: "azaleaTown",
		worldEvent: {
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 17, y: 8 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'vitreousCity'
				},
			},	
			dojo: {
				name: ['Lithic Dojo', 'Dojo Lítico', '石之道场'],
				position: { x: 3, y: 7.5 },
				size: { w: 7, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'saire'
				},
			},
			vitreousCityA: {
				name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
				position: { x: 22.5, y: 12 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelCity',
					location: 'vitreousCity-1'
				},
			},
			vitreousCityB: {
				name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
				position: { x: 9.4, y: 0 },
				size: { w: 4.2, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'vitreousCity-3'
				},
			},
			route65: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x:0, y: 12 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route65-1'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 14, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardVitreousCity',
					tw: false
				},
			},
		}
	},
	'vitreousCity-3': {
		name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
		background: "assets/images/map/apachan/city/vitreousCity-3.png",
		song: "azaleaTown",
		worldEvent: {
			vitreousCity: {
				name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
				position: { x: 9.4, y: 16 },
				size: { w: 4.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'vitreousCity-2'
				},
			},
			bigNiceHouse: {
				name: ['Big nice house', 'Gran casa bonita', '漂亮的大房子'],
				position: { x: 5, y: 4.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'inventorVitreousCity'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 15, y: 6 },
				size: { w: 5, h: 7 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
					background: './assets/images/background/battle19.png',
					song: "newBarkTown",
					pokemon: [ 
						{ name: 'spheal', minLevel: 36, maxLevel: 40, chance: 35 }, 
						{ name: 'barboach', minLevel: 35, maxLevel: 39, chance: 25 },
						{ name: 'clamperl', minLevel: 37, maxLevel: 38, chance: 20 },
						{ name: 'wailmer', minLevel: 35, maxLevel: 40, chance: 10 },
			            { name: 'luvdisc', minLevel: 35, maxLevel: 40, chance: 9 },
			            { name: 'relicanth', minLevel: 36, maxLevel: 40, chance: 1 },
			        ],
				},
			},
		}
	},
	'marbleCity-1': {
		name: ['Marble City', 'Ciudad Márlmol', '大理石市'],
		background: "assets/images/map/apachan/city/marbleCity-1.png",
		song: "fuchsiaCity",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 5, y: 7.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'marbleCity-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 15, y: 8 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'marbleCity'
				},
			},
			modernHouse: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 19, y: 3.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'architectMarbleCity'
				},
			},
			route60: {
				name: ['Route 60', 'Ruta 60', '60号道路'],
				position: { x: 10.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route60-2'
				},
			},
			marbleCityA: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 0, y: 11.8 },
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-2'
				},
			},
			marbleCityB: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 10.3, y: 15 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-3'
				},
			},
			marbleCityC: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 23, y: 11.8 },
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-4'
				},
			},
		}
	},
	'marbleCity-2': {
		name: ['Marble City', 'Ciudad Márlmol', '大理石市'],
		background: "assets/images/map/apachan/city/marbleCity-2.png",
		song: "fuchsiaCity",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 5, y: 1 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'tileCounterMarbleCity'
				},
			},
			modernHouseA: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 2, y: 8.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'trainerMarbleCity'
				},
			},
			modernHouseB: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 9, y: 8.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'chefMarbleCity'
				},
			},
			marbleCity: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 23, y: 11.8 },
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-1'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 23, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'marbleCityHiddenItem',
					invisible: true
				},
			},
		}
	},
	'marbleCity-3': {
		name: ['Marble City', 'Ciudad Márlmol', '大理石市'],
		background: "assets/images/map/apachan/city/marbleCity-3.png",
		song: "fuchsiaCity",
		worldEvent: {
			modernHouseA: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 17, y: 3.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'fishermanMarbleCity'
				},
			},
			modernHouseB: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 3, y: 3.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'boyMarbleCity'
				},
			},
			marbleCity: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 10.3, y: 0 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-1'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`,
				`池塘`],
				position: { x: 3, y: 13},
				size: { w: 19, h: 5 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Marble City', 'Ciudad Mármol', '大理石市'], 
					background: './assets/images/background/battle19.png',
					song: "newBarkTown",
					pokemon: [ 
						{ name: 'luvdisc', minLevel: 70, maxLevel: 80, chance: 40 }, 
						{ name: 'barboach', minLevel: 70, maxLevel: 80, chance: 28 },
						{ name: 'clamperl', minLevel: 70, maxLevel: 80, chance: 18 },
			            { name: 'feebas', minLevel: 70, maxLevel: 80, chance: 6 },
			            { name: 'relicanth', minLevel: 85, maxLevel: 90, chance: 6 },
			            { name: 'mudkip', minLevel: 70, maxLevel: 80, chance: 2 },
			        ],
				},
			},	
		}
	},
	'marbleCity-4': {
		name: ['Marble City', 'Ciudad Márlmol', '大理石市'],
		background: "assets/images/map/apachan/city/marbleCity-4.png",
		song: "fuchsiaCity",
		worldEvent: {
			modernHouse: {
				name: ['Modern house', 'Casa moderna', '现代房屋'],
				position: { x: 18, y: 8.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'retiredFarmerMarbleCity'
				},
			},
			marbleCity: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 0, y: 11.8 },
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-1'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 7, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselMarbleCity',
					tw: false
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 11, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardMarbleCity',
					tw: false
				},
			},
		}
	},
	'tarpatchTown-1': {
		name: ['Tarpatch Town', 'Pueblo Alquitrán', '柏油镇'],
		background: "assets/images/map/apachan/city/tarpatchTown-1.png",
		song: "cinnabarIsland",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 4, y: 0 },
				size: { w: 5, h: 4 },
				event: {
					type: 'pokeCenter',
					location: 'tarpatchTown-1'
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 13, y: 0 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'tarpatchTown'
				},
			},
			discShop: {
				name: ['Disc Shop', 'Tienda de Discos', '光盘商店'],
				position: { x: 8, y: 8 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeMart',
					location: 'discShop'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`,
				`告示牌`],
				position: { x: 9, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardTarpatchTown',
					tw: false
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`,
				`容器`],
				position: { x: 12, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselTarpatchTown',
					tw: false
				},
			},
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 0, y: 5.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route66-7'
				},
			},
			route68: {
				name: ['Route 68', 'Ruta 68', '68号道路'],
				position: { x: 22, y: 5.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route68-1'
				},
			},
		}
	},
}