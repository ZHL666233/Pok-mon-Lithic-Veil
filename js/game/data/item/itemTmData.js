import { move } from '../pokemon/moveData.js';

export const itemTm = {
	tm1: {
		id: 1,
		key: 'tm1',
		move: move['fakeOut'],
		name: ['TM001 Fake Out', 'MT001 Sorpresa', 'TM001 击掌奇袭'],
		description: [
			'Deals light Normal-type damage. If the target is at full HP, their charge bar is reset to 0.', 
			'Causa daño leve de tipo Normal. Si el objetivo tiene PS completos, vuelve su barra de carga a 0.', '造成轻微的一般属性伤害。若目标HP全满，将其蓄力条归零。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 3000
	},
	tm2: {
		id: 2,
		key: 'tm2',
		move: move['headbutt'],
		name: ['TM002 Headbutt', 'MT002 Golpe cabeza', 'TM002 头锤'],
		description: [
			'Deals severe Normal-type damage.', 
			'Causa daño severo de tipo Normal.', '造成严重的一般属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 12000
	},
	tm3: {
		id: 3,
		key: 'tm3',
		move: move['psybeam'],
		name: ['TM003 Psybeam', 'MT003 Psycorayo', 'TM003 精神光线'],
		description: [
			'Deals severe Psychic-type damage.', 
			'Causa daño severo de tipo Psíquico.', '造成严重的超能力属性伤害。'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 12000 
	},
	tm4: {
		id: 4,
		key: 'tm4',
		move: move['flareBlitz'],
		name: ['TM004 Flare Blitz ', 'MT004 Envite ígneo', 'TM004 闪焰冲锋'],
		description: [
			'Deals devastating Fire-type damage. Hurts the user.', 
			'Causa daño devastador de tipo Duego. Daña al usuario.', '造成毁灭性的火属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 55000
	},
	tm5: {
		id: 5,
		key: 'tm5',
		move: move['quickAttack'],
		name: ['TM005 Quick Attack', 'MT005 Ataque rápido', 'TM005 电光一闪'],
		description: [
			'Deals light Normal-type damage. Increases the charge bar.', 
			'Causa daño leve de tipo Normal. Aumenta la barra de carga.', '造成轻微的一般属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm6: {
		id: 6,
		key: 'tm6',
		move: move['peck'],
		name: ['TM006 Peck', 'MT006 Picotazo', 'TM006 啄'],
		description: [
			'Deals light Flying-type damage.', 
			'Causa daño leve de tipo Volador.', '造成轻微的飞行属性伤害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm7: {
		id: 7,
		key: 'tm7',
		move: move['vineWhip'],
		name: ['TM007 Vine Whip', 'MT007 Látigo cepa', 'TM007 藤鞭'],
		description: [
			'Deals light Grass-type damage.', 
			'Causa daño leve de tipo Planta.', '造成轻微的草属性伤害。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm8: {
		id: 8,
		key: 'tm8',
		move: move['clamp'],
		name: ['TM008 Clamp', 'MT008 Tenaza', 'TM008 贝壳夹'],
		description: [
			'Deals light Water-type damage. May stun the target.', 
			'Causa daño leve de tipo Agua. Puede aturdir al objetivo.', '造成轻微的水属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm9: {
		id: 9,
		key: 'tm9',
		move: move['sandAttack'],
		name: ['TM009 Sand Attack', 'MT009 Ataque arena', 'TM009 泼沙'],
		description: [
			'Deals very light Ground-type damage. Slows the target.', 
			'Causa daño muy leve de tipo Tierra. Ralentiza al objetivo.', '造成极轻微的地面属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm10: {
		id: 10,
		key: 'tm10',
		move: move['tackle'],
		name: ['TM010 Tackle', 'MT010 Placaje', 'TM010 撞击'],
		description: [
			'Deals light Normal-type damage.', 
			'Causa daño leve de tipo Normal.', '造成轻微的一般属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm11: {
		id: 11,
		key: 'tm11',
		move: move['scratch'],
		name: ['TM011 Scratch', 'MT011 Arañazo', 'TM011 抓'],
		description: [
			'Deals light Normal-type damage.', 
			'Causa daño leve de tipo Normal.', '造成轻微的一般属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm12: {
		id: 12,
		key: 'tm12',
		move: move['bugbit'],
		name: ['TM012 Bugbit', 'MT012 Picadura', 'TM012 虫咬'],
		description: [
			'Deals light Bug-type damage.', 
			'Causa daño leve de tipo Bicho.', '造成轻微的虫属性伤害。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm13: {
		id: 13,
		key: 'tm13',
		move: move['bite'],
		name: ['TM013 Bite', 'MT013 Mordisco', 'TM013 咬住'],
		description: [
			'Deals moderate Dark-type damage. May stun the target.', 
			'Causa daño moderado de tipo Siniestro. Puede aturdir al objetivo.', '造成中等的恶属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm14: {
		id: 14,
		key: 'tm14',
		move: move['drillPeck'],
		name: ['TM014 Drill Peck', 'MT014 Pico taladro', 'TM014 啄钻'],
		description: [
			'Deals severe Flying-type damage', 
			'Causa daño severo de tipo Volador.', '造成严重的飞行属性伤害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 20000
	},
	tm15: {
		id: 15,
		key: 'tm15',
		move: move['ember'],
		name: ['TM015 Ember', 'MT015 Ascuas', 'TM015 火花'],
		description: [
			'Deals light Fire-type damage', 
			'Causa daño leve de tipo fuego.', '造成轻微的火属性伤害。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm16: {
		id: 16,
		key: 'tm16',
		move: move['wrap'],
		name: ['TM016 Wrap', 'MT016 Atadura', 'TM016 紧束'],
		description: [
			'Deals very light Normal-type damage. Slows the target.', 
			'Causa daño muy leve de tipo Normal. Ralentiza al objetivo.', '造成极轻微的一般属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm17: {
		id: 17,
		key: 'tm17',
		move: move['bubble'],
		name: ['TM017 Bubble', 'MT017 Burbuja', 'TM017 泡沫'],
		description: [
			'Deals light Water-type damage. Slows the target.', 
			'Causa daño leve de tipo agua. Ralentiza al objetivo.', '造成轻微的水属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm18: {
		id: 18,
		key: 'tm18',
		move: move['payDay'],
		name: ['TM018 Pay Day', 'MT018 Día de pago', 'TM018 聚宝功'],
		description: [
			'Deals light Normal-type damage. Earns money based on the damage dealt.', 
			'Causa daño leve de tipo Normal. Gana dinero según el daño causado.', '造成轻微的一般属性伤害。根据造成伤害获得金钱。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 3000
	},
	tm19: {
		id: 19,
		key: 'tm19',
		move: move['powerGem'],
		name: ['TM019 Power Gem', 'MT019 Joya de luz', 'TM019 力量宝石'],
		description: [
			'Deals severe Rock-type damage.', 
			'Causa daño severo de tipo Roca.', '造成严重的岩石属性伤害。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM' },
		price: 25000
	},
	tm20: {
		id: 20,
		key: 'tm20',
		move: move['confusion'],
		name: ['TM020 Confusion', 'MT020 Confusión', 'TM020 念力'],
		description: [
			'Deals light Psychic-type damage', 
			'Causa daño leve de tipo Psíquico.', '造成轻微的超能力属性伤害。'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM' },
		price: 500
	},
	tm21: {
		id: 21,
		key: 'tm21',
		move: move['waterGun'],
		name: ['TM021 Water Gun', 'MT021 Pistola agua', 'TM021 水枪'],
		description: [
			'Deals light Water-type damage.', 
			'Causa daño leve de tipo Agua.', '造成轻微的水属性伤害。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM' },
		price: 500
	},
	tm22: {
		id: 22,
		key: 'tm22',
		move: move['lowKick'],
		name: ['TM022 Low Kick', 'MT022 Patada baja', 'TM022 踢倒'],
		description: [
			'Deals light Fighting-type damage. Increases damage against higher-level targets.', 
			'Causa daño leve de tipo Lucha. Aumenta el daño contra objetivos de mayor nivel.', '造成轻微的格斗属性伤害。对等级更高的目标伤害增加。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM' },
		price: 500	
	},
	tm23: {
		id: 23,
		key: 'tm23',
		move: move['rockSlide'],
		name: ['TM023 Rock Slide', 'MT023 Avalancha', 'TM023 岩崩'],
		description: [
			'Deals severe Rock-type damage. May stun the target.', 
			'Causa daño severo de tipo Roca. Puede aturdir al objetivo.', '造成严重的岩石属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm24: {
		id: 24,
		key: 'tm24',
		move: move['wingAttack'],
		name: ['TM024 Wing Attack', 'MT024 Ataque ala', 'TM024 翅膀攻击'],
		description: [
			'Deals light Flying-type damage', 
			'Causa daño leve de tipo Volador.', '造成轻微的飞行属性伤害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm25: {
		id: 25,
		key: 'tm25',
		move: move['razorLeaf'],
		name: ['TM025 Razor Leaf', 'MT025 Hoja afilada', 'TM025 飞叶快刀'],
		description: [
			'Deals light Grass-type damage. Has a high chance to land a critical hit.', 
			'Causa daño leve de tipo Planta. Suele ser crítico.', '造成轻微的草属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm26: {
		id: 26,
		key: 'tm26',
		move: move['leechLife'],
		name: ['TM026 Leech Life', 'MT026 Chupavidas', 'TM026 吸血'],
		description: [
			'Deals very light Bug-type damage. Heals the user.', 
			'Causa daño muy leve de tipo Bicho. Cura al usuario.', '造成极轻微的虫属性伤害。回复使用者HP。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm27: {
		id: 27,
		key: 'tm27',
		move: move['petalDance'],
		name: ['TM027 Petal Dance', 'MT027 Danza pétalo', 'TM027 花瓣舞'],
		description: [
			'Deals devastating Grass-type damage. Hurts the user.', 
			'Causa daño devastador de tipo Planta. Daña al usuario.', '造成毁灭性的草属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 55000
	},
	tm28: {
		id: 28,
		key: 'tm28',
		move: move['astonish'],
		name: ['TM028 Astonish', 'MT028 Impresionar', 'TM028 惊吓'],
		description: [
			'Deals light Ghost-type damage. May stun the target.', 
			'Causa daño leve de tipo Fantasma. Puede aturdir al objetivo.', '造成轻微的幽灵属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-ghost.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm29: {
		id: 29,
		key: 'tm29',
		move: move['aquaTail'],
		name: ['TM029 Aqua Tail', 'MT029 Acua cola', 'TM029 水流尾'],
		description: [
			'Deals heavy Water-type damage.', 
			'Causa daño grave de tipo agua.', '造成沉重的水属性伤害。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm30: {
		id: 30,
		key: 'tm30',
		move: move['ironHead'],
		name: ['TM030 Iron Head', 'MT030 Cabeza de hierro', 'TM030 铁头'],
		description: [
			'Deals severe Steel-type damage. May stun the target.', 
			'Causa daño severo de tipo Acero. Puede aturdir al objetivo.', '造成严重的钢属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 35000
	},
	tm31: {
		id: 31,
		key: 'tm31',
		move: move['thunderShock'],
		name: ['TM031 Thunder Shock', 'MT031 Impactrueno', 'TM031 电击'],
		description: [
			'Deals light Electric-type damage. May stun the target.', 
			'Causa daño leve de tipo Electrico. Puede aturdir al objetivo.', '造成轻微的电属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm32: {
		id: 32,
		key: 'tm32',
		move: move['poisonSting'],
		name: ['TM032 Poison Sting', 'MT032 Picotazo veneno', 'TM032 毒针'],
		description: [
			'Deals very light Poison-type damage.', 
			'Causa daño muy leve de tipo Veneno.', '造成极轻微的毒属性伤害。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm33: {
		id: 33,
		key: 'tm33',
		move: move['stringShot'],
		name: ['TM033 String Shot', 'MT033 Disparo demora', 'TM033 吐丝'],
		description: [
			'Deals very light Bug-type damage. Slows the target.', 
			'Causa daño muy leve de tipo Bicho. Ralentiza al objetivo.', '造成极轻微的虫属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm34: {
		id: 34,
		key: 'tm34',
		move: move['flashCannon'],
		name: ['TM034 Flash Cannon', 'MT034 Foco resplandor', 'TM034 加农光炮'],
		description: [
			'Deals severe Steel-type damage', 
			'Causa daño severo de tipo Acero.', '造成严重的钢属性伤害。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 600 //25000
	},
	tm35: {
		id: 35,
		key: 'tm35',
		move: move['bulletPunch'],
		name: ['TM035 Bullet Punch', 'MT035 Puño bala', 'TM035 子弹拳'],
		description: [
			'Deals very light Steel-type damage. Increases the charge bar.', 
			'Causa daño muy leve de tipo Acero. Aumenta la barra de carga.', '造成极轻微的钢属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 35000
	},
	tm36: {
		id: 36,
		key: 'tm36',
		move: move['armThrust'],
		name: ['TM036 Arm Thrust', 'MT036 Empujón', 'TM036 猛推'],
		description: [
			'Deals light Fighting-type damage. Increases its damage when used repeatedly. May stun the target.', 
			'Causa daño leve de tipo lucha. Aumenta su daño al usarse repetidamente. Puede aturdir al objetivo.', '造成轻微的格斗属性伤害。连续使用时伤害增加。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm37: {
		id: 37,
		key: 'tm37',
		move: move['hydroPump'],
		name: ['TM037 Hydro Pump', 'MT037 Hidrobomba', 'TM037 水炮'],
		description: [
			'Deals devastating Water-type damage.', 
			'Causa daño devastador de tipo Agua.', '造成毁灭性的水属性伤害。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 50000
	},
	tm38: {
		id: 38,
		key: 'tm38',
		move: move['meteorMash'],
		name: ['TM038 Meteor Mash', 'MT038 Puño meteoro', 'TM038 彗星拳'],
		description: [
			'Deals heavy Steel-type damage.', 
			'Causa daño grave de tipo Acero.', '造成沉重的钢属性伤害。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm39: {
		id: 39,
		key: 'tm39',
		move: move['lowSweep'],
		name: ['TM039 Low Sweep', 'MT039 Puntapié', 'TM039 下盘踢'],
		description: [
			'Deals severe Fighting-type damage', 
			'Causa daño severo de tipo Lucha.', '造成严重的格斗属性伤害。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 10000	
	},
	tm40: {
		id: 40,
		key: 'tm40',
		move: move['rockThrow'],
		name: ['TM040 Rock Throw', 'MT040 Lanzarrocas', 'TM040 落石'],
		description: [
			'Deals moderate Rock-type damage.', 
			'Causa daño moderado de tipo Roca.', '造成中等的岩石属性伤害。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 2000
	},
	tm41: {
	    id: 41,
	    key: 'tm41',
	    move: move['metronome'],
	    name: ['TM041 Metronome', 'MT041 Metrónomo', 'TM041 挥指'],
	    description: [
	    	'Deals variable Normal-type damage.', 
	    	'Causa daño variable de tipo Normal.', '造成变化的一般属性伤害。'
	    ],
	    image: './assets/images/item/tm-normal.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 4000
	}, 
	tm42: {
	    id: 42,
	    key: 'tm42',
	    move: move['hornLeech'],
	    name: ['TM042 Horn Leech', 'MT042 Asta drenaje', 'TM042 木角'],
	    description: [
	    	'Deals severe Grass-type damage. Heals the user.', 
	    	'Causa daño severo de tipo Planta. Cura al usuario.', '造成严重的草属性伤害。回复使用者HP。'
	    ],
	    image: './assets/images/item/tm-grass.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 45000
	},
	tm43: {
	    id: 43,
	    key: 'tm43',
	    move: move['stomp'],
	    name: ['TM043 Stomp', 'MT043 Pisotón', 'TM043 踩踏'],
	    description: [
	    	'Deals severe Normal-type damage. May stun the target.', 
	    	'Causa daño severo de tipo Normal. Puede aturdir al objetivo.', '造成严重的一般属性伤害。可能使目标眩晕。'
	    ],
	    image: './assets/images/item/tm-normal.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 10000
	},
	tm44: {
	    id: 44,
	    key: 'tm44',
	    move: move['freezeDry'],
	    name: ['TM044 Freeze-Dry', 'MT044 Liofilización', 'TM044 冰冻干燥'],
	    description: [
	    	'Deals severe Ice-type damage. Super effective against Water-type.', 
	    	'Causa daño severo de tipo Hielo. Superefectivo contra el tipo Agua.', '造成严重的冰属性伤害。对水属性效果绝佳。'
	    ],
	    image: './assets/images/item/tm-ice.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 25000
	},
	tm45: {
		id: 45,
		key: 'tm45',
		move: move['falseSwipe'],
		name: ['TM045 False Swipe', 'MT045 Falso tortazo', 'TM045 点到为止'],
		description: [
			'Deals Normal-type damage. Allows capturing wild Pokémon.', 
			'Causa daño de tipo Normal. Permite capturar Pokémon salvajes.', '造成一般属性伤害。可以捕捉野生宝可梦。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 5000
	},
	tm46: {
		id: 46,
		key: 'tm46',
		move: move['karateChop'],
		name: ['TM046 Karate Chop', 'MT046 Golpe kárate', 'TM046 空手刀'],
		description: [
			'Deals moderate Fighting-type damage. Has a high chance to land a critical hit.', 
			'Causa daño moderado de tipo Lucha. Suele ser crítico.', '造成中等的格斗属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 5000	
	},
	tm47: {
	    id: 47,
	    key: 'tm47',
	    move: move['surf'],
	    name: ['TM047 Surf', 'MT047 Surf', 'TM047 冲浪'],
	    description: [
	    	'Deals heavy Water-type damage.', 
	    	'Causa daño grave de tipo Agua.', '造成沉重的水属性伤害。'
	    ],
	    image: './assets/images/item/tm-water.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 30000
	},
	tm48: {
	    id: 48,
	    key: 'tm48',
	    move: move['iceBeam'],
	    name: ['TM048 Ice Beam', 'MT048 Rayo hielo', 'TM048 冰冻光束'],
	    description: [
	    	'Deals heavy Ice-type damage.. May stun the target.', 
	    	'Causa daño Grave de tipo hielo. Puede aturdir al objetivo.', '造成沉重的冰属性伤害。可能使目标眩晕。'
	    ],
	    image: './assets/images/item/tm-ice.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 40000
	},
	tm49: {
		id: 49,
		key: 'tm49',
		move: move['furyCutter'],
		name: ['TM049 Fury Cutter', 'MT049 Corte furia', 'TM049 连续切'],
		description: [
			'Deals very light Bug-type damage. Increases its damage when used repeatedly.', 
			'Causa daño muy leve de tipo Bicho. Aumenta su daño al usarse repetidamente.', '造成极轻微的虫属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 200 //10000
	},
	tm50: {
		id: 50,
		key: 'tm50',
		move: move['twineedle'],
		name: ['TM050 Twineedle', 'MT050 Doble ataque', 'TM050 双针'],
		description: [
			'Deals light Bug-type damage. Increases its damage when used repeatedly.', 
			'Causa daño leve de tipo Bicho. Aumenta su daño al usarse repetidamente.', '造成轻微的虫属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm51: {
		id: 51,
		key: 'tm51',
		move: move['glare'],
		name: ['TM051 Glare', 'MT051 Deslumbrar', 'TM051 大蛇瞪眼'],
		description: [
			'Deals very light Normal-type damage. Stuns the target.', 
			'Causa daño muy leve de tipo Normal. Aturde al objetivo.', '造成极轻微的一般属性伤害。使目标眩晕。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm52: {
		id: 52,
		key: 'tm52',
		move: move['crossChop'],
		name: ['TM052 Cross Chop', 'MT052 Tajo cruzado', 'TM052 十字劈'],
		description: [
			'Deals heavy Fighting-type damage. Has a high chance to land a critical hit.', 
			'Causa daño grave de tipo Lucha. Suele ser crítico.', '造成沉重的格斗属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 45000	
	},
	tm53: {
		id: 53,
		key: 'tm53',
		move: move['acid'],
		name: ['TM053 Acid', 'MT053 Ácido', 'TM053 溶解液'],
		description: [
			'Deals light Poison-type damage. Super effective against Steel-type.', 
			'Causa daño leve de tipo Veneno. Superefectivo contra el tipo Acero.', '造成轻微的毒属性伤害。对钢属性效果绝佳。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm54: {
		id: 54,
		key: 'tm54',
		move: move['rollingKick'],
		name: ['TM054 Rolling Kick', 'MT054 Patada Giro', 'TM054 回旋踢'],
		description: [
			'Deals moderate Fighting-type damage. May stun the target.', 
			'Causa daño moderado de tipo Lucha. Puede aturdir al objetivo.', '造成中等的格斗属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 10000
	},
	tm55: {
		id: 55,
		key: 'tm55',
		move: move['aeroblast'],
		name: ['TM055 Aeroblast', 'MT055 Aerochorro', 'TM055 空气爆破'],
		description: [
			'Deals heavy Flying-type damage. Has a high chance to land a critical hit.', 
			'Causa daño grave de tipo Volador. Suele ser crítico.', '造成沉重的飞行属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 900 //45000
	},
	tm56: {
		id: 56,
		key: 'tm56',
		move: move['auroraBeam'],
		name: ['TM056 Aurora Beam', 'MT056 Rayo aurora', 'TM056 极光束'],
		description: [
			'Deals severe Ice-type damage', 
			'Causa daño severo de tipo hielo.', '造成严重的冰属性伤害。'
		],
		image: './assets/images/item/tm-ice.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 15000
	},
	tm57: {
		id: 57,
		key: 'tm57',
		move: move['aerialAce'],
		name: ['TM057 Aerial Ace', 'MT057 Golpe aéreo', 'TM057 燕返'],
		description: [
			'Deals moderate Flying-type damage.', 
			'Causa daño moderado de tipo Volador.', '造成中等的飞行属性伤害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm58: {
		id: 58,
		key: 'tm58',
		move: move['magnetBomb'],
		name: ['TM058 Magnet Bomb', 'MT058 Bomba imán', 'TM058 磁铁炸弹'],
		description: [
			'Deals moderate Steel-type damage.', 
			'Causa daño moderado de tipo Acero.', '造成中等的钢属性伤害。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm59: {
		id: 59,
		key: 'tm59',
		move: move['gust'],
		name: ['TM059 Gust', 'MT059 Tornado', 'TM059 起风'],
		description: [
			'Deals light Flying-type damage', 
			'Causa daño leve de tipo Volador.', '造成轻微的飞行属性伤害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm60: {
		id: 60,
		key: 'tm60',
		move: move['mudBomb'],
		name: ['TM060 Mud Bomb', 'MT060 Bomba fango', 'TM060 泥巴炸弹'],
		description: [
			'Deals severe Ground-type damage', 
			'Causa daño severo de tipo Tierra.', '造成严重的地面属性伤害。'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 12000
	},
	tm61: {
		id: 61,
		key: 'tm61',
		move: move['thunderPunch'],
		name: ['TM061 Thunder Punch', 'MT061 Puño trueno', 'TM061 雷电拳'],
		description: [
			'Deals severe Electric-type damage. May stun the target.', 
			'Causa daño severo de tipo Electrico. Puede aturdir al objetivo.', '造成严重的电属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm62: {
		id: 62,
		key: 'tm62',
		move: move['icyWind'],
		name: ['TM062 Icy Wind', 'MT062 Viento hielo', 'TM062 冰冻之风'],
		description: [
			'Deals moderate Ice-type damage. Increases the charge bar.', 
			'Causa daño moderado de tipo Hielo. Aumenta la barra de carga.', '造成中等的冰属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-ice.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm63: {
		id: 63,
		key: 'tm63',
		move: move['lick'],
		name: ['TM063 Lick', 'MT063 Lengüetazo', 'TM063 舌舔'],
		description: [
			'Deals light Ghost-type damage. May stun the target.', 
			'Causa daño leve de tipo Fantasma. Puede aturdir al objetivo.', '造成轻微的幽灵属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-ghost.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm64: {
		id: 64,
		key: 'tm64',
		move: move['zenHeadbutt'],
		name: ['TM064 Zen Headbutt', 'MT064 Cabezazo zen', 'TM064 意念头锤'],
		description: [
			'Deals severe Psychic-type damage. May stun the target.', 
			'Causa daño severo de tipo Psíquico. Puede aturdir al objetivo.', '造成严重的超能力属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 35000
	},
	tm65: {
		id: 65,
		key: 'tm65',
		move: move['esperWing'],
		name: ['TM065 Esper Wing', 'MT065 Ala aural', 'TM065 超能之翼'],
		description: [
			'Deals severe Psychic-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Psíquico. Suele ser crítico.', '造成严重的超能力属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm66: {
		id: 66,
		key: 'tm66',
		move: move['iceBall'],
		name: ['TM066 Ice Ball', 'MT066 Bola hielo', 'TM066 冰球'],
		description: [
			'Deals light Ice-type damage. Increases its damage when used repeatedly.', 
			'Causa daño leve de tipo Hielo. Aumenta su daño al usarse repetidamente.', '造成轻微的冰属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-ice.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm67: {
		id: 67,
		key: 'tm67',
		move: move['bodySlam'],
		name: ['TM067 Body Slam', 'MT067 Golpe Cuerpo', 'TM067 泰山压顶'],
		description: [
			'Deals heavy Nomal-type damage. May stun the target.', 
			'Causa daño grave de tipo Normal. Puede aturdir al objetivo.', '造成沉重的一般属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm68: {
		id: 68,
		key: 'tm68',
		move: move['swift'],
		name: ['TM068 Swift', 'MT068 Rapidez', 'TM068 高速星星'],
		description: [
			'Deals moderate Normal-type damage. Increases the charge bar.', 
			'Causa daño moderado de tipo Normal. Aumenta la barra de carga.', '造成中等的一般属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm69: {
		id: 69,
		key: 'tm69',
		move: move['earthquake'],
		name: ['TM069 Earthquake', 'MT069 Terremoto', 'TM069 地震'],
		description: [
			'Deals heavy Ground-type damage.', 
			'Causa daño grave de tipo Tierra.', '造成沉重的地面属性伤害。'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 50000
	},
	tm70: {
		id: 70,
		key: 'tm70',
		move: move['feintAttack'],
		name: ['TM070 Feint Attack', 'MT070 Finta', 'TM070 暗算'],
		description: [
			'Deals moderate Dark-type damage. Its damage depends on Speed.', 
			'Causa daño moderado de tipo Siniestro. Su daño depende de la Velocidad.', '造成中等的恶属性伤害。伤害取决于速度。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 10000
	},
	tm71: {
		id: 71,
		key: 'tm71',
		move: move['superpower'],
		name: ['TM071 Superpower', 'MT071 Fuerza bruta', 'TM071 蛮力'],
		description: [
			'Deals devastating Fighting-type damage. Stuns the user.', 
			'Causa daño devastador de tipo Lucha. Aturde al usuario.', '造成毁灭性的格斗属性伤害。使用者被眩晕。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 55000
	},
	tm72: {
		id: 72,
		key: 'tm72',
		move: move['grassPledge'],
		name: ['TM072 Grass Pledge', 'MT072 Voto planta', 'TM072 草之誓约'],
		description: [
			'Deals light Grass-type damage. Increases damage against higher-level targets.', 
			'Causa daño leve de tipo Planta. Aumenta el daño contra objetivos de mayor nivel.', '造成轻微的草属性伤害。对等级更高的目标伤害增加。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1500
	},
	tm73: {
		id: 73,
		key: 'tm73',
		move: move['firePledge'],
		name: ['TM073 Fire Pledge', 'MT073 Voto fuego', 'TM073 火之誓约'],
		description: [
			'Deals light Fire-type damage. Increases damage against higher-level targets.', 
			'Causa daño leve de tipo Fuego. Aumenta el daño contra objetivos de mayor nivel.', '造成轻微的火属性伤害。对等级更高的目标伤害增加。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1500
	},
	tm74: {
		id: 74,
		key: 'tm74',
		move: move['waterPledge'],
		name: ['TM074 Water Pledge', 'MT074 Voto agua', 'TM074 水之誓约'],
		description: [
			'Deals light Water-type damage. Increases damage against higher-level targets.', 
			'Causa daño leve de tipo Agua. Aumenta el daño contra objetivos de mayor nivel.', '造成轻微的水属性伤害。对等级更高的目标伤害增加。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1500
	},
	tm75: {
	    id: 75,
	    key: 'tm75',
	    move: move['flameWheel'],
	    name: ['TM075 Flame Wheel', 'MT075 Rueda fuego', 'TM075 火焰轮'],
	    description: [
	    	'Deals moderate Fire-type damage. Increases the charge bar.', 
	    	'Causa daño moderado de tipo Fuego. Aumenta la barra de carga.', '造成中等的火属性伤害。加快蓄力条。'
	    ],
	    image: './assets/images/item/tm-fire.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 12000
	},
	tm76: {
	    id: 76,
	    key: 'tm76',
	    move: move['extremeSpeed'],
	    name: ['TM076 Extreme Speed', 'MT076 Velocidad extrema', 'TM076 神速'],
	    description: [
	    	'Deals severe Normal-type damage. Increases the charge bar.', 
	    	'Causa daño severo de tipo Normal. Aumenta la barra de carga.', '造成严重的一般属性伤害。加快蓄力条。'
	    ],
	    image: './assets/images/item/tm-normal.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 700 //35000
	},
	tm77: {
	    id: 77,
	    key: 'tm77',
	    move: move['bubbleBeam'],
	    name: ['TM077 Bubble Beam', 'MT077 Rayo burbuja', 'TM077 泡沫光线'],
	    description: [
	    	'Deals severe Water-type damage. Slows the target.', 
	    	'Causa daño severo de tipo Agua. Ralentiza al objetivo.', '造成严重的水属性伤害。使目标减速。'
	    ],
	    image: './assets/images/item/tm-water.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 10000
	},
	tm78: {
	    id: 78,
	    key: 'tm78',
	    move: move['energyBall'],
	    name: ['TM078 Energy Ball', 'MT078 Energibola', 'TM078 能量球'],
	    description: [
	    	'Deals severe Grass-type damage', 
	    	'Causa daño severo de tipo Planta.', '造成严重的草属性伤害。'
	    ],
	    image: './assets/images/item/tm-grass.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 30000
	},
	tm79: {
	    id: 79,
	    key: 'tm79',
	    move: move['shockWave'],
	    name: ['TM079 Shock Wave', 'MT079 Onda voltio', 'TM079 电击波'],
	    description: [
	    	'Deals moderate Electric-type damage.', 
	    	'Causa daño moderado de tipo Electrico.', '造成中等的电属性伤害。'
	    ],
	    image: './assets/images/item/tm-electric.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 8000
	},
	tm80: {
	    id: 80,
	    key: 'tm80',
	    move: move['megaDrain'],
	    name: ['TM080 Mega Drain', 'MT080 Megaagotar', 'TM080 超级吸取'],
	    description: [
	    	'Deals light Grass-type damage. Heals the user.', 
	    	'Causa daño leve de tipo Planta. Cura al usuario.', '造成轻微的草属性伤害。回复使用者HP。'
	    ],
	    image: './assets/images/item/tm-grass.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 8000
	},
	tm81: {
		id: 81,
		key: 'tm81',
		move: move['payback'],
		name: ['TM081 Payback', 'MT081 Vendetta', 'TM081 以牙还牙'],
		description: [
			'Deals light Dark-type damage. Increases its damage for each fainted ally.', 
			'Causa daño leve de tipo siniestro. Aumenta su daño por cada aliado debilitado.', '造成轻微的恶属性伤害。每个倒下的队友增加伤害。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 12000
	},
	tm82: {
		id: 82,
		key: 'tm82',
		move: move['megahorn'],
		name: ['TM082 Megahorn', 'MT082 Megacuerno', 'TM082 超级角击'],
		description: [
			'Deals devastating Bug-type damage.', 
			'Causa daño devastador de tipo Bicho.', '造成毁灭性的虫属性伤害。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 60000
	},
	tm83: {
		id: 83,
		key: 'tm83',
		move: move['pound'],
		name: ['TM083 Pound', 'MT083 Destructor', 'TM083 拍击'],
		description: [
			'Deals light Normal-type damage.', 
			'Causa daño leve de tipo Normal.', '造成轻微的一般属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 500
	},
	tm84: {
		id: 84,
		key: 'tm84',
		move: move['hyperVoice'],
		name: ['TM084 Hyper Voice', 'MT084 Vozarrón', 'TM084 巨声'],
		description: [
			'Deals heavy Normal-type damage.', 
			'Causa daño grave de tipo Normal.', '造成沉重的一般属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm85: {
		id: 85,
		key: 'tm85',
		move: move['fireBlast'],
		name: ['TM085 Fire Blast', 'MT085 Llamarada', 'TM085 大字爆炎'],
		description: [
			'Deals devastating Fire-type damage.', 
			'Causa daño devastador de tipo Fuego.', '造成毁灭性的火属性伤害。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 55000
	},
	tm86: {
		id: 86,
		key: 'tm86',
		move: move['flameThrower'],
		name: ['TM086 Flame Thrower', 'MT086 Lanzallamas', 'TM086 喷射火焰'],
		description: [
			'Deals heavy Fire-type damage.', 
			'Causa daño grave de tipo Fuego.', '造成沉重的火属性伤害。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm87: {
		id: 87,
		key: 'tm87',
		move: move['rollout'],
		name: ['TM087 Rollout', 'MT087 Desenrollar', 'TM087 滚动'],
		description: [
			'Deals light Rock-type damage. Increases its damage when used repeatedly.', 
			'Causa daño leve de tipo Roca. Aumenta su daño al usarse repetidamente.', '造成轻微的岩石属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm88: {
		id: 88,
		key: 'tm88',
		move: move['slash'],
		name: ['TM088 Slash', 'MT088 Cuchillada', 'TM088 劈开'],
		description: [
			'Deals severe Normal-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Normal. Suele ser crítico.', '造成严重的一般属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 15000
	},
	tm89: {
		id: 89,
		key: 'tm89',
		move: move['wildCharge'],
		name: ['TM089 Wild Charge', 'MT089 Voltio Cruel', 'TM089 疯狂伏特'],
		description: [
			'Deals heavy Electric-type damage. Hurts the user.', 
			'Causa daño grave de tipo Electrico. Daña al usuario.', '造成沉重的电属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 600 //30000
	},
	tm90: {
		id: 90,
		key: 'tm90',
		move: move['psychic'],
		name: ['TM090 Psychic', 'MT090 Psíquico', 'TM090 精神强念'],
		description: [
			'Deals heavy Psychic-type damage.', 
			'Causa daño grave de tipo Psíquico.', '造成沉重的超能力属性伤害。'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 45000
	},
	tm91: {
		id: 91,
		key: 'tm91',
		move: move['poisonJab'],
		name: ['TM091 Poison Jab', 'MT091 Puya nociva', 'TM091 毒击'],
		description: [
			'Deals severe Flying-type damage', 
			'Causa daño severo de tipo Veneno.', '造成严重的飞行属性伤害。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm92: {
		id: 92,
		key: 'tm92',
		move: move['silverWind'],
		name: ['TM092 Silver Wind', 'MT092 Viento plata', 'TM092 银色旋风'],
		description: [
			'Deals moderate Bug-type damage.', 
			'Causa daño moderado de tipo Bicho.', '造成中等的虫属性伤害。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm93: {
	    id: 93,
	    key: 'tm93',
	    move: move['mudSlap'],
	    name: ['TM093 Mud Slap', 'MT093 Bofetón lodo', 'TM093 泼泥'],
	    description: ['Deals light Ground-type damage', 'Causa daño leve de tipo Tierra.', '造成轻微的地面属性伤害。'],
	    image: './assets/images/item/tm-ground.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 500
	},
	tm94: {
	    id: 94,
	    key: 'tm94',
	    move: move['magnitude'],
	    name: ['TM094 Magnitude', 'MT094 Magnitud', 'TM094 震级'],
	    description: ['Deals variable Ground-type damage.', 'Causa daño variable de tipo Tierra.', '造成变化的地面属性伤害。'],
	    image: './assets/images/item/tm-ground.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 12000
	},
	tm95: {
	    id: 95,
	    key: 'tm95',
	    move: move['xScissor'],
	    name: ['TM095 X-Scissor', 'MT095 Tijera X', 'TM095 十字剪'],
	    description: [
	    	'Deals severe Bug-type damage. Has a high chance to land a critical hit.', 
	    	'Causa daño severo de tipo Bicho. Suele ser crítico.', '造成严重的虫属性伤害。高几率击中要害。'
	    ],
	    image: './assets/images/item/tm-bug.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 25000
	},
	tm96: {
	    id: 96,
	    key: 'tm96',
	    move: move['bugBuzz'],
	    name: ['TM096 Bug Buzz', 'MT096 Zumbido', 'TM096 虫鸣'],
	    description: [
	    	'Deals severe Bug-type damage', 
	    	'Causa daño severo de tipo Bicho.', '造成严重的虫属性伤害。'
	    ],
	    image: './assets/images/item/tm-bug.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 30000
	},
	tm97: {
	    id: 97,
	    key: 'tm97',
	    move: move['sludgeBomb'],
	    name: ['TM097 Sludge Bomb', 'MT097 Bomba lodo', 'TM097 污泥炸弹'],
	    description: [
	    	'Deals heavy Poison-type damage. Super effective against Ground-type.', 
	    	'Causa daño grave de tipo Veneno. Superefectivo contra el tipo Tierra.', '造成沉重的毒属性伤害。对地面属性效果绝佳。'
	    ],
	    image: './assets/images/item/tm-poison.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 35000
	},
	tm98: {
	    id: 98,
	    key: 'tm98',
	    move: move['absorb'],
	    name: ['TM098 Absorb', 'MT098 Absorber', 'TM098 吸取'],
	    description: [
	    	'Deals very light Grass-type damage. Heals the user.', 
	    	'Causa daño muy leve de tipo Planta. Cura al usuario.', '造成极轻微的草属性伤害。回复使用者HP。'
	    ],
	    image: './assets/images/item/tm-grass.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 2000
	},
	tm99: {
	    id: 99,
	    key: 'tm99',
	    move: move['airSlash'],
	    name: ['TM099 Air Slash', 'MT099 Aire afilado', 'TM099 空气斩'],
	    description: [
	    	'Deals severe Flying-type damage. Has a high chance to land a critical hit.', 
	    	'Causa daño severo de tipo Volador. Suele ser crítico.', '造成严重的飞行属性伤害。高几率击中要害。'
	    ],
	    image: './assets/images/item/tm-flying.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 27000
	},
	tm100: {
	    id: 100,
	    key: 'tm100',
	    move: move['poisonFang'],
	    name: ['TM100 Poison Fang', 'MT100 Colmillo veneno', 'TM100 剧毒牙'],
	    description: [
	    	'Deals moderate Poison-type damage. Restores HP if it knocks out the target.', 
	    	'Causa daño moderado de tipo Veneno. Recupera PS si debilita al objetivo.', '造成中等的毒属性伤害。击倒目标时回复HP。'
	    ],
	    image: './assets/images/item/tm-poison.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 160 //8000
	},
	tm101: {
	    id: 101,
	    key: 'tm101',
	    move: move['shadowBall'],
	    name: ['TM101 Shadow Ball', 'MT101 Bola sombra', 'TM101 暗影球'],
	    description: ['Deals severe Ghost-type damage', 'Causa daño severo de tipo Fantasma.', '造成严重的幽灵属性伤害。'],
	    image: './assets/images/item/tm-ghost.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 25000
	},
	tm102: {
	    id: 102,
	    key: 'tm102',
	    move: move['ironTail'],
	    name: ['TM102 Iron Tail', 'MT102 Cola férrea', 'TM102 铁尾'],
	    description: [
	    	'Deals heavy Steel-type damage.', 
	    	'Causa daño grave de tipo Acero.', '造成沉重的钢属性伤害。'
	    ],
	    image: './assets/images/item/tm-steel.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 50000
	},
	tm103: {
	    id: 103,
	    key: 'tm103',
	    move: move['darkPulse'],
	    name: ['TM103 Dark Pulse', 'MT103 Pulso umbrío', 'TM103 恶之波动'],
	    description: [
	    	'Deals heavy Dark-type damage. May stun the target.', 
	    	'Causa daño grave de tipo Siniestro. Puede aturdir al objetivo.', '造成沉重的恶属性伤害。可能使目标眩晕。'
	    ],
	    image: './assets/images/item/tm-dark.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 27000
	},
	tm104: {
	    id: 104,
	    key: 'tm104',
	    move: move['crabhammer'],
	    name: ['TM101 Crabhammer', 'MT104 Martillazo', 'TM101 蟹钳锤'],
	    description: [
	    	'Deals heavy Water-type damage. Has a high chance to land a critical hit.', 
	    	'Causa daño grave de tipo Agua. Suele ser crítico.', '造成沉重的水属性伤害。高几率击中要害。'
	    ],
	    image: './assets/images/item/tm-water.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 54000
	},
	tm105: {
	    id: 105,
	    key: 'tm105',
	    move: move['solarBeam'],
	    name: ['TM105 Solar Beam', 'MT105 Rayo solar', 'TM105 日光束'],
	    description: [
	    	'Deals devastating Grass-type damage. Stuns the user.', 
	    	'Causa daño devastador de tipo Planta. Aturde al usuario.', '造成毁灭性的草属性伤害。使用者被眩晕。'
	    ],
	    image: './assets/images/item/tm-grass.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 58000
	},
	tm106: {
	    id: 106,
	    key: 'tm106',
	    move: move['fly'],
	    name: ['TM106 Fly', 'MT106 Vuelo', 'TM106 飞翔'],
	    description: [
	    	'Deals heavy Flying-type damage.', 
	    	'Causa daño grave de tipo Volador.', '造成沉重的飞行属性伤害。'
	    ],
	    image: './assets/images/item/tm-flying.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 30000
	},
	tm107: {
	    id: 107,
	    key: 'tm107',
	    move: move['jumpKick'],
	    name: ['TM107 Jump Kick', 'MT107 Patada salto', 'TM107 飞踢'],
	    description: [
	    	'Deals heavy Fighting-type damage. Hurts the user.', 
	    	'Causa daño grave de tipo Lucha. Daña al usuario.', '造成沉重的格斗属性伤害。使用者受到反伤。'
	    ],
	    image: './assets/images/item/tm-fighting.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 45000
	},
	tm108: {
	    id: 108,
	    key: 'tm108',
	    move: move['bonemerang'],
	    name: ['TM108 Bonemerang', 'MT108 Huesomerang', 'TM108 骨棒回旋镖'],
	    description: [
	    	'Deals severe Ground-type damage.', 
	    	'Causa daño severo de tipo Tierra.', '造成严重的地面属性伤害。'
	    ],
	    image: './assets/images/item/tm-ground.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 40000
	},
	tm109: {
	    id: 109,
	    key: 'tm109',
	    move: move['cometPunch'],
	    name: ['TM109 Comet Punch', 'MT109 Puño cometa', 'TM109 连续拳'],
	    description: [
	    	'Deals severe Normal-type damage', 
	    	'Causa daño severo de tipo Normal.', '造成严重的一般属性伤害。'
	    ],
	    image: './assets/images/item/tm-normal.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 10000
	},
	tm110: {
	    id: 110,
	    key: 'tm110',
	    move: move['smokeScreen'],
	    name: ['TM110 Smoke Screen', 'MT110 Pantalla humo', 'TM110 烟幕'],
	    description: [
	    	'Deals very light Fire-type damage. Slows the target.', 
	    	'Causa daño muy leve de tipo Fuego. Ralentiza al objetivo.', '造成极轻微的火属性伤害。使目标减速。'
	    ],
	    image: './assets/images/item/tm-fire.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 500
	},
	tm111: {
	    id: 111,
	    key: 'tm111',
	    move: move['highJumpKick'],
	    name: ['TM111 High Jump Kick', 'MT111 Patada salto alta', 'TM111 飞膝踢'],
	    description: [
	    	"Deals devastating Fighting-type damage. Hurts the user.", 
	    	'Causa daño devastador de tipo Lucha. Daña al usuario.'
	    ],image: './assets/images/item/tm-fighting.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 60000
	},
	tm112: {
	    id: 112,
	    key: 'tm112',
	    move: move['eggBomb'],
	    name: ['TM112 Egg Bomb', 'MT112 Bomba huevo', 'TM112 炸蛋'],
	    description: ['Deals heavy Normal-type damage.', 'Causa daño grave de tipo Normal.', '造成沉重的一般属性伤害。'],
	    image: './assets/images/item/tm-normal.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 48000
	},
	tm113: {
	    id: 113,
	    key: 'tm113',
	    move: move['dragonBreath'],
	    name: ['TM113 Dragon Breath', 'MT113 Dragoaliento', 'TM113 龙息'],
	    description: [
	    	'Deals moderate Dragon-type damage.', 
	    	'Causa daño moderado de tipo Dragón.', '造成中等的龙属性伤害。'
	    ],
	    image: './assets/images/item/tm-dragon.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 14000
	},
	tm114: {
	    id: 114,
	    key: 'tm114',
	    move: move['boneClub'],
	    name: ['TM114 Bone Club', 'MT114 Hueso palo', 'TM114 骨棒'],
	    description: [
	    	'Deals moderate Ground-type damage. May stun the target.', 
	    	'Causa daño moderado de tipo Tierra. Puede aturdir al objetivo.', '造成中等的地面属性伤害。可能使目标眩晕。'
	    ],
	    image: './assets/images/item/tm-ground.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 11000
	},
	tm115: {
	    id: 115,
	    key: 'tm115',
	    move: move['tropicalKick'],
	    name: ['TM115 Tropical Kick', 'MT115 Patada Tropical', 'TM115 热带踢'],
	    description: [
	    	'Deals severe Grass-type damage', 
	    	'Causa daño severo de tipo Planta.', '造成严重的草属性伤害。'
	    ],
	    image: './assets/images/item/tm-grass.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 25000
	},
	tm116: {
	    id: 116,
	    key: 'tm116',
	    move: move['drainPunch'],
	    name: ['TM116 Drain Punch', 'MT116 Puño drenaje', 'TM116 吸取拳'],
	    description: [
	    	'Deals moderate Fighting-type damage. Heals the user.', 
	    	'Causa daño moderado de tipo Lucha. Cura al usuario.', '造成中等的格斗属性伤害。回复使用者HP。'
	    	],
	    image: './assets/images/item/tm-fighting.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 50000
	},
	tm117: {
	    id: 117,
	    key: 'tm117',
	    move: move['constrict'],
	    name: ['TM117 Constrict', 'MT117 Constricción', 'TM117 缠绕'],
	    description: [
	    	'Deals very light Normal-type damage. May stun the target.', 
	    	'Causa daño muy leve de tipo Normal. Puede aturdir al objetivo.', '造成极轻微的一般属性伤害。可能使目标眩晕。'
	    ],
	    image: './assets/images/item/tm-normal.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 500
	},
	tm118: {
		id: 118,
		key: 'tm118',
		move: move['iceFang'],
		name: ['TM118 Ice Fang', 'MT118 Colmillo hielo', 'TM118 冰冻牙'],
		description: [
			'Deals severe Ice-type damage. May stun the target.', 
			'Causa daño severo de tipo Hielo. Puede aturdir al objetivo.', '造成严重的冰属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-ice.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm119: {
		id: 119,
		key: 'tm119',
		move: move['icePunch'],
		name: ['TM119 Ice Punch', 'MT119 Puño hielo', 'TM119 冰冻拳'],
		description: [
			'Deals severe Ice-type damage. Slows the target.', 
			'Causa daño severo de tipo Hielo. Ralentiza al objetivo.', '造成严重的冰属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-ice.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm120: {
		id: 120,
		key: 'tm120',
		move: move['hornAttack'],
		name: ['TM120 Horn Attack', 'MT120 Cornada', 'TM120 角撞'],
		description: [
			'Deals severe Normal-type damage', 
			'Causa daño severo de tipo Normal.', '造成严重的一般属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 9000
	},
	tm121: {
	    id: 121,
	    key: 'tm121',
	    move: move['thunder'],
	    name: ['TM121 Thunder', 'MT121 Trueno', 'TM121 打雷'],
	    description: ['Deals devastating Electric-type damage.', 'Causa daño devastador de tipo Electrico.', '造成毁灭性的电属性伤害。'],
	    image: './assets/images/item/tm-electric.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 55000
	},
	tm122: {
		id: 122,
		key: 'tm122',
		move: move['outrage'],
		name: ['TM122 Outrage', 'MT122 Enfado', 'TM122 逆鳞'],
		description: [
			'"Deals devastating Dragon-type damage. Hurts the user."', 
			'Causa daño devastador de tipo Dragón. Daña al usuario.',
			'造成毁灭性的龙属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-dragon.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 55000
	},
	tm123: {
		id: 123,
		key: 'tm123',
		move: move['thunderbolt'],
		name: ['TM123 Thunderbolt', 'MT123 Rayo', 'TM123 十万伏特'],
		description: [
			'Deals heavy Electric-type damage. May stun the target.', 
			'Causa daño grave de tipo Electrico. Puede aturdir al objetivo.', '造成沉重的电属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 33000
	},
	tm124: {
		id: 124,
		key: 'tm124',
		move: move['drillRun'],
		name: ['TM124 Drill Run', 'MT124 Taladradora', 'TM124 直冲钻'],
		description: [
			'Deals severe Ground-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Tierra. Suele ser crítico.', '造成严重的地面属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 27000
	},
	tm125: {
	    id: 125,
	    key: 'tm125',
	    move: move['firePunch'],
	    name: ['TM125 Fire Punch', 'MT125 Puño fuego', 'TM125 火焰拳'],
	    description: [
	    	'Deals severe Fire-type damage. Restores HP if it knocks out the target.', 
	    	'Causa daño severo de tipo Fuego. Recupera PS si debilita al objetivo.', '造成严重的火属性伤害。击倒目标时回复HP。'
	    ],
	    image: './assets/images/item/tm-fire.png',
	    target: 'pokemon',
	    type: 'tm',
	    use: { effect: 'learnTM'},
	    price: 25000
	},
	tm126: {
		id: 126,
		key: 'tm126',
		move: move['earthPower'],
		name: ['TM126 Earthpower', 'MT126 Tierra viva', 'TM126 大地之力'],
		description: [
			'Deals heavy Ground-type damage.', 
			'Causa daño grave de tipo Tierra.', '造成沉重的地面属性伤害。'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 600 //30000
	},
	tm127: {
		id: 127,
		key: 'tm127',
		move: move['hurricane'],
		name: ['TM127 Hurricane', 'MT127 Vendaval', 'TM127 暴风'],
		description: [
			'Deals devastating Flying-type damage.', 
			'Causa daño devastador de tipo Volador.', '造成毁灭性的飞行属性伤害。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 55000
	},
	tm128: {
		id: 128,
		key: 'tm128',
		move: move['ancientPower'],
		name: ['TM128 Ancient Power', 'MT128 Poder pasado', 'TM128 原始之力'],
		description: [
			'Deals moderate Rock-type damage.', 
			'Causa daño moderado de tipo Roca.', '造成中等的岩石属性伤害。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm129: {
		id: 129,
		key: 'tm129',
		move: move['aquaJet'],
		name: ['TM129 Aqua Jet', 'MT129 Aqua jet', 'TM129 水流喷射'],
		description: [
			'Deals light Water-type damage. Increases the charge bar.', 
			'Causa daño leve de tipo Agua. Aumenta la barra de carga.', '造成轻微的水属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 5000
	},
	tm130: {
		id: 130,
		key: 'tm130',
		move: move['signalBeam'],
		name: ['TM130 Signal Beam', 'MT130 Rayo señal', 'TM130 信号光束'],
		description: [
			'Deals severe Bug-type damage', 
			'Causa daño severo de tipo Bicho.', '造成严重的虫属性伤害。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 22000
	},
	tm131: {
		id: 131,
		key: 'tm131',
		move: move['stoneEdge'],
		name: ['TM131 Stone Edge', 'MT131 Roca afilada', 'TM131 尖石攻击'],
		description: [
			'Deals heavy Rock-type damage. Has a high chance to land a critical hit.', 
			'Causa daño grave de tipo Roca. Suele ser crítico.', '造成沉重的岩石属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 53000
	},
	tm132: {
		id: 132,
		key: 'tm132',
		move: move['twister'],
		name: ['TM132 Twister', 'MT132 Ciclón', 'TM132 龙卷风'],
		description: [
			'Deals light Dragon-type damage', 
			'Causa daño leve de tipo Dragón.', '造成轻微的龙属性伤害。'
		],
		image: './assets/images/item/tm-dragon.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 4000
	},
	tm133: {
		id: 133,
		key: 'tm133',
		move: move['auraSphere'],
		name: ['TM133 Aura Sphere', 'MT133 Esfera aural', 'TM133 波导弹'],
		description: [
			'Deals severe Fighting-type damage', 
			'Causa daño severo de tipo Lucha.', '造成严重的格斗属性伤害。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 26000
	},
	tm134: {
		id: 134,
		key: 'tm134',
		move: move['dragonPulse'],
		name: ['TM134 Dragon Pulse', 'MT134 Pulso dragón', 'TM134 龙之波动'],
		description: [
			'Deals heavy Dragon-type damage.', 
			'Causa daño grave de tipo Dragón.', '造成沉重的龙属性伤害。'
		],
		image: './assets/images/item/tm-dragon.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 30000
	},
	tm135: {
		id: 135,
		key: 'tm135',
		move: move['spark'],
		name: ['TM135 Spark', 'MT135 Chispa', 'TM135 电火花'],
		description: [
			'Deals severe Electric-type damage. May stun the target.', 
			'Causa daño severo de tipo Electrico. Puede aturdir al objetivo.', '造成严重的电属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 11000
	},
	tm136: {
		id: 136,
		key: 'tm136',
		move: move['magicalLeaf'],
		name: ['TM136 Magical Leaf', 'MT136 Hoja mágica', 'TM136 魔法叶'],
		description: [
			'Deals moderate Grass-type damage.', 
			'Causa daño moderado de tipo Planta.', '造成中等的草属性伤害。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm137: {
		id: 137,
		key: 'tm137',
		move: move['gunkShot'],
		name: ['TM137 Gunk Shot', 'MT137 Lanzamugre', 'TM137 垃圾射击'],
		description: [
			'Deals devastating Poison-type damage.', 
			'Causa daño devastador de tipo Veneno.', '造成毁灭性的毒属性伤害。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 60000
	},
	tm138: {
		id: 138,
		key: 'tm138',
		move: move['shadowClaw'],
		name: ['TM138 Shadow Claw', 'MT138 Garra umbría', 'TM138 暗影爪'],
		description: [
			'Deals severe Dark-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Siniestro. Suele ser crítico.', '造成严重的恶属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 460 //23000
	},
	tm139: {
		id: 139,
		key: 'tm139',
		move: move['snarl'],
		name: ['TM139 Snarl', 'MT139 Alarido', 'TM139 大声咆哮'],
		description: [
			'Deals moderate Dark-type damage.', 
			'Causa daño moderado de tipo Siniestro.', '造成中等的恶属性伤害。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm140: {
		id: 140,
		key: 'tm140',
		move: move['eruption'],
		name: ['TM140 Eruption', 'MT140 Erupción', 'TM140 喷火'],
		description: [
			'Deals devastating Fire-type damage. Hurts the user.', 
			'Causa daño devastador de tipo fuego. Daña al usuario.', '造成毁灭性的火属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 65000
	},
	tm141: {
		id: 141,
		key: 'tm141',
		move: move['crunch'],
		name: ['TM141 Crunch', 'MT141 Triturar', 'TM141 咬碎'],
		description: [
			'Deals severe Dark-type damage', 
			'Causa daño severo de tipo Siniestro.', '造成严重的恶属性伤害。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm142: {
		id: 142,
		key: 'tm142',
		move: move['venoShock'],
		name: ['TM142 Veno Shock', 'MT142 Carga tóxica', 'TM142 毒液冲击'],
		description: [
			'Deals light Poison-type damage. Increases its damage when used repeatedly.', 
			'Causa daño leve de tipo Veneno. Aumenta su daño al usarse repetidamente.', '造成轻微的毒属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 28000
	},
	tm143: {
		id: 143,
		key: 'tm143',
		move: move['shadowSneak'],
		name: ['TM143 Shadow Sneak', 'MT143 Sombra vil', 'TM143 影子偷袭'],
		description: [
			'Deals light Ghost-type damage. Increases the charge bar.', 
			'Causa daño leve de tipo Fantasma. Aumenta la barra de carga.', '造成轻微的幽灵属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-ghost.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 3000
	},
	tm144: {
		id: 144,
		key: 'tm144',
		move: move['crossPoison'],
		name: ['TM144 Cross Poison', 'MT144 Veneno X', 'TM144 十字毒刃'],
		description: [
			'Deals severe Poison-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Veneno. Suele ser crítico.', '造成严重的毒属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 460 //23000
	},
	tm145: {
		id: 145,
		key: 'tm145',
		move: move['electroBall'],
		name: ['TM145 Electro Ball', 'MT145 Bola voltio', 'TM145 电球'],
		description: [
			'Deals moderate Electric-type damage. Its damage depends on Speed.', 
			'Causa daño moderado de tipo Electrico. Su daño depende de la Velocidad.', '造成中等的电属性伤害。伤害取决于速度。' 
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 160 // 8000
	},
	tm146: {
		id: 146,
		key: 'tm146',
		move: move['foulPlay'],
		name: ['TM146 Foul Play', 'MT146 Juego sucio', 'TM146 欺诈'],
		description: [
			'Deals heavy Dark-type damage.', 
			'Causa daño grave de tipo Siniestro. Su daño depende del Ataque enemigo.', '造成沉重的恶属性伤害。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 50000
	},
	tm147: {
		id: 147,
		key: 'tm147',
		move: move['sludgeWave'],
		name: ['TM147 Sludge Wave', 'MT147 Onda tóxica', 'TM147 污泥波'],
		description: [
			'Deals heavy Poison-type damage.', 
			'Causa daño grave de tipo Veneno.', '造成沉重的毒属性伤害。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 50000
	},
	tm148: {
		id: 148,
		key: 'tm148',
		move: move['gigaDrain'],
		name: ['TM148 Giga Drain', 'MT148 Gigadrenado', 'TM148 终极吸取'],
		description: [
			'Deals severe Poison-type damage. Heals the user.', 
			'Causa daño severo de tipo Planta. Cura al usuario.', '造成严重的毒属性伤害。回复使用者HP。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 45000
	},
	tm149: {
		id: 149,
		key: 'tm149',
		move: move['pursuit'],
		name: ['TM149 Pursuit', 'MT149 Persecución', 'TM149 追打'],
		description: [
			'Deals light Dark-type damage. Increases the charge bar.', 
			'Causa daño leve de tipo Siniestro. Aumenta la barra de carga.', '造成轻微的恶属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-dark.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 15000
	},
	tm150: {
		id: 150,
		key: 'tm150',
		move: move['gyroBall'],
		name: ['TM150 Gyroball', 'MT150 Giro bola', 'TM150 陀螺球'],
		description: [
			'Deals severe Steel-type damage. Its damage depends on Speed.', 
			'Causa daño severo de tipo Acero. Su daño depende de la Velocidad.', '造成严重的钢属性伤害。伤害取决于速度。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm151: {
		id: 151,
		key: 'tm151',
		move: move['hiddenPower'],
		name: ['TM151 Hidden Power', 'MT151 Poder oculto', 'TM151 觉醒力量'],
		description: [
			'Its type, power, category, and effect are randomly generated when a Pokémon learns it.', 
			'Su tipo, poder, categoría y efecto se genera aleatoriamente cuando lo aprende un Pokémon.', '宝可梦学习时，属性、威力、类别和效果随机生成。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 2500
	},
	tm152: {
		id: 152,
		key: 'tm152',
		move: move['galvanicQuack'],
		name: ['TM152 Galvanic Quack', 'MT152 Graznido galvánico', 'TM152 电击呱'],
		description: [
			'Deals severe Flying-type damage. Increases its damage when used repeatedly.', 
			'Causa daño severo de tipo volador. Aumenta su daño al usarse repetidamente.', '造成严重的飞行属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: null
	},
	tm153: {
		id: 153,
		key: 'tm153',
		move: move['metalicSlash'],
		name: ['TM153 Metalic Slash', 'MT153 Corte metálico', 'TM153 金属斩'],
		description: [
			'Deals devastating Steel-type damage. Always a critical hit.', 
			'Causa daño devastador de tipo acero. Siempre es crítico.', '造成毁灭性的钢属性伤害。必定击中要害。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: null
	},
	tm154: {
		id: 154,
		key: 'tm154',
		move: move['prismaticPledge'],
		name: ['TM154 Prismatic Pledge', 'MT154 Voto prismático', 'TM154 棱镜誓约'],
		description: [
			'Deals devastating damage of the Pok\u00e9mon\u2019s primary type.', 
			'Causa da\u00f1o devastador del tipo principal del Pok\u00e9mon.', '造成毁灭性的本属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: null
	},
	tm155: {
		id: 155,
		key: 'tm155',
		move: move['fireSpin'],
		name: ['TM155 Fire Spin', 'MT155 Giro fuego', 'TM155 火焰旋涡'],
		description: [
			'Deals light Fire-type damage. Increases its damage when used repeatedly.', 
			'Causa daño leve de tipo Fuego. Aumenta su daño al usarse repetidamente.', '造成轻微的火属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 4000
	},
	tm156: {
		id: 156,
		key: 'tm156',
		move: move['rageFist'],
		name: ['TM156 Rage Fist', 'MT156 Puño furia', 'TM156 愤怒之拳'],
		description: [
			'Deals light Ghost-type damage. Increases its damage when used repeatedly.', 
			'Causa daño leve de tipo Fantasma. Aumenta su daño al usarse repetidamente.', '造成轻微的幽灵属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-ghost.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 47000
	},
	tm157: {
		id: 157,
		key: 'tm157',
		move: move['leafBlade'],
		name: ['TM157 Leaf Blade', 'MT157 Hoja aguda', 'TM157 叶刃'],
		description: [
			'Deals heavy Grass-type damage. Has a high chance to land a critical hit.', 
			'Causa daño grave de tipo Planta. Suele ser crítico.', '造成沉重的草属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 35000
	},
	tm158: {
		id: 158,
		key: 'tm158',
		move: move['psychoCut'],
		name: ['TM158 Psycho Cut', 'MT158 Psicocorte', 'TM158 精神利刃'],
		description: [
			'Deals severe Psychic-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Psíquico. Suele ser crítico.', '造成严重的超能力属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-psychic.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 22000
	},
	tm159: {
		id: 159,
		key: 'tm159',
		move: move['chillingWater'],
		name: ['TM159 Chilling Water', 'MT159 Agua fría', 'TM159 冷水'],
		description: [
			'Deals moderate Water-type damage. May stun the target.', 
			'Causa daño moderado de tipo Agua. Puede aturdir al objetivo.', '造成中等的水属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 8000
	},
	tm160: {
		id: 160,
		key: 'tm160',
		move: move['sacredFire'],
		name: ['TM160 Sacred Fire', 'TM160 Fuego sagrado', 'TM160 神圣之火'],
		description: [
			'Deals devastating Fire-type damage. Hurts the user.', 
			'Causa daño devastador de tipo Fuego. Daña al usuario.', '造成毁灭性的火属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 100000
	},
	tm161: {
		id: 161,
		key: 'tm161',
		move: move['rockSmash'],
		name: ['TM161 Rock Smash', 'TM161 Golpe roca', 'TM161 碎岩'],
		description: [
			'Deals moderate Fighting-type damage. Slows the target.', 
			'Causa daño moderado de tipo Lucha. Ralentiza al objetivo.', '造成中等的格斗属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 1000
	},
	tm162: {
		id: 162,
		key: 'tm162',
		move: move['weatherBall'],
		name: ['TM162 Weather Ball', 'TM162 Meteorobola', 'TM162 气象球'],
		description: [
			'Deals severe damage of the Pok\u00e9mon\u2019s primary type.', 
			'Causa da\u00f1o severo del tipo principal del Pok\u00e9mon.', '造成严重的本属性伤害。'
		],
		image: './assets/images/item/tm-normal.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 35000
	},
	tm163: {
		id: 163,
		key: 'tm163',
		move: move['bouncyBubble'],
		name: ['TM163 Bouncy Bubble', 'TM163 Vapordrenaje', 'TM163 弹弹泡泡'],
		description: [
			'Deals severe Water-type damage. Heals the user.', 
			'Causa daño severo de tipo Agua. Cura al usuario.', '造成严重的水属性伤害。回复使用者HP。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 70000
	},
	tm164: {
		id: 164,
		key: 'tm164',
		move: move['sandTomb'],
		name: ['TM164 Sand Tomb', 'TM164 Bucle arena', 'TM164 流沙地狱'],
		description: [
			'Deals light Ground-type damage. Increases its damage when used repeatedly', 
			'Causa daño leve de tipo Tierra. Aumenta su daño al usarse repetidamente.', '造成轻微的地面属性伤害。连续使用时伤害增加。'
		],
		image: './assets/images/item/tm-ground.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 3000
	},
	tm165: {
		id: 165,
		key: 'tm165',
		move: move['headSmash'],
		name: ['TM165 Head Smash', 'TM165 Testarazo', 'TM165 双刃头锤'],
		description: [
			'Deals devastating Rock-type damage. Hurts the user.', 
			'Causa daño devastador de tipo Roca. Daña al usuario.', '造成毁灭性的岩石属性伤害。使用者受到反伤。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 65000
	},
	tm166: {
		id: 166,
		key: 'tm166',
		move: move['zapCannon'],
		name: ['TM166 Zap Cannon', 'TM166 Electrocañón', 'TM166 电磁炮'],
		description: [
			'Deals devastating Electric-type damage. May stun the target.', 
			'Causa daño devastador de tipo Electrico. Puede aturdir al objetivo.', '造成毁灭性的电属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 80000
	},
	tm167: {
		id: 167,
		key: 'tm167',
		move: move['poltergeist'],
		name: ['TM167 Poltergeist', 'TM167 Poltergeist', 'TM167 灵骚'],
		description: [
			'Deals devastating Ghost-type damage.', 
			'Causa daño devastador de tipo Fantasma.', '造成毁灭性的幽灵属性伤害。'
		],
		image: './assets/images/item/tm-ghost.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 65000
	},
	tm168: {
		id: 168,
		key: 'tm168',
		move: move['mirrorShot'],
		name: ['TM168 Mirror Shot', 'TM168 Disparo Espejo', 'TM168 镜光射击'],
		description: [
			'Deals severe Steel-type damage.', 
			'Causa daño severo de tipo Acero.', '造成严重的钢属性伤害。'
		],
		image: './assets/images/item/tm-steel.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 12000
	},
	tm169: {
		id: 169,
		key: 'tm169',
		move: move['poisonTail'],
		name: ['TM169 Poison Tail', 'TM169 Cola veneno', 'TM169 毒尾'],
		description: [
			'Deals moderate Poison-type damage. Has a high chance to land a critical hit.', 
			'Causa daño moderado de tipo Veneno. Suele ser crítico.', '造成中等的毒属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-poison.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 6000
	},
	tm170: {
		id: 170,
		key: 'tm170',
		move: move['fellStinger'],
		name: ['TM170 Fell Stinger', 'TM170 Aguijón letal', 'TM170 致命针刺'],
		description: [
			'Deals moderate bug-type damage. Increases the charge bar if it knocks out the target.', 
			'Causa daño moderado de tipo Bicho. Aumenta la barra de carga si debilita al objetivo.', '造成中等的虫属性伤害。击倒目标时加快蓄力条。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 20000
	},
	tm171: {
		id: 171,
		key: 'tm171',
		move: move['firstImpression'],
		name: ['TM171 First Impression', 'MT171 Escaramuza', 'TM171 迎头一击'],
		description: [
			'Deals heavy Bug-type damage. If the target is at full HP, their charge bar is reset to 0.', 
			'Causa daño grave de tipo Bicho. Si el objetivo tiene PS completos, vuelve su barra de carga a 0.', '造成沉重的虫属性伤害。若目标HP全满，将其蓄力条归零。'
		],
		image: './assets/images/item/tm-bug.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 44000
	},
	tm172: {
		id: 172,
		key: 'tm172',
		move: move['dragonClaw'],
		name: ['TM172 Dragon Claw', 'TM172 Garra Dragón', 'TM172 龙爪'],
		description: [
			'Deals severe Dragon-type damage.', 
			'Causa daño severo de tipo Dragón. ', '造成严重的龙属性伤害。'
		],
		image: './assets/images/item/tm-dragon.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 25000
	},
	tm173: {
		id: 173,
		key: 'tm173',
		move: move['skyUppercut'],
		name: ['TM173 Sky Uppercut', 'TM173 Gancho alto', 'TM173 升天拳'],
		description: [
			'Deals severe Fighting-type damage.', 
			'Causa daño severo de tipo Lucha.', '造成严重的格斗属性伤害。'
		],
		image: './assets/images/item/tm-fighting.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 28000
	},
	tm174: {
		id: 174,
		key: 'tm174',
		move: move['waterShuriken'],
		name: ['TM174 Water Shuriken', 'TM174 Shuriken de agua', 'TM174 水手里剑'],
		description: [
			'Deals very light Water-type damage. Increases the charge bar.', 
			'Causa daño muy leve de tipo Agua. Aumenta la barra de carga.', '造成极轻微的水属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-water.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 35000
	},
	tm175: {
		id: 175,
		key: 'tm175',
		move: move['blazeKick'],
		name: ['TM175 Blaze Kick', 'TM175 Patada ígnea', 'TM175 火焰踢'],
		description: [
			'Deals severe Fire-type damage. Has a high chance to land a critical hit.', 
			'Causa daño severo de tipo Fuego. Suele ser crítico.', '造成严重的火属性伤害。高几率击中要害。'
		],
		image: './assets/images/item/tm-fire.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 33000
	},
	tm176: {
		id: 176,
		key: 'tm176',
		move: move['needleArm'],
		name: ['TM176 Needle Arm', 'TM176 Brazo Pincho', 'TM176 尖刺臂'],
		description: [
			'Deals moderate Frass-type damage. May stun the target.', 
			'Causa daño moderado de tipo Planta. Puede aturdir al objetivo.', '造成中等的草属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 14000
	},
	tm177: {
		id: 177,
		key: 'tm177',
		move: move['bounce'],
		name: ['TM177 Bounce ', 'TM177 Bote', 'TM177 弹跳'],
		description: [
			'Deals severe Flying-type damage. May stun the target.', 
			'Causa daño severo de tipo Volador. Puede aturdir al objetivo.', '造成严重的飞行属性伤害。可能使目标眩晕。'
		],
		image: './assets/images/item/tm-flying.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 32000
	},
	tm178: {
		id: 178,
		key: 'tm178',
		move: move['electroweb'],
		name: ['TM178 Electroweb', 'TM178 Electrotela', 'TM178 电网'],
		description: [
			'Deals severe Electric-type damage. Slows the target.', 
			'Causa daño severo de tipo Electrico. Ralentiza al objetivo.', '造成严重的电属性伤害。使目标减速。'
		],
		image: './assets/images/item/tm-electric.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 18500
	},
	tm179: {
		id: 179,
		key: 'tm179',
		move: move['accelerock'],
		name: ['TM179 Accelerock', 'TM179 Roca veloz', 'TM179 加速岩'],
		description: [
			'Deals light Rock-type damage. Increases the charge bar.', 
			'Causa daño leve de tipo Roca. Aumenta la barra de carga.', '造成轻微的岩石属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-rock.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 5000
	},
	tm180: {
		id: 180,
		key: 'tm180',
		move: move['grassyGlide'],
		name: ['TM180 Grassy Glide', 'TM180 Fitoimpulso', 'TM180 草滑'],
		description: [
			'Deals moderate Grass-type damage. Increases the charge bar.', 
			'Causa daño moderado de tipo Planta. Aumenta la barra de carga. ', '造成中等的草属性伤害。加快蓄力条。'
		],
		image: './assets/images/item/tm-grass.png',
		target: 'pokemon',
		type: 'tm',
		use: { effect: 'learnTM'},
		price: 14000
	},
}


