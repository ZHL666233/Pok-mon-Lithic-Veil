export const itemKey = {
	pokeball: {
		key: 'pokeball',
		name: ['Pokeball', 'Pokeball', '精灵球'],
		description: [
			'Allows you to add Pokémon to your party.\nCapture multiplier: x1', 
			'Permite a los Pokémon unirse a tu grupo. \nMultiplicador de captura: x1'
		, '可以收服宝可梦加入队伍。\n捕捉倍率：x1'],
		image: './assets/images/item/pokeball.png',
		target: 'none',
		type: 'key',
		price: null
	},
	potion: {
		key: 'potion',
		name: ['Potion', 'Poción', '伤药'],
		description: [
			'Restores 20HP to the active Pokémon in battle.\nRefilled at the Pokémon Center.', 
			'Restaura 20PS al Pokémon activo en combate. \nSe rellena en el Centro Pokémon.'
		, '战斗中为出战宝可梦回复20HP。\n在宝可梦中心自动补满。'],
		image: './assets/images/item/potion.png',
		target: 'none',
		type: 'key',
		charge: [0, 0],
		price: null
	},
	pokeRadar: {
		key: 'pokeRadar',
		name: ['Poké Radar', 'Pokéradar', '宝可雷达'],
		description: [
			'Allows you to track wild Pokémon.', 
			'Permite rastrear a Pokémon salvajes.'
		, '可以追踪野生宝可梦。'],
		image: './assets/images/item/poke-radar.png',
		target: 'none',
		type: 'key',
		price: null
	},
	letterWithoutSender: {
		key: 'letterWithoutSender',
		name: ['Letter without sender', 'Carta sin remitente', '无寄信人的信'],
		description: [
			'When everything is still, and the humming awakens you... 8181.', 
			'Cuando todo sea estático, y el zumbido te despierte... 8181.'
		, '当一切静止，嗡鸣声将你唤醒……8181。'],
		image: './assets/images/item/letter-open.png',
		target: 'none',
		type: 'key',
		price: null
	},
	letterForAmalia: {
		key: 'letterForAmalia',
		name: ['Letter for Amalia', 'Carta para Amalia', '给Amalia的信'],
		description: [
			'A letter for Amalia, who lives in Lavender Town.', 
			'Una carta para Amalia, vive en Pueblo Lavanda.'
		, '给住在紫苑镇的Amalia的一封信。'],
		image: './assets/images/item/letter.png',
		target: 'none',
		type: 'key',
		price: null
	},
	rod: {
		key: 'rod',
		name: ['Rod', 'Caña', '钓竿'],
		description: [
			'Allows you to fish in still waters.', 
			'Permite pescar en aguas estancadas.'
		, '可以在静水中钓鱼。'],
		image: './assets/images/item/rod.png',
		target: 'none',
		type: 'key',
		price: null
	},
	expShare: {
		key: 'expShare',
		name: ['Exp. Share', 'Repartir Exp.', '经验分享器'],
		description: [
			'Shares the experience earned in battle among the whole party.', 
			'Reparte la experiencia ganada en combate entre todo el grupo.'
		, '将战斗中获得的经验分配给全队。'],
		image: './assets/images/item/exp-share.png',
		target: 'none',
		type: 'key',
		price: null
	},
	expCharm: {
		key: 'expCharm',
		name: ['Exp. Charm', 'Amuleto Exp.', '经验护符'],
		description: [
			'Increases experience gained in battle by 75%.', 
			'Aumenta un 75% la experiencia ganada en combate.'
		, '战斗中获得经验增加75%。'],
		image: './assets/images/item/exp-charm.png',
		target: 'none',
		type: 'key',
		price: null
	},
	catchingCharm: {
		key: 'catchingCharm',
		name: ['Catching Charm', 'Amuleto Captura', '捕捉护符'],
		description: [
			'Increases the chance of catching Pokémon.', 
			'Aumenta la probabilidad de capturar Pokémon.'
		, '提高捕捉宝可梦的几率。'],
		image: './assets/images/item/catching-charm.png',
		target: 'none',
		type: 'key',
		price: null
	},
	shinyCharm: {
		key: 'shinyCharm',
		name: ['Shiny Charm', 'Amuleto Iris', '闪耀护符'],
		description: [
			'Increases the chance of encountering shiny Pokémon.', 
			'Aumenta la probabilidad de encontrar Pokémon variocolor.'
		, '提高遇到闪光宝可梦的几率。'],
		image: './assets/images/item/shiny-charm.png',
		target: 'none',
		type: 'key',
		price: null
	},
	amuletCoin: {
		key: 'amuletCoin',
		name: ['Amulet Coin', 'Moneda Amuleto', '护符金币'],
		description: [
			'Increases the gold earned in battle.', 
			'Aumenta el oro ganado en combate.'
		, '增加战斗中获得的金币。'],
		image: './assets/images/item/amulet-coin.png',
		target: 'none',
		type: 'key',
		price: null
	},
	mysticCharm: {
		key: 'mysticCharm',
		name: ['Mystic Charm', 'Amuleto Místico', '神秘护符'],
		description: [
			'Doubles both experience and gold gained in battle.', 
			'Aumenta 100% la experiencia y el oro ganado en combate.'
		, '战斗中获得经验和金币翻倍。'],
		image: './assets/images/item/mystic-charm.png',
		target: 'none',
		type: 'key',
		price: null
	},
	token: {
		key: 'token',
		name: ['Token', 'Ficha', '代币'],
		description: [
			'Casino currency exchangeable for prizes.', 
			'Moneda del Casino canjeable por premios.'
		, '赌场代币，可兑换奖品。'],
		image: './assets/images/item/token.png',
		target: 'none',
		type: 'key',
		price: 80
	},
	runningShoes: {
		key: 'runningShoes',
		name: ['Running shoes', 'Deportivas', '跑步鞋'],
		description: [
			'Reduces wild encounters by 25% on route paths.', 
			'Reduce el número de encuentros un 25% en las rutas de paso.'
		, '在道路上减少25%的野生遭遇。'],
		image: './assets/images/item/running-shoes.png',
		target: 'none',
		type: 'key',
		price: null
	},
	potionFiller: {
		key: 'potionFiller',
		name: ['Potion Filler', 'Rellenapociones', '药水填充器'],
		description: [
			'Refills all potions. Refilled at the Pokémon Center.', 
			'Rellena todas las pociones. Se rellena en el Centro Pokémon.'
		, '补满所有伤药。在宝可梦中心自动补满。'],
		image: './assets/images/item/potion-filler.png',
		target: 'none',
		type: 'key',
		price: null
	},
	unionTicket: {
		key: 'unionTicket',
		name: ['Union Ticket', 'Ticket Unión', '联合券'],
		description: [
			'A ticket exchangeable at the Union Room.', 
			'Ticket intercambiable en la Sala Unión.'
		, '可在联合房间兑换的券。'],
		image: './assets/images/item/union-ticket.png',
		target: 'none',
		type: 'key',
		price: 50000
	},
	sprinkler: {
		key: 'sprinkler',
		name: ['Sprinkler', 'Regadera', '洒水器'],
		description: [
			'Removes annoying shrubs.', 
			'Elimina a los molestos arbustos.'
		, '清除烦人的灌木丛。'],
		image: './assets/images/item/sprinkler.png',
		target: 'none',
		type: 'key',
		price: null
	},
	powerBracelet: {
		key: 'powerBracelet',
		name: ['Power Bracelet', 'Brazalete de Fuerza', '力量手镯'],
		description: [
			'Breaks the rock clusters into pieces.', 
			'Rompe en pedazos los cúmulos de rocas.'
		, '打碎岩石堆。'],
		image: './assets/images/item/power-bracelet.png',
		target: 'none',
		type: 'key',
		price: null
	},
	travelVoucher: {
		key: 'travelVoucher',
		name: ['Travel Voucher', 'Bono Barco', '船票'],
		description: [
			'Grants unlimited travel on the S.S. Aqua.', 
			'Permite viajar de forma ilimitada en el S.S. Aqua.'
		, '无限乘坐水流号的船票。'],
		image: './assets/images/item/ss-ticket.png',
		target: 'none',
		type: 'key',
		price: null
	},
	bike: {
		key: 'bike',
		name: ['Bike', 'Bici', '自行车'],
		description: [
			'', 
			'.'
		, ''],
		image: './assets/images/item/bike.png',
		target: 'none',
		type: 'key',
		price: null
	},
	waterBike: {
		key: 'waterBike',
		name: ['Water bike', 'Bici Acuática', '水上自行车'],
		description: [
			'Allows you to cross deep water.', 
			'Permite atravesar aguas profundas.'
		, '可以穿越深水区域。'],
		image: './assets/images/item/water-bike.png',
		target: 'none',
		type: 'key',
		price: null
	},
	rareOrb: {
		key: 'rareOrb',
		name: ['Rare Orb', 'Orbe Extraño', '神秘宝珠'],
		description: [
			'An orb that seems to be watching you.', 
			'Un orbe que parece observarte.'
		, '一颗似乎在注视你的宝珠。'],
		image: './assets/images/item/rare-orb.png',
		target: 'none',
		type: 'key',
		price: null
	},
	redButton: {
		key: 'redButton',
		name: ['Red Button', 'Botón Rojo', '红色按钮'],
		description: [
			'A highly conspicuous button.', 
			'Un botón altamente llamativo.'
		, '一个非常显眼的按钮。'],
		image: './assets/images/item/prank-button.png',
		target: 'none',
		type: 'key',
		price: null
	},
	scrap: {
		key: 'scrap',
		name: ['Scrap', 'Chatarra', '废铁'],
		description: [
			'Someone might find a use for it.', 
			'Alguien podría darle uso.'
		, '也许有人能用得上它。'],
		image: './assets/images/item/scrap.png',
		target: 'none',
		type: 'key',
		price: null
	},
	accessPass: {
		key: 'accessPass',
		name: ['Access Pass', 'Pase Acreditado', '通行证'],
		description: [
			'Grants access to Route 12.', 
			'Autoriza el paso hacia la ruta 12.'
		, '可以进入12号道路。'],
		image: './assets/images/item/access-pass.png',
		target: 'none',
		type: 'key',
		price: null
	},
	//fosiles
	fossilDome: {
		key: 'fossilDome',
		name: ['Fossil Dome', 'Fósil Domo', '甲壳化石'],
		description: [
			'Fossil of an ancient Pokémon.\n Can be revived at the Archaeology Center in Blackthorn City.', 
			'Fósil de un antiguo Pokémon. \n Puede ser revivido en el Centro arqueológico de Ciudad Endrino.'
		, '古代宝可梦的化石。\n可以在烟墨市考古中心复活。'],
		image: './assets/images/item/dome.png',
		target: 'none',
		type: 'key',
		price: null
	},
	fossilHelix: {
		key: 'fossilHelix',
		name: ['Fossil Helix', 'Fósil Helix', '螺旋化石'],
		description: [
			'Fossil of an ancient Pokémon.\n Can be revived at the Archaeology Center in Blackthorn City.', 
			'Fósil de un antiguo Pokémon. \n Puede ser revivido en el Centro arqueológico de Ciudad Endrino.'
		, '古代宝可梦的化石。\n可以在烟墨市考古中心复活。'],
		image: './assets/images/item/helix.png',
		target: 'none',
		type: 'key',
		price: null
	},
	oldAmber: {
		key: 'oldAmber',
		name: ['Old Amber', 'Ámbar viejo', '秘密琥珀'],
		description: [
			'Fossil of an ancient Pokémon.\n Can be revived at the Archaeology Center in Blackthorn City.', 
			'Fósil de un antiguo Pokémon. \n Puede ser revivido en el Centro arqueológico de Ciudad Endrino.'
		, '古代宝可梦的化石。\n可以在烟墨市考古中心复活。'],
		image: './assets/images/item/old-amber.png',
		target: 'none',
		type: 'key',
		price: null
	},
	fossilClaw: {
		key: 'fossilClaw',
		name: ['Fossil Claw', 'Fósil Garra', '爪子化石'],
		description: [
			'Fossil of an ancient Pokémon.\n Can be revived at the Archaeology Center in Blackthorn City.', 
			'Fósil de un antiguo Pokémon. \n Puede ser revivido en el Centro arqueológico de Ciudad Endrino.'
		, '古代宝可梦的化石。\n可以在烟墨市考古中心复活。'],
		image: './assets/images/item/claw.png',
		target: 'none',
		type: 'key',
		price: null
	},
	fossilRoot: {
		key: 'fossilRoot',
		name: ['Fossil Root', 'Fósil Raíz', '根部化石'],
		description: [
			'Fossil of an ancient Pokémon.\n Can be revived at the Archaeology Center in Blackthorn City.', 
			'Fósil de un antiguo Pokémon. \n Puede ser revivido en el Centro arqueológico de Ciudad Endrino.'
		, '古代宝可梦的化石。\n可以在烟墨市考古中心复活。'],
		image: './assets/images/item/root.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornBlue: {
		key: 'apricornBlue',
		name: ['Apricorn Blue', 'Bonguri Azul', '蓝柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/blue.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornRed: {
		key: 'apricornRed',
		name: ['Apricorn Red', 'Bonguri Rojo', '红柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/red.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornYellow: {
		key: 'apricornYellow',
		name: ['Apricorn Yellow', 'Bonguri Amarillo', '黄柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/yellow.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornGreen: {
		key: 'apricornGreen',
		name: ['Apricorn Green', 'Bonguri Verde', '绿柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/green.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornPink: {
		key: 'apricornPink',
		name: ['Apricorn Pink', 'Bonguri Rosa', '粉柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/pink.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornBlack: {
		key: 'apricornBlack',
		name: ['Apricorn Black', 'Bonguri Negro', '黑柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/black.png',
		target: 'none',
		type: 'key',
		price: null
	},
	apricornWhite: {
		key: 'apricornWhite',
		name: ['Apricorn White', 'Bonguri Blanco', '白柑果'],
		description: [
			'Fruit native to the Johto region.', 
			'Fruto originario de la región de Johto.'
		, '城都地区的特产果实。'],
		image: './assets/images/item/white.png',
		target: 'none',
		type: 'key',
		price: null
	},
	key1: {
		key: 'key1',
		name: ['Key to a house', 'Llave de una casa', '房屋钥匙'],
		description: [
			'Opens the house on Route 43.', 
			'Abre una casa en la Ruta 43.'
		, '打开43号道路上一间房屋的钥匙。'],
		image: './assets/images/item/key-1.png',
		target: 'none',
		type: 'key',
		price: null
	},
	key2: {
		key: 'key2',
		name: ['Power Plant key', 'Llave Central Eléctrica', '发电厂钥匙'],
		description: [
			'Opens the Power Plant on Route 10.', 
			'Abre la Central Eléctrica en la Ruta 10.'
		, '打开10号道路发电厂的钥匙。'],
		image: './assets/images/item/key-2.png',
		target: 'none',
		type: 'key',
		price: null
	},
	key3: {
		key: 'key3',
		name: ['Elevator key', 'Llave del Elevador', '电梯钥匙'],
		description: [
			'Opens the elevator doors near Cianwood City.', 
			'Abre las puertas de un elevador cerca de Ciudad Orquídea.'
		, '打开湛蓝市附近电梯门的钥匙。'],
		image: './assets/images/item/key-3.png',
		target: 'none',
		type: 'key',
		price: null
	},
	lithicStone: {
		key: 'lithicStone',
		name: ['Lithic Stone', 'Piedra Lítica', '石之石'],
		description: [
			'An uncommon stone.', 
			'Una piedra poco común.'
		, '一块不寻常的石头。'],
		image: './assets/images/item/lithic-stone.png',
		target: 'none',
		type: 'key',
		price: null
	},
	honey: {
		key: 'honey',
		name: ['Honey', 'Miel', '蜂蜜'],
		description: [
			'Pokémon love it.', 
			'A los Pokémon les encanta.'
		, '宝可梦们都很喜欢。'],
		image: './assets/images/item/honey.png',
		target: 'none',
		type: 'key',
		price: null
	},
	umbrella: {
		key: 'umbrella',
		name: ['Umbrella', 'Paraguas', '雨伞'],
		description: [
			'A black-colored umbrella.', 
			'Un paraguas de color negro.'
		, '一把黑色的雨伞。'],
		image: './assets/images/item/umbrella.png',
		target: 'none',
		type: 'key',
		price: null
	},
	herb: {
		key: 'herb',
		name: ['Herb', 'Hierba', '草药'],
		description: [
			'...', 
			'...'
		, '……'],
		image: './assets/images/item/herb.png',
		target: 'none',
		type: 'key',
		price: null
	},
	giovanniApologyLetter: {
		key: 'giovanniApologyLetter',
		name: ['Giovanni Apology Letter', 'Disculpas de Giovanni', '坂木的道歉信'],
		description: [
			'I, Giovanni, former leader of Team Rocket, apologize for my crimes especially the Pokémon Tower incident and the genetic experiments.', 
			`Yo, Giovanni, ex-líder del Team Rocket, pido perdón por mis crímenes. Especialmente el de la Torre Pokémon y los experimentos genéticos.`
		],
		image: './assets/images/item/giovanni-apology-letter.png',
		target: 'none',
		type: 'key',
		price: null
	},
	stabilizer: {
		key: 'stabilizer',
		name: ['Lithic Stabilizer', 'Establizador Lítico', '石之稳定器'],
		description: [
			'Allows you to travel between Apachan and other regions with your items and Pokémon.', 
			`Permite viajar entre Apachán y otras regiones con tus objetos y Pokémon.`
		],
		image: './assets/images/item/stabilizer.png',
		target: 'none',
		type: 'key',
		price: null
	},
	wideLens: {
		key: 'wideLens',
		name: ['Wide Lens', 'Superlupa', '广角镜'],
		description: [
			'Allows you to see from a distance. Its effect increases at higher altitudes...', 
			`Permite ver desde la lejanía. Incrementa su efecto en las alturas...`
		],
		image: './assets/images/item/wide-lens.png',
		target: 'none',
		type: 'key',
		price: null
	},
	zoraScale: {
		key: 'zoraScale',
		name: ['Zora Scale', 'Escama de Zora', '佐拉鳞片'],
		description: [
			'A Red Zora Scale.', 
			`Una escama de Zora Roja.`
		],
		image: './assets/images/item/zora-scale.png',
		target: 'none',
		type: 'key',
		price: null
	},
	milk: {
		key: 'milk',
		name: ['Moomoo Milk', 'Leche Mu-mu', '哞哞牛奶'],
		description: [
			'Fresh milk from your Miltank.', 
			`Leche fersquiita de tu Miltank.`
		],
		image: './assets/images/item/milk.png',
		target: 'none',
		type: 'key',
		price: null
	},
	leek: {
		key: 'leek',
		name: ['Farfetch’d Leek', 'Puerro de Farfetch’d', '大葱鸭的大葱'],
		description: [
			`The leek of a Farfetch’d that was way too good at cooking.`,
			'El puerro de un Farfetch’d que se le daba demasiado bien la cocina.', 
		],
		image: './assets/images/item/leek.png',
		target: 'none',
		type: 'key',
		price: null
	},
	urn: {
		key: 'urn',
		name: ['Shadow-Catching Urn', 'Urna Caza-sombras', '捕影之瓮'],
		description: [
			`An empty ancient urn.`,
			'Una urna antigua, está vacia.', 
		],
		image: './assets/images/item/urn.png',
		target: 'none',
		type: 'key',
		price: null
	},
	urnHaunter: {
		key: 'urnHaunter',
		name: ['Haunter Urn', 'Urna Haunter', '鬼斯通之瓮'],
		description: [
			`An urn containing the shadow of a Haunter`,
			'Una urna que contiene la sombra de un Haunter', 
		],
		image: './assets/images/item/urn-haunter.png',
		target: 'none',
		type: 'key',
		price: null
	},
	feather: {
		key: 'feather',
		name: ['Ho-Oh feather', 'Pluma de Ho-Oh', '凤王羽毛'],
		description: [
			`A rainbow-colored feather.`,
			'Una pluma del color del arcoíris.', 
		],
		image: './assets/images/item/feather.png',
		target: 'none',
		type: 'key',
		price: null
	},
	magnemitePiece: {
		key: 'magnemitePiece',
		name: ['Magnemite Piece', 'Trozo de Magnemite', '小磁怪碎片'],
		description: [
			`Remains of a Magnemite magnet.`,
			'Restos del imán de un Magnemite.', 
		],
		image: './assets/images/item/magnet.png',
		target: 'none',
		type: 'key',
		price: null
	},
	lunarMail: {
		key: 'lunarMail',
		name: ['Lunar Mail', 'Correo Lunar', '月之邮件'],
		description: [
			'197, 337, 359, 036, 198, 164.', 
			'197, 337, 359, 036, 198, 164.', 
		, '197, 337, 359, 036, 198, 164。'],
		image: './assets/images/item/lunar-mail.png',
		target: 'none',
		type: 'key',
		price: null
	},
	solarMail: {
		key: 'solarMail',
		name: ['Solar Mail', 'Correo Solar', '日之邮件'],
		description: [
			'196, 338, 357, 182, 192, 178.', 
			'196, 338, 357, 182, 192, 178.', 
		, '196, 338, 357, 182, 192, 178。'],
		image: './assets/images/item/solar-mail.png',
		target: 'none',
		type: 'key',
		price: null
	},
	letterKhydra: {
		key: 'letterKhydra',
		name: ['Developer Letter', 'Carta del desarrolador', '开发者信件'],
		description: [
			"I see that you don't miss a single one, congratulations. \n - Khydra", 
			'Veo que no se te escapa ni una, felicidades. \n - Khydra'
		],
		image: './assets/images/item/letter-khydra.png',
		target: 'none',
		type: 'key',
		price: null
	},
}