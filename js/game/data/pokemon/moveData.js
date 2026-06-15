import {type} from './typeData.js';

export const move = {
	'tackle': {
		name: ['Tackle', 'Placaje', '撞击'],
		class: 'physical',
		type: type['normal'],
		power: 40,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'scratch': {
		name: ['Scratch', 'Arañazo', '抓'],
		class: 'physical',
		type: type['normal'],
		power: 40,
		description: [
			'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'vineWhip': {
		name: ['Vine Whip', 'Látigo cepa', '藤鞭'],
		class: 'physical',
		type: type['grass'],
		power: 45,
		description: [
			'Deals Grass-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Planta. <br><br>No tiene ningun efecto secundario.', '造成草属性伤害。<br><br>无附加效果。']
	},
	'falseSwipe': {
		name: ['False Swipe', 'Falso tortazo', '点到为止'],
		class: 'physical',
		type: type['normal'],
		power: 40,
		capture: true,
		description: [
			'Deals Normal-type damage. <br><br>Can capture the Pokémon after hitting.',
	    	'Causa daño de tipo Normal. <br><br>Puede capturar al Pokémon después de golpear.', '造成一般属性伤害。<br><br>命中后可以捕捉宝可梦。']
	},
	'ember': {
		name: ['Ember', 'Ascuas', '火花'],
		class: 'special',
		type: type['fire'],
		power: 40,
		description: [
			'Deals Fire-type damage',
			'Causa daño de tipo Fuego.'
		, '造成火属性伤害。']
	},
	'bubble': {
		name: ['Bubble', 'Burbuja', '泡沫'],
		class: 'special',
		type: type['water'],
		power: 40,
		slow: 5,
		description: [
			'Deals Water-type damage. <br><br>Slows the target for 0.5 seconds.',
	    	'Causa daño de tipo Agua. <br><br>Ralentiza al objetivo 0.5 segundos.', '造成水属性伤害。<br><br>使目标减速0.5秒。']
	},
	'peck': {
		name: ['Peck', 'Picotazo', '啄'],
		class: 'physical',
		type: type['flying'],
		power: 35,
		description: [
			'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.', '造成飞行属性伤害。<br><br>无附加效果。']
	},
	'bugbit': {
		name: ['Bugbit', 'Picadura', '虫咬'],
		class: 'physical',
		type: type['bug'],
		power: 40,
		description: [
			'Deals Bug-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Bicho. <br><br>No tiene ningun efecto secundario.', '造成虫属性伤害。<br><br>无附加效果。']
	},
	'quickAttack': {
		name: ['Quick Attack', 'Ataque rápido', '电光一闪'],
		class: 'physical',
		type: type['normal'],
		power: 40,
		chargeBonus: 25,
		description: [
  			'Deals Normal-type damage. <br><br>After hitting, it gains 25% of charge energy.',
			'Causa daño de tipo Normal. <br><br>Después de atacar, consigue un 25% de barra de carga.', '造成一般属性伤害。<br><br>优先攻击。']
	},
	'bite': {
		name: ['Bite', 'Mordisco', '咬住'],
		class: 'physical',
		type: type['dark'],
		power: 60,
		stun: 10,
		stunChance: 0.15,
		description: [
			'Deals Dark-type damage. <br><br>Has a 15% chance to stun the target for 1 second.',
	    	'Causa daño de tipo Siniestro. <br><br>Tiene una probablidad del 15% de aturdir al objetivo 1 segundo.', '造成恶属性伤害。<br><br>无附加效果。']
	},
	'sandAttack': {
		name: ['Sand Attack', 'Ataque arena', '泼沙'],
		class: 'physical',
		type: type['ground'],
		power: 20,
		slow: 8,
		description: [
			'Deals Ground-type damage. <br><br>Slows the target for 0.8 seconds.',
	    	'Causa daño de tipo Tierra. <br><br>Ralentiza al objetivo 0.8 segundos.', '降低目标命中率。']
	},
	'stringShot': {
		name: ['String Shot', 'Disparo demora', '吐丝'],
		class: 'special',
		type: type['bug'],
		power: 15,
		slow: 20,
		description: [
			'Deals Bug-type damage. <br><br>Slows the target for 2 seconds.',
	    	'Causa daño de tipo Bicho. <br><br>Ralentiza al objetivo 2 segundos.', '使目标减速。']
	},
	'confusion': {
		name: ['Confusion', 'Confusión', '念力'],
		class: 'special',
		type: type['psychic'],
		power: 40,
		description: [
			'Deals Psychic-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Psíquico. <br><br>No tiene ningun efecto secundario.', '造成超能力属性伤害。<br><br>无附加效果。']
	},
	'psybeam': {
		name: ['Psybeam', 'Psicorrayo', '精神光线'],
		class: 'special',
		type: type['psychic'],
		power: 65,
		description: [
			'Deals Psychic-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Psíquico. <br><br>No tiene ningun efecto secundario.', '造成超能力属性伤害。<br><br>可能使目标混乱。']
	},
	'psychic': {
		name: ['Psichic', 'Psíquico', '精神强念'],
		class: 'special',
		type: type['psychic'],
		power: 100,
		description: [
			'Deals Psychic-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Psíquico. <br><br>No tiene ningun efecto secundario.',
			'造成超能力属性伤害。<br><br>无附加效果。'
		]
	},
	'gust': {
		name: ['Gust', 'Tornado', '起风'],
		class: 'special',
		type: type['flying'],
		power: 40,
		description: [
			'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.', '造成飞行属性伤害。<br><br>无附加效果。']
	},
	'wingAttack': {
		name: ['Wing Attack', 'Ataque ala', '翅膀攻击'],
		class: 'physical',
		type: type['flying'],
		power: 35,
		description: [
			'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.', '造成飞行属性伤害。<br><br>无附加效果。']
	},
	'aeroblast': {
		name: ['Aeroblast', 'Aerochorro', '空气爆破'],
		class: 'special',
		type: type['flying'],
		power: 100,
		criticalBonus: 0.0625,
	    description: [
	    	'Deals Flying-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Volador. <br><br>Su probablidad de crítico es mayor de lo normal.',
	    	'造成飞行属性伤害。<br><br>容易击中要害。'
	    ]
	},
	'poisonSting': {
		name: ['Poison Sting', 'Picotazo veneno', '毒针'],
		class: 'physical',
		type: type['poison'],
		power: 15,
		description: [
			'Deals Poison-type damage. <br><br>Has no secondary effect.',
			'Causa daño de tipo Veneno. <br><br>No tiene ningun efecto secundario.'
		, '造成毒属性伤害。<br><br>可能使目标中毒。']
	},
	'furyCutter': {
		name: ['Fury Cutter', 'Corte furia', '连续切'],
		class: 'physical',
		type: type['bug'],
		power: 20,
	    combo: [0, 10, 20, 30, 40, 50], 
	    description: [
	    	'Deals Bug-type damage. <br><br>Increases its power by 10 with each hit up to a maximum of 70. <br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Bicho. <br><br>Aumenta su poder en 10 con cada golpe hasta un máximo de 70. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.', '造成虫属性伤害。每次命中威力增加10，最高可达70。'
	    ]
	},
	'twineedle': {
		name: ['Twineedle', 'Doble ataque', '双针'],
		class: 'physical',
		type: type['bug'],
		power: 25,
		combo: [0, 25], 
		description: [
			'Deals Bug-type damage. <br><br>Increases its power by 25 with each hit up to a maximum of 50. <br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
			'Causa daño de tipo Bicho. <br><br>Aumenta su poder en 25 con cada golpe hasta un máximo de 50. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.', '造成虫属性伤害。每次命中威力增加25，最高可达50。'
		]
	},
	'drillPeck': {
		name: ['Drill Peck', 'Pico taladro', '啄钻'],
		class: 'physical',
		type: type['flying'],
		power: 80,
		description: [
			'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.', '造成飞行属性伤害。<br><br>无附加效果。']
	},
	'bugBuzz': {
		name: ['Bug Buzz', 'Zumbido', '虫鸣'],
		class: 'special',
		type: type['bug'],
		power: 90,
		description: [
			'Deals Bug-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Bicho. <br><br>No tiene ningun efecto secundario.', '造成虫属性伤害。<br><br>无附加效果。']
	},
	'wrap': {
		name: ['Wrap', 'Atadura', '紧束'],
		class: 'physical',
		type: type['normal'],
		power: 15,
		slow: 10,
		description: [
			'Deals Normal-type damage. <br><br>Slows the target for 1 second.',
	    	'Causa daño de tipo Normal. <br><br>Ralentiza al objetivo 1 segundo.', '造成一般属性伤害。<br><br>束缚目标。']
	},
	'acid': {
		name: ['Acid', 'Ácido', '溶解液'],
		class: 'special',
		type: type['poison'],
		power: 40,
		typeFoeBonus: {
			type: 'steel',
			multiplier: 2 
		},
		description: [
			'Deals Poison-type damage. <br><br>It is super effective against Steel-type.',
	    	'Causa daño de tipo Veneno. <br><br>Es supereficaz contra tipo Acero.', '造成毒属性伤害。<br><br>可能使目标中毒。']
	},
	'freezeDry': {
		name: ['Freeze-Dry', 'Liofilización', '冰冻干燥'],
		class: 'special',
		type: type['ice'],
		power: 70,
		typeFoeBonus: {
			type: 'water',
			multiplier: 2 
		},
		description: [
			'Deals Ice-type damage. <br><br>It is super effective against Water-type.',
	    	'Causa daño de tipo Hielo. <br><br>Es supereficaz contra tipo Agua.',
			'造成冰属性伤害。<br><br>无附加效果。'
		]
	},
	'glare': {
		name: ['Glare', 'Deslumbrar', '大蛇瞪眼'],
		class: 'special',
		type: type['normal'],
		power: 20,
		stun: 10,
		stunChance: 1,
		description: [
			'Deals Normal-type damage. <br><br>Stuns the target for 1 second.',
	    	'Causa daño de tipo Normal. <br><br>Aturde al objetivo 1 segundo.', '使目标陷入麻痹状态。']
	},
	'thunderShock': {
		name: ['Thunder Shock', 'Impactrueno', '电击'],
		class: 'special',
		type: type['electric'],
		power: 40,
		stun: 10,
		stunChance: 0.1,
		description: [
			'Deals Electric-type damage. <br><br>Has a 10% chance to stun the target for 1 second.',
	    	'Causa daño de tipo Electrico. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 1 segundo.', '造成电属性伤害。<br><br>无附加效果。']
	},
	'thunderPunch': {
		name: ['Thunder Punch', 'Puño trueno', '雷电拳'],
		class: 'physical',
		type: type['electric'],
		power: 75,
		stun: 12,
		stunChance: 0.3,
		description: [
			'Deals Electric-type damage. <br><br>Has a 30% chance to stun the target for 1.2 seconds.',
	    	'Causa daño de tipo Electrico. <br><br>Tiene una probablidad del 30% de aturdir al objetivo 1.2 segundos.', '造成电属性伤害。<br><br>可能使目标麻痹。']
	},
	'slash': {
	    name: ['Slash', 'Cuchillada', '劈开'],
	    class: 'physical',
	    type: type['normal'],
	    power: 70,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Normal. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'swift': {
	    name: ['Swift', 'Rapidez', '高速星星'],
	    class: 'special',
	    type: type['normal'],
	    power: 60,
	    chargeBonus: 20,
		description: [
  			'Deals Normal-type damage. <br><br>After hitting, it gains 20% of charge energy.',
			'Causa daño de tipo Normal. <br><br>Después de atacar, consigue un 20% de barra de carga.', '造成一般属性伤害。<br><br>必定命中。']
	},
	'bodySlam': {
	    name: ['Body Slam', 'Golpe Cuerpo', '泰山压顶'],
	    class: 'physical',
	    type: type['normal'],
	    power: 85,
	    stun: 18,
		stunChance: 0.2,
		description: [
			'Deals Normal-type damage. <br><br>Has a 20% chance to stun the target for 1.8 seconds.',
	    	'Causa daño de tipo Normal. <br><br>Tiene una probablidad del 20% de aturdir al objetivo 1.8 segundos.', '造成一般属性伤害。<br><br>可能使目标麻痹。']
	},
	'earthquake': {
	    name: ['Earthquake', 'Terremoto', '地震'],
	    class: 'physical',
	    type: type['ground'],
	    power: 100,
	    description: [
	    	'Deals Ground-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Tierra. <br><br>No tiene ningun efecto secundario.', '造成地面属性伤害。<br><br>无附加效果。']
	},
	'superpower': {
	    name: ['Superpower', 'Fuerza Bruta', '蛮力'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 120,
	    autoStun: 10,
	    description: [
	    	'Deals Fighting-type damage. <br><br>After attacking, the user is stunned for 1 second.',
	    	'Causa daño de tipo Lucha. <br><br>Después de atacar, el usuario se aturde 1 segundo.', '造成格斗属性伤害。<br><br>使用后自身攻击和防御降低。']
	},
	'megahorn': {
	    name: ['Megahorn', 'Megacuerno', '超级角击'],
	    class: 'physical',
	    type: type['bug'],
	    power: 120,
	    description: [
	    	'Deals Bug-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Bicho. <br><br>No tiene ningun efecto secundario.',
	    	'造成虫属性伤害。<br><br>无附加效果。'
	    ]
	},
	'poisonJab': {
	    name: ['Poison Jab', 'Puya Nociva', '毒击'],
	    class: 'physical',
	    type: type['poison'],
	    power: 80,
		description: [
			'Deals Poison-type damage. <br><br>Has no secondary effect.',
			'Causa daño de tipo Veneno. <br><br>No tiene ningun efecto secundario.', '造成毒属性伤害。无附加效果。'
		]
	},
	'pound': {
	    name: ['Pound', 'Destructor', '拍击'],
	    class: 'physical',
	    type: type['normal'],
	    power: 40,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.',
	    	'造成一般属性伤害。<br><br>无附加效果。'
	    ]
	},
	'hyperVoice': {
	    name: ['Hyper Voice', 'Vozarrón', '巨声'],
	    class: 'special',
	    type: type['normal'],
	    power: 90,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.',
	    	'造成一般属性伤害。<br><br>无附加效果。'
	    ]
	},
	'fireBlast': {
	    name: ['Fire Blast', 'Llamarada', '大字爆炎'],
	    class: 'special',
	    type: type['fire'],
	    power: 110,
	    description: [
	    	'Deals Fire-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Fuego. <br><br>No tiene ningun efecto secundario.', '造成火属性伤害。<br><br>可能使目标灼伤。']
	},
	'flameThrower': {
	    name: ['Flamethrower', 'Lanzallamas', '喷射火焰'],
	    class: 'special',
	    type: type['fire'],
	    power: 90,
	    description: [
	        'Deals Fire-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Fuego. <br><br>No tiene ningun efecto secundario.', '造成火属性伤害。<br><br>可能使目标灼伤。']
	},
	'rollout': {
	    name: ['Rollout', 'Desenrollar', '滚动'],
	    class: 'physical',
	    type: type['rock'],
	    power: 15,
	    combo: [0, 15, 45, 105, 225],
	    description: [
	    	'Deals Rock-type damage. <br><br>Doubles its power with each hit up to a maximum of 240. <br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Roca. <br><br>Duplica su poder con cada golpe hasta un máximo de 240. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.'
	    , '造成岩石属性伤害。<br><br>无附加效果。']
	},
	'megaDrain': {
	    name: ['Mega Drain', 'Megaagotar', '超级吸取'],
	    class: 'special',
	    type: type['grass'],
	    power: 40,
	    restore: 0.5,
	    description: [
	    	'Deals Grass-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Planta. <br><br>Cura la mitad del daño causado.', '造成草属性伤害。<br><br>回复造成伤害50%的HP。']
	},
	'airSlash': {
	    name: ['Air Slash', 'Aire Afilado', '空气斩'],
	    class: 'special',
	    type: type['flying'],
	    power: 75,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Flying-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Volador. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成飞行属性伤害。<br><br>可能使目标畏缩。']
	},
	'esperWing': {
	    name: ['Esper Wing', 'Ala aural', '超能之翼'],
	    class: 'special',
	    type: type['psychic'],
	    power: 80,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Psychic-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Psíquico. <br><br>Su probablidad de crítico es mayor de lo normal.',
	    	'造成超能力属性伤害。<br><br>容易击中要害。'
	    ]
	},
	'poisonFang': {
	    name: ['Poison Fang', 'Colmillo Veneno', '剧毒牙'],
	    class: 'physical',
	    type: type['poison'],
	    power: 50,
		restoreOnKill: 0.2,
		description: [
			'Deals Poison-type damage. <br><br>Restores 20% HP if the target is weakened.',
			'Causa daño de tipo Veneno. <br><br>Recupera 20% de PS si debilita al objetivo.', '造成毒属性伤害。<br><br>若目标HP较低则回复20%HP。'
		]
	},
	'absorb': {
	    name: ['Absorb', 'Absorber', '吸取'],
	    class: 'special',
	    type: type['grass'],
	    power: 20,
	    restore: 0.5,
	    description: [
	    	'Deals Grass-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Planta. <br><br>Cura la mitad del daño causado.', '造成草属性伤害。<br><br>回复造成伤害50%的HP。']
	},
	'hornLeech': {
	    name: ['Horn Leech', 'Asta drenaje', '木角'],
	    class: 'physical',
	    type: type['grass'],
	    power: 75,
	    restore: 0.5,
	    description: [
	    	'Deals Grass-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Planta. <br><br>Cura la mitad del daño causado.',
	    	'造成草属性伤害。<br><br>回复造成伤害一半的HP。'
	    ]
	},
	'petalDance': {
	    name: ['Petal Dance', 'Danza Pétalo', '花瓣舞'],
	    class: 'special',
	    type: type['grass'],
	    power: 120,
	    autoDamage: 0.1,
	    description: [
	    	'Deals Grass-type damage. <br><br>The user takes 10% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Planta. <br><br>El usuario sufre un 10% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成草属性伤害。<br><br>无附加效果。']
	},
	'sludgeBomb': {
	    name: ['Sludge Bomb', 'Bomba Lodo', '污泥炸弹'],
	    class: 'special',
	    type: type['poison'],
	    power: 90,
	    typeFoeBonus: {
			type: 'ground',
			multiplier: 2 
		},
		description: [
			'Deals Poison-type damage. <br><br>It is super effective against Ground-type.',
	    	'Causa daño de tipo Veneno. <br><br>Es supereficaz contra tipo Tierra.', '造成毒属性伤害。<br><br>可能使目标中毒。']
	},
	'leechLife': {
	    name: ['Leech Life', 'Chupavidas', '吸血'],
	    class: 'physical',
	    type: type['bug'],
	    power: 20,
	    restore: 0.5,
	    description: [
	    	'Deals Bug-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Bicho. <br><br>Cura la mitad del daño causado.', '造成虫属性伤害。<br><br>回复造成伤害50%的HP。']
	},
	'xScissor': {
	    name: ['X-Scissor', 'Tijera X', '十字剪'],
	    class: 'physical',
	    type: type['bug'],
	    power: 80,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Bug-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Bicho. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成虫属性伤害。<br><br>无附加效果。']
	},
	'silverWind': {
	    name: ['Silver Wind', 'Viento Plata', '银色旋风'],
	    class: 'special',
	    type: type['bug'],
	    power: 60,
	    description: [
	    	'Deals Bug-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Bicho. <br><br>No tiene ningun efecto secundario.', '造成虫属性伤害。<br><br>可能提高自身全能力。']
	},
	'mudSlap': {
	    name: ['Mud Slap', 'Bofetón Lodo', '泼泥'],
	    class: 'special',
	    type: type['ground'],
	    power: 35,
	    description: [
	    	'Deals Ground-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Tierra. <br><br>No tiene ningun efecto secundario.',
	    	'造成地面属性伤害。<br><br>无附加效果。'
	    ]
	},
	'magnitude': {
	    name: ['Magnitude', 'Magnitud', '震级'],
	    class: 'physical',
	    type: type['ground'],
	    power: 50,  
	    randomPower: [0.2, 2],
	    description: [
	    	"Deals Ground-type damage. <br><br>Its power randomly varies between x0.2 and x2.",
	    	'Causa daño de tipo Tierra. <br><br>Su poder varía entre x0.2 y x2 aleatoriamente.',
	    	'造成地面属性伤害。<br><br>威力在一定范围内随机变化。'
	    ]
	},
	'metronome': {
	    name: ['Metronome', 'Metrónomo', '挥指'],
	    class: 'special',
	    type: type['normal'],
	    power: 50,  
	    randomPower: [0.5, 1.5],
	    description: [
	    	"Deals Normal-type damage. <br><br>Its power randomly varies between x0.5 and x1.5.",
	    	'Causa daño de tipo Normal. <br><br>Su poder varía entre x0.5 y x1.5 aleatoriamente.',
	    	'随机使出任意招式。'
	    ]
	},
	'rockSlide': {
	    name: ['Rock Slide', 'Avalancha', '岩崩'],
	    class: 'physical',
	    type: type['rock'],
	    power: 75,
	    stun: 15,
		stunChance: 0.2,
		description: [
			'Deals Rock-type damage. <br><br>Has a 20% chance to stun the target for 1.5 seconds.',
	    	'Causa daño de tipo Roca. <br><br>Tiene una probablidad del 20% de aturdir al objetivo 1.5 segundos.', '造成岩石属性伤害。<br><br>无附加效果。']
	},
	'fakeOut': {
	    name: ['Fake Out', 'Sorpresa', '击掌奇袭'],
	    class: 'physical',
	    type: type['normal'],
	    power: 30,
	    fakeOut: true,
	    description: [
	    	'Deals Normal-type damage. <br><br>If the target is at full HP, their charge bar is reset to 0.',
	    	'Causa daño de tipo Normal. <br><br>Si el objetivo tiene PS completos, vuelve su barra de carga a 0.'
	    , '造成一般属性伤害。<br><br>出场后立即攻击，使目标畏缩。']
	},
	'payDay': {
	    name: ['Pay Day', 'Día de Pago', '聚宝功'],
	    class: 'physical',
	    type: type['normal'],
	    power: 40,
	    gold: 1.5,
	    goldMax: 200,
	    description: [
	    	'Deals Normal-type damage. <br><br>Grants money equal to 150% of the damage dealt. (Max. $200)',
	    	'Causa daño de tipo Normal. <br><br>Gana dinero igual al 150% del daño causado. (Máx. $200)', '造成一般属性伤害。<br><br>获得造成伤害150%的金钱。（最高$200）'
	    ]
	},
	'powerGem': {
	    name: ['Power Gem', 'Joya de Luz', '力量宝石'],
	    class: 'special',
	    type: type['rock'],
	    power: 80,
	    description: [
	    	'Deals Rock-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Roca. <br><br>No tiene ningun efecto secundario.', '造成岩石属性伤害。<br><br>无附加效果。']
	},
	'waterGun': {
	    name: ['Water Gun', 'Pistola agua', '水枪'],
	    class: 'special',
	    type: type['water'],
	    power: 40,
	    description: [
	    	'Deals Water-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Agua. <br><br>No tiene ningun efecto secundario.', '造成水属性伤害。<br><br>使目标减速0.5秒。']
	},
	'hydroPump': {
	    name: ['Hydro Pump', 'Hidrobomba', '水炮'],
	    class: 'special',
	    type: type['water'],
	    power: 110,
	    description: [
	    	'Deals Water-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Agua. <br><br>No tiene ningun efecto secundario.', '造成水属性伤害。<br><br>使目标减速0.5秒。']
	},
	'aquaTail': {
	    name: ['Aqua Tail', 'Acua cola', '水流尾'],
	    class: 'physical',
	    type: type['water'],
	    power: 90,
	    description: [
	    	'Deals Water-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Agua. <br><br>No tiene ningun efecto secundario.',
	    	'造成水属性伤害。<br><br>无附加效果。'
	    ]
	},
	'lowKick': {
	    name: ['Low Kick', 'Patada baja', '踢倒'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 30, 
	    bonusLevel: 1.5,
	    description: [
	    	"Deals Fighting-type damage. <br><br>If the target's level is higher than the user's, damage is increased by 50%.",
	    	'Causa daño de tipo Lucha. <br><br>Si el nivel del objetivo es superior al usuario, aumenta el daño un 50%.',
	    	'造成格斗属性伤害。<br><br>等级高于对手时威力翻倍。'
	    ]
	},
	'karateChop': {
	    name: ['Karate Chop', 'Golpe Kárate', '空手刀'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 50,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Lucha. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成格斗属性伤害。<br><br>无附加效果。']
	},
	'crossChop': {
	    name: ['Cross Chop', 'Tajo cruzado', '十字劈'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 100,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Lucha. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成格斗属性伤害。<br><br>容易击中要害。']
	},
	'flameWheel': {
	    name: ['Flame Wheel', 'Rueda fuego', '火焰轮'],
	    class: 'physical',
	    type: type['fire'],
	    power: 60,
	    chargeBonus: 25,
		description: [
  			'Deals Fire-type damage. <br><br>After hitting, it gains 25% of charge energy.',
			'Causa daño de tipo Fuego. <br><br>Después de atacar, consigue un 25% de barra de carga.', '造成火属性伤害。<br><br>可能使目标灼伤。']
	},
	'extremeSpeed': { 
	    name: ['Extreme Speed', 'Velocidad extrema', '神速'],
	    class: 'physical',
	    type: type['normal'],
	    power: 80,
	    chargeBonus: 40,
		description: [
  			'Deals Normal-type damage. <br><br>After hitting, it gains 40% of charge energy.',
			'Causa daño de tipo Normal. <br><br>Después de atacar, consigue un 40% de barra de carga.', '造成一般属性伤害。<br><br>优先攻击。']
	},
	'wildCharge': { 
	    name: ['Wild Charge', 'Voltio cruel', '疯狂伏特'],
	    class: 'physical',
	    type: type['electric'],
	    power: 90,
	    autoDamage: 0.1,
	    description: [
	    	'Deals Electric-type damage. <br><br>The user takes 10% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Electrico. <br><br>El usuario sufre un 10% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成电属性伤害。<br><br>自身受到少量反伤。']
	},
	'bubbleBeam': {
	    name: ['Bubble Beam', 'Rayo burbuja', '泡沫光线'],
	    class: 'special',
	    type: type['water'],
	    power: 65,
	   	slow: 10,
		description: [
			'Deals Water-type damage. <br><br>Slows the target for 1 second.',
	    	'Causa daño de tipo Agua. <br><br>Ralentiza al objetivo 1 segundo.', '造成水属性伤害。<br><br>使目标减速0.5秒。']
	},
	'clamp': {
	    name: ['Clamp', 'Tenaza', '贝壳夹'],
	    class: 'physical',
	    type: type['water'],
	    power: 35,
	    stun: 12,
		stunChance: 0.2,
		description: [
			'Deals Water-type damage. <br><br>Has a 20% chance to stun the target for 1.2 seconds.',
	    	'Causa daño de tipo Agua. <br><br>Tiene una probablidad del 20% de aturdir al objetivo 1.2 segundos.', '造成水属性伤害。<br><br>束缚目标。']
	},
	'lowSweep': {
	    name: ['Low Sweep', 'Puntapié', '下盘踢'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 65,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Lucha. <br><br>No tiene ningun efecto secundario.',
	    	'造成格斗属性伤害。<br><br>无附加效果。'
	    ]
	},
	'energyBall': {
	    name: ['Energy Ball', 'Energibola', '能量球'],
	    class: 'special',
	    type: type['grass'],
	    power: 90,
	    description: [
	    	'Deals Grass-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Planta. <br><br>No tiene ningun efecto secundario.', '造成草属性伤害。<br><br>无附加效果。']
	},
	'shockWave': {
	    name: ['Shock Wave', 'Onda Voltio', '电击波'],
	    class: 'special',
	    type: type['electric'],
	    power: 60,
	    description: [
	    	'Deals Electric-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Electrico. <br><br>No tiene ningun efecto secundario.', '造成电属性伤害。<br><br>必定命中。']
	},
	'ironHead': {
	    name: ['Iron Head', 'Cabeza de hierro', '铁头'],
	    class: 'physical',
	    type: type['steel'],
	    power: 80,
	    stun: 11,
		stunChance: 0.2,
		description: [
			'Deals Steel-type damage. <br><br>Has a 20% chance to stun the target for 1.1 seconds.',
	    	'Causa daño de tipo Acero. <br><br>Tiene una probablidad del 20% de aturdir al objetivo 1.1 segundos.',
			'造成钢属性伤害。<br><br>有20%几率使目标眩晕1.1秒。'
		]
	},
	'zenHeadbutt': {
	    name: ['Zen Headbutt', 'Cabezazo Zen', '意念头锤'],
	    class: 'physical',
	    type: type['psychic'],
	    power: 80,
	    stun: 11,
		stunChance: 0.2,
		description: [
			'Deals Psychic-type damage. <br><br>Has a 20% chance to stun the target for 1.1 second.',
	    	'Causa daño de tipo Psíquico. <br><br>Tiene una probablidad del 20% de aturdir al objetivo 1.1 segundo.',
			'造成超能力属性伤害。<br><br>有20%几率使目标眩晕1.1秒。'
		]
	},
	'flashCannon': {
	    name: ['Flash Cannon', 'Foco resplandor', '加农光炮'],
	    class: 'special',
	    type: type['steel'],
	    power: 80,
	    description: [
	    	'Deals Steel-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Acero. <br><br>No tiene ningun efecto secundario.', '造成钢属性伤害。<br><br>无附加效果。']
	},
	'bulletPunch': {
	    name: ['Bullet Punch', 'Puño bala', '子弹拳'],
	    class: 'physical',
	    type: type['steel'],
	    power: 10,
	    chargeBonus: 80,
		description: [
  			'Deals Steel-type damage. <br><br>After hitting, it gains 80% of charge energy.',
			'Causa daño de tipo Acero. <br><br>Después de atacar, consigue un 80% de barra de carga.', '造成钢属性伤害。<br><br>优先攻击。']
	},
	'meteorMash': {
	    name: ['Meteor Mash', 'Puño meteoro', '彗星拳'],
	    class: 'physical',
	    type: type['steel'],
	    power: 90,
	    description: [
	    	'Deals Steel-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Acero. <br><br>No tiene ningun efecto secundario.',
	    	'造成钢属性伤害。<br><br>无附加效果。'
	    ]
	},
	'razorLeaf': {
	    name: ['Razor Leaf', 'Hoja afilada', '飞叶快刀'],
	    class: 'physical',
	    type: type['grass'],
	    power: 55,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Grass-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Planta. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成草属性伤害。<br><br>无附加效果。']
	},
	'rockThrow': {
	    name: ['Rock Throw', 'Lanzarrocas', '落石'],
	    class: 'physical',
	    type: type['rock'],
	    power: 50,
	    description: [
	    	'Deals Rock-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Roca. <br><br>No tiene ningun efecto secundario.', '造成岩石属性伤害。<br><br>无附加效果。']
	},
	'stomp': {
	    name: ['Stomp', 'Pisotón', '踩踏'],
	    class: 'physical',
	    type: type['normal'],
	    power: 65,
	    stun: 9,
		stunChance: 0.1,
		description: [
			'Deals Normal-type damage. <br><br>Has a 10% chance to stun the target for 0.9 seconds.',
	    	'Causa daño de tipo Normal. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 0.9 segundos.',
			'造成一般属性伤害。<br><br>有10%几率使目标眩晕0.9秒。'
		]
	},
	'headbutt': {
	    name: ['Headbutt', 'Golpe cabeza', '头锤'],
	    class: 'physical',
	    type: type['normal'],
	    power: 70,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'surf': {
	    name: ['Surf', 'Surf', '冲浪'],
	    class: 'special',
	    type: type['water'],
	    power: 90,
	    description: [
	    	'Deals Water-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Agua. <br><br>No tiene ningun efecto secundario.', '造成水属性伤害。<br><br>使目标减速0.5秒。']
	},
	'iceBeam': {
	    name: ['Ice Beam', 'Rayo Hielo', '冰冻光束'],
	    class: 'special',
	    type: type['ice'],
	    power: 90,
	    stun: 25,
		stunChance: 0.1,
		description: [
			'Deals Ice-type damage. <br><br>Has a 10% chance to stun the target for 2.5 seconds.',
	    	'Causa daño de tipo Hielo. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 2.5 segundos.', '造成冰属性伤害。<br><br>可能使目标减速。']
	},
	'magnetBomb': {
	    name: ['Magnet Bomb', 'Bomba imán', '磁铁炸弹'],
	    class: 'physical',
	    type: type['steel'],
	    power: 60,
	    description: [
	    	'Deals Steel-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Acero. <br><br>No tiene ningun efecto secundario.',
	    	'造成钢属性伤害。<br><br>无附加效果。'
	    ]
	},
	'aerialAce': {
	    name: ['Aerial Ace', 'Golpe aéreo', '燕返'],
	    class: 'physical',
	    type: type['flying'],
	    power: 60,
	    description: [
	    	'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.', '造成飞行属性伤害。<br><br>必定命中。']
	},
	'auroraBeam': {
	    name: ['Aurora Beam', 'Rayo aurora', '极光束'],
	    class: 'special',
	    type: type['ice'],
	    power: 65,
	    description: [
	    	'Deals Ice-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Hielo. <br><br>No tiene ningun efecto secundario.', '造成冰属性伤害。<br><br>可能使目标减速。']
	},
	'icyWind': {
	    name: ['Icy Wind', 'Viento hielo', '冰冻之风'],
	    class: 'special',
	    type: type['ice'],
	    power: 55,
	    chargeBonus: 30,
		description: [
  			'Deals Ice-type damage. <br><br>After hitting, it gains 30% of charge energy.',
			'Causa daño de tipo Hielo. <br><br>Después de atacar, consigue un 30% de barra de carga.',
  			'造成冰属性伤害。<br><br>攻击后获得30%蓄力能量。'
  		]
	},
	'lick': {
	    name: ['Lick', 'Lengüetazo', '舌舔'],
	    class: 'physical',
	    type: type['ghost'],
	    power: 30,
	    stun: 14,
		stunChance: 0.15,
		description: [
			'Deals Ghost-type damage. <br><br>Has a 15% chance to stun the target for 1.4 second.',
	    	'Causa daño de tipo Fantasma. <br><br>Tiene una probablidad del 15% de aturdir al objetivo 1.4 segundo.', '造成幽灵属性伤害。<br><br>可能使目标麻痹。']
	},
	'mudBomb': {
	    name: ['Mud Bomb', 'Bomba fango', '泥巴炸弹'],
	    class: 'special',
	    type: type['ground'],
	    power: 65,
	    description: [
	    	'Deals Ground-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Tierra. <br><br>No tiene ningun efecto secundario.',
	    	'造成地面属性伤害。<br><br>无附加效果。'
	    ]
	},
	'astonish': {
	    name: ['Astonish', 'Impresionar', '惊吓'],
	    class: 'physical',
	    type: type['ghost'],
	    power: 30,
	    stun: 10,
		stunChance: 0.5,
		description: [
			'Deals Ghost-type damage. <br><br>Has a 50% chance to stun the target for 1 second.',
	    	'Causa daño de tipo Fantasma. <br><br>Tiene una probablidad del 50% de aturdir al objetivo 1 segundo.',
			'造成幽灵属性伤害。<br><br>有50%几率使目标眩晕1秒。'
		]
	},
	'feintAttack': {
	    name: ['Feint Attack', 'Finta', '暗算'],
	    class: 'physical',
	    type: type['dark'],
	    power: 60,
	    electroBall: true,
	    description: [
	    	"Deals Dark-type damage. <br><br>Uses the user's Speed stat to calculate damage.",
	    	'Causa daño de tipo Siniestro. <br><br>Golpea con el valor de Velocidad.',
	    	'造成恶属性伤害。<br><br>必定先手攻击。'
	    ]
	},
	'shadowBall': {
	    name: ['Shadow Ball', 'Bola Sombra', '暗影球'],
	    class: 'special',
	    type: type['ghost'],
	    power: 80,
	    description: [
	    	'Deals Ghost-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Fantasma. <br><br>No tiene ningun efecto secundario.', '造成幽灵属性伤害。<br><br>无附加效果。']
	},
	'darkPulse': {
	    name: ['Dark Pulse', 'Pulso Umbrío', '恶之波动'],
	    class: 'special',
	    type: type['dark'],
	    power: 80,
	    stun: 10,
		stunChance: 0.2,
		description: [
			'Deals Dark-type damage. <br><br>Has a 20% chance to stun the target for 1 second.',
	    	'Causa daño de tipo Siniestro. <br><br>Tiene una probablidad del 20% de aturdir al objetivo 1 segundo.', '造成恶属性伤害。<br><br>无附加效果。']
	},
	'ironTail': {
	    name: ['Iron Tail', 'Cola férrea', '铁尾'],
	    class: 'physical',
	    type: type['steel'],
	    power: 100,
	    description: [
	    	'Deals Steel-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Acero. <br><br>No tiene ningun efecto secundario.', '造成钢属性伤害。<br><br>无附加效果。']
	},
	'crabhammer': {
	    name: ['Crabhammer', 'Martillazo', '蟹钳锤'],
	    class: 'physical',
	    type: type['water'],
	    power: 100,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Water-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Agua. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成水属性伤害。<br><br>无附加效果。']
	},
	'solarBeam': {
	    name: ['Solar Beam', 'Rayo Solar', '日光束'],
	    class: 'special',
	    type: type['grass'],
	    power: 120,
	    autoStun: 10,
	    description: [
	    	'Deals Grass-type damage. <br><br>After attacking, the user is stunned for 1 second.',
	    	'Causa daño de tipo Planta. <br><br>Después de atacar, el usuario se aturde 1 segundo.', '造成草属性伤害。<br><br>无附加效果。']
	},
	'fly': {
	    name: ['Fly', 'Vuelo', '飞翔'],
	    class: 'physical',
	    type: type['flying'],
	    power: 90,
	    description: [
	    	'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.', '造成飞行属性伤害。<br><br>无附加效果。']
	},
	'dragonBreath': {
	    name: ['Dragon Breath', 'Dragoaliento', '龙息'],
	    class: 'special',
	    type: type['dragon'],
	    power: 60,
	    slow: 12,
		description: [
			'Deals Dragon-type damage. <br><br>Slows the target for 1.2 seconds.',
	    	'Causa daño de tipo Dragon. <br><br>Ralentiza al objetivo 1.2 segundos.',
			'造成龙属性伤害。<br><br>使目标减速1.2秒。'
		]
	},
	'eggBomb': {
	    name: ['Egg Bomb', 'Bomba Huevo', '炸蛋'],
	    class: 'physical',
	    type: type['normal'],
	    power: 100,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'boneClub': {
	    name: ['Bone Club', 'Hueso Palo', '骨棒'],
	    class: 'physical',
	    type: type['ground'],
	    power: 65,
	    stun: 10,
		stunChance: 0.1,
		description: [
			'Deals Ground-type damage. <br><br>Has a 10% chance to stun the target for 1 second.',
	    	'Causa daño de tipo Tierra. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 1 segundo.', '造成地面属性伤害。<br><br>无附加效果。']
	},
	'bonemerang': {
	    name: ['Bonemerang', 'Huesomerang', '骨棒回旋镖'],
	    class: 'physical',
	    type: type['ground'],
	    power: 60,
	    combo: [0, 60],
	    chargeBonus: 50,
	    description: [
	    	'Deals Ground-type damage. <br><br>After hitting, it gains 50% of charge energy. <br><br>The second hit doubles its power.',
	    	'Causa daño de tipo Tierra. <br><br>Después de atacar, consigue un 50% de barra de carga. <br><br>El segundo golpe duplica su potencia.', '造成地面属性伤害。<br><br>无附加效果。']
	},
	'rollingKick': {
	    name: ['Rolling Kick', 'Patada giro', '回旋踢'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 60,
	    stun: 20,
		stunChance: 0.1,
		description: [
			'Deals Fighting-type damage. <br><br>Has a 10% chance to stun the target for 2 seconds.',
	    	'Causa daño de tipo Lucha. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 2 segundos.', '造成格斗属性伤害。<br><br>无附加效果。']
	},
	'jumpKick': {
	    name: ['Jump Kick', 'Patada salto', '飞踢'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 100,
	    autoDamage: 0.1,
	    description: [
	    	'Deals Fighting-type damage. <br><br>The user takes 10% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Lucha. <br><br>El usuario sufre un 10% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成格斗属性伤害。<br><br>未命中时自身受伤。']
	},
	'highJumpKick': {
	    name: ['High Jump Kick', 'Patada salto alta', '飞膝踢'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 130,
	    autoDamage: 0.3,
	    description: [
	    	'Deals Fighting-type damage. <br><br>The user takes 30% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Lucha. <br><br>El usuario sufre un 30% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.',
	    	'造成格斗属性伤害。<br><br>使用者受到反伤。'
	    ]
	},
	'tropicalKick': {
	    name: ['Tropical Kick', 'Patada Tropical', '热带踢'],
	    class: 'physical',
	    type: type['grass'],
	    power: 80,
	    description: [
	    	'Deals Grass-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Planta. <br><br>No tiene ningun efecto secundario.',
	    	'造成草属性伤害。<br><br>无附加效果。'
	    ]
	},
	'smokeScreen': {
	    name: ['Smoke Screen', 'Pantalla humo', '烟幕'],
	    class: 'special',
	    type: type['fire'],
	    power: 20,
	    slow: 8,
		description: [
			'Deals Fire-type damage. <br><br>Slows the target for 0.8 seconds.',
	    	'Causa daño de tipo Fuego. <br><br>Ralentiza al objetivo 0.8 segundos.',
			'造成火属性伤害。<br><br>使目标减速0.8秒。'
		]
	},
	'cometPunch': {
	    name: ['Comet Punch', 'Puño Cometa', '连续拳'],
	    class: 'physical',
	    type: type['normal'],
	    power: 65, 
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'drainPunch': {
	    name: ['Drain Punch', 'Puño Drenaje', '吸取拳'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 60,
	    restore: 0.5,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Lucha. <br><br>Cura la mitad del daño causado.', '造成格斗属性伤害。<br><br>回复造成伤害50%的HP。']
	},
	'firePunch': {
	    name: ['Fire Punch', 'Puño Fuego', '火焰拳'],
	    class: 'physical',
	    type: type['fire'],
	    power: 75,
	    restoreOnKill: 0.12,
		description: [
			'Deals Fire-type damage. <br><br>Restores 12% HP if the target is weakened.',
			'Causa daño de tipo Fire. <br><br>Recupera 12% de PS si debilita al objetivo.'
		, '造成火属性伤害。<br><br>可能使目标灼伤。']
	},
	'icePunch': {
	    name: ['Ice Punch', 'Puño Hielo', '冰冻拳'],
	    class: 'physical',
	    type: type['ice'],
	    power: 75,
	    slow: 8,
		description: [
			'Deals Ice-type damage. <br><br>Slows the target for 0.8 seconds.',
	    	'Causa daño de tipo Hielo. <br><br>Ralentiza al objetivo 0.8 segundos.', '造成冰属性伤害。<br><br>可能使目标减速。']
	},
	'hornAttack': {
	    name: ['Horn Attack', 'Cornada', '角撞'],
	    class: 'physical',
	    type: type['normal'],
	    power: 65,
	    description: [
	    	'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.', '造成一般属性伤害。<br><br>无附加效果。']
	},
	'constrict': {
	    name: ['Constrict', 'Constricción', '缠绕'],
	    class: 'physical',
	    type: type['normal'],
	    power: 15,
	    stun: 15,
		stunChance: 0.3,
		description: [
			'Deals Normal-type damage. <br><br>Has a 30% chance to stun the target for 1.5 seconds.',
	    	'Causa daño de tipo Normal. <br><br>Tiene una probablidad del 30% de aturdir al objetivo 1.5 segundos.',
			'造成一般属性伤害。<br><br>有30%几率使目标眩晕1.5秒。'
		]
	},
	'thunder': {
	    name: ['Thunder', 'Trueno', '打雷'],
	    class: 'special',
	    type: type['electric'],
	    power: 110,
	    description: [
	    	'Deals Electric-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Electrico. <br><br>No tiene ningun efecto secundario.', '造成电属性伤害。<br><br>可能使目标麻痹。']
	},
	'iceFang': {
	    name: ['Ice Fang', 'Colmillo Hielo', '冰冻牙'],
	    class: 'physical',
	    type: type['ice'],
	    power: 65,
	    stun: 15,
		stunChance: 0.3,
		description: [
			'Deals Ice-type damage. <br><br>Has a 30% chance to stun the target for 1.5 seconds.',
	    	'Causa daño de tipo Hielo. <br><br>Tiene una probablidad del 30% de aturdir al objetivo 1.5 segundos.',
			'造成冰属性伤害。<br><br>有30%几率使目标眩晕1.5秒。'
		]
	},
	'outrage': {
	    name: ['Outrage', 'Enfado', '逆鳞'],
	    class: 'physical',
	    type: type['dragon'],
	    power: 120,
	    autoDamage: 0.2,
	    description: [
	    	'Deals Dragon-type damage. <br><br>The user takes 20% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Dragón. <br><br>El usuario sufre un 20% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成龙属性伤害。<br><br>无附加效果。']
	},
	'thunderbolt': {
	    name: ['Thunderbolt', 'Rayo', '十万伏特'],
	    class: 'special',
	    type: type['electric'],
	    power: 90,
	    stun: 15,
		stunChance: 0.1,
		description: [
			'Deals Electric-type damage. <br><br>Has a 10% chance to stun the target for 1.5 second.',
	    	'Causa daño de tipo Electrico. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 1.5 segundo.', '造成电属性伤害。<br><br>可能使目标麻痹。']
	},
	'signalBeam': {
	    name: ['Signal Beam', 'Rayo señal', '信号光束'],
	    class: 'special',
	    type: type['bug'],
	    power: 75,
	    description: [
	    	'Deals Bug-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Bicho. <br><br>No tiene ningun efecto secundario.', '造成虫属性伤害。<br><br>可能使目标混乱。']
	},
	'hurricane': {
	    name: ['Hurricane', 'Vendaval', '暴风'],
	    class: 'special',
	    type: type['flying'],
	    power: 110,
	    description: [
	    	'Deals Flying-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Volador. <br><br>No tiene ningun efecto secundario.',
	    	'造成飞行属性伤害。<br><br>无附加效果。'
	    ]
	},
	'ancientPower': {
	    name: ['Ancient Power', 'Poder Pasado', '原始之力'],
	    class: 'special',
	    type: type['rock'],
	    power: 60,
	    description: [
	    	'Deals Rock-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Roca. <br><br>No tiene ningun efecto secundario.', '造成岩石属性伤害。<br><br>可能提高自身全能力。']
	},
	'aquaJet': {
	    name: ['Aqua Jet', 'Aqua Jet', '水流喷射'],
	    class: 'physical',
	    type: type['water'],
	    power: 40,
	    chargeBonus: 35,
		description: [
  			'Deals Water-type damage. <br><br>After hitting, it gains 35% of charge energy.',
			'Causa daño de tipo Agua. <br><br>Después de atacar, consigue un 35% de barra de carga.', '造成水属性伤害。<br><br>优先攻击。']
	},
	'stoneEdge': {
	    name: ['Stone Edge', 'Roca afilada', '尖石攻击'],
	    class: 'physical',
	    type: type['rock'],
	    power: 100,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Rock-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Roca. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成岩石属性伤害。<br><br>容易击中要害。']
	},
	'twister': {
	    name: ['Twister', 'Ciclón', '龙卷风'],
	    class: 'special',
	    type: type['dragon'],
	    power: 40,
	    description: [
	    	'Deals Dragon-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Dragón. <br><br>No tiene ningun efecto secundario.', '造成龙属性伤害。<br><br>无附加效果。']
	},
	'auraSphere': {
	    name: ['Aura Sphere', 'Esfera aural', '波导弹'],
	    class: 'special',
	    type: type['fighting'],
	    power: 80,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Lucha. <br><br>No tiene ningun efecto secundario.', '造成格斗属性伤害。<br><br>必定命中。']
	},
	'dragonPulse': {
	    name: ['Dragon Pulse', 'Pulso dragón', '龙之波动'],
	    class: 'special',
	    type: type['dragon'],
	    power: 85,
	    description: [
	    	'Deals Dragon-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Dragón. <br><br>No tiene ningun efecto secundario.', '造成龙属性伤害。<br><br>无附加效果。']
	},
	'spark': {
	    name: ['Spark', 'Chispa', '电火花'],
	    class: 'physical',
	    type: type['electric'],
	    power: 65,
	    stun: 12,
		stunChance: 0.3,
		description: [
			'Deals Electric-type damage. <br><br>Has a 30% chance to stun the target for 1.2 seconds.',
	    	'Causa daño de tipo Electrico. <br><br>Tiene una probablidad del 30% de aturdir al objetivo 1.2 segundos.', '造成电属性伤害。<br><br>可能使目标麻痹。']
	},
	'magicalLeaf': {
	    name: ['Magical Leaf', 'Hoja mágica', '魔法叶'],
	    class: 'special',
	    type: type['grass'],
	    power: 60,
	    description: [
	    	'Deals Grass-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Planta. <br><br>No tiene ningun efecto secundario.', '造成草属性伤害。<br><br>必定命中。']
	},
	'gunkShot': {
	    name: ['Gunk Shot', 'Lanzamugre', '垃圾射击'],
	    class: 'physical',
	    type: type['poison'],
	    power: 120,
	    description: [
	    	'Deals Poison-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Veneno. <br><br>No tiene ningun efecto secundario.', '造成毒属性伤害。<br><br>可能使目标中毒。']
	},
	'shadowClaw': {
	    name: ['Shadow Claw', 'Garra umbría', '暗影爪'],
	    class: 'physical',
	    type: type['dark'],
	    power: 70,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Dark-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Siniestro. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成幽灵属性伤害。<br><br>容易击中要害。']
	},
	'snarl': {
	    name: ['Snarl', 'Alarido', '大声咆哮'],
	    class: 'special',
	    type: type['dark'],
	    power: 55,
	    description: [
	    	'Deals Dark-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Siniestro. <br><br>No tiene ningun efecto secundario.',
	    	'造成恶属性伤害。<br><br>无附加效果。'
	    ]
	},
	'eruption': {
	    name: ['Eruption', 'Estallido', '喷火'],
	    class: 'special',
	    type: type['fire'],
	    power: 150,
	    autoDamage: 0.5,
	    description: [
	    	'Deals Fire-type damage. <br><br>The user takes 50% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Fuego. <br><br>El usuario sufre un 50% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成火属性伤害。<br><br>自身HP越高威力越大。']
	},
	'flareBlitz': {
	    name: ['Flare Blitz', 'Envite ígneo', '闪焰冲锋'],
	    class: 'physical',
	    type: type['fire'],
	    power: 120,
	    autoDamage: 0.25,
	    description: [
	    	'Deals Fire-type damage. <br><br>The user takes 25% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Fuego. <br><br>El usuario sufre un 25% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成火属性伤害。<br><br>自身受到少量反伤，可能使目标灼伤。']
	},
	'crunch': {
	    name: ['Crunch', 'Triturar', '咬碎'],
	    class: 'physical',
	    type: type['dark'],
	    power: 80,
	    description: [
	    	'Deals Dark-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Siniestro. <br><br>No tiene ningun efecto secundario.', '造成恶属性伤害。<br><br>无附加效果。']
	},
	'venoShock': {
	    name: ['Venoshock', 'Carga tóxica', '毒液冲击'],
	    class: 'special',
	    type: type['poison'],
	    power: 40,
	    combo: [0, 50, 100], 
	    description: [
	    	'Deals Poison-type damage. <br><br>Increases its power by 50 with each hit up to a maximum of 140. <br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Veneno. <br><br>Aumenta su poder en 50 con cada golpe hasta un máximo de 140. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.', '造成毒属性伤害。每次命中威力增加50，最高可达140。'
	    ]
	},
	'shadowSneak': {
	    name: ['Shadow Sneak', 'Sombra vil', '影子偷袭'],
	    class: 'physical',
	    type: type['ghost'],
	    power: 40,
	    chargeBonus: 25,
		description: [
  			'Deals Ghost-type damage. <br><br>After hitting, it gains 25% of charge energy.',
			'Causa daño de tipo Fantasma. <br><br>Después de atacar, consigue un 25% de barra de carga.', '造成幽灵属性伤害。<br><br>优先攻击。']
	},
	'crossPoison': {
	    name: ['Cross Poison', 'Veneno X', '十字毒刃'],
	    class: 'physical',
	    type: type['poison'],
	    power: 70,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Poison-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Veneno. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成毒属性伤害。<br><br>容易击中要害，可能使目标中毒。']
	},
	'electroBall': {
	    name: ['Electro Ball', 'Bola voltio', '电球'],
	    class: 'special',
	    type: type['electric'],
	    power: 60,
	    electroBall: true,
	    description: [
	    	"Deals Electric-type damage. <br><br>Uses the user's Speed stat to calculate damage.",
	    	'Causa daño de tipo Electrico. <br><br>Golpea con el valor de Velocidad.',
	    	'造成电属性伤害。<br><br>以自身速度计算伤害。'
	    ]
	},
	'foulPlay': {
	    name: ['Foul Play', 'Juego sucio', '欺诈'],
	    class: 'physical',
	    type: type['dark'],
	    power: 95,
	    foulPlay: true,
	    description: [
	    	"Deals Dark-type damage. <br><br>Uses the target's Attack stat to calculate damage.",
	    	'Causa daño de tipo Siniestro. <br><br>Golpea con el valor de Ataque del objetivo.',
	    	'造成恶属性伤害。<br><br>以对手的攻击计算伤害。'
	    ]
	},
	'sludgeWave': {
	    name: ['Sludge Wave', 'Onda tóxica', '污泥波'],
	    class: 'special',
	    type: type['poison'],
	    power: 95,
		description: [
			'Deals Poison-type damage. <br><br>Has no secondary effect.',
			'Causa daño de tipo Veneno. <br><br>No tiene ningun efecto secundario.', '造成毒属性伤害。无附加效果。'
		]
	},
	'gigaDrain': {
	    name: ['Giga Drain', 'Gigadrenado', '终极吸取'],
	    class: 'special',
	    type: type['grass'],
	    power: 75,
	    restore: 0.5,
	    description: [
	    	'Deals Grass-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Planta. <br><br>Cura la mitad del daño causado.', '造成草属性伤害。<br><br>回复造成伤害50%的HP。']
	},
	'pursuit': {
	    name: ['Pursuit', 'Persecución', '追打'],
	    class: 'physical',
	    type: type['dark'],
	    power: 40,
	    pursuit: true,
	    description: [
	    	"Deals Dark-type damage. <br><br>Sets the user's charge bar equal to the target's.",
	    	'Causa daño de tipo Siniestro. <br><br>Iguala la barra de carga con la del objetivo.',
	    	'造成恶属性伤害。<br><br>无附加效果。'
	    ]
	},
	'gyroBall': {
	    name: ['Gyro Ball', 'Giro bola', '陀螺球'],
	    class: 'physical',
	    type: type['steel'],
	    power: 70, 
	    electroBall: true,
	    description: [
	    	"Deals Steel-type damage. <br><br>Uses the user's Speed stat to calculate damage.",
	    	'Causa daño de tipo Acero. <br><br>Golpea con el valor de Velocidad.',
	    	'造成钢属性伤害。<br><br>自身速度越慢威力越大。'
	    ]
	},
	'drillRun': {
	    name: ['Drill Run', 'Taladradora', '直冲钻'],
	    class: 'physical',
	    type: type['ground'],
	    power: 80,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Ground-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Tierra. <br><br>Su probablidad de crítico es mayor de lo normal.',
	    	'造成地面属性伤害。<br><br>容易击中要害。'
	    ]
	},
	'earthPower': {
	    name: ['Earth Power', 'Tierra viva', '大地之力'],
	    class: 'special',
	    type: type['ground'],
	    power: 90,
	    description: [
	    	'Deals Ground-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Tierra. <br><br>No tiene ningun efecto secundario.', '造成地面属性伤害。<br><br>无附加效果。']
	},
	'grassPledge': {
	    name: ['Grass Pledge', 'Voto planta', '草之誓约'],
	    class: 'special',
	    type: type['grass'],
	    power: 35,
	    bonusLevel: 2,
	    description: [
	    	"Deals Grass-type damage. <br><br>If the target's level is higher than the user's, damage is increased by 100%.",
	    	'Causa daño de tipo Planta. <br><br>Si el nivel del objetivo es superior al usuario, aumenta el daño un 100%.',
	    	'造成草属性伤害。<br><br>与水或火属性组合时威力翻倍并附加效果。'
	    ]
	},
	'firePledge': {
	    name: ['Fire Pledge', 'Voto fuego', '火之誓约'],
	    class: 'special',
	    type: type['fire'],
	    power: 35,
	    bonusLevel: 2,
	    description: [
	    	"Deals Fire-type damage. <br><br>If the target's level is higher than the user's, damage is increased by 100%.",
	    	'Causa daño de tipo Fuego. <br><br>Si el nivel del objetivo es superior al usuario, aumenta el daño un 100%.',
	    	'造成火属性伤害。<br><br>与草或水属性组合时威力翻倍并附加效果。'
	    ]
	},
	'waterPledge': {
	    name: ['Water Pledge', 'Voto agua', '水之誓约'],
	    class: 'special',
	    type: type['water'],
	    power: 35,
	    bonusLevel: 2,
	    description: [
	    	"Deals Water-type damage. <br><br>If the target's level is higher than the user's, damage is increased by 100%.",
	    	'Causa daño de tipo Agua. <br><br>Si el nivel del objetivo es superior al usuario, aumenta el daño un 100%.',
	    	'造成水属性伤害。<br><br>与火或草属性组合时威力翻倍并附加效果。'
	    ]
	},
	'armThrust': {
	    name: ['Arm Thrust', 'Empujón', '猛推'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 25,
	    stun: 8,
		stunChance: 0.5,
		combo: [0, 5, 10, 15, 20, 25], 
		description: [
			`Deals Fighting-type damage. <br><br>Increases its power by 10 with each hit up to a maximum of 40. <br><br>
			Upon ending the sequence or changing moves, it returns to minimum damage.
			Has a 50% chance to stun the target for 0.8 seconds.`,
	    	`Causa daño de tipo Lucha. <br><br>Aumenta su poder en 5 con cada golpe hasta un máximo de 50. <br><br>
	    	Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo. <br><br>
	    	Tiene una probablidad del 50% de aturdir al objetivo 0.8 segundos.`,
			'造成格斗属性伤害。<br><br>连续使用威力提升，最多叠加5次。<br><br>有50%几率使目标眩晕0.8秒。换招后伤害重置。'
		]
	},
	'payback': {
	    name: ['Payback', 'Vendetta', '以牙还牙'],
	    class: 'physical',
	    type: type['dark'],
	    power: 40,
	    payback: 10,
	    description: [
	    	'Deals Dark-type damage. <br><br>Increases its power by 10 for each weakened ally.',
	    	'Causa daño de tipo Siniestro. <br><br>Aumenta en 10 su poder por cada aliado debilitado.'
	    , '造成恶属性伤害。<br><br>受到伤害后威力翻倍。']
	},
	'iceBall': {
	    name: ['Ice Ball', 'Bola hielo', '冰球'],
	    class: 'physical',
	    type: type['ice'],
	    power: 15,
	    combo: [0, 15, 45, 105, 225],
	    description: [
	    	'Deals Ice-type damage. <br><br>Doubles its power with each hit up to a maximum of 240. <br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Hielo. <br><br>Duplica su poder con cada golpe hasta un máximo de 240. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.', '造成冰属性伤害。每次命中威力翻倍，最高可达240。'
	    ]
	},
	'galvanicQuack': {
	    name: ['Galvanic Quack', 'Graznido galvánico', '电击呱'],
	    class: 'special',
	    type: type['flying'],
	    power: 90,
	    combo: [0, 55, 110],
	    description: [
	    	'Deals Flying-type damage. <br><br><br>Increases its power by 55 with each hit up to a maximum of 200. <br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Volador. <br><br>Aumenta su poder en 55 con cada golpe hasta un máximo de 200. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.',
	    	'造成飞行属性伤害。每次命中威力增加55，最高可达200。连续攻击结束或切换招式后威力恢复初始值。'
	    ]
	},
	'metalicSlash': {
	    name: ['Metalic Slash', 'Corte metálico', '金属斩'],
	    class: 'physical',
	    type: type['steel'],
	    power: 120,
	    criticalBonus: 1,
	    description: [
	    	'Deals Steel-type damage. <br><br><br>Is always critical.',
	    	'Causa daño de tipo Acero. <br><br>Siempre es crítico.', '造成钢属性伤害。<br><br>必定击中要害。'
	    ]
	},
	'hiddenPower': {
		name: ['Hidden Power', 'Poder oculto', '觉醒力量'],
		class: 'special',
		type: type['normal'],
		power: 60,
		description: [
			'Deals Normal-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Normal. <br><br>No tiene ningun efecto secundario.',
			'造成与使用者属性相同的伤害。<br><br>效果随机变化。'
		]
	},
	'prismaticPledge': {
		name: ['Prismatic Pledge', 'Voto prismático', '棱镜誓约'],
		class: 'special',
		type: type['normal'],
		prismatic: true,
		power: 120,
		description: [
			"Deals damage of the pokemon's main type. <br><br>Has no secondary effect.",
	    	'Causa daño del tipo principal del pokemon. <br><br>No tiene ningun efecto secundario.',
			'造成与宝可梦主属性相同的伤害。<br><br>无附加效果。'
		]
	},
	'fireSpin': {
	    name: ['Fire Spin', 'Giro fuego', '火焰旋涡'],
	    class: 'special',
	    type: type['fire'],
	    power: 35,
	    combo: [0, 10, 20, 30, 40, 50],
	    description: [
	    	'Deals Fire-type damage. <br><br>Increases its power by 10 with each hit up to a maximum of 85.<br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Fuego. <br><br>Aumenta su poder en 10 con cada golpe hasta un máximo de 85. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.'
	    , '造成火属性伤害。<br><br>束缚目标。']
	},
	'rageFist': {
	    name: ['Rage Fist', 'Puño furia', '愤怒之拳'],
	    class: 'physical',
	    type: type['ghost'],
	    power: 20,
	    combo: [50, 50],
	    description: [
	    	'Deals Ghost-type damage. <br><br>Increases its power by 50 with each hit up to a maximum of 120.<br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Fantasma. <br><br>Aumenta su poder en 50 con cada golpe hasta un máximo de 120. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.', '造成幽灵属性伤害。每次命中威力增加50，最高可达120。'
	    ]
	},
	'leafBlade': {
	    name: ['Leaf Blade', 'Hoja aguda', '叶刃'],
	    class: 'physical',
	    type: type['grass'],
	    power: 90,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Grass-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Planta. <br><br>Su probablidad de crítico es mayor de lo normal.',
	    	'造成草属性伤害。<br><br>容易击中要害。'
	    ]
	},
	'psychoCut': {
	    name: ['Psycho Cut', 'Psicocorte', '精神利刃'],
	    class: 'physical',
	    type: type['psychic'],
	    power: 70,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Psychic-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Psíquico. <br><br>Su probablidad de crítico es mayor de lo normal.', '造成超能力属性伤害。<br><br>容易击中要害。']
	},
	'chillingWater': {
	    name: ['Chilling Water', 'Agua fría', '冷水'],
	    class: 'special',
	    type: type['water'],
	    power: 55,
	    stun: 15,
		stunChance: 0.5,
		description: [
			'Deals Water-type damage. <br><br>Has a 50% chance to stun the target for 1.5 seconds.',
	    	'Causa daño de tipo Agua. <br><br>Tiene una probablidad del 50% de aturdir al objetivo 1.5 segundos.',
			'造成水属性伤害。<br><br>有50%几率使目标眩晕1.5秒。'
		]
	},
	'sacredFire': {
	    name: ['Sacred Fire', 'Fuego sagrado', '神圣之火'],
	    class: 'special',
	    type: type['fire'],
	    power: 180,
	    autoDamage: 0.3,
	    description: [
	    	'Deals Fire-type damage. <br><br>The user takes 30% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Fuego. <br><br>El usuario sufre un 30% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.',
	    	'造成火属性伤害。<br><br>使用者受到反伤。'
	    ]
	},
	'rockSmash': {
	    name: ['Rock Smash', 'Golpe roca', '碎岩'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 40,
	    slow: 12,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Slows the target for 1.2 seconds.',
	    	'Causa daño de tipo Lucha. <br><br>Ralentiza al objetivo 1.2 segundos.', '造成格斗属性伤害。<br><br>可以打碎岩石。']
	},
	'sandTomb': {
	    name: ['Sand Tomb', 'Bucle arena', '流沙地狱'],
	    class: 'physical',
	    type: type['ground'],
	    power: 35,
	    combo: [0, 10, 20, 30, 40, 50],
	    description: [
	    	'Deals Ground-type damage. <br><br>Increases its power by 10 with each hit up to a maximum of 85.<br><br>Upon ending the sequence or changing moves, it returns to minimum damage.',
	    	'Causa daño de tipo Tierra. <br><br>Aumenta su poder en 10 con cada golpe hasta un máximo de 85. <br><br>Al terminar la secuencia o cambiar de movimiento vuelve al daño mínimo.'
	    , '造成地面属性伤害。<br><br>束缚目标。']
	},
	'poisonTail': {
	    name: ['Poison Tail', 'Cola Veneno', '毒尾'],
	    class: 'physical',
	    type: type['poison'],
	    power: 50,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Poison-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Veneno. <br><br>Su probablidad de crítico es mayor de lo normal.',
	    	'造成毒属性伤害。<br><br>容易击中要害。'
	    ]
	},
	'skyUppercut': {
	    name: ['Sky Uppercut', 'Gancho Alto', '升天拳'],
	    class: 'physical',
	    type: type['fighting'],
	    power: 85,
	    description: [
	    	'Deals Fighting-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Lucha. <br><br>No tiene ningun efecto secundario.',
	    	'造成格斗属性伤害。<br><br>无附加效果。'
	    ]
	},
	'bounce': {
	    name: ['Bounce', 'Bote', '弹跳'],
	    class: 'physical',
	    type: type['flying'],
	    power: 85,
	    stun: 18,
		stunChance: 0.12,
	    description: [
	    	'Deals flying-type damage. <br><br>Has a 12% chance to stun the target for 1.8 seconds.',
	    	'Causa daño de tipo Volador. <br><br>Tiene una probablidad del 12% de aturdir al objetivo 1.8 segundos.',
	    	'造成飞行属性伤害。<br><br>有12%几率使目标眩晕1.8秒。'
	    ]
	},
	'blazeKick': {
	    name: ['Blaze Kick', 'Patada ígnea', '火焰踢'],
	    class: 'physical',
	    type: type['fire'],
	    power: 85,
	    criticalBonus: 0.0625,
	    description: [
	    	'Deals Fire-type damage. <br><br>Has a higher than usual critical hit chance.',
	    	'Causa daño de tipo Fuego. <br><br>Su probablidad de crítico es mayor de lo normal.',
	    	'造成火属性伤害。<br><br>容易击中要害。'
	    ]
	},
	'needleArm': {
	    name: ['Needle Arm', 'Brazo Pincho', '尖刺臂'],
	    class: 'physical',
	    type: type['grass'],
	    power: 60,
	    stun: 20,
		stunChance: 0.25,
		description: [
			'Deals Grass-type damage. <br><br>Has a 25% chance to stun the target for 2 seconds.',
	    	'Causa daño de tipo Planta. <br><br>Tiene una probablidad del 25% de aturdir al objetivo 2 segundos.',
			'造成草属性伤害。<br><br>有25%几率使目标眩晕2秒。'
		]
	},
	'dragonClaw': {
	    name: ['Dragon Claw', 'Garra Dragón', '龙爪'],
	    class: 'physical',
	    type: type['dragon'],
	    power: 80,
	    description: [
	    	'Deals Dragon-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Dragón. <br><br>No tiene ningun efecto secundario.', '造成龙属性伤害。<br><br>无附加效果。']
	},
	'headSmash': {
	    name: ['Head Smash', 'Testarazo', '双刃头锤'],
	    class: 'physical',
	    type: type['rock'],
	    power: 150,
	    autoDamage: 0.5,
	    description: [
	    	'Deals Rock-type damage. <br><br>The user takes 50% of the damage dealt. <br><br>This move cannot knock out the user.',
	    	'Causa daño de tipo Roca. <br><br>El usuario sufre un 50% del daño causado. <br><br>Este movimiento no puede debilitar al usuario.', '造成岩石属性伤害。<br><br>自身受到大量反伤。']
	},
	'electroweb': {
	    name: ['Electroweb', 'Electrotela', '电网'],
	    class: 'special',
	    type: type['electric'],
	    power: 65,
	    slow: 20,
		description: [
			'Deals Electric-type damage. <br><br>Slows the target for 2 seconds.',
	    	'Causa daño de tipo Electrico. <br><br>Ralentiza al objetivo 2 segundos.',
			'造成电属性伤害。<br><br>使目标减速2秒。'
		]
	},
	'weatherBall': {
		name: ['Weather Ball', 'Meteorobola', '气象球'],
		class: 'special',
		type: type['normal'],
		prismatic: true,
		power: 80,
		description: [
			"Deals damage of the pokemon's main type. <br><br>Has no secondary effect.",
	    	'Causa daño del tipo principal del pokemon. <br><br>No tiene ningun efecto secundario.',
			'根据当前天气改变属性并造成伤害。'
		]
	},
	'bouncyBubble': {
	    name: ['Bouncy Bubble', 'Vapordrenaje', '弹弹泡泡'],
	    class: 'special',
	    type: type['water'],
	    power: 90,
	    restore: 0.5,
	    description: [
	    	'Deals Water-type damage. <br><br>Heals the user for half of the damage dealt.',
	    	'Causa daño de tipo Agua. <br><br>Cura la mitad del daño causado.',
	    	'造成水属性伤害。<br><br>回复造成伤害一半的HP。'
	    ]
	},
	'mirrorShot': {
		name: ['Mirror Shot ', 'Disparo espejo', '镜光射击'],
		class: 'special',
		type: type['steel'],
		power: 65,
		description: [
			'Deals Steel-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Acero. <br><br>No tiene ningun efecto secundario.',
			'造成钢属性伤害。<br><br>无附加效果。'
		]
	},
	'fellStinger': {
	    name: ['Fell Stinger', 'Aguijón letal', '致命针刺'],
	    class: 'physical',
	    type: type['bug'],
	    power: 50,
		chargeOnKill: 75,
		description: [
			'Deals Bug-type damage. <br><br>It gains 75% of charge energy if the target is weakened.',
			'Causa daño de tipo Bicho. <br><br>Consigue un 75% de barra de carga si debilita al objetivo.', '造成虫属性伤害。<br><br>若目标HP较低则获得75%蓄力能量。'
		]
	},
	'firstImpression': {
	    name: ['First Impression', 'Escaramuza', '迎头一击'],
	    class: 'physical',
	    type: type['bug'],
	    power: 90,
	    fakeOut: true,
	    description: [
	    	'Deals Bug-type damage. <br><br>If the target is at full HP, their charge bar is reset to 0.',
	    	'Causa daño de tipo Bicho. <br><br>Si el objetivo tiene PS completos, vuelve su barra de carga a 0.', '造成虫属性伤害。若目标HP全满，将其蓄力条归零。'
	    ]
	},
	'waterShuriken': {
	    name: ['Water Shuriken', 'Shuriken de agua', '水手里剑'],
	    class: 'special',
	    type: type['water'],
	    power: 10,
	    chargeBonus: 80,
		description: [
  			'Deals Water-type damage. <br><br>After hitting, it gains 80% of charge energy.',
			'Causa daño de tipo Agua. <br><br>Después de atacar, consigue un 80% de barra de carga.',
  			'造成水属性伤害。<br><br>攻击后获得80%蓄力能量。'
  		]
	},
	'accelerock': {
		name: ['Accelerock', 'Roca veloz', '加速岩'],
		class: 'physical',
		type: type['rock'],
		power: 40,
		chargeBonus: 25,
		description: [
  			'Deals Rock-type damage. <br><br>After hitting, it gains 25% of charge energy.',
			'Causa daño de tipo Roca. <br><br>Después de atacar, consigue un 25% de barra de carga.',
  			'造成岩石属性伤害。<br><br>攻击后获得25%蓄力能量。'
  		]
	},
	'grassyGlide': {
		name: ['Grassy Glide', 'Fitoimpulso', '草滑'],
		class: 'physical',
		type: type['grass'],
		power: 60,
		chargeBonus: 50,
		description: [
  			'Deals Grass-type damage. <br><br>After hitting, it gains 50% of charge energy.',
			'Causa daño de tipo Planta. <br><br>Después de atacar, consigue un 50% de barra de carga.',
  			'造成草属性伤害。<br><br>攻击后获得50%蓄力能量。'
  		]
	},
	'zapCannon': {
	    name: ['Zap Cannon', 'Electrocañón ', '电磁炮'],
	    class: 'special',
	    type: type['electric'],
	    power: 120,
	    stun: 20,
		stunChance: 0.1,
		description: [
			'Deals Electric-type damage. <br><br>Has a 10% chance to stun the target for 2 seconds.',
	    	'Causa daño de tipo Electrico. <br><br>Tiene una probablidad del 10% de aturdir al objetivo 2 segundos.', '造成电属性伤害。<br><br>使目标麻痹。']
	},
	'poltergeist': {
	    name: ['Poltergeist', 'Poltergeist', '灵骚'],
	    class: 'physical',
	    type: type['ghost'],
	    power: 110,
		description: [
			'Deals Ghost-type damage. <br><br>Has no secondary effect.',
	    	'Causa daño de tipo Fantasma. <br><br>No tiene ningun efecto secundario.',
			'造成幽灵属性伤害。<br><br>无附加效果。'
		]
	},
}

export const generateHiddenPower = (typePokemon) => {
	const arrClass = ['special', 'physical'];
	const arrType = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel'] 
	const arrPower = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80] 
	const arrBonus = ['payback', 'slow', 'stun', 'restore', 'restoreOnKill', 'chargeBonus', 'criticalBonus', 'electroBall', 'gold', 'prismatic'];
	const arrPayback = [7, 8, 9, 10, 11, 12];
	const arrSlow = [5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 20, 21, 22];
	const arrStun = [8, 9, 11, 12, 13, 14, 15, 16];
	const arrStunChance = [0.1, 0.2, 0.3];
	const arrRestoreOnKill = [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25];
	const arrCharge = [5, 10, 15, 20, 25, 30];
	const arrGoldBonus = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5];
	const arrGoldBonusMax = [50, 75, 100, 125, 150, 175, 200];

	const selectedClass = arrClass[Math.floor(Math.random() * arrClass.length)]
	const selectedType = arrType[Math.floor(Math.random() * arrType.length)]
	const selectedPower = arrPower[Math.floor(Math.random() * arrPower.length)]
	const selectedBonus = arrBonus[Math.floor(Math.random() * arrBonus.length)]

	let hiddenPower = {
		name: ['Hidden Power', 'Poder oculto', '觉醒力量'],
		class: selectedClass,
		type: type[selectedType],
		power: selectedPower,
		description: [
			`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br>Has no secondary effect.`,
	    	`Causa daño de tipo  ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br>No tiene ningun efecto secundario.`,
		]
	}

	switch(selectedBonus) {
		case 'payback':
			hiddenPower.payback = arrPayback[Math.floor(Math.random() * arrPayback.length)]
			hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br>Increases its power by 10 for each weakened ally.`,
		    	`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br>Aumenta en 10 su poder por cada aliado debilitado.`,
			]
		break;
		case 'slow':
			hiddenPower.slow = arrSlow[Math.floor(Math.random() * arrSlow.length)]
		    hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br>Slows the target for ${hiddenPower.slow / 10} seconds.`,
		    	`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br>Ralentiza al objetivo ${hiddenPower.slow / 10} segundos.`,
			]
		break;
		case 'stun':
			hiddenPower.stun = arrStun[Math.floor(Math.random() * arrStun.length)]
			hiddenPower.stunChance = arrStunChance[Math.floor(Math.random() * arrStunChance.length)]
		    hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. 
				<br><br>Has a ${hiddenPower.stunChance * 100}% chance to stun the target for ${hiddenPower.stun / 10} seconds.`,
		    	`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. 
		    	<br><br>Tiene una probablidad del ${hiddenPower.stunChance * 100}% de aturdir al objetivo ${hiddenPower.stun / 10} segundos.`,
			]
		break;
		case 'restore':
			hiddenPower.restore = 0.5
			hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br>Heals the user for half of the damage dealt.`,
		    	`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br>Cura la mitad del daño causado.`,
			]
		break;
		case 'restoreOnKill':
			hiddenPower.restore = arrRestoreOnKill[Math.floor(Math.random() * arrRestoreOnKill.length)];
			hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. 
				<br><br>Restores ${(hiddenPower.restore * 100).toFixed()}% HP if the target is weakened.`,
		    	`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. 
		    	<br><br>Recupera ${(hiddenPower.restore * 100).toFixed()}% de PS si debilita al objetivo.`,
			]
		break;
		case 'chargeBonus':
			hiddenPower.chargeBonus = arrCharge[Math.floor(Math.random() * arrCharge.length)];
			hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. 
				<br><br>After hitting, it gains ${hiddenPower.chargeBonus}% of charge energy.`,
		    	`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. 
		    	<br><br>Después de atacar, consigue un ${hiddenPower.chargeBonus}% de barra de carga.`,
			]
		break;
		case 'criticalBonus':
			hiddenPower.criticalBonus = 0.0625;
			hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br> Has a higher than usual critical hit chance.`,
				`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br> Su probablidad de crítico es mayor de lo normal.`,
	    	]
		break;
		case 'electroBall':
			hiddenPower.electroBall = true;
	        hiddenPower.description = [
				`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br> Uses the user's Speed stat to calculate damage.`,
				`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br> Golpea con el valor de Velocidad.`,
	    	]
		break;
		case 'gold':
			hiddenPower.gold = arrGoldBonus[Math.floor(Math.random() * arrGoldBonus.length)];
			hiddenPower.goldMax = arrGoldBonusMax[Math.floor(Math.random() * arrGoldBonusMax.length)];
	        hiddenPower.description = [
	        	`Deals ${capitalizeFirstLetter(type[selectedType].name[0])}-type damage. <br><br>Grants money equal to ${Math.round(hiddenPower.gold * 10000) / 100}% of the damage dealt. (Max. $${hiddenPower.goldMax})`,
	    		`Causa daño de tipo ${capitalizeFirstLetter(type[selectedType].name[1])}. <br><br>Gana dinero igual al ${Math.round(hiddenPower.gold * 10000) / 100}% del daño causado. (Máx. $${hiddenPower.goldMax})`
	    	]
		break;
		case 'prismatic':
			hiddenPower.type = typePokemon;
			hiddenPower.prismatic = true;
	        hiddenPower.description = [
				"Deals damage of the pokemon's main type. <br><br>Has no secondary effect.",
		    	'Causa daño del tipo principal del pokemon. <br><br>No tiene ningun efecto secundario.',
			]
		break;
	}

	return hiddenPower;
}

function capitalizeFirstLetter(str) {
  	if (!str) return '';
  	return str.charAt(0).toUpperCase() + str.slice(1);
}