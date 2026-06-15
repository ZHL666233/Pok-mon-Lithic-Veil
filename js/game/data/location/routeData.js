export const route = {
	'route29-1': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-1.png",
		song: "route29",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5.5, y: 0.8 },
				size: { w: 13, h: 3.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 30 },
			            { name: 'rattata', minLevel: 2, maxLevel: 4, chance: 20 },     
			            { name: 'sentret', minLevel: 2, maxLevel: 3, chance: 15 }, 
			            { name: 'hoothoot', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 15 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 5 }
			        ],
				},
			},
			signA: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 14, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute29A',
					tw: false
				},
			},	
			signB: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 17, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute29D',
					tw: false
				},
			},
			newBarkTown: {
				name: ['New Bark Town', 'Pueblo Primavera', '若叶镇'],
				position: { x: 23, y: 6.8 },
				size: { w: 2, h: 4.6 },
				event: {
					type: 'travelCity',
					location: 'newBarkTown-1'
				},
			},
			route29A: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 0, y: 6.9 },
				size: { w: 3, h: 5.3 },
				event: {
					type: 'travelRoute',
					location: 'route29-2'
				},
			},	
			route29B: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 12.8, y: 16},
				size: { w: 2.4, h: 2},
				event: {
					type: 'travelRoute',
					location: 'route29-5'
				},
			},	
		}
	},
	'route29-2': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-2.png",
		song: "route29",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 2},
				size: { w: 8, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 35 },
			            { name: 'rattata', minLevel: 2, maxLevel: 4, chance: 20 },     
			            { name: 'sentret', minLevel: 2, maxLevel: 3, chance: 15 }, 
			            { name: 'hoothoot', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 10 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 5 }
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 13},
				size: { w: 18, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'hoothoot', minLevel: 2, maxLevel: 4, chance: 35 }, 
						{ name: 'sentret', minLevel: 2, maxLevel: 4, chance: 20 },
			            { name: 'rattata', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 10 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 5 }
			        ],
				},
			},
			route46: {
				name: [`Route 46`, `Ruta 46`, `46号道路`],
				position: { x: 11, y: 0 },
				size: { w: 5, h: 4 },
				event: {
					type: 'travelRoute',
					location: 'route46-1'
				},
			},	
			route29A: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 22.5, y: 6.9 },
				size: { w: 2.5, h: 5.3 },
				event: {
					type: 'travelRoute',
					location: 'route29-1'
				},
			},	
			route29B: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 0, y: 7.8 },
				size: { w: 2.5, h: 4.4 },
				event: {
					type: 'travelRoute',
					location: 'route29-3'
				},
			},	
		}
	},
	'route29-3': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-3.png",
		song: "route29",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 15, y: 2},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'bugManiacRoute29'
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 9, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute29B',
					tw: false
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 8, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route29-3',
					newLocation: 'route29-3bis',
				},
			},	
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 10, y: 15},
				size: { w: 7, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle19.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 5, maxLevel: 8, chance: 70 }, 
						{ name: 'goldeen', minLevel: 8, maxLevel: 10, chance: 10 },
			            { name: 'psyduck', minLevel: 8, maxLevel: 10, chance: 15 },
			            { name: 'qwilfish', minLevel: 8, maxLevel: 10, chance: 5 },
			        ],
				},
			},	
			route29A: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 22.5, y: 7.8 },
				size: { w: 2.5, h: 4.4 },
				event: {
					type: 'travelRoute',
					location: 'route29-2'
				},
			},	
			route29B: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 0, y: 7.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'hoothoot', minLevel: 2, maxLevel: 4, chance: 30 }, 
						{ name: 'sentret', minLevel: 2, maxLevel: 4, chance: 20 },
			            { name: 'rattata', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 14 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route29-4',
			        }
				},
			},	
		}
	},
	'route29-3bis': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-3bis.png",
		song: "route29",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 15, y: 2},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'bugManiacRoute29'
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 9, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute29B',
					tw: false
				},
			},	
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 10, y: 15},
				size: { w: 7, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 5, maxLevel: 8, chance: 70 }, 
						{ name: 'goldeen', minLevel: 8, maxLevel: 10, chance: 10 },
			            { name: 'psyduck', minLevel: 8, maxLevel: 10, chance: 15 },
			            { name: 'qwilfish', minLevel: 8, maxLevel: 10, chance: 5 },
			        ],
				},
			},	
			route29A: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 22.5, y: 7.8 },
				size: { w: 2.5, h: 4.4 },
				event: {
					type: 'travelRoute',
					location: 'route29-2'
				},
			},	
			route29B: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 0, y: 7.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'hoothoot', minLevel: 2, maxLevel: 4, chance: 33 }, 
						{ name: 'sentret', minLevel: 2, maxLevel: 4, chance: 20 },
			            { name: 'rattata', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 14 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 3 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route29-4'
			        }
				},
			},
			route29C: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 5.8, y: 0 },
				size: { w: 5.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route29-6'
				},
			},		
		}
	},
	'route29-4': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-4.png",
		song: "route29",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 14 },
				size: { w: 10, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 35 },
			            { name: 'rattata', minLevel: 2, maxLevel: 4, chance: 20 },     
			            { name: 'sentret', minLevel: 2, maxLevel: 3, chance: 15 }, 
			            { name: 'hoothoot', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 10 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 5 }
			        ],
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 17, y: 10 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute29C',
					tw: false
				},
			},	
			route29: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 23, y: 7.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'hoothoot', minLevel: 2, maxLevel: 4, chance: 30 }, 
						{ name: 'sentret', minLevel: 2, maxLevel: 4, chance: 20 },
			            { name: 'rattata', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'hoppip', minLevel: 3, maxLevel: 5, chance: 14 },
			            { name: 'exeggcute', minLevel: 3, maxLevel: 5, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route29-3'
			        }
				},
			},	
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 0, y: 6.8},
				size: { w: 3, h: 4.6 },
				event: {
					type: 'travelCity',
					location: 'cherrygroveCity-1'
				},
			},	
		}
	},
	'route29-5': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-5.png",
		song: "route29",
		worldEvent: {
			cozyHouse: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 5, y: 3.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'burglarRoute29'
				},
			},
			route29: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 12.8, y: 0},
				size: { w: 2.4, h: 2},
				event: {
					type: 'travelRoute',
					location: 'route29-1'
				},
			},	
			route49: {
				name: [`Route 49`, `Ruta 49`, `49号道路`],
				position: { x: 9.5, y: 13 },
				size: { w: 9, h: 5 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 29', 'Ruta 29', '29号道路'], 
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'seel', minLevel: 27, maxLevel: 31, chance: 25 },
						{ name: 'staryu', minLevel: 28, maxLevel: 33, chance: 20 }, 
						{ name: 'krabby', minLevel: 29, maxLevel: 32, chance: 20 },
						{ name: 'shellder', minLevel: 28, maxLevel: 31, chance: 20 },
						{ name: 'seaking', minLevel: 30, maxLevel: 34, chance: 12 },
						{ name: 'cloyster', minLevel: 29, maxLevel: 34, chance: 1 },
						{ name: 'dewgong', minLevel: 30, maxLevel: 34, chance: 1 },
						{ name: 'kingler', minLevel: 29, maxLevel: 35, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 23], 
			        	location: 'route49-1'
			        }
				},
			},	
		}
	},
	'route29-6': {
		name: ['Route 29', 'Ruta 29', '29号道路'],
		background: "assets/images/map/johto/route/route29-6.png",
		song: "route29",
		worldEvent: {
			mansion: {
				name: ['Mansion', 'Mansión', '大宅'],
				position: { x: 12, y: 0 },
				size: { w: 7, h: 5.5 },
				event: {
					type: 'dialogue',
					npc: 'mansionRoute29'
				},
			},
			route29: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 5.8, y: 16 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route29-3bis'
				},
			},		
		}
	},
	'cherryGrotto-1': {
		name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
		background: "assets/images/map/johto/route/cherryGrotto-1.png",
		song: "groudonKyogre",
		worldEvent: {
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 17.9, y: 0 },
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cherrygroveCity-2'
				},
			},
			cherryGrotto: {
				name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
				position: { x:0, y: 16 },
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'cherryGrotto-2'
				},
			},

		}
	},
	'cherryGrotto-2': {
		name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
		background: "assets/images/map/johto/route/cherryGrotto-2.png",
		song: "groudonKyogre",
		worldEvent: {
			cherryGrotto: {
				name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
				position: { x: 21, y: 0 },
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'cherryGrotto-1'
				},
			},
			groudon: {
				name: ['Groudon', 'Groudon', '固拉多'], 
				position: { x: 4, y: 3.5 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/groudon.png',
					type: 'dialogue',
					npc: 'groudon'
				},
			},
		}
	},
	'cherryGrotto-2bis': {
		name: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'],
		background: "assets/images/map/johto/route/cherryGrotto-2.png",
		song: "groudonKyogre",
		worldEvent: {
			cherryGrotto: {
				name: ['Cherry Grotto', 'Gruta Cerezo', '樱花洞窟'],
				position: { x: 21, y: 0 },
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'cherryGrotto-1'
				},
			},
		}
	},
	'route49-1': {
		name: ['Route 49', 'Ruta 49', '49号道路'],
		background: "assets/images/map/johto/route/route49-1.png",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 10 },
				size: { w: 8, h: 6},
				event: {
					type: 'routeBattle',
					title: ['Route 49', 'Ruta 49', '49号道路'],
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'exeggutor', minLevel: 33, maxLevel: 35, chance: 20 }, 
						{ name: 'arbok', minLevel: 29, maxLevel: 34, chance: 15 }, 
						{ name: 'butterfree', minLevel: 31, maxLevel: 33, chance: 15 }, 
						{ name: 'beedrill', minLevel: 31, maxLevel: 33, chance: 15 }, 
			            { name: 'flaaffy', minLevel: 26, maxLevel: 30, chance: 10 }, 
						{ name: 'poliwhirl', minLevel: 27, maxLevel: 32, chance: 10 }, 
						{ name: 'phanpy', minLevel: 29, maxLevel: 34, chance: 10 }, 
						{ name: 'fearow', minLevel: 30, maxLevel: 32, chance: 5 }, 
			        ],
				},
			},
			route29: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 9.5, y: 0 },
				size: { w: 9, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 49', 'Ruta 49', '49号道路'], 
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'seel', minLevel: 27, maxLevel: 31, chance: 25 },
						{ name: 'staryu', minLevel: 28, maxLevel: 33, chance: 20 }, 
						{ name: 'krabby', minLevel: 29, maxLevel: 32, chance: 20 },
						{ name: 'shellder', minLevel: 28, maxLevel: 31, chance: 20 },
						{ name: 'seaking', minLevel: 30, maxLevel: 34, chance: 12 },
						{ name: 'cloyster', minLevel: 29, maxLevel: 34, chance: 1 },
						{ name: 'dewgong', minLevel: 30, maxLevel: 34, chance: 1 },
						{ name: 'kingler', minLevel: 29, maxLevel: 35, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 23], 
			        	location: 'route29-5'
			        }
				},
			},
			route49: {
				name: [`Route 49`, `Ruta 49`, `49号道路`],
				position: { x: 0, y: 12 },
				size: { w: 2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 49', 'Ruta 49', '49号道路'],
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'flaaffy', minLevel: 26, maxLevel: 30, chance: 20 }, 
						{ name: 'poliwhirl', minLevel: 27, maxLevel: 32, chance: 15 }, 
						{ name: 'arbok', minLevel: 29, maxLevel: 34, chance: 15 }, 
						{ name: 'butterfree', minLevel: 31, maxLevel: 33, chance: 15 }, 
						{ name: 'beedrill', minLevel: 31, maxLevel: 33, chance: 10 }, 
						{ name: 'exeggutor', minLevel: 33, maxLevel: 35, chance: 10 }, 
						{ name: 'fearow', minLevel: 30, maxLevel: 32, chance: 10 }, 
						{ name: 'phanpy', minLevel: 29, maxLevel: 34, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route49-2'
			        }
				},
			},		
		}
	},
	'route49-2': {
		name: ['Route 49', 'Ruta 49', '49号道路'],
		background: "assets/images/map/johto/route/route49-2.png",
		song: "route29",
		worldEvent: {
			bigNiceHouse: {
				name: ['Big nice house', 'Gran casa bonita', '漂亮的大房子'],
				position: { x: 9, y: 7.5},
				size: { w: 6, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'wealthyManRoute49'
				},
			},
			route49: {
				name: [`Route 49`, `Ruta 49`, `49号道路`],
				position: { x: 22, y: 12 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 49', 'Ruta 49', '49号道路'],
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'flaaffy', minLevel: 26, maxLevel: 30, chance: 20 }, 
						{ name: 'poliwhirl', minLevel: 27, maxLevel: 32, chance: 15 }, 
						{ name: 'arbok', minLevel: 29, maxLevel: 34, chance: 15 }, 
						{ name: 'butterfree', minLevel: 31, maxLevel: 33, chance: 15 }, 
						{ name: 'beedrill', minLevel: 31, maxLevel: 33, chance: 10 }, 
						{ name: 'exeggutor', minLevel: 33, maxLevel: 35, chance: 10 }, 
						{ name: 'fearow', minLevel: 30, maxLevel: 32, chance: 10 }, 
						{ name: 'phanpy', minLevel: 29, maxLevel: 34, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route49-1'
			        }
				},
			},		
		}
	},
	'route46-1': {
		name: ['Route 46', 'Ruta 46', '46号道路'],
		background: "assets/images/map/johto/route/route46-1.png",
		song: "route29",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 4},
				size: { w: 11, h: 6},
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
			            { name: 'spearow', minLevel: 2, maxLevel: 3, chance: 45 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 25 },
			            { name: 'geodude', minLevel: 2, maxLevel: 3, chance: 25 },
			            { name: 'jigglypuff', minLevel: 3, maxLevel: 5, chance: 5 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 17, y: 12},
				size: { w: 7, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [
						{ name: 'geodude', minLevel: 2, maxLevel: 3, chance: 45 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 40 },
			            { name: 'spearow', minLevel: 2, maxLevel: 3, chance: 10 },
			            { name: 'jigglypuff', minLevel: 3, maxLevel: 5, chance: 5 },
					]
				},
			},
			route29A: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 3.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route29-2',
					sound: 'jump1'
				},
			},	
			route29B: {
				name: [`Route 29`, `Ruta 29`, `29号道路`],
				position: { x: 10.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route29-2'
				},
			},	
		}
	},
	'route46-2': {
		name: ['Route 46', 'Ruta 46', '46号道路'],
		background: "assets/images/map/johto/route/route46-2.png",
		song: "route29",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 3},
				size: { w: 6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [
						{ name: 'fearow', minLevel: 49, maxLevel: 54, chance: 35 },
						{ name: 'weepinbell', minLevel: 48, maxLevel: 54, chance: 15 },
						{ name: 'tangela', minLevel: 48, maxLevel: 53, chance: 15 },
			            { name: 'raticate', minLevel: 47, maxLevel: 51, chance: 15 },
			            { name: 'graveler', minLevel: 49, maxLevel: 52, chance: 10 },
			            { name: 'wigglytuff', minLevel: 50, maxLevel: 53, chance: 5 },
			           	{ name: 'chikorita', minLevel: 52, maxLevel: 55, chance: 5 },
					]
				},
			},
			darkCave: {
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 16, y: 4},
				size: { w: 3, h: 3},
				event: {
					type: 'travelRoute',
					location: 'darkCave-6'
				},
			},	
			route46A: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 3.7, y: 15},
				size: { w: 5.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route46-1',
					sound: 'jump1'
				},
			},
			route46B: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 17.7, y: 15},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route46-1',
					sound: 'jump1'
				},
			},
		}
	},
	'route46-3': {
		name: ['Route 46', 'Ruta 46', '46号道路'],
		background: "assets/images/map/johto/route/route46-3.png",
		song: "route29",
		worldEvent: {
			cozyHouse: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 4, y: 3.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'runnerRoute46'
				},
			},
			route46A: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 23, y: 4.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'fearow', minLevel: 48, maxLevel: 55, chance: 35 },
			            { name: 'raticate', minLevel: 49, maxLevel: 52, chance: 25 },
			            { name: 'graveler', minLevel: 50, maxLevel: 54, chance: 15 },
			            { name: 'gloom', minLevel: 51, maxLevel: 53, chance: 10 },
			            { name: 'wigglytuff', minLevel: 52, maxLevel: 55, chance: 5 },
			            { name: 'jumpluff', minLevel: 52, maxLevel: 54, chance: 5 },
			           	{ name: 'chikorita', minLevel: 51, maxLevel: 55, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'route46-4'
			        }
				},
			},
			route46B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 7.7, y: 15 },
				size: { w: 3.6 , h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route46-2',
					sound: 'jump1'
				},
			},
		}
	},
	'route46-4': {
		name: ['Route 46', 'Ruta 46', '46号道路'],
		background: "assets/images/map/johto/route/route46-4.png",
		song: "route29",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 12},
				size: { w: 10, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
			            { name: 'fearow', minLevel: 49, maxLevel: 55, chance: 45 },
			            { name: 'raticate', minLevel: 48, maxLevel: 52, chance: 25 },
			            { name: 'graveler', minLevel: 50, maxLevel: 53, chance: 20 },
			            { name: 'wigglytuff', minLevel: 50, maxLevel: 54, chance: 5 },
			           	{ name: 'chikorita', minLevel: 51, maxLevel: 55, chance: 5 },
			        ],
				},
			},
			darkCave: {
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 18, y: 3},
				size: { w: 3, h: 3},
				event: {
					type: 'travelRoute',
					location: 'darkCave-8'
				},
			},	
			route46: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 0, y: 4.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'], 
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'fearow', minLevel: 48, maxLevel: 55, chance: 35 },
			            { name: 'raticate', minLevel: 49, maxLevel: 52, chance: 25 },
			            { name: 'graveler', minLevel: 50, maxLevel: 54, chance: 15 },
			            { name: 'gloom', minLevel: 51, maxLevel: 53, chance: 10 },
			            { name: 'wigglytuff', minLevel: 52, maxLevel: 55, chance: 5 },
			            { name: 'jumpluff', minLevel: 52, maxLevel: 54, chance: 5 },
			           	{ name: 'chikorita', minLevel: 51, maxLevel: 55, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'route46-3'
			        }
				},
			},
			route45: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 11.7, y: 0},
				size: { w: 4.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'parasect', minLevel: 50, maxLevel: 54, chance: 10 },
			           	{ name: 'dodrio', minLevel: 50, maxLevel: 53, chance: 10 },
						{ name: 'sunflora', minLevel: 51, maxLevel: 55, chance: 10 },
			           	{ name: 'weepinbell', minLevel: 52, maxLevel: 54, chance: 10 },
			           	{ name: 'jumpluff', minLevel: 48, maxLevel: 53, chance: 10 },
			           	{ name: 'granbull', minLevel: 49, maxLevel: 53, chance: 10 },    	
			           	{ name: 'donphan', minLevel: 48, maxLevel: 52, chance: 8 },
			           	{ name: 'sunflora', minLevel: 50, maxLevel: 55, chance: 7 },
			           	{ name: 'graveler', minLevel: 48, maxLevel: 53, chance: 7 },
			           	{ name: 'bellossom', minLevel: 49, maxLevel: 55, chance: 5 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 5 },
			           	{ name: 'skarmory', minLevel: 52, maxLevel: 53, chance: 5 },
			           	{ name: 'chikorita', minLevel: 51, maxLevel: 55, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route45-9'
			        }
				},
			},
		}
	},
	'cherryIslet-1': {
		name: ['Cherry Islet', 'Islote Cereza', '樱花小岛'],
		background: "assets/images/map/johto/route/cherryIslet-1.png",
		song: "cherrygroveCity",
		worldEvent: {
			lonelyHouse: {
				name: ['Lonely House', 'Casa Solitaria', '孤独小屋'],
				position: { x: 8, y: 3.5 },
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'hermitCherryIslet'
				},
			},
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 21.5, y: 6 },
				size: { w: 3.5, h: 9 },
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
			        	location: 'cherrygroveCity-2',
			        	isCity: true
			        }
				},
			},
		}
	},
	'route30-1': {
		name: ['Route 30', 'Ruta 30', '30号道路'],
		background: "assets/images/map/johto/route/route30-1.png",
		song: "route30",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 3, y: 4},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute30A',
					tw: false
				},
			},	
			cottage: {
				name: ['Cottage', 'Casita', '小别墅'],
				position: { x: 8, y: 5},
				size: { w: 3, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'bugCatcherRoute30'
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 11},
				size: { w: 7, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 40 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 5, chance: 6 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 4 }
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 13, y: 6},
				size: { w: 9, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 40 },
			            { name: 'metapod', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'ledyba', minLevel: 3, maxLevel: 5, chance: 5 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 5 }
			        ],
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 15, y: 15},
				size: { w: 7, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle12.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 5, maxLevel: 8, chance: 70 }, 
			            { name: 'psyduck', minLevel: 8, maxLevel: 10, chance: 16 },
						{ name: 'goldeen', minLevel: 8, maxLevel: 10, chance: 10 },
			            { name: 'qwilfish', minLevel: 8, maxLevel: 10, chance: 4 },
			        ],
				},
			},	
			cherrygroveCity: {
				name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
				position: { x: 6.8, y: 16},
				size: { w: 4.5, h: 2},
				event: {
					type: 'travelCity',
					location: 'cherrygroveCity-1'
				},
			},	
			route30A: {
				name: ['Route 30', 'Ruta 30', '30号道路'],
				position: { x: 5.7, y: 0},
				size: { w: 2.6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 15 },
			            { name: 'metapod', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 5, chance: 4 },
			            { name: 'ledyba', minLevel: 3, maxLevel: 5, chance: 3 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 3 }
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route30-2'
			        }
				},
			},
			route30B: {
				name: ['Route 30', 'Ruta 30', '30号道路'],
				position: { x: 19.7, y: 0},
				size: { w: 2.6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 15 },
			            { name: 'metapod', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'ledyba', minLevel: 3, maxLevel: 5, chance: 4 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 5, chance: 3 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 3 }
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route30-2'
			        }
				},
			},
		}
	},
	'route30-2': {
		name: ['Route 30', 'Ruta 30', '30号道路'],
		background: "assets/images/map/johto/route/route30-2.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 5},
				size: { w: 3, h: 9},
				event: {			
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 20 },
			            { name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 20 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 5, chance: 19 },
						{ name: 'ledyba', minLevel: 3, maxLevel: 5, chance: 19 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 9 },
			            { name: 'metapod', minLevel: 4, maxLevel: 5, chance: 9 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 4 }
			        ],
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 20, y: 6},
				size: { w: 4, h: 6 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle12.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 5, maxLevel: 8, chance: 55 }, 
						{ name: 'poliwag', minLevel: 8, maxLevel: 10, chance: 20 },
			            { name: 'wooper', minLevel: 8, maxLevel: 10, chance: 20 },
			            { name: 'corsola', minLevel: 8, maxLevel: 10, chance: 5 },
			        ],
				},
			},	
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 14, y: 2},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute30',
					tw: false
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 15, y: 4},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'kurt'
				},
			},	
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 7},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute30B',
					tw: false
				},
			},	
			route30A: {
				name: ['Route 30', 'Ruta 30', '30号道路'],
				position: { x: 5.7, y: 16},
				size: { w: 2.6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 14 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 14 },
			            { name: 'metapod', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 5, chance: 4 },
			            { name: 'ledyba', minLevel: 3, maxLevel: 5, chance: 4 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route30-1'
			        }
				},
			},	
			route30B: {
				name: ['Route 30', 'Ruta 30', '30号道路'],
				position: { x: 19.7, y: 16},
				size: { w: 2.6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'caterpie', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'weedle', minLevel: 3, maxLevel: 4, chance: 15 },
			            { name: 'rattata', minLevel: 3, maxLevel: 4, chance: 14 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 14 },
			            { name: 'metapod', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 5, chance: 4 },
			            { name: 'ledyba', minLevel: 3, maxLevel: 5, chance: 4 },
			            { name: 'aipom', minLevel: 4, maxLevel: 6, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route30-1'
			        }
				},
			},	
			route31: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 3, y: 0},
				size: { w: 5, h: 2},
				event: {
					type: 'travelRoute',
					location: 'route31-1'
				},
			},	
		}
	},
	'route31-1': {
		name: ['Route 31', 'Ruta 31', '31号道路'],
		background: "assets/images/map/johto/route/route31-1.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 11},
				size: { w: 7, h: 6},
				event: {			
					type: 'routeBattle',
					title: ['Route 31', 'Ruta 31', '31号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'bellsprout', minLevel: 3, maxLevel: 5, chance: 34 },
			            { name: 'caterpie', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'weedle', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'spinarak', minLevel: 4, maxLevel: 5, chance: 12 },
						{ name: 'ledyba', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'kakuna', minLevel: 5, maxLevel: 7, chance: 8 },
			            { name: 'metapod', minLevel: 5, maxLevel: 7, chance: 8 },
			            { name: 'pineco', minLevel: 5, maxLevel: 8, chance: 4 }
			        ],
				},
			},
			smallHouse: {
				name: ['Mr. Pokémon House', 'Casa del Sr. Pokémon', '宝可梦先生的家'],
				position: { x: 9, y: 1},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'mrPokemon'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 8, y: 3},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute31',
					tw: false
				},
			},	
			route30: {
				name: ['Route 30', 'Ruta 30', '30号道路'],
				position: { x: 3, y: 16},
				size: { w: 5, h: 2},
				event: {
					type: 'travelRoute',
					location: 'route30-2'
				},
			},	
			route31: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 23, y: 12.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route31-2'
				},
			},	
			darkCave: {
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 20, y: 3},
				size: { w: 3, h: 3},
				event: {
					type: 'travelRoute',
					location: 'darkCave-1'
				},
			},	
			violetCity: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 0, y: 6.8},
				size: { w: 3, h: 2.4},
				event: {
					type: 'travelCity',
					location: 'violetCity-1'
				},
			},	
		}
	},
	'route31-2': {
		name: ['Route 31', 'Ruta 31', '31号道路'],
		background: "assets/images/map/johto/route/route31-2.png",
		song: "route30",
		worldEvent: {
			route31A: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 0, y: 12.8},
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route31-1'
				},
			},	
			route31B: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 13, y: 16},
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route31-3'
				},
			},	
		}
	},
	'route31-3': {
		name: ['Route 31', 'Ruta 31', '31号道路'],
		background: "assets/images/map/johto/route/route31-3.png",
		song: "route30",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 8},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'firefighterRoute31'
				},
			},
			route31A: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 13, y: 0 },
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route31-2'
				},
			},	
			route31B: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 4, y: 16 },
				size: { w: 5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route31-4'
				},
			},	
		}
	},
	'route31-4': {
		name: ['Route 31', 'Ruta 31', '31号道路'],
		background: "assets/images/map/johto/route/route31-4.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 5},
				size: { w: 6, h: 9},
				event: {
					type: 'routeBattle',
					title: ['Route 31', 'Ruta 31', '31号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			           	{ name: 'geodude', minLevel: 2, maxLevel: 4, chance: 38 }, 
			           	{ name: 'caterpie', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'weedle', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'spinarak', minLevel: 4, maxLevel: 5, chance: 12 },
						{ name: 'ledyba', minLevel: 4, maxLevel: 5, chance: 12 },
						{ name: 'metapod', minLevel: 4, maxLevel: 5, chance: 5 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 5 },
			            { name: 'pineco', minLevel: 5, maxLevel: 8, chance: 4 }     
			        ],
				},
			},
			route31A: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 4, y: 0 },
				size: { w: 5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route31-3'
				},
			},	
			route31B: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 9.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route29-4',
					sound: 'jump1'
				},
			},	
		}
	},
	'darkCave-1': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-1.png",
		song: "unionCave",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 16, y: 3},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signDarkCave',
					tw: false
				},
			},	
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 10},
				size: { w: 7, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
			           	{ name: 'geodude', minLevel: 2, maxLevel: 4, chance: 53 },
			            { name: 'zubat', minLevel: 2, maxLevel: 4, chance: 33 },
			            { name: 'teddiursa', minLevel: 2, maxLevel: 4, chance: 10 },    
			            { name: 'dunsparce', minLevel: 2, maxLevel: 4, chance: 4 }
			        ],
				},
			},
			route31: {
				name: ['Route 31', 'Ruta 31', '31号道路'],
				position: { x: 5, y: 8},
				size: { w: 3, h: 3},
				event: {
					type: 'travelRoute',
					location: 'route31-1'
				},
			},	
		}
	},
	'darkCave-2': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-2.png",
		song: "unionCave",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 10},
				size: { w: 10, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
			           	{ name: 'graveler', minLevel: 48, maxLevel: 54, chance: 18 },
			            { name: 'wobbuffet', minLevel: 49, maxLevel: 55, chance: 18 },
			            { name: 'ursaring', minLevel: 50, maxLevel: 52, chance: 18 },    
			            { name: 'golbat', minLevel: 50, maxLevel: 53, chance: 14 },
			            { name: 'machoke', minLevel: 51, maxLevel: 54, chance: 12 },
			            { name: 'kadabra', minLevel: 52, maxLevel: 54, chance: 12 },
			            { name: 'xatu', minLevel: 51, maxLevel: 55, chance: 4 },
			            { name: 'dunsparce', minLevel: 50, maxLevel: 55, chance: 4 }
			        ],
				},
			},
			darkCaveA: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 18.8, y: 16},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-1',
					sound: 'jump1'
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
				position: { x: 2.5, y: 3.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-3',
					sound: 'stairs'
				},
			},
		}
	},
	'darkCave-3': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-3.png",
		song: "unionCave",
		worldEvent: {
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 10, y: 14},
				size: { w: 7, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle14.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 49, maxLevel: 54, chance: 40 }, 
						{ name: 'goldeen', minLevel: 48, maxLevel: 55, chance: 50 },
			            { name: 'seaking', minLevel: 50, maxLevel: 51, chance: 5 },
			            { name: 'totodile', minLevel: 51, maxLevel: 53, chance: 5 },
			        ],
				},
			},	
			darkCaveA: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
				position: { x: 2.5, y: 2.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-2',
					sound: 'stairs'
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
				position: { x: 22, y: 8},
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 49, maxLevel: 55, chance: 17 },
			            { name: 'ursaring', minLevel: 48, maxLevel: 55, chance: 17 },    
			            { name: 'wobbuffet', minLevel: 50, maxLevel: 52, chance: 14 },
			            { name: 'golbat', minLevel: 50, maxLevel: 54, chance: 14 },
			            { name: 'machoke', minLevel: 48, maxLevel: 53, chance: 12 },
			            { name: 'kadabra', minLevel: 49, maxLevel: 53, chance: 12 },
			            { name: 'dugtrio', minLevel: 48, maxLevel: 54, chance: 5 },
			            { name: 'xatu', minLevel: 47, maxLevel: 55, chance: 5 },
			            { name: 'dunsparce', minLevel: 51, maxLevel: 53, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 24], 
			        	location: 'darkCave-4'
			        }
				},
			},
		}
	},
	'darkCave-4': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-4.png",
		song: "unionCave",
		worldEvent: {
			darkCaveA: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 0, y: 8},
				size: { w: 2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 49, maxLevel: 55, chance: 17 },
			            { name: 'ursaring', minLevel: 48, maxLevel: 55, chance: 17 },    
			            { name: 'wobbuffet', minLevel: 50, maxLevel: 52, chance: 14 },
			            { name: 'golbat', minLevel: 50, maxLevel: 54, chance: 14 },
			            { name: 'machoke', minLevel: 48, maxLevel: 53, chance: 12 },
			            { name: 'kadabra', minLevel: 49, maxLevel: 53, chance: 12 },
			            { name: 'dugtrio', minLevel: 48, maxLevel: 54, chance: 5 },
			            { name: 'xatu', minLevel: 47, maxLevel: 55, chance: 5 },
			            { name: 'dunsparce', minLevel: 51, maxLevel: 53, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 24], 
			        	location: 'darkCave-3'
			        }
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 23, y: 8},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-5'
				},
			},
		}
	},
	'darkCave-5': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-5.png",
		song: "unionCave",
		worldEvent: {
			darkCaveA: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 0, y: 8},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-4'
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 6.5, y: 6.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-6',
					sound: 'stairs'
				},
			},
		}
	},
	'darkCave-6': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-6.png",
		song: "unionCave",
		worldEvent: {
			darkCaveA: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
				position: { x: 6.5, y: 7.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-5',
					sound: 'stairs'
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 23, y: 2},
				size: { w: 2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'onix', minLevel: 50, maxLevel: 55, chance: 25 },
			            { name: 'marowak', minLevel: 49, maxLevel: 53, chance: 25 },    
			           	{ name: 'graveler', minLevel: 48, maxLevel: 54, chance: 13 },
			            { name: 'golbat', minLevel: 51, maxLevel: 55, chance: 13 },
			            { name: 'machoke', minLevel: 52, maxLevel: 55, chance: 10 },
			            { name: 'kadabra', minLevel: 53, maxLevel: 55, chance: 10 },
			            { name: 'rhydon', minLevel: 52, maxLevel: 55, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'darkCave-7'
			        }
				},
			},
			route46: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 4, y: 15},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route46-2'
				},
			},
		}
	},
	'darkCave-7': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-7.png",
		song: "unionCave",
		worldEvent: {
			darkCaveA: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
				position: { x: 0, y: 2},
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'onix', minLevel: 50, maxLevel: 55, chance: 25 },
			            { name: 'marowak', minLevel: 49, maxLevel: 53, chance: 25 },    
			           	{ name: 'graveler', minLevel: 48, maxLevel: 54, chance: 13 },
			            { name: 'golbat', minLevel: 51, maxLevel: 55, chance: 13 },
			            { name: 'machoke', minLevel: 52, maxLevel: 55, chance: 10 },
			            { name: 'kadabra', minLevel: 53, maxLevel: 55, chance: 10 },
			            { name: 'rhydon', minLevel: 52, maxLevel: 55, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'darkCave-6'
			        }
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'], 
				position: { x: 17.8, y: 0},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-8'
				},
			},
		}
	},
	'darkCave-8': {
		name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
		background: "assets/images/map/johto/cave/darkCave-8.png",
		song: "unionCave",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11.9, y: 2 },
				size: { w: 11.3, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
			            { name: 'onix', minLevel: 48, maxLevel: 52, chance: 25 },
			            { name: 'marowak', minLevel: 50, maxLevel: 54, chance: 25 },    
			           	{ name: 'graveler', minLevel: 50, maxLevel: 55, chance: 13 },
			            { name: 'golbat', minLevel: 51, maxLevel: 55, chance: 13 },
			            { name: 'machoke', minLevel: 52, maxLevel: 53, chance: 10 },
			            { name: 'kadabra', minLevel: 51, maxLevel: 54, chance: 10 },
			            { name: 'rhydon', minLevel: 52, maxLevel: 55, chance: 4 }
			        ],
				},
			},
			darkCaveB: { 
				name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
				position: { x: 17.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'darkCave-7'
				},
			},
			route46: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 4, y: 8 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route46-4'
				},
			},
		}
	},
	'route36-1': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route36-1.png",
		song: "route34",
		worldEvent: {
			violetCity: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 23, y: 2.8},
				size: { w: 2, h: 4.6 },
				event: {
					type: 'travelCity',
					location: 'violetCity-3'
				},
			},
			ruinsOfAlph: {
				name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
				position: { x: 17.8, y: 16 },
				size: { w: 3.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'ruinsOfAlph-1'
				},
			},	
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 16, y: 2 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route36-1',
					newLocation: 'route36-1bis',
				},
			},	
			route36: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 0, y: 2.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 11, maxLevel: 12, chance: 25 }, 
						{ name: 'nidoranm', minLevel: 11, maxLevel: 12, chance: 25 },
			            { name: 'spearow', minLevel: 12, maxLevel: 14, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 12 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 12 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route36-2'
			        }
				},
			},
		}
	},
	'route36-1bis': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route36-1bis.png",
		song: "route34",
		worldEvent: {
			violetCity: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 23, y: 2.8},
				size: { w: 2, h: 4.6 },
				event: {
					type: 'travelCity',
					location: 'violetCity-3'
				},
			},
			ruinsOfAlph: {
				name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
				position: { x: 17.8, y: 16 },
				size: { w: 3.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'ruinsOfAlph-1'
				},
			},		
			route36A: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 0, y: 2.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 11, maxLevel: 12, chance: 25 }, 
						{ name: 'nidoranm', minLevel: 11, maxLevel: 12, chance: 25 },
			            { name: 'spearow', minLevel: 12, maxLevel: 14, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 12 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 12 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route36-2'
			        }
				},
			},
			route36B: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 13.7, y: 0 },
				size: { w: 5.6, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'route36-5'
				},
			},
		}
	},
	'route36-2': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route36-2.png",
		song: "route34",
		worldEvent: {	
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 9},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'smallHouseRoute36'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 6, y: 4},
				size: { w: 7, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle12.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 5, maxLevel: 8, chance: 65 }, 
						{ name: 'wooper', minLevel: 11, maxLevel: 13, chance: 15 },
			            { name: 'goldeen', minLevel: 11, maxLevel: 13, chance: 15 },
			            { name: 'marill', minLevel: 11, maxLevel: 13, chance: 5 },
			        ],
				},
			},	
			route36A: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 23, y: 2.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 11, maxLevel: 12, chance: 25 }, 
						{ name: 'nidoranm', minLevel: 11, maxLevel: 12, chance: 25 },
			            { name: 'spearow', minLevel: 12, maxLevel: 14, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 12 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 12 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route36-1'
			        }
				},
			},
			route36B: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 0, y: 6.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 12, maxLevel: 15, chance: 20 }, 
						{ name: 'nidoranm', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'spearow', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 18 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 18 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route36-3'
			        }
				},
			},
		}
	},
	'route36-3': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route36-3.png",
		song: "route34",
		worldEvent: {	
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 3},
				size: { w: 8, h: 12},
				event: {
					type: 'routeBattle',
					title: ['Route 36', 'Ruta 36', '36号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'nidoranf', minLevel: 12, maxLevel: 15, chance: 30 }, 
			            { name: 'spearow', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'nidoranm', minLevel: 12, maxLevel: 15, chance: 15 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 10 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 5 }
			        ],
				},
			},
			route36A: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 22, y: 6.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 12, maxLevel: 15, chance: 20 }, 
						{ name: 'nidoranm', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'spearow', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 18 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 18 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route36-2'
			        }
				},
			},
			route36B: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 0, y: 2.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 12, maxLevel: 15, chance: 30 }, 
			            { name: 'spearow', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'nidoranm', minLevel: 12, maxLevel: 15, chance: 15 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 10 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route36-4'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 22, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route36HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route36-4': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route36-4.png",
		song: "route34",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 13, y: 14 },
				size: { w: 10, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 36', 'Ruta 36', '36号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'nidoranm', minLevel: 12, maxLevel: 15, chance: 30 },
			            { name: 'hoothoot', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 20 },      
			            { name: 'nidoranf', minLevel: 12, maxLevel: 15, chance: 15 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 10 },
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 5 }
			        ],
				},
			},
			route35: { 
				name: [`Route 35`, `Ruta 35`, `35号道路`],
				position: { x: 3.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'routeBattle',
					title: [`Route 35`, `Ruta 35`, `35号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidoranm', minLevel: 14, maxLevel: 16, chance: 20 },
						{ name: 'nidoranf', minLevel: 14, maxLevel: 16, chance: 20 },
			            { name: 'vulpix', minLevel: 13, maxLevel: 15, chance: 10 },      
			            { name: 'growlithe', minLevel: 13, maxLevel: 15, chance: 10 },
			            { name: 'yanma', minLevel: 15, maxLevel: 17, chance: 10 },      
			            { name: 'drowzee', minLevel: 15, maxLevel: 16, chance: 10 },
			            { name: 'hoothoot', minLevel: 14, maxLevel: 16, chance: 10 },
			            { name: 'eevee', minLevel: 12, maxLevel: 14, chance: 5 },
			            { name: 'stantler', minLevel: 12, maxLevel: 14, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 6], 
			        	location: 'route35-2'
			        }
				},
			},
			route36: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 22, y: 2.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidoranf', minLevel: 12, maxLevel: 15, chance: 30 }, 
			            { name: 'spearow', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'growlithe', minLevel: 12, maxLevel: 15, chance: 20 },
			            { name: 'nidoranm', minLevel: 12, maxLevel: 15, chance: 15 },
			            { name: 'vulpix', minLevel: 12, maxLevel: 15, chance: 10 },      
			            { name: 'stantler', minLevel: 12, maxLevel: 15, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route36-3'
			        }
				},
			},
			route37: { 
				name: [`Route 37`, `Ruta 37`, `37号道路`],
				position: { x: 9.7, y: 0},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'noctowl', minLevel: 14, maxLevel: 16, chance: 9 }, 
			            { name: 'hoothoot', minLevel: 12, maxLevel: 14, chance: 9 },    
						{ name: 'nidoranm', minLevel: 12, maxLevel: 14, chance: 9 },
			            { name: 'nidoranf', minLevel: 12, maxLevel: 14, chance: 9 },
			            { name: 'pidgey', minLevel: 11, maxLevel: 14, chance: 9 },
			            { name: 'pidgeotto', minLevel: 13, maxLevel: 16, chance: 9 },
			            { name: 'ledyba', minLevel: 11, maxLevel: 15, chance: 9 },      
			            { name: 'spinarak', minLevel: 11, maxLevel: 15, chance: 9 },
			            { name: 'growlithe', minLevel: 14, maxLevel: 16, chance: 5 },
			            { name: 'vulpix', minLevel: 13, maxLevel: 16, chance: 5 },
			            { name: 'stantler', minLevel: 14, maxLevel: 15, chance: 5 },
			            { name: 'murkrow', minLevel: 12, maxLevel: 14, chance: 5 },
			            { name: 'ledian', minLevel: 14, maxLevel: 17, chance: 4 },
			            { name: 'ariados', minLevel: 14, maxLevel: 17, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 4], 
			        	location: 'route37-1'
			        }
				},
			},
		}
	},
	'route36-5': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route36-5.png",
		song: "route34",
		worldEvent: {
			route36: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 13.7, y: 16 },
				size: { w: 5.6, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'route36-1bis'
				},
			},
			basket: { 
				name: [`Basket`, `Cesta`, `篮子`],
				position: { x: 16, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'basketRoute36',
					tw: false
				},
			},
		}
	},
	'ruinsOfAlph-1': {
		name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
		background: "assets/images/map/johto/route/ruinsOfAlph-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			route32: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 23, y: 3.9 },
				size: { w: 2, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route32-1'
				},
			},	
			route36: {
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 17.8, y: 0 },
				size: { w: 3.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route36-1'
				},
			},	
			ruinA: {
				name: [`Ruin`, `Ruina`, `遗迹`],
				position: { x: 6.5, y: 2.3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinA',
					tw: false
				},
			},	
			ruinB: {
				name: [`Ruin`, `Ruina`, `遗迹`],
				position: { x: 1.5, y: 11.3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinB',
					tw: false
				},
			},
			ruinC: {
				name: [`Ruin`, `Ruina`, `遗迹`],
				position: { x: 17.5, y: 10.3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinC',
					tw: false
				},
			},
			tree: {
				name: [``, ``, ``],
				position: { x: 0, y: 0 },
				size: { w: 2, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinTree',
					invisible: true
				},
			},
		}
	},
	'ruinsOfAlph-1bis': {
		name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
		background: "assets/images/map/johto/route/ruinsOfAlph-1bis.png",
		song: "ruinsOfAlph",
		worldEvent: {
			route32: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 23, y: 3.9 },
				size: { w: 2, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route32-1'
				},
			},	
			route36: {
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 17.8, y: 0 },
				size: { w: 3.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route36-1'
				},
			},	
			ruinA: {
				name: [`Ruin`, `Ruina`, `遗迹`],
				position: { x: 6.5, y: 2.3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinA',
					tw: false
				},
			},	
			ruinB: {
				name: [`Ruin`, `Ruina`, `遗迹`],
				position: { x: 1.5, y: 11.3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinB',
					tw: false
				},
			},
			ruinC: {
				name: [`Ruin`, `Ruina`, `遗迹`],
				position: { x: 17.5, y: 10.3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinC',
					tw: false
				},
			},
			ruinsOfAlph: {
				name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
				position: { x: 9.8, y: 16 },
				size: { w: 3.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'ruinsOfAlph-2'
				},
			},	
		}
	},
	'ruinsOfAlph-2': {
		name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
		background: "assets/images/map/johto/route/ruinsOfAlph-2.png",
		song: "ruinsOfAlph",
		worldEvent: {
			ruinsOfAlph: {
				name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
				position: { x: 9.8, y: 0 },
				size: { w: 3.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'ruinsOfAlph-1'
				},
			},	
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 6 },
				size: { w: 5, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'unown', minLevel: 11, maxLevel: 15, chance: 100 },
			        ],
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 15, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'ruinsOfAlphRuinHiddenItem',
					invisible: true
				},
			},
		}
	},
	'route32-1': {
		name: ['Route 32', 'Ruta 32', '32号道路'],
		background: "assets/images/map/johto/route/route32-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			violetCity: {
				name: ['Violet City', 'Ciudad Malva', '桔梗市'],
				position: { x: 10.7, y: 0},
				size: { w: 4.6, h: 2},
				event: {
					type: 'travelCity',
					location: 'violetCity-3'
				},
			},	
			ruinsOfAlph: {
				name: ['Ruins Of Alph', 'Ruinas Alfa', '阿露福遗迹'],
				position: { x: 0, y: 3.9 },
				size: { w: 2, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'ruinsOfAlph-1'
				},
			},	
			route32: { 
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 17.8, y: 16},
				size: { w: 5.5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
			            { name: 'bellsprout', minLevel: 5, maxLevel: 8, chance: 25 },
			            { name: 'hoppip', minLevel: 6, maxLevel: 8, chance: 25 },
						{ name: 'ekans', minLevel: 6, maxLevel: 8, chance: 14 },
			            { name: 'wooper', minLevel: 7, maxLevel: 9, chance: 11 },
			            { name: 'mareep', minLevel: 5, maxLevel: 6, chance: 11 },
			            { name: 'misdreavus', minLevel: 4, maxLevel: 8, chance: 8 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route32-2'
			        }
				},
			},
		}
	},
	'route32-2': {
		name: ['Route 32', 'Ruta 32', '32号道路'],
		background: "assets/images/map/johto/route/route32-2.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 5},
				size: { w: 9, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'misdreavus', minLevel: 4, maxLevel: 8, chance: 35 },
			            { name: 'hoppip', minLevel: 5, maxLevel: 6, chance: 25 },
			            { name: 'bellsprout', minLevel: 5, maxLevel: 6, chance: 15 },
			            { name: 'wooper', minLevel: 6, maxLevel: 8, chance: 10 },
			            { name: 'mareep', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 5 }
			        ],
				},
			},
			route32A: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 17.8, y: 0},
				size: { w: 5.5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'bellsprout', minLevel: 5, maxLevel: 8, chance: 25 },
			            { name: 'hoppip', minLevel: 6, maxLevel: 8, chance: 25 },
						{ name: 'ekans', minLevel: 6, maxLevel: 8, chance: 14 },
			            { name: 'wooper', minLevel: 7, maxLevel: 9, chance: 10 },
			            { name: 'mareep', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'misdreavus', minLevel: 4, maxLevel: 8, chance: 8 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 8 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route32-1'
			        }
				},
			},
			route32B: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 3.7, y: 16 },
				size: { w: 5.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route32-3'
				},
			},

		}
	},
	'route32-3': {
		name: ['Route 32', 'Ruta 32', '32号道路'],
		background: "assets/images/map/johto/route/route32-3.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 5 },
				size: { w: 5, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
					 	{ name: 'hoothoot', minLevel: 5, maxLevel: 6, chance: 25 },
			            { name: 'spearow', minLevel: 8, maxLevel: 10, chance: 25 },
			            { name: 'zubat', minLevel: 5, maxLevel: 6, chance: 25 },
			            { name: 'ekans', minLevel: 6, maxLevel: 8, chance: 10 },      
			            { name: 'mareep', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 5 }
			        ],
				},
			},
			route32A: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 3.7, y: 0 },
				size: { w: 5.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route32-2'
				},
			},
			route32B: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 0, y: 11.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route32-4'
				},
			},
			route32C: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 12.8, y: 15 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route32-5'
				},
			},
		}
	},
	'route32-4': {
		name: ['Route 32', 'Ruta 32', '32号道路'],
		background: "assets/images/map/johto/route/route32-4.png",
		song: "route30",
		worldEvent: {
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 20, y: 4},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute32',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 9, y: 5},
				size: { w: 4, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'wooper', minLevel: 5, maxLevel: 6, chance: 25 },
			            { name: 'rattata', minLevel: 5, maxLevel: 6, chance: 19 },
			            { name: 'hoppip', minLevel: 4, maxLevel: 6, chance: 15 },
			            { name: 'ekans', minLevel: 4, maxLevel: 6, chance: 15 },
			            { name: 'misdreavus', minLevel: 6, maxLevel: 8, chance: 15 },      
			            { name: 'mareep', minLevel: 5, maxLevel: 6, chance: 7 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 4 }
			        ],
				},
			},
			route32: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 23, y: 11.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route32-3'
				},
			},
		}
	},
	'route32-5': {
		name: ['Route 36', 'Ruta 36', '36号道路'],
		background: "assets/images/map/johto/route/route32-5.png",
		song: "route30",
		worldEvent: {
			route32A: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 12.8, y: 0},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route32-3'
				},
			},
			route32B: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 4.8, y: 16},
				size: { w: 5.5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
			            { name: 'mareep', minLevel: 6, maxLevel: 8, chance: 16 },
						{ name: 'bellsprout', minLevel: 5, maxLevel: 8, chance: 15 },
			            { name: 'hoppip', minLevel: 6, maxLevel: 8, chance: 15 },
						{ name: 'zubat', minLevel: 6, maxLevel: 8, chance: 15 },
			            { name: 'spearow', minLevel: 7, maxLevel: 9, chance: 15 },
			            { name: 'ekans', minLevel: 5, maxLevel: 8, chance: 10 },
			            { name: 'misdreavus', minLevel: 4, maxLevel: 8, chance: 7 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 7 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route32-6'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 19, y: 14 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route32HiddenItem',
					invisible: true
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 10, y: 10 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute32',
					tw: false
				},
			},
		}
	},
	'route32-6': {
		name: ['Route 32', 'Ruta 32', '32号道路'],
		background: "assets/images/map/johto/route/route32-6.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 18, y: 12},
				size: { w: 5, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'ekans', minLevel: 4, maxLevel: 7, chance: 25 },
			            { name: 'zubat', minLevel: 4, maxLevel: 7, chance: 21 },
			            { name: 'mareep', minLevel: 4, maxLevel: 5, chance: 20 },
			            { name: 'spearow', minLevel: 4, maxLevel: 6, chance: 20 },
			            { name: 'bellsprout', minLevel: 4, maxLevel: 5, chance: 9 },      
			            { name: 'gastly', minLevel: 6, maxLevel: 8, chance: 5 }
			        ],
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 15, y: 2.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route32-6',
					inRoute: true
				},
			},
			route32: {
				name: [`Route 32`, `Ruta 32`, `32号道路`],
				position: { x: 4.8, y: 0 },
				size: { w: 5.5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 32', 'Ruta 32', '32号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
			            { name: 'mareep', minLevel: 6, maxLevel: 8, chance: 17 },
						{ name: 'bellsprout', minLevel: 5, maxLevel: 8, chance: 15 },
			            { name: 'hoppip', minLevel: 6, maxLevel: 8, chance: 15 },
						{ name: 'zubat', minLevel: 6, maxLevel: 8, chance: 15 },
			            { name: 'spearow', minLevel: 7, maxLevel: 9, chance: 15 },
			            { name: 'ekans', minLevel: 5, maxLevel: 8, chance: 10 },
			            { name: 'misdreavus', minLevel: 4, maxLevel: 8, chance: 7 },
			            { name: 'gastly', minLevel: 7, maxLevel: 8, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route32-5'
			        }
				},
			},
			unionCave: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`],
				position: { x: 7, y: 9},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-1'
				},
			},
		}
	},
	'unionCave-1': {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		background: "assets/images/map/johto/cave/unionCave-1.png",
		song: "unionCave",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 3},
				size: { w: 11, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
			           	{ name: 'sandshrew', minLevel: 8, maxLevel: 9, chance: 21 },
			            { name: 'rattata', minLevel: 7, maxLevel: 8, chance: 17 },
			            { name: 'geodude', minLevel: 7, maxLevel: 8, chance: 17 },
			            { name: 'zubat', minLevel: 7, maxLevel: 9, chance: 16 },    
			            { name: 'onix', minLevel: 8, maxLevel: 10, chance: 14 },
			            { name: 'wooper', minLevel: 6, maxLevel: 9, chance: 10 },
			            { name: 'machop', minLevel: 7, maxLevel: 8, chance: 5 }
			        ],
				},
			},
			route32: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`],
				position: { x: 18, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route32-6'
				},
			},
			unionCave: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 0, y: 6.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: [`Union Cave`, `Cueva Unión`, `连接洞窟`], 
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'sandshrew', minLevel: 9, maxLevel: 10, chance: 21 },
			            { name: 'rattata', minLevel: 8, maxLevel: 11, chance: 17 },
			            { name: 'geodude', minLevel: 8, maxLevel: 10, chance: 17 },
			            { name: 'zubat', minLevel: 10, maxLevel: 12, chance: 16 },    
			            { name: 'onix', minLevel: 8, maxLevel: 12, chance: 14 },
			            { name: 'wooper', minLevel: 8, maxLevel: 10, chance: 10 },
			            { name: 'machop', minLevel: 7, maxLevel: 10, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'unionCave-2'
			        }
				},
			},
		}
	},
	'unionCave-2': {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		background: "assets/images/map/johto/cave/unionCave-2.png",
		song: "unionCave",
		worldEvent: {
			unionCaveA: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 22, y: 6.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: [`Union Cave`, `Cueva Unión`, `连接洞窟`], 
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'sandshrew', minLevel: 9, maxLevel: 10, chance: 21 },
			            { name: 'rattata', minLevel: 8, maxLevel: 11, chance: 17 },
			            { name: 'geodude', minLevel: 8, maxLevel: 10, chance: 17 },
			            { name: 'zubat', minLevel: 10, maxLevel: 12, chance: 16 },    
			            { name: 'onix', minLevel: 8, maxLevel: 12, chance: 14 },
			            { name: 'wooper', minLevel: 8, maxLevel: 10, chance: 10 },
			            { name: 'machop', minLevel: 7, maxLevel: 10, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'unionCave-1'
			        }
				},
			},
			unionCaveB: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 12.5, y: 14.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-3'
				},
			},
			route33: {
				name: [`Route 33`, `Ruta 33`, `33号道路`],
				position: { x: 3, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route33-1'
				},
			},
		}
	},
	'unionCave-3': {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		background: "assets/images/map/johto/cave/unionCave-3.png",
		song: "unionCave",
		worldEvent: {
			unionCaveA: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`],
				position: { x: 12.5, y: 13.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-2'
				},
			},
			unionCaveB: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 6.5, y: 0},
				size: { w: 9, h: 3.5 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle20.png',
					pokemon: [ 
						{ name: 'seel', minLevel: 27, maxLevel: 31, chance: 30 },
						{ name: 'chinchou', minLevel: 25, maxLevel: 30, chance: 30 },
						{ name: 'marill', minLevel: 26, maxLevel: 33, chance: 20 },
						{ name: 'quagsire', minLevel: 26, maxLevel: 33, chance: 7 },
						{ name: 'seadra', minLevel: 26, maxLevel: 33, chance: 5 },
						{ name: 'golduck', minLevel: 29, maxLevel: 32, chance: 5 },
						{ name: 'dratini', minLevel: 25, maxLevel: 30, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'unionCave-4'
			        }
				},
			},
		}
	},
	'unionCave-4': {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		background: "assets/images/map/johto/cave/unionCave-4.png",
		song: "unionCave",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 18, y: 4},
				size: { w: 3, h: 7},
				event: {
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [  
			           	{ name: 'onix', minLevel: 22, maxLevel: 24, chance: 19 },
			            { name: 'houndour', minLevel: 22, maxLevel: 24, chance: 19 },
			            { name: 'slugma', minLevel: 23, maxLevel: 25, chance: 19 },
			            { name: 'sandslash', minLevel: 26, maxLevel: 30, chance: 19 },    
			            { name: 'magmar', minLevel: 26, maxLevel: 30, chance: 19 },  
			            { name: 'charmander', minLevel: 16, maxLevel: 25, chance: 5 }
			        ],
				},
			},
			unionCaveA: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 6.5, y: 14.5 },
				size: { w: 9, h: 3.5 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
					background: './assets/images/background/battle20.png',
					pokemon: [ 
						{ name: 'seel', minLevel: 27, maxLevel: 31, chance: 30 },
						{ name: 'chinchou', minLevel: 25, maxLevel: 30, chance: 30 },
						{ name: 'marill', minLevel: 26, maxLevel: 33, chance: 20 },
						{ name: 'quagsire', minLevel: 26, maxLevel: 33, chance: 7 },
						{ name: 'seadra', minLevel: 26, maxLevel: 33, chance: 5 },
						{ name: 'golduck', minLevel: 29, maxLevel: 32, chance: 5 },
						{ name: 'dratini', minLevel: 25, maxLevel: 30, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'unionCave-3'
			        }
				},
			},
			unionCaveB: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 9.8, y: 0} ,
				size: { w: 5.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-5'
				},
			},
		}
	},
	'unionCave-5': {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		background: "assets/images/map/johto/cave/unionCave-5.png",
		song: "unionCave",
		worldEvent: {
			unionCave: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 9.8, y: 15 },
				size: { w: 5.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-4'
				},
			},
			entei: {
				name: ['Entei', 'Entei', '炎帝'], 
				position: { x: 11.5, y: 4 },
				size: { w: 2, h: 2 },
				event: {
					image: './assets/images/pokemon/sprite/entei.png',
					type: 'dialogue',
					npc: 'entei'
				},
			}
		}
	},
	'unionCave-5bis': {
		name: ['Union Cave', 'Cueva Unión', '连接洞窟'],
		background: "assets/images/map/johto/cave/unionCave-5.png",
		song: "unionCave",
		worldEvent: {
			unionCave: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`], 
				position: { x: 9.8, y: 15 },
				size: { w: 5.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-4'
				},
			},
		}
	},
	'route33-1': {
		name: ['Route 33', 'Ruta 33', '33号道路'],
		background: "assets/images/map/johto/route/route33-1.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 12},
				size: { w: 10, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 33', 'Ruta 33', '33号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			           	{ name: 'rattata', minLevel: 9, maxLevel: 13, chance: 30 },
			            { name: 'hoppip', minLevel: 8, maxLevel: 12, chance: 25 },
			            { name: 'spearow', minLevel: 8, maxLevel: 14, chance: 25 },
			            { name: 'zubat', minLevel: 9, maxLevel: 14, chance: 7 },
			            { name: 'ekans', minLevel: 9, maxLevel: 13, chance: 7 },      
			            { name: 'cubone', minLevel: 10, maxLevel: 14, chance: 6 }
			        ],
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 18, y: 15 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route33-1',
					newLocation: 'route33-1bis',
				},
			},	
			azaleaTown: {
				name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'travelCity',
					location: 'azaleaTown-1'
				},
			},
			unionCave: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`],
				position: { x: 15, y: 2},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-2'
				},
			},
		}
	},
	'route33-1bis': {
		name: ['Route 33', 'Ruta 33', '33号道路'],
		background: "assets/images/map/johto/route/route33-1bis.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 12},
				size: { w: 10, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 33', 'Ruta 33', '33号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			           	{ name: 'rattata', minLevel: 9, maxLevel: 13, chance: 30 },
			            { name: 'hoppip', minLevel: 8, maxLevel: 12, chance: 25 },
			            { name: 'spearow', minLevel: 8, maxLevel: 14, chance: 25 },
			            { name: 'zubat', minLevel: 9, maxLevel: 14, chance: 7 },
			            { name: 'ekans', minLevel: 9, maxLevel: 13, chance: 7 },      
			            { name: 'cubone', minLevel: 10, maxLevel: 14, chance: 6 }
			        ],
				},
			},
			route33: {
				name: ['Route 33', 'Ruta 33', '33号道路'],
				position: { x: 15.7, y: 16},
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route33-2'
				},
			},
			azaleaTown: {
				name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'travelCity',
					location: 'azaleaTown-1'
				},
			},
			unionCave: {
				name: [`Union Cave`, `Cueva Unión`, `连接洞穴`],
				position: { x: 15, y: 2},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'unionCave-2'
				},
			},
		}
	},
	'route33-2': {
		name: ['Route 33', 'Ruta 33', '33号道路'],
		background: "assets/images/map/johto/route/route33-2.png",
		song: "route30",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 4},
				size: { w: 4, h: 9},
				event: {
					type: 'routeBattle',
					title: ['Route 33', 'Ruta 33', '33号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			           	{ name: 'hypno', minLevel: 45, maxLevel: 48, chance: 20 },
			            { name: 'rapidash', minLevel: 49, maxLevel: 54, chance: 20 },
			            { name: 'persian', minLevel: 46, maxLevel: 52, chance: 20 },
			           	{ name: 'butterfree', minLevel: 47, maxLevel: 51, chance: 10 },
			           	{ name: 'jumpluff', minLevel: 45, maxLevel: 50, chance: 10 },
			            { name: 'tangela', minLevel: 46, maxLevel: 53, chance: 5 },
			            { name: 'miltank', minLevel: 47, maxLevel: 52, chance: 5 },  
			            { name: 'sunflora', minLevel: 48, maxLevel: 51, chance: 5 },      
			            { name: 'bulbasaur', minLevel: 45, maxLevel: 50, chance: 5 }
			        ],
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 4, y: 14},
				size: { w: 19, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle12.png',
					pokemon: [ 
						{ name: 'seaking', minLevel: 48, maxLevel: 54, chance: 20 },
			           	{ name: 'azumarill', minLevel: 46, maxLevel: 52, chance: 20 },
			            { name: 'golduck', minLevel: 45, maxLevel: 53, chance: 20 },
			            { name: 'seadra', minLevel: 48, maxLevel: 56, chance: 20 },
			            { name: 'poliwhirl', minLevel: 49, maxLevel: 55, chance: 5 },
			            { name: 'quagsire', minLevel: 45, maxLevel: 54, chance: 5 },  
			            { name: 'corsola', minLevel: 48, maxLevel: 51, chance: 5 },      
			            { name: 'squirtle', minLevel: 45, maxLevel: 53, chance: 5 }
			        ],
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 10, y: 8},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselARoute33',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 20, y: 10},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute33',
					tw: false
				},
			},
			route33: {
				name: ['Route 33', 'Ruta 33', '33号道路'],
				position: { x: 15.7, y: 0},
				size: { w: 5.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route33-1bis'
				},
			},
		}
	},
	'ilexForest-1': {
		name: ['Ilex Forest', 'Encinar', '桐树林'],
		background: "assets/images/map/johto/route/ilexForest-1.png",
		song: "viridianForest",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 3},
				size: { w: 4, h: 12},
				event: {
					type: 'routeBattle',
					title: ['Ilex Forest', 'Encinar', '桐树林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			           	{ name: 'caterpie', minLevel: 11, maxLevel: 13, chance: 18 },
			            { name: 'metapod', minLevel: 10, maxLevel: 14, chance: 13 },
			           	{ name: 'weedle', minLevel: 11, maxLevel: 13, chance: 12 }, 
			            { name: 'venonat', minLevel: 9, maxLevel: 15, chance: 10 },     
			            { name: 'paras', minLevel: 9, maxLevel: 15, chance: 10 },      
			            { name: 'oddish', minLevel: 9, maxLevel: 15, chance: 10 },
			            { name: 'butterfree', minLevel: 13, maxLevel: 16, chance: 8 },    
			            { name: 'heracross', minLevel: 12, maxLevel: 14, chance: 6 },
			            { name: 'kakuna', minLevel: 10, maxLevel: 14, chance: 7 },
			            { name: 'zubat', minLevel: 8, maxLevel: 13, chance: 4 },
			            { name: 'beedrill', minLevel: 13, maxLevel: 16, chance: 2 },
			        ],  
				},
			},
			ilexForest: {
				name: [`Ilex Forest`, `Encinar`, `桐树林`],
				position: { x: 13.7, y: 0},
				size: { w: 2.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: [`Ilex Forest`, `Encinar`, `桐树林`],  
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'caterpie', minLevel: 11, maxLevel: 13, chance: 18 },
			           	{ name: 'weedle', minLevel: 11, maxLevel: 13, chance: 18 },
			            { name: 'metapod', minLevel: 10, maxLevel: 14, chance: 13 },
			            { name: 'kakuna', minLevel: 10, maxLevel: 14, chance: 13 },
			            { name: 'butterfree', minLevel: 13, maxLevel: 16, chance: 8 },    
			            { name: 'beedrill', minLevel: 13, maxLevel: 16, chance: 8 },
			            { name: 'venonat', minLevel: 9, maxLevel: 15, chance: 5 },     
			            { name: 'paras', minLevel: 9, maxLevel: 15, chance: 5 },      
			            { name: 'oddish', minLevel: 9, maxLevel: 15, chance: 5 },
			            { name: 'zubat', minLevel: 8, maxLevel: 13, chance: 4 },
			            { name: 'heracross', minLevel: 12, maxLevel: 14, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'ilexForest-2'
			        }
				},
			},
			azaleaTown: {
				name: [`Azalea Town`, `Pueblo Azalea`, `桧皮镇`],
				position: { x: 7.5, y: 16.5 },
				size: { w: 2.8, h: 1.5 },
				event: {
					type: 'travelCity',
					location: 'azaleaTown-2'
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 11, y: 8},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signIlexForest',
					tw: false
				},
			},
			tree: {
				name: [`Tree`, `Árbol`, `树`],
				position: { x: 20, y: 4.5},
				size: { w: 3, h: 3.5},
				event: {
					type: 'dialogue',
					npc: 'treeIlexForest',
					tw: false
				},
			},
		}
	},
	'ilexForest-2': {
		name: ['Ilex Forest', 'Encinar', '桐树林'],
		background: "assets/images/map/johto/route/ilexForest-2.png",
		song: "viridianForest",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 20, y: 2},
				size: { w: 4, h: 14},
				event: {
					type: 'routeBattle',
					title: ['Ilex Forest', 'Encinar', '桐树林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			           	{ name: 'weedle', minLevel: 11, maxLevel: 13, chance: 18 },
			            { name: 'kakuna', minLevel: 10, maxLevel: 14, chance: 13 },
			           	{ name: 'caterpie', minLevel: 11, maxLevel: 13, chance: 12 }, 
			            { name: 'venonat', minLevel: 9, maxLevel: 15, chance: 10 },     
			            { name: 'paras', minLevel: 9, maxLevel: 15, chance: 10 },      
			            { name: 'oddish', minLevel: 9, maxLevel: 15, chance: 10 },
			            { name: 'beedrill', minLevel: 13, maxLevel: 16, chance: 8 },    
			            { name: 'heracross', minLevel: 12, maxLevel: 14, chance: 6 },
			            { name: 'metapod', minLevel: 10, maxLevel: 14, chance: 7 },
			            { name: 'zubat', minLevel: 8, maxLevel: 13, chance: 4 },
			            { name: 'butterfree', minLevel: 13, maxLevel: 16, chance: 2 },
			        ],
				},
			},
			ilexForest: {
				name: [`Ilex Forest`, `Encinar`,
				`桐树林`], //RDP
				position: { x: 13.7, y: 16},
				size: { w: 2.6, h: 2 },
				event: {
					type: 'routeBattle',
					title: [`Ilex Forest`, `Encinar`, `桐树林`],  
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'caterpie', minLevel: 11, maxLevel: 13, chance: 18 },
			           	{ name: 'weedle', minLevel: 11, maxLevel: 13, chance: 18 },
			            { name: 'metapod', minLevel: 10, maxLevel: 14, chance: 13 },
			            { name: 'kakuna', minLevel: 10, maxLevel: 14, chance: 13 },
			            { name: 'butterfree', minLevel: 13, maxLevel: 16, chance: 8 },    
			            { name: 'beedrill', minLevel: 13, maxLevel: 16, chance: 8 },
			            { name: 'venonat', minLevel: 9, maxLevel: 15, chance: 5 },     
			            { name: 'paras', minLevel: 9, maxLevel: 15, chance: 5 },      
			            { name: 'oddish', minLevel: 9, maxLevel: 15, chance: 5 },
			            { name: 'zubat', minLevel: 8, maxLevel: 13, chance: 4 },
			            { name: 'heracross', minLevel: 12, maxLevel: 14, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'ilexForest-1'
			        }
				},
			},
			route34: {
				name: ['Route 34', 'Ruta 34', '34号道路'],
				position: { x: 3, y: 0},
				size: { w: 4, h: 4 },
				event: {
					type: 'travelRoute',
					location: 'route34-1'
				},
			},
		}
	},
	'route34-1': {
		name: ['Route 34', 'Ruta 34', '34号道路'],
		background: "assets/images/map/johto/route/route34-1.png",
		song: "route34",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 15, y: 10},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute34',
					tw: false
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 8},
				size: { w: 5, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 34', 'Ruta 34', '34号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			           	{ name: 'snubbull', minLevel: 9, maxLevel: 12, chance: 30 },
			            { name: 'drowzee', minLevel: 10, maxLevel: 12, chance: 30 },
			            { name: 'rattata', minLevel: 11, maxLevel: 13, chance: 16 },      
			            { name: 'jigglypuff', minLevel: 11, maxLevel: 14, chance: 10 },
			            { name: 'voltorb', minLevel: 8, maxLevel: 12, chance: 9 },
			            { name: 'abra', minLevel: 9, maxLevel: 10, chance: 3 },
			            { name: 'natu', minLevel: 9, maxLevel: 10, chance: 2 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 9, y: 5},
				size: { w: 6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 34', 'Ruta 34', '34号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			           	{ name: 'drowzee', minLevel: 10, maxLevel: 12, chance: 30 },
			            { name: 'snubbull', minLevel: 9, maxLevel: 12, chance: 26 },
			            { name: 'pidgey', minLevel: 11, maxLevel: 12, chance: 20 },      
			            { name: 'ledyba', minLevel: 11, maxLevel: 12, chance: 10 },
			            { name: 'voltorb', minLevel: 8, maxLevel: 12, chance: 8 },
			            { name: 'natu', minLevel: 9, maxLevel: 10, chance: 4 },
			            { name: 'abra', minLevel: 9, maxLevel: 10, chance: 2 },
			        ],
				},
			},
			wildC: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 22, y: 2},
				size: { w: 2, h: 14},
				event: {
					type: 'routeBattle',
					title: ['Route 34', 'Ruta 34', '34号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'snubbull', minLevel: 11, maxLevel: 12, chance: 30 },
			           	{ name: 'drowzee', minLevel: 10, maxLevel: 12, chance: 26 },
			            { name: 'spearow', minLevel: 11, maxLevel: 12, chance: 20 },      
			            { name: 'spinarak', minLevel: 11, maxLevel: 12, chance: 10 },
			            { name: 'voltorb', minLevel: 8, maxLevel: 12, chance: 5 },
			            { name: 'abra', minLevel: 9, maxLevel: 10, chance: 5 },
			            { name: 'natu', minLevel: 9, maxLevel: 10, chance: 4 },
			        ],
				},
			},
			ilexForest: {
				name: [`Ilex Forest`, `Encinar`, `桐树林`], 
				position: { x: 3.7, y: 16 },
				size: { w: 2.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ilexForest-2'
				},
			},
			route34A: {
				name: [`Route 34`, `Ruta 34`, `34号道路`], 
				position: { x: 3.8, y: 0},
				size: { w: 5.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route34-2'
				},
			},
			route34B: {
				name: [`Route 34`, `Ruta 34`, `34号道路`], 
				position: { x: 18.7, y: 0},
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route34-2'
				},
			},
		}
	},
	'route34-2': {
		name: ['Route 34', 'Ruta 34', '34号道路'],
		background: "assets/images/map/johto/route/route34-2.png",
		song: "route34",
		worldEvent: {
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 20, y: 6},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute34',
					tw: false
				},
			},
			pokemonDaycare: {
				name: ['Pokémon Daycare', 'Guarderia Pokémon', '宝可梦培育屋'],
				position: { x: 16, y: 3.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'pokemonDayCare'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 11},
				size: { w: 8, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 34', 'Ruta 34', '34号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			           	{ name: 'drowzee', minLevel: 10, maxLevel: 12, chance: 30 },
			            { name: 'snubbull', minLevel: 11, maxLevel: 12, chance: 30 },
			            { name: 'spinarak', minLevel: 11, maxLevel: 12, chance: 20 },      
			            { name: 'ledyba', minLevel: 11, maxLevel: 12, chance: 10 },
			            { name: 'abra', minLevel: 9, maxLevel: 10, chance: 5 },
			            { name: 'natu', minLevel: 9, maxLevel: 10, chance: 5 },
			        ],
				},
			},
			route34A: {
				name: [`Route 34`, `Ruta 34`, `34号道路`], 
				position: { x: 3.8, y: 16 },
				size: { w: 5.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route34-1'
				},
			},
			route34B: {
				name: [`Route 34`, `Ruta 34`, `34号道路`], 
				position: { x: 18.7, y: 16 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route34-1'
				},
			},
			goldenrodCity: { 
				name: [`Goldenrod City`, `Ciudad Trigal`, `满金市`],
				position: { x: 4.8, y: 0},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-1'
				},
			},
		}
	},
	'route35-1': {
		name: ['Route 35', 'Ruta 35', '35号道路'],
		background: "assets/images/map/johto/route/route35-1.png",
		song: "route34",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 2},
				size: { w: 13, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 35', 'Ruta 35', '35号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			            { name: 'drowzee', minLevel: 14, maxLevel: 16, chance: 30 },
			            { name: 'pidgey', minLevel: 14, maxLevel: 18, chance: 20 },      
			            { name: 'hoothoot', minLevel: 14, maxLevel: 18, chance: 16 },
			           	{ name: 'abra', minLevel: 14, maxLevel: 18, chance: 15 },
			           	{ name: 'natu', minLevel: 14, maxLevel: 18, chance: 15 },
			            { name: 'eevee', minLevel: 13, maxLevel: 15, chance: 4 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 14},
				size: { w: 10, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 35', 'Ruta 35', '35号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'yanma', minLevel: 14, maxLevel: 18, chance: 40 },
			            { name: 'drowzee', minLevel: 14, maxLevel: 16, chance: 20 },      
			            { name: 'pidgey', minLevel: 14, maxLevel: 18, chance: 16 },
			            { name: 'abra', minLevel: 14, maxLevel: 18, chance: 10 },
			            { name: 'natu', minLevel: 14, maxLevel: 18, chance: 10 },
			            { name: 'eevee', minLevel: 13, maxLevel: 15, chance: 4 },
			        ],
				},
			},
			route35: { 
				name: [`Route 35`, `Ruta 35`, `35号道路`],
				position: { x: 3.7, y: 0 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route35-2'
				},
			},
			goldenrodCity: { 
				name: [`Goldenrod City`, `Ciudad Trigal`, `满金市`],
				position: { x: 4.7, y: 16 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelCity',
					location: 'goldenrodCity-4'
				},
			},
		}
	},
	'route35-2': {
		name: ['Route 35', 'Ruta 35', '35号道路'],
		background: "assets/images/map/johto/route/route35-2.png",
		song: "route34",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 14, y: 4},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute35',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 20, y: 4},
				size: { w: 3, h: 9},
				event: {
					type: 'routeBattle',
					title: ['Route 35', 'Ruta 35', '35号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'nidoranf', minLevel: 14, maxLevel: 17, chance: 30 },
			            { name: 'nidoranm', minLevel: 14, maxLevel: 17, chance: 30 },
			            { name: 'yanma', minLevel: 14, maxLevel: 16, chance: 20 },      
			            { name: 'drowzee', minLevel: 15, maxLevel: 16, chance: 17 },
			            { name: 'eevee', minLevel: 12, maxLevel: 15, chance: 3 },
			        ],
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 11, y: 8},
				size: { w: 8, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle16.png',
					pokemon: [ 
						{ name: 'goldeen', minLevel: 13, maxLevel: 16, chance: 30 }, 
						{ name: 'krabby', minLevel: 13, maxLevel: 16, chance: 30 },
			            { name: 'poliwag', minLevel: 13, maxLevel: 16, chance: 30 },
			            { name: 'horsea', minLevel: 13, maxLevel: 16, chance: 10 },
			        ],
				},
			},	
			route35: { 
				name: [`Route 35`, `Ruta 35`, `35号道路`],
				position: { x: 3.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route35-1'
				},
			},
			route36: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 3.7, y: 0 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidoranm', minLevel: 14, maxLevel: 16, chance: 20 },
						{ name: 'nidoranf', minLevel: 14, maxLevel: 16, chance: 20 },
			            { name: 'vulpix', minLevel: 13, maxLevel: 15, chance: 10 },      
			            { name: 'growlithe', minLevel: 13, maxLevel: 15, chance: 10 },
			            { name: 'yanma', minLevel: 15, maxLevel: 17, chance: 10 },      
			            { name: 'drowzee', minLevel: 15, maxLevel: 16, chance: 10 },
			            { name: 'hoothoot', minLevel: 14, maxLevel: 16, chance: 10 },
			            { name: 'eevee', minLevel: 12, maxLevel: 14, chance: 5 },
			            { name: 'stantler', minLevel: 12, maxLevel: 14, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 6], 
			        	location: 'route36-4'
			        }
				},
			},
			nationalPark: { 
				name: ['National Park', 'Parque Nacional', '自然公园'],
				position: { x: 0, y: 7.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'nationalPark'
				},
			},	
		}
	},
	'nationalPark': {
		name: ['National Park', 'Parque Nacional', '自然公园'],
		background: "assets/images/map/johto/route/nationalPark.png",
		song: "nationalPark",
		worldEvent: {
			signboardA: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 7, y: 1},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardANationalPark',
					tw: false
				},
			},	
			signboardB: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 16, y: 1},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardBNationalPark',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 3, y: 3},
				size: { w: 18, h: 12},
				event: {
					type: 'routeBattle',
					title: ['National Park', 'Parque Nacional', '自然公园'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			           	{ name: 'beedrill', minLevel: 12, maxLevel: 15, chance: 10 },   
			           	{ name: 'butterfree', minLevel: 12, maxLevel: 15, chance: 10 },   
			            { name: 'sunkern', minLevel: 12, maxLevel: 13, chance: 10 },   
			            { name: 'pidgey', minLevel: 10, maxLevel: 15, chance: 6 }, 
						{ name: 'hoothoot', minLevel: 10, maxLevel: 15, chance: 6 }, 
						{ name: 'caterpie', minLevel: 7, maxLevel: 18, chance: 6 }, 
						{ name: 'weedle', minLevel: 7, maxLevel: 18, chance: 6 }, 
						{ name: 'kakuna', minLevel: 9, maxLevel: 18, chance: 6 }, 
						{ name: 'metapod', minLevel: 9, maxLevel: 18, chance: 6 }, 
			            { name: 'paras', minLevel: 10, maxLevel: 17, chance: 4 }, 
			            { name: 'venonat', minLevel: 10, maxLevel: 16, chance: 4 },
			            { name: 'pichu', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'cleffa', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'elekid', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'magby', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'igglybuff', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'smoochum', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'eevee', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'togepi', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'tyrogue', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'pinsir', minLevel: 13, maxLevel: 14, chance: 2 },
			            { name: 'scyther', minLevel: 13, maxLevel: 14, chance: 2 },
			        ],
				},
			},
			route35: { 
				name: [`Route 35`, `Ruta 35`, `35号道路`],
				position: { x: 23, y: 7.8},
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route35-2'
				},
			},
		}
	},
	'route37-1': {
		name: ['Route 37', 'Ruta 37', '37号道路'],
		background: "assets/images/map/johto/route/route37-1.png",
		song: "route34",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 17, y: 3},
				size: { w: 6, h: 12},
				event: {
					type: 'routeBattle',
					title: ['Route 37', 'Ruta 37', '37号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'pidgey', minLevel: 14, maxLevel: 18, chance: 15 },
			            { name: 'pidgeotto', minLevel: 15, maxLevel: 19, chance: 15 },
			            { name: 'ledyba', minLevel: 16, maxLevel: 20, chance: 11 },      
			            { name: 'spinarak', minLevel: 16, maxLevel: 20, chance: 11 },
			            { name: 'growlithe', minLevel: 14, maxLevel: 17, chance: 11 },
			            { name: 'vulpix', minLevel: 14, maxLevel: 17, chance: 11 },
			            { name: 'stantler', minLevel: 15, maxLevel: 18, chance: 10 },
			            { name: 'ledian', minLevel: 17, maxLevel: 21, chance: 6 },
			            { name: 'ariados', minLevel: 17, maxLevel: 21, chance: 6 },
			            { name: 'murkrow', minLevel: 16, maxLevel: 18, chance: 4 },
			        ],
				},
			},
			route36: { 
				name: [`Route 36`, `Ruta 36`, `36号道路`],
				position: { x: 9.7, y: 15},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: [`Route 36`, `Ruta 36`, `36号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'noctowl', minLevel: 14, maxLevel: 16, chance: 9 }, 
			            { name: 'hoothoot', minLevel: 12, maxLevel: 14, chance: 9 },    
						{ name: 'nidoranm', minLevel: 12, maxLevel: 14, chance: 9 },
			            { name: 'nidoranf', minLevel: 12, maxLevel: 14, chance: 9 },
			            { name: 'pidgey', minLevel: 11, maxLevel: 14, chance: 9 },
			            { name: 'pidgeotto', minLevel: 13, maxLevel: 16, chance: 9 },
			            { name: 'ledyba', minLevel: 11, maxLevel: 15, chance: 9 },      
			            { name: 'spinarak', minLevel: 11, maxLevel: 15, chance: 9 },
			            { name: 'growlithe', minLevel: 14, maxLevel: 16, chance: 5 },
			            { name: 'vulpix', minLevel: 13, maxLevel: 16, chance: 5 },
			            { name: 'stantler', minLevel: 14, maxLevel: 15, chance: 5 },
			            { name: 'murkrow', minLevel: 12, maxLevel: 14, chance: 5 },
			            { name: 'ledian', minLevel: 14, maxLevel: 17, chance: 4 },
			            { name: 'ariados', minLevel: 14, maxLevel: 17, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 4], 
			        	location: 'route36-4'
			        }
				},
			},
			route37: { 
				name: [`Route 37`, `Ruta 37`, `37号道路`],
				position: { x: 11.7, y: 0},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: [`Route 37`, `Ruta 37`, `37号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'pidgey', minLevel: 14, maxLevel: 18, chance: 15 },
			            { name: 'pidgeotto', minLevel: 15, maxLevel: 19, chance: 15 },
			            { name: 'ledyba', minLevel: 16, maxLevel: 20, chance: 11 },      
			            { name: 'spinarak', minLevel: 16, maxLevel: 20, chance: 11 },
			            { name: 'growlithe', minLevel: 14, maxLevel: 17, chance: 11 },
			            { name: 'vulpix', minLevel: 14, maxLevel: 17, chance: 11 },
			            { name: 'stantler', minLevel: 15, maxLevel: 18, chance: 10 },
			            { name: 'ledian', minLevel: 17, maxLevel: 21, chance: 6 },
			            { name: 'ariados', minLevel: 17, maxLevel: 21, chance: 6 },
			            { name: 'murkrow', minLevel: 16, maxLevel: 18, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route37-2'
			        }
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 3, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute37',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 5, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute37',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 7, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute37',
					tw: false
				},
			},
			vesselD: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 9, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselDRoute37',
					tw: false
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 3, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route37HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route37-2': {
		name: ['Route 37', 'Ruta 37', '37号道路'],
		background: "assets/images/map/johto/route/route37-2.png",
		song: "route34",
		worldEvent: {
			workshop: {
				name: ['Workshop', 'Taller', '工坊'],
				position: { x: 18, y: 4},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'jim'
				},
			},
			route37: { 
				name: [`Route 37`, `Ruta 37`, `37号道路`],
				position: { x: 11.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: [`Route 37`, `Ruta 37`, `37号道路`],  
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'pidgey', minLevel: 14, maxLevel: 18, chance: 15 },
			            { name: 'pidgeotto', minLevel: 15, maxLevel: 19, chance: 15 },
			            { name: 'ledyba', minLevel: 16, maxLevel: 20, chance: 11 },      
			            { name: 'spinarak', minLevel: 16, maxLevel: 20, chance: 11 },
			            { name: 'growlithe', minLevel: 14, maxLevel: 17, chance: 11 },
			            { name: 'vulpix', minLevel: 14, maxLevel: 17, chance: 11 },
			            { name: 'stantler', minLevel: 15, maxLevel: 18, chance: 10 },
			            { name: 'ledian', minLevel: 17, maxLevel: 21, chance: 6 },
			            { name: 'ariados', minLevel: 17, maxLevel: 21, chance: 6 },
			            { name: 'murkrow', minLevel: 16, maxLevel: 18, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route37-1'
			        }
				},
			},
			ecruteakCity: {
				name: [`Ecruteak City`, `Ciudad Iris`, `圆朱市`],
				position: { x: 11.7, y: 0 },
				size: { w: 3.6, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-1'
				},
			},
			signboard: {
				name: ['Signboard', 'Letrero', '告示牌'],
				position: { x: 22, y: 6},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute37',
					tw: false
				},
			},
		}
	},
	'burnedBurrow-1': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-1.png",
		song: "burnedTower",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 17, y: 11},
				size: { w: 4, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [  
			            { name: 'koffing', minLevel: 17, maxLevel: 20, chance: 55 },
			            { name: 'weezing', minLevel: 18, maxLevel: 22, chance: 10 },
			           	{ name: 'grimer', minLevel: 16, maxLevel: 19, chance: 10 },
			            { name: 'zubat', minLevel: 19, maxLevel: 23, chance: 10 },
			            { name: 'houndour', minLevel: 17, maxLevel: 19, chance: 10 },
			            { name: 'slugma', minLevel: 16, maxLevel: 18, chance: 7 },
			            { name: 'magmar', minLevel: 16, maxLevel: 19, chance: 3 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 4},
				size: { w: 4, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [  
			            { name: 'koffing', minLevel: 17, maxLevel: 20, chance: 42 },
			            { name: 'weezing', minLevel: 18, maxLevel: 22, chance: 20 },
			            { name: 'grimer', minLevel: 16, maxLevel: 19, chance: 20 },
			           	{ name: 'houndour', minLevel: 17, maxLevel: 19, chance: 5 },
			            { name: 'zubat', minLevel: 19, maxLevel: 23, chance: 5 },
			            { name: 'slugma', minLevel: 16, maxLevel: 23, chance: 5 },
			            { name: 'magmar', minLevel: 16, maxLevel: 24, chance: 5 },
			            { name: 'cyndaquil', minLevel: 19, maxLevel: 22, chance: 2 },
			        ],
				},
			},
			ecruteakCityA: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 8, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-3'
				},
			},
			burnedBurrow: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 18.5, y: 4.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-2',
					sound: 'stairs'
				},
			},
		}
	},
	'burnedBurrow-2': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-2.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 18.5, y: 4.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-1',
					sound: 'stairs'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 0}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'koffing', minLevel: 17, maxLevel: 20, chance: 55 },
			            { name: 'weezing', minLevel: 18, maxLevel: 22, chance: 10 },
			           	{ name: 'grimer', minLevel: 16, maxLevel: 19, chance: 10 },
			            { name: 'zubat', minLevel: 19, maxLevel: 23, chance: 10 },
			            { name: 'houndour', minLevel: 17, maxLevel: 19, chance: 10 },
			            { name: 'slugma', minLevel: 16, maxLevel: 18, chance: 6 },
			            { name: 'magmar', minLevel: 16, maxLevel: 19, chance: 3 },
			            { name: 'cyndaquil', minLevel: 19, maxLevel: 22, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'burnedBurrow-3'
			        }
				},
			},
		}
	},
	'burnedBurrow-3': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-3.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 11.5, y: 4.5}, 
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-4',
					sound: 'stairs'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 15},
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'koffing', minLevel: 17, maxLevel: 20, chance: 55 },
			            { name: 'weezing', minLevel: 18, maxLevel: 22, chance: 10 },
			           	{ name: 'grimer', minLevel: 16, maxLevel: 19, chance: 10 },
			            { name: 'zubat', minLevel: 19, maxLevel: 23, chance: 10 },
			            { name: 'houndour', minLevel: 17, maxLevel: 19, chance: 10 },
			            { name: 'slugma', minLevel: 16, maxLevel: 18, chance: 6 },
			            { name: 'magmar', minLevel: 16, maxLevel: 19, chance: 3 },
			            { name: 'cyndaquil', minLevel: 19, maxLevel: 22, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'burnedBurrow-2'
			        }
				},
			},
		}
	},
	'burnedBurrow-4': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-4.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 11.5, y: 4.5}, 
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-3',
					sound: 'stairs'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 15}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
			            { name: 'magmar', minLevel: 38, maxLevel: 42, chance: 13 },
						{ name: 'muk', minLevel: 37, maxLevel: 40, chance: 12 },
			            { name: 'weezing', minLevel: 35, maxLevel: 43, chance: 11 },
			            { name: 'zubat', minLevel: 36, maxLevel: 42, chance: 11 },
			            { name: 'houndour', minLevel: 38, maxLevel: 40, chance: 11 },
			            { name: 'magcargo', minLevel: 37, maxLevel: 41, chance: 11 },
			            { name: 'houndoom', minLevel: 35, maxLevel: 41, chance: 11 },
			            { name: 'slugma', minLevel: 36, maxLevel: 43, chance: 5 },
			           	{ name: 'grimer', minLevel: 38, maxLevel: 41, chance: 5 },
						{ name: 'koffing', minLevel: 37, maxLevel: 42, chance: 5 },
						{ name: 'cyndaquil', minLevel: 35, maxLevel: 38, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'burnedBurrow-5'
			        }
				},
			},
		}
	},
	'burnedBurrow-5': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-5.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 4.5, y: 6.5}, 
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-6',
					sound: 'fall'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 0}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'magmar', minLevel: 38, maxLevel: 42, chance: 13 },
						{ name: 'muk', minLevel: 37, maxLevel: 40, chance: 12 },
			            { name: 'weezing', minLevel: 35, maxLevel: 43, chance: 11 },
			            { name: 'zubat', minLevel: 36, maxLevel: 42, chance: 11 },
			            { name: 'houndour', minLevel: 38, maxLevel: 40, chance: 11 },
			            { name: 'magcargo', minLevel: 37, maxLevel: 41, chance: 11 },
			            { name: 'houndoom', minLevel: 35, maxLevel: 41, chance: 11 },
			            { name: 'slugma', minLevel: 36, maxLevel: 43, chance: 5 },
			           	{ name: 'grimer', minLevel: 38, maxLevel: 41, chance: 5 },
						{ name: 'koffing', minLevel: 37, maxLevel: 42, chance: 5 },
						{ name: 'cyndaquil', minLevel: 35, maxLevel: 38, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'burnedBurrow-4'
			        }
				},
			},
		}
	},
	'burnedBurrow-6': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-6.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrow: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 0}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-7'
				},
			},
		}	
	},
	'burnedBurrow-7': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-7.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 15}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-6'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 7}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-8',
					sound: 'fall'
				},
			},
		}
	},
	'burnedBurrow-8': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-8.png",
		song: "burnedTower",
		worldEvent: {
			hooh: {
				name: ['Ho-Oh', 'Ho-Oh', '凤王'], 
				position: { x: 11, y: 2 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/hooh.png',
					type: 'dialogue',
					npc: 'hooh'
				},
			}
		}
	},
	'burnedBurrow-8bis': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-8.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrow: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 11, y: 0}, 
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-9'
				},
			},
		}
	},
	'burnedBurrow-9': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-9.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 15}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-8',
					sound: 'jump1'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 11.5, y: 7.5 }, 
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-10',
					sound: 'teleport'
				},
			},
		}
	},
	'burnedBurrow-10': {
		name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
		background: "assets/images/map/johto/cave/burnedBurrow-10.png",
		song: "burnedTower",
		worldEvent: {
			burnedBurrowA: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 11.5, y: 7.5 }, 
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-9',
					sound: 'teleport'
				},
			},
			burnedBurrowB: {
				name: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
				position: { x: 10.8, y: 15}, 
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'burnedBurrow-1',
					sound: 'jump1'
				},
			},
		}
	},
	'route38-1': {
		name: ['Route 38', 'Ruta 38', '38号道路'],
		background: "assets/images/map/johto/route/route38-1.png",
		song: "route38",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 9},
				size: { w: 10, h: 2},
				event: {
					type: 'routeBattle',
					title: ['Route 38', 'Ruta 38', '38号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'meowth', minLevel: 14, maxLevel: 18, chance: 20 },
			           	{ name: 'rattata', minLevel: 15, maxLevel: 21, chance: 20 },
			            { name: 'magnemite', minLevel: 16, maxLevel: 18, chance: 20 },
			            { name: 'farfetchd', minLevel: 17, maxLevel: 21, chance: 20 },
			           	{ name: 'raticate', minLevel: 18, maxLevel: 20, chance: 6 },
			            { name: 'snubbull', minLevel: 14, maxLevel: 17, chance: 6 },
			            { name: 'miltank', minLevel: 15, maxLevel: 17, chance: 4 },
			            { name: 'tauros', minLevel: 15, maxLevel: 17, chance: 4 },
			        ],
				},
			},
			ecruteakCityA: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 23, y: 11.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-1'
				},
			},
			route38A: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 0, y: 5.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route38-2'
				},
			},
			route38B: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 3, y: 0},
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route38-3'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 8, y: 16},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselARoute38',
					tw: false
				},
			},
		}
	},
	'route38-2': {
		name: ['Route 38', 'Ruta 38', '38号道路'],
		background: "assets/images/map/johto/route/route38-2.png",
		song: "route38",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 3, y: 2 },
				size: { w: 14, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 38', 'Ruta 38', '38号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'meowth', minLevel: 15, maxLevel: 18, chance: 20 },
			           	{ name: 'spinarak', minLevel: 15, maxLevel: 21, chance: 20 },
			            { name: 'magnemite', minLevel: 16, maxLevel: 18, chance: 20 },
			            { name: 'farfetchd', minLevel: 16, maxLevel: 20, chance: 20 },
			           	{ name: 'raticate', minLevel: 17, maxLevel: 20, chance: 10 },
			            { name: 'miltank', minLevel: 15, maxLevel: 18, chance: 8 },
			            { name: 'tauros', minLevel: 15, maxLevel: 17, chance: 2 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 14 },
				size: { w: 12, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 38', 'Ruta 38', '38号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'meowth', minLevel: 15, maxLevel: 18, chance: 20 },
			           	{ name: 'ledyba', minLevel: 15, maxLevel: 21, chance: 20 },
			            { name: 'magnemite', minLevel: 16, maxLevel: 18, chance: 20 },
			            { name: 'farfetchd', minLevel: 16, maxLevel: 20, chance: 20 },
			           	{ name: 'raticate', minLevel: 17, maxLevel: 20, chance: 10 },
			            { name: 'tauros', minLevel: 15, maxLevel: 18, chance: 8 },
			            { name: 'miltank', minLevel: 15, maxLevel: 17, chance: 2 },
			        ],
				},
			},
			route38: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 23, y: 5.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route38-1'
				},
			},
			lithicForest: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'], 
				position: { x: 0, y: 8.8 },
				size: { w: 2, h: 5.4 },
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'meowth', minLevel: 14, maxLevel: 18, chance: 20 },
			           	{ name: 'rattata', minLevel: 15, maxLevel: 21, chance: 20 },
			            { name: 'magnemite', minLevel: 16, maxLevel: 18, chance: 20 },
			            { name: 'farfetchd', minLevel: 17, maxLevel: 21, chance: 20 },
			           	{ name: 'raticate', minLevel: 18, maxLevel: 20, chance: 6 },
			            { name: 'snubbull', minLevel: 14, maxLevel: 17, chance: 6 },
			            { name: 'miltank', minLevel: 15, maxLevel: 17, chance: 3 },
			            { name: 'tauros', minLevel: 15, maxLevel: 17, chance: 3 },
			            { name: 'sudowoodo', minLevel: 15, maxLevel: 19, chance: 1 },
			            { name: 'larvitar', minLevel: 14, maxLevel: 18, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'lithicForest-1'
			        }
				},
			},
		}
	},
	'route38-3': {
		name: ['Route 38', 'Ruta 38', '38号道路'],
		background: "assets/images/map/johto/route/route38-3.png",
		song: "route38",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 9, y: 7},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute38',
					tw: false
				},
			},
			route38: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 3, y: 16},
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route38-1'
				},
			},
		}
	},
	'route38-3bis': {
		name: ['Route 38', 'Ruta 38', '38号道路'],
		background: "assets/images/map/johto/route/route38-3bis.png",
		song: "route38",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 9, y: 7 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute38',
					tw: false
				},
			},
			route38A: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 3, y: 16 },
				size: { w: 4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route38-1'
				},
			},
			route38B: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 14, y: 1 },
				size: { w: 4, h: 5 },
				event: {
					type: 'travelRoute',
					location: 'route38-4'
				},
			},
		}
	},
	'route38-4': {
		name: ['Route 38', 'Ruta 38', '38号道路'],
		background: "assets/images/map/johto/route/route38-4.png",
		song: "route38",
		worldEvent: {
			route38: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 14.7, y: 16 },
				size: { w: 2.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route38-3'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 16, y: 3},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute38',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 7 },
				size: { w: 10, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 38', 'Ruta 38', '38号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			            { name: 'pikachu', minLevel: 16, maxLevel: 22, chance: 70 },
			            { name: 'pichu', minLevel: 16, maxLevel: 22, chance: 20 },
			            { name: 'eevee', minLevel: 16, maxLevel: 22, chance: 9 },
			           	{ name: 'raichu', minLevel: 15, maxLevel: 19, chance: 1 },
			        ],
				},
			},
		}
	},
	'lithicForest-1': {
		name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
		background: "assets/images/map/johto/route/lithicForest-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 2},
				size: { w: 9, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			            { name: 'geodude', minLevel: 16, maxLevel: 22, chance: 17 },
			            { name: 'tangela', minLevel: 16, maxLevel: 22, chance: 17 },
			           	{ name: 'paras', minLevel: 15, maxLevel: 19, chance: 15 },
			            { name: 'hoppip', minLevel: 15, maxLevel: 21, chance: 15 },
			           	{ name: 'sunkern', minLevel: 18, maxLevel: 20, chance: 10 },
			            { name: 'exeggcute', minLevel: 17, maxLevel: 19, chance: 9 },
			            { name: 'onix', minLevel: 20, maxLevel: 22, chance: 9 },
			            { name: 'sudowoodo', minLevel: 17, maxLevel: 19, chance: 4 },
			            { name: 'larvitar', minLevel: 15, maxLevel: 18, chance: 4 },
			        ],
				},
			},
			route38: {
				name: ['Route 38', 'Ruta 38', '38号道路'], 
				position: { x: 22, y: 8.8 },
				size: { w: 3, h: 5.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 38', 'Ruta 38', '38号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'meowth', minLevel: 14, maxLevel: 18, chance: 20 },
			           	{ name: 'rattata', minLevel: 15, maxLevel: 21, chance: 20 },
			            { name: 'magnemite', minLevel: 16, maxLevel: 18, chance: 20 },
			            { name: 'farfetchd', minLevel: 17, maxLevel: 21, chance: 20 },
			           	{ name: 'raticate', minLevel: 18, maxLevel: 20, chance: 6 },
			            { name: 'snubbull', minLevel: 14, maxLevel: 17, chance: 6 },
			            { name: 'miltank', minLevel: 15, maxLevel: 17, chance: 3 },
			            { name: 'tauros', minLevel: 15, maxLevel: 17, chance: 3 },
			            { name: 'sudowoodo', minLevel: 15, maxLevel: 19, chance: 1 },
			            { name: 'larvitar', minLevel: 14, maxLevel: 18, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route38-2'
			        }
				},
			},
			lithicForest: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
				position: { x: 0, y: 5.8 },
				size: { w: 2, h: 4.4 },
				event: {
					type: 'travelRoute',
					location: 'lithicForest-2'
				},
			},
		}
	},
	'lithicForest-2': {
		name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
		background: "assets/images/map/johto/route/lithicForest-2.png",
		song: "ruinsOfAlph",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 4},
				size: { w: 7, h: 7},
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			            { name: 'geodude', minLevel: 15, maxLevel: 20, chance: 19 },
			            { name: 'tangela', minLevel: 15, maxLevel: 21, chance: 17 },
			           	{ name: 'beedrill', minLevel: 16, maxLevel: 20, chance: 15 },
			            { name: 'bellsprout', minLevel: 17, maxLevel: 21, chance: 15 },
			           	{ name: 'sunkern', minLevel: 18, maxLevel: 22, chance: 10 },
			            { name: 'ledian', minLevel: 17, maxLevel: 20, chance: 9 },
			            { name: 'pineco', minLevel: 15, maxLevel: 20, chance: 9 },
			            { name: 'sudowoodo', minLevel: 16, maxLevel: 22, chance: 5 },
			            { name: 'larvitar', minLevel: 16, maxLevel: 21, chance: 1 },
			        ],
				},
			},
			lithicForestA: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],  
				position: { x: 22, y: 5.8 },
				size: { w: 3, h: 4.4 },
				event: {
					type: 'travelRoute',
					location: 'lithicForest-1'
				},
			},
			lithicForestB: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'], 
				position: { x: 0, y: 1.8 },
				size: { w: 4, h: 2.4 },
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'geodude', minLevel: 16, maxLevel: 22, chance: 17 },
			            { name: 'tangela', minLevel: 16, maxLevel: 22, chance: 17 },
			           	{ name: 'paras', minLevel: 15, maxLevel: 19, chance: 15 },
			            { name: 'hoppip', minLevel: 15, maxLevel: 21, chance: 15 },
			           	{ name: 'sunkern', minLevel: 18, maxLevel: 20, chance: 10 },
			            { name: 'exeggcute', minLevel: 17, maxLevel: 19, chance: 9 },
			            { name: 'onix', minLevel: 20, maxLevel: 22, chance: 9 },
			            { name: 'sudowoodo', minLevel: 17, maxLevel: 19, chance: 4 },
			            { name: 'larvitar', minLevel: 15, maxLevel: 18, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'lithicForest-3'
			        }
				},
			},
		}
	},
	'lithicForest-3': {
		name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
		background: "assets/images/map/johto/route/lithicForest-3.png",
		song: "ruinsOfAlph",
		worldEvent: {
			lithicForestA: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],  
				position: { x: 22, y: 1.8},
				size: { w: 3, h: 2.4 },
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'geodude', minLevel: 16, maxLevel: 22, chance: 17 },
			            { name: 'tangela', minLevel: 16, maxLevel: 22, chance: 17 },
			           	{ name: 'paras', minLevel: 15, maxLevel: 19, chance: 15 },
			            { name: 'hoppip', minLevel: 15, maxLevel: 21, chance: 15 },
			           	{ name: 'sunkern', minLevel: 18, maxLevel: 20, chance: 10 },
			            { name: 'exeggcute', minLevel: 17, maxLevel: 19, chance: 9 },
			            { name: 'onix', minLevel: 20, maxLevel: 22, chance: 9 },
			            { name: 'sudowoodo', minLevel: 17, maxLevel: 19, chance: 4 },
			            { name: 'larvitar', minLevel: 15, maxLevel: 18, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'lithicForest-2'
			        }
				},
			},
			lithicForestB: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
				position: { x: 0, y: 7.8},
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'lithicForest-4'
				},
			},
		}
	},
	'lithicForest-4': {
		name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
		background: "assets/images/map/johto/route/lithicForest-4.png",
		song: "ruinsOfAlph",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 13, y: 12},
				size: { w: 9, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			            { name: 'tangela', minLevel: 16, maxLevel: 22, chance: 19 },
			            { name: 'geodude', minLevel: 17, maxLevel: 20, chance: 17 },
			           	{ name: 'butterfree', minLevel: 19, maxLevel: 20, chance: 15 },
			            { name: 'bellsprout', minLevel: 17, maxLevel: 20, chance: 15 },
			           	{ name: 'venonat', minLevel: 16, maxLevel: 19, chance: 10 },
			            { name: 'ariados', minLevel: 17, maxLevel: 18, chance: 9 },
			            { name: 'hoppip', minLevel: 19, maxLevel: 20, chance: 9 },
			            { name: 'larvitar', minLevel: 15, maxLevel: 18, chance: 5 },
			            { name: 'sudowoodo', minLevel: 16, maxLevel: 19, chance: 2 },
			        ],
				},
			},
			lithicForestA: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],  
				position: { x: 22, y: 7.8 },
				size: { w: 3, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'lithicForest-3'
				},
			},
			route39: {
				name: ['Route 39', 'Ruta 39', '39号道路'], 
				position: { x: 0, y: 8.8 },
				size: { w: 2, h: 5.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 39', 'Ruta 39', '39号道路'], 
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'geodude', minLevel: 15, maxLevel: 20, chance: 20 },
			            { name: 'venonat', minLevel: 15, maxLevel: 21, chance: 17 },
			            { name: 'bellsprout', minLevel: 17, maxLevel: 21, chance: 15 },
			           	{ name: 'sunkern', minLevel: 18, maxLevel: 22, chance: 10 },
			            { name: 'ariados', minLevel: 17, maxLevel: 20, chance: 9 },
			            { name: 'pineco', minLevel: 15, maxLevel: 20, chance: 9 },
			           	{ name: 'beedrill', minLevel: 16, maxLevel: 20, chance: 7 },
			           	{ name: 'butterfree', minLevel: 15, maxLevel: 19, chance: 7 },
			            { name: 'sudowoodo', minLevel: 16, maxLevel: 21, chance: 5 },
			            { name: 'larvitar', minLevel: 15, maxLevel: 17, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route39-1'
			        }
				},
			},
		}
	},
	'route39-1': {
		name: ['Route 39', 'Ruta 39', '39号道路'],
		background: "assets/images/map/johto/route/route39-1.png",
		song: "route38",
		worldEvent: {
			farm: {
				name: ['Farm', 'Granja', '农场'],
				position: { x: 14, y: 2},
				size: { w: 5, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'farm'
				},
			},
			lithicForest: {
				name: ['Lithic Forest', 'Bosque Lítico', '石之森林'],  
				position: { x: 23, y: 8.8},
				size: { w: 2, h: 5.4 },
				event: {
					type: 'routeBattle',
					title: ['Lithic Forest', 'Bosque Lítico', '石之森林'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'geodude', minLevel: 15, maxLevel: 20, chance: 20 },
			            { name: 'venonat', minLevel: 15, maxLevel: 21, chance: 17 },
			            { name: 'weepinbell', minLevel: 17, maxLevel: 21, chance: 15 },
			           	{ name: 'sunflora', minLevel: 18, maxLevel: 22, chance: 10 },
			            { name: 'ariados', minLevel: 17, maxLevel: 20, chance: 9 },
			            { name: 'pineco', minLevel: 15, maxLevel: 20, chance: 9 },
			           	{ name: 'beedrill', minLevel: 16, maxLevel: 20, chance: 7 },
			           	{ name: 'butterfree', minLevel: 15, maxLevel: 19, chance: 7 },
			            { name: 'sudowoodo', minLevel: 16, maxLevel: 21, chance: 5 },
			            { name: 'larvitar', minLevel: 15, maxLevel: 17, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'lithicForest-4'
			        }
				},
			},
			route39: {
				name: ['Route 39', 'Ruta 39', '39号道路'], 
				position: { x: 5.8, y: 15},
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route39-2'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 3, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route39HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route39-2': {
		name: ['Route 39', 'Ruta 39', '39号道路'],
		background: "assets/images/map/johto/route/route39-2.png",
		song: "route38",
		worldEvent: {
			route39A: {
				name: ['Route 39', 'Ruta 39', '39号道路'], 
				position: { x: 5.8, y: 0},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route39-1'
				},
			},
			route39B: {
				name: ['Route 39', 'Ruta 39', '39号道路'], 
				position: { x: 17.8, y: 16},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 39', 'Ruta 39', '39号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
			            { name: 'magnemite', minLevel: 22, maxLevel: 25, chance: 25 },
						{ name: 'meowth', minLevel: 20, maxLevel: 24, chance: 20 },
			           	{ name: 'exeggcute', minLevel: 22, maxLevel: 24, chance: 10 },
			            { name: 'farfetchd', minLevel: 21, maxLevel: 26, chance: 10 },
			           	{ name: 'raticate', minLevel: 20, maxLevel: 23, chance: 10 },
			           	{ name: 'weepinbell', minLevel: 20, maxLevel: 21, chance: 5 },
			           	{ name: 'sunflora', minLevel: 20, maxLevel: 22, chance: 5 },
			            { name: 'tauros', minLevel: 17, maxLevel: 22, chance: 5 },
			            { name: 'miltank', minLevel: 17, maxLevel: 22, chance: 5 },
			            { name: 'pineco', minLevel: 18, maxLevel: 21, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route39-3'
			        }
				},
			},
		}
	},
	'route39-3': {
		name: ['Route 39', 'Ruta 39', '39号道路'],
		background: "assets/images/map/johto/route/route39-3.png",
		song: "route38",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 3},
				size: { w: 11, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 39', 'Ruta 39', '39号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'meowth', minLevel: 18, maxLevel: 22, chance: 20 },
			            { name: 'pineco', minLevel: 18, maxLevel: 19, chance: 20 },
			            { name: 'magnemite', minLevel: 15, maxLevel: 20, chance: 20 },
			            { name: 'farfetchd', minLevel: 16, maxLevel: 21, chance: 12 },
			           	{ name: 'exeggcute', minLevel: 15, maxLevel: 20, chance: 10 },
			           	{ name: 'raticate', minLevel: 17, maxLevel: 21, chance: 10 },
			            { name: 'tauros', minLevel: 17, maxLevel: 20, chance: 4 },
			            { name: 'miltank', minLevel: 17, maxLevel: 20, chance: 4 },
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 20, y: 11},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute39',
					tw: false
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 16, y: 6},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute39',
					tw: false
				},
			},
			route39: {
				name: ['Route 39', 'Ruta 39', '39号道路'], 
				position: { x: 17.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 39', 'Ruta 39', '39号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'magnemite', minLevel: 22, maxLevel: 25, chance: 25 },
						{ name: 'meowth', minLevel: 20, maxLevel: 24, chance: 20 },
			           	{ name: 'exeggcute', minLevel: 22, maxLevel: 24, chance: 10 },
			            { name: 'farfetchd', minLevel: 21, maxLevel: 26, chance: 10 },
			           	{ name: 'raticate', minLevel: 20, maxLevel: 23, chance: 10 },
			           	{ name: 'weepinbell', minLevel: 20, maxLevel: 21, chance: 5 },
			           	{ name: 'sunflora', minLevel: 20, maxLevel: 22, chance: 5 },
			            { name: 'tauros', minLevel: 17, maxLevel: 22, chance: 5 },
			            { name: 'miltank', minLevel: 17, maxLevel: 22, chance: 5 },
			            { name: 'pineco', minLevel: 18, maxLevel: 21, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route39-2'
			        }
				},
			},
			olivineCity: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 7.9, y: 16 },
				size: { w: 5.3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-1'
				},
			},
		}
	},
	'route40-1': {
		name: ['Route 40', 'Ruta 40', '40号道路'],
		background: "assets/images/map/johto/route/route40-1.png",
		song: "route38",
		worldEvent: {
			olivineCity: {
				name: ['Olivine City', 'Ciudad Olivo', '浅葱市'], 
				position: { x: 23, y: 8.8},
				size: { w: 2, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'olivineCity-2'
				},
			},
			lunarSanctuary: { 
				name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
				position: { x: 7, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'lunarSanctuary-1'
				},
			},
			route41: {
				name: ['Route 41', 'Ruta 41', '41号道路'], 
				position: { x: 13, y: 14.5 },
				size: { w: 11, h: 4.5 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 40', 'Ruta 40', '40号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 33, maxLevel: 38, chance: 40 },
						{ name: 'remoraid', minLevel: 32, maxLevel: 39, chance: 20 },
						{ name: 'chinchou', minLevel: 34, maxLevel: 37, chance: 10 },
						{ name: 'mantine', minLevel: 35, maxLevel: 38, chance: 10 },
						{ name: 'staryu', minLevel: 35, maxLevel: 38, chance: 5 },
						{ name: 'krabby', minLevel: 33, maxLevel: 37, chance: 5 },
						{ name: 'poliwhirl', minLevel: 34, maxLevel: 39, chance: 4 },
						{ name: 'tentacruel', minLevel: 35, maxLevel: 38, chance: 3 }, 
						{ name: 'lapras', minLevel: 36, maxLevel: 39, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route41-1'
			        }
				},
			},
		}
	},
	'lunarSanctuary-1': {
		name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
		background: "assets/images/map/johto/cave/lunarSanctuary-1.png",
		song: "icePath",
		worldEvent: {
			route40: { 
				name: ['Route 40', 'Ruta 40', '40号道路'],
				position: { x: 11, y: 13},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route40-1'
				},
			},
			lunarSanctuary: { 
				name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
				position: { x: 11.5, y: 0.75},
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'lunarSanctuary-2',
					sound: 'stairs'
				},
			},
		}
	},
	'lunarSanctuary-1bis': {
		name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
		background: "assets/images/map/johto/cave/lunarSanctuary-1.png",
		song: "icePath",
		worldEvent: {
			route40: { 
				name: ['Route 40', 'Ruta 40', '40号道路'],
				position: { x: 11, y: 13},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route40-1'
				},
			},
			lunarSanctuary: { 
				name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
				position: { x: 11.5, y: 0.75},
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'lunarSanctuary-2',
					sound: 'stairs'
				},
			},
			latios: {
				name: ['Latios', 'Latios', '拉帝欧斯'], 
				position: { x: 11, y: 7 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/latios.png',
					type: 'dialogue',
					npc: 'latios'
				},
			},
		}
	},
	'lunarSanctuary-1bisB': {
		name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
		background: "assets/images/map/johto/cave/lunarSanctuary-1.png",
		song: "icePath",
		worldEvent: {
			route40: { 
				name: ['Route 40', 'Ruta 40', '40号道路'],
				position: { x: 11, y: 13},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route40-1'
				},
			},
			lunarSanctuary: { 
				name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
				position: { x: 11.5, y: 0.75},
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'lunarSanctuary-2',
					sound: 'stairs'
				},
			},
		}
	},
	'lunarSanctuary-2': {
		name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
		background: "assets/images/map/johto/cave/lunarSanctuary-2.png",
		song: "icePath",
		worldEvent: {
			lunarSanctuary: { 
				name: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'],
				position: { x: 11.5, y: 1.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'lunarSanctuary-1',
					sound: 'stairs'
				},
			},
			buttonA: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 11, y: 9},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 197,
				},
			},
			buttonB: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 12, y: 7},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 337,
				},
			},
			buttonC: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 16, y: 7},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 359,
				},
			},
			buttonD: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 17, y: 9},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 36,
				},
			},
			buttonE: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 16, y: 11},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 198,
				},
			},
			buttonF: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 14, y: 12},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 164,
				},
			},
		}
	},
	'route41-1': {
		name: ['Route 41', 'Ruta 41', '41号道路'],
		background: "assets/images/map/johto/route/route41-1.png",
		song: "route38",
		worldEvent: {
			whirlCave: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
				position: { x: 9, y: 7},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-1'
				},
			},
			route40: {
				name: ['Route 41', 'Ruta 41', '41号道路'], 
				position: { x: 11, y: 0},
				size: { w: 12, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 41', 'Ruta 41', '41号道路'],
					background: './assets/images/background/battle5.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 33, maxLevel: 38, chance: 40 },
						{ name: 'remoraid', minLevel: 32, maxLevel: 39, chance: 20 },
						{ name: 'chinchou', minLevel: 34, maxLevel: 37, chance: 10 },
						{ name: 'mantine', minLevel: 35, maxLevel: 38, chance: 10 },
						{ name: 'staryu', minLevel: 35, maxLevel: 38, chance: 5 },
						{ name: 'krabby', minLevel: 33, maxLevel: 37, chance: 5 },
						{ name: 'poliwhirl', minLevel: 34, maxLevel: 39, chance: 4 },
						{ name: 'tentacruel', minLevel: 35, maxLevel: 38, chance: 3 }, 
						{ name: 'lapras', minLevel: 36, maxLevel: 39, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route40-1'
			        }
				},
			},
			route41: {
				name: ['Route 41', 'Ruta 41', '41号道路'], 
				position: { x: 0, y: 10},
				size: { w: 6, h: 8 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 41', 'Ruta 41', '41号道路'],
					background: './assets/images/background/battle5.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 34, maxLevel: 38, chance: 25 },
						{ name: 'remoraid', minLevel: 35, maxLevel: 39, chance: 20 },
						{ name: 'chinchou', minLevel: 36, maxLevel: 38, chance: 15 },
						{ name: 'staryu', minLevel: 35, maxLevel: 37, chance: 7 },
						{ name: 'krabby', minLevel: 34, maxLevel: 38, chance: 7 },
						{ name: 'tentacruel', minLevel: 33, maxLevel: 37, chance: 7 }, 
						{ name: 'seadra', minLevel: 35, maxLevel: 38, chance: 7 },
						{ name: 'mantine', minLevel: 36, maxLevel: 38, chance: 7 },
						{ name: 'corsola', minLevel: 34, maxLevel: 38, chance: 5 },
						{ name: 'lapras', minLevel: 35, maxLevel: 39, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route41-2'
			        }
				},
			},
		}
	},
	'route41-2': {
		name: ['Route 41', 'Ruta 41', '41号道路'],
		background: "assets/images/map/johto/route/route41-2.png",
		song: "route38",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 11},
				size: { w: 13, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 41', 'Ruta 41', '41号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
			            { name: 'sunflora', minLevel: 38, maxLevel: 39, chance: 20 },
			            { name: 'parasect', minLevel: 37, maxLevel: 38, chance: 20 },
			            { name: 'krabby', minLevel: 36, maxLevel: 39, chance: 20 },
			            { name: 'marill', minLevel: 35, maxLevel: 39, chance: 15 },
			            { name: 'shuckle', minLevel: 36, maxLevel: 38, chance: 15 },
			            { name: 'azumarill', minLevel: 35, maxLevel: 38, chance: 6 },
			            { name: 'corsola', minLevel: 35, maxLevel: 39, chance: 4 },
			        ],
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 9, y: 5},
				size: { w: 5, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'comedianRoute41'
				},
			},
			route41: {
				name: ['Route 41', 'Ruta 41', '41号道路'],
				position: { x: 21, y: 0},
				size: { w: 4, h: 8 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 41', 'Ruta 41', '41号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 34, maxLevel: 38, chance: 25 },
						{ name: 'remoraid', minLevel: 35, maxLevel: 39, chance: 20 },
						{ name: 'chinchou', minLevel: 36, maxLevel: 38, chance: 15 },
						{ name: 'staryu', minLevel: 35, maxLevel: 37, chance: 7 },
						{ name: 'krabby', minLevel: 34, maxLevel: 38, chance: 7 },
						{ name: 'tentacruel', minLevel: 33, maxLevel: 40, chance: 7 }, 
						{ name: 'seadra', minLevel: 35, maxLevel: 39, chance: 7 },
						{ name: 'mantine', minLevel: 36, maxLevel: 38, chance: 7 },
						{ name: 'corsola', minLevel: 34, maxLevel: 38, chance: 5 },
						{ name: 'lapras', minLevel: 35, maxLevel: 39, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route41-1'
			        }
				},
			},
			cianwoodCity: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 0, y: 2},
				size: { w: 2.5, h: 4 },
				event: {
					type: 'travelCity',
					location: 'cianwoodCity-1'
				},
			},
		}
	},
	'whirlCave-1': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-1.png",
		song: "icePath",
		worldEvent: {
			route42: {
				name: ['Route 41', 'Ruta 41', '41号道路'], 
				position: { x: 11, y: 11},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route41-1'
				},
			},
			whirlCaveA: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 16.5, y: 7.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-2',
					sound: 'stairs'

				},
			},
			whirlCaveB: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 0},
				size: { w: 3.3, h: 5.5 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'whirlCave-3',
					sound: 'water1'
				},
			},
		}
	},
	'whirlCave-2': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-2.png",
		song: "icePath",
		worldEvent: {
			whirlCave: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 16.5, y: 7.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-1',
					sound: 'stairs'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 6 },
				size: { w: 5, h: 2},
				event: {
					type: 'routeBattle',
					title: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
					background: './assets/images/background/battle4.png',
					pokemon: [  
			           	{ name: 'poliwag', minLevel: 38, maxLevel: 40, chance: 30 },
			            { name: 'poliwhirl', minLevel: 39, maxLevel: 42, chance: 30 },
						{ name: 'krabby', minLevel: 40, maxLevel: 44, chance: 15 },
			            { name: 'zubat', minLevel: 39, maxLevel: 41, chance: 10 },
			            { name: 'seel', minLevel: 38, maxLevel: 43, chance: 10 },
			            { name: 'golbat', minLevel: 38, maxLevel: 42, chance: 5 },
			        ],
				},
			},
		}
	},
	'whirlCave-3': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-3.png",
		song: "icePath",
		worldEvent: {
			whirlCaveA: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'whirlCave-1',
					sound: 'water1'
				},
			},
			whirlCaveB: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 40, maxLevel: 45, chance: 30 },
						{ name: 'krabby', minLevel: 42, maxLevel: 48, chance: 20 },
			           	{ name: 'dewgong', minLevel: 43, maxLevel: 47, chance: 10 },
			           	{ name: 'poliwag', minLevel: 41, maxLevel: 46, chance: 10 },
			           	{ name: 'kingler', minLevel: 40, maxLevel: 42, chance: 6 },
			            { name: 'poliwrath', minLevel: 42, maxLevel: 45, chance: 6 },
			            { name: 'politoed', minLevel: 43, maxLevel: 46, chance: 6 },
			            { name: 'seel', minLevel: 44, maxLevel: 48, chance: 5 },
			            { name: 'golbat', minLevel: 45, maxLevel: 47, chance: 5 },
			            { name: 'zubat', minLevel: 42, maxLevel: 46, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'whirlCave-4'
			        }
				},
			},
		}
	},
	'whirlCave-4': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-4.png",
		song: "icePath",
		worldEvent: {
			whirlCaveA: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 40, maxLevel: 45, chance: 30 },
						{ name: 'krabby', minLevel: 42, maxLevel: 48, chance: 20 },
			           	{ name: 'dewgong', minLevel: 43, maxLevel: 47, chance: 10 },
			           	{ name: 'poliwag', minLevel: 41, maxLevel: 46, chance: 10 },
			           	{ name: 'kingler', minLevel: 40, maxLevel: 42, chance: 6 },
			            { name: 'poliwrath', minLevel: 42, maxLevel: 45, chance: 6 },
			            { name: 'politoed', minLevel: 43, maxLevel: 46, chance: 6 },
			            { name: 'seel', minLevel: 44, maxLevel: 48, chance: 5 },
			            { name: 'golbat', minLevel: 45, maxLevel: 47, chance: 5 },
			            { name: 'zubat', minLevel: 42, maxLevel: 46, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'whirlCave-3'
			        }
				},
			},
			whirlCaveB: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 7 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-5',
					sound: 'fall'
				},
			},
		}
	},
	'whirlCave-5': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-5.png",
		song: "icePath",
		worldEvent: {
			lugia: {
				name: ['Lugia', 'Lugia', '洛奇亚'], 
				position: { x: 11, y: 1 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/lugia.png',
					type: 'dialogue',
					npc: 'lugia'
				},
			}
		}
	},
	'whirlCave-5bis': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-5.png",
		song: "icePath",
		worldEvent: {
			whirlCave: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-6'
				},
			},
		}
	},
	'whirlCave-6': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-6.png",
		song: "icePath",
		worldEvent: {
			whirlCaveA: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-5'
				},
			},
			whirlCaveB: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 11.5, y: 8.5 }, 
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-7',
					sound: 'teleport'
				},
			},
		}
	},
	'whirlCave-7': {
		name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
		background: "assets/images/map/johto/cave/whirlCave-7.png",
		song: "icePath",
		worldEvent: {
			whirlCaveA: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 3.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-2',
					sound: 'jump1'
				},
			},
			whirlCaveB: {
				name: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'], 
				position: { x: 11.5, y: 8.5 }, 
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'whirlCave-6',
					sound: 'teleport'
				},
			},
		}
	},
	'route42-1': {
		name: ['Route 42', 'Ruta 42', '42号道路'],
		background: "assets/images/map/johto/route/route42-1.png",
		song: "route42",
		worldEvent: {
			ecruteakCity: {
				name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'], 
				position: { x: 0, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'ecruteakCity-2'
				},
			},
			route42A: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 22, y: 7},
				size: { w: 3, h: 7 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 42', 'Ruta 42', '42号道路'], 
					background: './assets/images/background/battle15.png',
					pokemon: [ 
						{ name: 'goldeen', minLevel: 19, maxLevel: 23, chance: 25 }, 
						{ name: 'poliwag', minLevel: 18, maxLevel: 24, chance: 25 },
						{ name: 'marill', minLevel: 19, maxLevel: 21, chance: 25 },
						{ name: 'magikarp', minLevel: 19, maxLevel: 23, chance: 20 },
						{ name: 'corsola', minLevel: 16, maxLevel: 22, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route42-2'
			        }
				},
			},
			mtMortar: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 14, y: 6},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-1'
				},
			},
			route42B: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 5.7, y: 16},
				size: { w: 2.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route42-3'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 18, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route42HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route42-2': {
		name: ['Route 42', 'Ruta 42', '42号道路'],
		background: "assets/images/map/johto/route/route42-2.png",
		song: "route42",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 8, y: 14 },
				size: { w: 9, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 42', 'Ruta 42', '42号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
			            { name: 'marill', minLevel: 16, maxLevel: 22, chance: 24 },
			           	{ name: 'mareep', minLevel: 18, maxLevel: 20, chance: 18 },
			           	{ name: 'ekans', minLevel: 15, maxLevel: 21, chance: 18 },
			            { name: 'arbok', minLevel: 17, maxLevel: 20, chance: 15 },
			            { name: 'flaaffy', minLevel: 19, maxLevel: 22, chance: 11 },
			            { name: 'fearow', minLevel: 18, maxLevel: 20, chance: 10 },
			            { name: 'teddiursa', minLevel: 17, maxLevel: 21, chance: 4 },
			        ],
				},
			},
			route42A: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 0, y: 7},
				size: { w: 3, h: 7 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 42', 'Ruta 42', '42号道路'], 
					background: './assets/images/background/battle15.png',
					pokemon: [ 
						{ name: 'goldeen', minLevel: 19, maxLevel: 23, chance: 25 }, 
						{ name: 'poliwag', minLevel: 18, maxLevel: 24, chance: 20 },
						{ name: 'marill', minLevel: 19, maxLevel: 21, chance: 25 },
						{ name: 'magikarp', minLevel: 19, maxLevel: 23, chance: 25 },
						{ name: 'corsola', minLevel: 16, maxLevel: 22, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route42-1'
			        }
				},
			},
			mtMortar: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 15, y: 2},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-5'
				},
			},
			mahoganyTown: {
				name: ['Mahogany Town', 'Pueblo Caoba', '卡吉镇'], 
				position: { x: 23, y: 11.8},
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelCity',
					location: 'mahoganyTown'
				},
			},
		}
	},
	'route42-3': {
		name: ['Route 42', 'Ruta 42', '42号道路'],
		background: "assets/images/map/johto/route/route42-3.png",
		song: "route42",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 11},
				size: { w: 15, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 42', 'Ruta 42', '42号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
			            { name: 'mankey', minLevel: 15, maxLevel: 19, chance: 21 },
			           	{ name: 'mareep', minLevel: 16, maxLevel: 20, chance: 18 },
			           	{ name: 'spearow', minLevel: 16, maxLevel: 21, chance: 18 },
			            { name: 'zubat', minLevel: 18, maxLevel: 20, chance: 15 },
			            { name: 'flaaffy', minLevel: 16, maxLevel: 19, chance: 13 },
			            { name: 'golbat', minLevel: 17, maxLevel: 22, chance: 10 },
			            { name: 'teddiursa', minLevel: 15, maxLevel: 20, chance: 5 },
			        ],
				},
			},
			route42: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 5.7, y: 0},
				size: { w: 2.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route42-1'
				},
			},
		}
	},
	'route42-3bis': {
		name: ['Route 42', 'Ruta 42', '42号道路'],
		background: "assets/images/map/johto/route/route42-3bis.png",
		song: "route42",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 11},
				size: { w: 15, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 42', 'Ruta 42', '42号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
			            { name: 'mankey', minLevel: 15, maxLevel: 19, chance: 21 },
			           	{ name: 'mareep', minLevel: 16, maxLevel: 20, chance: 18 },
			           	{ name: 'spearow', minLevel: 16, maxLevel: 21, chance: 18 },
			            { name: 'zubat', minLevel: 18, maxLevel: 20, chance: 15 },
			            { name: 'flaaffy', minLevel: 16, maxLevel: 19, chance: 13 },
			            { name: 'golbat', minLevel: 17, maxLevel: 22, chance: 10 },
			            { name: 'teddiursa', minLevel: 15, maxLevel: 20, chance: 5 },
			        ],
				},
			},
			route42: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 5.7, y: 0},
				size: { w: 2.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route42-1'
				},
			},
			zCave: {
				name: ['Z Cave', 'Cueva Z', 'Z洞窟'],
				position: { x: 13, y: 7 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'zCave-1'
				},
			},
		}
	},
	'zCave-1': {
		name: ['Z Cave', 'Cueva Z', 'Z洞窟'],
		background: "assets/images/map/johto/cave/zCave-1.png",
		song: "unionCave",
		worldEvent: {
			route42: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 10, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route42-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 3, y: 3 },
				size: { w: 6, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Z Cave', 'Cueva Z', 'Z洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
						{ name: 'phanpy', minLevel: 17, maxLevel: 23, chance: 18 }, 
						{ name: 'gastly', minLevel: 18, maxLevel: 21, chance: 18 },
						{ name: 'natu', minLevel: 19, maxLevel: 23, chance: 15 },
						{ name: 'diglett', minLevel: 17, maxLevel: 22, chance: 14 },
						{ name: 'larvitar', minLevel: 18, maxLevel: 21, chance: 10 },
						{ name: 'arbok', minLevel: 17, maxLevel: 23, chance: 5 },
						{ name: 'cubone', minLevel: 16, maxLevel: 21, chance: 5 },
			            { name: 'rhyhorn', minLevel: 17, maxLevel: 22, chance: 5 },
			            { name: 'shuckle', minLevel: 18, maxLevel: 21, chance: 5 },
			            { name: 'gligar', minLevel: 18, maxLevel: 20, chance: 5 },
			        ],
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 18, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselZCave',
					tw: false
				},
			},
		}
	},
	'mtMortar-1': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-1.png",
		song: "unionCave",
		worldEvent: {
			route42: {
				name: ['Route 42', 'Ruta 42', '42号道路'], 
				position: { x: 11, y: 10},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route42-1'
				},
			},
			mtMortar: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 22, y: 2.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 16, maxLevel: 19, chance: 20 }, 
						{ name: 'machop', minLevel: 18, maxLevel: 20, chance: 20 },
						{ name: 'rattata', minLevel: 17, maxLevel: 19, chance: 20 },
						{ name: 'geodude', minLevel: 17, maxLevel: 18, chance: 20 },
						{ name: 'marill', minLevel: 16, maxLevel: 20, chance: 20 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'mtMortar-2'
			        }
				},
			},
		}
	},
	'mtMortar-2': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-2.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 0, y: 2.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 16, maxLevel: 19, chance: 20 }, 
						{ name: 'machop', minLevel: 18, maxLevel: 20, chance: 20 },
						{ name: 'rattata', minLevel: 17, maxLevel: 19, chance: 20 },
						{ name: 'geodude', minLevel: 17, maxLevel: 18, chance: 20 },
						{ name: 'marill', minLevel: 16, maxLevel: 20, chance: 20 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'mtMortar-1'
			        }
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 18.5, y: 3.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-3',
					sound: 'stairs'
				},
			},
		}
	},
	'mtMortar-3': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-3.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 18.5, y: 4.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-2',
					sound: 'stairs'
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 22, y: 6.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 17, maxLevel: 20, chance: 20 }, 
						{ name: 'machop', minLevel: 16, maxLevel: 22, chance: 15 },
						{ name: 'rattata', minLevel: 16, maxLevel: 18, chance: 15 },
						{ name: 'geodude', minLevel: 17, maxLevel: 18, chance: 15 },
						{ name: 'marill', minLevel: 16, maxLevel: 20, chance: 15 },
						{ name: 'raticate', minLevel: 17, maxLevel: 22, chance: 15 },
						{ name: 'tyrogue', minLevel: 18, maxLevel: 20, chance: 3 },
			            { name: 'shuckle', minLevel: 18, maxLevel: 20, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'mtMortar-4'
			        }
				},
			},
			mtMortarC: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 11.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-6'
				},
			},
		}
	},
	'mtMortar-4': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-4.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 0, y: 6.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 17, maxLevel: 20, chance: 20 }, 
						{ name: 'machop', minLevel: 16, maxLevel: 22, chance: 15 },
						{ name: 'rattata', minLevel: 16, maxLevel: 18, chance: 15 },
						{ name: 'geodude', minLevel: 17, maxLevel: 18, chance: 15 },
						{ name: 'marill', minLevel: 16, maxLevel: 20, chance: 15 },
						{ name: 'raticate', minLevel: 17, maxLevel: 22, chance: 15 },
						{ name: 'tyrogue', minLevel: 18, maxLevel: 20, chance: 3 },
			            { name: 'shuckle', minLevel: 18, maxLevel: 20, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'mtMortar-3'
			        }
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 10.5, y: 6.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-5',
					sound: 'stairs'
				},
			},
		}
	},
	'mtMortar-5': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-5.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 10.5, y: 5.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-4',
					sound: 'stairs'
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 12.8, y: 0 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'golbat', minLevel: 28, maxLevel: 33, chance: 20 },
						{ name: 'graveler', minLevel: 29, maxLevel: 31, chance: 20 },
						{ name: 'machoke', minLevel: 28, maxLevel: 30, chance: 20 },
						{ name: 'zubat', minLevel: 27, maxLevel: 30, chance: 10 }, 
						{ name: 'machop', minLevel: 29, maxLevel: 32, chance: 10 },
						{ name: 'geodude', minLevel: 26, maxLevel: 34, chance: 10 },
						{ name: 'raticate', minLevel: 28, maxLevel: 30, chance: 5 },
			            { name: 'shuckle', minLevel: 28, maxLevel: 32, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'mtMortar-9'
			        }
				},
			},
			route42: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 9, y: 12},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route42-2'
				},
			},
		}
	},
	'mtMortar-6': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-6.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 11.8, y: 15},
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-3'
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 0, y: 5.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-7'
				},
			},
		}
	},
	'mtMortar-7': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-7.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 22, y: 5.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-6'
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 18.5, y: 5.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-8',
					sound: 'stairs'
				},
			},
		}
	},
	'mtMortar-8': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-8.png",
		song: "unionCave",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 5},
				size: { w: 8, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
					background: './assets/images/background/battle8.png',
					pokemon: [  
						{ name: 'zubat', minLevel: 17, maxLevel: 20, chance: 20 }, 
						{ name: 'tyrogue', minLevel: 18, maxLevel: 20, chance: 20 },
						{ name: 'machop', minLevel: 16, maxLevel: 22, chance: 15 },
						{ name: 'geodude', minLevel: 17, maxLevel: 18, chance: 15 },
						{ name: 'marill', minLevel: 16, maxLevel: 20, chance: 10 },
						{ name: 'rattata', minLevel: 16, maxLevel: 18, chance: 10 },
			            { name: 'golbat', minLevel: 17, maxLevel: 20, chance: 5 },
			            { name: 'shuckle', minLevel: 18, maxLevel: 20, chance: 5 },
			        ],
				},
			},
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 18.5, y: 4.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-7',
					sound: 'stairs'
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 5.8, y: 16 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-1',
					sound: 'jump1'
				},
			},
		}
	},
	'mtMortar-9': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-9.png",
		song: "unionCave",
		worldEvent: {
			mtMortarA: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 12.8, y: 16 },
				size: { w: 2.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'golbat', minLevel: 28, maxLevel: 33, chance: 20 },
						{ name: 'graveler', minLevel: 29, maxLevel: 31, chance: 20 },
						{ name: 'machoke', minLevel: 28, maxLevel: 30, chance: 20 },
						{ name: 'zubat', minLevel: 27, maxLevel: 30, chance: 10 }, 
						{ name: 'machop', minLevel: 29, maxLevel: 32, chance: 10 },
						{ name: 'geodude', minLevel: 26, maxLevel: 34, chance: 10 },
						{ name: 'raticate', minLevel: 28, maxLevel: 30, chance: 5 },
			            { name: 'shuckle', minLevel: 28, maxLevel: 32, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'mtMortar-5'
			        }
				},
			},
			mtMortarB: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 16, y: 2 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-10'
				},
			},
		}
	},
	'mtMortar-10': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-10.png",
		song: "unionCave",
		worldEvent: {
			raikou: {
				name: ['Raikou', 'Raikou', '雷公'], 
				position: { x: 11.5, y: 5.5 },
				size: { w: 2, h: 2 },
				event: {
					image: './assets/images/pokemon/sprite/raikou.png',
					type: 'dialogue',
					npc: 'raikou'
				},
			},
			mtMortar: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 11, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-9'
				},
			},
		}
	},
	'mtMortar-10bis': {
		name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'],
		background: "assets/images/map/johto/cave/mtMortar-10.png",
		song: "unionCave",
		worldEvent: {
			mtMortar: {
				name: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
				position: { x: 11, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMortar-9'
				},
			},
		}
	},
	'route43-1': {
		name: ['Route 43', 'Ruta 43', '43号道路'],
		background: "assets/images/map/johto/route/route43-1.png",
		song: "route42",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 18, y: 8 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'smallHouseRoute43',
					tw: false
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 9},
				size: { w: 4, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 43', 'Ruta 43', '43号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			            { name: 'flaaffy', minLevel: 20, maxLevel: 22, chance: 15 },
			            { name: 'girafarig', minLevel: 21, maxLevel: 23, chance: 15 },
			           	{ name: 'pidgeotto', minLevel: 22, maxLevel: 24, chance: 15 },
			           	{ name: 'venonat', minLevel: 20, maxLevel: 22, chance: 15 },
			            { name: 'ponyta', minLevel: 21, maxLevel: 24, chance: 10 },
			           	{ name: 'noctowl', minLevel: 20, maxLevel: 23, chance: 10 },
			           	{ name: 'furret', minLevel: 19, maxLevel: 24, chance: 10 },
			           	{ name: 'farfetchd', minLevel: 20, maxLevel: 25, chance: 7 },
			           	{ name: 'smeargle', minLevel: 21, maxLevel: 24, chance: 3 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 19, y: 2},
				size: { w: 4, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 43', 'Ruta 43', '43号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'venonat', minLevel: 20, maxLevel: 22, chance: 20 },
			            { name: 'ponyta', minLevel: 21, maxLevel: 23, chance: 20 },
			           	{ name: 'furret', minLevel: 19, maxLevel: 21, chance: 20 },
			            { name: 'flaaffy', minLevel: 18, maxLevel: 23, chance: 10 },
			            { name: 'girafarig', minLevel: 20, maxLevel: 22, chance: 10 },
			           	{ name: 'pidgeotto', minLevel: 21, maxLevel: 25, chance: 10 },
			           	{ name: 'doduo', minLevel: 20, maxLevel: 22, chance: 8 },
			           	{ name: 'smeargle', minLevel: 18, maxLevel: 24, chance: 2 },
			        ],
				},
			},
			mahoganyTown: {
				name: ['Mahogany Town', 'Pueblo Caoba', '卡吉镇'], 
				position: { x: 9.8, y: 16},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'mahoganyTown'
				},
			},
			route43: {
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 12.4, y: 0},
				size: { w: 4.2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route43-2'
				},
			},
		}
	},
	'route43-2': {
		name: ['Route 43', 'Ruta 43', '43号道路'],
		background: "assets/images/map/johto/route/route43-2.png",
		song: "route42",
		worldEvent: {
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 2, y: 4},
				size: { w: 6, h: 10 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle16.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 15, maxLevel: 20, chance: 50 }, 
						{ name: 'krabby', minLevel: 20, maxLevel: 23, chance: 11 },
			            { name: 'slowpoke', minLevel: 19, maxLevel: 21, chance: 11 },
			            { name: 'shellder', minLevel: 22, maxLevel: 25, chance: 11 },
			            { name: 'chinchou', minLevel: 17, maxLevel: 22, chance: 11 },
			            { name: 'horsea', minLevel: 21, maxLevel: 24, chance: 6 },
			        ],
				},
			},	
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 5},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute43',
					tw: false
				},
			},
			route43A: {
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 12.4, y: 16},
				size: { w: 4.2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route43-1'
				},
			},
			route43B: {
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 17.7, y: 0},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 43', 'Ruta 43', '43号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
			           	{ name: 'doduo', minLevel: 19, maxLevel: 21, chance: 20 },
						{ name: 'venonat', minLevel: 20, maxLevel: 22, chance: 15 },
			            { name: 'ponyta', minLevel: 21, maxLevel: 23, chance: 15 },
			            { name: 'flaaffy', minLevel: 18, maxLevel: 23, chance: 10 },
			            { name: 'girafarig', minLevel: 20, maxLevel: 22, chance: 10 },
			           	{ name: 'pidgeotto', minLevel: 21, maxLevel: 25, chance: 10 },
			           	{ name: 'noctowl', minLevel: 20, maxLevel: 23, chance: 10 },
			           	{ name: 'farfetchd', minLevel: 20, maxLevel: 22, chance: 5 },
			           	{ name: 'smeargle', minLevel: 18, maxLevel: 24, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route43-3'
			        }
				},
			},
		}
	},
	'route43-3': {
		name: ['Route 43', 'Ruta 43', '43号道路'],
		background: "assets/images/map/johto/route/route43-3.png",
		song: "route42",
		worldEvent: {
			moveDeleterHouse: {
				name: [`Move Deleter House`, `Casa del Quita-movimientos`, `招式遗忘之家`],
				position: { x: 4, y: 5.5},
				size: { w: 5, h: 4.5},
				event: {
					type: 'moveDeleter',
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 9, y: 9},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signboardRoute43',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 1},
				size: { w: 6, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 43', 'Ruta 43', '43号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			           	{ name: 'venonat', minLevel: 20, maxLevel: 22, chance: 25 },
			            { name: 'ponyta', minLevel: 19, maxLevel: 20, chance: 15 },
			           	{ name: 'noctowl', minLevel: 22, maxLevel: 24, chance: 15 },
			           	{ name: 'furret', minLevel: 20, maxLevel: 23, chance: 13 },
			            { name: 'flaaffy', minLevel: 21, maxLevel: 22, chance: 10 },
			            { name: 'girafarig', minLevel: 18, maxLevel: 22, chance: 10 },
			           	{ name: 'farfetchd', minLevel: 19, maxLevel: 23, chance: 8 },
			           	{ name: 'smeargle', minLevel: 20, maxLevel: 22, chance: 4 },
			        ],
				},
			},
			route43: {
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 17.7, y: 15},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 43', 'Ruta 43', '43号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'venonat', minLevel: 20, maxLevel: 22, chance: 15 },
			            { name: 'ponyta', minLevel: 21, maxLevel: 23, chance: 15 },
			           	{ name: 'doduo', minLevel: 19, maxLevel: 21, chance: 15 },
			            { name: 'flaaffy', minLevel: 18, maxLevel: 23, chance: 15 },
			            { name: 'girafarig', minLevel: 20, maxLevel: 22, chance: 10 },
			           	{ name: 'pidgeotto', minLevel: 21, maxLevel: 25, chance: 10 },
			           	{ name: 'noctowl', minLevel: 20, maxLevel: 23, chance: 10 },
			           	{ name: 'farfetchd', minLevel: 20, maxLevel: 22, chance: 5 },
			           	{ name: 'smeargle', minLevel: 18, maxLevel: 24, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route43-2'
			        }
				},
			},
			lakeOfRage: { 
				name: ['Lake of Rage', 'Lago de la Furia', '愤怒之湖'], 
				position: { x: 9.7, y: 0},
				size: { w: 5.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'lakeOfRage-1'
				},
			},
		}
	},
	'lakeOfRage-1': {
		name: ['Lake of Rage', 'Lago de la Furia', '愤怒之湖'],
		background: "assets/images/map/johto/route/lakeOfRage-1.png",
		song: "route42",
		worldEvent: {
			route43: { 
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 9.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route43-3'
				},
			},
			redGyarados: {
				name: ['Red Gyarados', 'Gyarados Rojo', '红色暴鲤龙'], 
				position: { x: 11, y: 8 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite-shiny/gyarados.png',
					type: 'dialogue',
					npc: 'redGyarados'
				},
			}
		}
	},
	'lakeOfRage-1bis': {
		name: ['Lake of Rage', 'Lago de la Furia', '愤怒之湖'],
		background: "assets/images/map/johto/route/lakeOfRage-1.png",
		song: "route42",
		worldEvent: {
			route43: { 
				name: ['Route 43', 'Ruta 43', '43号道路'], 
				position: { x: 9.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route43-3'
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 4, y: 4 },
				size: { w: 17, h: 11 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 30', 'Ruta 30', '30号道路'],
					background: './assets/images/background/battle12.png',
					pokemon: [ 
						{ name: 'magikarp', minLevel: 25, maxLevel: 28, chance: 80 },
			            { name: 'gyarados', minLevel: 27, maxLevel: 30, chance: 20 },
			        ],
				},
			},
		}
	},
	'route44-1': {
		name: ['Route 44', 'Ruta 44', '44号道路'],
		background: "assets/images/map/johto/route/route44-1.png",
		song: "route42",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 3},
				size: { w: 16, h: 3},
				event: {
					type: 'routeBattle',
					title: ['Route 44', 'Ruta 44', '44号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
			           	{ name: 'weepinbell', minLevel: 44, maxLevel: 46, chance: 30 },
			           	{ name: 'tangela', minLevel: 43, maxLevel: 45, chance: 30 },
			           	{ name: 'lickitung', minLevel: 42, maxLevel: 45, chance: 17 },
			           	{ name: 'bellsprout', minLevel: 41, maxLevel: 46, chance: 17 },
			           	{ name: 'rhyhorn', minLevel: 40, maxLevel: 43, chance: 6 },
			        ],
				},
			},
			mahoganyTown: {
				name: ['Mahogany Town', 'Pueblo Caoba', '卡吉镇'], 
				position: { x: 0, y: 5.8},
				size: { w: 2, h: 3.7 },
				event: {
					type: 'travelCity',
					location: 'mahoganyTown'
				},
			},
			route44A: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 23, y: 6.8 },
				size: { w: 2, h: 2.6 },
				event: {
					type: 'travelRoute',
					location: 'route44-2'
				},
			},
			route44B: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 23, y: 12.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route44-2'
				},
			},
		}
	},
	'route44-2': {
		name: ['Route 44', 'Ruta 44', '44号道路'],
		background: "assets/images/map/johto/route/route44-2.png",
		song: "route42",
		worldEvent: {
			route44A: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 2.6 },
				event: {
					type: 'travelRoute',
					location: 'route44-1'
				},
			},
			route44B: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
					position: { x: 0, y: 12.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route44-1'
				},
			},
			route44C: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
			    position: { x: 22, y: 5.9 },
				size: { w: 3, h: 6.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 44', 'Ruta 44', '44号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
					    { name: 'weepinbell', minLevel: 41, maxLevel: 45, chance: 27 },
			           	{ name: 'tangela', minLevel: 42, maxLevel: 44, chance: 27 },
			           	{ name: 'lickitung', minLevel: 41, maxLevel: 45, chance: 19 },
			           	{ name: 'bellsprout', minLevel: 40, maxLevel: 46, chance: 19 },
			           	{ name: 'rhyhorn', minLevel: 42, maxLevel: 45, chance: 8 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route44-3'
			        }
				},
			},
		}
	},
	'route44-3': {
		name: ['Route 44', 'Ruta 44', '44号道路'],
		background: "assets/images/map/johto/route/route44-3.png",
		song: "route42",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 9 },
				size: { w: 6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 44', 'Ruta 44', '44号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
			           	{ name: 'lickitung', minLevel: 42, maxLevel: 45, chance: 30 },
			           	{ name: 'bellsprout', minLevel: 44, maxLevel: 46, chance: 27 },
			           	{ name: 'weepinbell', minLevel: 42, maxLevel: 44, chance: 19 },
			           	{ name: 'tangela', minLevel: 43, maxLevel: 45, chance: 19 },
			           	{ name: 'rhyhorn', minLevel: 41, maxLevel: 44, chance: 5 },
			        ],
				},
			},
			route44A: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 0, y: 5.9 },
				size: { w: 3, h: 6.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 44', 'Ruta 44', '44号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'weepinbell', minLevel: 41, maxLevel: 45, chance: 27 },
			           	{ name: 'tangela', minLevel: 42, maxLevel: 44, chance: 27 },
			           	{ name: 'lickitung', minLevel: 41, maxLevel: 45, chance: 19 },
			           	{ name: 'bellsprout', minLevel: 40, maxLevel: 46, chance: 19 },
			           	{ name: 'rhyhorn', minLevel: 42, maxLevel: 45, chance: 8 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route44-2'
			        }
				},
			},
			route44B: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 17, y: 0},
				size: { w: 3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route44-4'
				},
			},
		}
	},
	'route44-4': {
		name: ['Route 44', 'Ruta 44', '44号道路'],
		background: "assets/images/map/johto/route/route44-4.png",
		song: "route42",
		worldEvent: {
			route44: {
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 17, y: 15},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route44-3'
				},
			},
			icePath: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 13, y: 2},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-1'
				},
			},
		}
	},
	'icePath-1': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-1.png",
		song: "icePath",
		worldEvent: {
			route44: { 
				name: ['Route 44', 'Ruta 44', '44号道路'], 
				position: { x: 8, y: 12},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route44-4'
				},
			},
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 22.5, y: 3},
				size: { w: 2.5, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-2'
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 6.9, y: 0},
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'swinub', minLevel: 44, maxLevel: 47, chance: 40 },
			           	{ name: 'golbat', minLevel: 42, maxLevel: 46, chance: 22 },
			            { name: 'zubat', minLevel: 43, maxLevel: 47, chance: 15 },
			            { name: 'delibird', minLevel: 44, maxLevel: 48, chance: 10 },
			            { name: 'jynx', minLevel: 42, maxLevel: 46, chance: 10 },
			            { name: 'sneasel', minLevel: 43, maxLevel: 45, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'icePath-3'
			        }
				},
			},
		}
	},
	'icePath-2': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-2.png",
		song: "icePath",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 11},
				size: { w: 7, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'],
					background: './assets/images/background/battle4.png',
					pokemon: [  
			            { name: 'swinub', minLevel: 40, maxLevel: 43, chance: 40 },
			           	{ name: 'golbat', minLevel: 42, maxLevel: 45, chance: 22 },
			            { name: 'zubat', minLevel: 43, maxLevel: 44, chance: 15 },
			            { name: 'delibird', minLevel: 40, maxLevel: 45, chance: 10 },
			            { name: 'jynx', minLevel: 41, maxLevel: 46, chance: 10 },
			            { name: 'sneasel', minLevel: 42, maxLevel: 45, chance: 3 },
			        ],
				},
			},
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 0, y: 3},
				size: { w: 2.5, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-1'
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 14.9, y: 0},
				size: { w: 2.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-4'
				},
			},
			icePathC: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 23, y: 11},
				size: { w: 3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-5'
				},
			},
			icePathD: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 17.5, y: 4.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-7',
					sound: 'stairs'
				},
			},
		}
	},
	'icePath-3': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-3.png",
		song: "icePath",
		worldEvent: {
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 6.9, y: 16},
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'swinub', minLevel: 44, maxLevel: 47, chance: 40 },
			           	{ name: 'golbat', minLevel: 42, maxLevel: 46, chance: 22 },
			            { name: 'zubat', minLevel: 43, maxLevel: 47, chance: 15 },
			            { name: 'delibird', minLevel: 44, maxLevel: 48, chance: 10 },
			            { name: 'jynx', minLevel: 42, maxLevel: 46, chance: 10 },
			            { name: 'sneasel', minLevel: 43, maxLevel: 45, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'icePath-1'
			        }
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 12.5, y: 5.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-8',
					sound: 'stairs'
				},
			},
			icePathC: {
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 22, y: 7},
				size: { w: 3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'swinub', minLevel: 42, maxLevel: 46, chance: 39 },
			           	{ name: 'golbat', minLevel: 44, maxLevel: 45, chance: 39 },
			            { name: 'delibird', minLevel: 40, maxLevel: 43, chance: 10 },
			            { name: 'jynx', minLevel: 42, maxLevel: 45, chance: 6 },
			            { name: 'sneasel', minLevel: 42, maxLevel: 46, chance: 3 },
			            { name: 'steelix', minLevel: 42, maxLevel: 44, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 9], 
			        	location: 'icePath-4'
			        }
				},
			},
		}
	},
	'icePath-4': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-4.png",
		song: "icePath",
		worldEvent: {
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 0, y: 7},
				size: { w: 2, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'swinub', minLevel: 42, maxLevel: 46, chance: 39 },
			           	{ name: 'golbat', minLevel: 44, maxLevel: 45, chance: 39 },
			            { name: 'delibird', minLevel: 40, maxLevel: 43, chance: 10 },
			            { name: 'jynx', minLevel: 42, maxLevel: 45, chance: 6 },
			            { name: 'sneasel', minLevel: 42, maxLevel: 46, chance: 3 },
			            { name: 'steelix', minLevel: 42, maxLevel: 44, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 9], 
			        	location: 'icePath-3'
			        }
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 14.9, y: 16},
				size: { w: 2.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-2'
				},
			},
			icePathC: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 16.5, y: 3.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-11',
					sound: 'stairs'
				},
			},
		}
	},
	'icePath-5': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-5.png",
		song: "icePath",
		worldEvent: {
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 0, y: 11},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-2'
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 22, y: 11},
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 42, maxLevel: 45, chance: 30 },
			           	{ name: 'golbat', minLevel: 41, maxLevel: 46, chance: 30 },
			           	{ name: 'onix', minLevel: 44, maxLevel: 48, chance: 18 },
			            { name: 'delibird', minLevel: 42, maxLevel: 48, chance: 10 },
			            { name: 'jynx', minLevel: 41, maxLevel: 44, chance: 6 },
			            { name: 'sneasel', minLevel: 42, maxLevel: 45, chance: 3 },
			            { name: 'steelix', minLevel: 42, maxLevel: 44, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'icePath-6'
			        }
				},
			},
		}
	},
	'icePath-6': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-6.png",
		song: "icePath",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 19, y: 3},
				size: { w: 3, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'],
					background: './assets/images/background/battle4.png',
					pokemon: [  
			            { name: 'swinub', minLevel: 42, maxLevel: 44, chance: 39 },
			           	{ name: 'golbat', minLevel: 43, maxLevel: 45, chance: 39 },
			            { name: 'delibird', minLevel: 42, maxLevel: 48, chance: 10 },
			            { name: 'jynx', minLevel: 41, maxLevel: 47, chance: 6 },
			            { name: 'sneasel', minLevel: 42, maxLevel: 46, chance: 3 },
			            { name: 'steelix', minLevel: 43, maxLevel: 45, chance: 3 },
			        ],
				},
			},
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 0, y: 11},
				size: { w: 2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 42, maxLevel: 45, chance: 30 },
			           	{ name: 'golbat', minLevel: 41, maxLevel: 46, chance: 30 },
			           	{ name: 'onix', minLevel: 44, maxLevel: 48, chance: 18 },
			            { name: 'delibird', minLevel: 42, maxLevel: 48, chance: 10 },
			            { name: 'jynx', minLevel: 41, maxLevel: 44, chance: 6 },
			            { name: 'sneasel', minLevel: 42, maxLevel: 45, chance: 3 },
			            { name: 'steelix', minLevel: 42, maxLevel: 44, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'icePath-5'
			        }
				},
			},
			icePathB: {
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 11.9, y: 0 },
				size: { w: 4.3, h: 5.5 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'icePath-12',
					sound: 'water1'
				},
			},
		}
	},
	'icePath-7': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-7.png",
		song: "icePath",
		worldEvent: {
			icePath: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 17.5, y: 4.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'icePath-2',
					sound: 'stairs'
				},
			},
		}
	},
	'icePath-8': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-8.png",
		song: "icePath",
		worldEvent: {
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 16.9, y: 0},
				size: { w: 2.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 42, maxLevel: 47, chance: 30 },
			           	{ name: 'golbat', minLevel: 43, maxLevel: 47, chance: 30 },
			           	{ name: 'onix', minLevel: 44, maxLevel: 45, chance: 10 },
			            { name: 'delibird', minLevel: 42, maxLevel: 48, chance: 10 },
			            { name: 'sneasel', minLevel: 43, maxLevel: 45, chance: 8 },
			            { name: 'steelix', minLevel: 45, maxLevel: 46, chance: 8 },
			            { name: 'jynx', minLevel: 45, maxLevel: 46, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'icePath-9'
			        }
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 12.5, y: 5.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-3',
					sound: 'stairs'
				},
			},
		}
	},
	'icePath-9': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-9.png",
		song: "icePath",
		worldEvent: {
			icePathA: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 16.9, y: 16},
				size: { w: 2.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 42, maxLevel: 47, chance: 30 },
			           	{ name: 'golbat', minLevel: 43, maxLevel: 47, chance: 30 },
			           	{ name: 'onix', minLevel: 44, maxLevel: 45, chance: 10 },
			            { name: 'delibird', minLevel: 42, maxLevel: 48, chance: 10 },
			            { name: 'sneasel', minLevel: 43, maxLevel: 45, chance: 8 },
			            { name: 'steelix', minLevel: 45, maxLevel: 46, chance: 8 },
			            { name: 'jynx', minLevel: 45, maxLevel: 46, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'icePath-8'
			        }
				},
			},
			icePathB: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
				position: { x: 23, y: 11},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-10'
				},
			},
		}
	},
	'icePath-10': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-10.png",
		song: "icePath",
		worldEvent: {
			icePath: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
				position: { x: 0, y: 11},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-9'
				},
			},
			blackthornCity: { 
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'],
				position: { x: 17, y: 13},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-1'
				},
			},
		}
	},
	'icePath-11': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-11.png",
		song: "icePath",
		worldEvent: {
			icePath: { 
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 16.5, y: 3.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'icePath-4',
					sound: 'stairs'
				},
			},
		}
	},
	'icePath-12': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-12.png",
		song: "icePath",
		worldEvent: {
			suicune: {
				name: ['Suicune', 'Suicune', '水君'], 
				position: { x: 13, y: 6 },
				size: { w: 2, h: 2 },
				event: {
					image: './assets/images/pokemon/sprite/suicune.png',
					type: 'dialogue',
					npc: 'suicune'
				},
			},
			icePath: {
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 11.9, y: 15 },
				size: { w: 4.3, h: 3 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'icePath-6',
					sound: 'water1'
				},
			},
		}
	},
	'icePath-12bis': {
		name: ['Ice Path', 'Ruta Helada', '冰雪小径'],
		background: "assets/images/map/johto/cave/icePath-12.png",
		song: "icePath",
		worldEvent: {
			icePath: {
				name: ['Ice Path', 'Ruta Helada', '冰雪小径'], 
				position: { x: 11.9, y: 15 },
				size: { w: 4.3, h: 3 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'icePath-6',
					sound: 'water1'
				},
			},
		}
	},
	'solarSanctuary-1': {
		name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
		background: "assets/images/map/johto/cave/solarSanctuary-1.png",
		song: "icePath",
		worldEvent: {
			blackthornCity: { 
				name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
				position: { x: 11, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'blackthornCliff-1'
				},
			},
			solarSanctuary: { 
				name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
				position: { x: 11.5, y: 0.75},
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'solarSanctuary-2',
					sound: 'stairs'
				},
			},
		}
	},
	'solarSanctuary-1bis': {
		name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
		background: "assets/images/map/johto/cave/solarSanctuary-1.png",
		song: "icePath",
		worldEvent: {
			blackthornCity: { 
				name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
				position: { x: 11, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'blackthornCliff-1'
				},
			},
			solarSanctuary: { 
				name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
				position: { x: 11.5, y: 0.75},
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'solarSanctuary-2',
					sound: 'stairs'
				},
			},
			latias: {
				name: ['Latias', 'Latias', '拉帝亚斯'], 
				position: { x: 11, y: 7 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/latias.png',
					type: 'dialogue',
					npc: 'latias'
				},
			},

		}
	},
	'solarSanctuary-1bisB': {
		name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
		background: "assets/images/map/johto/cave/solarSanctuary-1.png",
		song: "icePath",
		worldEvent: {
			blackthornCity: { 
				name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
				position: { x: 11, y: 14},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'blackthornCliff-1'
				},
			},
			solarSanctuary: { 
				name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
				position: { x: 11.5, y: 0.75},
				size: { w: 2, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'solarSanctuary-2',
					sound: 'stairs'
				},
			},
		}
	},
	'solarSanctuary-2': {
		name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
		background: "assets/images/map/johto/cave/solarSanctuary-2.png",
		song: "icePath",
		worldEvent: {
			solarSanctuary: { 
				name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
				position: { x: 11.5, y: 1.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'solarSanctuary-1',
					sound: 'stairs'
				},
			},
			buttonA: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 10, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 196,
				},
			},
			buttonB: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 9, y: 7},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 338,
				},
			},
			buttonC: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 6, y: 8},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 192,
				},
			},
			buttonD: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 11, y: 9},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 182,
				},
			},
			buttonE: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 10, y: 10},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 357,
				},
			},
			buttonF: { 
				name: ['Button', 'Botón', '按钮'],
				position: { x: 10, y: 12},
				size: { w: 1, h: 1 },
				event: {
					type: 'cry',
					n: 178,
				},
			},
		}
	},
	'blackthornCliff-1': {
		name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
		background: "assets/images/map/johto/route/blackthornCliff-1.png",
		song: "azaleaTown",
		worldEvent: {
			solarSanctuary: { 
				name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
				position: { x: 8, y: 7},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'solarSanctuary-1'
				},
			},
			blackthornCity: {
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 23, y: 7.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-2'
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 12, y: 15 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'blackthornCliff-1',
					newLocation: 'blackthornCliff-1bis',
				},
			},
		}
	},
	'blackthornCliff-1bis': {
		name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
		background: "assets/images/map/johto/route/blackthornCliff-1bis.png",
		song: "azaleaTown",
		worldEvent: {
			solarSanctuary: { 
				name: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'],
				position: { x: 8, y: 7},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'solarSanctuary-1'
				},
			},
			blackthornCity: {
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 23, y: 7.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-2'
				},
			},
			blackthornCliff: {
				name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
				position: { x: 9.7, y: 15.9 },
				size: { w: 5.6, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'blackthornCliff-2'
				},
			},
		}
	},
	'blackthornCliff-2': {
		name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
		background: "assets/images/map/johto/route/blackthornCliff-2.png",
		song: "azaleaTown",
		worldEvent: {
			blackthornCliff: {
				name: ['Blackthorn Cliff', 'Acantilado Endrino', '烟墨崖'],
				position: { x: 9.7, y: 0 },
				size: { w: 5.6, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'blackthornCliff-1'
				},
			},
			smallHouseA: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 4 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'ornithologistBlackthornCliff'
				},
			},
			smallHouseB: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 5, y: 8 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'hunterBlackthornCliff'
				},
			},
			smallHouseC: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 15, y: 10 },
				size: { w: 5, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'poetBlackthornCliff'
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 7, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signBlackthornCliff',
					tw: false
				},
			},	
		}
	},
	'route45-1': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-1.png",
		song: "route34",
		worldEvent: {
			route45: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 12, y: 15},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route45-2'
				},
			},
			blackthornCity: { 
				name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'], 
				position: { x: 0, y: 5.8},
				size: { w: 3, h: 3.8 },
				event: {
					type: 'travelCity',
					location: 'blackthornCity-3'
				},
			},
		}
	},
	'route45-2': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-2.png",
		song: "route34",
		worldEvent: {
			route45A: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 12, y: 0},
				size: { w: 3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route45-1'
				},
			},
			route45B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 6, y: 16},
				size: { w: 5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'wigglytuff', minLevel: 45, maxLevel: 51, chance: 30 },
			           	{ name: 'chansey', minLevel: 48, maxLevel: 52, chance: 25 },
			           	{ name: 'graveler', minLevel: 49, maxLevel: 53, chance: 17 },
			           	{ name: 'phanpy', minLevel: 50, maxLevel: 52, chance: 17 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 6 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 52, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route45-3'
			        }
				},
			},
		}
	},
	'route45-3': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-3.png",
		song: "route34",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 13, y: 4},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute45',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 17, y: 8},
				size: { w: 6, h: 4},
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'],
					background: './assets/images/background/battle17.png',
					pokemon: [  
			           	{ name: 'golbat', minLevel: 48, maxLevel: 53, chance: 30 },
			           	{ name: 'teddiursa', minLevel: 50, maxLevel: 52, chance: 25 },
			           	{ name: 'sunflora', minLevel: 48, maxLevel: 54, chance: 15 },
			           	{ name: 'phanpy', minLevel: 49, maxLevel: 55, chance: 15 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 10 },
			           	{ name: 'skarmory', minLevel: 48, maxLevel: 53, chance: 5 },
			        ],
				},
			},
			route45A: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 6, y: 0},
				size: { w: 5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'wigglytuff', minLevel: 45, maxLevel: 51, chance: 30 },
			           	{ name: 'chansey', minLevel: 48, maxLevel: 52, chance: 25 },
			           	{ name: 'graveler', minLevel: 49, maxLevel: 53, chance: 17 },
			           	{ name: 'phanpy', minLevel: 50, maxLevel: 52, chance: 17 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 6 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 52, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route45-2'
			        }
				},
			},
			route45B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 0, y: 11.8 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'noctowl', minLevel: 49, maxLevel: 55, chance: 30 },
			           	{ name: 'pidgeot', minLevel: 50, maxLevel: 54, chance: 26 },
			           	{ name: 'graveler', minLevel: 51, maxLevel: 53, chance: 17 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 17 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 52, chance: 5 },
			           	{ name: 'clefairy', minLevel: 49, maxLevel: 53, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route45-4'
			        }
				},
			},
			route45C: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 11.7 , y: 15 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'girafarig', minLevel: 48, maxLevel: 53, chance: 30 },
			           	{ name: 'xatu', minLevel: 47, maxLevel: 52, chance: 26 },
			           	{ name: 'dodrio', minLevel: 49, maxLevel: 54, chance: 17 },
			           	{ name: 'gligar', minLevel: 50, maxLevel: 54, chance: 17 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 53, chance: 5 },
			           	{ name: 'chansey', minLevel: 50, maxLevel: 52, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route45-6'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 19, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route45HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route45-4': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-4.png",
		song: "route34",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 16, y: 8 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'hikerRoute45'
				},
			},
			route45A: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 22, y: 11.8 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'noctowl', minLevel: 49, maxLevel: 55, chance: 30 },
			           	{ name: 'pidgeot', minLevel: 50, maxLevel: 54, chance: 26 },
			           	{ name: 'graveler', minLevel: 51, maxLevel: 53, chance: 17 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 17 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 52, chance: 5 },
			           	{ name: 'clefairy', minLevel: 49, maxLevel: 53, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route45-3'
			        }
				},
			},
			route45B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 12.4, y: 15.8},
				size: { w: 5.2, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'fearow', minLevel: 50, maxLevel: 54, chance: 30 },
			           	{ name: 'primeape', minLevel: 48, maxLevel: 55, chance: 26 },
			           	{ name: 'graveler', minLevel: 49, maxLevel: 55, chance: 17 },
			           	{ name: 'gligar', minLevel: 48, maxLevel: 54, chance: 17 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 53, chance: 5 },
			           	{ name: 'clefairy', minLevel: 50, maxLevel: 52, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'route45-5'
			        }
				},
			},
		}
	},
	'route45-5': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-5.png",
		song: "route34",
		worldEvent: {
			route45: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 12.4, y: 0},
				size: { w: 5.2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
					{ name: 'fearow', minLevel: 50, maxLevel: 54, chance: 30 },
			           	{ name: 'primeape', minLevel: 48, maxLevel: 55, chance: 26 },
			           	{ name: 'graveler', minLevel: 49, maxLevel: 55, chance: 17 },
			           	{ name: 'gligar', minLevel: 48, maxLevel: 54, chance: 17 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 53, chance: 5 },
			           	{ name: 'clefairy', minLevel: 50, maxLevel: 52, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'route45-4'
			        }
				},
			},
			apacheta: { 
				name: ['Apacheta', 'Apacheta', '阿帕切塔'], 
				position: { x: 13.75, y: 6.75 },
				size: { w: 2.5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'apachetaJohto',
					tw: false
				},
			},
		}
	},
	'route45-6': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-6.png",
		song: "route34",
		worldEvent: {
			route45A: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 11.7, y: 0},
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'], 
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'girafarig', minLevel: 48, maxLevel: 53, chance: 30 },
			           	{ name: 'xatu', minLevel: 47, maxLevel: 52, chance: 26 },
			           	{ name: 'dodrio', minLevel: 49, maxLevel: 54, chance: 17 },
			           	{ name: 'gligar', minLevel: 50, maxLevel: 54, chance: 17 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 53, chance: 5 },
			           	{ name: 'chansey', minLevel: 50, maxLevel: 52, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route45-3'
			        }
				},
			},
			route45B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 5.7, y: 15},
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route45-7'
				},
			},
		}
	},
	'route45-7': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-7.png",
		song: "route34",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 19, y: 6},
				size: { w: 4, h: 10},
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			            { name: 'geodude', minLevel: 48, maxLevel: 55, chance: 19 },
			           	{ name: 'teddiursa', minLevel: 49, maxLevel: 54, chance: 19 },
			           	{ name: 'graveler', minLevel: 47, maxLevel: 53, chance: 14 },
			           	{ name: 'phanpy', minLevel: 48, maxLevel: 55, chance: 14 },
			           	{ name: 'aipom', minLevel: 50, maxLevel: 54, chance: 12 },
			           	{ name: 'gligar', minLevel: 50, maxLevel: 55, chance: 12 },
			           	{ name: 'donphan', minLevel: 51, maxLevel: 54, chance: 6 },
			           	{ name: 'skarmory', minLevel: 52, maxLevel: 55, chance: 4 },
			        ],
				},
			},
			route45A: {
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 5.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route45-6'
				},
			},
			route45B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 0, y: 7.8 },
				size: { w: 3, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route45-8'
				},
			},
		}
	},
	'route45-8': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-8.png",
		song: "route34",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 12 },
				size: { w: 9, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			           	{ name: 'sunflora', minLevel: 49, maxLevel: 52, chance: 18 },
			           	{ name: 'weepinbell', minLevel: 50, maxLevel: 54, chance: 18 },
			           	{ name: 'gligar', minLevel: 50, maxLevel: 53, chance: 15 },
			           	{ name: 'aipom', minLevel: 48, maxLevel: 55, chance: 15 },
			           	{ name: 'granbull', minLevel: 49, maxLevel: 55, chance: 10 },
			           	{ name: 'graveler', minLevel: 51, maxLevel: 53, chance: 10 },
			           	{ name: 'donphan', minLevel: 52, maxLevel: 54, chance: 9 },
			           	{ name: 'skarmory', minLevel: 52, maxLevel: 55, chance: 5 },
			        ],
				},
			},
			route45A: {
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 23, y: 7.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route45-7'
				},
			},
			route45B: { 
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 0, y: 9.8 },
				size: { w: 3, h: 3.4},
				event: {
					type: 'travelRoute',
					location: 'route45-9'
				},
			},
			box: {
				name: [`Box`, `Caja`, `箱子`],
				position: { x: 12, y: 3},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'boxRoute45',
					tw: false
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 16, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute45B',
					tw: false
				},
			},
		}
	},
	'route45-9': {
		name: ['Route 45', 'Ruta 45', '45号道路'],
		background: "assets/images/map/johto/route/route45-9.png",
		song: "route34",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 4},
				size: { w: 8, h: 7},
				event: {
					type: 'routeBattle',
					title: ['Route 45', 'Ruta 45', '45号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
			            { name: 'sunflora', minLevel: 50, maxLevel: 54, chance: 18 },
			           	{ name: 'weepinbell', minLevel: 49, maxLevel: 53, chance: 18 },
			           	{ name: 'bellossom', minLevel: 48, maxLevel: 52, chance: 15 },
			           	{ name: 'gligar', minLevel: 50, maxLevel: 54, chance: 15 },
			           	{ name: 'jumpluff', minLevel: 51, maxLevel: 53, chance: 10 },
			           	{ name: 'granbull', minLevel: 51, maxLevel: 55, chance: 10 },
			           	{ name: 'donphan', minLevel: 50, maxLevel: 54, chance: 9 },
			           	{ name: 'skarmory', minLevel: 50, maxLevel: 55, chance: 5 },
			        ],
				},
			},
			route45A: {
				name: ['Route 45', 'Ruta 45', '45号道路'], 
				position: { x: 22, y: 9.8 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route45-8'
				},
			},
			route46: { 
				name: ['Route 46', 'Ruta 46', '46号道路'], 
				position: { x: 11.7, y: 16 },
				size: { w: 4.6, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 46', 'Ruta 46', '46号道路'], 
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'parasect', minLevel: 50, maxLevel: 54, chance: 10 },
			           	{ name: 'dodrio', minLevel: 50, maxLevel: 53, chance: 10 },
						{ name: 'sunflora', minLevel: 51, maxLevel: 55, chance: 10 },
			           	{ name: 'weepinbell', minLevel: 52, maxLevel: 54, chance: 10 },
			           	{ name: 'jumpluff', minLevel: 48, maxLevel: 53, chance: 10 },
			           	{ name: 'granbull', minLevel: 49, maxLevel: 53, chance: 10 },    	
			           	{ name: 'donphan', minLevel: 48, maxLevel: 52, chance: 8 },
			           	{ name: 'sunflora', minLevel: 50, maxLevel: 55, chance: 7 },
			           	{ name: 'graveler', minLevel: 48, maxLevel: 53, chance: 7 },
			           	{ name: 'bellossom', minLevel: 49, maxLevel: 55, chance: 5 },
			           	{ name: 'gligar', minLevel: 51, maxLevel: 54, chance: 5 },
			           	{ name: 'skarmory', minLevel: 52, maxLevel: 53, chance: 5 },
			           	{ name: 'chikorita', minLevel: 51, maxLevel: 55, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route46-4'
			        }
				},
			},
			
		}
	},
	'cliffEdgeGate-1': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-1.png",
		song: "unionCave",
		worldEvent: {
			cianwoodCity: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 4, y: 12},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelCity',
					location: 'cianwoodCity-3'
				},
			},
			cliffEdgeGateA: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 13.5, y: 2.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-2',
					sound: 'stairs'
				},
			},
			cliffEdgeGateB: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 21, y: 7},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-4'
				},
			},
		}
	},
	'cliffEdgeGate-2': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-2.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGateA: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 7.5, y: 8.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-3',
					sound: 'stairs'
				},
			},	
			cliffEdgeGateB: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 13.5, y: 3.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-1',
					sound: 'stairs'
				},
			},	
		}
	},
	'cliffEdgeGate-3': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-3.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGate: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 7.5, y: 9.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-2',
					sound: 'stairs'
				},
			},
			route47: {
				name:['Route 47', 'Ruta 47', '47号道路'], 
				position: { x: 19, y: 6},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route47-1'
				},
			},
		}
	},
	'cliffEdgeGate-4': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-4.png",
		song: "unionCave",
		worldEvent: {
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 8, y: 4},
				size: { w: 9, h: 6 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
					background: './assets/images/background/battle14.png',
					pokemon: [ 
						{ name: 'quagsire', minLevel: 34, maxLevel: 39, chance: 32 }, 
						{ name: 'magikarp', minLevel: 36, maxLevel: 41, chance: 32 },
			            { name: 'poliwhirl', minLevel: 38, maxLevel: 41, chance: 32 },
			            { name: 'dratini', minLevel: 35, maxLevel: 40, chance: 4 },
			        ],
				},
			},	
			cliffEdgeGateA: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 1, y: 7},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-1'
				},
			},
			hiddenButton: {
				name: [``, ``, ``],
				position: { x: 18, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'cliffEdgeGateHiddenButton',
					invisible: true
				},
			},
		}
	},
	'cliffEdgeGate-4bis': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-4bis.png",
		song: "unionCave",
		worldEvent: {
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 8, y: 4},
				size: { w: 9, h: 6 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
					background: './assets/images/background/battle14.png',
					pokemon: [ 
						{ name: 'quagsire', minLevel: 34, maxLevel: 39, chance: 32 }, 
						{ name: 'magikarp', minLevel: 36, maxLevel: 41, chance: 32 },
			            { name: 'poliwhirl', minLevel: 38, maxLevel: 41, chance: 32 },
			            { name: 'dratini', minLevel: 35, maxLevel: 40, chance: 4 },
			        ],
				},
			},	
			cliffEdgeGateA: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 1, y: 7 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-1'
				},
			},
			cliffEdgeGateB: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 21, y: 7 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-5'
				},
			},
		}
	},
	'cliffEdgeGate-5': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-5.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGate: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 1, y: 7 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-4'
				},
			},
			elevatorRoom: {
				name: [`Elevator Room`, `Sala del Elevador`, `电梯间`],
				position: { x: 9, y: 2 },
				size: { w: 7, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'elevatorRoomCliffEdgeGateA',
					tw: false
				},
			},
		}
	},
	'cliffEdgeGate-6': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-6.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGate: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 17.9, y: 0 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-7'
				},
			},
			elevatorRoom: {
				name: [`Elevator Room`, `Sala del Elevador`, `电梯间`],
				position: { x: 9, y: 2 },
				size: { w: 7, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'elevatorRoomCliffEdgeGateB',
				},
			},
			diary: {
				name: [`Diary`, `Diario`, `日记`],
				position: { x: 4, y: 4.3 },
				size: { w: 3, h: 1.7 },
				event: {
					type: 'dialogue',
					npc: 'diaryCliffEdgeGate',
					tw: false
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCliffEdgeGate',
					tw: false
				},
			},
		}
	},
	'cliffEdgeGate-7': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-7.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGateA: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 17.9, y: 15 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-6'
				},
			},
			cliffEdgeGateB: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 11, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-8'
				},
			},
		}
	},
	'cliffEdgeGate-8': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-8.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGate: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-7'
				},
			},
			mewtwo: {
				name: ['Mewtwo', 'Mewtwo', '超梦'], 
				position: { x: 11.5, y: 7.5 },
				size: { w: 2, h: 2 },
				event: {
					image: './assets/images/pokemon/sprite/mewtwo.png',
					type: 'dialogue',
					npc: 'mewtwo'
				},
			},
		}
	},
	'cliffEdgeGate-8bis': {
		name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
		background: "assets/images/map/johto/cave/cliffEdgeGate-8.png",
		song: "unionCave",
		worldEvent: {
			cliffEdgeGate: {
				name: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'], 
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-7'
				},
			},
		}
	},
	'route47-1': {
		name: ['Route 47', 'Ruta 47', '47号道路'],
		background: "assets/images/map/johto/route/route47-1.png",
		song: "safariZone",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 13, y: 4},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signRoute47',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 11},
				size: { w: 8, h: 5},
				event: {
					type: 'routeBattle',
					title: ['Route 47', 'Ruta 47', '47号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			            { name: 'farfetchd', minLevel: 38, maxLevel: 44, chance: 19 },
			           	{ name: 'miltank', minLevel: 39, maxLevel: 43, chance: 19 },
			            { name: 'noctowl', minLevel: 38, maxLevel: 46, chance: 19 },
			            { name: 'gloom', minLevel: 40, maxLevel: 45, chance: 10 },
			           	{ name: 'fearow', minLevel: 41, maxLevel: 44, chance: 10 },
			            { name: 'ditto', minLevel: 39, maxLevel: 43, chance: 8 },
			            { name: 'raticate', minLevel: 38, maxLevel: 45, chance: 8 },
			            { name: 'heracross', minLevel: 40, maxLevel: 44, chance: 7 },
			        ],
				},
			},
			cliffEdgeGate: {
				name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'], 
				position: { x: 2, y: 11},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'cliffEdgeGate-3'
				},
			},
			route48: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 15.8, y: 0},
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidorino', minLevel: 39, maxLevel: 42, chance: 19 },
			           	{ name: 'miltank', minLevel: 38, maxLevel: 44, chance: 19 },
			            { name: 'nidorina', minLevel: 40, maxLevel: 43, chance: 19 },
			            { name: 'gloom', minLevel: 41, maxLevel: 45, chance: 10 },
			           	{ name: 'fearow', minLevel: 40, maxLevel: 46, chance: 10 },
			            { name: 'ponyta', minLevel: 39, maxLevel: 44, chance: 8 },
			            { name: 'raticate', minLevel: 40, maxLevel: 45, chance: 8 },
			            { name: 'heracross', minLevel: 40, maxLevel: 44, chance: 7 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route48-1'
			        }
				},
			},
		}
	},
	'route48-1': {
		name: ['Route 48', 'Ruta 48', '48号道路'],
		background: "assets/images/map/johto/route/route48-1.png",
		song: "safariZone",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 2},
				size: { w: 8, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			            { name: 'farfetchd', minLevel: 38, maxLevel: 43, chance: 15 },
			            { name: 'fearow', minLevel: 40, maxLevel: 44, chance: 15 },
			           	{ name: 'tauros', minLevel: 39, maxLevel: 45, chance: 15 },
			            { name: 'skiploom', minLevel: 41, maxLevel: 46, chance: 13 },
			            { name: 'gloom', minLevel: 41, maxLevel: 45, chance: 12 },
			           	{ name: 'girafarig', minLevel: 42, maxLevel: 43, chance: 12 },
			            { name: 'diglett', minLevel: 40, maxLevel: 42, chance: 5 },
			            { name: 'arcanine', minLevel: 41, maxLevel: 42, chance: 5 },
			            { name: 'ninetales', minLevel: 39,  maxLevel: 43, chance: 5 },
			            { name: 'heracross', minLevel: 38, maxLevel: 44, chance: 3 },
			        ],
				},
			},
			route47: {
				name: ['Route 47', 'Ruta 47', '47号道路'], 
				position: { x: 15.8, y: 16},
				size: { w: 3.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 47', 'Ruta 47', '47号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'nidorino', minLevel: 39, maxLevel: 42, chance: 19 },
			           	{ name: 'miltank', minLevel: 38, maxLevel: 44, chance: 19 },
			            { name: 'nidorina', minLevel: 40, maxLevel: 43, chance: 19 },
			            { name: 'gloom', minLevel: 41, maxLevel: 45, chance: 10 },
			           	{ name: 'fearow', minLevel: 40, maxLevel: 46, chance: 10 },
			            { name: 'ponyta', minLevel: 39, maxLevel: 44, chance: 8 },
			            { name: 'raticate', minLevel: 40, maxLevel: 45, chance: 8 },
			            { name: 'heracross', minLevel: 40, maxLevel: 44, chance: 7 },
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route47-1'
			        }
				},
			},
			route48A: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 7, y: 0 },
				size: { w: 4.2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'arcanine', minLevel: 40, maxLevel: 43, chance: 19 },
			           	{ name: 'tauros', minLevel: 41, maxLevel: 42, chance: 19 },
			            { name: 'ponyta', minLevel: 39, maxLevel: 44, chance: 19 },
			            { name: 'skiploom', minLevel: 40, maxLevel: 42, chance: 10 },
			           	{ name: 'fearow', minLevel: 42, maxLevel: 43, chance: 10 },
			            { name: 'ninetales', minLevel: 41, maxLevel: 46, chance: 8 },
			            { name: 'raticate', minLevel: 40, maxLevel: 44, chance: 8 },
			            { name: 'pinsir', minLevel: 42, maxLevel: 45, chance: 7 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route48-2'
			        }
				},
			},
			route48B: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 23, y: 12 },
				size: { w: 2, h: 4.5 },
				event: {
					type: 'travelRoute',
					location: 'route48-3'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 2, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route48HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route48-2': {
		name: ['Route 48', 'Ruta 48', '48号道路'],
		background: "assets/images/map/johto/route/route48-2.png",
		song: "safariZone",
		worldEvent: {
			niceHouse: {
				name: ['Nice house', 'Casa bonita', '漂亮房子'],
				position: { x: 14, y: 4.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'safariWardenRoute48'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 16, y: 8 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'signboardRoute48',
					tw: false
				},
			},
			route48A: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 7, y: 16 },
				size: { w: 4.2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'arcanine', minLevel: 40, maxLevel: 43, chance: 19 },
			           	{ name: 'tauros', minLevel: 41, maxLevel: 42, chance: 19 },
			            { name: 'ponyta', minLevel: 39, maxLevel: 44, chance: 19 },
			            { name: 'skiploom', minLevel: 40, maxLevel: 42, chance: 10 },
			           	{ name: 'fearow', minLevel: 42, maxLevel: 43, chance: 10 },
			            { name: 'ninetales', minLevel: 41, maxLevel: 46, chance: 8 },
			            { name: 'raticate', minLevel: 40, maxLevel: 44, chance: 8 },
			            { name: 'pinsir', minLevel: 42, maxLevel: 45, chance: 7 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route48-1'
			        }
				},
			},
			route48B: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 23, y: 8.5 },
				size: { w: 2, h: 2.8 },
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'miltank', minLevel: 40, maxLevel: 43, chance: 19 },
			           	{ name: 'tauros', minLevel: 41, maxLevel: 44, chance: 19 },
			            { name: 'sunflora', minLevel: 40, maxLevel: 46, chance: 19 },
			            { name: 'noctowl', minLevel: 40, maxLevel: 42, chance: 10 },
			           	{ name: 'diglett', minLevel: 39, maxLevel: 44, chance: 10 },
			            { name: 'ninetales', minLevel: 38, maxLevel: 43, chance: 8 },
			            { name: 'heracross', minLevel: 39, maxLevel: 44, chance: 8 },
			            { name: 'pinsir', minLevel: 38, maxLevel: 45, chance: 7 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route48-4'
			        }
				},
			},
			route48C: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 18.8, y: 0 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route48-5'
				},
			},
		}
	},
	'route48-3': {
		name: ['Route 48', 'Ruta 48', '48号道路'],
		background: "assets/images/map/johto/route/route48-3.png",
		song: "safariZone",
		worldEvent: {
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 10, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute48',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 12, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute48',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 15, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute48',
					tw: false
				},
			},
			vesselD: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselDRoute48',
					tw: false
				},
			},
			route48A: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 3.4, y: 0 },
				size: { w: 4.2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route48-4'
				},
			},
			route48B: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 0, y: 12 },
				size: { w: 2, h: 4.5 },
				event: {
					type: 'travelRoute',
					location: 'route48-1'
				},
			},
		}
	},
	'route48-4': {
		name: ['Route 48', 'Ruta 48', '48号道路'],
		background: "assets/images/map/johto/route/route48-4.png",
		song: "safariZone",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 16, y: 3.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route48-4',
					inRoute: true
				},
			},
			route48A: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 3.4, y: 16 },
				size: { w: 4.2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route48-3'
				},
			},
			route48B: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 0, y: 8.5 },
				size: { w: 3.2, h: 2.8 },
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'miltank', minLevel: 40, maxLevel: 43, chance: 19 },
			           	{ name: 'tauros', minLevel: 41, maxLevel: 44, chance: 19 },
			            { name: 'sunflora', minLevel: 40, maxLevel: 46, chance: 19 },
			            { name: 'noctowl', minLevel: 40, maxLevel: 42, chance: 10 },
			           	{ name: 'diglett', minLevel: 39, maxLevel: 44, chance: 10 },
			            { name: 'ninetales', minLevel: 38, maxLevel: 43, chance: 8 },
			            { name: 'heracross', minLevel: 39, maxLevel: 44, chance: 8 },
			            { name: 'pinsir', minLevel: 38, maxLevel: 45, chance: 7 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route48-2'
			        }
				},
			},
		}
	},
	'route48-5': {
		name: ['Route 48', 'Ruta 48', '48号道路'],
		background: "assets/images/map/johto/route/route48-5.png",
		song: "safariZone",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 13, y: 2},
				size: { w: 5, h: 11},
				event: {
					type: 'routeBattle',
					title: ['Route 48', 'Ruta 48', '48号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
			            { name: 'ponyta', minLevel: 40, maxLevel: 43, chance: 15 },
			            { name: 'fearow', minLevel: 40, maxLevel: 42, chance: 15 },
			           	{ name: 'tauros', minLevel: 42, maxLevel: 44, chance: 15 },
			            { name: 'diglett', minLevel: 41, maxLevel: 45, chance: 12 },
			            { name: 'nidorina', minLevel: 42, maxLevel: 46, chance: 12 },
			            { name: 'nidorino', minLevel: 43, maxLevel: 46, chance: 12 },
			            { name: 'skiploom', minLevel: 40, maxLevel: 45, chance: 5 },
			            { name: 'gloom', minLevel: 42, maxLevel: 44, chance: 5 },
			           	{ name: 'girafarig', minLevel: 41, maxLevel: 43, chance: 5 },
			            { name: 'heracross', minLevel: 39, maxLevel: 42, chance: 4 },
			        ],
				},
			},
			route48: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 18.8, y: 16 },
				size: { w: 2.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route48-2'
				},
			},
			safariZone: {
				name: ['Safari Zone', 'Zona Safari', '狩猎地带'], 
				position: { x: 23, y: 2.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'safariZone-1'
				},
			},
		}
	},
	'safariZone-1': {
		name: ['Safari Zone', 'Zona Safari', '狩猎地带'],
		background: "assets/images/map/johto/route/safariZone-1.png",
		song: "safariZone",
		worldEvent: {
			safari: {
				name: ['Safari Zone', 'Zona Safari', '狩猎地带'],
				position: { x: 13, y: 2.5},
				size: { w: 6, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'safariReceptionist'
				},
			},
			route48: {
				name: ['Route 48', 'Ruta 48', '48号道路'], 
				position: { x: 0, y: 2.8 },
				size: { w: 2, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route48-5'
				},
			},
		}
	},
	'route27-1': {
		name: ['Route 27', 'Ruta 27', '27号道路'],
		background: "assets/images/map/kanto/route/route27-1.png",
		song: "route26",
		worldEvent: {
			newBarkTown: {
				name: ['New Bark Town', 'Pueblo Primavera', '若叶镇'],
				position: { x: 0, y: 7},
				size: { w: 8, h: 6 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 27', 'Ruta 27', '27号道路'],
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
			        	location: 'newBarkTown-1',
			        	isCity: true,
			        	travelJohto: true
			        }
				},
			},
			tohjoFalls: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 16, y: 1},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'tohjoFalls-1'
				},
			},
		}
	},
	'route27-2': {
		name: ['Route 27', 'Ruta 27', '27号道路'],
		background: "assets/images/map/kanto/route/route27-2.png",
		song: "route26",
		worldEvent: {
			route27: {
				name: ['Route 27', 'Ruta 27', '27号道路'],
				position: { x: 0, y: 3},
				size: { w: 3, h: 4 },
				event: {
					type: 'travelRoute',
					location: 'route27-1',
					sound: 'jump1'
				},
			},
			tohjoFalls: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 6, y: 1},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'tohjoFalls-4'
				},
			},
			route26: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 23, y: 4},
				size: { w: 3, h: 3.5 },
				event: {
					type: 'travelRoute',
					location: 'route26-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 7, y: 7 },
				size: { w: 9, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 26', 'Ruta 26', '26号道路'],
					background: './assets/images/background/battle22.png',
					pokemon: [  
						{ name: 'arbok', minLevel: 39, maxLevel: 42, chance: 30 },
						{ name: 'dodrio', minLevel: 40, maxLevel: 43, chance: 20 },
						{ name: 'doduo', minLevel: 41, maxLevel: 45, chance: 15 },
						{ name: 'raticate', minLevel: 40, maxLevel: 47, chance: 15 },
						{ name: 'quagsire', minLevel: 42, maxLevel: 44, chance: 10 },
						{ name: 'sandshrew', minLevel: 42, maxLevel: 46, chance: 4 },
						{ name: 'ponyta', minLevel: 38, maxLevel: 43, chance: 4 }, 
						{ name: 'rapidash', minLevel: 39, maxLevel: 45, chance: 2 },
			        ],
				},
			},
		}
	},
	'tohjoFalls-1': {
		name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
		background: "assets/images/map/kanto/cave/tohjoFalls-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			route27: {
				name: ['Route 27', 'Ruta 27', '27号道路'],
				position: { x: 11, y: 13},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route27-1'
				},
			},
			tohjoFalls: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 11, y: 0},
				size: { w: 3, h: 5 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'tohjoFalls-2',
					sound: 'water1'
				},
			},
		}
	},
	'tohjoFalls-2': {
		name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
		background: "assets/images/map/kanto/cave/tohjoFalls-2.png",
		song: "ruinsOfAlph",
		worldEvent: {
			tohjoFallsA: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 11, y: 15},
				size: { w: 3, h: 3 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'tohjoFalls-1',
					sound: 'water1'
				},
			},
			tohjoFallsB: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 22, y: 8},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'tohjoFalls-3'
				},
			},
		}
	},
	'tohjoFalls-3': {
		name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
		background: "assets/images/map/kanto/cave/tohjoFalls-3.png",
		song: "ruinsOfAlph",
		worldEvent: {
			tohjoFallsA: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 0, y: 8},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'tohjoFalls-2'
				},
			},
			tohjoFallsB: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 11, y: 15},
				size: { w: 3, h: 3 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'tohjoFalls-4',
					sound: 'water1'
				},
			},
			
		}
	},
	'tohjoFalls-4': {
		name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
		background: "assets/images/map/kanto/cave/tohjoFalls-4.png",
		song: "ruinsOfAlph",
		worldEvent: {
			route27: {
				name: ['Route 27', 'Ruta 27', '27号道路'],
				position: { x: 11, y: 13},
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route27-2'
				},
			},
			tohjoFalls: {
				name: ['Tohjo Falls', 'Cataratas Tohjo', '都城瀑布'],
				position: { x: 11, y: 0},
				size: { w: 3, h: 5 },
				event: {
					condition: {
						type: 'bikeUpgrade',
						exception: 'needWaterBikeUpgraded'
					},
					type: 'travelRoute',
					location: 'tohjoFalls-3',
					sound: 'water1'
				},
			},
		}
	},
	'route26-1': {
		name: ['Route 26', 'Ruta 26', '26号道路'],
		background: "assets/images/map/kanto/route/route26-1.png",
		song: "route26",
		worldEvent: {
			route27: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 0, y: 4},
				size: { w: 2, h: 3.5 },
				event: {
					type: 'travelRoute',
					location: 'route27-2'
				},
			},
			route26: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 8.9, y: 0 },
				size: { w: 4.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle22.png',
					pokemon: [ 
						{ name: 'arbok', minLevel: 67, maxLevel: 72, chance: 25 },
						{ name: 'dodrio', minLevel: 60, maxLevel: 72, chance: 20 },
						{ name: 'raticate', minLevel: 65, maxLevel: 72, chance: 15 },
						{ name: 'rapidash', minLevel: 66, maxLevel: 72, chance: 10 },
						{ name: 'doduo', minLevel: 61, maxLevel: 72, chance: 10 },
						{ name: 'sandshrew', minLevel: 62, maxLevel: 72, chance: 9 },
						{ name: 'quagsire', minLevel: 62, maxLevel: 72, chance: 7 },
						{ name: 'ponyta', minLevel: 68, maxLevel: 72, chance: 4 }, 
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'route26-2'
			        }
				},
			},
			lumberjackCabin: {
				name: ["Lumberjack's Cabin", 'Cabaña del Leñador', '伐木工小屋'],
				position: { x: 17, y: 1},
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'lumberjackRoute26'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 16, y: 4},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute26',
					tw: false
				},
			},	
		}
	},
	'route26-2': {
		name: ['Route 26', 'Ruta 26', '26号道路'],
		background: "assets/images/map/kanto/route/route26-2.png",
		song: "route26",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 3, y: 5.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route26-2',
					inRoute: true
				},
			},
			route26A: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 8.9, y: 16},
				size: { w: 4.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'arbok', minLevel: 67, maxLevel: 72, chance: 25 },
						{ name: 'dodrio', minLevel: 60, maxLevel: 72, chance: 20 },
						{ name: 'raticate', minLevel: 65, maxLevel: 72, chance: 15 },
						{ name: 'rapidash', minLevel: 66, maxLevel: 72, chance: 10 },
						{ name: 'doduo', minLevel: 61, maxLevel: 72, chance: 10 },
						{ name: 'sandshrew', minLevel: 62, maxLevel: 72, chance: 9 },
						{ name: 'quagsire', minLevel: 62, maxLevel: 72, chance: 7 },
						{ name: 'ponyta', minLevel: 68, maxLevel: 72, chance: 4 }, 
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'route26-1'
			        }
				},
			},
			route26B: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 9.9, y: 0},
				size: { w: 5.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'dodrio', minLevel: 66, maxLevel: 72, chance: 25 },
						{ name: 'raticate', minLevel: 66, maxLevel: 73, chance: 20 },
						{ name: 'arbok', minLevel: 69, maxLevel: 72, chance: 15 },
						{ name: 'rapidash', minLevel: 69, maxLevel: 71, chance: 10 },
						{ name: 'sandshrew', minLevel: 62, maxLevel: 72, chance: 9 },
						{ name: 'ponyta', minLevel: 68, maxLevel: 71, chance: 9 }, 
						{ name: 'quagsire', minLevel: 62, maxLevel: 72, chance: 8 },
						{ name: 'doduo', minLevel: 66, maxLevel: 73, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'route26-3'
			        }
				},
			},
		}
	},
	'route26-3': {
		name: ['Route 26', 'Ruta 26', '26号道路'],
		background: "assets/images/map/kanto/route/route26-3.png",
		song: "route26",
		worldEvent: {
			route26A: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 9.9, y: 16 },
				size: { w: 5.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'dodrio', minLevel: 66, maxLevel: 72, chance: 25 },
						{ name: 'raticate', minLevel: 66, maxLevel: 73, chance: 20 },
						{ name: 'arbok', minLevel: 69, maxLevel: 72, chance: 15 },
						{ name: 'rapidash', minLevel: 69, maxLevel: 71, chance: 10 },
						{ name: 'sandshrew', minLevel: 62, maxLevel: 72, chance: 9 },
						{ name: 'ponyta', minLevel: 68, maxLevel: 71, chance: 9 }, 
						{ name: 'quagsire', minLevel: 62, maxLevel: 72, chance: 8 },
						{ name: 'doduo', minLevel: 66, maxLevel: 73, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'route26-2'
			        }
				},
			},
			route26B: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 10, y: 0},
				size: { w: 5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route26-4'
				},
			},
		}
	},
	'route26-4': {
		name: ['Route 26', 'Ruta 26', '26号道路'],
		background: "assets/images/map/kanto/route/route26-4.png",
		song: "route26",
		worldEvent: {
			route26: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 10, y: 16},
				size: { w: 5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route26-3'
				},
			},
			pokemonLeagueReceptionGate: {
				name: ['Pokémon League Reception Gate', 'Recepción de la Liga Pokémon', '联盟接待大门'],
				position: { x: 10, y: 0},
				size: { w: 5, h: 6.5 },
				event: {
					type: 'dialogue',
					npc: 'pokemonLeagueReceptionGate'
				},
			},
		}
	},
	'victoryRoad-1': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-1.png",
		song: "victoryRoad",
		worldEvent: {
			route26: {
				name: ['Route 26', 'Ruta 26', '26号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route26-4'
				},
			},
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 0, y: 6 },
				size: { w: 2, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'marowak', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'golbat', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'golem', minLevel: 66, maxLevel: 76, chance: 9 },
						{ name: 'geodude', minLevel: 64, maxLevel: 74, chance: 9 }, 
						{ name: 'zubat', minLevel: 69, maxLevel: 72, chance: 8 },
						{ name: 'crobat', minLevel: 68, maxLevel: 73, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 21], 
			        	location: 'victoryRoad-2',
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 15.9, y: 0 },
				size: { w: 5.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'donphan', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'machoke', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'golbat', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'venomoth', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 9 },
						{ name: 'geodude', minLevel: 64, maxLevel: 74, chance: 9 }, 
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'victoryRoad-5'
			        }
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 7.5, y: 1.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-17',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-2': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-2.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 22, y: 6 },
				size: { w: 3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'marowak', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'golbat', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'golem', minLevel: 66, maxLevel: 76, chance: 9 },
						{ name: 'geodude', minLevel: 64, maxLevel: 74, chance: 9 }, 
						{ name: 'zubat', minLevel: 69, maxLevel: 72, chance: 8 },
						{ name: 'crobat', minLevel: 68, maxLevel: 73, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 21], 
			        	location: 'victoryRoad-1'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 12.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-6'
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 0, y: 9.9 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-3'
				},
			},
		}
	},
	'victoryRoad-3': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-3.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 23, y: 9.9 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-2'
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 8.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'onix', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'ursaring', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'golbat', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'venomoth', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 9 },
						{ name: 'rhydon', minLevel: 64, maxLevel: 74, chance: 6 }, 
						{ name: 'machamp', minLevel: 64, maxLevel: 74, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 16], 
			        	location: 'victoryRoad-4'
			        }
				},
			},
			route28: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 4, y: 5 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route28-1'
				},
			},
		}
	},
	'victoryRoad-4': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-4.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 8.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'onix', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'ursaring', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'golbat', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'venomoth', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 9 },
						{ name: 'rhydon', minLevel: 64, maxLevel: 74, chance: 6 }, 
						{ name: 'machamp', minLevel: 64, maxLevel: 74, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 16], 
			        	location: 'victoryRoad-3'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 21.5, y: 7.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-16',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-5': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-5.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 15.9, y: 16 },
				size: { w: 5.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'donphan', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'machoke', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'golbat', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'venomoth', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 9 },
						{ name: 'geodude', minLevel: 64, maxLevel: 74, chance: 9 }, 
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'victoryRoad-1'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 7, y: 7 },
				size: { w: 6, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
						{ name: 'donphan', minLevel: 68, maxLevel: 75, chance: 20 },
						{ name: 'machoke', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'venomoth', minLevel: 68, maxLevel: 75, chance: 10 },
						{ name: 'graveler', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 10 },
						{ name: 'dugtrio', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 10 },
						{ name: 'omanyte', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'kabutop', minLevel: 65, maxLevel: 75, chance: 5 },
			        ],
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 0, y: 8.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-6'
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 23, y: 6.9 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'ursaring', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 18 },
						{ name: 'rhydon', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'machamp', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'onix', minLevel: 65, maxLevel: 75, chance: 10 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'victoryRoad-7'
			        }
				},
			},
			victoryRoadD: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 16.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-8'
				},
			},
		}
	},
	'victoryRoad-6': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-6.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 22, y: 8.9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-5'
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 12.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-2'
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 13.5, y: 4.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-10',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-7': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-7.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 0, y: 6.9 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'ursaring', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 18 },
						{ name: 'rhydon', minLevel: 64, maxLevel: 73, chance: 15 },
						{ name: 'machamp', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'onix', minLevel: 65, maxLevel: 75, chance: 10 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'victoryRoad-5'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 15.5, y: 9.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-14',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-8': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-8.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadD: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 16.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-5'
				},
			},
		}
	},
	'victoryRoad-9': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-9.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 16.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-8',
					sound: 'jump1'
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 7.5, y: 4.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-15',
					sound: 'stairs'
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 16.5, y: 2.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-19',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-10': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-10.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 18.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'kadabra', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'magcargo', minLevel: 67, maxLevel: 72, chance: 15 },
						{ name: 'ursaring', minLevel: 66, maxLevel: 76, chance: 10 },
						{ name: 'onix', minLevel: 64, maxLevel: 73, chance: 10 },
						{ name: 'graveler', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'chansey', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'golbat', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 5 },
						{ name: 'rhydon', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'machamp', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'golem', minLevel: 65, maxLevel: 75, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 24], 
			        	location: 'victoryRoad-11'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 13.5, y: 4.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-6',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-11': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-11.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 18.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'kadabra', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'magcargo', minLevel: 67, maxLevel: 72, chance: 15 },
						{ name: 'ursaring', minLevel: 66, maxLevel: 76, chance: 10 },
						{ name: 'onix', minLevel: 64, maxLevel: 73, chance: 10 },
						{ name: 'graveler', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'chansey', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'golbat', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'zubat', minLevel: 66, maxLevel: 76, chance: 5 },
						{ name: 'rhydon', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'machamp', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'golem', minLevel: 65, maxLevel: 75, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 24], 
			        	location: 'victoryRoad-10'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 23, y: 9.9 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-12'
				},
			},
		}
	},
	'victoryRoad-12': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-12.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 14.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'magcargo', minLevel: 67, maxLevel: 72, chance: 15 },
						{ name: 'onix', minLevel: 64, maxLevel: 73, chance: 10 },
						{ name: 'graveler', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'dunsparce', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'golbat', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'omanyte', minLevel: 66, maxLevel: 76, chance: 7 },
						{ name: 'crobat', minLevel: 66, maxLevel: 76, chance: 5 },
						{ name: 'steelix', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'hitmonlee', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'hitmonchan', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'kabutops', minLevel: 66, maxLevel: 76, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'victoryRoad-15'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 0, y: 9.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-11'
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 22, y: 9.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'golbat', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 25 },
						{ name: 'dugtrio', minLevel: 69, maxLevel: 72, chance: 20 },
						{ name: 'sandshrew', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'jynx', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'parasect', minLevel: 64, maxLevel: 73, chance: 10 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'victoryRoad-13'
			        }
				},
			},
		}
	},
	'victoryRoad-13': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-13.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 0, y: 9.9 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'golbat', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 25 },
						{ name: 'dugtrio', minLevel: 69, maxLevel: 72, chance: 20 },
						{ name: 'sandshrew', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'jynx', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'parasect', minLevel: 64, maxLevel: 73, chance: 10 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'victoryRoad-12'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 9.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'diglett', minLevel: 67, maxLevel: 72, chance: 15 },
						{ name: 'corsola', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'marowak', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'golbat', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'onix', minLevel: 64, maxLevel: 73, chance: 8 },
						{ name: 'kabuto', minLevel: 66, maxLevel: 76, chance: 7 },
						{ name: 'dugtrio', minLevel: 66, maxLevel: 76, chance: 5 },
						{ name: 'steelix', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'wobbuffet', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'chansey', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'omastar', minLevel: 66, maxLevel: 76, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'victoryRoad-14'
			        }
				},
			},
		}
	},
	'victoryRoad-14': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-14.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 9.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'diglett', minLevel: 67, maxLevel: 72, chance: 15 },
						{ name: 'corsola', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'marowak', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'golbat', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'onix', minLevel: 64, maxLevel: 73, chance: 8 },
						{ name: 'kabuto', minLevel: 66, maxLevel: 76, chance: 7 },
						{ name: 'dugtrio', minLevel: 66, maxLevel: 76, chance: 5 },
						{ name: 'steelix', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'wobbuffet', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'chansey', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'omastar', minLevel: 66, maxLevel: 76, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'victoryRoad-13'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 15.5, y: 9.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-7',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-15': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-15.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 14.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'zubat', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'magcargo', minLevel: 67, maxLevel: 72, chance: 15 },
						{ name: 'onix', minLevel: 64, maxLevel: 73, chance: 10 },
						{ name: 'graveler', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'dunsparce', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'golbat', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'omanyte', minLevel: 66, maxLevel: 76, chance: 7 },
						{ name: 'crobat', minLevel: 66, maxLevel: 76, chance: 5 },
						{ name: 'steelix', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'hitmonlee', minLevel: 69, maxLevel: 72, chance: 5 },
						{ name: 'hitmonchan', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'kabutops', minLevel: 66, maxLevel: 76, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'victoryRoad-12'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 7.5, y: 4.5 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-9',
					sound: 'stairs'
				},
			},
		}
	},
	'victoryRoad-16': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-16.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 21.5, y: 7.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-4',
					sound: 'stairs'
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 21.5, y: 13.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-17'
				},
			},
		}
	},
	'victoryRoad-17': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-17.png",
		song: "victoryRoad",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 11 },
				size: { w: 8, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
						{ name: 'venomoth', minLevel: 68, maxLevel: 75, chance: 25 },
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 25 },
						{ name: 'dugtrio', minLevel: 69, maxLevel: 72, chance: 20 },
						{ name: 'omanyte', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'kabutop', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 10 },
			        ],
				},
			},
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 7.5, y: 1.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-1',
					sound: 'stairs'
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 1.5, y: 13.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-16'
				},
			},
		}
	},
	'victoryRoad-18': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-18.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 8.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 30 },
						{ name: 'golbat', minLevel: 68, maxLevel: 75, chance: 20 },
						{ name: 'dugtrio', minLevel: 69, maxLevel: 72, chance: 20 },
						{ name: 'venomoth', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'kadabra', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'crobat', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'victoryRoad-19'
			        }
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 17.9, y: 16 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-17',
					sound: 'jump1'
				},
			},
		},
	},
	'victoryRoad-19': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-19.png",
		song: "victoryRoad",
		worldEvent: {
			victoryRoadA: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 6.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-20'
				},
			},
			victoryRoadB: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 16.5, y: 2.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-9',
					sound: 'stairs'
				},
			},
			victoryRoadC: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 8.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 30 },
						{ name: 'golbat', minLevel: 68, maxLevel: 75, chance: 20 },
						{ name: 'dugtrio', minLevel: 69, maxLevel: 72, chance: 20 },
						{ name: 'venomoth', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'kadabra', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'crobat', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'victoryRoad-18'
			        }
				},
			},
		}
	},
	'victoryRoad-20': {
		name: ['Victory Road', 'Calle Victoria', '冠军之路'],
		background: "assets/images/map/kanto/cave/victoryRoad-20.png",
		song: "victoryRoad",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 11 },
				size: { w: 6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Victory Road', 'Calle Victoria', '冠军之路'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
						{ name: 'onix', minLevel: 67, maxLevel: 72, chance: 20 },
						{ name: 'venomoth', minLevel: 68, maxLevel: 75, chance: 20 },
						{ name: 'parasect', minLevel: 68, maxLevel: 75, chance: 15 },
						{ name: 'graveler', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'machoke', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'kadabra', minLevel: 65, maxLevel: 75, chance: 10 },
						{ name: 'kabuto', minLevel: 64, maxLevel: 73, chance: 5 },
						{ name: 'omanyte', minLevel: 65, maxLevel: 75, chance: 5 },
						{ name: 'pupitar', minLevel: 64, maxLevel: 73, chance: 5 },
			        ],
				},
			},
			victoryRoad: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 6.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-19'
				},
			},
			indigoPlateau: {
				name: ['Indigo Plateau', 'Meseta Añil', '石英高原'],
				position: { x: 20, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'indigoPlateau-1'
				},
			},
		}
	},
	'route28-1': {
		name: ['Route 28', 'Ruta 28', '28号道路'],
		background: "assets/images/map/kanto/route/route28-1.png",
		song: "route26",
		worldEvent: {
			victoryRoad: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 19, y: 5 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-3'
				},
			},
			route28: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 0, y: 12 },
				size: { w: 6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle23.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 56, maxLevel: 64, chance: 18 }, 
						{ name: 'azumarill', minLevel: 55, maxLevel: 59, chance: 16 },
						{ name: 'quagsire', minLevel: 55, maxLevel: 59, chance: 12 }, 
						{ name: 'seaking', minLevel: 55, maxLevel: 59, chance: 11 },
						{ name: 'politoed', minLevel: 58, maxLevel: 61, chance: 10 }, 
						{ name: 'starmie', minLevel: 56, maxLevel: 60, chance: 10 },             
						{ name: 'poliwrath', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'omastar', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'kabutops', minLevel: 55, maxLevel: 62, chance: 7 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'route28-2'
			        }
				},
			},
		}
	},
	'route28-2': {
		name: ['Route 28', 'Ruta 28', '28号道路'],
		background: "assets/images/map/kanto/route/route28-2.png",
		song: "route26",
		worldEvent: {
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 3 },
				size: { w: 6, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [  
						{ name: 'arbok', minLevel: 56, maxLevel: 64, chance: 18 }, 
						{ name: 'tangela', minLevel: 55, maxLevel: 59, chance: 12 }, 
						{ name: 'ursaring', minLevel: 55, maxLevel: 59, chance: 11 },
						{ name: 'rapidash', minLevel: 55, maxLevel: 59, chance: 10 },
						{ name: 'donphan', minLevel: 58, maxLevel: 61, chance: 10 }, 
						{ name: 'dodrio', minLevel: 56, maxLevel: 60, chance: 10 },             
						{ name: 'golbat', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'parasect', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'doduo', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'sneasel', minLevel: 57, maxLevel: 61, chance: 4 }, 
						{ name: 'farfetchd', minLevel: 57, maxLevel: 61, chance: 2 }, 
			        ],
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 6, y: 8.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route28-2',
					inRoute: true
				},
			},
			route28A: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 11.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route28-3'
				},
			},
			route28B: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 22, y: 4.7 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route28-1'
				},
			},
			route28C: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 19, y: 12 },
				size: { w: 6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 28', 'Ruta 28', '28号道路'],
					background: './assets/images/background/battle23.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 56, maxLevel: 64, chance: 18 }, 
						{ name: 'azumarill', minLevel: 55, maxLevel: 59, chance: 16 },
						{ name: 'quagsire', minLevel: 55, maxLevel: 59, chance: 12 }, 
						{ name: 'seaking', minLevel: 55, maxLevel: 59, chance: 11 },
						{ name: 'politoed', minLevel: 58, maxLevel: 61, chance: 10 }, 
						{ name: 'starmie', minLevel: 56, maxLevel: 60, chance: 10 },             
						{ name: 'poliwrath', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'omastar', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'kabutops', minLevel: 55, maxLevel: 62, chance: 7 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'route28-1'
			        }
				},
			},
		}
	},
	'route28-3': {
		name: ['Route 28', 'Ruta 28', '28号道路'],
		background: "assets/images/map/kanto/route/route28-3.png",
		song: "route26",
		worldEvent: {
			smallHouse: {
				name: ["Khytrayer's house", 'Casa de Khytrayer', 'Khytrayer的家'],
				position: { x: 5, y: 7},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'khytrayerRoute28'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 11, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute28',
					tw: false
				},
			},	
			route28: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 11.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route28-2'
				},
			},
			rockClister: {
				name: [`Rock cluster`, `Cúmulo de rocas`,
				`岩石堆`],
				position: { x: 12, y: 4 },
				size: { w: 3.2, h: 2 },
				event: {
					condition: {
						type: 'item',
						item: 'powerBracelet',
						exception: 'needPowerBracelet'
					},
					type: 'rockSmash',
					route: 'route28-3',
					newRoute: 'route28-3bis',
				},
			},
		}
	},
	'route28-3bis': {
		name: ['Route 28', 'Ruta 28', '28号道路'],
		background: "assets/images/map/kanto/route/route28-3bis.png",
		song: "route26",
		worldEvent: {
			smallHouse: {
				name: ["Khytrayer's house", 'Casa de Khytrayer', 'Khytrayer的家'],
				position: { x: 5, y: 7},
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'khytrayerRoute28'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 11, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute28',
					tw: false
				},
			},	
			route28: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 11.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route28-2'
				},
			},
			mtSilver: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 12, y: 2 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-1'
				},
			},
		}
	},
	'mtSilver-1': {
		name: ['Mt. Silver', 'Monte Plateado', '白银山'],
		background: "assets/images/map/kanto/cave/mtSilver-1.png",
		song: "victoryRoad",
		worldEvent: {
			mtSilver: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 10.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-2'
				},
			},
			route28: {
				name: ['Route 28', 'Ruta 28', '28号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route28-3'
				},
			},
		}
	},
	'mtSilver-2': {
		name: ['Mt. Silver', 'Monte Plateado', '白银山'],
		background: "assets/images/map/kanto/cave/mtSilver-2.png",
		song: "victoryRoad",
		worldEvent: {
			mtSilverA: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 10.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-1'
				},
			},
			mtSilverB: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 10.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-3'
				},
			},
		}
	},
	'mtSilver-3': {
		name: ['Mt. Silver', 'Monte Plateado', '白银山'],
		background: "assets/images/map/kanto/cave/mtSilver-3.png",
		song: "victoryRoad",
		worldEvent: {
			mtSilverA: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 10.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-2'
				},
			},
			mtSilverB: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 11, y: 1 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-4'
				},
			},
		}
	},
	'mtSilver-4': {
		name: ['Mt. Silver', 'Monte Plateado', '白银山'],
		background: "assets/images/map/kanto/cave/mtSilver-4.png",
		song: "victoryRoad",
		worldEvent: {
			mtSilver: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 10.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-3'
				},
			},
			rayquaza: {
				name: ['Rayquaza', 'Rayquaza', '烈空坐'], 
				position: { x: 10.5, y: 7 },
				size: { w: 4, h: 4 },
				event: {
					image: './assets/images/pokemon/sprite/rayquaza.png',
					type: 'dialogue',
					npc: 'rayquaza'
				},
			},
		}
	},
	'mtSilver-4bis': {
		name: ['Mt. Silver', 'Monte Plateado', '白银山'],
		background: "assets/images/map/kanto/cave/mtSilver-4.png",
		song: "victoryRoad",
		worldEvent: {
			mtSilver: {
				name: [`Mt. Silver`, `Monte Plateado`, `白银山`],
				position: { x: 10.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mtSilver-3'
				},
			},
		}
	},
	'indigoPlateau-1': {
		name: ['Indigo Plateau', 'Meseta Añil', '石英高原'],
		background: "assets/images/map/kanto/route/indigoPlateau-1.png",
		song: "victoryRoad",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 17, y: 4.5},
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'indigoPlateau-1',
					inRoute: true
				},
			},
			pokeMart: {
				name: ['PokéMart', 'Tienda Pokémon', '友好商店'],
				position: { x: 3, y: 2 },
				size: { w: 4, h: 4 },
				event: {
					type: 'pokeMart',
					location: 'indigoPlateau'
				},
			},
			victoryRoad: {
				name: ['Victory Road', 'Calle Victoria', '冠军之路'],
				position: { x: 8, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'victoryRoad-20'
				},
			},
			indigoPlateau: {
				name: ['Indigo Plateau', 'Meseta Añil', '石英高原'],
				position: { x: 10, y: 0 },
				size: { w: 5, h: 4 },
				event: {
					type: 'travelRoute',
					location: 'indigoPlateau-2'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 8, y: 3},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardIndigoPlateau',
					tw: false
				},
			},	
		}
	},
	'indigoPlateau-2': {
		name: ['Indigo Plateau', 'Meseta Añil', '石英高原'],
		background: "assets/images/map/kanto/route/indigoPlateau-2.png",
		song: "victoryRoad",
		worldEvent: {
			indigoPlateau: {
				name: ['Indigo Plateau', 'Meseta Añil', '石英高原'],
				position: { x: 10, y: 13 },
				size: { w: 5, h: 5 },
				event: {
					type: 'travelRoute',
					location: 'indigoPlateau-1'
				},
			},
			pokemonLeague: {
				name: ['Pokémon League', 'Liga Pokémon', '宝可梦联盟'],
				position: { x: 6.5, y: 0 },
				size: { w: 12, h: 6.5 },
				event: {
					type: 'dialogue',
					npc: 'pokemonLeague'
				},
			},
		}
	},
	'route1-1': {
		name: ['Route 1', 'Ruta 1', '1号道路'],
		background: "assets/images/map/kanto/route/route1-1.png",
		song: "route1",
		worldEvent: {
			palletTown: {
				name: ['Pallet Town', 'Pueblo Paleta', '真新镇'],
				position: { x: 11.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'palletTown-1'
				},
			},
			route1: {
				name: ['Route 1', 'Ruta 1', '1号道路'],
				position: { x: 13.8, y: 0 },
				size: { w: 4.2, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 1', 'Ruta 1', '1号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'furret', minLevel: 64, maxLevel: 72, chance: 25 }, 
						{ name: 'raticate', minLevel: 64, maxLevel: 71, chance: 15 }, 
						{ name: 'noctowl', minLevel: 68, maxLevel: 75, chance: 12 }, 
						{ name: 'ledian', minLevel: 69, maxLevel: 73, chance: 8 }, 
						{ name: 'ariados', minLevel: 65, maxLevel: 70, chance: 8 },   
						{ name: 'spinarak', minLevel: 64, maxLevel: 72, chance: 8 },  
						{ name: 'ledyba', minLevel: 63, maxLevel: 74, chance: 6 }, 
						{ name: 'hoothoot', minLevel: 62, maxLevel: 72, chance: 6 },  
						{ name: 'rattata', minLevel: 69, maxLevel: 70, chance: 6 },  
						{ name: 'sentret', minLevel: 68, maxLevel: 70, chance: 6 },  
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'route1-2'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 9 },
				size: { w: 9, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 1', 'Ruta 1', '1号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'furret', minLevel: 64, maxLevel: 72, chance: 30 }, 
						{ name: 'pidgeotto', minLevel: 64, maxLevel: 72, chance: 25 }, 
						{ name: 'raticate', minLevel: 64, maxLevel: 71, chance: 15 }, 
						{ name: 'fearow', minLevel: 64, maxLevel: 71, chance: 10 }, 
						{ name: 'spearow', minLevel: 64, maxLevel: 72, chance: 10 }, 
						{ name: 'rattata', minLevel: 64, maxLevel: 71, chance: 10 }, 
			           
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 9 },
				size: { w: 7, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 1', 'Ruta 1', '1号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'furret', minLevel: 64, maxLevel: 72, chance: 30 }, 
						{ name: 'pidgeotto', minLevel: 64, maxLevel: 72, chance: 25 }, 
						{ name: 'pidgey', minLevel: 64, maxLevel: 72, chance: 15 }, 
						{ name: 'noctowl', minLevel: 64, maxLevel: 71, chance: 10 }, 
						{ name: 'sentret', minLevel: 64, maxLevel: 71, chance: 10 }, 
						{ name: 'hoothoot', minLevel: 64, maxLevel: 71, chance: 10 },  
			        ],
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 11, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute1',
					tw: false
				},
			},	
		}
	},
	'route1-2': {
		name: ['Route 1', 'Ruta 1', '1号道路'],
		background: "assets/images/map/kanto/route/route1-2.png",
		song: "route1",
		worldEvent: {
			viridianCity: {
				name: ['Viridian City', 'Ciudad Verde', '常磐市'],
				position: { x: 5.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'viridianCity-1'
				},
			},
			route1A: {
				name: ['Route 1', 'Ruta 1', '1号道路'],
				position: { x: 13.8, y: 16 },
				size: { w: 4.2, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 1', 'Ruta 1', '1号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'furret', minLevel: 64, maxLevel: 72, chance: 25 }, 
						{ name: 'raticate', minLevel: 64, maxLevel: 71, chance: 15 }, 
						{ name: 'noctowl', minLevel: 68, maxLevel: 75, chance: 12 }, 
						{ name: 'ledian', minLevel: 69, maxLevel: 73, chance: 8 }, 
						{ name: 'ariados', minLevel: 65, maxLevel: 70, chance: 8 },   
						{ name: 'spinarak', minLevel: 64, maxLevel: 72, chance: 8 },  
						{ name: 'ledyba', minLevel: 63, maxLevel: 74, chance: 6 }, 
						{ name: 'hoothoot', minLevel: 62, maxLevel: 72, chance: 6 },  
						{ name: 'rattata', minLevel: 69, maxLevel: 70, chance: 6 },  
						{ name: 'sentret', minLevel: 68, maxLevel: 70, chance: 6 },  
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'route1-1'
			        }
				},
			},
			route1B: {
				name: ['Route 1', 'Ruta 1', '1号道路'],
				position: { x: 18, y: 16 },
				size: { w: 5.2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route1-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 6 },
				size: { w: 12, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 1', 'Ruta 1', '1号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'ledian', minLevel: 64, maxLevel: 72, chance: 25 }, 
						{ name: 'ariados', minLevel: 64, maxLevel: 71, chance: 25 }, 
						{ name: 'furret', minLevel: 64, maxLevel: 72, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 64, maxLevel: 72, chance: 15 }, 
						{ name: 'noctowl', minLevel: 64, maxLevel: 71, chance: 10 }, 
			            { name: 'spearow', minLevel: 64, maxLevel: 72, chance: 5 }, 
						{ name: 'rattata', minLevel: 64, maxLevel: 71, chance: 5 }, 
			        ],
				},
			},
		}
	},
	'route2-1': {
		name: ['Route 2', 'Ruta 2', '2号道路'],
		background: "assets/images/map/kanto/route/route2-1.png",
		song: "route1",
		worldEvent: {
			viridianCity: {
				name: ['Viridian City', 'Ciudad Verde', '常磐市'],
				position: { x: 22, y: 2 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'viridianCity-2'
				},
			},
			viridianForest: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 7.8, y: 0 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 		
						{ name: 'beedrill', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 17 }, 
						{ name: 'noctowl', minLevel: 69, maxLevel: 72, chance: 13 }, 
						{ name: 'pidgeotto', minLevel: 66, maxLevel: 75, chance: 9 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'nidorino', minLevel: 68, maxLevel: 71, chance: 8 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'pidgeot', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'metapod', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'kakuna', minLevel: 68, maxLevel: 74, chance: 5 }, 
						{ name: 'nidoqueen', minLevel: 67, maxLevel: 72, chance: 2 }, 
						{ name: 'nidoking', minLevel: 68, maxLevel: 71, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'viridianForest-1'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 2 },
				size: { w: 4, h: 12 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 33 }, 
						{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 17 }, 
						{ name: 'nidorina', minLevel: 68, maxLevel: 71, chance: 17 }, 
						{ name: 'ariados', minLevel: 67, maxLevel: 75, chance: 9 }, 
						{ name: 'ledian', minLevel: 66, maxLevel: 72, chance: 9 }, 
						{ name: 'nidoqueen', minLevel: 68, maxLevel: 72, chance: 6 }, 
			           	{ name: 'nidoking', minLevel: 66, maxLevel: 75, chance: 6 }, 
						{ name: 'raichu', minLevel: 66, maxLevel: 74, chance: 3 }, 
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 11 },
				size: { w: 5, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 28 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 73, chance: 28 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'beedrill', minLevel: 66, maxLevel: 75, chance: 15 }, 
						{ name: 'nidoking', minLevel: 67, maxLevel: 72, chance: 7 }, 
						{ name: 'nidoqueen', minLevel: 68, maxLevel: 71, chance: 7 },      
			        ],
				},
			},
			rockClister: {
				name: [`Rock cluster`, `Cúmulo de rocas`,
				`岩石堆`],
				position: { x: 0, y: 7 },
				size: { w: 3, h: 2.2 },
				event: {
					condition: {
						type: 'item',
						item: 'powerBracelet',
						exception: 'needPowerBracelet'
					},
					type: 'rockSmash',
					route: 'route2-1',
					newRoute: 'route2-1bis',
				},
			},
		}
	},
	'route2-1bis': {
		name: ['Route 2', 'Ruta 2', '2号道路'],
		background: "assets/images/map/kanto/route/route2-1bis.png",
		song: "route1",
		worldEvent: {
			stormShortcut: {
				name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
				position: { x: 0, y: 7 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'stormShortcut-1'
				},
			},
			viridianCity: {
				name: ['Viridian City', 'Ciudad Verde', '常磐市'],
				position: { x: 22, y: 2 },
				size: { w: 3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'viridianCity-2'
				},
			},
			viridianForest: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 7.8, y: 0 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 		
						{ name: 'beedrill', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 17 }, 
						{ name: 'noctowl', minLevel: 69, maxLevel: 72, chance: 13 }, 
						{ name: 'pidgeotto', minLevel: 66, maxLevel: 75, chance: 9 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'nidorino', minLevel: 68, maxLevel: 71, chance: 8 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'pidgeot', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'metapod', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'kakuna', minLevel: 68, maxLevel: 74, chance: 5 }, 
						{ name: 'nidoqueen', minLevel: 67, maxLevel: 72, chance: 2 }, 
						{ name: 'nidoking', minLevel: 68, maxLevel: 71, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'viridianForest-1'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 2 },
				size: { w: 4, h: 12 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 33 }, 
						{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 17 }, 
						{ name: 'nidorina', minLevel: 68, maxLevel: 71, chance: 17 }, 
						{ name: 'ariados', minLevel: 67, maxLevel: 75, chance: 9 }, 
						{ name: 'ledian', minLevel: 66, maxLevel: 72, chance: 9 }, 
						{ name: 'nidoqueen', minLevel: 68, maxLevel: 72, chance: 6 }, 
			           	{ name: 'nidoking', minLevel: 66, maxLevel: 75, chance: 6 }, 
						{ name: 'raichu', minLevel: 66, maxLevel: 74, chance: 3 }, 
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 11 },
				size: { w: 5, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 28 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 73, chance: 28 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'beedrill', minLevel: 66, maxLevel: 75, chance: 15 }, 
						{ name: 'nidoking', minLevel: 67, maxLevel: 72, chance: 7 }, 
						{ name: 'nidoqueen', minLevel: 68, maxLevel: 71, chance: 7 },      
			        ],
				},
			},
		}
	},
	'route2-2': {
		name: ['Route 2', 'Ruta 2', '2号道路'],
		background: "assets/images/map/kanto/route/route2-2.png",
		song: "route1",
		worldEvent: {
			viridianForest: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 7.7, y: 15 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 17 }, 
						{ name: 'noctowl', minLevel: 69, maxLevel: 72, chance: 13 }, 
						{ name: 'pidgeotto', minLevel: 66, maxLevel: 75, chance: 9 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'nidorino', minLevel: 68, maxLevel: 71, chance: 8 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'pidgeot', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'metapod', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'kakuna', minLevel: 68, maxLevel: 74, chance: 5 }, 
						{ name: 'nidoqueen', minLevel: 67, maxLevel: 72, chance: 2 }, 
						{ name: 'nidoking', minLevel: 68, maxLevel: 71, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'viridianForest-3'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 2 },
				size: { w: 10, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 2', 'Ruta 2', '2号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 35 }, 
						{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 17 }, 
						{ name: 'nidorina', minLevel: 68, maxLevel: 71, chance: 17 }, 
						{ name: 'raichu', minLevel: 66, maxLevel: 74, chance: 13 }, 
						{ name: 'ariados', minLevel: 67, maxLevel: 75, chance: 9 }, 
						{ name: 'ledian', minLevel: 66, maxLevel: 72, chance: 9 }, 
			        ],
				},
			},
			pewterCity: {
				name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
				position: { x: 13.7, y: 0 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelCity',
					location: 'pewterCity-1'
				},
			},
		}
	},
	'stormShortcut-1': {
		name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
		background: "assets/images/map/kanto/route/stormShortcut-1.png",
		song: "groudonKyogre",
		worldEvent: {
			route2: {
				name: ['Route 2', 'Ruta 2', '2号道路'],
				position: { x: 22, y: 7 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'travelRoute',
					location: 'route2-1'
				},
			},
			stormShortcut: {
				name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
				position: { x: 0, y: 2 },
				size: { w: 6, h: 10.2 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 88, maxLevel: 92, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 89, maxLevel: 93, chance: 15 }, 
						{ name: 'lanturn', minLevel: 88, maxLevel: 94, chance: 15 }, 
						{ name: 'starmie', minLevel: 87, maxLevel: 92, chance: 10 }, 
						{ name: 'politoed', minLevel: 88, maxLevel: 94, chance: 10 }, 
						{ name: 'slowking', minLevel: 89, maxLevel: 92, chance: 5 }, 
						{ name: 'cloyster', minLevel: 86, maxLevel: 93, chance: 5 }, 
						{ name: 'blastoise', minLevel: 88, maxLevel: 94, chance: 5 }, 
						{ name: 'feraligatr', minLevel: 91, maxLevel: 95, chance: 5 },
						{ name: 'slowbro', minLevel: 90, maxLevel: 92, chance: 3 },
						{ name: 'gyarados', minLevel: 88, maxLevel: 94, chance: 3 },
						{ name: 'lapras', minLevel: 87, maxLevel: 92, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'stormShortcut-2'
			        }
				},
			},
		}
	},
	'stormShortcut-2': {
		name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
		background: "assets/images/map/kanto/route/stormShortcut-2.png",
		song: "groudonKyogre",
		worldEvent: {
			stormShortcut: {
				name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
				position: { x: 19, y: 4 },
				size: { w: 6, h: 12 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 88, maxLevel: 92, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 89, maxLevel: 93, chance: 15 }, 
						{ name: 'lanturn', minLevel: 88, maxLevel: 94, chance: 15 }, 
						{ name: 'starmie', minLevel: 87, maxLevel: 92, chance: 10 }, 
						{ name: 'politoed', minLevel: 88, maxLevel: 94, chance: 10 }, 
						{ name: 'slowking', minLevel: 89, maxLevel: 92, chance: 5 }, 
						{ name: 'cloyster', minLevel: 86, maxLevel: 93, chance: 5 }, 
						{ name: 'blastoise', minLevel: 88, maxLevel: 94, chance: 5 }, 
						{ name: 'feraligatr', minLevel: 91, maxLevel: 95, chance: 5 },
						{ name: 'slowbro', minLevel: 90, maxLevel: 92, chance: 3 },
						{ name: 'gyarados', minLevel: 88, maxLevel: 94, chance: 3 },
						{ name: 'lapras', minLevel: 87, maxLevel: 92, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'stormShortcut-1'
			        }
				},
			},
			kyogre: {
				name: ['Kyogre', 'Kyogre', '盖欧卡'], 
				position: { x: 10, y: 5 },
				size: { w: 4, h: 4 },
				event: {
					image: './assets/images/pokemon/sprite/kyogre.png',
					type: 'dialogue',
					npc: 'kyogre'
				},
			},
		}
	},
	'stormShortcut-2bis': {
		name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
		background: "assets/images/map/kanto/route/stormShortcut-2.png",
		song: "groudonKyogre",
		worldEvent: {
			stormShortcut: {
					name: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
				position: { x: 19, y: 4 },
				size: { w: 6, h: 12 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 88, maxLevel: 92, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 89, maxLevel: 93, chance: 15 }, 
						{ name: 'lanturn', minLevel: 88, maxLevel: 94, chance: 15 }, 
						{ name: 'starmie', minLevel: 87, maxLevel: 92, chance: 10 }, 
						{ name: 'politoed', minLevel: 88, maxLevel: 94, chance: 10 }, 
						{ name: 'slowking', minLevel: 89, maxLevel: 92, chance: 5 }, 
						{ name: 'cloyster', minLevel: 86, maxLevel: 93, chance: 5 }, 
						{ name: 'blastoise', minLevel: 88, maxLevel: 94, chance: 5 }, 
						{ name: 'feraligatr', minLevel: 91, maxLevel: 95, chance: 5 },
						{ name: 'slowbro', minLevel: 90, maxLevel: 92, chance: 3 },
						{ name: 'gyarados', minLevel: 88, maxLevel: 94, chance: 3 },
						{ name: 'lapras', minLevel: 87, maxLevel: 92, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'stormShortcut-1'
			        }
				},
			},
		}
	},
	'viridianForest-1': {
		name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
		background: "assets/images/map/kanto/route/viridianForest-1.png",
		song: "viridianForest",
		worldEvent: {
			viridianForest: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 0, y: 6.8 },
				size: { w: 3, h: 6.5 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'ariados', minLevel: 68, maxLevel: 74, chance: 10 }, 
						{ name: 'ledian', minLevel: 68, maxLevel: 74, chance: 10 },
						{ name: 'raichu', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'scyther', minLevel: 68, maxLevel: 74, chance: 5 },
						{ name: 'pinsir', minLevel: 68, maxLevel: 74, chance: 5 },
						{ name: 'pikachu', minLevel: 68, maxLevel: 71, chance: 4 }, 
						{ name: 'kakuna', minLevel: 67, maxLevel: 73, chance: 3 }, 
						{ name: 'metapod', minLevel: 68, maxLevel: 74, chance: 3 },
						{ name: 'weedle', minLevel: 67, maxLevel: 73, chance: 2 }, 
						{ name: 'caterpie', minLevel: 68, maxLevel: 74, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'viridianForest-2'
			        }
				},
			},
			route2: {
				name: ['Route 2', 'Ruta 2', '2号道路'],
				position: { x: 7.8, y: 15 },
				size: { w: 5.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 17 }, 
						{ name: 'noctowl', minLevel: 69, maxLevel: 72, chance: 13 }, 
						{ name: 'pidgeotto', minLevel: 66, maxLevel: 75, chance: 9 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'nidorino', minLevel: 68, maxLevel: 71, chance: 8 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'pidgeot', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'metapod', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'kakuna', minLevel: 68, maxLevel: 74, chance: 5 }, 
						{ name: 'nidoqueen', minLevel: 67, maxLevel: 72, chance: 2 }, 
						{ name: 'nidoking', minLevel: 68, maxLevel: 71, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'route2-1'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 3 },
				size: { w: 4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'noctowl', minLevel: 5, maxLevel: 5, chance: 30 },
						{ name: 'pidgeot', minLevel: 5, maxLevel: 5, chance: 20 },
			            { name: 'hoothoot', minLevel: 5, maxLevel: 5, chance: 15 },
						{ name: 'pidgeotto', minLevel: 5, maxLevel: 5, chance: 10 },
						{ name: 'ledian', minLevel: 5, maxLevel: 5, chance: 10 },
			            { name: 'beedrill', minLevel: 5, maxLevel: 5, chance: 10 },
			            { name: 'pinsir', minLevel: 5, maxLevel: 5, chance: 5 },
			           
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 18, y: 6 },
				size: { w: 5, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'noctowl', minLevel: 5, maxLevel: 5, chance: 30 },
						{ name: 'pidgeot', minLevel: 5, maxLevel: 5, chance: 20 },
						{ name: 'pidgeotto', minLevel: 5, maxLevel: 5, chance: 15 },
			            { name: 'hoothoot', minLevel: 5, maxLevel: 5, chance: 10 },
						{ name: 'ariados', minLevel: 5, maxLevel: 5, chance: 10 },
			            { name: 'butterfree', minLevel: 5, maxLevel: 5, chance: 10 },
			            { name: 'scyther', minLevel: 5, maxLevel: 5, chance: 5 },
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 13},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselViridianForest',
					tw: false
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 10, y: 0 },
				size: { w: 5, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'bugCatcherViridianForest'
				},
			},
		}
	},
	'viridianForest-2': {
		name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
		background: "assets/images/map/kanto/route/viridianForest-2.png",
		song: "viridianForest",
		worldEvent: {
			viridianForestA: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 15.7, y: 0 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'ariados', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'ledian', minLevel: 68, maxLevel: 74, chance: 15 },
						{ name: 'pidgeot', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 68, maxLevel: 74, chance: 10 }, 
						{ name: 'noctowl', minLevel: 68, maxLevel: 74, chance: 10 }, 
						{ name: 'scyther', minLevel: 68, maxLevel: 74, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'viridianForest-3'
			        }
				},
			},
			viridianForestB: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 23, y: 6.8 },
				size: { w: 2, h: 6.5 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'ariados', minLevel: 68, maxLevel: 74, chance: 10 }, 
						{ name: 'ledian', minLevel: 68, maxLevel: 74, chance: 10 },
						{ name: 'raichu', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'scyther', minLevel: 68, maxLevel: 74, chance: 5 },
						{ name: 'pinsir', minLevel: 68, maxLevel: 74, chance: 5 },
						{ name: 'pikachu', minLevel: 68, maxLevel: 71, chance: 4 }, 
						{ name: 'kakuna', minLevel: 67, maxLevel: 73, chance: 3 }, 
						{ name: 'metapod', minLevel: 68, maxLevel: 74, chance: 3 },
						{ name: 'weedle', minLevel: 67, maxLevel: 73, chance: 2 }, 
						{ name: 'caterpie', minLevel: 68, maxLevel: 74, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'viridianForest-1'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 3 },
				size: { w: 4, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'beedrill', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'ariados', minLevel: 68, maxLevel: 74, chance: 25 }, 
						{ name: 'ledian', minLevel: 68, maxLevel: 74, chance: 25 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 9, y: 10 },
				size: { w: 5, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'beedrill', minLevel: 68, maxLevel: 74, chance: 20 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 20 }, 
						{ name: 'ariados', minLevel: 68, maxLevel: 74, chance: 20 }, 
						{ name: 'ledian', minLevel: 68, maxLevel: 74, chance: 20 },
						{ name: 'ledyba', minLevel: 68, maxLevel: 74, chance: 5 }, 
						{ name: 'spinarak', minLevel: 68, maxLevel: 74, chance: 5 },
			            { name: 'kakuna', minLevel: 68, maxLevel: 74, chance: 3 }, 
						{ name: 'metapod', minLevel: 68, maxLevel: 74, chance: 3 }, 
						{ name: 'weedle', minLevel: 68, maxLevel: 74, chance: 2 }, 
						{ name: 'caterpie', minLevel: 68, maxLevel: 74, chance: 2 }, 
			        ],
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 7, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'viridianForestHiddenItem',
					invisible: true
				},
			},
		}
	},
	'viridianForest-3': {
		name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
		background: "assets/images/map/kanto/route/viridianForest-3.png",
		song: "viridianForest",
		worldEvent: {
			viridianForest: {
				name: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
				position: { x: 15.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'ariados', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'ledian', minLevel: 68, maxLevel: 74, chance: 15 },
						{ name: 'pidgeot', minLevel: 68, maxLevel: 74, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 68, maxLevel: 74, chance: 10 }, 
						{ name: 'noctowl', minLevel: 68, maxLevel: 74, chance: 10 }, 
						{ name: 'scyther', minLevel: 68, maxLevel: 74, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'viridianForest-2'
			        }
				},
			},
			route2: {
				name: ['Route 2', 'Ruta 2', '2号道路'],
				position: { x: 7.7, y: 0 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'beedrill', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'butterfree', minLevel: 68, maxLevel: 74, chance: 17 }, 
						{ name: 'noctowl', minLevel: 69, maxLevel: 72, chance: 13 }, 
						{ name: 'pidgeotto', minLevel: 66, maxLevel: 75, chance: 9 }, 
						{ name: 'nidorina', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'nidorino', minLevel: 68, maxLevel: 71, chance: 8 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 72, chance: 8 }, 
						{ name: 'pidgeot', minLevel: 68, maxLevel: 71, chance: 6 }, 
						{ name: 'metapod', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'kakuna', minLevel: 68, maxLevel: 74, chance: 5 }, 
						{ name: 'nidoqueen', minLevel: 67, maxLevel: 72, chance: 2 }, 
						{ name: 'nidoking', minLevel: 68, maxLevel: 71, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'route2-2'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 9 },
				size: { w: 4, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'pidgeot', minLevel: 65, maxLevel: 73, chance: 30 },
						{ name: 'noctowl', minLevel: 68, maxLevel: 72, chance: 20 },
			            { name: 'hoothoot', minLevel: 69, maxLevel: 74, chance: 15 },
						{ name: 'pidgeotto', minLevel: 68, maxLevel: 72, chance: 10 },
						{ name: 'ariados', minLevel: 67, maxLevel: 73, chance: 10 },
			            { name: 'beedrill', minLevel: 70, maxLevel: 75, chance: 10 },
			            { name: 'pinsir', minLevel: 66, maxLevel: 72, chance: 5 },          
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 6 },
				size: { w: 5, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Viridian Forest', 'Bosque Verde', '常磐森林'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'pidgeot', minLevel: 65, maxLevel: 73, chance: 30 },
						{ name: 'noctowl', minLevel: 66, maxLevel: 74, chance: 20 },
			            { name: 'hoothoot', minLevel: 67, maxLevel: 75, chance: 15 },
						{ name: 'pidgeotto', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'ledian', minLevel: 68, maxLevel: 73, chance: 10 },
			            { name: 'butterfree', minLevel: 67, maxLevel: 75, chance: 10 },
			            { name: 'scyther', minLevel: 66, maxLevel: 72, chance: 5 },   	           
			        ],
				},
			},
		}
	},
	'route3-1': {
		name: ['Route 3', 'Ruta 3', '3号道路'],
		background: "assets/images/map/kanto/route/route3-1.png",
		song: "route3",
		worldEvent: {
			pewterCity: {
				name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
				position: { x: 0, y: 5.9 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'pewterCity-2'
				},
			},
			route3: {
				name: ['Route 3', 'Ruta 3', '3号道路'],
				position: { x: 23, y: 9 },
				size: { w: 2, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 3', 'Ruta 3', '3号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 70, maxLevel: 72, chance: 20 },
						{ name: 'raticate', minLevel: 69, maxLevel: 73, chance: 18 },
			            { name: 'sandslash', minLevel: 69, maxLevel: 73, chance: 17 },
			            { name: 'arbok', minLevel: 71, maxLevel: 72, chance: 12 },
			            { name: 'fearow', minLevel: 71, maxLevel: 74, chance: 12 },
			            { name: 'wigglytuff', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 7 },
			            { name: 'ekans', minLevel: 70, maxLevel: 75, chance: 6 },
			        ],
			         travel: {
			        	battles: [0, 20], 
			        	location: 'route3-2'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 3, y: 12 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 3', 'Ruta 3', '3号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'primeape', minLevel: 70, maxLevel: 75, chance: 20 },
						{ name: 'raticate', minLevel: 69, maxLevel: 75, chance: 18 },
			            { name: 'sandslash', minLevel: 69, maxLevel: 75, chance: 17 },
			            { name: 'wigglytuff', minLevel: 72, maxLevel: 76, chance: 15 },
			            { name: 'arbok', minLevel: 71, maxLevel: 78, chance: 12 },
			            { name: 'sandshrew', minLevel: 71, maxLevel: 74, chance: 12 },
			            { name: 'mankey', minLevel: 70, maxLevel: 78, chance: 6 },
			        ],
				},
			},
		}
	},
	'route3-2': {
		name: ['Route 3', 'Ruta 3', '3号道路'],
		background: "assets/images/map/kanto/route/route3-2.png",
		song: "route3",
		worldEvent: {
			route3: {
				name: ['Route 3', 'Ruta 3', '3号道路'],
				position: { x: 0, y: 9 },
				size: { w: 3, h: 2.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 3', 'Ruta 3', '3号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 70, maxLevel: 72, chance: 20 },
						{ name: 'raticate', minLevel: 69, maxLevel: 73, chance: 18 },
			            { name: 'sandslash', minLevel: 69, maxLevel: 73, chance: 17 },
			            { name: 'arbok', minLevel: 71, maxLevel: 72, chance: 12 },
			            { name: 'fearow', minLevel: 71, maxLevel: 74, chance: 12 },
			            { name: 'wigglytuff', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 7 },
			            { name: 'ekans', minLevel: 70, maxLevel: 75, chance: 6 },
			        ],
			         travel: {
			        	battles: [0, 20], 
			        	location: 'route3-1'
			        }
				},
			},
			route4: {
				name: ['Route 4', 'Ruta 4', '4号道路'],
				position: { x: 17.9, y: 0 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 4', 'Ruta 4', '4号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 70, maxLevel: 75, chance: 20 },
						{ name: 'golduck', minLevel: 69, maxLevel: 77, chance: 18 },
			            { name: 'arbok', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'fearow', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 10 },
			            { name: 'forretress', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 7 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 7 },
			            { name: 'pineco', minLevel: 70, maxLevel: 76, chance: 6 },
			        ],
			         travel: {
			        	battles: [0, 16], 
			        	location: 'route4-1'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 10, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route3HiddenItem',
					invisible: true
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 18, y: 12 },
				size: { w: 5, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 3', 'Ruta 3', '3号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 25 },
			            { name: 'forretress', minLevel: 72, maxLevel: 76, chance: 17 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 12 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 12 },
			            { name: 'pineco', minLevel: 70, maxLevel: 76, chance: 12 },
			            { name: 'granbull', minLevel: 70, maxLevel: 76, chance: 7 },
			            { name: 'primeape', minLevel: 70, maxLevel: 75, chance: 5 },
						{ name: 'golduck', minLevel: 69, maxLevel: 77, chance: 5 },
			            { name: 'arbok', minLevel: 71, maxLevel: 75, chance: 5 },
			        ],
				},
			},
		}
	},
	'route4-1': {
		name: ['Route 4', 'Ruta 4', '4号道路'],
		background: "assets/images/map/kanto/route/route4-1.png",
		song: "route3",
		worldEvent: {
			mtMoon: {
				name: ['Mt. Moon', 'Mt. Moon', '月见山'],
				position: { x: 18, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMoon-1'
				},
			},
			route3: {
				name: ['Route 3', 'Ruta 3', '3号道路'],
				position: { x: 17.9, y: 15 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 3', 'Ruta 3', '3号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 70, maxLevel: 75, chance: 20 },
						{ name: 'golduck', minLevel: 69, maxLevel: 77, chance: 18 },
			            { name: 'arbok', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'fearow', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 10 },
			            { name: 'forretress', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 7 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 7 },
			            { name: 'pineco', minLevel: 70, maxLevel: 76, chance: 6 },
			        ],
			         travel: {
			        	battles: [0, 16], 
			        	location: 'route3-2'
			        }
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 3, y: 1.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route4-1',
					inRoute: true
				},
			},
		}
	},
	'route4-2': {
		name: ['Route 4', 'Ruta 4', '4号道路'],
		background: "assets/images/map/kanto/route/route4-2.png",
		song: "route3",
		worldEvent: {
			route4: {
				name: ['Route 4', 'Ruta 4', '4号道路'],
				position: { x: 22, y: 10 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 4', 'Ruta 4', '4号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
			           { name: 'granbull', minLevel: 72, maxLevel: 76, chance: 17 },
						{ name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 14 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 12 },
						{ name: 'arbok', minLevel: 71, maxLevel: 75, chance: 10 },
						{ name: 'primeape', minLevel: 69, maxLevel: 77, chance: 10 },
			            { name: 'forretress', minLevel: 72, maxLevel: 76, chance: 10 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 10 },
						{ name: 'donphan', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'pineco', minLevel: 70, maxLevel: 76, chance: 5 },
			            { name: 'gligar', minLevel: 72, maxLevel: 76, chance: 3 },
			            { name: 'ursaring', minLevel: 72, maxLevel: 76, chance: 1 },
			        ],
			         travel: {
			        	battles: [0, 15], 
			        	location: 'route4-3'
			        }
				},
			},
			mtMoon: {
				name: ['Mt. Moon', 'Mt. Moon', '月见山'],
				position: { x: 3, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtMoon-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 11 },
				size: { w: 7, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 4', 'Ruta 4', '4号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [  
						{ name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 20 },
						{ name: 'granbull', minLevel: 72, maxLevel: 76, chance: 17 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 17 },
						{ name: 'donphan', minLevel: 72, maxLevel: 76, chance: 15 },
						{ name: 'arbok', minLevel: 71, maxLevel: 75, chance: 12 },
						{ name: 'ursaring', minLevel: 72, maxLevel: 76, chance: 8 },
						{ name: 'primeape', minLevel: 69, maxLevel: 77, chance: 6 },
			            { name: 'gligar', minLevel: 72, maxLevel: 76, chance: 5 },
			        ],
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 14, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route4HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route4-3': {
		name: ['Route 4', 'Ruta 4', '4号道路'],
		background: "assets/images/map/kanto/route/route4-3.png",
		song: "route3",
		worldEvent: {
			ceruleanCity: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 22, y: 2 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-1'
				},
			},
			route4: {
				name: ['Route 4', 'Ruta 4', '4号道路'],
				position: { x: 0, y: 9.8 },
				size: { w: 3, h: 2.5 },
				event: {
					type: 'routeBattle',
					title: ['Route 4', 'Ruta 4', '4号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'granbull', minLevel: 72, maxLevel: 76, chance: 17 },
						{ name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 14 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 12 },
						{ name: 'arbok', minLevel: 71, maxLevel: 75, chance: 10 },
						{ name: 'primeape', minLevel: 69, maxLevel: 77, chance: 10 },
			            { name: 'forretress', minLevel: 72, maxLevel: 76, chance: 10 },
			            { name: 'lickitung', minLevel: 72, maxLevel: 76, chance: 10 },
						{ name: 'donphan', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'pineco', minLevel: 70, maxLevel: 76, chance: 5 },
			            { name: 'gligar', minLevel: 72, maxLevel: 76, chance: 3 },
			            { name: 'ursaring', minLevel: 72, maxLevel: 76, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route4-2'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 2 },
				size: { w: 8, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 4', 'Ruta 4', '4号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [  
						{ name: 'granbull', minLevel: 72, maxLevel: 76, chance: 17 },
			            { name: 'chansey', minLevel: 69, maxLevel: 77, chance: 17 },
						{ name: 'sandslash', minLevel: 69, maxLevel: 77, chance: 15 },
						{ name: 'arbok', minLevel: 71, maxLevel: 75, chance: 15 },
						{ name: 'donphan', minLevel: 72, maxLevel: 76, chance: 10 },
						{ name: 'primeape', minLevel: 69, maxLevel: 77, chance: 10 },
						{ name: 'ursaring', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'pineco', minLevel: 70, maxLevel: 76, chance: 5 },
			            { name: 'gligar', minLevel: 72, maxLevel: 76, chance: 3 },
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 14, y: 2},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute4',
					tw: false
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 19, y: 8 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'caveDrifterRoute4'
				},
			},
		}
	},
	'mtMoon-1': {
		name: ['Mt. Moon', 'Mt. Moon', '月见山'],
		background: "assets/images/map/kanto/cave/mtMoon-1.png",
		song: "mtMoon",
		worldEvent: {
			mtMoon: {
				name: ['Mt. Moon', 'Mt. Moon', '月见山'],
				position: { x: 22, y: 7 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Moon', 'Mt. Moon', '月见山'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'clefable', minLevel: 69, maxLevel: 77, chance: 21 },
						{ name: 'golbat', minLevel: 72, maxLevel: 76, chance: 16 },
			            { name: 'clefairy', minLevel: 69, maxLevel: 77, chance: 16 },
						{ name: 'onix', minLevel: 71, maxLevel: 75, chance: 14 },
						{ name: 'graveler', minLevel: 71, maxLevel: 75, chance: 13 },
						{ name: 'parasect', minLevel: 71, maxLevel: 75, chance: 12 },
						{ name: 'golem', minLevel: 72, maxLevel: 76, chance: 3 },
						{ name: 'zubat', minLevel: 71, maxLevel: 75, chance: 3 },
						{ name: 'shuckle', minLevel: 71, maxLevel: 75, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'mtMoon-2'
			        }
				},
			},
			route4: {
				name: ['Route 4', 'Ruta 4', '4号道路'],
				position: { x: 9, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route4-1'
				},
			},
		}
	},
	'mtMoon-2': {
		name: ['Mt. Moon', 'Mt. Moon', '月见山'],
		background: "assets/images/map/kanto/cave/mtMoon-2.png",
		song: "mtMoon",
		worldEvent: {
			mtMoonA: {
				name: ['Mt. Moon', 'Mt. Moon', '月见山'],
				position: { x: 0, y: 7 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Moon', 'Mt. Moon', '月见山'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'clefable', minLevel: 69, maxLevel: 77, chance: 21 },
						{ name: 'golbat', minLevel: 72, maxLevel: 76, chance: 16 },
			            { name: 'clefairy', minLevel: 69, maxLevel: 77, chance: 16 },
						{ name: 'onix', minLevel: 71, maxLevel: 75, chance: 14 },
						{ name: 'graveler', minLevel: 71, maxLevel: 75, chance: 13 },
						{ name: 'parasect', minLevel: 71, maxLevel: 75, chance: 12 },
						{ name: 'golem', minLevel: 72, maxLevel: 76, chance: 3 },
						{ name: 'zubat', minLevel: 71, maxLevel: 75, chance: 3 },
						{ name: 'shuckle', minLevel: 71, maxLevel: 75, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'mtMoon-1'
			        }
				},
			},
			mtMoonB: {
				name: ['Mt. Moon', 'Mt. Moon', '月见山'],
				position: { x: 22, y: 11 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Moon', 'Mt. Moon', '月见山'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'parasect', minLevel: 71, maxLevel: 75, chance: 18 },
						{ name: 'clefable', minLevel: 69, maxLevel: 77, chance: 18 },
						{ name: 'golbat', minLevel: 72, maxLevel: 76, chance: 16 },
						{ name: 'onix', minLevel: 71, maxLevel: 75, chance: 14 },
						{ name: 'graveler', minLevel: 71, maxLevel: 75, chance: 13 },
			            { name: 'clefairy', minLevel: 69, maxLevel: 77, chance: 10 },
						{ name: 'kadabra', minLevel: 72, maxLevel: 76, chance: 6 },
						{ name: 'shuckle', minLevel: 71, maxLevel: 75, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'mtMoon-3'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 7 },
				size: { w: 7, h: 3 },
				event: {
					type: 'routeBattle',
					title:  ['Mt. Moon', 'Mt. Moon', '月见山'],
					background: './assets/images/background/battle2.png',
					pokemon: [  
						{ name: 'clefable', minLevel: 69, maxLevel: 74, chance: 30 },
			            { name: 'clefairy', minLevel: 69, maxLevel: 72, chance: 20 },
						{ name: 'parasect', minLevel: 71, maxLevel: 75, chance: 17 },
						{ name: 'graveler', minLevel: 71, maxLevel: 75, chance: 13 },
						{ name: 'golbat', minLevel: 72, maxLevel: 76, chance: 12 },
						{ name: 'shuckle', minLevel: 71, maxLevel: 75, chance: 8 },     	
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 8, y: 3 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselMtMoon',
					tw: false
				},
			},
		}
	},
	'mtMoon-3': {
		name: ['Mt. Moon', 'Mt. Moon', '月见山'],
		background: "assets/images/map/kanto/cave/mtMoon-3.png",
		song: "mtMoon",
		worldEvent: {
			mtMoon: {
				name: ['Mt. Moon', 'Mt. Moon', '月见山'],
				position: { x: 0, y: 11 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Moon', 'Mt. Moon', '月见山'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'parasect', minLevel: 71, maxLevel: 75, chance: 18 },
						{ name: 'clefable', minLevel: 69, maxLevel: 77, chance: 18 },
						{ name: 'golbat', minLevel: 72, maxLevel: 76, chance: 16 },
						{ name: 'onix', minLevel: 71, maxLevel: 75, chance: 14 },
						{ name: 'graveler', minLevel: 71, maxLevel: 75, chance: 13 },
			            { name: 'clefairy', minLevel: 69, maxLevel: 77, chance: 10 },
						{ name: 'kadabra', minLevel: 72, maxLevel: 76, chance: 6 },
						{ name: 'shuckle', minLevel: 71, maxLevel: 75, chance: 5 },
			        ],
			         travel: {
			        	battles: [0, 14], 
			        	location: 'mtMoon-2'
			        }
				},
			},
			route4: {
				name: ['Route 4', 'Ruta 4', '4号道路'],
				position: { x: 17, y: 10 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route4-2'
				},
			},
		}
	},
	'route5-1': {
		name: ['Route 5', 'Ruta 5', '5号道路'],
		background: "assets/images/map/kanto/route/route5-1.png",
		song: "route3",
		worldEvent: {
			ceruleanCity: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 10.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-2'
				},
			},
			route5A: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 1.8, y: 16 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 5', 'Ruta 5', '5号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'magneton', minLevel: 59, maxLevel: 64, chance: 35 }, 
						{ name: 'golduck', minLevel: 58, maxLevel: 63, chance: 15 }, 
						{ name: 'granbull', minLevel: 61, maxLevel: 65, chance: 15 }, 
						{ name: 'hypno', minLevel: 60, maxLevel: 64, chance: 9 }, 
						{ name: 'kadabra', minLevel: 62, maxLevel: 66, chance: 7 }, 
						{ name: 'bellossom', minLevel: 59, maxLevel: 65, chance: 7 }, 
						{ name: 'gloom', minLevel: 58, maxLevel: 65, chance: 7 }, 
						{ name: 'drowzee', minLevel: 60, maxLevel: 62, chance: 3 }, 
						{ name: 'alakazam', minLevel: 60, maxLevel: 62, chance: 2 },   
			        ],
			        travel: {
			        	battles: [0, 35], 
			        	location: 'route5-2'
			        }
				},
			},
			route5B: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 17.8, y: 16 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 5', 'Ruta 5', '5号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'ninetales', minLevel: 59, maxLevel: 64, chance: 35 }, 
						{ name: 'pidgeotto', minLevel: 58, maxLevel: 63, chance: 15 }, 
						{ name: 'granbull', minLevel: 61, maxLevel: 65, chance: 15 }, 
						{ name: 'snubbull', minLevel: 60, maxLevel: 64, chance: 9 }, 
						{ name: 'kadabra', minLevel: 62, maxLevel: 66, chance: 7 }, 
						{ name: 'vileplume', minLevel: 59, maxLevel: 65, chance: 7 }, 
						{ name: 'gloom', minLevel: 58, maxLevel: 65, chance: 7 }, 
						{ name: 'persian', minLevel: 60, maxLevel: 62, chance: 3 }, 
						{ name: 'pidgeot', minLevel: 60, maxLevel: 62, chance: 2 },   
			        ],
			        travel: {
			        	battles: [0, 35], 
			        	location: 'route5-2'
			        }
				},
			},
			route5C: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 7.4, y: 16 },
				size: { w: 10.2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route5-2',
					sound: 'jump1'
				},
			},
		}
	},
	'route5-2': {
		name: ['Route 5', 'Ruta 5', '5号道路'],
		background: "assets/images/map/kanto/route/route5-2.png",
		song: "route3",
		worldEvent: {
			saffronCity: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 11.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-1'
				},
			},
			route5A: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 1.8, y: 0 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 5', 'Ruta 5', '5号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'magneton', minLevel: 59, maxLevel: 64, chance: 35 }, 
						{ name: 'golduck', minLevel: 58, maxLevel: 63, chance: 15 }, 
						{ name: 'granbull', minLevel: 61, maxLevel: 65, chance: 15 }, 
						{ name: 'hypno', minLevel: 60, maxLevel: 64, chance: 9 }, 
						{ name: 'kadabra', minLevel: 62, maxLevel: 66, chance: 7 }, 
						{ name: 'bellossom', minLevel: 59, maxLevel: 65, chance: 7 }, 
						{ name: 'gloom', minLevel: 58, maxLevel: 65, chance: 7 }, 
						{ name: 'drowzee', minLevel: 60, maxLevel: 62, chance: 3 }, 
						{ name: 'alakazam', minLevel: 60, maxLevel: 62, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 35], 
			        	location: 'route5-1'
			        }
				},
			},
			route5B: {
				name: ['Route 5', 'Ruta 5', '5号道路'],
				position: { x: 17.8, y: 0 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 5', 'Ruta 5', '5号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'ninetales', minLevel: 59, maxLevel: 64, chance: 35 }, 
						{ name: 'pidgeotto', minLevel: 58, maxLevel: 63, chance: 15 }, 
						{ name: 'granbull', minLevel: 61, maxLevel: 65, chance: 15 }, 
						{ name: 'snubbull', minLevel: 60, maxLevel: 64, chance: 9 }, 
						{ name: 'kadabra', minLevel: 62, maxLevel: 66, chance: 7 }, 
						{ name: 'vileplume', minLevel: 59, maxLevel: 65, chance: 7 }, 
						{ name: 'gloom', minLevel: 58, maxLevel: 65, chance: 7 }, 
						{ name: 'persian', minLevel: 60, maxLevel: 62, chance: 3 }, 
						{ name: 'pidgeot', minLevel: 60, maxLevel: 62, chance: 2 },    
			        ],
			        travel: {
			        	battles: [0, 35], 
			        	location: 'route5-1'
			        }
				},
			},
		}
	},
	'route6-1': {
		name: ['Route 6', 'Ruta 6', '6号道路'],
		background: "assets/images/map/kanto/route/route6-1.png",
		song: "route3",
		worldEvent: {
			vermilionCity: {
				name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
				position: { x: 11.4, y: 16 },
				size: { w: 3.2, h: 2 },
				event: {
					type: 'travelCity',
					location: 'vermilionCity-2'
				},
			},
			route6: {
				name: ['Route 6', 'Ruta 6', '6号道路'],
				position: { x: 13.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 6', 'Ruta 6', '6号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'kadabra', minLevel: 55, maxLevel: 59, chance: 20 }, 
						{ name: 'poliwhirl', minLevel: 56, maxLevel: 58, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'pidgeot', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'victreebel', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'weepinbell', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'granbull', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'poliwrath', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'alakazam', minLevel: 56, maxLevel: 60, chance: 5 },  
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'route6-2'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 18, y: 4 },
				size: { w: 3, h: 7 },
				event: {
					type: 'routeBattle',
					title: ['Route 6', 'Ruta 6', '6号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'gloom', minLevel: 55, maxLevel: 59, chance: 17 }, 
						{ name: 'bellossom', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'hypno', minLevel: 58, maxLevel: 61, chance: 15 },
						{ name: 'kadabra', minLevel: 56, maxLevel: 58, chance: 10 }, 
						{ name: 'weepinbell', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'granbull', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'drowzee', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'victreebel', minLevel: 57, maxLevel: 60, chance: 5 }, 
						{ name: 'vileplume', minLevel: 55, maxLevel: 59, chance: 5 }, 
						{ name: 'persian', minLevel: 55, maxLevel: 59, chance: 5 }, 
						{ name: 'parasect', minLevel: 56, maxLevel: 58, chance: 4 },  
						{ name: 'alakazam', minLevel: 56, maxLevel: 60, chance: 3 },
			        ],
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 2, y: 5 },
				size: { w: 10, h: 4 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 6', 'Ruta 6', '6号道路'],
					background: './assets/images/background/battle12.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 52, maxLevel: 59, chance: 30 }, 
						{ name: 'seaking', minLevel: 51, maxLevel: 58, chance: 20 }, 
						{ name: 'golduck', minLevel: 50, maxLevel: 68, chance: 15 }, 
						{ name: 'magikarp', minLevel: 53, maxLevel: 58, chance: 13 }, 
						{ name: 'psyduck', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'goldeen', minLevel: 54, maxLevel: 61, chance: 7 }, 
						{ name: 'gyarados', minLevel: 56, maxLevel: 60, chance: 5 }, 
						{ name: 'poliwrath', minLevel: 58, maxLevel: 60, chance: 3 }, 
			        ],
				},
			},
		}
	},
	'route6-2': {
		name: ['Route 6', 'Ruta 6', '6号道路'],
		background: "assets/images/map/kanto/route/route6-2.png",
		song: "route3",
		worldEvent: {
			saffronCity: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 7.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-3'
				},
			},
			route6: {
				name: ['Route 6', 'Ruta 6', '6号道路'],
				position: { x: 13.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 6', 'Ruta 6', '6号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'kadabra', minLevel: 55, maxLevel: 59, chance: 20 }, 
						{ name: 'poliwhirl', minLevel: 56, maxLevel: 58, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'pidgeot', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'victreebel', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'weepinbell', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'granbull', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'poliwrath', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'alakazam', minLevel: 56, maxLevel: 60, chance: 5 },  
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'route6-1'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 10 },
				size: { w: 6, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 6', 'Ruta 6', '6号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'granbull', minLevel: 55, maxLevel: 59, chance: 35 }, 
						{ name: 'hypno', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'magneton', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'victreebel', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'weepinbell', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'kadabra', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'magnemite', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'alakazam', minLevel: 56, maxLevel: 60, chance: 5 },  			           
			        ],
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 13, y: 4 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselARoute6',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 16, y: 4 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute6',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 4 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute6',
					tw: false
				},
			},
		}
	},
	'route7-1': {
		name: ['Route 7', 'Ruta 7', '7号道路'],
		background: "assets/images/map/kanto/route/route7-1.png",
		song: "route3",
		worldEvent: {
			saffronCity: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 22, y: 7.7 },
				size: { w: 3, h: 3.8 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-1'
				},
			},
			celadonCity: {
				name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
				position: { x: 0, y: 1.9 },
				size: { w: 2, h: 3.3 },
				event: {
					type: 'travelCity',
					location: 'celadonCity-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 2 },
				size: { w: 13, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 7', 'Ruta 7', '7号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'ninetales', minLevel: 55, maxLevel: 59, chance: 35 }, 
						{ name: 'houndour', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'arcanine', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'growlithe', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'vulpix', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'kadabra', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'houndoom', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'murkrow', minLevel: 56, maxLevel: 60, chance: 5 },    
			        ],
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 4, y: 10 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'homelessRoute7'
				},
			},
		}
	},
	'route8-1': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-1.png",
		song: "route3",
		worldEvent: {
			saffronCity: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-2'
				},
			},
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 23, y: 13.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route8-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 4 },
				size: { w: 10, h: 8 },
				event: {
					type: 'routeBattle',
					title: ['Route 8', 'Ruta 8', '8号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'noctowl', minLevel: 56, maxLevel: 58, chance: 15 }, 
						{ name: 'ninetales', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'arcanine', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'wigglytuff', minLevel: 55, maxLevel: 59, chance: 10 }, 
						{ name: 'jigglypuff', minLevel: 55, maxLevel: 59, chance: 10 }, 
						{ name: 'vulpix', minLevel: 55, maxLevel: 59, chance: 10 }, 
						{ name: 'persian', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'growlithe', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'meowth', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'haunter', minLevel: 56, maxLevel: 60, chance: 5 },         
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 9, y: 4 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute8',
					tw: false
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 15, y: 16 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route8-1',
					newLocation: 'route8-1bis',
				},
			},	
		}
	},
	'route8-1bis': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-1bis.png",
		song: "route3",
		worldEvent: {
			saffronCity: {
				name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
				position: { x: 0, y: 6.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'saffronCity-2'
				},
			},
			route8A: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 23, y: 13.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route8-2'
				},
			},
			route8B: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 13.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route8-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 4 },
				size: { w: 10, h: 8 },
				event: {
					type: 'routeBattle',
					title: ['Route 8', 'Ruta 8', '8号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'noctowl', minLevel: 56, maxLevel: 58, chance: 15 }, 
						{ name: 'ninetales', minLevel: 55, maxLevel: 59, chance: 15 }, 
						{ name: 'arcanine', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'wigglytuff', minLevel: 55, maxLevel: 59, chance: 10 }, 
						{ name: 'jigglypuff', minLevel: 55, maxLevel: 59, chance: 10 }, 
						{ name: 'vulpix', minLevel: 55, maxLevel: 59, chance: 10 }, 
						{ name: 'persian', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'growlithe', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'meowth', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 7 }, 
						{ name: 'haunter', minLevel: 56, maxLevel: 60, chance: 5 },   
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 9, y: 4 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute8',
					tw: false
				},
			},
		}
	},
	'route8-2': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-2.png",
		song: "route3",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 0, y: 13.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route8-1'
				},
			},
			lavenderTown: {
				name: ['Lavender Town', 'Pueblo Lavanda', '紫苑镇'],
				position: { x: 22, y: 9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'travelCity',
					location: 'lavenderTown-1'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 7, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route8HiddenItemA',
					invisible: true
				},
			},
		}
	},
	'route8-3': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-3.png",
		song: "route3",
		worldEvent: {
			route8A: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 13.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route8-1'
				},
			},
			route8B: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 9.9, y: 16 },
				size: { w: 4.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route8-4'
				},
			},
		}
	},
	'route8-4': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-4.png",
		song: "route3",
		worldEvent: {
			route8A: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 9.9, y: 0 },
				size: { w: 4.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route8-3'
				},
			},
			route8B: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 21, y: 7.9 },
				size: { w: 4, h: 2.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 8', 'Ruta 8', '8号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'arcanine', minLevel: 56, maxLevel: 58, chance: 18 }, 
						{ name: 'ninetales', minLevel: 55, maxLevel: 59, chance: 17 }, 
						{ name: 'houndoom', minLevel: 55, maxLevel: 59, chance: 17 }, 
						{ name: 'persian', minLevel: 57, maxLevel: 60, chance: 10 }, 
						{ name: 'houndour', minLevel: 58, maxLevel: 61, chance: 7 }, 
						{ name: 'vulpix', minLevel: 55, maxLevel: 59, chance: 7 }, 
						{ name: 'growlithe', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'jigglypuff', minLevel: 55, maxLevel: 59, chance: 7 }, 
						{ name: 'meowth', minLevel: 55, maxLevel: 62, chance: 4 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 3 }, 
						{ name: 'haunter', minLevel: 56, maxLevel: 60, chance: 3 },  
			        ],
			        travel: {
			        	battles: [0, 26], 
			        	location: 'route8-6'
			        }
				},
			},
			route8C: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 3.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route8-5'
				},
			},
			ruralHouse: {
				name: ['Rural house', 'Casa rural', '乡村小屋'],
				position: { x: 3, y: 3.5},
				size: { w: 5, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'jewelerRoute8'
				},
			},
		}
	},
	'route8-5': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-5.png",
		song: "route3",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 3.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route8-4'
				},
			},
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 17.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route11-4'
				},
			},
		}
	},
	'route8-6': {
		name: ['Route 8', 'Ruta 8', '8号道路'],
		background: "assets/images/map/kanto/route/route8-6.png",
		song: "route3",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 8', 'Ruta 8', '8号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'arcanine', minLevel: 56, maxLevel: 58, chance: 18 }, 
						{ name: 'ninetales', minLevel: 55, maxLevel: 59, chance: 17 }, 
						{ name: 'houndoom', minLevel: 55, maxLevel: 59, chance: 17 }, 
						{ name: 'persian', minLevel: 57, maxLevel: 60, chance: 10 }, 
						{ name: 'houndour', minLevel: 58, maxLevel: 61, chance: 7 }, 
						{ name: 'vulpix', minLevel: 55, maxLevel: 59, chance: 7 }, 
						{ name: 'growlithe', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'jigglypuff', minLevel: 55, maxLevel: 59, chance: 7 }, 
						{ name: 'meowth', minLevel: 55, maxLevel: 62, chance: 4 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 3 }, 
						{ name: 'haunter', minLevel: 56, maxLevel: 60, chance: 3 },  
			        ],
			        travel: {
			        	battles: [0, 26], 
			        	location: 'route8-4'
			        }
				},
			},
			mtEmber: {
				name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
				position: { x: 12, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mtEmber-1'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 18, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route8HiddenItemB',
					invisible: true
				},
			},
		}
	},
	'mtEmber-1': {
		name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
		background: "assets/images/map/kanto/cave/mtEmber-1.png",
		song: "mtMoon",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 11, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route8-6'
				},
			},
			mtEmber: {
				name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
				position: { x: 10.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'houndoom', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'graveler', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'rapidash', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'ninetales', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'magmar', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'arcanine', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'steelix', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'slugma', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'magcargo', minLevel: 69, maxLevel: 70, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'mtEmber-2'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 7, y: 3 },
				size: { w: 2, h: 12 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
					background: './assets/images/background/battle3.png',
					pokemon: [  
						{ name: 'houndoom', minLevel: 68, maxLevel: 75, chance: 25 }, 
						{ name: 'rapidash', minLevel: 65, maxLevel: 72, chance: 20 }, 
						{ name: 'arcanine', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'magcargo', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'magmar', minLevel: 68, maxLevel: 75, chance: 15 }, 
						{ name: 'graveler', minLevel: 69, maxLevel: 70, chance: 10 },  
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 3 },
				size: { w: 2, h: 12 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
					background: './assets/images/background/battle3.png',
					pokemon: [  
						{ name: 'houndoom', minLevel: 68, maxLevel: 75, chance: 25 }, 
						{ name: 'rapidash', minLevel: 65, maxLevel: 72, chance: 20 }, 
						{ name: 'arcanine', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'magcargo', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'magmar', minLevel: 68, maxLevel: 75, chance: 15 }, 
						{ name: 'graveler', minLevel: 69, maxLevel: 70, chance: 10 },  
			        ],
				},
			},
		}
	},
	'mtEmber-2': {
		name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
		background: "assets/images/map/kanto/cave/mtEmber-2.png",
		song: "mtMoon",
		worldEvent: {
			mtEmber: {
				name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'houndoom', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'graveler', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'rapidash', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'ninetales', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'magmar', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'arcanine', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'steelix', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'slugma', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'magcargo', minLevel: 69, maxLevel: 70, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'mtEmber-1'
			        }
				},
			},
			moltres: {
				name: ['Moltres', 'Moltres', '火焰鸟'], 
				position: { x: 11, y: 6 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/moltres.png',
					type: 'dialogue',
					npc: 'moltres'
				},
			}

		}
	},
	'mtEmber-2bis': {
		name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
		background: "assets/images/map/kanto/cave/mtEmber-2.png",
		song: "mtMoon",
		worldEvent: {
			mtEmber: {
				name: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
					background: './assets/images/background/battle3.png',
					pokemon: [ 
						{ name: 'houndoom', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'graveler', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'rapidash', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'ninetales', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'magmar', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'arcanine', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'steelix', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'slugma', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'magcargo', minLevel: 69, maxLevel: 70, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'mtEmber-1'
			        }
				},
			},
		}
	},
	'route9-1': {
		name: ['Route 9', 'Ruta 9', '9号道路'],
		background: "assets/images/map/kanto/route/route9-1.png",
		song: "route3",
		worldEvent: {
			ceruleanCity: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 0, y: 3.7 },
				size: { w: 4, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-3'
				},
			},
			route9: {
				name: ['Route 9', 'Ruta 9', '9号道路'],
				position: { x: 23, y: 9 },
				size: { w: 2, h: 4.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 9', 'Ruta 9', '9号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 68, maxLevel: 73, chance: 13 },
						{ name: 'raticate', minLevel: 69, maxLevel: 74, chance: 12 },
			            { name: 'machoke', minLevel: 68, maxLevel: 71, chance: 12 },
			            { name: 'venomoth', minLevel: 69, maxLevel: 71, chance: 12 },
			            { name: 'golbat', minLevel: 69, maxLevel: 72, chance: 10 },
			            { name: 'marowak', minLevel: 69, maxLevel: 73, chance: 8 },
			            { name: 'electrode', minLevel: 68, maxLevel: 72, chance: 7 },
						{ name: 'fearow', minLevel: 69, maxLevel: 74, chance: 7 },
			            { name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 7 },
			            { name: 'nidorina', minLevel: 68, maxLevel: 73, chance: 7 },
						{ name: 'sandslash', minLevel: 69, maxLevel: 74, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'route9-2'
			        }
				},
			},
		}
	},
	'route9-2': {
		name: ['Route 9', 'Ruta 9', '9号道路'],
		background: "assets/images/map/kanto/route/route9-2.png",
		song: "route3",
		worldEvent: {
			route9: {
				name: ['Route 9', 'Ruta 9', '9号道路'],
				position: { x: 0, y: 9 },
				size: { w: 2, h: 4.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 9', 'Ruta 9', '9号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 68, maxLevel: 73, chance: 13 },
						{ name: 'raticate', minLevel: 69, maxLevel: 74, chance: 12 },
			            { name: 'machoke', minLevel: 68, maxLevel: 71, chance: 12 },
			            { name: 'venomoth', minLevel: 69, maxLevel: 71, chance: 12 },
			            { name: 'golbat', minLevel: 69, maxLevel: 72, chance: 10 },
			            { name: 'marowak', minLevel: 69, maxLevel: 73, chance: 8 },
			            { name: 'electrode', minLevel: 68, maxLevel: 72, chance: 7 },
						{ name: 'fearow', minLevel: 69, maxLevel: 74, chance: 7 },
			            { name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 7 },
			            { name: 'nidorina', minLevel: 68, maxLevel: 73, chance: 7 },
						{ name: 'sandslash', minLevel: 69, maxLevel: 74, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'route9-1'
			        }
				},
			},
			route10: {
				name: ['Route 9', 'Ruta 9', '9号道路'],
				position: { x: 23, y: 5 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 9', 'Ruta 9', '9号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 69, maxLevel: 74, chance: 15 },
						{ name: 'golbat', minLevel: 69, maxLevel: 72, chance: 13 },
					 	{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 11 },
			            { name: 'nidorina', minLevel: 68, maxLevel: 73, chance: 11 },
						{ name: 'magnemite', minLevel: 69, maxLevel: 74, chance: 10 },
					 	{ name: 'electabuzz', minLevel: 71, maxLevel: 75, chance: 9 },
						{ name: 'machoke', minLevel: 70, maxLevel: 75, chance: 8 },
					 	{ name: 'electrode', minLevel: 68, maxLevel: 72, chance: 7 },
						{ name: 'voltorb', minLevel: 69, maxLevel: 74, chance: 7 },
					 	{ name: 'machamp', minLevel: 70, maxLevel: 76, chance: 6 }, 
						{ name: 'magneton', minLevel: 69, maxLevel: 74, chance: 3 },  
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route10-1'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 13 },
				size: { w: 7, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 9', 'Ruta 9', '9号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
			            { name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 12 },
			            { name: 'nidorina', minLevel: 68, maxLevel: 73, chance: 12 },
			            { name: 'machoke', minLevel: 68, maxLevel: 71, chance: 11 },
			            { name: 'venomoth', minLevel: 69, maxLevel: 71, chance: 11 },
						{ name: 'primeape', minLevel: 68, maxLevel: 73, chance: 10 },
			            { name: 'golbat', minLevel: 69, maxLevel: 72, chance: 9 },
			            { name: 'marowak', minLevel: 69, maxLevel: 73, chance: 8 },
			            { name: 'electrode', minLevel: 68, maxLevel: 72, chance: 7 },
						{ name: 'voltorb', minLevel: 69, maxLevel: 74, chance: 7 },
						{ name: 'sandslash', minLevel: 69, maxLevel: 74, chance: 5 },
						{ name: 'magnemite', minLevel: 69, maxLevel: 74, chance: 5 },
						{ name: 'magneton', minLevel: 69, maxLevel: 74, chance: 3 },
			        ],
				},
			},
		}
	},
	'route10-1': {
		name: ['Route 10', 'Ruta 10', '10号道路'],
		background: "assets/images/map/kanto/route/route10-1.png",
		song: "route11",
		worldEvent: {
			route9: {
				name: ['Route 9', 'Ruta 9', '9号道路'],
				position: { x: 0, y: 5 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 9', 'Ruta 9', '9号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 69, maxLevel: 74, chance: 15 },
						{ name: 'golbat', minLevel: 69, maxLevel: 72, chance: 13 },
					 	{ name: 'nidorino', minLevel: 69, maxLevel: 72, chance: 11 },
			            { name: 'nidorina', minLevel: 68, maxLevel: 73, chance: 11 },
						{ name: 'magnemite', minLevel: 69, maxLevel: 74, chance: 10 },
					 	{ name: 'electabuzz', minLevel: 71, maxLevel: 75, chance: 9 },
						{ name: 'machoke', minLevel: 70, maxLevel: 75, chance: 8 },
					 	{ name: 'electrode', minLevel: 68, maxLevel: 72, chance: 7 },
						{ name: 'voltorb', minLevel: 69, maxLevel: 74, chance: 7 },
					 	{ name: 'machamp', minLevel: 70, maxLevel: 76, chance: 6 }, 
						{ name: 'magneton', minLevel: 69, maxLevel: 74, chance: 3 },   
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route9-2'
			        }
				},
			},
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 17.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route10-2'
				},
			},
			rockTunnel: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 4, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'rockTunnel-1'
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 5, y: 0.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route10-1',
					inRoute: true
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 3 },
				size: { w: 9, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 10', 'Ruta 10', '10号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'machoke', minLevel: 70, maxLevel: 75, chance: 20 },
						{ name: 'fearow', minLevel: 69, maxLevel: 77, chance: 18 },
			            { name: 'magneton', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'electabuzz', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'slowbro', minLevel: 69, maxLevel: 77, chance: 10 },
			            { name: 'marowak', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'slowking', minLevel: 72, maxLevel: 76, chance: 7 },
			            { name: 'kingler', minLevel: 69, maxLevel: 77, chance: 7 },
			            { name: 'machamp', minLevel: 70, maxLevel: 76, chance: 6 },    
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 20, y: 11 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute10',
					tw: false
				},
			},
		}
	},
	'route10-2': {
		name: ['Route 10', 'Ruta 10', '10号道路'],
		background: "assets/images/map/kanto/route/route10-2.png",
		song: "route11",
		worldEvent: {
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 17.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route10-1'
				},
			},
			powerPlant: {
				name: [`Power Plant`, `Central Eléctrica`, `无人发电厂`],
				position: { x: 3, y: 2.5 },
				size: { w: 11, h: 7 },
				event: {
					type: 'dialogue',
					npc: 'powerPlant',
					tw: false
				},
			},	
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 5, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute10',
					tw: false
				},
			},	
		}
	},
	'route10-3': {
		name: ['Route 10', 'Ruta 10', '10号道路'],
		background: "assets/images/map/kanto/route/route10-3.png",
		song: "route11",
		worldEvent: {
			lavenderTown: {
				name: ['Lavender Town', 'Pueblo Lavanda', '紫苑镇'],
				position: { x: 11.9, y: 16 },
				size: { w: 2.3, h: 2 },
				event: {
					type: 'travelCity',
					location: 'lavenderTown-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 3 },
				size: { w: 7, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 9', 'Ruta 9', '9号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'electrode', minLevel: 69, maxLevel: 77, chance: 18 },
						{ name: 'machoke', minLevel: 70, maxLevel: 75, chance: 13 },
			            { name: 'magneton', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'electabuzz', minLevel: 71, maxLevel: 75, chance: 12 },
			            { name: 'voltorb', minLevel: 69, maxLevel: 77, chance: 10 },
			            { name: 'marowak', minLevel: 72, maxLevel: 76, chance: 8 },
			            { name: 'raticate', minLevel: 72, maxLevel: 76, chance: 7 },
						{ name: 'magnemite', minLevel: 69, maxLevel: 77, chance: 7 },
			            { name: 'fearow', minLevel: 69, maxLevel: 77, chance: 7 },
			            { name: 'machamp', minLevel: 70, maxLevel: 76, chance: 6 },     
			        ],
				},
			},
			rockTunnel: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 7, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'rockTunnel-4'
				},
			},
		}
	},
	'powerPlant-1': {
		name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
		background: "assets/images/map/kanto/cave/powerPlant-1.png",
		song: "mtMoon",
		worldEvent: {
			zapdos: {
				name: ['Zapdos', 'Zapdos', '闪电鸟'], 
				position: { x: 11, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/zapdos.png',
					type: 'dialogue',
					npc: 'zapdos'
				},
			},
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 10.5, y: 15.5 },
				size: { w: 4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route10-2'
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 7 },
				size: { w: 2, h: 7 },
				event: {
					type: 'routeBattle',
					title: [`Power Plant`, `Central Eléctrica`, `无人发电厂`],
					background: './assets/images/background/battle13.png',
					pokemon: [  
						{ name: 'electrode', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'ampharos', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'electabuzz', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'magneton', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'flaaffy', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'voltorb', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'magnemite', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'jolteon', minLevel: 69, maxLevel: 70, chance: 3 },  
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 8, y: 7 },
				size: { w: 2, h: 7 },
				event: {
					type: 'routeBattle',
					title: [`Power Plant`, `Central Eléctrica`, `无人发电厂`],
					background: './assets/images/background/battle13.png',
					pokemon: [  
						{ name: 'electrode', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'ampharos', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'electabuzz', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'magneton', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'flaaffy', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'voltorb', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'magnemite', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'jolteon', minLevel: 69, maxLevel: 70, chance: 3 },  
			        ],
				},
			},
		}
	},
	'powerPlant-1bis': {
		name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
		background: "assets/images/map/kanto/cave/powerPlant-1.png",
		song: "mtMoon",
		worldEvent: {
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 10.5, y: 15.5 },
				size: { w: 4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route10-2'
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 7 },
				size: { w: 2, h: 7 },
				event: {
					type: 'routeBattle',
					title: ['Route 11', 'Ruta 11', '11号道路'],
					background: './assets/images/background/battle13.png',
					pokemon: [  
						{ name: 'electrode', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'ampharos', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'electabuzz', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'magneton', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'flaaffy', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'voltorb', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'magnemite', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'jolteon', minLevel: 69, maxLevel: 70, chance: 3 },  
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 8, y: 7 },
				size: { w: 2, h: 7 },
				event: {
					type: 'routeBattle',
					title: ['Route 11', 'Ruta 11', '11号道路'],
					background: './assets/images/background/battle13.png',
					pokemon: [  
						{ name: 'electrode', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'ampharos', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'electabuzz', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'magneton', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'flaaffy', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'raichu', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'pikachu', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'voltorb', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'magnemite', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'jolteon', minLevel: 69, maxLevel: 70, chance: 3 },     
			        ],
				},
			},
		}
	},
	'rockTunnel-1': {
		name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
		background: "assets/images/map/kanto/cave/rockTunnel-1.png",
		song: "mtMoon",
		worldEvent: {
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 19, y: 6 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route10-1'
				},
			},
			rockTunnel: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 0, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'machoke', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'onix', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'electrode', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'graveler', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'marowak', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'haunter', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'hitmonchan', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'hitmonlee', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'machamp', minLevel: 69, maxLevel: 70, chance: 3 },     
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'rockTunnel-2'
			        }
				},
			},
		}
	},
	'rockTunnel-2': {
		name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
		background: "assets/images/map/kanto/cave/rockTunnel-2.png",
		song: "mtMoon",
		worldEvent: {
			rockTunnelA: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 22, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'machoke', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'onix', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'electrode', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'graveler', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'marowak', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'haunter', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'hitmonchan', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'hitmonlee', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'machamp', minLevel: 69, maxLevel: 70, chance: 3 },   
					],  
			        travel: {
			        	battles: [0, 12], 
			        	location: 'rockTunnel-1'
			        }
				},
			},
			rockTunnelB: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 5.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'rockTunnel-3'
				},
			},
		}
	},
	'rockTunnel-3': {
		name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
		background: "assets/images/map/kanto/cave/rockTunnel-3.png",
		song: "mtMoon",
		worldEvent: {
			rockTunnelA: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 5.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'rockTunnel-2'
				},
			},
			rockTunnelB: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 13.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'machoke', minLevel: 68, maxLevel: 75, chance: 15 }, 
						{ name: 'onix', minLevel: 65, maxLevel: 72, chance: 15 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'haunter', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'hitmontop', minLevel: 67, maxLevel: 73, chance: 9 }, 
						{ name: 'electrode', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'electabuzz', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'golem', minLevel: 69, maxLevel: 70, chance: 3 },     
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'rockTunnel-4'
			        }
				},
			},	
		}
	},
	'rockTunnel-4': {
		name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
		background: "assets/images/map/kanto/cave/rockTunnel-4.png",
		song: "mtMoon",
		worldEvent: {
			rockTunnel: {
				name: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
				position: { x: 13.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Rock Tunnel', 'Tunel Roca', '岩山隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'graveler', minLevel: 67, maxLevel: 73, chance: 17 }, 
						{ name: 'machoke', minLevel: 68, maxLevel: 75, chance: 15 }, 
						{ name: 'onix', minLevel: 65, maxLevel: 72, chance: 15 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'haunter', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'hitmontop', minLevel: 67, maxLevel: 73, chance: 9 }, 
						{ name: 'electrode', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'electabuzz', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'golem', minLevel: 69, maxLevel: 70, chance: 3 },     
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'rockTunnel-3'
			        }
				},
			},	
			route10: {
				name: ['Route 10', 'Ruta 10', '10号道路'],
				position: { x: 9, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route10-3'
				},
			},
		}
	},
	'route11-1': {
		name: ['Route 11', 'Ruta 11', '11号道路'],
		background: "assets/images/map/kanto/route/route11-1.png",
		song: "route11",
		worldEvent: {
			vermilionCity: {
				name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
				position: { x: 0, y: 2.8 },
				size: { w: 2, h: 2.6 },
				event: {
					type: 'travelCity',
					location: 'vermilionCity-3'
				},
			},
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 15.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route11-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 2 },
				size: { w: 11, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 11', 'Ruta 11', '11号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'skiploom', minLevel: 48, maxLevel: 51, chance: 20 }, 
						{ name: 'drowzee', minLevel: 45, maxLevel: 50, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 47, maxLevel: 51, chance: 15 }, 
						{ name: 'raticate', minLevel: 47, maxLevel: 50, chance: 15 }, 
						{ name: 'noctowl', minLevel: 46, maxLevel: 51, chance: 9 }, 
						{ name: 'meowth', minLevel: 45, maxLevel: 52, chance: 7 }, 
						{ name: 'magnemite', minLevel: 48, maxLevel: 53, chance: 7 }, 
						{ name: 'rattata', minLevel: 48, maxLevel: 50, chance: 7 }, 
						{ name: 'hypno', minLevel: 47, maxLevel: 50, chance: 5 }, 
			        ],
				},
			},
			route12: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 21.5, y: 4},
				size: { w: 3.5, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'policemanRoute11'
				},
			},
		}
	},
	'route11-2': {
		name: ['Route 11', 'Ruta 11', '11号道路'],
		background: "assets/images/map/kanto/route/route11-2.png",
		song: "route11",
		worldEvent: {
			route11A: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 15.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route11-1'
				},
			},
			route11B: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 7.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route11-3'
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 19, y: 8 },
				size: { w: 2, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 11', 'Ruta 11', '11号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'ekans', minLevel: 48, maxLevel: 51, chance: 20 }, 
						{ name: 'arbok', minLevel: 45, maxLevel: 50, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 47, maxLevel: 51, chance: 15 }, 
						{ name: 'raticate', minLevel: 47, maxLevel: 50, chance: 15 }, 
						{ name: 'noctowl', minLevel: 46, maxLevel: 51, chance: 9 }, 
						{ name: 'persian', minLevel: 45, maxLevel: 52, chance: 7 }, 
						{ name: 'hoothoot', minLevel: 48, maxLevel: 53, chance: 7 }, 
						{ name: 'rattata', minLevel: 48, maxLevel: 50, chance: 7 }, 
						{ name: 'hypno', minLevel: 47, maxLevel: 50, chance: 5 },     
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 8 },
				size: { w: 4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 11', 'Ruta 11', '11号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'sandslash', minLevel: 48, maxLevel: 51, chance: 20 }, 
						{ name: 'sandshrew', minLevel: 45, maxLevel: 50, chance: 15 }, 
						{ name: 'fearow', minLevel: 47, maxLevel: 51, chance: 15 }, 
						{ name: 'drowzee', minLevel: 47, maxLevel: 50, chance: 15 },                
						{ name: 'spearow', minLevel: 48, maxLevel: 53, chance: 9 }, 
						{ name: 'meowth', minLevel: 46, maxLevel: 51, chance: 7 }, 
						{ name: 'persian', minLevel: 45, maxLevel: 52, chance: 7 }, 
						{ name: 'rattata', minLevel: 48, maxLevel: 50, chance: 7 }, 
						{ name: 'raticate', minLevel: 47, maxLevel: 50, chance: 5 }, 
			        ],
				},
			},
		}
	},
	'route11-3': {
		name: ['Route 11', 'Ruta 11', '11号道路'],
		background: "assets/images/map/kanto/route/route11-3.png",
		song: "route11",
		worldEvent: {
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 7.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route11-2'
				},
			},
			route14: {
				name: ['Route 14', 'Ruta 14', '14号道路'],
				position: { x: 13.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route14-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 5 },
				size: { w: 13, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 11', 'Ruta 11', '11号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'rattata', minLevel: 48, maxLevel: 50, chance: 13 }, 
						{ name: 'hoothoot', minLevel: 48, maxLevel: 53, chance: 13 }, 
			            { name: 'ekans', minLevel: 48, maxLevel: 51, chance: 10 }, 
						{ name: 'sandshrew', minLevel: 45, maxLevel: 50, chance: 8 }, 
						{ name: 'drowzee', minLevel: 47, maxLevel: 50, chance: 8 },                
						{ name: 'spearow', minLevel: 48, maxLevel: 53, chance: 8 }, 
						{ name: 'meowth', minLevel: 46, maxLevel: 51, chance: 8 }, 
						{ name: 'sandslash', minLevel: 48, maxLevel: 51, chance: 4 }, 
						{ name: 'fearow', minLevel: 47, maxLevel: 51, chance: 4 }, 
						{ name: 'pidgeotto', minLevel: 47, maxLevel: 51, chance: 4 }, 
						{ name: 'arbok', minLevel: 45, maxLevel: 50, chance: 4 }, 
						{ name: 'raticate', minLevel: 47, maxLevel: 50, chance: 4 }, 
						{ name: 'noctowl', minLevel: 46, maxLevel: 51, chance: 4 }, 
						{ name: 'persian', minLevel: 45, maxLevel: 52, chance: 4 }, 
						{ name: 'hypno', minLevel: 47, maxLevel: 50, chance: 4 },     
			        ],
				},
			},
		}
	},
	'route11-4': {
		name: ['Route 11', 'Ruta 11', '11号道路'],
		background: "assets/images/map/kanto/route/route11-4.png",
		song: "route11",
		worldEvent: {
			route8: {
				name: ['Route 8', 'Ruta 8', '8号道路'],
				position: { x: 17.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route8-5'
				},
			},
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 5.7, y: 16 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route11-1',
					sound: 'jump1'
				},
			},
		}
	},
	'route12-1': {
		name: ['Route 12', 'Ruta 12', '12号道路'],
		background: "assets/images/map/kanto/route/route12-1.png",
		song: "route11",
		worldEvent: {
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 0, y: 4 },
				size: { w: 3.5, h: 5 },
				event: {
					type: 'travelRoute',
					location: 'route11-1'
				},
			},
			route12: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 9.7, y: 15 },
				size: { w: 6.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 12', 'Ruta 12', '12号道路'],
					background: './assets/images/background/battle24.png',
					pokemon: [ 
						{ name: 'victreebel', minLevel: 65, maxLevel: 71, chance: 40 },
						{ name: 'slowbro', minLevel: 67, maxLevel: 70, chance: 20 },
						{ name: 'farfetchd', minLevel: 68, maxLevel: 73, chance: 20 },
						{ name: 'gloom', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'venomoth', minLevel: 64, maxLevel: 74, chance: 8 },
						{ name: 'snorlax', minLevel: 64, maxLevel: 74, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'route12-2'
			        }
				},
			},
		}
	},
	'route12-2': {
		name: ['Route 12', 'Ruta 12', '12号道路'],
		background: "assets/images/map/kanto/route/route12-2.png",
		song: "route11",
		worldEvent: {
			route12A: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 9.7, y: 0 },
				size: { w: 6.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 12', 'Ruta 12', '12号道路'],
					background: './assets/images/background/battle24.png',
					pokemon: [ 
						{ name: 'victreebel', minLevel: 65, maxLevel: 71, chance: 40 },
						{ name: 'slowbro', minLevel: 67, maxLevel: 70, chance: 20 },
						{ name: 'farfetchd', minLevel: 68, maxLevel: 73, chance: 20 },
						{ name: 'gloom', minLevel: 69, maxLevel: 72, chance: 10 },
						{ name: 'venomoth', minLevel: 64, maxLevel: 74, chance: 8 },
						{ name: 'snorlax', minLevel: 64, maxLevel: 74, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'route12-1'
			        }
				},
			},
			route12B: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 3.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route12-3'
				},
			},
			route12C: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 12.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route12-3',
					sound: 'jump1'
				},
			},
			route13: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 22, y: 9.8 },
				size: { w: 3, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route13-1'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 2, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route12HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route12-3': {
		name: ['Route 12', 'Ruta 12', '12号道路'],
		background: "assets/images/map/kanto/route/route12-3.png",
		song: "route11",
		worldEvent: {
			route12A: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 3.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route12-2'
				},
			},
			route12B: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 9.7, y: 15 },
				size: { w: 4.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 12', 'Ruta 12', '12号道路'],
					background: './assets/images/background/battle24.png',
					pokemon: [ 
						{ name: 'weepinbell', minLevel: 67, maxLevel: 70, chance: 40 },
						{ name: 'victreebel', minLevel: 65, maxLevel: 71, chance: 20 },
						{ name: 'gloom', minLevel: 68, maxLevel: 73, chance: 20 },
						{ name: 'krabby', minLevel: 69, maxLevel: 72, chance: 7 },
						{ name: 'snorlax', minLevel: 64, maxLevel: 74, chance: 5 },
						{ name: 'bellossom', minLevel: 64, maxLevel: 74, chance: 5 },
						{ name: 'kingler', minLevel: 64, maxLevel: 74, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 37], 
			        	location: 'route12-4'
			        }
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 12, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselRoute12',
				},
			},
		}
	},
	'route12-4': {
		name: ['Route 12', 'Ruta 12', '12号道路'],
		background: "assets/images/map/kanto/route/route12-4.png",
		song: "route11",
		worldEvent: {
			route12: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 9.7, y: 0 },
				size: { w: 4.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 12', 'Ruta 12', '12号道路'],
					background: './assets/images/background/battle24.png',
					pokemon: [ 
						{ name: 'weepinbell', minLevel: 67, maxLevel: 70, chance: 40 },
						{ name: 'victreebel', minLevel: 65, maxLevel: 71, chance: 20 },
						{ name: 'gloom', minLevel: 68, maxLevel: 73, chance: 20 },
						{ name: 'krabby', minLevel: 69, maxLevel: 72, chance: 7 },
						{ name: 'snorlax', minLevel: 64, maxLevel: 74, chance: 5 },
						{ name: 'bellossom', minLevel: 64, maxLevel: 74, chance: 5 },
						{ name: 'kingler', minLevel: 64, maxLevel: 74, chance: 3 },
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'route12-3'
			        }
				},
			},
			route14: {
				name: ['Route 14', 'Ruta 14', '14号道路'],
				position: { x: 0, y: 9 },
				size: { w: 3.5, h: 5 },
				event: {
					type: 'travelRoute',
					location: 'route14-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 4 },
				size: { w: 5, h: 11 },
				event: {
					type: 'routeBattle',
					title: ['Route 12', 'Ruta 12', '12号道路'],
					background: './assets/images/background/battle24.png',
					pokemon: [  
						{ name: 'krabby', minLevel: 69, maxLevel: 72, chance: 12 },
						{ name: 'slowpoke', minLevel: 64, maxLevel: 74, chance: 12 },
						{ name: 'farfetchd', minLevel: 64, maxLevel: 74, chance: 12 },
						{ name: 'weepinbell', minLevel: 67, maxLevel: 70, chance: 10 },
						{ name: 'victreebel', minLevel: 65, maxLevel: 71, chance: 10 },
						{ name: 'slowbro', minLevel: 68, maxLevel: 73, chance: 10 },
						{ name: 'kingler', minLevel: 64, maxLevel: 74, chance: 8 },
			           	{ name: 'gloom', minLevel: 64, maxLevel: 74, chance: 8 },
						{ name: 'bellossom', minLevel: 64, maxLevel: 74, chance: 8 },
						{ name: 'kingler', minLevel: 64, maxLevel: 74, chance: 6 },
						{ name: 'snorlax', minLevel: 64, maxLevel: 74, chance: 4 }
			        ],
				},
			},
		}
	},
	'route13-1': {
		name: ['Route 13', 'Ruta 13', '13号道路'],
		background: "assets/images/map/kanto/route/route13-1.png",
		song: "route11",
		worldEvent: {
			route12: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 0, y: 9.8 },
				size: { w: 3, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route12-2'
				},
			},
			route13A: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 22, y: 9.8 },
				size: { w: 3, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route13-2'
				},
			},
			route13B: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 11.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route13-3'
				},
			},
		}
	},
	'route13-2': {
		name: ['Route 13', 'Ruta 13', '13号道路'],
		background: "assets/images/map/kanto/route/route13-2.png",
		song: "route11",
		worldEvent: {
			route13: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 0, y: 9.8 },
				size: { w: 3, h: 2.4 },
				event: {
					type: 'travelRoute',
					location: 'route13-1'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 13, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute13',
				},
			},
			hertzVault: {
				name: [`Hertz Vault`, `Bóveda de Hertz`,
				`赫兹地窖`],
				position: { x: 12, y: 1.5 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'dialogue',
					npc: 'hertzVault',
					tw: false
				},
			},
		}
	},
	'route13-3': {
		name: ['Route 13', 'Ruta 13', '13号道路'],
		background: "assets/images/map/kanto/route/route13-3.png",
		song: "route11",
		worldEvent: {
			route13: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 11.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route13-1'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 5, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute13',
				},
			},
			rockClister: {
				name: [`Rock cluster`, `Cúmulo de rocas`,
				`岩石堆`],
				position: { x: 16.9, y: 0 },
				size: { w: 2.3, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'powerBracelet',
						exception: 'needPowerBracelet'
					},
					type: 'rockSmash',
					route: 'route13-3',
					newRoute: 'route13-3bis',
				},
			},
		}
	},
	'route13-3bis': {
		name: ['Route 13', 'Ruta 13', '13号道路'],
		background: "assets/images/map/kanto/route/route13-3bis.png",
		song: "route11",
		worldEvent: {
			route13A: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 11.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route13-1'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 5, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute13',
				},
			},
			route13B: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 16.9, y: 0 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route13-4'
				},
			},
		}
	},
	'route13-4': {
		name: ['Route 13', 'Ruta 13', '13号道路'],
		background: "assets/images/map/kanto/route/route13-4.png",
		song: "route11",
		worldEvent: {
			route13: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 16.9, y: 15 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route13-3'
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 14, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute13',
				},
			},
			vesselD: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 12, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselDRoute13',
				},
			},
		}
	},
	'hertzVault-1': {
		name: [`Hertz Vault`, `Bóveda de Hertz`,
				`赫兹地窖`],
		background: "assets/images/map/kanto/cave/hertzVault-1.png",
		song: "mtMoon",
		worldEvent: {
			route13: {
				name: ['Route 13', 'Ruta 13', '13号道路'],
				position: { x: 10.9, y: 16 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route13-2'
				},
			},
			magnemite: {
				name: ['Magnemite', 'Magnemite', '小磁怪'], 
				position: { x: 10, y: 3.5 },
				size: { w: 5, h: 5 },
				event: {
					image: './assets/images/pokemon/sprite-shiny/magnemite.png',
					type: 'dialogue',
					npc: 'magnemite'
				},
			}
		}
	},
	'route14-1': {
		name: ['Route 14', 'Ruta 14', '14号道路'],
		background: "assets/images/map/kanto/route/route14-1.png",
		song: "route11",
		worldEvent: {
			route11: {
				name: ['Route 11', 'Ruta 11', '11号道路'],
				position: { x: 13.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route11-3'
				},
			},
			route14: {
				name: ['Route 14', 'Ruta 14', '14号道路'],
				position: { x: 7.4, y: 16 },
				size: { w: 3.8, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route14-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 3 },
				size: { w: 10, h: 7 },
				event: {
					type: 'routeBattle',
					title: ['Route 14', 'Ruta 14', '14号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'weepinbell', minLevel: 48, maxLevel: 51, chance: 20 }, 
						{ name: 'venonat', minLevel: 45, maxLevel: 50, chance: 15 }, 
						{ name: 'pidgeotto', minLevel: 47, maxLevel: 51, chance: 15 }, 
						{ name: 'ditto', minLevel: 47, maxLevel: 50, chance: 15 }, 
						{ name: 'gloom', minLevel: 46, maxLevel: 51, chance: 9 }, 
						{ name: 'skiploom', minLevel: 45, maxLevel: 52, chance: 7 }, 
						{ name: 'venomoth', minLevel: 48, maxLevel: 53, chance: 7 }, 
						{ name: 'oddish', minLevel: 48, maxLevel: 50, chance: 7 }, 
						{ name: 'victreebel', minLevel: 47, maxLevel: 50, chance: 5 },         
			        ],
				},
			},
			signA: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 21, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute14',
					tw: false
				},
			},	
			route12: {
				name: ['Route 12', 'Ruta 12', '12号道路'],
				position: { x: 21.5, y: 9 },
				size: { w: 3.5, h: 5 },
				event: {
					type: 'dialogue',
					npc: 'policemanRoute14'
				},
			},
		}
	},
	'route14-2': {
		name: ['Route 14', 'Ruta 14', '14号道路'],
		background: "assets/images/map/kanto/route/route14-2.png",
		song: "route11",
		worldEvent: {
			route14: {
				name: ['Route 14', 'Ruta 14', '14号道路'],
				position: { x: 7.4, y: 0 },
				size: { w: 3.8, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route14-1'
				},
			},
			route15: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 0, y: 10 },
				size: { w: 3, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 15', 'Ruta 15', '15号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'weepinbell', minLevel: 48, maxLevel: 51, chance: 20 }, 
						{ name: 'skiploom', minLevel: 45, maxLevel: 50, chance: 15 }, 
						{ name: 'nidorina', minLevel: 47, maxLevel: 51, chance: 15 }, 
						{ name: 'nidorino', minLevel: 47, maxLevel: 50, chance: 15 }, 
						{ name: 'gloom', minLevel: 46, maxLevel: 51, chance: 9 }, 
						{ name: 'chansey', minLevel: 45, maxLevel: 52, chance: 7 }, 
						{ name: 'venomoth', minLevel: 48, maxLevel: 53, chance: 7 }, 
						{ name: 'noctowl', minLevel: 48, maxLevel: 50, chance: 7 }, 
						{ name: 'victreebel', minLevel: 47, maxLevel: 50, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'route15-1'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 14, y: 9 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route14HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route15-1': {
		name: ['Route 15', 'Ruta 15', '15号道路'],
		background: "assets/images/map/kanto/route/route15-1.png",
		song: "route11",
		worldEvent: {
			route14: {
				name: ['Route 14', 'Ruta 14', '14号道路'],
				position: { x: 23, y: 10 },
				size: { w: 2, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 14', 'Ruta 14', '14号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'weepinbell', minLevel: 48, maxLevel: 51, chance: 20 }, 
						{ name: 'skiploom', minLevel: 45, maxLevel: 50, chance: 15 }, 
						{ name: 'nidorina', minLevel: 47, maxLevel: 51, chance: 15 }, 
						{ name: 'nidorino', minLevel: 47, maxLevel: 50, chance: 15 }, 
						{ name: 'gloom', minLevel: 46, maxLevel: 51, chance: 9 }, 
						{ name: 'chansey', minLevel: 45, maxLevel: 52, chance: 7 }, 
						{ name: 'venomoth', minLevel: 48, maxLevel: 53, chance: 7 }, 
						{ name: 'noctowl', minLevel: 48, maxLevel: 50, chance: 7 }, 
						{ name: 'victreebel', minLevel: 47, maxLevel: 50, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'route14-2'
			        }
				},
			},
			route15A: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 0, y: 4.9 },
				size: { w: 2, h: 3.5 },
				event: {
					type: 'travelRoute',
					location: 'route15-2'
				},
			},
			route15B: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 0, y: 10.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route15-2'
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 17, y: 3 },
				size: { w: 6, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 15', 'Ruta 15', '15号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'skiploom', minLevel: 52, maxLevel: 53, chance: 40 }, 
						{ name: 'nidorina', minLevel: 50, maxLevel: 55, chance: 15 }, 
						{ name: 'nidorino', minLevel: 51, maxLevel: 56, chance: 15 }, 
						{ name: 'venomoth', minLevel: 49, maxLevel: 54, chance: 9 }, 
						{ name: 'chansey', minLevel: 49, maxLevel: 55, chance: 7 }, 
						{ name: 'quagsire', minLevel: 52, maxLevel: 57, chance: 7 }, 
						{ name: 'noctowl', minLevel: 50, maxLevel: 53, chance: 7 }, 	           
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 9 },
				size: { w: 3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 15', 'Ruta 15', '15号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'nidorina', minLevel: 50, maxLevel: 55, chance: 22 }, 
						{ name: 'nidorino', minLevel: 51, maxLevel: 56, chance: 22 }, 
						{ name: 'skiploom', minLevel: 52, maxLevel: 53, chance: 16 }, 
						{ name: 'bellsprout', minLevel: 52, maxLevel: 53, chance: 15 }, 
						{ name: 'weepinbell', minLevel: 52, maxLevel: 53, chance: 15 }, 
						{ name: 'chansey', minLevel: 49, maxLevel: 55, chance: 10 }, 
	        
			        ],
				},
			},
			wildC: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 9 },
				size: { w: 5, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 15', 'Ruta 15', '15号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'venomoth', minLevel: 50, maxLevel: 55, chance: 22 }, 
						{ name: 'noctowl', minLevel: 51, maxLevel: 56, chance: 22 }, 
						{ name: 'chansey', minLevel: 49, maxLevel: 55, chance: 16 },      
						{ name: 'bellsprout', minLevel: 52, maxLevel: 53, chance: 15 }, 
						{ name: 'weepinbell', minLevel: 52, maxLevel: 53, chance: 15 }, 
						{ name: 'skiploom', minLevel: 52, maxLevel: 53, chance: 10 }, 
			        ],
				},
			},
		}
	},
	'route15-2': {
		name: ['Route 15', 'Ruta 15', '15号道路'],
		background: "assets/images/map/kanto/route/route15-2.png",
		song: "route11",
		worldEvent: {
			route15A: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 23, y: 4.9 },
				size: { w: 2, h: 3.5 },
				event: {
					type: 'travelRoute',
					location: 'route15-1'
				},
			},
			route15B: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 23, y: 10.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route15-1'
				},
			},
			fuchsiaCity: {
				name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
				position: { x: 0, y: 7.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'fuchsiaCity-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 8 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 15', 'Ruta 15', '15号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'jumpluff', minLevel: 52, maxLevel: 53, chance: 30 }, 
						{ name: 'nidorina', minLevel: 50, maxLevel: 55, chance: 10 }, 
						{ name: 'nidorino', minLevel: 51, maxLevel: 56, chance: 10 }, 
						{ name: 'pidgey', minLevel: 50, maxLevel: 55, chance: 10 }, 
						{ name: 'pidgeotto', minLevel: 51, maxLevel: 56, chance: 10 },  
						{ name: 'venomoth', minLevel: 49, maxLevel: 54, chance: 9 }, 
						{ name: 'chansey', minLevel: 49, maxLevel: 55, chance: 7 }, 
						{ name: 'quagsire', minLevel: 52, maxLevel: 57, chance: 7 }, 
						{ name: 'ditto', minLevel: 50, maxLevel: 53, chance: 7 },  
			        ],
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 12, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route15-2',
					newLocation: 'route15-2bis',
				},
			},
		}
	},
	'route15-2bis': {
		name: ['Route 15', 'Ruta 15', '15号道路'],
		background: "assets/images/map/kanto/route/route15-2bis.png",
		song: "route11",
		worldEvent: {
			route15A: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 23, y: 4.9 },
				size: { w: 2, h: 3.5 },
				event: {
					type: 'travelRoute',
					location: 'route15-1'
				},
			},
			route15B: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 23, y: 10.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route15-1'
				},
			},
			route15C: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 9.7, y: 0 },
				size: { w: 5.6, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route15-3'
				},
			},
			fuchsiaCity: {
				name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
				position: { x: 0, y: 7.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'fuchsiaCity-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 8 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 15', 'Ruta 15', '15号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'jumpluff', minLevel: 52, maxLevel: 53, chance: 30 }, 
						{ name: 'nidorina', minLevel: 50, maxLevel: 55, chance: 10 }, 
						{ name: 'nidorino', minLevel: 51, maxLevel: 56, chance: 10 }, 
						{ name: 'pidgey', minLevel: 50, maxLevel: 55, chance: 10 }, 
						{ name: 'pidgeotto', minLevel: 51, maxLevel: 56, chance: 10 },  
						{ name: 'venomoth', minLevel: 49, maxLevel: 54, chance: 9 }, 
						{ name: 'chansey', minLevel: 49, maxLevel: 55, chance: 7 }, 
						{ name: 'quagsire', minLevel: 52, maxLevel: 57, chance: 7 }, 
						{ name: 'ditto', minLevel: 50, maxLevel: 53, chance: 7 },          
			        ],
				},
			},
		}
	},
	'route15-3': {
		name: ['Route 15', 'Ruta 15', '15号道路'],
		background: "assets/images/map/kanto/route/route15-3.png",
		song: "goron",
		worldEvent: {
			route15: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 9.7, y: 15 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route15-2'
				},
			},
			goronCave: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 11, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'goronCave-1'
				},
			},
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 18, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signRoute15',
					tw: false
				},
			},
		}
	},
	'goronCave-1': {
		name: ['Goron Cave', 'Gorocueva', '哥隆洞窟'],
		background: "assets/images/map/kanto/cave/goronCave-1.png",
		song: "goron",
		worldEvent: {
			goron: {
				name: ['Dislocated Golem', 'Golem deshubicado', '脱臼的隆隆岩'], 
				position: { x: 11.75, y: 8.5 },
				size: { w: 1.5, h: 1.5 },
				event: {
					image: './assets/images/pokemon/sprite/golem.png',
					type: 'dialogue',
					npc: 'goron'
				},
			},
			route15: {
				name: ['Route 15', 'Ruta 15', '15号道路'],
				position: { x: 11, y: 14 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route15-3'
				},
			},
		}
	},
	'route19-1': {
		name: ['Route 19', 'Ruta 19', '19号道路'],
		background: "assets/images/map/kanto/route/route19-1.png",
		song: "route11",
		worldEvent: {
			fuchsiaCity: {
				name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
				position: { x: 10.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'fuchsiaCity-2'
				},
			},
			route19: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 6.5, y: 14 },
				size: { w: 15, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 19', 'Ruta 19', '19号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 55, maxLevel: 62, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 58, maxLevel: 64, chance: 15 }, 
						{ name: 'octillery', minLevel: 57, maxLevel: 64, chance: 15 }, 
						{ name: 'seaking', minLevel: 56, maxLevel: 64, chance: 10 }, 
						{ name: 'magikarp', minLevel: 59, maxLevel: 65, chance: 10 }, 
						{ name: 'shellder', minLevel: 58, maxLevel: 63, chance: 5 }, 
						{ name: 'cloyster', minLevel: 62, maxLevel: 64, chance: 5 }, 
						{ name: 'staryu', minLevel: 63, maxLevel: 65, chance: 5 }, 
						{ name: 'goldeen', minLevel: 61, maxLevel: 66, chance: 5 },
						{ name: 'starmie', minLevel: 60, maxLevel: 65, chance: 3 },
						{ name: 'gyarados', minLevel: 59, maxLevel: 65, chance: 3 },
						{ name: 'lapras', minLevel: 65, maxLevel: 67, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 45], 
			        	location: 'route19-2'
			        }
				},
			},

		}
	},
	'route19-2': {
		name: ['Route 19', 'Ruta 19', '19号道路'],
		background: "assets/images/map/kanto/route/route19-2.png",
		song: "route11",
		worldEvent: {
			route19A: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 6, y: 0 },
				size: { w: 15, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 19', 'Ruta 19', '19号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 55, maxLevel: 62, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 58, maxLevel: 64, chance: 15 }, 
						{ name: 'octillery', minLevel: 57, maxLevel: 64, chance: 15 }, 
						{ name: 'seaking', minLevel: 56, maxLevel: 64, chance: 10 }, 
						{ name: 'magikarp', minLevel: 59, maxLevel: 65, chance: 10 }, 
						{ name: 'shellder', minLevel: 58, maxLevel: 63, chance: 5 }, 
						{ name: 'cloyster', minLevel: 62, maxLevel: 64, chance: 5 }, 
						{ name: 'staryu', minLevel: 63, maxLevel: 65, chance: 5 }, 
						{ name: 'goldeen', minLevel: 61, maxLevel: 66, chance: 5 },
						{ name: 'starmie', minLevel: 60, maxLevel: 65, chance: 3 },
						{ name: 'gyarados', minLevel: 59, maxLevel: 65, chance: 3 },
						{ name: 'lapras', minLevel: 65, maxLevel: 67, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 45], 
			        	location: 'route19-1'
			        }
				},
			},
			route19B: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 9, y: 15 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route19-3'
				},
			},
			route20: {
				name: ['Route 20', 'Ruta 20', '20号道路'],
				position: { x: 0, y: 13.8 },
				size: { w: 3, h: 2.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 20', 'Ruta 20', '20号道路'],
					background: './assets/images/background/battle5.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 55, maxLevel: 62, chance: 45 }, 
						{ name: 'poliwrath', minLevel: 58, maxLevel: 64, chance: 20 }, 
						{ name: 'slowpoke', minLevel: 57, maxLevel: 64, chance: 15 }, 
						{ name: 'slowbro', minLevel: 56, maxLevel: 64, chance: 15 }, 
						{ name: 'slowking', minLevel: 59, maxLevel: 65, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route20-1'
			        }
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 16, y: 9 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute19',
					tw: false
				},
			},
		}
	},
	'route19-3': {
		name: ['Route 19', 'Ruta 19', '19号道路'],
		background: "assets/images/map/kanto/route/route19-3.png",
		song: "route11",
		worldEvent: {
			route19B: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 9, y: 0 },
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route19-2'
				},
			},
			seafomCave: {
				name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
				position: { x: 3, y: 8 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'seafomCave-1'
				},
			},
		}
	},
	'seafomCave-1': {
		name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
		background: "assets/images/map/kanto/cave/seafomCave-1.png",
		song: "icePath",
		worldEvent: {
			route19: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 11, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route19-3'
				},
			},
			seafomCave: {
				name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
				position: { x: 10.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'golduck', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'dewgong', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'slowbro', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'seel', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'jynx', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'slowpoke', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'piloswine', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'kingler', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'sneasel', minLevel: 69, maxLevel: 70, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'seafomCave-2'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 7, y: 3 },
				size: { w: 2, h: 12 },
				event: {
					type: 'routeBattle',
					title: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
					background: './assets/images/background/battle4.png',
					pokemon: [  
						{ name: 'golduck', minLevel: 68, maxLevel: 75, chance: 25 }, 
						{ name: 'dewgong', minLevel: 65, maxLevel: 72, chance: 20 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'seel', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'kingler', minLevel: 68, maxLevel: 75, chance: 15 }, 
						{ name: 'sneasel', minLevel: 69, maxLevel: 70, chance: 10 },  
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 3 },
				size: { w: 2, h: 12 },
				event: {
					type: 'routeBattle',
					title: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
					background: './assets/images/background/battle4.png',
					pokemon: [  
						{ name: 'golduck', minLevel: 68, maxLevel: 75, chance: 25 }, 
						{ name: 'dewgong', minLevel: 65, maxLevel: 72, chance: 20 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'seel', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'kingler', minLevel: 68, maxLevel: 75, chance: 15 }, 
						{ name: 'sneasel', minLevel: 69, maxLevel: 70, chance: 10 }, 
			        ],
				},
			},
		}
	},
	'seafomCave-2': {
		name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
		background: "assets/images/map/kanto/cave/seafomCave-2.png",
		song: "icePath",
		worldEvent: {
			mtEmber: {
				name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'golduck', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'dewgong', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'slowbro', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'seel', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'piloswine', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'jynx', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'slowpoke', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'kingler', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'sneasel', minLevel: 69, maxLevel: 70, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'seafomCave-1'
			        }
				},
			},
			articuno: {
				name: ['Articuno', 'Articuno', '急冻鸟'], 
				position: { x: 11, y: 6 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/articuno.png',
					type: 'dialogue',
					npc: 'articuno'
				},
			}

		}
	},
	'seafomCave-2bis': {
		name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
		background: "assets/images/map/kanto/cave/seafomCave-2.png",
		song: "icePath",
		worldEvent: {
			mtEmber: {
				name: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
					background: './assets/images/background/battle4.png',
					pokemon: [ 
						{ name: 'golduck', minLevel: 68, maxLevel: 75, chance: 17 }, 
						{ name: 'dewgong', minLevel: 65, maxLevel: 72, chance: 17 }, 
						{ name: 'golbat', minLevel: 66, maxLevel: 74, chance: 15 }, 
						{ name: 'slowbro', minLevel: 67, maxLevel: 73, chance: 15 }, 
						{ name: 'seel', minLevel: 67, maxLevel: 73, chance: 10 }, 
						{ name: 'piloswine', minLevel: 67, maxLevel: 73, chance: 5 }, 
						{ name: 'jynx', minLevel: 67, maxLevel: 73, chance: 7 }, 
						{ name: 'slowpoke', minLevel: 67, maxLevel: 73, chance: 6 }, 
						{ name: 'kingler', minLevel: 68, maxLevel: 75, chance: 5 }, 
						{ name: 'sneasel', minLevel: 69, maxLevel: 70, chance: 3 }, 
			        ],
			        travel: {
			        	battles: [0, 30], 
			        	location: 'seafomCave-1'
			        }
				},
			},

		}
	},
	'route20-1': {
		name: ['Route 20', 'Ruta 20', '20号道路'],
		background: "assets/images/map/kanto/route/route20-1.png",
		song: "route11",
		worldEvent: {
			route19: {
				name: ['Route 19', 'Ruta 19', '19号道路'],
				position: { x: 23, y: 13.8 },
				size: { w: 2, h: 2.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 19', 'Ruta 19', '19号道路'],
					background: './assets/images/background/battle5.png',
					pokemon: [ 
						{ name: 'poliwhirl', minLevel: 55, maxLevel: 62, chance: 45 }, 
						{ name: 'poliwrath', minLevel: 58, maxLevel: 64, chance: 20 }, 
						{ name: 'slowpoke', minLevel: 57, maxLevel: 64, chance: 15 }, 
						{ name: 'slowbro', minLevel: 56, maxLevel: 64, chance: 15 }, 
						{ name: 'slowking', minLevel: 59, maxLevel: 65, chance: 5 }, 
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route19-2'
			        }
				},
			},
			cinnabarIsland: {
				name: ['Cinnabar Island', 'Isla Canela', '红莲岛'],
				position: { x: 0, y: 7.8 },
				size: { w: 3, h: 2.7 },
				event: {
					type: 'travelCity',
					location: 'cinnabarIsland-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 17, y: 9 },
				size: { w: 6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 20', 'Ruta 20', '20号道路'],
					background: './assets/images/background/battle5.png',
					pokemon: [  
						{ name: 'poliwag', minLevel: 55, maxLevel: 62, chance: 30 }, 
						{ name: 'wooper', minLevel: 58, maxLevel: 64, chance: 20 }, 
						{ name: 'quagsire', minLevel: 58, maxLevel: 64, chance: 20 }, 
						{ name: 'poliwhirl', minLevel: 55, maxLevel: 62, chance: 10 }, 
						{ name: 'slowpoke', minLevel: 57, maxLevel: 64, chance: 10 }, 
						{ name: 'poliwrath', minLevel: 58, maxLevel: 64, chance: 5 }, 
						{ name: 'slowbro', minLevel: 56, maxLevel: 64, chance: 5 }, 	           
			        ],
				},
			},
		}
	},
	'route21-1': {
		name: ['Route 21', 'Ruta 21', '21号道路'],
		background: "assets/images/map/kanto/route/route21-1.png",
		song: "route11",
		worldEvent: {
			cinnabarIsland: {
				name: ['Cinnabar Island', 'Isla Canela', '红莲岛'],
				position: { x: 15.3, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'cinnabarIsland-1'
				},
			},
			route21: {
				name: ['Route 21', 'Ruta 21', '21号道路'],
				position: { x: 12, y: 0 },
				size: { w: 10, h: 10 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 21', 'Ruta 21', '21号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 55, maxLevel: 62, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 58, maxLevel: 64, chance: 15 }, 
						{ name: 'lanturn', minLevel: 56, maxLevel: 64, chance: 15 }, 
						{ name: 'magikarp', minLevel: 59, maxLevel: 65, chance: 10 }, 
						{ name: 'shellder', minLevel: 58, maxLevel: 63, chance: 10 }, 
						{ name: 'slowking', minLevel: 57, maxLevel: 64, chance: 5 }, 
						{ name: 'cloyster', minLevel: 62, maxLevel: 64, chance: 5 }, 
						{ name: 'slowpoke', minLevel: 63, maxLevel: 65, chance: 5 }, 
						{ name: 'chinchou', minLevel: 61, maxLevel: 66, chance: 5 },
						{ name: 'slowbro', minLevel: 60, maxLevel: 65, chance: 3 },
						{ name: 'gyarados', minLevel: 59, maxLevel: 65, chance: 3 },
						{ name: 'lapras', minLevel: 65, maxLevel: 67, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 45], 
			        	location: 'route21-2'
			        }
				},
			},
		}
	},
	'route21-2': {
		name: ['Route 21', 'Ruta 21', '21号道路'],
		background: "assets/images/map/kanto/route/route21-2.png",
		song: "route11",
		worldEvent: {
			palletTown: {
				name: ['Pallet Town', 'Pueblo Paleta', '真新镇'],
				position: { x: 5.7, y: 0 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'travelCity',
					location: 'palletTown-1'
				},
			},
			route21: {
				name: ['Route 21', 'Ruta 21', '21号道路'],
				position: { x: 14, y: 13 },
				size: { w: 6, h: 5 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 21', 'Ruta 21', '21号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 55, maxLevel: 62, chance: 23 }, 
						{ name: 'tentacruel', minLevel: 58, maxLevel: 64, chance: 15 }, 
						{ name: 'lanturn', minLevel: 56, maxLevel: 64, chance: 15 }, 
						{ name: 'magikarp', minLevel: 59, maxLevel: 65, chance: 10 }, 
						{ name: 'shellder', minLevel: 58, maxLevel: 63, chance: 10 }, 
						{ name: 'slowking', minLevel: 57, maxLevel: 64, chance: 5 }, 
						{ name: 'cloyster', minLevel: 62, maxLevel: 64, chance: 5 }, 
						{ name: 'slowpoke', minLevel: 63, maxLevel: 65, chance: 5 }, 
						{ name: 'chinchou', minLevel: 61, maxLevel: 66, chance: 5 },
						{ name: 'slowbro', minLevel: 60, maxLevel: 65, chance: 3 },
						{ name: 'gyarados', minLevel: 59, maxLevel: 65, chance: 3 },
						{ name: 'lapras', minLevel: 65, maxLevel: 67, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 45], 
			        	location: 'route21-1'
			        }
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 23, y: 3 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute21',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 1, y: 9 },
				size: { w: 12, h: 8 },
				event: {
					type: 'routeBattle',
					title: ['Route 21', 'Ruta 21', '21号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'rattata', minLevel: 58, maxLevel: 67, chance: 25 }, 
						{ name: 'tangela', minLevel: 59, maxLevel: 64, chance: 15 }, 
						{ name: 'mrmime', minLevel: 60, maxLevel: 64, chance: 12 }, 
						{ name: 'krabby', minLevel: 59, maxLevel: 65, chance: 8 }, 
						{ name: 'shellder', minLevel: 58, maxLevel: 66, chance: 8 },   
						{ name: 'staryu', minLevel: 58, maxLevel: 66, chance: 8 },  
						{ name: 'pikachu', minLevel: 58, maxLevel: 64, chance: 6 }, 
						{ name: 'charmander', minLevel: 58, maxLevel: 62, chance: 6 },  
						{ name: 'bulbasaur', minLevel: 58, maxLevel: 62, chance: 6 },  
						{ name: 'squirtle', minLevel: 58, maxLevel: 62, chance: 6 },  
			        ],
				},
			},
		}
	},
	'route24-1': {
		name: ['Route 24', 'Ruta 24', '24号道路'],
		background: "assets/images/map/kanto/route/route24-1.png",
		song: "route24",
		worldEvent: {
			route25: {
				name: ['Route 25', 'Ruta 25', '25号道路'],
				position: { x: 3.5, y: 0 },
				size: { w: 4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route25-1'
				},
			},
			ceruleanCity: {
				name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
				position: { x: 3.2, y: 16 },
				size: { w: 7, h: 2 },
				event: {
					type: 'travelCity',
					location: 'ceruleanCity-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 1 },
				size: { w: 11, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 24', 'Ruta 24', '24号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'butterfree', minLevel: 56, maxLevel: 64, chance: 18 }, 
						{ name: 'victreebel', minLevel: 58, maxLevel: 61, chance: 15 }, 
						{ name: 'sunflora', minLevel: 55, maxLevel: 59, chance: 12 }, 
						{ name: 'gligar', minLevel: 55, maxLevel: 59, chance: 11 },
						{ name: 'murkrow', minLevel: 55, maxLevel: 59, chance: 10 },
						{ name: 'krabby', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'weepinbell', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'golduck', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 6 }, 
						{ name: 'kingler', minLevel: 56, maxLevel: 60, chance: 5 },  		           
			        ],
				},
			},
		}
	},
	'route25-1': {
		name: ['Route 25', 'Ruta 25', '25号道路'],
		background: "assets/images/map/kanto/route/route25-1.png",
		song: "route24",
		worldEvent: {
			route24: {
				name: ['Route 24', 'Ruta 24', '24号道路'],
				position: { x: 3.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route24-1'
				},
			},
			route25: {
				name: ['Route 25', 'Ruta 25', '25号道路'],
				position: { x: 23, y: 5.7 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route25-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 4 },
				size: { w: 19, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 25', 'Ruta 25', '25号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'jumpluff', minLevel: 56, maxLevel: 64, chance: 18 }, 
						{ name: 'sunflora', minLevel: 55, maxLevel: 59, chance: 12 }, 
						{ name: 'gligar', minLevel: 55, maxLevel: 59, chance: 11 },
						{ name: 'murkrow', minLevel: 55, maxLevel: 59, chance: 10 },
						{ name: 'victreebel', minLevel: 58, maxLevel: 61, chance: 10 }, 
						{ name: 'yanma', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'weepinbell', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'skiploom', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 6 }, 
						{ name: 'politoed', minLevel: 56, maxLevel: 60, chance: 5 },  
						{ name: 'smeargle', minLevel: 56, maxLevel: 60, chance: 5 },  	           
			        ],
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 11 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute25',
					tw: false
				},
			},
			pond: {
				name: [`Pond`, `Estanque`, `池塘`],
				position: { x: 0, y: 3 },
				size: { w: 3, h: 15 },
				event: {
					condition: {
						type: 'item',
						item: 'rod',
						exception: 'needRod'
					},
					type: 'routeBattle',
					title: ['Route 25', 'Ruta 25', '25号道路'],
					background: './assets/images/background/battle16.png',
					pokemon: [ 
						{ name: 'quagsire', minLevel: 55, maxLevel: 60, chance: 25 }, 
						{ name: 'azumarill', minLevel: 55, maxLevel: 59, chance: 25 },
						{ name: 'kingler', minLevel: 56, maxLevel: 58, chance: 20 }, 
						{ name: 'golduck', minLevel: 55, maxLevel: 61, chance: 15 },
						{ name: 'seadra', minLevel: 55, maxLevel: 61, chance: 10 },
						{ name: 'kingdra', minLevel: 55, maxLevel: 63, chance: 5 },
			        ],
				},
			},
		}
	},
	'route25-2': {
		name: ['Route 25', 'Ruta 25', '25号道路'],
		background: "assets/images/map/kanto/route/route25-2.png",
		song: "route24",
		worldEvent: {
			route25: {
				name: ['Route 25', 'Ruta 25', '25号道路'],
				position: { x: 0, y: 5.7 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route25-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 11 },
				size: { w: 16, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 25', 'Ruta 25', '25号道路'],
					background: './assets/images/background/battle22.png',
					pokemon: [  
						{ name: 'jumpluff', minLevel: 56, maxLevel: 64, chance: 18 }, 
						{ name: 'sunflora', minLevel: 55, maxLevel: 59, chance: 12 }, 
						{ name: 'gligar', minLevel: 55, maxLevel: 59, chance: 11 },
						{ name: 'murkrow', minLevel: 55, maxLevel: 59, chance: 10 },
						{ name: 'azumarill', minLevel: 58, maxLevel: 61, chance: 10 }, 
						{ name: 'politoed', minLevel: 56, maxLevel: 60, chance: 10 },             
						{ name: 'yanma', minLevel: 57, maxLevel: 60, chance: 9 }, 
						{ name: 'gloom', minLevel: 59, maxLevel: 60, chance: 7 }, 
						{ name: 'marill', minLevel: 55, maxLevel: 62, chance: 7 }, 
						{ name: 'kadabra', minLevel: 57, maxLevel: 61, chance: 4 }, 
						{ name: 'aipom', minLevel: 57, maxLevel: 61, chance: 2 }, 
			        ],
				},
			},
			singasCabin: {
				name: ["Singa's Cabin", 'Cabaña de Singa', '辛加的小屋'],
				position: { x: 14, y: 2},
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'singaRoute25'
				},
			},
			mailbox: {
				name: [`Singa's Mailbox`, `Buzón de Singa`,
				`Singa的邮箱`],
				position: { x: 13, y: 4.5 },
				size: { w: 1, h: 1.5 },
				event: {
					type: 'dialogue',
					npc: 'mailboxSinga',
					tw: false
				},
			},	
		}
	},
	// APACHAN
	'route56-1': {
		name: ['Route 56', 'Ruta 56', '56号道路'],
		background: "assets/images/map/apachan/route/route56-1.png",
		song: "route29",
		worldEvent: {
			pokemonLaboratory: {
				name: [`Pokemon Laboratory`, `Laboratorio Pokémon`,
				`宝可梦研究所`],
				position: { x: 4, y: 0 },
				size: { w: 7, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'professorGranite'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 3, y: 3},
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute56',
					tw: false
				},
			},	
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 22, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselRoute56',
					tw: false
				},
			},
			apacheta: { 
				name: ['Apacheta', 'Apacheta', '阿帕切塔'], 
				position: { x: 18.75, y: 3.75 },
				size: { w: 2.5, h: 4.5 },
				event: {
					type: 'dialogue',
					npc: 'apachetaApachan',
					tw: false
				},
			},
			route56: {
				name: ['Route 56', 'Ruta 56', '56号道路'],
				position: { x: 10.3, y: 15.2 },
				size: { w: 4.4, h: 2.8 },
				event: {
					type: 'travelRoute',
					location: 'route56-2'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 4, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route56HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route56-2': {
		name: ['Route 56', 'Ruta 56', '56号道路'],
		background: "assets/images/map/apachan/route/route56-2.png",
		song: "route29",
		worldEvent: {
			route56A: {
				name: ['Route 56', 'Ruta 56', '56号道路'],
				position: { x: 10.3, y: 0 },
				size: { w: 4.4, h: 2.8 },
				event: {
					type: 'travelRoute',
					location: 'route56-1'
				},
			},
			route56B: {
				name: ['Route 56', 'Ruta 56', '56号道路'],
				position: { x: 9.7, y: 15 },
				size: { w: 5.6, h: 3 },
				event: {
					condition: {
						type: 'item',
						item: 'pokeball',
						exception: 'needPokemon'
					},
					type: 'routeBattle',
					title: ['Route 56', 'Ruta 56', '56号道路'], 
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'zigzagoon', minLevel: 2, maxLevel: 4, chance: 30 },
			            { name: 'taillow', minLevel: 2, maxLevel: 4, chance: 20 },     
			            { name: 'poochyena', minLevel: 2, maxLevel: 3, chance: 15 }, 
			            { name: 'sentret', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'rattata', minLevel: 3, maxLevel: 5, chance: 15 },
			            { name: 'skitty', minLevel: 3, maxLevel: 5, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route56-3'
			        }
				},
			},
		}
	},
	'route56-3': {
		name: ['Route 56', 'Ruta 56', '56号道路'],
		background: "assets/images/map/apachan/route/route56-3.png",
		song: "route29",
		worldEvent: {
			route56: {
				name: ['Route 56', 'Ruta 56', '56号道路'],
				position: { x: 9.7, y: 0 },
				size: { w: 5.6, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 56', 'Ruta 56', '56号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'zigzagoon', minLevel: 2, maxLevel: 4, chance: 30 },
			            { name: 'taillow', minLevel: 2, maxLevel: 4, chance: 20 },     
			            { name: 'poochyena', minLevel: 2, maxLevel: 3, chance: 15 }, 
			            { name: 'sentret', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'rattata', minLevel: 3, maxLevel: 5, chance: 15 },
			            { name: 'skitty', minLevel: 3, maxLevel: 5, chance: 5 }
			        ],
			        travel: {
			        	battles: [0, 5], 
			        	location: 'route56-2'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 12 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 56', 'Ruta 56', '56号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'zigzagoon', minLevel: 2, maxLevel: 4, chance: 30 }, 
						{ name: 'poochyena', minLevel: 2, maxLevel: 4, chance: 20 },
			            { name: 'taillow', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'wurmple', minLevel: 2, maxLevel: 3, chance: 15 },
			            { name: 'spearow', minLevel: 3, maxLevel: 5, chance: 14 },
			            { name: 'skitty', minLevel: 3, maxLevel: 5, chance: 6 }
			        ],
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 18, y: 4 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'geologistRoute56'
				},
			},
			lithicTown: {
				name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
				position: { x: 5.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelCity',
					location: 'lithicTown-1'
				},
			},
		}
	},
	'route57-1': {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		background: "assets/images/map/apachan/route/route57-1.png",
		song: "route11",
		worldEvent: {
			lithicTown: {
				name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
				position: { x: 0, y: 3.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'lithicTown-2'
				},
			},
			route57: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 22, y: 10.8 },
				size: { w: 3, h: 4.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'wurmple', minLevel: 4, maxLevel: 5, chance: 15 },
			            { name: 'nincada', minLevel: 4, maxLevel: 5, chance: 15 },
			            { name: 'taillow', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'hoothoot', minLevel: 3, maxLevel: 5, chance: 12 },
			            { name: 'metapod', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'kakuna', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 6, chance: 10 },
			            { name: 'ledyba', minLevel: 4, maxLevel: 6, chance: 10 },
			            { name: 'lotad', minLevel: 5, maxLevel: 7, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route57-2'
			        }
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 1, y: 8 },
				size: { w: 12, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'nincada', minLevel: 3, maxLevel: 4, chance: 40 },
			            { name: 'kakuna', minLevel: 4, maxLevel: 5, chance: 10 },
			            { name: 'metapod', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'taillow', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'pidgey', minLevel: 2, maxLevel: 4, chance: 10 },
			            { name: 'hoothoot', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'skitty', minLevel: 3, maxLevel: 5, chance: 6 },
			            { name: 'lotad', minLevel: 4, maxLevel: 6, chance: 4 }
			        ],
				},
			},
		}
	},
	'route57-2': {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		background: "assets/images/map/apachan/route/route57-2.png",
		song: "route11",
		worldEvent: {
			route57A: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 10.8 },
				size: { w: 3, h: 4.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'], 
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'wurmple', minLevel: 4, maxLevel: 5, chance: 15 },
			            { name: 'nincada', minLevel: 4, maxLevel: 5, chance: 15 },
			            { name: 'taillow', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'hoothoot', minLevel: 3, maxLevel: 5, chance: 12 },
			            { name: 'metapod', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'kakuna', minLevel: 5, maxLevel: 6, chance: 10 },
			            { name: 'spinarak', minLevel: 3, maxLevel: 6, chance: 10 },
			            { name: 'ledyba', minLevel: 4, maxLevel: 6, chance: 10 },
			            { name: 'lotad', minLevel: 5, maxLevel: 7, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route57-1'
			        }
				},
			},
			route57B: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 23, y: 7.9 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 6 },
				size: { w: 11, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [  
						{ name: 'zigzagoon', minLevel: 3, maxLevel: 4, chance: 39 },
			            { name: 'silcoon', minLevel: 4, maxLevel: 5, chance: 12 },
			            { name: 'cascoon', minLevel: 3, maxLevel: 4, chance: 12 },
			            { name: 'poochyena', minLevel: 3, maxLevel: 4, chance: 10 },
			            { name: 'spearow', minLevel: 2, maxLevel: 4, chance: 10 },
			            { name: 'nincada', minLevel: 2, maxLevel: 5, chance: 10 },
			            { name: 'lotad', minLevel: 4, maxLevel: 6, chance: 7 }
			        ],
				},
			},
		}
	},
	'route57-3': {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		background: "assets/images/map/apachan/route/route57-3.png",
		song: "route11",
		worldEvent: {
			route57A: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-2'
				},
			},
			route57B: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 22, y: 10.9 },
				size: { w: 3, h: 4.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'], 
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'wurmple', minLevel: 18, maxLevel: 22, chance: 15 },
			            { name: 'nincada', minLevel: 17, maxLevel: 24, chance: 15 },
			            { name: 'surskit', minLevel: 18, maxLevel: 22, chance: 12 },
			            { name: 'hoothoot', minLevel: 19, maxLevel: 23, chance: 12 },
			            { name: 'caterpie', minLevel: 17, maxLevel: 22, chance: 10 },
			            { name: 'weedle', minLevel: 16, maxLevel: 21, chance: 10 },
			            { name: 'silcoon', minLevel: 18, maxLevel: 22, chance: 10 },
			            { name: 'cascoon', minLevel: 17, maxLevel: 21, chance: 10 },
			            { name: 'electrike', minLevel: 20, maxLevel: 22, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'route57-4'
			        }
				},
			},
			route62: {
				name: ['Route 62', 'Ruta 62', '62号道路'],
				position: { x: 9.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 62', 'Ruta 62', '62号道路'], 
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'wurmple', minLevel: 14, maxLevel: 17, chance: 38 }, 
			           	{ name: 'caterpie', minLevel: 13, maxLevel: 15, chance: 12 },
			            { name: 'weedle', minLevel: 15, maxLevel: 18, chance: 12 },
			            { name: 'spinarak', minLevel: 12, maxLevel: 16, chance: 12 },
						{ name: 'ledyba', minLevel: 13, maxLevel: 17, chance: 12 },
						{ name: 'electrike', minLevel: 12, maxLevel: 16, chance: 5 },
			            { name: 'skitty', minLevel: 11, maxLevel: 15, chance: 5 },
			            { name: 'ralts', minLevel: 13, maxLevel: 16, chance: 4 }   
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route62-1'
			        }
				},
			},
		}
	},
	'route57-4': {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		background: "assets/images/map/apachan/route/route57-4.png",
		song: "route11",
		worldEvent: {
			route57A: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 10.9 },
				size: { w: 3, h: 4.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'], 
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'wurmple', minLevel: 18, maxLevel: 22, chance: 15 },
			            { name: 'nincada', minLevel: 17, maxLevel: 24, chance: 15 },
			            { name: 'surskit', minLevel: 18, maxLevel: 22, chance: 12 },
			            { name: 'hoothoot', minLevel: 19, maxLevel: 23, chance: 12 },
			            { name: 'caterpie', minLevel: 17, maxLevel: 22, chance: 10 },
			            { name: 'weedle', minLevel: 16, maxLevel: 21, chance: 10 },
			            { name: 'silcoon', minLevel: 18, maxLevel: 22, chance: 10 },
			            { name: 'cascoon', minLevel: 17, maxLevel: 21, chance: 10 },
			            { name: 'electrike', minLevel: 20, maxLevel: 22, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'route57-3'
			        }
				},
			},
			route57B: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 23, y: 7.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-5'
				},
			},
		}
	},
	'route57-5': {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		background: "assets/images/map/apachan/route/route57-5.png",
		song: "route11",
		worldEvent: {
			route57A: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-4'
				},
			},
			route57B: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 23, y: 4.9 },
				size: { w: 2, h: 2.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-6'
				},
			},
			route57C: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 23, y: 9.9 },
				size: { w: 2, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-6'
				},
			},
			route58: {
				name: ['Route 58', 'Ruta 58', '58号道路'],
				position: { x: 10.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 58', 'Ruta 58', '58号道路'], 
					background: './assets/images/background/battle21.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 25, maxLevel: 32, chance: 28 },
			            { name: 'geodude', minLevel: 27, maxLevel: 31, chance: 13 },
			           	{ name: 'diglett', minLevel: 26, maxLevel: 33, chance: 12 }, 
			            { name: 'makuhita', minLevel: 26, maxLevel: 34, chance: 10 },     
			            { name: 'spoink', minLevel: 28, maxLevel: 32, chance: 10 },
			            { name: 'cacnea', minLevel: 27, maxLevel: 31, chance: 8 },    
			            { name: 'vigoroth', minLevel: 28, maxLevel: 33, chance: 6 },
			            { name: 'nuzleaf', minLevel: 26, maxLevel: 32, chance: 7 },
			            { name: 'baltoy', minLevel: 27, maxLevel: 30, chance: 4 },
			            { name: 'shuckle', minLevel: 28, maxLevel: 31, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 11], 
			        	location: 'route58-1'
			        }
				},
			},
		}
	},
	'route57-6': {
		name: ['Route 57', 'Ruta 57', '57号道路'],
		background: "assets/images/map/apachan/route/route57-6.png",
		song: "route11",
		worldEvent: {
			route57A: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 4.9 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-5'
				},
			},
			route57B: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 9.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route57-5'
				},
			},
			route59: {
				name: ['Route 59', 'Ruta 59', '59号道路'],
				position: { x: 22, y: 9.9 },
				size: { w: 3, h: 2.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 59', 'Ruta 59', '59号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'butterfree', minLevel: 26, maxLevel: 32, chance: 15 },
			            { name: 'beedrill', minLevel: 26, maxLevel: 31, chance: 15 },
			            { name: 'beautifly', minLevel: 25, maxLevel: 33, chance: 12 },
			            { name: 'dustox', minLevel: 27, maxLevel: 34, chance: 12 },
			            { name: 'masquerain', minLevel: 29, maxLevel: 32, chance: 10 },
			            { name: 'nuzleaf', minLevel: 28, maxLevel: 30, chance: 10 },
			            { name: 'sunflora', minLevel: 30, maxLevel: 31, chance: 10 },
			            { name: 'corphish', minLevel: 27, maxLevel: 32, chance: 10 },
			            { name: 'lombre', minLevel: 25, maxLevel: 35, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route59-1'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 10, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route57HiddenItem',
					invisible: true
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 13, y: 3 },
				size: { w: 11, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'beautifly', minLevel: 26, maxLevel: 32, chance: 15 },
			            { name: 'dustox', minLevel: 26, maxLevel: 31, chance: 15 },
			            { name: 'ledian', minLevel: 25, maxLevel: 33, chance: 12 },
			            { name: 'ariados', minLevel: 27, maxLevel: 34, chance: 12 },
			            { name: 'masquerain', minLevel: 29, maxLevel: 32, chance: 10 },
			            { name: 'nuzleaf', minLevel: 28, maxLevel: 30, chance: 10 },
			            { name: 'sunflora', minLevel: 30, maxLevel: 31, chance: 10 },
			            { name: 'spinda', minLevel: 27, maxLevel: 32, chance: 10 },
			            { name: 'roselia', minLevel: 25, maxLevel: 35, chance: 6 }
			        ],
				},
			},
		}
	},
	'route58-1': {
		name: ['Route 58', 'Ruta 58', '58号道路'],
		background: "assets/images/map/apachan/route/route58-1.png",
		song: "route11",
		worldEvent: {	
			route57: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 10.9, y: 0 },
				size: { w: 3.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 25, maxLevel: 32, chance: 28 },
			            { name: 'geodude', minLevel: 27, maxLevel: 31, chance: 13 },
			           	{ name: 'diglett', minLevel: 26, maxLevel: 33, chance: 12 }, 
			            { name: 'makuhita', minLevel: 26, maxLevel: 34, chance: 10 },     
			            { name: 'spoink', minLevel: 28, maxLevel: 32, chance: 10 },
			            { name: 'cacnea', minLevel: 27, maxLevel: 31, chance: 8 },    
			            { name: 'vigoroth', minLevel: 28, maxLevel: 33, chance: 6 },
			            { name: 'nuzleaf', minLevel: 26, maxLevel: 32, chance: 7 },
			            { name: 'baltoy', minLevel: 27, maxLevel: 30, chance: 4 },
			            { name: 'shuckle', minLevel: 28, maxLevel: 31, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 11], 
			        	location: 'route57-5'
			        }
				},
			},
			route58: {
				name: ['Route 58', 'Ruta 58', '58号道路'], 
				position: { x: 4.9, y: 15.5 },
				size: { w: 3.3, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route58-2'
				},
			},
		}
	},
	'route58-2': {
		name: ['Route 58', 'Ruta 58', '58号道路'],
		background: "assets/images/map/apachan/route/route58-2.png",
		song: "route11",
		worldEvent: {	
			route58A: {
				name: ['Route 58', 'Ruta 58', '58号道路'], 
				position: { x: 4.9, y: 0 },
				size: { w: 3.3, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route58-1'
				},
			},
			route58B: {
				name: ['Route 58', 'Ruta 58', '58号道路'], 
				position: { x: 10.9, y: 15.5 },
				size: { w: 4.3, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route58-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 3 },
				size: { w: 9, h: 7 },
				event: {
					type: 'routeBattle',
					title: ['Route 58', 'Ruta 58', '58号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'loudred', minLevel: 28, maxLevel: 33, chance: 28 },
			            { name: 'geodude', minLevel: 27, maxLevel: 32, chance: 13 },
			           	{ name: 'diglett', minLevel: 26, maxLevel: 31, chance: 12 }, 
			            { name: 'makuhita', minLevel: 25, maxLevel: 30, chance: 10 },     
			            { name: 'spoink', minLevel: 27, maxLevel: 33, chance: 10 },
			            { name: 'cacnea', minLevel: 25, maxLevel: 32, chance: 8 },    
			            { name: 'vigoroth', minLevel: 26, maxLevel: 34, chance: 6 },
			            { name: 'sandslash', minLevel: 26, maxLevel: 31, chance: 7 },
			            { name: 'baltoy', minLevel: 27, maxLevel: 33, chance: 3 },
			            { name: 'trapinch', minLevel: 29, maxLevel: 32, chance: 3 },
			        ],
				},
			},
		}
	},
	'route58-3': {
		name: ['Route 58', 'Ruta 58', '58号道路'],
		background: "assets/images/map/apachan/route/route58-3.png",
		song: "route11",
		worldEvent: {	
			route57: {
				name: ['Route 58', 'Ruta 58', '58号道路'],
				position: { x: 15.8, y: 15 },
				size: { w: 5.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 58', 'Ruta 58', '58号道路'], 
					background: './assets/images/background/battle28.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 27, maxLevel: 32, chance: 24 },
			            { name: 'doduo', minLevel: 28, maxLevel: 34, chance: 18 },
			           	{ name: 'diglett', minLevel: 29, maxLevel: 31, chance: 14 }, 
			            { name: 'hypno', minLevel: 30, maxLevel: 33, chance: 14 },
			            { name: 'makuhita', minLevel: 30, maxLevel: 32, chance: 12 },     
			            { name: 'spoink', minLevel: 27, maxLevel: 30, chance: 12 },   
			            { name: 'trapinch', minLevel: 25, maxLevel: 28, chance: 6 },
			        ],
			        travel: {
			        	battles: [0, 9], 
			        	location: 'route58-4'
			        }
				},
			},
		}
	},
	'route58-4': {
		name: ['Route 58', 'Ruta 58', '58号道路'],
		background: "assets/images/map/apachan/route/route58-4.png",
		song: "route11",
		worldEvent: {
			route57: {
				name: ['Route 58', 'Ruta 58', '58号道路'],
				position: { x: 15.8, y: 0 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 58', 'Ruta 58', '58号道路'], 
					background: './assets/images/background/battle28.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 27, maxLevel: 32, chance: 24 },
			            { name: 'doduo', minLevel: 28, maxLevel: 34, chance: 18 },
			           	{ name: 'diglett', minLevel: 29, maxLevel: 31, chance: 14 }, 
			            { name: 'hypno', minLevel: 30, maxLevel: 33, chance: 14 },
			            { name: 'makuhita', minLevel: 30, maxLevel: 32, chance: 12 },     
			            { name: 'spoink', minLevel: 27, maxLevel: 30, chance: 12 },   
			            { name: 'trapinch', minLevel: 25, maxLevel: 28, chance: 6 },
			        ],
			        travel: {
			        	battles: [0, 9], 
			        	location: 'route58-3'
			        }
				},
			},
			opalTown: {
				name: ['Opal Town', 'Pueblo Ópalo', '蛋白镇'], 
				position: { x: 0, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'opalTown-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 13 },
				size: { w: 17, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 58', 'Ruta 58', '58号道路'],
					background: './assets/images/background/battle28.png',
					pokemon: [  
						{ name: 'onix', minLevel: 27, maxLevel: 30, chance: 24 },
			            { name: 'doduo', minLevel: 28, maxLevel: 33, chance: 18 },
			           	{ name: 'growlithe', minLevel: 29, maxLevel: 32, chance: 14 }, 
			            { name: 'hypno', minLevel: 28, maxLevel: 31, chance: 14 },
			            { name: 'makuhita', minLevel: 27, maxLevel: 30, chance: 12 },     
			            { name: 'shuppet', minLevel: 28, maxLevel: 30, chance: 12 },   
			            { name: 'trapinch', minLevel: 27, maxLevel: 29, chance: 6 },
			        ],
				},
			},
		}
	},
	'route59-1': {
		name: ['Route 59', 'Ruta 59', '59号道路'],
		background: "assets/images/map/apachan/route/route59-1.png",
		song: "route42",
		worldEvent: {
			route57: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 0, y: 9.9 },
				size: { w: 4, h: 2.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 59', 'Ruta 59', '59号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'butterfree', minLevel: 26, maxLevel: 32, chance: 15 },
			            { name: 'beedrill', minLevel: 26, maxLevel: 31, chance: 15 },
			            { name: 'beautifly', minLevel: 25, maxLevel: 33, chance: 12 },
			            { name: 'dustox', minLevel: 27, maxLevel: 34, chance: 12 },
			            { name: 'masquerain', minLevel: 29, maxLevel: 32, chance: 10 },
			            { name: 'nuzleaf', minLevel: 28, maxLevel: 30, chance: 10 },
			            { name: 'sunflora', minLevel: 30, maxLevel: 31, chance: 10 },
			            { name: 'corphish', minLevel: 27, maxLevel: 32, chance: 10 },
			            { name: 'lombre', minLevel: 25, maxLevel: 35, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route57-6'
			        }
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 3, y: 4 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute59',
					tw: false
				},
			},
			route60: {
				name: ['Route 60', 'Ruta 60', '60号道路'],
				position: { x: 18, y: 3 },
				size: { w: 7, h: 11 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 60', 'Ruta 60', '60号道路'], 
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'sealeo', minLevel: 88, maxLevel: 90, chance: 13 },
			            { name: 'pelipper', minLevel: 85, maxLevel: 92, chance: 12 },
			            { name: 'gorebyss', minLevel: 86, maxLevel: 91, chance: 9 },
			            { name: 'wailmer', minLevel: 87, maxLevel: 95, chance: 9 },
			            { name: 'sharpedo', minLevel: 88, maxLevel: 92, chance: 9 },
			            { name: 'huntail', minLevel: 87, maxLevel: 94, chance: 9 },
			            { name: 'crawdaunt', minLevel: 88, maxLevel: 93, chance: 9 },
			            { name: 'lapras', minLevel: 90, maxLevel: 93, chance: 6 },
			            { name: 'lanturn', minLevel: 90, maxLevel: 93, chance: 6 },
			            { name: 'walrein', minLevel: 86, maxLevel: 93, chance: 5 },
			            { name: 'dragonair', minLevel: 86, maxLevel: 93, chance: 5 },
			            { name: 'tentacruel', minLevel: 88, maxLevel: 92, chance: 5 },
			            { name: 'gyarados', minLevel: 87, maxLevel: 94, chance: 1 },
			            { name: 'kingdra', minLevel: 87, maxLevel: 94, chance: 1 },
			            { name: 'wailord', minLevel: 86, maxLevel: 93, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 60], 
			        	location: 'route60-1'
			        }
				},
			},
		}
	},
	'route60-1': {
		name: ['Route 60', 'Ruta 60', '60号道路'],
		background: "assets/images/map/apachan/route/route60-1.png",
		song: "route42",
		worldEvent: {
			route59: {
				name: ['Route 59', 'Ruta 59', '59号道路'],
				position: { x: 0, y: 3 },
				size: { w: 7, h: 12 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 59', 'Ruta 59', '59号道路'], 
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'sealeo', minLevel: 88, maxLevel: 90, chance: 13 },
			            { name: 'pelipper', minLevel: 85, maxLevel: 92, chance: 12 },
			            { name: 'gorebyss', minLevel: 86, maxLevel: 91, chance: 9 },
			            { name: 'wailmer', minLevel: 87, maxLevel: 95, chance: 9 },
			            { name: 'sharpedo', minLevel: 88, maxLevel: 92, chance: 9 },
			            { name: 'huntail', minLevel: 87, maxLevel: 94, chance: 9 },
			            { name: 'crawdaunt', minLevel: 88, maxLevel: 93, chance: 9 },
			            { name: 'lapras', minLevel: 90, maxLevel: 93, chance: 6 },
			            { name: 'lanturn', minLevel: 90, maxLevel: 93, chance: 6 },
			            { name: 'walrein', minLevel: 86, maxLevel: 93, chance: 5 },
			            { name: 'dragonair', minLevel: 86, maxLevel: 93, chance: 5 },
			            { name: 'tentacruel', minLevel: 88, maxLevel: 92, chance: 5 },
			            { name: 'gyarados', minLevel: 87, maxLevel: 94, chance: 1 },
			            { name: 'kingdra', minLevel: 87, maxLevel: 94, chance: 1 },
			            { name: 'wailord', minLevel: 86, maxLevel: 93, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 60], 
			        	location: 'route59-1'
			        }
				},
			},
			route60: {
				name: ['Route 60', 'Ruta 60', '60号道路'],
				position: { x: 23, y: 2.8 },
				size: { w: 2, h: 4.5 },
				event: {
					type: 'routeBattle',
					title: ['Route 60', 'Ruta 60', '60号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'jumpluff', minLevel: 83, maxLevel: 86, chance: 15 },
						{ name: 'vileplume', minLevel: 82, maxLevel: 85, chance: 15 },
						{ name: 'heracross', minLevel: 83, maxLevel: 86, chance: 10 },
						{ name: 'xatu', minLevel: 82, maxLevel: 85, chance: 10 },
						{ name: 'victreebel', minLevel: 83, maxLevel: 86, chance: 10 },
						{ name: 'scyther', minLevel: 82, maxLevel: 85, chance: 10 },
						{ name: 'sunflora', minLevel: 82, maxLevel: 84, chance: 10 },
						{ name: 'kecleon', minLevel: 84, maxLevel: 87, chance: 5 },
						{ name: 'bulbasaur', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'chikorita', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'treecko', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'venusaur', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'meganium', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'sceptile', minLevel: 86, maxLevel: 90, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route60-2'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 21, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route60HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route60-2': {
		name: ['Route 60', 'Ruta 60', '60号道路'],
		background: "assets/images/map/apachan/route/route60-2.png",
		song: "route42",
		worldEvent: {
			route60: {
				name: ['Route 60', 'Ruta 60', '60号道路'],
				position: { x: 0, y: 2.8 },
				size: { w: 2, h: 4.5 },
				event: {
					type: 'routeBattle',
					title: ['Route 60', 'Ruta 60', '60号道路'], 
					background: './assets/images/background/battle7.png',
					pokemon: [ 
						{ name: 'jumpluff', minLevel: 83, maxLevel: 86, chance: 15 },
						{ name: 'vileplume', minLevel: 82, maxLevel: 85, chance: 15 },
						{ name: 'heracross', minLevel: 83, maxLevel: 86, chance: 10 },
						{ name: 'xatu', minLevel: 82, maxLevel: 85, chance: 10 },
						{ name: 'victreebel', minLevel: 83, maxLevel: 86, chance: 10 },
						{ name: 'scyther', minLevel: 82, maxLevel: 85, chance: 10 },
						{ name: 'sunflora', minLevel: 82, maxLevel: 84, chance: 10 },
						{ name: 'kecleon', minLevel: 84, maxLevel: 87, chance: 5 },
						{ name: 'bulbasaur', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'chikorita', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'treecko', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'venusaur', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'meganium', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'sceptile', minLevel: 86, maxLevel: 90, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route60-1'
			        }
				},
			},
			route61: {
				name: ['Route 61', 'Ruta 61', '61号道路'],
				position: { x: 5.7, y: 0 },
				size: { w: 5.6, h: 2 },
				event: {
					type: 'travelRoute',
			        location: 'route61-1'
			    }
			},
			marbleCity: {
				name: ['Marble City', 'Ciudad Mármol', '大理石市'], 
				position: { x: 10.7, y: 15 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelCity',
					location: 'marbleCity-1'
				},
			},
		}
	},
	'route61-1': {
		name: ['Route 61', 'Ruta 61', '61号道路'],
		background: "assets/images/map/apachan/route/route61-1.png",
		song: "route42",
		worldEvent: {
			route60: {
				name: ['Route 60', 'Ruta 60', '60号道路'],
				position: { x: 5.7, y: 15.6 },
				size: { w: 5.6, h: 2.4 },
				event: {
					type: 'travelRoute',
			        location: 'route60-2'
			    }
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 12 },
				size: { w: 6, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 61', 'Ruta 61', '61号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'jumpluff', minLevel: 83, maxLevel: 86, chance: 30 },
						{ name: 'vileplume', minLevel: 82, maxLevel: 85, chance: 25 },
						{ name: 'heracross', minLevel: 82, maxLevel: 84, chance: 20 },
						{ name: 'kecleon', minLevel: 84, maxLevel: 87, chance: 10 },
						{ name: 'bulbasaur', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'chikorita', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'treecko', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'venusaur', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'meganium', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'sceptile', minLevel: 86, maxLevel: 90, chance: 2 },
			        ],
				},
			},
			route61: {
				name: ['Route 61', 'Ruta 61', '61号道路'], 
				position: { x: 15.7, y: 0 },
				size: { w: 3.6, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route61-2'
				},
			},
		}
	},
	'route61-2': {
		name: ['Route 61', 'Ruta 61', '61号道路'],
		background: "assets/images/map/apachan/route/route61-2.png",
		song: "route42",
		worldEvent: {
			cozyHouse: {
				name: ['Cozy house', 'Casa acogedora', '舒适小屋'],
				position: { x: 17, y: 2.5},
				size: { w: 4, h: 3.5 },
				event: {
					type: 'dialogue',
					npc: 'trainerRoute61'
				},
			},
			route61A: {
				name: ['Route 61', 'Ruta 61', '61号道路'], 
				position: { x: 15.7, y: 15.5 },
				size: { w: 3.6, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route61-1'
				},
			},
			route61B: {
				name: ['Route 61', 'Ruta 61', '61号道路'], 
				position: { x: 10.8, y: 0 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route61-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 3 },
				size: { w: 2, h: 13 },
				event: {
					type: 'routeBattle',
					title: ['Route 61', 'Ruta 61', '61号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'xatu', minLevel: 83, maxLevel: 86, chance: 30 },
						{ name: 'victreebel', minLevel: 82, maxLevel: 85, chance: 25 },
						{ name: 'scyther', minLevel: 82, maxLevel: 84, chance: 20 },
						{ name: 'kecleon', minLevel: 84, maxLevel: 87, chance: 10 },
						{ name: 'bulbasaur', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'chikorita', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'treecko', minLevel: 76, maxLevel: 80, chance: 3 },
						{ name: 'venusaur', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'meganium', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'sceptile', minLevel: 86, maxLevel: 90, chance: 2 },
			        ],
				},
			},
		}
	},
	'route61-3': {
		name: ['Route 61', 'Ruta 61', '61号道路'],
		background: "assets/images/map/apachan/route/route61-3.png",
		song: "route42",
		worldEvent: {
			route61: {
				name: ['Route 61', 'Ruta 61', '61号道路'], 
				position: { x: 10.8, y: 15.5 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route61-2'
				},
			},
			battleCenter: {
				name: ['Battle Center', 'Centro Batalla', '对战中心'],
				position: { x: 9, y: 0.5},
				size: { w: 7, h: 5.5 },
				event: {
					type: 'dialogue',
					npc: 'battleCenter'
				},
			},
		}
	},
	'route55-1': {
		name: ['Route 55', 'Ruta 55', '55号道路'],
		background: "assets/images/map/apachan/route/route55-1.png",
		song: "route24",
		worldEvent: {
			route55: {
				name: ['Route 55', 'Ruta 55', '55号道路'],
				position: { x: 0, y: 4.9 },
				size: { w: 3, h: 6.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'bellsprout', minLevel: 6, maxLevel: 9, chance: 25 },
			            { name: 'seedot', minLevel: 7, maxLevel: 9, chance: 25 },
						{ name: 'ekans', minLevel: 7, maxLevel: 10, chance: 14 },
			            { name: 'roselia', minLevel: 7, maxLevel: 9, chance: 11 },
			            { name: 'mareep', minLevel: 6, maxLevel: 8, chance: 11 },
			            { name: 'electrike', minLevel: 6, maxLevel: 9, chance: 8 },
			            { name: 'slakoth', minLevel: 8, maxLevel: 11, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 7], 
			        	location: 'route55-2'
			        }
				},
			},
			lithicTown: {
				name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
				position: { x: 22.4, y: 10.8 },
				size: { w: 2.6, h: 3.5 },
				event: {
					type: 'travelCity',
					location: 'lithicTown-1'
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 10, y: 1 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'seedot', minLevel: 6, maxLevel: 10, chance: 35 },
			            { name: 'hoppip', minLevel: 6, maxLevel: 9, chance: 25 },
			            { name: 'bellsprout', minLevel: 6, maxLevel: 9, chance: 15 },
			            { name: 'lotad', minLevel: 7, maxLevel: 9, chance: 10 },
			            { name: 'wingull', minLevel: 6, maxLevel: 8, chance: 10 },
			            { name: 'sunkern', minLevel: 7, maxLevel: 11, chance: 5 }
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 15 },
				size: { w: 9, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'rattata', minLevel: 6, maxLevel: 10, chance: 35 },
			            { name: 'hoppip', minLevel: 6, maxLevel: 9, chance: 25 },
			            { name: 'wingull', minLevel: 6, maxLevel: 9, chance: 15 },
			            { name: 'lotad', minLevel: 7, maxLevel: 9, chance: 10 },
			            { name: 'surskit', minLevel: 6, maxLevel: 8, chance: 10 },
			            { name: 'roselia', minLevel: 7, maxLevel: 11, chance: 5 }
			        ],
				},
			},
		}
	},
	'route55-2': {
		name: ['Route 55', 'Ruta 55', '55号道路'],
		background: "assets/images/map/apachan/route/route55-2.png",
		song: "route24",
		worldEvent: {
			route55A: {
				name: ['Route 55', 'Ruta 55', '55号道路'],
				position: { x: 22, y: 4.9 },
				size: { w: 3, h: 6.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'bellsprout', minLevel: 6, maxLevel: 9, chance: 25 },
			            { name: 'seedot', minLevel: 7, maxLevel: 9, chance: 25 },
						{ name: 'ekans', minLevel: 7, maxLevel: 10, chance: 14 },
			            { name: 'roselia', minLevel: 7, maxLevel: 9, chance: 11 },
			            { name: 'mareep', minLevel: 6, maxLevel: 8, chance: 11 },
			            { name: 'electrike', minLevel: 6, maxLevel: 9, chance: 8 },
			            { name: 'slakoth', minLevel: 8, maxLevel: 11, chance: 6 }
			        ],
			        travel: {
			        	battles: [0, 7], 
			        	location: 'route55-1'
			        }
				},
			},
			route55B: {
				name: ['Route 55', 'Ruta 55', '55号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 3, h: 5.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'psyduck', minLevel: 7, maxLevel: 10, chance: 16 },
						{ name: 'bellsprout', minLevel: 7, maxLevel: 9, chance: 15 },
			            { name: 'wingull', minLevel: 6, maxLevel: 11, chance: 15 },
						{ name: 'wooper', minLevel: 6, maxLevel: 10, chance: 15 },
			            { name: 'poliwag', minLevel: 7, maxLevel: 9, chance: 10 },
			            { name: 'lotad', minLevel: 5, maxLevel: 8, chance: 10 },
			            { name: 'plusle', minLevel: 3, maxLevel: 8, chance: 7 },
			            { name: 'minun', minLevel: 7, maxLevel: 9, chance: 7 },
			            { name: 'corphish', minLevel: 6, maxLevel: 11, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route55-3'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 8, y: 14 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route55HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route55-3': {
		name: ['Route 55', 'Ruta 55', '55号道路'],
		background: "assets/images/map/apachan/route/route55-3.png",
		song: "route24",
		worldEvent: {
			route55: {
				name: ['Route 55', 'Ruta 55', '55号道路'],
				position: { x: 22, y: 7.9 },
				size: { w: 3, h: 5.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'psyduck', minLevel: 7, maxLevel: 10, chance: 16 },
						{ name: 'bellsprout', minLevel: 7, maxLevel: 9, chance: 15 },
			            { name: 'wingull', minLevel: 6, maxLevel: 11, chance: 15 },
						{ name: 'wooper', minLevel: 6, maxLevel: 10, chance: 15 },
			            { name: 'poliwag', minLevel: 7, maxLevel: 9, chance: 10 },
			            { name: 'lotad', minLevel: 5, maxLevel: 8, chance: 10 },
			            { name: 'plusle', minLevel: 3, maxLevel: 8, chance: 7 },
			            { name: 'minun', minLevel: 7, maxLevel: 9, chance: 7 },
			            { name: 'corphish', minLevel: 6, maxLevel: 11, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route55-2'
			        }
				},
			},
			route54: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 6.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route54-1'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 17, y: 5 },
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute55',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 6 },
				size: { w: 8, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 55', 'Ruta 55', '55号道路'],
					background: './assets/images/background/battle17.png',
					pokemon: [  
			            { name: 'lotad', minLevel: 5, maxLevel: 8, chance: 24 },
						{ name: 'corphish', minLevel: 7, maxLevel: 10, chance: 16 },
						{ name: 'oddish', minLevel: 7, maxLevel: 9, chance: 15 },
			            { name: 'wingull', minLevel: 6, maxLevel: 11, chance: 15 },
						{ name: 'tangela', minLevel: 6, maxLevel: 10, chance: 15 },
			            { name: 'poliwag', minLevel: 7, maxLevel: 9, chance: 15 },
			        ],
				},
			},
		}
	},
	'route54-1': {
		name: ['Route 54', 'Ruta 54', '54号道路'],
		background: "assets/images/map/apachan/route/route54-1.png",
		song: "route24",
		worldEvent: {
			route55A: {
				name: ['Route 55', 'Ruta 55', '55号道路'], 
				position: { x: 6.8, y: 0 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route55-3'
				},
			},
			route55B: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 12.3, y: 15 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route54-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 16, y: 3 },
				size: { w: 7, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 54', 'Ruta 54', '54号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'bellsprout', minLevel: 15, maxLevel: 22, chance: 24 },
						{ name: 'surskit', minLevel: 17, maxLevel: 21, chance: 16 },
						{ name: 'oddish', minLevel: 17, maxLevel: 20, chance: 15 },
			            { name: 'wingull', minLevel: 16, maxLevel: 20, chance: 15 },
						{ name: 'tangela', minLevel: 16, maxLevel: 21, chance: 15 },
			            { name: 'shroomish', minLevel: 17, maxLevel: 20, chance: 15 },
			        ],
				},
			},
		}
	},
	'route54-2': {
		name: ['Route 54', 'Ruta 54', '54号道路'],
		background: "assets/images/map/apachan/route/route54-2.png",
		song: "route24",
		worldEvent: {
			route54A: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 12.3, y: 0 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route54-1'
				},
			},
			route54B: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 7.8, y: 15.5 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route54-3'
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 3, y: 10 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route54-2',
					newLocation: 'route54-2bis',
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 9 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'hermitRoute54'
				},
			},
		}
	},
	'route54-2bis': {
		name: ['Route 54', 'Ruta 54', '54号道路'],
		background: "assets/images/map/apachan/route/route54-2bis.png",
		song: "route24",
		worldEvent: {
			route54A: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 12.3, y: 0 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route54-1'
				},
			},
			route54B: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 7.8, y: 15.5 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route54-3'
				},
			},
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 17, y: 9 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'musicianRoute54'
				},
			},
			route53: {
				name: ['Route 53', 'Ruta 53', '53号道路'], 
				position: { x: 0, y: 8.8 },
				size: { w: 3.2, h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route53-1'
				},
			},
		}
	},
	'route54-3': {
		name: ['Route 54', 'Ruta 54', '54号道路'],
		background: "assets/images/map/apachan/route/route54-3.png",
		song: "route24",
		worldEvent: {
			route54: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 7.8, y: 0 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route54-2'
				},
			},
			route52: {
				name: ['Route 52', 'Ruta 52', '52号道路'],
				position: { x: 15.8, y: 16 },
				size: { w: 5.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 52', 'Ruta 52', '52号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'nuzleaf', minLevel: 19, maxLevel: 24, chance: 16 },
						{ name: 'weepinbell', minLevel: 20, maxLevel: 25, chance: 15 },
			            { name: 'venonat', minLevel: 16, maxLevel: 23, chance: 15 },
						{ name: 'wooper', minLevel: 19, maxLevel: 25, chance: 13 },
			            { name: 'spinda', minLevel: 17, maxLevel: 24, chance: 10 },
			            { name: 'paras', minLevel: 18, maxLevel: 24, chance: 10 },
			            { name: 'tangela', minLevel: 20, maxLevel: 23, chance: 9 },
			            { name: 'nincada', minLevel: 17, maxLevel: 22, chance: 8 },
			            { name: 'slakoth', minLevel: 17, maxLevel: 22, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'route52-1'
			        }
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 12, y: 2 },
				size: { w: 11, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 54', 'Ruta 54', '54号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'bellsprout', minLevel: 17, maxLevel: 24, chance: 30 },
						{ name: 'spinda', minLevel: 17, maxLevel: 23, chance: 15 },
			            { name: 'venonat', minLevel: 16, maxLevel: 22, chance: 15 },
						{ name: 'farfetchd', minLevel: 16, maxLevel: 21, chance: 10 },
			            { name: 'snubbull', minLevel: 17, maxLevel: 20, chance: 10 },
			            { name: 'paras', minLevel: 16, maxLevel: 23, chance: 10 },
			            { name: 'slakoth', minLevel: 18, maxLevel: 22, chance: 7 },
			            { name: 'cacnea', minLevel: 17, maxLevel: 21, chance: 3 },
			        ],
				},
			},
			wildB: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 19, y: 6 },
				size: { w: 4, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 54', 'Ruta 54', '54号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'bellsprout', minLevel: 17, maxLevel: 24, chance: 30 },
						{ name: 'spinda', minLevel: 17, maxLevel: 23, chance: 15 },
			            { name: 'venonat', minLevel: 16, maxLevel: 22, chance: 15 },
						{ name: 'farfetchd', minLevel: 16, maxLevel: 21, chance: 10 },
			            { name: 'snubbull', minLevel: 17, maxLevel: 20, chance: 10 },
			            { name: 'paras', minLevel: 16, maxLevel: 23, chance: 10 },
			            { name: 'slakoth', minLevel: 18, maxLevel: 22, chance: 7 },
			            { name: 'cacnea', minLevel: 17, maxLevel: 21, chance: 3 },
			        ],
				},
			},
			wildC: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 3, y: 9 },
				size: { w: 6, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 54', 'Ruta 54', '54号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'seedot', minLevel: 17, maxLevel: 21, chance: 30 },
						{ name: 'farfetchd', minLevel: 16, maxLevel: 22, chance: 17 },
						{ name: 'wingull', minLevel: 17, maxLevel: 23, chance: 15 },
			            { name: 'bellsprout', minLevel: 16, maxLevel: 22, chance: 15 },
			            { name: 'venonat', minLevel: 17, maxLevel: 20, chance: 10 },
			            { name: 'snubbull', minLevel: 16, maxLevel: 21, chance: 9 },
			            { name: 'cacnea', minLevel: 17, maxLevel: 22, chance: 4 },
			        ],
				},
			},
		}
	},
	'route53-1': {
		name: ['Route 53', 'Ruta 53', '53号道路'],
		background: "assets/images/map/apachan/route/route53-1.png",
		song: "route3",
		worldEvent: {
			route54: {
				name: ['Route 54', 'Ruta 54', '54号道路'], 
				position: { x: 22, y: 8.8 },
				size: { w: 3, h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route54-2'
				},
			},
			route53: {
				name: ['Route 53', 'Ruta 53', '53号道路'], 
				position: { x: 0, y: 4.8 },
				size: { w: 3, h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route53-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 4 },
				size: { w: 9, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 53', 'Ruta 53', '53号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'roselia', minLevel: 75, maxLevel: 78, chance: 30 },
						{ name: 'clefable', minLevel: 72, maxLevel: 75, chance: 17 },
						{ name: 'pelipper', minLevel: 71, maxLevel: 74, chance: 15 },
			            { name: 'victreebel', minLevel: 72, maxLevel: 76, chance: 15 },
			            { name: 'venomoth', minLevel: 72, maxLevel: 75, chance: 10 },
			            { name: 'beautifly', minLevel: 72, maxLevel: 78, chance: 9 },
			            { name: 'scizor', minLevel: 73, maxLevel: 75, chance: 4 },
			        ],
				},
			},
		}
	},
	'route53-2': {
		name: ['Route 53', 'Ruta 53', '53号道路'],
		background: "assets/images/map/apachan/route/route53-2.png",
		song: "route3",
		worldEvent: {
			route53A: {
				name: ['Route 53', 'Ruta 53', '53号道路'], 
				position: { x: 22, y: 4.8 },
				size: { w: 3 , h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route53-1'
				},
			},
			route53B: {
				name: ['Route 53', 'Ruta 53', '53号道路'], 
				position: { x: 0, y: 4.8 },
				size: { w: 3 , h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route53-3'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 22, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselRoute53',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 11 },
				size: { w: 4, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 53', 'Ruta 53', '53号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'clefable', minLevel: 75, maxLevel: 78, chance: 30 },
						{ name: 'dustox', minLevel: 72, maxLevel: 75, chance: 17 },
						{ name: 'pelipper', minLevel: 71, maxLevel: 74, chance: 15 },
			            { name: 'exeggutor', minLevel: 72, maxLevel: 76, chance: 15 },
			            { name: 'venomoth', minLevel: 72, maxLevel: 75, chance: 10 },
			            { name: 'scyther', minLevel: 72, maxLevel: 78, chance: 9 },
			            { name: 'scizor', minLevel: 73, maxLevel: 75, chance: 4 },
			        ],
				},
			},
		}
	},
	'route53-3': {
		name: ['Route 53', 'Ruta 53', '53号道路'],
		background: "assets/images/map/apachan/route/route53-3.png",
		song: "route3",
		worldEvent: {
			route53: {
				name: ['Route 53', 'Ruta 53', '53号道路'], 
				position: { x: 22, y: 4.8 },
				size: { w: 3 , h: 3.7 },
				event: {
					type: 'travelRoute',
					location: 'route53-2'
				},
			},
			meteorite: {
				name: [`Meteorite`, `Meteorito`, `陨石`],
				position: { x: 6, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'meteorite',
					tw: false
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 1, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route53HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route52-1': {
		name: ['Route 52', 'Ruta 52', '52号道路'],
		background: "assets/images/map/apachan/route/route52-1.png",
		song: "route24",
		worldEvent: {
			route54: {
				name: ['Route 54', 'Ruta 54', '54号道路'],
				position: { x: 15.8, y: 0 },
				size: { w: 5.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 54', 'Ruta 54', '54号道路'], 
					background: './assets/images/background/battle17.png',
					pokemon: [ 
						{ name: 'nuzleaf', minLevel: 19, maxLevel: 24, chance: 16 },
						{ name: 'weepinbell', minLevel: 20, maxLevel: 25, chance: 15 },
			            { name: 'venonat', minLevel: 16, maxLevel: 23, chance: 15 },
						{ name: 'wooper', minLevel: 19, maxLevel: 25, chance: 13 },
			            { name: 'spinda', minLevel: 17, maxLevel: 24, chance: 10 },
			            { name: 'paras', minLevel: 18, maxLevel: 24, chance: 10 },
			            { name: 'tangela', minLevel: 20, maxLevel: 23, chance: 9 },
			            { name: 'nincada', minLevel: 17, maxLevel: 22, chance: 8 },
			            { name: 'slakoth', minLevel: 17, maxLevel: 22, chance: 4 }
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'route54-3'
			        }
				},
			},
			route52: {
				name: ['Route 52', 'Ruta 52', '52号道路'], 
				position: { x: 22.5, y: 11.8 },
				size: { w: 2.5, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route52-2'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 3, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute52',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 5, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute52',
					tw: false
				},
			},
		}
	},
	'route52-2': {
		name: ['Route 52', 'Ruta 52', '52号道路'],
		background: "assets/images/map/apachan/route/route52-2.png",
		song: "route24",
		worldEvent: {
			route52: {
				name: ['Route 52', 'Ruta 52', '52号道路'], 
				position: { x: 0, y: 11.8 },
				size: { w: 2.5, h: 3.4 },
				event: {
					type: 'travelRoute',
					location: 'route52-1'
				},
			},
			brokenStoneCity: {
				name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'], 
				position: { x: 23, y: 6.8 },
				size: { w: 2, h: 3.4 },
				event: {
					type: 'travelCity',
					location: 'brokenStoneCity-1'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 19, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route52HiddenItem',
					invisible: true
				},
			},
			wildA: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 3 },
				size: { w: 10, h: 8 },
				event: {
					type: 'routeBattle',
					title: ['Route 52', 'Ruta 52', '52号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'nuzleaf', minLevel: 20, maxLevel: 25, chance: 18 },
						{ name: 'weepinbell', minLevel: 21, maxLevel: 26, chance: 12 },
			            { name: 'venonat', minLevel: 21, maxLevel: 25, chance: 12 },
						{ name: 'mankey', minLevel: 22, maxLevel: 25, chance: 12 },
			            { name: 'spinda', minLevel: 20, maxLevel: 24, chance: 9 },
			            { name: 'ponyta', minLevel: 21, maxLevel: 26, chance: 9 },
			            { name: 'tangela', minLevel: 20, maxLevel: 26, chance: 8 },
			            { name: 'drowzee', minLevel: 20, maxLevel: 25, chance: 8 },
			            { name: 'nincada', minLevel: 19, maxLevel: 26, chance: 8 },
			            { name: 'slakoth', minLevel: 20, maxLevel: 25, chance: 4 }
			        ],
				},
			},
		}
	},
	'route51-1': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-1.png",
		song: "route26",
		worldEvent: {
			brokenStoneCity: {
				name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'], 
				position: { x: 0, y: 12.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'brokenStoneCity-3'
				},
			},
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 22.5, y: 4.9 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route51-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 11, y: 3 },
				size: { w: 9, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'],
					background: './assets/images/background/battle21.png',
					pokemon: [  
						{ name: 'mankey', minLevel: 26, maxLevel: 33, chance: 18 },
			            { name: 'whismur', minLevel: 27, maxLevel: 32, chance: 13 },
			           	{ name: 'ekans', minLevel: 28, maxLevel: 30, chance: 12 }, 
			            { name: 'linoone', minLevel: 29, maxLevel: 33, chance: 10 },     
			            { name: 'geodude', minLevel: 27, maxLevel: 32, chance: 10 },      
			            { name: 'teddiursa', minLevel: 28, maxLevel: 31, chance: 10 },
			            { name: 'sentret', minLevel: 29, maxLevel: 30, chance: 8 },    
			            { name: 'hypno', minLevel: 28, maxLevel: 31, chance: 6 },
			            { name: 'meowth', minLevel: 27, maxLevel: 30, chance: 7 },
			            { name: 'tyrogue', minLevel: 29, maxLevel: 32, chance: 4 },
			            { name: 'aron', minLevel: 28, maxLevel: 32, chance: 2 },
			        ],
				},
			},
		}
	},
	'route51-2': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-2.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 0, y: 4.9 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route51-1'
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 22, y: 2.9 },
				size: { w: 3, h: 5.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 29, maxLevel: 35, chance: 28 },
			            { name: 'geodude', minLevel: 28, maxLevel: 34, chance: 13 },
			           	{ name: 'ekans', minLevel: 27, maxLevel: 33, chance: 12 }, 
			            { name: 'sandslash', minLevel: 26, maxLevel: 32, chance: 10 },     
			            { name: 'teddiursa', minLevel: 28, maxLevel: 31, chance: 10 },
			            { name: 'diglett', minLevel: 28, maxLevel: 30, chance: 8 },    
			            { name: 'hypno', minLevel: 27, maxLevel: 32, chance: 6 },
			            { name: 'meowth', minLevel: 27, maxLevel: 31, chance: 7 },
			            { name: 'tyrogue', minLevel: 26, maxLevel: 28, chance: 4 },
			            { name: 'aron', minLevel: 30, maxLevel: 32, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route51-3'
			        }
				},
			},
		}
	},
	'route51-3': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-3.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 0, y: 2.9 },
				size: { w: 3, h: 5.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 29, maxLevel: 35, chance: 28 },
			            { name: 'geodude', minLevel: 28, maxLevel: 34, chance: 13 },
			           	{ name: 'ekans', minLevel: 27, maxLevel: 33, chance: 12 }, 
			            { name: 'sandslash', minLevel: 26, maxLevel: 32, chance: 10 },     
			            { name: 'teddiursa', minLevel: 28, maxLevel: 31, chance: 10 },
			            { name: 'diglett', minLevel: 28, maxLevel: 30, chance: 8 },    
			            { name: 'hypno', minLevel: 27, maxLevel: 32, chance: 6 },
			            { name: 'meowth', minLevel: 27, maxLevel: 31, chance: 7 },
			            { name: 'tyrogue', minLevel: 26, maxLevel: 28, chance: 4 },
			            { name: 'aron', minLevel: 30, maxLevel: 32, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 18], 
			        	location: 'route51-2'
			        }
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 7.8, y: 0 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 27, maxLevel: 30, chance: 28 },
			            { name: 'geodude', minLevel: 28, maxLevel: 30, chance: 13 },
			           	{ name: 'onix', minLevel: 29, maxLevel: 31, chance: 12 }, 
			            { name: 'zangoose', minLevel: 28, maxLevel: 31, chance: 10 },     
			            { name: 'seviper', minLevel: 28, maxLevel: 32, chance: 10 },
			            { name: 'diglett', minLevel: 27, maxLevel: 33, chance: 8 },    
			            { name: 'growlithe', minLevel: 28, maxLevel: 30, chance: 6 },
			            { name: 'doduo', minLevel: 29, maxLevel: 32, chance: 7 },
			            { name: 'tyrogue', minLevel: 28, maxLevel: 31, chance: 4 },
			            { name: 'aron', minLevel: 27, maxLevel: 33, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route51-4'
			        }
				},
			},
			route51C: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 15.8, y: 15 },
				size: { w: 4.4, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route51-6'
				},
			},
		}
	},
	'route51-4': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-4.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 7.8, y: 15 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 27, maxLevel: 30, chance: 28 },
			            { name: 'geodude', minLevel: 28, maxLevel: 30, chance: 13 },
			           	{ name: 'onix', minLevel: 29, maxLevel: 31, chance: 12 }, 
			            { name: 'zangoose', minLevel: 28, maxLevel: 31, chance: 10 },     
			            { name: 'seviper', minLevel: 28, maxLevel: 32, chance: 10 },
			            { name: 'diglett', minLevel: 27, maxLevel: 33, chance: 8 },    
			            { name: 'growlithe', minLevel: 28, maxLevel: 30, chance: 6 },
			            { name: 'doduo', minLevel: 29, maxLevel: 32, chance: 7 },
			            { name: 'tyrogue', minLevel: 28, maxLevel: 31, chance: 4 },
			            { name: 'aron', minLevel: 27, maxLevel: 33, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route51-3'
			        }
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 23, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route51-5'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 22, y: 13 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselERoute51',
					tw: false
				},
			},
		}
	},
	'route51-5': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-5.png",
		song: "route26",
		worldEvent: {
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 0, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route51-4'
				},
			},
			opalTown: {
				name: ['Opal Town', 'Pueblo Ópalo', '蛋白镇'], 
				position: { x: 23, y: 3.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'opalTown-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 6, y: 8 },
				size: { w: 16, h: 4 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'whismur', minLevel: 27, maxLevel: 30, chance: 28 },
			            { name: 'geodude', minLevel: 28, maxLevel: 30, chance: 22 },
			           	{ name: 'onix', minLevel: 25, maxLevel: 30, chance: 15 }, 
			            { name: 'diglett', minLevel: 26, maxLevel: 31, chance: 15 },     
			            { name: 'seviper', minLevel: 28, maxLevel: 32, chance: 10 },
			            { name: 'zangoose', minLevel: 28, maxLevel: 32, chance: 10 },    
			        ],
				},
			},
		}
	},
	'route51-6': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-6.png",
		song: "route26",
		worldEvent: {
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 6, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute51',
					tw: false
				},
			},
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 22, y: 11.9 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'whismur', minLevel: 29, maxLevel: 30, chance: 28 },
			            { name: 'cubone', minLevel: 28, maxLevel: 31, chance: 13 },
			           	{ name: 'onix', minLevel: 27, maxLevel: 32, chance: 12 }, 
			            { name: 'zangoose', minLevel: 27, maxLevel: 31, chance: 10 },     
			            { name: 'seviper', minLevel: 27, maxLevel: 31, chance: 10 },
			            { name: 'drowzee', minLevel: 28, maxLevel: 34, chance: 8 },    
			            { name: 'vulpix', minLevel: 28, maxLevel: 33, chance: 6 },
			            { name: 'doduo', minLevel: 28, maxLevel: 31, chance: 7 },
			            { name: 'tyrogue', minLevel: 28, maxLevel: 32, chance: 4 },
			            { name: 'aron', minLevel: 25, maxLevel: 30, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route51-7'
			        }
				},
			},
		}
	},
	'route51-7': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-7.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 0, y: 11.9 },
				size: { w: 3, h: 3.4 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'whismur', minLevel: 29, maxLevel: 30, chance: 28 },
			            { name: 'cubone', minLevel: 28, maxLevel: 31, chance: 13 },
			           	{ name: 'onix', minLevel: 27, maxLevel: 32, chance: 12 }, 
			            { name: 'zangoose', minLevel: 27, maxLevel: 31, chance: 10 },     
			            { name: 'seviper', minLevel: 27, maxLevel: 31, chance: 10 },
			            { name: 'drowzee', minLevel: 28, maxLevel: 34, chance: 8 },    
			            { name: 'vulpix', minLevel: 28, maxLevel: 33, chance: 6 },
			            { name: 'doduo', minLevel: 28, maxLevel: 31, chance: 7 },
			            { name: 'tyrogue', minLevel: 28, maxLevel: 32, chance: 4 },
			            { name: 'aron', minLevel: 25, maxLevel: 30, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 15], 
			        	location: 'route51-6'
			        }
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 22, y: 4.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route51-8'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 7, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route51HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route51-8': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-8.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 0, y: 4.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route51-7'
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 2.8, y: 0 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route51-9'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 7, y: 7 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'loudred', minLevel: 30, maxLevel: 33, chance: 28 },
			            { name: 'graveler', minLevel: 30, maxLevel: 33, chance: 22 },
			           	{ name: 'marowak', minLevel: 30, maxLevel: 33, chance: 15 }, 
			            { name: 'sandshrew', minLevel: 30, maxLevel: 33, chance: 15 },     
			            { name: 'seviper', minLevel: 30, maxLevel: 33, chance: 10 },
			            { name: 'zangoose', minLevel: 30, maxLevel: 33, chance: 10 }, 
			        ],
				},
			},
		}
	},
	'route51-9': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-9.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 6.8, y: 0 },
				size: { w: 5.4, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route51-10'
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 2.8, y: 16 },
				size: { w: 4.4, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route51-8'
				},
			},
			route51C: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 22, y: 6.9 },
				size: { w: 3, h: 5.3 },
				event: {
					type: 'travelRoute',
					location: 'route51-11'
				},
			},
		}
	},
	'route51-10': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-10.png",
		song: "route26",
		worldEvent: {
			opalTown: {
				name: ['Opal Town', 'Pueblo Ópalo', '蛋白镇'], 
				position: { x: 12.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'travelCity',
					location: 'opalTown-1'
				},
			},
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 6.8, y: 15.5 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route51-9'
				},
			},
		}
	},
	'route51-11': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-11.png",
		song: "route26",
		worldEvent: {
			weatherCenter: {
				name: ['Weather Center', 'Centro Meteorológico', '天气中心'],
				position: { x: 14, y: 2 },
				size: { w: 5, h: 4 },
				event: {
					type: 'dialogue',
					npc: 'weatherCenterRoute51'
				},
			},
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 19, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute51',
					tw: false
				},
			},
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'], 
				position: { x: 0, y: 6.9 },
				size: { w: 3, h: 5.3 },
				event: {
					type: 'travelRoute',
					location: 'route51-9'
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 22, y: 7.9 },
				size: { w: 3, h: 6.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 29, maxLevel: 35, chance: 32 },
			            { name: 'makuhita', minLevel: 28, maxLevel: 34, chance: 22 },
			            { name: 'dugtrio', minLevel: 30, maxLevel: 36, chance: 16 },
			           	{ name: 'marowak', minLevel: 28, maxLevel: 35, chance: 13 }, 
			            { name: 'sandslash', minLevel: 29, maxLevel: 35, chance: 13 },     
			            { name: 'meditite', minLevel: 29, maxLevel: 36, chance: 4 }, 
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route51-12'
			        }
				},
			},
		}
	},
	'route51-12': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-12.png",
		song: "route26",
		worldEvent: {
			route51A: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 3, h: 6.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'loudred', minLevel: 29, maxLevel: 35, chance: 32 },
			            { name: 'makuhita', minLevel: 28, maxLevel: 34, chance: 22 },
			            { name: 'dugtrio', minLevel: 30, maxLevel: 36, chance: 16 },
			           	{ name: 'marowak', minLevel: 28, maxLevel: 35, chance: 13 }, 
			            { name: 'sandslash', minLevel: 29, maxLevel: 35, chance: 13 },     
			            { name: 'meditite', minLevel: 29, maxLevel: 36, chance: 4 }, 
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route51-11'
			        }
				},
			},
			route51B: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 19.9, y: 16 },
				size: { w: 2.3, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'arbok', minLevel: 30, maxLevel: 37, chance: 32 },
			            { name: 'primeape', minLevel: 31, maxLevel: 38, chance: 22 },
			            { name: 'growlithe', minLevel: 32, maxLevel: 36, chance: 16 },
			           	{ name: 'marowak', minLevel: 30, maxLevel: 37, chance: 10 }, 
			            { name: 'hariyama', minLevel: 31, maxLevel: 36, chance: 10 },   
			            { name: 'persian', minLevel: 30, maxLevel: 35, chance: 6 },  
			            { name: 'meditite', minLevel: 30, maxLevel: 36, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route51-13'
			        }
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 6, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute51',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 8, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute51',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 9, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselDRoute51',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 14, y: 4 },
				size: { w: 9, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'graveler', minLevel: 30, maxLevel: 36, chance: 32 },
			            { name: 'hariyama', minLevel: 28, maxLevel: 34, chance: 22 },
			            { name: 'houndour', minLevel: 29, maxLevel: 35, chance: 16 },
			           	{ name: 'cubone', minLevel: 27, maxLevel: 36, chance: 10 }, 
			            { name: 'sandshrew', minLevel: 28, maxLevel: 35, chance: 10 },   
			            { name: 'drowzee', minLevel: 29, maxLevel: 34, chance: 6 },  
			            { name: 'meditite', minLevel: 30, maxLevel: 32, chance: 4 },
			        ],
				},
			},
		}
	},
	'route51-13': {
		name: ['Route 51', 'Ruta 51', '51号道路'],
		background: "assets/images/map/apachan/route/route51-13.png",
		song: "route26",
		worldEvent: {
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 19.9, y: 0 },
				size: { w: 2.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 51', 'Ruta 51', '51号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'arbok', minLevel: 30, maxLevel: 37, chance: 32 },
			            { name: 'primeape', minLevel: 31, maxLevel: 38, chance: 22 },
			            { name: 'growlithe', minLevel: 32, maxLevel: 36, chance: 16 },
			           	{ name: 'marowak', minLevel: 30, maxLevel: 37, chance: 10 }, 
			            { name: 'hariyama', minLevel: 31, maxLevel: 36, chance: 10 },   
			            { name: 'persian', minLevel: 30, maxLevel: 35, chance: 6 },  
			            { name: 'meditite', minLevel: 30, maxLevel: 36, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route51-12'
			        }
				},
			},
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 11, y: 1.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route51-13',
					inRoute: true
				},
			},
			steelCave: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'], 
				position: { x: 18, y: 10 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'steelCave-1'
				},
			},
		}
	},
	'steelCave-1': {
		name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
		background: "assets/images/map/apachan/cave/steelCave-1.png",
		song: "icePath",
		worldEvent: {
			route51: {
				name: ['Route 51', 'Ruta 51', '51号道路'],
				position: { x: 4, y: 11 },
				size: { w: 3, h: 3 },
				event: {
			        type: 'travelRoute',
			        location: 'route51-13'
				},
			},
			steelCave: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 17.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'steelix', minLevel: 34, maxLevel: 39, chance: 32 },
			            { name: 'swalot', minLevel: 35, maxLevel: 38, chance: 24 },
			            { name: 'duskull', minLevel: 36, maxLevel: 38, chance: 16 },
			           	{ name: 'mawile', minLevel: 34, maxLevel: 40, chance: 10 }, 
			            { name: 'lairon', minLevel: 35, maxLevel: 39, chance: 10 },   
			            { name: 'claydol', minLevel: 36, maxLevel: 38, chance: 6 },  
			            { name: 'beldum', minLevel: 34, maxLevel: 39, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'steelCave-2'
			        }
				},
			},
		}
	},
	'steelCave-2': {
		name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
		background: "assets/images/map/apachan/cave/steelCave-2.png",
		song: "icePath",
		worldEvent: {
			steelCaveA: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 17.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'steelix', minLevel: 34, maxLevel: 39, chance: 32 },
			            { name: 'swalot', minLevel: 35, maxLevel: 38, chance: 24 },
			            { name: 'duskull', minLevel: 36, maxLevel: 38, chance: 16 },
			           	{ name: 'mawile', minLevel: 34, maxLevel: 40, chance: 10 }, 
			            { name: 'lairon', minLevel: 35, maxLevel: 39, chance: 10 },   
			            { name: 'claydol', minLevel: 36, maxLevel: 38, chance: 6 },  
			            { name: 'beldum', minLevel: 34, maxLevel: 39, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'steelCave-1'
			        }
				},
			},
			steelCaveB: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 22, y: 11.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'hariyama', minLevel: 36, maxLevel: 41, chance: 21 },
			            { name: 'lunatone', minLevel: 38, maxLevel: 42, chance: 16 },
			            { name: 'solrock', minLevel: 38, maxLevel: 40, chance: 15 },
			            { name: 'absol', minLevel: 37, maxLevel: 40, chance: 10 },
			            { name: 'sableye', minLevel: 37, maxLevel: 41, chance: 10 },
			           	{ name: 'mawile', minLevel: 38, maxLevel: 41, chance: 10 }, 
			            { name: 'lairon', minLevel: 39, maxLevel: 42, chance: 10 },   
			            { name: 'muk', minLevel: 38, maxLevel: 42, chance: 6 },  
			            { name: 'beldum', minLevel: 37, maxLevel: 42, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'steelCave-3'
			        }
				},
			},
		}
	},
	'steelCave-3': {
		name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
		background: "assets/images/map/apachan/cave/steelCave-3.png",
		song: "icePath",
		worldEvent: {
			steelCaveA: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 0, y: 11.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'hariyama', minLevel: 36, maxLevel: 41, chance: 21 },
			            { name: 'lunatone', minLevel: 38, maxLevel: 42, chance: 16 },
			            { name: 'solrock', minLevel: 38, maxLevel: 40, chance: 15 },
			            { name: 'absol', minLevel: 37, maxLevel: 40, chance: 10 },
			            { name: 'sableye', minLevel: 37, maxLevel: 41, chance: 10 },
			           	{ name: 'mawile', minLevel: 38, maxLevel: 41, chance: 10 }, 
			            { name: 'lairon', minLevel: 39, maxLevel: 42, chance: 10 },   
			            { name: 'muk', minLevel: 38, maxLevel: 42, chance: 6 },  
			            { name: 'beldum', minLevel: 37, maxLevel: 42, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'steelCave-2'
			        }
				},
			},
			steelCaveB: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 22, y: 5.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
			            { name: 'dugtrio', minLevel: 38, maxLevel: 40, chance: 15 },
			            { name: 'weezing', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'steelix', minLevel: 38, maxLevel: 41, chance: 11 },
			            { name: 'grumpig', minLevel: 39, maxLevel: 41, chance: 11 },
			            { name: 'absol', minLevel: 38, maxLevel: 42, chance: 10 },
			            { name: 'sableye', minLevel: 37, maxLevel: 40, chance: 10 },
			           	{ name: 'mawile', minLevel: 36, maxLevel: 40, chance: 10 }, 
			            { name: 'marowak', minLevel: 36, maxLevel: 41, chance: 10 },   
			            { name: 'baltoy', minLevel: 38, maxLevel: 42, chance: 6 },  
			            { name: 'beldum', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'steelCave-4'
			        }
				},
			},
		}
	},
	'steelCave-4': {
		name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
		background: "assets/images/map/apachan/cave/steelCave-4.png",
		song: "icePath",
		worldEvent: {
			steelCave: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 0, y: 5.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'dugtrio', minLevel: 38, maxLevel: 40, chance: 15 },
			            { name: 'weezing', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'steelix', minLevel: 38, maxLevel: 41, chance: 11 },
			            { name: 'grumpig', minLevel: 39, maxLevel: 41, chance: 11 },
			            { name: 'absol', minLevel: 38, maxLevel: 42, chance: 10 },
			            { name: 'sableye', minLevel: 37, maxLevel: 40, chance: 10 },
			           	{ name: 'mawile', minLevel: 36, maxLevel: 40, chance: 10 }, 
			            { name: 'marowak', minLevel: 36, maxLevel: 41, chance: 10 },   
			            { name: 'baltoy', minLevel: 38, maxLevel: 42, chance: 6 },  
			            { name: 'beldum', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 14], 
			        	location: 'steelCave-3'
			        }
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 17, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselASteelCave',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 20, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBSteelCave',
					tw: false
				},
			},
			route50: {
				name: ['Route 50', 'Ruta 50', '50号道路'],
				position: { x: 18, y: 14 },
				size: { w: 3, h: 3 },
				event: {
			        type: 'travelRoute',
			        location: 'route50-1'
				},
			},
		}
	},
	'route50-1': {
		name: ['Route 50', 'Ruta 50', '50号道路'],
		background: "assets/images/map/apachan/route/route50-1.png",
		song: "route30",
		worldEvent: {
			steelCave: {
				name: ['Steel Cave', 'Cueva Acero', '钢之洞窟'],
				position: { x: 4, y: 6 },
				size: { w: 3, h: 3 },
				event: {
			        type: 'travelRoute',
			        location: 'steelCave-4'
				},
			},
			route50: {
				name: ['Route 50', 'Ruta 50', '50号道路'],
				position: { x: 22, y: 3.9 },
				size: { w: 3, h: 2.2 },
				event: {
			        type: 'travelRoute',
			        location: 'route50-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 3, y: 11 },
				size: { w: 18, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 50', 'Ruta 50', '50号道路'],
					background: './assets/images/background/battle27.png',
					pokemon: [  
			            { name: 'donphan', minLevel: 40, maxLevel: 42, chance: 18 },
						{ name: 'dugtrio', minLevel: 41, maxLevel: 43, chance: 15 },
			            { name: 'sandslash', minLevel: 40, maxLevel: 41, chance: 15 },
						{ name: 'hariyama', minLevel: 40, maxLevel: 43, chance: 11 },
			            { name: 'grumpig', minLevel: 41, maxLevel: 42, chance: 11 },
			            { name: 'breloom', minLevel: 42, maxLevel: 43, chance: 10 },
			           	{ name: 'gligar', minLevel: 41, maxLevel: 42, chance: 10 }, 
			            { name: 'marowak', minLevel: 40, maxLevel: 41, chance: 10 }, 
			        ],
				},
			},
		}
	},
	'route50-2': {
		name: ['Route 50', 'Ruta 50', '50号道路'],
		background: "assets/images/map/apachan/route/route50-2.png",
		song: "route30",
		worldEvent: {
			route50A: {
				name: ['Route 50', 'Ruta 50', '50号道路'],
				position: { x: 0, y: 3.9 },
				size: { w: 3, h: 2.2 },
				event: {
			        type: 'travelRoute',
			        location: 'route50-1'
				},
			},
			route50B: {
				name: ['Route 50', 'Ruta 50', '50号道路'],
				position: { x: 22, y: 7.9 },
				size: { w: 3, h: 5.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 50', 'Ruta 50', '50号道路'], 
					background: './assets/images/background/battle27.png',
					pokemon: [ 
						{ name: 'donphan', minLevel: 39, maxLevel: 42, chance: 18 },
						{ name: 'granbull', minLevel: 40, maxLevel: 42, chance: 15 },
			            { name: 'dodrio', minLevel: 40, maxLevel: 41, chance: 15 },
						{ name: 'hariyama', minLevel: 38, maxLevel: 40, chance: 11 },
			            { name: 'teddiursa', minLevel: 39, maxLevel: 40, chance: 11 },
			            { name: 'banette', minLevel: 40, maxLevel: 42, chance: 10 },
			           	{ name: 'gligar', minLevel: 40, maxLevel: 42, chance: 10 }, 
			            { name: 'marowak', minLevel: 38, maxLevel: 41, chance: 10 }, 
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route50-3'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 4, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route50HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route50-3': {
		name: ['Route 50', 'Ruta 50', '50号道路'],
		background: "assets/images/map/apachan/route/route50-3.png",
		song: "route30",
		worldEvent: {
			route50: {
				name: ['Route 50', 'Ruta 50', '50号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 2, h: 5.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 50', 'Ruta 50', '50号道路'], 
					background: './assets/images/background/battle27.png',
					pokemon: [ 
						{ name: 'donphan', minLevel: 39, maxLevel: 42, chance: 18 },
						{ name: 'granbull', minLevel: 40, maxLevel: 42, chance: 15 },
			            { name: 'dodrio', minLevel: 40, maxLevel: 41, chance: 15 },
						{ name: 'hariyama', minLevel: 38, maxLevel: 40, chance: 11 },
			            { name: 'teddiursa', minLevel: 39, maxLevel: 40, chance: 11 },
			            { name: 'banette', minLevel: 40, maxLevel: 42, chance: 10 },
			           	{ name: 'gligar', minLevel: 40, maxLevel: 42, chance: 10 }, 
			            { name: 'marowak', minLevel: 38, maxLevel: 41, chance: 10 }, 
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route50-2'
			        }
				},
			},
			basket: { 
				name: [`Basket`, `Cesta`, `篮子`],
				position: { x: 10, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'basketRoute50',
					tw: false
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 7, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute50',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 15, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute50',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 16, y: 5 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute50',
					tw: false
				},
			},

		}
	},
	'route62-1': {
		name: ['Route 62', 'Ruta 62', '62号道路'],
		background: "assets/images/map/apachan/route/route62-1.png",
		song: "route11",
		worldEvent: {
			route57: {
				name: ['Route 57', 'Ruta 57', '57号道路'],
				position: { x: 9.8, y: 15 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 57', 'Ruta 57', '57号道路'], 
					background: './assets/images/background/battle1.png',
					pokemon: [ 
						{ name: 'wurmple', minLevel: 14, maxLevel: 17, chance: 38 }, 
			           	{ name: 'caterpie', minLevel: 13, maxLevel: 15, chance: 12 },
			            { name: 'weedle', minLevel: 15, maxLevel: 18, chance: 12 },
			            { name: 'spinarak', minLevel: 12, maxLevel: 16, chance: 12 },
						{ name: 'ledyba', minLevel: 13, maxLevel: 17, chance: 12 },
						{ name: 'electrike', minLevel: 12, maxLevel: 16, chance: 5 },
			            { name: 'skitty', minLevel: 11, maxLevel: 15, chance: 5 },
			            { name: 'ralts', minLevel: 13, maxLevel: 16, chance: 4 }  
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route57-3'
			        }
				},
			},
			route62: {
				name: ['Route 62', 'Ruta 62', '62号道路'], 
				position: { x: 8.7, y: 0 },
				size: { w: 3.9, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route62-2'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 19, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute62',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute62',
					tw: false
				},
			},
		}
	},
	'route62-2': {
		name: ['Route 62', 'Ruta 62', '62号道路'],
		background: "assets/images/map/apachan/route/route62-2.png",
		song: "route11",
		worldEvent: {
			route62A: {
				name: ['Route 62', 'Ruta 62', '62号道路'], 
				position: { x: 8.7, y: 15 },
				size: { w: 3.9, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route62-1'
				},
			},
			route62B: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'], 
				position: { x: 16.8, y: 0 },
				size: { w: 3.4, h: 2.5 },
				event: {
					type: 'travelCity',
					location: 'flintCity-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 1, y: 7 },
				size: { w: 22, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 62', 'Ruta 62', '62号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'poochyena', minLevel: 14, maxLevel: 16, chance: 30 },
			            { name: 'zigzagoon', minLevel: 17, maxLevel: 19, chance: 20 },
			            { name: 'nincada', minLevel: 16, maxLevel: 17, chance: 20 },    
			            { name: 'electrike', minLevel: 15, maxLevel: 18, chance: 10 },
			            { name: 'minun', minLevel: 13, maxLevel: 15, chance: 7 },
			            { name: 'plusle', minLevel: 13, maxLevel: 15, chance: 7 },
			            { name: 'pichu', minLevel: 14, maxLevel: 16, chance: 3 },    
			            { name: 'azurill', minLevel: 14, maxLevel: 16, chance: 3 }
			        ],
				},
			},
		}
	},
	'route63-1': {
		name: ['Route 63', 'Ruta 63', '63号道路'],
		background: "assets/images/map/apachan/route/route63-1.png",
		song: "route34",
		worldEvent: {
			flintCity: {
				name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
				position: { x: 18.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'travelCity',
					location: 'flintCity-4'
				},
			},
			route63: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 6.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 63', 'Ruta 63', '63号道路'], 
					background: './assets/images/background/battle28.png',
					pokemon: [ 
						{ name: 'linoone', minLevel: 32, maxLevel: 37, chance: 15 },
			            { name: 'swellow', minLevel: 33, maxLevel: 37, chance: 15 },
			            { name: 'shiftry', minLevel: 32, maxLevel: 35, chance: 11 },      
			            { name: 'gligar', minLevel: 34, maxLevel: 36, chance: 11 },
			            { name: 'houndour', minLevel: 35, maxLevel: 37, chance: 11 },
			            { name: 'numel', minLevel: 32, maxLevel: 38, chance: 11 },
			            { name: 'nosepass', minLevel: 34, maxLevel: 38, chance: 10 },
			            { name: 'dustox', minLevel: 30, maxLevel: 37, chance: 6 },
			            { name: 'beautifly', minLevel: 31, maxLevel: 36, chance: 6 },
			            { name: 'swablu', minLevel: 32, maxLevel: 35, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route63-2'
			        }
				},
			},
		}
	},
	'route63-2': {
		name: ['Route 63', 'Ruta 63', '63号道路'],
		background: "assets/images/map/apachan/route/route63-2.png",
		song: "route34",
		worldEvent: {
			route63A: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 6.8, y: 16 },
				size: { w: 3.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 63', 'Ruta 63', '63号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'linoone', minLevel: 32, maxLevel: 37, chance: 15 },
			            { name: 'swellow', minLevel: 33, maxLevel: 37, chance: 15 },
			            { name: 'shiftry', minLevel: 32, maxLevel: 35, chance: 11 },      
			            { name: 'gligar', minLevel: 34, maxLevel: 36, chance: 11 },
			            { name: 'houndour', minLevel: 35, maxLevel: 37, chance: 11 },
			            { name: 'numel', minLevel: 32, maxLevel: 38, chance: 11 },
			            { name: 'nosepass', minLevel: 34, maxLevel: 38, chance: 10 },
			            { name: 'dustox', minLevel: 30, maxLevel: 37, chance: 6 },
			            { name: 'beautifly', minLevel: 31, maxLevel: 36, chance: 6 },
			            { name: 'swablu', minLevel: 32, maxLevel: 35, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 10], 
			        	location: 'route63-1'
			        }
				},
			},
			route63B: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 9.8, y: 0 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 63', 'Ruta 63', '63号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'numel', minLevel: 33, maxLevel: 35, chance: 9 }, 
			            { name: 'shuppet', minLevel: 34, maxLevel: 38, chance: 9 },    
						{ name: 'gligar', minLevel: 35, maxLevel: 36, chance: 9 },
			            { name: 'noctowl', minLevel: 33, maxLevel: 37, chance: 9 },
			            { name: 'mightyena', minLevel: 32, maxLevel: 36, chance: 9 },
			            { name: 'nuzleaf', minLevel: 34, maxLevel: 38, chance: 9 },
			            { name: 'swellow', minLevel: 34, maxLevel: 38, chance: 9 },      
			            { name: 'sudowoodo', minLevel: 35, maxLevel: 37, chance: 9 },
			            { name: 'volbeat', minLevel: 33, maxLevel: 35, chance: 5 },
			            { name: 'illumise', minLevel: 34, maxLevel: 36, chance: 5 },
			            { name: 'nosepass', minLevel: 35, maxLevel: 36, chance: 5 },
			            { name: 'loudred', minLevel: 35, maxLevel: 36, chance: 5 },
			            { name: 'fearow', minLevel: 34, maxLevel: 35, chance: 4 },
			            { name: 'torkoal', minLevel: 36, maxLevel: 37, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route63-3'
			        }
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 9, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route63HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route63-3': {
		name: ['Route 63', 'Ruta 63', '63号道路'],
		background: "assets/images/map/apachan/route/route63-3.png",
		song: "route34",
		worldEvent: {
			route63A: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 9.8, y: 16 },
				size: { w: 4.4, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 63', 'Ruta 63', '63号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'numel', minLevel: 33, maxLevel: 35, chance: 9 }, 
			            { name: 'shuppet', minLevel: 34, maxLevel: 38, chance: 9 },    
						{ name: 'gligar', minLevel: 35, maxLevel: 36, chance: 9 },
			            { name: 'noctowl', minLevel: 33, maxLevel: 37, chance: 9 },
			            { name: 'mightyena', minLevel: 32, maxLevel: 36, chance: 9 },
			            { name: 'nuzleaf', minLevel: 34, maxLevel: 38, chance: 9 },
			            { name: 'swellow', minLevel: 34, maxLevel: 38, chance: 9 },      
			            { name: 'sudowoodo', minLevel: 35, maxLevel: 37, chance: 9 },
			            { name: 'volbeat', minLevel: 33, maxLevel: 35, chance: 5 },
			            { name: 'illumise', minLevel: 34, maxLevel: 36, chance: 5 },
			            { name: 'nosepass', minLevel: 35, maxLevel: 36, chance: 5 },
			            { name: 'loudred', minLevel: 35, maxLevel: 36, chance: 5 },
			            { name: 'fearow', minLevel: 34, maxLevel: 35, chance: 4 },
			            { name: 'torkoal', minLevel: 36, maxLevel: 37, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route63-2'
			        }
				},
			},
			route63B: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 18.8, y: 0 },
				size: { w: 4.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route63-4'
				},
			},
			route64: {
				name: ['Route 64', 'Ruta 64', '64号道路'], 
				position: { x: 0, y: 5.8 },
				size: { w: 3, h: 4.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 64', 'Ruta 64', '64号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'duskull', minLevel: 36, maxLevel: 40, chance: 9 }, 
			            { name: 'shuppet', minLevel: 36, maxLevel: 39, chance: 9 },    
						{ name: 'gligar', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'pidgeotto', minLevel: 35, maxLevel: 38, chance: 9 },
			            { name: 'mightyena', minLevel: 35, maxLevel: 39, chance: 9 },
			            { name: 'skarmory', minLevel: 36, maxLevel: 37, chance: 9 },
			            { name: 'swellow', minLevel: 34, maxLevel: 36, chance: 9 },      
			            { name: 'hypno', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'chimecho', minLevel: 36, maxLevel: 39, chance: 5 },
			            { name: 'sunflora', minLevel: 35, maxLevel: 40, chance: 5 },
			            { name: 'dugtrio', minLevel: 35, maxLevel: 37, chance: 5 },
			            { name: 'loudred', minLevel: 36, maxLevel: 39, chance: 5 },
			            { name: 'dustox', minLevel: 35, maxLevel: 38, chance: 4 },
			            { name: 'beautifly', minLevel: 35, maxLevel: 39, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route64-1'
			        }
				},
			},
		}
	},
	'route63-4': {
		name: ['Route 63', 'Ruta 63', '63号道路'],
		background: "assets/images/map/apachan/route/route63-4.png",
		song: "route34",
		worldEvent: {
			route63C: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 18.8, y: 15.5 },
				size: { w: 4.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route63-3'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 18, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselARoute63',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 21, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBRoute63',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 22, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCRoute63',
					tw: false
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 3 },
				size: { w: 6, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Route 63', 'Ruta 63', '63号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'volbeat', minLevel: 32, maxLevel: 33, chance: 15 },
			            { name: 'illumise', minLevel: 31, maxLevel: 34, chance: 15 },
			            { name: 'shuppet', minLevel: 30, maxLevel: 35, chance: 11 },      
			            { name: 'gligar', minLevel: 33, maxLevel: 36, chance: 11 },
			            { name: 'houndour', minLevel: 32, maxLevel: 36, chance: 11 },
			            { name: 'numel', minLevel: 32, maxLevel: 35, chance: 11 },
			            { name: 'skiploom', minLevel: 33, maxLevel: 37, chance: 10 },
			            { name: 'minun', minLevel: 34, maxLevel: 38, chance: 7 },
			            { name: 'plusle', minLevel: 35, maxLevel: 39, chance: 7 },
			            { name: 'tropius', minLevel: 35, maxLevel: 40, chance: 2 },
			        ],
				},
			},
		}
	},
	'route64-1': {
		name: ['Route 64', 'Ruta 64', '64号道路'],
		background: "assets/images/map/apachan/route/route64-1.png",
		song: "route34",
		worldEvent: {
			route63: {
				name: ['Route 63', 'Ruta 63', '63号道路'], 
				position: { x: 22, y: 5.8 },
				size: { w: 3, h: 4.3 },
				event: {
					type: 'routeBattle',
					title: ['Route 63', 'Ruta 63', '63号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'duskull', minLevel: 36, maxLevel: 40, chance: 9 }, 
			            { name: 'shuppet', minLevel: 36, maxLevel: 39, chance: 9 },    
						{ name: 'gligar', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'pidgeotto', minLevel: 35, maxLevel: 38, chance: 9 },
			            { name: 'mightyena', minLevel: 35, maxLevel: 39, chance: 9 },
			            { name: 'skarmory', minLevel: 36, maxLevel: 37, chance: 9 },
			            { name: 'swellow', minLevel: 34, maxLevel: 36, chance: 9 },      
			            { name: 'hypno', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'chimecho', minLevel: 36, maxLevel: 39, chance: 5 },
			            { name: 'sunflora', minLevel: 35, maxLevel: 40, chance: 5 },
			            { name: 'dugtrio', minLevel: 35, maxLevel: 37, chance: 5 },
			            { name: 'loudred', minLevel: 36, maxLevel: 39, chance: 5 },
			            { name: 'dustox', minLevel: 35, maxLevel: 38, chance: 4 },
			            { name: 'beautifly', minLevel: 35, maxLevel: 39, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 8], 
			        	location: 'route63-3'
			        }
				},
			},
			route64: {
				name: ['Route 64', 'Ruta 64', '64号道路'], 
				position: { x: 0, y: 5.8 },
				size: { w: 3, h: 4.7 },
				event: {
					type: 'routeBattle',
					title: ['Route 64', 'Ruta 64', '64号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'spinda', minLevel: 36, maxLevel: 40, chance: 9 }, 
			            { name: 'banette', minLevel: 35, maxLevel: 39, chance: 9 },    
						{ name: 'gligar', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'noctowl', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'linoone', minLevel: 36, maxLevel: 39, chance: 9 },
			            { name: 'shiftry', minLevel: 35, maxLevel: 38, chance: 9 },
			            { name: 'graveler', minLevel: 34, maxLevel: 39, chance: 9 },      
			            { name: 'chimecho', minLevel: 38, maxLevel: 40, chance: 9 },
			            { name: 'nidorino', minLevel: 37, maxLevel: 41, chance: 5 },
			            { name: 'nidorina', minLevel: 36, maxLevel: 38, chance: 5 },
			            { name: 'swalot', minLevel: 35, maxLevel: 39, chance: 5 },
			            { name: 'grumpig', minLevel: 36, maxLevel: 40, chance: 5 },
			            { name: 'dunsparce', minLevel: 36, maxLevel: 40, chance: 4 },
			            { name: 'nosepass', minLevel: 38, maxLevel: 39, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 13], 
			        	location: 'route64-2'
			        }
				},
			},
		}
	},
	'route64-2': {
		name: ['Route 64', 'Ruta 64', '64号道路'],
		background: "assets/images/map/apachan/route/route64-2.png",
		song: "route34",
		worldEvent: {
			route64: {
				name: ['Route 64', 'Ruta 64', '64号道路'], 
				position: { x: 22, y: 5.8 },
				size: { w: 3, h: 4.7 },
				event: {
					type: 'routeBattle',
					title: ['Route 64', 'Ruta 64', '64号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'spinda', minLevel: 36, maxLevel: 40, chance: 9 }, 
			            { name: 'banette', minLevel: 35, maxLevel: 39, chance: 9 },    
						{ name: 'gligar', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'noctowl', minLevel: 36, maxLevel: 38, chance: 9 },
			            { name: 'linoone', minLevel: 36, maxLevel: 39, chance: 9 },
			            { name: 'shiftry', minLevel: 35, maxLevel: 38, chance: 9 },
			            { name: 'graveler', minLevel: 34, maxLevel: 39, chance: 9 },      
			            { name: 'chimecho', minLevel: 38, maxLevel: 40, chance: 9 },
			            { name: 'nidorino', minLevel: 37, maxLevel: 41, chance: 5 },
			            { name: 'nidorina', minLevel: 36, maxLevel: 38, chance: 5 },
			            { name: 'swalot', minLevel: 35, maxLevel: 39, chance: 5 },
			            { name: 'grumpig', minLevel: 36, maxLevel: 40, chance: 5 },
			            { name: 'dunsparce', minLevel: 36, maxLevel: 40, chance: 4 },
			            { name: 'nosepass', minLevel: 38, maxLevel: 39, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 13], 
			        	location: 'route64-1'
			        }
				},
			},
			vitreousCity: {
				name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
				position: { x: 0, y: 4.9 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelCity',
					location: 'vitreousCity-1'
				},
			},
		}
	},
	'route65-1': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-1.png",
		song: "route34",
		worldEvent: {
			vitreousCityB: {
				name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
				position: { x: 22.5, y: 12 },
				size: { w: 2.5, h: 3.3 },
				event: {
					type: 'travelCity',
					location: 'vitreousCity-2'
				},
			},
			route65: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 0, y: 3.9 },
				size: { w: 3, h: 6.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 65', 'Ruta 65', '65号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'golbat', minLevel: 36, maxLevel: 42, chance: 20 }, 
						{ name: 'hariyama', minLevel: 38, maxLevel: 41, chance: 15 },
						{ name: 'delcatty', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'vibrava', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'dodrio', minLevel: 36, maxLevel: 39, chance: 15 },
						{ name: 'raticate', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'marowak', minLevel: 36, maxLevel: 41, chance: 3 },
			            { name: 'torkoal', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route65-2'
			        }
				},
			},
		}
	},
	'route65-2': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-2.png",
		song: "route34",
		worldEvent: {
			route65A: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 22, y: 3.9 },
				size: { w: 3, h: 6.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 65', 'Ruta 65', '65号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'golbat', minLevel: 36, maxLevel: 42, chance: 20 }, 
						{ name: 'hariyama', minLevel: 38, maxLevel: 41, chance: 15 },
						{ name: 'delcatty', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'vibrava', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'dodrio', minLevel: 36, maxLevel: 39, chance: 15 },
						{ name: 'raticate', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'marowak', minLevel: 36, maxLevel: 41, chance: 3 },
			            { name: 'torkoal', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route65-1'
			        }
				},
			},
			route65B: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 0 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-4'
				},
			},
			route65C: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 15.5 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-3'
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 8, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route65HiddenItem',
					invisible: true
				},
			},
		}
	},
	'route65-3': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-3.png",
		song: "route34",
		worldEvent: {
			route65: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 0 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-2'
				},
			},
			narrowPassage: {
				name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
				position: { x: 16, y: 8 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'narrowPassage-1'
				},
			},
		}
	},
	'route65-4': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-4.png",
		song: "route34",
		worldEvent: {
			route65A: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 15.5 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-2'
				},
			},
			bush: {
				name: [`Bush`, `Arbusto`, `灌木丛`],
				position: { x: 10, y: 2 },
				size: { w: 1, h: 1 },
				event: {
					condition: {
						type: 'item',
						item: 'sprinkler',
						exception: 'needSprinkler'
					},
					type: 'cut',
					location: 'route65-4',
					newLocation: 'route65-4bis',
				},
			},	
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 7 },
				size: { w: 5.1, h: 7.1 },
				event: {
					type: 'routeBattle',
					title: ['Route 65', 'Ruta 65', '65号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'swellow', minLevel: 36, maxLevel: 42, chance: 20 }, 
						{ name: 'shiftry', minLevel: 38, maxLevel: 41, chance: 15 },
						{ name: 'delcatty', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'vibrava', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'dodrio', minLevel: 36, maxLevel: 39, chance: 15 },
						{ name: 'sudowoodo', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'manectric', minLevel: 36, maxLevel: 41, chance: 3 },
			            { name: 'torkoal', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
				},
			},
		}
	},
	'route65-4bis': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-4bis.png",
		song: "route34",
		worldEvent: {
			route65A: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 15.5 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 15, y: 7 },
				size: { w: 5.1, h: 7.1 },
				event: {
					type: 'routeBattle',
					title: ['Route 65', 'Ruta 65', '65号道路'],
					background: './assets/images/background/battle9.png',
					pokemon: [  
						{ name: 'swellow', minLevel: 36, maxLevel: 42, chance: 20 }, 
						{ name: 'shiftry', minLevel: 38, maxLevel: 41, chance: 15 },
						{ name: 'delcatty', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'vibrava', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'dodrio', minLevel: 36, maxLevel: 39, chance: 15 },
						{ name: 'sudowoodo', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'manectric', minLevel: 36, maxLevel: 41, chance: 3 },
			            { name: 'torkoal', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
				},
			},
			route65B: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 0 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-5'
				},
			},
		}
	},
	'route65-5': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-5.png",
		song: "route34",
		worldEvent: {
			route65A: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 14.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 65', 'Ruta 65', '65号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 38, maxLevel: 41, chance: 20 },
						{ name: 'golbat', minLevel: 36, maxLevel: 42, chance: 15 }, 
						{ name: 'delcatty', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'vibrava', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'dodrio', minLevel: 36, maxLevel: 39, chance: 15 },
						{ name: 'swalot', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'donphan', minLevel: 36, maxLevel: 41, chance: 3 },
			            { name: 'torkoal', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route65-6'
			        }
				},
			},
			route65B: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 7.8, y: 15.5 },
				size: { w: 5.4, h: 2.5 },
				event: {
					type: 'travelRoute',
					location: 'route65-4'
				},
			},
		}
	},
	'route65-6': {
		name: ['Route 65', 'Ruta 65', '65号道路'],
		background: "assets/images/map/apachan/route/route65-6.png",
		song: "route34",
		worldEvent: {
			route65: {
				name: ['Route65', 'Ruta 65', '65号道路'],
				position: { x: 14.8, y: 15 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 65', 'Ruta 65', '65号道路'], 
					background: './assets/images/background/battle9.png',
					pokemon: [ 
						{ name: 'primeape', minLevel: 38, maxLevel: 41, chance: 20 },
						{ name: 'golbat', minLevel: 36, maxLevel: 42, chance: 15 }, 
						{ name: 'delcatty', minLevel: 37, maxLevel: 40, chance: 15 },
						{ name: 'vibrava', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'dodrio', minLevel: 36, maxLevel: 39, chance: 15 },
						{ name: 'swalot', minLevel: 35, maxLevel: 38, chance: 15 },
						{ name: 'donphan', minLevel: 36, maxLevel: 41, chance: 3 },
			            { name: 'torkoal', minLevel: 37, maxLevel: 40, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 12], 
			        	location: 'route65-5'
			        }
				},
			},
			ancientTunnel: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 7, y: 4 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-1'
				},
			},
		}
	},
	'narrowPassage-1': {
		name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
		background: "assets/images/map/apachan/cave/narrowPassage-1.png",
		song: "unionCave",
		worldEvent: {
			route65: {
				name: ['Route 65', 'Ruta 65', '65号道路'], 
				position: { x: 4, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route65-3'
				},
			},
			narrowPassage: {
				name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
				position: { x: 17.8, y: 15 },
				size: { w: 1.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'narrowPassage-2'
				},
			},
		}
	},
	'narrowPassage-2': {
		name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
		background: "assets/images/map/apachan/cave/narrowPassage-2.png",
		song: "unionCave",
		worldEvent: {
			narrowPassageA: {
				name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
				position: { x: 17.8, y: 0 },
				size: { w: 1.4, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'narrowPassage-1'
				},
			},
			narrowPassageB: {
				name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
				position: { x: 17.8, y: 15 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'geodude', minLevel: 34, maxLevel: 39, chance: 17 },
			            { name: 'snorunt', minLevel: 35, maxLevel: 36, chance: 17 },
			           	{ name: 'parasect', minLevel: 36, maxLevel: 37, chance: 15 },
			            { name: 'mawile', minLevel: 37, maxLevel: 38, chance: 15 },
			           	{ name: 'machoke', minLevel: 35, maxLevel: 39, chance: 10 },
			            { name: 'graveler', minLevel: 34, maxLevel: 37, chance: 9 },
			            { name: 'onix', minLevel: 35, maxLevel: 38, chance: 9 },
			            { name: 'bagon', minLevel: 36, maxLevel: 40, chance: 4 },
			            { name: 'larvitar', minLevel: 34, maxLevel: 40, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'narrowPassage-3'
			        }
				},
			},
		}
	},
	'narrowPassage-3': {
		name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
		background: "assets/images/map/apachan/cave/narrowPassage-3.png",
		song: "unionCave",
		worldEvent: {
			narrowPassage: {
				name: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
				position: { x: 17.8, y: 0 },
				size: { w: 2.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Narrow Passage', 'Paso Estrecho', '狭窄通道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'geodude', minLevel: 34, maxLevel: 39, chance: 17 },
			            { name: 'snorunt', minLevel: 35, maxLevel: 36, chance: 17 },
			           	{ name: 'parasect', minLevel: 36, maxLevel: 37, chance: 15 },
			            { name: 'mawile', minLevel: 37, maxLevel: 38, chance: 15 },
			           	{ name: 'machoke', minLevel: 35, maxLevel: 39, chance: 10 },
			            { name: 'graveler', minLevel: 34, maxLevel: 37, chance: 9 },
			            { name: 'onix', minLevel: 35, maxLevel: 38, chance: 9 },
			            { name: 'bagon', minLevel: 36, maxLevel: 40, chance: 4 },
			            { name: 'larvitar', minLevel: 34, maxLevel: 40, chance: 4 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'narrowPassage-2'
			        }
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 9, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselANarrowPassage',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 11, y: 14 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBNarrowPassage',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 13, y: 12 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCNarrowPassage',
					tw: false
				},
			},
		}
	},
	'ancientTunnel-1': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-1.png",
		song: "mtMoon",
		worldEvent: {
			route65: {
				name: ['Route 65', 'Ruta 65', '65号道路'], 
				position: { x: 11, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route65-6'
				},
			},
			ancientTunnel: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 4.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'golbat', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'claydol', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'shelgon', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'golem', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'crobat', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'hitmontop', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'aggron', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-2'
			        }
				},
			},
		}
	},
	'ancientTunnel-2': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-2.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnelA: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 4.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'golbat', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'claydol', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'shelgon', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'golem', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'crobat', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'hitmontop', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'aggron', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-1'
			        }
				},
			},
			ancientTunnelB: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 14.9, y: 0 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-3'
				},
			},
		}
	},
	'ancientTunnel-3': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-3.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnelA: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 22, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'dugtrio', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'mawile', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'claydol', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'metang', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'golem', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'chimecho', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'machamp', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'absol', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-4'
			        }
				},
			},
			ancientTunnelB: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 14.9, y: 15 },
				size: { w: 3.3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-2'
				},
			},
		}
	},
	'ancientTunnel-4': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-4.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnelA: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 0, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'dugtrio', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'mawile', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'claydol', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'metang', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'golem', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'chimecho', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'machamp', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'absol', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-3'
			        }
				},
			},
			ancientTunnelB: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 18.9, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-5'
				},
			},
		}
	},
	'ancientTunnel-5': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-5.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnelA: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 22, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'nosepass', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'mawile', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'claydol', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'muk', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'graveler', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'chimecho', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'camerupt', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'sableye', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-6'
			        }
				},
			},
			ancientTunnelB: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 2.9, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-4'
				},
			},
		}
	},
	'ancientTunnel-6': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-6.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnelA: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 0, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'nosepass', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'mawile', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'claydol', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'muk', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'graveler', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'chimecho', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'camerupt', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'sableye', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-5'
			        }
				},
			},
			ancientTunnelB: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 22, y: 11.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-7'
				},
			},
		}
	},
	'ancientTunnel-7': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-7.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnelA: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 22, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'weezing', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'mawile', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'banette', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'muk', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'dusclops', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'chimecho', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'exploud', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'torkoal', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-8'
			        }
				},
			},
			ancientTunnelB: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 0, y: 11.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-6'
				},
			},
		}
	},
	'ancientTunnel-8': {
		name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
		background: "assets/images/map/apachan/cave/ancientTunnel-8.png",
		song: "mtMoon",
		worldEvent: {
			ancientTunnel: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 0, y: 4.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'routeBattle',
					title: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
					background: './assets/images/background/battle2.png',
					pokemon: [ 
						{ name: 'weezing', minLevel: 84, maxLevel: 90, chance: 21 },
			           	{ name: 'mawile', minLevel: 85, maxLevel: 90, chance: 19 },
			            { name: 'banette', minLevel: 86, maxLevel: 90, chance: 19 },
			            { name: 'muk', minLevel: 81, maxLevel: 91, chance: 10 },
			           	{ name: 'dusclops', minLevel: 82, maxLevel: 90, chance: 10 },
			            { name: 'chimecho', minLevel: 84, maxLevel: 92, chance: 8 },
			            { name: 'exploud', minLevel: 85, maxLevel: 92, chance: 8 },
			            { name: 'torkoal', minLevel: 86, maxLevel: 91, chance: 5 },
			        ],
			        travel: {
			        	battles: [0, 25], 
			        	location: 'ancientTunnel-7'
			        }
				},
			},
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 15, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-1'
				},
			},
		}
	},
	'route66-1': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-1.png",
		song: "route38",
		worldEvent: {
			pokeCenter: {
				name: ['Pokémon Center', 'Centro Pokémon', '宝可梦中心'],
				position: { x: 3, y: 7.5 },
				size: { w: 5, h: 4.5 },
				event: {
					type: 'pokeCenter',
					location: 'route66-2',
					inRoute: true
				},
			},
			ancientTunnel: {
				name: ['Ancient Tunnel', 'Tunel Antiguo', '古代隧道'],
				position: { x: 16, y: 9 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTunnel-8'
				},
			},
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 15.7, y: 16 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route66-2'
				},
			},
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 22, y: 10},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselRoute66',
					tw: false
				},
			},
		}
	},
	'route66-2': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-2.png",
		song: "route38",
		worldEvent: {
			route66A: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 15.7, y: 0 },
				size: { w: 3.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-1'
				},
			},
			route66B: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 22, y: 8.8 },
				size: { w: 3, h: 5.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'sunflora', minLevel: 84, maxLevel: 93, chance: 17 }, 
						{ name: 'swablu', minLevel: 85, maxLevel: 94, chance: 17 }, 
						{ name: 'vibrava', minLevel: 89, maxLevel: 92, chance: 13 }, 
						{ name: 'pidgeot', minLevel: 85, maxLevel: 93, chance: 9 }, 
						{ name: 'bellossom', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'persian', minLevel: 84, maxLevel: 91, chance: 8 }, 
						{ name: 'raichu', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'flygon', minLevel: 85, maxLevel: 92, chance: 6 }, 
						{ name: 'nidoqueen', minLevel: 87, maxLevel: 91, chance: 5 }, 
						{ name: 'nidoking', minLevel: 88, maxLevel: 93, chance: 5 }, 
						{ name: 'heracross', minLevel: 86, maxLevel: 92, chance: 2 }, 
						{ name: 'altaria', minLevel: 84, maxLevel: 91, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'route66-3'
			        }
				},
			},
		}
	},
	'route66-3': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-3.png",
		song: "route38",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 15, y: 9 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'caretakerRoute66'
				},
			},
			route66A: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 0, y: 8.8 },
				size: { w: 2, h: 5.6 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'sunflora', minLevel: 84, maxLevel: 93, chance: 17 }, 
						{ name: 'swablu', minLevel: 85, maxLevel: 94, chance: 17 }, 
						{ name: 'vibrava', minLevel: 89, maxLevel: 92, chance: 13 }, 
						{ name: 'pidgeot', minLevel: 85, maxLevel: 93, chance: 9 }, 
						{ name: 'bellossom', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'persian', minLevel: 84, maxLevel: 91, chance: 8 }, 
						{ name: 'raichu', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'flygon', minLevel: 85, maxLevel: 92, chance: 6 }, 
						{ name: 'nidoqueen', minLevel: 87, maxLevel: 91, chance: 5 }, 
						{ name: 'nidoking', minLevel: 88, maxLevel: 93, chance: 5 }, 
						{ name: 'heracross', minLevel: 86, maxLevel: 92, chance: 2 }, 
						{ name: 'altaria', minLevel: 84, maxLevel: 91, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 22], 
			        	location: 'route66-2'
			        }
				},
			},
			route66B: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 22, y: 5 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'sunflora', minLevel: 84, maxLevel: 93, chance: 17 }, 
						{ name: 'parasect', minLevel: 85, maxLevel: 94, chance: 17 }, 
						{ name: 'swablu', minLevel: 89, maxLevel: 92, chance: 13 }, 
						{ name: 'pidgeot', minLevel: 85, maxLevel: 93, chance: 9 }, 
						{ name: 'vileplume', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'dodrio', minLevel: 84, maxLevel: 91, chance: 8 }, 
						{ name: 'raichu', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'flygon', minLevel: 85, maxLevel: 92, chance: 6 }, 
						{ name: 'roselia', minLevel: 87, maxLevel: 91, chance: 5 }, 
						{ name: 'kecleon', minLevel: 88, maxLevel: 93, chance: 5 }, 
						{ name: 'miltank', minLevel: 86, maxLevel: 92, chance: 2 }, 
						{ name: 'altaria', minLevel: 84, maxLevel: 91, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 19], 
			        	location: 'route66-5'
			        }
				},
			},
			route66C: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 3.7, y: 16 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route66-4'
				},
			},
		}
	},
	'route66-4': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-4.png",
		song: "route38",
		worldEvent: {
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 3.7, y: 0 },
				size: { w: 3.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route66-3'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 8, y: 4 },
				size: { w: 15, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
						{ name: 'swablu', minLevel: 82, maxLevel: 88, chance: 28 }, 
						{ name: 'roselia', minLevel: 84, maxLevel: 89, chance: 26 }, 
						{ name: 'sunflora', minLevel: 83, maxLevel: 87, chance: 15 }, 
						{ name: 'crawdaunt', minLevel: 80, maxLevel: 88, chance: 15 }, 
						{ name: 'golduck', minLevel: 82, maxLevel: 89, chance: 10 }, 
						{ name: 'mudkip', minLevel: 80, maxLevel: 85, chance: 3 },
						{ name: 'marshtomp', minLevel: 80, maxLevel: 85, chance: 2 },
						{ name: 'swampert', minLevel: 80, maxLevel: 85, chance: 1 },
			        ],
				},
			},
			route67: {
				name: ['Route 67', 'Ruta 67', '67号道路'],
				position: { x: 1.5, y: 12 },
				size: { w: 8, h: 6 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 67', 'Ruta 67', '67号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 81, maxLevel: 85, chance: 20 },
						{ name: 'chinchou', minLevel: 82, maxLevel: 90, chance: 20 },
						{ name: 'sharpedo', minLevel: 83, maxLevel: 90, chance: 15 },
						{ name: 'whiscash', minLevel: 88, maxLevel: 90, chance: 15 },
						{ name: 'wailord', minLevel: 90, maxLevel: 91, chance: 8 },
						{ name: 'lanturn', minLevel: 84, maxLevel: 90, chance: 5 },
						{ name: 'tentacruel', minLevel: 85, maxLevel: 88, chance: 5 }, 
						{ name: 'starmie', minLevel: 90, maxLevel: 92, chance: 3 },
						{ name: 'kingdra', minLevel: 87, maxLevel: 90, chance: 3 },
						{ name: 'milotic', minLevel: 85, maxLevel: 91, chance: 2 },
						{ name: 'relicanth', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'altaria', minLevel: 86, maxLevel: 90, chance: 1 },
						{ name: 'lapras', minLevel: 88, maxLevel: 92, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 60], 
			        	location: 'route67-1'
			        }
				},
			},
		}
	},
	'route66-5': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-5.png",
		song: "route38",
		worldEvent: {
			route66A: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 0, y: 5 },
				size: { w: 2, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'sunflora', minLevel: 84, maxLevel: 93, chance: 17 }, 
						{ name: 'parasect', minLevel: 85, maxLevel: 94, chance: 17 }, 
						{ name: 'swablu', minLevel: 89, maxLevel: 92, chance: 13 }, 
						{ name: 'pidgeot', minLevel: 85, maxLevel: 93, chance: 9 }, 
						{ name: 'vileplume', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'dodrio', minLevel: 84, maxLevel: 91, chance: 8 }, 
						{ name: 'raichu', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'flygon', minLevel: 85, maxLevel: 92, chance: 6 }, 
						{ name: 'roselia', minLevel: 87, maxLevel: 91, chance: 5 }, 
						{ name: 'kecleon', minLevel: 88, maxLevel: 93, chance: 5 }, 
						{ name: 'miltank', minLevel: 86, maxLevel: 92, chance: 2 }, 
						{ name: 'altaria', minLevel: 84, maxLevel: 91, chance: 2 }, 
			        ],
			        travel: {
			        	battles: [0, 17], 
			        	location: 'route66-3'
			        }
				},
			},
			route66B: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 23, y: 8.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route66-6'
				},
			},
			steelTomb: {
				name: ['Steel Tomb', 'Tumba Sellada', '钢铁墓穴'],
				position: { x: 5, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'steelTomb-1'
				},
			},
			iceTomb: {
				name: ['Ice Tomb', 'Tumba Helada', '冰之墓穴'],
				position: { x: 15, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'iceTomb-1'
				},
			},
		}
	},
	'route66-6': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-6.png",
		song: "route38",
		worldEvent: {
			ancientTomb: {
				name: ['Ancient Tomb', 'Tumba Antigua', '古代墓穴'],
				position: { x: 14, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'ancientTomb-1'
				},
			},
			route66A: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 0, y: 8.8 },
				size: { w: 2, h: 3.6 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
			route66B: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 22, y: 13 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'roselia', minLevel: 84, maxLevel: 93, chance: 17 }, 
						{ name: 'parasect', minLevel: 85, maxLevel: 94, chance: 17 }, 
						{ name: 'swablu', minLevel: 89, maxLevel: 92, chance: 13 }, 
						{ name: 'shiftry', minLevel: 85, maxLevel: 93, chance: 9 }, 
						{ name: 'vileplume', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'dodrio', minLevel: 84, maxLevel: 91, chance: 8 }, 
						{ name: 'swellow', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'cacturne', minLevel: 85, maxLevel: 92, chance: 6 }, 
						{ name: 'zangoose', minLevel: 87, maxLevel: 91, chance: 5 }, 
						{ name: 'kecleon', minLevel: 88, maxLevel: 93, chance: 5 }, 
						{ name: 'gardevoir', minLevel: 86, maxLevel: 92, chance: 2 }, 
						{ name: 'altaria', minLevel: 84, maxLevel: 91, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 28], 
			        	location: 'route66-7'
			        }
				},
			},
		}
	},
	'route66-7': {
		name: ['Route 66', 'Ruta 66', '66号道路'],
		background: "assets/images/map/apachan/route/route66-7.png",
		song: "route38",
		worldEvent: {
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 0, y: 13 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [ 
						{ name: 'roselia', minLevel: 84, maxLevel: 93, chance: 17 }, 
						{ name: 'parasect', minLevel: 85, maxLevel: 94, chance: 17 }, 
						{ name: 'swablu', minLevel: 89, maxLevel: 92, chance: 13 }, 
						{ name: 'shiftry', minLevel: 85, maxLevel: 93, chance: 9 }, 
						{ name: 'vileplume', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'dodrio', minLevel: 84, maxLevel: 91, chance: 8 }, 
						{ name: 'swellow', minLevel: 86, maxLevel: 92, chance: 8 }, 
						{ name: 'cacturne', minLevel: 85, maxLevel: 92, chance: 6 }, 
						{ name: 'zangoose', minLevel: 87, maxLevel: 91, chance: 5 }, 
						{ name: 'kecleon', minLevel: 88, maxLevel: 93, chance: 5 }, 
						{ name: 'gardevoir', minLevel: 86, maxLevel: 92, chance: 2 }, 
						{ name: 'altaria', minLevel: 84, maxLevel: 91, chance: 2 },
			        ],
			        travel: {
			        	battles: [0, 28], 
			        	location: 'route66-6'
			        }
				},
			},
			tarpatchTown: {
				name: ['Tar Town', 'Pueblo Alquitrán', '柏油镇'],
				position: { x: 22, y: 5.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'tarpatchTown-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 3 },
				size: { w: 18, h: 2 },
				event: {
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle6.png',
					pokemon: [  
						{ name: 'swablu', minLevel: 82, maxLevel: 88, chance: 28 }, 
						{ name: 'roselia', minLevel: 84, maxLevel: 89, chance: 28 }, 
						{ name: 'cacturne', minLevel: 83, maxLevel: 87, chance: 12 }, 
						{ name: 'altaria', minLevel: 80, maxLevel: 88, chance: 12 }, 
						{ name: 'beautifly', minLevel: 82, maxLevel: 89, chance: 7 }, 
						{ name: 'butterfree', minLevel: 81, maxLevel: 89, chance: 7 },
						{ name: 'treecko', minLevel: 80, maxLevel: 85, chance: 3 },
						{ name: 'grovyle', minLevel: 80, maxLevel: 85, chance: 2 },
						{ name: 'sceptile', minLevel: 80, maxLevel: 85, chance: 1 },
			        ],
				},
			},
		}
	},
	'steelTomb-1': {
		name: ['Steel Tomb', 'Tumba Sellada', '钢铁墓穴'],
		background: "assets/images/map/apachan/cave/steelTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signSteelTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
		}
	},
	'steelTomb-1bis': {
		name: ['Steel Tomb', 'Tumba Sellada', '钢铁墓穴'],
		background: "assets/images/map/apachan/cave/steelTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signSteelTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
			registeel: {
				name: ['Registeel', 'Registeel', '雷吉斯奇鲁'], 
				position: { x: 11, y: 5.5 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/registeel.png',
					type: 'dialogue',
					npc: 'registeel'
				},
			}
		}
	},
	'steelTomb-1bisB': {
		name: ['Steel Tomb', 'Tumba Sellada', '钢铁墓穴'],
		background: "assets/images/map/apachan/cave/steelTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signSteelTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
		}
	},
	'iceTomb-1': {
		name: ['Ice Tomb', 'Tumba Helada', '冰之墓穴'],
		background: "assets/images/map/apachan/cave/iceTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signIceTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
		}
	},
	'iceTomb-1bis': {
		name: ['Ice Tomb', 'Tumba Helada', '冰之墓穴'],
		background: "assets/images/map/apachan/cave/iceTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signIceTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
			regice: {
				name: ['Regice', 'Regice', '雷吉艾斯'], 
				position: { x: 11, y: 5.5 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/regice.png',
					type: 'dialogue',
					npc: 'regice'
				},
			}
		}
	},
	'iceTomb-1bisB': {
		name: ['Ice Tomb', 'Tumba Helada', '冰之墓穴'],
		background: "assets/images/map/apachan/cave/iceTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signIceTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-5'
				},
			},
		}
	},
	'ancientTomb-1': {
		name: ['Ancient Tomb', 'Tumba Antigua', '古代墓穴'],
		background: "assets/images/map/apachan/cave/ancientTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signAncientTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-6'
				},
			},
		}
	},
	'ancientTomb-1bis': {
		name: ['Ancient Tomb', 'Tumba Antigua', '古代墓穴'],
		background: "assets/images/map/apachan/cave/ancientTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signAncientTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-6'
				},
			},
			regirock: {
				name: ['Regirock', 'Regirock', '雷吉洛克'], 
				position: { x: 11, y: 5.5 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite/regirock.png',
					type: 'dialogue',
					npc: 'regirock'
				},
			}
		}
	},
	'ancientTomb-1bisB': {
		name: ['Ancient Tomb', 'Tumba Antigua', '古代墓穴'],
		background: "assets/images/map/apachan/cave/ancientTomb-1.png",
		song: "ruinsOfAlph",
		worldEvent: {
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signAncientTomb',
					tw: false
				},
			},	
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 11, y: 15 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route66-6'
				},
			},
		}
	},
	'route67-1': {
		name: ['Route 67', 'Ruta 67', '67号道路'],
		background: "assets/images/map/apachan/route/route67-1.png",
		song: "route42",
		worldEvent: {
			route66: {
				name: ['Route 66', 'Ruta 66', '66号道路'],
				position: { x: 1.5, y: 0 },
				size: { w: 8, h: 10 },
				event: {
					condition: {
						type: 'item',
						item: 'waterBike',
						exception: 'needWaterBike'
					},
					type: 'routeBattle',
					title: ['Route 66', 'Ruta 66', '66号道路'],
					background: './assets/images/background/battle11.png',
					pokemon: [ 
						{ name: 'tentacool', minLevel: 81, maxLevel: 85, chance: 20 },
						{ name: 'chinchou', minLevel: 82, maxLevel: 90, chance: 20 },
						{ name: 'sharpedo', minLevel: 83, maxLevel: 90, chance: 15 },
						{ name: 'whiscash', minLevel: 88, maxLevel: 90, chance: 15 },
						{ name: 'wailord', minLevel: 90, maxLevel: 91, chance: 8 },
						{ name: 'lanturn', minLevel: 84, maxLevel: 90, chance: 5 },
						{ name: 'tentacruel', minLevel: 85, maxLevel: 88, chance: 5 }, 
						{ name: 'starmie', minLevel: 90, maxLevel: 92, chance: 3 },
						{ name: 'kingdra', minLevel: 87, maxLevel: 90, chance: 3 },
						{ name: 'milotic', minLevel: 85, maxLevel: 91, chance: 2 },
						{ name: 'relicanth', minLevel: 86, maxLevel: 90, chance: 2 },
						{ name: 'altaria', minLevel: 86, maxLevel: 90, chance: 1 },
						{ name: 'lapras', minLevel: 88, maxLevel: 92, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 60], 
			        	location: 'route66-4'
			        }
				},
			},
			route67: {
				name: ['Route 67', 'Ruta 67', '67号道路'],
				position: { x: 18.7, y: 16 },
				size: { w: 2.6, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'route67-2'
				},
			},
		}
	},
	'route67-2': {
		name: ['Route 67', 'Ruta 67', '67号道路'],
		background: "assets/images/map/apachan/route/route67-2.png",
		song: "route42",
		worldEvent: {
			smallHouse: {
				name: ['Small house', 'Casa pequeña', '小房子'],
				position: { x: 5, y: 4 },
				size: { w: 4, h: 3 },
				event: {
					type: 'dialogue',
					npc: 'veteranRoute67'
				},
			},
			route67A: {
				name: ['Route 67', 'Ruta 67', '67号道路'],
				position: { x: 18.7, y: 0 },
				size: { w: 2.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route67-1'
				},
			},
			route67B: {
				name: ['Route 67', 'Ruta 67', '67号道路'],
				position: { x: 6.7, y: 15 },
				size: { w: 4.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route67-3'
				},
			},
		}
	},
	'route67-3': {
		name: ['Route 67', 'Ruta 67', '67号道路'],
		background: "assets/images/map/apachan/route/route67-3.png",
		song: "route42",
		worldEvent: {
			signboard: {
				name: [`Signboard`, `Letrero`, `告示牌`],
				position: { x: 17, y: 4 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signboardRoute67',
					tw: false
				},
			},
			route67: {
				name: ['Route 67', 'Ruta 67', '67号道路'],
				position: { x: 6.7, y: 0 },
				size: { w: 4.6, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route67-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 6 },
				size: { w: 21, h: 10 },
				event: {
					type: 'routeBattle',
					title: ['Route 67', 'Ruta 67', '67号道路'],
					background: './assets/images/background/battle7.png',
					pokemon: [  
						{ name: 'clefable', minLevel: 12, maxLevel: 15, chance: 10 },   
			           	{ name: 'butterfree', minLevel: 12, maxLevel: 15, chance: 10 },   
			            { name: 'sunflora', minLevel: 12, maxLevel: 13, chance: 10 },   
			            { name: 'beautifly', minLevel: 10, maxLevel: 15, chance: 6 }, 
						{ name: 'chansey', minLevel: 10, maxLevel: 15, chance: 6 }, 
						{ name: 'delcatty', minLevel: 7, maxLevel: 18, chance: 6 }, 
						{ name: 'breloom', minLevel: 7, maxLevel: 18, chance: 6 }, 
						{ name: 'togetic', minLevel: 9, maxLevel: 18, chance: 6 }, 
						{ name: 'gardevoir', minLevel: 9, maxLevel: 18, chance: 6 }, 
			            { name: 'volbeat', minLevel: 10, maxLevel: 17, chance: 4 }, 
			            { name: 'illumise', minLevel: 10, maxLevel: 16, chance: 4 },
			            { name: 'chimecho', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'granbull', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'blissey', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'roselia', minLevel: 5, maxLevel: 10, chance: 3 },
			            { name: 'taillow', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'xatu', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'solrock', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'lunatone', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'mudkip', minLevel: 5, maxLevel: 10, chance: 2 },
			            { name: 'torchic', minLevel: 13, maxLevel: 14, chance: 2 },
			            { name: 'treecko', minLevel: 13, maxLevel: 14, chance: 2 },	
			        ],
				},
			},
		}
	},
	'route68-1': {
		name: ['Route 68', 'Ruta 68', '68号道路'],
		background: "assets/images/map/apachan/route/route68-1.png",
		song: "route42",
		worldEvent: {
			tarpatchTown: {
				name: ['Tarpatch Town', 'Pueblo Alquitrán', '柏油镇'],
				position: { x: 0, y: 5.8 },
				size: { w: 3, h: 3.6 },
				event: {
					type: 'travelCity',
					location: 'tarpatchTown-1'
				},
			},
			route68: {
				name: ['Route 68', 'Ruta 68', '68号道路'],
				position: { x: 22, y: 7.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route68-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 10 },
				size: { w: 13, h: 6 },
				event: {
					type: 'routeBattle',
					title: ['Route 68', 'Ruta 68', '68号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'swablu', minLevel: 82, maxLevel: 88, chance: 28 }, 
						{ name: 'roselia', minLevel: 84, maxLevel: 89, chance: 28 }, 
						{ name: 'sunflora', minLevel: 83, maxLevel: 87, chance: 15 }, 
						{ name: 'crawdaunt', minLevel: 80, maxLevel: 88, chance: 15 }, 
						{ name: 'tropius', minLevel: 82, maxLevel: 89, chance: 8 }, 
						{ name: 'torchic', minLevel: 80, maxLevel: 85, chance: 3 },
						{ name: 'combusken', minLevel: 80, maxLevel: 85, chance: 2 },
						{ name: 'blaziken', minLevel: 80, maxLevel: 85, chance: 1 },
			        ],
				},
			},
		}
	},
	'route68-2': {
		name: ['Route 68', 'Ruta 68', '68号道路'],
		background: "assets/images/map/apachan/route/route68-2.png",
		song: "route42",
		worldEvent: {
			route68: {
				name: ['Route 68', 'Ruta 68', '68号道路'],
				position: { x: 0, y: 7.9 },
				size: { w: 3, h: 3.3 },
				event: {
					type: 'travelRoute',
					location: 'route68-1'
				},
			},
			dragonLair: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 11, y: 3 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'dragonLair-1'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 4, y: 12 },
				size: { w: 17, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Route 68', 'Ruta 68', '68号道路'],
					background: './assets/images/background/battle1.png',
					pokemon: [  
						{ name: 'swablu', minLevel: 82, maxLevel: 88, chance: 28 }, 
						{ name: 'roselia', minLevel: 84, maxLevel: 89, chance: 28 }, 
						{ name: 'sunflora', minLevel: 83, maxLevel: 87, chance: 15 }, 
						{ name: 'jumpluff', minLevel: 80, maxLevel: 88, chance: 15 }, 
						{ name: 'vibrava', minLevel: 82, maxLevel: 89, chance: 8 }, 
						{ name: 'shelgon', minLevel: 82, maxLevel: 89, chance: 6 }, 
			        ],
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 21, y: 8 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'route68HiddenItem',
					invisible: true
				},
			},
		}
	},
	'dragonLair-1': {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		background: "assets/images/map/apachan/cave/dragonLair-1.png",
		song: "burnedTower",
		worldEvent: {
			route68: {
				name: ['Route 68', 'Ruta 68', '68号道路'],
				position: { x: 8, y: 12 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'route68-2'
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 2, y: 5 },
				size: { w: 5, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [  
						{ name: 'steelix', minLevel: 88, maxLevel: 92, chance: 25 },
						{ name: 'shelgon', minLevel: 87, maxLevel: 93, chance: 20 },
						{ name: 'dragonair', minLevel: 86, maxLevel: 94, chance: 15 },
						{ name: 'flygon', minLevel: 85, maxLevel: 92, chance: 12 },
						{ name: 'nidoking', minLevel: 88, maxLevel: 93, chance: 10 },
						{ name: 'crobat', minLevel: 87, maxLevel: 92, chance: 9 },
						{ name: 'altaria', minLevel: 88, maxLevel: 92, chance: 6 }, 
						{ name: 'dragonite', minLevel: 85, maxLevel: 95, chance: 3 },
			        ],
				},
			},
			dragonLair: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 22, y: 4.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 85, maxLevel: 92, chance: 20 },
						{ name: 'hariyama', minLevel: 91, maxLevel: 95, chance: 20 },
						{ name: 'lunatone', minLevel: 89, maxLevel: 96, chance: 15 },
						{ name: 'hitmonlee', minLevel: 88, maxLevel: 92, chance: 15 },
						{ name: 'marowak', minLevel: 90, maxLevel: 93, chance: 8 },
						{ name: 'absol', minLevel: 92, maxLevel: 94, chance: 5 },
						{ name: 'steelix', minLevel: 88, maxLevel: 95, chance: 5 }, 
						{ name: 'flygon', minLevel: 91, maxLevel: 93, chance: 3 },
						{ name: 'dragonair', minLevel: 90, maxLevel: 95, chance: 3 },
						{ name: 'altaria', minLevel: 89, maxLevel: 95, chance: 3 },
						{ name: 'dragonite', minLevel: 91, maxLevel: 94, chance: 2 },
						{ name: 'salamence', minLevel: 90, maxLevel: 97, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'dragonLair-2'
			        }
				},
			},
		}
	},
	'dragonLair-2': {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		background: "assets/images/map/apachan/cave/dragonLair-2.png",
		song: "burnedTower",
		worldEvent: {
			dragonLairA: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 0, y: 4.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'sandslash', minLevel: 85, maxLevel: 92, chance: 20 },
						{ name: 'hariyama', minLevel: 91, maxLevel: 95, chance: 20 },
						{ name: 'lunatone', minLevel: 89, maxLevel: 96, chance: 15 },
						{ name: 'hitmonlee', minLevel: 88, maxLevel: 92, chance: 15 },
						{ name: 'marowak', minLevel: 90, maxLevel: 93, chance: 8 },
						{ name: 'absol', minLevel: 92, maxLevel: 94, chance: 5 },
						{ name: 'steelix', minLevel: 88, maxLevel: 95, chance: 5 }, 
						{ name: 'flygon', minLevel: 91, maxLevel: 93, chance: 3 },
						{ name: 'dragonair', minLevel: 90, maxLevel: 95, chance: 3 },
						{ name: 'altaria', minLevel: 89, maxLevel: 95, chance: 3 },
						{ name: 'dragonite', minLevel: 91, maxLevel: 94, chance: 2 },
						{ name: 'salamence', minLevel: 90, maxLevel: 97, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 20], 
			        	location: 'dragonLair-1'
			        }
				},
			},
			dragonLairB: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 22, y: 10.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'dugtrio', minLevel: 85, maxLevel: 92, chance: 20 },
						{ name: 'machamp', minLevel: 91, maxLevel: 95, chance: 20 },
						{ name: 'lunatone', minLevel: 89, maxLevel: 96, chance: 15 },
						{ name: 'hitmontop', minLevel: 88, maxLevel: 92, chance: 15 },
						{ name: 'solrock', minLevel: 90, maxLevel: 93, chance: 8 },
						{ name: 'absol', minLevel: 92, maxLevel: 94, chance: 5 },
						{ name: 'glalie', minLevel: 88, maxLevel: 95, chance: 5 }, 
						{ name: 'flygon', minLevel: 91, maxLevel: 93, chance: 3 },
						{ name: 'dragonair', minLevel: 90, maxLevel: 95, chance: 3 },
						{ name: 'altaria', minLevel: 89, maxLevel: 95, chance: 3 },
						{ name: 'metagross', minLevel: 91, maxLevel: 94, chance: 2 },
						{ name: 'salamence', minLevel: 90, maxLevel: 97, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 24], 
			        	location: 'dragonLair-3'
			        }
				},
			},
		}
	},
	'dragonLair-3': {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		background: "assets/images/map/apachan/cave/dragonLair-3.png",
		song: "burnedTower",
		worldEvent: {
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 5, y: 3 },
				size: { w: 18, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [  
						{ name: 'onix', minLevel: 88, maxLevel: 92, chance: 25 },
						{ name: 'nidoqueen', minLevel: 87, maxLevel: 93, chance: 20 },
						{ name: 'solrock', minLevel: 86, maxLevel: 94, chance: 15 },
						{ name: 'flygon', minLevel: 85, maxLevel: 92, chance: 12 },
						{ name: 'mawile', minLevel: 88, maxLevel: 93, chance: 10 },
						{ name: 'shuckle', minLevel: 87, maxLevel: 92, chance: 9 },
						{ name: 'metagross', minLevel: 88, maxLevel: 92, chance: 6 }, 
						{ name: 'umbreon', minLevel: 85, maxLevel: 95, chance: 3 },
			        ],
				},
			},
			dragonLairA: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 0, y: 10.9 },
				size: { w: 3, h: 3.2 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'dugtrio', minLevel: 85, maxLevel: 92, chance: 20 },
						{ name: 'machamp', minLevel: 91, maxLevel: 95, chance: 20 },
						{ name: 'lunatone', minLevel: 89, maxLevel: 96, chance: 15 },
						{ name: 'hitmontop', minLevel: 88, maxLevel: 92, chance: 15 },
						{ name: 'solrock', minLevel: 90, maxLevel: 93, chance: 8 },
						{ name: 'absol', minLevel: 92, maxLevel: 94, chance: 5 },
						{ name: 'glalie', minLevel: 88, maxLevel: 95, chance: 5 }, 
						{ name: 'flygon', minLevel: 91, maxLevel: 93, chance: 3 },
						{ name: 'dragonair', minLevel: 90, maxLevel: 95, chance: 3 },
						{ name: 'altaria', minLevel: 89, maxLevel: 95, chance: 3 },
						{ name: 'metagross', minLevel: 91, maxLevel: 94, chance: 2 },
						{ name: 'salamence', minLevel: 90, maxLevel: 97, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 24], 
			        	location: 'dragonLair-2'
			        }
				},
			},
			dragonLairB: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 16.8, y: 15 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'sneasel', minLevel: 85, maxLevel: 92, chance: 20 },
						{ name: 'machamp', minLevel: 91, maxLevel: 95, chance: 20 },
						{ name: 'aggron', minLevel: 89, maxLevel: 96, chance: 15 },
						{ name: 'ursaring', minLevel: 88, maxLevel: 92, chance: 15 },
						{ name: 'altaria', minLevel: 90, maxLevel: 93, chance: 8 },
						{ name: 'houndoom', minLevel: 92, maxLevel: 94, chance: 5 },
						{ name: 'glalie', minLevel: 88, maxLevel: 95, chance: 5 }, 
						{ name: 'rhydon', minLevel: 91, maxLevel: 93, chance: 3 },
						{ name: 'golem', minLevel: 90, maxLevel: 95, chance: 3 },
						{ name: 'dragonite', minLevel: 89, maxLevel: 95, chance: 3 },
						{ name: 'absol', minLevel: 91, maxLevel: 94, chance: 2 },
						{ name: 'slaking', minLevel: 90, maxLevel: 97, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 32], 
			        	location: 'dragonLair-4'
			        }
				},
			},
		}
	},
	'dragonLair-4': {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		background: "assets/images/map/apachan/cave/dragonLair-4.png",
		song: "burnedTower",
		worldEvent: {
			dragonLairA: {
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
				position: { x: 16.8, y: 0 },
				size: { w: 3.4, h: 3 },
				event: {
					type: 'routeBattle',
					title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
					background: './assets/images/background/battle8.png',
					pokemon: [ 
						{ name: 'sneasel', minLevel: 85, maxLevel: 92, chance: 20 },
						{ name: 'machamp', minLevel: 91, maxLevel: 95, chance: 20 },
						{ name: 'aggron', minLevel: 89, maxLevel: 96, chance: 15 },
						{ name: 'ursaring', minLevel: 88, maxLevel: 92, chance: 15 },
						{ name: 'altaria', minLevel: 90, maxLevel: 93, chance: 8 },
						{ name: 'houndoom', minLevel: 92, maxLevel: 94, chance: 5 },
						{ name: 'glalie', minLevel: 88, maxLevel: 95, chance: 5 }, 
						{ name: 'rhydon', minLevel: 91, maxLevel: 93, chance: 3 },
						{ name: 'golem', minLevel: 90, maxLevel: 95, chance: 3 },
						{ name: 'dragonite', minLevel: 89, maxLevel: 95, chance: 3 },
						{ name: 'absol', minLevel: 91, maxLevel: 94, chance: 2 },
						{ name: 'slaking', minLevel: 90, maxLevel: 97, chance: 1 },
			        ],
			        travel: {
			        	battles: [0, 32], 
			        	location: 'dragonLair-3'
			        }
				},
			},
			dragonLairB: { 
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'], 
				position: { x: 8.5, y: 10.5},
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'dragonLair-5',
					sound: 'stairs'
				},
			},
		}
	},
	'dragonLair-5': {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		background: "assets/images/map/apachan/cave/dragonLair-5.png",
		song: "burnedTower",
		worldEvent: {
			dragonLair: { 
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'], 
				position: { x: 8.5, y: 10.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'dragonLair-4',
					sound: 'stairs'
				},
			},
			salamence: {
				name: ['Salamence', 'Salamence', '暴飞龙'], 
				position: { x: 15, y: 6 },
				size: { w: 3, h: 3 },
				event: {
					image: './assets/images/pokemon/sprite-shiny/salamence.png',
					type: 'dialogue',
					npc: 'salamence'
				},
			}
		}
	},
	'dragonLair-5bis': {
		name: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
		background: "assets/images/map/apachan/cave/dragonLair-5.png",
		song: "burnedTower",
		worldEvent: {
			dragonLair: { 
				name: ['Dragon Lair', 'Guarida Dragón', '龙巢'], 
				position: { x: 8.5, y: 10.5},
				size: { w: 2, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'dragonLair-4',
					sound: 'stairs'
				},
			},
			
		}
	},
	'mirageIsland-1': {
		name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
		background: "assets/images/map/apachan/route/mirageIsland-1.png",
		song: "mirageIsland",
		worldEvent: {
			boat: {
				name: ['SS. Aqua', 'SS. Aqua', '水流号'],
				position: { x: 8.8, y: 14.8 },
				size: { w: 4.4, h: 2.4 },
				event: {
					type: 'dialogue',
					npc: 'lighthouseKeeperMirageIsland'
				},
			},
			vesselA: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 6, y: 2 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselAMirageIsland',
					tw: false
				},
			},
			vesselB: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 5, y: 6 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselBMirageIsland',
					tw: false
				},
			},
			vesselC: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 17, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'vesselCMirageIsland',
					tw: false
				},
			},
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 7, y: 11 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'mirageIslandHiddenItemA',
					invisible: true
				},
			},
			wild: {
				name: [`Wild encounter`, `Encuentro salvaje`, `野外遭遇`],
				position: { x: 8, y: 2 },
				size: { w: 10, h: 5 },
				event: {
					type: 'routeBattle',
					title: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
					background: './assets/images/background/battle22.png',
					pokemon: [  
						{ name: 'wynaut', minLevel: 5, maxLevel: 50, chance: 100 },
			        ],
				},
			},
			mirageIsland: {
				name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
				position: { x: 0, y: 3 },
				size: { w: 2.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mirageIsland-2'
				},
			},	
		}
	},
	'mirageIsland-2': {
		name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
		background: "assets/images/map/apachan/route/mirageIsland-2.png",
		song: "mirageIsland",
		worldEvent: {
			mirageIsland: {
				name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
				position: { x: 22.5, y: 3 },
				size: { w: 2.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mirageIsland-1'
				},
			},	
			mirageCave: {
				name: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
				position: { x: 14, y: 1 },
				size: { w:3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mirageCave-1'
				},
			},	
		}
	},
	'mirageIsland-2bis': {
		name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
		background: "assets/images/map/apachan/route/mirageIsland-2bis.png",
		song: "mirageIsland",
		worldEvent: {
			mirageIsland: {
				name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
				position: { x: 22.5, y: 3 },
				size: { w: 2.5, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mirageIsland-1'
				},
			},	
			hiddenItem: {
				name: [``, ``, ``],
				position: { x: 15, y: 3 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'mirageIslandHiddenItemB',
					invisible: true
				},
			},
		}
	},
	'mirageCave-1': {
		name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
		background: "assets/images/map/apachan/cave/mirageCave-1.png",
		song: "mirageIsland",
		worldEvent: {
			mirageIsland: {
				name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
				position: { x: 11, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mirageIsland-2'
				},
			},	
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signMirageCave',
					tw: false
				},
			},	
		}
	},
	'mirageCave-1bis': {
		name: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
		background: "assets/images/map/apachan/cave/mirageCave-1bis.png",
		song: "mirageIsland",
		worldEvent: {
			mirageIsland: {
				name: ['Mirage Island', 'Isla Espejismo', '幻影岛'],
				position: { x: 11, y: 13 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mirageIsland-2'
				},
			},	
			sign: {
				name: [`Sign`, `Cartel`, `路牌`],
				position: { x: 12, y: 7 },
				size: { w: 1, h: 1 },
				event: {
					type: 'dialogue',
					npc: 'signMirageCave',
					tw: false
				},
			},
			mirageCave: {
				name: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
				position: { x: 11, y: 2 },
				size: { w: 3, h: 3 },
				event: {
					type: 'travelRoute',
					location: 'mirageCave-2'
				},
			},		
		}
	},
	'mirageCave-2': {
		name: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
		background: "assets/images/map/apachan/cave/mirageCave-2.png",
		song: "mirageIsland",
		worldEvent: {
			mirageCave: {
				name: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
				position: { x: 11.5, y: 7.5 },
				size: { w: 2, h: 2 },
				event: {
					type: 'travelRoute',
					location: 'mirageCave-3'
				},
			},		
			vessel: {
				name: [`Vessel`, `Vasija`, `容器`],
				position: { x: 18, y: 16},
				size: { w: 1, h: 1},
				event: {
					type: 'dialogue',
					npc: 'vesselMirageCave',
					tw: false
				},
			},
		}
	},
	'mirageCave-3': {
		name: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
		background: "assets/images/map/apachan/cave/mirageCave-3.png",
		song: "mirageIsland",
		worldEvent: {
			missingno: {
				name: ['MissingNo', 'MissingNo', 'MissingNo.'], 
				position: { x: 11.5, y: 5 },
				size: { w: 2, h: 2 },
				event: {
					image: './assets/images/pokemon/sprite/missingno.png',
					type: 'dialogue',
					npc: 'missingno'
				},
			}
		}
	},
}	

