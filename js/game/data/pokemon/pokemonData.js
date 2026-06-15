import {type} from './typeData.js';
import {move} from './moveData.js';

export const pokemonByNumber = {};
export const pokemon = {
	'bulbasaur': {
		n: 1, 
		name: ['BULBASAUR', 'BULBASAUR', '妙蛙种子'],
		portrait: './assets/images/pokemon/portrait/bulbasaur.png',
		image: './assets/images/pokemon/image/bulbasaur.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/bulbasaur.png',
		imageShiny: './assets/images/pokemon/image-shiny/bulbasaur.png',
		sprite: {
			base: './assets/images/pokemon/sprite/bulbasaur.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/bulbasaur.png',
			idle: {
				src: './assets/images/pokemon/sprite/bulbasaur-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/bulbasaur-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: -3,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/bulbasaur-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/bulbasaur-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['tackle'],
		],
		base: {
			hp: 45,
			atk: 49,
			def: 49,
			spa: 65,
			spd: 65,
			spe: 45
		},
		exp: 64,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 2, 7, 9, 10, 13, 25, 43, 53, 72, 78, 80, 83, 93, 94, 98, 105, 117, 154 ],
		egg: 'bulbasaur',
		evolution: [
			{
				pokemon: 'ivysaur',
				condition: {
					level: 16,
					move: 'grass',
					cost: 1500
				}
			},
		]
	},
	'ivysaur': {
		n: 2, 
		name: ['IVYSAUR', 'IVYSAUR', '妙蛙草'],
		portrait: './assets/images/pokemon/portrait/ivysaur.png',
		image: './assets/images/pokemon/image/ivysaur.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ivysaur.png',
		imageShiny: './assets/images/pokemon/image-shiny/ivysaur.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ivysaur.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ivysaur.png',
			idle: {
				src: './assets/images/pokemon/sprite/ivysaur-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ivysaur-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 3,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/ivysaur-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ivysaur-attack.png',
				size: [576, 512],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -12,
				correctionX: -2
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['absorb'], move['razorLeaf'], move['vineWhip'], move['magicalLeaf'],
		],
		base: {
			hp: 60,
			atk: 62,
			def: 63,
			spa: 80,
			spd: 80,
			spe: 60
		},
		exp: 142,
		gold: 25,
		catchRate: 1,
		tm: [ 151, 2, 7, 9, 10, 13, 25, 43, 53, 72, 78, 80, 83, 93, 94, 97, 98, 105, 117, 136, 148, 154, 157 ],
		egg: 'bulbasaur',
		evolution: [
			{
				pokemon: 'venusaur',
				condition: {
					level: 32,
					move: 'grass',
					cost: 5000
				}
			},
		]
	},
	'venusaur': {
		n: 3, 
		name: ['VENUSAUR', 'VENUSAUR', '妙蛙花'],
		portrait: './assets/images/pokemon/portrait/venusaur.png',
		image: './assets/images/pokemon/image/venusaur.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/venusaur.png',
		imageShiny: './assets/images/pokemon/image-shiny/venusaur.png',
		sprite: {
			base: './assets/images/pokemon/sprite/venusaur.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/venusaur.png',
			idle: {
				src: './assets/images/pokemon/sprite/venusaur-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/venusaur-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/venusaur-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/venusaur-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: -5
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['sludgeBomb'], move['gigaDrain'], move['stomp'], move['earthquake'], move['solarBeam'],
		],
		base: {
			hp: 80,
			atk: 82,
			def: 83,
			spa: 100,
			spd: 100,
			spe: 80
		},
		exp: 263,
		gold: 50,
		catchRate: 1,
		tm: [ 151, 2, 7, 9, 10, 13, 25, 27, 42, 43, 53, 67, 69, 72, 78, 80, 83, 93, 94, 97, 98, 100, 105, 112, 113, 117, 118, 126, 128, 131, 
			136, 137, 141, 142, 147, 148, 154, 157, 162, 169 ],
		egg: 'bulbasaur',
	},
	'charmander': {
		n: 4, 
		name: ['CHARMANDER', 'CHARMANDER', '小火龙'],
		portrait: './assets/images/pokemon/portrait/charmander.png',
		image: './assets/images/pokemon/image/charmander.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/charmander.png',
		imageShiny: './assets/images/pokemon/image-shiny/charmander.png',
		sprite: {
			base: './assets/images/pokemon/sprite/charmander.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/charmander.png',
			idle: {
				src: './assets/images/pokemon/sprite/charmander-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/charmander-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/charmander-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/charmander-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},	
		},
		type: [type['fire']],
		movePool: [
			move['scratch'],
		],
		base: {
			hp: 39,
			atk: 52,
			def: 43,
			spa: 60,
			spd: 50,
			spe: 65
		},
		exp: 62,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 2, 5, 9, 10, 11, 13, 15, 22, 70, 73, 75, 83, 86, 88, 110, 113, 125, 154, 155 ],
		egg: 'charmander',
		evolution: [
			{
				pokemon: 'charmeleon',
				condition: {
					level: 16,
					move: 'fire',
					cost: 1500
				}
			},
		]
	},
	'charmeleon': {
		n: 5, 
		name: ['CHARMELEON', 'CHARMELEON', '火恐龙'],
		portrait: './assets/images/pokemon/portrait/charmeleon.png',
		image: './assets/images/pokemon/image/charmeleon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/charmeleon.png',
		imageShiny: './assets/images/pokemon/image-shiny/charmeleon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/charmeleon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/charmeleon.png',
			idle: {
				src: './assets/images/pokemon/sprite/charmeleon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/charmeleon-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -10,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/charmeleon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/charmeleon-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['fire']],
		movePool: [
			move['ember'], move['stomp'], move['flameThrower'],
		],
		base: {
			hp: 58,
			atk: 64,
			def: 58,
			spa: 80,
			spd: 65,
			spe: 80
		},
		exp: 142,
		gold: 25,
		catchRate: 1,
		tm: [ 151, 2, 4, 5, 9, 10, 11, 13, 15, 22, 30, 36, 43, 46, 61, 70, 73, 75, 83, 85, 86, 110, 113, 125, 138, 139, 141, 154, 155, 161, 172, 175 ],
		egg: 'charmander',
		evolution: [
			{
				pokemon: 'charizard',
				condition: {
					level: 36,
					move: 'fire',
					cost: 5000
				}
			},
		]
	},
	'charizard': {
		n: 6, 
		name: ['CHARIZARD', 'CHARIZARD', '喷火龙'],
		portrait: './assets/images/pokemon/portrait/charizard.png',
		image: './assets/images/pokemon/image/charizard.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/charizard.png',
		imageShiny: './assets/images/pokemon/image-shiny/charizard.png',
		sprite: {
			base: './assets/images/pokemon/sprite/charizard.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/charizard.png',
			idle: {
				src: './assets/images/pokemon/sprite/charizard-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/charizard-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/charizard-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/charizard-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['fire'], type['flying']],
		movePool: [
			move['flameThrower'], move['fireBlast'], move['aerialAce'], move['fly'], move['dragonBreath'],
		],
		base: {
			hp: 78,
			atk: 84,
			def: 78,
			spa: 109,
			spd: 85,
			spe: 100
		},
		exp: 267,
		gold: 50,
		catchRate: 1,
		tm: [ 151, 2, 4, 5, 9, 10, 11, 13, 15, 22, 24, 30, 36, 43, 46, 55, 57, 61, 67, 70, 71, 73, 75, 83, 85, 86, 
			99, 100, 102, 103, 106, 110, 113, 122, 125, 127, 132, 134, 138, 139, 141, 153, 154, 155, 161, 172, 175, 
		],
		egg: 'charmander',
	},
	'squirtle': {
		n: 7, 
		name: ['SQUIRTLE', 'SQUIRTLE', '杰尼龟'],
		portrait: './assets/images/pokemon/portrait/squirtle.png',
		image: './assets/images/pokemon/image/squirtle.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/squirtle.png',
		imageShiny: './assets/images/pokemon/image-shiny/squirtle.png',
		sprite: {
			base: './assets/images/pokemon/sprite/squirtle.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/squirtle.png',
			idle: {
				src: './assets/images/pokemon/sprite/squirtle-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/squirtle-idle.png',
				size: [256, 256],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -1,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/squirtle-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/squirtle-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -2
			},	
		},
		type: [type['water']],
		movePool: [
			move['tackle'],
		],
		base: {
			hp: 44,
			atk: 48,
			def: 65,
			spa: 50,
			spd: 65,
			spe: 43
		},
		exp: 63,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 2, 8, 10, 11, 17, 21, 29, 30, 74, 77, 83, 93, 129, 154, 159 ],
		egg: 'squirtle',
		evolution: [
			{
				pokemon: 'wartortle',
				condition: {
					level: 16,
					move: 'water',
					cost: 1500
				}
			},
		]
	},
	'wartortle': {
		n: 8, 
		name: ['WARTORTLE', 'WARTORTLE', '卡咪龟'],
		portrait: './assets/images/pokemon/portrait/wartortle.png',
		image: './assets/images/pokemon/image/wartortle.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wartortle.png',
		imageShiny: './assets/images/pokemon/image-shiny/wartortle.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wartortle.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wartortle.png',
			idle: {
				src: './assets/images/pokemon/sprite/wartortle-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wartortle-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/wartortle-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wartortle-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},	
		},
		type: [type['water']],
		movePool: [
			move['bubble'], move['bubbleBeam'], move['waterGun'],
		],
		base: {
			hp: 59,
			atk: 63,
			def: 80,
			spa: 65,
			spd: 80,
			spe: 58
		},
		exp: 142,
		gold: 25,
		catchRate: 1,
		tm: [ 151, 2, 8, 10, 11, 13, 17, 21, 29, 30, 44, 47, 64, 74, 77, 83, 93, 119, 129, 154, 159, 161 ],
		egg: 'squirtle',
		evolution: [
			{
				pokemon: 'blastoise',
				condition: {
					level: 36,
					move: 'water',
					cost: 5000
				}
			},
		]
	},
	'blastoise': {
		n: 9, 
		name: ['BLASTOISE', 'BLASTOISE', '水箭龟'],
		portrait: './assets/images/pokemon/portrait/blastoise.png',
		image: './assets/images/pokemon/image/blastoise.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/blastoise.png',
		imageShiny: './assets/images/pokemon/image-shiny/blastoise.png',
		sprite: {
			base: './assets/images/pokemon/sprite/blastoise.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/blastoise.png',
			idle: {
				src: './assets/images/pokemon/sprite/blastoise-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/blastoise-idle.png',
				size: [320, 320],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: 1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/blastoise-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/blastoise-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			},	
		},
		type: [type['water']],
		movePool: [
			move['surf'], move['hydroPump'], move['icyWind'], move['bodySlam'], move['iceBeam'],
		],
		base: {
			hp: 79,
			atk: 83,
			def: 100,
			spa: 85,
			spd: 100,
			spe: 78
		},
		exp: 265,
		gold: 50,
		catchRate: 1,
		tm: [ 151, 2, 8, 10, 11, 13, 17, 21, 23, 29, 30, 36, 37, 40, 43, 44, 47, 48, 56, 61, 62, 64, 66,
			67, 69, 71, 74, 77, 83, 93, 94, 102, 104, 113, 118, 119, 126, 129, 131, 133, 141, 150, 154, 159, 161, 165, 166, 168, 174 ],
		egg: 'squirtle',
	},
	'caterpie': {
		n: 10,
		name: ['CATERPIE', 'CATERPIE', '绿毛虫'],
		portrait: './assets/images/pokemon/portrait/caterpie.png',
		image: './assets/images/pokemon/image/caterpie.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/caterpie.png',
		imageShiny: './assets/images/pokemon/image-shiny/caterpie.png',
		sprite: {
			base: './assets/images/pokemon/sprite/caterpie.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/caterpie.png',
			idle: {
				src: './assets/images/pokemon/sprite/caterpie-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/caterpie-idle.png',
				size: [320, 256],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: 2,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/caterpie-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/caterpie-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -13,
				correctionX: 0
			},
		},
		type: [type['bug']],
		movePool: [
			move['tackle'], move['stringShot'], move['bugbit'],
		],
		base: {
			hp: 45,
			atk: 30,
			def: 35,
			spa: 20,
			spd: 20,
			spe: 45
		},
		exp: 39,
		gold: 2,
		catchRate: 3,
		tm: [ 151,
			10, 12, 33, 83
		],
		egg: 'caterpie',
		evolution: [
			{
				pokemon: 'metapod',
				condition: {
					level: 7,
					cost: 50
				}
			},
		]
	},
	'metapod': {
		n: 11,
		name: ['METAPOD', 'METAPOD', '铁甲蛹'],
		portrait: './assets/images/pokemon/portrait/metapod.png',
		image: './assets/images/pokemon/image/metapod.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/metapod.png',
		imageShiny: './assets/images/pokemon/image-shiny/metapod.png',
		sprite: {
			base: './assets/images/pokemon/sprite/metapod.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/metapod.png',
			idle: {
				src: './assets/images/pokemon/sprite/metapod-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/metapod-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/metapod-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/metapod-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -4
			},
		},
		type: [type['bug']],
		movePool: [
			move['tackle'],
		],
		base: {
			hp: 50,
			atk: 20,
			def: 55,
			spa: 25,
			spd: 25,
			spe: 30
		},
		exp: 72,
		gold: 4,
		catchRate: 3,
		tm: [ 151,
			10, 12, 33, 83
		],
		egg: 'caterpie',
		evolution: [
			{
				pokemon: 'butterfree',
				condition: {
					level: 10,
					cost: 200
				}
			},
		]
	},
	'butterfree': {
		n: 12,
		name: ['BUTTERFREE', 'BUTTERFREE', '巴大蝶'],
		portrait: './assets/images/pokemon/portrait/butterfree.png',
		image: './assets/images/pokemon/image/butterfree.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/butterfree.png',
		imageShiny: './assets/images/pokemon/image-shiny/butterfree.png',
		sprite: {
			base: './assets/images/pokemon/sprite/butterfree.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/butterfree.png',
			idle: {
				src: './assets/images/pokemon/sprite/butterfree-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/butterfree-idle.png',
				size: [128, 445],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/butterfree-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/butterfree-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -22,
				correctionX: -7
			},
		},
		type: [type['bug'], type['flying']],
		movePool: [
			move['gust'], move['confusion'], move['psybeam'],
		],
		base: {
			hp: 60,
			atk: 45,
			def: 50,
			spa: 90,
			spd: 80,
			spe: 70
		},
		exp: 178,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 178, 3, 10, 12, 24, 33, 59, 64, 83, 90, 92, 96, 100, 106, 127, 130, 132, 171 ],
		egg: 'caterpie',
	},
	'weedle': {
		n: 13,
		name: ['WEEDLE', 'WEEDLE', '独角虫'],
		portrait: './assets/images/pokemon/portrait/weedle.png',
		image: './assets/images/pokemon/image/weedle.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/weedle.png',
		imageShiny: './assets/images/pokemon/image-shiny/weedle.png',
		sprite: {
			base: './assets/images/pokemon/sprite/weedle.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/weedle.png',
			idle: {
				src: './assets/images/pokemon/sprite/weedle-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/weedle-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 1
			},
			attack: {
				src: './assets/images/pokemon/sprite/weedle-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/weedle-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -13,
				correctionX: -3
			},
		},
		type: [type['bug'], type['poison']],
		movePool: [
			move['poisonSting'], move['stringShot'], move['tackle']
		],
		base: {
			hp: 40,
			atk: 35,
			def: 30,
			spa: 20,
			spd: 20,
			spe: 50
		},
		exp: 39,
		gold: 2,
		catchRate: 3,
		tm: [ 151, 10, 12, 26, 32, 33, 83 ],
		egg: 'weedle',
		evolution: [
			{
				pokemon: 'kakuna',
				condition: {
					level: 7,
					cost: 50
				}
			},
		]
	},
	'kakuna': {
		n: 14,
		name: ['KAKUNA', 'KAKUNA', '铁壳蛹'],
		portrait: './assets/images/pokemon/portrait/kakuna.png',
		image: './assets/images/pokemon/image/kakuna.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kakuna.png',
		imageShiny: './assets/images/pokemon/image-shiny/kakuna.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kakuna.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kakuna.png',
			idle: {
				src: './assets/images/pokemon/sprite/kakuna-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kakuna-idle.png',
				size: [144, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/kakuna-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kakuna-attack.png',
				size: [896, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -18,
				correctionX: -5
			},
		},
		type: [type['bug'], type['poison']],
		movePool: [
			move['tackle'],
		],
		base: {
			hp: 45,
			atk: 25,
			def: 50,
			spa: 25,
			spd: 25,
			spe: 35
		},
		exp: 72,
		gold: 4,
		catchRate: 3,
		tm: [ 151, 10, 12, 26, 32, 33, 83 ],
		egg: 'weedle',
		evolution: [
			{
				pokemon: 'beedrill',
				condition: {
					level: 10,
					cost: 200
				}
			},
		],
	},
	'beedrill': {
		n: 15,
		name: ['BEEDRILL', 'BEEDRILL', '大针蜂'],
		portrait: './assets/images/pokemon/portrait/beedrill.png',
		image: './assets/images/pokemon/image/beedrill.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/beedrill.png',
		imageShiny: './assets/images/pokemon/image-shiny/beedrill.png',
		sprite: {
			base: './assets/images/pokemon/sprite/beedrill.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/beedrill.png',
			idle: {
				src: './assets/images/pokemon/sprite/beedrill-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/beedrill-idle.png',
				size: [384, 384],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/beedrill-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/beedrill-attack.png',
				size: [1152, 640],
				position: 6,
				framesX: 18,
				framesY: 8,
				correctionY: -22,
				correctionX: -7
			},
		},
		type: [type['bug'], type['poison']],
		movePool: [
			move['twineedle'], move['poisonSting'], move['furyCutter']
		],
		base: {
			hp: 65,
			atk: 90,
			def: 40,
			spa: 45,
			spd: 80,
			spe: 75
		},
		exp: 178,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 158, 169, 170, 171, 176, 178, 3, 10, 12, 26, 32, 33, 49, 50, 53, 83, 91, 95, 
			100, 120, 130, 142, 143, 144, 146, 147, 149, 153
		],
		egg: 'weedle',
	},
	'pidgey': {
		n: 16,
		name: ['PIDGEY', 'PIDGEY', '波波'],
		portrait: './assets/images/pokemon/portrait/pidgey.png',
		image: './assets/images/pokemon/image/pidgey.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/pidgey.png',
		imageShiny: './assets/images/pokemon/image-shiny/pidgey.png',
		sprite: {
			base: './assets/images/pokemon/sprite/pidgey.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/pidgey.png',
			idle: {
				src: './assets/images/pokemon/sprite/pidgey-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pidgey-idle.png',
				size: [120, 320],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 0,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/pidgey-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pidgey-attack.png',
				size: [896, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['gust'], move['tackle'], move['sandAttack'], move['peck'], move['twister']
		],
		base: {
			hp: 40,
			atk: 45,
			def: 40,
			spa: 35,
			spd: 35,
			spe: 56
		},
		exp: 50,
		gold: 5,
		catchRate: 3,
		tm: [ 151, 5, 6, 9, 10, 24, 57, 59, 68, 70, 83, 106, 132, 149 ],
		egg: 'pidgey',
		evolution: [
			{
				pokemon: 'pidgeotto',
				condition: {
					level: 18,
					cost: 1000
				}
			},
		]
	},
	'pidgeotto': {
		n: 17,
		name: ['PIDGEOTTO', 'PIDGEOTTO', '比比鸟'],
		portrait: './assets/images/pokemon/portrait/pidgeotto.png',
		image: './assets/images/pokemon/image/pidgeotto.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/pidgeotto.png',
		imageShiny: './assets/images/pokemon/image-shiny/pidgeotto.png',
		sprite: {
			base: './assets/images/pokemon/sprite/pidgeotto.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/pidgeotto.png',
			idle: {
				src: './assets/images/pokemon/sprite/pidgeotto-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pidgeotto-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/pidgeotto-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pidgeotto-attack.png',
				size: [896, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['gust'], move['quickAttack'], move['fly'], move['pursuit'], move['twister']
		],
		base: {
			hp: 63,
			atk: 60,
			def: 55,
			spa: 50,
			spd: 50,
			spe: 71
		},
		exp: 122,
		gold: 9,
		catchRate: 1,
		tm: [ 151, 5, 6, 9, 10, 24, 55, 57, 59, 68, 70, 76, 83, 84, 106, 132, 149 ],
		egg: 'pidgey',
		evolution: [
			{
				pokemon: 'pidgeot',
				condition: {
					level: 36,
					cost: 3000
				}
			},
		]
	},
	'pidgeot': {
		n: 18,
		name: ['PIDGEOT', 'PIDGEOT', '大比鸟'],
		portrait: './assets/images/pokemon/portrait/pidgeot.png',
		image: './assets/images/pokemon/image/pidgeot.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/pidgeot.png',
		imageShiny: './assets/images/pokemon/image-shiny/pidgeot.png',
		sprite: {
			base: './assets/images/pokemon/sprite/pidgeot.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/pidgeot.png',
			idle: {
				src: './assets/images/pokemon/sprite/pidgeot-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pidgeot-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/pidgeot-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pidgeot-attack.png',
				size: [1008, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -10,
				correctionX: -4
			},
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['airSlash'], move['dragonBreath'], move['fly'], move['twister'], move['aerialAce']
		],
		base: {
			hp: 83,
			atk: 80,
			def: 75,
			spa: 70,
			spd: 70,
			spe: 101
		},
		exp: 216,
		gold: 14,
		catchRate: 0.9,
		tm: [ 151, 4, 5, 6, 9, 10, 24, 43, 55, 57, 59, 68, 70, 76, 83, 84, 99, 106, 113, 127, 132, 134, 146, 149 ],
		egg: 'pidgey',
	},
	'rattata': {
		n: 19,
		name: ['RATTATA', 'RATTATA', '小拉达'],
		portrait: './assets/images/pokemon/portrait/rattata.png',
		image: './assets/images/pokemon/image/rattata.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/rattata.png',
		imageShiny: './assets/images/pokemon/image-shiny/rattata.png',
		sprite: {
			base: './assets/images/pokemon/sprite/rattata.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/rattata.png',
			idle: {
				src: './assets/images/pokemon/sprite/rattata-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rattata-idle.png',
				size: [256, 256],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: 3,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/rattata-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rattata-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -2
			},
		},
		type: [type['normal']],
		movePool: [
			move['tackle'], move['quickAttack'], move['bite'],
		],
		base: {
			hp: 30,
			atk: 56,
			def: 35,
			spa: 25,
			spd: 35,
			spe: 72
		},
		exp: 51,
		gold: 3,
		catchRate: 5,
		tm: [ 151, 1, 2, 5, 9, 10, 11, 13, 18, 22, 28, 30, 36, 43, 49, 70, 81, 83, 84, 88, 91, 94, 100, 141, 149 ],
		egg: 'rattata',
		evolution: [
			{
				pokemon: 'raticate',
				condition: {
					level: 20,
					cost: 300
				}
			},
		]
	},
	'raticate': {
		n: 20,
		name: ['RATICATE', 'RATICATE', '拉达'],
		portrait: './assets/images/pokemon/portrait/raticate.png',
		image: './assets/images/pokemon/image/raticate.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/raticate.png',
		imageShiny: './assets/images/pokemon/image-shiny/raticate.png',
		sprite: {
			base: './assets/images/pokemon/sprite/raticate.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/raticate.png',
			idle: {
				src: './assets/images/pokemon/sprite/raticate-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/raticate-idle.png',
				size: [192, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/raticate-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/raticate-attack.png',
				size: [936, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -16,
				correctionX: -10
			},
		},
		type: [type['normal']],
		movePool: [
			move['quickAttack'], move['bite'], move['crunch'],
		],
		base: {
			hp: 55,
			atk: 81,
			def: 60,
			spa: 50,
			spd: 70,
			spe: 97
		},
		exp: 145,
		gold: 11,
		catchRate: 2,
		tm: [ 151, 1, 2, 4, 5, 9, 10, 11, 13, 18, 22, 28, 30, 36, 43, 47, 49, 61, 67, 70, 76, 81, 83, 84, 88, 91, 
				94, 100, 103, 118, 119, 125, 138, 139, 141, 146, 149, 161, 169, 171 ],
		egg: 'rattata',
	},
	'spearow': {
		n: 21,
		name: ['SPEAROW', 'SPEAROW', '烈雀'],
		portrait: './assets/images/pokemon/portrait/spearow.png',
		image: './assets/images/pokemon/image/spearow.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/spearow.png',
		imageShiny: './assets/images/pokemon/image-shiny/spearow.png',
		sprite: {
			base: './assets/images/pokemon/sprite/spearow.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/spearow.png',
			idle: {
				src: './assets/images/pokemon/sprite/spearow-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spearow-idle.png',
				size: [144, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -1,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/spearow-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spearow-attack.png',
				size: [896, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['peck'], move['sandAttack'], move['wingAttack'], move['gust']
		],
		base: {
			hp: 40,
			atk: 60,
			def: 30,
			spa: 31,
			spd: 31,
			spe: 70
		},
		exp: 52,
		gold: 6,
		catchRate: 3,
		tm: [ 151, 5, 6, 9, 10, 24, 30, 57, 59, 68, 70, 132 ],
		egg: 'separow',
		evolution: [
			{
				pokemon: 'fearow',
				condition: {
					level: 20,
					cost: 1500
				}
			},
		]
	},
	'fearow': {
		n: 22,
		name: ['FEAROW', 'FEAROW', '大嘴雀'],
		portrait: './assets/images/pokemon/portrait/fearow.png',
		image: './assets/images/pokemon/image/fearow.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/fearow.png',
		imageShiny: './assets/images/pokemon/image-shiny/fearow.png',
		sprite: {
			base: './assets/images/pokemon/sprite/fearow.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/fearow.png',
			idle: {
				src: './assets/images/pokemon/sprite/fearow-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/fearow-idle.png',
				size: [400, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -8,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/fearow-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/fearow-attack.png',
				size: [960, 576],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -12,
				correctionX: -6
			},
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['drillPeck'], move['wingAttack'], move['twister'], move['pursuit'], move['fly']
		],
		base: {
			hp: 65,
			atk: 90,
			def: 65,
			spa: 61,
			spd: 61,
			spe: 100
		},
		exp: 155,
		gold: 14,
		catchRate: 1,
		tm: [ 151, 5, 6, 9, 10, 14, 24, 30, 57, 59, 68, 70, 81, 84, 106, 124, 127, 132, 146, 149],
		egg: 'separow',
	},
	'ekans': {
		n: 23,
		name: ['EKANS', 'EKANS', '阿柏蛇'],
		portrait: './assets/images/pokemon/portrait/ekans.png',
		image: './assets/images/pokemon/image/ekans.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ekans.png',
		imageShiny: './assets/images/pokemon/image-shiny/ekans.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ekans.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ekans.png',
			idle: {
				src: './assets/images/pokemon/sprite/ekans-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ekans-idle.png',
				size: [240, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/ekans-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ekans-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: -5
			},
		},
		type: [type['poison']],
		movePool: [
			move['wrap'], move['poisonSting'], move['bite'], move['constrict']
		],
		base: {
			hp: 35,
			atk: 60,
			def: 44,
			spa: 40,
			spd: 54,
			spe: 55
		},
		exp: 58,
		gold: 6,
		catchRate: 3,
		tm: [ 151, 161,	2, 9, 10, 13, 16, 26, 28, 32, 51, 53, 60, 63, 81, 83, 93, 98, 100, 117, 142, 143 ],
		egg: 'ekans',
		evolution: [
			{
				pokemon: 'arbok',
				condition: {
					level: 22,
					cost: 2000
				}
			},
		]
	},
	'arbok': {
		n: 24,
		name: ['ARBOK', 'ARBOK', '阿柏怪'],
		portrait: './assets/images/pokemon/portrait/arbok.png',
		image: './assets/images/pokemon/image/arbok.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/arbok.png',
		imageShiny: './assets/images/pokemon/image-shiny/arbok.png',
		sprite: {
			base: './assets/images/pokemon/sprite/arbok.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/arbok.png',
			idle: {
				src: './assets/images/pokemon/sprite/arbok-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/arbok-idle.png',
				size: [240, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -7,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/arbok-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/arbok-attack.png',
				size: [936, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			},
		},
		type: [type['poison']],
		movePool: [
			move['bite'], move['acid'], move['glare'], move['poisonFang'], move['crunch']
		],
		base: {
			hp: 60,
			atk: 95,
			def: 69,
			spa: 65,
			spd: 79,
			spe: 80
		},
		exp: 157,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 161, 169, 2, 9, 10, 13, 16, 23, 26, 28, 30, 32, 40, 50, 51, 53, 60, 63, 67, 69, 70, 71, 81, 83, 86, 
			93, 94, 97, 98, 100, 102, 103, 113, 117, 118, 126, 128, 134, 137, 139, 141, 142, 143, 144, 146, 147, 150],
		egg: 'ekans',
	},
	'pikachu': {
		n: 25,
		name: ['PIKACHU', 'PIKACHU', '皮卡丘'],
		portrait: './assets/images/pokemon/portrait/pikachu.png',
		image: './assets/images/pokemon/image/pikachu.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/pikachu.png',
		imageShiny: './assets/images/pokemon/image-shiny/pikachu.png',
		sprite: {
			base: './assets/images/pokemon/sprite/pikachu.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/pikachu.png',
			idle: {
				src: './assets/images/pokemon/sprite/pikachu-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pikachu-idle.png',
				size: [240, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -11,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/pikachu-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pikachu-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -7
			},
		},
		type: [type['electric']],
		movePool: [
			move['thunderShock'], move['quickAttack'], move['spark'], move['tackle']
		],
		base: {
			hp: 35,
			atk: 55,
			def: 40,
			spa: 50,
			spd: 50,
			spe: 90
		},
		exp: 112,
		gold: 9,
		catchRate: 3,
		tm: [ 151,
			5, 10, 11, 13, 18, 31, 43, 45, 47, 61, 68, 70, 76, 79, 83, 89, 102, 109, 121, 123, 135, 141, 145, 
		],
		egg: 'pichu',
		evolution: [
			{
				pokemon: 'raichu',
				condition: {
					level: 20,
					item: 'thunderStone',
					cost: 1200
				}
			},
		]
	},
	'raichu': {
		n: 26,
		name: ['RAICHU', 'RAICHU', '雷丘'],
		portrait: './assets/images/pokemon/portrait/raichu.png',
		image: './assets/images/pokemon/image/raichu.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/raichu.png',
		imageShiny: './assets/images/pokemon/image-shiny/raichu.png',
		sprite: {
			base: './assets/images/pokemon/sprite/raichu.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/raichu.png',
			idle: {
				src: './assets/images/pokemon/sprite/raichu-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/raichu-idle.png',
				size: [240, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/raichu-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/raichu-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -6
			},
		},
		type: [type['electric']],
		movePool: [
			move['thunderPunch'], move['quickAttack'], move['thunderShock'], move['spark'], move['ironTail'],
		],
		base: {
			hp: 60,
			atk: 90,
			def: 55,
			spa: 90,
			spd: 80,
			spe: 110
		},
		exp: 218,
		gold: 14,
		catchRate: 0.9,
		tm: [ 151, 5, 10, 11, 13, 18, 31, 43, 45, 47, 61, 68, 70, 76, 79, 83, 89, 102, 109, 121, 123, 135, 
			141, 145, 149, 166, 
		],
		egg: 'pichu',
	},
	'sandshrew': {
		n: 27,
		name: ['SANDSHREW', 'SANDSHREW', '穿山鼠'],
		portrait: './assets/images/pokemon/portrait/sandshrew.png',
		image: './assets/images/pokemon/image/sandshrew.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/sandshrew.png',
		imageShiny: './assets/images/pokemon/image-shiny/sandshrew.png',
		sprite: {
			base: './assets/images/pokemon/sprite/sandshrew.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/sandshrew.png',
			idle: {
				src: './assets/images/pokemon/sprite/sandshrew-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sandshrew-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/sandshrew-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sandshrew-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -17,
				correctionX: -8
			},
		},
		type: [type['ground']],
		movePool: [
			move['scratch'], move['sandAttack'], move['furyCutter'], move['sandTomb']
		],
		base: {
			hp: 50,
			atk: 75,
			def: 85,
			spa: 20,
			spd: 30,
			spe: 40
		},
		exp: 60,
		gold: 7,
		catchRate: 3,
		tm: [ 151, 164, 5, 9, 10, 11, 40, 45, 49, 53, 68, 70, 83, 87, 88, 93, 94, 108, 114, 149, 150, 153, 158 ],
		egg: 'sandshrew',
		evolution: [
			{
				pokemon: 'sandslash',
				condition: {
					level: 22,
					cost: 2000
				}
			},
		]
	},
	'sandslash': {
		n: 28,
		name: ['SANDSLASH', 'SANDSLASH', '穿山王'],
		portrait: './assets/images/pokemon/portrait/sandslash.png',
		image: './assets/images/pokemon/image/sandslash.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/sandslash.png',
		imageShiny: './assets/images/pokemon/image-shiny/sandslash.png',
		sprite: {
			base: './assets/images/pokemon/sprite/sandslash.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/sandslash.png',
			idle: {
				src: './assets/images/pokemon/sprite/sandslash-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sandslash-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/sandslash-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sandslash-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			},
		},
		type: [type['ground']],
		movePool: [
			move['slash'], move['furyCutter'], move['swift'], move['sandAttack'], move['drillRun'], move['rollout']
		],
		base: {
			hp: 75,
			atk: 100,
			def: 110,
			spa: 45,
			spd: 55,
			spe: 65
		},
		exp: 158,
		gold: 12,
		catchRate: 2,
		tm: [ 151, 5, 9, 10, 11, 40, 45, 49, 53, 68, 69, 70, 83, 87, 88, 93, 94, 108, 114, 124, 126, 138, 144, 
			146, 149, 150, 153, 158, 164, 170, 172, 179
		],
		egg: 'sandshrew',
	},
	'nidoranf': {
		n: 29,
		name: ['NIDORAN♀', 'NIDORAN♀', '尼多兰'],
		portrait: './assets/images/pokemon/portrait/nidoranF.png',
		image: './assets/images/pokemon/image/nidoranF.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nidoranF.png',
		imageShiny: './assets/images/pokemon/image-shiny/nidoranF.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nidoranF.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nidoranF.png',
			idle: {
				src: './assets/images/pokemon/sprite/nidoranF-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoranF-idle.png',
				size: [120, 320],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/nidoranF-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoranF-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -6
			},	
		},
		type: [type['poison']],
		movePool: [
			move['poisonSting'], move['scratch'], move['hornAttack'], move['sandTomb']
		],
		base: {
			hp: 55,
			atk: 47,
			def: 52,
			spa: 40,
			spd: 40,
			spe: 41
		},
		exp: 55,
		gold: 6,
		catchRate: 3,
		tm: [ 151, 5, 6, 9, 10, 11, 13, 18, 22, 32, 39, 43, 45, 53, 70, 83, 87, 88, 93, 120 ],
		egg: 'nidoranf',
		evolution: [
			{
				pokemon: 'nidorina',
				condition: {
					level: 16,
					cost: 1500
				}
			},
		]
	},
	'nidorina': {
		n: 30,
		name: ['NIDORINA', 'NIDORINA', '尼多娜'],
		portrait: './assets/images/pokemon/portrait/nidorina.png',
		image: './assets/images/pokemon/image/nidorina.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nidorina.png',
		imageShiny: './assets/images/pokemon/image-shiny/nidorina.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nidorina.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nidorina.png',
			idle: {
				src: './assets/images/pokemon/sprite/nidorina-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidorina-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/nidorina-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidorina-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			},	
		},
		type: [type['poison']],
		movePool: [
			move['poisonSting'], move['mudSlap'], move['bite'], move['pound'], move['venoShock']
		],
		base: {
			hp: 70,
			atk: 62,
			def: 67,
			spa: 55,
			spd: 55,
			spe: 56
		},
		exp: 128,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 169, 5, 6, 9, 10, 11, 13, 18, 22, 39, 43, 45, 53, 70, 83, 87, 88, 93, 100, 120 ],
		egg: 'nidoranf',
		evolution: [
			{
				pokemon: 'nidoqueen',
				condition: {
					level: 32,
					item: 'moonStone',
					move: 'ground',
					cost: 4000
				}
			},
		]
	},
	'nidoqueen': {
		n: 31,
		name: ['NIDOQUEEN', 'NIDOQUEEN', '尼多后'],
		portrait: './assets/images/pokemon/portrait/nidoqueen.png',
		image: './assets/images/pokemon/image/nidoqueen.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nidoqueen.png',
		imageShiny: './assets/images/pokemon/image-shiny/nidoqueen.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nidoqueen.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nidoqueen.png',
			idle: {
				src: './assets/images/pokemon/sprite/nidoqueen-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoqueen-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -1,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/nidoqueen-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoqueen-attack.png',
				size: [648, 640],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -20,
				correctionX: -4
			},	
		},
		type: [type['poison'], type['ground']],
		movePool: [
			move['bodySlam'], move['earthquake'], move['superpower'], move['earthPower'], move['crunch'],
		],
		base: {
			hp: 90,
			atk: 92,
			def: 87,
			spa: 75,
			spd: 85,
			spe: 76
		},
		exp: 227,
		gold: 35,
		catchRate: 0.7,
		tm: [ 151, 161, 169, 5, 6, 9, 10, 11, 13, 18, 22, 23, 39, 40, 43, 45, 46, 52, 53, 60, 61, 67, 69, 70, 
			71, 81, 82, 83, 86, 87, 88, 91, 93, 97, 100, 102, 109, 113, 114, 118, 119, 120, 124, 125, 138, 141,
			142, 144, 146, 147 ],
		egg: 'nidoranf',
	},
	'nidoranm': {
		n: 32,
		name: ['NIDORAN♂', 'NIDORAN♂', '尼多朗'],
		portrait: './assets/images/pokemon/portrait/nidoranM.png',
		image: './assets/images/pokemon/image/nidoranM.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nidoranM.png',
		imageShiny: './assets/images/pokemon/image-shiny/nidoranM.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nidoranM.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nidoranM.png',
			idle: {
				src: './assets/images/pokemon/sprite/nidoranM-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoranM-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/nidoranM-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoranM-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},	
		},
		type: [type['poison']],
		movePool: [
			move['peck'], move['poisonSting'], move['tackle'], move['sandTomb']
		],
		base: {
			hp: 46,
			atk: 57,
			def: 40,
			spa: 40,
			spd: 40,
			spe: 50
		},
		exp: 55,
		gold: 6,
		catchRate: 3,
		tm: [ 151, 5, 6, 9, 10, 11, 13, 18, 22, 32, 39, 43, 45, 53, 70, 83, 87, 88, 93, 120 ],
		egg: 'nidoranm',
		evolution: [
			{
				pokemon: 'nidorino',
				condition: {
					level: 16,
					cost: 1500
				}
			},
		]
	},
	'nidorino': {
		n: 33,
		name: ['NIDORINO', 'NIDORINO', '尼多力诺'],
		portrait: './assets/images/pokemon/portrait/nidorino.png',
		image: './assets/images/pokemon/image/nidorino.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nidorino.png',
		imageShiny: './assets/images/pokemon/image-shiny/nidorino.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nidorino.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nidorino.png',
			idle: {
				src: './assets/images/pokemon/sprite/nidorino-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidorino-idle.png',
				size: [400, 320],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/nidorino-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidorino-attack.png',
				size: [792, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -23,
				correctionX: -3
			},	
		},
		type: [type['poison']],
		movePool: [
			move['poisonSting'], move['mudSlap'], move['magnitude'], move['pound'], move['venoShock']
		],
		base: {
			hp: 61,
			atk: 72,
			def: 57,
			spa: 55,
			spd: 55,
			spe: 65
		},
		exp: 128,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 169, 5, 6, 9, 10, 11, 13, 18, 22, 39, 43, 45, 53, 70, 83, 87, 88, 93, 100, 120 ],
		egg: 'nidoranm',
		evolution: [
			{
				pokemon: 'nidoking',
				condition: {
					level: 32,
					item: 'moonStone',
					move: 'ground',
					cost: 4000
				}
			},
		],
	},
	'nidoking': {
		n: 34,
		name: ['NIDOKING', 'NIDOKING', '尼多王'],
		portrait: './assets/images/pokemon/portrait/nidoking.png',
		image: './assets/images/pokemon/image/nidoking.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nidoking.png',
		imageShiny: './assets/images/pokemon/image-shiny/nidoking.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nidoking.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nidoking.png',
			idle: {
				src: './assets/images/pokemon/sprite/nidoking-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoking-idle.png',
				size: [560, 512],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -13,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/nidoking-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nidoking-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -19,
				correctionX: -3
			},	
		},
		type: [type['poison'], type['ground']],
		movePool: [
			move['megahorn'], move['earthquake'], move['poisonJab'], move['earthPower']
		],
		base: {
			hp: 81,
			atk: 102,
			def: 77,
			spa: 85,
			spd: 75,
			spe: 85
		},
		exp: 227,
		gold: 35,
		catchRate: 0.7,
		tm: [ 151, 161, 169, 179, 5, 6, 9, 10, 11, 13, 18, 22, 23, 39, 40, 43, 45, 46, 52, 53, 60, 61, 67, 69, 70,
			 71, 81, 82, 83, 86, 87, 88, 91, 93, 97, 100, 102, 109, 113, 114, 118, 119, 120, 124, 125, 138, 
			 141, 142, 144, 146, 147 ],
		egg: 'nidoranm',
	},
	'clefairy': {
		n: 35,
		name: ['CLEFAIRY', 'CLEFAIRY', '皮皮'],
		portrait: './assets/images/pokemon/portrait/clefairy.png',
		image: './assets/images/pokemon/image/clefairy.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/clefairy.png',
		imageShiny: './assets/images/pokemon/image-shiny/clefairy.png',
		sprite: {
			base: './assets/images/pokemon/sprite/clefairy.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/clefairy.png',
			idle: {
				src: './assets/images/pokemon/sprite/clefairy-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/clefairy-idle.png',
				size: [192, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -2,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/clefairy-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/clefairy-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
		},
		type: [type['normal']],
		movePool: [
			move['tackle'], move['pound'], move['swift'], move['metronome']
		],
		base: {
			hp: 70,
			atk: 45,
			def: 48,
			spa: 60,
			spd: 65,
			spe: 35
		},
		exp: 113,
		gold: 10,
		catchRate: 3,
		tm: [ 151, 1, 2, 10, 18, 41, 43, 45, 46, 48, 51, 56, 58, 60, 61, 67, 68, 78, 79, 83, 84, 86, 87, 93, 109,
			 112, 121, 123, 125, 126, 133, 159, 162, 168],
		egg: 'cleffa',
		evolution: [
			{
				pokemon: 'clefable',
				condition: {
					level: 20,
					item: 'moonStone',
					time: 'day',
					cost: 2500
				}
			},
		]
	},
	'clefable': {
		n: 36,
		name: ['CLEFABLE', 'CLEFABLE', '皮可西'],
		portrait: './assets/images/pokemon/portrait/clefable.png',
		image: './assets/images/pokemon/image/clefable.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/clefable.png',
		imageShiny: './assets/images/pokemon/image-shiny/clefable.png',
		sprite: {
			base: './assets/images/pokemon/sprite/clefable.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/clefable.png',
			idle: {
				src: './assets/images/pokemon/sprite/clefable-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/clefable-idle.png',
				size: [192, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -4,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/clefable-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/clefable-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -3
			},	
		},
		type: [type['normal']],
		movePool: [
			move['hyperVoice'], move['tackle'], move['pound'], move['metronome']
		],
		base: {
			hp: 95,
			atk: 70,
			def: 73,
			spa: 95,
			spd: 90,
			spe: 60
		},
		exp: 217,
		gold: 15,
		catchRate: 1,
		tm: [ 151, 1, 2, 10, 18, 41, 43, 45, 46, 48, 51, 56, 58, 60, 61, 64, 67, 68, 78, 79, 83, 84, 86, 
			87, 93, 109, 112, 121, 123, 125, 126, 133, 159, 162, 168 ],
		egg: 'cleffa',
	},
	'vulpix': {
		n: 37,
		name: ['VULPIX', 'VULPIX', '六尾'],
		portrait: './assets/images/pokemon/portrait/vulpix.png',
		image: './assets/images/pokemon/image/vulpix.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/vulpix.png',
		imageShiny: './assets/images/pokemon/image-shiny/vulpix.png',
		sprite: {
			base: './assets/images/pokemon/sprite/vulpix.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/vulpix.png',
			idle: {
				src: './assets/images/pokemon/sprite/vulpix-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vulpix-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/vulpix-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vulpix-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -16,
				correctionX: -10
			},	
		},
		type: [type['fire']],
		movePool: [
			move['ember'], move['quickAttack'], move['smokeScreen'], move['fireSpin'], move['sandAttack']
		],
		base: {
			hp: 38,
			atk: 41,
			def: 40,
			spa: 50,
			spd: 65,
			spe: 65
		},
		exp: 60,
		gold: 8,
		catchRate: 3,
		tm: [ 151, 5, 9, 10, 11, 15, 43, 68, 70, 75, 83, 84, 86, 93, 110, 155],
		egg: 'vulpix',
		evolution: [
			{
				pokemon: 'ninetales',
				condition: {
					item: 'fireStone',
					cost: 3000
				}
			},
		]
	},
	'ninetales': {
		n: 38,
		name: ['NINETALES', 'NINETALES', '九尾'],
		portrait: './assets/images/pokemon/portrait/ninetales.png',
		image: './assets/images/pokemon/image/ninetales.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ninetales.png',
		imageShiny: './assets/images/pokemon/image-shiny/ninetales.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ninetales.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ninetales.png',
			idle: {
				src: './assets/images/pokemon/sprite/ninetales-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ninetales-idle.png',
				size: [560, 320],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/ninetales-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ninetales-attack.png',
				size: [576, 576],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -16,
				correctionX: -5
			},	
		},
		type: [type['fire']],
		movePool: [
			move['flameThrower'], move['fireSpin'], move['mirrorShot'], move['crunch']
		],
		base: {
			hp: 73,
			atk: 76,
			def: 75,
			spa: 81,
			spd: 100,
			spe: 100
		},
		exp: 177,
		gold: 15,
		catchRate: 1,
		tm: [ 151, 5, 9, 10, 11, 15, 23, 34, 40, 43, 67, 68, 69, 70, 75, 83, 84, 85, 86, 93, 94, 110, 126, 
			139, 141, 149, 155, 164, 165, 168 ],
		egg: 'vulpix',
	},
	'jigglypuff': {
		n: 39,
		name: ['JIGGLYPUFF', 'JIGGLYPUFF', '胖丁'],
		portrait: './assets/images/pokemon/portrait/jigglypuff.png',
		image: './assets/images/pokemon/image/jigglypuff.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/jigglypuff.png',
		imageShiny: './assets/images/pokemon/image-shiny/jigglypuff.png',
		sprite: {
			base: './assets/images/pokemon/sprite/jigglypuff.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/jigglypuff.png',
			idle: {
				src: './assets/images/pokemon/sprite/jigglypuff-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jigglypuff-idle.png',
				size: [120, 256],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 4,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/jigglypuff-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jigglypuff-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
		},
		type: [type['normal']],
		movePool: [
			move['pound'], move['rollout'], move['metronome'], move['tackle']
		],
		base: {
			hp: 115,
			atk: 45,
			def: 20,
			spa: 45,
			spd: 25,
			spe: 20
		},
		exp: 95,
		gold: 8,
		catchRate: 2,
		tm: [ 151, 1, 2, 3, 5, 9, 11, 20, 38, 39, 41, 43, 45, 64, 67, 78, 79, 83, 86, 87, 93, 109, 112, 123, 
			150, 159, 162, 173, 177, 179 ],	
		egg: 'igglybuff',
		evolution: [
			{
				pokemon: 'wigglytuff',
				condition: {
					level: 18,
					item: 'moonStone',
					time: 'day',
					cost: 2000
				}
			},
		]
	},
	'wigglytuff': {
		n: 40,
		name: ['WIGGLYTUFF', 'WIGGLYTUFF', '胖可丁'],
		portrait: './assets/images/pokemon/portrait/wigglytuff.png',
		image: './assets/images/pokemon/image/wigglytuff.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wigglytuff.png',
		imageShiny: './assets/images/pokemon/image-shiny/wigglytuff.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wigglytuff.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wigglytuff.png',
			idle: {
				src: './assets/images/pokemon/sprite/wigglytuff-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wigglytuff-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/wigglytuff-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wigglytuff-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},	
		},
		type: [type['normal']],
		movePool: [
			move['hyperVoice'], move['weatherBall'], move['metronome'], move['bounce']
		],
		base: {
			hp: 140,
			atk: 70,
			def: 45,
			spa: 85,
			spd: 50,
			spe: 45
		},
		exp: 196,
		gold: 16,
		catchRate: 1,
		tm: [ 151, 1, 2, 3, 5, 9, 11, 20, 38, 39, 41, 43, 45, 64, 67, 78, 79, 83, 86, 87, 93, 109, 112, 123, 
			150, 159, 162, 173, 177, 179 ],	
		egg: 'igglybuff',
	},
	'zubat': {
		n: 41,
		name: ['ZUBAT', 'ZUBAT', '超音蝠'],
		portrait: './assets/images/pokemon/portrait/zubat.png',
		image: './assets/images/pokemon/image/zubat.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/zubat.png',
		imageShiny: './assets/images/pokemon/image-shiny/zubat.png',
		sprite: {
			base: './assets/images/pokemon/sprite/zubat.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/zubat.png',
			idle: {
				src: './assets/images/pokemon/sprite/zubat-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zubat-idle.png',
				size: [256, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/zubat-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zubat-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -22,
				correctionX: -4
			},	
		},
		type: [type['poison'], type['flying']],
		movePool: [
			move['bite'], move['wingAttack'], move['poisonSting'], move['gust'], move['leechLife']
		],
		base: {
			hp: 40,
			atk: 45,
			def: 35,
			spa: 30,
			spd: 40,
			spe: 55
		},
		exp: 49,
		gold: 2,
		catchRate: 4,
		tm: [ 151,
			5, 10, 12, 24, 26, 28, 53, 59, 63, 70, 96, 98
		],
		egg: 'zubat',
		evolution: [
			{
				pokemon: 'golbat',
				condition: {
					level: 22,
					cost: 1000
				}
			},
		]
	},
	'golbat': {
		n: 42,
		name: ['GOLBAT', 'GOLBAT', '大嘴蝠'],
		portrait: './assets/images/pokemon/portrait/golbat.png',
		image: './assets/images/pokemon/image/golbat.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/golbat.png',
		imageShiny: './assets/images/pokemon/image-shiny/golbat.png',
		sprite: {
			base: './assets/images/pokemon/sprite/golbat.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/golbat.png',
			idle: {
				src: './assets/images/pokemon/sprite/golbat-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/golbat-idle.png',
				size: [160, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -13,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/golbat-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/golbat-attack.png',
				size: [792, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -25,
				correctionX: -3
			},	
		},
		type: [type['poison'], type['flying']],
		movePool: [
			move['airSlash'], move['poisonFang'], move['poisonSting'], move['bite'], move['fellStinger'],
		],
		base: {
			hp: 75,
			atk: 80,
			def: 70,
			spa: 65,
			spd: 75,
			spe: 90
		},
		exp: 159,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 5, 10, 12, 24, 26, 28, 53, 55, 57, 59, 63, 65, 70, 96, 98, 99, 100, 106, 118, 141, 
			143, 144, 146, 148, 161, 169, 170, 171],
		egg: 'zubat',
		evolution: [
			{
				pokemon: 'crobat',
				condition: {
					level: 30,
					spe: 80,
					item: 'razorFang',
					cost: 5000
				}
			},
		]
	},
	'oddish': {
		n: 43,
		name: ['ODDISH', 'ODDISH', '走路草'],
		portrait: './assets/images/pokemon/portrait/oddish.png',
		image: './assets/images/pokemon/image/oddish.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/oddish.png',
		imageShiny: './assets/images/pokemon/image-shiny/oddish.png',
		sprite: {
			base: './assets/images/pokemon/sprite/oddish.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/oddish.png',
			idle: {
				src: './assets/images/pokemon/sprite/oddish-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/oddish-idle.png',
				size: [120, 320],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -3,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/oddish-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/oddish-attack.png',
				size: [1080, 640],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -22,
				correctionX: -2
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['absorb'], move['tackle'], move['poisonSting'], move['razorLeaf']
		],
		base: {
			hp: 45,
			atk: 50,
			def: 55,
			spa: 75,
			spd: 65,
			spe: 30
		},
		exp: 64,
		gold: 3,
		catchRate: 3,
		tm: [ 151, 7, 9, 10, 16, 25, 32, 49, 53, 83, 98, 164, 180],
		egg: 'oddish',
		evolution: [
			{
				pokemon: 'gloom',
				condition: {
					level: 21,
					cost: 1400
				}
			},
		]
	},
	'gloom': {
		n: 44,
		name: ['GLOOM', 'GLOOM', '臭臭花'],
		portrait: './assets/images/pokemon/portrait/gloom.png',
		image: './assets/images/pokemon/image/gloom.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/gloom.png',
		imageShiny: './assets/images/pokemon/image-shiny/gloom.png',
		sprite: {
			base: './assets/images/pokemon/sprite/gloom.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/gloom.png',
			idle: {
				src: './assets/images/pokemon/sprite/gloom-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gloom-idle.png',
				size: [160, 256],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 2,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/gloom-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gloom-attack.png',
				size: [1080, 640],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -20,
				correctionX: -4
			},
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['venoShock'], move['razorLeaf'], move['megaDrain'],
		],
		base: {
			hp: 60,
			atk: 65,
			def: 70,
			spa: 85,
			spd: 75,
			spe: 40
		},
		exp: 138,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 7, 9, 10, 16, 25, 32, 49, 53, 80, 83, 97, 98, 105, 136, 142, 164, 169, 180 ],
		egg: 'oddish',
		evolution: [
			{
				pokemon: 'vileplume',
				condition: {
					level: 26,
					item: 'leafStone',
					cost: 2200
				}
			},
			{
				pokemon: 'bellossom',
				condition: {
					level: 26,
					item: 'sunStone',
					cost: 2200
				}
			},
		]
	},
	'vileplume': {
		n: 45,
		name: ['VILEPLUME', 'VILEPLUME', '霸王花'],
		portrait: './assets/images/pokemon/portrait/vileplume.png',
		image: './assets/images/pokemon/image/vileplume.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/vileplume.png',
		imageShiny: './assets/images/pokemon/image-shiny/vileplume.png',
		sprite: {
			base: './assets/images/pokemon/sprite/vileplume.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/vileplume.png',
			idle: {
				src: './assets/images/pokemon/sprite/vileplume-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vileplume-idle.png',
				size: [384, 320],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: 0,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/vileplume-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vileplume-attack.png',
				size: [1080, 576],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -15,
				correctionX: -6
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['sludgeBomb'], move['tropicalKick'], move['megaDrain'], move['magicalLeaf']
		],
		base: {
			hp: 75,
			atk: 80,
			def: 85,
			spa: 110,
			spd: 90,
			spe: 50
		},
		exp: 221,
		gold: 19,
		catchRate: 0.9,
		tm: [ 151, 7, 9, 10, 16, 25, 27, 32, 49, 53, 60, 78, 80, 83, 97, 98, 105, 112, 115, 126, 128, 
			136, 137, 142, 147, 148, 164, 169, 180 ],
		egg: 'oddish',
	},
	'paras': {
		n: 46,
		name: ['PARAS', 'PARAS', '派拉斯'],
		portrait: './assets/images/pokemon/portrait/paras.png',
		image: './assets/images/pokemon/image/paras.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/paras.png',
		imageShiny: './assets/images/pokemon/image-shiny/paras.png',
		sprite: {
			base: './assets/images/pokemon/sprite/paras.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/paras.png',
			idle: {
				src: './assets/images/pokemon/sprite/paras-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/paras-idle.png',
				size: [96, 192],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 9,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/paras-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/paras-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -14,
				correctionX: -5
			},
		},
		type: [type['bug'], type['grass']],
		movePool: [
			move['scratch'], move['leechLife'], move['bugbit'], move['absorb']
		],
		base: {
			hp: 35,
			atk: 70,
			def: 55,
			spa: 45,
			spd: 55,
			spe: 25
		},
		exp: 57,
		gold: 6,
		catchRate: 3,
		tm: [ 151, 8, 10, 11, 12, 26, 32, 49, 50, 83, 88, 96, 98, 143],
		egg: 'paras',
		evolution: [
			{
				pokemon: 'parasect',
				condition: {
					level: 24,
					cost: 1700
				}
			},
		]
	},
	'parasect': {
		n: 47,
		name: ['PARASECT', 'PARASECT', '派拉斯特'],
		portrait: './assets/images/pokemon/portrait/parasect.png',
		image: './assets/images/pokemon/image/parasect.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/parasect.png',
		imageShiny: './assets/images/pokemon/image-shiny/parasect.png',
		sprite: {
			base: './assets/images/pokemon/sprite/parasect.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/parasect.png',
			idle: {
				src: './assets/images/pokemon/sprite/parasect-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/parasect-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 4,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/parasect-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/parasect-attack.png',
				size: [1040, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: -11
			},	
		},
		type: [type['bug'], type['grass']],
		movePool: [
			move['xScissor'], move['megaDrain'], move['slash'], move['venoShock'],
		],
		base: {
			hp: 60,
			atk: 95,
			def: 80,
			spa: 60,
			spd: 80,
			spe: 30
		},
		exp: 142,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 161, 170, 171, 8, 10, 11, 12, 26, 32, 40, 49, 50, 67, 69, 80, 83, 88, 91, 94, 95, 
			96, 98, 104, 128, 137, 138, 142, 143, 144, 147, 148, 153 ],
		egg: 'paras',
	}, 
	'venonat': {
		n: 48,
		name: ['VENONAT', 'VENONAT', '毛球'],
		portrait: './assets/images/pokemon/portrait/venonat.png',
		image: './assets/images/pokemon/image/venonat.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/venonat.png',
		imageShiny: './assets/images/pokemon/image-shiny/venonat.png',
		sprite: {
			base: './assets/images/pokemon/sprite/venonat.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/venonat.png',
			idle: {
				src: './assets/images/pokemon/sprite/venonat-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/venonat-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/venonat-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/venonat-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -24,
				correctionX: -7
			},	
		},
		type: [type['bug'], type['poison']],
		movePool: [
			move['confusion'], move['poisonSting'], move['tackle'], move['sandAttack'],
		],
		base: {
			hp: 60,
			atk: 55,
			def: 50,
			spa: 40,
			spd: 55,
			spe: 45
		},
		exp: 61,
		gold: 8,
		catchRate: 2,
		tm: [ 151, 2, 10, 11, 12, 20, 26, 32, 33, 49, 50, 53, 64, 87, 98, 100 ],
		egg: 'venonat',
		evolution: [
			{
				pokemon: 'venomoth',
				condition: {
					level: 31,
					cost: 2500
				}
			},
		]
	},
	'venomoth': {
		n: 49,
		name: ['VENOMOTH', 'VENOMOTH', '摩鲁蛾'],
		portrait: './assets/images/pokemon/portrait/venomoth.png',
		image: './assets/images/pokemon/image/venomoth.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/venomoth.png',
		imageShiny: './assets/images/pokemon/image-shiny/venomoth.png',
		sprite: {
			base: './assets/images/pokemon/sprite/venomoth.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/venomoth.png',
			idle: {
				src: './assets/images/pokemon/sprite/venomoth-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/venomoth-idle.png',
				size: [256, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -7,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/venomoth-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/venomoth-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -19,
				correctionX: -6
			},	
		},
		type: [type['bug'], type['poison']],
		movePool: [
			move['silverWind'], move['signalBeam'], move['poisonFang'], move['psybeam'], move['poisonSting'], move['gust'],
		],
		base: {
			hp: 70,
			atk: 65,
			def: 60,
			spa: 90,
			spd: 75,
			spe: 90
		},
		exp: 158,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 171, 2, 3, 10, 11, 12, 20, 24, 26, 32, 33, 49, 50, 53, 55, 57, 59, 62, 64, 80, 84, 
			90, 92, 96, 98, 99, 100, 106, 130, 132, 142, 158 ],
		egg: 'venonat',
	},
	'diglett': {
		n: 50,
		name: ['DIGLETT', 'DIGLETT', '地鼠'],
		portrait: './assets/images/pokemon/portrait/diglett.png',
		image: './assets/images/pokemon/image/diglett.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/diglett.png',
		imageShiny: './assets/images/pokemon/image-shiny/diglett.png',
		sprite: {
			base: './assets/images/pokemon/sprite/diglett.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/diglett.png',
			idle: {
				src: './assets/images/pokemon/sprite/diglett-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/diglett-idle.png',
				size: [48, 192],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 8,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/diglett-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/diglett-attack.png',
				size: [576, 448],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -9,
				correctionX: -3
			},
		},
		type: [type['ground']],
		movePool: [
			move['mudSlap'], move['scratch'], move['sandAttack'], move['sandTomb'], move['accelerock']
		],
		base: {
			hp: 10,
			atk: 55,
			def: 25,
			spa: 35,
			spd: 45,
			spe: 95
		},
		exp: 53,
		gold: 6,
		catchRate: 3,
		tm: [ 151, 164, 5, 9, 11, 40, 60, 70, 88, 93, 114, 149, 161, 179 ],
		egg: 'diglett',
		evolution: [
			{
				pokemon: 'dugtrio',
				condition: {
					level: 26,
					cost: 3000
				}
			},
		]
	},
	'dugtrio': {
		n: 51,
		name: ['DUGTRIO', 'DUGTRIO', '三地鼠'],
		portrait: './assets/images/pokemon/portrait/dugtrio.png',
		image: './assets/images/pokemon/image/dugtrio.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/dugtrio.png',
		imageShiny: './assets/images/pokemon/image-shiny/dugtrio.png',
		sprite: {
			base: './assets/images/pokemon/sprite/dugtrio.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/dugtrio.png',
			idle: {
				src: './assets/images/pokemon/sprite/dugtrio-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dugtrio-idle.png',
				size: [64, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 5,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/dugtrio-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dugtrio-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -14,
				correctionX: -5
			},
		},
		type: [type['ground']],
		movePool: [
			 move['rockSlide'], move['slash'], move['earthPower'], move['quickAttack'],
		],
		base: {
			hp: 35,
			atk: 100,
			def: 50,
			spa: 50,
			spd: 70,
			spe: 120
		},
		exp: 149,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 164, 5, 9, 11, 23, 40, 60, 69, 70, 88, 93, 114, 124, 126, 128, 138, 149, 161, 171, 179 ],
		egg: 'diglett',
	},
	'meowth': {
		n: 52,
		name: ['MEOWTH', 'MEOWTH', '喵喵'],
		portrait: './assets/images/pokemon/portrait/meowth.png',
		image: './assets/images/pokemon/image/meowth.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/meowth.png',
		imageShiny: './assets/images/pokemon/image-shiny/meowth.png',
		sprite: {
			base: './assets/images/pokemon/sprite/meowth.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/meowth.png',
			idle: {
				src: './assets/images/pokemon/sprite/meowth-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/meowth-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 2,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/meowth-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/meowth-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -5
			},	
		},
		type: [type['normal']],
		movePool: [
			move['scratch'], move['bite'], move['fakeOut'], move['payDay'], move['slash'],
		],
		base: {
			hp: 40,
			atk: 45,
			def: 35,
			spa: 40,
			spd: 40,
			spe: 90
		},
		exp: 58,
		gold: 8,
		catchRate: 3,
		tm: [ 151, 1, 5, 9, 10, 11, 13, 18, 28, 41, 45, 49, 68, 70, 83, 88, 93, 138, 139, 146, 149, 158, 159 ],
		egg: 'meowth',
		evolution: [
			{
				pokemon: 'persian',
				condition: {
					level: 28,
					cost: 3000
				}
			},
		]
	},
	'persian': {
		n: 53,
		name: ['PERSIAN', 'PERSIAN', '猫老大'],
		portrait: './assets/images/pokemon/portrait/persian.png',
		image: './assets/images/pokemon/image/persian.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/persian.png',
		imageShiny: './assets/images/pokemon/image-shiny/persian.png',
		sprite: {
			base: './assets/images/pokemon/sprite/persian.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/persian.png',
			idle: {
				src: './assets/images/pokemon/sprite/persian-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/persian-idle.png',
				size: [32, 384],
				position: 6,
				framesX: 1,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/persian-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/persian-attack.png',
				size: [1024, 640],
				position: 6,
				framesX: 16,
				framesY: 8,
				correctionY: -21,
				correctionX: -6
			},	
		},
		type: [type['normal']],
		movePool: [
			move['slash'], move['bite'], move['fakeOut'], move['payDay'], move['powerGem'],
		],
		base: {
			hp: 65,
			atk: 70,
			def: 60,
			spa: 65,
			spd: 65,
			spe: 115
		},
		exp: 154,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 177, 179, 1, 5, 9, 10, 11, 13, 18, 19, 28, 41, 45, 49, 67, 68, 70, 76, 81, 83, 88, 
			93, 95, 100, 103, 118, 133, 138, 139, 141, 143, 144, 146, 149, 158, 159 ],
		egg: 'meowth',
	},
	'psyduck': {
		n: 54,
		name: ['PSYDUCK', 'PSYDUCK', '可达鸭'],
		portrait: './assets/images/pokemon/portrait/psyduck.png',
		image: './assets/images/pokemon/image/psyduck.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/psyduck.png',
		imageShiny: './assets/images/pokemon/image-shiny/psyduck.png',
		sprite: {
			base: './assets/images/pokemon/sprite/psyduck.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/psyduck.png',
			idle: {
				src: './assets/images/pokemon/sprite/psyduck-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/psyduck-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/psyduck-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/psyduck-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -16,
				correctionX: -6
			},	
		},
		type: [type['water']],
		movePool: [
			move['waterGun'], move['confusion'], move['pound'], move['bubble'],
		],
		base: {
			hp: 50,
			atk: 52,
			def: 48,
			spa: 65,
			spd: 50,
			spe: 55
		},
		exp: 64,
		gold: 8,
		catchRate: 3,
		tm: [ 151, 2, 9, 10, 11, 17, 20, 21, 64, 77, 83, 152, 159],
		egg: 'psyduck',
		evolution: [
			{
				pokemon: 'golduck',
				condition: {
					level: 33,
					move: 'psychic',
					cost: 2000
				}
			},
		]
	},
	'golduck': {
		n: 55,
		name: ['GOLDUCK', 'GOLDUCK', '哥达鸭'],
		portrait: './assets/images/pokemon/portrait/golduck.png',
		image: './assets/images/pokemon/image/golduck.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/golduck.png',
		imageShiny: './assets/images/pokemon/image-shiny/golduck.png',
		sprite: {
			base: './assets/images/pokemon/sprite/golduck.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/golduck.png',
			idle: {
				src: './assets/images/pokemon/sprite/golduck-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/golduck-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/golduck-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/golduck-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: -8
			},	
		},
		type: [type['water']],
		movePool: [
			move['hydroPump'], move['psychic'], move['aquaTail'], move['weatherBall'], move['psybeam'],
		],
		base: {
			hp: 80,
			atk: 82,
			def: 78,
			spa: 95,
			spd: 80,
			spe: 85
		},
		exp: 175,
		gold: 15,
		catchRate: 1,
		tm: [ 151, 174, 2, 9, 10, 11, 17, 20, 21, 29, 37, 47, 56, 64, 77, 83, 90, 129, 133, 138, 152, 158, 
			159, 162, 163, 168, 174],
		egg: 'psyduck',
	},
	'mankey': {
		n: 56,
		name: ['MANKEY', 'MANKEY', '猴怪'],
		portrait: './assets/images/pokemon/portrait/mankey.png',
		image: './assets/images/pokemon/image/mankey.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/mankey.png',
		imageShiny: './assets/images/pokemon/image-shiny/mankey.png',
		sprite: {
			base: './assets/images/pokemon/sprite/mankey.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/mankey.png',
			idle: {
				src: './assets/images/pokemon/sprite/mankey-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mankey-idle.png',
				size: [160, 448],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -10,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/mankey-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mankey-attack.png',
				size: [960, 640],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -20,
				correctionX: -2
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['lowKick'], move['karateChop'], move['pound'], move['scratch'],
		],
		base: {
			hp: 40,
			atk: 80,
			def: 35,
			spa: 35,
			spd: 45,
			spe: 70
		},
		exp: 61,
		gold: 8,
		catchRate: 2,
		tm: [ 151, 1, 5, 9, 10, 11, 22, 36, 39, 40, 43, 46, 61, 70, 83, 119, 125, 156, 161 ],
		egg: 'mankey',
		evolution: [
			{
				pokemon: 'primeape',
				condition: {
					level: 28,
					cost: 1800
				}
			},
		]
	},
	'primeape': {
		n: 57,
		name: ['PRIMEAPE', 'PRIMEAPE', '火爆猴'],
		portrait: './assets/images/pokemon/portrait/primeape.png',
		image: './assets/images/pokemon/image/primeape.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/primeape.png',
		imageShiny: './assets/images/pokemon/image-shiny/primeape.png',
		sprite: {
			base: './assets/images/pokemon/sprite/primeape.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/primeape.png',
			idle: {
				src: './assets/images/pokemon/sprite/primeape-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/primeape-idle.png',
				size: [256, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -8,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/primeape-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/primeape-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['crossChop'], move['lowKick'], move['karateChop'], move['pursuit'],
		],
		base: {
			hp: 65,
			atk: 105,
			def: 60,
			spa: 60,
			spd: 70,
			spe: 95
		},
		exp: 159,
		gold: 12,
		catchRate: 1,
		tm: [ 151, 173, 1, 5, 9, 10, 11, 22, 36, 39, 40, 43, 46, 52, 54, 57, 61, 70, 83, 119, 125, 156, 161, 
			177, 175, 149 ],
		egg: 'mankey',
	},
	'growlithe': {
		n: 58,
		name: ['GROWLITHE', 'GROWLITHE', '卡蒂狗'],
		portrait: './assets/images/pokemon/portrait/growlithe.png',
		image: './assets/images/pokemon/image/growlithe.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/growlithe.png',
		imageShiny: './assets/images/pokemon/image-shiny/growlithe.png',
		sprite: {
			base: './assets/images/pokemon/sprite/growlithe.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/growlithe.png',
			idle: {
				src: './assets/images/pokemon/sprite/growlithe-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/growlithe-idle.png',
				size: [120, 384],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: -6,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/growlithe-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/growlithe-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
		},
		type: [type['fire']],
		movePool: [
			move['bite'], move['ember'], move['flameWheel'], move['tackle'], move['pursuit'],
		],
		base: {
			hp: 55,
			atk: 70,
			def: 45,
			spa: 70,
			spd: 50,
			spe: 60
		},
		exp: 67,
		gold: 10,
		catchRate: 2,
		tm: [ 151, 2, 4, 5, 9, 10, 13, 15, 43, 68, 70, 75, 83, 86, 110, 114, 139, 149, 155 ],
		egg: 'growlithe',
		evolution: [
			{
				pokemon: 'arcanine',
				condition: {
					item: 'fireStone',
					cost: 3000
				}
			},
		]
	},
	'arcanine': {
		n: 59,
		name: ['ARCANINE', 'ARCANINE', '风速狗'],
		portrait: './assets/images/pokemon/portrait/arcanine.png',
		image: './assets/images/pokemon/image/arcanine.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/arcanine.png',
		imageShiny: './assets/images/pokemon/image-shiny/arcanine.png',
		sprite: {
			base: './assets/images/pokemon/sprite/arcanine.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/arcanine.png',
			idle: {
				src: './assets/images/pokemon/sprite/arcanine-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/arcanine-idle.png',
				size: [40, 384],
				position: 6,
				framesX: 1,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/arcanine-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/arcanine-attack.png',
				size: [936, 704],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -25,
				correctionX: 0
			},	
		},
		type: [type['fire']],
		movePool: [
			move['flameThrower'], move['extremeSpeed'], move['wildCharge'], move['flameWheel'], move['crunch'], move['pursuit'],
		],
		base: {
			hp: 90,
			atk: 110,
			def: 80,
			spa: 95,
			spd: 80,
			spe: 95
		},
		exp: 208,
		gold: 15,
		catchRate: 0.7,
		tm: [ 151, 165, 175, 2, 4, 5, 9, 10, 13, 15, 23, 30, 40, 43, 67, 68, 69, 70, 75, 76, 83, 85, 86, 
			89, 94, 100, 103, 108, 110, 114, 118, 126, 128, 133, 138, 139, 140, 141, 146, 149, 155],
		egg: 'growlithe',
	},
	'poliwag': {
		n: 60,
		name: ['POLIWAG', 'POLIWAG', '蚊香蝌蚪'],
		portrait: './assets/images/pokemon/portrait/poliwag.png',
		image: './assets/images/pokemon/image/poliwag.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/poliwag.png',
		imageShiny: './assets/images/pokemon/image-shiny/poliwag.png',
		sprite: {
			base: './assets/images/pokemon/sprite/poliwag.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/poliwag.png',
			idle: {
				src: './assets/images/pokemon/sprite/poliwag-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poliwag-idle.png',
				size: [320, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/poliwag-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poliwag-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},	
		},
		type: [type['water']],
		movePool: [
			move['waterGun'], move['pound'], move['bubble'],
		],
		base: {
			hp: 40,
			atk: 50,
			def: 40,
			spa: 40,
			spd: 40,
			spe: 90
		},
		exp: 60,
		gold: 6,
		catchRate: 2,
		tm: [ 151, 8, 9, 10, 17, 21, 83, 93, 159 ],
		egg: 'poliwag',
		evolution: [
			{
				pokemon: 'poliwhirl',
				condition: {
					level: 25,
					cost: 900
				}
			},
		]
	},
	'poliwhirl': {
		n: 61,
		name: ['POLIWHIRL', 'POLIWHIRL', '蚊香君'],
		portrait: './assets/images/pokemon/portrait/poliwhirl.png',
		image: './assets/images/pokemon/image/poliwhirl.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/poliwhirl.png',
		imageShiny: './assets/images/pokemon/image-shiny/poliwhirl.png',
		sprite: {
			base: './assets/images/pokemon/sprite/poliwhirl.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/poliwhirl.png',
			idle: {
				src: './assets/images/pokemon/sprite/poliwhirl-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poliwhirl-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -3,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/poliwhirl-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poliwhirl-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -18,
				correctionX: -4
			},	
		},
		type: [type['water']],
		movePool: [
			move['bubbleBeam'], move['lowSweep'], move['lowKick'], move['aquaJet']
		],
		base: {
			hp: 65,
			atk: 65,
			def: 65,
			spa: 50,
			spd: 50,
			spe: 90
		},
		exp: 135,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 8, 9, 10, 17, 21, 22, 36, 39, 46, 47, 77, 83, 93, 129, 159 ],
		egg: 'poliwag',
		evolution: [
			{
				pokemon: 'poliwrath',
				condition: {
					level: 31,
					item: 'waterStone',
					cost: 3350
				}
			},
			{
				pokemon: 'politoed',
				condition: {
					level: 35,
					item: 'kingsRock',
					cost: 2600
				}
			},
		]
	},
	'poliwrath': {
		n: 62, 
		name: ['POLIWRATH', 'POLIWRATH', '蚊香泳士'],
		portrait: './assets/images/pokemon/portrait/poliwrath.png',
		image: './assets/images/pokemon/image/poliwrath.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/poliwrath.png',
		imageShiny: './assets/images/pokemon/image-shiny/poliwrath.png',
		sprite: {
			base: './assets/images/pokemon/sprite/poliwrath.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/poliwrath.png',
			idle: {
				src: './assets/images/pokemon/sprite/poliwrath-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poliwrath-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/poliwrath-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poliwrath-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},	
		},
		type: [type['water'], type['fighting']],
		movePool: [
			move['waterGun'], move['bubbleBeam'], move['lowSweep'], move['surf'], move['karateChop'],
		],
		base: {
			hp: 90,
			atk: 95,
			def: 95,
			spa: 70,
			spd: 90,
			spe: 70
		},
		exp: 255,
		gold: 15,
		catchRate: 0.7,
		tm: [ 151, 173, 1, 8, 9, 10, 17, 21, 22, 35, 36, 38, 39, 46, 47, 52, 54, 57, 61, 67, 77, 83, 91,
			93, 104, 109, 116, 119, 125, 129, 156, 159, 161, 174],
		egg: 'poliwag',
	},
	'abra': {
		n: 63,
		name: ['ABRA', 'ABRA', '凯西'],
		portrait: './assets/images/pokemon/portrait/abra.png',
		image: './assets/images/pokemon/image/abra.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/abra.png',
		imageShiny: './assets/images/pokemon/image-shiny/abra.png',
		sprite: {
			base: './assets/images/pokemon/sprite/abra.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/abra.png',
			idle: {
				src: './assets/images/pokemon/sprite/abra-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/abra-idle.png',
				size: [144, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -8,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/abra-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/abra-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -22,
				correctionX: -6
			},	
		},
		type: [type['psychic']],
		movePool: [
			move['pound'], move['confusion']
		],
		base: {
			hp: 25,
			atk: 20,
			def: 15,
			spa: 105,
			spd: 55,
			spe: 90
		},
		exp: 62,
		gold: 3,
		catchRate: 4,
		tm: [ 151, 3, 9, 10, 11, 20, 31, 41, 51, 68, 70, 83 ],
		egg: 'abra',
		evolution: [
			{
				pokemon: 'kadabra',
				condition: {
					level: 16,
					cost: 800
				}
			},
		]
	},
	'kadabra': {
		n: 64,
		name: ['KADABRA', 'KADABRA', '勇基拉'],
		portrait: './assets/images/pokemon/portrait/kadabra.png',
		image: './assets/images/pokemon/image/kadabra.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kadabra.png',
		imageShiny: './assets/images/pokemon/image-shiny/kadabra.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kadabra.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kadabra.png',
			idle: {
				src: './assets/images/pokemon/sprite/kadabra-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kadabra-idle.png',
				size: [360, 448],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/kadabra-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kadabra-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -18,
				correctionX: -4
			},	
		},
		type: [type['psychic']],
		movePool: [
			move['confusion'], move['psybeam']
		],
		base: {
			hp: 40,
			atk: 35,
			def: 30,
			spa: 120,
			spd: 70,
			spe: 105
		},
		exp: 140,
		gold: 9,
		catchRate: 1,
		tm: [ 151, 3, 9, 10, 11, 20, 31, 41, 51, 64, 68, 70, 78, 79, 81, 83, 86, 90, 101, 103, 121, 
			123, 128, 130, 133, 136, 138, 158, 168],
		egg: 'abra',
		evolution: [
			{
				pokemon: 'alakazam',
				condition: {
					level: 36,
					spa: 110,
					move: 'psychic',
					cost: 10000
				}
			},
		]
	},
	'alakazam': {
		n: 65,
		name: ['ALAKAZAM', 'ALAKAZAM', '胡地'],
		portrait: './assets/images/pokemon/portrait/alakazam.png',
		image: './assets/images/pokemon/image/alakazam.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/alakazam.png',
		imageShiny: './assets/images/pokemon/image-shiny/alakazam.png',
		sprite: {
			base: './assets/images/pokemon/sprite/alakazam.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/alakazam.png',
			idle: {
				src: './assets/images/pokemon/sprite/alakazam-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/alakazam-idle.png',
				size: [256, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -6,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/alakazam-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/alakazam-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
		},
		type: [type['psychic']],
		movePool: [
			move['psybeam'], move['psychic'], move['energyBall'], move['shockWave'], move['confusion']
		],
		base: {
			hp: 55,
			atk: 50,
			def: 45,
			spa: 135,
			spd: 95,
			spe: 120
		},
		exp: 250,
		gold: 30,
		catchRate: 0.6,
		tm: [ 151, 3, 9, 10, 11, 20, 31, 41, 48, 51, 64, 68, 70, 78, 79, 81, 83, 85, 86, 90, 101, 103, 
			121, 123, 128, 130, 133, 136, 138, 158, 162, 168],
		egg: 'abra',
	},
	'machop': {
		n: 66,
		name: ['MACHOP', 'MACHOP', '腕力'],
		portrait: './assets/images/pokemon/portrait/machop.png',
		image: './assets/images/pokemon/image/machop.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/machop.png',
		imageShiny: './assets/images/pokemon/image-shiny/machop.png',
		sprite: {
			base: './assets/images/pokemon/sprite/machop.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/machop.png',
			idle: {
				src: './assets/images/pokemon/sprite/machop-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/machop-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -3,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/machop-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/machop-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['karateChop'], move['lowKick'], move['tackle'], move['pound'], move['rockSmash']
		],
		base: {
			hp: 70,
			atk: 80,
			def: 50,
			spa: 35,
			spd: 35,
			spe: 35
		},
		exp: 61,
		gold: 4,
		catchRate: 2,
		tm: [ 151, 1, 9, 10, 22, 36, 46, 70, 83, 161 ],
		egg: 'machop',
		evolution: [
			{
				pokemon: 'machoke',
				condition: {
					level: 28,
					cost: 1800
				}
			},
		]
	},
	'machoke': {
		n: 67,
		name: ['MACHOKE', 'MACHOKE', '豪力'],
		portrait: './assets/images/pokemon/portrait/machoke.png',
		image: './assets/images/pokemon/image/machoke.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/machoke.png',
		imageShiny: './assets/images/pokemon/image-shiny/machoke.png',
		sprite: {
			base: './assets/images/pokemon/sprite/machoke.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/machoke.png',
			idle: {
				src: './assets/images/pokemon/sprite/machoke-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/machoke-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/machoke-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/machoke-attack.png',
				size: [576, 640],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['karateChop'], move['lowSweep'], move['bodySlam'], move['rockSmash']
		],
		base: {
			hp: 80,
			atk: 100,
			def: 70,
			spa: 50,
			spd: 60,
			spe: 45
		},
		exp: 142,
		gold: 15,
		catchRate: 1,
		tm: [ 151, 161, 1, 9, 10, 22, 35, 36, 39, 40, 46, 52, 61, 70, 83, 109, 116, 119, 125, 146, 149, 156],
		egg: 'machop',
		evolution: [
			{
				pokemon: 'machamp',
				condition: {
					level: 40,
					atk: 100,
					move: 'fighting',
					cost: 4500
				}
			},
		]
	},
	'machamp': {
		n: 68,
		name: ['MACHAMP', 'MACHAMP', '怪力'],
		portrait: './assets/images/pokemon/portrait/machamp.png',
		image: './assets/images/pokemon/image/machamp.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/machamp.png',
		imageShiny: './assets/images/pokemon/image-shiny/machamp.png',
		sprite: {
			base: './assets/images/pokemon/sprite/machamp.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/machamp.png',
			idle: {
				src: './assets/images/pokemon/sprite/machamp-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/machamp-idle.png',
				size: [400, 384],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -5,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/machamp-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/machamp-attack.png',
				size: [792, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -25,
				correctionX: -2
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['karateChop'], move['bulletPunch'], move['crossChop'], move['thunderPunch'],
		],
		base: {
			hp: 90,
			atk: 130,
			def: 80,
			spa: 65,
			spd: 85,
			spe: 55
		},
		exp: 253,
		gold: 40,
		catchRate: 0.6,
		tm: [ 151, 161, 173, 1, 9, 10, 22, 35, 36, 38, 39, 40, 46, 52, 61, 70, 71, 83, 109, 116, 119, 125, 
			146, 149, 156 ],
		egg: 'machop',
	},
	'bellsprout': {
		n: 69,
		name: ['BELLSPROUT', 'BELLSPROUT', '喇叭芽'],
		portrait: './assets/images/pokemon/portrait/bellsprout.png',
		image: './assets/images/pokemon/image/bellsprout.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/bellsprout.png',
		imageShiny: './assets/images/pokemon/image-shiny/bellsprout.png',
		sprite: {
			base: './assets/images/pokemon/sprite/bellsprout.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/bellsprout.png',
			idle: {
				src: './assets/images/pokemon/sprite/bellsprout-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/bellsprout-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/bellsprout-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/bellsprout-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['vineWhip'], move['acid'], move['razorLeaf'], move['absorb'], move['tackle']
		],
		base: {
			hp: 50,
			atk: 75,
			def: 35,
			spa: 70,
			spd: 30,
			spe: 40
		},
		exp: 60,
		gold: 5,
		catchRate: 2,
		tm: [ 151, 7, 10, 16, 25, 28, 32, 49, 51, 53, 83, 96, 98, 117],
		egg: 'bellsprout',
		evolution: [
			{
				pokemon: 'weepinbell',
				condition: {
					level: 21,
					cost: 1200
				}
			},
		]
	},
	'weepinbell': {
		n: 70,
		name: ['WEEPINBELL', 'WEEPINBELL', '口呆花'],
		portrait: './assets/images/pokemon/portrait/weepinbell.png',
		image: './assets/images/pokemon/image/weepinbell.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/weepinbell.png',
		imageShiny: './assets/images/pokemon/image-shiny/weepinbell.png',
		sprite: {
			base: './assets/images/pokemon/sprite/weepinbell.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/weepinbell.png',
			idle: {
				src: './assets/images/pokemon/sprite/weepinbell-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/weepinbell-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/weepinbell-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/weepinbell-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: -4
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['vineWhip'], move['poisonFang'], move['absorb'], move['razorLeaf']
		],
		base: {
			hp: 65,
			atk: 90,
			def: 50,
			spa: 85,
			spd: 45,
			spe: 55
		},
		exp: 137,
		gold: 9,
		catchRate: 1,
		tm: [ 151, 7, 10, 16, 25, 28, 32, 40, 42, 49, 51, 53, 78, 80, 83, 96, 98, 100, 105, 112, 117, 136, 157 ],
		egg: 'bellsprout',
		evolution: [
			{
				pokemon: 'victreebel',
				condition: {
					level: 36,
					item: 'leafStone',
					cost: 3100
				}
			},
		]
	},
	'victreebel': {
		n: 71,
		name: ['VICTREEBEL', 'VICTREEBEL', '大食花'],
		portrait: './assets/images/pokemon/portrait/victreebel.png',
		image: './assets/images/pokemon/image/victreebel.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/victreebel.png',
		imageShiny: './assets/images/pokemon/image-shiny/victreebel.png',
		sprite: {
			base: './assets/images/pokemon/sprite/victreebel.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/victreebel.png',
			idle: {
				src: './assets/images/pokemon/sprite/victreebel-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/victreebel-idle.png',
				size: [288, 448],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -12,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/victreebel-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/victreebel-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -4
			},	
		},
		type: [type['grass'], type['poison']],
		movePool: [
			move['razorLeaf'], move['acid'], move['gigaDrain'], move['sludgeBomb'], move['megaDrain']
		],
		base: {
			hp: 80,
			atk: 105,
			def: 65,
			spa: 100,
			spd: 70,
			spe: 70
		},
		exp: 221,
		gold: 12,
		catchRate: 0.7,
		tm: [ 151, 7, 10, 16, 25, 27, 28, 32, 40, 42, 49, 51, 53, 60, 67, 69, 78, 80, 83, 91, 95, 96, 98, 
			100, 103, 105, 112, 117, 126, 128, 136, 137, 142, 144, 147, 148, 150, 157, 176, 169, 
		],
		egg: 'bellsprout',
	},
	'tentacool': {
		n: 72,
		name: ['TENTACOOL', 'TENTACOOL', '玛瑙水母'],
		portrait: './assets/images/pokemon/portrait/tentacool.png',
		image: './assets/images/pokemon/image/tentacool.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/tentacool.png',
		imageShiny: './assets/images/pokemon/image-shiny/tentacool.png',
		sprite: {
			base: './assets/images/pokemon/sprite/tentacool.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/tentacool.png',
			idle: {
				src: './assets/images/pokemon/sprite/tentacool-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tentacool-idle.png',
				size: [198, 384],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -8,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/tentacool-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tentacool-attack.png',
				size: [896, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -16,
				correctionX: -3
			},	
		},
		type: [type['water'], type['poison']],
		movePool: [
			move['acid'], move['bubbleBeam'], move['wrap'], move['poisonSting'], move['bubble']
		],
		base: {
			hp: 40,
			atk: 40,
			def: 35,
			spa: 50,
			spd: 100,
			spe: 70
		},
		exp: 67,
		gold: 5,
		catchRate: 3,
		tm: [ 151, 7, 8, 10, 16, 17, 21, 32, 53, 77, 83, 93, 97, 117, 129, 98, 159 ],
		egg: 'tentacool',
		evolution: [
			{
				pokemon: 'tentacruel',
				condition: {
					level: 30,
					move: 'poison',
					cost: 2700
				}
			},
		]
	},
	'tentacruel': {
		n: 73,
		name: ['TENTACRUEL', 'TENTACRUEL', '毒刺水母'],
		portrait: './assets/images/pokemon/portrait/tentacruel.png',
		image: './assets/images/pokemon/image/tentacruel.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/tentacruel.png',
		imageShiny: './assets/images/pokemon/image-shiny/tentacruel.png',
		sprite: {
			base: './assets/images/pokemon/sprite/tentacruel.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/tentacruel.png',
			idle: {
				src: './assets/images/pokemon/sprite/tentacruel-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tentacruel-idle.png',
				size: [224, 384],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -10,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/tentacruel-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tentacruel-attack.png',
				size: [896, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -17,
				correctionX: -5
			},	
		},
		type: [type['water'], type['poison']],
		movePool: [
			move['acid'], move['hydroPump'], move['wrap'], move['sludgeBomb'], move['bubbleBeam'], move['waterGun']
		],
		base: {
			hp: 80,
			atk: 70,
			def: 65,
			spa: 80,
			spd: 120,
			spe: 100
		},
		exp: 180,
		gold: 16,
		catchRate: 1,
		tm: [ 151, 7, 8, 10, 16, 17, 21, 32, 37, 47, 48, 53, 77, 80, 83, 91, 93, 97, 113, 117, 129, 137, 142, 
			98, 147, 148, 159, 169, 170],
		egg: 'tentacool',
	},
	'geodude': {
		n: 74,
		name: ['GEODUDE', 'GEODUDE', '小拳石'],
		portrait: './assets/images/pokemon/portrait/geodude.png',
		image: './assets/images/pokemon/image/geodude.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/geodude.png',
		imageShiny: './assets/images/pokemon/image-shiny/geodude.png',
		sprite: {
			base: './assets/images/pokemon/sprite/geodude.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/geodude.png',
			idle: {
				src: './assets/images/pokemon/sprite/geodude-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/geodude-idle.png',
				size: [128, 192],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 6,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/geodude-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/geodude-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -22,
				correctionX: -3
			},	
		},
		type: [type['rock'], type['ground']],
		movePool: [
			move['rockThrow'], move['tackle'], move['magnitude'], move['mudSlap'], move['sandAttack'], move['rollout'], move['sandTomb']
		],
		base: {
			hp: 40,
			atk: 80,
			def: 100,
			spa: 30,
			spd: 30,
			spe: 20
		},
		exp: 60,
		gold: 3,
		catchRate: 4,
		tm: [ 151, 164, 179, 2, 9, 10, 40, 83, 87, 93, 94, 114, 150],
		egg: 'geodude',
		evolution: [
			{
				pokemon: 'graveler',
				condition: {
					level: 25,
					cost: 1900
				}
			},
		]
	},
	'graveler': {
		n: 75,
		name: ['GRAVELER', 'GRAVELER', '隆隆石'],
		portrait: './assets/images/pokemon/portrait/graveler.png',
		image: './assets/images/pokemon/image/graveler.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/graveler.png',
		imageShiny: './assets/images/pokemon/image-shiny/graveler.png',
		sprite: {
			base: './assets/images/pokemon/sprite/graveler.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/graveler.png',
			idle: {
				src: './assets/images/pokemon/sprite/graveler-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/graveler-idle.png',
				size: [560, 384],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -5,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/graveler-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/graveler-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},	
		},
		type: [type['rock'], type['ground']],
		movePool: [
			move['rockThrow'], move['magnitude'], move['accelerock'], move['bodySlam'], move['rollout']
		],
		base: {
			hp: 55,
			atk: 95,
			def: 115,
			spa: 45,
			spd: 45,
			spe: 35
		},
		exp: 137,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 161, 164, 179, 2, 9, 10, 23, 40, 69, 87, 93, 94, 114, 126, 128, 150 ],
		egg: 'geodude',
		evolution: [
			{
				pokemon: 'golem',
				condition: {
					level: 40,
					def: 120,
					move: 'rock',
					cost: 3850
				}
			},
		]
	},
	'golem': {
		n: 76,
		name: ['GOLEM', 'GOLEM', '隆隆岩'],
		portrait: './assets/images/pokemon/portrait/golem.png',
		image: './assets/images/pokemon/image/golem.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/golem.png',
		imageShiny: './assets/images/pokemon/image-shiny/golem.png',
		sprite: {
			base: './assets/images/pokemon/sprite/golem.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/golem.png',
			idle: {
				src: './assets/images/pokemon/sprite/golem-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/golem-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/golem-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/golem-attack.png',
				size: [1080, 640],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -22,
				correctionX: 0
			},	
		},
		type: [type['rock'], type['ground']],
		movePool: [
			move['earthquake'], move['rockSlide'], move['rockThrow'], move['bodySlam'], move['rollout']
		],
		base: {
			hp: 80,
			atk: 120,
			def: 130,
			spa: 55,
			spd: 65,
			spe: 45
		},
		exp: 223,
		gold: 28,
		catchRate: 0.6,
		tm: [ 151, 161, 164, 165, 179, 2, 9, 10, 23, 30, 40, 61, 67, 69, 71, 85, 86, 87, 88, 93, 94, 
			108, 113, 114, 119, 125, 126, 128, 131, 150],
		egg: 'geodude',
	},
	'ponyta': {
		n: 77,
		name: ['PONYTA', 'PONYTA', '小火马'],
		portrait: './assets/images/pokemon/portrait/ponyta.png',
		image: './assets/images/pokemon/image/ponyta.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ponyta.png',
		imageShiny: './assets/images/pokemon/image-shiny/ponyta.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ponyta.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ponyta.png',
			idle: {
				src: './assets/images/pokemon/sprite/ponyta-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ponyta-idle.png',
				size: [448, 320],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -1,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/ponyta-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ponyta-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},	
		},
		type: [type['fire']],
		movePool: [
			move['stomp'], move['flameWheel'], move['quickAttack'], move['ember']
		],
		base: {
			hp: 50,
			atk: 85,
			def: 55,
			spa: 65,
			spd: 65,
			spe: 90
		},
		exp: 82,
		gold: 4,
		catchRate: 3,
		tm: [ 151, 4, 5, 9, 10, 13, 18, 22, 40, 41, 43, 45, 51, 67, 68, 70, 75, 83, 86, 110, 155 ],
		egg: 'ponyta',
		evolution: [
			{
				pokemon: 'rapidash',
				condition: {
					level: 18,
					item: 'fireStone',
					cost: 3000
				}
			},
		]
	},
	'rapidash': {
		n: 78,
		name: ['RAPIDASH', 'RAPIDASH', '烈焰马'],
		portrait: './assets/images/pokemon/portrait/rapidash.png',
		image: './assets/images/pokemon/image/rapidash.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/rapidash.png',
		imageShiny: './assets/images/pokemon/image-shiny/rapidash.png',
		sprite: {
			base: './assets/images/pokemon/sprite/rapidash.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/rapidash.png',
			idle: {
				src: './assets/images/pokemon/sprite/rapidash-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rapidash-idle.png',
				size: [560, 448],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -7,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/rapidash-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rapidash-attack.png',
				size: [720, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -23,
				correctionX: 0
			},	
		},
		type: [type['fire']],
		movePool: [
			move['flameWheel'], move['flameThrower'], move['fireBlast'], move['extremeSpeed']
		],
		base: {
			hp: 65,
			atk: 100,
			def: 70,
			spa: 80,
			spd: 80,
			spe: 105
		},
		exp: 175,
		gold: 20,
		catchRate: 1,
		tm: [ 151, 4, 5, 9, 10, 13, 18, 22, 30, 40, 41, 43, 45, 51, 67, 68, 69, 70, 75, 76, 83, 84, 
			85, 86, 89, 94, 110, 113, 126, 128, 139, 140, 141, 145, 149, 150, 155, 165, 175, 177 ],
		egg: 'ponyta',
	},
	'slowpoke': {
		n: 79,
		name: ['SLOWPOKE', 'SLOWPOKE', '呆呆兽'],
		portrait: './assets/images/pokemon/portrait/slowpoke.png',
		image: './assets/images/pokemon/image/slowpoke.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/slowpoke.png',
		imageShiny: './assets/images/pokemon/image-shiny/slowpoke.png',
		sprite: {
			base: './assets/images/pokemon/sprite/slowpoke.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/slowpoke.png',
			idle: {
				src: './assets/images/pokemon/sprite/slowpoke-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slowpoke-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/slowpoke-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slowpoke-attack.png',
				size: [640, 512],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -11,
				correctionX: 0
			},	
		},
		type: [type['water'], type['psychic']],
		movePool: [
			move['waterGun'], move['confusion'], move['bubble'], move['headbutt']
		],
		base: {
			hp: 90,
			atk: 65,
			def: 65,
			spa: 40,
			spd: 40,
			spe: 15
		},
		exp: 63,
		gold: 4,
		catchRate: 4,
		tm: [ 151, 2, 3, 8, 10, 11, 13, 17, 20, 21, 41, 43, 64, 77, 102, 159 ],
		egg: 'slowpoke',
		evolution: [
			{
				pokemon: 'slowbro',
				condition: {
					level: 37,
					move: 'water',
					cost: 3600
				}
			},
			{
				pokemon: 'slowking',
				condition: {
					level: 41,
					spa: 80,
					item: 'kingsRock',
					cost: 4000
				}
			},
		]
	},
	'slowbro': {
		n: 80,
		name: ['SLOWBRO', 'SLOWBRO', '呆壳兽'],
		portrait: './assets/images/pokemon/portrait/slowbro.png',
		image: './assets/images/pokemon/image/slowbro.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/slowbro.png',
		imageShiny: './assets/images/pokemon/image-shiny/slowbro.png',
		sprite: {
			base: './assets/images/pokemon/sprite/slowbro.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/slowbro.png',
			idle: {
				src: './assets/images/pokemon/sprite/slowbro-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slowbro-idle.png',
				size: [80, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/slowbro-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slowbro-attack.png',
				size: [624, 384],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -4,
				correctionX: -4
			},	
		},
		type: [type['water'], type['psychic']],
		movePool: [
			move['surf'], move['psychic'], move['bubbleBeam'], move['iceBeam'], move['confusion'], 
		],
		base: {
			hp: 95,
			atk: 75,
			def: 110,
			spa: 100,
			spd: 80,
			spe: 30
		},
		exp: 172,
		gold: 14,
		catchRate: 1,
		tm: [ 151, 2, 3, 8, 10, 11, 13, 17, 19, 20, 21, 29, 30, 37, 41, 43, 47, 56, 64, 77, 90, 102, 103, 113, 
			118, 119, 141, 159, 174, 169, 168, 162],
		egg: 'slowpoke',
	},
	'magnemite': {
		n: 81,
		name: ['MAGNEMITE', 'MAGNEMITE', '小磁怪'],
		portrait: './assets/images/pokemon/portrait/magnemite.png',
		image: './assets/images/pokemon/image/magnemite.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/magnemite.png',
		imageShiny: './assets/images/pokemon/image-shiny/magnemite.png',
		sprite: {
			base: './assets/images/pokemon/sprite/magnemite.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/magnemite.png',
			idle: {
				src: './assets/images/pokemon/sprite/magnemite-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magnemite-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 8,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/magnemite-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magnemite-attack.png',
				size: [1368, 576],
				position: 6,
				framesX: 19,
				framesY: 8,
				correctionY: -15,
				correctionX: -8
			},	
		},
		type: [type['electric'], type['steel']],
		movePool: [
			move['thunderShock'], move['swift'], move['spark'], move['electroweb']
		],
		base: {
			hp: 25,
			atk: 35,
			def: 70,
			spa: 95,
			spd: 55,
			spe: 45
		},
		exp: 65,
		gold: 3,
		catchRate: 3,
		tm: [ 151, 168, 5, 10, 30, 31, 34, 51, 58, 68, 70, 79, 84, 89, 96, 112, 121, 123, 128, 130, 145, 
			149, 150, 178],
		egg: 'magnemite',
		evolution: [
			{
				pokemon: 'magneton',
				condition: {
					level: 30,
					move: 'steel',
					cost: 3300
				}
			},
		]
	},
	'magneton': {
		n: 82,
		name: ['MAGNETON', 'MAGNETON', '三合一磁怪'],
		portrait: './assets/images/pokemon/portrait/magneton.png',
		image: './assets/images/pokemon/image/magneton.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/magneton.png',
		imageShiny: './assets/images/pokemon/image-shiny/magneton.png',
		sprite: {
			base: './assets/images/pokemon/sprite/magneton.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/magneton.png',
			idle: {
				src: './assets/images/pokemon/sprite/magneton-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magneton-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 6,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/magneton-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magneton-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -10,
				correctionX: -3
			},	
		},
		type: [type['electric'], type['steel']],
		movePool: [
			move['thunderbolt'], move['thunderShock'], move['magnetBomb'], move['spark'], move['flashCannon']
		],
		base: {
			hp: 50,
			atk: 60,
			def: 95,
			spa: 120,
			spd: 70,
			spe: 70
		},
		exp: 163,
		gold: 30,
		catchRate: 1,
		tm: [ 151, 166, 168, 5, 10, 30, 31, 34, 51, 58, 68, 70, 79, 84, 89, 96, 112, 121, 123, 128, 130, 
			145, 149, 150, 178 ],
		egg: 'magnemite',
	},
	'farfetchd': {
		n: 83,
		name: ['FARFETCH’D', 'FARFETCH’D', '大葱鸭'],
		portrait: './assets/images/pokemon/portrait/farfetchd.png',
		image: './assets/images/pokemon/image/farfetchd.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/farfetchd.png',
		imageShiny: './assets/images/pokemon/image-shiny/farfetchd.png',
		sprite: {
			base: './assets/images/pokemon/sprite/farfetchd.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/farfetchd.png',
			idle: {
				src: './assets/images/pokemon/sprite/farfetchd-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/farfetchd-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/farfetchd-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/farfetchd-attack.png',
				size: [880, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -10
			},	
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['peck'], move['slash'], move['gust'], move['boneClub'], move['quickAttack'], move['payDay']
		],
		base: {
			hp: 52,
			atk: 90,
			def: 55,
			spa: 58,
			spd: 62,
			spe: 60
		},
		exp: 132,
		gold: 10,
		catchRate: 2,
		tm: [ 151, 1, 5, 6, 9, 10, 11, 14, 18, 24, 28, 45, 49, 55, 57, 59, 70, 81, 83, 88, 95, 99, 106, 108, 
			113, 114, 127, 132, 143, 146, 149, 152, 157 ],
		egg: 'farfetch',
	},
	'doduo': {
		n: 84,
		name: ['DODUO', 'DODUO', '嘟嘟'],
		portrait: './assets/images/pokemon/portrait/doduo.png',
		image: './assets/images/pokemon/image/doduo.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/doduo.png',
		imageShiny: './assets/images/pokemon/image-shiny/doduo.png',
		sprite: {
			base: './assets/images/pokemon/sprite/doduo.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/doduo.png',
			idle: {
				src: './assets/images/pokemon/sprite/doduo-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/doduo-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/doduo-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/doduo-attack.png',
				size: [1120, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -15,
				correctionX: -6
			},	
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['peck'], move['gust'], move['quickAttack'], move['stomp'], move['sandAttack']
		],
		base: {
			hp: 35,
			atk: 85,
			def: 45,
			spa: 35,
			spd: 35,
			spe: 75
		},
		exp: 62,
		gold: 8,
		catchRate: 3,
		tm: [ 151, 5, 6, 9, 10, 24, 43, 57, 59, 68, 70, 83, 106, 132 ],
		egg: 'doduo',
		evolution: [
			{
				pokemon: 'dodrio',
				condition: {
					level: 31,
					cost: 2600
				}
			},
		]
	},
	'dodrio': {
		n: 85,
		name: ['DODRIO', 'DODRIO', '嘟嘟利'],
		portrait: './assets/images/pokemon/portrait/dodrio.png',
		image: './assets/images/pokemon/image/dodrio.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/dodrio.png',
		imageShiny: './assets/images/pokemon/image-shiny/dodrio.png',
		sprite: {
			base: './assets/images/pokemon/sprite/dodrio.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/dodrio.png',
			idle: {
				src: './assets/images/pokemon/sprite/dodrio-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dodrio-idle.png',
				size: [240, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/dodrio-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dodrio-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -20,
				correctionX: -4
			},	
		},
		type: [type['normal'], type['flying']],
		movePool: [
			move['drillPeck'], move['gust'], move['stomp'], move['quickAttack'], move['fly']
		],
		base: {
			hp: 60,
			atk: 110,
			def: 70,
			spa: 60,
			spd: 60,
			spe: 110
		},
		exp: 165,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 5, 6, 9, 10, 14, 22, 24, 30, 43, 57, 59, 67, 68, 70, 76, 83, 84, 88, 99, 106, 124, 132, 146, 
			149, 161, 177 ],
		egg: 'doduo',
	},
	'seel': {
		n: 86,
		name: ['SEEL', 'SEEL', '小海狮'],
		portrait: './assets/images/pokemon/portrait/seel.png',
		image: './assets/images/pokemon/image/seel.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/seel.png',
		imageShiny: './assets/images/pokemon/image-shiny/seel.png',
		sprite: {
			base: './assets/images/pokemon/sprite/seel.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/seel.png',
			idle: {
				src: './assets/images/pokemon/sprite/seel-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seel-idle.png',
				size: [64, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 2,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/seel-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seel-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},	
		},
		type: [type['water']],
		movePool: [
			move['headbutt'], move['auroraBeam'], move['waterGun'], move['pound'], move['bubble']
		],
		base: {
			hp: 65,
			atk: 45,
			def: 55,
			spa: 45,
			spd: 70,
			spe: 45
		},
		exp: 65,
		gold: 10,
		catchRate: 2,
		tm: [ 151, 2, 10, 17, 20, 21, 44, 56, 62, 77, 83, 129, 159 ],
		egg: 'seel',
		evolution: [
			{
				pokemon: 'dewgong',
				condition: {
					level: 34,
					move: 'ice',
					cost: 2900
				}
			},
		]
	},
	'dewgong': {
		n: 87,
		name: ['DEWGONG', 'DEWGONG', '白海狮'],
		portrait: './assets/images/pokemon/portrait/dewgong.png',
		image: './assets/images/pokemon/image/dewgong.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/dewgong.png',
		imageShiny: './assets/images/pokemon/image-shiny/dewgong.png',
		sprite: {
			base: './assets/images/pokemon/sprite/dewgong.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/dewgong.png',
			idle: {
				src: './assets/images/pokemon/sprite/dewgong-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dewgong-idle.png',
				size: [288, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/dewgong-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dewgong-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -1
			},
		},
		type: [type['water'], type['ice']],
		movePool: [
			move['bubbleBeam'], move['auroraBeam'], move['iceBeam'], move['bubble'], move['headbutt']
		],
		base: {
			hp: 90,
			atk: 70,
			def: 80,
			spa: 70,
			spd: 95,
			spe: 70
		},
		exp: 166,
		gold: 20,
		catchRate: 1,
		tm: [ 151, 163, 2, 3, 10, 17, 20, 21, 29, 30, 34, 37, 44, 47, 48, 56, 62, 64, 67, 77, 83, 84, 118, 129, 
			  133, 159,  ],
		egg: 'seel',
	},
	'grimer': {
		n: 88,
		name: ['GRIMER', 'GRIMER', '臭泥'],
		portrait: './assets/images/pokemon/portrait/grimer.png',
		image: './assets/images/pokemon/image/grimer.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/grimer.png',
		imageShiny: './assets/images/pokemon/image-shiny/grimer.png',
		sprite: {
			base: './assets/images/pokemon/sprite/grimer.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/grimer.png',
			idle: {
				src: './assets/images/pokemon/sprite/grimer-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/grimer-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 3,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/grimer-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/grimer-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},	
		},
		type: [type['poison']],
		movePool: [
			move['sandAttack'], move['pound'], move['acid'], move['mudSlap']
		],
		base: {
			hp: 80,
			atk: 80,
			def: 50,
			spa: 40,
			spd: 50,
			spe: 25
		},
		exp: 65,
		gold: 7,
		catchRate: 3,
		tm: [ 151, 9, 10, 32, 40, 53, 63, 81, 83, 91, 93, 94, 97, 100, 146 ],
		egg: 'grimer',
		evolution: [
			{
				pokemon: 'muk',
				condition: {
					level: 38,
					cost: 4000
				}
			},
		]
	},
	'muk': {
		n: 89,
		name: ['MUK', 'MUK', '臭臭泥'],
		portrait: './assets/images/pokemon/portrait/muk.png',
		image: './assets/images/pokemon/image/muk.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/muk.png',
		imageShiny: './assets/images/pokemon/image-shiny/muk.png',
		sprite: {
			base: './assets/images/pokemon/sprite/muk.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/muk.png',
			idle: {
				src: './assets/images/pokemon/sprite/muk-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/muk-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/muk-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/muk-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -15,
				correctionX: -5
			},	
		},
		type: [type['poison']],
		movePool: [
			move['sludgeBomb'], move['acid'], move['poisonJab'], move['mudBomb'], move['gunkShot']
		],
		base: {
			hp: 105,
			atk: 105,
			def: 75,
			spa: 65,
			spd: 100,
			spe: 50
		},
		exp: 175,
		gold: 21,
		catchRate: 1,
		tm: [ 151, 9, 10, 23, 32, 40, 53, 62, 63, 69, 71, 81, 83, 91, 93, 94, 97, 100, 103, 118, 128, 137, 
			142, 144, 146, 147, 161],
		egg: 'grimer',
	},
	'shellder': {
		n: 90,
		name: ['SHELLDER', 'SHELLDER', '大舌贝'],
		portrait: './assets/images/pokemon/portrait/shellder.png',
		image: './assets/images/pokemon/image/shellder.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/shellder.png',
		imageShiny: './assets/images/pokemon/image-shiny/shellder.png',
		sprite: {
			base: './assets/images/pokemon/sprite/shellder.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/shellder.png',
			idle: {
				src: './assets/images/pokemon/sprite/shellder-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shellder-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 3,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/shellder-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shellder-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -7
			},	
		},
		type: [type['water']],
		movePool: [
			move['icyWind'], move['clamp'], move['waterGun'], move['bubble']
		],
		base: {
			hp: 30,
			atk: 65,
			def: 100,
			spa: 45,
			spd: 25,
			spe: 40
		},
		exp: 61,
		gold: 7,
		catchRate: 2,
		tm: [ 151, 8, 10, 17, 21, 29, 44, 62, 63, 77, 129, 159 ],
		egg: 'shellder',
		evolution: [
			{
				pokemon: 'cloyster',
				condition: {
					level: 31,
					move: 'ice',
					item: 'waterStone',
					cost: 4200
				}
			},
		]
	},
	'cloyster': {
		n: 91,
		name: ['CLOYSTER', 'CLOYSTER', '刺甲贝'],
		portrait: './assets/images/pokemon/portrait/cloyster.png',
		image: './assets/images/pokemon/image/cloyster.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/cloyster.png',
		imageShiny: './assets/images/pokemon/image-shiny/cloyster.png',
		sprite: {
			base: './assets/images/pokemon/sprite/cloyster.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/cloyster.png',
			idle: {
				src: './assets/images/pokemon/sprite/cloyster-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cloyster-idle.png',
				size: [192, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -5,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/cloyster-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cloyster-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
		},
		type: [type['water'], type['ice']],
		movePool: [
			move['auroraBeam'], move['clamp'], move['bubbleBeam'], move['icyWind'], move['iceBall']
		],
		base: {
			hp: 50,
			atk: 95,
			def: 180,
			spa: 85,
			spd: 45,
			spe: 70
		},
		exp: 184,
		gold: 32,
		catchRate: 0.6,
		tm: [ 151, 8, 10, 17, 21, 29, 37, 44, 47, 48, 56, 62, 63, 66, 77, 104, 118, 120, 129, 150, 158, 159, 174],
		egg: 'shellder',
	},
	'gastly': {
		n: 92,
		name: ['GASTLY', 'GASTLY', '鬼斯'],
		portrait: './assets/images/pokemon/portrait/gastly.png',
		image: './assets/images/pokemon/image/gastly.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/gastly.png',
		imageShiny: './assets/images/pokemon/image-shiny/gastly.png',
		sprite: {
			base: './assets/images/pokemon/sprite/gastly.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/gastly.png',
			idle: {
				src: './assets/images/pokemon/sprite/gastly-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gastly-idle.png',
				size: [288, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -7,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/gastly-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gastly-attack.png',
				size: [832, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},	
		},
		type: [type['ghost'], type['poison']],
		movePool: [
			move['lick'], move['astonish'], move['poisonSting'], move['feintAttack']
		],
		base: {
			hp: 30,
			atk: 35,
			def: 30,
			spa: 100,
			spd: 35,
			spe: 80
		},
		exp: 62,
		gold: 5,
		catchRate: 3,
		tm: [ 151, 13, 26, 28, 32, 51, 53, 63, 70, 81, 110, 139, 143, 149 ],
		egg: 'gastly',
		evolution: [
			{
				pokemon: 'haunter',
				condition: {
					level: 25,
					move: 'ghost',
					time: 'night',
					cost: 3000
				}
			},
		]
	},
	'haunter': {
		n: 93,
		name: ['HAUNTER', 'HAUNTER', '鬼斯通'],
		portrait: './assets/images/pokemon/portrait/haunter.png',
		image: './assets/images/pokemon/image/haunter.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/haunter.png',
		imageShiny: './assets/images/pokemon/image-shiny/haunter.png',
		sprite: {
			base: './assets/images/pokemon/sprite/haunter.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/haunter.png',
			idle: {
				src: './assets/images/pokemon/sprite/haunter-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/haunter-idle.png',
				size: [128, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -9,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/haunter-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/haunter-attack.png',
				size: [864, 640],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
		},
		type: [type['ghost'], type['poison']],
		movePool: [
			move['firePunch'], move['lick'], move['astonish'], move['poisonSting'], move['feintAttack']
		],
		base: {
			hp: 45,
			atk: 50,
			def: 45,
			spa: 115,
			spd: 55,
			spe: 95
		},
		exp: 142,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 13, 26, 28, 32, 51, 53, 61, 63, 70, 81, 97, 100, 101, 103, 110, 118, 119, 125, 137, 138, 
			139, 141, 142, 143, 144, 146, 147, 149 ],
		egg: 'gastly',
		evolution: [
			{
				pokemon: 'gengar',
				condition: {
					level: 40,
					item: 'moonStone',
					time: 'night',
					cost: 8000
				}
			},
		]
	},
	'gengar': {
		n: 94,
		name: ['GENGAR', 'GENGAR', '耿鬼'],
		portrait: './assets/images/pokemon/portrait/gengar.png',
		image: './assets/images/pokemon/image/gengar.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/gengar.png',
		imageShiny: './assets/images/pokemon/image-shiny/gengar.png',
		sprite: {
			base: './assets/images/pokemon/sprite/gengar.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/gengar.png',
			idle: {
				src: './assets/images/pokemon/sprite/gengar-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gengar-idle.png',
				size: [256, 320],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: 0,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/gengar-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gengar-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},	
		},
		type: [type['ghost'], type['poison']],
		movePool: [
			move['shadowBall'], move['sludgeBomb'], move['darkPulse'], move['lick'], move['astonish'], move['feintAttack'], move['shadowSneak']
		],
		base: {
			hp: 60,
			atk: 65,
			def: 60,
			spa: 130,
			spd: 75,
			spe: 110
		},
		exp: 225,
		gold: 40,
		catchRate: 0.6,
		tm: [ 151, 167, 13, 26, 28, 32, 51, 53, 60, 61, 63, 70, 81, 86, 91, 97, 100, 101, 103, 110, 112, 
			118, 119, 121, 123, 128, 133, 134, 137, 138, 139, 141, 142, 143, 144, 146, 147, 149 ],
		egg: 'gastly',
	},
	'onix': {
		n: 95,
		name: ['ONIX', 'ONIX', '大岩蛇'],
		portrait: './assets/images/pokemon/portrait/onix.png',
		image: './assets/images/pokemon/image/onix.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/onix.png',
		imageShiny: './assets/images/pokemon/image-shiny/onix.png',
		sprite: {
			base: './assets/images/pokemon/sprite/onix.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/onix.png',
			idle: {
				src: './assets/images/pokemon/sprite/onix-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/onix-idle.png',
				size: [384, 832],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -37,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/onix-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/onix-attack.png',
				size: [1408, 1216],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -60,
				correctionX: -10
			},	
		},
		type: [type['rock'], type['ground']],
		movePool: [
			move['rockThrow'], move['tackle'], move['wrap'], move['sandAttack'], move['sandTomb']
		],
		base: {
			hp: 35,
			atk: 45,
			def: 160,
			spa: 30,
			spd: 45,
			spe: 70
		},
		exp: 77,
		gold: 30,
		catchRate: 2,
		tm: [ 151, 164, 179, 2, 9, 10, 13, 15, 16, 23, 30, 40, 67, 69, 83, 86, 87, 93, 102, 113, 117, 124, 
			128, 131, 150 ],
		egg: 'onix',
		evolution: [
			{
				pokemon: 'steelix',
				condition: {
					level: 30,
					item: 'metalCoat',
					cost: 10000
				}
			},
		]
	},
	'drowzee': {
		n: 96,
		name: ['DROWZEE', 'DROWZEE', '催眠貘'],
		portrait: './assets/images/pokemon/portrait/drowzee.png',
		image: './assets/images/pokemon/image/drowzee.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/drowzee.png',
		imageShiny: './assets/images/pokemon/image-shiny/drowzee.png',
		sprite: {
			base: './assets/images/pokemon/sprite/drowzee.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/drowzee.png',
			idle: {
				src: './assets/images/pokemon/sprite/drowzee-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/drowzee-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/drowzee-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/drowzee-attack.png',
				size: [960, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -15,
				correctionX: -2
			},	
		},
		type: [type['psychic']],
		movePool: [
			move['confusion'], move['stomp'], move['tackle']
		],
		base: {
			hp: 60,
			atk: 48,
			def: 45,
			spa: 43,
			spd: 90,
			spe: 42
		},
		exp: 66,
		gold: 10,
		catchRate: 2,
		tm: [ 151, 162, 2, 3, 9, 10, 11, 19, 20, 28, 31, 41, 43, 45, 51, 61, 64, 83, 87, 119, 125 ],
		egg: 'drowzee',
		evolution: [
			{
				pokemon: 'hypno',
				condition: {
					level: 26,
					move: 'psychic',
					cost: 2200
				}
			},
		]
	},
	'hypno': {
		n: 97,
		name: ['HYPNO', 'HYPNO', '引梦貘人'],
		portrait: './assets/images/pokemon/portrait/hypno.png',
		image: './assets/images/pokemon/image/hypno.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/hypno.png',
		imageShiny: './assets/images/pokemon/image-shiny/hypno.png',
		sprite: {
			base: './assets/images/pokemon/sprite/hypno.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/hypno.png',
			idle: {
				src: './assets/images/pokemon/sprite/hypno-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hypno-idle.png',
				size: [320, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -7,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/hypno-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hypno-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['psychic']],
		movePool: [
			move['psychic'], move['astonish'], move['psybeam'], move['headbutt']
		],
		base: {
			hp: 85,
			atk: 73,
			def: 70,
			spa: 73,
			spd: 115,
			spe: 67
		},
		exp: 169,
		gold: 20,
		catchRate: 1,
		tm: [ 151, 2, 3, 9, 10, 11, 19, 20, 28, 31, 41, 43, 45, 51, 61, 64, 78, 83, 86, 87, 90, 91, 96, 101,
			 103, 112, 119, 123, 125, 128, 130, 158 ],
		egg: 'drowzee',
	},
	'krabby': {
		n: 98,
		name: ['KRABBY', 'KRABBY', '大钳蟹'],
		portrait: './assets/images/pokemon/portrait/krabby.png',
		image: './assets/images/pokemon/image/krabby.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/krabby.png',
		imageShiny: './assets/images/pokemon/image-shiny/krabby.png',
		sprite: {
			base: './assets/images/pokemon/sprite/krabby.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/krabby.png',
			idle: {
				src: './assets/images/pokemon/sprite/krabby-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/krabby-idle.png',
				size: [48, 320],
				position: 0,
				framesX: 2,
				framesY: 8,
				correctionY: -1,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/krabby-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/krabby-attack.png',
				size: [1152, 640],
				position: 6,
				framesX: 16,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['water']],
		movePool: [
			move['bubble'], move['clamp'], move['waterGun'], move['pound'],
		],
		base: {
			hp: 30,
			atk: 105,
			def: 90,
			spa: 25,
			spd: 25,
			spe: 50
		},
		exp: 65,
		gold: 12,
		catchRate: 2,
		tm: [ 151, 8, 17, 21, 43, 49, 56, 77, 83, 88, 158, 159 ],
		egg: 'krabby',
		evolution: [
			{
				pokemon: 'kingler',
				condition: {
					level: 28,
					cost: 1900
				}
			},
		]
	},
	'kingler': {
		n: 99,
		name: ['KINGLER', 'KINGLER', '巨钳蟹'],
		portrait: './assets/images/pokemon/portrait/kingler.png',
		image: './assets/images/pokemon/image/kingler.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kingler.png',
		imageShiny: './assets/images/pokemon/image-shiny/kingler.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kingler.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kingler.png',
			idle: {
				src: './assets/images/pokemon/sprite/kingler-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kingler-idle.png',
				size: [64, 384],
				position: 0,
				framesX: 2,
				framesY: 8,
				correctionY: -5,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/kingler-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kingler-attack.png',
				size: [1152, 576],
				position: 6,
				framesX: 16,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['water']],
		movePool: [
			move['waterGun'], move['bubbleBeam'], move['surf'], move['crabhammer'], 
		],
		base: {
			hp: 55,
			atk: 130,
			def: 115,
			spa: 50,
			spd: 50,
			spe: 75
		},
		exp: 166,
		gold: 20,
		catchRate: 1,
		tm: [ 151, 8, 17, 21, 40, 43, 47, 48, 49, 56, 77, 83, 88, 104, 138, 153, 158, 159],
		egg: 'krabby',
	},
	'voltorb': {
		n: 100,
		name: ['VOLTORB', 'VOLTORB', '霹雳电球'],
		portrait: './assets/images/pokemon/portrait/voltorb.png',
		image: './assets/images/pokemon/image/voltorb.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/voltorb.png',
		imageShiny: './assets/images/pokemon/image-shiny/voltorb.png',
		sprite: {
			base: './assets/images/pokemon/sprite/voltorb.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/voltorb.png',
			idle: {
				src: './assets/images/pokemon/sprite/voltorb-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/voltorb-idle.png',
				size: [120, 256],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 2,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/voltorb-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/voltorb-attack.png',
				size: [1008, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['electric']],
		movePool: [
			move['tackle'], move['quickAttack'], move['spark'], move['thunderShock'], 
		],
		base: {
			hp: 40,
			atk: 30,
			def: 50,
			spa: 55,
			spd: 55,
			spe: 100
		},
		exp: 66,
		gold: 12,
		catchRate: 3,
		tm: [ 151, 4, 5, 10, 31, 58, 68, 70, 75, 76, 78, 79, 83, 84, 87, 89, 96, 112, 123, 135, 145, 149, 150 ],
		egg: 'voltorb',
		evolution: [
			{
				pokemon: 'electrode',
				condition: {
					level: 30,
					cost: 2500
				}
			},
		]
	},
	'electrode': {
		n: 101,
		name: ['ELECTRODE', 'ELECTRODE', '顽皮雷弹'],
		portrait: './assets/images/pokemon/portrait/electrode.png',
		image: './assets/images/pokemon/image/electrode.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/electrode.png',
		imageShiny: './assets/images/pokemon/image-shiny/electrode.png',
		sprite: {
			base: './assets/images/pokemon/sprite/electrode.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/electrode.png',
			idle: {
				src: './assets/images/pokemon/sprite/electrode-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/electrode-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 2,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/electrode-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/electrode-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},	
		},
		type: [type['electric']],
		movePool: [
			move['extremeSpeed'], move['magnetBomb'], move['spark'], move['thunderShock'], move['thunderbolt'], move['eggBomb']
		],
		base: {
			hp: 60,
			atk: 50,
			def: 70,
			spa: 80,
			spd: 80,
			spe: 150
		},
		exp: 168,
		gold: 15,
		catchRate: 1,
		tm: [ 151, 4, 5, 10, 31, 34, 58, 68, 70, 75, 76, 78, 79, 83, 84, 87, 89, 96, 112, 121, 123, 135, 145, 
			149, 150, 162, 168 ],
		egg: 'voltorb',
	},
	'exeggcute': {
		n: 102,
		name: ['EXEGGCUTE', 'EXEGGCUTE', '蛋蛋'],
		portrait: './assets/images/pokemon/portrait/exeggcute.png',
		image: './assets/images/pokemon/image/exeggcute.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/exeggcute.png',
		imageShiny: './assets/images/pokemon/image-shiny/exeggcute.png',
		sprite: {
			base: './assets/images/pokemon/sprite/exeggcute.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/exeggcute.png',
			idle: {
				src: './assets/images/pokemon/sprite/exeggcute-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/exeggcute-idle.png',
				size: [192, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: 2,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/exeggcute-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/exeggcute-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},	
		},
		type: [type['grass'], type['psychic']],
		movePool: [
			move['tackle'], move['confusion'], move['razorLeaf'],
		],
		base: {
			hp: 60,
			atk: 40,
			def: 80,
			spa: 60,
			spd: 45,
			spe: 40
		},
		exp: 65,
		gold: 11,
		catchRate: 1,
		tm: [ 151, 2, 7, 9, 10, 20, 28, 40, 83, 87, 98, 112 ],
		egg: 'exeggcute',
		evolution: [
			{
				pokemon: 'exeggutor',
				condition: {
					level: 24,
					item: 'leafStone',
					cost: 2150
				}
			},
		]
	},
	'exeggutor': {
		n: 103,
		name: ['EXEGGUTOR', 'EXEGGUTOR', '椰蛋树'],
		portrait: './assets/images/pokemon/portrait/exeggutor.png',
		image: './assets/images/pokemon/image/exeggutor.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/exeggutor.png',
		imageShiny: './assets/images/pokemon/image-shiny/exeggutor.png',
		sprite: {
			base: './assets/images/pokemon/sprite/exeggutor.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/exeggutor.png',
			idle: {
				src: './assets/images/pokemon/sprite/exeggutor-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/exeggutor-idle.png',
				size: [160, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -8,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/exeggutor-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/exeggutor-attack.png',
				size: [968, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -21,
				correctionX: -11
			},	
		},
		type: [type['grass'], type['psychic']],
		movePool: [
			move['stomp'], move['psybeam'], move['absorb'], move['eggBomb'], move['megaDrain']
		],
		base: {
			hp: 95,
			atk: 95,
			def: 85,
			spa: 125,
			spd: 75,
			spe: 55
		},
		exp: 182,
		gold: 16,
		catchRate: 1,
		tm: [ 151, 2, 3, 7, 9, 10, 20, 22, 23, 27, 28, 30, 39, 40, 42, 43, 58, 60, 64, 67, 69, 70, 78, 80, 83,
		 	86, 87, 90, 94, 97, 98, 100, 105, 112, 115, 118, 122, 128, 131, 136, 142, 148, 157, 158 ],
		egg: 'exeggcute',
	},
	'cubone': {
		n: 104,
		name: ['CUBONE', 'CUBONE', '卡拉卡拉'],
		portrait: './assets/images/pokemon/portrait/cubone.png',
		image: './assets/images/pokemon/image/cubone.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/cubone.png',
		imageShiny: './assets/images/pokemon/image-shiny/cubone.png',
		sprite: {
			base: './assets/images/pokemon/sprite/cubone.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/cubone.png',
			idle: {
				src: './assets/images/pokemon/sprite/cubone-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cubone-idle.png',
				size: [192, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -2,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/cubone-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cubone-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},	
		},
		type: [type['ground']],
		movePool: [
			move['boneClub'], move['sandAttack'], move['sandTomb'], move['rockSmash']
		],
		base: {
			hp: 50,
			atk: 50,
			def: 95,
			spa: 40,
			spd: 50,
			spe: 35
		},
		exp: 64,
		gold: 10,
		catchRate: 2,
		tm: [ 151, 164, 2, 9, 10, 18, 28, 45, 70, 83, 87, 93, 94, 108, 114, 161 ],
		egg: 'cubone',
		evolution: [
			{
				pokemon: 'marowak',
				condition: {
					level: 28,
					cost: 1900
				}
			},
		]
	},
	'marowak': {
		n: 105,
		name: ['MAROWAK', 'MAROWAK', '嘎啦嘎啦'],
		portrait: './assets/images/pokemon/portrait/marowak.png',
		image: './assets/images/pokemon/image/marowak.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/marowak.png',
		imageShiny: './assets/images/pokemon/image-shiny/marowak.png',
		sprite: {
			base: './assets/images/pokemon/sprite/marowak.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/marowak.png',
			idle: {
				src: './assets/images/pokemon/sprite/marowak-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/marowak-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/marowak-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/marowak-attack.png',
				size: [648, 704],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -23,
				correctionX: -2
			},	
		},
		type: [type['ground']],
		movePool: [
			move['boneClub'], move['headbutt'], move['bonemerang'], move['stomp'],
		],
		base: {
			hp: 60,
			atk: 80,
			def: 110,
			spa: 50,
			spd: 80,
			spe: 45
		},
		exp: 149,
		gold: 18,
		catchRate: 1,
		tm: [ 151, 161, 164, 165, 2, 9, 10, 18, 28, 30, 45, 63, 64, 67, 69, 70, 83, 87, 93, 94, 102, 108, 
			114, 179, 149, 146, 143, 141, 138, 131, 124, 120 ],
		egg: 'cubone',
	},
	'hitmonlee': {
		n: 106,
		name: ['HITMONLEE', 'HITMONLEE', '飞腿郎'],
		portrait: './assets/images/pokemon/portrait/hitmonlee.png',
		image: './assets/images/pokemon/image/hitmonlee.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/hitmonlee.png',
		imageShiny: './assets/images/pokemon/image-shiny/hitmonlee.png',
		sprite: {
			base: './assets/images/pokemon/sprite/hitmonlee.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/hitmonlee.png',
			idle: {
				src: './assets/images/pokemon/sprite/hitmonlee-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hitmonlee-idle.png',
				size: [80, 384],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -3,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/hitmonlee-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hitmonlee-attack.png',
				size: [1120, 704],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -23,
				correctionX: -10
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['stomp'], move['rollingKick'], move['jumpKick'], move['highJumpKick'],  move['tropicalKick'], move['blazeKick']
		],
		base: {
			hp: 50,
			atk: 120,
			def: 53,
			spa: 35,
			spd: 110,
			spe: 87
		},
		exp: 159,
		gold: 30,
		catchRate: 1,
		tm: [ 151, 161, 175, 177, 179, 1, 5, 9, 10, 22, 28, 36, 39, 43, 45, 46, 54, 70, 81, 83, 107, 
			111, 115, 149 ],
		egg: 'tyrogue',
	},
	'hitmonchan': {
		n: 107,
		name: ['HITMONCHAN', 'HITMONCHAN', '快拳郎'],
		portrait: './assets/images/pokemon/portrait/hitmonchan.png',
		image: './assets/images/pokemon/image/hitmonchan.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/hitmonchan.png',
		imageShiny: './assets/images/pokemon/image-shiny/hitmonchan.png',
		sprite: {
			base: './assets/images/pokemon/sprite/hitmonchan.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/hitmonchan.png',
			idle: {
				src: './assets/images/pokemon/sprite/hitmonchan-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hitmonchan-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -6,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/hitmonchan-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hitmonchan-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -14,
				correctionX: 0
			},	
		},
		type: [type['fighting']],
		movePool: [
			move['cometPunch'], move['drainPunch'], move['firePunch'], move['icePunch'], move['thunderPunch'], move['bulletPunch'],
		],
		base: {
			hp: 50,
			atk: 105,
			def: 79,
			spa: 35,
			spd: 110,
			spe: 76
		},
		exp: 159,
		gold: 30,
		catchRate: 1,
		tm: [ 151, 161, 173, 1, 5, 9, 10, 22, 28, 35, 36, 38, 45, 46, 52, 57, 61, 70, 81, 83, 109, 
			116, 119, 125, 149, 156 ],
		egg: 'tyrogue',
	},
	'lickitung': {
		n: 108,
		name: ['LICKITUNG', 'LICKITUNG', '大舌头'],
		portrait: './assets/images/pokemon/portrait/lickitung.png',
		image: './assets/images/pokemon/image/lickitung.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/lickitung.png',
		imageShiny: './assets/images/pokemon/image-shiny/lickitung.png',
		sprite: {
			base: './assets/images/pokemon/sprite/lickitung.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/lickitung.png',
			idle: {
				src: './assets/images/pokemon/sprite/lickitung-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lickitung-idle.png',
				size: [192, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/lickitung-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lickitung-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['normal']],
		movePool: [
			move['lick'], move['stomp'], move['pound'], move['bodySlam']
		],
		base: {
			hp: 90,
			atk: 55,
			def: 75,
			spa: 60,
			spd: 75,
			spe: 30
		},
		exp: 77,
		gold: 25,
		catchRate: 1,
		tm: [ 151, 161, 1, 2, 3, 9, 10, 11, 13, 16, 18, 21, 22, 23, 28, 30, 36, 40, 41, 43, 45, 48, 51, 61, 
			63, 64, 67, 83, 84, 86, 87, 93, 109, 112, 117, 119, 123, 125, 128, 141 ],
		egg: 'lickitung',
	},
	'koffing': {
		n: 109,
		name: ['KOFFING', 'KOFFING', '瓦斯弹'],
		portrait: './assets/images/pokemon/portrait/koffing.png',
		image: './assets/images/pokemon/image/koffing.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/koffing.png',
		imageShiny: './assets/images/pokemon/image-shiny/koffing.png',
		sprite: {
			base: './assets/images/pokemon/sprite/koffing.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/koffing.png',
			idle: {
				src: './assets/images/pokemon/sprite/koffing-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/koffing-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -5,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/koffing-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/koffing-attack.png',
				size: [1080, 640],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},	
		},
		type: [type['poison']],
		movePool: [
			move['sandAttack'], move['tackle'], move['acid'], move['poisonSting'], move['smokeScreen']
		],
		base: {
			hp: 40,
			atk: 65,
			def: 95,
			spa: 60,
			spd: 45,
			spe: 35
		},
		exp: 68,
		gold: 5,
		catchRate: 2,
		tm: [ 151, 9, 10, 13, 15, 32, 40, 53, 60, 63, 70, 81, 83, 84, 86, 94, 100, 110, 139, 150 ],
		egg: 'koffing',
		evolution: [
			{
				pokemon: 'weezing',
				condition: {
					level: 35,
					cost: 3000
				}
			},
		]
	},
	'weezing': {
		n: 110,
		name: ['WEEZING', 'WEEZING', '双弹瓦斯'],
		portrait: './assets/images/pokemon/portrait/weezing.png',
		image: './assets/images/pokemon/image/weezing.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/weezing.png',
		imageShiny: './assets/images/pokemon/image-shiny/weezing.png',
		sprite: {
			base: './assets/images/pokemon/sprite/weezing.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/weezing.png',
			idle: {
				src: './assets/images/pokemon/sprite/weezing-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/weezing-idle.png',
				size: [352, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -17,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/weezing-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/weezing-attack.png',
				size: [864, 640],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -22,
				correctionX: -5
			},	
		},
		type: [type['poison']],
		movePool: [
			move['bodySlam'], move['tackle'], move['sludgeBomb'], move['poisonFang'], move['acid'], move['smokeScreen']
		],
		base: {
			hp: 65,
			atk: 90,
			def: 120,
			spa: 85,
			spd: 70,
			spe: 60
		},
		exp: 172,
		gold: 16,
		catchRate: 1,
		tm: [ 151, 9, 10, 13, 15, 23, 32, 40, 53, 60, 63, 70, 81, 83, 84, 85, 86, 91, 94, 97, 100, 
			103, 110, 112, 118, 137, 139, 141, 146, 147, 150, 168, 165 ],
		egg: 'koffing',
	},
	'rhyhorn': {
		n: 111,
		name: ['RHYHORN', 'RHYHORN', '独角犀牛'],
		portrait: './assets/images/pokemon/portrait/rhyhorn.png',
		image: './assets/images/pokemon/image/rhyhorn.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/rhyhorn.png',
		imageShiny: './assets/images/pokemon/image-shiny/rhyhorn.png',
		sprite: {
			base: './assets/images/pokemon/sprite/rhyhorn.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/rhyhorn.png',
			idle: {
				src: './assets/images/pokemon/sprite/rhyhorn-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rhyhorn-idle.png',
				size: [125, 256],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: 3,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/rhyhorn-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rhyhorn-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -3
			},	
		},
		type: [type['ground'], type['rock']],
		movePool: [
			move['hornAttack'], move['stomp'], move['rockThrow'], move['sandAttack'],
		],
		base: {
			hp: 80,
			atk: 85,
			def: 95,
			spa: 30,
			spd: 30,
			spe: 25
		},
		exp: 69,
		gold: 10,
		catchRate: 1,
		tm: [ 151, 179, 2, 4, 9, 10, 11, 13, 15, 22, 40, 42, 43, 67, 82, 83, 86, 87, 94, 113, 120, 124 ],
		egg: 'rhyhorn',
		evolution: [
			{
				pokemon: 'rhydon',
				condition: {
					level: 42,
					cost: 6000
				}
			},
		]
	},
	'rhydon': {
		n: 112,
		name: ['RHYDON', 'RHYDON', '钻角犀兽'],
		portrait: './assets/images/pokemon/portrait/rhydon.png',
		image: './assets/images/pokemon/image/rhydon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/rhydon.png',
		imageShiny: './assets/images/pokemon/image-shiny/rhydon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/rhydon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/rhydon.png',
			idle: {
				src: './assets/images/pokemon/sprite/rhydon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rhydon-idle.png',
				size: [96, 384],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -3,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/rhydon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rhydon-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},	
		},
		type: [type['ground'], type['rock']],
		movePool: [
			move['hornAttack'], move['stomp'], move['rockSlide'], move['earthquake'], move['rockThrow']
		],
		base: {
			hp: 105,
			atk: 130,
			def: 120,
			spa: 45,
			spd: 45,
			spe: 40
		},
		exp: 170,
		gold: 30,
		catchRate: 1,
		tm: [ 151, 161, 164, 165, 179, 2, 4, 9, 10, 11, 13, 15, 22, 23, 30, 36, 42, 43, 46, 61, 67, 69, 
			71, 82, 83, 86, 87, 94, 113, 119, 120, 124, 125, 131 ],
		egg: 'rhyhorn',
	},
	'chansey': {
		n: 113,
		name: ['CHANSEY', 'CHANSEY', '吉利蛋'],
		portrait: './assets/images/pokemon/portrait/chansey.png',
		image: './assets/images/pokemon/image/chansey.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/chansey.png',
		imageShiny: './assets/images/pokemon/image-shiny/chansey.png',
		sprite: {
			base: './assets/images/pokemon/sprite/chansey.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/chansey.png',
			idle: {
				src: './assets/images/pokemon/sprite/chansey-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/chansey-idle.png',
				size: [144, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -2,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/chansey-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/chansey-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -18,
				correctionX: -2
			},	
		},
		type: [type['normal']],
		movePool: [
			move['pound'], move['metronome'], move['eggBomb'], move['bodySlam']
		],
		base: {
			hp: 250,
			atk: 5,
			def: 5,
			spa: 35,
			spd: 105,
			spe: 50
		},
		exp: 395,
		gold: 100,
		catchRate: 1,
		tm: [ 151, 1, 2, 3, 9, 10, 11, 15, 18, 19, 31, 35, 36, 38, 39, 40, 41, 43, 45, 61, 62, 67, 79, 83, 
			86, 87, 88, 93, 94, 101, 109, 112, 113, 116, 119, 123, 125, 126, 130, 133, 136, 150, 159 ],
		egg: 'chansey',
		evolution: [
			{
				pokemon: 'blissey',
				condition: {
					level: 40,
					item: 'loveSweet',
					time: 'day',
					cost: 5700
				}
			},
		]
	},
	'tangela': {
		n: 114,
		name: ['TANGELA', 'TANGELA', '蔓藤怪'],
		portrait: './assets/images/pokemon/portrait/tangela.png',
		image: './assets/images/pokemon/image/tangela.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/tangela.png',
		imageShiny: './assets/images/pokemon/image-shiny/tangela.png',
		sprite: {
			base: './assets/images/pokemon/sprite/tangela.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/tangela.png',
			idle: {
				src: './assets/images/pokemon/sprite/tangela-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tangela-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -3,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/tangela-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tangela-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['grass']],
		movePool: [
			move['vineWhip'], move['wrap'], move['razorLeaf'], move['constrict'],
		],
		base: {
			hp: 65,
			atk: 55,
			def: 115,
			spa: 100,
			spd: 40,
			spe: 60
		},
		exp: 87,
		gold: 5,
		catchRate: 1,
		tm: [ 151, 171, 7, 9, 10, 16, 22, 25, 40, 49, 60, 78, 80, 83, 87, 93, 96, 98, 105, 112, 113, 117, 
			136, 137, 142, 143, 148, 180],
		egg: 'tangela',
	},
	'kangaskhan': {
		n: 115,
		name: ['KANGASKHAN', 'KANGASKHAN', '袋兽'],
		portrait: './assets/images/pokemon/portrait/kangaskhan.png',
		image: './assets/images/pokemon/image/kangaskhan.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kangaskhan.png',
		imageShiny: './assets/images/pokemon/image-shiny/kangaskhan.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kangaskhan.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kangaskhan.png',
			idle: {
				src: './assets/images/pokemon/sprite/kangaskhan-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kangaskhan-idle.png',
				size: [200, 448],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/kangaskhan-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kangaskhan-attack.png',
				size: [960, 704],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -24,
				correctionX: 0
			},	
		},
		type: [type['normal']],
		movePool: [
			move['cometPunch'], move['stomp'], move['bite'], move['lowKick'], move['iceFang'], move['firePunch'] 
		],
		base: {
			hp: 105,
			atk: 95,
			def: 80,
			spa: 40,
			spd: 80,
			spe: 90
		},
		exp: 172,
		gold: 75,
		catchRate: 1,
		tm: [151, 165, 1, 2, 9, 10, 11, 13, 15, 18, 22, 23, 36, 38, 40, 41, 43, 45, 46, 48, 61, 67, 69, 70, 
			71, 83, 86, 88, 91, 94, 109, 112, 113, 116, 118, 119, 122, 124, 125, 126, 128, 138, 141, 156 ],
		egg: 'kangaskhan',
	},
	'horsea': {
		n: 116,
		name: ['HORSEA', 'HORSEA', '墨海马'],
		portrait: './assets/images/pokemon/portrait/horsea.png',
		image: './assets/images/pokemon/image/horsea.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/horsea.png',
		imageShiny: './assets/images/pokemon/image-shiny/horsea.png',
		sprite: {
			base: './assets/images/pokemon/sprite/horsea.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/horsea.png',
			idle: {
				src: './assets/images/pokemon/sprite/horsea-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/horsea-idle.png',
				size: [96, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -12,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/horsea-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/horsea-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -23,
				correctionX: 0
			},	
		},
		type: [type['water']],
		movePool: [
			move['bubble'], move['smokeScreen'], move['acid'], move['waterGun'], move['mudSlap'], move['twister']
		],
		base: {
			hp: 30,
			atk: 40,
			def: 70,
			spa: 70,
			spd: 25,
			spe: 60
		},
		exp: 59,
		gold: 9,
		catchRate: 2,
		tm: [ 151, 8, 10, 15, 17, 21, 53, 56, 62, 77, 98, 110, 113, 159 ],
		egg: 'seadra',
		evolution: [
			{
				pokemon: 'seadra',
				condition: {
					level: 32,
					cost: 3000
				}
			},
		]
	},
	'seadra': {
		n: 117,
		name: ['SEADRA', 'SEADRA', '海刺龙'],
		portrait: './assets/images/pokemon/portrait/seadra.png',
		image: './assets/images/pokemon/image/seadra.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/seadra.png',
		imageShiny: './assets/images/pokemon/image-shiny/seadra.png',
		sprite: {
			base: './assets/images/pokemon/sprite/seadra.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/seadra.png',
			idle: {
				src: './assets/images/pokemon/sprite/seadra-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seadra-idle.png',
				size: [256, 512],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -18,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/seadra-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seadra-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -23,
				correctionX: -3
			},	
		},
		type: [type['water']],
		movePool: [
			move['bubble'], move['smokeScreen'], move['hydroPump'], move['bubbleBeam'], move['dragonBreath'], move['twister']
		],
		base: {
			hp: 55,
			atk: 65,
			def: 95,
			spa: 95,
			spd: 45,
			spe: 85
		},
		exp: 154,
		gold: 16,
		catchRate: 1,
		tm: [ 151, 8, 10, 15, 17, 21, 29, 47, 48, 53, 56, 62, 77, 86, 98, 103, 110, 113, 122, 130, 132, 
			134, 137, 159 ],
		egg: 'seadra',
		evolution: [
			{
				pokemon: 'kingdra',
				condition: {
					level: 40,
					item: 'dragonScale',
					cost: 7750
				}
			},
		]
	},
	'goldeen': {
	    n: 118,
	    name: ['GOLDEEN', 'GOLDEEN', '角金鱼'],
	    portrait: './assets/images/pokemon/portrait/goldeen.png',
	    image: './assets/images/pokemon/image/goldeen.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/goldeen.png',
	    imageShiny: './assets/images/pokemon/image-shiny/goldeen.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/goldeen.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/goldeen.png',
	        idle: {
				src: './assets/images/pokemon/sprite/goldeen-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/goldeen-idle.png',
				size: [480, 320],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -2,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/goldeen-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/goldeen-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -2
			},	
	    },
	    type: [type['water']],
	    movePool: [
	        move['peck'], move['waterGun'], move['hornAttack'], move['bubble'], move['tackle']
	    ],
	    base: {
	        hp: 45,
	        atk: 67,
	        def: 60,
	        spa: 35,
	        spd: 50,
	        spe: 63
	    },
	    exp: 64,
	    gold: 8,
	    catchRate: 3,
	    tm: [ 151, 6, 10, 17, 21, 32, 50, 56, 62, 68, 77, 83, 120, 129, 159 ],
	    egg: 'goldeen',
	    evolution: [
	        {
	            pokemon: 'seaking',
	            condition: {
	                level: 33,
	                cost: 2500
	            }
	        },
	    ]
	},
	'seaking': {
	    n: 119,
	    name: ['SEAKING', 'SEAKING', '金鱼王'],
	    portrait: './assets/images/pokemon/portrait/seaking.png',
	    image: './assets/images/pokemon/image/seaking.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/seaking.png',
	    imageShiny: './assets/images/pokemon/image-shiny/seaking.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/seaking.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/seaking.png',
	        idle: {
				src: './assets/images/pokemon/sprite/seaking-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seaking-idle.png',
				size: [480, 384],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/seaking-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seaking-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
	    },
	    type: [type['water']],
	    movePool: [
	        move['bubbleBeam'], move['megahorn'], move['icyWind'], move['iceFang'], move['surf'], move['hornAttack']
	    ],
	    base: {
	        hp: 80,
	        atk: 92,
	        def: 65,
	        spa: 65,
	        spd: 80,
	        spe: 68
	    },
	    exp: 158,
	    gold: 18,
	    catchRate: 1,
	    tm: [ 151, 170, 6, 10, 14, 17, 21, 29, 32, 37, 42, 47, 48, 50, 56, 62, 64, 68, 77, 82, 83, 84, 
	    	120, 124, 129, 159, 163 ],
	    egg: 'goldeen',
	},
	'staryu': {
	    n: 120,
	    name: ['STARYU', 'STARYU', '海星星'],
	    portrait: './assets/images/pokemon/portrait/staryu.png',
	    image: './assets/images/pokemon/image/staryu.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/staryu.png',
	    imageShiny: './assets/images/pokemon/image-shiny/staryu.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/staryu.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/staryu.png',
	       idle: {
				src: './assets/images/pokemon/sprite/staryu-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/staryu-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/staryu-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/staryu-attack.png',
				size: [960, 512],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},	
	    },
	    type: [type['water']],
	    movePool: [
	        move['swift'], move['waterGun'], move['bubble'], move['confusion'], move['quickAttack']
	    ],
	    base: {
	        hp: 30,
	        atk: 45,
	        def: 55,
	        spa: 70,
	        spd: 55,
	        spe: 85
	    },
	    exp: 68,
	    gold: 12,
	    catchRate: 3,
	    tm: [ 151, 5, 10, 17, 19, 20, 21, 51, 68, 70, 76, 77, 83, 159 ],
	    egg: 'staryu',
	    evolution: [
	        {
	            pokemon: 'starmie',
	            condition: {
	                level: 35,
	                item: 'waterStone',
	                cost: 7950
	            }
	        },
	    ]
	},
	'starmie': {
	    n: 121,
	    name: ['STARMIE', 'STARMIE', '宝石海星'],
	    portrait: './assets/images/pokemon/portrait/starmie.png',
	    image: './assets/images/pokemon/image/starmie.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/starmie.png',
	    imageShiny: './assets/images/pokemon/image-shiny/starmie.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/starmie.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/starmie.png',
	        idle: {
				src: './assets/images/pokemon/sprite/starmie-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/starmie-idle.png',
				size: [192, 256],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: 5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/starmie-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/starmie-attack.png',
				size: [960, 512],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -10,
				correctionX: -5
			},	
	    },
	    type: [type['water'], type['psychic']],
	    movePool: [
	        move['psybeam'], move['surf'], move['swift'], move['bubbleBeam'], move['iceBeam'], move['psychic'], move['quickAttack']
	    ],
	    base: {
	        hp: 60,
	        atk: 75,
	        def: 85,
	        spa: 100,
	        spd: 85,
	        spe: 115
	    },
	    exp: 182,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 163, 3, 5, 10, 17, 19, 20, 21, 31, 37, 47, 48, 51, 56, 68, 70, 76, 77, 83, 90, 96, 121, 
	    	123, 150, 158, 159, 174 ],
	    egg: 'staryu',
	},
	'mrmime': {
	    n: 122,
	    name: ['MR. MIME', 'MR. MIME', '魔墙人偶'],
	    portrait: './assets/images/pokemon/portrait/mrMime.png',
	    image: './assets/images/pokemon/image/mrMime.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/mrMime.png',
	    imageShiny: './assets/images/pokemon/image-shiny/mrMime.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/mrMime.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/mrMime.png',
	        idle: {
				src: './assets/images/pokemon/sprite/mrMime-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mrMime-idle.png',
				size: [64, 384],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -4,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/mrMime-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mrMime-attack.png',
				size: [792, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -24,
				correctionX: -3
			},	
	    },
	    type: [type['psychic']],
	    movePool: [
	        move['psychic'], move['confusion'], move['psybeam'], move['pound'], move['hyperVoice'], move['icePunch'], move['signalBeam']
	    ],
	    base: {
	        hp: 40,
	        atk: 45,
	        def: 65,
	        spa: 100,
	        spd: 120,
	        spe: 90
	    },
	    exp: 161,
	    gold: 22,
	    catchRate: 2,
	    tm: [ 151, 1, 2, 3, 10, 18, 19, 20, 28, 31, 34, 36, 38, 41, 45, 61, 64, 67, 70, 78, 79, 81, 83, 84,
	    	 86, 90, 96, 101, 112, 119, 121, 123, 125, 130, 133, 136, 138 ],
	    egg: 'mrmime',
	},
	'scyther': {
	    n: 123,
	    name: ['SCYTHER', 'SCYTHER', '飞天螳螂'],
	    portrait: './assets/images/pokemon/portrait/scyther.png',
	    image: './assets/images/pokemon/image/scyther.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/scyther.png',
	    imageShiny: './assets/images/pokemon/image-shiny/scyther.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/scyther.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/scyther.png',
	        idle: {
				src: './assets/images/pokemon/sprite/scyther-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/scyther-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -3,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/scyther-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/scyther-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -18,
				correctionX: -3
			},	
	    },
	    type: [type['bug'], type['flying']],
	    movePool: [
	         move['wingAttack'], move['bugbit'], move['slash'], move['silverWind'], move['furyCutter']
	    ],
	    base: {
	        hp: 70,
	        atk: 110,
	        def: 80,
	        spa: 55,
	        spd: 80,
	        spe: 105
	    },
	    exp: 100,
	    gold: 20,
	    catchRate: 2,
	    tm: [ 151, 5, 9, 10, 11, 12, 24, 49, 50, 55, 57, 59, 68, 70, 83, 88, 92, 95, 96, 99, 149, 153, 158,
	    	176, 180, 171, 170 ],
	    egg: 'scyther',
	    evolution: [
	        {
	            pokemon: 'scizor',
	            condition: {
	                level: 40,
	                item: 'metalCoat',
	                cost: 12000
	            }
	        },
	    ]
	},
	'jynx': {
	    n: 124,
	    name: ['JYNX', 'JYNX', '迷唇姐'],
	    portrait: './assets/images/pokemon/portrait/jynx.png',
	    image: './assets/images/pokemon/image/jynx.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/jynx.png',
	    imageShiny: './assets/images/pokemon/image-shiny/jynx.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/jynx.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/jynx.png',
	        idle: {
				src: './assets/images/pokemon/sprite/jynx-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jynx-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/jynx-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jynx-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -2
			},	
	    },
	    type: [type['ice'], type['psychic']],
	    movePool: [
	        move['iceBeam'], move['psychic'], move['icePunch'], move['confusion'],  move['icyWind'], move['stomp']
	    ],
	    base: {
	        hp: 65,
	        atk: 50,
	        def: 35,
	        spa: 115,
	        spd: 95,
	        spe: 95
	    },
	    exp: 159,
	    gold: 20,
	    catchRate: 1,
	    tm: [ 151, 168, 1, 2, 3, 10, 11, 20, 28, 36, 41, 44, 45, 48, 56, 61, 62, 64, 65, 78, 90, 101, 112,
	     	119, 125, 133, 136, 158, 159, 162 ],
	    egg: 'smoochum',
	},
	'electabuzz': {
	    n: 125,
	    name: ['ELECTABUZZ', 'ELECTABUZZ', '电击兽'],
	    portrait: './assets/images/pokemon/portrait/electabuzz.png',
	    image: './assets/images/pokemon/image/electabuzz.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/electabuzz.png',
	    imageShiny: './assets/images/pokemon/image-shiny/electabuzz.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/electabuzz.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/electabuzz.png',
	        idle: {
				src: './assets/images/pokemon/sprite/electabuzz-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/electabuzz-idle.png',
				size: [160, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -8,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/electabuzz-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/electabuzz-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -5
			},	
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunderPunch'], move['thunderShock'], move['thunder'], move['stomp'], move['bodySlam'], move['thunderbolt']
	    ],
	    base: {
	        hp: 65,
	        atk: 83,
	        def: 57,
	        spa: 95,
	        spd: 85,
	        spe: 105
	    },
	    exp: 172,
	    gold: 20,
	    catchRate: 1,
	    tm: [ 151, 161, 166, 1, 5, 10, 22, 31, 36, 39, 40, 43, 61, 68, 70, 79, 83, 89, 96, 121, 123, 130, 145,
	    	173, 46 ],    
	    egg: 'elekid',
	},
	'magmar': {
	    n: 126,
	    name: ['MAGMAR', 'MAGMAR', '鸭嘴火兽'],
	    portrait: './assets/images/pokemon/portrait/magmar.png',
	    image: './assets/images/pokemon/image/magmar.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/magmar.png',
	    imageShiny: './assets/images/pokemon/image-shiny/magmar.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/magmar.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/magmar.png',
	        idle: {
				src: './assets/images/pokemon/sprite/magmar-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magmar-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/magmar-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magmar-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},	
	    },
	    type: [type['fire']],
	    movePool: [
	        move['flameThrower'], move['firePunch'], move['stomp'], move['bodySlam'], move['ember'], move['smokeScreen']
	    ],
	    base: {
	        hp: 65,
	        atk: 95,
	        def: 57,
	        spa: 100,
	        spd: 85,
	        spe: 93
	    },
	    exp: 173,
	    gold: 20,
	    catchRate: 1,
	    tm: [ 151, 161, 1, 5, 10, 15, 22, 39, 40, 43, 70, 35, 83, 85, 86, 94, 110, 113, 125, 128, 155, 75, 175 ],
	    egg: 'magby',
	},
	'pinsir': {
	    n: 127,
	    name: ['PINSIR', 'PINSIR', '凯罗斯'],
	    portrait: './assets/images/pokemon/portrait/pinsir.png',
	    image: './assets/images/pokemon/image/pinsir.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/pinsir.png',
	    imageShiny: './assets/images/pokemon/image-shiny/pinsir.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/pinsir.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/pinsir.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/pinsir-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pinsir-idle.png',
	            size: [160, 384],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 6
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/pinsir-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pinsir-attack.png',
	            size: [936, 640],
	            position: 6,
	            framesX: 13,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: -4
	        },
	    },
	    type: [type['bug']],
	    movePool: [
	        move['wingAttack'], move['stomp'], move['wrap'], move['bugbit'], move['lowKick']
	    ],
	    base: {
	        hp: 65,
	        atk: 125,
	        def: 100,
	        spa: 55,
	        spd: 70,
	        spe: 85
	    },
	    exp: 175,
	    gold: 24,
	    catchRate: 1,
	    tm: [ 151, 161, 165, 9, 10, 11, 12, 16, 22, 23, 24, 33, 36, 39, 40, 42, 43, 46, 50, 52, 55, 57, 59, 
	    	1, 62, 67, 70, 71, 82, 83, 88, 92, 94, 95, 96, 99, 119, 120, 124, 125, 127, 128, 144, 153 ],
	    egg: 'pinsir',
	},
	'tauros': {
	    n: 128,
	    name: ['TAUROS', 'TAUROS', '肯泰罗'],
	    portrait: './assets/images/pokemon/portrait/tauros.png',
	    image: './assets/images/pokemon/image/tauros.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/tauros.png',
	    imageShiny: './assets/images/pokemon/image-shiny/tauros.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/tauros.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/tauros.png',
	        idle: {
				src: './assets/images/pokemon/sprite/tauros-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tauros-idle.png',
				size: [160, 448],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/tauros-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tauros-attack.png',
				size: [864, 640],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -20,
				correctionX: -7
			},	
	    },
	    type: [type['normal']],
	    movePool: [
	        move['stomp'], move['feintAttack'], move['flameThrower'], move['surf'], move['swift'], move['quickAttack']
	    ],
	    base: {
	        hp: 75,
	        atk: 100,
	        def: 95,
	        spa: 40,
	        spd: 70,
	        spe: 110
	    },
	    exp: 172,
	    gold: 20,
	    catchRate: 1,
	   	tm: [ 151, 161, 165, 2, 4, 5, 9, 10, 15, 22, 23, 30, 40, 42, 43, 47, 48, 64, 67, 68, 69, 70, 71, 
	   		76, 82, 83, 84, 85, 86, 87, 89, 113, 120, 122, 128, 149 ],
	    egg: 'tauros',
	},
	'magikarp': {
	    n: 129,
	    name: ['MAGIKARP', 'MAGIKARP', '鲤鱼王'],
	    portrait: './assets/images/pokemon/portrait/magikarp.png',
	    image: './assets/images/pokemon/image/magikarp.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/magikarp.png',
	    imageShiny: './assets/images/pokemon/image-shiny/magikarp.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/magikarp.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/magikarp.png',
	        idle: {
				src: './assets/images/pokemon/sprite/magikarp-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magikarp-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 7,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/magikarp-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/magikarp-attack.png',
				size: [960, 576],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			},	
	    },
	    type: [type['water']],
	    movePool: [
	        move['bubble'], move['tackle'],  move['waterGun']
	    ],
	    base: {
	        hp: 20,
	        atk: 10,
	        def: 55,
	        spa: 15,
	        spd: 20,
	        spe: 80
	    },
	    exp: 40,
	    gold: 1,
	    catchRate: 5,
	    tm: [ 151, 10, 17, 21 ],
	    egg: 'magikarp',
	    evolution: [
	        {
	            pokemon: 'gyarados',
	            condition: {
	                level: 20,
	                cost: 20000
	            }
	        },
	    ]
	},
	'gyarados': {
	    n: 130,
	    name: ['GYARADOS', 'GYARADOS', '暴鲤龙'],
	    portrait: './assets/images/pokemon/portrait/gyarados.png',
	    image: './assets/images/pokemon/image/gyarados.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/gyarados.png',
	    imageShiny: './assets/images/pokemon/image-shiny/gyarados.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/gyarados.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/gyarados.png',
	        idle: {
				src: './assets/images/pokemon/sprite/gyarados-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gyarados-idle.png',
				size: [288, 1024],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -57,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/gyarados-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gyarados-attack.png',
				size: [1040, 1088],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -58,
				correctionX: -5
			},	
	    },
	    type: [type['water'], type['flying']],
	    movePool: [
	        move['hydroPump'], move['dragonBreath'], move['surf'], move['hurricane'], move['gust'], move['waterGun'], move['iceFang']
	    ],
	    base: {
	        hp: 95,
	        atk: 125,
	        def: 79,
	        spa: 60,
	        spd: 100,
	        spe: 81
	    },
	    exp: 189,
	    gold: 65,
	    catchRate: 0.6,
	    tm: [ 151, 10, 13, 17, 21, 29, 30, 37, 47, 48, 55, 56, 57, 59, 62, 63, 67, 68, 70, 71, 77, 83, 84, 
	    	85, 86, 94, 97, 99, 100, 102, 103, 106, 110, 113, 117, 118, 121, 122, 123, 126, 127, 128, 129, 
	    	131, 132, 134, 139, 141, 159, 177],
	    egg: 'magikarp',
	},
	'lapras': {
	    n: 131,
	    name: ['LAPRAS', 'LAPRAS', '拉普拉斯'],
	    portrait: './assets/images/pokemon/portrait/lapras.png',
	    image: './assets/images/pokemon/image/lapras.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/lapras.png',
	    imageShiny: './assets/images/pokemon/image-shiny/lapras.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/lapras.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/lapras.png',
	        idle: {
				src: './assets/images/pokemon/sprite/lapras-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lapras-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/lapras-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lapras-attack.png',
				size: [1056, 704],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -22,
				correctionX: -3
			},	
	    },
	    type: [type['water'], type['ice']],
	    movePool: [
	        move['waterGun'], move['icyWind'], move['bubbleBeam'], 
	    ],
	    base: {
	        hp: 130,
	        atk: 85,
	        def: 80,
	        spa: 85,
	        spd: 95,
	        spe: 60
	    },
	    exp: 187,
	    gold: 35,
	    catchRate: 1,
	    tm: [ 151, 163,	2, 8, 10, 13, 17, 21, 29, 31, 37, 44, 47, 48, 56, 62, 66, 67, 69, 77, 83, 84, 93, 
	    	94, 102, 103, 113, 121, 122, 123, 124, 126, 128, 134, 159 ],
	    egg: 'lapras',
	},
	'ditto': {
	    n: 132,
	    name: ['DITTO', 'DITTO', '百变怪'],
	    portrait: './assets/images/pokemon/portrait/ditto.png',
	    image: './assets/images/pokemon/image/ditto.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/ditto.png',
	    imageShiny: './assets/images/pokemon/image-shiny/ditto.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/ditto.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/ditto.png',
	        idle: {
				src: './assets/images/pokemon/sprite/ditto-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ditto-idle.png',
				size: [48, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/ditto-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ditto-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},	
	    },
	    type: [type['normal']],
	    movePool: [
	        move['metronome'], move['pound'], move['tackle']
	    ],
	    base: {
	        hp: 48,
	        atk: 48,
	        def: 48,
	        spa: 48,
	        spd: 48,
	        spe: 48
	    },
	    exp: 101,
	    gold: 12,
	    catchRate: 3,
	    tm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
	    	26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
	    	49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
	    	72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 
	    	95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 
	    	115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 
	    	134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 
	    	153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 
	    	173, 174, 175, 176, 177, 178, 179, 180 ],
	    egg: 'ditto',
	},
	'eevee': {
	    n: 133,
	    name: ['EEVEE', 'EEVEE', '伊布'],
	    portrait: './assets/images/pokemon/portrait/eevee.png',
	    image: './assets/images/pokemon/image/eevee.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/eevee.png',
	    imageShiny: './assets/images/pokemon/image-shiny/eevee.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/eevee.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/eevee.png',
	        idle: {
				src: './assets/images/pokemon/sprite/eevee-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/eevee-idle.png',
				size: [48, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 1,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/eevee-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/eevee-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -19,
				correctionX: -3
			},	
	    },
	    type: [type['normal']],
	    movePool: [
	        move['quickAttack'], move['bite'], move['tackle'], move['pound']
	    ],
	    base: {
	        hp: 55,
	        atk: 55,
	        def: 50,
	        spa: 45,
	        spd: 65,
	        spe: 55
	    },
	    exp: 65,
	    gold: 15,
	    catchRate: 3,
	    tm: [ 151, 1, 2, 5, 9, 10, 11, 13, 18, 41, 43, 45, 68, 70, 83, 84 ],
	    egg: 'eevee',
	    evolution: [
	        {
	            pokemon: 'vaporeon',
	            condition: {
	                level: 20,
	                item: 'waterStone',
	                cost: 2500
	            }
	        },
	        {
	            pokemon: 'jolteon',
	            condition: {
	                level: 20,
	                item: 'thunderStone',
	                cost: 2500
	            }
	        },
	        {
	            pokemon: 'flareon',
	            condition: {
	                level: 20,
	                item: 'fireStone',
	                cost: 2500
	            }
	        },
	        {
	            pokemon: 'espeon',
	            condition: {
	                level: 20,
	                time: 'day',
	                cost: 5000
	            }
	        },
	        {
	            pokemon: 'umbreon',
	            condition: {
	                level: 20,
	                time: 'night',
	                cost: 5000
	            }
	        }
	    ]
	},
	'vaporeon': {
	    n: 134,
	    name: ['VAPOREON', 'VAPOREON', '水伊布'],
	    portrait: './assets/images/pokemon/portrait/vaporeon.png',
	    image: './assets/images/pokemon/image/vaporeon.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/vaporeon.png',
	    imageShiny: './assets/images/pokemon/image-shiny/vaporeon.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/vaporeon.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/vaporeon.png',
	        idle: {
				src: './assets/images/pokemon/sprite/vaporeon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vaporeon-idle.png',
				size: [80, 384],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -6,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/vaporeon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vaporeon-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			},	
	    },
	    type: [type['water']],
	    movePool: [
	        move['hydroPump'], move['iceBeam'], move['surf'], move['bubbleBeam'], move['auroraBeam'], move['aquaTail']
	    ],
	    base: {
	        hp: 130,
	        atk: 65,
	        def: 60,
	        spa: 110,
	        spd: 95,
	        spe: 65
	    },
	    exp: 184,
	    gold: 28,
	    catchRate: 1,
	    tm: [ 151, 1, 2, 5, 9, 10, 11, 13, 18, 41, 43, 45, 68, 70, 83, 84, 17, 21, 29, 44, 47, 48, 56, 77, 
	    	118, 129, 159, 163 ],
	    egg: 'eevee',
	},
	'jolteon': {
	    n: 135,
	    name: ['JOLTEON', 'JOLTEON', '雷伊布'],
	    portrait: './assets/images/pokemon/portrait/jolteon.png',
	    image: './assets/images/pokemon/image/jolteon.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/jolteon.png',
	    imageShiny: './assets/images/pokemon/image-shiny/jolteon.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/jolteon.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/jolteon.png',
	        idle: {
				src: './assets/images/pokemon/sprite/jolteon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jolteon-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -1,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/jolteon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jolteon-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -3
			},	
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunderbolt'], move['thunderShock'], move['quickAttack'], move['extremeSpeed'], move['bite']
	    ],
	    base: {
	        hp: 65,
	        atk: 65,
	        def: 60,
	        spa: 110,
	        spd: 95,
	        spe: 130
	    },
	    exp: 184,
	    gold: 28,
	    catchRate: 1,
	    tm: [ 151, 1, 2, 5, 9, 10, 11, 13, 18, 41, 43, 45, 68, 70, 83, 84, 31, 51, 79, 89, 101, 121, 123, 
	    	135, 141, 145, 166, 168, ],
	    egg: 'eevee',
	},
	'flareon': {
	    n: 136,
	    name: ['FLAREON', 'FLAREON', '火伊布'],
	    portrait: './assets/images/pokemon/portrait/flareon.png',
	    image: './assets/images/pokemon/image/flareon.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/flareon.png',
	    imageShiny: './assets/images/pokemon/image-shiny/flareon.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/flareon.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/flareon.png',
	        idle: {
				src: './assets/images/pokemon/sprite/flareon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/flareon-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/flareon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/flareon-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -17,
				correctionX: -2
			},	
	    },
	    type: [type['fire']],
	    movePool: [
	        move['flameThrower'], move['bite'], move['pursuit'], move['fireSpin'], move['crunch']
	    ],
	    base: {
	        hp: 65,
	        atk: 130,
	        def: 60,
	        spa: 95,
	        spd: 110,
	        spe: 65
	    },
	    exp: 184,
	    gold: 28,
	    catchRate: 1,
	    tm: [ 151, 1, 2, 5, 9, 10, 11, 13, 18, 41, 43, 45, 68, 70, 83, 84, 4, 15, 75, 85, 86, 110, 141, 155 ],
	    egg: 'eevee',
	},
	'porygon': { 
	    n: 137,
	    name: ['PORYGON', 'PORYGON', '多边兽'],
	    portrait: './assets/images/pokemon/portrait/porygon.png',
	    image: './assets/images/pokemon/image/porygon.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/porygon.png',
	    imageShiny: './assets/images/pokemon/image-shiny/porygon.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/porygon.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/porygon.png',
	        idle: {
				src: './assets/images/pokemon/sprite/porygon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/porygon-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 1
			},
			attack: {
				src: './assets/images/pokemon/sprite/porygon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/porygon-attack.png',
				size: [640, 512],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -11,
				correctionX: -2
			},	
	    },
	    type: [type['normal']],
	    movePool: [
	        move['psybeam'], move['waterGun'], move['thunderShock'], move['metronome'], move['hyperVoice'], move['confusion']
	    ],
	    base: {
	        hp: 65,
	        atk: 60,
	        def: 70,
	        spa: 85,
	        spd: 75,
	        spe: 40
	    },
	    exp: 79,
	    gold: 18,
	    catchRate: 2,
	    tm: [ 151, 2, 3, 5, 6, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21, 25, 28, 29, 30, 31, 34, 37, 40, 41, 47, 
	    	48, 51, 53, 55, 56, 57, 60, 62, 64, 67, 68, 70, 72, 73, 74, 75, 78, 79, 81, 83, 84, 85, 86, 87, 89, 
	    	90, 93, 96, 98, 99, 101, 103, 112, 113, 121, 123, 124, 126, 128, 130, 133, 134, 135, 136, 139, 145, 
	    	149, 150, 152, 159, 163, 166, 168, 174, 178 ],
	    egg: 'porygon',
	    evolution: [
	        {
	            pokemon: 'porygon2',
	            condition: {
	                level: 40,
	                move: 'normal',
	                item: 'upgrade',
	                cost: 12500
	            }
	        }
	    ]
	},
	'omanyte': {
	    n: 138,
	    name: ['OMANYTE', 'OMANYTE', '菊石兽'],
	    portrait: './assets/images/pokemon/portrait/omanyte.png',
	    image: './assets/images/pokemon/image/omanyte.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/omanyte.png',
	    imageShiny: './assets/images/pokemon/image-shiny/omanyte.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/omanyte.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/omanyte.png',
	        idle: {
				src: './assets/images/pokemon/sprite/omanyte-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/omanyte-idle.png',
				size: [64, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 2,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/omanyte-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/omanyte-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -8
			},	
	    },
	    type: [type['rock'], type['water']],
	    movePool: [
	        move['ancientPower'], move['waterGun'], move['rockThrow'], move['pound'], move['sandAttack']
	    ],
	    base: {
	        hp: 35,
	        atk: 40,
	        def: 100,
	        spa: 90,
	        spd: 55,
	        spe: 35
	    },
	    exp: 71,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151, 2, 6, 8, 9, 10, 12, 16, 17, 19, 21, 40, 77, 83, 87, 93, 94, 159 ],
	    egg: 'omanyte',
	    evolution: [
	        {
	            pokemon: 'omastar',
	            condition: {
	                level: 40,
	                move: 'water',
	                cost: 7000
	            }
	        }
	    ]
	},
	'omastar': {
	    n: 139,
	    name: ['OMASTAR', 'OMASTAR', '多刺菊石兽'],
	    portrait: './assets/images/pokemon/portrait/omastar.png',
	    image: './assets/images/pokemon/image/omastar.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/omastar.png',
	    imageShiny: './assets/images/pokemon/image-shiny/omastar.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/omastar.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/omastar.png',
	        idle: {
				src: './assets/images/pokemon/sprite/omastar-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/omastar-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/omastar-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/omastar-attack.png',
				size: [800, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -24,
				correctionX: -5
			},	
	    },
	    type: [type['rock'], type['water']],
	    movePool: [
	        move['hydroPump'], move['ancientPower'], move['earthquake'], move['bodySlam'], move['surf']
	    ],
	    base: {
	        hp: 70,
	        atk: 60,
	        def: 125,
	        spa: 115,
	        spd: 70,
	        spe: 55
	    },
	    exp: 173,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 161, 2, 6, 8, 9, 10, 12, 16, 17, 19, 21, 40, 66, 77, 83, 87, 93, 94, 23, 29, 30, 37, 47,
	    	 48, 62, 69, 86, 104, 113, 118, 120, 126, 128, 129, 131, 150, 159 ],
	    egg: 'omanyte',
	},
	'kabuto': {
	    n: 140,
	    name: ['KABUTO', 'KABUTO', '化石盔'],
	    portrait: './assets/images/pokemon/portrait/kabuto.png',
	    image: './assets/images/pokemon/image/kabuto.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/kabuto.png',
	    imageShiny: './assets/images/pokemon/image-shiny/kabuto.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/kabuto.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/kabuto.png',
	        idle: {
				src: './assets/images/pokemon/sprite/kabuto-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kabuto-idle.png',
				size: [72, 192],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: 8,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/kabuto-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kabuto-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -11,
				correctionX: -5
			},	
	    },
	    type: [type['rock'], type['water']],
	    movePool: [
	        move['aquaJet'], move['ancientPower'], move['rockThrow'], move['quickAttack'], move['sandTomb']
	    ],
	    base: {
	        hp: 30,
	        atk: 80,
	        def: 90,
	        spa: 55,
	        spd: 45,
	        spe: 55
	    },
	    exp: 71,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151, 2, 6, 8, 9, 10, 11, 17, 19, 40, 49, 50, 77, 83, 87, 88, 93, 94, 95, 158, 159, 179 ],
	    egg: 'kabuto',
	    evolution: [
	        {
	            pokemon: 'kabutops',
	            condition: {
	                level: 40,
	                move: 'rock',
	                cost: 7000
	            }
	        }
	    ]
	},
	'kabutops': {
	    n: 141,
	    name: ['KABUTOPS', 'KABUTOPS', '镰刀盔'],
	    portrait: './assets/images/pokemon/portrait/kabutops.png',
	    image: './assets/images/pokemon/image/kabutops.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/kabutops.png',
	    imageShiny: './assets/images/pokemon/image-shiny/kabutops.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/kabutops.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/kabutops.png',
	        idle: {
				src: './assets/images/pokemon/sprite/kabutops-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kabutops-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/kabutops-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kabutops-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},	
	    },
	    type: [type['rock'], type['water']],
	    movePool: [
	        move['stoneEdge'], move['aquaJet'], move['rockThrow'], move['ancientPower'],
	    ],
	    base: {
	        hp: 60,
	        atk: 115,
	        def: 105,
	        spa: 65,
	        spd: 70,
	        spe: 80
	    },
	    exp: 173,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 161, 179, 2, 6, 8, 9, 10, 11, 17, 19, 40, 49, 50, 77, 83, 87, 88, 93, 94, 95, 23, 29, 30, 
	    	47, 49, 50, 57, 69, 70, 104, 118, 124, 126, 128, 129, 131, 138, 144, 149, 153, 158, 159 ],
	    egg: 'kabuto',
	},
	'aerodactyl': {
	    n: 142,
	    name: ['AERODACTYL', 'AERODACTYL', '化石翼龙'],
	    portrait: './assets/images/pokemon/portrait/aerodactyl.png',
	    image: './assets/images/pokemon/image/aerodactyl.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/aerodactyl.png',
	    imageShiny: './assets/images/pokemon/image-shiny/aerodactyl.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/aerodactyl.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/aerodactyl.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/aerodactyl-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/aerodactyl-idle.png',
				size: [320, 512],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -7,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/aerodactyl-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/aerodactyl-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},	
	    },
	    type: [type['rock'], type['flying']],
	    movePool: [
	        move['rockSlide'], move['bite'], move['fly'], move['wingAttack'], move['crunch'], move['ancientPower'], move['accelerock']
	    ],
	    base: {
	        hp: 80,
	        atk: 105,
	        def: 65,
	        spa: 60,
	        spd: 75,
	        spe: 130
	    },
	    exp: 180,
	    gold: 80,
	    catchRate: 1,
	    tm: [ 151, 161, 165, 179, 1, 2, 4, 5, 9, 10, 11, 13, 15, 19, 23, 24, 30, 40, 55, 57, 59, 67, 69, 
	    	70, 71, 76, 81, 83, 85, 86, 88, 89, 94, 99, 100, 102, 106, 113, 118, 122, 126, 127, 128, 131, 
	    	132, 134, 138, 139, 141, 149, 153 ],
	    egg: 'aerodactyl',
	},
	'snorlax': {
	    n: 143,
	    name: ['SNORLAX', 'SNORLAX', '卡比兽'],
	    portrait: './assets/images/pokemon/portrait/snorlax.png',
	    image: './assets/images/pokemon/image/snorlax.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/snorlax.png',
	    imageShiny: './assets/images/pokemon/image-shiny/snorlax.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/snorlax.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/snorlax.png',
	        idle: {
				src: './assets/images/pokemon/sprite/snorlax-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/snorlax-idle.png',
				size: [192, 512],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -13,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/snorlax-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/snorlax-attack.png',
				size: [640, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -6
			},	
	    },
	    type: [type['normal']],
	    movePool: [
	        move['bodySlam'], move['stomp'], move['bite'], move['crunch'], move['lowSweep']
	    ],
	    base: {
	        hp: 160,
	        atk: 110,
	        def: 65,
	        spa: 65,
	        spd: 110,
	        spe: 30
	    },
	    exp: 189,
	    gold: 150,
	    catchRate: 1,
	    tm: [ 151, 2, 9, 10, 11, 13, 22, 23, 30, 36, 38, 39, 40, 41, 43, 46, 47, 48, 52, 61, 63, 67, 69, 
	    	70, 71, 83, 84, 86, 87, 88, 93, 94, 100, 109, 112, 113, 118, 119, 125, 126, 128, 131, 138, 141, 
	    	150, 175, 165, 161 ],
	    egg: 'snorlax',
	},
	'articuno': {
	    n: 144,
	    name: ['ARTICUNO', 'ARTICUNO', '急冻鸟'],
	    portrait: './assets/images/pokemon/portrait/articuno.png',
	    image: './assets/images/pokemon/image/articuno.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/articuno.png',
	    imageShiny: './assets/images/pokemon/image-shiny/articuno.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/articuno.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/articuno.png',
	        idle: {
				src: './assets/images/pokemon/sprite/articuno-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/articuno-idle.png',
				size: [352, 704],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -20,
				correctionX: -20
			},
			attack: {
				src: './assets/images/pokemon/sprite/articuno-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/articuno-attack.png',
				size: [880, 960],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -35,
				correctionX: -15
			},	
	    },
	    type: [type['ice'], type['flying']],
	    movePool: [
	        move['iceBeam'], move['hurricane']
	    ],
	    base: {
	        hp: 90,
	        atk: 85,
	        def: 100,
	        spa: 95,
	        spd: 125,
	        spe: 85
	    },
	    exp: 261,
	    gold: 500,
	    catchRate: 100,
	    tm: [ 151, 2, 5, 6, 10, 14, 17, 21, 24, 44, 47, 48, 55, 56, 57, 59, 62, 65, 68, 70, 77, 83, 99, 
	    	106, 113, 127, 132, 149, 159, 162, ],
	    egg: 'articuno',
	},
	'zapdos': {
	    n: 145,
	    name: ['ZAPDOS', 'ZAPDOS', '闪电鸟'],
	    portrait: './assets/images/pokemon/portrait/zapdos.png',
	    image: './assets/images/pokemon/image/zapdos.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/zapdos.png',
	    imageShiny: './assets/images/pokemon/image-shiny/zapdos.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/zapdos.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/zapdos.png',
	        idle: {
				src: './assets/images/pokemon/sprite/zapdos-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zapdos-idle.png',
				size: [224, 768],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -22,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/zapdos-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zapdos-attack.png',
				size: [880, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
	    },
	    type: [type['electric'], type['flying']],
	    movePool: [
	        move['thunderbolt'], move['drillPeck']
	    ],
	    base: {
	        hp: 90,
	        atk: 90,
	        def: 85,
	        spa: 125,
	        spd: 90,
	        spe: 100
	    },
	    exp: 261,
	    gold: 500,
	    catchRate: 100,
	    tm: [ 151, 2, 5, 6, 10, 14, 24, 31, 55, 57, 59, 68, 70, 79, 83, 89, 99, 106, 113, 121, 123, 124, 
	    	127, 132, 135, 145, 149, 162],
	    egg: 'zapdos',
	},
	'moltres': {
	    n: 146,
	    name: ['MOLTRES', 'MOLTRES', '火焰鸟'],
	    portrait: './assets/images/pokemon/portrait/moltres.png',
	    image: './assets/images/pokemon/image/moltres.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/moltres.png',
	    imageShiny: './assets/images/pokemon/image-shiny/moltres.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/moltres.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/moltres.png',
	        idle: {
				src: './assets/images/pokemon/sprite/moltres-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/moltres-idle.png',
				size: [320, 768],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -26,
				correctionX: -5
			},
			attack: {
				src: './assets/images/pokemon/sprite/moltres-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/moltres-attack.png',
				size: [1456, 1088],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -45,
				correctionX: -13
			},	
	    },
	    type: [type['fire'], type['flying']],
	    movePool: [
	        move['fireBlast'], move['fly']
	    ],
	    base: {
	        hp: 90,
	        atk: 100,
	        def: 90,
	        spa: 125,
	        spd: 85,
	        spe: 90
	    },
	    exp: 261,
	    gold: 500,
	    catchRate: 100,
	    tm: [ 151, 2, 4, 5, 6, 10, 15, 24, 55, 57, 59, 65, 68, 70, 83, 85, 86, 99, 106, 113, 127, 132, 140, 
	    	149, 155, 162 ],
	    egg: 'moltres',
	},
	'dratini': {
	    n: 147,
	    name: ['DRATINI', 'DRATINI', '迷你龙'],
	    portrait: './assets/images/pokemon/portrait/dratini.png',
	    image: './assets/images/pokemon/image/dratini.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/dratini.png',
	    imageShiny: './assets/images/pokemon/image-shiny/dratini.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/dratini.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/dratini.png',
	       idle: {
				src: './assets/images/pokemon/sprite/dratini-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dratini-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/dratini-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dratini-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -4
			},	
	    },
	    type: [type['dragon']],
	    movePool: [
	        move['dragonBreath'], move['twister'], move['bubble'], move['pound'], move['smokeScreen']
	    ],
	    base: {
	        hp: 41,
	        atk: 64,
	        def: 45,
	        spa: 50,
	        spd: 50,
	        spe: 50
	    },
	    exp: 60,
	    gold: 5,
	    catchRate: 1,
	    tm: [ 151, 1, 2, 5, 9, 10, 13, 15, 17, 21, 56, 77, 83, 113, 117, 132, 155 ],
	    egg: 'dratini',
	    evolution: [
	        {
	            pokemon: 'dragonair',
	            condition: {
	                level: 30,
	                cost: 5000
	            }
	        }
	    ]
	},
	'dragonair': {
	    n: 148,
	    name: ['DRAGONAIR', 'DRAGONAIR', '哈克龙'],
	    portrait: './assets/images/pokemon/portrait/dragonair.png',
	    image: './assets/images/pokemon/image/dragonair.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/dragonair.png',
	    imageShiny: './assets/images/pokemon/image-shiny/dragonair.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/dragonair.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/dragonair.png',
	        idle: {
				src: './assets/images/pokemon/sprite/dragonair-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dragonair-idle.png',
				size: [338, 448],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -7,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/dragonair-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dragonair-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -10
			},	
	    },
	    type: [type['dragon']],
	    movePool: [
	        move['dragonPulse'], move['aquaTail'], move['twister'], move['waterGun'], move['bubble']
	    ],
	    base: {
	        hp: 61,
	        atk: 84,
	        def: 65,
	        spa: 70,
	        spd: 70,
	        spe: 70
	    },
	    exp: 147,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 1, 2, 5, 9, 10, 13, 15, 17, 21, 56, 77, 83, 113, 117, 132, 29, 30, 47, 48, 84, 118, 129,
	     	134, 149, 155, 159 ],
	    egg: 'dratini',
	    evolution: [
	        {
	            pokemon: 'dragonite',
	            condition: {
	                level: 55,
	                move: 'dragon',
	                cost: 25000
	            }
	        }
	    ]
	},
	'dragonite': {
	    n: 149,
	    name: ['DRAGONITE', 'DRAGONITE', '快龙'],
	    portrait: './assets/images/pokemon/portrait/dragonite.png',
	    image: './assets/images/pokemon/image/dragonite.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/dragonite.png',
	    imageShiny: './assets/images/pokemon/image-shiny/dragonite.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/dragonite.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/dragonite.png',
	        idle: {
				src: './assets/images/pokemon/sprite/dragonite-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dragonite-idle.png',
				size: [280, 512],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -16,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/dragonite-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dragonite-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: -6
			},	
	    },
	    type: [type['dragon'], type['flying']],
	    movePool: [
	        move['outrage'], move['hurricane'], move['wingAttack'], move['fly'], move['extremeSpeed']
	    ],
	    base: {
	        hp: 91,
	        atk: 134,
	        def: 95,
	        spa: 100,
	        spd: 100,
	        spe: 80
	    },
	    exp: 270,
	    gold: 50,
	    catchRate: 0.6,
	    tm: [ 151, 161, 172, 1, 2, 5, 9, 10, 13, 15, 17, 21, 56, 64, 77, 83, 113, 117, 132, 29, 30, 47, 48, 84,
	    	 118, 129, 134, 149, 4, 11, 22, 23, 24, 31, 35, 36, 38, 40, 43, 46, 55, 57, 59, 61, 67, 68, 69, 70, 
	    	71, 76, 85, 86, 88, 94, 99, 103, 106, 109, 119, 121, 122, 123, 125, 127, 128, 133, 138, 141, 155, 159 ],    
	    egg: 'dratini',
	},
	'mewtwo': {
	    n: 150,
	    name: ['MEWTWO', 'MEWTWO', '超梦'],
	    portrait: './assets/images/pokemon/portrait/mewtwo.png',
	    image: './assets/images/pokemon/image/mewtwo.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/mewtwo.png',
	    imageShiny: './assets/images/pokemon/image-shiny/mewtwo.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/mewtwo.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/mewtwo.png',
	       idle: {
				src: './assets/images/pokemon/sprite/mewtwo-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mewtwo-idle.png',
				size: [256, 512],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/mewtwo-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mewtwo-attack.png',
				size: [880, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -25,
				correctionX: -15
			},	
	    },
	    type: [type['psychic']],
	    movePool: [
	        move['psychic'], move['shadowBall']
	    ],
	    base: {
	        hp: 106,
	        atk: 110,
	        def: 90,
	        spa: 154,
	        spd: 90,
	        spe: 130
	    },
	    exp: 306,
	    gold: 1000,
	    catchRate: 100,
	    tm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
	    	 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
	    	 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
	    	 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 
	    	 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 
	    	 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 
	    	 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 
	    	 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 
	    	 173, 174, 175, 176, 177, 178, 179, 180 ],
	    egg: 'mewtwo',
	},
	'mew': {
	    n: 151,
	    name: ['MEW', 'MEW', '梦幻'],
	    portrait: './assets/images/pokemon/portrait/mew.png',
	    image: './assets/images/pokemon/image/mew.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/mew.png',
	    imageShiny: './assets/images/pokemon/image-shiny/mew.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/mew.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/mew.png',
	        idle: {
				src: './assets/images/pokemon/sprite/mew-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mew-idle.png',
				size: [128, 448],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -14,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/mew-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mew-attack.png',
				size: [896, 704],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -28,
				correctionX: -7
			},	
	    },
	    type: [type['psychic']],
	    movePool: [
	        move['psychic'], move['auraSphere']
	    ],
	    base: {
	        hp: 100,
	        atk: 100,
	        def: 100,
	        spa: 100,
	        spd: 100,
	        spe: 100
	    },
	    exp: 270,
	    gold: 750,
	    catchRate: 100,
	    tm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
			21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
			39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
			57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
			75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
			93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
			109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 
			123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 
			137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
			152, 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 
			168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180
		],
	    egg: 'mew',
	},
	'chikorita': {
	    n: 152,
	    name: ['CHIKORITA', 'CHIKORITA', '菊草叶'],
	    portrait: './assets/images/pokemon/portrait/chikorita.png',
	    image: './assets/images/pokemon/image/chikorita.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/chikorita.png',
	    imageShiny: './assets/images/pokemon/image-shiny/chikorita.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/chikorita.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/chikorita.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/chikorita-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/chikorita-idle.png',
	            size: [144, 384],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/chikorita-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/chikorita-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['grass']],
	    movePool: [
	        move['tackle']
	    ],
	    base: {
	        hp: 45,
	        atk: 49,
	        def: 65,
	        spa: 49,
	        spd: 65,
	        spe: 45
	    },
	    exp: 64,
	    gold: 10,
	    catchRate: 3,
	    tm: [ 151, 2, 7, 9, 10, 16, 25, 72, 93, 98, 154 ],
	    egg: 'chikorita',
	    evolution: [
	        {
	            pokemon: 'bayleef',
	            condition: {
	                level: 16,
	                move: 'grass',
	                cost: 1500
	            }
	        }
	    ]
	},
	'bayleef': {
	    n: 153,
	    name: ['BAYLEEF', 'BAYLEEF', '月桂叶'],
	    portrait: './assets/images/pokemon/portrait/bayleef.png',
	    image: './assets/images/pokemon/image/bayleef.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/bayleef.png',
	    imageShiny: './assets/images/pokemon/image-shiny/bayleef.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/bayleef.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/bayleef.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/bayleef-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/bayleef-idle.png',
	            size: [160, 448],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -10,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/bayleef-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/bayleef-attack.png',
	            size: [684, 704],
	            position: 6,
	            framesX: 9,
	            framesY: 8,
	            correctionY: -25,
	            correctionX: -5
	        },
	    },
	    type: [type['grass']],
	    movePool: [
	        move['magicalLeaf'], move['bodySlam'], move['stomp'], move['megaDrain']
	    ],
	    base: {
	        hp: 60,
	        atk: 62,
	        def: 80,
	        spa: 63,
	        spd: 80,
	        spe: 60
	    },
	    exp: 142,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 7, 9, 10, 16, 25, 72, 93, 98, 40, 43, 37, 78, 80, 94, 105, 136, 154, 157
	    ],
	    egg: 'chikorita',
	    evolution: [
	        {
	            pokemon: 'meganium',
	            condition: {
	                level: 32,
	                move: 'grass',
	                cost: 5000
	            }
	        }
	    ]
	},
	'meganium': {
	    n: 154,
	    name: ['MEGANIUM', 'MEGANIUM', '大竺葵'],
	    portrait: './assets/images/pokemon/portrait/meganium.png',
	    image: './assets/images/pokemon/image/meganium.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/meganium.png',
	    imageShiny: './assets/images/pokemon/image-shiny/meganium.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/meganium.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/meganium.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/meganium-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/meganium-idle.png',
	            size: [128, 448],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -11,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/meganium-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/meganium-attack.png',
	            size: [936, 768],
	            position: 6,
	            framesX: 13,
	            framesY: 8,
	            correctionY: -30,
	            correctionX: -7
	        },
	    },
	    type: [type['grass']],
	    movePool: [
	        move['petalDance'], move['earthquake'], move['gigaDrain'], move['stomp']
	    ],
	    base: {
	        hp: 80,
	        atk: 82,
	        def: 100,
	        spa: 83,
	        spd: 100,
	        spe: 80
	    },
	    exp: 236,
	    gold: 50,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 7, 9, 10, 16, 25, 72, 93, 98, 40, 43, 37, 64, 78, 80, 94, 105, 136, 23, 27, 42, 60, 69, 82, 113, 120, 126, 128, 130, 131, 148, 154, 157
	    ],
	    egg: 'chikorita',
	},
	'cyndaquil': {
	    n: 155,
	    name: ['CYNDAQUIL', 'CYNDAQUIL', '火球鼠'],
	    portrait: './assets/images/pokemon/portrait/cyndaquil.png',
	    image: './assets/images/pokemon/image/cyndaquil.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/cyndaquil.png',
	    imageShiny: './assets/images/pokemon/image-shiny/cyndaquil.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/cyndaquil.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/cyndaquil.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/cyndaquil-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/cyndaquil-idle.png',
	            size: [48, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 1
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/cyndaquil-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/cyndaquil-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -15,
	            correctionX: -4
	        },
	    },
	    type: [type['fire']],
	    movePool: [
	        move['tackle'],
	    ],
	    base: {
	        hp: 39,
	        atk: 52,
	        def: 43,
	        spa: 60,
	        spd: 50,
	        spe: 65
	    },
	    exp: 62,
	    gold: 10,
	    catchRate: 1,
	    tm: [ 151, 
	    	2, 9, 10, 11, 15, 73, 75, 83, 110, 154, 155
	    ],
	    egg: 'cyndaquil',
	    evolution: [
	        {
	            pokemon: 'quilava',
	            condition: {
	                level: 14,
	                move: 'fire',
	                cost: 1500
	            }
	        }
	    ]
	},
	'quilava': {
	    n: 156,
	    name: ['QUILAVA', 'QUILAVA', '火岩鼠'],
	    portrait: './assets/images/pokemon/portrait/quilava.png',
	    image: './assets/images/pokemon/image/quilava.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/quilava.png',
	    imageShiny: './assets/images/pokemon/image-shiny/quilava.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/quilava.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/quilava.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/quilava-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/quilava-idle.png',
	            size: [160, 192],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: 8,
	            correctionX: 4
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/quilava-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/quilava-attack.png',
	            size: [1024, 640],
	            position: 6,
	            framesX: 16,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['fire']],
	    movePool: [
	        move['flameWheel'], move['swift'], move['flameThrower'], move['quickAttack']
	    ],
	    base: {
	        hp: 58,
	        atk: 64,
	        def: 58,
	        spa: 80,
	        spd: 65,
	        spe: 80
	    },
	    exp: 142,
	    gold: 25,
	    catchRate: 2,
	    tm: [ 151,
	    	2, 9, 10, 11, 15, 73, 75, 83, 110, 4, 5, 13, 43, 68, 70, 86, 154, 155
	    ],
	    egg: 'cyndaquil',
	    evolution: [
	        {
	            pokemon: 'typhlosion',
	            condition: {
	                level: 36,
	                move: 'fire',
	                cost: 5000
	            }
	        }
	    ]
	},
	'typhlosion': {
	    n: 157,
	    name: ['TYPHLOSION', 'TYPHLOSION', '火暴兽'],
	    portrait: './assets/images/pokemon/portrait/typhlosion.png',
	    image: './assets/images/pokemon/image/typhlosion.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/typhlosion.png',
	    imageShiny: './assets/images/pokemon/image-shiny/typhlosion.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/typhlosion.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/typhlosion.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/typhlosion-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/typhlosion-idle.png',
	            size: [128, 448],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -10,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/typhlosion-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/typhlosion-attack.png',
	            size: [896, 704],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -24,
	            correctionX: 0
	        },
	    },
	    type: [type['fire']],
	    movePool: [
	        move['eruption'], move['shadowClaw'], move['flameThrower'], move['earthPower'], move['bodySlam']
	    ],
	    base: {
	        hp: 78,
	        atk: 84,
	        def: 78,
	        spa: 109,
	        spd: 85,
	        spe: 100
	    },
	    exp: 240,
	    gold: 50,
	    catchRate: 1,
	    tm: [ 151, 161, 172, 
	    	2, 9, 10, 11, 15, 73, 75, 83, 110, 4, 5, 13, 43, 68, 70, 86, 22, 23, 36, 39, 40, 61, 69, 81, 85, 94, 119, 125, 140, 153, 154, 155
	    ],
	    egg: 'cyndaquil',
	},
	'totodile': {
	    n: 158,
	    name: ['TOTODILE', 'TOTODILE', '小锯鳄'],
	    portrait: './assets/images/pokemon/portrait/totodile.png',
	    image: './assets/images/pokemon/image/totodile.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/totodile.png',
	    imageShiny: './assets/images/pokemon/image-shiny/totodile.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/totodile.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/totodile.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/totodile-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/totodile-idle.png',
	            size: [224, 384],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 2
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/totodile-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/totodile-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -2
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['scratch']
	    ],
	    base: {
	        hp: 50,
	        atk: 65,
	        def: 64,
	        spa: 44,
	        spd: 48,
	        spe: 43
	    },
	    exp: 66,
	    gold: 10,
	    catchRate: 1,
	    tm: [ 151, 
	    	5, 8, 9, 10, 11, 13, 17, 21, 49, 63, 74, 83, 88, 129, 154, 159
	    ],
	    egg: 'totodile',
	    evolution: [
	        {
	            pokemon: 'croconaw',
	            condition: {
	                level: 18,
	                move: 'water',
	                cost: 1500
	            }
	        }
	    ]
	},
	'croconaw': {
	    n: 159,
	    name: ['CROCONAW', 'CROCONAW', '蓝鳄'],
	    portrait: './assets/images/pokemon/portrait/croconaw.png',
	    image: './assets/images/pokemon/image/croconaw.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/croconaw.png',
	    imageShiny: './assets/images/pokemon/image-shiny/croconaw.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/croconaw.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/croconaw.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/croconaw-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/croconaw-idle.png',
	            size: [64, 384],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/croconaw-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/croconaw-attack.png',
	            size: [792, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: 0
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['aquaJet'], move['iceFang'], move['waterGun'], move['bubbleBeam']
	    ],
	    base: {
	        hp: 65,
	        atk: 80,
	        def: 80,
	        spa: 59,
	        spd: 63,
	        spe: 58
	    },
	    exp: 143,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 161,
	    	5, 8, 9, 10, 11, 13, 17, 21, 49, 63, 74, 83, 88, 129, 22, 29, 39, 40, 43, 47, 48, 61, 37, 77, 118, 119, 125, 141, 154, 159
	    ],
	    egg: 'totodile',
	    evolution: [
	        {
	            pokemon: 'feraligatr',
	            condition: {
	                level: 30,
	                move: 'water',
	                cost: 5000
	            }
	        }
	    ]
	},
	'feraligatr': {
	    n: 160,
	    name: ['FERALIGATR', 'FERALIGATR', '大力鳄'],
	    portrait: './assets/images/pokemon/portrait/feraligatr.png',
	    image: './assets/images/pokemon/image/feraligatr.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/feraligatr.png',
	    imageShiny: './assets/images/pokemon/image-shiny/feraligatr.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/feraligatr.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/feraligatr.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/feraligatr-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/feraligatr-idle.png',
	            size: [240, 448],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -7,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/feraligatr-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/feraligatr-attack.png',
	            size: [864, 640],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: -2
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['crunch'], move['icePunch'], move['surf'], move['hydroPump'], move['aquaTail']
	    ],
	    base: {
	        hp: 85,
	        atk: 105,
	        def: 100,
	        spa: 79,
	        spd: 83,
	        spe: 78
	    },
	    exp: 239,
	    gold: 50,
	    catchRate: 1,
	    tm: [ 151, 161, 174,
	    	5, 8, 9, 10, 11, 13, 17, 21, 49, 63, 64, 74, 83, 88, 129, 22, 29, 39, 40, 43, 47, 48, 61, 37, 77, 118, 119, 
	    	125, 141 ,30, 36, 46, 52, 70, 71, 81, 95, 100, 102, 103, 104, 109, 113, 122, 134, 138, 153, 154, 156, 158, 159
	    ],
	    egg: 'totodile',
	},
	'sentret': {
	    n: 161,
	    name: ['SENTRET', 'SENTRET', '尾立'],
	    portrait: './assets/images/pokemon/portrait/sentret.png',
	    image: './assets/images/pokemon/image/sentret.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/sentret.png',
	    imageShiny: './assets/images/pokemon/image-shiny/sentret.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/sentret.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/sentret.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/sentret-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sentret-idle.png',
	            size: [192, 576],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/sentret-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sentret-attack.png',
	            size: [704, 576],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: -2
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['scratch'], move['quickAttack'], move['pound'], move['tackle']
	    ],
	    base: {
	        hp: 35,
	        atk: 46,
	        def: 34,
	        spa: 35,
	        spd: 45,
	        spe: 20
	    },
	    exp: 43,
	    gold: 5,
	    catchRate: 3,
	    tm: [ 151,
	    	1, 2, 5, 9, 10, 11, 13, 18, 22, 45, 49, 68, 70, 83, 87, 159
	    ],
	    egg: 'sentret',
	    evolution: [
	        {
	            pokemon: 'furret',
	            condition: {
	                level: 15,
	                cost: 300
	            }
	        }
	    ]
	},
	'furret': {
	    n: 162,
	    name: ['FURRET', 'FURRET', '大尾立'],
	    portrait: './assets/images/pokemon/portrait/furret.png',
	    image: './assets/images/pokemon/image/furret.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/furret.png',
	    imageShiny: './assets/images/pokemon/image-shiny/furret.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/furret.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/furret.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/furret-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/furret-idle.png',
	            size: [240, 320],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/furret-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/furret-attack.png',
	            size: [704, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -1
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['swift'], move['quickAttack'], move['bite'], move['pound']
	    ],
	    base: {
	        hp: 85,
	        atk: 76,
	        def: 64,
	        spa: 45,
	        spd: 55,
	        spe: 90
	    },
	    exp: 145,
	    gold: 15,
	    catchRate: 2,
	    tm: [ 151,
	    	1, 2, 5, 9, 10, 11, 13, 18, 22, 30, 36, 40, 41, 43, 45, 49, 67, 68, 70, 76, 83, 87, 88, 103, 138, 141, 146, 149, 159
	    ],
	    egg: 'sentret',
	},
	'hoothoot': {
	    n: 163,
	    name: ['HOOTHOOT', 'HOOTHOOT', '咕咕'],
	    portrait: './assets/images/pokemon/portrait/hoothoot.png',
	    image: './assets/images/pokemon/image/hoothoot.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/hoothoot.png',
	    imageShiny: './assets/images/pokemon/image-shiny/hoothoot.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/hoothoot.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/hoothoot.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/hoothoot-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hoothoot-idle.png',
	            size: [96, 256],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/hoothoot-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hoothoot-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: -7
	        },
	    },
	    type: [type['normal'], type['flying']],
	    movePool: [
	        move['peck'], move['wingAttack'], move['tackle'], move['gust']
	    ],
	    base: {
	        hp: 60,
	        atk: 30,
	        def: 30,
	        spa: 36,
	        spd: 56,
	        spe: 50
	    },
	    exp: 52,
	    gold: 6,
	    catchRate: 3,
	    tm: [ 151,
	    	2, 5, 6, 9, 10, 20, 24, 28, 57, 59, 65, 70, 87 
	    ],
	    egg: 'hoothoot',
	    evolution: [
	        {
	            pokemon: 'noctowl',
	            condition: {
	                level: 20,
	                time: 'night',
	                cost: 1400
	            }
	        }
	    ]
	},
	'noctowl': {
	    n: 164,
	    name: ['NOCTOWL', 'NOCTOWL', '猫头夜鹰'],
	    portrait: './assets/images/pokemon/portrait/noctowl.png',
	    image: './assets/images/pokemon/image/noctowl.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/noctowl.png',
	    imageShiny: './assets/images/pokemon/image-shiny/noctowl.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/noctowl.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/noctowl.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/noctowl-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/noctowl-idle.png',
	            size: [640, 512],
	            position: 6,
	            framesX: 16,
	            framesY: 8,
	            correctionY: -13,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/noctowl-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/noctowl-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -15,
	            correctionX: 0
	        },
	    },
	    type: [type['normal'], type['flying']],
	    movePool: [
	        move['airSlash'], move['gust'], move['quickAttack'], move['confusion'], move['wingAttack']
	    ],
	    base: {
	        hp: 100,
	        atk: 50,
	        def: 50,
	        spa: 76,
	        spd: 96,
	        spe: 70
	    },
	    exp: 158,
	    gold: 14,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 5, 6, 9, 10, 20, 24, 28, 59, 70, 87, 3, 30, 57, 65, 67, 68, 90, 99, 106, 132, 149, 
	    ],
	    egg: 'hoothoot',
	},
	'ledyba': {
	    n: 165,
	    name: ['LEDYBA', 'LEDYBA', '芭瓢虫'],
	    portrait: './assets/images/pokemon/portrait/ledyba.png',
	    image: './assets/images/pokemon/image/ledyba.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/ledyba.png',
	    imageShiny: './assets/images/pokemon/image-shiny/ledyba.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/ledyba.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/ledyba.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/ledyba-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ledyba-idle.png',
	            size: [480, 384],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 2
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/ledyba-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ledyba-attack.png',
	            size: [1008, 576],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: -3
	        },
	    },
	    type: [type['bug'], type['flying']],
	    movePool: [
	        move['confusion'], move['bugbit'], move['tackle'], move['stringShot'], move['pound']
	    ],
	    base: {
	        hp: 40,
	        atk: 20,
	        def: 30,
	        spa: 40,
	        spd: 80,
	        spe: 55
	    },
	    exp: 53,
	    gold: 3,
	    catchRate: 5,
	    tm: [ 151,
	    	1, 2, 5, 9, 10, 12, 20, 24, 26, 33, 45, 49, 50, 59, 83, 96, 
	    ],
	    egg: 'ledyba',
	    evolution: [
	        {
	            pokemon: 'ledian',
	            condition: {
	                level: 18,
	                time: 'day',
	                cost: 650
	            }
	        }
	    ]
	},
	'ledian': {
	    n: 166,
	    name: ['LEDIAN', 'LEDIAN', '安瓢虫'],
	    portrait: './assets/images/pokemon/portrait/ledian.png',
	    image: './assets/images/pokemon/image/ledian.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/ledian.png',
	    imageShiny: './assets/images/pokemon/image-shiny/ledian.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/ledian.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/ledian.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/ledian-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ledian-idle.png',
	            size: [384, 448],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -10,
	            correctionX: 2
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/ledian-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ledian-attack.png',
	  	        size: [896, 640],          
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -4
	        },
	    },
	    type: [type['bug'], type['flying']],
	    movePool: [
	        move['cometPunch'], move['aerialAce'], move['bugbit'], move['psybeam'], move['confusion']
	    ],
	    base: {
	        hp: 55,
	        atk: 35,
	        def: 50,
	        spa: 55,
	        spd: 110,
	        spe: 85
	    },
	    exp: 137,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151, 162, 171, 177,
	    	1, 2, 5, 9, 10, 12, 20, 24, 26, 33, 45, 49, 50, 59, 64, 83, 96, 3, 22, 35, 36, 38, 39, 46, 54, 57, 61, 68, 70, 81, 91, 92, 99, 109, 116, 119, 125, 130, 149, 156
	    ],
	    egg: 'ledyba',
	},
	'spinarak': {
	    n: 167,
	    name: ['SPINARAK', 'SPINARAK', '圆丝蛛'],
	    portrait: './assets/images/pokemon/portrait/spinarak.png',
	    image: './assets/images/pokemon/image/spinarak.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/spinarak.png',
	    imageShiny: './assets/images/pokemon/image-shiny/spinarak.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/spinarak.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/spinarak.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/spinarak-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/spinarak-idle.png',
	            size: [96, 192],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 9,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/spinarak-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/spinarak-attack.png',
	            size: [768, 576],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -15,
	            correctionX: -5
	        },
	    },
	    type: [type['bug'], type['poison']],
	    movePool: [
	        move['poisonSting'], move['bugbit'], move['shadowSneak'], move['stringShot']
	    ],
	    base: {
	        hp: 40,
	        atk: 60,
	        def: 40,
	        spa: 40,
	        spd: 40,
	        spe: 30
	    },
	    exp: 50,
	    gold: 4,
	    catchRate: 5,
	    tm: [ 151, 178,
	    	9, 10, 12, 26, 28, 32, 33, 50, 53, 70, 83, 98, 100, 143, 146, 149
	    ],
	    egg: 'spinarak',
	    evolution: [
	        {
	            pokemon: 'ariados',
	            condition: {
	                level: 22,
	                time: 'night',
	                cost: 650
	            }
	        }
	    ]
	},
	'ariados': {
	    n: 168,
	    name: ['ARIADOS', 'ARIADOS', '阿利多斯'],
	    portrait: './assets/images/pokemon/portrait/ariados.png',
	    image: './assets/images/pokemon/image/ariados.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/ariados.png',
	    imageShiny: './assets/images/pokemon/image-shiny/ariados.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/ariados.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/ariados.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/ariados-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ariados-idle.png',
	            size: [320, 320],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: 2,
	            correctionX: 1
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/ariados-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ariados-attack.png',
	            size: [704, 512],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -11,
	            correctionX: -2
	        },
	    },
	    type: [type['bug'], type['poison']],
	    movePool: [
	        move['leechLife'], move['shadowSneak'], move['bugbit'], move['pursuit'], move['stringShot']
	    ],
	    base: {
	        hp: 70,
	        atk: 90,
	        def: 70,
	        spa: 60,
	        spd: 70,
	        spe: 40
	    },
	    exp: 140,
	    gold: 8,
	    catchRate: 2,
	    tm: [ 151, 169, 170, 171, 178, 9, 10, 12, 26, 28, 32, 33, 50, 53, 70, 83, 98, 100, 143, 146, 149, 
	    	81, 91, 95, 97, 101, 103, 118, 142, 144 ],
	    egg: 'spinarak',
	},
	'crobat': {
	    n: 169,
	    name: ['CROBAT', 'CROBAT', '叉字蝠'],
	    portrait: './assets/images/pokemon/portrait/crobat.png',
	    image: './assets/images/pokemon/image/crobat.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/crobat.png',
	    imageShiny: './assets/images/pokemon/image-shiny/crobat.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/crobat.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/crobat.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/crobat-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/crobat-idle.png',
	            size: [320, 448],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -4,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/crobat-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/crobat-attack.png',
	            size: [1008, 640],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: -4
	        },
	    },
	    type: [type['poison'], type['flying']],
	    movePool: [
	        move['airSlash'], move['crossPoison'], move['hurricane'], move['wingAttack'], move['fly']
	    ],
	    base: {
	        hp: 85,
	        atk: 90,
	        def: 80,
	        spa: 70,
	        spd: 80,
	        spe: 130
	    },
	    exp: 241,
	    gold: 40,
	    catchRate: 0.6,
	    tm: [ 151, 5, 10, 12, 24, 26, 28, 53, 55, 57, 59, 63, 65, 70, 76, 91, 96, 98, 99, 100, 106, 
	    	118, 137, 141, 143, 144, 146, 147, 148, 161, 169, 170, 171 ],
		egg: 'zubat',
	},
	'chinchou': {
	    n: 170,
	    name: ['CHINCHOU', 'CHINCHOU', '灯笼鱼'],
	    portrait: './assets/images/pokemon/portrait/chinchou.png',
	    image: './assets/images/pokemon/image/chinchou.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/chinchou.png',
	    imageShiny: './assets/images/pokemon/image-shiny/chinchou.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/chinchou.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/chinchou.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/chinchou-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/chinchou-idle.png',
	            size: [160, 320],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: -2,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/chinchou-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/chinchou-attack.png',
	            size: [880, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -25,
	            correctionX: -7
	        },
	    },
	    type: [type['water'], type['electric']],
	    movePool: [
	        move['bubbleBeam'], move['spark'], move['tackle'], move['bubble']
	    ],
	    base: {
	        hp: 75,
	        atk: 38,
	        def: 38,
	        spa: 56,
	        spd: 56,
	        spe: 67
	    },
	    exp: 90,
	    gold: 9,
	    catchRate: 2,
	    tm: [ 151, 8, 10, 17, 21, 31, 77, 79, 135, 145, 159 ],
	    egg: 'chinchou',
	    evolution: [
	        {
	            pokemon: 'lanturn',
	            condition: {
	                level: 27,
	                cost: 3000
	            }
	        }
	    ]
	},
	'lanturn': {
	    n: 171,
	    name: ['LANTURN', 'LANTURN', '电灯怪'],
	    portrait: './assets/images/pokemon/portrait/lanturn.png',
	    image: './assets/images/pokemon/image/lanturn.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/lanturn.png',
	    imageShiny: './assets/images/pokemon/image-shiny/lanturn.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/lanturn.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/lanturn.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/lanturn-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/lanturn-idle.png',
	            size: [288, 448],
	            position: 6,
	            framesX: 9,
	            framesY: 8,
	            correctionY: -13,
	            correctionX: 4
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/lanturn-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/lanturn-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -23,
	            correctionX: -4
	        },
	    },
	    type: [type['water'], type['electric']],
	    movePool: [
	        move['thunderShock'], move['waterGun'], move['bubbleBeam'], move['spark']
	    ],
	    base: {
	        hp: 125,
	        atk: 58,
	        def: 58,
	        spa: 76,
	        spd: 76,
	        spe: 67
	    },
	    exp: 161,
	    gold: 14,
	    catchRate: 1,
	    tm: [ 151, 163, 166, 8, 10, 17, 21, 31, 77, 79, 135, 145, 2, 29, 30, 37, 47, 67, 121, 
	    	123, 129, 130, 159 ],
	    egg: 'chinchou',
	},
	'pichu': {
	    n: 172,
	    name: ['PICHU', 'PICHU', '皮丘'],
	    portrait: './assets/images/pokemon/portrait/pichu.png',
	    image: './assets/images/pokemon/image/pichu.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/pichu.png',
	    imageShiny: './assets/images/pokemon/image-shiny/pichu.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/pichu.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/pichu.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/pichu-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pichu-idle.png',
	            size: [128, 384],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/pichu-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pichu-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -5
	        },
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunderShock'], move['pound'], move['tackle'], move['quickAttack']
	    ],
	    base: {
	        hp: 20,
	        atk: 40,
	        def: 15,
	        spa: 35,
	        spd: 35,
	        spe: 60
	    },
	    exp: 41,
	    gold: 5,
	    catchRate: 5,
	   	tm: [ 151,
			5, 10, 11, 18, 31, 45, 47, 68, 70, 79, 83
		],
		egg: 'pichu',
	    evolution: [
	        {
	            pokemon: 'pikachu',
	            condition: {
	                level: 5,
	                item: 'loveSweet',
	                cost: 500
	            }
	        }
	    ]
	},
	'cleffa': {
	    n: 173,
	    name: ['CLEFFA', 'CLEFFA', '皮宝宝'],
	    portrait: './assets/images/pokemon/portrait/cleffa.png',
	    image: './assets/images/pokemon/image/cleffa.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/cleffa.png',
	    imageShiny: './assets/images/pokemon/image-shiny/cleffa.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/cleffa.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/cleffa.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/cleffa-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/cleffa-idle.png',
	            size: [48, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/cleffa-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/cleffa-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: -5
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['pound'], move['metronome'], move['tackle']
	    ],
	    base: {
	        hp: 50,
	        atk: 25,
	        def: 28,
	        spa: 45,
	        spd: 55,
	        spe: 15
	    },
	    exp: 44,
	    gold: 5,
	    catchRate: 5,
	    tm: [ 151,
			1, 2, 10, 18, 41, 43, 45, 46, 68, 83, 87, 93, 112
		],
		egg: 'cleffa',
	    evolution: [
	        {
	            pokemon: 'clefairy',
	            condition: {
	                level: 5,
	                item: 'loveSweet',
	                cost: 500
	            }
	        }
	    ]
	},
	'igglybuff': {
	    n: 174,
	    name: ['IGGLYBUFF', 'IGGLYBUFF', '宝宝丁'],
	    portrait: './assets/images/pokemon/portrait/igglybuff.png',
	    image: './assets/images/pokemon/image/igglybuff.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/igglybuff.png',
	    imageShiny: './assets/images/pokemon/image-shiny/igglybuff.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/igglybuff.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/igglybuff.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/igglybuff-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/igglybuff-idle.png',
	            size: [48, 192],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 8,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/igglybuff-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/igglybuff-attack.png',
	            size: [792, 576],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: -7
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['tackle'], move['pound'], move['metronome']
	    ],
	    base: {
	        hp: 90,
	        atk: 30,
	        def: 15,
	        spa: 40,
	        spd: 20,
	        spe: 15
	    },
	    exp: 42,
	    gold: 5,
	    catchRate: 5,
	    tm: [ 151,
			1, 2, 3, 5, 9, 11, 20, 38, 39, 41, 45, 83, 87, 93, 150
		],
		egg: 'igglybuff',
	    evolution: [
	        {
	            pokemon: 'jigglypuff',
	            condition: {
	                level: 5,
	                item: 'loveSweet',
	                cost: 500
	            }
	        }
	    ]
	},
	'togepi': {
	    n: 175,
	    name: ['TOGEPI', 'TOGEPI', '波克比'],
	    portrait: './assets/images/pokemon/portrait/togepi.png',
	    image: './assets/images/pokemon/image/togepi.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/togepi.png',
	    imageShiny: './assets/images/pokemon/image-shiny/togepi.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/togepi.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/togepi.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/togepi-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/togepi-idle.png',
	            size: [96, 256],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/togepi-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/togepi-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: -7
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['metronome'], move['eggBomb'], move['tackle'], move['pound']
	    ],
	    base: {
	        hp: 35,
	        atk: 20,
	        def: 65,
	        spa: 40,
	        spd: 65,
	        spe: 20
	    },
	    exp: 49,
	    gold: 10,
	    catchRate: 1,
	    tm: [ 151,
	    	9, 10, 18, 20, 41, 43, 45, 64, 68, 83, 87, 112
	    ],
	    egg: 'togepi',
	    evolution: [
	        {
	            pokemon: 'togetic',
	            condition: {
	                level: 20,
	                item: 'loveSweet',
	                cost: 5000
	            }
	        }
	    ]
	},
	'togetic': {
	    n: 176,
	    name: ['TOGETIC', 'TOGETIC', '波克基古'],
	    portrait: './assets/images/pokemon/portrait/togetic.png',
	    image: './assets/images/pokemon/image/togetic.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/togetic.png',
	    imageShiny: './assets/images/pokemon/image-shiny/togetic.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/togetic.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/togetic.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/togetic-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/togetic-idle.png',
	            size: [144, 384],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/togetic-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/togetic-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 0
	        },
	    },
	    type: [type['normal'], type['flying']],
	    movePool: [
	        move['ancientPower'], move['airSlash'], move['eggBomb'], move['gust'], move['fly']
	    ],
	    base: {
	        hp: 55,
	        atk: 40,
	        def: 85,
	        spa: 80,
	        spd: 105,
	        spe: 40
	    },
	    exp: 142,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151,
	    	9, 10, 18, 20, 41, 43, 45, 64, 68, 83, 87, 112, 2, 3, 5, 19, 24, 30, 31, 34, 35, 36, 38, 40, 48, 55, 56, 57, 
	    	58, 59, 61, 67, 70, 77, 78, 79, 84, 90, 92, 96, 99, 101, 106, 109, 116, 119, 121, 123, 125, 126, 127, 130, 132, 133, 135, 136, 145, 150, 
	    ],
	    egg: 'togepi',
	},
	'natu': {
	    n: 177,
	    name: ['NATU', 'NATU', '天然雀'],
	    portrait: './assets/images/pokemon/portrait/natu.png',
	    image: './assets/images/pokemon/image/natu.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/natu.png',
	    imageShiny: './assets/images/pokemon/image-shiny/natu.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/natu.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/natu.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/natu-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/natu-idle.png',
	            size: [96, 256],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/natu-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/natu-attack.png',
	            size: [720, 512],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -11,
	            correctionX: 0
	        },
	    },
	    type: [type['psychic'], type['flying']],
	    movePool: [
	        move['peck'], move['confusion'], move['tackle'], move['gust']
	    ],
	    base: {
	        hp: 40,
	        atk: 50,
	        def: 45,
	        spa: 70,
	        spd: 45,
	        spe: 70
	    },
	    exp: 64,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151,
	    	2, 3, 5, 6, 9, 10, 12, 20, 24, 41, 49, 59, 64, 87, 93, 
	    ],
	    egg: 'natu',
	    evolution: [
	        {
	            pokemon: 'xatu',
	            condition: {
	                level: 25,
	                cost: 1600
	            }
	        }
	    ]
	},
	'xatu': {
	    n: 178,
	    name: ['XATU', 'XATU', '天然鸟'],
	    portrait: './assets/images/pokemon/portrait/xatu.png',
	    image: './assets/images/pokemon/image/xatu.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/xatu.png',
	    imageShiny: './assets/images/pokemon/image-shiny/xatu.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/xatu.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/xatu.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/xatu-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/xatu-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 4
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/xatu-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/xatu-attack.png',
	            size: [792, 576],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: -8
	        },
	    },
	    type: [type['psychic'], type['flying']],
	    movePool: [
	        move['psybeam'], move['silverWind'], move['confusion'], move['wingAttack']
	    ],
	    base: {
	        hp: 65,
	        atk: 75,
	        def: 70,
	        spa: 95,
	        spd: 70,
	        spe: 95
	    },
	    exp: 165,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 3, 5, 6, 9, 10, 12, 20, 24, 41, 49, 59, 64, 65, 87, 93, 19, 34, 55, 57, 62, 70, 79, 90, 92, 96, 101, 106, 112, 123, 127, 128, 130, 133, 136, 143, 146, 
	    ],
	    egg: 'natu',
	},
	'mareep': {
	    n: 179,
	    name: ['MAREEP', 'MAREEP', '咩利羊'],
	    portrait: './assets/images/pokemon/portrait/mareep.png',
	    image: './assets/images/pokemon/image/mareep.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/mareep.png',
	    imageShiny: './assets/images/pokemon/image-shiny/mareep.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/mareep.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/mareep.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/mareep-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/mareep-idle.png',
	            size: [192, 320],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -3,
	            correctionX: 2
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/mareep-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/mareep-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -3
	        },
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunderShock'], move['stomp'], move['tackle'], move['pound']
	    ],
	    base: {
	        hp: 55,
	        atk: 40,
	        def: 40,
	        spa: 65,
	        spd: 45,
	        spe: 35
	    },
	    exp: 56,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151,
	    	2, 5, 9, 10, 13, 31, 68, 79, 83, 87, 135, 145, 
	    ],
	    egg: 'mareep',
	    evolution: [
	        {
	            pokemon: 'flaaffy',
	            condition: {
	                level: 15,
	                cost: 900
	            }
	        }
	    ]
	},
	'flaaffy': {
	    n: 180,
	    name: ['FLAAFFY', 'FLAAFFY', '茸茸羊'],
	    portrait: './assets/images/pokemon/portrait/flaaffy.png',
	    image: './assets/images/pokemon/image/flaaffy.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/flaaffy.png',
	    imageShiny: './assets/images/pokemon/image-shiny/flaaffy.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/flaaffy.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/flaaffy.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/flaaffy-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/flaaffy-idle.png',
	            size: [192, 384],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -7,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/flaaffy-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/flaaffy-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -22,
	            correctionX: 0
	        },
	    },
	    type: [type['electric']],
	    movePool: [
	        move['electroBall'], move['thunderShock'], move['quickAttack']
	    ],
	    base: {
	        hp: 70,
	        atk: 55,
	        def: 55,
	        spa: 80,
	        spd: 60,
	        spe: 45
	    },
	    exp: 128,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151, 178,
	    	2, 5, 9, 10, 13, 31, 68, 79, 83, 87, 135, 145, 43, 61, 70, 123, 141, 
	    ],
	    egg: 'mareep',
	    evolution: [
	        {
	            pokemon: 'ampharos',
	            condition: {
	                level: 30,
	                cost: 3800
	            }
	        }
	    ]
	},
	'ampharos': {
	    n: 181,
	    name: ['AMPHAROS', 'AMPHAROS', '电龙'],
	    portrait: './assets/images/pokemon/portrait/ampharos.png',
	    image: './assets/images/pokemon/image/ampharos.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/ampharos.png',
	    imageShiny: './assets/images/pokemon/image-shiny/ampharos.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/ampharos.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/ampharos.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/ampharos-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ampharos-idle.png',
	            size: [224, 512],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -11,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/ampharos-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ampharos-attack.png',
	            size: [784, 704],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -25,
	            correctionX: -4
	        },
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunderPunch'], move['electroBall'], move['thunderShock']
	    ],
	    base: {
	        hp: 90,
	        atk: 75,
	        def: 85,
	        spa: 115,
	        spd: 90,
	        spe: 55
	    },
	    exp: 230,
	    gold: 20,
	    catchRate: 0.9,
	    tm: [ 151, 166, 178, 2, 5, 9, 10, 13, 31, 68, 79, 83, 87, 135, 145, 43, 61, 70, 123, 141, 30, 36, 39, 89, 113, 121, 134 ],
	    egg: 'mareep',
	},
	'bellossom': {
	    n: 182,
	    name: ['BELLOSSOM', 'BELLOSSOM', '美丽花'],
	    portrait: './assets/images/pokemon/portrait/bellossom.png',
	    image: './assets/images/pokemon/image/bellossom.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/bellossom.png',
	    imageShiny: './assets/images/pokemon/image-shiny/bellossom.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/bellossom.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/bellossom.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/bellossom-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/bellossom-idle.png',
	            size: [92, 256],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 4,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/bellossom-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/bellossom-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -15,
	            correctionX: 0
	        },
	    },
	    type: [type['grass']],
	    movePool: [
	        move['magicalLeaf'], move['gigaDrain'], move['sludgeBomb']
	    ],
	    base: {
	        hp: 75,
	        atk: 80,
	        def: 95,
	        spa: 90,
	        spd: 100,
	        spe: 50
	    },
	    exp: 221,
	    gold: 25,
	    catchRate: 1,
	   	tm: [ 151, 180, 7, 9, 10, 16, 25, 27, 32, 49, 53, 60, 64, 78, 80, 83, 97, 98, 105, 126, 136, 142, 
	   		148, 157, 162, 164, 169, 180 ],
		egg: 'oddish',
	},
	'marill': {
	    n: 183,
	    name: ['MARILL', 'MARILL', '玛力露'],
	    portrait: './assets/images/pokemon/portrait/marill.png',
	    image: './assets/images/pokemon/image/marill.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/marill.png',
	    imageShiny: './assets/images/pokemon/image-shiny/marill.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/marill.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/marill.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/marill-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/marill-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/marill-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/marill-attack.png',
	            size: [704, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: 0
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['waterGun'], move['bubble'], move['tackle'], move['pound']
	    ],
	    base: {
	        hp: 70,
	        atk: 20,
	        def: 50,
	        spa: 20,
	        spd: 50,
	        spe: 40
	    },
	    exp: 88,
	    gold: 6,
	    catchRate: 2,
	    tm: [ 151,
	    	1, 2, 8, 9, 10, 17, 21, 40, 41, 45, 47, 62, 83, 87, 93, 109, 112, 159
	    ],
	    egg: 'marill',
	    evolution: [
	        {
	            pokemon: 'azumarill',
	            condition: {
	                level: 18,
	                cost: 1850
	            }
	        }
	    ]
	},
	'azumarill': {
	    n: 184,
	    name: ['AZUMARILL', 'AZUMARILL', '玛力露丽'],
	    portrait: './assets/images/pokemon/portrait/azumarill.png',
	    image: './assets/images/pokemon/image/azumarill.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/azumarill.png',
	    imageShiny: './assets/images/pokemon/image-shiny/azumarill.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/azumarill.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/azumarill.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/azumarill-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/azumarill-idle.png',
	            size: [128, 384],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 4
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/azumarill-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/azumarill-attack.png',
	            size: [704, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -25,
	            correctionX: 0
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['aquaJet'], move['bubbleBeam'], move['waterGun'], move['aquaTail']
	    ],
	    base: {
	        hp: 100,
	        atk: 50,
	        def: 80,
	        spa: 60,
	        spd: 80,
	        spe: 50
	    },
	    exp: 210,
	    gold: 10,
	    catchRate: 1,
	    tm: [ 151, 174,
	    	1, 2, 8, 9, 10, 17, 21, 40, 41, 45, 47, 62, 83, 87, 93, 109, 112, 29, 36, 37, 39, 43, 56, 67, 70, 77, 84, 102, 113, 119, 129, 159 
	    ],
	    egg: 'marill',
	},
	'sudowoodo': {
	    n: 185,
	    name: ['SUDOWOODO', 'SUDOWOODO', '树才怪'],
	    portrait: './assets/images/pokemon/portrait/sudowoodo.png',
	    image: './assets/images/pokemon/image/sudowoodo.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/sudowoodo.png',
	    imageShiny: './assets/images/pokemon/image-shiny/sudowoodo.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/sudowoodo.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/sudowoodo.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/sudowoodo-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sudowoodo-idle.png',
	            size: [24, 320],
	            position: 6,
	            framesX: 1,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/sudowoodo-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sudowoodo-attack.png',
	            size: [792, 576],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: -4
	        },
	    },
	    type: [type['rock']],
	    movePool: [
	        move['rockThrow'], move['lowKick'], move['rockSlide'], move['pound'], move['rollout']
	    ],
	    base: {
	        hp: 70,
	        atk: 100,
	        def: 115,
	        spa: 30,
	        spd: 65,
	        spe: 30
	    },
	    exp: 144,
	    gold: 20,
	    catchRate: 1,
	    tm: [ 151, 161, 176, 179,
	    	1, 2, 9, 10, 13, 19, 22, 23, 36, 38, 39, 40, 42, 43, 46, 61, 67, 69, 70, 81, 83, 87, 93, 109, 116, 119, 125, 126, 128, 131, 136, 
	    ],
	    egg: 'sudowoodo',
	},
	'politoed': {
	    n: 186,
	    name: ['POLITOED', 'POLITOED', '蚊香蛙皇'],
	    portrait: './assets/images/pokemon/portrait/politoed.png',
	    image: './assets/images/pokemon/image/politoed.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/politoed.png',
	    imageShiny: './assets/images/pokemon/image-shiny/politoed.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/politoed.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/politoed.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/politoed-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/politoed-idle.png',
	            size: [160, 512],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/politoed-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/politoed-attack.png',
	            size: [864, 832],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -34,
	            correctionX: 0
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['bubbleBeam'], move['surf'], move['lick'], move['waterGun'], move['hydroPump']
	    ],
	    base: {
	        hp: 90,
	        atk: 75,
	        def: 75,
	        spa: 90,
	        spd: 100,
	        spe: 70
	    },
	    exp: 225,
	    gold: 22,
	    catchRate: 0.7,
	    tm: [ 151, 163, 177, 8, 9, 10, 17, 21, 29, 37, 44, 47, 48, 56, 62, 63, 67, 77, 83, 84, 93, 113, 129, 133, 159 ],
		egg: 'poliwag',
	},
	'hoppip': {
	    n: 187,
	    name: ['HOPPIP', 'HOPPIP', '毽子草'],
	    portrait: './assets/images/pokemon/portrait/hoppip.png',
	    image: './assets/images/pokemon/image/hoppip.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/hoppip.png',
	    imageShiny: './assets/images/pokemon/image-shiny/hoppip.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/hoppip.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/hoppip.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/hoppip-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hoppip-idle.png',
	            size: [480, 448],
	            position: 6,
	            framesX: 15,
	            framesY: 8,
	            correctionY: -8,
	            correctionX: 7
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/hoppip-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hoppip-attack.png',
	            size: [1296, 704],
	            position: 6,
	            framesX: 18,
	            framesY: 8,
	            correctionY: -29,
	            correctionX: 0
	        },
	    },
	    type: [type['grass'], type['flying']],
	    movePool: [
	        move['absorb'], move['gust'], move['tackle'], move['razorLeaf']
	    ],
	    base: {
	        hp: 35,
	        atk: 35,
	        def: 40,
	        spa: 35,
	        spd: 55,
	        spe: 50
	    },
	    exp: 50,
	    gold: 3,
	    catchRate: 3,
	    tm: [ 151,
	    	7, 9, 10, 25, 59, 68, 70, 83, 93, 98, 
	    ],
	    egg: 'hoppip',
	    evolution: [
	        {
	            pokemon: 'skiploom',
	            condition: {
	                level: 18,
	                cost: 900
	            }
	        }
	    ]
	},
	'skiploom': {
	    n: 188,
	    name: ['SKIPLOOM', 'SKIPLOOM', '毽子花'],
	    portrait: './assets/images/pokemon/portrait/skiploom.png',
	    image: './assets/images/pokemon/image/skiploom.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/skiploom.png',
	    imageShiny: './assets/images/pokemon/image-shiny/skiploom.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/skiploom.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/skiploom.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/skiploom-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/skiploom-idle.png',
	            size: [48, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 5,
	            correctionX: 7
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/skiploom-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/skiploom-attack.png',
	            size: [1296, 576],
	            position: 6,
	            framesX: 18,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: -4
	        },
	    },
	    type: [type['grass'], type['flying']],
	    movePool: [
	        move['megaDrain'], move['razorLeaf'], move['absorb'],
	    ],
	    base: {
	        hp: 55,
	        atk: 45,
	        def: 50,
	        spa: 45,
	        spd: 65,
	        spe: 80
	    },
	    exp: 119,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151, 177, 180, 9, 10, 25, 59, 68, 70, 83, 93, 98, 57, 78, 80, 92, 105, 106, 136 ],
	    egg: 'hoppip',
	    evolution: [
	        {
	            pokemon: 'jumpluff',
	            condition: {
	                level: 27,
	                cost: 1650
	            }
	        }
	    ]
	},
	'jumpluff': {
	    n: 189,
	    name: ['JUMPLUFF', 'JUMPLUFF', '毽子棉'],
	    portrait: './assets/images/pokemon/portrait/jumpluff.png',
	    image: './assets/images/pokemon/image/jumpluff.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/jumpluff.png',
	    imageShiny: './assets/images/pokemon/image-shiny/jumpluff.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/jumpluff.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/jumpluff.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/jumpluff-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/jumpluff-idle.png',
	            size: [96, 256],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 7,
	            correctionX: 9
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/jumpluff-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/jumpluff-attack.png',
	            size: [1296, 640],
	            position: 6,
	            framesX: 18,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -3
	        },
	    },
	    type: [type['grass'], type['flying']],
	    movePool: [
	        move['fly'], move['quickAttack'], move['megaDrain']
	    ],
	    base: {
	        hp: 75,
	        atk: 55,
	        def: 70,
	        spa: 55,
	        spd: 95,
	        spe: 110
	    },
	    exp: 207,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151, 157, 177, 180,
	    	9, 10, 25, 59, 68, 70, 83, 93, 98, 57, 78, 80, 92, 105, 106, 136, 5, 27, 42, 76, 99, 127, 148, 180
	    ],
	    egg: 'hoppip',
	},
	'aipom': {
	    n: 190,
	    name: ['AIPOM', 'AIPOM', '长尾怪手'],
	    portrait: './assets/images/pokemon/portrait/aipom.png',
	    image: './assets/images/pokemon/image/aipom.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/aipom.png',
	    imageShiny: './assets/images/pokemon/image-shiny/aipom.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/aipom.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/aipom.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/aipom-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/aipom-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 7
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/aipom-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/aipom-attack.png',
	            size: [800, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: -2
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['scratch'], move['swift'], move['fakeOut'], move['quickAttack']
	    ],
	    base: {
	        hp: 55,
	        atk: 70,
	        def: 55,
	        spa: 40,
	        spd: 55,
	        spe: 85
	    },
	    exp: 72,
	    gold: 15,
	    catchRate: 2,
	    tm: [ 151,
	    	1, 2, 59, 10, 11, 13, 18, 22, 28, 35, 36, 38, 39, 40, 41, 43, 45, 46, 49, 50, 54, 61, 
	    	67, 68, 70, 76, 81, 83, 87, 88, 91, 93, 94, 102, 107, 109, 111, 112, 116, 119, 125, 138, 141, 146, 149, 159
	    ],
	    egg: 'aipom',
	},
	'sunkern': {
	    n: 191,
	    name: ['SUNKERN', 'SUNKERN', '向日种子'],
	    portrait: './assets/images/pokemon/portrait/sunkern.png',
	    image: './assets/images/pokemon/image/sunkern.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/sunkern.png',
	    imageShiny: './assets/images/pokemon/image-shiny/sunkern.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/sunkern.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/sunkern.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/sunkern-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sunkern-idle.png',
	            size: [48, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/sunkern-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sunkern-attack.png',
	            size: [792, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -27,
	            correctionX: -2
	        },
	    },
	    type: [type['grass']],
	    movePool: [
	        move['absorb'], move['razorLeaf'], move['vineWhip'], move['tackle']
	    ],
	    base: {
	        hp: 30,
	        atk: 30,
	        def: 30,
	        spa: 30,
	        spd: 30,
	        spe: 30
	    },
	    exp: 36,
	    gold: 10,
	    catchRate: 3,
	    tm: [ 151,
	    	7, 9, 10, 16, 25, 51, 83, 98, 
	    ],
	    egg: 'sunkern',
	    evolution: [
	        {
	            pokemon: 'sunflora',
	            condition: {
	                level: 18,
	                item: 'sunStone',
	                cost: 1100
	            }
	        }
	    ]
	},
	'sunflora': {
	    n: 192,
	    name: ['SUNFLORA', 'SUNFLORA', '向日花怪'],
	    portrait: './assets/images/pokemon/portrait/sunflora.png',
	    image: './assets/images/pokemon/image/sunflora.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/sunflora.png',
	    imageShiny: './assets/images/pokemon/image-shiny/sunflora.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/sunflora.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/sunflora.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/sunflora-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sunflora-idle.png',
	            size: [512, 448],
	            position: 6,
	            framesX: 16,
	            framesY: 8,
	            correctionY: -9,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/sunflora-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sunflora-attack.png',
	            size: [760, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -2
	        },
	    },
	    type: [type['grass']],
	    movePool: [
	        move['razorLeaf'], move['absorb'], move['megaDrain']
	    ],
	    base: {
	        hp: 75,
	        atk: 75,
	        def: 55,
	        spa: 105,
	        spd: 85,
	        spe: 30
	    },
	    exp: 149,
	    gold: 20,
	    catchRate: 2,
	    tm: [ 151, 7, 9, 10, 16, 25, 51, 83, 98, 15, 27, 42, 78, 80, 86, 105, 136, 148, 157, 180 ],
	    egg: 'sunkern',
	},
	'yanma': {
	    n: 193,
	    name: ['YANMA', 'YANMA', '蜻蜻蜓'],
	    portrait: './assets/images/pokemon/portrait/yanma.png',
	    image: './assets/images/pokemon/image/yanma.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/yanma.png',
	    imageShiny: './assets/images/pokemon/image-shiny/yanma.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/yanma.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/yanma.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/yanma-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/yanma-idle.png',
	            size: [288, 320],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/yanma-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/yanma-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: -3
	        },
	    },
	    type: [type['bug'], type['flying']],
	    movePool: [
	        move['wingAttack'], move['quickAttack'], move['bugbit'], move['gust'], move['signalBeam']
	    ],
	    base: {
	        hp: 65,
	        atk: 65,
	        def: 45,
	        spa: 75,
	        spd: 45,
	        spe: 95
	    },
	    exp: 147,
	    gold: 20,
	    catchRate: 2,
	    tm: [ 151, 170,
	    	2, 3, 5, 10, 12, 20, 24, 26, 33, 40, 46, 50, 57, 59, 68, 70, 80, 81, 82, 83, 92, 96, 98, 99, 105, 130, 148, 180
	    ],
	    egg: 'yanma',
	},
	'wooper': {
	    n: 194,
	    name: ['WOOPER', 'WOOPER', '乌波'],
	    portrait: './assets/images/pokemon/portrait/wooper.png',
	    image: './assets/images/pokemon/image/wooper.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/wooper.png',
	    imageShiny: './assets/images/pokemon/image-shiny/wooper.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/wooper.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/wooper.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/wooper-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/wooper-idle.png',
	            size: [64, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/wooper-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/wooper-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['water'], type['ground']],
	    movePool: [
	        move['mudSlap'], move['waterGun'], move['sandAttack'], move['bubble'], move['tackle'], 
	    ],
	    base: {
	        hp: 55,
	        atk: 45,
	        def: 45,
	        spa: 25,
	        spd: 25,
	        spe: 15
	    },
	    exp: 52,
	    gold: 10,
	    catchRate: 3,
	    tm: [ 151,
	    	2, 8, 9, 10, 11, 13, 17, 21, 40, 61, 69, 77, 83, 93, 94, 159 
	    ],
	    egg: 'wooper',
	    evolution: [
	        {
	            pokemon: 'quagsire',
	            condition: {
	                level: 20,
	                move: 'ground',
	                cost: 1300
	            }
	        }
	    ]
	},
	'quagsire': {
	    n: 195,
	    name: ['QUAGSIRE', 'QUAGSIRE', '沼王'],
	    portrait: './assets/images/pokemon/portrait/quagsire.png',
	    image: './assets/images/pokemon/image/quagsire.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/quagsire.png',
	    imageShiny: './assets/images/pokemon/image-shiny/quagsire.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/quagsire.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/quagsire.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/quagsire-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/quagsire-idle.png',
	            size: [336, 448],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -8,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/quagsire-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/quagsire-attack.png',
	            size: [880, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -4
	        },
	    },
	    type: [type['water'], type['ground']],
	    movePool: [
	        move['earthquake'], move['surf'], move['headbutt'], move['ironHead'], move['tackle'], move['icePunch']
	    ],
	    base: {
	        hp: 95,
	        atk: 85,
	        def: 85,
	        spa: 65,
	        spd: 65,
	        spe: 35
	    },
	    exp: 151,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 8, 9, 10, 11, 13, 17, 21, 40, 61, 69, 77, 83, 93, 94, 23, 29, 30, 35, 38, 47, 60, 102, 103, 104, 109, 113, 116, 118, 119, 126, 128, 131, 141, 159 
	    ],
	    egg: 'wooper',
	},
	'espeon': {
	    n: 196,
	    name: ['ESPEON', 'ESPEON', '太阳伊布'],
	    portrait: './assets/images/pokemon/portrait/espeon.png',
	    image: './assets/images/pokemon/image/espeon.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/espeon.png',
	    imageShiny: './assets/images/pokemon/image-shiny/espeon.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/espeon.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/espeon.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/espeon-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/espeon-idle.png',
	            size: [128, 384],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/espeon-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/espeon-attack.png',
	            size: [704, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: 0
	        },
	    },
	    type: [type['psychic']],
	    movePool: [
	        move['confusion'], move['psybeam'], move['psychic'], move['powerGem'], move['bite']
	    ],
	    base: {
	        hp: 65,
	        atk: 65,
	        def: 60,
	        spa: 130,
	        spd: 95,
	        spe: 110
	    },
	    exp: 184,
	    gold: 25,
	    catchRate: 0.6,
	    tm: [ 151, 
	    	1, 2, 5, 9, 10, 11, 13, 18, 41, 43, 45, 64, 68, 70, 83, 84, 3, 19, 20, 90, 101, 130, 158
	    ],
	    egg: 'eevee',
	},
	'umbreon': {
	    n: 197,
	    name: ['UMBREON', 'UMBREON', '月亮伊布'],
	    portrait: './assets/images/pokemon/portrait/umbreon.png',
	    image: './assets/images/pokemon/image/umbreon.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/umbreon.png',
	    imageShiny: './assets/images/pokemon/image-shiny/umbreon.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/umbreon.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/umbreon.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/umbreon-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/umbreon-idle.png',
	            size: [336, 384],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/umbreon-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/umbreon-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['dark']],
	    movePool: [
	        move['bite'], move['darkPulse'], move['foulPlay'], move['crunch'], move['quickAttack'], move['snarl']
	    ],
	    base: {
	        hp: 95,
	        atk: 65,
	        def: 110,
	        spa: 60,
	        spd: 130,
	        spe: 65
	    },
	    exp: 184,
	    gold: 35,
	    catchRate: 0.6,
	    tm: [ 151, 
	    	1, 2, 5, 9, 10, 11, 13, 18, 41, 43, 45, 68, 70, 83, 84, 19, 81, 91, 100, 103, 138, 139, 141, 143, 146, 149, 158
	    ],
	    egg: 'eevee',
	},
	'murkrow': {
	    n: 198,
	    name: ['MURKROW', 'MURKROW', '黑暗鸦'],
	    portrait: './assets/images/pokemon/portrait/murkrow.png',
	    image: './assets/images/pokemon/image/murkrow.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/murkrow.png',
	    imageShiny: './assets/images/pokemon/image-shiny/murkrow.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/murkrow.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/murkrow.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/murkrow-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/murkrow-idle.png',
	            size: [96, 320],
	            position: 6,
	            framesX: 3,
	            framesY: 8,
	            correctionY: -3,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/murkrow-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/murkrow-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -14,
	            correctionX: 0
	        },
	    },
	    type: [type['dark'], type['flying']],
	    movePool: [
	        move['peck'], move['pursuit'], move['wingAttack'], move['quickAttack'], move['gust'], move['sandAttack']
	    ],
	    base: {
	        hp: 60,
	        atk: 85,
	        def: 42,
	        spa: 85,
	        spd: 42,
	        spe: 91
	    },
	    exp: 81,
	    gold: 15,
	    catchRate: 3,
	    tm: [ 151,
	    	1, 5, 6, 9, 10, 18, 19, 24, 28, 57, 59, 68, 70, 81, 83, 99, 103, 106, 127, 138, 143, 146, 149 
	    ],
	    egg: 'murkrow',
	},
	'slowking': {
	    n: 199,
	    name: ['SLOWKING', 'SLOWKING', '呆呆王'],
	    portrait: './assets/images/pokemon/portrait/slowking.png',
	    image: './assets/images/pokemon/image/slowking.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/slowking.png',
	    imageShiny: './assets/images/pokemon/image-shiny/slowking.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/slowking.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/slowking.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/slowking-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/slowking-idle.png',
	            size: [240, 384],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 12
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/slowking-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/slowking-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['water'], type['psychic']],
	    movePool: [
	        move['hydroPump'], move['confusion'], move['psybeam'], move['psychic'], move['iceBeam'], move['icyWind']
	    ],
	    base: {
	        hp: 95,
	        atk: 75,
	        def: 80,
	        spa: 100,
	        spd: 110,
	        spe: 30
	    },
	    exp: 172,
	    gold: 30,
	    catchRate: 1,
		tm: [ 151, 168,
			2, 3, 8, 10, 11, 13, 17, 19, 20, 21, 29, 30, 37, 41, 43, 44, 47, 56, 64, 77, 84, 90, 101, 
			103, 118, 119, 121, 123, 128, 133, 141, 158, 159, 162, 163, 168],
		egg: 'slowpoke',
	},
	'misdreavus': {
	    n: 200,
	    name: ['MISDREAVUS', 'MISDREAVUS', '梦妖'],
	    portrait: './assets/images/pokemon/portrait/misdreavus.png',
	    image: './assets/images/pokemon/image/misdreavus.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/misdreavus.png',
	    imageShiny: './assets/images/pokemon/image-shiny/misdreavus.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/misdreavus.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/misdreavus.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/misdreavus-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/misdreavus-idle.png',
	            size: [192, 384],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/misdreavus-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/misdreavus-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['ghost']],
	    movePool: [
	        move['lick'], move['astonish'], move['pursuit'], move['snarl']
	    ],
	    base: {
	        hp: 60,
	        atk: 60,
	        def: 60,
	        spa: 85,
	        spd: 85,
	        spe: 85
	    },
	    exp: 87,
	    gold: 15,
	    catchRate: 2,
	    tm: [ 151, 167,
	    	9, 13, 20, 28, 63, 70, 78, 81, 86, 100, 101, 103, 118, 123, 133, 138, 139, 141, 143, 146, 149,  
	    ],
	    egg: 'misdreavus',
	},
	'unown': {
	    n: 201,
	    name: ['UNOWN', 'UNOWN', '未知图腾'],
	    portrait: './assets/images/pokemon/portrait/unown0.png',
	    image: './assets/images/pokemon/image/unown0.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/unown0.png',
	    imageShiny: './assets/images/pokemon/image-shiny/unown0.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/unown0.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/unown0.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/unown0-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/unown0-idle.png',
	            size: [96, 320],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -4,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/unown0-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/unown0-attack.png',
	            size: [704, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -1
	        },
	    },
	    type: [type['psychic']],
	    movePool: [
	        move['hiddenPower']
	    ],
	    base: {
	        hp: 48,
	        atk: 72,
	        def: 48,
	        spa: 72,
	        spd: 48,
	        spe: 48
	    },
	    exp: 118,
	    gold: 15,
	    catchRate: 2,
	    tm: [ 151 ],
	    egg: 'unown',
	},
	'wobbuffet': {
	    n: 202,
	    name: ['WOBBUFFET', 'WOBBUFFET', '果然翁'],
	    portrait: './assets/images/pokemon/portrait/wobbuffet.png',
	    image: './assets/images/pokemon/image/wobbuffet.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/wobbuffet.png',
	    imageShiny: './assets/images/pokemon/image-shiny/wobbuffet.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/wobbuffet.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/wobbuffet.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/wobbuffet-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/wobbuffet-idle.png',
	            size: [216, 320],
	            position: 6,
	            framesX: 9,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/wobbuffet-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/wobbuffet-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: 0
	        },
	    },
	    type: [type['psychic']],
	    movePool: [
	        move['confusion'], move['bodySlam'], move['tackle'], move['shadowSneak'], move['shadowBall'], move['psybeam']
	    ],
	    base: {
	        hp: 190,
	        atk: 33,
	        def: 58,
	        spa: 33,
	        spd: 58,
	        spe: 33
	    },
	    exp: 177,
	    gold: 25,
	    catchRate: 2,
	    tm: [ 151, 2, 3, 9, 10, 13, 16, 19, 20, 28, 30, 41, 45, 63, 64, 67, 78, 84, 86, 
	    	87, 90, 93, 101, 112, 117, 136, 138, 141, 143, 146, 150
	    ],
	    egg: 'wobbuffet',
	},
	'girafarig': {
	    n: 203,
	    name: ['GIRAFARIG', 'GIRAFARIG', '麒麟奇'],
	    portrait: './assets/images/pokemon/portrait/girafarig.png',
	    image: './assets/images/pokemon/image/girafarig.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/girafarig.png',
	    imageShiny: './assets/images/pokemon/image-shiny/girafarig.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/girafarig.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/girafarig.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/girafarig-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/girafarig-idle.png',
	            size: [256, 384],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -4,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/girafarig-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/girafarig-attack.png',
	            size: [1080, 704],
	            position: 6,
	            framesX: 15,
	            framesY: 8,
	            correctionY: -25,
	            correctionX: 0
	        },
	    },
	    type: [type['normal'], type['psychic']],
	    movePool: [
	        move['stomp'], move['psybeam'], move['quickAttack'], move['feintAttack'], move['twineedle'], 
	    ],
	    base: {
	        hp: 70,
	        atk: 80,
	        def: 65,
	        spa: 90,
	        spd: 65,
	        spe: 85
	    },
	    exp: 159,
	    gold: 20,
	    catchRate: 2,
	    tm: [ 151, 162, 168, 177,
	    	2, 3, 5, 9, 10 ,13, 20, 42, 43, 50, 64, 67, 68, 70, 76, 90, 94, 101, 102, 103, 113, 126, 130, 139, 141, 143, 146, 149, 150, 158
	    ],
	    egg: 'girafarig',
	},
	'pineco': {
	    n: 204,
	    name: ['PINECO', 'PINECO', '榛果球'],
	    portrait: './assets/images/pokemon/portrait/pineco.png',
	    image: './assets/images/pokemon/image/pineco.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/pineco.png',
	    imageShiny: './assets/images/pokemon/image-shiny/pineco.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/pineco.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/pineco.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/pineco-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pineco-idle.png',
	            size: [48, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 1,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/pineco-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pineco-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 0
	        },
	    },
	    type: [type['bug']],
	    movePool: [
	        move['tackle'], move['bugbit'], move['headbutt'], move['gyroBall'], move['rollout']
	    ],
	    base: {
	        hp: 50,
	        atk: 65,
	        def: 90,
	        spa: 35,
	        spd: 35,
	        spe: 15
	    },
	    exp: 60,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151, 165, 179, 
	    	2, 9, 10, 12, 26, 50, 87, 93, 94, 150 
	    ],	
	    egg: 'pineco',
	    evolution: [
	        {
	            pokemon: 'forretress',
	            condition: {
	                level: 31,
	                move: 'bug',
	                cost: 4600
	            }
	        }
	    ]
	},
	'forretress': {
	    n: 205,
	    name: ['FORRETRESS', 'FORRETRESS', '佛烈托斯'],
	    portrait: './assets/images/pokemon/portrait/forretress.png',
	    image: './assets/images/pokemon/image/forretress.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/forretress.png',
	    imageShiny: './assets/images/pokemon/image-shiny/forretress.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/forretress.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/forretress.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/forretress-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/forretress-idle.png',
	            size: [128, 320],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -8,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/forretress-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/forretress-attack.png',
	            size: [768, 576],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: 0
	        },
	    },
	    type: [type['bug'], type['steel']],
	    movePool: [
	        move['gyroBall'], move['ironHead'], move['headbutt'], move['bugbit'], move['rollout'], move['rockThrow'], move['earthPower']
	    ],
	    base: {
	        hp: 75,
	        atk: 90,
	        def: 140,
	        spa: 60,
	        spd: 60,
	        spe: 40
	    },
	    exp: 163,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 165, 179, 2, 9, 10, 12, 26, 50, 87, 93, 94, 150, 23, 30, 40, 58, 67, 69, 126, 128, 131 ],
	    egg: 'pineco',
	},
	'dunsparce': {
	    n: 206,
	    name: ['DUNSPARCE', 'DUNSPARCE', '土龙弟弟'],
	    portrait: './assets/images/pokemon/portrait/dunsparce.png',
	    image: './assets/images/pokemon/image/dunsparce.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/dunsparce.png',
	    imageShiny: './assets/images/pokemon/image-shiny/dunsparce.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/dunsparce.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/dunsparce.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/dunsparce-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/dunsparce-idle.png',
	            size: [64, 192],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 8,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/dunsparce-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/dunsparce-attack.png',
	            size: [704, 576],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['glare'], move['drillRun'], move['tackle'], move['sandAttack'], move['ancientPower']
	    ],
	    base: {
	        hp: 100,
	        atk: 70,
	        def: 70,
	        spa: 65,
	        spd: 65,
	        spe: 45
	    },
	    exp: 145,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151, 161, 164, 170,
	    	2, 9, 10, 12, 13, 15, 26, 28, 30, 33, 40, 48, 49, 50, 51, 60, 67, 69, 79, 
	    	84, 86, 87, 89, 93, 96, 102, 105, 113, 117, 121, 122, 123, 124, 126, 128, 141, 142, 143, 150, 159
	    ],
	    egg: 'dunsparce',
	},
	'gligar': {
	    n: 207,
	    name: ['GLIGAR', 'GLIGAR', '天蝎'],
	    portrait: './assets/images/pokemon/portrait/gligar.png',
	    image: './assets/images/pokemon/image/gligar.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/gligar.png',
	    imageShiny: './assets/images/pokemon/image-shiny/gligar.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/gligar.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/gligar.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/gligar-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/gligar-idle.png',
	            size: [128, 448],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -8,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/gligar-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/gligar-attack.png',
	            size: [792, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -22,
	            correctionX: -5
	        },
	    },
	    type: [type['ground'], type['flying']],
	    movePool: [
	        move['wingAttack'], move['poisonSting'], move['sandAttack'], move['slash'], move['crossPoison'], move['poisonJab']
	    ],
	    base: {
	        hp: 65,
	        atk: 75,
	        def: 105,
	        spa: 35,
	        spd: 65,
	        spe: 85
	    },
	    exp: 108,
	    gold: 10,
	    catchRate: 2,
	    tm: [ 151, 164, 176, 177, 179,
	    	5, 8, 9, 10, 11, 13, 15, 16, 24, 26, 28, 32, 35, 40, 49, 50, 51, 52, 53, 55, 57, 59, 60, 63, 68, 158,
	    	69, 70, 81, 83, 88, 91, 93, 95, 96, 97, 99, 100, 102, 104, 106, 109, 113, 116, 118, 124, 132, 138, 141, 142, 143, 144, 146, 149, 153 
	    ],
	    egg: 'gligar',
	},
	'steelix': {
	    n: 208,
	    name: ['STEELIX', 'STEELIX', '大钢蛇'],
	    portrait: './assets/images/pokemon/portrait/steelix.png',
	    image: './assets/images/pokemon/image/steelix.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/steelix.png',
	    imageShiny: './assets/images/pokemon/image-shiny/steelix.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/steelix.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/steelix.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/steelix-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/steelix-idle.png',
	            size: [256, 896],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -40,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/steelix-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/steelix-attack.png',
	            size: [1320, 1216],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -60,
	            correctionX: -10
	        },
	    },
	    type: [type['steel'], type['ground']],
	    movePool: [
	        move['ironTail'], move['drillRun'],  move['dragonBreath'], move['ironHead']
	    ],
	    base: {
	        hp: 75,
	        atk: 85,
	        def: 200,
	        spa: 55,
	        spd: 65,
	        spe: 30
	    },
	    exp: 179,
	    gold: 35,
	    catchRate: 1,
	    tm: [ 151, 164, 179, 2, 9, 10, 13, 15, 16, 23, 30, 40, 51, 60, 64, 67, 69, 83, 86, 87, 93, 102, 113, 117, 124, 128, 131, 150 ],
		egg: 'onix',
	},
	'snubbull': {
	    n: 209,
	    name: ['SNUBBULL', 'SNUBBULL', '布鲁'],
	    portrait: './assets/images/pokemon/portrait/snubbull.png',
	    image: './assets/images/pokemon/image/snubbull.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/snubbull.png',
	    imageShiny: './assets/images/pokemon/image-shiny/snubbull.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/snubbull.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/snubbull.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/snubbull-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/snubbull-idle.png',
	            size: [144, 320],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -3,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/snubbull-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/snubbull-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: -2
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['bite'], move['quickAttack'], move['tackle'], move['poisonFang'], 
	    ],
	    base: {
	        hp: 60,
	        atk: 80,
	        def: 50,
	        spa: 40,
	        spd: 40,
	        spe: 30
	    },
	    exp: 60,
	    gold: 5,
	    catchRate: 2,
	    tm: [ 151,
	    	2, 5, 9, 10, 11, 13, 18, 22, 36, 39, 40, 41, 43, 45, 61, 63, 70, 81, 83, 88, 93, 94, 100, 114, 118, 139, 149
	    ],
	    egg: 'snubbull',
	    evolution: [
	        {
	            pokemon: 'granbull',
	            condition: {
	                level: 23,
	                cost: 2900
	            }
	        }
	    ]
	},
	'granbull': {
	    n: 210,
	    name: ['GRANBULL', 'GRANBULL', '布鲁皇'],
	    portrait: './assets/images/pokemon/portrait/granbull.png',
	    image: './assets/images/pokemon/image/granbull.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/granbull.png',
	    imageShiny: './assets/images/pokemon/image-shiny/granbull.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/granbull.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/granbull.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/granbull-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/granbull-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/granbull-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/granbull-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	         move['crunch'], move['firePunch'], move['quickAttack'], move['iceFang'], move['poisonFang'], move['thunderPunch']
	    ],
	    base: {
	        hp: 90,
	        atk: 120,
	        def: 75,
	        spa: 60,
	        spd: 60,
	        spe: 45
	    },
	    exp: 158,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151,
	    	30, 35, 46, 52, 54, 64, 67, 69, 85, 86, 91, 108, 109, 116, 119, 125, 126, 138, 141, 
	    ],
	    egg: 'snubbull',
	},
	'qwilfish': {
	    n: 211,
	    name: ['QWILFISH', 'QWILFISH', '千针鱼'],
	    portrait: './assets/images/pokemon/portrait/qwilfish.png',
	    image: './assets/images/pokemon/image/qwilfish.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/qwilfish.png',
	    imageShiny: './assets/images/pokemon/image-shiny/qwilfish.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/qwilfish.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/qwilfish.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/qwilfish-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/qwilfish-idle.png',
	            size: [224, 320],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/qwilfish-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/qwilfish-attack.png',
	            size: [864, 576],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: 0
	        },
	    },
	    type: [type['water'], type['poison']],
	    movePool: [
	        move['poisonSting'], move['aquaJet'], move['acid'], move['waterGun'], move['venoShock'], move['bubble']
	    ],
	    base: {
	        hp: 65,
	        atk: 95,
	        def: 85,
	        spa: 55,
	        spd: 55,
	        spe: 85
	    },
	    exp: 88,
	    gold: 15,
	    catchRate: 3,
	    tm: [ 151,
	    	5, 10, 13, 17, 21, 29, 32, 47, 53, 70, 77, 81, 87, 91, 93, 97, 100, 103, 113, 129, 137, 142, 143, 144, 146, 149, 150, 158, 159
	    ],
	    egg: 'qwilfish',
	},
	'scizor': {
	    n: 212,
	    name: ['SCIZOR', 'SCIZOR', '巨钳螳螂'],
	    portrait: './assets/images/pokemon/portrait/scizor.png',
	    image: './assets/images/pokemon/image/scizor.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/scizor.png',
	    imageShiny: './assets/images/pokemon/image-shiny/scizor.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/scizor.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/scizor.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/scizor-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/scizor-idle.png',
	            size: [192, 512],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/scizor-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/scizor-attack.png',
	            size: [720, 704],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -24,
	            correctionX: -3
	        },
	    },
	    type: [type['bug'], type['steel']],
	    movePool: [
	        move['bulletPunch'], move['xScissor'], move['wingAttack'], move['slash'], move['furyCutter'], move['ironHead']
	    ],
	    base: {
	        hp: 70,
	        atk: 130,
	        def: 100,
	        spa: 55,
	        spd: 80,
	        spe: 65
	    },
	    exp: 175,
	    gold: 30,
	    catchRate: 0.6,
	   	tm: [ 151, 176, 177, 180, 5, 9, 10, 11, 12, 24, 30, 34, 35, 36, 38, 49, 50, 55, 57, 59, 61, 68, 70,
	   		83, 88, 92, 95, 96, 99, 104, 109, 119, 125, 138, 149, 150, 153, 156, 171, 170 ],
	    egg: 'scyther',
	},
	'shuckle': {
	    n: 213,
	    name: ['SHUCKLE', 'SHUCKLE', '壶壶'],
	    portrait: './assets/images/pokemon/portrait/shuckle.png',
	    image: './assets/images/pokemon/image/shuckle.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/shuckle.png',
	    imageShiny: './assets/images/pokemon/image-shiny/shuckle.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/shuckle.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/shuckle.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/shuckle-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/shuckle-idle.png',
	            size: [128, 256],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 7,
	            correctionX: 4
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/shuckle-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/shuckle-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: -2
	        },
	    },
	    type: [type['bug'], type['rock']],
	    movePool: [
	        move['wrap'], move['rockThrow'], move['sandAttack'], move['rockSlide'], move['earthPower'], move['bugbit']
	    ],
	    base: {
	        hp: 20,
	        atk: 10,
	        def: 230,
	        spa: 10,
	        spd: 230,
	        spe: 5
	    },
	    exp: 177,
	    gold: 10,
	    catchRate: 3,
	    tm: [ 151,
	    	2, 8, 9, 10, 12, 16, 17, 19, 21, 23, 26, 30, 33, 37, 40, 47, 49, 60, 67, 69, 77, 83, 86, 87, 92, 93, 94, 96, 98, 101, 103, 104, 112, 113, 124, 126, 128, 130, 131, 150, 
	    ],
	    egg: 'shuckle',
	},
	'heracross': {
	    n: 214,
	    name: ['HERACROSS', 'HERACROSS', '赫拉克罗斯'],
	    portrait: './assets/images/pokemon/portrait/heracross.png',
	    image: './assets/images/pokemon/image/heracross.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/heracross.png',
	    imageShiny: './assets/images/pokemon/image-shiny/heracross.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/heracross.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/heracross.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/heracross-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/heracross-idle.png',
	            size: [240, 448],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -10,
	            correctionX: 6
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/heracross-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/heracross-attack.png',
	            size: [1120, 832],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -34,
	            correctionX: -5
	        },
	    },
	    type: [type['bug'], type['fighting']],
	    movePool: [
	        move['megahorn'], move['karateChop'], move['hornAttack'], move['crossChop'], move['leechLife'],
	    ],
	    base: {
	        hp: 80,
	        atk: 125,
	        def: 75,
	        spa: 40,
	        spd: 95,
	        spe: 85
	    },
	    exp: 175,
	    gold: 30,
	    catchRate: 1,
	    tm: [ 151, 161,
	    	1, 2, 5, 9, 10, 12, 22, 23, 24, 26, 33, 35, 36, 38, 39, 40, 42, 43, 45, 46, 49, 50, 52, 57, 61, 64, 67,
	    	 68, 69, 70, 71, 76, 81, 82, 83, 91, 92, 94, 95, 96, 99, 109, 116, 119, 120, 124, 125, 128, 131, 156
	    ],
	    egg: 'heracross',
	},
	'sneasel': {
	    n: 215,
	    name: ['SNEASEL', 'SNEASEL', '狃拉'],
	    portrait: './assets/images/pokemon/portrait/sneasel.png',
	    image: './assets/images/pokemon/image/sneasel.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/sneasel.png',
	    imageShiny: './assets/images/pokemon/image-shiny/sneasel.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/sneasel.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/sneasel.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/sneasel-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sneasel-idle.png',
	            size: [224, 448],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -9,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/sneasel-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/sneasel-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -4
	        },
	    },
	    type: [type['dark'], type['ice']],
	    movePool: [
	        move['snarl'], move['iceFang'], move['icyWind'], move['slash'], move['pursuit'], move['foulPlay']
	    ],
	    base: {
	        hp: 55,
	        atk: 95,
	        def: 55,
	        spa: 35,
	        spd: 75,
	        spe: 115
	    },
	    exp: 86,
	    gold: 15,
	    catchRate: 3,
	    tm: [ 151,
	    	1, 5, 9, 10, 11, 13, 18, 22, 28, 35, 40, 44, 49, 50, 51, 57, 61, 62, 63, 66, 68, 70, 76, 81, 
	    	83, 88, 91, 93, 95, 97, 100, 101, 103, 118, 119, 125, 138, 139, 141, 142, 143, 144, 146, 149, 153, 158
	    ],
	    egg: 'sneasel',
	},
	'teddiursa': {
	    n: 216,
	    name: ['TEDDIURSA', 'TEDDIURSA', '熊宝宝'],
	    portrait: './assets/images/pokemon/portrait/teddiursa.png',
	    image: './assets/images/pokemon/image/teddiursa.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/teddiursa.png',
	    imageShiny: './assets/images/pokemon/image-shiny/teddiursa.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/teddiursa.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/teddiursa.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/teddiursa-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/teddiursa-idle.png',
	            size: [144, 256],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/teddiursa-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/teddiursa-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -2
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['lick'], move['scratch'], move['tackle'], move['stomp'], move['sandAttack']
	    ],
	    base: {
	        hp: 60,
	        atk: 80,
	        def: 50,
	        spa: 50,
	        spd: 50,
	        spe: 40
	    },
	    exp: 66,
	    gold: 12,
	    catchRate: 3,
	    tm: [ 151,
	    	1, 2, 9, 10, 11, 13, 22, 36, 39, 40, 43, 45, 49, 61, 63, 68, 70, 81, 83, 88, 93, 119, 125, 
	    ],
	    egg: 'teddiursa',
	    evolution: [
	        {
	            pokemon: 'ursaring',
	            condition: {
	                level: 30,
	                cost: 4250
	            }
	        }
	    ]
	},
	'ursaring': {
	    n: 217,
	    name: ['URSARING', 'URSARING', '圈圈熊'],
	    portrait: './assets/images/pokemon/portrait/ursaring.png',
	    image: './assets/images/pokemon/image/ursaring.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/ursaring.png',
	    imageShiny: './assets/images/pokemon/image-shiny/ursaring.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/ursaring.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/ursaring.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/ursaring-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ursaring-idle.png',
	            size: [560, 448],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -8,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/ursaring-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/ursaring-attack.png',
	            size: [800, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: -4
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['slash'], move['bodySlam'], move['stomp'], move['pound'], move['sandAttack']
	    ],
	    base: {
	        hp: 90,
	        atk: 130,
	        def: 75,
	        spa: 75,
	        spd: 75,
	        spe: 55
	    },
	    exp: 175,
	    gold: 22,
	    catchRate: 1,
	    tm: [ 151, 161,
	    	1, 2, 9, 10, 11, 13, 22, 36, 39, 40, 43, 45, 49, 61, 63, 68, 70, 81, 83, 88, 93, 119, 125, 23, 30, 
	    	52, 67, 69, 71, 76, 84, 85, 86, 94, 95, 100, 109, 113, 118, 128, 138, 139, 141, 158
	    ],
	    egg: 'teddiursa',
	},
	'slugma': {
	    n: 218,
	    name: ['SLUGMA', 'SLUGMA', '熔岩虫'],
	    portrait: './assets/images/pokemon/portrait/slugma.png',
	    image: './assets/images/pokemon/image/slugma.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/slugma.png',
	    imageShiny: './assets/images/pokemon/image-shiny/slugma.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/slugma.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/slugma.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/slugma-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/slugma-idle.png',
	            size: [128, 320],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/slugma-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/slugma-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: -4
	        },
	    },
	    type: [type['fire']],
	    movePool: [
	        move['ember'], move['rockThrow'], move['flameThrower'], move['smokeScreen'], move['sandAttack'], 
	    ],
	    base: {
	        hp: 40,
	        atk: 40,
	        def: 40,
	        spa: 70,
	        spd: 40,
	        spe: 20
	    },
	    exp: 50,
	    gold: 10,
	    catchRate: 1,
	    tm: [ 151, 9, 10, 15, 40, 75, 86, 87, 93, 94, 110, 113, 155, 179],
	    egg: 'slugma',
	    evolution: [
	        {
	            pokemon: 'magcargo',
	            condition: {
	                level: 38,
	                move: 'fire',
	                cost: 2500
	            }
	        }
	    ]
	},
	'magcargo': {
	    n: 219,
	    name: ['MAGCARGO', 'MAGCARGO', '熔岩蜗牛'],
	    portrait: './assets/images/pokemon/portrait/magcargo.png',
	    image: './assets/images/pokemon/image/magcargo.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/magcargo.png',
	    imageShiny: './assets/images/pokemon/image-shiny/magcargo.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/magcargo.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/magcargo.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/magcargo-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/magcargo-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 1,
	            correctionX: 7
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/magcargo-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/magcargo-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -15,
	            correctionX: -4
	        },
	    },
	    type: [type['fire'], type['rock']],
	    movePool: [
	        move['rockThrow'], move['flameThrower'], move['sandAttack'], move['magnitude'], move['ancientPower']
	    ],
	    base: {
	        hp: 60,
	        atk: 50,
	        def: 120,
	        spa: 90,
	        spd: 80,
	        spe: 30
	    },
	    exp: 151,
	    gold: 25,
	    catchRate: 0.7,
	    tm: [ 151, 9, 10, 15, 40, 75, 86, 87, 93, 94, 110, 113, 4, 23, 60, 67, 69, 85, 103, 126, 128, 131, 155, 179],
	    egg: 'slugma',
	},
	'swinub': {
	    n: 220,
	    name: ['SWINUB', 'SWINUB', '小山猪'],
	    portrait: './assets/images/pokemon/portrait/swinub.png',
	    image: './assets/images/pokemon/image/swinub.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/swinub.png',
	    imageShiny: './assets/images/pokemon/image-shiny/swinub.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/swinub.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/swinub.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/swinub-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/swinub-idle.png',
	            size: [168, 192],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: 6,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/swinub-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/swinub-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 0
	        },
	    },
	    type: [type['ice'], type['ground']],
	    movePool: [
	        move['icyWind'], move['mudSlap'], move['sandAttack'], 
	    ],
	    base: {
	        hp: 50,
	        atk: 50,
	        def: 40,
	        spa: 30,
	        spd: 30,
	        spe: 50
	    },
	    exp: 50,
	    gold: 3,
	    catchRate: 2,
	    tm: [ 151, 2, 9, 10, 13, 40, 62, 63, 66, 70, 87, 93, 94, 128 ],
	    egg: 'swinub',
	    evolution: [
	        {
	            pokemon: 'piloswine',
	            condition: {
	                level: 33,
	                move: 'rock',
	                cost: 3700
	            }
	        }
	    ]
	},
	'piloswine': {
	    n: 221,
	    name: ['PILOSWINE', 'PILOSWINE', '长毛猪'],
	    portrait: './assets/images/pokemon/portrait/piloswine.png',
	    image: './assets/images/pokemon/image/piloswine.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/piloswine.png',
	    imageShiny: './assets/images/pokemon/image-shiny/piloswine.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/piloswine.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/piloswine.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/piloswine-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/piloswine-idle.png',
	            size: [160, 256],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: 3,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/piloswine-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/piloswine-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['ice'], type['ground']],
	    movePool: [
	        move['iceFang'], move['earthPower'], move['rockThrow'], move['bodySlam'], move['ancientPower']
	    ],
	    base: {
	        hp: 100,
	        atk: 100,
	        def: 80,
	        spa: 60,
	        spd: 60,
	        spe: 50
	    },
	    exp: 158,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 165, 179, 2, 9, 10, 13, 40, 62, 63, 66, 70, 87, 93, 94, 128, 23, 43, 48, 56, 60, 67, 69, 71, 82, 100, 118, 120, 124, 126, 131, 141 ],
	    egg: 'swinub',
	},
	'corsola': {
	    n: 222,
	    name: ['CORSOLA', 'CORSOLA', '太阳珊瑚'],
	    portrait: './assets/images/pokemon/portrait/corsola.png',
	    image: './assets/images/pokemon/image/corsola.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/corsola.png',
	    imageShiny: './assets/images/pokemon/image-shiny/corsola.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/corsola.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/corsola.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/corsola-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/corsola-idle.png',
	            size: [72, 256],
	            position: 6,
	            framesX: 3,
	            framesY: 8,
	            correctionY: 1,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/corsola-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/corsola-attack.png',
	            size: [640, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 0
	        },
	    },
	    type: [type['water'], type['rock']],
	    movePool: [
	        move['bubbleBeam'], move['rockThrow'], move['waterGun'], move['tackle'], move['powerGem']
	    ],
	    base: {
	        hp: 65,
	        atk: 55,
	        def: 95,
	        spa: 65,
	        spd: 95,
	        spe: 35
	    },
	    exp: 144,
	    gold: 25,
	    catchRate: 2,
	    tm: [ 151,
	    	8, 9, 10, 17, 19, 21, 23, 40, 47, 64, 69, 77, 82, 87, 93, 94, 104, 113, 120, 124, 126, 128, 129, 131, 159
	    ],
	    egg: 'corsola',
	},
	'remoraid': {
	    n: 223,
	    name: ['REMORAID', 'REMORAID', '铁炮鱼'],
	    portrait: './assets/images/pokemon/portrait/remoraid.png',
	    image: './assets/images/pokemon/image/remoraid.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/remoraid.png',
	    imageShiny: './assets/images/pokemon/image-shiny/remoraid.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/remoraid.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/remoraid.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/remoraid-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/remoraid-idle.png',
	            size: [192, 320],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -2,
	            correctionX: 4
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/remoraid-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/remoraid-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -15,
	            correctionX: -5
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['waterGun'], move['aquaJet'], move['tackle'], move['bubble']
	    ],
	    base: {
	        hp: 35,
	        atk: 65,
	        def: 35,
	        spa: 65,
	        spd: 35,
	        spe: 65
	    },
	    exp: 60,
	    gold: 12,
	    catchRate: 2,
	    tm: [ 151,
	    	10, 17, 21, 77, 129, 159
	    ],
	    egg: 'remoraid',
	    evolution: [
	        {
	            pokemon: 'octillery',
	            condition: {
	                level: 25,
	                cost: 2200
	            }
	        }
	    ]
	},
	'octillery': {
	    n: 224,
	    name: ['OCTILLERY', 'OCTILLERY', '章鱼桶'],
	    portrait: './assets/images/pokemon/portrait/octillery.png',
	    image: './assets/images/pokemon/image/octillery.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/octillery.png',
	    imageShiny: './assets/images/pokemon/image-shiny/octillery.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/octillery.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/octillery.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/octillery-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/octillery-idle.png',
	            size: [64, 256],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 6,
	            correctionX: 6
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/octillery-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/octillery-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -14,
	            correctionX: 0
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['hydroPump'], move['iceBeam'], move['smokeScreen'], move['surf'], move['auroraBeam'], move['constrict']
	    ],
	    base: {
	        hp: 75,
	        atk: 105,
	        def: 75,
	        spa: 105,
	        spd: 75,
	        spe: 45
	    },
	    exp: 168,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 162, 163, 168,
	    	10, 17, 21, 77, 129, 16, 37, 47, 48, 56, 66, 86, 97, 98, 101, 103, 110, 113, 117, 133, 134, 137, 159
	    ],
	    egg: 'remoraid',
	},
	'delibird': {
	    n: 225,
	    name: ['DELIBIRD', 'DELIBIRD', '信使鸟'],
	    portrait: './assets/images/pokemon/portrait/delibird.png',
	    image: './assets/images/pokemon/image/delibird.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/delibird.png',
	    imageShiny: './assets/images/pokemon/image-shiny/delibird.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/delibird.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/delibird.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/delibird-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/delibird-idle.png',
	            size: [128, 320],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/delibird-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/delibird-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 0
	        },
	    },
	    type: [type['ice'], type['flying']],
	    movePool: [
	        move['icyWind'], move['pound'], move['gust'], move['peck'], 
	    ],
	    base: {
	        hp: 45,
	        atk: 55,
	        def: 45,
	        spa: 65,
	        spd: 45,
	        spe: 75
	    },
	    exp: 116,
	    gold: 6,
	    catchRate: 1,
	    tm: [ 151,
	    	1, 2, 5, 6, 9, 10, 11, 14, 17, 18, 19, 21, 24, 41, 43, 44, 45, 47, 48, 55, 56, 57, 59, 62, 65, 66, 68, 70, 77, 83, 99, 159
	    ],
	    egg: 'delibird',
	},
	'mantine': {
	    n: 226,
	    name: ['MANTINE', 'MANTINE', '巨翅飞鱼'],
	    portrait: './assets/images/pokemon/portrait/mantine.png',
	    image: './assets/images/pokemon/image/mantine.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/mantine.png',
	    imageShiny: './assets/images/pokemon/image-shiny/mantine.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/mantine.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/mantine.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/mantine-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/mantine-idle.png',
	            size: [512, 576],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -10,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/mantine-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/mantine-attack.png',
	            size: [1200, 640],
	            position: 6,
	            framesX: 15,
	            framesY: 8,
	            correctionY: -16,
	            correctionX: 0
	        },
	    },
	    type: [type['water'], type['flying']],
	    movePool: [
	        move['bubbleBeam'], move['aerialAce'], move['fly'], move['bubble'], move['surf'], move['waterGun']
	    ],
	    base: {
	        hp: 85,
	        atk: 40,
	        def: 70,
	        spa: 80,
	        spd: 140,
	        spe: 70
	    },
	    exp: 170,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151,
	    	10, 17, 21, 23, 24, 29, 37, 40, 47, 48, 55, 56, 57, 59, 64, 65, 67, 77, 99, 106, 127, 129, 130, 132, 133, 159 
	    ],
	    egg: 'mantine',
	},
	'skarmory': {
	    n: 227,
	    name: ['SKARMORY', 'SKARMORY', '盔甲鸟'],
	    portrait: './assets/images/pokemon/portrait/skarmory.png',
	    image: './assets/images/pokemon/image/skarmory.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/skarmory.png',
	    imageShiny: './assets/images/pokemon/image-shiny/skarmory.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/skarmory.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/skarmory.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/skarmory-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/skarmory-idle.png',
	            size: [280, 512],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -9,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/skarmory-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/skarmory-attack.png',
	            size: [936, 640],
	            position: 6,
	            framesX: 13,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -5
	        },
	    },
	    type: [type['steel'], type['flying']],
	    movePool: [
	        move['wingAttack'], move['airSlash'], move['ironTail'], move['ironHead'], move['fly'], move['twister']
	    ],
	    base: {
	        hp: 65,
	        atk: 80,
	        def: 140,
	        spa: 40,
	        spd: 70,
	        spe: 70
	    },
	    exp: 163,
	    gold: 30,
	    catchRate: 2,
	    tm: [ 151, 164, 165,
	    	2, 5, 6, 9, 10, 14, 23, 24, 30, 34, 40, 43, 55, 57, 59, 64, 65, 67, 76, 99, 102, 106, 127, 128, 132, 138, 149, 150, 153
	    ],
	    egg: 'skarmory',
	},
	'houndour': {
	    n: 228,
	    name: ['HOUNDOUR', 'HOUNDOUR', '戴鲁比'],
	    portrait: './assets/images/pokemon/portrait/houndour.png',
	    image: './assets/images/pokemon/image/houndour.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/houndour.png',
	    imageShiny: './assets/images/pokemon/image-shiny/houndour.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/houndour.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/houndour.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/houndour-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/houndour-idle.png',
	            size: [448, 384],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -3,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/houndour-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/houndour-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: 0
	        },
	    },
	    type: [type['dark'], type['fire']],
	    movePool: [
	        move['ember'], move['bite'], move['smokeScreen'], move['sandAttack'], move['pursuit'], move['quickAttack']
	    ],
	    base: {
	        hp: 45,
	        atk: 60,
	        def: 30,
	        spa: 80,
	        spd: 50,
	        spe: 65
	    },
	    exp: 66,
	    gold: 12,
	    catchRate: 2,
	    tm: [ 151,
	    	2, 5, 9, 10, 11, 13, 15, 43, 63, 67, 68, 70, 81, 83, 86, 88, 100, 110, 114, 138, 139, 149, 155
	    ],
	    egg: 'houndour',
	    evolution: [
	        {
	            pokemon: 'houndoom',
	            condition: {
	                level: 24,
	                cost: 4500
	            }
	        }
	    ]
	},
	'houndoom': {
	    n: 229,
	    name: ['HOUNDOOM', 'HOUNDOOM', '黑鲁加'],
	    portrait: './assets/images/pokemon/portrait/houndoom.png',
	    image: './assets/images/pokemon/image/houndoom.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/houndoom.png',
	    imageShiny: './assets/images/pokemon/image-shiny/houndoom.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/houndoom.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/houndoom.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/houndoom-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/houndoom-idle.png',
	            size: [560, 512],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -10,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/houndoom-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/houndoom-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 0
	        },
	    },
	    type: [type['dark'], type['fire']],
	    movePool: [
	        move['flameThrower'], move['crunch'], move['flameWheel'], move['pursuit'], move['fireBlast']
	    ],
	    base: {
	        hp: 75,
	        atk: 90,
	        def: 50,
	        spa: 110,
	        spd: 80,
	        spe: 95
	    },
	    exp: 175,
	    gold: 30,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 5, 9, 10, 11, 13, 15, 43, 63, 67, 68, 70, 81, 83, 86, 88, 100, 110, 114, 138, 139, 149, 4, 71, 85, 103, 113, 108, 126, 128, 140, 141, 146, 153, 155
	    ],
	    egg: 'houndour',
	},
	'kingdra': {
	    n: 230,
	    name: ['KINGDRA', 'KINGDRA', '刺龙王'],
	    portrait: './assets/images/pokemon/portrait/kingdra.png',
	    image: './assets/images/pokemon/image/kingdra.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/kingdra.png',
	    imageShiny: './assets/images/pokemon/image-shiny/kingdra.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/kingdra.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/kingdra.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/kingdra-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/kingdra-idle.png',
	            size: [480, 576],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -18,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/kingdra-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/kingdra-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: 0
	        },
	    },
	    type: [type['water'], type['dragon']],
	    movePool: [
	        move['dragonPulse'], move['dragonBreath'], move['surf'], move['iceBeam'], move['twister']
	    ],
	    base: {
	        hp: 75,
	        atk: 95,
	        def: 95,
	        spa: 95,
	        spd: 95,
	        spe: 85
	    },
	    exp: 243,
	    gold: 35,
	    catchRate: 0.6,
		tm: [ 151, 163,
			8, 10, 15, 17, 21, 29, 47, 48, 53, 56, 62, 77, 86, 98, 103, 110, 113, 122, 130, 132, 134, 137, 159 
		],
		egg: 'horsea',
	},
	'phanpy': {
	    n: 231,
	    name: ['PHANPY', 'PHANPY', '小小象'],
	    portrait: './assets/images/pokemon/portrait/phanpy.png',
	    image: './assets/images/pokemon/image/phanpy.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/phanpy.png',
	    imageShiny: './assets/images/pokemon/image-shiny/phanpy.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/phanpy.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/phanpy.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/phanpy-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/phanpy-idle.png',
	            size: [128, 320],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 2
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/phanpy-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/phanpy-attack.png',
	            size: [832, 576],
	            position: 6,
	            framesX: 13,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: -4
	        },
	    },
	    type: [type['ground']],
	    movePool: [
	        move['tackle'], move['rollout'], move['sandAttack'], move['stomp'], move['rockThrow']
	    ],
	    base: {
	        hp: 90,
	        atk: 60,
	        def: 60,
	        spa: 40,
	        spd: 40,
	        spe: 40
	    },
	    exp: 66,
	    gold: 5,
	    catchRate: 2,
	    tm: [ 151,
	    	2, 9, 10, 16, 21, 22, 40, 43, 87, 93, 94, 117, 
	    ],	
	    egg: 'phanpy',
	    evolution: [
	        {
	            pokemon: 'donphan',
	            condition: {
	                level: 25,
	                move: 'ground',
	                cost: 6100
	            }
	        }
	    ]
	},
	'donphan': {
	    n: 232,
	    name: ['DONPHAN', 'DONPHAN', '顿甲'],
	    portrait: './assets/images/pokemon/portrait/donphan.png',
	    image: './assets/images/pokemon/image/donphan.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/donphan.png',
	    imageShiny: './assets/images/pokemon/image-shiny/donphan.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/donphan.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/donphan.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/donphan-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/donphan-idle.png',
	            size: [160, 448],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -9,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/donphan-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/donphan-attack.png',
	            size: [720, 576],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -17,
	            correctionX: 0
	        },
	    },
	    type: [type['ground']],
	    movePool: [
	        move['earthquake'], move['rollout'], move['bodySlam'], move['stomp'], move['magnitude']
	    ],
	    base: {
	        hp: 90,
	        atk: 120,
	        def: 120,
	        spa: 60,
	        spd: 60,
	        spe: 50
	    },
	    exp: 175,
	    gold: 20,
	    catchRate: 1,
	    tm: [ 151, 165, 179, 2, 9, 10, 16, 21, 22, 40, 43, 87, 93, 94, 117, 23, 30, 60, 67, 69, 71, 100, 102, 118, 120, 122, 124, 131, 150 ],
	    egg: 'phanpy',
	},
	'porygon2': {
	    n: 233,
	    name: ['PORYGON2', 'PORYGON2', '多边兽Ⅱ'],
	    portrait: './assets/images/pokemon/portrait/porygon2.png',
	    image: './assets/images/pokemon/image/porygon2.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/porygon2.png',
	    imageShiny: './assets/images/pokemon/image-shiny/porygon2.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/porygon2.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/porygon2.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/porygon2-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/porygon2-idle.png',
	            size: [128, 320],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -2,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/porygon2-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/porygon2-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -23,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['psybeam'], move['hydroPump'], move['thunderShock'], move['flameThrower'], move['hyperVoice'], move['shadowBall']
	    ],
	    base: {
	        hp: 85,
	        atk: 80,
	        def: 90,
	        spa: 105,
	        spd: 95,
	        spe: 60
	    },
	    exp: 180,
	    gold: 30,
	    catchRate: 0.9,
	    tm: [ 151, 2, 3, 5, 6, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21, 25, 28, 29, 30, 31, 34, 37, 40, 41, 47, 
	    	48, 51, 53, 55, 56, 57, 60, 62, 64, 67, 68, 70, 72, 73, 74, 75, 78, 79, 81, 83, 84, 85, 86, 87, 89, 
	    	90, 93, 96, 98, 99, 101, 103, 112, 113, 121, 123, 124, 126, 128, 130, 133, 134, 135, 136, 139, 145, 
	    	149, 150, 152, 159, 163, 166, 168, 174, 178 ],
	    egg: 'porygon',
	},
	'stantler': {
	    n: 234,
	    name: ['STANTLER', 'STANTLER', '惊角鹿'],
	    portrait: './assets/images/pokemon/portrait/stantler.png',
	    image: './assets/images/pokemon/image/stantler.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/stantler.png',
	    imageShiny: './assets/images/pokemon/image-shiny/stantler.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/stantler.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/stantler.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/stantler-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/stantler-idle.png',
	            size: [560, 384],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -4,
	            correctionX: 3
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/stantler-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/stantler-attack.png',
	            size: [792, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -26,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['stomp'], move['hornAttack'], move['quickAttack'], move['sandAttack']
	    ],
	    base: {
	        hp: 73,
	        atk: 95,
	        def: 62,
	        spa: 85,
	        spd: 65,
	        spe: 85
	    },
	    exp: 163,
	    gold: 15,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 3, 4, 5, 9, 10, 13, 20, 23, 30, 40, 42, 43, 50, 64, 67, 68, 70, 76, 78, 82, 89, 90, 101, 120, 121, 123, 126, 135, 145, 146, 149, 
	    ],
	    egg: 'stantler',
	},
	'smeargle': {
	    n: 235,
	    name: ['SMEARGLE', 'SMEARGLE', '图图犬'],
	    portrait: './assets/images/pokemon/portrait/smeargle.png',
	    image: './assets/images/pokemon/image/smeargle.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/smeargle.png',
	    imageShiny: './assets/images/pokemon/image-shiny/smeargle.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/smeargle.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/smeargle.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/smeargle-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/smeargle-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: -1,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/smeargle-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/smeargle-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['tackle'], move['quickAttack'], move['fakeOut'], move['payDay'], move['scratch']
	    ],
	    base: {
	        hp: 55,
	        atk: 20,
	        def: 35,
	        spa: 20,
	        spd: 45,
	        spe: 75
	    },
	    exp: 88,
	    gold: 15,
	    catchRate: 1,
	     tm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
	    	 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
	    	 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
	    	 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 
	    	 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 
	    	 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 
	    	 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 
	    	 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 
	    	 173, 174, 175, 176, 177, 178, 179, 180 ],
	    egg: 'smeargle',
	},
	'tyrogue': {
	    n: 236,
	    name: ['TYROGUE', 'TYROGUE', '无畏小子'],
	    portrait: './assets/images/pokemon/portrait/tyrogue.png',
	    image: './assets/images/pokemon/image/tyrogue.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/tyrogue.png',
	    imageShiny: './assets/images/pokemon/image-shiny/tyrogue.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/tyrogue.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/tyrogue.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/tyrogue-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/tyrogue-idle.png',
	            size: [168, 384],
	            position: 6,
	            framesX: 7,
	            framesY: 8,
	            correctionY: -6,
	            correctionX: 8
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/tyrogue-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/tyrogue-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -2
	        },
	    },
	    type: [type['fighting']],
	    movePool: [
	        move['lowKick'], move['fakeOut'], move['pound'], move['quickAttack']
	    ],
	    base: {
	        hp: 35,
	        atk: 35,
	        def: 35,
	        spa: 35,
	        spd: 35,
	        spe: 35
	    },
	    exp: 42,
	    gold: 10,
	    catchRate: 3,
	    tm: [ 151,
			1, 5, 9, 10, 22, 28, 36, 45, 46, 70, 81, 83, 149, 161
		],
		egg: 'tyrogue',
	    evolution: [
	        {
	            pokemon: 'hitmonlee',
	            condition: {
	                level: 20,
	                def: 30,
	                move: 'fighting',
	                cost: 2000
	            }
	        },
	        {
	            pokemon: 'hitmonchan',
	            condition: {
	                level: 20,
	                atk: 30,
	                move: 'fighting',
	                cost: 2000
	            }
	        },
	        {
	            pokemon: 'hitmontop',
	            condition: {
	                level: 20,
	                spe: 30,
	                move: 'fighting',
	                cost: 2000
	            }
	        }
	    ]
	},
	'hitmontop': {
	    n: 237,
	    name: ['HITMONTOP', 'HITMONTOP', '战舞郎'],
	    portrait: './assets/images/pokemon/portrait/hitmontop.png',
	    image: './assets/images/pokemon/image/hitmontop.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/hitmontop.png',
	    imageShiny: './assets/images/pokemon/image-shiny/hitmontop.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/hitmontop.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/hitmontop.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/hitmontop-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hitmontop-idle.png',
	            size: [192, 448],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -12,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/hitmontop-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hitmontop-attack.png',
	            size: [1224, 704],
	            position: 6,
	            framesX: 17,
	            framesY: 8,
	            correctionY: -25,
	            correctionX: 0
	        },
	    },
	    type: [type['fighting']],
	    movePool: [
	        move['gyroBall'], move['tropicalKick'], move['icePunch'], move['jumpKick'], move['quickAttack']
	    ],
	    base: {
	        hp: 50,
	        atk: 95,
	        def: 95,
	        spa: 35,
	        spd: 110,
	        spe: 70
	    },
	    exp: 159,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151, 161, 175, 177,
			1, 5, 9, 10, 22, 28, 35, 36, 38, 39, 45, 46, 54, 61, 70, 81, 83, 107, 115, 116, 119, 125, 133, 149
		],
		egg: 'tyrogue',
	},
	'smoochum': {
	    n: 238,
	    name: ['SMOOCHUM', 'SMOOCHUM', '迷唇娃'],
	    portrait: './assets/images/pokemon/portrait/smoochum.png',
	    image: './assets/images/pokemon/image/smoochum.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/smoochum.png',
	    imageShiny: './assets/images/pokemon/image-shiny/smoochum.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/smoochum.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/smoochum.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/smoochum-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/smoochum-idle.png',
	            size: [120, 320],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: -2,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/smoochum-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/smoochum-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['ice'], type['psychic']],
	    movePool: [
	        move['icyWind'], move['confusion'], move['pound']
	    ],
	    base: {
	        hp: 45,
	        atk: 30,
	        def: 15,
	        spa: 85,
	        spd: 65,
	        spe: 65
	    },
	    exp: 87,
	    gold: 12,
	    catchRate: 4,
	   	tm: [ 151,
	    	1, 2, 3, 10, 11, 20, 28, 41, 45, 56, 62, 83, 158 
	    ],
	    egg: 'smoochum',
	    evolution: [
	        {
	            pokemon: 'jynx',
	            condition: {
	                level: 30,
	                move: 'ice',
	                cost: 2000
	            }
	        }
	    ]
	},
	'elekid': {
	    n: 239,
	    name: ['ELEKID', 'ELEKID', '电击怪'],
	    portrait: './assets/images/pokemon/portrait/elekid.png',
	    image: './assets/images/pokemon/image/elekid.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/elekid.png',
	    imageShiny: './assets/images/pokemon/image-shiny/elekid.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/elekid.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/elekid.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/elekid-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/elekid-idle.png',
	            size: [128, 448],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -9,
	            correctionX: 5
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/elekid-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/elekid-attack.png',
	            size: [750, 704],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -26,
	            correctionX: -4
	        },
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunderShock'], move['quickAttack'], move['swift']
	    ],
	    base: {
	        hp: 45,
	        atk: 63,
	        def: 37,
	        spa: 65,
	        spd: 55,
	        spe: 95
	    },
	    exp: 106,
	    gold: 12,
	    catchRate: 4,
	    tm: [ 151,
	    	1, 5, 10, 22, 31, 39, 61, 68, 70, 79, 83, 145
	    ],
	    egg: 'elekid',
	    evolution: [
	        {
	            pokemon: 'electabuzz',
	            condition: {
	                level: 30,
	                move: 'electric',
	                cost: 2000
	            }
	        }
	    ]
	},
	'magby': {
	    n: 240,
	    name: ['MAGBY', 'MAGBY', '鸭嘴宝宝'],
	    portrait: './assets/images/pokemon/portrait/magby.png',
	    image: './assets/images/pokemon/image/magby.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/magby.png',
	    imageShiny: './assets/images/pokemon/image-shiny/magby.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/magby.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/magby.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/magby-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/magby-idle.png',
	            size: [144, 384],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 7
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/magby-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/magby-attack.png',
	            size: [640, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -22,
	            correctionX: -2
	        },
	    },
	    type: [type['fire']],
	    movePool: [
	        move['ember'], move['scratch'], move['smokeScreen']
	    ],
	    base: {
	        hp: 45,
	        atk: 75,
	        def: 37,
	        spa: 70,
	        spd: 55,
	        spe: 83
	    },
	    exp: 117,
	    gold: 12,
	    catchRate: 4,
	    tm: [ 151,
	    	1, 5, 10, 15, 22, 39, 70, 35, 83, 86, 110, 113, 125, 155
	    ],
	    egg: 'magby',
	    evolution: [
	        {
	            pokemon: 'magmar',
	            condition: {
	                level: 30,
	                move: 'fire',
	                cost: 2000
	            }
	        }
	    ]
	},
	'miltank': {
	    n: 241,
	    name: ['MILTANK', 'MILTANK', '大奶罐'],
	    portrait: './assets/images/pokemon/portrait/miltank.png',
	    image: './assets/images/pokemon/image/miltank.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/miltank.png',
	    imageShiny: './assets/images/pokemon/image-shiny/miltank.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/miltank.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/miltank.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/miltank-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/miltank-idle.png',
	            size: [192, 384],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 9
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/miltank-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/miltank-attack.png',
	            size: [960, 640],
	            position: 6,
	            framesX: 15,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['bodySlam'], move['stomp'], move['rockThrow'], move['rollout']
	    ],
	    base: {
	        hp: 95,
	        atk: 80,
	        def: 105,
	        spa: 40,
	        spd: 70,
	        spe: 100
	    },
	    exp: 172,
	    gold: 40,
	    catchRate: 1,
	    tm: [ 151,
	    	2, 9, 10, 13, 18, 22, 28, 30, 36, 38, 39, 40, 41, 43, 45, 46, 48, 52, 58, 60, 61, 63, 64, 67, 83, 84, 86, 87, 93, 94, 109, 112, 119, 120, 125, 126, 
	    ],
	    egg: 'miltank',
	},
	'blissey': {
	    n: 242,
	    name: ['BLISSEY', 'BLISSEY', '幸福蛋'],
	    portrait: './assets/images/pokemon/portrait/blissey.png',
	    image: './assets/images/pokemon/image/blissey.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/blissey.png',
	    imageShiny: './assets/images/pokemon/image-shiny/blissey.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/blissey.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/blissey.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/blissey-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/blissey-idle.png',
	            size: [64, 320],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: 0,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/blissey-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/blissey-attack.png',
	            size: [792, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -24,
	            correctionX: 0
	        },
	    },
	    type: [type['normal']],
	    movePool: [
	        move['metronome'], move['eggBomb'], move['bodySlam'], move['stomp'], move['hyperVoice'], move['rollout']
	    ],
	    base: {
	        hp: 255,
	        atk: 10,
	        def: 10,
	        spa: 75,
	        spd: 135,
	        spe: 55
	    },
	    exp: 608,
	    gold: 120,
	    catchRate: 0.6,
	   	tm: [ 151,
			1, 2, 3, 9, 10, 11, 15, 18, 19, 31, 35, 36, 38, 39, 40, 41, 43, 45, 61, 62, 64, 67, 79, 83, 86, 87, 88, 93, 94, 101, 109, 112, 113, 116, 119, 123, 125, 126, 130, 133, 136, 150
		],
		egg: 'chansey',
	},
	'raikou': {
	    n: 243,
	    name: ['RAIKOU', 'RAIKOU', '雷公'],
	    portrait: './assets/images/pokemon/portrait/raikou.png',
	    image: './assets/images/pokemon/image/raikou.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/raikou.png',
	    imageShiny: './assets/images/pokemon/image-shiny/raikou.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/raikou.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/raikou.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/raikou-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/raikou-idle.png',
	            size: [784, 384],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -4,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/raikou-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/raikou-attack.png',
	            size: [936, 640],
	            position: 6,
	            framesX: 13,
	            framesY: 8,
	            correctionY: -19,
	            correctionX: 0
	        },
	    },
	    type: [type['electric']],
	    movePool: [
	        move['thunder'], move['snarl']
	    ],
	    base: {
	        hp: 90,
	        atk: 85,
	        def: 75,
	        spa: 115,
	        spd: 100,
	        spe: 115
	    },
	    exp: 261,
	    gold: 500,
	    catchRate: 100,
	    tm: [ 151, 
	    	2, 5, 9, 10, 11, 13, 31, 34, 43, 51, 67, 68, 70, 76, 79, 81, 83, 84, 89, 121, 123, 135, 139, 141, 145, 149
	    ],
	    egg: 'raikou',
	},
	'entei': {
	    n: 244,
	    name: ['ENTEI', 'ENTEI', '炎帝'],
	    portrait: './assets/images/pokemon/portrait/entei.png',
	    image: './assets/images/pokemon/image/entei.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/entei.png',
	    imageShiny: './assets/images/pokemon/image-shiny/entei.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/entei.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/entei.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/entei-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/entei-idle.png',
	            size: [672, 448],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -7,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/entei-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/entei-attack.png',
	            size: [792, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -24,
	            correctionX: 0
	        },
	    },
	    type: [type['fire']],
	    movePool: [
	        move['fireBlast'], move['crunch']
	    ],
	    base: {
	        hp: 115,
	        atk: 115,
	        def: 85,
	        spa: 90,
	        spd: 75,
	        spe: 100
	    },
	    exp: 261,
	    gold: 500,
	    catchRate: 100,
	    tm: [ 151, 
	    	2, 4, 5, 9, 10, 11, 13, 15, 22, 23, 30, 40, 43, 67, 69, 71, 75, 81, 83, 84, 85, 86, 94, 103, 108, 110, 113, 114, 122, 126, 128, 131, 139, 140, 141, 155, 160
	    ],
	    egg: 'entei',
	},
	'suicune': {
	    n: 245,
	    name: ['SUICUNE', 'SUICUNE', '水君'],
	    portrait: './assets/images/pokemon/portrait/suicune.png',
	    image: './assets/images/pokemon/image/suicune.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/suicune.png',
	    imageShiny: './assets/images/pokemon/image-shiny/suicune.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/suicune.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/suicune.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/suicune-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/suicune-idle.png',
	            size: [672, 384],
	            position: 6,
	            framesX: 14,
	            framesY: 8,
	            correctionY: -3,
	            correctionX: 0
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/suicune-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/suicune-attack.png',
	            size: [792, 704],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -23,
	            correctionX: 0
	        },
	    },
	    type: [type['water']],
	    movePool: [
	        move['surf'], move['auroraBeam']
	    ],
	    base: {
	        hp: 100,
	        atk: 75,
	        def: 115,
	        spa: 90,
	        spd: 115,
	        spe: 85
	    },
	    exp: 261,
	    gold: 500,
	    catchRate: 100,
	    tm: [ 151, 
	    	2, 5, 9, 10, 11, 13, 17, 21, 29, 37, 43, 44, 47, 48, 56, 62, 67, 68, 70, 76, 77, 81, 83, 84, 118, 129, 139, 141, 149, 159
	    ],
	    egg: 'suicune',
	},
	'larvitar': {
	    n: 246,
	    name: ['LARVITAR', 'LARVITAR', '幼基拉斯'],
	    portrait: './assets/images/pokemon/portrait/larvitar.png',
	    image: './assets/images/pokemon/image/larvitar.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/larvitar.png',
	    imageShiny: './assets/images/pokemon/image-shiny/larvitar.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/larvitar.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/larvitar.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/larvitar-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/larvitar-idle.png',
	            size: [288, 384],
	            position: 6,
	            framesX: 12,
	            framesY: 8,
	            correctionY: -7,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/larvitar-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/larvitar-attack.png',
	            size: [720, 640],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: 0
	        },
	    },
	    type: [type['rock'], type['ground']],
	    movePool: [
	        move['bite'], move['sandAttack'], move['scratch'], move['rockThrow']
	    ],
	    base: {
	        hp: 50,
	        atk: 64,
	        def: 50,
	        spa: 45,
	        spd: 50,
	        spe: 41
	    },
	    exp: 60,
	    gold: 12,
	    catchRate: 2,
	    tm: [ 151,
	    	1, 2, 5, 9, 10, 11, 13, 15, 19, 40, 70, 81, 83, 88, 93, 110, 149
	    ],
	    egg: 'larvitar',
	    evolution: [
	        {
	            pokemon: 'pupitar',
	            condition: {
	                level: 30,
	                move: 'ground',
	                cost: 5000
	            }
	        }
	    ]
	},
	'pupitar': {
	    n: 247,
	    name: ['PUPITAR', 'PUPITAR', '沙基拉斯'],
	    portrait: './assets/images/pokemon/portrait/pupitar.png',
	    image: './assets/images/pokemon/image/pupitar.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/pupitar.png',
	    imageShiny: './assets/images/pokemon/image-shiny/pupitar.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/pupitar.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/pupitar.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/pupitar-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pupitar-idle.png',
	            size: [192, 448],
	            position: 6,
	            framesX: 8,
	            framesY: 8,
	            correctionY: -14,
	            correctionX: 10
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/pupitar-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/pupitar-attack.png',
	            size: [792, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -23,
	            correctionX: 0
	        },
	    },
	    type: [type['rock'], type['ground']],
	    movePool: [
	        move['rockSlide'], move['crunch'], move['bite'], move['rollout'], move['bodySlam']
	    ],
	    base: {
	        hp: 70,
	        atk: 84,
	        def: 70,
	        spa: 65,
	        spd: 70,
	        spe: 51
	    },
	    exp: 144,
	    gold: 25,
	    catchRate: 1,
	    tm: [ 151,
	    	1, 2, 5, 9, 10, 11, 13, 15, 19, 40, 70, 81, 83, 88, 93, 110, 149, 23, 30, 67, 69, 87, 94, 150
	    ],
	    egg: 'larvitar',
	    evolution: [
	        {
	            pokemon: 'tyranitar',
	            condition: {
	                level: 55,
	                move: 'rock',
	                cost: 25000
	            }
	        }
	    ]
	},
	'tyranitar': {
	    n: 248,
	    name: ['TYRANITAR', 'TYRANITAR', '班基拉斯'],
	    portrait: './assets/images/pokemon/portrait/tyranitar.png',
	    image: './assets/images/pokemon/image/tyranitar.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/tyranitar.png',
	    imageShiny: './assets/images/pokemon/image-shiny/tyranitar.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/tyranitar.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/tyranitar.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/tyranitar-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/tyranitar-idle.png',
	            size: [160, 384],
	            position: 6,
	            framesX: 4,
	            framesY: 8,
	            correctionY: -5,
	            correctionX: 2
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/tyranitar-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/tyranitar-attack.png',
	            size: [880, 640],
	            position: 6,
	            framesX: 11,
	            framesY: 8,
	            correctionY: -20,
	            correctionX: -2
	        },
	    },
	    type: [type['rock'], type['dark']],
	    movePool: [
	        move['crunch'], move['stoneEdge'], move['darkPulse'], move['earthquake'], move['rockSlide'], move['pursuit']
	    ],
	    base: {
	        hp: 100,
	        atk: 134,
	        def: 110,
	        spa: 95,
	        spd: 100,
	        spe: 61
	    },
	    exp: 300,
	    gold: 75,
	    catchRate: 0.6,
	    tm: [ 151, 164, 165,
	    	1, 2, 5, 9, 10, 11, 13, 15, 19, 40, 70, 81, 83, 88, 93, 110, 149, 23, 30, 67, 69, 87, 94, 150, 4, 22, 36, 39, 43, 46, 48, 52, 60, 61, 63, 71, 85, 86, 89, 91, 
	    	100, 102, 109, 113, 116, 118, 119, 121, 122, 123, 124, 125, 126, 128, 131, 134, 138, 139, 141, 146, 158
	    ],
	    egg: 'larvitar',
	},
	'lugia': {
	    n: 249,
	    name: ['LUGIA', 'LUGIA', '洛奇亚'],
	    portrait: './assets/images/pokemon/portrait/lugia.png',
	    image: './assets/images/pokemon/image/lugia.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/lugia.png',
	    imageShiny: './assets/images/pokemon/image-shiny/lugia.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/lugia.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/lugia.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/lugia-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/lugia-idle.png',
	            size: [144, 768],
	            position: 6,
	            framesX: 2,
	            framesY: 8,
	            correctionY: -27,
	            correctionX: -20
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/lugia-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/lugia-attack.png',
	            size: [1040, 896],
	            position: 6,
	            framesX: 10,
	            framesY: 8,
	            correctionY: -32,
	            correctionX: -30
	        },
	    },
	    type: [type['psychic'], type['flying']],
	    movePool: [
	        move['aerialAce'], move['psychic']
	    ],
	    base: {
	        hp: 106,
	        atk: 90,
	        def: 130,
	        spa: 90,
	        spd: 154,
	        spe: 110
	    },
	    exp: 306,
	    gold: 1000,
	    catchRate: 100,
	    tm: [ 151,
	    	3, 5, 6, 9, 10, 17, 20, 21, 23, 24, 37, 40, 47, 48, 55, 56, 57, 59, 64, 65, 68, 77, 90, 92, 106, 118, 121, 123, 127, 128, 129, 132, 138, 159
	    ],
	    egg: 'lugia',
	},
	'hooh': {
	    n: 250,
	    name: ['HO-OH', 'HO-OH', '凤王'],
	    portrait: './assets/images/pokemon/portrait/hooh.png',
	    image: './assets/images/pokemon/image/hooh.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/hooh.png',
	    imageShiny: './assets/images/pokemon/image-shiny/hooh.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/hooh.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/hooh.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/hooh-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hooh-idle.png',
	            size: [360, 896],
	            position: 6,
	            framesX: 5,
	            framesY: 8,
	            correctionY: -38,
	            correctionX: -15
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/hooh-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/hooh-attack.png',
	            size: [1320, 930],
	            position: 6,
	            framesX: 15,
	            framesY: 8,
	            correctionY: -36,
	            correctionX: -15
	        },
	    },
	    type: [type['fire'], type['flying']],
	    movePool: [
	        move['fireBlast'], move['drillPeck']
	    ],
	    base: {
	        hp: 106,
	        atk: 130,
	        def: 90,
	        spa: 110,
	        spd: 154,
	        spe: 90
	    },
	    exp: 306,
	    gold: 1000,
	    catchRate: 100,
	    tm: [ 151,
	    	4, 5, 6, 9, 10, 14, 15, 23, 24, 40, 51, 55, 57, 59, 68, 75, 84, 85, 86, 99, 105, 106, 110, 113, 122, 126, 127, 128, 131, 132, 140, 155, 160
	    ],
	    egg: 'hooh',
	},
	'celebi': {
	    n: 251,
	    name: ['CELEBI', 'CELEBI', '时拉比'],
	    portrait: './assets/images/pokemon/portrait/celebi.png',
	    image: './assets/images/pokemon/image/celebi.png',
	    portraitShiny: './assets/images/pokemon/portrait-shiny/celebi.png',
	    imageShiny: './assets/images/pokemon/image-shiny/celebi.png',
	    sprite: {
	        base: './assets/images/pokemon/sprite/celebi.png',
	        baseShiny: './assets/images/pokemon/sprite-shiny/celebi.png',
	        idle: {
	            src: './assets/images/pokemon/sprite/celebi-idle.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/celebi-idle.png',
	            size: [144, 448],
	            position: 6,
	            framesX: 6,
	            framesY: 8,
	            correctionY: -11,
	            correctionX: 11
	        },
	        attack: {
	            src: './assets/images/pokemon/sprite/celebi-attack.png',
	            srcShiny: './assets/images/pokemon/sprite-shiny/celebi-attack.png',
	            size: [1152, 640],
	            position: 6,
	            framesX: 16,
	            framesY: 8,
	            correctionY: -21,
	            correctionX: -3
	        },
	    },
	    type: [type['psychic'], type['grass']],
	    movePool: [
	        move['psychic'], move['gigaDrain']
	    ],
	    base: {
	        hp: 100,
	        atk: 100,
	        def: 100,
	        spa: 100,
	        spd: 100,
	        spe: 100
	    },
	    exp: 270,
	    gold: 750,
	    catchRate: 100,
	    tm: [ 151, 180, 
	    	1, 3, 4, 5, 7, 9, 10, 11, 12, 20, 26, 27, 42, 49, 50, 64, 68, 78, 80, 83, 84, 90, 92, 96, 98, 105, 126, 128, 130, 133, 148, 157, 158
	    ],
	    egg: 'celebi',
	},
	'treecko': {
		n: 252,
		name: ['TREECKO', 'TREECKO', '木守宫'],
		portrait: './assets/images/pokemon/portrait/treecko.png',
		image: './assets/images/pokemon/image/treecko.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/treecko.png',
		imageShiny: './assets/images/pokemon/image-shiny/treecko.png',
		sprite: {
			base: './assets/images/pokemon/sprite/treecko.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/treecko.png',
			idle: {
				src: './assets/images/pokemon/sprite/treecko-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/treecko-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/treecko-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/treecko-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -14,
				correctionX: 0
			},	
		},
		type: [type['grass']],
		movePool: [ move['absorb'] ],
		base: {
			hp: 40,
			atk: 45,
			def: 35,
			spa: 65,
			spd: 55,
			spe: 70
		},
		exp: 62,
		gold: 10,
		catchRate: 1,
		tm: [151, 1, 5, 9, 10, 11, 13, 18, 25, 49, 50, 68, 72, 83, 88, 93, 98, 154, 164],
		egg: 'treecko',
		evolution: [
			{
				pokemon: 'grovyle',
				condition: {
					level: 16,
					move: 'grass',
					cost: 1500
				}
			}
		]
	},
	'grovyle': {
		n: 253,
		name: ['GROVYLE', 'GROVYLE', '森林蜥蜴'],
		portrait: './assets/images/pokemon/portrait/grovyle.png',
		image: './assets/images/pokemon/image/grovyle.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/grovyle.png',
		imageShiny: './assets/images/pokemon/image-shiny/grovyle.png',
		sprite: {
			base: './assets/images/pokemon/sprite/grovyle.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/grovyle.png',
			idle: {
				src: './assets/images/pokemon/sprite/grovyle-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/grovyle-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/grovyle-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/grovyle-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['grass']],
		movePool: [ move['slash'], move['grassyGlide'], move['quickAttack']  ],
		base: {
			hp: 50,
			atk: 65,
			def: 45,
			spa: 85,
			spd: 65,
			spe: 95
		},
		exp: 142,
		gold: 25,
		catchRate: 1,
		tm: [
			151, 1, 5, 9, 10, 11, 13, 18, 25, 49, 50, 68, 72, 83, 88, 93, 98, 154, 164, 2, 22, 28, 40, 61, 70, 80, 81, 95, 113, 
			115, 141, 143, 146, 149, 161, 171, 180
		],
		egg: 'treecko',
		evolution: [
			{
				pokemon: 'sceptile',
				condition: {
					level: 36,
					move: 'grass',
					cost: 5000
				}
			}
		]
	},
	'sceptile': {
		n: 254,
		name: ['SCEPTILE', 'SCEPTILE', '蜥蜴王'],
		portrait: './assets/images/pokemon/portrait/sceptile.png',
		image: './assets/images/pokemon/image/sceptile.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/sceptile.png',
		imageShiny: './assets/images/pokemon/image-shiny/sceptile.png',
		sprite: {
			base: './assets/images/pokemon/sprite/sceptile.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/sceptile.png',
			idle: {
				src: './assets/images/pokemon/sprite/sceptile-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sceptile-idle.png',
				size: [80, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -1,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/sceptile-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sceptile-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['grass']],
		movePool: [ move['leafBlade'], move['extremeSpeed'], move['dragonClaw']],
		base: {
			hp: 70,
			atk: 85,
			def: 65,
			spa: 105,
			spd: 85,
			spe: 120
		},
		exp: 239,
		gold: 50,
		catchRate: 1,
		tm: [
			151, 1, 5, 9, 10, 11, 13, 18, 25, 49, 50, 68, 72, 83, 88, 93, 98, 154, 164, 2, 22, 28, 40, 61, 70, 80, 81, 95, 113, 115, 
			141, 143, 146, 149, 161, 171, 180, 27, 36, 38, 39, 52, 57, 76, 78, 91, 102, 103, 122, 133, 134, 138, 144, 148, 153, 157, 
			158, 169, 172, 177
		],
		egg: 'treecko',
	},
	'torchic': {
		n: 255,
		name: ['TORCHIC', 'TORCHIC', '火稚鸡'],
		portrait: './assets/images/pokemon/portrait/torchic.png',
		image: './assets/images/pokemon/image/torchic.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/torchic.png',
		imageShiny: './assets/images/pokemon/image-shiny/torchic.png',
		sprite: {
			base: './assets/images/pokemon/sprite/torchic.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/torchic.png',
			idle: {
				src: './assets/images/pokemon/sprite/torchic-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/torchic-idle.png',
				size: [120, 320],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 1,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/torchic-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/torchic-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},	
		},
		type: [type['fire']],
		movePool: [ move['ember'] ],
		base: {
			hp: 45,
			atk: 60,
			def: 40,
			spa: 70,
			spd: 50,
			spe: 45
		},
		exp: 62,
		gold: 10,
		catchRate: 1,
		tm: [151, 6, 9, 10, 11, 15, 24, 28, 57, 59, 73, 83, 110, 132, 154, 155],
		egg: 'torchic',
		evolution: [
			{
				pokemon: 'combusken',
				condition: {
					level: 16,
					move: 'fire',
					cost: 1500
				}
			}
		]
	},
	'combusken': {
		n: 256,
		name: ['COMBUSKEN', 'COMBUSKEN', '力壮鸡'],
		portrait: './assets/images/pokemon/portrait/combusken.png',
		image: './assets/images/pokemon/image/combusken.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/combusken.png',
		imageShiny: './assets/images/pokemon/image-shiny/combusken.png',
		sprite: {
			base: './assets/images/pokemon/sprite/combusken.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/combusken.png',
			idle: {
				src: './assets/images/pokemon/sprite/combusken-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/combusken-idle.png',
				size: [120, 384],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: -4,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/combusken-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/combusken-attack.png',
				size: [720, 768],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -28,
				correctionX: 0
			},	
		},
		type: [type['fire'], type['fighting']],
		movePool: [ move['flameThrower'], move['slash'], move['quickAttack'] ],
		base: {
			hp: 60,
			atk: 85,
			def: 60,
			spa: 85,
			spd: 60,
			spe: 55
		},
		exp: 142,
		gold: 25,
		catchRate: 1,
		tm: [151, 6, 9, 10, 11, 15, 24, 28, 57, 59, 73, 83, 110, 132, 154, 155, 1, 2, 5, 22, 36, 39, 40, 49, 54, 61, 70, 75, 86, 88, 125, 138, 149, 161, 172, 175, 177 ],
		egg: 'torchic',
		evolution: [
			{
				pokemon: 'blaziken',
				condition: {
					level: 36,
					move: 'fighting',
					cost: 5000
				}
			}
		]
	},
	'blaziken': {
		n: 257,
		name: ['BLAZIKEN', 'BLAZIKEN', '火焰鸡'],
		portrait: './assets/images/pokemon/portrait/blaziken.png',
		image: './assets/images/pokemon/image/blaziken.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/blaziken.png',
		imageShiny: './assets/images/pokemon/image-shiny/blaziken.png',
		sprite: {
			base: './assets/images/pokemon/sprite/blaziken.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/blaziken.png',
			idle: {
				src: './assets/images/pokemon/sprite/blaziken-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/blaziken-idle.png',
				size: [64, 448],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -7,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/blaziken-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/blaziken-attack.png',
				size: [648, 640],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['fire'], type['fighting']],
		movePool: [ move['blazeKick'], move['bounce'], move['fireBlast'] ],
		base: {
			hp: 80,
			atk: 120,
			def: 70,
			spa: 110,
			spd: 70,
			spe: 80
		},
		exp: 239,
		gold: 50,
		catchRate: 1,
		tm: [151, 6, 9, 10, 11, 15, 24, 28, 57, 59, 73, 83, 110, 132, 154, 155, 1, 2, 5, 40, 49, 
			61, 70, 75, 86, 88, 125, 138, 149, 161, 4, 22, 35, 36, 38, 39, 43, 52, 54, 85, 107, 111, 
			113, 115, 133, 140, 153, 172, 173, 175, 177 ],
		egg: 'torchic',
	},
	'mudkip': {
		n: 258,
		name: ['MUDKIP', 'MUDKIP', '水跃鱼'],
		portrait: './assets/images/pokemon/portrait/mudkip.png',
		image: './assets/images/pokemon/image/mudkip.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/mudkip.png',
		imageShiny: './assets/images/pokemon/image-shiny/mudkip.png',
		sprite: {
			base: './assets/images/pokemon/sprite/mudkip.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/mudkip.png',
			idle: {
				src: './assets/images/pokemon/sprite/mudkip-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mudkip-idle.png',
				size: [168, 320],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -1,
				correctionX: 9
			},
			attack: {
				src: './assets/images/pokemon/sprite/mudkip-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mudkip-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -3
			},	
		},
		type: [type['water']],
		movePool: [ move['bubble'] ],
		base: {
			hp: 50,
			atk: 70,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 40
		},
		exp: 62,
		gold: 10,
		catchRate: 1,
		tm: [151, 8, 9, 10, 17, 21, 74, 83, 93, 154, 159, 161, 164],
		egg: 'mudkip',
		evolution: [
			{
				pokemon: 'marshtomp',
				condition: {
					level: 16,
					move: 'water',
					cost: 1500
				}
			}
		]
	},
	'marshtomp': {
		n: 259,
		name: ['MARSHTOMP', 'MARSHTOMP', '沼跃鱼'],
		portrait: './assets/images/pokemon/portrait/marshtomp.png',
		image: './assets/images/pokemon/image/marshtomp.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/marshtomp.png',
		imageShiny: './assets/images/pokemon/image-shiny/marshtomp.png',
		sprite: {
			base: './assets/images/pokemon/sprite/marshtomp.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/marshtomp.png',
			idle: {
				src: './assets/images/pokemon/sprite/marshtomp-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/marshtomp-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 4,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/marshtomp-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/marshtomp-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},	
		},
		type: [type['water'], type['ground']],
		movePool: [ move['magnitude'], move['bubbleBeam'], move['mudSlap'] ],
		base: {
			hp: 70,
			atk: 85,
			def: 70,
			spa: 60,
			spd: 70,
			spe: 50
		},
		exp: 142,
		gold: 25,
		catchRate: 1,
		tm: [151, 8, 9, 10, 17, 21, 74, 83, 93, 154, 159, 161, 164, 13, 29, 40, 43, 47, 60, 77],
		egg: 'mudkip',
		evolution: [
			{
				pokemon: 'swampert',
				condition: {
					level: 36,
					move: 'ground',
					cost: 5000
				}
			}
		]
	},
	'swampert': {
		n: 260,
		name: ['SWAMPERT', 'SWAMPERT', '巨沼怪'],
		portrait: './assets/images/pokemon/portrait/swampert.png',
		image: './assets/images/pokemon/image/swampert.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/swampert.png',
		imageShiny: './assets/images/pokemon/image-shiny/swampert.png',
		sprite: {
			base: './assets/images/pokemon/sprite/swampert.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/swampert.png',
			idle: {
				src: './assets/images/pokemon/sprite/swampert-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swampert-idle.png',
				size: [192, 512],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -11,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/swampert-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swampert-attack.png',
				size: [832, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['water'], type['ground']],
		movePool: [ move['earthquake'], move['rockSlide'], move['surf'], move['hydroPump'] ],
		base: {
			hp: 100,
			atk: 110,
			def: 90,
			spa: 85,
			spd: 90,
			spe: 60
		},
		exp: 241,
		gold: 50,
		catchRate: 1,
		tm: [151, 8, 9, 10, 17, 21, 74, 83, 93, 154, 159, 161, 164, 13, 29, 40, 43, 47, 60, 77, 23, 36, 37, 48, 56, 67, 69, 94, 126, 163 ],
		egg: 'mudkip',
	},
	'poochyena': {
		n: 261,
		name: ['POOCHYENA', 'POOCHYENA', '土狼犬'],
		portrait: './assets/images/pokemon/portrait/poochyena.png',
		image: './assets/images/pokemon/image/poochyena.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/poochyena.png',
		imageShiny: './assets/images/pokemon/image-shiny/poochyena.png',
		sprite: {
			base: './assets/images/pokemon/sprite/poochyena.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/poochyena.png',
			idle: {
				src: './assets/images/pokemon/sprite/poochyena-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poochyena-idle.png',
				size: [144, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -2,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/poochyena-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/poochyena-attack.png',
				size: [704, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -21,
				correctionX: -2
			},	
		},
		type: [type['dark']],
		movePool: [ move['tackle'], move['quickAttack'], move['bite'], ],
		base: {
			hp: 35,
			atk: 55,
			def: 35,
			spa: 30,
			spd: 30,
			spe: 35
		},
		exp: 60,
		gold: 7,
		catchRate: 4,
		tm: [151, 5, 9, 10, 11, 13, 28, 63, 68, 83, 88, 161, 164],
		egg: 'poochyena',
		evolution: [
			{
				pokemon: 'mightyena',
				condition: {
					level: 18,
					cost: 1200
				}
			}
		]
	},
	'mightyena': {
		n: 262,
		name: ['MIGHTYENA', 'MIGHTYENA', '大狼犬'],
		portrait: './assets/images/pokemon/portrait/mightyena.png',
		image: './assets/images/pokemon/image/mightyena.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/mightyena.png',
		imageShiny: './assets/images/pokemon/image-shiny/mightyena.png',
		sprite: {
			base: './assets/images/pokemon/sprite/mightyena.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/mightyena.png',
			idle: {
				src: './assets/images/pokemon/sprite/mightyena-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mightyena-idle.png',
				size: [288, 384],
				position: 5,
				framesX: 6,
				framesY: 8,
				correctionY: 4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/mightyena-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mightyena-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['dark']],
		movePool: [ move['feintAttack'], move['slash'], move['crunch'], ],
		base: {
			hp: 70,
			atk: 90,
			def: 70,
			spa: 60,
			spd: 60,
			spe: 70
		},
		exp: 147,
		gold: 12,
		catchRate: 2,
		tm: [151, 5, 9, 10, 11, 13, 28, 63, 68, 83, 88, 161, 164, 2, 22, 40, 
			43, 49, 64, 67, 70, 76, 81, 95, 100, 103, 118, 138, 139, 141, 143, 146, 149, 153, 158, 171, 179],
		egg: 'poochyena',
	},
	'zigzagoon': {
		n: 263,
		name: ['ZIGZAGOON', 'ZIGZAGOON', '蛇纹熊'],
		portrait: './assets/images/pokemon/portrait/zigzagoon.png',
		image: './assets/images/pokemon/image/zigzagoon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/zigzagoon.png',
		imageShiny: './assets/images/pokemon/image-shiny/zigzagoon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/zigzagoon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/zigzagoon.png',
			idle: {
				src: './assets/images/pokemon/sprite/zigzagoon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zigzagoon-idle.png',
				size: [192, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: 0,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/zigzagoon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zigzagoon-attack.png',
				size: [768, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['normal']],
		movePool: [ move['scratch'], move['quickAttack'], move['swift'], move['bite'], ],
		base: {
			hp: 38,
			atk: 30,
			def: 41,
			spa: 30,
			spd: 41,
			spe: 60
		},
		exp: 60,
		gold: 6,
		catchRate: 4,
		tm: [151, 1, 5, 9, 10, 13, 18, 28, 45, 63, 68, 83, 161, 164],
		egg: 'zigzagoon',
		evolution: [
			{
				pokemon: 'linoone',
				condition: {
					level: 20,
					cost: 500
				}
			}
		]
	},
	'linoone': {
		n: 264,
		name: ['LINOONE', 'LINOONE', '直冲熊'],
		portrait: './assets/images/pokemon/portrait/linoone.png',
		image: './assets/images/pokemon/image/linoone.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/linoone.png',
		imageShiny: './assets/images/pokemon/image-shiny/linoone.png',
		sprite: {
			base: './assets/images/pokemon/sprite/linoone.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/linoone.png',
			idle: {
				src: './assets/images/pokemon/sprite/linoone-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/linoone-idle.png',
				size: [672, 320],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: 0,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/linoone-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/linoone-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},	
		},
		type: [type['normal']],
		movePool: [ move['quickAttack'], move['bite'], move['crunch'], ],
		base: {
			hp: 78,
			atk: 70,
			def: 61,
			spa: 50,
			spd: 61,
			spe: 100
		},
		exp: 166,
		gold: 11,
		catchRate: 2,
		tm: [151, 1, 5, 9, 10, 13, 18, 28, 45, 63, 68, 83, 161, 164, 2, 22, 43, 64, 70, 141, 149 ],
		egg: 'zigzagoon',
	},
	'wurmple': {
		n: 265,
		name: ['WURMPLE', 'WURMPLE', '刺尾虫'],
		portrait: './assets/images/pokemon/portrait/wurmple.png',
		image: './assets/images/pokemon/image/wurmple.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wurmple.png',
		imageShiny: './assets/images/pokemon/image-shiny/wurmple.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wurmple.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wurmple.png',
			idle: {
				src: './assets/images/pokemon/sprite/wurmple-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wurmple-idle.png',
				size: [192, 256],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: 1,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/wurmple-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wurmple-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -18,
				correctionX: 0
			},	
		},
		type: [type['bug']],
		movePool: [ move['poisonSting'], move['stringShot'], move['tackle'] ],
		base: {
			hp: 45,
			atk: 45,
			def: 35,
			spa: 20,
			spd: 30,
			spe: 20
		},
		exp: 56,
		gold: 4,
		catchRate: 5,
		tm: [ 151, 10, 12, 26, 32, 33, 83 ],
		egg: 'wurmple',
		evolution: [
			{
				pokemon: 'silcoon',
				condition: {
					level: 7,
					move: 'bug',
					cost: 100
				}
			},
			{
				pokemon: 'cascoon',
				condition: {
					level: 7,
					move: 'poison',
					cost: 100
				}
			}
		]
	},
	'silcoon': {
		n: 266,
		name: ['SILCOON', 'SILCOON', '甲壳茧'],
		portrait: './assets/images/pokemon/portrait/silcoon.png',
		image: './assets/images/pokemon/image/silcoon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/silcoon.png',
		imageShiny: './assets/images/pokemon/image-shiny/silcoon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/silcoon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/silcoon.png',
			idle: {
				src: './assets/images/pokemon/sprite/silcoon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/silcoon-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: 0,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/silcoon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/silcoon-attack.png',
				size: [960, 576],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},	
		},
		type: [type['bug']],
		movePool: [ move['poisonSting'], move['stringShot'], move['tackle'] ],
		base: {
			hp: 50,
			atk: 35,
			def: 55,
			spa: 25,
			spd: 25,
			spe: 15
		},
		exp: 72,
		gold: 7,
		catchRate: 3,
		tm: [ 151, 10, 12, 26, 32, 33, 83 ],
		egg: 'wurmple',
		evolution: [
			{
				pokemon: 'beautifly',
				condition: {
					level: 10,
					cost: 400
				}
			}
		]
	},
	'beautifly': {
		n: 267,
		name: ['BEAUTIFLY', 'BEAUTIFLY', '狩猎凤蝶'],
		portrait: './assets/images/pokemon/portrait/beautifly.png',
		image: './assets/images/pokemon/image/beautifly.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/beautifly.png',
		imageShiny: './assets/images/pokemon/image-shiny/beautifly.png',
		sprite: {
			base: './assets/images/pokemon/sprite/beautifly.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/beautifly.png',
			idle: {
				src: './assets/images/pokemon/sprite/beautifly-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/beautifly-idle.png',
				size: [160, 512],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/beautifly-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/beautifly-attack.png',
				size: [1024, 640],
				position: 6,
				framesX: 16,
				framesY: 8,
				correctionY: -16,
				correctionX: -3
			},	
		},
		type: [type['bug'], type['flying']],
		movePool: [ move['psybeam'], move['gigaDrain'], move['gust'], move['bugBuzz'] ],
		base: {
			hp: 60,
			atk: 70,
			def: 50,
			spa: 90,
			spd: 50,
			spe: 65
		},
		exp: 178,
		gold: 9,
		catchRate: 2,
		tm: [ 151, 10, 12, 26, 32, 33, 83, 3, 20, 24, 59, 65, 78, 80, 90, 92, 96, 98, 99, 105, 127, 130, 132, 148], 
		egg: 'wurmple',
	},
	'cascoon': {
		n: 268,
		name: ['CASCOON', 'CASCOON', '盾甲茧'],
		portrait: './assets/images/pokemon/portrait/cascoon.png',
		image: './assets/images/pokemon/image/cascoon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/cascoon.png',
		imageShiny: './assets/images/pokemon/image-shiny/cascoon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/cascoon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/cascoon.png',
			idle: {
				src: './assets/images/pokemon/sprite/cascoon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cascoon-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: 3,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/cascoon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cascoon-attack.png',
				size: [768, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},	
		},
		type: [type['bug']],
		movePool: [ move['poisonSting'], move['stringShot'], move['tackle'] ],
		base: {
			hp: 50,
			atk: 35,
			def: 55,
			spa: 25,
			spd: 25,
			spe: 15
		},
		exp: 72,
		gold: 7,
		catchRate: 3,
		tm: [ 151, 10, 12, 26, 32, 33, 83 ],
		egg: 'wurmple',
		evolution: [
			{
				pokemon: 'dustox',
				condition: {
					level: 10,
					move: 'bug',
					cost: 400
				}
			}
		]
	},
	'dustox': {
		n: 269,
		name: ['DUSTOX', 'DUSTOX', '毒粉蛾'],
		portrait: './assets/images/pokemon/portrait/dustox.png',
		image: './assets/images/pokemon/image/dustox.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/dustox.png',
		imageShiny: './assets/images/pokemon/image-shiny/dustox.png',
		sprite: {
			base: './assets/images/pokemon/sprite/dustox.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/dustox.png',
			idle: {
				src: './assets/images/pokemon/sprite/dustox-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dustox-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -9,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/dustox-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dustox-attack.png',
				size: [1008, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -20,
				correctionX: -3
			},	
		},
		type: [type['bug'], type['poison']],
		movePool: [ move['poisonTail'], move['twineedle'], move['silverWind'] ],
		base: {
			hp: 60,
			atk: 50,
			def: 70,
			spa: 50,
			spd: 90,
			spe: 65
		},
		exp: 172,
		gold: 9,
		catchRate: 2,
		tm: [ 151, 10, 12, 26, 32, 33, 83, 24, 28, 49, 50, 53, 59, 70, 91, 92, 96, 97, 99, 100, 130, 137, 142, 144, 147, 169, 170, 171], 
		egg: 'wurmple',
	},
	'lotad': {
		n: 270,
		name: ['LOTAD', 'LOTAD', '莲叶童子'],
		portrait: './assets/images/pokemon/portrait/lotad.png',
		image: './assets/images/pokemon/image/lotad.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/lotad.png',
		imageShiny: './assets/images/pokemon/image-shiny/lotad.png',
		sprite: {
			base: './assets/images/pokemon/sprite/lotad.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/lotad.png',
			idle: {
				src: './assets/images/pokemon/sprite/lotad-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lotad-idle.png',
				size: [96, 192],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 8,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/lotad-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lotad-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -2
			},	
		},
		type: [type['water'], type['grass']],
		movePool: [ move['waterGun'],  move['bubble'], move['absorb'], move['razorLeaf'], move['mudSlap']],
		base: {
			hp: 40,
			atk: 30,
			def: 30,
			spa: 40,
			spd: 50,
			spe: 30
		},
		exp: 60,
		gold: 8,
		catchRate: 4,
		tm: [151, 7, 9, 10, 12, 17, 21, 25, 26, 63, 83, 93, 98, 159],
		egg: 'lotad',
		evolution: [
			{
				pokemon: 'lombre',
				condition: {
					level: 14,
					cost: 400
				}
			}
		]
	},
	'lombre': {
		n: 271,
		name: ['LOMBRE', 'LOMBRE', '莲帽小童'],
		portrait: './assets/images/pokemon/portrait/lombre.png',
		image: './assets/images/pokemon/image/lombre.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/lombre.png',
		imageShiny: './assets/images/pokemon/image-shiny/lombre.png',
		sprite: {
			base: './assets/images/pokemon/sprite/lombre.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/lombre.png',
			idle: {
				src: './assets/images/pokemon/sprite/lombre-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lombre-idle.png',
				size: [256, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -6,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/lombre-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lombre-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},	
		},
		type: [type['water'], type['grass']],
		movePool: [ move['rockThrow'],  move['magicalLeaf'],  move['megaDrain'],  move['bubbleBeam'] ],
		base: {
			hp: 60,
			atk: 50,
			def: 50,
			spa: 60,
			spd: 70,
			spe: 50
		},
		exp: 134,
		gold: 12,
		catchRate: 2,
		tm: [151, 7, 9, 10, 12, 17, 21, 25, 26, 63, 83, 93, 98, 159, 2, 11, 28, 36, 40, 77, 80, 129, 136, 148],
		egg: 'lotad',
		evolution: [
			{
				pokemon: 'ludicolo',
				condition: {
					level: 25,
					item: 'waterStone',
					cost: 1600
				}
			}
		]
	},
	'ludicolo': {
		n: 272,
		name: ['LUDICOLO', 'LUDICOLO', '乐天河童'],
		portrait: './assets/images/pokemon/portrait/ludicolo.png',
		image: './assets/images/pokemon/image/ludicolo.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ludicolo.png',
		imageShiny: './assets/images/pokemon/image-shiny/ludicolo.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ludicolo.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ludicolo.png',
			idle: {
				src: './assets/images/pokemon/sprite/ludicolo-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ludicolo-idle.png',
				size: [64, 384],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -4,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/ludicolo-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ludicolo-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},	
		},
		type: [type['water'], type['grass']],
		movePool: [ move['solarBeam'],  move['crabhammer'],  move['gigaDrain'],  move['waterShuriken'] ],
		base: {
			hp: 80,
			atk: 70,
			def: 70,
			spa: 90,
			spd: 100,
			spe: 70
		},
		exp: 236,
		gold: 21,
		catchRate: 1,
		tm: [151, 7, 9, 10, 12, 17, 21, 25, 26, 63, 83, 93, 98, 159, 2, 11, 28, 36, 40, 77, 80, 129, 
			 136, 148, 27, 37, 43, 48, 56, 60, 67, 69, 78, 84, 87, 104, 105, 174],
		egg: 'lotad',
	},
	'seedot': {
		n: 273,
		name: ['SEEDOT', 'SEEDOT', '橡实果'],
		portrait: './assets/images/pokemon/portrait/seedot.png',
		image: './assets/images/pokemon/image/seedot.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/seedot.png',
		imageShiny: './assets/images/pokemon/image-shiny/seedot.png',
		sprite: {
			base: './assets/images/pokemon/sprite/seedot.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/seedot.png',
			idle: {
				src: './assets/images/pokemon/sprite/seedot-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seedot-idle.png',
				size: [48, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 3,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/seedot-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seedot-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -4
			},	
		},
		type: [type['grass']],
		movePool: [ move['sandTomb'], move['pound'], move['astonish'], move['razorLeaf'] ],
		base: {
			hp: 40,
			atk: 40,
			def: 50,
			spa: 30,
			spd: 30,
			spe: 30
		},
		exp: 60,
		gold: 6,
		catchRate: 3,
		tm: [151, 9, 10, 13, 25, 28, 83, 87, 93, 98, 164],
		egg: 'seedot',
		evolution: [
			{
				pokemon: 'nuzleaf',
				condition: {
					level: 14,
					cost: 400
				}
			}
		]
	},
	'nuzleaf': {
		n: 274,
		name: ['NUZLEAF', 'NUZLEAF', '长鼻叶'],
		portrait: './assets/images/pokemon/portrait/nuzleaf.png',
		image: './assets/images/pokemon/image/nuzleaf.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nuzleaf.png',
		imageShiny: './assets/images/pokemon/image-shiny/nuzleaf.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nuzleaf.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nuzleaf.png',
			idle: {
				src: './assets/images/pokemon/sprite/nuzleaf-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nuzleaf-idle.png',
				size: [448, 384],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -4,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/nuzleaf-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nuzleaf-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
		},
		type: [type['grass'], type['dark']],
		movePool: [ move['crunch'], move['feintAttack'], move['razorLeaf'] ],
		base: {
			hp: 70,
			atk: 70,
			def: 40,
			spa: 60,
			spd: 40,
			spe: 60
		},
		exp: 132,
		gold: 8,
		catchRate: 1,
		tm: [151, 9, 10, 13, 25, 28, 83, 87, 93, 98, 164, 1, 2, 5, 11, 12, 22, 36, 40, 49, 50, 68, 70, 80, 81, 88, 139, 141, 143, 146, 149, 161, 171, 180],
		egg: 'seedot',
		evolution: [
			{
				pokemon: 'shiftry',
				condition: {
					level: 25,
					item: 'leafStone',
					cost: 1600
				}
			}
		]
	},
	'shiftry': {
		n: 275,
		name: ['SHIFTRY', 'SHIFTRY', '狡猾天狗'],
		portrait: './assets/images/pokemon/portrait/shiftry.png',
		image: './assets/images/pokemon/image/shiftry.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/shiftry.png',
		imageShiny: './assets/images/pokemon/image-shiny/shiftry.png',
		sprite: {
			base: './assets/images/pokemon/sprite/shiftry.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/shiftry.png',
			idle: {
				src: './assets/images/pokemon/sprite/shiftry-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shiftry-idle.png',
				size: [320, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -11,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/shiftry-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shiftry-attack.png',
				size: [720, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -23,
				correctionX: 0
			},
		},
		type: [type['grass'], type['dark']],
		movePool: [ move['crunch'], move['leafBlade'], move['pursuit'], move['gigaDrain'], move['shadowClaw'] ],
		base: {
			hp: 90,
			atk: 100,
			def: 60,
			spa: 90,
			spd: 60,
			spe: 80
		},
		exp: 218,
		gold: 25,
		catchRate: 1,
		tm: [151, 9, 10, 13, 25, 28, 83, 87, 93, 98, 164, 1, 2, 5, 11, 12, 22, 36, 40, 49, 50, 68, 70, 80, 81, 88, 
			 139, 141, 143, 146, 149, 161, 171, 180, 27, 30, 39, 95, 103, 138, 148, 157
		],
	},
	'taillow': {
		n: 276,
		name: ['TAILLOW', 'TAILLOW', '傲骨燕'],
		portrait: './assets/images/pokemon/portrait/taillow.png',
		image: './assets/images/pokemon/image/taillow.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/taillow.png',
		imageShiny: './assets/images/pokemon/image-shiny/taillow.png',
		sprite: {
			base: './assets/images/pokemon/sprite/taillow.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/taillow.png',
			idle: {
				src: './assets/images/pokemon/sprite/taillow-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/taillow-idle.png',
				size: [160, 256],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 3,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/taillow-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/taillow-attack.png',
				size: [896, 512],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -10,
				correctionX: 0
			},
		},
		type: [type['normal'], type['flying']],
		movePool: [ move['gust'], move['sandAttack'], move['peck'], move['quickAttack']  ],
		base: {
			hp: 40,
			atk: 55,
			def: 30,
			spa: 30,
			spd: 30,
			spe: 85
		},
		exp: 55,
		gold: 6,
		catchRate: 3,
		tm: [151, 5, 6, 9, 10, 24, 57, 59, 70, 83, 132, 149 ],
		egg: 'taillow',
		evolution: [
			{
				pokemon: 'swellow',
				condition: {
					level: 22,
					cost: 1700
				}
			}
		]
	},
	'swellow': {
		n: 277,
		name: ['SWELLOW', 'SWELLOW', '大王燕'],
		portrait: './assets/images/pokemon/portrait/swellow.png',
		image: './assets/images/pokemon/image/swellow.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/swellow.png',
		imageShiny: './assets/images/pokemon/image-shiny/swellow.png',
		sprite: {
			base: './assets/images/pokemon/sprite/swellow.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/swellow.png',
			idle: {
				src: './assets/images/pokemon/sprite/swellow-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swellow-idle.png',
				size: [448, 512],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -5,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/swellow-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swellow-attack.png',
				size: [896, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},	
		},
		type: [type['normal'], type['flying']],
		movePool: [ move['hurricane'], move['fly'], move['airSlash'], move['drillPeck'], move['esperWing'] ],
		base: {
			hp: 60,
			atk: 85,
			def: 60,
			spa: 75,
			spd: 50,
			spe: 125
		},
		exp: 160,
		gold: 20,
		catchRate: 1,
		tm: [151, 5, 6, 9, 10, 24, 57, 59, 70, 83, 132, 149, 14, 65, 76, 99, 106, 127],
		egg: 'taillow',
	},
	'wingull': {
		n: 278,
		name: ['WINGULL', 'WINGULL', '长翅鸥'],
		portrait: './assets/images/pokemon/portrait/wingull.png',
		image: './assets/images/pokemon/image/wingull.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wingull.png',
		imageShiny: './assets/images/pokemon/image-shiny/wingull.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wingull.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wingull.png',
			idle: {
				src: './assets/images/pokemon/sprite/wingull-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wingull-idle.png',
				size: [576, 384],
				position: 6,
				framesX: 18,
				framesY: 8,
				correctionY: -2,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/wingull-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wingull-attack.png',
				size: [896, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},	
		},
		type: [type['water'], type['flying']],
		movePool: [ move['bubble'], move['wingAttack'], move['twister'], move['chillingWater'] ],
		base: {
			hp: 40,
			atk: 30,
			def: 30,
			spa: 55,
			spd: 30,
			spe: 85
		},
		exp: 61,
		gold: 10,
		catchRate: 3,
		tm: [151, 5, 6, 10, 17, 21, 24, 59, 62, 68, 106, 132, 159 ],
		egg: 'wingull',
		evolution: [
			{
				pokemon: 'pelipper',
				condition: {
					level: 25,
					move: 'water',
					cost: 1800
				}
			}
		]
	},
	'pelipper': {
		n: 279,
		name: ['PELIPPER', 'PELIPPER', '大嘴鸥'],
		portrait: './assets/images/pokemon/portrait/pelipper.png',
		image: './assets/images/pokemon/image/pelipper.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/pelipper.png',
		imageShiny: './assets/images/pokemon/image-shiny/pelipper.png',
		sprite: {
			base: './assets/images/pokemon/sprite/pelipper.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/pelipper.png',
			idle: {
				src: './assets/images/pokemon/sprite/pelipper-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pelipper-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 1
			},
			attack: {
				src: './assets/images/pokemon/sprite/pelipper-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/pelipper-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -14,
				correctionX: -10
			},	
		},
		type: [type['water'], type['flying']],
		movePool: [ move['hurricane'], move['surf'], move['bouncyBubble'], move['airSlash'] ],
		base: {
			hp: 60,
			atk: 50,
			def: 100,
			spa: 85,
			spd: 70,
			spe: 65
		},
		exp: 168,
		gold: 18,
		catchRate: 2,
		tm: [151, 5, 6, 10, 17, 21, 24, 59, 62, 68, 106, 132, 159, 14, 37, 44, 47, 55, 57, 77, 99, 127, 163, 177 ],
		egg: 'wingull',
	},
	'ralts': {
		n: 280,
		name: ['RALTS', 'RALTS', '拉鲁拉丝'],
		portrait: './assets/images/pokemon/portrait/ralts.png',
		image: './assets/images/pokemon/image/ralts.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ralts.png',
		imageShiny: './assets/images/pokemon/image-shiny/ralts.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ralts.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ralts.png',
			idle: {
				src: './assets/images/pokemon/sprite/ralts-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ralts-idle.png',
				size: [64, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 3,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/ralts-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ralts-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -5
			},	
		},
		type: [type['psychic'] ],
		movePool: [ move['confusion'] ],
		base: {
			hp: 28,
			atk: 25,
			def: 25,
			spa: 45,
			spd: 35,
			spe: 40
		},
		exp: 40,
		gold: 2,
		catchRate: 5,
		tm: [151, 9, 10, 20, 41, 51],
		egg: 'ralts',
		evolution: [
			{
				pokemon: 'kirlia',
				condition: {
					level: 20,
					move: 'psychic',
					cost: 1000
				}
			}
		]
	},
	'kirlia': {
		n: 281,
		name: ['KIRLIA', 'KIRLIA', '奇鲁莉安'],
		portrait: './assets/images/pokemon/portrait/kirlia.png',
		image: './assets/images/pokemon/image/kirlia.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kirlia.png',
		imageShiny: './assets/images/pokemon/image-shiny/kirlia.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kirlia.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kirlia.png',
			idle: {
				src: './assets/images/pokemon/sprite/kirlia-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kirlia-idle.png',
				size: [216, 320],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -1,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/kirlia-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kirlia-attack.png',
				size: [936, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -17,
				correctionX: -5
			},	
		},
		type: [type['psychic'] ],
		movePool: [ move['psybeam'], move['signalBeam'], move['zenHeadbutt'] ],
		base: {
			hp: 38,
			atk: 35,
			def: 35,
			spa: 65,
			spd: 55,
			spe: 50
		},
		exp: 97,
		gold: 6,
		catchRate: 2,
		tm: [151, 9, 10, 20, 41, 51, 3, 31, 64, 130],
		egg: 'ralts',
		evolution: [
			{
				pokemon: 'gardevoir',
				condition: {
					level: 30,
					move: 'psychic',
					cost: 8000
				}
			},
		]
	},
	'gardevoir': {
		n: 282,
		name: ['GARDEVOIR', 'GARDEVOIR', '沙奈朵'],
		portrait: './assets/images/pokemon/portrait/gardevoir.png',
		image: './assets/images/pokemon/image/gardevoir.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/gardevoir.png',
		imageShiny: './assets/images/pokemon/image-shiny/gardevoir.png',
		sprite: {
			base: './assets/images/pokemon/sprite/gardevoir.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/gardevoir.png',
			idle: {
				src: './assets/images/pokemon/sprite/gardevoir-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gardevoir-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/gardevoir-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gardevoir-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -5
			},	
		},
		type: [type['psychic'] ],
		movePool: [ move['psychic'], move['thunder'], move['magicalLeaf'], move['shadowBall'] ],
		base: {
			hp: 68,
			atk: 65,
			def: 65,
			spa: 125,
			spd: 115,
			spe: 80
		},
		exp: 234,
		gold: 25,
		catchRate: 0.6,
		tm: [151, 9, 10, 20, 41, 51, 3, 31, 64, 130, 43, 78, 79, 80, 84, 86, 90, 98, 101, 103, 121, 123, 132, 136, 145, 158],
		egg: 'ralts',
	},
	'surskit': {
		n: 283,
		name: ['SURSKIT', 'SURSKIT', '溜溜糖球'],
		portrait: './assets/images/pokemon/portrait/surskit.png',
		image: './assets/images/pokemon/image/surskit.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/surskit.png',
		imageShiny: './assets/images/pokemon/image-shiny/surskit.png',
		sprite: {
			base: './assets/images/pokemon/sprite/surskit.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/surskit.png',
			idle: {
				src: './assets/images/pokemon/sprite/surskit-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/surskit-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 6,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/surskit-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/surskit-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -10,
				correctionX: -5
			},
		},
		type: [type['bug'], type['water']],
		movePool: [ move['bubble'], move['electroweb'], move['bugbit'] ],
		base: {
			hp: 40,
			atk: 30,
			def: 32,
			spa: 50,
			spd: 52,
			spe: 65
		},
		exp: 56,
		gold: 10,
		catchRate: 3,
		tm: [ 151, 5, 10, 12, 17, 21, 26, 33, 49, 62, 77, 83, 96, 98, 129, 159, 178 ],
		egg: 'surskit',
		evolution: [
			{
				pokemon: 'masquerain',
				condition: {
					level: 22,
					cost: 600
				}
			}
		]
	},
	'masquerain': {
		n: 284,
		name: ['MASQUERAIN', 'MASQUERAIN', '雨翅蛾'],
		portrait: './assets/images/pokemon/portrait/masquerain.png',
		image: './assets/images/pokemon/image/masquerain.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/masquerain.png',
		imageShiny: './assets/images/pokemon/image-shiny/masquerain.png',
		sprite: {
			base: './assets/images/pokemon/sprite/masquerain.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/masquerain.png',
			idle: {
				src: './assets/images/pokemon/sprite/masquerain-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/masquerain-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -3,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/masquerain-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/masquerain-attack.png',
				size: [960, 640],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -18,
				correctionX: -5
			},
		},
		type: [type['bug'], type['flying']],
		movePool: [ move['firstImpression'], move['fellStinger'], move['twister'], move['fly'] ],
		base: {
			hp: 70,
			atk: 60,
			def: 62,
			spa: 100,
			spd: 82,
			spe: 80
		},
		exp: 147,
		gold: 15,
		catchRate: 2,
		tm: [ 151, 5, 10, 12, 17, 21, 26, 33, 49, 62, 77, 83, 96, 98, 129, 159, 178, 
			6, 24, 50, 55, 57, 59, 70, 92, 99, 106, 130, 132, 170, 171 ], 
		egg: 'surskit',
	},
	'shroomish': {
		n: 285,
		name: ['SHROOMISH', 'SHROOMISH', '蘑蘑菇'],
		portrait: './assets/images/pokemon/portrait/shroomish.png',
		image: './assets/images/pokemon/image/shroomish.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/shroomish.png',
		imageShiny: './assets/images/pokemon/image-shiny/shroomish.png',
		sprite: {
			base: './assets/images/pokemon/sprite/shroomish.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/shroomish.png',
			idle: {
				src: './assets/images/pokemon/sprite/shroomish-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shroomish-idle.png',
				size: [120, 192],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 7,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/shroomish-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shroomish-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},
		},
		type: [type['grass']],
		movePool: [ move['absorb'], move['sandAttack'], move['vineWhip'], move['rockSmash'], move['twineedle'] ],
		base: {
			hp: 60,
			atk: 40,
			def: 60,
			spa: 40,
			spd: 60,
			spe: 35
		},
		exp: 63,
		gold: 6,
		catchRate: 3,
		tm: [151, 7, 9, 10, 12, 16, 25, 26, 28, 50, 51, 80, 83, 87, 93, 98, 161],
		egg: 'shroomish',
		evolution: [
			{
				pokemon: 'breloom',
				condition: {
					level: 23,
					cost: 2400
				}
			}
		]
	},
	'breloom': {
		n: 286,
		name: ['BRELOOM', 'BRELOOM', '斗笠菇'],
		portrait: './assets/images/pokemon/portrait/breloom.png',
		image: './assets/images/pokemon/image/breloom.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/breloom.png',
		imageShiny: './assets/images/pokemon/image-shiny/breloom.png',
		sprite: {
			base: './assets/images/pokemon/sprite/breloom.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/breloom.png',
			idle: {
				src: './assets/images/pokemon/sprite/breloom-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/breloom-idle.png',
				size: [480, 384],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -6,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/breloom-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/breloom-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
		},
		type: [type['grass'], type['fighting']],
		movePool: [ move['gigaDrain'], move['rageFist'], move['leafBlade'], move['skyUppercut'], move['rockThrow'], move['stomp'] ],
		base: {
			hp: 60,
			atk: 130,
			def: 80,
			spa: 60,
			spd: 60,
			spe: 70
		},
		exp: 161,
		gold: 17,
		catchRate: 1,
		tm: [
			151, 7, 9, 10, 12, 16, 25, 26, 28, 50, 51, 80, 83, 87, 93, 98, 161, 1, 2, 5, 13, 22, 35, 36, 38, 39, 40, 43, 46, 52, 54, 61, 81, 105, 107, 
			109, 111, 113, 115, 116, 119, 125, 133, 148, 156, 157, 171, 173, 175
		], 
		egg: 'shroomish',
	},
	'slakoth': {
		n: 287,
		name: ['SLAKOTH', 'SLAKOTH', '懒人獭'],
		portrait: './assets/images/pokemon/portrait/slakoth.png',
		image: './assets/images/pokemon/image/slakoth.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/slakoth.png',
		imageShiny: './assets/images/pokemon/image-shiny/slakoth.png',
		sprite: {
			base: './assets/images/pokemon/sprite/slakoth.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/slakoth.png',
			idle: {
				src: './assets/images/pokemon/sprite/slakoth-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slakoth-idle.png',
				size: [80, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 6,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/slakoth-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slakoth-attack.png',
				size: [800, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -13,
				correctionX: -4
			},
		},
		type: [type['normal']],
		movePool: [ move['tackle'], move['scratch'] ],
		base: {
			hp: 60,
			atk: 60,
			def: 60,
			spa: 35,
			spd: 35,
			spe: 30
		},
		exp: 43,
		gold: 5,
		catchRate: 3,
		tm: [151, 1, 9, 10, 11, 83, 93 ],
		egg: 'slakoth',
		evolution: [
			{
				pokemon: 'vigoroth',
				condition: {
					level: 18,
					cost: 1800
				}
			}
		]
	},
	'vigoroth': {
		n: 288,
		name: ['VIGOROTH', 'VIGOROTH', '过动猿'],
		portrait: './assets/images/pokemon/portrait/vigoroth.png',
		image: './assets/images/pokemon/image/vigoroth.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/vigoroth.png',
		imageShiny: './assets/images/pokemon/image-shiny/vigoroth.png',
		sprite: {
			base: './assets/images/pokemon/sprite/vigoroth.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/vigoroth.png',
			idle: {
				src: './assets/images/pokemon/sprite/vigoroth-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vigoroth-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -11,
				correctionX: 9
			},
			attack: {
				src: './assets/images/pokemon/sprite/vigoroth-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vigoroth-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -2
			},
		},
		type: [type['normal']],
		movePool: [ move['slash'], move['quickAttack'], move['feintAttack'], move['cometPunch'] ],
		base: {
			hp: 80,
			atk: 80,
			def: 80,
			spa: 55,
			spd: 55,
			spe: 90
		},
		exp: 145,
		gold: 15,
		catchRate: 1,
		tm: [151, 1, 9, 10, 11, 83, 93, 2, 5, 13, 22, 28, 36, 40, 43, 49, 67, 70, 84, 88, 109, 138, 141, 161 ],
		egg: 'slakoth',
		evolution: [
			{
				pokemon: 'slaking',
				condition: {
					level: 36,
					cost: 12500
				}
			}
		]
	},
	'slaking': {
		n: 289,
		name: ['SLAKING', 'SLAKING', '请假王'],
		portrait: './assets/images/pokemon/portrait/slaking.png',
		image: './assets/images/pokemon/image/slaking.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/slaking.png',
		imageShiny: './assets/images/pokemon/image-shiny/slaking.png',
		sprite: {
			base: './assets/images/pokemon/sprite/slaking.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/slaking.png',
			idle: {
				src: './assets/images/pokemon/sprite/slaking-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slaking-idle.png',
				size: [224, 384],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -7,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/slaking-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/slaking-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			},
		},
		type: [type['normal']],
		movePool: [ move['cometPunch'],  move['bodySlam'],  move['rockSlide'],  move['superpower'] ],
		base: {
			hp: 150,
			atk: 160,
			def: 100,
			spa: 95,
			spd: 65,
			spe: 20
		},
		exp: 290,
		gold: 65,
		catchRate: 0.6,		
		tm: [151, 1, 9, 10, 11, 83, 93, 2, 5, 13, 22, 28, 36, 40, 43, 49, 67, 70, 84, 88, 109, 138, 141, 161, 23, 64, 71, 94, 126, 165 ],
		egg: 'slakoth',
	},
	'nincada': {
		n: 290,
		name: ['NINCADA', 'NINCADA', '土居忍士'],
		portrait: './assets/images/pokemon/portrait/nincada.png',
		image: './assets/images/pokemon/image/nincada.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nincada.png',
		imageShiny: './assets/images/pokemon/image-shiny/nincada.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nincada.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nincada.png',
			idle: {
				src: './assets/images/pokemon/sprite/nincada-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nincada-idle.png',
				size: [120, 192],
				position: 6,
				framesX: 5,
				framesY: 8,
				correctionY: 6,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/nincada-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nincada-attack.png',
				size: [704, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},
		},
		type: [type['bug'], type['ground']],
		movePool: [ move['sandTomb'], move['absorb'], move['scratch'], move['twineedle'], move['astonish'] ],
		base: {
			hp: 31,
			atk: 45,
			def: 90,
			spa: 30,
			spd: 30,
			spe: 40
		},
		exp: 53,
		gold: 10,
		catchRate: 2,
		tm: [ 5, 9, 10, 11, 12, 26, 28, 49, 50, 83, 88, 98, 164], 
		egg: 'nincada',
		evolution: [
			{
				pokemon: 'ninjask',
				condition: {
					level: 20,
					cost: 1500
				}
			},
			{
				pokemon: 'shedinja',
				condition: {
					level: 20,
					move: 'ghost',
					cost: 2000
				}
			}
		]
	},
	'ninjask': {
		n: 291,
		name: ['NINJASK', 'NINJASK', '铁面忍者'],
		portrait: './assets/images/pokemon/portrait/ninjask.png',
		image: './assets/images/pokemon/image/ninjask.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/ninjask.png',
		imageShiny: './assets/images/pokemon/image-shiny/ninjask.png',
		sprite: {
			base: './assets/images/pokemon/sprite/ninjask.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/ninjask.png',
			idle: {
				src: './assets/images/pokemon/sprite/ninjask-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ninjask-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -4,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/ninjask-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/ninjask-attack.png',
				size: [720, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: 0
			},
		},
		type: [type['bug'], type['flying']],
		movePool: [ move['slash'], move['fakeOut'], move['pursuit'], move['firstImpression'], move['fellStinger'] ],
		base: {
			hp: 61,
			atk: 90,
			def: 45,
			spa: 50,
			spd: 50,
			spe: 160
		},
		exp: 160,
		gold: 15,
		catchRate: 1,
		tm: [ 5, 9, 10, 11, 12, 26, 28, 49, 50, 83, 88, 98, 164, 1, 24, 57, 59, 70, 76, 92, 95, 99, 106, 138, 149, 153, 170, 171 ],
		egg: 'nincada',
	},
	'shedinja': {
		n: 292,
		name: ['SHEDINJA', 'SHEDINJA', '脱壳忍者'],
		portrait: './assets/images/pokemon/portrait/shedinja.png',
		image: './assets/images/pokemon/image/shedinja.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/shedinja.png',
		imageShiny: './assets/images/pokemon/image-shiny/shedinja.png',
		sprite: {
			base: './assets/images/pokemon/sprite/shedinja.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/shedinja.png',
			idle: {
				src: './assets/images/pokemon/sprite/shedinja-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shedinja-idle.png',
				size: [288, 448],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -8,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/shedinja-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shedinja-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},
		},
		type: [type['bug'], type['ghost']],
		movePool: [ move['foulPlay'], move['poltergeist'], move['fellStinger'], move['firstImpression'] ],
		base: {
			hp: 25,
			atk: 90,
			def: 45,
			spa: 30,
			spd: 30,
			spe: 40
		},
		exp: 83,
		gold: 15,
		catchRate: 1,
		tm: [ 5, 9, 10, 11, 12, 26, 28, 49, 50, 83, 88, 98, 164, 28, 70, 81, 95, 101, 138, 143, 146, 149, 167, 170, 171],
		egg: 'nincada',
	},
	'whismur': {
		n: 293,
		name: ['WHISMUR', 'WHISMUR', '咕妞妞'],
		portrait: './assets/images/pokemon/portrait/whismur.png',
		image: './assets/images/pokemon/image/whismur.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/whismur.png',
		imageShiny: './assets/images/pokemon/image-shiny/whismur.png',
		sprite: {
			base: './assets/images/pokemon/sprite/whismur.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/whismur.png',
			idle: {
				src: './assets/images/pokemon/sprite/whismur-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/whismur-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -7,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/whismur-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/whismur-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},
		},
		type: [type['normal']],
		movePool: [ move['tackle'], move['pound'], move['rockSmash'], move['bugBuzz'] ],
		base: {
			hp: 64,
			atk: 51,
			def: 23,
			spa: 51,
			spd: 23,
			spe: 28
		},
		exp: 48,
		gold: 8,
		catchRate: 4,
		tm: [151, 1, 5, 9, 10, 28, 68, 83, 87, 93, 96, 161 ],
		egg: 'whismur',
		evolution: [
			{
				pokemon: 'loudred',
				condition: {
					level: 20,
					move: 'normal',
					cost: 1500
				}
			}
		]
	},
	'loudred': {
		n: 294,
		name: ['LOUDRED', 'LOUDRED', '吼爆弹'],
		portrait: './assets/images/pokemon/portrait/loudred.png',
		image: './assets/images/pokemon/image/loudred.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/loudred.png',
		imageShiny: './assets/images/pokemon/image-shiny/loudred.png',
		sprite: {
			base: './assets/images/pokemon/sprite/loudred.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/loudred.png',
			idle: {
				src: './assets/images/pokemon/sprite/loudred-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/loudred-idle.png',
				size: [224, 448],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -7,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/loudred-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/loudred-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			},
		},
		type: [type['normal']],
		movePool: [ move['hyperVoice'], move['stomp'], move['crunch'], move['bugBuzz'] ],
		base: {
			hp: 84,
			atk: 71,
			def: 43,
			spa: 71,
			spd: 43,
			spe: 48
		},
		exp: 126,
		gold: 15,
		catchRate: 2,
		tm: [151, 1, 5, 9, 10, 28, 68, 83, 87, 93, 96, 161, 2, 13, 40, 43, 64, 84, 109, 141],
		egg: 'whismur',
		evolution: [
			{
				pokemon: 'exploud',
				condition: {
					level: 40,
					move: 'normal',
					cost: 3800
				}
			}
		]
	},
	'exploud': {
		n: 295,
		name: ['EXPLOUD', 'EXPLOUD', '爆音怪'],
		portrait: './assets/images/pokemon/portrait/exploud.png',
		image: './assets/images/pokemon/image/exploud.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/exploud.png',
		imageShiny: './assets/images/pokemon/image-shiny/exploud.png',
		sprite: {
			base: './assets/images/pokemon/sprite/exploud.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/exploud.png',
			idle: {
				src: './assets/images/pokemon/sprite/exploud-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/exploud-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/exploud-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/exploud-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},
		},
		type: [type['normal']],
		movePool: [ move['headSmash'], move['bodySlam'], move['iceFang'], move['earthPower'] ],
		base: {
			hp: 104,
			atk: 91,
			def: 63,
			spa: 91,
			spd: 73,
			spe: 68
		},
		exp: 265,
		gold: 35,
		catchRate: 1,
		tm: [151, 1, 5, 9, 10, 28, 68, 83, 87, 93, 96, 161, 2, 13, 40, 43, 64, 84, 109, 141, 23, 67, 69, 71, 94, 100, 118, 126, 165],
		egg: 'whismur',
	},
	'makuhita': {
		n: 296,
		name: ['MAKUHITA', 'MAKUHITA', '幕下力士'],
		portrait: './assets/images/pokemon/portrait/makuhita.png',
		image: './assets/images/pokemon/image/makuhita.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/makuhita.png',
		imageShiny: './assets/images/pokemon/image-shiny/makuhita.png',
		sprite: {
			base: './assets/images/pokemon/sprite/makuhita.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/makuhita.png',
			idle: {
				src: './assets/images/pokemon/sprite/makuhita-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/makuhita-idle.png',
				size: [512, 384],
				position: 6,
				framesX: 16,
				framesY: 8,
				correctionY: -5,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/makuhita-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/makuhita-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},
		},
		type: [type['fighting']],
		movePool: [ move['armThrust'], move['rockSmash'], move['lowSweep'] ],
		base: {
			hp: 72,
			atk: 60,
			def: 30,
			spa: 20,
			spd: 30,
			spe: 25
		},
		exp: 46,
		gold: 8,
		catchRate: 3,
		tm: [151, 1, 2, 5, 9, 10, 18, 22, 28, 36, 39, 40, 87, 161],
		egg: 'makuhita',
		evolution: [
			{
				pokemon: 'hariyama',
				condition: {
					level: 24,
					move: 'fighting',
					cost: 1800
				}
			}
		]
	},
	'hariyama': {
		n: 297,
		name: ['HARIYAMA', 'HARIYAMA', '铁掌力士'],
		portrait: './assets/images/pokemon/portrait/hariyama.png',
		image: './assets/images/pokemon/image/hariyama.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/hariyama.png',
		imageShiny: './assets/images/pokemon/image-shiny/hariyama.png',
		sprite: {
			base: './assets/images/pokemon/sprite/hariyama.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/hariyama.png',
			idle: {
				src: './assets/images/pokemon/sprite/hariyama-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hariyama-idle.png',
				size: [480, 448],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -8,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/hariyama-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/hariyama-attack.png',
				size: [936, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
		},
		type: [type['fighting']],
		movePool: [ move['armThrust'], move['drainPunch'], move['thunderPunch'], move['skyUppercut'] ],
		base: {
			hp: 144,
			atk: 120,
			def: 60,
			spa: 40,
			spd: 60,
			spe: 50
		},
		exp: 166,
		gold: 25,
		catchRate: 1,
		tm: [151, 1, 2, 5, 9, 10, 18, 22, 28, 36, 39, 40, 87, 161, 23, 38, 43, 46, 52, 61, 67, 109, 116, 119, 125, 156, 173],
		egg: 'makuhita',
	},
	'azurill': {
		n: 298,
		name: ['AZURILL', 'AZURILL', '露力丽'],
		portrait: './assets/images/pokemon/portrait/azurill.png',
		image: './assets/images/pokemon/image/azurill.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/azurill.png',
		imageShiny: './assets/images/pokemon/image-shiny/azurill.png',
		sprite: {
			base: './assets/images/pokemon/sprite/azurill.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/azurill.png',
			idle: {
				src: './assets/images/pokemon/sprite/azurill-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/azurill-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 3,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/azurill-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/azurill-attack.png',
				size: [792, 512],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},
		},
		type: [type['normal']],
		movePool: [ move['bubble'], move['waterGun'], move['tackle'] ],
		base: {
			hp: 50,
			atk: 20,
			def: 40,
			spa: 20,
			spd: 40,
			spe: 20
		},
		exp: 38,
		gold: 2,
		catchRate: 4,
		tm: [ 151,
	    	1, 2, 8, 9, 10, 17, 21, 40, 41, 45, 47, 62, 83, 87, 93, 109, 112, 159
	    ],
		egg: 'azurill',
		evolution: [
			{
				pokemon: 'marill',
				condition: {
	                level: 5,
	                item: 'loveSweet',
	                cost: 500
	            }
			}
		]
	},
	'nosepass': {
		n: 299,
		name: ['NOSEPASS', 'NOSEPASS', '朝北鼻'],
		portrait: './assets/images/pokemon/portrait/nosepass.png',
		image: './assets/images/pokemon/image/nosepass.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/nosepass.png',
		imageShiny: './assets/images/pokemon/image-shiny/nosepass.png',
		sprite: {
			base: './assets/images/pokemon/sprite/nosepass.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/nosepass.png',
			idle: {
				src: './assets/images/pokemon/sprite/nosepass-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nosepass-idle.png',
				size: [256, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -8,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/nosepass-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/nosepass-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},
		},
		type: [type['rock']],
		movePool: [ move['accelerock'], move['magnitude'], move['ancientPower'], move['sandAttack'] ],
		base: {
			hp: 30,
			atk: 45,
			def: 135,
			spa: 45,
			spd: 90,
			spe: 30
		},
		exp: 75,
		gold: 10,
		catchRate: 2,
		tm: [ 151, 161, 164, 165, 179, 2, 9, 10, 23, 30, 40, 61, 67, 69, 71, 85, 86, 87, 88, 
			93, 94, 108, 113, 114, 119, 125, 126, 128, 131, 150],
		egg: 'nosepass',
	},
	'skitty': {
		n: 300,
		name: ['SKITTY', 'SKITTY', '向尾喵'],
		portrait: './assets/images/pokemon/portrait/skitty.png',
		image: './assets/images/pokemon/image/skitty.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/skitty.png',
		imageShiny: './assets/images/pokemon/image-shiny/skitty.png',
		sprite: {
			base: './assets/images/pokemon/sprite/skitty.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/skitty.png',
			idle: {
				src: './assets/images/pokemon/sprite/skitty-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/skitty-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/skitty-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/skitty-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -21,
				correctionX: -4
			},
		},
		type: [type['normal']],
		movePool: [ move['tackle'], move['mudSlap'], move['quickAttack'] ],
		base: {
			hp: 50,
			atk: 45,
			def: 45,
			spa: 35,
			spd: 35,
			spe: 50
		},
		exp: 52,
		gold: 6,
		catchRate: 2,
		tm: [151, 1, 5, 9, 10, 28, 41, 68, 83, 93, 161 ],
		egg: 'skitty',
		evolution: [
			{
				pokemon: 'delcatty',
				condition: {
					item: 'moonStone',
					cost: 1700
				}
			}
		]
	},
	'delcatty': {
		n: 301,
		name: ['DELCATTY', 'DELCATTY', '优雅猫'],
		portrait: './assets/images/pokemon/portrait/delcatty.png',
		image: './assets/images/pokemon/image/delcatty.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/delcatty.png',
		imageShiny: './assets/images/pokemon/image-shiny/delcatty.png',
		sprite: {
			base: './assets/images/pokemon/sprite/delcatty.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/delcatty.png',
			idle: {
				src: './assets/images/pokemon/sprite/delcatty-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/delcatty-idle.png',
				size: [288, 384],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -5,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/delcatty-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/delcatty-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},
		},
		type: [type['normal']],
		movePool: [ move['ironTail'], move['shockWave'], move['extremeSpeed'], move['thunder'], move['crunch'], move['flameThrower'] ],
		base: {
			hp: 70,
			atk: 65,
			def: 65,
			spa: 55,
			spd: 55,
			spe: 70
		},
		exp: 140,
		gold: 15,
		catchRate: 1,
		tm: [151, 1, 5, 9, 10, 28, 41, 68, 83, 93, 161, 2, 13, 20, 48, 70, 76, 79, 81, 86, 101, 112, 102,
			121, 141, 149, 161],
		egg: 'skitty',
	},
	'sableye': {
		n: 302,
		name: ['SABLEYE', 'SABLEYE', '勾魂眼'],
		portrait: './assets/images/pokemon/portrait/sableye.png',
		image: './assets/images/pokemon/image/sableye.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/sableye.png',
		imageShiny: './assets/images/pokemon/image-shiny/sableye.png',
		sprite: {
			base: './assets/images/pokemon/sprite/sableye.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/sableye.png',
			idle: {
				src: './assets/images/pokemon/sprite/sableye-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sableye-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/sableye-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sableye-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},
		},
		type: [type['dark'], type['ghost']],
		movePool: [ move['darkPulse'], move['psychoCut'], move['pursuit'], move['shadowSneak'], move['crunch'] ],
		base: {
			hp: 50,
			atk: 75,
			def: 75,
			spa: 65,
			spd: 65,
			spe: 50
		},
		exp: 88,
		gold: 15,
		catchRate: 2,
		tm: [151, 1, 3, 8, 9, 11, 13, 17, 18, 19, 20, 21, 22, 23, 28, 31, 36, 
			41, 43, 48, 49, 51, 56, 61, 62, 63, 70, 81, 88, 89, 91, 95, 100, 101, 
			103, 118, 119, 123, 125, 138, 141, 143, 146, 149, 153, 156, 158, 162, 167, 171],
		egg: 'sableye',
	},
	'mawile': {
		n: 303,
		name: ['MAWILE', 'MAWILE', '大嘴娃'],
		portrait: './assets/images/pokemon/portrait/mawile.png',
		image: './assets/images/pokemon/image/mawile.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/mawile.png',
		imageShiny: './assets/images/pokemon/image-shiny/mawile.png',
		sprite: {
			base: './assets/images/pokemon/sprite/mawile.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/mawile.png',
			idle: {
				src: './assets/images/pokemon/sprite/mawile-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mawile-idle.png',
				size: [728, 384],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -2,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/mawile-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/mawile-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
		},
		type: [type['steel'] ],
		movePool: [ move['armThrust'], move['meteorMash'], move['metronome'], move['zenHeadbutt'], move['ironTail'], move['ironHead'] ],
		base: {
			hp: 50,
			atk: 85,
			def: 85,
			spa: 55,
			spd: 55,
			spe: 50
		},
		exp: 88,
		gold: 15,
		catchRate: 2,
		tm: [151, 1, 2, 5, 9, 10, 11, 13, 22, 23, 30, 34, 36, 38, 39, 41, 43, 49, 63, 64, 70, 81, 83, 88, 93, 100, 102, 109, 118, 124, 138, 141, 153, 161, 173], 
		egg: 'mawile',
	},
	'aron': {
		n: 304,
		name: ['ARON', 'ARON', '可可多拉'],
		portrait: './assets/images/pokemon/portrait/aron.png',
		image: './assets/images/pokemon/image/aron.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/aron.png',
		imageShiny: './assets/images/pokemon/image-shiny/aron.png',
		sprite: {
			base: './assets/images/pokemon/sprite/aron.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/aron.png',
			idle: {
				src: './assets/images/pokemon/sprite/aron-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/aron-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 3,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/aron-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/aron-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -4
			},
		},
		type: [type['steel'], type['rock']],
		movePool: [ move['tackle'], move['rollout'], move['mudSlap'], move['rockSmash'], move['sandTomb'] ],
		base: {
			hp: 50,
			atk: 70,
			def: 100,
			spa: 40,
			spd: 40,
			spe: 30
		},
		exp: 66,
		gold: 4,
		catchRate: 3,
		tm: [151, 2, 9, 10, 11, 19, 30, 83, 87, 93, 161, 164],  
		egg: 'aron',
		evolution: [
			{
				pokemon: 'lairon',
				condition: {
					level: 32,
					move: 'steel',
					cost: 2900
				}
			}
		]
	},
	'lairon': {
		n: 305,
		name: ['LAIRON', 'LAIRON', '可多拉'],
		portrait: './assets/images/pokemon/portrait/lairon.png',
		image: './assets/images/pokemon/image/lairon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/lairon.png',
		imageShiny: './assets/images/pokemon/image-shiny/lairon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/lairon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/lairon.png',
			idle: {
				src: './assets/images/pokemon/sprite/lairon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lairon-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/lairon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lairon-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},
		},
		type: [type['steel'], type['rock']],
		movePool: [ move['rockSlide'], move['bodySlam'], move['magnitude'], move['ironTail'], move['accelerock'] ],
		base: {
			hp: 60,
			atk: 90,
			def: 140,
			spa: 50,
			spd: 50,
			spe: 40
		},
		exp: 151,
		gold: 20,
		catchRate: 1,
		tm: [151, 2, 9, 10, 11, 19, 30, 83, 87, 93, 161, 164, 13, 23, 43, 64, 67, 94, 102, 120, 124, 126, 141, 150, 179 ],  
		egg: 'aron',
		evolution: [
			{
				pokemon: 'aggron',
				condition: {
					level: 42,
					move: 'steel',
					cost: 7400
				}
			}
		]
	},
	'aggron': {
		n: 306,
		name: ['AGGRON', 'AGGRON', '波士可多拉'],
		portrait: './assets/images/pokemon/portrait/aggron.png',
		image: './assets/images/pokemon/image/aggron.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/aggron.png',
		imageShiny: './assets/images/pokemon/image-shiny/aggron.png',
		sprite: {
			base: './assets/images/pokemon/sprite/aggron.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/aggron.png',
			idle: {
				src: './assets/images/pokemon/sprite/aggron-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/aggron-idle.png',
				size: [240, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -4,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/aggron-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/aggron-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: -4
			},
		},
		type: [type['steel'], type['rock']],
		movePool: [ move['earthquake'], move['meteorMash'], move['ironTail'], move['ironHead'], move['rockSlide'], move['accelerock'] ],
		base: {
			hp: 70,
			atk: 110,
			def: 180,
			spa: 60,
			spd: 60,
			spe: 50
		},
		exp: 265,
		gold: 65,
		catchRate: 0.6,
		tm: [151, 2, 9, 10, 11, 19, 30, 83, 87, 93, 161, 164, 13, 23, 43, 64, 67, 94, 102, 120, 124, 126, 141, 150, 179, 36, 38, 52, 69, 71, 82, 153, 165],  
		egg: 'aron',
	},
	'meditite': {
		n: 307,
		name: ['MEDITITE', 'MEDITITE', '玛沙那'],
		portrait: './assets/images/pokemon/portrait/meditite.png',
		image: './assets/images/pokemon/image/meditite.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/meditite.png',
		imageShiny: './assets/images/pokemon/image-shiny/meditite.png',
		sprite: {
			base: './assets/images/pokemon/sprite/meditite.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/meditite.png',
			idle: {
				src: './assets/images/pokemon/sprite/meditite-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/meditite-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 5,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/meditite-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/meditite-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -3
			},
		},
		type: [type['fighting'], type['psychic']],
		movePool: [ move['confusion'],  move['rockSmash'], move['armThrust'], move['astonish'] ],
		base: {
			hp: 30,
			atk: 40,
			def: 55,
			spa: 40,
			spd: 55,
			spe: 60
		},
		exp: 62,
		gold: 10,
		catchRate: 3,
		tm: [151, 1, 2, 3, 9, 10, 18, 20, 22, 28, 36, 161],
		egg: 'meditite',
		evolution: [
			{
				pokemon: 'medicham',
				condition: {
					level: 37,
					atk: 50,
					spa: 50,
					cost: 2000
				}
			}
		]
	},
	'medicham': {
		n: 308,
		name: ['MEDICHAM', 'MEDICHAM', '恰雷姆'],
		portrait: './assets/images/pokemon/portrait/medicham.png',
		image: './assets/images/pokemon/image/medicham.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/medicham.png',
		imageShiny: './assets/images/pokemon/image-shiny/medicham.png',
		sprite: {
			base: './assets/images/pokemon/sprite/medicham.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/medicham.png',
			idle: {
				src: './assets/images/pokemon/sprite/medicham-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/medicham-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -10,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/medicham-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/medicham-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: -5
			},
		},
		type: [type['fighting'], type['psychic']],
		movePool: [ move['bounce'], move['psychic'], move['jumpKick'], move['auraSphere'], move['psychoCut'] ],
		base: {
			hp: 60,
			atk: 60,
			def: 75,
			spa: 60,
			spd: 75,
			spe: 80
		},
		exp: 140,
		gold: 20,
		catchRate: 1,
		tm: [151, 1, 2, 3, 9, 10, 18, 20, 22, 28, 36, 161, 5, 30, 31, 35, 38, 39, 40, 43, 46, 52, 54, 61, 64, 68, 70, 81, 90, 107, 109, 
			111, 115, 116, 119, 125, 132, 133, 158, 173, 175, 177],
		egg: 'meditite',
	},
	'electrike': {
		n: 309,
		name: ['ELECTRIKE', 'ELECTRIKE', '落雷兽'],
		portrait: './assets/images/pokemon/portrait/electrike.png',
		image: './assets/images/pokemon/image/electrike.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/electrike.png',
		imageShiny: './assets/images/pokemon/image-shiny/electrike.png',
		sprite: {
			base: './assets/images/pokemon/sprite/electrike.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/electrike.png',
			idle: {
				src: './assets/images/pokemon/sprite/electrike-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/electrike-idle.png',
				size: [448, 320],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: 0,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/electrike-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/electrike-attack.png',
				size: [832, 576],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			},
		},
		type: [type['electric']],
		movePool: [ move['thunderShock'],  move['swift'],  move['feintAttack'],  move['shockWave'] ],
		base: {
			hp: 40,
			atk: 45,
			def: 40,
			spa: 65,
			spd: 40,
			spe: 65
		},
		exp: 66,
		gold: 10,
		catchRate: 2,
		tm: [151, 1, 5, 9, 10, 11, 13, 22, 28, 31, 49, 68, 70, 79, 83, 88, 123, 135, 149 ], 
		egg: 'electrike',
		evolution: [
			{
				pokemon: 'manectric',
				condition: {
					level: 26,
					move: 'electric',
					cost: 1600
				}
			}
		]
	},
	'manectric': {
		n: 310,
		name: ['MANECTRIC', 'MANECTRIC', '雷电兽'],
		portrait: './assets/images/pokemon/portrait/manectric.png',
		image: './assets/images/pokemon/image/manectric.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/manectric.png',
		imageShiny: './assets/images/pokemon/image-shiny/manectric.png',
		sprite: {
			base: './assets/images/pokemon/sprite/manectric.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/manectric.png',
			idle: {
				src: './assets/images/pokemon/sprite/manectric-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/manectric-idle.png',
				size: [560, 384],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -4,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/manectric-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/manectric-attack.png',
				size: [832, 704],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -24,
				correctionX: 0
			},
		},
		type: [type['electric']],
		movePool: [ move['extremSpeed'], move['slash'], move['shockWave'], move['wildCharge'], move['thunder'], move['crunch'] ],
		base: {
			hp: 70,
			atk: 75,
			def: 60,
			spa: 105,
			spd: 60,
			spe: 105
		},
		exp: 168,
		gold: 20,
		catchRate: 1,
		tm: [151, 1, 5, 9, 10, 11, 13, 22, 28, 31, 49, 68, 70, 79, 83, 88, 123, 135, 149, 43, 64, 76, 81, 89, 103, 113, 141, 146, 166, 177], 
		egg: 'electrike',
	},
	'plusle': {
		n: 311,
		name: ['PLUSLE', 'PLUSLE', '正电拍拍'],
		portrait: './assets/images/pokemon/portrait/plusle.png',
		image: './assets/images/pokemon/image/plusle.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/plusle.png',
		imageShiny: './assets/images/pokemon/image-shiny/plusle.png',
		sprite: {
			base: './assets/images/pokemon/sprite/plusle.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/plusle.png',
			idle: {
				src: './assets/images/pokemon/sprite/plusle-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/plusle-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 2,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/plusle-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/plusle-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			}
		},
		type: [type['electric']],
		movePool: [ move['thunderShock'], move['shockWave'], move['quickAttack']],
		base: {
			hp: 60,
			atk: 50,
			def: 40,
			spa: 85,
			spd: 75,
			spe: 95
		},
		exp: 174,
		gold: 12,
		catchRate: 2,
		tm: [151, 1, 5, 9, 10, 11, 18, 22, 31, 34, 36, 45, 51, 61, 68, 70, 79, 83, 123, 135],
		egg: 'plusle',
	},
	'minun': {
		n: 312,
		name: ['MINUN', 'MINUN', '负电拍拍'],
		portrait: './assets/images/pokemon/portrait/minun.png',
		image: './assets/images/pokemon/image/minun.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/minun.png',
		imageShiny: './assets/images/pokemon/image-shiny/minun.png',
		sprite: {
			base: './assets/images/pokemon/sprite/minun.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/minun.png',
			idle: {
				src: './assets/images/pokemon/sprite/minun-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/minun-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 2,
				correctionX: 11
			},
			attack: {
				src: './assets/images/pokemon/sprite/minun-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/minun-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			}
		},
		type: [type['electric']],
		movePool: [ move['thunderShock'], move['shockWave'], move['swift'] ],
		base: {
			hp: 60,
			atk: 40,
			def: 50,
			spa: 75,
			spd: 85,
			spe: 95
		},
		exp: 174,
		gold: 12,
		catchRate: 2,
		tm: [151, 1, 5, 9, 10, 11, 18, 22, 31, 34, 36, 45, 51, 61, 68, 70, 79, 83, 123, 135],
		egg: 'minun',
	},
	'volbeat': {
		n: 313,
		name: ['VOLBEAT', 'VOLBEAT', '电萤虫'],
		portrait: './assets/images/pokemon/portrait/volbeat.png',
		image: './assets/images/pokemon/image/volbeat.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/volbeat.png',
		imageShiny: './assets/images/pokemon/image-shiny/volbeat.png',
		sprite: {
			base: './assets/images/pokemon/sprite/volbeat.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/volbeat.png',
			idle: {
				src: './assets/images/pokemon/sprite/volbeat-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/volbeat-idle.png',
				size: [256, 320],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: 0,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/volbeat-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/volbeat-attack.png',
				size: [960, 640],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -19,
				correctionX: -3
			}
		},
		type: [type['bug']],
		movePool: [ move['signalBeam'], move['weatherBall'], move['bugBuzz'], move['zenHeadbutt'], move['gust'], move['bugbit'] ],
		base: {
			hp: 65,
			atk: 73,
			def: 75,
			spa: 47,
			spd: 85,
			spe: 85
		},
		exp: 151,
		gold: 7,
		catchRate: 2,
		tm: [ 151, 2, 5, 10, 12, 13, 18, 20, 24, 26, 41, 45, 50, 51, 57, 59, 64, 83, 92, 96, 130, 162 ],
		egg: 'volbeat',
	},
	'illumise': {
		n: 314,
		name: ['ILLUMISE', 'ILLUMISE', '甜甜萤'],
		portrait: './assets/images/pokemon/portrait/illumise.png',
		image: './assets/images/pokemon/image/illumise.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/illumise.png',
		imageShiny: './assets/images/pokemon/image-shiny/illumise.png',
		sprite: {
			base: './assets/images/pokemon/sprite/illumise.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/illumise.png',
			idle: {
				src: './assets/images/pokemon/sprite/illumise-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/illumise-idle.png',
				size: [48, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -2,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/illumise-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/illumise-attack.png',
				size: [1080, 576],
				position: 6,
				framesX: 15,
				framesY: 8,
				correctionY: -18,
				correctionX: -5
			}
		},
		type: [type['bug']],
		movePool: [ move['signalBeam'], move['weatherBall'], move['bugBuzz'], move['zenHeadbutt'], move['gust'], move['bugbit'] ],
		base: {
			hp: 65,
			atk: 47,
			def: 75,
			spa: 73,
			spd: 85,
			spe: 85
		},
		exp: 151,
		gold: 7,
		catchRate: 2,
		tm: [ 151, 2, 5, 10, 12, 13, 18, 20, 24, 26, 41, 45, 50, 51, 57, 59, 64, 83, 92, 96, 130, 162 ],
		egg: 'illumise',
	},
	'roselia': {
		n: 315,
		name: ['ROSELIA', 'ROSELIA', '毒蔷薇'],
		portrait: './assets/images/pokemon/portrait/roselia.png',
		image: './assets/images/pokemon/image/roselia.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/roselia.png',
		imageShiny: './assets/images/pokemon/image-shiny/roselia.png',
		sprite: {
			base: './assets/images/pokemon/sprite/roselia.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/roselia.png',
			idle: {
				src: './assets/images/pokemon/sprite/roselia-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/roselia-idle.png',
				size: [288, 256],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: 4,
				correctionX: 9
			},
			attack: {
				src: './assets/images/pokemon/sprite/roselia-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/roselia-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -15,
				correctionX: 0
			}
		},
		type: [type['grass'], type['poison']],
		movePool: [ move['razorLeaf'], move['wrap'], move['poisonSting'], move['absorb'] ],
		base: {
			hp: 50,
			atk: 60,
			def: 45,
			spa: 100,
			spd: 80,
			spe: 65
		},
		exp: 140,
		gold: 20,
		catchRate: 3,
		tm: [ 151, 3, 7, 9, 16, 20, 25, 27, 32, 41, 45, 49, 50, 53, 64, 78, 80, 91, 93, 97, 98, 101, 105, 112, 117, 136, 142, 144, 147, 148, 170 ],
		egg: 'roselia',
	},
	'gulpin': {
		n: 316,
		name: ['GULPIN', 'GULPIN', '溶食兽'],
		portrait: './assets/images/pokemon/portrait/gulpin.png',
		image: './assets/images/pokemon/image/gulpin.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/gulpin.png',
		imageShiny: './assets/images/pokemon/image-shiny/gulpin.png',
		sprite: {
			base: './assets/images/pokemon/sprite/gulpin.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/gulpin.png',
			idle: {
				src: './assets/images/pokemon/sprite/gulpin-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gulpin-idle.png',
				size: [64, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 4,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/gulpin-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gulpin-attack.png',
				size: [896, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			}
		},
		type: [type['poison']],
		movePool: [ move['poisonSting'], move['acid'], move['mudSlap'], move['absorb'], move['poisonFang']],     
		base: {
			hp: 70,
			atk: 43,
			def: 53,
			spa: 43,
			spd: 53,
			spe: 40
		},
		exp: 60,
		gold: 10,
		catchRate: 3,
		tm: [151, 2, 9, 10, 12, 13, 16, 17, 20, 26, 28, 32, 53, 83, 87, 93, 98, 100, 110, 112, 161, 164 ], 
		tm: [],
		egg: 'gulpin',
		evolution: [
			{
				pokemon: 'swalot',
				condition: {
					level: 26,
					cost: 1500
				}
			}
		]
	},
	'swalot': {
		n: 317,
		name: ['SWALOT', 'SWALOT', '吞食兽'],
		portrait: './assets/images/pokemon/portrait/swalot.png',
		image: './assets/images/pokemon/image/swalot.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/swalot.png',
		imageShiny: './assets/images/pokemon/image-shiny/swalot.png',
		sprite: {
			base: './assets/images/pokemon/sprite/swalot.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/swalot.png',
			idle: {
				src: './assets/images/pokemon/sprite/swalot-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swalot-idle.png',
				size: [64, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/swalot-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swalot-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			}
		},
		type: [type['poison']],
		movePool: [ move['earthquake'], move['hyperVoice'], move['flameThrower'], move['poisonJab'], move['sludgeBomb'], move['gunkShot'], move['mudBomb'] ],
		base: {
			hp: 100,
			atk: 73,
			def: 83,
			spa: 73,
			spd: 83,
			spe: 55
		},
		exp: 163,
		gold: 25,
		catchRate: 1,
		tm: [151, 2, 9, 10, 12, 13, 16, 17, 20, 26, 28, 32, 53, 83, 87, 93, 98, 100, 110, 112, 161, 164, 23, 25, 60, 67, 69, 84, 85, 86, 91, 94, 97, 103, 113, 126, 128, 137, 141, 142, 144, 147, 169],       
		egg: 'gulpin',
	},
	'carvanha': {
		n: 318,
		name: ['CARVANHA', 'CARVANHA', '利牙鱼'],
		portrait: './assets/images/pokemon/portrait/carvanha.png',
		image: './assets/images/pokemon/image/carvanha.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/carvanha.png',
		imageShiny: './assets/images/pokemon/image-shiny/carvanha.png',
		sprite: {
			base: './assets/images/pokemon/sprite/carvanha.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/carvanha.png',
			idle: {
				src: './assets/images/pokemon/sprite/carvanha-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/carvanha-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -8,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/carvanha-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/carvanha-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -23,
				correctionX: 0
			}
		},
		type: [type['water'], type['dark']],
		movePool: [ move['bite'], move['waterGun'], move['aquaJet'] ],
		base: {
			hp: 45,
			atk: 90,
			def: 20,
			spa: 65,
			spd: 20,
			spe: 65
		},
		exp: 61,
		gold: 11,
		catchRate: 2,
		tm: [151, 10, 13, 17, 21, 28, 68, 70, 81, 129, 146, 149, 159, 161 ],
		egg: 'carvanha',
		evolution: [
			{
				pokemon: 'sharpedo',
				condition: {
					level: 30,
					cost: 3100
				}
			}
		]
	},
	'sharpedo': {
		n: 319,
		name: ['SHARPEDO', 'SHARPEDO', '巨牙鲨'],
		portrait: './assets/images/pokemon/portrait/sharpedo.png',
		image: './assets/images/pokemon/image/sharpedo.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/sharpedo.png',
		imageShiny: './assets/images/pokemon/image-shiny/sharpedo.png',
		sprite: {
			base: './assets/images/pokemon/sprite/sharpedo.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/sharpedo.png',
			idle: {
				src: './assets/images/pokemon/sprite/sharpedo-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sharpedo-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -6,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/sharpedo-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sharpedo-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -2
			}
		},
		type: [type['water'], type['dark']],
		movePool: [ move['crunch'], move['aquaTail'], move['aquaJet'], move['iceFang'], move['waterShuriken'] ],
		base: {
			hp: 70,
			atk: 120,
			def: 40,
			spa: 95,
			spd: 40,
			spe: 95
		},
		exp: 161,
		gold: 28,
		catchRate: 1,
		tm: [151, 10, 13, 17, 21, 28, 68, 70, 81, 129, 146, 149, 159, 161, 5, 29, 47, 67, 76, 102, 103, 118, 139, 141, 143, 158, 165, 170, 174],
		egg: 'carvanha',
	},
	'wailmer': {
		n: 320,
		name: ['WAILMER', 'WAILMER', '吼吼鲸'],
		portrait: './assets/images/pokemon/portrait/wailmer.png',
		image: './assets/images/pokemon/image/wailmer.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wailmer.png',
		imageShiny: './assets/images/pokemon/image-shiny/wailmer.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wailmer.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wailmer.png',
			idle: {
				src: './assets/images/pokemon/sprite/wailmer-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wailmer-idle.png',
				size: [224, 320],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -2,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/wailmer-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wailmer-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			}
		},
		type: [type['water']],
		movePool: [ move['chillingWater'], move['tackle'], move['bubbleBeam'], move['gyroBall'] ],
		base: {
			hp: 130,
			atk: 70,
			def: 35,
			spa: 70,
			spd: 35,
			spe: 60
		},
		exp: 80,
		gold: 18,
		catchRate: 3,
		tm: [151, 10, 17, 21, 47, 77, 83, 93, 150, 159 ],
		egg: 'wailmer',
		evolution: [
			{
				pokemon: 'wailord',
				condition: {
					level: 40,
					cost: 3800
				}
			}
		]
	},
	'wailord': {
		n: 321,
		name: ['WAILORD', 'WAILORD', '吼鲸王'],
		portrait: './assets/images/pokemon/portrait/wailord.png',
		image: './assets/images/pokemon/image/wailord.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wailord.png',
		imageShiny: './assets/images/pokemon/image-shiny/wailord.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wailord.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wailord.png',
			idle: {
				src: './assets/images/pokemon/sprite/wailord-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wailord-idle.png',
				size: [432, 832],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -31,
				correctionX: -10
			},
			attack: {
				src: './assets/images/pokemon/sprite/wailord-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wailord-attack.png',
				size: [968, 896],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -39,
				correctionX: -10
			}
		},
		type: [type['water']],
		movePool: [ move['surf'], move['bodySlam'], move['iceBeam'], move['hydroPump'] ],
		base: {
			hp: 170,
			atk: 90,
			def: 45,
			spa: 90,
			spd: 45,
			spe: 60
		},
		exp: 175,
		gold: 60,
		catchRate: 1,
		tm: [151, 10, 17, 21, 47, 77, 83, 93, 150, 159, 29, 37, 44, 48, 66, 67, 94, 102 ],
		egg: 'wailmer',
	},
	'numel': {
		n: 322,
		name: ['NUMEL', 'NUMEL', '呆火驼'],
		portrait: './assets/images/pokemon/portrait/numel.png',
		image: './assets/images/pokemon/image/numel.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/numel.png',
		imageShiny: './assets/images/pokemon/image-shiny/numel.png',
		sprite: {
			base: './assets/images/pokemon/sprite/numel.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/numel.png',
			idle: {
				src: './assets/images/pokemon/sprite/numel-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/numel-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/numel-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/numel-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: -4
			},
		},
		type: [type['fire'], type['ground']],
		movePool: [ move['fireSpin'], move['rockThrow'], move['mudBomb'], move['magnitude'], move['flameThrower'] ],
		base: {
			hp: 60,
			atk: 60,
			def: 40,
			spa: 65,
			spd: 45,
			spe: 35
		},
		exp: 61,
		gold: 14,
		catchRate: 2,
		tm: [151, 2, 9, 10, 14, 15, 40, 43, 60, 86, 87, 93, 94, 110, 155, 161, 164],
		egg: 'numel',
		evolution: [
			{
				pokemon: 'camerupt',
				condition: {
					level: 33,
					move: 'fire',
					cost: 2500
				}
			}
		]
	},
	'camerupt': {
		n: 323,
		name: ['CAMERUPT', 'CAMERUPT', '喷火驼'],
		portrait: './assets/images/pokemon/portrait/camerupt.png',
		image: './assets/images/pokemon/image/camerupt.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/camerupt.png',
		imageShiny: './assets/images/pokemon/image-shiny/camerupt.png',
		sprite: {
			base: './assets/images/pokemon/sprite/camerupt.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/camerupt.png',
			idle: {
				src: './assets/images/pokemon/sprite/camerupt-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/camerupt-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/camerupt-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/camerupt-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: -4
			},
		},
		type: [type['fire'], type['ground']],
		movePool: [ move['earthquake'], move['rockSlide'], move['headSmash'], move['eruption'], move['flameThrower'] ],
		base: {
			hp: 70,
			atk: 100,
			def: 70,
			spa: 105,
			spd: 75,
			spe: 40
		},
		exp: 178,
		gold: 22,
		catchRate: 1,
		tm: [151, 2, 9, 10, 14, 15, 40, 43, 60, 86, 87, 93, 94, 110, 161, 164, 4, 23, 30, 64, 67, 69, 
			85, 113, 126, 128, 131, 140, 141, 150, 155, 165, 179 ],
		egg: 'numel',
	},
	'torkoal': {
		n: 324,
		name: ['TORKOAL', 'TORKOAL', '煤炭龟'],
		portrait: './assets/images/pokemon/portrait/torkoal.png',
		image: './assets/images/pokemon/image/torkoal.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/torkoal.png',
		imageShiny: './assets/images/pokemon/image-shiny/torkoal.png',
		sprite: {
			base: './assets/images/pokemon/sprite/torkoal.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/torkoal.png',
			idle: {
				src: './assets/images/pokemon/sprite/torkoal-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/torkoal-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 1,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/torkoal-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/torkoal-attack.png',
				size: [1152, 512],
				position: 6,
				framesX: 18,
				framesY: 8,
				correctionY: -13,
				correctionX: 0
			}
		},
		type: [type['fire']],
		movePool: [ move['stoneEdge'], move['ancientPower'], move['earthPower'], move['flameThrower'] ],
		base: {
			hp: 70,
			atk: 85,
			def: 140,
			spa: 85,
			spd: 70,
			spe: 20
		},
		exp: 165,
		gold: 40,
		catchRate: 1,
		tm: [151, 2, 9, 10, 14, 15, 23, 30, 40, 43, 60, 67, 69, 85, 86, 87, 93, 
			94, 110, 126, 128, 131, 140, 141, 150, 155, 164, 165, 179],
		egg: 'torkoal',
	},
	'spoink': {
		n: 325,
		name: ['SPOINK', 'SPOINK', '跳跳猪'],
		portrait: './assets/images/pokemon/portrait/spoink.png',
		image: './assets/images/pokemon/image/spoink.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/spoink.png',
		imageShiny: './assets/images/pokemon/image-shiny/spoink.png',
		sprite: {
			base: './assets/images/pokemon/sprite/spoink.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/spoink.png',
			idle: {
				src: './assets/images/pokemon/sprite/spoink-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spoink-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -9,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/spoink-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spoink-attack.png',
				size: [832, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -22,
				correctionX: -2
			},
		},
		type: [type['psychic']],
		movePool: [ move['confusion'], move['scratch'], move['rollout'] ],
		base: {
			hp: 60,
			atk: 25,
			def: 35,
			spa: 70,
			spd: 80,
			spe: 60
		},
		exp: 66,
		gold: 13,
		catchRate: 3,
		tm: [151, 2, 3, 9, 10, 20, 51, 87, 96],
		egg: 'spoink',
		evolution: [
			{
				pokemon: 'grumpig',
				condition: {
					level: 32,
					move: 'psychic',
					cost: 1500
				}
			}
		]
	},
	'grumpig': {
		n: 326,
		name: ['GRUMPIG', 'GRUMPIG', '噗噗猪'],
		portrait: './assets/images/pokemon/portrait/grumpig.png',
		image: './assets/images/pokemon/image/grumpig.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/grumpig.png',
		imageShiny: './assets/images/pokemon/image-shiny/grumpig.png',
		sprite: {
			base: './assets/images/pokemon/sprite/grumpig.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/grumpig.png',
			idle: {
				src: './assets/images/pokemon/sprite/grumpig-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/grumpig-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -4,
				correctionX: 9
			},
			attack: {
				src: './assets/images/pokemon/sprite/grumpig-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/grumpig-attack.png',
				size: [792, 704],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -23,
				correctionX: 0
			},
		},
		type: [type['psychic']],
		movePool: [ move['icePunch'], move['psybeam'], move['psychic'], move['darkPulse'], move['ironTail'] ],
		base: {
			hp: 80,
			atk: 45,
			def: 65,
			spa: 90,
			spd: 110,
			spe: 80
		},
		exp: 165,
		gold: 20,
		catchRate: 2,
		tm: [151, 2, 3, 9, 10, 20, 51, 87, 96, 5, 13, 31, 40, 43, 61, 64, 84, 88, 90, 94, 101, 102, 103, 119, 125, 138, 158],
		egg: 'spoink',
	},
	'spinda': {
		n: 327,
		name: ['SPINDA', 'SPINDA', '晃晃斑'],
		portrait: './assets/images/pokemon/portrait/spinda.png',
		image: './assets/images/pokemon/image/spinda.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/spinda.png',
		imageShiny: './assets/images/pokemon/image-shiny/spinda.png',
		sprite: {
			base: './assets/images/pokemon/sprite/spinda.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/spinda.png',
			idle: {
				src: './assets/images/pokemon/sprite/spinda-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spinda-idle.png',
				size: [288, 384],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -6,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/spinda-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spinda-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: -1
			}
		},
		type: [type['normal']],
		movePool: [ move['tackle'], move['mudSlap'], move['eggBomb'], move['rockSmash'] ],
		base: {
			hp: 60,
			atk: 60,
			def: 60,
			spa: 60,
			spd: 60,
			spe: 60
		},
		exp: 126,
		gold: 12,
		catchRate: 2,
		tm: [151, 1, 2, 5, 9, 10, 13, 22, 28, 41, 68, 83, 93, 112, 161 ],
		egg: 'spinda',
	},
	'trapinch': {
		n: 328,
		name: ['TRAPINCH', 'TRAPINCH', '大颚蚁'],
		portrait: './assets/images/pokemon/portrait/trapinch.png',
		image: './assets/images/pokemon/image/trapinch.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/trapinch.png',
		imageShiny: './assets/images/pokemon/image-shiny/trapinch.png',
		sprite: {
			base: './assets/images/pokemon/sprite/trapinch.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/trapinch.png',
			idle: {
				src: './assets/images/pokemon/sprite/trapinch-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/trapinch-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 3,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/trapinch-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/trapinch-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			}
		},
		type: [type['ground']],
		movePool: [ move['sandAttack'], move['bite'], move['rockThrow'], move['mudSlap'], move['sandTomb'] ],
		base: {
			hp: 45,
			atk: 100,
			def: 45,
			spa: 45,
			spd: 45,
			spe: 10
		},
		exp: 58,
		gold: 14,
		catchRate: 2,
		tm: [151, 2, 9, 10, 11, 13, 40, 49, 63, 64, 83, 93, 161, 164],	    
		egg: 'trapinch',
		evolution: [
			{
				pokemon: 'vibrava',
				condition: {
					level: 35,
					cost: 1500
				}
			}
		]
	},
	'vibrava': {
		n: 329,
		name: ['VIBRAVA', 'VIBRAVA', '超音波幼虫'],
		portrait: './assets/images/pokemon/portrait/vibrava.png',
		image: './assets/images/pokemon/image/vibrava.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/vibrava.png',
		imageShiny: './assets/images/pokemon/image-shiny/vibrava.png',
		sprite: {
			base: './assets/images/pokemon/sprite/vibrava.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/vibrava.png',
			idle: {
				src: './assets/images/pokemon/sprite/vibrava-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vibrava-idle.png',
				size: [360, 384],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -4,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/vibrava-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/vibrava-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			}
		},
		type: [type['ground'], type['dragon']],
		movePool: [ move['aerialAce'], move['mudBomb'], move['fly'], move['dragonBreath'], move['signalBeam'], move['crunch'] ],
		base: {
			hp: 50,
			atk: 70,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 70
		},
		exp: 119,
		gold: 23,
		catchRate: 1,
		tm: [151, 2, 9, 10, 11, 13, 40, 49, 63, 64, 83, 93, 161, 164, 5, 24, 43, 57, 
			59, 60, 88, 94, 99, 106, 113, 124, 126, 128, 130, 132, 141, 149, 171, 172, 178],
		egg: 'trapinch',
		evolution: [
			{
				pokemon: 'flygon',
				condition: {
					level: 45,
					move: 'dragon',
					cost: 5000
				}
			}
		]
	},
	'flygon': {
		n: 330,
		name: ['FLYGON', 'FLYGON', '沙漠蜻蜓'],
		portrait: './assets/images/pokemon/portrait/flygon.png',
		image: './assets/images/pokemon/image/flygon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/flygon.png',
		imageShiny: './assets/images/pokemon/image-shiny/flygon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/flygon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/flygon.png',
			idle: {
				src: './assets/images/pokemon/sprite/flygon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/flygon-idle.png',
				size: [224, 576],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -16,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/flygon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/flygon-attack.png',
				size: [704, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -19,
				correctionX: -3
			}
		},
		type: [type['ground'], type['dragon']],
		movePool: [ move['earthquake'], move['earthPower'], move['signalBeam'], move['dragonPulse'] ],
		base: {
			hp: 80,
			atk: 100,
			def: 80,
			spa: 80,
			spd: 80,
			spe: 100
		},
		exp: 234,
		gold: 38,
		catchRate: 0.6,
		tm: [151, 2, 9, 10, 11, 13, 40, 49, 63, 64, 83, 93, 161, 164, 5, 24, 43, 57, 59, 60, 88, 94, 99, 106, 
			113, 124, 126, 128, 130, 132, 141, 149, 171, 172, 178, 23, 55, 65, 67, 69, 76, 105, 127, 131, 134],
		egg: 'trapinch',
	},
	'cacnea': {
		n: 331,
		name: ['CACNEA', 'CACNEA', '刺球仙人掌'],
		portrait: './assets/images/pokemon/portrait/cacnea.png',
		image: './assets/images/pokemon/image/cacnea.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/cacnea.png',
		imageShiny: './assets/images/pokemon/image-shiny/cacnea.png',
		sprite: {
			base: './assets/images/pokemon/sprite/cacnea.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/cacnea.png',
			idle: {
				src: './assets/images/pokemon/sprite/cacnea-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cacnea-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 4,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/cacnea-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cacnea-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			}
		},
		type: [type['grass']],
		movePool: [ move['bite'], move['foulPlay'], move['shadowSneak'], move['needleArm'] ],
		base: {
			hp: 50,
			atk: 85,
			def: 40,
			spa: 85,
			spd: 40,
			spe: 35
		},
		exp: 67,
		gold: 5,
		catchRate: 4,
		tm: [151, 9, 10, 11, 12, 13, 16, 25, 28, 80, 81, 83, 87, 88, 93, 98, 117, 143, 146, 161, 164, 170, 176],
		egg: 'cacnea',
		evolution: [
			{
				pokemon: 'cacturne',
				condition: {
					level: 32,
					move: 'dark',
					cost: 1900,
				}
			}
		]
	},
	'cacturne': {
		n: 332,
		name: ['CACTURNE', 'CACTURNE', '梦歌仙人掌'],
		portrait: './assets/images/pokemon/portrait/cacturne.png',
		image: './assets/images/pokemon/image/cacturne.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/cacturne.png',
		imageShiny: './assets/images/pokemon/image-shiny/cacturne.png',
		sprite: {
			base: './assets/images/pokemon/sprite/cacturne.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/cacturne.png',
			idle: {
				src: './assets/images/pokemon/sprite/cacturne-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cacturne-idle.png',
				size: [192, 512],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -14,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/cacturne-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cacturne-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -2
			}
		},
		type: [type['grass'], type['dark']],
		movePool: [ move['needleArm'], move['crunch'], move['leafBlade'], move['grassyGlide'] ],
		base: {
			hp: 70,
			atk: 115,
			def: 60,
			spa: 115,
			spd: 60,
			spe: 55
		},
		exp: 166,
		gold: 20,
		catchRate: 1,
		tm: [151, 9, 10, 11, 12, 13, 16, 25, 28, 80, 81, 83, 87, 88, 93, 98, 117, 143, 146, 161, 164, 170, 
			1, 5, 22, 35, 36, 39, 40, 42, 43, 49, 67, 69, 70, 91, 95, 103, 115, 138, 139, 141, 144, 148, 149, 
			157, 171, 176, 180
		],
		egg: 'cacnea',
	},
	'swablu': {
		n: 333,
		name: ['SWABLU', 'SWABLU', '青绵鸟'],
		portrait: './assets/images/pokemon/portrait/swablu.png',
		image: './assets/images/pokemon/image/swablu.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/swablu.png',
		imageShiny: './assets/images/pokemon/image-shiny/swablu.png',
		sprite: {
			base: './assets/images/pokemon/sprite/swablu.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/swablu.png',
			idle: {
				src: './assets/images/pokemon/sprite/swablu-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swablu-idle.png',
				size: [288, 320],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: 1,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/swablu-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/swablu-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -13,
				correctionX: -4
			}
		},
		type: [type['normal'], type['flying']],
		movePool: [ move['waterGun'], move['wingAttack'], move['metronome'], move['aerialAce'], move['gust'], move['icyWind'], move['twister'] ],
		base: {
			hp: 45,
			atk: 40,
			def: 60,
			spa: 40,
			spd: 75,
			spe: 50
		},
		exp: 62,
		gold: 4,
		catchRate: 1,
		tm: [151, 5, 6, 9, 10, 11, 17, 21, 24, 41, 57, 59, 62, 68, 77, 83, 132, 159],
		egg: 'swablu',
		evolution: [
			{
				pokemon: 'altaria',
				condition: {
					level: 35,
					cost: 6200
				}
			}
		]
	},
	'altaria': {
		n: 334,
		name: ['ALTARIA', 'ALTARIA', '七夕青鸟'],
		portrait: './assets/images/pokemon/portrait/altaria.png',
		image: './assets/images/pokemon/image/altaria.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/altaria.png',
		imageShiny: './assets/images/pokemon/image-shiny/altaria.png',
		sprite: {
			base: './assets/images/pokemon/sprite/altaria.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/altaria.png',
			idle: {
				src: './assets/images/pokemon/sprite/altaria-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/altaria-idle.png',
				size: [672, 512],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -13,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/altaria-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/altaria-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -12,
				correctionX: -2
			}
		},
		type: [type['dragon'], type['flying']],
		movePool: [ move['surf'],move['aeroblast'], move['fireBlast'], move['shadowBall'], move['thunderbolt'], move['dragonPulse'] ],
		base: {
			hp: 75,
			atk: 70,
			def: 90,
			spa: 70,
			spd: 105,
			spe: 80
		},
		exp: 172,
		gold: 40,
		catchRate: 0.6,
		tm: [151, 5, 6, 9, 10, 11, 17, 21, 24, 41, 57, 59, 62, 68, 77, 83, 132, 159, 2, 30, 31, 40, 47, 
			48, 55, 56, 64, 67, 70, 79, 84, 85, 86, 99, 101, 103, 105, 106, 113, 121, 123, 127, 134, 135, 163, 172, 177],
		egg: 'swablu',
	},
	'zangoose': {
		n: 335,
		name: ['ZANGOOSE', 'ZANGOOSE', '猫鼬斩'],
		portrait: './assets/images/pokemon/portrait/zangoose.png',
		image: './assets/images/pokemon/image/zangoose.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/zangoose.png',
		imageShiny: './assets/images/pokemon/image-shiny/zangoose.png',
		sprite: {
			base: './assets/images/pokemon/sprite/zangoose.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/zangoose.png',
			idle: {
				src: './assets/images/pokemon/sprite/zangoose-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zangoose-idle.png',
				size: [240, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -3,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/zangoose-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/zangoose-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -1
			}
		},
		type: [type['normal']],
		movePool: [ move['slash'], move['dragonClaw'], move['pursuit'], move['crunch'] ],
		base: {
			hp: 73,
			atk: 115,
			def: 60,
			spa: 60,
			spd: 60,
			spe: 90
		},
		exp: 160,
		gold: 20,
		catchRate: 3,
		tm: [151, 1, 2, 5, 9, 10, 11, 13, 22, 28, 36, 39, 40, 49, 64, 67, 70, 76, 81, 83, 88, 91, 93, 95, 100, 118, 
			138, 141, 144, 146, 149, 153, 158, 161, 171, 172],
		egg: 'zangoose',
	},
	'seviper': {
		n: 336,
		name: ['SEVIPER', 'SEVIPER', '饭匙蛇'],
		portrait: './assets/images/pokemon/portrait/seviper.png',
		image: './assets/images/pokemon/image/seviper.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/seviper.png',
		imageShiny: './assets/images/pokemon/image-shiny/seviper.png',
		sprite: {
			base: './assets/images/pokemon/sprite/seviper.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/seviper.png',
			idle: {
				src: './assets/images/pokemon/sprite/seviper-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seviper-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/seviper-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/seviper-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -2
			}
		},
		type: [type['poison']],
		movePool: [ move['magnitude'], move['mudBomb'], move['poisonFang'], move['poisonTail'] ],
		base: {
			hp: 73,
			atk: 100,
			def: 60,
			spa: 100,
			spd: 60,
			spe: 65
		},
		exp: 160,
		gold: 20,
		catchRate: 3,
		tm: [ 151, 161, 169, 2, 9, 10, 13, 16, 23, 26, 28, 30, 32, 40, 50, 51, 53, 60, 63, 67, 69, 70, 71, 81, 83, 86, 
			93, 94, 97, 98, 100, 102, 103, 113, 117, 118, 126, 128, 134, 137, 139, 141, 142, 143, 144, 146, 147, 150],
		egg: 'seviper',
	},
	'lunatone': {
		n: 337,
		name: ['LUNATONE', 'LUNATONE', '月石'],
		portrait: './assets/images/pokemon/portrait/lunatone.png',
		image: './assets/images/pokemon/image/lunatone.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/lunatone.png',
		imageShiny: './assets/images/pokemon/image-shiny/lunatone.png',
		sprite: {
			base: './assets/images/pokemon/sprite/lunatone.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/lunatone.png',
			idle: {
				src: './assets/images/pokemon/sprite/lunatone-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lunatone-idle.png',
				size: [192, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -5,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/lunatone-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lunatone-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -18,
				correctionX: -4
			}
		},
		type: [type['rock'], type['psychic']],
		movePool: [ move['weatherBall'], move['accelerock'], move['ancientPower'], move['psybeam'], move['shadowBall'] ],
		base: {
			hp: 90,
			atk: 55,
			def: 65,
			spa: 95,
			spd: 85,
			spe: 70
		},
		exp: 161,
		gold: 22,
		catchRate: 2,
		tm: [151, 2, 3, 9, 10, 17, 19, 20, 21, 23, 30, 31, 34, 40, 48, 60, 64, 67, 69, 77, 87, 
			90, 94, 101, 123, 126, 128, 131, 150, 159, 162, 164, 179],
		egg: 'lunatone',
	},
	'solrock': {
		n: 338,
		name: ['SOLROCK', 'SOLROCK', '太阳岩'],
		portrait: './assets/images/pokemon/portrait/solrock.png',
		image: './assets/images/pokemon/image/solrock.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/solrock.png',
		imageShiny: './assets/images/pokemon/image-shiny/solrock.png',
		sprite: {
			base: './assets/images/pokemon/sprite/solrock.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/solrock.png',
			idle: {
				src: './assets/images/pokemon/sprite/solrock-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/solrock-idle.png',
				size: [192, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -4,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/solrock-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/solrock-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -14,
				correctionX: -5
			}
		},
		type: [type['rock'], type['psychic']],
		movePool: [ move['weatherBall'], move['accelerock'], move['ancientPower'], move['psybeam'], move['flameThrower'] ],
		base: {
			hp: 90,
			atk: 95,
			def: 85,
			spa: 55,
			spd: 65,
			spe: 70
		},
		exp: 161,
		gold: 22,
		catchRate: 2,
		tm: [151, 2, 3, 4, 9, 10, 15, 19, 20, 23, 30, 34, 40, 51, 60, 64, 67, 69, 75, 85, 86, 
			87, 90, 94, 110, 126, 128, 131, 140, 150, 155, 162, 164, 179],
		egg: 'solrock',
	},
	'barboach': {
		n: 339,
		name: ['BARBOACH', 'BARBOACH', '泥泥鳅'],
		portrait: './assets/images/pokemon/portrait/barboach.png',
		image: './assets/images/pokemon/image/barboach.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/barboach.png',
		imageShiny: './assets/images/pokemon/image-shiny/barboach.png',
		sprite: {
			base: './assets/images/pokemon/sprite/barboach.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/barboach.png',
			idle: {
				src: './assets/images/pokemon/sprite/barboach-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/barboach-idle.png',
				size: [192, 256],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: 1,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/barboach-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/barboach-attack.png',
				size: [704, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -5
			}
		},
		type: [type['water'], type['ground']],
		movePool: [ move['sandTomb'], move['waterGun'], move['bubble'], move['mudSlap'] ],
		base: {
			hp: 50,
			atk: 48,
			def: 43,
			spa: 46,
			spd: 41,
			spe: 60
		},
		exp: 58,
		gold: 7,
		catchRate: 3,
		tm: [151, 10, 17, 21, 77, 83, 93, 159, 161, 164 ],
		egg: 'barboach',
		evolution: [
			{
				pokemon: 'whiscash',
				condition: {
					level: 30,
					cost: 2300
				}
			}
		]
	},
	'whiscash': {
		n: 340,
		name: ['WHISCASH', 'WHISCASH', '鲶鱼王'],
		portrait: './assets/images/pokemon/portrait/whiscash.png',
		image: './assets/images/pokemon/image/whiscash.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/whiscash.png',
		imageShiny: './assets/images/pokemon/image-shiny/whiscash.png',
		sprite: {
			base: './assets/images/pokemon/sprite/whiscash.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/whiscash.png',
			idle: {
				src: './assets/images/pokemon/sprite/whiscash-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/whiscash-idle.png',
				size: [320, 384],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -8,
				correctionX: 6
			},
			attack: {
				src: './assets/images/pokemon/sprite/whiscash-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/whiscash-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: -2
			}
		},
		type: [type['water'], type['ground']],
		movePool: [ move['surf'], move['earthPower'], move['mudBomb'], move['bodySlam'] ],
		base: {
			hp: 110,
			atk: 78,
			def: 73,
			spa: 76,
			spd: 71,
			spe: 60
		},
		exp: 164,
		gold: 22,
		catchRate: 1,
		tm: [151, 10, 17, 21, 77, 83, 93, 159, 161, 164, 2, 19, 23, 29, 30, 37, 40, 47, 48, 60, 67, 
			69, 87, 94, 124, 126, 128, 131, 179 ],
		egg: 'barboach',
	},
	'corphish': {
		n: 341,
		name: ['CORPHISH', 'CORPHISH', '龙虾小兵'],
		portrait: './assets/images/pokemon/portrait/corphish.png',
		image: './assets/images/pokemon/image/corphish.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/corphish.png',
		imageShiny: './assets/images/pokemon/image-shiny/corphish.png',
		sprite: {
			base: './assets/images/pokemon/sprite/corphish.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/corphish.png',
			idle: {
				src: './assets/images/pokemon/sprite/corphish-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/corphish-idle.png',
				size: [64, 256],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 4,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/corphish-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/corphish-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: -4
			}
		},
		type: [type['water']],
		movePool: [ move['scratch'], move['clamp'], move['bubble'], move['chillingWater'] ],
		base: {
			hp: 43,
			atk: 80,
			def: 65,
			spa: 50,
			spd: 35,
			spe: 35
		},
		exp: 62,
		gold: 16,
		catchRate: 4,
		tm: [151, 1, 8, 9, 10, 11, 17, 21, 40, 62, 70, 77, 83, 88, 93, 129, 159, 161, 164 ],
		egg: 'corphish',
		evolution: [
			{
				pokemon: 'crawdaunt',
				condition: {
					level: 30,
					cost: 2200
				}
			}
		]
	},
	'crawdaunt': {
		n: 342,
		name: ['CRAWDAUNT', 'CRAWDAUNT', '铁螯龙虾'],
		portrait: './assets/images/pokemon/portrait/crawdaunt.png',
		image: './assets/images/pokemon/image/crawdaunt.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/crawdaunt.png',
		imageShiny: './assets/images/pokemon/image-shiny/crawdaunt.png',
		sprite: {
			base: './assets/images/pokemon/sprite/crawdaunt.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/crawdaunt.png',
			idle: {
				src: './assets/images/pokemon/sprite/crawdaunt-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/crawdaunt-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 0,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/crawdaunt-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/crawdaunt-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -18,
				correctionX: -5
			}
		},
		type: [type['water'], type['dark']],
		movePool: [ move['crunch'], move['psychoCut'], move['headSmash'], move['waterShuriken'], move['crabhammer'] ],
		base: {
			hp: 63,
			atk: 120,
			def: 85,
			spa: 90,
			spd: 55,
			spe: 55
		},
		exp: 164,
		gold: 22,
		catchRate: 1,
		tm: [151, 1, 8, 9, 10, 11, 17, 21, 40, 62, 70, 77, 83, 88, 93, 129, 159, 161, 164, 37, 
			43, 47, 95, 104, 128, 149, 158, 165, 170, 174],
		egg: 'corphish',
	},
	'baltoy': {
		n: 343,
		name: ['BALTOY', 'BALTOY', '天秤偶'],
		portrait: './assets/images/pokemon/portrait/baltoy.png',
		image: './assets/images/pokemon/image/baltoy.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/baltoy.png',
		imageShiny: './assets/images/pokemon/image-shiny/baltoy.png',
		sprite: {
			base: './assets/images/pokemon/sprite/baltoy.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/baltoy.png',
			idle: {
				src: './assets/images/pokemon/sprite/baltoy-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/baltoy-idle.png',
				size: [192, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -3,
				correctionX: 2
			},
			attack: {
				src: './assets/images/pokemon/sprite/baltoy-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/baltoy-attack.png',
				size: [1224, 576],
				position: 6,
				framesX: 17,
				framesY: 8,
				correctionY: -18,
				correctionX: -7
			}
		},
		type: [type['ground'], type['psychic']],
		movePool: [ move['sandTomb'], move['confusion'], move['sandAttack'], move['tackle'] ],
		base: {
			hp: 40,
			atk: 40,
			def: 55,
			spa: 40,
			spd: 70,
			spe: 55
		},
		exp: 60,
		gold: 10,
		catchRate: 4,
		tm: [151, 2, 3, 6, 9, 10, 19, 20, 40, 87, 124, 143, 150, 164],
		egg: 'baltoy',
		evolution: [
			{
				pokemon: 'claydol',
				condition: {
					level: 36,
					cost: 2700
				}
			}
		]
	},
	'claydol': {
		n: 344,
		name: ['CLAYDOL', 'CLAYDOL', '念力土偶'],
		portrait: './assets/images/pokemon/portrait/claydol.png',
		image: './assets/images/pokemon/image/claydol.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/claydol.png',
		imageShiny: './assets/images/pokemon/image-shiny/claydol.png',
		sprite: {
			base: './assets/images/pokemon/sprite/claydol.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/claydol.png',
			idle: {
				src: './assets/images/pokemon/sprite/claydol-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/claydol-idle.png',
				size: [48, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/claydol-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/claydol-attack.png',
				size: [1224, 640],
				position: 6,
				framesX: 17,
				framesY: 8,
				correctionY: -21,
				correctionX: -9
			}
		},
		type: [type['ground'], type['psychic']],
		movePool: [ move['psychic'], move['stoneEdge'], move['ancientPower'], move['earthquake'] ],
		base: {
			hp: 60,
			atk: 70,
			def: 105,
			spa: 70,
			spd: 120,
			spe: 75
		},
		exp: 175,
		gold: 25,
		catchRate: 1,
		tm: [151, 2, 3, 6, 9, 10, 19, 20, 40, 87, 124, 143, 150, 164, 23, 28, 30, 34, 60, 69, 
			71, 86, 90, 94, 97, 126, 128, 131],
		egg: 'baltoy',
	},
	'lileep': {
		n: 345,
		name: ['LILEEP', 'LILEEP', '触手百合'],
		portrait: './assets/images/pokemon/portrait/lileep.png',
		image: './assets/images/pokemon/image/lileep.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/lileep.png',
		imageShiny: './assets/images/pokemon/image-shiny/lileep.png',
		sprite: {
			base: './assets/images/pokemon/sprite/lileep.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/lileep.png',
			idle: {
				src: './assets/images/pokemon/sprite/lileep-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lileep-idle.png',
				size: [96, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 4,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/lileep-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/lileep-attack.png',
				size: [864, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -16,
				correctionX: -7
			}
		},
		type: [type['rock'], type['grass']],
		movePool: [ move['sandTomb'], move['absorb'], move['rockThrow'] ],
		base: {
			hp: 66,
			atk: 41,
			def: 77,
			spa: 61,
			spd: 87,
			spe: 23
		},
		exp: 71,
		gold: 15,
		catchRate: 1,
		tm: [151, 2, 7, 9,  10, 13, 16, 19, 25, 40, 63, 78, 80, 83, 87, 93, 94, 98, 136, 164],
		egg: 'lileep',
		evolution: [
			{
				pokemon: 'cradily',
				condition: {
	                level: 40,
	                move: 'rock',
	                cost: 7000
	            }
			}
		]
	},
	'cradily': {
		n: 346,
		name: ['CRADILY', 'CRADILY', '摇篮百合'],
		portrait: './assets/images/pokemon/portrait/cradily.png',
		image: './assets/images/pokemon/image/cradily.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/cradily.png',
		imageShiny: './assets/images/pokemon/image-shiny/cradily.png',
		sprite: {
			base: './assets/images/pokemon/sprite/cradily.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/cradily.png',
			idle: {
				src: './assets/images/pokemon/sprite/cradily-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cradily-idle.png',
				size: [384, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -6,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/cradily-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/cradily-attack.png',
				size: [864, 640],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			}
		},
		type: [type['rock'], type['grass']],
		movePool: [ move['petalDance'], move['mudBomb'], move['rockSlide'] ],
		base: {
			hp: 86,
			atk: 81,
			def: 97,
			spa: 81,
			spd: 107,
			spe: 43
		},
		exp: 173,
		gold: 22,
		catchRate: 1,
		tm: [151, 2, 7, 9, 10, 13, 16, 19, 25, 40, 63, 78, 80, 83, 87, 93, 94, 98, 136, 164, 23, 27, 60, 67, 69, 71, 105, 124, 126, 128, 131, 141, 148, 165, 179],
		egg: 'lileep',
	},
	'anorith': {
		n: 347,
		name: ['ANORITH', 'ANORITH', '太古羽虫'],
		portrait: './assets/images/pokemon/portrait/anorith.png',
		image: './assets/images/pokemon/image/anorith.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/anorith.png',
		imageShiny: './assets/images/pokemon/image-shiny/anorith.png',
		sprite: {
			base: './assets/images/pokemon/sprite/anorith.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/anorith.png',
			idle: {
				src: './assets/images/pokemon/sprite/anorith-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/anorith-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/anorith-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/anorith-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -7
			}
		},
		type: [type['rock'], type['bug']],
		movePool: [ move['sandTomb'], move['bugbit'], move['slash'] ],
		base: {
			hp: 45,
			atk: 95,
			def: 50,
			spa: 40,
			spd: 50,
			spe: 75
		},
		exp: 71,
		gold: 10,
		catchRate: 1,
		tm: [151, 8, 9, 10, 11, 16, 17, 19, 26, 40, 49, 50, 87, 88, 94, 98, 117, 161],
		egg: 'anorith',
		evolution: [
			{
				pokemon: 'armaldo',
				condition: {
	                level: 40,
	                move: 'rock',
	                cost: 7000
	            }
			}
		]
	},
	'armaldo': {
		n: 348,
		name: ['ARMALDO', 'ARMALDO', '太古盔甲'],
		portrait: './assets/images/pokemon/portrait/armaldo.png',
		image: './assets/images/pokemon/image/armaldo.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/armaldo.png',
		imageShiny: './assets/images/pokemon/image-shiny/armaldo.png',
		sprite: {
			base: './assets/images/pokemon/sprite/armaldo.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/armaldo.png',
			idle: {
				src: './assets/images/pokemon/sprite/armaldo-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/armaldo-idle.png',
				size: [672, 384],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -5,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/armaldo-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/armaldo-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			}
		},
		type: [type['rock'], type['bug']],
		movePool: [ move['ancientPower'], move['firstImpression'], move['dragonClaw'] ],
		base: {
			hp: 75,
			atk: 125,
			def: 100,
			spa: 70,
			spd: 80,
			spe: 45
		},
		exp: 173,
		gold: 22,
		catchRate: 1,
		tm: [151, 8, 9, 10, 11, 16, 17, 19, 26, 40, 49, 50, 87, 88, 94, 98, 117, 161, 2, 22, 23, 30, 36, 43, 47, 
			52, 60, 64, 67, 69, 71, 77, 80, 82, 83, 91, 95, 100, 102, 104, 113, 120, 124, 126, 128, 131, 138, 141, 144, 
			150, 153, 158, 164, 165, 170, 171, 172, 179 ],
		egg: 'anorith',
	},
	'feebas': {
		n: 349,
		name: ['FEEBAS', 'FEEBAS', '丑丑鱼'],
		portrait: './assets/images/pokemon/portrait/feebas.png',
		image: './assets/images/pokemon/image/feebas.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/feebas.png',
		imageShiny: './assets/images/pokemon/image-shiny/feebas.png',
		sprite: {
			base: './assets/images/pokemon/sprite/feebas.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/feebas.png',
			idle: {
				src: './assets/images/pokemon/sprite/feebas-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/feebas-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/feebas-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/feebas-attack.png',
				size: [896, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -24,
				correctionX: -5
			}
		},
		type: [type['water']],
		movePool: [ move['tackle'], move['bubble'] ],
		base: {
			hp: 20,
			atk: 15,
			def: 20,
			spa: 10,
			spd: 55,
			spe: 80
		},
		exp: 40,
		gold: 6,
		catchRate: 2,
		tm: [151, 9, 10, 17, 21, 159 ],
		egg: 'feebas',
		evolution: [
			{
				pokemon: 'milotic',
				condition: {
					item: 'loveSweet',
					cost: 50000
				}
			}
		]
	},
	'milotic': {
		n: 350,
		name: ['MILOTIC', 'MILOTIC', '美纳斯'],
		portrait: './assets/images/pokemon/portrait/milotic.png',
		image: './assets/images/pokemon/image/milotic.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/milotic.png',
		imageShiny: './assets/images/pokemon/image-shiny/milotic.png',
		sprite: {
			base: './assets/images/pokemon/sprite/milotic.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/milotic.png',
			idle: {
				src: './assets/images/pokemon/sprite/milotic-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/milotic-idle.png',
				size: [288, 640],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/milotic-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/milotic-attack.png',
				size: [880, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -24,
				correctionX: 0
			}
		},
		type: [type['water']],
		movePool: [ move['bubbleBeam'], move['dragonBreath'], move['surf'], move['thunderbolt'], move['bouncyBubble'] ],
		base: {
			hp: 95,
			atk: 60,
			def: 79,
			spa: 100,
			spd: 125,
			spe: 81
		},
		exp: 189,
		gold: 62,
		catchRate: 0.6,
		tm: [151, 9, 10, 17, 21, 159, 29, 31, 37, 47, 48, 62, 64, 77, 79, 84, 101, 102, 112, 113, 
			117, 121, 123, 163 ],
		egg: 'feebas',
	},
	'castform': {
		n: 351,
		name: ['CASTFORM', 'CASTFORM', '飘浮泡泡'],
		portrait: './assets/images/pokemon/portrait/castform.png',
		image: './assets/images/pokemon/image/castform.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/castform.png',
		imageShiny: './assets/images/pokemon/image-shiny/castform.png',
		sprite: {
			base: './assets/images/pokemon/sprite/castform.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/castform.png',
			idle: {
				src: './assets/images/pokemon/sprite/castform-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/castform-idle.png',
				size: [144, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -4,
				correctionX: 7
			},
			attack: {
				src: './assets/images/pokemon/sprite/castform-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/castform-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: -4
			}
		},
		type: [type['normal']],
		movePool: [ move['weatherBall'] ],
		base: {
			hp: 70,
			atk: 70,
			def: 70,
			spa: 70,
			spd: 70,
			spe: 70
		},
		exp: 147,
		gold: 18,
		catchRate: 2,
		tm: [151, 1, 2, 5, 10, 15, 17, 18, 21, 28, 30, 37, 41, 44, 45, 47, 48, 51, 55, 56, 62, 66, 77, 78, 83, 86, 87, 110, 112, 121, 
			123, 127, 129, 155, 162, 163, 174 ],
		egg: 'castform',
	},
	'kecleon': {
		n: 352,
		name: ['KECLEON', 'KECLEON', '变隐龙'],
		portrait: './assets/images/pokemon/portrait/kecleon.png',
		image: './assets/images/pokemon/image/kecleon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kecleon.png',
		imageShiny: './assets/images/pokemon/image-shiny/kecleon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kecleon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kecleon.png',
			idle: {
				src: './assets/images/pokemon/sprite/kecleon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kecleon-idle.png',
				size: [128, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -6,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/kecleon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kecleon-attack.png',
				size: [640, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			}
		},
		type: [type['normal']],
		movePool: [ move['slash'], move['dragonBreath'], move['icePunch'], move['crunch'], move['furyCutter'] ],
		base: {
			hp: 60,
			atk: 90,
			def: 70,
			spa: 60,
			spd: 120,
			spe: 40
		},
		exp: 154,
		gold: 24,
		catchRate: 1,
		tm: [151, 1, 2, 5, 9, 10, 11, 13, 15, 17, 28, 40, 49, 61, 63, 64, 70, 83, 86, 88, 93, 101,
			 113, 119, 125, 141, 161 ],
		egg: 'kecleon',
	},
	'shuppet': {
		n: 353,
		name: ['SHUPPET', 'SHUPPET', '怨影娃娃'],
		portrait: './assets/images/pokemon/portrait/shuppet.png',
		image: './assets/images/pokemon/image/shuppet.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/shuppet.png',
		imageShiny: './assets/images/pokemon/image-shiny/shuppet.png',
		sprite: {
			base: './assets/images/pokemon/sprite/shuppet.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/shuppet.png',
			idle: {
				src: './assets/images/pokemon/sprite/shuppet-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shuppet-idle.png',
				size: [144, 384],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -9,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/shuppet-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shuppet-attack.png',
				size: [936, 640],
				position: 6,
				framesX: 13,
				framesY: 8,
				correctionY: -23,
				correctionX: -10
			}
		},
		type: [type['ghost']],
		movePool: [ move['astonish'], move['lick'], move['feintAttack'] ],
		base: {
			hp: 44,
			atk: 75,
			def: 35,
			spa: 63,
			spd: 33,
			spe: 45
		},
		exp: 59,
		gold: 8,
		catchRate: 3,
		tm: [151, 9, 13, 26, 28, 31, 51, 53, 63, 70],
		egg: 'shuppet',
		evolution: [
			{
				pokemon: 'banette',
				condition: {
					level: 37,
					cost: 2900
				}
			}
		]
	},
	'banette': {
		n: 354,
		name: ['BANETTE', 'BANETTE', '诅咒娃娃'],
		portrait: './assets/images/pokemon/portrait/banette.png',
		image: './assets/images/pokemon/image/banette.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/banette.png',
		imageShiny: './assets/images/pokemon/image-shiny/banette.png',
		sprite: {
			base: './assets/images/pokemon/sprite/banette.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/banette.png',
			idle: {
				src: './assets/images/pokemon/sprite/banette-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/banette-idle.png',
				size: [216, 448],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -16,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/banette-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/banette-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -6
			}
		},
		type: [type['ghost']],
		movePool: [ move['crunch'], move['foulPlay'], move['pursuit'], move['poltergeist'] ],
		base: {
			hp: 64,
			atk: 115,
			def: 65,
			spa: 83,
			spd: 63,
			spe: 65
		},
		exp: 159,
		gold: 20,
		catchRate: 1,
		tm: [151, 9, 13, 26, 28, 31, 51, 53, 63, 70, 15, 20, 30, 40, 49, 61, 81, 86, 88, 91, 97, 100, 101, 103, 118, 119, 123, 
			125, 138, 139, 141, 143, 144, 146, 149, 167],
		egg: 'shuppet',
	},
	'duskull': {
		n: 355,
		name: ['DUSKULL', 'DUSKULL', '夜巡灵'],
		portrait: './assets/images/pokemon/portrait/duskull.png',
		image: './assets/images/pokemon/image/duskull.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/duskull.png',
		imageShiny: './assets/images/pokemon/image-shiny/duskull.png',
		sprite: {
			base: './assets/images/pokemon/sprite/duskull.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/duskull.png',
			idle: {
				src: './assets/images/pokemon/sprite/duskull-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/duskull-idle.png',
				size: [192, 448],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -12,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/duskull-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/duskull-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -4
			}
		},
		type: [type['ghost']],
		movePool: [ move['astonish'], move['lick'], move['feintAttack'] ],
		base: {
			hp: 20,
			atk: 40,
			def: 90,
			spa: 30,
			spd: 90,
			spe: 25
		},
		exp: 59,
		gold: 8,
		catchRate: 3,
		tm: [151, 9, 13, 15, 28, 31, 51, 63, 70, 87, 164],
		egg: 'duskull',
		evolution: [
			{
				pokemon: 'dusclops',
				condition: {
					level: 37,
					cost: 4200
				}
			}
		]
	},
	'dusclops': {
		n: 356,
		name: ['DUSCLOPS', 'DUSCLOPS', '彷徨夜灵'],
		portrait: './assets/images/pokemon/portrait/dusclops.png',
		image: './assets/images/pokemon/image/dusclops.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/dusclops.png',
		imageShiny: './assets/images/pokemon/image-shiny/dusclops.png',
		sprite: {
			base: './assets/images/pokemon/sprite/dusclops.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/dusclops.png',
			idle: {
				src: './assets/images/pokemon/sprite/dusclops-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dusclops-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -4,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/dusclops-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/dusclops-attack.png',
				size: [720, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -24,
				correctionX: -3
			}
		},
		type: [type['ghost']],
		movePool: [ move['rockSlide'], move['foulPlay'], move['pursuit'], move['poltergeist'] ],
		base: {
			hp: 40,
			atk: 70,
			def: 130,
			spa: 60,
			spd: 130,
			spe: 25
		},
		exp: 159,
		gold: 20,
		catchRate: 0.7,
		tm: [151, 9, 13, 15, 28, 31, 51, 63, 70, 87, 164, 1, 3, 23, 30, 40, 48, 61, 79, 81, 86, 91, 94, 101, 103, 113, 116, 119, 123, 125, 128, 133, 
			139, 141, 143, 146, 149, 156, 161, 167, 168],
		egg: 'duskull',
	},
	'tropius': {
		n: 357,
		name: ['TROPIUS', 'TROPIUS', '热带龙'],
		portrait: './assets/images/pokemon/portrait/tropius.png',
		image: './assets/images/pokemon/image/tropius.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/tropius.png',
		imageShiny: './assets/images/pokemon/image-shiny/tropius.png',
		sprite: {
			base: './assets/images/pokemon/sprite/tropius.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/tropius.png',
			idle: {
				src: './assets/images/pokemon/sprite/tropius-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tropius-idle.png',
				size: [576, 576],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -21,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/tropius-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/tropius-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -6
			}
		},
		type: [type['grass'], type['flying']],
		movePool: [ move['airSlash'], move['fly'], move['gigaDrain'], move['leafBlade'], move['weatherBall'] ],
		base: {
			hp: 99,
			atk: 68,
			def: 83,
			spa: 72,
			spd: 87,
			spe: 51
		},
		exp: 161,
		gold: 22,
		catchRate: 3,
		tm: [151, 2, 5, 7, 10, 16, 23, 24, 25, 30, 40, 42, 43, 55, 57, 59, 64, 65, 67, 68, 69, 71, 80, 84, 87, 92, 94,
			98, 99, 105, 106, 113, 122, 127, 132, 136, 141, 148, 157, 162
		],
		egg: 'tropius',
	},
	'chimecho': {
		n: 358,
		name: ['CHIMECHO', 'CHIMECHO', '风铃铃'],
		portrait: './assets/images/pokemon/portrait/chimecho.png',
		image: './assets/images/pokemon/image/chimecho.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/chimecho.png',
		imageShiny: './assets/images/pokemon/image-shiny/chimecho.png',
		sprite: {
			base: './assets/images/pokemon/sprite/chimecho.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/chimecho.png',
			idle: {
				src: './assets/images/pokemon/sprite/chimecho-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/chimecho-idle.png',
				size: [96, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -5,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/chimecho-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/chimecho-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -22,
				correctionX: -7
			}
		},
		type: [type['psychic']],
		movePool: [ move['confusion'], move['shadowSneak'], move['feintAttack'] ],
		base: {
			hp: 75,
			atk: 50,
			def: 80,
			spa: 95,
			spd: 90,
			spe: 65
		},
		exp: 149,
		gold: 18,
		catchRate: 5,
		tm: [151, 1, 3, 10, 15, 19, 20, 28, 31, 45, 51, 70, 79, 80, 81, 84, 86, 90, 96, 98, 136, 143],
		egg: 'chimecho',
	},
	'absol': {
		n: 359,
		name: ['ABSOL', 'ABSOL', '阿勃梭鲁'],
		portrait: './assets/images/pokemon/portrait/absol.png',
		image: './assets/images/pokemon/image/absol.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/absol.png',
		imageShiny: './assets/images/pokemon/image-shiny/absol.png',
		sprite: {
			base: './assets/images/pokemon/sprite/absol.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/absol.png',
			idle: {
				src: './assets/images/pokemon/sprite/absol-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/absol-idle.png',
				size: [80, 384],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -4,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/absol-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/absol-attack.png',
				size: [720, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -24,
				correctionX: -4
			}
		},
		type: [type['dark']],
		movePool: [ move['feintAttack'], move['sandTomb'], move['rockSmash'], move['psychoCut'], move['slash'], move['poisonFang'] ],
		base: {
			hp: 65,
			atk: 130,
			def: 60,
			spa: 75,
			spd: 60,
			spe: 75
		},
		exp: 163,
		gold: 22,
		catchRate: 2,
		tm: [151, 1, 2, 5, 9, 10, 11, 13, 18, 20, 22, 28, 30, 40, 
			42, 43, 49, 51, 64, 67, 68, 70, 76, 81, 82, 88, 95, 100, 103, 112, 113, 118, 120, 
			133, 138, 139, 141, 143, 144, 146, 149, 153, 158, 161, 164, 171],
		egg: 'absol',
	},
	'wynaut': {
		n: 360,
		name: ['WYNAUT', 'WYNAUT', '小果然'],
		portrait: './assets/images/pokemon/portrait/wynaut.png',
		image: './assets/images/pokemon/image/wynaut.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/wynaut.png',
		imageShiny: './assets/images/pokemon/image-shiny/wynaut.png',
		sprite: {
			base: './assets/images/pokemon/sprite/wynaut.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/wynaut.png',
			idle: {
				src: './assets/images/pokemon/sprite/wynaut-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wynaut-idle.png',
				size: [144, 320],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -5,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/wynaut-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/wynaut-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -22,
				correctionX: -8
			}
		},
		type: [type['psychic']],
		movePool: [ move['confusion'] ],
		base: {
			hp: 95,
			atk: 23,
			def: 48,
			spa: 23,
			spd: 48,
			spe: 23
		},
		exp: 52,
		gold: 6,
		catchRate: 2,
		tm: [151, 9, 10, 20, 41, 51],
		egg: 'wynaut',
		evolution: [
			{
				pokemon: 'wobbuffet',
				condition: {
	                level: 5,
	                item: 'loveSweet',
	                cost: 500
	            }
			}
		]
	},
	'snorunt': {
		n: 361,
		name: ['SNORUNT', 'SNORUNT', '雪童子'],
		portrait: './assets/images/pokemon/portrait/snorunt.png',
		image: './assets/images/pokemon/image/snorunt.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/snorunt.png',
		imageShiny: './assets/images/pokemon/image-shiny/snorunt.png',
		sprite: {
			base: './assets/images/pokemon/sprite/snorunt.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/snorunt.png',
			idle: {
				src: './assets/images/pokemon/sprite/snorunt-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/snorunt-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/snorunt-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/snorunt-attack.png',
				size: [640, 512],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -12,
				correctionX: -4
			}
		},
		type: [type['ice']],
		movePool: [ move['iceFang'], move['chillingWater'], move['iceBall'] ],
		base: {
			hp: 50,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 50
		},
		exp: 74,
		gold: 10,
		catchRate: 3,
		tm: [151, 2, 8, 9, 10, 13, 17, 19, 28, 40, 44, 62, 63, 66, 81, 83, 87, 93, 118, 159],
		egg: 'snorunt',
		evolution: [
			{
				pokemon: 'glalie',
				condition: {
					level: 42,
					move: 'ice',
					cost: 3500
				}
			}
		]
	},
	'glalie': {
		n: 362,
		name: ['GLALIE', 'GLALIE', '冰鬼护'],
		portrait: './assets/images/pokemon/portrait/glalie.png',
		image: './assets/images/pokemon/image/glalie.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/glalie.png',
		imageShiny: './assets/images/pokemon/image-shiny/glalie.png',
		sprite: {
			base: './assets/images/pokemon/sprite/glalie.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/glalie.png',
			idle: {
				src: './assets/images/pokemon/sprite/glalie-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/glalie-idle.png',
				size: [256, 512],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -15,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/glalie-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/glalie-attack.png',
				size: [720, 704],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -27,
				correctionX: -4
			}
		},
		type: [type['ice']],
		movePool: [ move['freezeDry'], move['iceBeam'], move['zenHeadbutt'], move['shadowBall'], move['darkPulse'], move['gyroBall'] ],
		base: {
			hp: 80,
			atk: 80,
			def: 80,
			spa: 80,
			spd: 80,
			spe: 80
		},
		exp: 167,
		gold: 22,
		catchRate: 1,
		tm: [151, 2, 8, 9, 10, 13, 17, 19, 28, 40, 44, 62, 63, 66, 81, 83, 87, 93, 118, 159, 23, 30, 34, 
			48, 64, 67, 69, 70, 71, 86, 100, 101, 103, 112, 113, 120, 123, 126, 128, 141, 150, 165 ],
		egg: 'snorunt',
	},
	'spheal': {
		n: 363,
		name: ['SPHEAL', 'SPHEAL', '海豹球'],
		portrait: './assets/images/pokemon/portrait/spheal.png',
		image: './assets/images/pokemon/image/spheal.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/spheal.png',
		imageShiny: './assets/images/pokemon/image-shiny/spheal.png',
		sprite: {
			base: './assets/images/pokemon/sprite/spheal.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/spheal.png',
			idle: {
				src: './assets/images/pokemon/sprite/spheal-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spheal-idle.png',
				size: [192, 256],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: 1,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/spheal-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/spheal-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -5
			},
		},
		type: [type['ice'], type['water']],
		movePool: [ move['chillingWater'], move['bubble'], move['icyWind'] ],
		base: {
			hp: 70,
			atk: 40,
			def: 50,
			spa: 55,
			spd: 50,
			spe: 25
		},
		exp: 66,
		gold: 10,
		catchRate: 4,
		tm: [151, 10, 13, 17, 21, 44, 56, 62, 66, 83, 87, 118, 150, 159, 161, 162],
		egg: 'spheal',
		evolution: [
			{
				pokemon: 'sealeo',
				condition: {
					level: 32,
					move: 'water',
					cost: 1200
				}
			}
		]
	},
	'sealeo': {
		n: 364,
		name: ['SEALEO', 'SEALEO', '海魔狮'],
		portrait: './assets/images/pokemon/portrait/sealeo.png',
		image: './assets/images/pokemon/image/sealeo.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/sealeo.png',
		imageShiny: './assets/images/pokemon/image-shiny/sealeo.png',
		sprite: {
			base: './assets/images/pokemon/sprite/sealeo.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/sealeo.png',
			idle: {
				src: './assets/images/pokemon/sprite/sealeo-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sealeo-idle.png',
				size: [160, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -2,
				correctionX: 1
			},
			attack: {
				src: './assets/images/pokemon/sprite/sealeo-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/sealeo-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -21,
				correctionX: -4
			},
		},
		type: [type['ice'], type['water']],
		movePool: [ move['chillingWater'], move['magnitude'], move['iceBeam'], move['surf'], move['iceFang'] ],
		base: {
			hp: 90,
			atk: 60,
			def: 70,
			spa: 75,
			spd: 70,
			spe: 45
		},
		exp: 133,
		gold: 20,
		catchRate: 2,
		tm: [151, 10, 13, 17, 21, 44, 56, 62, 66, 83, 87, 118, 150, 159, 161, 162, 29, 47, 48, 67, 77, 94, 100 ],
		egg: 'spheal',
		evolution: [
			{
				pokemon: 'walrein',
				condition: {
					level: 44,
					move: 'ice',
					cost: 5000
				}
			}
		]
	},
	'walrein': {
		n: 365,
		name: ['WALREIN', 'WALREIN', '帝牙海狮'],
		portrait: './assets/images/pokemon/portrait/walrein.png',
		image: './assets/images/pokemon/image/walrein.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/walrein.png',
		imageShiny: './assets/images/pokemon/image-shiny/walrein.png',
		sprite: {
			base: './assets/images/pokemon/sprite/walrein.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/walrein.png',
			idle: {
				src: './assets/images/pokemon/sprite/walrein-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/walrein-idle.png',
				size: [320, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -3,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/walrein-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/walrein-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -15,
				correctionX: -4
			},
		},
		type: [type['ice'], type['water']],
		movePool: [ move['bouncyBubble'], move['earthquake'], move['iceBeam'], move['surf'], move['iceFang'] ],
		base: {
			hp: 110,
			atk: 80,
			def: 90,
			spa: 95,
			spd: 90,
			spe: 65
		},
		exp: 194,
		gold: 30,
		catchRate: 0.7,
		tm: [151, 10, 13, 17, 21, 44, 56, 62, 66, 83, 87, 118, 150, 159, 161, 162, 29, 47, 48, 67, 77, 
			94, 100, 37, 69, 71, 128, 163, 165],
		egg: 'spheal',
	},
	'clamperl': {
		n: 366,
		name: ['CLAMPERL', 'CLAMPERL', '珍珠贝'],
		portrait: './assets/images/pokemon/portrait/clamperl.png',
		image: './assets/images/pokemon/image/clamperl.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/clamperl.png',
		imageShiny: './assets/images/pokemon/image-shiny/clamperl.png',
		sprite: {
			base: './assets/images/pokemon/sprite/clamperl.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/clamperl.png',
			idle: {
				src: './assets/images/pokemon/sprite/clamperl-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/clamperl-idle.png',
				size: [128, 256],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: 2,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/clamperl-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/clamperl-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -16,
				correctionX: -6
			},
		},
		type: [type['water']],
		movePool: [ move['bubble'], move['astonish'], move['chillingWater'] ],
		base: {
			hp: 35,
			atk: 64,
			def: 85,
			spa: 74,
			spd: 55,
			spe: 32
		},
		exp: 69,
		gold: 14,
		catchRate: 3,
		tm: [151, 8, 10, 17, 21, 28, 44, 62, 83, 93, 117, 159, 164 ],
		egg: 'clamperl',
		evolution: [
			{
				pokemon: 'huntail',
				condition: {
					level: 25,
					item: 'razorFang',
					cost: 3000
				}
			},
			{
				pokemon: 'gorebyss',
				condition: {
					level: 25,
					item: 'dragonScale',
					cost: 3000
				}
			}
		]
	},
	'huntail': {
		n: 367,
		name: ['HUNTAIL', 'HUNTAIL', '猎斑鱼'],
		portrait: './assets/images/pokemon/portrait/huntail.png',
		image: './assets/images/pokemon/image/huntail.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/huntail.png',
		imageShiny: './assets/images/pokemon/image-shiny/huntail.png',
		sprite: {
			base: './assets/images/pokemon/sprite/huntail.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/huntail.png',
			idle: {
				src: './assets/images/pokemon/sprite/huntail-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/huntail-idle.png',
				size: [320, 448],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -14,
				correctionX: 3
			},
			attack: {
				src: './assets/images/pokemon/sprite/huntail-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/huntail-attack.png',
				size: [704, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -25,
				correctionX: -2
			},
		},
		type: [type['water']],
		movePool: [ move['ironTail'], move['surf'], move['crunch'], move['waterShuriken'] ],
		base: {
			hp: 55,
			atk: 104,
			def: 105,
			spa: 94,
			spd: 75,
			spe: 52
		},
		exp: 164,
		gold: 22,
		catchRate: 0.7,
		tm: [151, 8, 10, 17, 21, 28, 44, 62, 83, 93, 117, 159, 164, 5, 13, 29, 47, 48, 68, 70, 
			76, 77, 81, 94, 102, 129, 141, 143, 174 ],
		egg: 'clamperl',
	},
	'gorebyss': {
		n: 368,
		name: ['GOREBYSS', 'GOREBYSS', '樱花鱼'],
		portrait: './assets/images/pokemon/portrait/gorebyss.png',
		image: './assets/images/pokemon/image/gorebyss.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/gorebyss.png',
		imageShiny: './assets/images/pokemon/image-shiny/gorebyss.png',
		sprite: {
			base: './assets/images/pokemon/sprite/gorebyss.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/gorebyss.png',
			idle: {
				src: './assets/images/pokemon/sprite/gorebyss-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gorebyss-idle.png',
				size: [192, 576],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/gorebyss-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/gorebyss-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -23,
				correctionX: -4
			},
		},
		type: [type['water']],
		movePool: [ move['chillingWater'], move['surf'], move['zenHeadbutt'], move['bouncyBubble'] ],
		base: {
			hp: 55,
			atk: 84,
			def: 105,
			spa: 114,
			spd: 75,
			spe: 52
		},
		exp: 164,
		gold: 22,
		catchRate: 0.7,
		tm: [151, 8, 10, 17, 21, 28, 44, 62, 83, 93, 117, 159, 164, 20, 29, 31, 37, 47, 48, 56, 64, 77, 84, 
			132, 163 ], // GOREBYSS
		egg: 'clamperl',
	},
	'relicanth': {
		n: 369,
		name: ['RELICANTH', 'RELICANTH', '古空棘鱼'],
		portrait: './assets/images/pokemon/portrait/relicanth.png',
		image: './assets/images/pokemon/image/relicanth.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/relicanth.png',
		imageShiny: './assets/images/pokemon/image-shiny/relicanth.png',
		sprite: {
			base: './assets/images/pokemon/sprite/relicanth.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/relicanth.png',
			idle: {
				src: './assets/images/pokemon/sprite/relicanth-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/relicanth-idle.png',
				size: [288, 448],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -12,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/relicanth-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/relicanth-attack.png',
				size: [768, 640],
				position: 6,
				framesX: 12,
				framesY: 8,
				correctionY: -21,
				correctionX: 0
			},
		},
		type: [type['water'], type['rock']],
		movePool: [ move['accelerock'], move['headSmash'], move['mudBomb'], move['surf'] ],
		base: {
			hp: 100,
			atk: 90,
			def: 130,
			spa: 45,
			spd: 65,
			spe: 55
		},
		exp: 153,
		gold: 25,
		catchRate: 1,
		tm: [151, 2, 10, 13, 17, 19, 21, 23, 29, 30, 37, 40, 47, 60, 
			67, 69, 71, 77, 87, 93, 94, 102, 124, 126, 128, 131, 159, 161, 164, 165, 179 ],
		egg: 'relicanth',
	},
	'luvdisc': {
		n: 370,
		name: ['LUVDISC', 'LUVDISC', '爱心鱼'],
		portrait: './assets/images/pokemon/portrait/luvdisc.png',
		image: './assets/images/pokemon/image/luvdisc.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/luvdisc.png',
		imageShiny: './assets/images/pokemon/image-shiny/luvdisc.png',
		sprite: {
			base: './assets/images/pokemon/sprite/luvdisc.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/luvdisc.png',
			idle: {
				src: './assets/images/pokemon/sprite/luvdisc-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/luvdisc-idle.png',
				size: [192, 320],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -7,
				correctionX: 8
			},
			attack: {
				src: './assets/images/pokemon/sprite/luvdisc-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/luvdisc-attack.png',
				size: [792, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -25,
				correctionX: -5
			},
		},
		type: [type['water']],
		movePool: [ move['waterGun'], move['tackle'], move['bubble'] ],
		base: {
			hp: 43,
			atk: 30,
			def: 55,
			spa: 40,
			spd: 65,
			spe: 97
		},
		exp: 87,
		gold: 3,
		catchRate: 4,
		tm: [151, 10, 17, 21, 28, 40, 45, 77, 93, 112, 159, 163 ],
		egg: 'luvdisc',
	},
	'bagon': {
		n: 371,
		name: ['BAGON', 'BAGON', '宝贝龙'],
		portrait: './assets/images/pokemon/portrait/bagon.png',
		image: './assets/images/pokemon/image/bagon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/bagon.png',
		imageShiny: './assets/images/pokemon/image-shiny/bagon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/bagon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/bagon.png',
			idle: {
				src: './assets/images/pokemon/sprite/bagon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/bagon-idle.png',
				size: [96, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -1,
				correctionX: 9
			},
			attack: {
				src: './assets/images/pokemon/sprite/bagon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/bagon-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},
		},
		type: [type['dragon']],
		movePool: [ move['bite'], move['smokeScreen'], move['fireSpin'], move['rockSmash'], move['dragonBreath'] ],
		base: {
			hp: 45,
			atk: 75,
			def: 60,
			spa: 40,
			spd: 30,
			spe: 50
		},
		exp: 60,
		gold: 10,
		catchRate: 1,
		tm: [151, 2, 5, 9, 10, 11, 13, 43, 49, 83, 110, 113, 132, 155, 161, 164, 172],
		egg: 'bagon',
		evolution: [
			{
				pokemon: 'shelgon',
				condition: {
					level: 30,
					move: 'dragon',
					cost: 1800
				}
			}
		]
	},
	'shelgon': {
		n: 372,
		name: ['SHELGON', 'SHELGON', '甲壳龙'],
		portrait: './assets/images/pokemon/portrait/shelgon.png',
		image: './assets/images/pokemon/image/shelgon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/shelgon.png',
		imageShiny: './assets/images/pokemon/image-shiny/shelgon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/shelgon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/shelgon.png',
			idle: {
				src: './assets/images/pokemon/sprite/shelgon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shelgon-idle.png',
				size: [128, 320],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -3,
				correctionX: 5
			},
			attack: {
				src: './assets/images/pokemon/sprite/shelgon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/shelgon-attack.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: -3
			},
		},
		type: [type['dragon']],
		movePool: [ move['ironHead'], move['zenHeadbutt'], move['dragonBreath'], move['dragonClaw'] ],
		base: {
			hp: 65,
			atk: 95,
			def: 100,
			spa: 60,
			spd: 50,
			spe: 50
		},
		exp: 144,
		gold: 20,
		catchRate: 1,
		tm: [151, 2, 5, 9, 10, 11, 13, 43, 49, 83, 110, 132, 155, 161, 164, 172, 30, 40, 64, 88, 94, 113, 128, 139, 141, 150 ],
		egg: 'bagon',
		evolution: [
			{
				pokemon: 'salamence',
				condition: {
					level: 50,
					move: 'dragon',
					cost: 14000
				}
			}
		]
	},
	'salamence': {
		n: 373,
		name: ['SALAMENCE', 'SALAMENCE', '暴飞龙'],
		portrait: './assets/images/pokemon/portrait/salamence.png',
		image: './assets/images/pokemon/image/salamence.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/salamence.png',
		imageShiny: './assets/images/pokemon/image-shiny/salamence.png',
		sprite: {
			base: './assets/images/pokemon/sprite/salamence.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/salamence.png',
			idle: {
				src: './assets/images/pokemon/sprite/salamence-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/salamence-idle.png',
				size: [784, 448],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -7,
				correctionX: -8
			},
			attack: {
				src: './assets/images/pokemon/sprite/salamence-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/salamence-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: -10
			},
		},
		type: [type['dragon'], type['flying']],
		movePool: [ move['aeroblast'],  move['fireBlast'],  move['ironTail'],  move['dragonPulse'],  move['dragonClaw'] ],
		base: {
			hp: 95,
			atk: 135,
			def: 80,
			spa: 110,
			spd: 80,
			spe: 100
		},
		exp: 206,
		gold: 88,
		catchRate: 0.6,
		tm: [151, 2, 5, 9, 10, 11, 13, 43, 49, 83, 110, 132, 155, 161, 164, 172, 30, 40, 64, 88, 94, 113, 
			128, 139, 141, 150, 23, 24, 55, 57, 65, 67, 69, 70, 71, 76, 85, 86, 99, 100, 101, 102, 106, 127, 134, 138, 165, 169],
		egg: 'bagon',
	},
	'beldum': {
		n: 374,
		name: ['BELDUM', 'BELDUM', '铁哑铃'],
		portrait: './assets/images/pokemon/portrait/beldum.png',
		image: './assets/images/pokemon/image/beldum.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/beldum.png',
		imageShiny: './assets/images/pokemon/image-shiny/beldum.png',
		sprite: {
			base: './assets/images/pokemon/sprite/beldum.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/beldum.png',
			idle: {
				src: './assets/images/pokemon/sprite/beldum-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/beldum-idle.png',
				size: [256, 320],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -5,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/beldum-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/beldum-attack.png',
				size: [1224, 576],
				position: 6,
				framesX: 17,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},
		},
		type: [type['steel'], type['psychic']],
		movePool: [ move['sandAttack'], move['tackle'], move['confusion'], move['sandTomb'] ],
		base: {
			hp: 40,
			atk: 55,
			def: 80,
			spa: 35,
			spd: 60,
			spe: 30
		},
		exp: 60,
		gold: 10,
		catchRate: 1,
		tm: [151, 3, 9, 10, 20, 164],
		egg: 'beldum',
		evolution: [
			{
				pokemon: 'metang',
				condition: {
					level: 20,
					move: 'steel',
					cost: 2400
				}
			}
		]
	},
	'metang': {
		n: 375,
		name: ['METANG', 'METANG', '金属怪'],
		portrait: './assets/images/pokemon/portrait/metang.png',
		image: './assets/images/pokemon/image/metang.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/metang.png',
		imageShiny: './assets/images/pokemon/image-shiny/metang.png',
		sprite: {
			base: './assets/images/pokemon/sprite/metang.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/metang.png',
			idle: {
				src: './assets/images/pokemon/sprite/metang-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/metang-idle.png',
				size: [320, 384],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -7,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/metang-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/metang-attack.png',
				size: [1008, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -18,
				correctionX: 0
			},
		},
		type: [type['steel'], type['psychic']],
		movePool: [ move['psybeam'], move['dragonClaw'], move['psychoCut'], move['earthPower'] ],
		base: {
			hp: 60,
			atk: 75,
			def: 100,
			spa: 55,
			spd: 80,
			spe: 50
		},
		exp: 147,
		gold: 23,
		catchRate: 1,
		tm: [151, 3, 9, 10, 20, 164, 34, 35, 40, 58, 64, 88, 126, 138, 158, 172],
		egg: 'beldum',
		evolution: [
			{
				pokemon: 'metagross',
				condition: {
					level: 45,
					move: 'steel',
					cost: 17500
				}
			}
		]
	},
	'metagross': {
		n: 376,
		name: ['METAGROSS', 'METAGROSS', '巨金怪'],
		portrait: './assets/images/pokemon/portrait/metagross.png',
		image: './assets/images/pokemon/image/metagross.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/metagross.png',
		imageShiny: './assets/images/pokemon/image-shiny/metagross.png',
		sprite: {
			base: './assets/images/pokemon/sprite/metagross.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/metagross.png',
			idle: {
				src: './assets/images/pokemon/sprite/metagross-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/metagross-idle.png',
				size: [80, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: -3,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/metagross-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/metagross-attack.png',
				size: [1344, 576],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -21,
				correctionX: -10
			},
		},
		type: [type['steel'], type['psychic']],
		movePool: [ move['rageFist'], move['psychic'], move['stoneEdge'], move['earthPower'], move['earthquake'], move['thunderPunch'], move['magnetBomb'] ],
		base: {
			hp: 80,
			atk: 135,
			def: 130,
			spa: 95,
			spd: 90,
			spe: 70
		},
		exp: 270,
		gold: 95,
		catchRate: 0.6,
		tm: [151, 3, 9, 10, 20, 164, 34, 35, 40, 58, 64, 88, 126, 138, 158, 172, 23, 30, 61, 69, 71, 90, 
			116, 119, 125, 131, 141, 150, 153, 156],
		egg: 'beldum',
	},
	'regirock': {
		n: 377,
		name: ['REGIROCK', 'REGIROCK', '雷吉洛克'],
		portrait: './assets/images/pokemon/portrait/regirock.png',
		image: './assets/images/pokemon/image/regirock.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/regirock.png',
		imageShiny: './assets/images/pokemon/image-shiny/regirock.png',
		sprite: {
			base: './assets/images/pokemon/sprite/regirock.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/regirock.png',
			idle: {
				src: './assets/images/pokemon/sprite/regirock-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/regirock-idle.png',
				size: [224, 448],
				position: 6,
				framesX: 7,
				framesY: 8,
				correctionY: -6,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/regirock-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/regirock-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},
		},
		type: [type['rock']],
		movePool: [ move['earthquake'],  move['rockSlide'] ],
		base: {
			hp: 80,
			atk: 100,
			def: 200,
			spa: 50,
			spd: 100,
			spe: 50
		},
		exp: 220,
		gold: 500,
		catchRate: 100,
		tm: [151, 2, 9, 10, 19, 23, 25, 43, 60, 67, 69, 71, 83, 87, 93, 94, 113, 124, 126, 128, 131, 161, 164, 179],
		egg: 'regirock',
	},
	'regice': {
		n: 378,
		name: ['REGICE', 'REGICE', '雷吉艾斯'],
		portrait: './assets/images/pokemon/portrait/regice.png',
		image: './assets/images/pokemon/image/regice.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/regice.png',
		imageShiny: './assets/images/pokemon/image-shiny/regice.png',
		sprite: {
			base: './assets/images/pokemon/sprite/regice.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/regice.png',
			idle: {
				src: './assets/images/pokemon/sprite/regice-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/regice-idle.png',
				size: [96, 384],
				position: 6,
				framesX: 3,
				framesY: 8,
				correctionY: -5,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/regice-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/regice-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},
		},
		type: [type['ice']],
		movePool: [ move['iceBeam'],  move['shadowBall'] ],
		base: {
			hp: 80,
			atk: 50,
			def: 100,
			spa: 100,
			spd: 200,
			spe: 50
		},
		exp: 220,
		gold: 500,
		catchRate: 100,
		tm: [151, 2, 10, 17, 21, 23, 37, 43, 44, 47, 48, 56, 62, 66, 67, 69, 71, 77, 83, 101, 103, 104, 113, 118, 129, 159, 161],  
		egg: 'regice',
	},
	'registeel': {
		n: 379,
		name: ['REGISTEEL', 'REGISTEEL', '雷吉斯奇鲁'],
		portrait: './assets/images/pokemon/portrait/registeel.png',
		image: './assets/images/pokemon/image/registeel.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/registeel.png',
		imageShiny: './assets/images/pokemon/image-shiny/registeel.png',
		sprite: {
			base: './assets/images/pokemon/sprite/registeel.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/registeel.png',
			idle: {
				src: './assets/images/pokemon/sprite/registeel-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/registeel-idle.png',
				size: [80, 320],
				position: 6,
				framesX: 2,
				framesY: 8,
				correctionY: 0,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/registeel-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/registeel-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -19,
				correctionX: 0
			},
		},
		type: [type['steel']],
		movePool: [ move['flashCannon'], move['auraSphere'] ],
		base: {
			hp: 80,
			atk: 75,
			def: 150,
			spa: 75,
			spd: 150,
			spe: 50
		},
		exp: 220,
		gold: 500,
		catchRate: 100,
		tm: [151, 2, 10, 23, 30, 34, 38, 43, 58, 67, 69, 71, 83, 94, 101, 103, 113, 133, 150, 161, 164, 168], 
		egg: 'registeel',
	},
	'latias': {
		n: 380,
		name: ['LATIAS', 'LATIAS', '拉帝亚斯'],
		portrait: './assets/images/pokemon/portrait/latias.png',
		image: './assets/images/pokemon/image/latias.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/latias.png',
		imageShiny: './assets/images/pokemon/image-shiny/latias.png',
		sprite: {
			base: './assets/images/pokemon/sprite/latias.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/latias.png',
			idle: {
				src: './assets/images/pokemon/sprite/latias-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/latias-idle.png',
				size: [288, 512],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -10,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/latias-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/latias-attack.png',
				size: [792, 576],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -16,
				correctionX: 0
			},
		},
		type: [type['dragon'], type['psychic']],
		movePool: [ move['psychic'], move['signalBeam'] ],
		base: {
			hp: 80,
			atk: 80,
			def: 90,
			spa: 110,
			spd: 130,
			spe: 110
		},
		exp: 270,
		gold: 750,
		catchRate: 100,
		tm: [151, 35, 9, 10, 13, 20, 24, 30, 31, 34, 48, 55, 57, 64, 65, 67, 68, 76, 86, 90, 99, 
			101, 102, 103, 106, 113, 122, 127, 130, 132, 138, 143, 149, 158, 162, 168, 172],
		egg: 'latias',
	},
	'latios': {
		n: 381,
		name: ['LATIOS', 'LATIOS', '拉帝欧斯'],
		portrait: './assets/images/pokemon/portrait/latios.png',
		image: './assets/images/pokemon/image/latios.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/latios.png',
		imageShiny: './assets/images/pokemon/image-shiny/latios.png',
		sprite: {
			base: './assets/images/pokemon/sprite/latios.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/latios.png',
			idle: {
				src: './assets/images/pokemon/sprite/latios-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/latios-idle.png',
				size: [384, 640],
				position: 6,
				framesX: 6,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/latios-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/latios-attack.png',
				size: [880, 640],
				position: 6,
				framesX: 11,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
		},
		type: [type['dragon'], type['psychic']],
		movePool: [ move['psychic'], move['mirrorShot'] ],
		base: {
			hp: 80,
			atk: 90,
			def: 80,
			spa: 130,
			spd: 110,
			spe: 110
		},
		exp: 270,
		gold: 750,
		catchRate: 100,
		tm: [151, 35, 9, 10, 13, 20, 24, 30, 31, 34, 48, 55, 57, 64, 65, 67, 68, 76, 86, 90, 99, 
			101, 102, 103, 106, 113, 122, 127, 130, 132, 138, 143, 149, 158, 162, 168, 172],
		egg: 'latios',
	},
	'kyogre': {
		n: 382,
		name: ['KYOGRE', 'KYOGRE', '盖欧卡'],
		portrait: './assets/images/pokemon/portrait/kyogre.png',
		image: './assets/images/pokemon/image/kyogre.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/kyogre.png',
		imageShiny: './assets/images/pokemon/image-shiny/kyogre.png',
		sprite: {
			base: './assets/images/pokemon/sprite/kyogre.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/kyogre.png',
			idle: {
				src: './assets/images/pokemon/sprite/kyogre-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kyogre-idle.png',
				size: [640, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -17,
				correctionX: 0
			},
			attack: {
				src: './assets/images/pokemon/sprite/kyogre-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/kyogre-attack.png',
				size: [800, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -14,
				correctionX: 0
			},
		},
		type: [type['water']],
		movePool: [ move['bouncyBubble'], move['thunder'] ],
		tm: [151, 2, 5, 8, 9, 10, 13, 17, 21, 23, 24, 29, 31, 37, 40, 44, 47, 48, 55, 56, 57, 59, 62, 65, 67, 69, 71, 77, 83, 84, 94, 99, 103, 
			118, 121, 123, 127, 129, 132, 159, 163, 165, 177 ],
		base: {
			hp: 100,
			atk: 100,
			def: 90,
			spa: 150,
			spd: 140,
			spe: 90
		},
		exp: 270,
		gold: 1000,
		catchRate: 100,
		egg: 'kyogre',
	},
	'groudon': {
		n: 383,
		name: ['GROUDON', 'GROUDON', '固拉多'],
		portrait: './assets/images/pokemon/portrait/groudon.png',
		image: './assets/images/pokemon/image/groudon.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/groudon.png',
		imageShiny: './assets/images/pokemon/image-shiny/groudon.png',
		sprite: {
			base: './assets/images/pokemon/sprite/groudon.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/groudon.png',
			idle: {
				src: './assets/images/pokemon/sprite/groudon-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/groudon-idle.png',
				size: [896, 640],
				position: 6,
				framesX: 14,
				framesY: 8,
				correctionY: -16,
				correctionX: 4
			},
			attack: {
				src: './assets/images/pokemon/sprite/groudon-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/groudon-attack.png',
				size: [880, 832],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -29,
				correctionX: 0
			},
		},
		type: [type['ground']],
		movePool: [ move['earthquake'], move['fireBlast'] ],
		base: {
			hp: 100,
			atk: 150,
			def: 140,
			spa: 100,
			spd: 90,
			spe: 90
		},
		exp: 270,
		gold: 1000,
		catchRate: 100,
		tm: [151, 2, 4, 5, 9, 10, 11, 23, 40, 43, 60, 67, 69, 71, 75, 83, 84, 85, 86, 88, 94, 102, 105, 110, 126, 128, 131, 138, 140, 141, 155, 160, 161, 164, 172, 179],
		egg: 'groudon',
	},
	'rayquaza': {
		n: 384,
		name: ['RAYQUAZA', 'RAYQUAZA', '烈空坐'],
		portrait: './assets/images/pokemon/portrait/rayquaza.png',
		image: './assets/images/pokemon/image/rayquaza.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/rayquaza.png',
		imageShiny: './assets/images/pokemon/image-shiny/rayquaza.png',
		sprite: {
			base: './assets/images/pokemon/sprite/rayquaza.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/rayquaza.png',
			idle: {
				src: './assets/images/pokemon/sprite/rayquaza-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rayquaza-idle.png',
				size: [320, 960],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -45,
				correctionX: -30
			},
			attack: {
				src: './assets/images/pokemon/sprite/rayquaza-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/rayquaza-attack.png',
				size: [1760, 1152],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -55,
				correctionX: -64
			},
		},
		type: [type['dragon'], type['flying']],
		movePool: [ move['hurricane'], move['outrage']],
		base: {
			hp: 105,
			atk: 150,
			def: 90,
			spa: 150,
			spd: 90,
			spe: 95
		},
		exp: 270,
		gold: 1000,
		catchRate: 100,
		tm: [151, 2, 5, 9, 10, 11, 23, 40, 55, 57, 59, 67, 70, 71, 76, 83, 84, 86,
			 88, 94, 99, 101, 102, 106, 113, 121, 123, 127, 128, 132, 134, 138, 141, 149, 161, 164, 172, 177],
		egg: 'rayquaza',
	},
	'jirachi': {
		n: 385,
		name: ['JIRACHI', 'JIRACHI', '基拉祈'],
		portrait: './assets/images/pokemon/portrait/jirachi.png',
		image: './assets/images/pokemon/image/jirachi.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/jirachi.png',
		imageShiny: './assets/images/pokemon/image-shiny/jirachi.png',
		sprite: {
			base: './assets/images/pokemon/sprite/jirachi.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/jirachi.png',
			idle: {
				src: './assets/images/pokemon/sprite/jirachi-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jirachi-idle.png',
				size: [160, 384],
				position: 6,
				framesX: 4,
				framesY: 8,
				correctionY: -9,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/jirachi-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/jirachi-attack.png',
				size: [720, 576],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
		},
		type: [type['steel'], type['psychic']],
		movePool: [ move['flashCannon'], move['psychic'] ],
		base: {
			hp: 100,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		exp: 300,
		gold: 750,
		catchRate: 100,
		tm: [151, 1, 3, 9, 10, 11, 20, 30, 31, 34, 38, 58, 64, 68, 78, 79, 80, 84, 90, 98, 101, 
			102, 103, 109, 112, 121, 123, 130, 132, 136, 145, 150, 158, 162, 168],
		egg: 'jirachi',
	},
	'deoxys': {
		n: 386,
		name: ['DEOXYS', 'DEOXYS', '代欧奇希斯'],
		portrait: './assets/images/pokemon/portrait/deoxys.png',
		image: './assets/images/pokemon/image/deoxys.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/deoxys.png',
		imageShiny: './assets/images/pokemon/image-shiny/deoxys.png',
		sprite: {
			base: './assets/images/pokemon/sprite/deoxys.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/deoxys.png',
			idle: {
				src: './assets/images/pokemon/sprite/deoxys-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/deoxys-idle.png',
				size: [256, 512],
				position: 6,
				framesX: 8,
				framesY: 8,
				correctionY: -16,
				correctionX: 10
			},
			attack: {
				src: './assets/images/pokemon/sprite/deoxys-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/deoxys-attack.png',
				size: [720, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
		},
		type: [type['psychic']],
		movePool: [ move['extremeSpeed'], move['psychic'] ],
		base: {
			hp: 50,
			atk: 150,
			def: 50,
			spa: 150,
			spd: 50,
			spe: 150
		},
		exp: 300,
		gold: 1000,
		catchRate: 100,
		tm: [151, 1, 3, 5, 9, 10, 20, 28, 30, 34, 38, 41, 64, 70, 76, 90, 101, 103, 109, 113, 
			130, 132, 141, 149, 158, 162, 168],
		egg: 'deoxys',
	},
	'missingno': {
		n: 387,
		name: ['MISSINGNO', 'MISSINGNO', 'MissingNo.'],
		portrait: './assets/images/pokemon/portrait/missingno.png',
		image: './assets/images/pokemon/image/missingno.png',
		portraitShiny: './assets/images/pokemon/portrait-shiny/missingno.png',
		imageShiny: './assets/images/pokemon/image-shiny/missingno.png',
		sprite: {
			base: './assets/images/pokemon/sprite/missingno.png',
			baseShiny: './assets/images/pokemon/sprite-shiny/missingno.png',
			idle: {
				src: './assets/images/pokemon/sprite/missingno-idle.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/missingno-idle.png',
				size: [288, 384],
				position: 6,
				framesX: 9,
				framesY: 8,
				correctionY: -8,
				correctionX: 12
			},
			attack: {
				src: './assets/images/pokemon/sprite/missingno-attack.png',
				srcShiny: './assets/images/pokemon/sprite-shiny/missingno-attack.png',
				size: [800, 640],
				position: 6,
				framesX: 10,
				framesY: 8,
				correctionY: -20,
				correctionX: 0
			},
		},
		type: [type['flying']],
		movePool: [ move['waterGun'] ],
		base: {
			hp: 66,
			atk: 66,
			def: 66,
			spa: 66,
			spd: 66,
			spe: 66
		},
		exp: 66,
		gold: 66,
		catchRate: 100,
		 tm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
			21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
			39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
			57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
			75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
			93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
			109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 
			123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 
			137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
			152, 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 
			168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180
		],
		egg: 'missingno',
	},
}				

for (const key in pokemon) {
	const poke = pokemon[key];
	pokemonByNumber[poke.n] = poke;
}