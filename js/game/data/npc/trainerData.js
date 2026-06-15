import { Pokemon } from '../../manager/Pokemon.js';
import { pokemon } from '../pokemon/pokemonData.js';
import { move } from '../pokemon/moveData.js';

export const getTrainers = (main, rival) => ({
	falkner: {
		name: ['Falkner', 'Pegaso', '阿速'],
		gym: ['VIOLET CITY GYM', 'GIMNASIO DE CIUDAD MALVA', '桔梗道馆'],
		badge: "zephyrBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['pidgey'], 9, null, null, [move['tackle'], move['sandAttack']]),
				new Pokemon(pokemon['pidgeotto'], 13, null, null, [move['tackle'], move['gust']]),
			],
			1: [
				new Pokemon(pokemon['hoothoot'], 15, null, null, [move['peck'], move['confusion']]),
				new Pokemon(pokemon['pidgey'], 15, null, null, [move['gust'], move['wingAttack']]),
				new Pokemon(pokemon['pidgeotto'], 17, null, null, [move['gust'], move['quickAttack']]),
			],
			2: [
				new Pokemon(pokemon['noctowl'], 20, null, null, [move['gust'], move['confusion']]),
				new Pokemon(pokemon['doduo'], 18, null, null, [move['peck'], move['quickAttack']]),
				new Pokemon(pokemon['pidgeotto'], 21, null, null, [move['gust'], move['wingAttack']]), 
			],
			3: [
				new Pokemon(pokemon['spearow'], 25, null, null, [move['peck'], move['wingAttack']]),
				new Pokemon(pokemon['pidgeotto'], 27, null, null, [move['gust'], move['quickAttack']]),
				new Pokemon(pokemon['pidgeotto'], 27, null, null, [move['peck'], move['quickAttack']]),
				new Pokemon(pokemon['pidgeot'], 29, null, null, [move['gust'], move['aerialAce']]), 
			],
			4: [
				new Pokemon(pokemon['noctowl'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['wingAttack'], move['confusion']]),
				new Pokemon(pokemon['dodrio'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['drillPeck'], move['aerialAce']]),
				new Pokemon(pokemon['noctowl'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psybeam'], move['confusion']]),
				new Pokemon(pokemon['pidgeot'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['twister'], move['gust']]), 
			],
			5: [
				new Pokemon(pokemon['fearow'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['quickAttack'], move['drillPeck']]),
				new Pokemon(pokemon['dodrio'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['stomp'], move['fly']]),
				new Pokemon(pokemon['togetic'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['thunderbolt']]),
				new Pokemon(pokemon['pidgeot'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['airSlash'], move['aerialAce']]), 
			],
			6: [
				new Pokemon(pokemon['noctowl'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['airSlash'], move['psybeam']]),
				new Pokemon(pokemon['dodrio'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['drillPeck'], move['stomp']]),
				new Pokemon(pokemon['fearow'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['drillPeck'], move['drillRun']]),
				new Pokemon(pokemon['pidgeot'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['airSlash'], move['aerialAce']]), 
			],
			7: [
				new Pokemon(pokemon['dodrio'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['drillPeck'], move['quickAttack']]),
				new Pokemon(pokemon['noctowl'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psychic'], move['twister']]),
				new Pokemon(pokemon['aerodactyl'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rockSlide'], move['fly']]),
				new Pokemon(pokemon['murkrow'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['pursuit'], move['foulPlay']]),
				new Pokemon(pokemon['pidgeot'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['airSlash'], move['aerialAce']]), 
			],
		},
	},
	bugsy: {
		name: ['Bugsy', 'Anton', '阿笔'],
		gym: ['AZALEA TOWN GYM', 'GIMNASIO DE PUEBLO AZALEA', '桧皮道馆'],
		badge: "hiveBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['spinarak'], 9, null, null, [move['tackle'], move['stringShot']]),
				new Pokemon(pokemon['ledian'], 13, null, null, [move['stringShot'], move['cometPunch']]),
			],
			1: [
				new Pokemon(pokemon['metapod'], 15, null, null, [move['tackle'], move['bugbit']]),
				new Pokemon(pokemon['kakuna'], 15, null, null, [move['tackle'], move['poisonSting']]),
				new Pokemon(pokemon['scyther'], 17, null, null, [move['slash'], move['wingAttack']]),
			],
			2: [
				new Pokemon(pokemon['butterfree'], 20, null, null, [move['confusion'], move['gust']]),
				new Pokemon(pokemon['paras'], 18, null, null, [move['absorb'], move['bugbit']]),
				new Pokemon(pokemon['scyther'], 21, null, null, [move['wingAttack'], move['slash']]),
			],
			3: [
				new Pokemon(pokemon['paras'], 25, null, null, [move['bugbit'], move['absorb']]),
				new Pokemon(pokemon['ariados'], 27, null, null, [move['stringShot'], move['poisonSting']]),
				new Pokemon(pokemon['butterfree'], 27, null, null, [move['silverWind'], move['confusion']]),
				new Pokemon(pokemon['scyther'], 29, null, null, [move['wingAttack'], move['slash']]),
			],
			4: [
				new Pokemon(pokemon['parasect'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['megaDrain'], move['slash']]),
				new Pokemon(pokemon['butterfree'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['silverWind'], move['confusion']]),
				new Pokemon(pokemon['ariados'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bugbit'], move['poisonSting']]),
				new Pokemon(pokemon['scyther'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['xScissor'], move['wingAttack']]),
			],
			5: [
				new Pokemon(pokemon['scyther'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['slash'], move['wingAttack']]),
				new Pokemon(pokemon['ariados'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bugbit'], move['poisonSting']]),
				new Pokemon(pokemon['heracross'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['hornLeech'], move['hornAttack']]),
				new Pokemon(pokemon['scizor'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['xScissor'], move['bulletPunch']]),
			],
			6: [
				new Pokemon(pokemon['scyther'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['slash'], move['wingAttack']]),
				new Pokemon(pokemon['heracross'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['hornAttack'], move['karateChop']]),
				new Pokemon(pokemon['ariados'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['venoShock'], move['shadowSneak']]),
				new Pokemon(pokemon['scizor'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['xScissor'], move['bulletPunch']]),
			],
			7: [
				new Pokemon(pokemon['scyther'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['slash'], move['aerialAce']]),
				new Pokemon(pokemon['ariados'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['venoShock'], move['shadowSneak']]),
				new Pokemon(pokemon['parasect'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['megaDrain'], move['slash']]),
				new Pokemon(pokemon['heracross'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['hornLeech'], move['megahorn']]),
				new Pokemon(pokemon['scizor'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['xScissor'], move['bulletPunch']]),
			],
		}
	},
	whiteney: {
		name: ['Whiteney', 'Blanca', '小茜'],
		gym: ['GOLDENROD CITY GYM', 'GIMNASIO DE CIUDAD TRIGAL', '满金道馆'],
		badge: "plainBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['aipom'], 9, null, null, [move['fakeOut'], move['quickAttack']]),
				new Pokemon(pokemon['miltank'], 13, null, null, [move['rollout']]),
			],
			1: [
				new Pokemon(pokemon['cleffa'], 15, null, null, [move['tackle'], move['pound']]),
				new Pokemon(pokemon['aipom'], 15, null, null, [move['fakeOut'], move['quickAttack']]),
				new Pokemon(pokemon['miltank'], 17, null, null, [move['rollout']]),
			],
			2: [
				new Pokemon(pokemon['clefairy'], 20, null, null, [move['metronome'], move['pound']]),
				new Pokemon(pokemon['aipom'], 18, null, null, [move['fakeOut'], move['quickAttack']]),
				new Pokemon(pokemon['miltank'], 21, null, null, [move['rollout']]),
			],
			3: [
				new Pokemon(pokemon['aipom'], 25, null, null, [move['quickAttack'], move['swift']]),
				new Pokemon(pokemon['jigglypuff'], 27, null, null, [move['rollout'], move['swift']]),
				new Pokemon(pokemon['clefairy'], 27, null, null, [move['swift'], move['metronome']]),
				new Pokemon(pokemon['miltank'], 29, null, null, [move['rollout']]),
			],
			4: [
				new Pokemon(pokemon['tauros'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['headbutt']]),
				new Pokemon(pokemon['clefairy'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['metronome'], move['headbutt']]),
				new Pokemon(pokemon['jigglypuff'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rollout'], move['metronome']]),
				new Pokemon(pokemon['miltank'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rollout']]),
			],
			5: [
				new Pokemon(pokemon['tauros'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['extremeSpeed']]),
				new Pokemon(pokemon['clefable'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['eggBomb'], move['swift']]),
				new Pokemon(pokemon['lickitung'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['headbutt'], move['bodySlam']]),
				new Pokemon(pokemon['miltank'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bodySlam'], move['rollout']]),
			],
			6: [
				new Pokemon(pokemon['wigglytuff'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rollout'], move['eggBomb']]),
				new Pokemon(pokemon['clefable'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['headbutt'], move['stomp']]),
				new Pokemon(pokemon['tauros'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['bodySlam']]),
				new Pokemon(pokemon['miltank'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rollout']]),
			],
			7: [
				new Pokemon(pokemon['wigglytuff'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['metronome'], move['headbutt']]),
				new Pokemon(pokemon['clefable'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['metronome'], move['bodySlam']]),
				new Pokemon(pokemon['chansey'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['metronome'], move['eggBomb']]),
				new Pokemon(pokemon['tauros'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['extremeSpeed'], move['flameThrower']]),
				new Pokemon(pokemon['miltank'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rollout']]),
			],
		}
	},
	morty: {
		name: ['Morty', 'Morti', '松叶'],
		gym: ['ECRUTEAK CITY GYM', 'GIMNASIO DE CIUDAD IRIS', '圆朱道馆'],
		badge: "fogBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['gastly'], 9, null, null, [move['lick'], move['astonish']]),
				new Pokemon(pokemon['haunter'], 13, null, null, [move['astonish'], move['shadowSneak']]),
			],
			1: [
				new Pokemon(pokemon['gastly'], 15, null, null, [move['lick'], move['astonish']]),
				new Pokemon(pokemon['misdreavus'], 15, null, null, [move['astonish'], move['feintAttack']]),
				new Pokemon(pokemon['haunter'], 17, null, null, [move['astonish'], move['pursuit']]),
			],
			2: [
				new Pokemon(pokemon['misdreavus'], 20, null, null, [move['lick'], move['astonish']]),
				new Pokemon(pokemon['haunter'], 18, null, null, [move['astonish'], move['shadowSneak']]),
				new Pokemon(pokemon['haunter'], 21, null, null, [move['feintAttack'], move['pursuit']]),
			],
			3: [
				new Pokemon(pokemon['gastly'], 25, null, null, [move['lick'], move['astonish']]),
				new Pokemon(pokemon['haunter'], 27, null, null, [move['lick'], move['feintAttack']]),
				new Pokemon(pokemon['haunter'], 27, null, null, [move['astonish'], move['pursuit']]),
				new Pokemon(pokemon['gengar'], 29, null, null, [move['shadowBall'], move['shadowClaw']]),
			],
			4: [
				new Pokemon(pokemon['haunter'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['pursuit'], move['poisonJab']]),
				new Pokemon(pokemon['golbat'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['poisonFang'], move['crunch']]),
				new Pokemon(pokemon['misdreavus'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['astonish'], move['pursuit']]),
				new Pokemon(pokemon['gengar'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowBall'], move['sludgeWave']]),
			],
			5: [
				new Pokemon(pokemon['haunter'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowSneak'], move['sludgeWave']]),
				new Pokemon(pokemon['golbat'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['poisonFang'], move['crunch']]),
				new Pokemon(pokemon['misdreavus'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['darkPulse'], move['pursuit']]),
				new Pokemon(pokemon['gengar'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowBall'], move['darkPulse']]),
			],
			6: [
				new Pokemon(pokemon['haunter'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowSneak'], move['sludgeWave']]),
				new Pokemon(pokemon['crobat'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['crossPoison'], move['aerialAce']]),
				new Pokemon(pokemon['marowak'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bonemerang'], move['pursuit']]),
				new Pokemon(pokemon['gengar'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowBall'], move['darkPulse']]),

			],
			7: [
				new Pokemon(pokemon['haunter'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowSneak'], move['venoShock']]),
				new Pokemon(pokemon['misdreavus'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['snarl'], move['darkPulse']]),
				new Pokemon(pokemon['crobat'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['crossPoison'], move['airSlash']]),
				new Pokemon(pokemon['marowak'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bonemerang'], move['pursuit']]),
				new Pokemon(pokemon['gengar'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shadowBall'], move['sludgeBomb']]),
			],
		}
	},
	chuck: {
		name: ['Chuck', 'Aníbal', '阿四'],
		gym: ['CIANWOOD CITY GYM', 'GIMNASIO DE CIUDAD ORQUÍDEA', '湛蓝道馆'],
		badge: "stormBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['mankey'], 9, null, null, [move['lowKick'], move['pound']]),
				new Pokemon(pokemon['poliwag'], 13, null, null, [move['lowKick'], move['bubble']]),
			],
			1: [
				new Pokemon(pokemon['mankey'], 15, null, null, [move['lowKick'], move['pound']]),
				new Pokemon(pokemon['tyrogue'], 15, null, null, [move['fakeOut'], move['tackle']]),
				new Pokemon(pokemon['poliwhirl'], 17, null, null, [move['waterGun'], move['karateChop']]),
			],
			2: [
				new Pokemon(pokemon['mankey'], 20, null, null, [move['lowKick'], move['quickAttack']]),
				new Pokemon(pokemon['tyrogue'], 18, null, null, [move['fakeOut'], move['tackle']]),
				new Pokemon(pokemon['poliwhirl'], 21, null, null, [move['aquaJet'], move['karateChop']]),
			],
			3: [
				new Pokemon(pokemon['mankey'], 25, null, null, [move['lowKick'], move['lowSweep']]),
				new Pokemon(pokemon['hitmonchan'], 27, null, null, [move['drainPunch'], move['icePunch']]),
				new Pokemon(pokemon['primeape'], 27, null, null, [move['cometPunch'], move['firePunch']]),
				new Pokemon(pokemon['poliwrath'], 29, null, null, [move['aquaJet']]),
			],
			4: [
				new Pokemon(pokemon['hitmonchan'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['drainPunch'], move['icePunch']]),
				new Pokemon(pokemon['primeape'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['firePunch'], move['lowSweep']]),
				new Pokemon(pokemon['hitmonlee'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['tropicalKick'], move['stomp']]),
				new Pokemon(pokemon['poliwrath'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['aquaJet'], move['karateChop']]),
			],
			5: [
				new Pokemon(pokemon['primeape'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['firePunch'], move['lowSweep']]),
				new Pokemon(pokemon['machoke'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['crossChop'], move['thunderPunch']]),
				new Pokemon(pokemon['hitmonchan'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['drainPunch'], move['icePunch']]),
				new Pokemon(pokemon['poliwrath'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['aquaJet'], move['karateChop']]),
			],
			6: [
				new Pokemon(pokemon['primeape'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['firePunch'], move['lowSweep']]),
				new Pokemon(pokemon['hitmonlee'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['tropicalKick'], move['jumpKick']]),
				new Pokemon(pokemon['machamp'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['crossChop'], move['thunderPunch']]),
				new Pokemon(pokemon['poliwrath'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['aquaJet'], move['crossChop']]),
			],
			7: [
				new Pokemon(pokemon['hitmontop'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['tropicalKick'], move['icePunch']]),
				new Pokemon(pokemon['primeape'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['firePunch'], move['thunderPunch']]),
				new Pokemon(pokemon['machamp'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['crossChop'], move['karateChop']]),
				new Pokemon(pokemon['hitmonlee'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['tropicalKick'], move['jumpKick']]),
				new Pokemon(pokemon['poliwrath'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['aquaJet'], move['crossChop']]),
			],
		}
	},
	jasmine: {
		name: ['Jasmine', 'Yasmina', '阿蜜'],
		gym: ['OLIVINE CITY GYM', 'GIMNASIO DE CIUDAD OLIVO', '浅葱道馆'],
		badge: "mineralBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['magnemite'], 9, null, null, [move['tackle'], move['thunderShock']]),
				new Pokemon(pokemon['magnemite'], 13, null, null, [move['tackle'], move['magnetBomb']]),
			],
			1: [
				new Pokemon(pokemon['magnemite'], 15, null, null, [move['tackle'], move['thunderShock']]),
				new Pokemon(pokemon['forretress'], 15, null, null, [move['bugbit'], move['gyroBall']]),
				new Pokemon(pokemon['magnemite'], 17, null, null, [move['tackle'], move['magnetBomb']]),
			],
			2: [
				new Pokemon(pokemon['magnemite'], 20, null, null, [move['thunderShock'], move['magnetBomb']]),
				new Pokemon(pokemon['forretress'], 18, null, null, [move['bugbit'], move['gyroBall']]),
				new Pokemon(pokemon['magneton'], 21, null, null, [move['shockWave'], move['magnetBomb']]),
			],
			3: [
				new Pokemon(pokemon['magnemite'], 25, null, null, [move['shockWave'], move['magnetBomb']]),
				new Pokemon(pokemon['forretress'], 27, null, null, [move['gyroBall'], move['bodySlam']]),
				new Pokemon(pokemon['magnemite'], 27, null, null, [move['shockWave'], move['magnetBomb']]),
				new Pokemon(pokemon['magneton'], 29, null, null, [move['thunderShock'], move['magnetBomb']]),
			],
			4: [
				new Pokemon(pokemon['magnemite'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['thunderShock'], move['magnetBomb']]),
				new Pokemon(pokemon['steelix'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironHead'], move['rockThrow']]),
				new Pokemon(pokemon['magneton'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['thunderShock'], move['magnetBomb']]),
				new Pokemon(pokemon['forretress'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['gyroBall'], move['bodySlam']]),
			],
			5: [
				new Pokemon(pokemon['magnemite'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['spark'], move['magnetBomb']]),
				new Pokemon(pokemon['skarmory'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironHead'], move['aerialAce']]),
				new Pokemon(pokemon['magneton'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['shockWave'], move['magnetBomb']]),
				new Pokemon(pokemon['steelix'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironHead'], move['rockThrow']]),
			],
			6: [
				new Pokemon(pokemon['forretress'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['gyroBall'], move['bodySlam']]),
				new Pokemon(pokemon['skarmory'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironHead'], move['hurricane']]),
				new Pokemon(pokemon['magneton'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['spark'], move['gyroBall']]),
				new Pokemon(pokemon['steelix'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironTail'], move['rockSlide']]),
			],
			7: [
				new Pokemon(pokemon['skarmory'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironHead'], move['hurricane']]),
				new Pokemon(pokemon['magneton'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['electroBall'], move['gyroBall']]),
				new Pokemon(pokemon['forretress'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bodySlam'], move['gyroBall']]),
				new Pokemon(pokemon['magneton'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['thunderbolt'], move['flashCannon']]),
				new Pokemon(pokemon['steelix'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ironTail'], move['earthquake']]),
			],
		}
	},
	pryce: {
		name: ['Pryce', 'Fredo', '柳伯'],
		gym: ['MAHOGANY TOWN GYM', 'GIMNASIO DE PUEBLO CAOBA', '卡吉道馆'],
		badge: "glacierBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['sneasel'], 9, null, null, [move['icyWind'], move['scratch']]),
				new Pokemon(pokemon['swinub'], 13, null, null, [move['icyWind'], move['sandAttack']]),
			],
			1: [
				new Pokemon(pokemon['sneasel'], 15, null, null, [move['icyWind'], move['scratch']]),
				new Pokemon(pokemon['seel'], 15, null, null, [move['waterGun'], move['icyWind']]),
				new Pokemon(pokemon['swinub'], 17, null, null, [move['icyWind'], move['sandAttack']]),
			],
			2: [
				new Pokemon(pokemon['sneasel'], 20, null, null, [move['icePunch'], move['pursuit']]),
				new Pokemon(pokemon['swinub'], 18, null, null, [move['sandAttack'], move['iceFang']]),
				new Pokemon(pokemon['seel'], 21, null, null, [move['waterGun'], move['icyWind']]),
			],
			3: [
				new Pokemon(pokemon['sneasel'], 25, null, null, [move['icePunch'], move['pursuit']]),
				new Pokemon(pokemon['seel'], 27, null, null, [move['icyWind'], move['aquaTail']]),
				new Pokemon(pokemon['dewgong'], 27, null, null, [move['auroraBeam'], move['bubbleBeam']]),
				new Pokemon(pokemon['piloswine'], 29, null, null, [move['ancientPower'], move['iceFang']]),
			],
			4: [
				new Pokemon(pokemon['lapras'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['aquaTail'], move['auroraBeam']]),
				new Pokemon(pokemon['sneasel'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['icePunch'], move['pursuit']]),
				new Pokemon(pokemon['dewgong'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['auroraBeam'], move['surf']]),
				new Pokemon(pokemon['piloswine'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ancientPower'], move['iceFang']]),
			],
			5: [
				new Pokemon(pokemon['lapras'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['auroraBeam'], move['surf']]),
				new Pokemon(pokemon['dewgong'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['iceBeam'], move['bubbleBeam']]),
				new Pokemon(pokemon['jynx'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['icePunch'], move['psychic']]),
				new Pokemon(pokemon['piloswine'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['ancientPower'], move['rockSlide']]),
			],
			6: [
				new Pokemon(pokemon['sneasel'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['pursuit'], move['foulPlay']]),
				new Pokemon(pokemon['dewgong'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['iceBeam'], move['surf']]),
				new Pokemon(pokemon['lapras'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['auroraBeam'], move['surf']]),
				new Pokemon(pokemon['piloswine'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['iceFang']]),
			],
			7: [
				new Pokemon(pokemon['dewgong'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['surf'], move['auroraBeam']]),
				new Pokemon(pokemon['sneasel'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['pursuit'], move['foulPlay']]),
				new Pokemon(pokemon['cloyster'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['iceBeam'], move['crabhammer']]),
				new Pokemon(pokemon['lapras'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['iceBeam'], move['surf']]),
				new Pokemon(pokemon['piloswine'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['iceFang']]),
			],
		}
	},
	clair: {
		name: ['Clair', 'Débora', '小椿'],
		gym: ['BLACKTHORN CITY GYM', 'GIMNASIO DE CIUDAD ENDRINO', '烟墨道馆'],
		badge: "risingBadge",
		song: 'gymBattleJohto',
		region: 'johto',
		team: {
			0: [
				new Pokemon(pokemon['dratini'], 9, null, null, [move['twister'], move['tackle']]),
				new Pokemon(pokemon['horsea'], 13, null, null, [move['bubble'], move['twister']]),
			],
			1: [
				new Pokemon(pokemon['dratini'], 15, null, null, [move['waterGun'], move['twister']]),
				new Pokemon(pokemon['horsea'], 15, null, null, [move['bubble'], move['twister']]),
				new Pokemon(pokemon['dratini'], 17, null, null, [move['tackle'], move['twister']]),
			],
			2: [
				new Pokemon(pokemon['dratini'], 20, null, null, [move['dragonBreath'], move['bubble']]),
				new Pokemon(pokemon['horsea'], 18, null, null, [move['bubble'], move['twister']]),
				new Pokemon(pokemon['seadra'], 21, null, null, [move['waterGun'], move['twister']]),
			],
			3: [
				new Pokemon(pokemon['horsea'], 25, null, null, [move['waterGun'], move['bubble']]),
				new Pokemon(pokemon['dratini'], 27, null, null, [move['twister'], move['dragonBreath']]),
				new Pokemon(pokemon['seadra'], 27, null, null, [move['bubbleBeam'], move['dragonBreath']]),
				new Pokemon(pokemon['dragonair'], 29, null, null, [move['gust'], move['dragonPulse']]),
			],
			4: [
				new Pokemon(pokemon['dragonair'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonBreath'], move['twister']]),
				new Pokemon(pokemon['seadra'], 34, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bubbleBeam'], move['dragonPulse']]),
				new Pokemon(pokemon['gyarados'], 35, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['iceFang'], move['outrage']]),
				new Pokemon(pokemon['dragonair'], 37, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonBreath'], move['airSlash']]),
			],
			5: [
				new Pokemon(pokemon['dragonair'], 40, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonBreath'], move['airSlash']]),
				new Pokemon(pokemon['aerodactyl'], 42, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rockSlide'], move['fly']]),
				new Pokemon(pokemon['seadra'], 41, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bubbleBeam'], move['dragonBreath']]),
				new Pokemon(pokemon['kingdra'], 43, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['surf'], move['dragonPulse']]),
			],
			6: [
				new Pokemon(pokemon['dragonair'], 45, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonBreath'], move['airSlash']]),
				new Pokemon(pokemon['gyarados'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['iceFang'], move['outrage']]),
				new Pokemon(pokemon['charizard'], 46, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['fly']]),
				new Pokemon(pokemon['kingdra'], 48, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonPulse'], move['surf']]),
			],
			7: [
				new Pokemon(pokemon['dragonair'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['airSlash'], move['surf']]),
				new Pokemon(pokemon['gyarados'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['outrage'], move['iceFang']]),
				new Pokemon(pokemon['charizard'], 53, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['fly']]),
				new Pokemon(pokemon['kingdra'], 52, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['hydroPump'], move['dragonPulse']]),
				new Pokemon(pokemon['dragonite'], 55, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonPulse'], move['extremeSpeed']]),
			],
		}
	},
	// KANTO GYM
	brock: {
		name: ['Brock', 'Brock', '小刚'],
		gym: ['PEWTER CITY GYM', 'GIMNASIO DE CIUDAD PLATEADA', '深灰道馆'],
		badge: "boulderBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['onix'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['rockSlide']]),
			new Pokemon(pokemon['sudowoodo'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['outrage'], move['fakeOut']]),
			new Pokemon(pokemon['rhydon'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['rockSlide']]),
			new Pokemon(pokemon['omastar'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['hydroPump'], move['stoneEdge']]),
			new Pokemon(pokemon['golem'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['rollout']]),
		],
	},
	misty: {
		name: ['Misty', 'Misty', '小霞'],
		gym: ['CERULEAN CITY GYM', 'GIMNASIO DE CIUDAD CELESTE', '华蓝道馆'],
		badge: "cascadeBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['golduck'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psychic'], move['surf']]),
			new Pokemon(pokemon['quagsire'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['surf']]),
			new Pokemon(pokemon['kingdra'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['dragonPulse'], move['flameThrower']]),
			new Pokemon(pokemon['lanturn'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['thunder'], move['surf']]),
			new Pokemon(pokemon['starmie'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['psychic'], move['hydroPump']]),
		],
	},
	surge: {
		name: ['Surge', 'Surge', '马志士'],
		gym: ['VERMILION CITY GYM', 'GIMNASIO DE CIUDAD CARMÍN', '枯叶道馆'],
		badge: "thunderBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['electrode'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['electroBall'], move['gyroBall']]),
			new Pokemon(pokemon['electabuzz'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['thunderPunch']]),
			new Pokemon(pokemon['jolteon'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['electroBall'], move['crunch']]),
			new Pokemon(pokemon['magneton'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['thunderbolt'], move['flashCannon']]),
			new Pokemon(pokemon['raichu'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['thunder'], move['electroBall']]),
		],
	},
	erika: {
		name: ['Erika', 'Erika', '莉佳'],
		gym: ['CELADON CITY GYM', 'GIMNASIO DE CIUDAD AZULONA', '玉虹道馆'],
		badge: "rainbowBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['bellossom'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['gigaDrain']]),
			new Pokemon(pokemon['victreebel'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['solarBeam'], move['sludgeWave']]),
			new Pokemon(pokemon['meganium'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['petalDance']]),
			new Pokemon(pokemon['exeggutor'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psychic'], move['energyBall']]),
			new Pokemon(pokemon['vileplume'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['gigaDrain'], move['solarBeam']]),
		],
	},
	koga: {
		name: ['Koga', 'Koga', '阿桔'],
		gym: ['FUCHSIA CITY GYM', 'GIMNASIO DE CIUDAD FUCSIA', '浅红道馆'],
		badge: "soulBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['weezing'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['sludgeBomb'], move['flameThrower']]),
			new Pokemon(pokemon['venomoth'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psychic'], move['bugBuzz']]),
			new Pokemon(pokemon['nidoking'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['bodySlam']]),
			new Pokemon(pokemon['crobat'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['fly'], move['crossPoison']]),
			new Pokemon(pokemon['muk'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['gunkShot'], move['crunch']]),
		],
	},
	sabrina: {
		name: ['Sabrina', 'Sabrina', '娜姿'],
		gym: ['SAFFRON CITY GYM', 'GIMNASIO DE CIUDAD AZAFRÁN', '金黄道馆'],
		badge: "marshBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['mrmime'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psybeam'], move['auraSphere']]),
			new Pokemon(pokemon['espeon'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psychic'], move['hyperVoice']]),
			new Pokemon(pokemon['jynx'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['surf'], move['iceBeam']]),
			new Pokemon(pokemon['slowking'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['psychic'], move['surf']]),
			new Pokemon(pokemon['alakazam'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['psychic'], move['thunderbolt']]),
		],
	},
	blaine: {
		name: ['Blaine', 'Blaine', '夏伯'],
		gym: ['CINNABAR ISLAND  GYM', 'GIMNASIO DE ISLA CANELA', '红莲道馆'],
		badge: "volcanoBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['rapidash'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['flameThrower'], move['extremeSpeed']]),
			new Pokemon(pokemon['houndoom'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['darkPulse'], move['foulPlay']]),
			new Pokemon(pokemon['magcargo'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['stoneEdge']]),
			new Pokemon(pokemon['charizard'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['fireBlast'], move['aeroblast']]),
			new Pokemon(pokemon['arcanine'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['fireBlast'], move['extremeSpeed']]),
		],
	},
	giovanni: {
		name: ['Giovanni', 'Giovanni', '坂木'],
		gym: ['VIRIDIAN CITY GYM', 'GIMNASIO DE CIUDAD VERDE', '常磐道馆'],
		badge: "earthBadge",
		song: 'gymBattleKanto',
		region: 'kanto',
		team: [
			new Pokemon(pokemon['persian'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['fakeOut'], move['extremeSpeed']]),
			new Pokemon(pokemon['dugtrio'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['earthquake'], move['rockSlide']]),
			new Pokemon(pokemon['kangaskhan'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['bodySlam'], move['meteorMash']]),
			new Pokemon(pokemon['donphan'], 60, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['rollout']]),
			new Pokemon(pokemon['nidoking'], 60, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['earthquake'], move['megahorn']]),
		],
	},
	// LIGA
	lorelei: {
		name: ['Lorelei', 'Lorelei', '科拿'],
		hint: ['specialized in Ice-type Pokémon', 'especializa en Pokémon de tipo hielo', '专精冰属性宝可梦'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [
			new Pokemon(pokemon['dewgong'], 79, null, { hp: 24, atk: 24, def: 24, spa: 24, spd: 24, spe: 24 }, [move['iceBeam'], move['aquaTail']]), 
			new Pokemon(pokemon['cloyster'], 78, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['iceBall']]),
			new Pokemon(pokemon['jynx'], 80, null, { hp: 21, atk: 21, def: 21, spa: 21, spd: 21, spe: 21 }, [move['psychic'], move['icyWind']]),
			new Pokemon(pokemon['piloswine'], 79, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['iceFang'], move['earthquake']]),
			new Pokemon(pokemon['lapras'], 81, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['iceBeam'], move['surf']]),
		],
	},
	bruno: {
		name: ['Bruno', 'Bruno', '希巴'],
		hint: ['specialized in Fighting-type Pokémon', 'especializa en Pokémon de tipo lucha', '专精格斗属性宝可梦'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [
			new Pokemon(pokemon['hitmonlee'], 80, null, { hp: 27, atk: 27, def: 27, spa: 27, spd: 27, spe: 27 }, [move['tropicalKick'], move['jumpKick']]),
			new Pokemon(pokemon['hitmonchan'], 78, null, { hp: 25, atk: 25, def: 25, spa: 25, spd: 25, spe: 25 }, [move['firePunch'], move['drainPunch']]),
			new Pokemon(pokemon['onix'], 77, null, { hp: 24, atk: 24, def: 24, spa: 24, spd: 24, spe: 24 }, [move['stoneEdge'], move['earthquake']]),
			new Pokemon(pokemon['hitmontop'], 82, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['highJumpKick'], move['rollingKick']]),
			new Pokemon(pokemon['machamp'], 82, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['crossChop'], move['thunderPunch']]),
		],
	},
	agatha: {
		name: ['Agatha', 'Agatha', '菊子'],
		hint: ['specialized in Ghosy-type Pokémon', 'especializa en Pokémon de tipo fantasma', '专精幽灵属性宝可梦'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [
			new Pokemon(pokemon['arbok'], 78, null, { hp: 22, atk: 22, def: 22, spa: 22, spd: 22, spe: 22 }, [move['gunkShot'], move['iceFang']]),
			new Pokemon(pokemon['alakazam'], 83, null, { hp: 21, atk: 21, def: 21, spa: 21, spd: 21, spe: 21 }, [move['psychic'], move['auraSphere']]),
			new Pokemon(pokemon['crobat'], 81, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['crossPoison'], move['bite']]),
			new Pokemon(pokemon['umbreon'], 82, null, { hp: 25, atk: 25, def: 20, spa: 25, spd: 25, spe: 25 }, [move['pursuit'], move['foulPlay']]),
			new Pokemon(pokemon['gengar'], 85, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['shadowBall'], move['sludgeBomb']]),
		],
	},
	lance: {
		name: ['Lance', 'Lance', '渡'],
		hint: ['specialized in Dragon-type Pokémon', 'especializa en Pokémon de tipo dragón', '专精龙属性宝可梦'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [
			new Pokemon(pokemon['gyarados'], 78, null, { hp: 26, atk: 26, def: 26, spa: 26, spd: 26, spe: 26 }, [move['crunch'], move['outrage']]),
			new Pokemon(pokemon['charizard'], 80, null, { hp: 26, atk: 26, def: 26, spa: 26, spd: 26, spe: 26 }, [move['fireBlast'], move['airSlash']]),
			new Pokemon(pokemon['aerodactyl'], 83, null, { hp: 26, atk: 26, def: 26, spa: 26, spd: 26, spe: 26 }, [move['fly'], move['rockSlide']]),
			new Pokemon(pokemon['kingdra'], 83, null, { hp: 29, atk: 29, def: 29, spa: 29, spd: 29, spe: 29 }, [move['dragonPulse'], move['surf']]),
			new Pokemon(pokemon['dragonite'], 84, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['outrage'], move['extremeSpeed']]),
		],
	},
	rival0: {
		name: [rival[0].name, rival[0].name],
		sprite: [rival[0].sprite],
		hint: ['Pokémon League champion', 'campeón de la Liga Pokémon', '宝可梦联盟冠军'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [	
			new Pokemon(pokemon['heracross'], 81, null, { hp: 27, atk: 27, def: 27, spa: 27, spd: 27, spe: 27 }, [move['crossChop'], move['megahorn']]),
			new Pokemon(pokemon['tyranitar'], 82, null, { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30 }, [move['crunch'], move['rockSlide']]),
			new Pokemon(pokemon['jolteon'], 84, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['thunder'], move['shadowBall']]),
			new Pokemon(pokemon['steelix'], 81, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['earthquake'], move['ironHead']]),
			new Pokemon(pokemon[rival[0].starter], 84, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['prismaticPledge']]),
		]
	},
	rival1: {
		name: [rival[1].name, rival[1].name],
		sprite: [rival[1].sprite],
		hint: ['challenger', 'aspirante', '挑战者'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [	
			new Pokemon(pokemon[rival[1].starter], 96, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['prismaticPledge']]),
			new Pokemon(pokemon['pidgeot'], 95, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['extremeSpeed'], move['hurricane']]),
			new Pokemon(pokemon['forretress'], 95, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['earthquake'], move['ironHead']]),
			new Pokemon(pokemon['exeggutor'], 97, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['psychic'], move['gigaDrain']]),
			new Pokemon(pokemon['gengar'], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['shadowBall'], move['thunder']]),
		]
	},
	rival2: {
		name: [rival[2].name, rival[2].name],
		sprite: [rival[2].sprite],
		hint: ['challenger', 'aspirante', '挑战者'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [	
			new Pokemon(pokemon[rival[2].starter], 94, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['prismaticPledge']]),
			new Pokemon(pokemon['blissey'], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['metronome'], move['hyperVoice']]),
			new Pokemon(pokemon['dodrio'], 97, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['drillPeck'], move['extremeSpeed']]),
			new Pokemon(pokemon['raichu'], 100, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['electroBall'], move['surf']]),
			new Pokemon(pokemon['steelix'], 95, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['earthquake'], move['ironHead']]),
		]
	},
	rival3: {
		name: [rival[3].name, rival[3].name],
		sprite: [rival[3].sprite],
		hint: ['challenger', 'aspirante', '挑战者'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [	
			new Pokemon(pokemon[rival[3].starter], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['prismaticPledge']]),
			new Pokemon(pokemon['pinsir'], 97, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['megahorn'], move['crossPoison']]),
			new Pokemon(pokemon['snorlax'], 100, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['thunderPunch'], move['bodySlam']]),
			new Pokemon(pokemon['togetic'], 96, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['metronome'], move['signalBeam']]),
			new Pokemon(pokemon['ampharos'], 100, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['thunder'], move['thunderbolt']]),
		]
	},
	rival4: {
		name: [rival[4].name, rival[4].name],
		sprite: [rival[4].sprite],
		hint: ['challenger', 'aspirante', '挑战者'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [	
			new Pokemon(pokemon[rival[4].starter], 100, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['prismaticPledge']]),
			new Pokemon(pokemon['hitmonchan'], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['drainPunch'], move['firePunch']]),
			new Pokemon(pokemon['cloyster'], 96, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['crabhammer'], move['iceBeam']]),
			new Pokemon(pokemon['ursaring'], 100, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['bodySlam'], move['iceFang']]),
			new Pokemon(pokemon['donphan'], 94, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['earthquake'], move['ironHead']]),
		]
	},
	oak: {
		name: ['Oak', 'Oak', '大木博士'],
		hint: ['Pokemon professor', 'profesor Pokémon', '宝可梦博士'],
		song: 'gymBattleKanto',
		region: 'league',
		team: [	
			new Pokemon(pokemon['dragonite'], 95, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['hurricane'], move['thunder']]),
			new Pokemon(pokemon['venusaur'], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['gigaDrain'], move['prismaticPledge']]),
			new Pokemon(pokemon['charizard'], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['shadowClaw'], move['prismaticPledge']]),
			new Pokemon(pokemon['blastoise'], 98, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['iceBeam'], move['prismaticPledge']]),
			new Pokemon(pokemon['mewtwo'], 100, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['psychic'], move['shadowBall']]),
		]
	},
	// ENTRENADORES
	khytrayer: {
		name: ['Khytrayer', 'Khytrayer', '凯特雷尔'],
		song: 'gymBattleKanto',
		team: [
			new Pokemon(pokemon['golduck'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['galvanicQuack'], move['psychic']]),
			new Pokemon(pokemon['shuckle'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['gyroBall'], move['rockSlide']]), 
			new Pokemon(pokemon['umbreon'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['foulPlay']]),
			new Pokemon(pokemon['farfetchd'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['galvanicQuack']]),
			new Pokemon(pokemon['typhlosion'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['fireBlast']]),
			new Pokemon(pokemon['porygon2'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['galvanicQuack']]),
		],
	},
	singa: {
		name: ['Singa', 'Singa', '辛加'],
		song: 'gymBattleKanto',
		team: [
			new Pokemon(pokemon['umbreon'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['foulPlay'], move['pursuit']]),
			new Pokemon(pokemon['sneasel'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['metalicSlash']]), 
			new Pokemon(pokemon['skarmory'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['metalicSlash'], move['fly']]),
			new Pokemon(pokemon['kabutops'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['metalicSlash'], move['rockSlide']]),
			new Pokemon(pokemon['charizard'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['fireBlast'], move['hurricane']]),
			new Pokemon(pokemon['scizor'], 75, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['bulletPunch'], move['metalicSlash']]),
		],
	},
	//APACHÁN
	//15
	adrian: {
		name: ['Adrian', 'Adrián', '艾德里安'],
		gym: ['LITHIC TOWN DOJO', 'DOJO DE PUEBLO LÍTICO', '石之镇道场'],
		song: 'gymBattleJohto',
		region: 'apachan',
		team: [
			new Pokemon(pokemon['paras'], 13, null, { hp: 16, atk: 16, def: 16, spa: 16, spd: 16, spe: 16 }, [move['absorb'], move['leechLife']]),
			new Pokemon(pokemon['ledian'], 13, null, { hp: 18, atk: 18, def: 18, spa: 18, spd: 18, spe: 18 }, [move['electroweb'], move['cometPunch']]),
			new Pokemon(pokemon['dustox'], 12, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['venoShock']]),
			new Pokemon(pokemon['anorith'], 14, null, { hp: 21, atk: 21, def: 21, spa: 21, spd: 21, spe: 21 }, [move['slash'], move['rockThrow']]),
			new Pokemon(pokemon['ninjask'], 15, null, { hp: 18, atk: 17, def: 19, spa: 17, spd: 19, spe: 15 }, [move['firstImpression'], move['fellStinger']]),
		],
	},
	//23
	swiker: {
		name: ['Swiker', 'Iker', '斯威克'],
		gym: ['LITHIC TOWN DOJO', 'DOJO DE PUEBLO LÍTICO', '石之镇道场'],
		song: 'gymBattleJohto',
		region: 'apachan',
		team: [
			new Pokemon(pokemon['smeargle'], 22, null, { hp: 18, atk: 18, def: 18, spa: 18, spd: 18, spe: 18 }, [move['airSlash'], move['shockWave']]),
			new Pokemon(pokemon['zangoose'], 21, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['slash'], move['fakeOut']]),
			new Pokemon(pokemon['furret'], 22, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['fakeOut'], move['quickAttack']]),
			new Pokemon(pokemon['loudred'], 23, null, { hp: 21, atk: 21, def: 21, spa: 21, spd: 21, spe: 21 }, [move['hyperVoice'], move['lowSweep']]),
			new Pokemon(pokemon['vigoroth'], 23, null, { hp: 24, atk: 24, def: 24, spa: 24, spd: 24, spe: 24 }, [move['dragonClaw'], move['slash']]),
		],
	},
	//28
	manny: {
		name: ['Manny', 'Manu', '曼尼'],
		gym: ['LITHIC TOWN DOJO', 'DOJO DE PUEBLO LÍTICO', '石之镇道场'],
		song: 'gymBattleJohto',
		region: 'apachan',
		team: [
			new Pokemon(pokemon['nosepass'], 27, null, { hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20 }, [move['accelerock'], move['magnitude']]),
			new Pokemon(pokemon['lunatone'], 28, null, { hp: 24, atk: 24, def: 24, spa: 24, spd: 24, spe: 24 }, [move['weatherBall'], move['psybeam']]),
			new Pokemon(pokemon['sudowoodo'], 26, null, { hp: 24, atk: 24, def: 24, spa: 24, spd: 24, spe: 24 }, [move['rockThrow'], move['grassyGlide']]),
			new Pokemon(pokemon['solrock'], 25, null, { hp: 26, atk: 26, def: 26, spa: 26, spd: 26, spe: 26 }, [move['weatherBall'], move['psybeam']]),
			new Pokemon(pokemon['shuckle'], 28, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['rollout']]),
		],
	},
	//36
	ruben: {
		name: ['Ruben', 'Ruben', '鲁本'],
		gym: ['LITHIC TOWN DOJO', 'DOJO DE PUEBLO LÍTICO', '石之镇道场'],
		song: 'gymBattleJohto',
		region: 'apachan',
		team: [
			new Pokemon(pokemon['sneasel'], 34, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['shadowClaw'], move['dragonClaw']]),
			new Pokemon(pokemon['sableye'], 36, null, { hp: 27, atk: 27, def: 27, spa: 27, spd: 27, spe: 27 }, [move['foulPlay'], move['icePunch']]),
			new Pokemon(pokemon['houndoom'], 35, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['flameThrower'], move['crunch']]),
			new Pokemon(pokemon['absol'], 35, null, { hp: 25, atk: 25, def: 25, spa: 25, spd: 25, spe: 25 }, [move['psychoCut'], move['poisonFang']]),
			new Pokemon(pokemon['shiftry'], 36, null, { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, [move['leafBlade'], move['gigaDrain']]),
		],
	},
	//42
	saire: {
		name: ['Saire', 'Asier', '赛尔'],
		gym: ['LITHIC TOWN DOJO', 'DOJO DE PUEBLO LÍTICO', '石之镇道场'],
		song: 'gymBattleJohto',
		region: 'apachan',
		team: [
			new Pokemon(pokemon['xatu'], 40, null, { hp: 25, atk: 25, def: 25, spa: 25, spd: 25, spe: 25 }, [move['airSlash'], move['psybeam']]),
			new Pokemon(pokemon['slowking'], 41, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['surf'], move['zenHeadbutt']]),
			new Pokemon(pokemon['medicham'], 42, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['psychic'], move['skyUppercut']]),
			new Pokemon(pokemon['exeggutor'], 40, null, { hp: 28, atk: 28, def: 28, spa: 28, spd: 28, spe: 28 }, [move['gigaDrain'], move['eggBomb']]),
			new Pokemon(pokemon['gardevoir'], 42, null, { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30 }, [move['psychic'], move['thunder']]),
		],
	},
});



