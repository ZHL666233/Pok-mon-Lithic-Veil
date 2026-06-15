import { item } from '../item/itemData.js';
import { pokemon } from '../pokemon/pokemonData.js';
import { move } from '../pokemon/moveData.js';
import { Pokemon, generateEgg } from '../../manager/Pokemon.js';
import { playSound, crySound } from '../../../file/audio.js';
import { route as routeBugEmergency} from '../location/routeData.js';

export const getNPCs = (main, savedStates = {}) => ({
    //exceptions
    needPokemon: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `I have no Pokémon...`, 
                        `No tengo Pokémon...`,
                        `我没有宝可梦...`
                    ]
                },
            ],
        ]
    },
    needPokeball: {
        name: ['Mom', 'Mamà', '妈妈'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `${main.player.name.toUpperCase()}!! Where are you going?!`, 
                        `¡¡${main.player.name.toUpperCase()}!! ¡¿A dónde vas?!`,
                        `${main.player.name.toUpperCase()}！！你要去哪儿？！`
                    ]
                },
                {
                    text: [
                        `Stop by the Lab, Professor Elm wants to see you!`,
                        `¡Pásate por el Laboratorio que el Profesor Elm quiere verte!`,
                        `去一趟研究所吧，大木博士想见你！`
                    ]
                },
            ],
        ]
    },
    needRod: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `A pond... I could fish here if I had a Rod.`,
                        `Un estanque, podría pescar en él si tuviera una Caña.`,
                        `一个池塘...如果有钓竿的话可以在这里钓鱼。`
                    ]
                },
            ],
        ]
    },
    needSprinkler: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `A tiny bush blocks the way.`,
                        `Un minúsculo arbusto me impide el paso.`,
                        `一小丛灌木挡住了路。`
                    ]
                },
            ],
        ]
    },
    needPowerBracelet: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `A pile of rocks blocks the path.`,
                        `Un montón de rocas bloquean el camino.`,
                        `一堆岩石挡住了去路。`
                    ]
                },
            ],
        ]
    },
    needWaterBike: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `The water is too deep to cross.`,
                        `El agua es demasiado profunda para cruzar.`,
                        `水太深了，无法过去。`
                    ]
                },
            ],
        ]
    },
    needWaterBikeUpgraded: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        `The water currents are dangerous.`,
                        `Las corrientes de agua son peligrosas.`,
                        `水流很危险。`
                    ]
                },
            ],
        ]
    },
    // TRAINERS
    adrian: {
        name: ['Adrian', 'Adrián', '艾德里安'],
        state: savedStates.adrian ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "Welcome to my dojo, challenger.",
                        "Bienvenido a mi dojo, aspirante.",
                        "欢迎来到我的道场，挑战者。",
                    ]
                },
                {
                    text: [
                        "I am Adrian, master of Bug-type Pokémon.",
                        "Soy Adrián, maestro de los Pokémon de tipo Bicho.",
                        "我是阿笔，虫系宝可梦大师。",
                    ]
                },
                {
                    text:  [
                        "Like insects, I value patience, precision, and coordination.",
                        "Al igual que los insectos, valoro la paciencia, la precisión y la coordinación.",
                    "就像虫一样，我重视耐心、精准和协作。"
                    ]
                },
                {
                    text: [
                        "I will show you the power of the swarm!",
                        "¡Te mostraré el poder del enjambre!",
                        "我会让你见识虫群的力量！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('adrian');
                    } 
                }
            ],
            [
                {
                    text: [
                        "Impressive...",
                        "Impresionante...",
                        "了不起……"
                    ]
                },
                 {
                    text: [
                        "You have faced the swarm and emerged victorious.",
                        "Has enfrentado al enjambre y has salido victorioso.",
                        "你面对了虫群并取得了胜利。"
                    ]
                },
                {
                    text:  [
                        "Your strength is undeniable...",
                        "Tu fuerza es innegable...",
                        "你的实力不可否认……"
                    ]
                },
                {
                    text: [
                        "But remember, true power lies in unity.",
                        "Pero recuerda que el verdadero poder está en la unidad.",
                        "但记住，真正的力量在于团结。",
                    ]
                },
                {
                    text: [
                        "I present you with a Lithic Stone for your victory.",
                        "Te hago entrega de una Piedra Lítica por tu victoria.",
                        "为表彰你的胜利，我赠予你一块石质石。",
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text:  [
                        "May your journey continue with honor.",
                        "Que tu viaje continúe con honor.",
                        "愿你的旅程带着荣耀继续。"
                    ]
                }
            ]
        ]
    },
    swiker: {
        name: ['Swiker', 'Iker', '斯威克'],
        state: savedStates.swiker ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "Welcome to my dojo, challenger.",
                        "Bienvenido a mi dojo, aspirante.",
                        "欢迎来到我的道场，挑战者。",
                    ]
                },
                {
                    text: [
                        "I am Swiker, master of Normal-type Pokémon.",
                        "Soy Iker, maestro de los Pokémon de tipo Normal.",
                        "我是小茜，一般系宝可梦大师。",
                    ]
                },
                {
                    text:  [
                        "Many think 'Normal' means ordinary... but they've never truly faced it.",
                        "Muchos creen que 'Normal' significa común... pero nunca lo han enfrentado de verdad.",
                        "很多人认为'一般'就是普通……但他们从未真正面对过它。"
                    ]
                },
                {
                    text: [
                        "Let me show you the quiet strength that lies in simplicity.",
                        "Déjame mostrarte la fuerza silenciosa que habita en la simplicidad.",
                        "让我向你展示蕴藏在简单中的平静力量。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('swiker');
                    } 
                }
            ],
            [
                {
                    text: [
                        "Impressive...",
                        "Impresionante...",
                        "了不起……"
                    ]
                },
                 {
                    text: [
                        "You've proven yourself with grace and determination.",
                        "Te has probado a ti mismo con gracia y determinación.",
                        "你用优雅和决心证明了自己。"
                    ]
                },
                {
                    text:  [
                        "Your strength is undeniable...",
                        "Tu fuerza es innegable...",
                        "你的实力不可否认……"
                    ]
                },
                {
                    text: [
                        "Even the most unassuming path can lead to victory.",
                        "Incluso el camino más discreto puede conducir a la victoria.",
                        "即使最不起眼的道路也能通往胜利。"
                    ]
                },
                {
                    text: [
                        "I present you with a Lithic Stone for your victory.",
                        "Te hago entrega de una Piedra Lítica por tu victoria.",
                        "为表彰你的胜利，我赠予你一块石质石。",
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text:  [
                        "May your journey continue with honor.",
                        "Que tu viaje continúe con honor.",
                        "愿你的旅程带着荣耀继续。"
                    ]
                }
            ]
        ]
    },
    manny: {
        name: ['Manny', 'Manu', '曼尼'],
        state: savedStates.manny ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "Welcome to my dojo, challenger.",
                        "Bienvenido a mi dojo, aspirante.",
                        "欢迎来到我的道场，挑战者。",
                    ]
                },
                {
                    text: [
                        "I am Manny, master of Rock-type Pokémon.",
                        "Soy Manu, maestro de los Pokémon de tipo Roca.",
                        "我是小刚，岩石系宝可梦大师。",
                    ]
                },
                {
                    text:  [
                        "Strength isn't just about power, it's about endurance.",
                        "La fuerza no solo se trata de poder, se trata de resistencia.",
                    "力量不只是力量，而是耐力。"
                    ]
                },
                {
                    text: [
                        "Let's see if your will is as solid as stone.",
                        "Veamos si tu voluntad es tan sólida como la piedra.",
                        "让我看看你的意志是否坚如磐石。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('manny');
                    } 
                }
            ],
            [
                {
                    text: [
                        "Impressive...",
                        "Impresionante...",
                        "了不起……"
                    ]
                },
                 {
                    text: [
                        "Few have stood where you stand now.",
                        "Pocos han llegado a donde tú estás ahora.",
                        "很少有人能站到你现在的这个位置。"
                    ]
                },
                {
                    text:  [
                        "Your strength is undeniable...",
                        "Tu fuerza es innegable...",
                        "你的实力不可否认……"
                    ]
                },
                {
                    text: [
                        "Go forth, let no obstacle stop your climb.",
                        "Sigue adelante, que ningún obstáculo detenga tu ascenso.",
                        "前进吧，不要让任何障碍阻挡你的攀登。",
                    ]
                },
                {
                    text: [
                        "I present you with a Lithic Stone for your victory.",
                        "Te hago entrega de una Piedra Lítica por tu victoria.",
                        "为表彰你的胜利，我赠予你一块石质石。",
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text:  [
                        "May your journey continue with honor.",
                        "Que tu viaje continúe con honor.",
                        "愿你的旅程带着荣耀继续。"
                    ]
                }
            ]
        ]
    },
    ruben: {
        name: ['Ruben', 'Ruben', '鲁本'],
        state: savedStates.ruben ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "Welcome to my dojo, challenger.",
                        "Bienvenido a mi dojo, aspirante.",
                        "欢迎来到我的道场，挑战者。",
                    ]
                },
                {
                    text: [
                        "I am Ruben, master of Dark-type Pokémon.",
                        "Soy Ruben, maestro de los Pokémon de tipo Siniestro.",
                        "我是梨花，恶系宝可梦大师。",
                    ]
                },
                {
                    text:  [
                        "To outwit the dark, you must learn to embrace it.",
                        "Para superar a la oscuridad, debes aprender a abrazarla.",
                    "要战胜黑暗，你必须学会接纳它。"
                    ]
                },
                {
                    text: [
                        "Let's see if you can survive the dark.",
                        "Veamos si puedes sobrevivir a la oscuridad.",
                        "让我看看你是否能在黑暗中存活。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('ruben');
                    } 
                }
            ],
            [
                {
                    text: [
                        "Impressive...",
                        "Impresionante...",
                        "了不起……"
                    ]
                },
                 {
                    text: [
                        "I underestimated the light in you.",
                        "Subestimé la luz dentro de ti.",
                        "我低估了你内心的光芒。"
                    ]
                },
                {
                    text:  [
                        "Your strength is undeniable...",
                        "Tu fuerza es innegable...",
                        "你的实力不可否认……"
                    ]
                },
                {
                    text: [
                        "Go on... Just remember shadows are never far behind.",
                        "Continúa, pero recuerda que las sombras nunca están lejos.",
                        "去吧…记住暗影从不远离。",
                    ]
                },
                {
                    text: [
                        "I present you with a Lithic Stone for your victory.",
                        "Te hago entrega de una Piedra Lítica por tu victoria.",
                        "为表彰你的胜利，我赠予你一块石质石。",
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text:  [
                        "May your journey continue with honor.",
                        "Que tu viaje continúe con honor.",
                        "愿你的旅程带着荣耀继续。"
                    ]
                }
            ]
        ]
    },
    saire: {
        name: ['Saire', 'Asier', '赛尔'],
        state: savedStates.saire ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "Welcome to my dojo, challenger.",
                        "Bienvenido a mi dojo, aspirante.",
                        "欢迎来到我的道场，挑战者。",
                    ]
                },
                {
                    text: [
                        "I am Saire, master of Psychic-type Pokémon.",
                        "Soy Asier, maestro de los Pokémon de tipo Psíquico.",
                    "我是一树，超能力系宝可梦大师。"
                    ]
                },
                {
                    text:  [
                        "Our strength does not lie in muscles or claws, but in clarity, focus... and will.",
                        "Nuestra fuerza no reside en músculos ni garras, sino en la claridad, el enfoque... y la voluntad.",
                    "我们的力量不在于肌肉或爪子，而在于清晰、专注……和意志。"
                    ]
                },
                {
                    text: [
                        "Now silence your thoughts and prepare for mental collapse.",
                        "Ahora silencia tus pensamientos y prepárate para el colapso mental.",
                        "现在清空你的思绪，准备迎接精神崩溃吧。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('saire');
                    } 
                }
            ],
            [
                {
                    text: [
                        "Impressive...",
                        "Impresionante...",
                        "了不起……"
                    ]
                },
                {
                    text: [
                        "Few reach such clarity under pressure.",
                        "Pocos alcanzan tal claridad bajo presión.",
                        "很少有人能在压力下保持如此清醒。"
                    ]
                },
                {
                    text:  [
                        "Your strength is undeniable...",
                        "Tu fuerza es innegable...",
                        "你的实力不可否认……"
                    ]
                },
                {
                    text: [
                        "You've silenced the storm within.",
                        "Has silenciado tu tormenta interior.",
                        "你已经平息了内心的风暴。"
                    ]
                },
                {
                    text: [
                        "I present you with a Lithic Stone for your victory.",
                        "Te hago entrega de una Piedra Lítica por tu victoria.",
                        "为表彰你的胜利，我赠予你一块石质石。",
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text:  [
                        "May your journey continue with honor.",
                        "Que tu viaje continúe con honor.",
                        "愿你的旅程带着荣耀继续。"
                    ]
                }
            ]
        ]
    },
    falkner: {
        name: ['Falkner', 'Pegaso', '阿速'],
        state: savedStates.falkner ?? 0,
        dialogues: [
            [
                {
                    text: [
                        `I'm Falkner, the Gym Leader of Violet City!`,
                        `¡Soy Pegaso, líder del gimnasio de Ciudad Malva!`,
                        `我是阿速，桔梗市的道馆馆主！`
                    ]
                },
                {
                    text: [
                        `They say an electric jolt can clip a flying Pokémon's wings.`,
                        `Dicen que una sacudida eléctrica puede acabar con las alas de los Pokémon voladores.`,
                        `据说电击可以折断飞行系宝可梦的翅膀。`
                    ]
                },
                {
                    text: [
                        `I won't allow such talk about them!`,
                        `¡No permitiré que hablen así de ellos!`,
                        `我不允许别人这样说它们！`
                    ]
                },
                {
                    text: [
                        `I'll show you the true power of the magnificent bird Pokémon!`,
                        `¡Yo te enseñaré el auténtico poder de los magníficos pájaros Pokémon!`,
                        `我会让你见识华丽鸟宝可梦的真正力量！`
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('falkner');
                    } 
                }
            ],
            [
                {
                    text: [
                        "Damn it!",
                        "¡Maldición!",
                        "该死！"
                    ]
                },
                {
                    text: [
                        "My father's beloved Pokémon...",
                        "Los queridos Pokémon de mi padre...",
                        "我父亲心爱的宝可梦……"
                    ]
                },
                {
                    text: [
                        "Alright, you've earned the Zephyr Badge.",
                        "Muy bien, te mereces la Medalla Céfiro.",
                    "很好，你赢得了飞翼徽章。"
                    ]
                },
                {
                    text: [
                        "I'm also giving you TM57, which contains the move Aerial Ace.",
                        "También te hago entrega de la MT57 que contiene el movimiento Golpe aéreo.",
                    "我还要给你TM57，里面包含了招式燕返。"
                    ],
                    reward: {
                        item: item.tm.tm57,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text:  [
                        "I see... The time has come for me to land with dignity.",
                        "Ya veo... ha llegado la hora de posarme en el suelo con dignidad.",
                        "我明白了……是时候让我体面地降落了。"
                    ]
                }
            ]
        ]
    },
    bugsy: {
        name: ['Bugsy', 'Anton', '阿笔'],
        state: savedStates.bugsy ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I'm Bugsy! I'm invincible with Bug-type Pokémon.",
                        "¡Soy Antón! Soy invencible con los Pokémon bicho.",
                        "我是阿笔！我用虫属性宝可梦是无敌的。"
                    ]
                },
                {
                    text: [
                        "My studies will make me a true authority on Bug-type Pokémon!",
                        "¡Mis estudios me van a convertir en una autoridad en los Pokémon bicho!",
                        "我的研究将使我成为虫属性宝可梦真正的权威！"
                    ]
                },
                {
                    text: [
                        "Let me show you what I've learned.",
                        "Te enseñaré lo que he aprendido.",
                        "让我展示一下我所学到的。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('bugsy');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Wow, amazing!",
                        "¡Guau, increíble!",
                    "哇，太厉害了！"
                    ]
                },
                {
                    text:  [
                        "No Pokémon can resist you!",
                        "¡No hay Pokémon que se te resista!",
                        "没有宝可梦能抵抗你！"
                    ]
                },
                {
                    text: [
                        "My research isn't over yet.",
                        "Mi investigación aún no ha acabado.",
                        "我的研究还没结束。"
                    ]
                },
                {
                    text: [
                        "Alright, you win... take the Hive Badge.",
                        "Vale, tú ganas... toma la Medalla Colmena.",
                    "好吧，你赢了……收下昆虫徽章。"
                    ]
                },
                {
                    text:  [
                        "I'll also give you TM92, which contains the move Silver Wind.",
                        "También te hago entrega de la MT92 que contiene el movimiento Viento plata.",
                    "我还要给你TM92，里面包含了招式银色旋风。"
                    ],
                    reward: {
                        item: item.tm.tm92,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
               {
                    text: [
                        "Bug-type Pokémon are very complex.",
                        "Los Pokémon de tipo Bicho son muy complejos.",
                        "虫属性宝可梦非常复杂。"
                    ]
                },
                {
                    text: [
                        "I still have a lot to learn.",
                        "Todavía me queda mucho que aprender.",
                        "我还有很多要学的。"
                    ]
                },
                {
                    text: [
                        "You should also study your favorites thoroughly.",
                        "Tú también deberías estudiar a fondo tus favoritos.",
                        "你也应该好好研究你喜欢的宝可梦。"
                    ]
                }
            ]
        ]
    },
    whiteney: {
        name: ['Whiteney', 'Blanca', '小茜'],
        state: savedStates.whiteney ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hi! I'm Whitney!",
                        "¡Hola! ¡Soy Blanca!",
                        "你好！我是小茜！"
                    ]
                },
                {
                    text: [
                        "So you're a Pokémon trainer, huh?",
                        "Así que entrenas Pokémon, ¿eh?",
                    "原来你是宝可梦训练家啊？"
                    ]
                },
                {
                    text: [
                        "Do you take good care of them?",
                        "¿Y los cuidas bien?",
                        "你有好好照顾它们吗？"
                    ]
                },
                {
                    text: [
                        "I love them too! They're so cute!",
                        "¡A mí también me encantan! ¡Son tan monos!",
                        "我也爱它们！它们太可爱了！"
                    ]
                },
                {
                    text: [
                        "What? You want to battle me?",
                        "¿Qué? ¿Quieres enfrentarte a mí?",
                        "什么？你想和我对战？"
                    ]
                },
                {
                    text: [
                        "Fine, but I warn you, I'm really strong!",
                        "¡Como quieras, pero te aviso que soy muy fuerte!",
                    "好吧，但我警告你，我可是很强的！"
                    ]
                },
                {  
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('whiteney');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Waaaah! Waaaah! Boo-hoo-hoo!",
                        "¡Uaaaaa! ¡Uaaaaa! ¡Buaa, buaa...!",
                    "呜哇哇！呜哇哇！呜呜呜……"
                    ]
                },
                {
                    text: [
                        "You're so mean!",
                        "¡Eres cruel!",
                        "你太坏了！"
                    ]
                },
                {
                    text: [
                        "Sniff... What do you want? A Badge?",
                        "¡Sniff...! ¿Qué quieres? ¿Una Medalla?",
                        "呜……你想要什么？徽章？"
                    ]
                },
                {
                    text: [
                        "Oh, right! I forgot.",
                        "¡Ah, sí! Se me olvidaba.",
                    "哦对了！我忘了。"
                    ]
                },
                {
                    text: [
                        "Here, take the Plain Badge.",
                        "Toma la Medalla Planicie.",
                    "来，收下这枚标准徽章。"
                    ]
                },
                {
                   text: [
                        "I'll also give you TM41, which contains the move Metronome.",
                        "También te hago entrega de la MT41 que contiene el movimiento Metrónomo.",
                    "我还要给你TM41，里面包含了招式挥指。"
                    ],
                    reward: {
                        item: item.tm.tm41,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "Phew...",
                        "Uf...",
                        "呼……"
                    ]
                }
            ]
        ]
    },
    morty: {
        name: ['Morty', 'Morti', '松叶'],
        state: savedStates.morty ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "I'm glad you came.",
                        "Me alegro de que hayas venido.",
                        "我很高兴你来了。"
                    ]
                },
                {
                    text: [
                        "Fight with all your might!",
                        "¡Lucha con todas tus fuerzas!",
                        "全力以赴地战斗吧！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('morty');
                    } 
                },
            ],
            [
               {
                    text: [
                        "I never thought I'd lose if I fought at one hundred percent!",
                        "¡Nunca pensé que perdería si luchaba al cien por cien!",
                        "我从没想过全力以赴还会输！"
                    ]
                },
                {
                    text: [
                        "But you have something more than strength...",
                        "Pero tú posees algo más que fuerza...",
                        "但你拥有的不仅仅是力量……"
                    ]
                },
                {
                    text: [
                        "Alright, you've earned the Fog Badge.",
                        "Bien, te has ganado la Medalla Niebla.",
                    "很好，你赢得了迷雾徽章。"
                    ]
                },
                {
                    text: [
                        "I also give you TM143, which contains the move Shadow Sneak.",
                        "También te hago entrega de la MT143 que contiene el movimiento Sombra vil.",
                    "我还要给你TM143，里面包含了招式影子偷袭。"
                    ],
                    reward: {
                        item: item.tm.tm143,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "I see...",
                        "Entiendo...",
                        "我明白了……"
                    ]
                }
            ]
        ]
    },
    chuck: {
        name: ['Chuck', 'Aníbal', '阿四'],
        state: savedStates.chuck ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "How dare you interrupt my training?",
                        "¿Cómo te atreves a interrumpir mi entrenamiento?",
                        "你竟敢打断我的训练？"
                    ]
                },
                {
                    text: [
                        "You'll see how tough I am!",
                        "¡Vas a ver lo duro que soy!",
                        "你会看到我有多强！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('chuck');
                    } 
                },
            ],
            [
                {
                    text: [
                        "What?",
                        "¿Qué?",
                        "什么？"
                    ]
                },
                {
                    text: [
                        "Did I lose?",
                        "¿He perdido?",
                        "我输了吗？"
                    ]
                },
                {
                    text: [
                        "How is that possible?",
                        "¿Cómo es posible?",
                        "这怎么可能？"
                    ]
                },
                {
                    text: [
                        "Alright, you've earned the Storm Badge.",
                        "Está bien, te has ganado la Medalla Tormenta.",
                    "很好，你赢得了风暴徽章。"
                    ]
                },
                {
                    text: [
                        "I'm also giving you TM46 which contains the move Karate Chop.",
                        "También te hago entrega de la MT46 que contiene el movimiento Golpe kárate.",
                    "我还要给你TM46，里面包含了招式空手劈。"
                    ],
                    reward: {
                        item: item.tm.tm46,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "Ha, ha, ha!",
                        "¡Ja, ja, ja!",
                    "哈哈哈！"
                    ]
                },
                 {
                    text: [
                        "I really enjoyed this!",
                        "¡He disfrutado mucho!",
                        "我真的很享受！"
                    ]
                }
            ]
        ]
    },
    jasmine: {
        name: ['Jasmine', 'Yasmina', '阿蜜'],
        state: savedStates.jasmine ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I'm Yasmina, the Gym Leader.",
                        "¡Soy Yasmina, la líder del gimnasio.",
                    "我是阿蜜，道馆馆主。"
                    ]
                },
                {
                    text: [
                        "The Pokémon I use are of the type...",
                        "Los Pokémon que uso son del tipo...",
                        "我使用的宝可梦是……属性的。"
                    ]
                },
                {
                    text: [
                        "Steel!",
                        "¡Acero!",
                        "钢！"
                    ]
                },
                {
                    text: [
                        "Do you know anything about Steel type?",
                        "¿Sabes algo del tipo Acero?",
                        "你对钢属性了解吗？"
                    ]
                },
                {
                    text: [
                        "They are very tough and cold Pokémon with overwhelming strength.",
                        "Son Pokémon muy duros y fríos y con una fuerza abrumadora.",
                        "它们是非常坚硬冷酷的宝可梦，拥有压倒性的力量。"
                    ]
                },
                {
                    text: [
                        "Don't you think so?",
                        "¿No piensas lo mismo?",
                        "你不这么认为吗？"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('jasmine');
                    } 
                },
            ],
            [
                {
                    text: [
                        "According to the League rules, I grant you the Mineral Badge.",
                        "De acuerdo con las normas de la Liga te concedo la Medalla Mineral.",
                    "根据联盟规则，我授予你矿物徽章。"
                    ]
                },
                {
                    text: [
                        "I also give you TM150 which contains the move Gyro Ball.",
                        "También te hago entrega de la MT150 que contiene el movimiento Giro bola.",
                    "我还要给你TM150，里面包含了招式陀螺球。"
                    ],
                    reward: {
                        item: item.tm.tm150,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "Uh... I don't know how to say this, but...",
                        "Eh... no sé cómo decirlo, pero...",
                    "呃……我不知道该怎么说，但是……"
                    ]
                },
                {
                    text: [
                        "Good luck...",
                        "Buena suerte...",
                        "祝你好运……"
                    ]
                }
            ]
        ]
    },
    pryce: {
        name: ['Pryce', 'Fredo', '柳伯'],
        state: savedStates.pryce ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I, Pryce, the Winter Trainer, will show you my power!",
                        "¡Yo, Fredo, el Entrenador del invierno, te mostraré mi poder!",
                    "我，柳伯，冬日训练家，会让你见识我的力量！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('pryce');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Ah! I'm impressed by your courage.",
                        "¡Ah! Me impresiona tu valor.",
                        "啊！你的勇气令我印象深刻。"
                    ]
                },
                {
                    text: [
                        "With your great willpower, I know you'll overcome all obstacles.",
                        "Con tu gran voluntad, sé que superarás todos los obstáculos.",
                    "以你强大的意志力，我知道你一定能克服所有障碍。"
                    ]
                },
                {
                    text:  [
                        "You deserve this Medal!",
                        "¡Te mereces esta Medalla!",
                        "你配得上这枚徽章！"
                    ]
                },
                {
                    text: [
                        "I also give you TM44 which contains the move Freeze-Dry.",
                        "También te hago entrega de la MT44 que contiene el movimiento Liofilización.",
                    "我还要给你TM44，里面包含了招式冷冻干燥。"
                    ],
                    reward: {
                        item: item.tm.tm44,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "Spring arrives when the ice and snow melt.",
                        "La primavera llega cuando se derriten el hielo y la nieve.",
                        "春天在冰雪融化时到来。"
                    ]
                },
                {
                    text: [
                        "You and your Pokémon will spend many years together.",
                        "Tus Pokémon y tú pasareis juntos muchos años.",
                        "你和你的宝可梦会一起度过很多年。"
                    ]
                },
                {
                    text: [
                        "Have a great time!",
                        "¡Pasadlo bien!",
                        "祝你们玩得开心！"
                    ]
                }
            ]
        ]
    },
    clair: {
        name: ['Clair', 'Débora', '小椿'],
        state: savedStates.clair ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I'm Clair!",
                        "¡Soy Débora!",
                        "我是小椿！"
                    ]
                },
                {
                    text: [
                        "The best Dragon Tamer in the world!",
                        "¡La mejor Domadragones del mundo!",
                        "世界上最好的龙之使者！"
                    ]
                },
                {
                    text: [
                        "I'm so strong I can even defeat the Pokémon League Elite Four!",
                        "¡Soy tan fuerte que hasta puedo derrotar al Alto Mando de la Liga Pokémon!",
                        "我强大到连宝可梦联盟四天王都能打败！"
                    ]
                },
                {
                    text: [
                        "You still want to face me?",
                        "¿Aún así quieres enfrentarte a mí?",
                        "你还要挑战我吗？"
                    ]
                },
                {
                    text: [
                        "You asked for it.",
                        "Tú lo has querido.",
                        "你自找的。"
                    ]
                },
                {
                    text: [
                        "But I warn you, I don't hold back against any Trainer!",
                        "¡Pero te aviso de que no me contengo ante ningún Entrenador!",
                        "但我警告你，我不会对任何训练家手下留情！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('clair');
                    } 
                },
            ],
            [
                {
                    text: [
                        "You still have a long way to go.",
                        "Todavía te queda un largo camino por recorrer.",
                        "你还有很长的路要走。"
                    ]
                },
                {
                    text: [
                        "Here, take the Dragon Badge...",
                        "Toma, es la Medalla Dragón...",
                    "来，收下这枚升龙徽章。"
                    ]
                },
                {
                    text: [
                        "I also give you TM113 which contains the move Dragon Breath.",
                        "También te hago entrega de la MT113 que contiene el movimiento Dragoaliento.",
                    "我还要给你TM113，里面包含了招式龙息。"
                    ],
                    reward: {
                        item: item.tm.tm113,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    text: [
                        "Keep your spirits up and give it your all!",
                        "¡Ánimo y a por todas!",
                        "打起精神，全力以赴吧！"
                    ]
                }
            ]
        ]
    },
    brock: {
        name: ['Brock', 'Brock', '小刚'],
        state: savedStates.brock ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I'm Brock, the Pewter City Gym Leader.",
                        "Soy Brock, líder del gimnasio de Plateada.",
                    "我是小刚，深灰市的道馆馆主。"
                    ]
                },
                {
                    text: [
                        "I believe in the great endurance of rock and in determination!",
                        "¡Creo en la gran resistencia de la roca y en la determinación!",
                        "我相信岩石的坚韧和决心！"
                    ]
                },
                {
                    text: [
                        "I know you're driven by the pride of Pokémon trainers.",
                        "Sé que te mueve el orgullo de los entrenadores Pokémon.",
                        "我知道你是被宝可梦训练家的骄傲所驱动。"
                    ]
                },
                {
                    text: [
                        "Alright, show me what you're made of!",
                        "Muy bien, ¡enséñame lo que vales!",
                    "来吧，让我看看你的本事！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('brock');
                    } 
                },
            ],
            [
               {
                    text: [
                        "I underestimated you.",
                        "Te he subestimado.",
                        "我低估了你。"
                    ]
                },
                {
                    text: [
                        "As proof of your victory, here is the Boulder Badge!",
                        "¡Como prueba de tu victoria, aquí tienes la Medalla Roca!",
                    "作为你胜利的证明，这是灰色徽章！"
                    ]
                },
                {
                    text: [
                        "I also give you TM131, which contains the move Stone Edge.",
                        "También te hago entrega de la MT131 que contiene el movimiento Roca afilada.",
                    "我还要给你TM131，里面包含了招式尖石攻击。"
                    ],
                    reward: {
                        item: item.tm.tm131,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "There are all kinds of trainers in the world!",
                        "¡En el mundo hay todo tipo de entrenadores!",
                        "世界上有各种各样的训练家！"
                    ]
                },
                {
                    text: [
                        "You seem very skilled at training Pokémon!",
                        "¡Pareces ser muy hábil entrenando Pokémon!",
                        "你似乎非常擅长训练宝可梦！"
                    ]
                }
            ]
        ]
    },
    misty: {
        name: ['Misty', 'Misty', '小霞'],
        state: savedStates.misty ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "You're new around here!",
                        "¡Tú eres nuevo por aquí!",
                        "你是新来的！"
                    ]
                },
                {
                    text: [
                        "What are your Pokémon?",
                        "¿Cuáles son tus Pokémon?",
                        "你的宝可梦是什么？"
                    ]
                },
                {
                    text: [
                        "What's your strategy?",
                        "¿Cuál es tu táctica?",
                        "你的策略是什么？"
                    ]
                },
                {
                    text: [
                        "My strategy is full offense with Water-type Pokémon!",
                        "¡Mi táctica es la ofensiva total con los Pokémon de tipo agua!",
                        "我的策略是用水属性宝可梦全力进攻！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('misty');
                    } 
                },
            ],
            [
               {
                    text: [
                        "Wow!",
                        "¡Uauuu!",
                        "哇！"
                    ]
                },
                {
                    text: [
                        "You're amazing!",
                        "¡Eres demasiado!",
                        "你太厉害了！"
                    ]
                },
                 {
                    text: [
                        "Very well done!",
                        "¡Muy bien!",
                        "做得非常好！"
                    ]
                },
                {
                    text: [
                        "Take the Cascade Badge so everyone knows you beat me!",
                        "¡Toma la Medalla Cascada para que todos sepan que me ganaste!",
                        "收下这枚蓝色徽章，让大家都知道你打败了我！"
                    ]
                },
                {
                    text: [
                        "I also give you TM47 that contains the move Surf.",
                        "También te hago entrega de la MT47 que contiene el movimiento Surf.",
                    "我还要给你TM47，里面包含了招式冲浪。"
                    ],
                    reward: {
                        item: item.tm.tm47,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "You are really great...",
                        "Eres realmente genial...",
                        "你真的很厉害……"
                    ]
                },
                {
                    text: [
                        "I acknowledge your great experience.",
                        "Reconozco tu gran experiencia.",
                        "我认可你的丰富经验。"
                    ]
                }
            ]
        ]
    },
    surge: {
        name: ['Lt. Surge', 'Lt. Surge', '马志士'],
        state: savedStates.surge ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Hey! What are you doing?",
                        "¡Oye! ¿Pero qué haces?",
                        "喂！你在干什么？"
                    ]
                },
                {
                    text: [
                        "You won't last long fighting!",
                        "¡No resistirás mucho tiempo luchando!",
                        "你撑不了多久的！"
                    ]
                },
                {
                    text: [
                        "Electric Pokémon saved me in battle!",
                        "¡Los Pokémon eléctricos me salvaron en combate!",
                        "电属性宝可梦在战斗中救了我！"
                    ]
                },
                {
                    text: [
                        "They paralyzed my enemies!",
                        "¡Paralizaron a mis enemigos!",
                        "它们麻痹了我的敌人！"
                    ]
                },
                {
                    text: [
                        "And that's exactly what I'm going to do to you!",
                        "¡Y eso mismo voy a hacer yo contigo!",
                        "我正要对你这么做！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('surge');
                    } 
                },
            ],
            [
                {
                    text: [
                        "You really are strong!",
                        "¡Tú sí que eres fuerte!",
                        "你真的很强！"
                    ]
                },
                {
                    text: [
                        "Here, take the Thunder Badge.",
                        "Anda, toma la Medalla Trueno.",
                    "来，收下这枚橙色徽章。"
                    ]
                },
                {
                   text: [
                        "I also give you TM123 which contains the move Thunderbolt.",
                        "También te hago entrega de la MT123 que contiene el movimiento Rayo.",
                    "我还要给你TM123，里面包含了招式十万伏特。"
                    ],
                    reward: {
                        item: item.tm.tm123,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "You are very special!",
                        "¡Tú eres muy especial!",
                        "你非常特别！"
                    ]
                }
            ]
        ]
    },
    erika: {
        name: ['Erika', 'Erika', '莉佳'],
        state: savedStates.erika ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Hello... beautiful day, isn't it?",
                        "Hola... bonito día, ¿verdad?",
                    "你好……今天天气真好，不是吗？"
                    ]
                },
                {
                    text: [
                        "It's so peaceful...",
                        "Se está tan bien...",
                        "这里好安静……"
                    ]
                },
                {
                    text: [
                        "I could even fall asleep...",
                        "Podría hasta dormirme...",
                        "我甚至能睡着……"
                    ]
                },
                {
                    text: [
                        "My name is Erika, and I'm the gym leader of Celadon City.",
                        "Me llamo Erika, y soy la líder del gimnasio de ciudad Azulona.",
                    "我叫莉佳，是玉虹市的道馆馆主。"
                    ]
                },
                {
                    text: [
                        "What?",
                        "¿Cómo?",
                        "什么？"
                    ]
                },
                {
                    text: [
                        "You're from Johto?",
                        "¿Vienes de Johto?",
                        "你来自城都？"
                    ]
                },
                {
                    text: [
                        "That's great...!",
                        "¡Que bien...!",
                        "太好了……！"
                    ]
                },
                {
                    text: [
                        "Oh! Sorry, I didn't realize you wanted to challenge me.",
                        "¡Oh! lo siento, no me di cuenta de que querías desafiarme.",
                    "哦！抱歉，我没意识到你想挑战我。"
                    ]
                },
                {
                    text: [
                        "Alright, but I won't lose.",
                        "Muy bien, pero no perderé.",
                    "好吧，但我不会输的。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.gym.open('erika');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Oh! I admit that I lost...",
                        "¡Oh! Admito que he perdido...",
                        "哦！我承认我输了……"
                    ]
                },
                {
                    text: [
                        "You are really strong!",
                        "¡Eres realmente fuerte!",
                    "你真的很强！"
                    ]
                },
                {
                    text: [
                        "I will give you the Rainbow Badge...",
                        "Te daré la medalla Arcoíris...",
                        "我会给你彩虹徽章……"
                    ]
                },
                {
                   text: [
                        "I also give you TM78 which contains the move Energy Ball.",
                        "También te hago entrega de la MT78 que contiene el movimiento Energibola.",
                    "我还要给你TM78，里面包含了招式能量球。"
                    ],
                    reward: {
                        item: item.tm.tm78,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "Defeat leaves a bad taste...",
                        "La derrota deja mal sabor de boca...",
                        "失败留下了苦涩的味道……"
                    ]
                },
                {
                    text: [
                        "But knowing there are stronger trainers motivates me to improve.",
                        "Pero saber que hay entrenadores más fuertes me anima a mejorar.",
                        "但知道有更强的训练家激励着我进步。"
                    ]
                }
            ]
        ]
    },
    koga: {
        name: ['Koga', 'Koga', '阿桔'],
        state: savedStates.koga ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ha, ha, ha! I'm Koga.",
                        "¡Ja, ja, ja! Soy Koga.",
                    "哈哈哈！我是阿桔。"
                    ]
                },
                {
                    text: [
                        "I live in the shadows, like a ninja.",
                        "Vivo en las sombras, como un ninja.",
                    "我如忍者般生活在阴影之中。"
                    ]
                },
                {
                    text: [
                        "I will confuse and destroy you with my style!",
                        "¡Te confundiré y destruiré con mi estilo!",
                        "我会用我的风格迷惑并摧毁你！"
                    ]
                },
                {
                    text: [
                        "Get ready to be a victim of my unpredictable and dazzling techniques!",
                        "¡Prepárate para ser víctima de mis imprevisibles y alucinantes técnicas!",
                        "准备成为我不可预测的华丽技术的受害者吧！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('koga');
                    } 
                },
            ],
            [
               {
                    text: [
                        "Ha, ha, ha! Good battle.",
                        "¡Ja, ja, ja! Buen combate.",
                    "哈哈哈！精彩的对战。"
                    ]
                },
                {
                    text: [
                        "You deserve the Soul Badge.",
                        "Te mereces la medalla Alma.",
                        "你配得上灵魂徽章。"
                    ]
                },
                {
                    text: [
                        "I also give you TM91 which contains the move Poison Jab.",
                        "También te hago entrega de la MT91 que contiene el movimiento Puya nociva.",
                    "我还要给你TM91，里面包含了招式毒击。"
                    ],
                    reward: {
                        item: item.tm.tm91,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        `...`, 
                        `...`,
                        `...`
                    ]
                }
            ]
        ]
    },
    sabrina: {
        name: ['Sabrina', 'Sabrina', '娜姿'],
        state: savedStates.sabrina ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "I knew you would come...",
                        "Sabía que vendrías...",
                        "我知道你会来的……"
                    ]
                },
                {
                    text: [
                        "Three years ago, I had a vision of your arrival.",
                        "Hace tres años tuve una visión de tu llegada.",
                    "三年前，我就预见了你的到来。"
                    ]
                },
                {
                    text: [
                        "What you want is my badge.",
                        "Tú lo que quieres es mi medalla.",
                        "你想要的是我的徽章。"
                    ]
                },
                {
                    text: [
                        "I don't like fighting, but my duty as a leader is to grant badges to all who deserve them.",
                        "No me gusta luchar, pero mi deber como líder es conceder medallas a todo aquel que se lo merezca.",
                    "我不喜欢战斗，但作为馆主，我的职责是授予徽章给所有应得之人。"
                    ]
                },
                {
                    text: [
                        "Since that is what you want, I will show you my psychic powers.",
                        "Como eso es lo que quieres, te mostraré mis poderes psíquicos.",
                    "既然这是你想要的，我就让你见识我的超能力。"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('sabrina');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Your power...",
                        "Tu poder...",
                        "你的力量……"
                    ]
                },
                {
                    text: [
                        "Maybe I can't fully predict what the future holds for us...",
                        "Quizá no pueda predecir del todo lo que nos depara el futuro...",
                        "也许我无法完全预测我们的未来……"
                    ]
                },
                {
                    text: [
                        "Well, you have earned the Marsh Badge.",
                        "Pues te has ganado la medalla Pantano.",
                    "好了，你已经赢得了金色徽章。"
                    ]
                },
                {
                    text: [
                        "I also give you TM64, which contains the move Zen Headbutt.",
                        "También te hago entrega de la MT64 que contiene el movimiento Cabezazo zen.",
                    "我还要给你招式机64，里面包含了招式意念头锤。"
                    ],
                    reward: {
                        item: item.tm.tm64,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "I see, I see.",
                        "Ya veo, ya.",
                    "原来如此，原来如此。"
                    ]
                },
                {
                    text: [
                        "It's clear that your strength surpasses my psychic power.",
                        "Está claro que tu fuerza es superior a mi poder psíquico.",
                        "很明显你的力量超越了我的超能力。"
                    ]
                }
            ]
        ]
    },
    blaine: {
        name: ['Blaine', 'Blaine', '夏伯'],
        state: savedStates.blaine ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Woooh! Thanks for being so punctual!",
                        "¡Uoooh! ¡Gracias por ser tan puntual!",
                        "哇！谢谢你这么准时！"
                    ]
                },
                {
                    text: [
                        "Get ready to see how tough we are in this Gym!",
                        "¡Prepárate para comprobar lo tenaces que somos en este Gimnasio!",
                        "准备好见识我们在这个道馆有多强吧！"
                    ]
                },
                {
                    text: [
                        "If you beat me, I'll give you a Badge.",
                        "Si me vences te daré una Medalla.",
                        "如果你打败我，我会给你一枚徽章。"
                    ]
                },
                {
                    text: [
                        "Let's go!",
                        "¡Vamos allá!",
                        "上吧！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('blaine');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Incredible, I burned out...",
                        "Increíble, me consumí...",
                    "难以置信，我的火焰燃尽了……"
                    ]
                },
                {
                    text: [
                        "You've won the Volcano Badge!",
                        "¡Has ganado la Medalla Volcán!",
                        "你赢得了火山徽章！"
                    ]
                },
                {
                    text: [
                        "I also give you TM86 that contains the move Flamethrower.",
                        "También te hago entrega de la MT86 que contiene el movimiento Lanzallamas.",
                    "我还要给你TM86，里面包含了招式喷射火焰。"
                    ],
                    reward: {
                        item: item.tm.tm86,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "You may have defeated me, but my determination remains undefeated!",
                        "Me habrás derrotado, ¡pero mi tesón sigue estando invicto!",
                    "你也许打败了我，但我的决心从未被击败！"
                    ]
                },
            ]
        ]
    },
    giovanni: {
        name: ['Giovanni', 'Giovanni', '坂木'],
        state: savedStates.giovanni ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I'm Giovanni, the leader of...",
                        "Soy Giovanni, el líder de...",
                    "我是坂木，首领的道馆馆主。"
                    ]
                },
                {
                    text: [
                        "The leader of the Viridian City Gym.",
                        "El líder del gimnasio de Ciudad Verde.",
                        "常青市道馆的馆主。"
                    ]
                },
                {
                    text: [
                        "The greatest challenge awaits you!",
                        "¡El mayor reto te espera!",
                        "最伟大的挑战在等着你！"
                    ]
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('giovanni');
                    } 
                },
            ],
            [
               {
                    text: [
                        "That can't be!",
                        "¡Eso no puede ser!",
                        "不可能！"
                    ]
                },
                {
                    text: [
                        "You've defeated my unbeatable team!",
                        "¡Has derrotado a mi equipo invencible!",
                        "你打败了我无敌的队伍！"
                    ]
                },
                {
                    text: [
                        "The Earth Badge proves your mastery as a Pokémon Trainer.",
                        "La Medalla Tierra demuestra tu maestría como Entrenador Pokémon.",
                        "大地徽章证明了你是宝可梦训练家的大师。"
                    ]
                },
                {
                    text: [
                        "I also give you TM69, which contains the move Earthquake.",
                        "También te hago entrega de la MT69 que contiene el movimiento Terremoto.",
                    "我还要给你TM69，里面包含了招式地震。"
                    ],
                    reward: {
                        item: item.tm.tm69,
                        amount: 1
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "My ambition was my downfall.",
                        "Mi ambición fue mi perdición.",
                        "我的野心是我的败因。"
                    ]
                },
                {
                    text: [
                        "If only I could... start over...",
                        "Si tan solo pudiera... empezar de nuevo...",
                        "如果我能……重新开始……"
                    ],
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
                        "What did you say?",
                        "¿Cómo dices?",
                        "你说什么？"
                    ]
                },
                 {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
                        "A signed letter... asking for forgiveness?",
                        "¿Una carta firmada... pidiendo perdón?",
                        "一封签名的信……请求原谅？"
                    ]
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
                        "Is this a joke?",
                        "¿Esto es una broma?",
                        "这是玩笑吗？"
                    ]
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
    "...",
    "...",
    "..."
],
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
                        "Tch... well.",
                        "Tch... vale. ",
                        "啧……好吧。"
                    ]
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
                        "If that's what you want...",
                        "Si eso es lo que deseas...",
                        "如果那是你想要的……"
                    ]
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
    "...",
    "...",
    "..."
],
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
    "...",
    "...",
    "..."
],
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
    "...",
    "...",
    "..."
],
                },
                {   
                    condition: () => (main.npcs['kurt'].state >= 3),
                    text: [
                        "Here you go...",
,
                        "给你……",
                        "给你……",
                    ],
                    reward: {
                        item: item.key.giovanniApologyLetter,
                        amount: 1
                    },
                    state: 3
                }
            ],
            [
                {
                    text: [
                        "My ambition was my downfall.",
                        "Mi ambición fue mi perdición.",
                        "我的野心是我的败因。"
                    ]
                },
                {
                   text: [
                        "If only I could... start over...",
                        "Si tan solo pudiera... empezar de nuevo...",
                        "如果我能……重新开始……"
                    ]
                },
            ]
        ]
    },
     
    // PUEBLO PRIMAVERA
    professorElm: {
        name: ['Professor Elm', 'Profesor Elm', '空木博士'],
        state: savedStates.professorElm ?? 0,
        dialogues: [
            [
                {
                    text: [
                        `${main.player.name.toUpperCase()}! Just the person I wanted to see.`,
                        `¡Ah, ${main.player.name.toUpperCase()}! Justo a quien quería ver.`,
                        `${main.player.name.toUpperCase()}！正想找你呢。`
                    ]
                },
                {
                    text: [
                        `Have you bonded well with the ${main.team?.pokemon[0]?.name} you received?`,
,
                        `你和收到的${main.team?.pokemon[0]?.name}相处得还好吗？`,
                    ]
                },
                {
                    text: [
                        `I'll get straight to the point, I need your help with something important.`,
                        `Iré al grano, necesito tu ayuda con algo importante.`,
                        `我就直说了，我需要你帮忙做一件重要的事。`
                    ]
                },
                {
                    text: [
                        `I'm gathering data on all Pokémon from Kanto and Johto, but it's a huge task for one person.`,
                        `Estoy recopilando información sobre todos los Pokémon de Kanto y Johto, pero es una tarea enorme para una sola persona.`,
                        `我正在收集关都和城都所有宝可梦的数据，但这对一个人来说任务太艰巨了。`
                    ]
                },
                {
                    text: [
                        `You've chosen to embark on this adventure, so you're the perfect person to help with this research.`,
                        `Tú, que has decidido emprender esta aventura, eres la persona ideal para colaborar en esta investigación.`,
                        `你选择踏上这次冒险，所以你是帮助这项研究的完美人选。`
                    ]
                },
                {
                    text: [
                        `You'll travel across many areas and encounter unique Pokémon.`,
                        `Viajarás por muchas zonas y te toparás con Pokémon únicos.`,
                        `你将穿越许多地区，遇到独特的宝可梦。`
                    ]
                },
                {
                    text: [
                        `Your help will be key in registering them in the Pokédex.`,
                        `Tu ayuda será clave para registrarlos en la Pokédex.`,
                        `你的帮助对将它们登记在图鉴中至关重要。`
                    ]
                },
                {
                    text: [
                        `Every time you see or catch a new one, your Pokédex will update automatically.`,
                        `Cada vez que veas o captures uno nuevo, tu Pokédex se actualizará automáticamente.`,
                        `每次你看到或收服新的宝可梦，图鉴都会自动更新。`
                    ]
                },
                {
                    text: [
                        `What? You don't know how to catch Pokémon?`,
                        `¿Qué? ¿No sabes capturar Pokémon?`,
                        `什么？你不知道怎么收服宝可梦？`
                    ]
                },
                {
                    text: [
                        `Don't worry... It's easier than it seems.`,
                        `No te preocupes, es más sencillo de lo que parece.`,
                        `别担心...这比看起来简单。`
                    ]
                },
                {
                    text: [
                        `When you face one and weaken it, it might decide to join you.`,
                        `Cuando te enfrentes a uno y lo debilites, puede que decida acompañarte.`,
                        `当你面对并削弱一只宝可梦时，它可能会决定加入你。`
                    ]
                },
                {
                    text: [
                        `All you need is a Poké Ball.`,
                        `Solo necesitas una Pokeball.`,
                        `你只需要一个精灵球。`
                    ]
                },
                {
                    text: [
                        "来，拿着这个to get started。",
                        "Toma, llévate esta para empezar.",
                    "来，拿着这个开始吧。"
                    ],
                    reward: {
                        item: item.key.pokeball,
                        amount: 1
                    }
                },
                {
                    text: [
                        "Come back to see me once you've made some progress, I've got rewards to keep you motivated.",
                        "Vuelve a visitarme cuando hayas avanzado, tengo recompensas para motivarte a seguir investigando.",
                    "有进展了再回来找我，我有奖励来激励你。"
                    ]
                },
                {
                    text: [
                        "Actually, to help you get started...",
                        "De hecho, para que empieces bien...",
                    "实际上，为了帮你起步……"
                    ]
                },
                {
                    text: [
                        "Here's a reusable Potion.",
                        "Aquí tienes una Poción reutilizable.",
                    "这是一个可重复使用的伤药。"
                    ],
                    reward: {
                        item: item.key.potion,
                        amount: 1
                    } 
                },
                {
                    text: [
                        "It'll come in handy during battles against wild Pokémon.",
                        "Te será útil en combates contra Pokémon salvajes.",
                        "它在与野生宝可梦战斗时会派上用场的。"
                    ]
                },
                {
                    text: [
                        "Once you use it, visit a Pokémon Center to refill it.",
                        "Una vez la consumas, visita un Centro Pokémon para rellenarla.",
                    "使用后，去宝可梦中心可以重新装满。"
                    ]
                },
                {
                    text: [
                        "Together, we'll complete the Pokédex and advance Pokémon research!",
                        "¡Juntos completaremos la Pokédex y haremos avanzar la investigación Pokémon!",
                    "我们一起完成宝可梦图鉴，推进宝可梦研究！"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Are you here for me to take a look at your Pokédex?",
                        "¿Vienes a que eche un vistazo a tu Pokédex?",
                    "你是来让我看看你的宝可梦图鉴的吗？"
                    ],
                },
                {
                    text: [
                        "Let's see what you've discovered...",
                        "A ver qué has descubierto...",
                    "让我看看你发现了什么……"
                    ],
                },
                {   
                    condition: () => main.pokedex.totalSeen() >= 100,
                    text: [
                        "You've already spotted 100 different species!",
                        "¡Ya has avistado 100 especies diferentes!",
                        "你已经发现了100种不同的宝可梦！"
                    ]
                },
                {   
                    condition: () => main.pokedex.totalSeen() >= 100,
                    text: [
                        "That deserves a reward.",
                        "Esto se merece una recompensa.",
                        "这值得奖励。"
                    ]
                },
                {   
                    condition: () => main.pokedex.totalSeen() >= 100,
                    text: [
                        "Here, take the Catching Charm.",
                        "Toma, el Amuleto Captura.",
                    "来，收下捕获护符。"
                    ],
                    reward: {
                        item: item.key.catchingCharm,
                        amount: 1
                    },
                    cb: () => {  main.player.catchingCharm = true },
                    state: 2
                },
                {   
                    condition: () => main.pokedex.totalSeen() >= 100,
                    text: [
                        "It'll help you catch more Pokémon.",
                        "Te ayudará a conseguir más Pokémon.",
                        "它会帮助你捕捉更多宝可梦。"
                    ]
                },
                {   
                    condition: () => main.pokedex.totalSeen() >= 100,
                    text: [
                        "Remember, spotting them isn't enough, I need you to catch them.",
                        "Recuerda que no solo basta con avistarlos, necesito que los captures.",
                    "记住，光看到还不够，我需要你抓到它们。"
                    ]
                },
                { 
                    condition: () => main.pokedex.totalSeen() < 100,
                    text: [
                        "Hmm... You're just getting started, huh?",
                        "Hmm... Aún estás empezando, ¿eh?",
                    "嗯……你才刚开始，对吧？"
                    ]
                },
                { 
                    condition: () => main.pokedex.totalSeen() < 100,
                    text: [
                        "Explore more and catch everything you can.",
                        "Explora más y captura todo lo que puedas.",
                        "继续探索，尽你所能捕捉一切。"
                    ]
                },
                { 
                    condition: () => main.pokedex.totalSeen() < 100,
                    text: [
                        "Keep it up!",
                        "¡Sigue así!",
                        "继续加油！"
                    ]
                }
            ],
            [
                {
                    text: [
                        "Are you here for me to take a look at your Pokédex?",
                        "¿Vienes a que eche un vistazo a tu Pokédex?",
                    "你是来让我看看你的宝可梦图鉴的吗？"
                    ],
                },
                {
                    text: [
                        "Let's see what you've discovered...",
                        "A ver qué has descubierto...",
                    "让我看看你发现了什么……"
                    ],
                },
                {   
                    condition: () => main.pokedex.totalCatched() >= 100,
                   text: [
                        "You've caught 100 different species!",
                        "¡Ya has capturado 100 especies diferentes!",
                        "你已经捕捉了100种不同的宝可梦！"
                    ]
                },
                {   
                    condition: () => main.pokedex.totalCatched() >= 100,
                    text: [
                        "That deserves a reward.",
                        "Esto se merece una recompensa.",
                        "这值得奖励。"
                    ]
                },
                {   
                    condition: () => main.pokedex.totalCatched() >= 100,
                   text: [
                        "Here, take the Shiny Charm.",
                        "Toma, el Amuleto Iris.",
                    "来，收下闪光护符。"
                    ],
                    reward: {
                        item: item.key.shinyCharm,
                        amount: 1
                    },
                    cb: () => {  main.player.shinyCharm = true },
                    state: 3
                },
                {   
                    condition: () => main.pokedex.totalCatched() >= 100,
                    text: [
                        "Keep catching Pokémon until you complete the Pokédex.",
                        "Sigue capturando Pokémon hasta completar la Pokédex.",
                        "继续捕捉宝可梦直到完成宝可梦图鉴。"
                    ]
                },
                { 
                    condition: () => main.pokedex.totalCatched() < 100,
                    text: [
                        "Hmm... You're not catching enough.",
                        "Hmm... No estás capturando lo suficiente.",
                        "嗯……你捕捉得还不够。"
                    ]
                },
                { 
                    condition: () => main.pokedex.totalCatched() < 100,
                    text: [
                        "Explore more and catch everything you can.",
                        "Explora más y captura todo lo que puedas.",
                        "继续探索，尽你所能捕捉一切。"
                    ]
                },
                { 
                    condition: () => main.pokedex.totalCatched() < 100,
                    text: [
                        "Keep it up!",
                        "¡Sigue así!",
                        "继续加油！"
                    ]
                }
            ],
            [
                {
                    text: [
                        "You have already spotted and captured more than 100 Pokémon species.",
                        "Ya has avistado y capturado más de 100 especies Pokémon.",
                        "你已经发现并捕捉了超过100种宝可梦。"
                    ]
                },
                {
                    text: [
                        "That's an outstanding achievement, really!",
                        "¡Es un logro increíble, de verdad!",
                    "这真是一个了不起的成就，真的！"
                    ]
                },
                {
                    text: [
                        "Your work is helping us understand Pokémon better every day.",
                        "Tu trabajo nos está ayudando a entender mejor a los Pokémon cada día.",
                        "你的工作每天都在帮助我们更好地了解宝可梦。"
                    ]
                },
                {
                    text: [
                        "I'm afraid I don't have any more rewards to offer you right now.",
                        "Me temo que ya no tengo más recompensas que darte por el momento.",
                        "恐怕我现在没有更多奖励给你了。"
                    ]
                },
                {
                    text: [
                        "But don't let that stop you.",
                        "Pero no dejes que eso te detenga.",
                        "但别让这阻止你。"
                    ]
                },
                {
                    text: [
                        "I'll be following your journey closely, so keep it up!",
                        "Estaré siguiendo tu viaje de cerca, ¡así que sigue así!",
                    "我会密切关注你的旅程，继续加油！"
                    ]
                },
                {
                    text: [
                        "Who knows what surprises the Pokémon world still holds?",
                        "¿Quién sabe qué sorpresas guarda aún el mundo Pokémon?",
                        "谁知道宝可梦世界还有什么惊喜？"
                    ]
                }
            ]
        ]
    },
    mom: {
        name: ['Mom', 'Mamá', '妈妈'],
        state: savedStates.mom ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "How exciting, your very first adventure as a Pokémon Trainer!",
                        "¡Qué emoción, tu primera aventura como entrenador Pokémon!",
                    "太令人兴奋了，你作为宝可梦训练家的第一次冒险！"
                    ]
                },
                {
                    text: [
                        "I wish you all the luck in the world.",
                        "Te deseo toda la suerte del mundo.",
                        "我祝你好运。"
                    ]
                },
                {
                    text: [
                        "I'm sure you'll do incredible things.",
                        "Estoy segura de que harás cosas increíbles.",
                        "我相信你会做出了不起的事。"
                    ]
                },
                {
                    text: [
                        "And remember, this will always be your home.",
                        "Y recuerda, esta siempre será tu casa.",
                    "记住，这里永远是你的家。"
                    ]
                },
                {
                    text: [
                        "You can come back whenever you need to rest.",
                        "Puedes volver cuando necesites descansar.",
                    "你想休息的时候随时可以回来。"
                    ],
                    state: 1
                }
            ],
            [     
                {
                    text: [
                        "Hi, sweetie!",
                        "¡Hola, cariño!",
                    "嗨，亲爱的！"
                    ]
                },
                {
                    text: [
                        "Would you like to rest a bit?",
                        "¿Quieres descansar un poco?",
                        "想休息一下吗？"
                    ]
                },
                {
                    text: [
                        "Your Pokémon are fully recovered.",
                        "Tus Pokémon ya están completamente recuperados.",
                    "你的宝可梦已经完全恢复了。"
                    ],
                    cb: () => {
                        playSound('heal', 'ui');
                        main.player.potion.charge[0] = main.player.potion.charge[1];
                        main.team.pokemon.forEach(pokemon => {
                            pokemon.hp[0] = pokemon.hp[1];
                        });
                    }
                },
                {
                    text:  [
                        "Take care out there!",
                        "¡Cuídate mucho ahí fuera!",
                        "在外面要小心啊！"
                    ]
                },
            ]
        ]
    },
    rivalMom: {
        name: [`${main.rival[0].name}'s mother`, `Madre de ${main.rival[0].name}`, `${main.rival[0].name}'s mother`],
        state: savedStates.rivalMom ?? 0,
        dialogues: [
            [
                {
                   text: [
                        `Were you looking for ${main.rival[0].name.toUpperCase()}?`,
                        `¿Buscabas a ${main.rival[0].name.toUpperCase()}?`,
                        `你在找${main.rival[0].name.toUpperCase()}吗？`,
                    ]
                },
                {
                    text: [
                        "I'm afraid he left some time ago.",
                        "Me temo que ya se ha marchado hace un rato.",
                        "恐怕他早就走了。"
                    ]
                },
                {
                    text: [
                        "He left in a hurry, saying he was going to become the best trainer.",
                        "Salió con mucha prisa, diciendo que iba a convertirse en el mejor entrenador.",
                    "他匆匆离开了，说要成为最强的训练家。"
                    ]
                },
                {
                   text: [
                        "He's always been very competitive...",
                        "Siempre ha sido muy competitivo...",
                        "他一直都很好胜……"
                    ]
                },
                {
                    text: [
                        "Anyway, I hope you get along well out there.",
                        "En fin, espero que os llevéis bien ahí fuera.",
                    "总之，希望你在外面一切顺利。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Here again?",
                        "¿Otra vez por aquí?",
                        "又来了？"
                    ]
                },
                {
                    text: [
                        "I'm afraid he's still not at home.",
                        "Me temo que sigue sin estar en casa.",
                        "恐怕他还没回家。"
                    ]
                },
                {
                    text: [
                        "He does things his own way, you know...",
                        "Va muy a su aire, ya sabes...",
                    "他有自己的做事方式，你知道的……"
                    ]
                },
                {
                   text: [
                        "He's always been a bit stubborn.",
                        "Siempre ha sido algo cabezota.",
                    "他一直以来都有点固执。"
                    ],
                    state: 2
                }
            ],
            [
                { 
                    text: [
                        `${main.rival[0].name.toUpperCase()} hasn't returned since he left.`,
                        `${main.rival[0].name.toUpperCase()} no ha vuelto desde que salió.`,
                        `${main.rival[0].name.toUpperCase()}离开后就一直没回来。`
                    ]
                },
                { 
                    text: [
                        "I hope he's alright.",
                        "Espero que esté bien.",
                        "希望他没事。"
                    ]
                },
                { 
                    text: [
                        "Sometimes I wish he would take things more calmly.",
                        "A veces desearía que se tomara las cosas con más calma.",
                    "有时候我希望他能更冷静一些。"
                    ],
                    state: 3
                }
            ],
            [
                { 
                    text: [
                        "My son is convinced he's going to be the best trainer in the world.",
                        "Mi hijo está convencido de que va a ser el mejor entrenador del mundo.",
                        "我儿子坚信他会成为世界上最好的训练家。"
                    ]
                },
                { 
                    text: [
                        "I don't know if that happens by leaving without telling anyone...",
                        "No sé si eso se consigue yéndose sin avisar... pero bueno.",
                    "我不知道不告诉任何人就离开，会发生什么……"
                    ],
                    state: 4
                }
            ],
            [
                { 
                    text: [
                        "Come in, come in... Although you know he's not here.",
                        "Pasa, pasa... Aunque ya sabes que no está.",
                    "进来吧，进来吧……虽然你知道他不在这里。"
                    ]
                },
                { 
                    text: [
                        "If you see him around, tell him his mother remembers him.",
                        "Si le ves por ahí, dile que su madre se acuerda de él.",
                    "如果你看到他了，告诉他，他的妈妈很想他。"
                    ],
                    state: 1
                }
            ]
        ]
    },
    pokemonBreeder: {
        name: ['Pokémon Breeder', 'Cria-Pokémon', '宝可梦培育家'],
        state: savedStates.pokemonBreeder ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hello! I'm the Pokémon Breeder.",
                        "¡Hola! Soy el Cria-Pokémon.",
                        "你好！我是宝可梦培育员。"
                    ]
                },
                {
                    text: [
                        "I work here raising the starter Pokémon for Professor Elm.",
                        "Trabajo aquí criando a los Pokémon iniciales para el Profesor Elm.",
                        "我在这里为空木博士培育初始宝可梦。"
                    ]
                },
                {
                    text: [
                        "It's an amazing job!",
                        "¡Es un trabajo increíble!",
                        "这是一份了不起的工作！"
                    ]
                },
                {
                    text: [
                        "Sometimes I wish I could go on an adventure too, but someone has to stay and take care of the new Pokémon.",
                        "A veces me gustaría ir de aventura también, pero alguien tiene que quedarse a cuidar a los nuevos Pokémon.",
                    "有时候我也想出去冒险，但总得有人留下来照顾新来的宝可梦。"
                    ]
                }
            ],
        ]
    },
    signboardANewBarkTown: {
        name: ['Pokémon Laboratory', 'Laboratorio Pokémon', '宝可梦研究所'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Professor Elm's Lab.",
                        "Laboratorio del Profesor Elm.",
                        "空木博士的研究所。"
                    ]
                },
            ]
        ]
    },
    signboardBNewBarkTown: {
        name: ['New Bark Town', 'Pueblo Primavera', '若叶镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "A town where the wind signals the start of a new adventure.",
                        "Poblado donde el viento anuncia el comienzo de una nueva aventura.",
                        "风吹起时预示着新冒险的开始的小镇。"
                    ]
                },
            ]
        ]
    },
    signNewBarkTown: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Open the MENU with the ESC button.",
                        "Abre el MENÚ con el botón ESC.",
                        "按ESC键打开菜单。"
                    ]
                },
            ]
        ]
    },
    mailboxPlayer: {
        name: ['Mailbox', 'Buzón', '邮箱'],
        state: savedStates.mailboxPlayer ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "There is a letter in the mailbox!",
                        "¡Hay una carta en el buzón!",
                    "信箱里有一封信！"
                    ],
                    reward: {
                        item: item.key.letterWithoutSender,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "There's nothing inside.",
                        "No hay nada dentro.",
                        "里面什么都没有。"
                    ]
                }
            ]
        ]
    },
    mailboxRival: {
        name: ['Mailbox', 'Buzón', '邮箱'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "There's nothing inside.",
                        "No hay nada dentro.",
                        "里面什么都没有。"
                    ]
                },
            ]
        ]
    },
    // CIUDAD CEREZO
    signboardCherrygroveCity: {
        name: ['Cherrygrove City', 'Ciudad Cerezo', '吉花市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The city of beautiful and fragrant flowers.",
                        "La ciudad de las flores bonitas y fragantes.",
                        "美丽芬芳的花朵之城。"
                    ]
                },
            ]
        ]
    },
    signCherrygroveCity: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Unique items await you in every Pokémon Mart. Explore them all!",
                        "Objetos únicos te esperan en cada Tienda Pokémon. ¡Explóralas todas!",
                        "每家友好商店都有独特的道具等着你。全部探索吧！"
                    ]
                },
            ]
        ]
    },
    ladyCherrygroveCity: {
        name: ['Lady', 'Dama', '千金小姐'],
        state: savedStates.ladyCherrygroveCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Did you know you can challenge Gym Leaders in any order you want?",
                        "¿Sabías que puedes desafiar a los Líderes de Gimnasio en el orden que prefieras?",
                        "你知道可以按任意顺序挑战道馆馆主吗？"
                    ]
                },
                {
                    text: [
                        "They will adapt their teams according to how many badges you have!",
                        "¡Adaptarán sus equipos según la cantidad de medallas que tengas!",
                        "他们会根据你拥有的徽章数量调整队伍！"
                    ]
                },
                {
                    text: [
                        "If a leader is too strong for you, you might try your luck at another gym.",
                        "Si un líder te resulta demasiado fuerte, podrías intentar suerte en otro gimnasio.",
                    "如果某个馆主对你来说太强了，你可以去别的道馆碰碰运气。"
                    ]
                }
            ]
        ]
    },
    bikerCherrygroveCity: {
        name: ['Biker', 'Ciclista', '飙车族'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Are you new around here?",
                        "¿Eres nuevo por aquí?",
                        "你是新来的吗？"
                    ]
                },
                {
                    text: [
                        "Let me give you a veteran's advice.",
                        "Déjame darte un consejo de veterano.",
                        "让我给你一个老手的建议。"
                    ]
                },
                {
                    text: [
                        "Your Pokémon's level is limited based on how many badges you have.",
                        "El nivel de tus Pokémon está limitado según el número de medallas que tengas.",
                        "你的宝可梦等级上限取决于你拥有的徽章数量。"
                    ]
                },
                {
                    text: [
                        "For example, without any badges, your Pokémon can't exceed level 13.",
                        "Por ejemplo, sin medallas, tus Pokémon no podrán superar el nivel 13.",
                    "比如，没有徽章的话，你的宝可梦不能超过13级。"
                    ]
                },
                {
                    text: [
                        "Once you get your first badge, you can raise them up to level 17.",
                        "Una vez consigas tu primera medalla, podrás subirlos al 17.",
                    "拿到第一枚徽章后，你可以把它们升到17级。"
                    ]
                }
            ]
        ]
    },
    oldManCherrygroveCity: {
        name: ['Old man', 'Anciano', '老人'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "There have been many tremors recently in Cherrygrove City.",
                        "Recientemente ha habido muchos temblores en Ciudad Cerezo.",
                        "最近在吉花市发生了很多地震。"
                    ]
                },
                {
                    text: [
                        "They have caused serious landslides, and now the south of the city is blocked.",
                        "Han provocado graves derrumbes, y ahora el sur de la ciudad está bloqueado.",
                    "它们造成了严重的山体滑坡，现在城市南部被堵住了。"
                    ]
                },
                {
                    text: [
                        "They say it's all the fault of a Pokémon...",
                        "Dicen que todo es culpa de un Pokémon...",
                        "他们说都是一只宝可梦的错……"
                    ]
                }
            ]
        ]
    },
    // CIUDAD MALVA
    earl: {
        name: ['Earl', 'Primo', '厄尔'],
        state: savedStates.earl ?? 0,
        dialogues: [
            [   
                {
                    text: [
                        "Hello! I'm Earl, the person in charge of the Pokémon Academy.",
                        "¡Hola! Soy Primo, el encargado de la Academia Pokémon.",
                    "你好！我是Earl，宝可梦学院的负责人。"
                    ]
                },
                {
                    text: [
                        "Here at the academy, we reward trainers who take this seriously and defeat Gym Leaders.",
                        "Aquí en la academia premiamos a los entrenadores que se toman esto en serio y derrotan a los líderes de gimnasio.",
                    "在学院里，我们奖励那些认真对待训练并击败道馆馆主的训练家。"
                    ]
                },
                {
                    text: [
                        "Every time you earn a badge, come see me to receive a reward.",
                        "Cada vez que consigas una medalla, ven a visitarme para recibir una recompensa.",
                    "每次你获得徽章，来找我领取奖励。"
                    ],
                    state: 1
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 0,
                    text:  [
                        "You have earned your first badge!",
                        "¡Has conseguido tu primera medalla!",
                        "你获得了第一枚徽章！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 0,
                    text:  [
                        "Here is TM88 Slash.",
                        "Aquí tienes la MT88 Cuchillada.",
                    "这是TM88 劈开。"
                    ],
                    reward: {
                        item: item.tm.tm88,
                        amount: 1
                    },
                    state: 2
                },
                {
                    condition: () => main.player.badges.length == 0,
                    text: [
                        "You'll have to try harder, you don't even have a badge yet. Get moving.",
                        "Vas a tener que esforzarte más, ni una medalla tienes aún. Espabila.",
                    "你还得更加努力，连一枚徽章都没有呢。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 1,
                    text: [
                        "Two badges!",
                        "¡Dos medallas!",
                        "两枚徽章！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 1,
                    text: [
                        "Here is a refill for your reusable Potion.",
                        "Aquí tienes una carga para tu Poción reutilizable.",
                    "这是你可重复使用伤药的补充装。"
                    ],
                    reward: {
                        item: item.key.potion,
                        amount: 1
                    },
                    state: 3
                },
                {
                    condition: () => main.player.badges.length == 1,
                    text: [
                        "You'll have to try harder, with only one badge you won't get anywhere. Get moving.",
                        "Vas a tener que esforzarte más, con una única medalla no vas a ningún lado. Espabila.",
                    "你还得更加努力，只有一枚徽章可走不远。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 2,
                    text:  [
                        "And that's three badges now!",
                        "¡Y ya van tres medallas!",
                        "已经三枚徽章了！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 2,
                    text: [
                        "Here is a Protein.",
                        "Aquí tienes una Proteína.",
                    "这是一瓶蛋白质。"
                    ],
                    reward: {
                        item: item.consumable.protein,
                        amount: 1
                    },
                    state: 4
                },
                {
                    condition: () => main.player.badges.length == 2,
                    text: [
                        "You'll have to try harder, you only have two badges, don't slack off. Get moving.",
                        "Vas a tener que esforzarte más, solo tienes dos medallas, no te duermas. Espabila.",
                    "你还得更加努力，才两枚徽章，别偷懒。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 3,
                    text: [
                        "Four badges!",
                        "¡Cuatro medallas!",
                        "四枚徽章！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 3,
                    text: [
                        "Here is the Exp. Charm.",
                        "Aquí tienes el Amuleto Experiencia.",
                    "这是经验护符。"
                    ],
                    reward: {
                        item: item.key.expCharm,
                        amount: 1
                    },
                    cb: () => { main.player.expCharm = true },
                    state: 5
                },
                {
                    condition: () => main.player.badges.length == 3,
                    text: [
                        "You'll have to try harder, you still have a lot to learn. Get moving.",
                        "Vas a tener que esforzarte más, aún te queda mucho por aprender. Espabila.",
                    "你还得更加努力，你还有很多要学的。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 4,
                    text: [
                        "And here is the fifth badge!",
                        "¡Y aquí está la quinta medalla!",
                        "这是第五枚徽章！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 4,
                    text: [
                        "Here is a Union Ticket.",
                        "Aquí tienes un Ticket Unión.",
                    "这是一张联合券。"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                    state: 6
                },
                {
                    condition: () => main.player.badges.length == 4,
                    text: [
                        "You'll have to try harder, four badges are still not enough. Get moving.",
                        "Vas a tener que esforzarte más, cuatro medallas siguen siendo pocas. Espabila.",
                    "你还得更加努力，四枚徽章还不够。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 5,
                    text: [
                        "You've earned your sixth badge!",
                        "¡Has conseguido tu sexta medalla!",
                        "你获得了第六枚徽章！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 5,
                    text: [
                        "Here is a Carbos.",
                        "Aquí tienes un Carburante.",
                    "这是一瓶速度增强剂。"
                    ],
                    reward: {
                        item: item.consumable.carbos,
                        amount: 1
                    },
                    state: 7
                },
                {
                    condition: () => main.player.badges.length == 5,
                    text: [
                        "You'll have to try harder, the toughest part is still ahead. Get moving.",
                        "Vas a tener que esforzarte más, te falta lo más difícil todavía. Espabila.",
                    "你还得更加努力，最艰难的部分还在前面。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 6,
                    text: [
                        "Seven badges, bright as seven suns!",
                        "¡Siete medallas como siete soles!",
                    "七枚徽章，如七个太阳般闪耀！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 6,
                    text: [
                        "Here you have TM101 Shadow Ball.",
                        "¡Aquí tienes la MT101 Bola Sombra!",
                    "给你TM101 暗影球。"
                    ],
                    reward: {
                        item: item.tm.tm101,
                        amount: 1
                    },
                    state: 8
                },
                {
                    condition: () => main.player.badges.length == 6,
                    text: [
                        "You'll have to try harder, six badges is for losers. Get moving.",
                        "Vas a tener que esforzarte más, seis medallas es de perdedores. Espabila.",
                    "你还得更加努力，六枚徽章是失败者的水平。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text: [
                        "Are you here for your rewards?",
                        "¿Vienes a por tus recompensas?",
                        "你是来领取奖励的吗？"
                    ]
                },
                {
                    text: [
                        "Alright, let me see...",
                        "Está bien, déjame ver...",
                    "好吧，让我看看……"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 7,
                    text:  [
                        "You've earned the final badge!",
                        "¡Has conseguido la última medalla!",
                        "你获得了最后一枚徽章！"
                    ]
                },
                {   
                    condition: () => main.player.badges.length > 7,
                    text: [
                        "Here you have a Travel Voucher.",
                        "Aquí tienes un Bono Barco.",
                    "给你一张旅行券。"
                    ],  
                    reward: {
                        item: item.key.travelVoucher,
                        amount: 1
                    },
                    state: 9
                },
                {
                    condition: () => main.player.badges.length == 7,
                    text: [
                        "You'll have to try harder, go get that final badge. Get moving.",
                        "Vas a tener que esforzarte más, ve a por la última medalla. Espabila.",
                    "你还得更加努力，去拿最后一枚徽章吧。快去吧。"
                    ]
                },
            ],
            [   
                {
                    text:  [
                        "You've completed all the Johto gyms!",
                        "¡Has completado todos los gimnasios de Johto!",
                        "你完成了城都所有的道馆！"
                    ]
                },
                {
                    text: [
                        "I have nothing more to offer, make room for the rookie Trainers.",
                        "No tengo nada más para ofrecerte, deja espacio para los entrenadores novatos.",
                    "我没什么可以给你的了，给新手训练家腾点地方吧。"
                    ]
                },
                {
                    text: [
                        "And get moving.",
                        "Y espabila.",
                        "然后行动起来。"
                    ]
                }       
            ],
        ]
    },
    artistVioletCity: {
        name: ['Artist', 'Artista', '画家'],
        state: savedStates.artistVioletCity ?? 0,
        dialogues: [
            [   
                {
                    text: [
                        "Did you know each Pokémon can learn up to two moves?",
                        "¿Sabías que cada Pokémon puede aprender hasta dos movimientos?",
                        "你知道每只宝可梦最多能学会两个招式吗？"
                    ]
                },
                {
                    text: [
                        "To do that, you must teach them, they won't learn them on their own.",
                        "Para ello, tienes que enseñárselos, ya que no los van a aprender por sí solos.",
                    "要做到这一点，你必须教它们，它们不会自己学会。"
                    ]
                },
                {
                    text: [
                        "Here, take this. It's TM120 Horn Attack.",
                        "Toma, esto es la MT120 Cornada.",
                    "来，拿着这个。这是TM120 角撞。"
                    ],
                    reward: {
                        item: item.tm.tm120,
                        amount: 1
                    },
                },
                {
                    text: [
                        "You can teach it to a Pokémon that only knows one move",
                        "Puedes enseñársela a un Pokémon que solo tenga un movimiento.",
                        "你可以教给只会一个招式的宝可梦。"
                    ]
                },
                {
                    text: [
                        "But be careful... If a Pokémon already knows two moves, it can't learn any more.",
                        "Pero ten cuidado, si un Pokémon conoce dos movimientos, no podrá aprender más.",
                    "但要小心……如果宝可梦已经学会了两招，就不能再学了。"
                    ]
                },
                {
                    text: [
                        "To teach it a new move, it must forget an old one.",
                        "Para ello tienen que olvidar un movimiento antiguo.",
                    "要教它新招式，就必须忘记一个旧招式。"
                    ]
                },
                {
                    text: [
                        "Only a Move Deleter can help a Pokémon forget a move, so choose wisely.",
                        "Solamente un tutor quita-movimientos podrá hacer olvidar un movimiento a un Pokémon, así que anda con ojo.",
                    "只有招式遗忘爷爷能帮宝可梦忘记招式，所以要慎重选择。"
                    ],
                    state: 1
                },
            ],
            [   
                {
                    text: [
                        "North of Mahogany Town lives a Move Deleter, but he doesn't work for free.",
                        "Al norte de Pueblo Caoba vive un tutor quita-movimientos, pero no trabaja gratis.",
                    "卡吉镇北边住着一位招式遗忘爷爷，但他可不是免费服务的。"
                    ]
                },
            ]
        ]
    },
    researcherVioletCity: {
        name: ['Researcher', 'Investigador', '研究员'],
        state: 0,
        dialogues: [
            [   
                {
                    text: [
                        "Have you ever heard of the lost region of Apachán?",
                        "¿Alguna vez has oído hablar de la región perdida de Apachán?",
                        "你听说过失落的阿帕查地区吗？"
                    ]
                },
                {
                    text: [
                        "They say that from Route 45, an ancient ritual can open a portal to that forgotten land.",
                        "Cuentan que, desde la Ruta 45, existe un antiguo ritual que puede abrir un portal hacia esa tierra olvidada.",
                    "据说从45号道路，一个古老的仪式可以打开通往那片遗忘之地的大门。"
                    ]
                },
                {
                    text: [
                        "You must perform the rite next to the apacheta, an old mound of stones many overlook.",
                        "Debes realizar el rito junto a la apacheta, un antiguo montículo de piedras que muchos pasan por alto.",
                    "你必须在apacheta旁边进行仪式，那是许多人忽略的古老石堆。"
                    ]
                },
                {
                    text: [
                        "According to legend, those who succeed are transported to Apachán, a place not found on any known map.",
                        "Según la leyenda, quienes lo logran son transportados a Apachán, un lugar que no figura en ningún mapa conocido.",
                    "根据传说，成功的人会被传送到阿帕查，一个在任何已知地图上都找不到的地方。"
                    ]
                },
                {
                    text: [
                        "There is no proof that anyone has ever returned from there...",
                        "No existe ninguna prueba de que alguien haya regresado de allí...",
                        "没有任何证据表明有人从那里回来过……"
                    ]
                },
                {
                    text: [
                        "In fact, the story began because several trainers mysteriously disappeared on that route.",
                        "De hecho, la historia nació porque varios entrenadores desaparecieron misteriosamente en esa ruta.",
                    "事实上，这个故事始于几名训练家在那条路上神秘失踪。"
                    ]
                },
                {
                    text: [
                        "Myth or reality? No one knows...",
                        "¿Mito o realidad? Nadie lo sabe...",
                        "神话还是现实？没人知道……"
                    ]
                },
                {
                    text: [
                        "But if you ever venture through Route 45, be careful.",
                        "Pero si alguna vez te aventuras por la Ruta 45, ten cuidado.",
                    "但如果你经过45号道路，请小心。"
                    ]
                }
            ]
        ]
    },
    vesselVioletCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselVioletCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Rare Candy！",
                        "¡Hay x1 Carameloraro dentro de la vasija!",
                    "容器里有x1 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardAVioletCity: {
        name: ['Violet City', 'Ciudad Malva', '桔梗市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "City of evocative aromas.",
                        "Ciudad de aromas evocadores.",
                        "充满诱人香气的城市。"
                    ]
                },
            ]
        ]
    },
    signboardBVioletCity: {
        name: ['Pokémon Academy', 'Academia Pokémon', '宝可梦学院'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Rewards for the most dedicated trainers.",
                        "Recompensas para los entrenadores más dedicados.",
                        "献给最专注的训练家的奖励。"
                    ]
                },
            ]
        ]
    },
    signboardCVioletCity: {
        name: ['<span style="text-decoration: line-through black; text-decoration-thickness: 4px;">SPROUT TOWER</span>', 
            '<span style="text-decoration: line-through black; text-decoration-thickness: 4px;">TORRE BELLSPROUT</span>', '<span style="text-decoration: line-through black; text-decoration-thickness: 4px;">喇叭芽之塔</span>'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                      "<span style=\"color: var(--red);\">EVOLUTION DOJO</span> <br> Unlock your Pokémon's full potential!",
                      "<span style=\"color: var(--red);\">DOJO EVOLUCIÓN</span> <br> ¡Saca el máximo potencial a tus Pokémon!",
                      "<span style=\"color: var(--red);\">进化道场</span> <br> 释放你宝可梦的全部潜力！"
                    ]
                },
            ]
        ]
    },
    signboardGymVioletCity: {
        name: ['Violet City Gym', 'Gimnasio Pokémon de Ciudad Malva', '桔梗道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Gym of Falkner, the elegant master of Flying-type Pokémon.",
                        "Gimnasio de Pegaso, el elegante maestro de los Pokémon voladores.",
                    "阿速的道馆，优雅的飞行系宝可梦大师。"
                    ]
                },
            ]
        ]
    },
    
    // PUEBLO AZALEA
    signboardAzaleaTown: {
        name: ['Azalea Town', 'Pueblo Azalea', '桧皮镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Where people and Pokémon live in happy harmony.",
                        "Donde la gente y los Pokémon viven en feliz armonía.",
                        "人们和宝可梦幸福和谐地生活的地方。"
                    ]
                },
            ]
        ]
    },
    signboardGymAzaleaTown: {
        name: ['Azalea Town Gym', 'Gimnasio Pokémon de Pueblo Azalea', '桧皮道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text:  [
                        "Gym of Bugsy, the walking Pokémon encyclopedia.",
                        "Gimnasio de Antón, la enciclopedia andante de los Pokémon bicho.",
                    "阿笔的道馆，行走的宝可梦百科全书。"
                    ]
                },
            ]
        ]
    },
    doctorAzaleaTown: {
        name: ['Doctor', 'Médico', '医生'],
        state: savedStates.doctorAzaleaTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Are the passage routes starting to feel too long?",
                        "¿Se te hacen muy largas las rutas de paso?",
                        "通道是不是开始感觉太长了？"
                    ]
                },
                {
                    text: [
                        "Here, take this, an extra charge for your Reusable Potion.",
                        "Aquí tienes una ayudita, un carga para tu Poción reutilizable.",
                    "来，拿着这个，你可重复使用伤药的额外充能。"
                    ],
                    reward: {
                        item: item.key.potion,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Remember to use your potions wisely!",
                        "¡Recuerda usar con cabeza tus pociones!",
                        "记住要合理使用伤药！"
                    ]
                },
                {
                    text: [
                        "Routes can feel endless if you don't manage them properly.",
                        "Las rutas se pueden hacer interminables si no las gestionas correctamente.",
                        "如果不好好管理，道路会感觉永无止境。"
                    ]
                }    
            ]
        ]
    },
    fishermanAzaleaTown: {
        name: ['Fisherman', 'Pescador', '渔夫'],
        state: savedStates.fishermanAzaleaTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, young trainer!",
                        "¡Eh, joven entrenador!",
                    "嘿，年轻的训练家！"
                    ]
                },
                {
                    text: [
                        "Interested in fishing?",
                        "¿Te interesa la pesca?",
                        "对钓鱼感兴趣吗？"
                    ]
                },
                {
                    text: [
                        "Spending time by the water, with the breeze on your face and hope for a good catch...",
                        "Pasar el tiempo junto al agua, con la brisa en la cara y la esperanza de una buena captura... ",
                    "在水边消磨时光，微风拂面，期待能钓到好东西……"
                    ]
                },
                {
                    text: [
                        "There's nothing like it.",
                        "No hay nada igual.",
                        "没有什么比得上它。"
                    ]
                },
                {
                    text: [
                        "Throughout my life, I've caught countless Water-type Pokémon.",
                        "A lo largo de mi vida he atrapado incontables Pokémon acuáticos.",
                        "我这一生中，抓过无数水属性宝可梦。"
                    ]
                },
                {
                    text: [
                        "Each one with its own secrets and beauty.",
                        "Cada uno con sus secretos y su belleza.",
                        "每一只都有自己的秘密和美丽。"
                    ]
                },
                {
                    text: [
                        "I see that spark of curiosity in you and it reminds me of when I first started.",
                        "Veo en ti ese brillo de curiosidad y me recuerda a cuando yo empecé.",
                        "我看到你眼中好奇的光芒，让我想起我刚开始的时候。"
                    ]
                },
                {
                    text: [
                        "Take this Fishing Rod, you can follow in my footsteps now.",
                        "Toma esta Caña de pescar, con ella podrás seguir mis pasos como pescador.",
                    "拿着这根钓竿，你现在可以追随我的脚步了。"
                    ],
                    reward: {
                        item: item.key.rod,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Due to Johto's fishing regulations, you're only allowed to fish in clear, accessible ponds.",
                        "Debido a la legislación de pesca de Johto, únicamente está permitido pescar en estanques accesibles y de agua clara.",
                    "根据城都地区的钓鱼规定，你只允许在清澈、可进入的池塘钓鱼。"
                    ]
                },
                {
                    text: [
                        "So don't even think about casting your rod into seas, rivers, or deepwater ponds.",
                        "Así que ni se te ocurra tirar la caña en mares, ríos o estanques de agua profunda.",
                    "所以别想着把钓竿扔到海里、河里或深水池塘里。"
                    ]
                },
                {
                    text: [
                        "You can try fishing in the pond right in front of my house.",
                        "Puedes probar a pescar en el estanque en frente de mi casa.",
                        "你可以试试在我家门前的池塘钓鱼。"
                    ]
                },
                {
                    text: [
                        "You never know what wonders might be hiding beneath the surface.",
                        "Nunca sabes qué maravilla puede esconderse bajo la superficie.",
                        "你永远不知道水面下隐藏着什么奇观。"
                    ]
                },
                {
                    text: [
                        "Good luck, and may the waters be generous to you!",
                        "¡Buena suerte y que las aguas te sean generosas!",
                    "祝你好运，愿水域对你慷慨！"
                    ], 
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Hey there, youngster! How's the fishing going?",
                        "¡Hey, joven! ¿Qué tal te va la pesca?",
                    "嘿，小伙子！钓鱼怎么样？"
                    ]
                },
                {
                    text: [
                        "Hope you're getting some good catches.",
                        "Espero que estés teniendo buenas capturas.",
                        "希望你能钓到好东西。"
                    ]
                },
                {
                    text: [
                        "Did you know fishing isn't just about casting from the shore?",
                        "¿Sabías que no todo se limita a lanzar la caña desde la orilla?",
                        "你知道钓鱼不只是从岸边抛竿吗？"
                    ]
                },
                {
                    text: [
                        "I know someone in Mahogany Town who owns a Water Bike.",
                        "Conozco a alguien en Pueblo Caoba que posee una Bici acuática.",
                        "我认识卡吉镇一个拥有水上自行车的人。"
                    ]
                },
                {
                    text: [
                        "With it, you can glide across the seas and explore deep waters.",
                        "Con ella puedes surcar los mares y explorar aguas profundas.",
                    "有了它，你可以在海上滑行，探索深水区域。"
                    ]
                },
                {
                    text: [
                        "If you're interested, you should look for him. He might teach you a few tricks.",
                        "Si te interesa, deberías buscarlo. Seguro que te enseña un par de trucos.",
                    "如果你感兴趣，应该去找他。他也许会教你几招。"
                    ]
                }
            ],
            [
                {
                    text: [
                        "I see you've got a Water Bike.",
                        "Veo que has conseguido una Bici acuática.",
                        "我看到你有了水上自行车。"
                    ]
                },
                {
                    text: [
                        "Wish I had one too, so I could fish out at sea...",
                        "Ojalá tener yo una para poder pescar desde el mar...",
                    "真希望我也有一个，这样我就能出海钓鱼了……"
                    ]
                }
            ],
        ]
    },
    vesselAzaleaTown: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAzaleaTown ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x1 Rare Candy！",
                        "¡Hay x1 Carameloraro dentro de la vasija!",
                    "容器里有x1 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // CIUDAD TRIGAL
    signboardAGoldenrodCity: {
        name: ['Goldenrod City', 'Ciudad Trigal', '满金市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Where people and Pokémon live in happy harmony.",
                        "Donde la gente y los Pokémon viven en feliz armonía.",
                        "人们和宝可梦幸福和谐地生活的地方。"
                    ]
                },
            ]
        ]
    },
    signboardBGoldenrodCity: {
        name: ['Goldenrod City Casino', 'Casino de Ciudad Trigal', '满金游戏角'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Play and win great prizes!",
                        "¡Juega y gana grandes premios!",
                        "来玩赢取大奖吧！"
                    ]
                },
            ]
        ]
    },
    signboardCGoldenrodCity: {
        name: ["Witch's lair", 'Guarida de la bruja', '女巫巢穴'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Brewing potions and elixirs.",
                        "Preparación de brebajes y pociones.",
                        "酿造药水和灵药。"
                    ]
                },
            ]
        ]
    },
    archaeologistGoldenrodCity: {
        name: ['Archaeologist', 'Arqueólogo', '考古学家'],
        state: savedStates.archaeologistGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh! A wandering soul crosses my path.",
                        "¡Oh! Un alma errante se cruza en mi travesía.",
                        "哦！一个流浪的灵魂经过了。"
                    ]
                },
                {
                    text: [
                        "Allow me to introduce myself.",
                        "Permíteme presentarme.",
                        "请允许我自我介绍。"
                    ]
                },
                {
                    text: [
                        "I am an archaeologist from the ancient lands of Kanto.",
                        "Soy un arqueólogo venido desde las lejanas tierras ancestrales de Kanto.",
                        "我是一名来自关都古老土地的考古学家。"
                    ]
                },
                {
                    text: [
                        "After countless excavations and stratigraphic surveys, I must tell you that...",
                        "Tras innumerables exhumaciones y prospecciones estratigráficas, he de contarte que...",
                    "经过无数次挖掘和地层调查，我必须告诉你……"
                    ]
                },
                {
                    text: [
                        "I have recovered two relics of immeasurable paleozoological value!",
                        "¡He recuperado dos reliquias de incalculable valor paleozoológico!",
                        "我回收了两件具有无法估量的古生物学价值的遗物！"
                    ]
                },
                {
                    text: [
                        "Here lies the Helix Fossil, revered by ancient civilizations as a trace of a marine Pokémon that brushed divinity.",
                        "Aquí yace el Fósil Helix, venerado por antiguas civilizaciones como vestigio de un Pokémon marino que rozaba la divinidad.",
                    "这里安放着贝壳化石，古代文明将其尊为触及神性的海洋宝可梦的遗迹。"
                    ]
                },
                {
                    text: [
                        "And the Dome Fossil, remnant of an armored creature whose lineage ruled the waters of past eras.",
                        "Y el Fósil Domo, remanente de una criatura acorazada cuyo linaje dominaba las aguas de eras pretéritas.",
                    "以及甲壳化石，一种披甲生物的残骸，其血统曾统治远古时代的水域。"
                    ]
                },
                {
                    text: [
                        "My code of ethics forbids me from keeping both...",
                        "Mi código ético me impide conservar ambos...",
                        "我的道德准则不允许我保留两件……"
                    ]
                },
                {
                    text: [
                        "So, young disciple of archaeology, you must choose one to safeguard.",
                        "Así que, joven discípulo de la arqueología, debes escoger uno para custodiarlo.",
                    "那么，年轻的考古学徒，你必须选择一件来守护。"
                    ]
                },
                {
                    text: [
                        "Reflect as a true archaeologist: will you preserve the legacy of the Helix... or the Dome?",
                        "Medítalo como un verdadero arqueólogo: ¿Preservarás la herencia del Helix... o del Domo?",
                    "像一个真正的考古学家一样思考吧：你要保存贝壳的遗产……还是甲壳的？"
                    ],
                    choices: [
                        {
                            text: ["Helix", "Helix", "菊石兽"],     
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: ["Dome", "Domo", "化石盔"],     
                            next: 2, 
                            state: 2  
                        }
                    ]
                }
            ],
            [
                {
                    text: [
                        "Ah! The Helix Fossil is a fantastic choice, young explorer.",
                        "¡Ah! El Fósil Helix es una decisión fantástica, joven explorador.",
                    "啊！贝壳化石是个绝妙的选择，年轻的探险者。"
                    ],
                    reward: {
                        item: item.key.fossilHelix,
                        amount: 1
                    },
                },
                {
                    text: [
                        "I'm sure fate will smile upon you for what you've chosen.",
                        "Estoy seguro de que el destino te sonreirá con lo que has elegido.",
                        "我相信命运会为你所选的微笑。"
                    ]
                },
                {
                    text: [
                        "Remember, to revive the fossil, you'll need to travel to the remote city of Blackthorn.",
                        "Recuerda, para revivir el fósil, deberás viajar a la remota ciudad de Endrino.",
                    "记住，要复活化石，你需要前往遥远的烟墨市。"
                    ]
                },
                {
                    text: [
                        "And don't worry about the fossil you left behind, the remnants of antiquity are everywhere.",
                        "Y no te preocupes por el fósil que has dejado atrás, los vestigios de la antigüedad están por doquier.",
                    "别担心你留下的化石，古代遗物到处都是。"
                    ]
                },
                {
                    text: [
                        "If you ever venture into Kanto, you're sure to find one quite similar, perhaps even more intriguing.",
                        "Si algún día te aventuras hacia Kanto, seguro encontrarás uno muy similar, tal vez incluso más intrigante.",
                    "如果你前往关都地区，一定能找到类似的，甚至更有趣的。"
                    ]
                },
                {
                    text: [
                        "So follow in my footsteps, and let history guide you.",
                        "Así que, sigue mis pasos y que la historia te guíe.",
                    "跟随我的脚步，让历史引导你吧。"
                    ]
                },
                {
                    text: [
                        "The past and future intertwine in every discovery!",
                        "¡El pasado y el futuro se entrelazan en cada descubrimiento!",
                    "每一次发现中，过去与未来交织在一起！"
                    ],
                    state: 3  
                }
            ],
            [
                {
                    text: [
                        "Ah! The Dome Fossil is a fantastic choice, young explorer.",
                        "¡Ah! El Fósil Domo es una decisión fantástica, joven explorador.",
                    "啊！甲壳化石是个绝妙的选择，年轻的探险者。"
                    ],
                    reward: {
                        item: item.key.fossilDome,
                        amount: 1
                    },
                },
                {
                    text: [
                        "I'm sure fate will smile upon you for what you've chosen.",
                        "Estoy seguro de que el destino te sonreirá con lo que has elegido.",
                        "我相信命运会为你所选的微笑。"
                    ]
                },
                {
                    text: [
                        "Remember, to revive the fossil, you'll need to travel to the remote city of Blackthorn.",
                        "Recuerda, para revivir el fósil, deberás viajar a la remota ciudad de Endrino.",
                    "记住，要复活化石，你需要前往遥远的烟墨市。"
                    ]
                },
                {
                    text: [
                        "And don't worry about the fossil you left behind, the remnants of antiquity are everywhere.",
                        "Y no te preocupes por el fósil que has dejado atrás, los vestigios de la antigüedad están por doquier.",
                    "别担心你留下的化石，古代遗物到处都是。"
                    ]
                },
                {
                    text: [
                        "If you ever venture into Kanto, you're sure to find one quite similar, perhaps even more intriguing.",
                        "Si algún día te aventuras hacia Kanto, seguro encontrarás uno muy similar, tal vez incluso más intrigante.",
                    "如果你前往关都地区，一定能找到类似的，甚至更有趣的。"
                    ]
                },
                {
                    text: [
                        "So follow in my footsteps, and let history guide you.",
                        "Así que, sigue mis pasos y que la historia te guíe.",
                    "跟随我的脚步，让历史引导你吧。"
                    ]
                },
                {
                    text: [
                        "The past and future intertwine in every discovery!",
                        "¡El pasado y el futuro se entrelazan en cada descubrimiento!",
                    "每一次发现中，过去与未来交织在一起！"
                    ],
                    state: 3  
                }
            ],
            [
                {
                    text: [
                        "How glad I am to see you again!",
                        "¡Cuánto me alegra verte de nuevo!",
                        "再次见到你我多么高兴！"
                    ]
                },
                {
                    text: [
                        "Have you come across any mystical relics or ancient bones since we last met?",
                        "¿Te has encontrado con alguna reliquia mística o hueso antiguo desde la última vez?",
                        "我们上次见面后，你遇到什么神秘的遗物或古代骨头了吗？"
                    ]
                },
                {
                    text: [
                        "Ha ha ha! Don't forget the rules of archaeology! Always dig with care...",
                        "¡Ja, ja, ja! ¡No te olvides de las reglas de la arqueología! Siempre excava con cuidado...",
                    "哈哈哈！别忘了考古学的规矩！永远要小心挖掘……"
                    ]
                },
                {
                    text: [
                        "You might find a flying dinosaur fossil and lose all the evidence!",
                        "No sea que encuentres un fósil de un dinosaurio volador y nos quedemos sin pruebas.",
                        "别找到什么飞行恐龙化石然后把证据都弄丢了！"
                    ]
                }
            ]
        ]
    },
    businessmanGoldenrodCity: {
        name: ['Businessman', 'Empresario', '商人'],
        state: savedStates.businessmanGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ah, an ambitious young trainer. I like to see that entrepreneurial spirit.",
                        "Ah, un joven entrenador ambicioso. Me gusta ver ese espíritu emprendedor.",
                    "啊，一位有雄心的年轻训练家。我很欣赏这种创业精神。"
                    ]
                },
                {
                    text: [
                        "Allow me to give you a tool that will boost your team's growth.",
                        "Permíteme darte una herramienta que potenciará el crecimiento de tu equipo.",
                        "请允许我给你一个能促进你队伍成长的道具。"
                    ]
                },
                {
                    text: [
                        "Take this Exp. Share.",
                        "Toma este Repartir experiencia.",
                    "拿着这个经验分享器。"
                    ],
                    reward: {
                        item: item.key.expShare,
                        amount: 1
                    },
                },
                {
                    text: [
                        "With this device, experience gained in battles will be shared among all Pokémon in your team.",
                        "Con este dispositivo, la experiencia obtenida en los combates se repartirá entre todos los Pokémon de tu equipo.",
                    "有了这个装置，战斗中获得的经验将在你队伍中所有宝可梦之间分享。"
                    ]
                },
                {
                    text: [
                        "When you activate it, each one will receive 50% of the total experience.",
                        "Cuando lo actives, cada uno recibirá un 50% de la experiencia total.",
                    "当你激活它时，每只宝可梦将获得总经验的50%。"
                    ]
                },
                {
                    text: [
                        "Of course, the individual amount will be smaller, but everyone will grow together.",
                        "Claro, la cantidad individual será menor, pero todos avanzarán juntos.",
                    "当然，单只获得的经验会变少，但大家会一起成长。"
                    ]
                },
                {
                    text: [
                        "If at any point you prefer to concentrate the experience only on the battler, you can deactivate it during fights.",
                        "Si en algún momento prefieres concentrar la experiencia solo en el combatiente, puedes desactivarlo durante los enfrentamientos.",
                    "如果任何时候你想将经验集中在战斗宝可梦身上，可以在战斗中关闭它。"
                    ]
                },
                {
                    text: [
                        "However, it is very useful for training Pokémon that are still weak or haven't directly participated in battle.",
                        "Sin embargo, es muy útil para entrenar a Pokémon que aún son débiles o que no han participado directamente en la batalla.",
                    "不过，对于训练那些还比较弱小或没有直接参与战斗的宝可梦来说，它非常有用。"
                    ]
                },
                {
                    text: [
                        "A balanced team is a solid investment for any trainer who aspires to go far.",
                        "Un equipo equilibrado es una inversión sólida para cualquier entrenador que aspire a llegar lejos.",
                        "一个平衡的队伍对于任何有远大志向的训练家来说都是坚实的投资。"
                    ]
                },
                {
                    text: [
                        "I recommend using it wisely.",
                        "Te recomiendo usarlo con inteligencia.",
                        "我建议你明智地使用它。"
                    ]
                },
                {
                    text: [
                        "In the long run, it will give you a considerable advantage.",
                        "A largo plazo, te dará una ventaja considerable.",
                    "从长远来看，它会给你带来相当大的优势。"
                    ]
                },
                {
                    text: [
                        "Consider this gift a small investment in your future.",
                        "Considera este regalo como una pequeña inversión en tu futuro.",
                    "把这份礼物当作对你未来的一笔小投资吧。"
                    ],
                    state: 1
                }
            ],
            [
               {
                text: [
                        "How is it going with the Exp. Share?",
                        "¿Cómo te está yendo con el Repartir experiencia?",
                        "学习装置用得怎么样？"
                    ]
                },
                {
                    text: [
                        "Remember you can turn it on or off during battles as needed.",
                        "Recuerda que puedes activarlo o desactivarlo durante los combates, según te convenga.",
                    "记住，你可以在战斗中根据需要打开或关闭它。"
                    ]
                },
                {
                    text: [
                        "It's a very versatile tool.",
                        "Es una herramienta muy versátil.",
                        "这是一个非常多功能的工具。"
                    ]
                },
                {
                    text: [
                        "Make the most of it to balance your team's training!",
                        "¡Sácale el máximo provecho para equilibrar el entrenamiento de tu equipo!",
                        "好好利用它来平衡你队伍的训练吧！"
                    ]
                }
            ]
        ]
    },
    littleGirlGoldenrodCity: {
        name: ['Little girl', 'Niña pequeña', '小女孩'],
        state: savedStates.littleGirlGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                   text: [
                        "Look what I found!",
                        "¡Mira lo que encontré!",
                        "看我找到了什么！"
                    ]
                },
                {
                   text: [
                        "It's a Blue Apricorn, I found it under a tree while playing.",
                        "¡Es un Bonguri azul, lo encontré debajo de un árbol mientras jugaba.",
                    "这是一个蓝色圆柑，我玩的时候在树下捡到的。"
                    ]
                },
                {
                    text: [
                        "I don't really know what it's for... but I'm sure you can make good use of it.",
                        "No sé muy bien para qué sirve... pero seguro que tú le puedes dar un buen uso.",
                        "我不知道它有什么用……但我相信你能好好利用它。"
                    ]
                },
                {
                    text: [
                        "Here, it's yours!",
                        "¡Toma, te lo regalo!",
                    "给你，送你了！"
                    ],
                    reward: {
                        item: item.key.apricornBlue,
                        amount: 1
                    },
                    state: 1
                },
                {
                    text: [
                        "Just promise me you'll do something nice with it.",
                        "Solo prométeme que harás algo bonito con él.",
                        "只要答应我你会用它做点好事。"
                    ]
                },
            ],
            [
                {
                    text: [
                        "Sorry... I don't have any more Apricorn.",
                        "Lo siento... ya no me quedan más Bonguris.",
                        "抱歉……我没有更多圆柑果了。"
                    ]
                },
                {
                    text: [
                        "Hopefully I'll find more soon!",
                        "¡Ojalá encuentre más pronto!",
                        "希望能很快找到更多！"
                    ]
                }
            ]
        ]
    },
    magicianGoldenrodCity: {
        name: ['Magician', 'Mago', '魔术师'],
        state: savedStates.magicianGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey!",
                        "¡Oye!",
                        "嘿！"
                    ]
                },
                {
                    text: [
                        "In this city, there's a witch who improves your potions in exchange for Apricorn.",
                        "En esta ciudad hay una bruja que mejora tus pociones a cambio de Bonguris.",
                        "在这个城市，有个女巫可以用圆柑果来强化你的伤药。"
                    ]
                },
                {
                    text: [
                        "Take them to her and you'll see!",
                        "¡Llévaselos y verás!",
                        "拿给她看看吧！"
                    ]
                },
                {
                    text: [
                        "来，拿着这个reusable Potion charge as a gift。",
                        "Toma, te regalo esta carga de Poción reutilizable.",
                    "来，送你一份可重复使用伤药的充能作为礼物。"
                    ],
                    reward: {
                        item: item.key.potion,
                        amount: 1
                    }, 
                },
                {
                    text: [
                        "I'm not capable of improving potions, but it's something.",
                        "Yo no soy capaz de mejorar las pociones, pero algo es algo.",
                    "我没法升级伤药，但这也算是一点心意。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Did you already talk to the witch? If you give her Apricorn, she'll definitely improve your potions.",
                        "¿Ya hablaste con la bruja? Si le das bonguris, seguro mejora tus pociones.",
                    "你和那位女巫谈过了吗？如果你给她圆柑果实，她一定会帮你升级伤药。"
                    ]
                },
            ],
        ]
    },
    swimmerGoldenrodCity: {
        name: ['Swimmer', 'Nadador', '泳者'],
        state: savedStates.swimmerGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "What a journey!",
                        "¡Vaya travesía!",
                        "真是一段旅程！"
                    ]
                },
                {
                    text: [
                        "I swam from Kanto to Johto... all with my own strokes!",
                        "He nadado desde Kanto hasta Johto... ¡a puro brazada!",
                        "我从关都游到了城都……全靠自己游！"
                    ]
                },
                {
                    text: [
                        "Not even the currents or Tentacool could stop me.",
                        "Ni las corrientes ni los Tentacool pudieron conmigo.",
                        "连洋流和玛瑙水母都阻止不了我。"
                    ]
                },
                {
                    text: [
                        "In my travels, I've learned that some Pokémon only evolve with certain special items.",
                        "En mis viajes he aprendido que algunos Pokémon solo evolucionan con ciertos objetos especiales.",
                        "在我的旅行中，我了解到有些宝可梦只能通过特定的特殊道具进化。"
                    ]
                },
                {
                    text: [
                        "来，拿着这个King's Rock。",
                        "Mira, toma esta Roca del Rey.",
                    "来，拿着这个王者之证。"
                    ],
                    reward: {
                        item: item.consumable.kingsRock,
                        amount: 1
                    },
                },
                {
                    text: [
                        "It's a rare item I brought from Kanto.",
                        "Es un objeto raro que traje desde Kanto.",
                        "这是我从关都带来的稀有道具。"
                    ]
                },
                {
                    text: [
                        "Certain Pokémon need it to evolve.",
                        "La necesitan ciertos Pokémon para evolucionar.",
                        "某些宝可梦需要它来进化。"
                    ]
                },
                {
                    text: [
                        "Take good care of it, you don't find them easily here in Johto.",
                        "Cuídala bien, no se encuentran fácilmente aquí en Johto.",
                    "好好保管，在城都地区可不容易找到。"
                    ]
                },
                {
                    text: [
                        "It's a true treasure for dedicated trainers!",
                        "¡Es una auténtica joya para los entrenadores dedicados!",
                    "对于专注的训练家来说，这是真正的宝藏！"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "I hope you're taking good care of that King's Rock I gave you...",
                        "Espero que estés cuidando bien esa Roca del Rey que te di...",
                        "希望你有好好保管我给你的王者之证……"
                    ]
                },
                 {
                    text: [
                        "You don't see many around here.",
                        "No se ven muchas por aquí.",
                        "这里很少见到。"
                    ]
                },
            ]
        ]
    },
    gamblerGoldenrodCity: {
        name: ['Gambler', 'Apostador', '赌徒'],
        state: savedStates.gamblerGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, kid!",
                        "¡Eh, chaval!",
                    "嘿，小子！"
                    ]
                },
                {
                    text: [
                        "Come here... I'm about to give you the best deal of your life.",
                        "Ven aquí... te voy a hacer el mejor trato de tu vida.",
                        "过来……我要给你做一笔人生最好的交易。"
                    ]
                },
                {
                    text: [
                        "I used to be a casino master... or so I thought.",
                        "Yo era un maestro del casino... o eso creía.",
                        "我曾经是赌场高手……至少我这么以为。"
                    ]
                },
                {
                    text: [
                        "Now I'm poorer than a Magikarp without a puddle.",
                        "Ahora soy más pobre que un Magikarp sin charco.",
                        "现在我比没有水坑的鲤鱼王还穷。"
                    ]
                },
                {
                    text: [
                        "I've decided to retire before they mortgage even my socks.",
                        "He decidido retirarme antes de que me hipotequen hasta los calcetines.",
                        "我决定在连袜子都被抵押之前退休。"
                    ]
                },
                {
                    text: [
                        "Take these 50 tokens.",
                        "Toma estas 50 fichas.",
                    "拿着这50枚代币。"
                    ],
                    reward: {
                        item: item.key.token,
                        amount: 50
                    },
                    cb: () => {
                        if (!main.player.achievement[34].status) {
                            main.player.achievement[34].progress[0] += 50;
                            if (main.player.achievement[34].progress[0] >= main.player.achievement[34].progress[1]) {
                                main.player.achievement[34].status = true;
                                main.player.unlockAchievement(34);
                            }
                        };
                        if (!main.player.achievement[36].status) {
                            main.player.achievement[36].progress[0] += 50;
                            if (main.player.achievement[36].progress[0] >= main.player.achievement[36].progress[1]) {
                                main.player.achievement[36].status = true;
                                main.player.unlockAchievement(36);
                            }
                        };
                        if (!main.player.achievement[38].status) {
                            main.player.achievement[38].progress[0] += 50;
                            if (main.player.achievement[38].progress[0] >= main.player.achievement[38].progress[1]) {
                                main.player.achievement[38].status = true;
                                main.player.unlockAchievement(38);
                            }
                        };
                    }
                },
                {
                    text: [
                        "I don't need them anymore.",
                        "Ya no las necesito.",
                        "我不再需要它们了。"
                    ]
                },
                {
                    text: [
                        "My wife says if I go back to the casino, she'll trade me for a Sudowoodo.",
                        "Mi mujer dice que si vuelvo al casino me cambia por un Sudowoodo.",
                        "我老婆说如果我再回赌场，她就把我换成树才怪。"
                    ]
                },
                {
                    text: [
                        "Just a warning: the casino always wins... and if not, they invite you back until you lose.",
                        "Solo te advierto: el casino siempre gana... y si no, te invitan a volver hasta que pierdas.",
                    "提醒你一下：赌场永远是赢家……如果不赢，他们也会邀请你回来直到你输光为止。"
                    ]
                },
                {
                    text: [
                        "Good luck! And if you win at the roulette, remember this poor devil, will you?",
                        "¡Buena suerte! Y si ganas en la ruleta, acuérdate de este pobre diablo, ¿eh?",
                    "祝你好运！如果你在轮盘赢了，别忘了这个可怜虫，好吗？"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Still hanging around? Or are you here to return the chips with interest? Hehehe.",
                        "¿Sigues por aquí? ¿O vienes a devolverme las fichas con intereses? Jejeje.",
                        "还在转悠？还是来还筹码带利息的？嘿嘿嘿。"
                    ]
                },
            ]
        ]
    },
    piruja: {
        name: ['Piruja', 'Piruja', '皮鲁哈'],
        state: savedStates.piruja ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hmm... you... yes, you.",
                        "Hmm... tú... sí, tú.",
                    "嗯……你……对，就是你。"
                    ]
                },
                {
                    text: [
                        "I see those mediocre potions in your bag...",
                        "Te veo con esas pociones mediocres en tu bolsa...",
                        "我看到你包里那些平庸的伤药了……"
                    ]
                },
                {
                    text: [
                        "Do you want them to have a bit more magic?",
                        "¿Quieres que tengan un poco más de magia?",
                        "想让它们多一点魔力吗？"
                    ]
                },
                {
                    text: [
                        "I'm Piruja, the witch of these lands.",
                        "Soy Piruja, la bruja de estas tierras.",
                    "我是Piruja，这片土地的女巫。"
                    ]
                },
                {
                    text: [
                        "I've perfected the ancient art of enhancing flasks using the power of Apricorn.",
                        "He perfeccionado el antiguo arte de mejorar frascos con el poder de los bonguris.",
                        "我精通了用圆柑果的力量强化药瓶的古老艺术。"
                    ]
                },
                {
                    text: [
                        "If you bring me Apricorn, I can boost your reusable potions to increase their healing power.",
                        "Si me traes bonguris, puedo potenciar tus pociones reutilizables para aumentar su curación.",
                    "如果你给我圆柑果实，我可以增强你的可重复使用伤药，提高治疗效果。"
                    ]
                },
                {
                    text: [
                        "Each type of Apricorn has its own charm...",
                        "Cada tipo de bonguri tiene su encanto...",
                        "每种圆柑果都有自己的魅力……"
                    ]
                },
                {
                    text: [
                        "To begin, bring me a Red Apricorn and I'll transform your Potions into Super Potions.",
                        "Para empezar, traéme un Bonguri rojo y transformaré tus Pociones en Superpociones.",
                    "首先，给我一个红色圆柑，我就把你的伤药变成好伤药。"
                    ],
                    state: 1
                }
            ],
            [   
                {
                    text: [
                        "Well?",
                        "¿Y bien?",
                        "怎么样？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornRed') == undefined,
                    text: [
                        "No, no, no, no.",
,
                        "不不不不。",
                        "不不不不。",
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornRed') == undefined,
                    text: [
                        "A Red Apricorn.",
                        "Un Bonguri rojo.",
                        "红色圆柑果。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornRed') == undefined,
                    text: [
                        "I need you to bring me a Red Apricorn.",
                        "Necesito que me traigas un Bonguri rojo.",
                        "我需要你给我带来一个红色圆柑果。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornRed') != undefined,
                    text: [
                        "You've brought the Red Apricorn.",
                        "Has traído el Bonguri rojo.",
                        "你带来了红色圆柑果。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornRed') != undefined,
                    text: [
                        "Well done, step aside for a moment, let me prepare my cauldron...",
                        "Perfecto, aparta un momento, déjame preparar mi caldero...",
                    "完美，先让一下，让我准备我的坩埚……"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornRed') != undefined,
                    text: [
                        "It's done!",
                        "¡Ya está!",
                    "完成了！"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui')
                        main.player.upgradePotion();
                    },
                },
                {   
                    condition: () => main.inventory.searchItem('apricornRed') != undefined,
                    text: [
                        "Your potions will now be more powerful.",
                        "Tus pociones ahora serán más poderosas.",
                        "你的伤药现在更强力了。"
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornRed') != undefined,
                    text: [
                        "Come see me whenever you want.",
                        "Ven a verme cuando desees.",
                    "随时来找我。"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornRed'));
                    },
                    state: 2
                },
            ],
            [   
                {
                    text: [
                        "Do you want to keep boosting your potions?",
                        "¿Quieres seguir potenciando tus pociones?",
                        "你想继续强化你的伤药吗？"
                    ],
                },
                {
                    text: [
                        "Bring me a Pink Apricorn and I'll transform your Super Potions into Hyper Potions.",
                        "Traéme un Bonguri rosa y transformaré tus Superpociones en Hiperpociones.",
                    "给我一个粉色圆柑，我就把你的好伤药变成高级伤药。"
                    ],
                    state: 3
                },
            ],
            [   
                {
                    text: [
                        "Well?",
                        "¿Y bien?",
                        "怎么样？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornPink') == undefined,
                    text: [
                        "No, no, no, no.",
,
                        "不不不不。",
                        "不不不不。",
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornPink') == undefined,
                    text: [
                        "A Pink Apricorn.",
                        "Un Bonguri rosa.",
                        "粉色圆柑果。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornPink') == undefined,
                    text: [
                        "I need you to bring me a Pink Apricorn.",
                        "Necesito que me traigas un Bonguri rosa.",
                        "我需要你给我带来一个粉色圆柑果。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornPink') != undefined,
                    text: [
                        "You've brought the Pink Apricorn.",
                        "Has traído el Bonguri rosa.",
                        "你带来了粉色圆柑果。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornPink') != undefined,
                    text: [
                        "Well done, step aside for a moment, let me prepare my cauldron...",
                        "Perfecto, aparta un momento, déjame preparar mi caldero...",
                    "完美，先让一下，让我准备我的坩埚……"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornPink') != undefined,
                    text: [
                        "It's done!",
                        "¡Ya está!",
                    "完成了！"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.player.upgradePotion();
                    },
                },
                {   
                    condition: () => main.inventory.searchItem('apricornPink') != undefined,
                    text: [
                        "Your potions will now be more powerful.",
                        "Tus pociones ahora serán más poderosas.",
                        "你的伤药现在更强力了。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornPink') != undefined,
                    text: [
                        "Come see me whenever you want.",
                        "Ven a verme cuando desees.",
                    "随时来找我。"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornPink'));
                    },
                    state: 4
                },    
            ],
            [   
                {
                    text: [
                        "Do you want to keep boosting your potions?",
                        "¿Quieres seguir potenciando tus pociones?",
                        "你想继续强化你的伤药吗？"
                    ],
                    state: 5
                },
                {
                    text: [
                        "Bring me a Black Apricorn and I'll transform your Hyper Potions into Max Potions.",
                        "Traéme un Bonguri negro y transformaré tus Hiperpociones en Pociones Máximas.",
                    "给我一个黑色圆柑，我就把你的高级伤药变成全满伤药。"
                    ],
                },
            ],
            [   
                {
                    text: [
                        "Well?",
                        "¿Y bien?",
                        "怎么样？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornBlack') == undefined,
                    text:  [
                        "No, no, no, no.",
,
                        "不不不不。",
                        "不不不不。",
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornBlack') == undefined,
                    text:  [
                        "A Black Apricorn.",
                        "Un Bonguri negro.",
                        "黑色圆柑果。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('apricornBlack') == undefined,
                    text: [
                        "I need you to bring me a Black Apricorn.",
                        "Necesito que me traigas un Bonguri negro.",
                        "我需要你给我带来一个黑色圆柑果。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlack') != undefined,
                    text: [
                        "You've brought the Black Apricorn.",
                        "Has traído el Bonguri negro.",
                        "你带来了黑色圆柑果。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlack') != undefined,
                    text: [
                        "Perfect, step aside for a moment, let me prepare my cauldron...",
                        "Perfecto, aparta un momento, déjame preparar mi caldero...",
                    "完美，先让一下，让我准备我的坩埚……"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlack') != undefined,
                    text: [
                        "It's done!",
                        "¡Ya está!",
                    "完成了！"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.player.upgradePotion();
                    }
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlack') != undefined,
                    text: [
                        "Your potions will now be more powerful.",
                        "Tus pociones ahora serán más poderosas.",
                        "你的伤药现在更强力了。"
                    ]
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlack') != undefined,
                    text: [
                        "Come see me whenever you want.",
                        "Ven a verme cuando desees.",
                    "随时来找我。"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornBlack')); 
                    },
                    state: 6
                },
                
            ],
            [   
                {
                    text: [
                        "Do you want to keep boosting your potions?",
                        "¿Quieres seguir potenciando tus pociones?",
                        "你想继续强化你的伤药吗？"
                    ]
                },
                {
                    text: [
                        "Sorry, my powers have a limit.",
                        "Lo siento, mis poderes tienen un límite.",
                    "抱歉，我的力量有限。"
                    ]
                },
                {
                    text: [
                        "I can't brew more apricorn for you, Max Potion is the best I can offer.",
                        "No puedo cocinarte más bonguris, la Poción máxima es lo mejor que puedo ofrecerte.",
                    "我无法再为你用圆柑果实酿造更多了，全满伤药是我能提供的最好成品。"
                    ]
                }
            ],
        ]
    },
    signboardGymGoldenrodCity: {
        name: ['Goldenrod Gym', 'Gimnasio Pokémon de Ciudad Trigal', '满金道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Blanca's Gym, the lovely and beautiful.",
                        "Gimnasio de Blanca, la linda y bella.",
                    "小茜的道馆，可爱又美丽。"
                    ]
                },
            ]
        ]
    },
    vesselAGoldenrodCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x5 Medicine！",
                        "¡Hay x5 Medicina dentro la vasija!",
                    "容器里有x5 伤药！"
                    ],
                    reward: {
                        item: item.consumable.medicine,
                        amount: 5
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBGoldenrodCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBGoldenrodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x20 Tokens！",
                        "¡Hay x20 Fichas dentro la vasija!",
                    "容器里有x20 代币！"
                    ],
                    reward: {
                        item: item.key.token,
                        amount: 20
                    },
                    state: 1,
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }

                        if (!main.player.achievement[34].status) {
                            main.player.achievement[34].progress[0] += 20;
                            if (main.player.achievement[34].progress[0] >= main.player.achievement[34].progress[1]) {
                                main.player.achievement[34].status = true;
                                main.player.unlockAchievement(34);
                            }
                        };
                        if (!main.player.achievement[36].status) {
                            main.player.achievement[36].progress[0] += 20;
                            if (main.player.achievement[36].progress[0] >= main.player.achievement[36].progress[1]) {
                                main.player.achievement[36].status = true;
                                main.player.unlockAchievement(36);
                            }
                        };
                        if (!main.player.achievement[38].status) {
                            main.player.achievement[38].progress[0] += 20;
                            if (main.player.achievement[38].progress[0] >= main.player.achievement[38].progress[1]) {
                                main.player.achievement[38].status = true;
                                main.player.unlockAchievement(38);
                            }
                        };
                    }
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // CIUDAD IRIS
    vesselAEcruteakCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAEcruteakCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Rare Candy！",
                        "¡Hay x2 Carameloraro dentro la vasija!",
                    "容器里有x2 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBEcruteakCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBEcruteakCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Protein！",
                        "¡Hay x1 Proteína dentro la vasija!",
                    "容器里有x1 攻击增强剂！"
                    ],
                    reward: {
                        item: item.consumable.protein,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    jugglerEcruteakCity: {
        name: ['Juggler', 'Malabarista', '杂耍艺人'],
        state: savedStates.jugglerEcruteakCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, buddy!",
                        "¡Eh, amigo!",
                    "嘿，伙计！"
                    ]
                },
                {
                    text: [
                        "I'm a great juggling master, but something really strange has happened.",
                        "Soy un gran maestro de los malabares, pero algo muy raro ha pasado.",
                    "我是个了不起的杂耍大师，但发生了一件非常奇怪的事。"
                    ]
                },
                {
                    text: [
                        "I was doing my tricks when suddenly, one of my balls turned into something weird.",
                        "Estaba haciendo mis trucos, cuando de repente, una de mis pelotas se transformó en algo extraño.",
                    "我正在表演把戏，突然，我的一个球变成了奇怪的东西。"
                    ]
                },
                {
                    text: [
                        "It's... like an orb.",
                        "Es... como un orbe..",
                        "它……像一个球。"
                    ]
                },
                {
                    text: [
                        "And the worst part is... it feels like it's watching me.",
                        "Y lo peor es que... parece que me está mirando.",
                        "最糟的是……它好像在看着我。"
                    ]
                },
                {
                    text: [
                        "It gives me the chills!",
                        "¡Me da escalofríos!",
                        "让我毛骨悚然！"
                    ]
                },
                {
                    text: [
                        "I don't want it near me anymore... if you want it, you can keep it.",
                        "No quiero tenerlo más cerca... si lo quieres, puedes quedártelo.",
                    "我不想再让它靠近我了……如果你想要，就拿走吧。"
                    ]
                },
                {
                    text: [
                        "You can have it, but don't ask me why it looks so weird.",
                        "Te lo regalo, pero no me preguntes por qué se ve tan raro.",
                    "你可以拿走，但别问我它为什么看起来这么奇怪。"
                    ],
                    reward: {
                        item: item.key.rareOrb,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "I keep thinking about that orb!",
                        "¡Sigo pensando en ese orbe!",
                        "我一直在想那个球！"
                    ]
                },
                {
                    text: [
                        "I'm sure it moves on its own sometimes.",
                        "Estoy seguro de que se mueve solo a veces.",
                        "我确定它有时候会自己动。"
                    ]
                },
                {
                    text: [
                        "No returns accepted!",
                        "¡No se aceptan devoluciones!",
                        "概不退换！"
                    ]
                }
            ]
        ]
    },
    janitorEcruteakCity: {
        name: ['Janitor', 'Conserje', '清洁工'],
        state: savedStates.janitorEcruteakCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, have you heard about Mirage Island?",
                        "Oye, ¿sabes de la Isla Espejismo?",
                    "嘿，你听说过幻影岛吗？"
                    ]
                },
                {
                    text: [
                        "They say you can sometimes see it from the Olivine City lighthouse.",
                        "Desde el faro de Ciudad Olivo dicen que a veces se ve.",
                        "他们说从浅葱市的灯塔有时可以看到它。"
                    ]
                },
                {
                    text: [
                        "A couple of strange flashes, weird waves... and boom, there it is.",
                        "Un par de destellos raros, unas olas extrañas... y pum, ahí está.",
                    "几道奇怪的光芒，异常的波浪……然后轰的一下，它就出现了。"
                    ],
                },
            ],
        ]
    },
    ocultistEcruteakCity: {
        name: ['Icultist', 'Ocultista', '邪教徒'],
        state: savedStates.ocultistEcruteakCity ?? 0,
        dialogues: [
            [ 
               {
                    text: [
                        "Sssh... do you hear it?",
                        "Sssh... silencio. ¿Lo oyes? ",
                        "嘘……你听到了吗？"
                    ]
                },
                {
                    text: [
                        "The whisper of letters that shouldn't exist...",
                        "El susurro de letras que no deberían existir...",
                        "不该存在的字母的低语……"
                    ]
                },
                {
                    text: [
                        "I study the living alphabet.",
                        "Soy un estudioso del abecedario viviente.",
                        "我研究活着的字母表。"
                    ]
                },
                {
                    text: [
                        "They call it... Unown.",
                        "Lo llaman... Unown.",
                        "他们叫它……未知图腾。"
                    ]
                },
                {
                    text: [
                        "A Pokémon that is a word without a voice.",
                        "Un Pokémon que es una palabra sin voz.",
                        "一种没有声音的词语宝可梦。"
                    ]
                },
                {
                    text: [
                        "They say each one holds a different power.",
                        "Dicen que cada uno encierra un poder distinto.",
                        "据说每一只都拥有不同的力量。"
                    ]
                },
                {
                    text: [
                        "But I can't confirm it without seeing one with my own eyes.",
                        "Pero no puedo comprobarlo sin verlo con mis propios ojos.",
                        "但不亲眼见到我无法确认。"
                    ]
                },
                {
                    text: [
                        "If you ever find one, bring it to me.",
                        "Si alguna vez hallas uno, tráemelo.",
                    "如果你找到了，带过来给我。"
                    ],
                },
                {
                    text: [
                        "Only then can I open the door to hidden knowledge.",
                        "Solo entonces podré abrir la puerta del conocimiento oculto.",
                    "只有那样，我才能打开通往隐藏知识的大门。"
                    ],
                    state: 1
                }
            ],
            [   
                {
                    condition: () => !main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "Hmm... you haven't brought the messenger of symbols yet.",
                        "Hmm... aún no traes al mensajero de los símbolos.",
                        "嗯……你还没带来符号的使者。"
                    ]
                },
                {
                    condition: () => !main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "Not just any creature will do, you must find an Unown.",
                        "No cualquier criatura servirá, debes encontrar un Unown.",
                    "不是什么生物都可以，你必须找到一只未知图腾。"
                    ]
                },
                {
                    condition: () => !main.team.isPokemonInTeam('UNOWN'),
                    text:  [
                        "Its shape is a letter, its essence, a mystery.",
                        "Su forma es una letra, su esencia, un enigma.",
                    "它的形状是一个字母，它的本质是一个谜。"
                    ]
                },
                {
                    condition: () => !main.team.isPokemonInTeam('UNOWN'),
                    text:  [
                        "Return when you can show me one, and I shall share my knowledge with you.",
                        "Vuelve cuando puedas mostrarme uno y compartiré mi conocimiento contigo.",
                    "当你带来一只给我看的时候，再回来，我会与你分享我的知识。"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "Yes! That void shaped like a letter... it's Unown!",
                        "¡Sí! ¡Es él! Ese vacío con forma de letra... ¡es Unown!",
                        "是的！那个像字母形状的虚空……是未知图腾！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "Thank you, traveler.",
                        "Gracias, viajero.",
                    "谢谢你，旅行者。"
                    ]
                }, 
                {
                    condition: () => main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "Today I've seen the shape of silence.",
                        "Hoy he visto la forma del silencio.",
                        "今天我看到了沉默的形状。"
                    ]
                }, 
                {
                    condition: () => main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "And for that, I shall give you something only the wise know.",
                        "Y por ello, te daré algo que solo los sabios conocen.",
                    "为此，我将给你只有智者才知道的东西。"
                    ]
                }, 
                {
                    condition: () => main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "Take this TM. It holds the move Hidden Power, a technique that changes depending on who uses it.",
                        "Toma esta MT, contiene el movimiento Poder oculto, una técnica cambiante según quien la usa.",
                    "拿着这个招式机，里面是觉醒力量，一种会随使用者而变化的招式。"
                    ],
                    reward: {
                        item: item.tm.tm151,
                        amount: 1
                    },
                    cb: () => { main.eventStatus.hiddenPower = new Date().toDateString(); }
                },
                {
                    condition: () => main.team.isPokemonInTeam('UNOWN'),
                    text: [
                        "If you return tomorrow, the symbols may allow me to give you another.",
                        "Si regresas mañana, los símbolos me permitirán darte otra.",
                    "如果你明天再来，这些符号也许会让我再给你一个。"
                    ],
                    state: 2
                },
            ],
            [   
                {
                    condition: () => (new Date().toDateString() == main.eventStatus.hiddenPower),
                    text: [
                        "Come back tomorrow, and I'll give you another Hidden Power TM.",
                        "Vuelve mañana, te daré otra MT de Poder oculto.",
                    "明天再来，我会再给你一个觉醒力量招式学习器。"
                    ]
                },
                {
                    condition: () => (new Date().toDateString() != main.eventStatus.hiddenPower),
                    text:  [
                        "New day, new gift. Take a Hidden Power TM.",
                        "Nuevo dia, nuevo obsequio. Toma una MT de Poder oculto.",
                    "新的一天，新的礼物。拿着这个觉醒力量招式学习器。"
                    ],
                    reward: {
                        item: item.tm.tm151,
                        amount: 1
                    },
                    cb: () => { main.eventStatus.hiddenPower = new Date().toDateString(); }
                },
            ],
        ]
    },
    signboardAEcruteakCity: {
        name: ['Ecruteak City', 'Ciudad Iris', '圆朱市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "A city where past and present coexist.",
                        "Una ciudad donde conviven el pasado y el presente.",
                        "过去与现在共存的城市。"
                    ]
                },
            ]
        ]
    },
    signboardBEcruteakCity: {
        name: ["Occultist's Cabin", 'Cabaña del Ocultista', '神秘学家小屋'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Unown wanted.",
                        "Se busca Unown.",
                        "寻找未知图腾。"
                    ]
                },
            ]
        ]
    },
    signboardGymEcruteakCity: {
        name: ['Ecruteak City Gym', 'Gimnasio Pokémon de Ciudad Iris', '圆朱道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Gym of Morty, the mystical seer of the future.",
                        "Gimnasio de Morti, el místico adivino del futuro.",
                    "松叶的道馆，神秘的通灵预言家。"
                    ]
                },
            ]
        ]
    },

    // CIUDAD OLIVO
    signboardOlivineCity: {
        name: ['Olivine City', 'Ciudad Olivo', '浅葱市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The port to distant lands.",
                        "El puerto a tierras lejanas.",
                        "通往远方的港口。"
                    ]
                },
            ]
        ]
    },
    signboardGymOlivineCity: {
        name: ['Olivine City Gym', 'Gimnasio Pokémon de Ciudad Olivo', '浅葱道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Gym of Jasmine, the steel-hearted girl.",
                        "Gimnasio de Yasmina, la chica de acero.",
                    "阿蜜的道馆，钢铁之心的少女。"
                    ]
                },
            ]
        ]
    },
    lighthouseKeeper: {
        name: ['Lighthouse Keeper', 'Farero', '灯塔看守人'],
        state: savedStates.lighthouseKeeper ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Nothing can be seen from afar.",
                        "No se ve nada desde la lejanía.",
                        "从远处什么也看不见。"
                    ]
                },
                {
                    text: [
                        "Seems like today is a quiet day.",
                        "Parece que hoy es un día tranquilo.",
                        "今天似乎是个平静的日子。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "What do you bring me?",
                        "¿Qué me traes?",
                        "你给我带来了什么？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "Have you brought me a Wide Lens?",
                        "¿Una Superlupa?",
                        "你给我带来广角镜了吗？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "Let's see, leave it to me...",
                        "A ver, déjamela...",
                    "让我看看，交给我吧……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "I SEE IT!",
                        "¡LA VEO!",
                        "我看到了！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "MIRAGE ISLAND IS RIGHT THERE!",
                        "¡LA ISLA ESPEJISMO ESTA AHÍ MISMO!",
                        "幻影岛就在那里！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "I thought it was just a legend...",
                        "Creí que era solo una leyenda...",
                        "我以为那只是个传说……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "I can see the route perfectly.",
                        "Veo perfectamente la ruta para llegar.",
                        "我能清楚地看到路线。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('wideLens'),
                    text: [
                        "Do you want to go?",
                        "¿Quieres que vayamos?",
                    "你想去吗？"
                    ],
                    choices: [
                        {
                            text: [
                                "Wait...",
                                "Espera...",
                            "等等……"
                            ],
                            state: 1,
                            next: "end",
                        },
                        {
                            text: [
                                "Yes, let's go!",
                                "¡Sí, vamos!",
                            "好，我们走吧！"
                            ],
                            next: 2, 
                            state: 2  
                        },
                    ]
                }, 
            ],
            [
                {
                    text: [
                        "Do you want to go to Mirage Island?",
                        "¿Quieres ir a la Isla Espejismo?",
                    "你想去幻影岛吗？"
                    ],
                    choices: [
                        {
                            text: [
                                "Wait...",
                                "Espera...",
                            "等等……"
                            ],
                            state: 1,
                            next: "end",
                        },
                        {
                            text: [
                                "Yes, let's go!",
                                "¡Sí, vamos!",
                            "好，我们走吧！"
                            ],
                            next: 2, 
                            state: 2  
                        },
                    ]
                },
            ],
            [
                {
                    text:  [
                        "Destination: Mirage Island!",
                        "¡Rumbo a Isla Espejismo!",
                    "目的地：幻影岛！"
                    ],
                    state: 1,
                },   
                {
                    cb: () => {
                        if (!main.player.achievement[13].status) {
                            main.player.achievement[77].hidden = false;
                            main.player.achievement[13].status = true;
                            main.player.unlockAchievement(13);
                        }

                        main.player.region = 2;
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.routeData['mirageIsland-1']);
                    } 
                },              
            ],

        ]
    },
    boatOlivineCity: {
        name: ['Captain', 'Capitán', '船长'],
        state: savedStates.boatOlivineCity ?? 0,
        dialogues: [
            [
                {
                    condition: () => !main.inventory.searchItem('travelVoucher'),
                    text:  [
                        "Ahoy! This is the S.S. Aqua, pride of the sea and nightmare of the seasick.",
                        "¡Ahoy! Este es el S.S. Aqua, orgullo del mar y terror de los mareados.",
                    "喂！这里是水流号，大海的骄傲，晕船者的噩梦。"
                    ]
                },
                {
                    condition: () => !main.inventory.searchItem('travelVoucher'),
                    text: [
                        "Don't have a Boat Pass? Without it, not even the waves will take you.",
                        "¿No tienes un Bono Barco? Sin él, ni las olas te llevarán.",
                    "没有船票？没有它，连海浪都不会带你走。"
                    ]
                },
                {
                    condition: () => !main.inventory.searchItem('travelVoucher'),
                    text:  [
                        "Come back once you have it.",
                        "Vuelve cuando lo consigas.",
                        "拿到后再回来。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('travelVoucher'),
                    text: [
                        "Ahoy, traveler!",
                        "¡Ahoy, viajero!",
                    "喂，旅行者！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('travelVoucher'),
                    text: [
                        "I see you have the Boat Pass.",
                        "Veo que tienes el Bono Barco.",
                        "我看到你有船票了。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('travelVoucher'),
                    text: [
                        "Ready to set sail for Vermilion City?",
                        "¿Listo para zarpar rumbo a Ciudad Carmín?",
                    "准备好驶向枯叶市了吗？"
                    ],
                    choices: [
                        {
                            text: [
                                "Not yet.",
                                "Aún no.",
                            "还没。"
                            ],
                            next: "end"  
                        },
                        {
                            text: [
                                "Yes, let's go!",
                                "¡Sí, vamos!",
                            "好，我们走吧！"
                            ],
                            next: 1, 
                            state: 1  
                        },
                    ]
                }
            ],
            [
                {
                    text:  [
                        "Destination: Vermilion City!",
                        "¡Rumbo a Ciudad Carmín!",
                    "目的地：枯叶市！"
                    ],
                    state: 0,
                },   
                {
                    cb: () => {
                        if (!main.player.achievement[11].status) {
                            main.player.achievement[11].status = true;
                            main.player.unlockAchievement(11);
                        }
                        
                        main.player.region = 1;
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.cityData['vermilionCity-1']);
                    } 
                },              
            ]
        ]
    },
    lifeGuardOlivineCity: {
        name: ['Life guard', 'Socorrista', '救生员'],
        state: savedStates.lifeGuardOlivineCity ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Hey, you!",
                        "¡Ey, tú!",
                    "嘿，你！"
                    ]
                },
                {
                    text: [
                        "Enjoying the beach?",
                        "¿Disfrutando de la playa?",
                        "在享受海滩吗？"
                    ]
                },
                {
                    text: [
                        "I'm the lifeguard watching over this area.",
                        "Soy el socorrista que supervisa esta zona.",
                        "我是负责这片区域的救生员。"
                    ]
                },
                {
                    text: [
                        "I make sure all Pokémon are safe, both on land and in the water.",
                        "Me aseguro de que todos los Pokémon estén seguros, tanto en tierra como en el agua.",
                    "我确保所有宝可梦都安全，无论是在陆地上还是水中。"
                    ]
                },
                {
                    text: [
                        "Not long ago, I rescued a strange Pokémon that washed up on shore...",
                        "Hace poco rescaté a un curioso Pokémon que las olas arrastraron a la orilla...",
                    "不久前，我救了一只被冲上岸的奇怪宝可梦……"
                    ]
                },
                {
                    text: [
                        "A Shuckle!",
                        "¡Un Shuckle!",
                        "一只壶壶！"
                    ]
                },
                {
                    text: [
                        "It's calm and sturdy, but it doesn't seem interested in going back to the sea.",
                        "Es tranquilo y resistente, pero no parece tener intención de regresar al mar.",
                    "它很平静也很结实，但似乎对回到海里没什么兴趣。"
                    ]
                },
                {
                    text: [
                        "I've taken care of it for a while, but I think it'd be better off with a good Trainer like you.",
                        "He cuidado de él un tiempo, pero creo que estaría mejor en manos de un buen entrenador como tú.",
                    "我照顾了它一段时间，但我觉得它跟着像你这样的好训练家会更好。"
                    ]
                },
                {
                   text: [
                        "Take it, I trust you'll care for it and give it the adventure it deserves.",
                        "Tómalo, confío en que sabrás cuidarlo y darle la aventura que se merece.",
                    "带走吧，我相信你会好好照顾它，给它应得的冒险。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['shuckle'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['shuckle'], 5))
                        main.pokedex.seePokemon(pokemon['shuckle'].n);
                        main.pokedex.catchPokemon(pokemon['shuckle'].n);
                    },
                },
                {
                    text: [
                        "Ah, but be patient with it.",
                        "Ah, eso sí... ten paciencia con él.",
                    "啊，不过对它要有耐心。"
                    ]
                },
                {
                    text: [
                        "Shuckle may be slow, but its defense is unmatched.",
                        "Shuckle es algo lento, pero su defensa es inigualable.",
                    "壶壶可能很慢，但它的防御力无与伦比。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "How's that Shuckle doing?",
                        "¿Cómo va ese Shuckle?",
                        "那只壶壶怎么样了？"
                    ]
                },
                {
                    text: [
                        "I hope it's settling in well with your team.",
                        "Espero que se esté adaptando bien a tu equipo.",
                        "希望它在你的队伍里适应得好。"
                    ]
                },
                {
                    text: [
                        "Don't underestimate its stats.",
                        "No subestimes sus estadísticas.",
                        "别低估它的能力值。"
                    ]
                },
                {
                    text: [
                        "Take good care of it, it'll surprise you when you least expect it.",
                        "Cuídalo bien, seguro que te sorprenderá cuando menos lo esperes.",
                    "好好照顾它，它会在你最意想不到的时候给你惊喜。"
                    ]
                }
            ]
        ]
    },
    richBoyOlivineCity: {
        name: ['Rich boy', 'Niño bien', '富家少爷'],
        state: savedStates.richBoyOlivineCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh, you... yes, you.",
                        "Oh, tú... sí, tú.",
                    "哦，你……对，就是你。"
                    ]
                },
                {
                    text: [
                        "You seem like someone who knows how to get around the world.",
                        "Pareces alguien que sabe moverse por el mundo.",
                        "你看起来像是知道如何走遍世界的人。"
                    ]
                },
                {
                    text: [
                        "I am the heir of one of the richest families in Kanto and Johto.",
                        "Soy heredero de una de las familias más ricas de Kanto y Johto.",
                        "我是关都和城都最富有家族之一的继承人。"
                    ]
                },
                {
                    text: [
                        "Probably much richer than yours.",
                        "Seguramente mucho más que la tuya.",
                        "可能比你家有钱多了。"
                    ]
                },
                {
                    text: [
                        "I can't waste time on errands... but you seem perfect for that.",
                        "No puedo perder el tiempo con recados... pero tú pareces perfecto para eso.",
                        "我不能浪费时间跑腿……但你看起来正合适。"
                    ]
                },
                {
                    text: [
                        "You have to deliver this letter to my grandmother Amalia who lives in Lavender Town.",
                        "Tienes que llevar esta carta a mi abuela Amalia que vive en Pueblo Lavanda.",
                        "你得把这封信送给住在紫苑镇的祖母阿玛利亚。"
                    ]
                },
                {
                    text: [
                        "Take the letter.",
                        "Ten la carta.",
                    "拿着这封信。"
                    ],
                    reward: {
                        item: item.key.letterForAmalia,
                        amount: 1
                    },
                },
                {
                   text: [
                        "If you deliver it well, I'm sure my grandmother will be happy to reward you for it. And maybe I will too.",
                        "Si la entregas bien, seguro que mi abuela estará encantada de recompensarte por ello. Y quizá yo también.",
                    "如果你顺利送达，我相信我奶奶会很高兴地奖励你。也许我也会。"
                    ]
                },
                {
                    text: [
                        "And maybe I will too.",
                        "Y quizá yo también.",
                    "也许我也会。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Remember, my grandmother Amalia is in Lavender Town.",
                        "Recuerda, mi abuela Amalia se encunetra en Pueblo Lavanda.",
                    "记住，我奶奶阿玛利亚在紫苑镇。"
                    ]
                },
                {
                    text: [
                        "Don't take too long, I don't like to wait.",
                        "No tardes mucho, no me gusta esperar.",
                    "别花太长时间，我不喜欢等。"
                    ]
                }
            ],
            [
                {
                    text: [
                        "Oh, you delivered the letter.",
                        "Oh, entregaste la carta.",
                    "哦，你把信送到了。"
                    ]
                },
                {
                    text: [
                        "Great.",
                        "Genial.",
                        "很好。"
                    ]
                },
                {
                    text: [
                        "Here, take 300 chips from my father's casino.",
                        "Ten 300 fichas del casino de mi padre.",
                    "来，拿300枚我爸赌场的筹码。"
                    ],
                    reward: {
                        item: item.key.token,
                        amount: 300
                    },
                    cb: () => {
                        if (!main.player.achievement[34].status) {
                            main.player.achievement[34].progress[0] += 300;
                            if (main.player.achievement[34].progress[0] >= main.player.achievement[34].progress[1]) {
                                main.player.achievement[34].status = true;
                                main.player.unlockAchievement(34);
                            }
                        };
                        if (!main.player.achievement[36].status) {
                            main.player.achievement[36].progress[0] += 300;
                            if (main.player.achievement[36].progress[0] >= main.player.achievement[36].progress[1]) {
                                main.player.achievement[36].status = true;
                                main.player.unlockAchievement(36);
                            }
                        };
                        if (!main.player.achievement[38].status) {
                            main.player.achievement[38].progress[0] += 300;
                            if (main.player.achievement[38].progress[0] >= main.player.achievement[38].progress[1]) {
                                main.player.achievement[38].status = true;
                                main.player.unlockAchievement(38);
                            }
                        };
                    }
                },
                {
                    text: [
                        "You can go now.",
                        "Ya puedes irte.",
                    "你可以走了。"
                    ],
                    state: 3
                },
            ],
            [
                {
                    text: [
                        "What do you want?",
                        "¿Qué quieres?",
                        "你想干嘛？"
                    ]
                },
            ]
        ]
    },
    sailorOlivineCity: {
        name: ['Sailor', 'Marinero', '水手'],
        state: savedStates.sailorOlivineCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ahoy! Do you like Magikarp?",
                        "¡Ahoy ¿Te gustan los Magikarp?!",
                        "喂！你喜欢鲤鱼王吗？"
                    ]
                },
                {
                    text: [
                        "I only train Magikarp.",
                        "Yo solo entreno Magikarp.",
                        "我只训练鲤鱼王。"
                    ]
                },
                {
                    text: [
                        "It's the strongest Pokémon that exists!",
                        "¡Es el Pokémon más fuerte que existe!",
                        "它是存在的最强宝可梦！"
                    ]
                },
                {
                    text: [
                        "They say it's weak...",
                        "Dicen que es débil...",
                        "他们说他弱……"
                    ]
                },
                {
                    text: [
                        "Nonsense from land dwellers!",
                        "¡Tonterías de tierra firme!",
                        "陆上居民的胡言乱语！"
                    ]
                },
                {
                    text: [
                        "With patience, a Magikarp can surpass any other Pokémon.",
                        "Con paciencia, un Magikarp puede superar a cualquier otro Pokémon.",
                    "只要有耐心，鲤鱼王可以超越任何其他宝可梦。"
                    ]
                },
                {
                    text: [
                        "Anyone!",
                        "¡Cualquiera!",
                        "谁都行！"
                    ]
                },
                {
                    text: [
                        "If you don't believe me, catch one and bring it to me.",
                        "Si no me crees, captura uno y tráemelo.",
                    "如果你不信，抓一只来给我看看。"
                    ]
                },
                {
                    text: [
                        "I'll teach you to admire its greatness.",
                        "Te enseñaré a admirar su grandeza.",
                    "我会教你欣赏它的伟大。"
                    ],
                    state: 1
                },
            ],
            [   
                {
                    condition: () => !main.team.isPokemonInTeam('MAGIKARP'),
                    text: [
                        "No excuses, I want to see a Magikarp!",
                        "Nada de excusas, ¡quiero ver un Magikarp!",
                    "别找借口，我要看到一只鲤鱼王！"
                    ]
                },
                {
                    condition: () => !main.team.isPokemonInTeam('MAGIKARP'),
                    text: [
                        "Go fish one and come back when you have it.",
                        "Ve a pescar uno y vuelve cuando lo tengas.",
                        "去钓一只，钓到了再回来。"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('MAGIKARP'),
                    text: [
                        "What a beautiful Magikarp!",
                        "¡Que hermosura de Magikarp!",
                        "多漂亮的鲤鱼王！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('MAGIKARP'),
                    text: [
                        "Thank you for taking the trouble to bring it.",
                        "Gracias por tomarte la molestia de traerlo.",
                        "谢谢你费心带来。"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('MAGIKARP'),
                    text: [
                        "Take this Zinc as a token of appreciation.",
                        "Ten este Zinc como muestra de aprecio.",
                    "拿着这个特防增强剂作为谢礼。"
                    ],
                    reward: {
                        item: item.consumable.zinc,
                        amount: 1
                    },
                    state: 2
                }
            ],
            [
                {
                    text: [
                        "Train your Magikarp hard, someday it will become a fearsome Gyarados.",
                        "Entrena dura a tu Magikarp, algún dia se convertirá en un temible Gyarados.",
                    "努力训练你的鲤鱼王吧，总有一天它会变成可怕的暴鲤龙。"
                    ]
                },
            ],
        ]
    },
    explorerOlivineCity: {
        name: ['Explorer', 'Explorador', '探险家'],
        state: savedStates.explorerOlivineCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, traveler... heading north?",
                        "Eh, viajero... ¿vas rumbo al norte?",
                    "嘿，旅行者……往北走吗？"
                    ]
                },
                {
                    text: [
                        "If you pass through Route 43, let me tell you something curious.",
                        "Si pasas por la Ruta 43, déjame contarte algo curioso.",
                    "如果你经过43号道路，让我告诉你一件有趣的事。"
                    ]
                },
                {
                    text: [
                        "Near Mahogany Town, There is an old abandoned house that might go unnoticed.",
                        "Muy cerca del Pueblo Caoba hay una vieja casa abandonada que puede pasar inadvertida.",
                    "在卡吉镇附近，有一座可能被人忽略的废弃老房子。"
                    ]
                },
                {
                    text: [
                        "It doesn't seem like much in the daylight...",
                        "No parece gran cosa a la luz del día...",
                        "在白天看起来不怎么样……"
                    ]
                },
                {
                    text: [
                        "But when the clock strikes midnight, it's another story.",
                        "Pero cuando el reloj marca la medianoche, es otra historia.",
                    "但当时钟敲响午夜十二点时，又是另一回事了。"
                    ]
                },
                {
                    text: [
                        "For exactly one hour, dry knocks are heard, footsteps creaking on the wood, and eerie whispers.",
                        "Durante exactamente una hora, empiezan a oírse golpes secos, pasos que crujen sobre la madera, y susurros tenebrosos.",
                    "整整一个小时里，能听到干涩的敲门声、木板上嘎吱作响的脚步声和诡异的低语。"
                    ]
                },
                {
                    text: [
                        "Some have seen strange lights dancing on the windows, as if someone or something moves inside.",
                        "Algunos han visto luces extrañas danzar por las ventanas, como si alguien o algo se moviera dentro.",
                    "有人看到奇怪的光在窗户上跳动，仿佛有什么人或东西在里面移动。"
                    ]
                },
                {
                    text: [
                        "The most superstitious say it might be a cursed Pokémon, bound to that place for generations.",
                        "Los más supersticiosos dicen que podría tratarse de un Pokémon maldito, atado a ese lugar desde hace generaciones.",
                    "最迷信的人说，那可能是一只被诅咒的宝可梦，世世代代被束缚在那个地方。"
                    ]
                },
                {
                    text: [
                        "Others believe it's just an illusion... an echo of an event that happened there long ago.",
                        "Otros creen que es solo una ilusión... un eco de algún suceso que ocurrió allí hace mucho tiempo.",
                        "其他人认为这只是一个幻象……很久以前在那里发生的事件的回声。"
                    ]
                },
                {
                    text: [
                        "I have traveled many routes and seen strange things, but I have never been able to explain what happens in that house.",
                        "Yo he recorrido muchas rutas y visto cosas raras, pero nunca he logrado explicar lo que pasa en esa casa.",
                    "我走过很多路，见过很多奇怪的事，但我一直无法解释那栋房子里发生的事情。"
                    ]
                },
                {
                    text: [
                        "If you decide to approach, remember this: the events only last one hour, between midnight and one.",
                        "Si decides acercarte, recuerda esto: los sucesos solo duran una hora, entre la medianoche y la una.",
                    "如果你决定靠近，记住：那些现象只持续一小时，从午夜到凌晨一点。"
                    ]
                },
                {
                    text: [
                        "Whatever happens... if you dare, you might discover a secret that others only dare to whisper.",
                        "Sea como sea... si te atreves, quizá descubras un secreto que otros solo se atreven a susurrar.",
                    "无论发生什么……如果你敢去，你也许会发现一个别人只敢低声谈论的秘密。"
                    ]
                },
                {           
                    text: [
                        "Take this key with you.",
                        "Lleva contigo esta llave.",
                    "拿着这把钥匙。"
                    ],
                    reward: {
                        item: item.key.key1,
                        amount: 1
                    },
                },
                {
                    text: [
                        "I bought it from a man on Route 29.",
                        "Se la compré a un hombre en la Ruta 29.",
                        "我从29号道路一个男人那里买的。"
                    ]
                },
                {
                    text: [
                        "He assured me it belonged to that house, but I haven't dared to enter.",
                        "Me aseguró que era de esa casa, pero no me he atrevido a entrar.",
                    "他向我保证那是那栋房子的东西，但我一直没敢进去。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Remember, the house is located on Route 43.",
                        "Recuerda, la casa se encuentra en la Ruta 43.",
                    "记住，那栋房子位于43号道路。"
                    ]
                },
                {
                    text: [
                        "You must go after midnight.",
                        "Debes ir a partir de medianoche.",
                        "你必须在午夜之后去。"
                    ]
                },
                {
                    text: [
                        "The noises last for about an hour.",
                        "Los ruidos duran aproximadamente una hora.",
                        "噪音持续大约一个小时。"
                    ]
                }
            ]
        ]
    },
    collectorOlivineCity: {
        name: ['Collector', 'Coleccionista', '收藏家'],
        state: savedStates.collectorOlivineCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh! I see you're a curious Trainer...",
                        "¡Oh! Veo que eres un entrenador curioso...",
                        "哦！我看你是个好奇的训练家……"
                    ]
                },
                {
                    text: [
                        "I like that.",
                        "Me caes bien.",
                        "我喜欢。"
                    ]
                },
                {
                    text: [
                        "I'm a collector of rare items, and today I'm feeling generous.",
                        "Soy coleccionista de objetos raros y hoy me siento generoso.",
                        "我是稀有物品收藏家，今天我觉得很大方。"
                    ]
                },
                {
                    text: [
                        "Take this Union Ticket.",
                        "Toma este Tíquet Unión.",
                    "拿着这个联合券。"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Redeem it at the Union Room of your favorite Pokémon Center.",
                        "Canjéalo en la Sala Unión de tu Centro Pokémon favorito.",
                    "在你最喜欢的宝可梦中心的联合房间兑换它。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "I hope you have good luck with that Union Ticket.",
                        "Espero que tengas suerte con ese Tíquet Unión.",
                        "希望那个联合券给你带来好运。"
                    ]
                },
                {
                    text: [
                        "Not to brag, but I once got a Bug-type transmuted Rattata.",
                        "No es por presumir, pero a mí una vez me tocó un Rattata alterado de tipo Bicho.",
                    "不是吹牛，但我曾经得到过一只变成虫系的小拉达。"
                    ]
                }
            ]
        ]
    },
    gardenerOlivineCity: {
        name: ['Gardener', 'Jardinero', '园丁'],
        state: savedStates.gardenerOlivineCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Did you know that a Pokémon's nature affects how its stats grow?",
                        "¿Sabías que la naturaleza de un Pokémon influye en cómo crecen sus estadísticas?",
                        "你知道宝可梦的性格会影响能力成长吗？"
                    ]
                },
                {
                    text: [
                        "Some natures boost certain attributes while lowering others.",
                        "Algunas naturalezas fortalecen ciertos atributos y debilitan otros.",
                        "有些性格会提升某些属性同时降低其他属性。"
                    ]
                },
                {
                    text: [
                        "But don't worry... there's a way to change them!",
                        "Pero no te preocupes... ¡existe una forma de cambiarlas!",
                        "不过别担心……有办法改变它们！"
                    ]
                },
                {
                    text: [
                        "With these special herbs called mints, you can alter a Pokémon's nature with no trouble.",
                        "Con estas hierbas especiales llamadas mentas, puedes alterar la naturaleza de un Pokémon sin complicaciones.",
                    "有了这些叫做薄荷的特殊草药，你可以轻松改变宝可梦的性格。"
                    ]
                },
                {
                    text: [
                        "Take this Brave Mint.",
                        "Aquí tienes una Menta audaz.",
                    "拿着这个勇敢薄荷。"
                    ],
                    reward: {
                        item: item.consumable.braveMint,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Try it and see how it boosts your Pokémon's Attack.",
                        "Pruébala y verás cómo potencia el Ataque de tu Pokémon.",
                        "试试看它如何提升你宝可梦的攻击。"
                    ]
                },
                {
                    text: [
                        "Just use it wisely, changing a nature can be a game-changer in battles.",
                        "Solo úsala con sabiduría, ya que cambiar la naturaleza puede ser decisivo en los combates.",
                    "明智地使用它，改变性格可以在对战中改变局面。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Have you tried the Brave Mint yet?",
                        "¿Has probado ya la Menta audaz?",
                        "你试过勇敢薄荷了吗？"
                    ]
                },
                {
                    text: [
                        "It can give your team a real boost.",
                        "¿Puede dar un empujón importante a tu equipo.",
                        "它可以给你的队伍带来真正的提升。"
                    ]
                },
                {
                    text: [
                        "If you want more, you can buy them yourself at the Farm.",
                        "Si quieres más, puedes ir a comprarlas tú mismo en la Granja.",
                    "如果你想要更多，可以自己在农场购买。"
                    ]
                }
            ]
        ]
    },
    karatekaOlivineCity: {
        name: ['Karateka', 'Karateka', '空手道家'],
        state: savedStates.karatekaOlivineCity ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "I heard you're getting ready to face Jasmine, the Gym Leader who specializes in Steel-type Pokémon.",
                        "He oído que te preparas para enfrentarte a Yasmina, la Líder de Gimnasio experta en Pokémon de tipo Acero.",
                    "我听说你正准备挑战阿蜜，那位专精钢系宝可梦的道馆馆主。"
                    ]
                },
                {
                    text: [
                        "Trust me, her defenses are like a wall... but steel has a clear weakness: Fighting-type moves.",
                        "Créeme, sus defensas son como una muralla... pero el acero tiene una debilidad clara: los ataques de tipo Lucha.",
                    "相信我，她的防御像一堵墙……但钢系有一个明显的弱点：格斗系招式。"
                    ]
                },
                {
                    text: [
                        "Take this, it's TM54, Rolling Kick. It's a Fighting-type move that might give you an edge against her team.",
                        "Toma esto, es la MT54 Patada giro. Es un movimiento de tipo Lucha que puede darte ventaja contra sus Pokémon.",
                    "拿着这个，这是TM54 回旋踢。这是一招格斗系招式，也许能让你对她的队伍占上风。"
                    ]
                },
                {
                    text: [
                        "Use it wisely, and maybe you'll break through that iron defense. Good luck in your battle!",
                        "Úsala sabiamente y quizás logres atravesar esa defensa férrea. ¡Te deseo suerte en tu combate!",
                    "明智地使用它，也许你就能突破那道铁壁防御。祝你对战好运！"
                    ],
                    reward: {
                        item: item.tm.tm54,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Remember: the key against Jasmine is to strike fast and hard. I hope TM Rolling Kick comes in handy!",
                        "Recuerda: la clave contra Yasmina es golpear rápido y fuerte. ¡Espero que la MT Patada giro te sea útil!",
                        "记住：对付阿蜜的关键是快速猛攻。希望招式机回旋踢能派上用场！"
                    ]
                }
            ]
        ]
    },
    // CIUDAD ORQUIDEA
    signboardCianwoodCity: {
        name: ['Cianwood City', 'Ciudad Orquídea', '湛蓝市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "A harbor surrounded by choppy waters.",
                        "Un puerto rodeado de agitadas aguas.",
                        "被波涛汹涌的海水环绕的港口。"
                    ]
                },
            ]
        ]
    },
    vesselCianwoodCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCianwoodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Rare Candy！",
                        "¡Hay x3 Carameloraro dentro la vasija!",
                    "容器里有x3 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    seerCianwoodCity: {
        name: ['Seer', 'Vidente', '预言家'],
        state: savedStates.seerCianwoodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hmm... I see a radiant aura around you...",
                        "Hmm... veo un aura brillante a tu alrededor...",
                        "嗯……我看到你周围有一圈光芒……"
                    ]
                },
                {
                    text: [
                        "An energy that transcends time and space.",
                        "Una energía que trasciende el tiempo y el espacio.",
                        "一种超越时空的能量。"
                    ]
                },
                {
                    text: [
                        "You are a soul destined to walk paths invisible to others...",
                        "Eres un alma destinada a recorrer senderos invisibles para otros...",
                        "你是一个注定走他人看不见之路的灵魂……"
                    ]
                },
                {
                    text: [
                        "Allow me to give you something that will strengthen the hidden bond between you and your Pokémon.",
                        "Permíteme entregarte algo que potenciará ese vínculo oculto entre tú y tus Pokémon.",
                        "请允许我给你一些能加强你与宝可梦之间隐藏纽带的东西。"
                    ]
                },
                {
                    text: [
                        "Take this, it's TM90 Psychic.",
                        "Toma esto, es la MT90 Psíquico.",
                    "拿着这个，这是TM90 精神强念。"
                    ],
                    reward: {
                        item: item.tm.tm90,
                        amount: 1
                    },
                },
                {
                    text: [
                        "It contains a technique that channels mystical energies to deal great damage.",
                        "Contiene una técnica que canaliza energías místicas para causar grandes daños.",
                        "它包含一种引导神秘能量造成巨大伤害的招式。"
                    ]
                },
                {
                    text: [
                        "Use it wisely, for not everyone can control such destructive power.",
                        "Manejala con sabiduría, pues no todos pueden controlar un poder tan destructivo.",
                    "明智地使用它，因为不是每个人都能掌控如此毁灭性的力量。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Ah... you've returned.",
                        "Ah... has regresado.",
                        "啊……你回来了。"
                    ]
                },
                 {
                    text: [
                        "The light surrounding you is even brighter than before.",
                        "La luz que te rodea es aún más intensa que antes.",
                        "环绕你的光比以前更亮了。"
                    ]
                },
                {
                    text: [
                        "I see the mystical power has begun to resonate with you and your allies.",
                        "Veo que el poder místico ha comenzado a resonar contigo y tus aliados.",
                        "我看到神秘力量已经开始与你及你的伙伴产生共鸣。"
                    ]
                },
            ]
        ]
    },
    oldWomanCianwoodCity: {
        name: ['Old woman', 'Anciana', '老妇人'],
        state: savedStates.oldWomanCianwoodCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh, young trainer...",
                        "Oh, joven entrenador...",
                    "哦，年轻的训练家……"
                    ]
                },
                {
                    text: [
                        "I can tell you're on a long journey.",
                        "Se nota que estás en un largo viaje.",
                    "我看得出你在进行漫长的旅程。"
                    ]
                },
                {
                    text: [
                        "Many years ago, I too was a great trainer.",
                        "Hace muchos años, yo también fui una gran entrenadora.",
                    "很多年前，我也曾是一位伟大的训练家。"
                    ]
                },
                {
                    text: [
                        "I'm retired now, so let me give you a little something.",
                        "Ahora ya estoy retirada, así que dejame regalarte una cosita.",
                    "我现在退休了，让我给你一点小东西吧。"
                    ]
                },
                {
                    text: [
                        "Take a charge for your reusable Potion.",
                        "Toma una carga para tu Poción reutilizable.",
                    "拿一份可重复使用伤药的充能吧。"
                    ],
                    reward: {
                        item: item.key.potion,
                        amount: 1
                    },
                },
                {
                    text: [
                        "You'll make better use of it, I won't be needing it anymore.",
                        "Tú le darás mejor uso, yo ya no lo voy a necesitar más.",
                    "你会用得更好，我已经不需要了。"
                    ]
                },
                {
                    text: [
                        "Use it well, and always remember to take care of your Pokémon, just as they take care of you.",
                        "Úsala bien y recuerda siempre cuidar de tus Pokémon, como ellos cuidan de ti.",
                    "好好使用它，永远记得照顾你的宝可梦，就像它们照顾你一样。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Ah, young trainer, how is your journey going?",
                        "Ah, joven entrenador, ¿cómo va tu viaje?",
                    "啊，年轻的训练家，你的旅程怎么样了？"
                    ]
                },
                {
                    text: [
                        "I hope that potion has gotten you out of more than one tight spot.",
                        "Espero que esa poción te haya sacado de más de un apuro.",
                    "我希望那瓶伤药帮你摆脱了不少困境。"
                    ]
                },
                {
                    text: [
                        "Don't forget that true healing also comes from the love you give your Pokémon.",
                        "No olvides que la verdadera medicina también está en el cariño que le das a tus Pokémon.",
                    "别忘了，真正的治愈也来自你对宝可梦的爱。"
                    ]
                },
                {
                    text: [
                        "Come back anytime, it's always a pleasure to see you around here.",
                        "Vuelve cuando quieras, siempre es un placer verte pasar por aquí.",
                    "随时回来，在这里见到你总是很高兴。"
                    ]
                }
            ]
        ]
    },
    hikerCianwoodCity: {
        name: ["Hiker", 'Montañero', '登山者'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "This is the Cliff Pass.",
                        "Aquí se encuentra el Paso Acantilado.",
                        "这里是悬崖通道。",
                    ]
                },
                {
                    text: [
                        "If you dare to cross it, you'll reach Route 47.",
                        "Si te atreves a cruzarlo, llegarás a la Ruta 47.",
                    "如果你敢穿过它，就能到达47号道路。"
                    ]
                },
                {
                    text: [
                        "You should know it's a one-way path, but at the end lies the Safari Zone.",
                        "Debes saber que es un camino sin retorno, pero al final se encuentra la Zona Safari.",
                    "你应该知道那是一条单行道，但尽头就是狩猎地带。"
                    ]
                },
                {
                    text: [
                        "There you can find incredibly rare Pokémon you won't see anywhere else.",
                        "Allí podrás encontrar Pokémon increíblemente raros que no verás en ningún otro lugar.",
                    "在那里你可以找到你在其他地方看不到的极为稀有的宝可梦。"
                    ]
                }
            ]
        ]
    },
    signboardGymCianwoodCity: {
        name: ['Cianwood City Gym', 'Gimnasio Pokémon de Ciudad Orquídea', '湛蓝道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Chuck's Gym, his fists do the talking.",
                        "Gimnasio de Aníbal, sus puños hablan por él.",
                    "阿四的道馆，拳头就是最好的语言。"
                    ]
                },
            ]
        ]
    },

    // PUEBLO CAOBA
    signboardMahoganyTown: {
        name: ['Mahogany Town', 'Pueblo Caoba', '卡吉镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to the home of the ninjas.",
                        "Bienvenido al hogar de los ninjas.",
                    "欢迎来到忍者之家。"
                    ]
                },
            ]
        ]
    },
    surferMahoganyTown: {
        name: ['Surfer', 'Surfista', '冲浪者'],
        state: savedStates.surferMahoganyTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, dude! You've got good vibes for riding the waves.",
                        "¡Ey, colega! Te ves con buena vibra para deslizarte por las olas.",
                    "嘿，哥们！你看起来很适合乘风破浪。"
                    ]
                },
                {
                    text: [
                        "Here, this is my old Water Bike.",
                        "Toma, esta es mi vieja Bici acuática.",
                    "来，这是我的旧水上自行车。"
                    ],
                    reward: {
                        item: item.key.waterBike,
                        amount: 1
                    },
                },
                {
                    text: [
                        "With it, you'll be able to cross deep water with no problem.",
                        "Con ella podrás cruzar el agua profunda sin problemas.",
                    "有了它，你就能毫无问题地穿越深水了。"
                    ]
                },
                {
                    text: [
                        "I don't use it as much anymore... now I prefer to relax on the shore and watch the tides.",
                        "Ya no la uso tanto como antes... ahora prefiero relajarme en la orilla viendo las mareas.",
                    "我已经不怎么用了……现在我更喜欢在岸边放松，看潮起潮落。"
                    ]
                },
                {
                    text: [
                        "Make the most of it, and let the ocean carry you to new adventures!",
                        "¡Aprovéchala bien y deja que el océano te lleve a nuevas aventuras!",
                    "好好利用它，让大海带你走向新的冒险！"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "How's the journey going, dude?",
                        "¿Cómo va la travesía, colega?",
                    "旅程怎么样，哥们？"
                    ]
                },
                {
                    text: [
                        "Have you mastered the waves with the bike yet?",
                        "¿Ya dominas las olas con la bici?",
                    "你已经用那辆自行车征服海浪了吗？"
                    ]
                },
                {
                    text: [
                        "I hope you're surfing like a Mantine in the open sea.",
                        "Espero que andes surfeando como un Mantine en mar abierto.",
                    "我希望你在公海上像巨翅飞鱼一样冲浪。"
                    ]
                },
                {
                    text: [
                        "Remember, it's not about fighting the current... go with the flow and enjoy the ride.",
                        "Recuerda, no se trata de luchar contra la corriente... déjate llevar y disfruta del viaje.",
                    "记住，不是要对抗洋流……随波逐流，享受旅程吧。"
                    ]
                }
            ]
        ]
    },
    clownMahoganyTown: {
        name: ['Clown', 'Payaso', '小丑'],
        state: savedStates.clownMahoganyTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ta-da!",
                        "¡Tachán!",
                    "嗒哒！"
                    ]
                },
                 {
                    text: [
                        "Surprise!",
                        "¡Salta la sorpresa!",
                    "惊喜！"
                    ]
                },
                {
                    text: [
                        "I'm the official clown delivering smiles... and mysterious eggs!",
                        "Soy el payaso repartidor oficial de sonrisas... ¡y de huevos misteriosos!",
                    "我是传递笑容的官方小丑……还有神秘的蛋！"
                    ]
                },
                {
                    text: [
                        "This Pokémon egg has been spinning like a crazy Pokéball... but I think it'll find its place with you.",
                        "Este huevo Pokémon ha estado dando vueltas como una Pokéball loca... pero creo que contigo encontrará su lugar.",
                    "这颗宝可梦蛋一直像疯了的精灵球一样旋转……但我觉得它会在你这里找到归属。"
                    ]
                },
                {
                    text: [
                        "No one knows which Pokémon will hatch from here...",
                        "Nadie sabe qué Pokémon saldrá de aquí...",
                    "没人知道会从里面孵出什么宝可梦……"
                    ]
                },
                {
                    text: [
                        "Take good care of it and walk around with it a lot.",
                        "Cuídalo bien y pasea mucho con él.",
                    "好好照顾它，多带着它走走。"
                    ],
                    reward: {
                        item: item.consumable.clownsEgg,
                        amount: 1
                    },
                },
                {
                    text: [
                        "When you least expect it... crack!",
                        "Cuando menos te lo esperes... ¡crack!",
                    "在你最意想不到的时候……咔嚓！"
                    ]
                },
                {
                    text: [
                        "It will hatch, and you'll meet your new partner!",
                        "¡Se romperá y conocerás a tu nuevo compañero!",
                    "它就会孵化，你就能见到你的新伙伴了！"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Oh, you're back!",
                        "¡Oh, has vuelto!",
                    "哦，你回来了！"
                    ]
                },
                {
                    text: [
                        "Are you here for another egg?",
                        "¿Vienes por otro huevo?",
                        "你是来拿另一个蛋的吗？"
                    ]
                },
                {
                    text: [
                        "Hehe!",
                        "¡Jijijiji!",
                        "嘻嘻！"
                    ]
                },
                {
                    text: [
                        "Nope, little friend, I'm not giving you any more.",
                        "Pues no, amiguito, no te voy a dar ninguno más.",
                    "不行，小朋友，我不会再给你了。"
                    ]
                },
                {
                    text: [
                        "I have tons of eggs, dozens, hundreds... a true eggtopia!",
                        "Tengo montones de huevos, docenas, centenas... ¡una auténtica óvopía!",
                    "我有成吨的蛋，几十个，几百个……一个真正的蛋托邦！"
                    ]
                },
                {
                    text: [
                        "But these are mine.",
                        "Pero estos son míos.",
                        "但这些是我的。"
                    ]
                },
                {
                    text: [
                        "Some shine, others shake... one even spoke to me once!",
                        "Algunos brillan, otros tiemblan... ¡incluso uno me habló una vez!",
                    "有些会发光，有些会摇晃……有一个甚至跟我说过话！"
                    ]
                },
                {
                    text: [
                        "But I won't part with them.",
                        "Pero no pienso separarme de ellos.",
                        "但我不打算和它们分开。"
                    ]
                },
                {
                    text: [
                        "Take good care of the one I gave you!",
                        "¡Cuida bien el que te di!",
                        "好好照顾我给你的那个！"
                    ]
                }
            ]
        ]   
    },
    signboardGymMahoganyCity: {
        name: ['Mahogany Town Gym', 'Gimnasio Pokémon de Pueblo Caoba', '卡吉道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Pryce's Gym, the master of the harsh winter.",
                        "Gimnasio de Fredo, el maestro del crudo invierno.",
                    "柳伯的道馆，严冬的大师。"
                    ]
                },
            ]
        ]
    },

    // CIUDAD ENDRINO
    scientistBlackthornCity: {
        name: ['Scientist', 'Científico', '科学家'],
        state: savedStates.scientistBlackthornCity ?? 0,
        dialogues: [
            [ 
                {
                    text: [
                        "Welcome to the Endrino City Archaeological Center!",
                        "¡Bienvenido al Centro Arqueológico de Ciudad Endrino!",
                        "欢迎来到烟墨市考古中心！"
                    ]
                },
                {
                    text: [
                        "Here we dedicate ourselves to studying the past and bringing it back.",
                        "Aquí nos dedicamos a estudiar el pasado y a traerlo de vuelta.",
                        "我们致力于研究过去并把它带回来。"
                    ]
                },
                {
                    text: [
                        "If you find any fossils on your travels, bring them here.",
                        "Si encuentras algún fósil en tus viajes, tráelo.",
                    "如果你在旅途中发现化石，带到这里来。"
                    ],
                },
                {
                    text: [
                        "We can bring them back to life.",
                        "Podemos devolverlo a la vida.",
                    "我们可以让它们复活。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    condition: () => (
                        !main.inventory.searchItem('fossilDome') && !main.inventory.searchItem('fossilHelix') && !main.inventory.searchItem('oldAmber')
                        && !main.inventory.searchItem('fossilRoot') && !main.inventory.searchItem('fossilClaw')
                    ),
                    text: [
                        "Hmm... You don't seem to have any fossils with you.",
                        "Hmm... No pareces tener ningún fósil contigo.",
                        "嗯……你似乎没带化石。"
                    ]
                },
                {
                    condition: () => (
                        !main.inventory.searchItem('fossilDome') && !main.inventory.searchItem('fossilHelix') && !main.inventory.searchItem('oldAmber')
                        && !main.inventory.searchItem('fossilRoot') && !main.inventory.searchItem('fossilClaw')
                    ),
                    text: [
                        "When you get one, bring it here.",
                        "Cuando consigas uno, tráelo.",
                    "拿到之后就带过来吧。"
                    ]
                },
                {
                   condition: () => (
                        !main.inventory.searchItem('fossilDome') && !main.inventory.searchItem('fossilHelix') && !main.inventory.searchItem('oldAmber')
                        && !main.inventory.searchItem('fossilRoot') && !main.inventory.searchItem('fossilClaw')
                    ),
                    text: [
                        "History is waiting to be awakened!",
                        "¡La historia está esperando a despertar!",
                        "历史正在等待被唤醒！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilDome'),
                    text: [
                        "Ah, I see you have a Dome Fossil with you!",
                        "¡Ah, veo que llevas un Fósil Domo contigo!",
                    "啊，你身上带着甲壳化石！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilDome'),
                    text: [
                        "One moment...",
                        "Un momento...",
                        "等一下……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilDome'),
                    text: [
                        "This will be quick...",
                        "Esto será rapido...",
                        "这很快的……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilDome'),
                    text: [
                        "Amazing!",
                        "¡Increíble!",
                        "太神奇了！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilDome'),
                    text: [
                        "A prehistoric specimen has returned to this world thanks to you!",
                        "¡Un espécimen prehistórico ha vuelto a este mundo gracias a ti!",
                        "一只史前标本因你而重回这个世界！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilDome'),
                    text: [
                        "Here is your new Omanyte, take good care of it!",
                        "Aquí tienes a tu nuevo Omanyte, ¡cuídalo bien!",
                    "这是你的新菊石兽，好好照顾它！"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.inventory.removeItem(main.inventory.searchItem('fossilDome'));
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['omanyte'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['omanyte'], 5));
                        main.pokedex.seePokemon(pokemon['omanyte'].n);
                        main.pokedex.catchPokemon(pokemon['omanyte'].n);
                    },
                },
                {
                    condition: () => main.inventory.searchItem('fossilHelix'),
                    text: [
                        "Ah, I see you have a Helix Fossil with you!",
                        "¡Ah, veo que llevas un Fósil Helix contigo!",
                    "啊，你身上带着贝壳化石！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilHelix'),
                    text: [
                        "One moment...",
                        "Un momento...",
                        "等一下……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilHelix'),
                    text: [
                        "This will be quick...",
                        "Esto será rapido...",
                        "这很快的……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilHelix'),
                    text: [
                        "Amazing!",
                        "¡Increíble!",
                        "太神奇了！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilHelix'),
                    text: [
                        "A prehistoric specimen has returned to this world thanks to you!",
                        "¡Un espécimen prehistórico ha vuelto a este mundo gracias a ti!",
                        "一只史前标本因你而重回这个世界！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilHelix'),
                    text: [
                        "Here is your new Kabuto, take good care of it!",
                        "Aquí tienes a tu nuevo Kabuto, ¡cuídalo bien!",
                    "这是你的新化石盔，好好照顾它！"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.inventory.removeItem(main.inventory.searchItem('fossilHelix'));
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['kabuto'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['kabuto'], 5));
                        main.pokedex.seePokemon(pokemon['kabuto'].n);
                        main.pokedex.catchPokemon(pokemon['kabuto'].n);
                    },
                },
                {
                    condition: () => main.inventory.searchItem('oldAmber'),
                    text: [
                        "Ah, I see you have a Old Amber with you!",
                        "¡Ah, veo que llevas un Ámbar Viejo contigo!",
                    "啊，你身上带着秘密琥珀！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('oldAmber'),
                    text: [
                        "One moment...",
                        "Un momento...",
                        "等一下……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('oldAmber'),
                    text: [
                        "This will be quick...",
                        "Esto será rapido...",
                        "这很快的……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('oldAmber'),
                    text: [
                        "Amazing!",
                        "¡Increíble!",
                        "太神奇了！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('oldAmber'),
                    text: [
                        "A prehistoric specimen has returned to this world thanks to you!",
                        "¡Un espécimen prehistórico ha vuelto a este mundo gracias a ti!",
                        "一只史前标本因你而重回这个世界！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('oldAmber'),
                    text: [
                        "Here is your new Aerodactyl, take good care of it!",
                        "Aquí tienes a tu nuevo Aerodactyl, ¡cuídalo bien!",
                    "这是你的新化石翼龙，好好照顾它！"
                    ],
                    cb: () => {
                         playSound('obtain', 'ui');
                        main.inventory.removeItem(main.inventory.searchItem('oldAmber'));
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['aerodactyl'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['aerodactyl'], 5));
                        main.pokedex.seePokemon(pokemon['aerodactyl'].n);
                        main.pokedex.catchPokemon(pokemon['aerodactyl'].n);
                    },
                },
                {
                    condition: () => main.inventory.searchItem('fossilRoot'),
                    text: [
                        "Ah, I see you have a Fossil Root with you!",
                        "¡Ah, veo que llevas un Fósil Raíz contigo!",
                    "啊，你身上带着根状化石！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilRoot'),
                    text: [
                        "One moment...",
                        "Un momento...",
                        "等一下……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilRoot'),
                    text: [
                        "This will be quick...",
                        "Esto será rapido...",
                        "这很快的……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilRoot'),
                    text: [
                        "Amazing!",
                        "¡Increíble!",
                        "太神奇了！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilRoot'),
                    text: [
                        "A prehistoric specimen has returned to this world thanks to you!",
                        "¡Un espécimen prehistórico ha vuelto a este mundo gracias a ti!",
                        "一只史前标本因你而重回这个世界！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilRoot'),
                    text: [
                        "Here is your new Lileep, take good care of it!",
                        "Aquí tienes a tu nuevo Lileep, ¡cuídalo bien!",
                    "这是你的新触手百合，好好照顾它！"
                    ],
                    cb: () => {
                         playSound('obtain', 'ui');
                        main.inventory.removeItem(main.inventory.searchItem('fossilRoot'));
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['lileep'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['lileep'], 5));
                        main.pokedex.seePokemon(pokemon['lileep'].n);
                        main.pokedex.catchPokemon(pokemon['lileep'].n);
                    },
                },
                {
                    condition: () => main.inventory.searchItem('fossilClaw'),
                    text: [
                        "Ah, I see you have a Fossil Claw with you!",
                        "¡Ah, veo que llevas un Fósil Garra contigo!",
                    "啊，你身上带着爪子化石！"
                    ]
                },
               {
                    condition: () => main.inventory.searchItem('fossilClaw'),
                    text: [
                        "One moment...",
                        "Un momento...",
                        "等一下……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilClaw'),
                    text: [
                        "This will be quick...",
                        "Esto será rapido...",
                        "这很快的……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilClaw'),
                    text: [
                        "Amazing!",
                        "¡Increíble!",
                        "太神奇了！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilClaw'),
                    text: [
                        "A prehistoric specimen has returned to this world thanks to you!",
                        "¡Un espécimen prehistórico ha vuelto a este mundo gracias a ti!",
                        "一只史前标本因你而重回这个世界！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('fossilClaw'),
                    text: [
                        "Here is your new Anorith, take good care of it!",
                        "Aquí tienes a tu nuevo Anorith, ¡cuídalo bien!",
                    "这是你的新太古羽虫，好好照顾它！"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.inventory.removeItem(main.inventory.searchItem('fossilClaw'));
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['anorith'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['anorith'], 5));
                        main.pokedex.seePokemon(pokemon['anorith'].n);
                        main.pokedex.catchPokemon(pokemon['anorith'].n);
                    },
                },
            ],
        ]   
    },
    geologistBlackthornCity: {
        name: ['Geologist', 'Geólogo', '地质学家'],
        state: savedStates.geologistBlackthornCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ah, hello!",
                        "¡Ah, hola!",
                    "啊，你好！"
                    ]
                },
                {
                    text: [
                        "I'm a geologist; I study stones, rocks, and everything you can find underground.",
                        "Soy un geólogo, estudio piedras, rocas y todo lo que se pueda encontrar bajo tierra.",
                    "我是一名地质学家；我研究石头、岩石以及你能在地下找到的一切。"
                    ]
                },
                {
                    text: [
                        "I have so many stones that sometimes I forget what I do with them...",
                        "Tengo tantas piedras que a veces ni recuerdo qué hago con ellas...",
                        "我有太多石头了，有时都忘了用来做什么……"
                    ]
                },
                {
                    text: [
                        "Look, I found this Moon Stone among my rocks, but... I have no idea which Pokémon needs it.",
                        "Mira, encontré esta Piedra lunar entre mis rocas, pero... no tengo ni idea de qué Pokémon la necesita.",
                    "看，我在我的石头中发现了这块月之石，但是……我不知道哪只宝可梦需要它。"
                    ]
                },
                {
                    text:  [
                        "Take it.",
                        "Tómala.",
                    "拿去吧。"
                    ],
                    reward: {
                        item: item.consumable.moonStone,
                        amount: 1
                    },
                },
                {
                    text:  [
                        "The only thing I know is that it must be good for something; I'm sure you'll know better what to do with it than I do.",
                        "Lo único que sé es que tiene que servir para algo, seguro que tú sabrás mejor qué hacer con ella que yo.",
                    "我只知道它一定有什么用处；我相信你比我知道该怎么用它。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "You here again?",
                        "¿Tú otra vez por aquí?",
                        "你又来了？"
                    ]
                },
                {
                    text: [
                        "I'm organizing my stone collection; this one doesn't fit anywhere.",
                        "Estoy organizando mi colección de piedras, esta no me encaja en ningun lado.",
                    "我正在整理我的石头收藏；这块放哪里都不合适。"
                    ]
                },
                {
                    text: [
                        "Here, have a Fire Stone.",
                        "Ten una Piedra fuego.",
                    "来，给你一块火之石。"
                    ],
                    reward: {
                        item: item.consumable.fireStone,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Keep it; this way I make some space at home.",
                        "Quédatela, así hago un poco de espacio en casa.",
                    "留着吧；这样我家里也能腾出点地方。"
                    ],
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "You here again?",
                        "¿Tú otra vez por aquí?",
                        "你又来了？"
                    ]
                },
                {
                    text: [
                        "I'm still organizing my collection.",
                        "Yo sigo organizando mi colección.",
                        "我还在整理我的收藏。"
                    ]
                },
                {
                    text: [
                        "I have nothing else to give you; it's not easy for a geologist to part with his stones.",
                        "No tengo nada mas para darte, no es fácil para un geólogo separarse de sus piedras.",
                    "我没有别的东西可以给你了；对地质学家来说，舍弃自己的石头可不容易。"
                    ]
                }
            ],
        ]   
    },
    touristBlackthornCity: {
        name: ['Tourist', 'Turista', '游客'],
        state: savedStates.touristBlackthornCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Have you seen those bushes south of Route 42?",
                        "¿Has visto esos arbustos al sur de la ruta 42?",
                        "你看到42号道路南边的灌木丛了吗？"
                    ]
                },
                {
                    text: [
                        "It seems like they are trying to tell us something.",
                        "Parece que intentan decirnos algo.",
                    "它们似乎在试图告诉我们什么。"
                    ],
                },
            ],
        ]   
    },
    signboardBBlackthornCity: {
        name: ['Blackthorn City', 'Ciudad Endrino', '烟墨市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "A peaceful mountain refuge.",
                        "Un tranquilo refugio de montaña.",
                        "宁静的山间避难所。"
                    ]
                },
            ]
        ]
    },
    signboardGymBlackthornCity: {
        name: ['Blackthorn City Gym', 'Gimnasio Pokémon de Ciudad Endrino', '烟墨道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Débora's Gym, the great expert in Dragon-type Pokémon.",
                        "Gimnasio de Débora, la gran experta en Pokémon dragón.",
                    "小椿的道馆，龙系宝可梦的大专家。"
                    ]
                },
            ]
        ]
    },
    signboardArchaeologicalCenter: {
        name: ['Blackthorn Archaeological Center', 'Centro Arqueológico de Ciudad Endrino', '烟墨考古中心'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Pokémon Fossil Research Center.",
                        "Centro de investigación de fósiles Pokémon.",
                        "宝可梦化石研究中心。"
                    ]
                },
            ]
        ]
    },
    vesselABlackthornCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselABlackthornCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Transumtation Flask！",
                        "¡Hay x1 Frasco Alteración dentro la vasija!",
                    "容器里有x1 转化烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.transmutationFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBBlackthornCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBBlackthornCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Rare Candy！",
                        "¡Hay x2 Carameloraro dentro la vasija!",
                    "容器里有x2 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCBlackthornCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCBlackthornCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Pink Apricorn！",
                        "¡Hay x1 Bonguri rosa dentro la vasija!",
                    "容器里有x1 Pink 圆柑！"
                    ],
                    reward: {
                        item: item.key.apricornPink,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    blackthornCityHiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.blackthornCityHiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM75 Fire Wheel on the ground!",
                        "¡He encontrado x1 MT75 Rueda fuego en el suelo!",
                    "我在地上找到了x1 招式机75 火焰轮！"
                    ],
                    reward: {
                        item: item.tm.tm75,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    //Vermiliion City
    boatVermilionCity: {
        name: ['Captain', 'Capitán', '船长'],
        state: savedStates.boatVermilionCity ?? 0,
        dialogues: [
            [   
                {
                    text: [
                        "Ahoy, traveler!",
                        "¡Ahoy, viajero!",
                    "喂，旅行者！"
                    ]
                },
                {
                    text: [
                        "I see you have the Boat Pass.",
                        "Veo que tienes el Bono Barco.",
                        "我看到你有船票了。"
                    ]
                },
                {
                    text: [
                        "Ready to set sail for Olivine City?",
                        "¿Listo para zarpar rumbo a Ciudad Olivo?",
                    "准备好驶向浅葱市了吗？"
                    ],
                    choices: [
                        {
                            text: [
                                "Not yet.",
                                "Aún no.",
                            "还没。"
                            ],
                            next: "end"  
                        },
                        {
                            text: [
                                "Yes, let's go!",
                                "¡Sí, vamos!",
                            "好，我们走吧！"
                            ],
                            next: 1, 
                            state: 1  
                        },
                        
                    ]
                }
            ],
            [
                {
                    text: [
                        "Destination: Olivine City!",
                        "¡Rumbo a Ciudad Olivo!",
                    "目的地：浅葱市！"
                    ],
                    state: 0,
                },    
                {
                    cb: () => {
                        main.player.region = 0;
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.cityData['olivineCity-2']);
                    } 
                },             
            ]
        ]
    },
    signboardVermilionCity: {
        name: ['Vermilion City', 'Ciudad Carmín', '枯叶市'],
        state: 0,
        dialogues: [
            [
                {
                    text:  [
                        "The Port of Dusk.",
                        "El puerto del ocaso.",
                    "黄昏港口。"
                    ],
                },
            ]
        ]
    },
    signboardGymVermilionCity: {
        name: ['Vermilion City Gym', 'Gimnasio Pokémon de Ciudad Carmín', '枯叶道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Lt. Surge's Gym, the American lightning bolt.",
                        "Gimnasio de Lt. Surge, el rayo americano.",
                    "马志士的道馆，美国闪电。"
                    ]
                },
            ]
        ]
    },
    sailorVermilionCity: {
        name: ['Sailor', 'Marinero', '水手'],
        state: savedStates.sailorVermilionCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to Kanto, lad.",
                        "Bienvenido a Kanto, chaval.",
                    "欢迎来到关都，小伙子。"
                    ]
                },
                {
                    text: [
                        "You smell like Johto from the port.",
                        "Hueles a Johto desde el puerto.",
                        "你从港口闻起来像城都来的。"
                    ]
                },
                {
                    text: [
                        "What's up?",
                        "¿Qué pasa?",
                        "怎么了？"
                    ]
                },
                {
                    text: [
                        "Don't they teach you to walk steady on deck in Johto?",
                        "¿En Johto no enseñan a andar firme por cubierta?",
                        "城都不教你在甲板上站稳吗？"
                    ]
                },
                {
                    text: [
                        "Here in Vermilion City we don't raise trainers.",
                        "Aquí en Ciudad Carmín no criamos entrenadores.",
                        "在枯叶市我们可不培养训练家。"
                    ]
                },
                {
                    text: [
                        "But hey, I can tell you've got guts, even if they're Magikarp guts.",
                        "Pero bueno, se nota que tienes agallas, aunque sean de Magikarp.",
                    "不过嘿，我看得出你有胆量，就算是鲤鱼王的胆量。"
                    ]
                },
                {
                    text: [
                        "Ha! Just kidding, kid!",
                        "¡Ja! ¡Es broma, muchacho!",
                    "哈！开个玩笑，小子！"
                    ]
                },
                {
                    text: [
                        "Good luck... you'll need it if you plan to take on the folks around here.",
                        "Te deseo suerte... la vas a necesitar si piensas enfrentarte a los de aquí.",
                        "祝你好运……如果你想挑战这里的人，你需要它。"
                    ]
                }
            ]
        ]
    },
    fanaticVermilionCity: {
        name: ['Fanatic', 'Fanático', '狂热者'],
        state: savedStates.fanaticVermilionCity ?? 0,
        dialogues: [
            [
               {
                text: [
                        "Halt!",
                        "¡Alto ahí!",
                        "站住！"
                    ]
                },
                {
                    text: [
                        "Are you here to challenge Commander Surge?",
                        "¿Vienes a retar al comandante Surge?",
                        "你是来挑战马志士少佐的吗？"
                    ]
                },
                {
                    text: [
                        "You'd better be ready!",
                        "¡Más te vale estar preparado!",
                        "你最好准备好了！"
                    ]
                },
                {
                    text: [
                        "They say he once recharged a power plant by slapping the generator.",
                        "Dicen que una vez recargó una central eléctrica dándole una palmada al generador.",
                        "据说他曾经拍了一下发电机就重启了整个发电厂。"
                    ]
                },
                {
                    text: [
                        "I train every day to be worthy of his shadow!",
                        "¡Yo entreno todos los días para ser digno de su sombra!",
                        "我每天都在训练，只为配得上他的影子！"
                    ]
                },
                {
                    text: [
                        "One hundred push-ups for every Voltorb I catch!",
                        "¡Cien flexiones por cada Voltorb que atrapo!",
                        "每抓到一只霹雳电球就做一百个俯卧撑！"
                    ]
                }
            ]
        ]
    },
    fisherVermilionCity: {
        name: ['Fisher', 'Pescador', '渔夫'],
        state: savedStates.fisherVermilionCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "A young trainer who looks like he's lost three times to a Tentacool?",
                        "¿Un joven entrenador con cara de haber perdido tres veces contra un Tentacool?",
                        "一个看起来像是输给玛瑙水母三次的年轻训练家？"
                    ]
                },
                {
                    text: [
                        "Welcome to Vermilion City!",
                        "¡Bienvenido a Ciudad Carmín!",
                        "欢迎来到枯叶市！"
                    ]
                },
                {
                    text: [
                        "I've been fishing here since before Lt. Surge was the gym leader.",
                        "Yo pesco aquí desde antes de que Lt. Surge fuera el líder de gimnasio.",
                        "在马志士成为馆主之前我就在这里钓鱼了。"
                    ]
                },
                {
                    text: [
                        "The sea teaches patience, humility, and always carrying potions in case a Gyarados bites.",
                        "El mar enseña paciencia, humildad y a llevar siempre pociones por si pica un Gyarados.",
                    "大海教会人耐心、谦逊，以及永远随身带着伤药以防暴鲤龙咬人。"
                    ]
                },
                {
                    text: [
                        "Take this HP Up, it'll come in handy.",
                        "Ten este Más PS, te vendrá bien.",
                    "拿着这个HP增强剂，会派上用场的。"
                    ],
                    reward: {
                        item: item.consumable.hpUp,
                        amount: 1
                    },
                    state: 1
                },
                {
                    text: [
                        "Increases a Pokémon's HP!",
                        "¡Aumenta los PS de un Pokémon!",
                        "提升宝可梦的HP！"
                    ]
                },
            ],
            [
               {
                    text: [
                        "Hey, kid! Back here again?",
                        "¡Eh, joven! ¿Otra vez por aquí?",
                    "嘿，小子！又回来了？"
                    ]
                },
                {
                    text: [
                        "I don't have anything for you.",
                        "No tengo nada para ti.",
                        "我没有什么可以给你的。"
                    ]
                },
                {
                    text: [
                        "But if you bring me an iced coffee, I'll tell you the story of the flying Magikarp.",
                        "Pero si me traes un café con hielo, te cuento la historia del Magikarp volador.",
                    "但如果你给我带杯冰咖啡，我就告诉你飞天鲤鱼王的故事。"
                    ]
                }
            ]
        ]
    },
    hikerVermilionCity: {
        name: ['Hiker', 'Excursionista', '登山男'],
        state: savedStates.hikerVermilionCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Are you heading out through the Kanto routes?",
                        "¿Vas a salir por las rutas de Kanto?",
                        "你要走关都的道路出发吗？"
                    ]
                },
                {
                    text: [
                        "Good luck...",
                        "Buena suerte...",
                        "祝你好运……"
                    ]
                },
                {
                    text: [
                        "Route 11 left my legs shaking.",
                        "La Ruta 11 me dejó con las piernas temblando.",
                        "11号道路让我的腿直发抖。"
                    ]
                },
                {
                    text: [
                        "And it wasn't from exercise, it was from a Hypno with a very unfriendly face!",
                        "Y no fue por el ejercicio, ¡fue por un Hypno con cara de pocos amigos!",
                    "而且不是靠锻炼，而是一只面色非常不友好的引梦貘人干的！"
                    ]
                },
                {
                    text: [
                        "The routes here are tough, not like those peaceful paths in Johto.",
                        "Las rutas de aquí son duras, no como esos senderitos tranquilos de Johto.",
                    "这里的道路很艰难，不像城都那些平静的小路。"
                    ]
                },
                {
                    text: [
                        "Here, the bushes hit you back.",
                        "Aquí los arbustos te pegan de vuelta.",
                    "在这里，灌木丛会还手。"
                    ]
                },
                {
                   text: [
                        "Take those x5 Medicine Total.",
                        "Toma, 5 Medicinas total.",
                    "拿着这x5 万能药。"
                    ],
                    reward: {
                        item: item.consumable.medicineTotal,
                        amount: 5
                    },
                },
                {
                    text: [
                        "It's not much, but they can get you out of a tight spot.",
                        "No es mucho, pero pueden sacarte de un apuro.",
                    "虽然不多，但能帮你摆脱困境。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text:  [
                        "Try to survive on the way to Fuchsia City.",
                        "Intenta sobrevivir en el camino a Ciudad Fucsia.",
                        "试着在去浅红市的路上活下来。"
                    ]
                },
            ]
        ]
    },
    //Ciudad fucsia
    signboardFuchsiaCity: {
        name: ['Fuchsia City', 'Ciudad Fucsia', '浅红市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The Pink Passion!",
                        "¡La pasión rosa!",
                    "粉色激情！"
                    ],
                },
            ]
        ]
    },
    signboardGymFuchsiaCity: {
        name: ['Fuchsia City Gym', 'Gimnasio Pokémon de Ciudad Fucsia', '浅红道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Koga's Gym, the poisonous ninja master.",
                        "Gimnasio de Koga, el venenoso maestro ninja.",
                    "阿桔的道馆，毒系忍者大师。"
                    ]
                },
            ]
        ]
    },
    vesselFuchsiaCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselFuchsiaCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Rare Candy！",
                        "¡Hay x3 Carameloraro dentro la vasija!",
                    "容器里有x3 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    policemanFuchsiaCity: {
        name: ['Policeman', 'Policía', '警察'],
        state:  0,
        dialogues: [
            [
                {
                    text: [
                        "This is the way to the bike path.",
                        "Por aquí se accede al carril bici.",
                        "这是通往自行车道的路。"
                    ]
                },
                {
                    text: [
                        "I can't let you pass if you're not a cyclist.",
                        "No puedo dejarte pasar si no eres ciclista.",
                        "如果你不是骑自行车的，我不能让你过去。"
                    ]
                },
                {
                    text: [
                        "No, that floating bike, impressive as it is, doesn't give you access to the bike path.",
                        "No, esa bici flotante, aunque sea impresionante, no te da acceso al carril bici.",
                    "不，那辆浮空自行车虽然很厉害，但不会让你进入自行车道的。"
                    ]
                }
            ],
        ]
    },
    ninjaFuchsiaCity: {
        name: ['Ninja', 'Ninja', '忍者'],
        state: savedStates.ninjaFuchsiaCity ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Shhh!",
                        "¡Shhh!",
                        "嘘！"
                    ]
                },
                {
                    text: [
                        "Don't move!",
                        "¡No te muevas!",
                        "别动！"
                    ]
                },
                {
                    text: [
                        "I'm spying in stealth mode level five.",
                        "Estoy espiando en modo sigilo nivel cinco.",
                        "我在进行五级潜行侦察。"
                    ]
                },
                {
                    text: [
                        "Do you know Koga?",
                        "¿Conoces a Koga?",
                        "你认识阿桔吗？"
                    ]
                },
                 {
                    text: [
                        "The gym leader!",
                        "¡El líder del gimnasio!",
                        "馆主！"
                    ]
                },
                {
                    text: [
                        "A true ninja!",
                        "¡Un auténtico ninja!",
                        "真正的忍者！"
                    ]
                },
                {
                    text: [
                        "My Ekans and I are training to be like him.",
                        "Mi Ekans y yo estamos entrenando para ser como él.",
                        "我的阿柏蛇和我在训练成为像他那样的人。"
                    ]
                },
                {
                    text: [
                        "We practice camouflage, poison, and disappearing in a smoke cloud.",
                        "Practicamos camuflaje, veneno y desaparecer en una nube de humo.",
                    "我们练习伪装、下毒以及在烟雾中消失。"
                    ]
                },
                {
                    condition: () => main.team.isTypeInTeam('poison'),
                    text:[
                        "Oh, I see you also like Poison-type Pokémon.",
                        "Oh, veo que a ti también te gustan los Pokémon de tipo Veneno.",
                    "哦，我看你也喜欢毒系宝可梦。"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('poison'),
                    text: [
                        "Are you also training to be a ninja?",
                        "¿Tú también estás practicando para ser ninja?",
                    "你也在训练成为忍者吗？"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('poison'),
                    text: [
                        "Here, take this TM142 Veno Shock!",
                        "¡Toma esta MT142 Carga tóxica!",
                    "来，拿着这个TM142 毒液冲击！"
                    ],
                    reward: {
                        item: item.tm.tm142, 
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "I'm training, don't distract me!",
                        "¡Estoy entrenando, no me distraigas!",
                    "我在训练，别打扰我！"
                    ]
                },
            ]
        ]
    },
    ecoHunterFuchsiaCity: {
        name: ['Eco Hunter', 'Eco-cazadora', '生态猎人'],
        state: savedStates.ecoHunterFuchsiaCity ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "You're not from around here, are you?",
                        "¿Tú no eres de por aquí, verdad?",
                    "你不是本地人吧？"
                    ]
                },
                {
                    text: [
                        "I can see that 'Where's the famous Safari Zone?' look in your eyes.",
                        "Te noto esa mirada de: '¿Dónde está la famosa Zona Safari?'.",
                        "我能从你眼里看到'著名的狩猎地带在哪？'的表情。"
                    ]
                },
                {
                    text: [
                        "Well, it doesn't exist anymore.",
                        "Pues ya no existe.",
                        "好吧，它已经不存在了。"
                    ]
                },
                {
                    text: [
                        "That place was shut down years ago.",
                        "Cerraron ese sitio hace años.",
                        "那个地方几年前就关了。"
                    ]
                },
                {
                    text: [
                        "Catching Pokémon for fun by throwing rocks at them... how awful!",
                        "Capturar Pokémon por diversión, lanzándoles piedras... ¡qué horror!",
                    "为了好玩朝宝可梦扔石头抓它们……太可怕了！"
                    ]
                },
                {
                    text: [
                        "I personally helped free the last Pokémon still kept in cages.",
                        "Yo misma ayudé a liberar a los últimos Pokémon que quedaban en jaulas.",
                        "我亲自帮忙释放了最后一批被关在笼子里的宝可梦。"
                    ]
                },
                {
                    text: [
                        "A Tauros broke three of my ribs!",
                        "¡Un Tauros me rompió tres costillas!",
                        "一只肯泰罗撞断了我三根肋骨！"
                    ]
                },
                {
                    text: [
                        "We have lots of rescued eggs from mothers who couldn't raise them.",
                        "Tenemos muchos huevos rescatados, de madres que no pudieron criarlos.",
                    "我们有很多从无法抚养的母亲那里救来的蛋。"
                    ]
                },
                {
                    text: [
                        "Take one and take good care of it, okay?",
                        "Toma uno y cuídalo bien, ¿vale?",
                    "拿一个，好好照顾它，好吗？"
                    ],
                    reward: {
                        item: item.consumable.ecoEgg,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Did you know there are still people who wanted to reopen the Safari Zone?",
                        "¿Sabías que aún hay gente que quería reabrir la Zona Safari?",
                        "你知道还有人想重新开放狩猎地带吗？"
                    ]
                },
                {
                    text: [
                        "With traps, cages and everything!",
                        "¡Con trampas, jaulas y todo!",
                    "用陷阱、笼子，什么都有！"
                    ]
                },
                {
                    text: [
                        "No way!",
                        "¡Ni hablar!",
                        "没门！"
                    ]
                },
                {
                    text: [
                        "As long as I breathe, that hell will not return.",
                        "Mientras yo respire, ese infierno no volverá.",
                    "只要我还在呼吸，那个地狱就不会回来。"
                    ]
                },
                {
                    text: [
                        "Pokémon are not trophies!",
                        "¡Los Pokémon no son trofeos!",
                        "宝可梦不是战利品！"
                    ]
                }
            ]
        ]
    },
    birdWatcherFuchsiaCity: {
        name: ['Bird watcher', 'Ornitóloga', '观鸟者'],
        state: savedStates.birdWatcherFuchsiaCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Do you know how many hours I've spent trying to get a Pidgey to look at me?",
                        "¿Sabes cuántas horas llevo intentando que un Pidgey me mire?",
                        "你知道我花了多少小时想让一只波波看我吗？"
                    ]
                },
                {
                    text: [
                        "Seven!",
                        "¡Siete!",
                        "七小时！"
                    ]
                },
                {
                    text: [
                        "Seven damn hours!",
                        "¡Siete malditas horas!",
                        "该死的七小时！"
                    ]
                },
                {
                    text: [
                        "I bring seeds, I whistle, I dress up as a bush... and nothing!",
                        "Traigo semillas, silbo, me disfrazo de arbusto... ¡y nada!",
                    "我带着种子，吹着口哨，打扮成灌木……结果什么都没用！"
                    ]
                },
                {
                    text: [
                        "They ignore me like a Farfetch'd without its leek!",
                        "Me ignoran como a un Farfetch'd sin puerro!",
                    "他们无视我就像没有大葱的大葱鸭一样！"
                    ]
                },
                {
                    text: [
                        "You, on the other hand, probably just walk by and they land on your head.",
                        "Tú, en cambio, seguro que pasas y se te posan en la cabeza.",
                    "而你呢，大概只是走过，它们就落在你头上了。"
                    ]
                },
                {
                    text: [
                        "So annoying.",
                        "Qué rabia.",
                        "真烦人。"
                    ]
                },
                {
                    text: [
                        "Take this Timid Mint, they say it alters a Pokémon's personality.",
                        "Toma esta Menta Miedosa, dicen que altera la personalidad de un Pokémon.",
                    "拿着这个胆小薄荷，据说它能改变宝可梦的性格。"
                    ],
                    reward: {
                        item: item.consumable.timidMint,
                        amount: 1
                    },
                    state: 1
                },
                {
                    text: [
                        "Maybe with some luck, one gets traumatized and lets me observe it.",
                        "A ver si con suerte uno se traumatiza y se deja observar.",
                    "也许运气好的话，有只会受到心理创伤，然后让我观察它。"
                    ]
                },
            ],
            [
                {
                    text: [
                        "Did the mint help you?",
                        "¿La menta te sirvió?",
                        "薄荷有用吗？"
                    ]
                },
                {
                    text: [
                        "Because if I manage to get a Doduo to look at me without running away, I'll get you another one.",
                        "Porque si consigo que un Doduo me mire sin salir corriendo, te consigo otra.",
                    "因为如果我能让一只嘟嘟看着我不跑，我就再给你弄一只。"
                    ]
                },
                {
                    text: [
                        "And no one better tell me to calm down!",
                        "¡Y que nadie me diga que me calme!",
                        "没人最好叫我冷静！"
                    ]
                },
                {
                    text: [
                        "This is passionate ornithology!",
                        "¡Esto es ornitología pasional!",
                        "这是充满激情的鸟类学！"
                    ]
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "W-What?! That Pokémon you're carrying... is it a Flying type?!",
                        "¿¡¿EH?!? ¿Ese Pokémon que llevas... es tipo Volador?!",
                    "什—什么？！你带着的那只宝可梦……是飞行系的吗？！"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Why you and not me?!",
                        "¡¿Y por qué a ti sí y a mí no?!",
                    "为什么是你而不是我？！"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "What do you feed them, gourmet birdseed?!",
                        "¿¡Qué les das, alpiste gourmet?!",
                    "你喂它们什么，高级鸟食吗？！"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Look at it... so calm, so... docile.",
                        "Míralo... tan tranquilo, tan... dócil.",
                    "看看它……多么平静，多么……温顺。"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Would you lend it to me for, say... ten years?",
                        "¿No quieres prestármelo unos... diez años?",
                    "能借给我吗，比如说……十年？"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Okay, okay, just kidding...",
                        "Vale, vale, era broma...",
                    "好吧，好吧，开玩笑的……"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Actually, you'll make better use of this than I would.",
                        "De hecho, tu usarás esto mejor que yo.",
                    "实际上，你会比我更用得上这个。"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Here you go, TM14 Drill Peck.",
                        "Aquí tienes, la MT14 Pico taladro.",
                    "给你，TM14 啄钻。"
                    ],
                    reward: {
                        item: item.tm.tm14, 
                        amount: 1
                    },
                },
                {
                    condition: () => main.team.isTypeInTeam('flying'),
                    text: [
                        "Put it to good use!",
                        "¡Dale buen uso!",
                    "好好利用它！"
                    ],
                    state: 2
                },
            ],
            [
               {
                    text: [
                        "I was saving that TM for my future Dodrio.",
                        "Estaba guardando esa MT para mi futuro Dodrio.",
                        "我本来在为未来的嘟嘟利留着那个招式机。"
                    ]
                },
                {
                    text: [
                        "But I think it was going to expire on me...",
                        "Pero creo que me iba a caducar...",
                        "但我想它快过期了……"
                    ]
                }
            ],
        ]
    },
    poacherFuchsiaCity: {
        name: ['Poacher', 'Cazador furtivo', '偷猎者'],
        state: savedStates.poacherFuchsiaCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Damn that woman!",
                        "¡Maldita sea esa mujer!",
                        "该死的那个女人！"
                    ]
                },
                {
                    text: [
                        "She shut down the Safari Zone and left us without work.",
                        "Cerró la Zona Safari y nos dejó sin trabajo.",
                        "她关了狩猎地带，让我们没了工作。"
                    ]
                },
                {
                    text: [
                        "We used to hunt freely...",
                        "Antes podíamos cazar a placer...",
                        "我们以前可以自由捕猎……"
                    ]
                },
                {
                    text: [
                        "But now it's all protection, conservation, and rights.",
                        "Pero ahora todo es protección, conservación y derechos.",
                    "但现在全是保护、保育和权利。"
                    ]
                },
                {
                    text: [
                        "Bah!",
                        "¡Bah!",
                        "呸！"
                    ]
                },
                {
                    text: [
                        "They say she freed the caged Pokémon, but she probably just wanted attention.",
                        "Dicen que liberó a los Pokémon enjaulados, pero seguro que solo quiso llamar la atención.",
                    "他们说她释放了关在笼子里的宝可梦，但她大概只是想博关注。"
                    ]
                },
                {
                    text: [
                        "If I ever see that fanatic again, I'll show her the world belongs to those who dare.",
                        "Si vuelvo a ver a esa fanática, le demostraré que el mundo es de quienes se atreven.",
                    "如果再让我看到那个狂热分子，我会让她知道世界属于敢作敢为的人。"
                    ]
                },
                {
                    text: [
                        "For now, better to stay hidden, revenge is best served cold.",
                        "Por ahora, mejor me mantengo oculto, la venganza se sirve fría.",
                    "现在最好躲起来，君子报仇十年不晚。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('ecoEgg') != undefined,
                    text: [
                        "What? She gave you that egg?",
                        "¿Cómo? ¿Ese huevo te lo dio ella?",
                    "什么？她给了你那颗蛋？"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('ecoEgg') != undefined,
                    text: [
                        "Hey... would you be interested in a deal?",
                        "Oye... ¿te interesaría un trato?",
                    "嘿……你对交易感兴趣吗？"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('ecoEgg') != undefined,
                    text: [
                        "I'll buy it from you for 30,000 bucks.",
                        "Te lo compro por 30,000 machacantes.",
                    "我出3万块跟你买。"
                    ],
                    choices: [
                        {
                            text:  [
                                "Deal",
                                "Trato",
                            "成交"
                            ],
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: [
                                "No way",
                                "Ni pensarlo",
                            "不行"
                            ],
                            next: 2,
                            state: 2
                        },
                    ]
                }, 
            ],
            [
                {
                    text:  [
                        "Here's your $30,000 in exchange for the egg.",
                        "Aquí tienes tus $30,000 a cambio del huevo.",
                    "这是你的3万块，换那颗蛋。"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.inventory.removeItem(main.inventory.searchItem('ecoEgg'));
                        main.player.changeGold(30000);
                    },
                },
                {
                    text:  [
                        "Good choice!",
                        "¡Buena elección!",
                    "好选择！"
                    ],
                    state: 3
                },
            ],
            [
                {
                    text: [
                        "You're on their side!?",
                        "¿¡Estas de su lado!?",
                    "你是他们那边的？！"
                    ]
                },
                {
                    text: [
                        "Look, if you change your mind, I'll be waiting for you.",
                        "Mira, si cambias de opinión, estaré esperandote.",
                    "听着，如果你改变主意，我会等你的。"
                    ],
                    state: 0
                }
            ],
            [
                {
                    text:  [
                        "We're just as bad, huh?",
                        "Somos igual de malos, ¿eh?",
                    "我们一样坏，对吧？"
                    ],
                },
                {
                    text: [
                        "Well, I think you're a bit worse than me.",
                        "Bueno, creo que tú un poco más que yo.",
                    "嗯，我觉得你比我稍微坏一点。"
                    ]
                },
            ],
        ]
    },
    // Ciudad plateada
    signboardPewterCity: {
        name: ['Pewter City', 'Ciudad Plateada', '深灰市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "City of inaccessible cliffs.",
                        "Ciudad de riscos inaccesibles.",
                    "不可攀登的悬崖之城。"
                    ],
                },
            ]
        ]
    },
    signboardGymPewterCity: {
        name: ['Pewter City Gym', 'Gimnasio Pokémon de Ciudad Plateada', '深灰道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Brock's Gym, strong as a rock.",
                        "Gimnasio de Brock, es fuerte como una roca.",
                    "小刚的道馆，坚如磐石。"
                    ]
                },
            ]
        ]
    },
    rookiePewterCity: {
        name: ['Rookie ', 'Entrenador novato', '新秀'],
        state: savedStates.rookiePewterCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Are you from Johto?",
                        "¿Vienes de Johto?",
                        "你从城都来的？"
                    ]
                },
                {
                    text: [
                        "Heh, good luck around here, buddy.",
                        "Je, buena suerte por aquí, colega.",
                    "嘿，在这儿祝你好运，伙计。"
                    ]
                },
                {
                    text: [
                        "I was going to take it easy on the route and ended up fainted from an Ekans bite.",
                        "Yo iba a hacer una ruta tranquila y acabé desmayado por una mordida de un Ekans.",
                        "我本来想在路上轻松一下，结果被阿柏蛇咬了一口晕倒了。"
                    ]
                },
                {
                   text: [
                        "Take a Medicine, just in case you get into trouble.",
                        "Toma una Medicina, por si te ves en apuros.",
                    "拿着这瓶药，以防你遇到麻烦。"
                    ],
                    reward: {
                        item: item.consumable.medicine,
                        amount: 1
                    },
                },
                {
                    text: [
                        "No need to thank me!",
                        "¡No hace falta que me des las gracias!",
                    "不用谢我！"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Since an Ekans bit me, I can't pronounce the 'S' without a whistle.",
                        "Desde que me mordió un Ekans ya no puedo pronunciar la 'S' sin que me salga un silbido.",
                    "自从被阿柏蛇咬了之后，我发'S'音就离不开哨声。"
                    ]
                },
                {
                    text: [
                        "Every time I hear a flute, I start rolling on my own.",
                        "Cada vez que oigo una flauta, me enrollo solo.",
                    "每次听到笛声，我就不由自主地滚起来。"
                    ]
                }
            ]
        ]
    },
    forgetfulLadyPewterCity: {
        name: ['Forgetful Lady', 'Señora olvidadiza', '健忘女士'],
        state: savedStates.forgetfulLadyPewterCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh... it can't be...",
                        "Ay... no puede ser...",
                        "哦……不会吧……"
                    ]
                },
                {
                    text: [
                        "I lost my umbrella again!",
                        "¡Otra vez perdí el paraguas!",
                        "我又把伞弄丢了！"
                    ]
                },
                {
                    text: [
                        "That's... six times?",
                        "Eso hace... ¿seis veces?",
                        "这已经是……第六次了？"
                    ]
                },
                 {
                    text: [
                        "Seven?",
                        "¿Siete?",
                        "第七次？"
                    ]
                },
                {
                    text: [
                        "I lost count when a Beedrill flew away with it.",
                        "Perdí la cuenta cuando un Beedrill se lo llevó volando.",
                        "当一只大针蜂把它叼走的时候我就数不清了。"
                    ]
                },
                {
                    text: [
                        "It must be in Viridian Forest... like the other five.",
                        "Debe de estar en el Bosque Verde... como los otros cinco.",
                        "它一定在常青森林里……跟另外五把一样。"
                    ]
                },
                {
                    text: [
                        "If you find it, please give it back to me!",
                        "Si lo encuentras, ¡devuélvemelo!",
                    "如果你找到了，请还给我！"
                    ]
                },
                {
                    text: [
                        "I promise I'll give you something good.",
                        "Te prometo que te daré algo bueno.",
                    "我保证给你好东西。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    condition: () => main.inventory.searchItem('umbrella') == undefined,
                    text: [
                        "I miss my little umbrella...",
                        "Echo de menos mi paragüitas...",
                    "我想念我的小伞……"
                    ],
                },
                {
                 condition: () => main.inventory.searchItem('umbrella') != undefined,
                    text: [
                        "My umbrella!",
                        "¡Mi paraguas!",
                    "我的伞！"
                    ],
                },
                {
                condition: () => main.inventory.searchItem('umbrella') != undefined,
                    text: [
                        "My precious umbrella!",
                        "¡Mi precioso paraguas!",
                    "我珍贵的伞！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('umbrella') != undefined,
                    text: [
                        "You're an angel!",
                        "¡Eres un ángel!",
                    "你真是天使！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('umbrella') != undefined,
                    text: [
                        "Here, take a Union Ticket, a promise is a promise.",
                        "Toma un Ticket Union, lo prometido es deuda.",
                    "来，拿一张联合券，承诺就是承诺。"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('umbrella'));
                    },
                    state: 2
                }
            ],
            [
                {
                    text: [
                        "Thanks again for the umbrella.",
                        "Gracias otra vez por el paraguas.",
                        "再次感谢你的伞。"
                    ]
                }
            ]
        ]
    },
    girlPewterCity: {
        name: ['Girl', 'Niña', '女孩'],
        state: savedStates.girlPewterCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "My favorite Pokémon is Butterfree!",
                        "¡Mi Pokémon favorito es Butterfree!",
                        "我最喜欢的宝可梦是巴大蝴！"
                    ]
                },
                {
                    text: [
                        "It's gentle, elegant, and it flies.",
                        "Es gentil, elegante y vuela.",
                    "它温柔、优雅，还会飞。"
                    ]
                },
                {
                    text: [
                        "If I had one, I would be the happiest girl in the world.",
                        "Si tuviera uno, sería la niña más feliz del mundo.",
                    "如果我有一只，我会是世界上最幸福的女孩。"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('BUTTERFREE'),
                    text: [
                        "Oh!",
                        "¡Oh!",
                    "哦！"
                    ],
                },
                {
                 condition: () => main.team.isPokemonInTeam('BUTTERFREE'),
                    text: [
                        "Is that your Butterfree?",
                        "¿Es ese tu Butterfree?",
                    "那是你的巴大蝶吗？"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('BUTTERFREE'),
                    text: [
                        "It's beautiful.",
                        "Es precioso.",
                    "它真漂亮。"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('BUTTERFREE'),
                    text: [
                        "I wish it were mine!",
                        "¡Me encantaría que fuera mío!",
                    "真希望它是我的！"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('BUTTERFREE'),
                    text: [
                        "I'll give you this Calcium so your Butterfree can be even stronger.",
                        "Te regalo este Calcio para que tu Butterfree sea aún más fuerte.",
                    "我给你这个钙片，让你的巴大蝶变得更强。"
                    ],
                    reward: {
                        item: item.consumable.calcium,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Thanks for showing me your Butterfree.",
                        "Gracias por mostrarme a tu Butterfree.",
                        "谢谢你让我看你的巴大蝴。"
                    ]
                },
                {
                    text: [
                        "Keep taking good care of it, okay?",
                        "Sigue cuidándolo mucho, ¿vale?",
                    "继续好好照顾它，好吗？"
                    ]
                }
            ]
        ]
    },
    vesselAPewterCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAPewterCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Calcium！",
                        "¡Hay x1 Calcio dentro la vasija!",
                    "容器里有x1 特攻增强剂！"
                    ],
                    reward: {
                        item: item.consumable.calcium,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBPewterCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBPewterCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x4 Max Revive！",
                        "¡Hay x4 Revivir Máximo dentro la vasija!",
                    "容器里有x4 活力块！"
                    ],
                    reward: {
                        item: item.consumable.maxRevive,
                        amount: 4
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCPewterCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCPewterCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "There is 1 Bold Mint inside the vessel!",
                        "¡Hay x1 Menta osada dentro la vasija!",
                    "容器里有1 大胆薄荷！"
                    ],
                    reward: {
                        item: item.consumable.boldMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //Pallet Town
    signboardPalletTown: {
       name: ['Pallet Town', 'Pueblo Paleta', '真新镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "White, the color of the start.",
                        "Blanco, el color de partida.",
                    "白色，起点的颜色。"
                    ],
                },
            ]
        ]
    },
    signPalletTown: {
        name: ['Pallet Town', 'Pueblo Paleta', '真新镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The beginning of every great adventure... unless you came from Johto, of course.",
                        "Inicio de toda gran aventura... a menos que ya vinieras de Johto, claro.",
                    "每一段伟大冒险的开始……当然，除非你来自城都。"
                    ]
                },
            ]
        ]
    },
    professorOak: {
        name: ['Receptionist', 'Secretaría', '接待员'],
        state: savedStates.professorOak ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hello!",
                        "¡Hola!",
                        "你好！"
                    ]
                },
                {
                    text: [
                        "Professor Oak is busy right now.",
                        "El Profesor Oak está ocupado ahora mismo.",
                        "大木博士现在很忙。"
                    ]
                },
                {
                    text: [
                        "Where did he go?",
                        "¿Dónde ha ido?",
                        "他去哪了？"
                    ]
                },
                {
                    text: [
                        "Um... no... I don't know.",
                        "Em... no... no lo sé.",
                        "呃……不……我不知道。"
                    ]
                },
                {
                    text: [
                        "This...",
                        "Esto...",
                        "这个……"
                    ]
                },
                {
                    text: [
                        "Sorry, you have to leave.",
                        "Lo siento, tienes que irte.",
                    "抱歉，你必须离开。"
                    ]
                }
            ],
            [
                {
                    text: [
                        "Hello!",
                        "¡Hola!",
                        "你好！"
                    ]
                },
                {
                    text: [
                        "Are you here to see Professor Oak?",
                        "¿Vienes a ver al Profesor Oak?",
                        "你是来见大木博士的吗？"
                    ]
                },
                {
                    text: [
                        "I'll notify him, give me a moment.",
                        "Voy a avisarle, dame un momento.",
                    "我会通知他的，稍等一下。"
                    ]
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                    cb: () => { main.npcs['professorOak'].name = ['Oak', 'Oak', '大木博士'] }
                },
                {
                    text: [
                        "Ah, hello!",
                        "¡Ah, hola!",
                    "啊，你好！"
                    ]
                },
                {
                    text: [
                        "Welcome to my laboratory.",
                        "Bienvenido a mi laboratorio.",
                        "欢迎来到我的研究所。"
                    ]
                },
                {
                    text: [
                        "I'm always happy to see a young Trainer eager to learn.",
                        "Siempre me alegra ver a un joven Entrenador con ganas de aprender.",
                        "我总是很高兴看到渴望学习的年轻训练家。"
                    ]
                },
                {
                    text: [
                        "Can I help you with something related to the Pokédex, or perhaps Pokémon breeding?",
                        "¿Puedo ayudarte con algo relacionado con la Pokédex, o quizás con la crianza de Pokémon?",
                    "有什么关于宝可梦图鉴或者宝可梦培育的事情需要我帮忙吗？"
                    ]
                },
                {
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    text: [
                        "Wait a moment...",
                        "Espera un momento...",
                        "等一下……"
                    ]
                },
                {
                    text: [
                        "You... you have read my diary, haven't you?",
                        "¿Tú... tú has leído mi diario, verdad?",
                    "你……你看了我的日记，对吧？"
                    ]
                },
                {
                    text: [
                        "So you already know.",
                        "Entonces ya lo sabes.",
                        "那么你已经知道了。"
                    ]
                },
                {
                    text: [
                        "The giant Magnemite.",
                        "El Magnemite gigante.",
                        "巨大的小磁怪。"
                    ]
                },
                {
                    text: [
                        "Mewtwo.",
                        "Mewtwo.",
                        "超梦。"
                    ]
                },
                {
                    text: [
                        "The failed plan.",
                        "El plan fallido.",
                        "失败的计划。"
                    ]
                },
                {
                    text: [
                        "You shouldn't have found out... but it's too late now.",
                        "No deberías haberte enterado... pero ya es tarde.",
                        "你不该发现的……但现在太晚了。"
                    ]
                },
                {
                    text: [
                        "Listen carefully: you have no chance against him.",
                        "Escúchame bien: no tienes ninguna posibilidad contra él.",
                        "仔细听好：你对他没有任何胜算。"
                    ]
                },
                {
                    text: [
                        "It's useless... he controls more than you imagine.",
                        "Es inútil... controla más de lo que imaginas.",
                        "没用的……他控制的比你想象的更多。"
                    ]
                },
                {
                    text: [
                        "But if even so... if you still want to face him...",
                        "Pero si aún así... si aún así quieres enfrentarlo...",
                        "但即便如此……如果你仍然想面对他……"
                    ]
                },
                {
                    text: [
                        "Head to Route 12.",
                        "Dirígete hacia la Ruta 12.",
                        "前往12号道路。"
                    ]
                },
                {
                    text: [
                        "Take this, it's an Acces Pass.",
                        "Toma esto, es un Pase Acreditado.",
                    "拿着这个，这是通行证。"
                    ],
                    reward: {
                        item: item.key.accessPass,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Route 12 is currently blocked by the police.",
                        "La Ruta 12 está actualmente bloqueada por la policía.",
                    "12号道路目前被警察封锁了。"
                    ],
                },
                {
                    text: [
                        "The accreditation will allow you to pass without questions.",
                        "La acreditación te permitirá cruzar sin que hagan preguntas.",
                    "这张通行证可以让你畅通无阻地通过。"
                    ],
                    cb: () => { main.npcs['professorOak'].name = ['Receptionist', 'Secretaría', '接待员'] },
                    state: 2
                },
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
]
                }
            ]
        ]
    },
    housePalletTown: {
        name: [`House`, `Casa`, `房屋`],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "There's no one home...",
                        "No hay nadie en casa...",
                    "家里没人……"
                    ],
                },
            ]
        ]
    },
    // CinnabarIsland
    signboardCinnabarIsland: {
        name: ['Cinnabar Island', 'Isla Canela', '红莲岛'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The fierce city of burning desire.",
                        "La feroz ciudad del ardiente deseo.",
                        "燃烧欲望的激烈城市。"
                    ]
                },
            ]
        ]
    },
    signboardGymCinnabarIsland: {
        name: ['Cinnabar Island Gym', 'Gimnasio Pokémon de Isla Canela', '红莲道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Blaine's Gym, the master of puzzles.",
                        "Gimnasio de Blaine, el maestro de los acertijos.",
                    "夏伯的道馆，谜题大师。"
                    ],
                },
            ]
        ]
    },

    // Viridian city
    signboardViridianCity: {
        name: ['Viridian City', 'Ciudad Verde', '常磐市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The eternally green city.",
                        "La ciudad eternamente verde.",
                        "永恒绿色的城市。"
                    ]
                },
            ]
        ]
    },
    signboardGymViridianCity: {
        name: ['Viridian City Gym', 'Gimnasio Pokémon de Ciudad Verde', '常磐道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Giovanni's Gym.",
                        "Gimnasio de Giovanni.",
                    "坂木的道馆。"
                    ],
                },
            ]
        ]
    },
    signViridianCity: {
        name: ['Public garden', 'Jardín público', '公共花园'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Don't step on the flowers. We don't want another incident with the traumatized Sunflora.",
                        "No pises las flores. No queremos otro incidente con el Sunflora traumatizado.",
                        "不要踩花。我们不想再发生向日葵花怪被吓到的事件了。"
                    ]
                },
            ]
        ]
    },
    vesselViridianCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselViridianCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x4 Rare Candy！",
                        "¡Hay x4 Carameloraro dentro la vasija!",
                    "容器里有x4 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 4
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    philosopherViridianCity: {
        name: ['Philosopher', 'Filósofa', '哲学家'],
        state: savedStates.philosopherViridianCity ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "How tall is a Rattata that can't be seen?",
                        "¿Cuánto mide un Rattata que no se ve?",
                        "看不见的小拉达有多高？"
                    ]
                },
                {
                    text: [
                        "What sounds louder, a Pokéball that doesn't fall... or the fear of throwing it?",
                        "¿Qué suena más fuerte, una Pokéball que no cae... o el miedo a lanzarla?",
                    "什么声音更大，一个不落下的精灵球……还是投出它的恐惧？"
                    ]
                },
                {
                    text: [
                        "True evolution is when you understand why not all flowers bloom at the same time.",
                        "La verdadera evolución es cuando entiendes por qué no todas las flores florecen al mismo tiempo.",
                        "真正的进化是当你明白为什么不是所有花都同时开放。"
                    ]
                },
                {
                    text: [
                        "Take this Careful Mint.",
                        "Toma esta Menta cauta.",
                    "拿着这个慎重薄荷。"
                    ],
                    reward: {
                        item: item.consumable.carefulMint,
                        amount: 1
                    },
                },
                {
                    text: [
                        "It's not for you, it's for the Pokémon that doesn't know who it is yet.",
                        "No es para ti, es para el Pokémon que aún no sabe quién es.",
                    "这不是给你的，是给那只还不知道自己是谁的宝可梦的。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "If a Ditto transforms into itself... is it still a Ditto?",
                        "¿Si un Ditto se transforma en sí mismo... sigue siendo un Ditto?",
                        "如果百变怪变成自己……它还是百变怪吗？"
                    ]
                },
                {
                    condition: () => main.team.isTypeInTeam('fire'),
                    text: [
                        "Wow, you have a Fire-type Pokémon on your team.",
                        "Vaya, llevas un Pokémon tipo fuego en tu equipo.",
                    "哇，你的队伍里有火系宝可梦。"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('fire'),
                    text:  [
                        "Can I use it as a lighter?",
                        "¿Me lo dejás usar de mechero?",
                    "我能拿它当打火机吗？"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('fire'),
                    text: [
                        "Take this TM110 Smoke Screen.",
                        "Toma esta MT110 Pantalla humo.",
                    "拿着这个招式机110 烟幕。"
                    ],
                    reward: {
                        item: item.tm.tm110, 
                        amount: 2
                    },
                    state: 2
                }
            ], 
            [
                {
                    text: [
                        "Relax, I won't need the TM Smoke Screen.",
                        "Tranquilo, yo no voy a necesitar la MT Pantalla humo.",
                    "放心，我不需要烟幕招式学习器。"
                    ]
                },
            ],
            [
               {
                    text: [
                        "Hey...",
                        "Ey...",
                        "嘿……"
                    ]
                },
                {
                    text: [
                        "Does that smell come from your backpack or from my hallucinations?",
                        "¿Ese olor viene de tu mochila o de mis alucinaciones?",
                        "那味道是你背包里的还是我幻觉里的？"
                    ]
                },
                {
                    text: [
                        "Are you carrying wee... herb?",
                        "¿Llevas... hierba?",
                        "你带着……草药？"
                    ]
                },
                {
                    text: [
                        "I'm sure the Bike Guy gave it to you.",
                        "Seguro que te la ha dado el Señor Bicis.",
                        "肯定是那个自行车大叔给你的。"
                    ]
                },
                {
                    text: [
                        "Look, if you give me a little, I'll give you something I once found lying on Orchid City beach.",
                        "Mira, si me pasas un poquito, te doy algo que encontré una vez tirado en la playa de Ciudad Orquídea.",
                    "听着，如果你分我一点，我就给你一个我曾在玉虹市海滩捡到的东西。"
                    ]
                },
                {
                    text: [
                        "Deal!",
                        "¡Trato!",
                    "成交！"
                    ],
                    reward: {
                        item: item.key.key3,
                        amount: 1
                    },
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('herb'));
                    }
                },
                 {
                    text: [
                        "It's a key.",
                        "Es una llave.",
                        "这是一把钥匙。"
                    ]
                },
                {
                    text: [
                        "I'm sure it opens something strange...",
                        "Seguro que abre algo raro...",
                    "我敢肯定它能打开什么奇怪的东西……"
                    ],
                    state: 4
                }
            ],
            [
                {
                    text: [
                        "Thanks for the herb...",
                        "Gracias por la hierba...",
                        "谢谢你的草药……"
                    ]
                },
                {
                    text: [
                        "Now I really hear the Doduos singing!",
                        "¡Ahora sí que oigo cantar a los Doduos!",
                        "现在我终于听到嘟嘟们在唱歌了！"
                    ]
                },
            ]
        ]
    },
    oldManViridianCity: {
        name: ['Old man', 'Anciano', '老人'],
        state: savedStates.oldManViridianCity ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Do you notice the heavy atmosphere in this town?",
                        "¿Notas el ambiente denso en este pueblo?",
                        "你注意到这个小镇的沉重气氛了吗？"
                    ]
                },
                {
                    text: [
                        "People walk slower than usual.",
                        "La gente anda más lenta de lo normal.",
                        "人们走得比平时慢。"
                    ]
                },
                {
                    text: [
                        "You know what I mean?",
                        "¿Sabes a lo que me refiero?",
                        "你懂我的意思吗？"
                    ]
                },
                {
                    text: [
                        "Everything smells like burnt Oddish.",
                        "Todo huele a Oddish chamuscado.",
                        "到处都是烧焦走路草的味道。"
                    ]
                },
                {
                    text: [
                        "There are Bellsprouts here that roll leaves with millimeter precision.",
                        "Aquí hay Bellsprouts me que enrollan hojas con precisión milimétrica.",
                        "这里的喇叭芽能把叶子卷得精确到毫米。"
                    ]
                },
                {
                    text: [
                        "To be more direct, I'm talking about my neighbor.",
                        "Para ser mas directos, hablo de mi vecina.",
                    "更直接地说，我说的是我邻居。"
                    ]
                },
                {
                    text: [
                        "Let's just say she likes making incense with Bayleef leaves.",
                        "Digamos que le gusta hacer inciensos con hojas de Bayleef.",
                        "只能说，她喜欢用月桂叶做熏香。"
                    ]
                }
            ],
        ]
    },
    // Saffron city
    signboardSaffronCity: {
        name: ['Saffron City', 'Ciudad Azafrán', '金黄市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The golden land of commerce.",
                        "La tierra dorada del comercio.",
                    "金色的商业之都。"
                    ],
                },
            ]
        ]
    },
    signboardGymSaffronCity: {
        name: ['Saffron City Gym', 'Gimnasio Pokémon de Ciudad Azafrán', '金黄道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Sabrina's Gym, genius of Psychic Pokémon.",
                        "Gimnasio de Sabrina, genio de los Pokémon psíquicos.",
                    "娜姿的道馆，超能力宝可梦的天才。"
                    ]
                },
            ]
        ]
    },
    mechanicSaffronCity: {
        name: ['Mechanic', 'Mecánico', '机械师'],
        state: savedStates.mechanicSaffronCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey, careful!",
                        "¡Eh, cuidado!",
                    "嘿，小心！"
                    ]
                },
                {
                    text: [
                        "You're stepping on a spare Magnemite screw.",
                        "Estás pisando una tuerca de repuesto de Magnemite.",
                        "你踩到一个小磁怪的备用螺丝了。"
                    ]
                },
                {
                    text: [
                        "I work fixing broken Magnetons at Silph Co.",
                        "Trabajo arreglando Magnetons averiados de Silph S.A.",
                        "我在西尔佛公司修理坏掉的三合一磁怪。"
                    ]
                },
                {
                    text: [
                        "I'm no longer surprised when one explodes from stress.",
                        "Ya ni me sorprende cuando uno explota por estrés.",
                        "当一个因为压力爆炸时我已经不惊讶了。"
                    ]
                },
                {
                    text: [
                        "I took this part from a Porygon that tried to fuse with a coffee maker.",
                        "Esta pieza la saqué de un Porygon que intentó fusionarse con una cafetera.",
                        "这个零件是我从一个试图和咖啡机融合的多边兽身上取下来的。"
                    ]
                },
                {
                    text: [
                        "Here, it's useless, but I'm sure you love to keep junk.",
                        "Toma, no sirve para nada, pero seguro que te encanta guardar porquerías.",
                    "给你，这玩意儿没什么用，但我肯定你喜欢收藏垃圾。"
                    ],
                    reward: {
                        item: item.key.scrap,
                        amount: 1
                    },
                    state: 1
                },
                {
                    text: [
                        "One person's trash is another's treasure.",
                        "La basura de uno es el tesoro de otro.",
                    "一个人的垃圾是另一个人的宝藏。"
                    ],
                },
            ],
            [
                {
                    text:  [
                        "If you ever see a Voltorb with screws, run.",
                        "Si alguna vez ves a un Voltorb con tuercas, corre.",
                    "如果你看到带螺丝的霹雳电球，快跑。"
                    ]
                }
            ]
        ]
    },
    mayorSaffronCity: {
        name: ['Mayor', 'Alcalde', '镇长'],
        state: savedStates.mayorSaffronCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to Saffron City, the true engine of progress in Kanto!",
                        "¡Bienvenido a Ciudad Azafrán, el verdadero motor del progreso en Kanto!",
                    "欢迎来到金黄市，关都地区进步的真正引擎！"
                    ],
                },
                {
                    text: [
                        "Here, under my leadership, we've reached levels of development other cities can only dream of.",
                        "Aquí, bajo mi liderazgo, hemos alcanzado niveles de desarrollo que otras ciudades solo pueden soñar.",
                    "在这里，在我的领导下，我们达到了其他城市只能梦想的发展水平。"
                    ],
                },
                {
                    text: [
                        "While some places stagnate, we create jobs and innovation.",
                        "Mientras algunas localidades se quedan estancadas, nosotros creamos empleo e innovación.",
                    "当其他地方停滞不前时，我们创造就业和创新。"
                    ],
                },
                {
                    text: [
                        "It's no coincidence that Saffron City is the envy of every serious and worthy Trainer.",
                        "No es casualidad que Ciudad Azafrán sea la envidia de todo Entrenador serio y digno.",
                    "金黄市成为每一位认真且值得尊敬的训练家羡慕的对象，绝非偶然。"
                    ],
                },
                {
                    text: [
                        "And if someone thinks otherwise, they must be blind.",
                        "Y si alguien piensa lo contrario, debe estar ciego.",
                    "如果有人不这么认为，那他们一定是瞎了。"
                    ],
                },
                {
                    text:  [
                        "Everyone in Cerulean City is crazy.",
                        "En Ciudad Celeste están todos locos.",
                    "华蓝市的人全都疯了。"
                    ],
                },
                {
                    text: [
                        "Viridian City... you don't want to know why they named it that.",
                        "Ciudad Verde... no quieras saber porque le pusieron ese nombre.",
                    "常青市……你不会想知道它为什么叫这个名字的。"
                    ],
                },
                {
                    text: [
                        "Look at Pewter City, there live some starving folks.",
                        "Mira Ciudad Plateada, ahí viven unos muertos de hambre.",
                    "看看深灰市，那里住着些挨饿的家伙。"
                    ],
                },
                {
                    text: [
                        "And in Cinnabar Island... does anyone even live there?",
                        "Y en Isla Canela... ¿siquiera vive alguien ahí?",
                    "还有红莲岛……那里还有人住吗？"
                    ],
                },
                {
                    text: [
                        "But here, in Saffron, life is different.",
                        "Pero aquí, en Azafrán, la vida es diferente.",
                    "但在这里，在金黄市，生活就是不一样。"
                    ],
                },
                {
                    text: [
                        "This is progress, order, and opportunity.",
                        "Esto es progreso, orden y oportunidades.",
                    "这就是进步、秩序和机遇。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Remember, Saffron City will always be here for Trainers who seek greatness.",
                        "Recuerda, Ciudad Azafrán siempre estará aquí para los Entrenadores que buscan grandeza.",
                    "记住，金黄市永远为追求卓越的训练家敞开大门。"
                    ]
                },
            ]
        ]
    },
    tenantSaffronCity: {
        name: ['Tenant', 'Inquilina', '租客'],
        state: savedStates.tenantSaffronCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I rent this apartment, and I swear I can't make ends meet...",
                        "Vivo de alquiler en este piso y te juro que no llego a fin de mes...",
                    "我租了这间公寓，我发誓我入不敷出……"
                    ],
                },
                {
                    text: [
                        "With the prices set by the mayor, anyone goes broke before they can train properly.",
                        "Con los precios que pone el alcalde, cualquiera se arruina antes de poder entrenar bien.",
                    "市长定的物价，谁都还没好好训练就破产了。"
                    ],
                },
                {
                    text: [
                        "He says there's progress, but my wallet doesn't feel it at all.",
                        "Dice que hay progreso, pero mi bolsillo no lo nota para nada.",
                    "他说有进步，但我的钱包完全没感觉到。"
                    ],
                },
                {
                    text: [
                        "If the mayor cares so much about the city, why doesn't he start by lowering the rents?",
                        "Si el alcalde se preocupa tanto por la ciudad, ¿por qué no empieza por bajar los alquileres?",
                    "如果市长这么关心城市，为什么不从降低租金开始呢？"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Rent is going up again.",
                        "Otra vez con la subida del alquiler.",
                    "租金又涨了。"
                    ],
                },
                {
                    text: [
                        "I can already see myself selling my Pokémon to pay.",
                        "Ya me veo vendiendo a mis Pokémon para pagar.",
                    "我已经能想象自己卖掉宝可梦来付房租了。"
                    ],
                },
                {
                    text: [
                        "I should catch a Meowth with Pay Day.",
                        "Debería capturar un Meowth con Día de pago.",
                    "我应该抓一只会聚宝功的喵喵。"
                    ],
                },
            ]
        ]
    },
    explorerSaffronCity: {
        name: ['Explorer', 'Explorador', '探险家'],
        state: savedStates.explorerSaffronCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Tell me, traveler... have you ever heard of the Apacheta ritual?",
                        "Dime, viajero... ¿has oído hablar alguna vez del ritual Apacheta?",
                    "告诉我，旅行者……你听说过阿帕切塔仪式吗？"
                    ],
                },
                {
                    text: [
                        "If you're looking for the 5 Lithic Stones, I can reveal where each one is hidden.",
                        "Si estás buscando las 5 Piedras Líticas, puedo revelarte dónde está escondida cada una.",
                    "如果你在找5块石碑碎片，我可以告诉你每一块藏在哪里。"
                    ],
                },
                {
                    text: [
                        "In Johto, one rests inside a locked box with a code near Route 45... the answer is in the Lithic Forest.",
                        "En Johto, hay una dentro de una caja cerrada con un código cerca de la Ruta 45.",
                    "在城都，一块藏在45号道路附近一个带密码的上锁箱子里……答案在石碑森林里。"
                    ],
                },
                {
                    text: [
                        "Another lies in Johto as well, tucked away inside an ancient vessel within a secret cave... search around Ecruteak City.",
                        "Hay otra en Johto, escondida dentro de una vasija en una cueva secreta... busca por Ciudad Iris",
                    "另一块也在城都，藏在一个秘密洞穴的古老容器里……在圆朱市附近找找。"
                    ],
                },
                {
                    text: [
                        "In Kanto, one is inside a mailbox, north of Cerulean City.",
                        "En Kanto, una está dentro de un buzón, al norte de Ciudad Celeste.",
                    "在关都，一块藏在华蓝市北边的一个信箱里。"
                    ],
                },
                {
                    text: [
                        "As for the fourth... only those who conquer the Pokémon League may claim it.",
                        "Para la cuarta, derrota la Liga Pokémon.",
                    "至于第四块……只有征服宝可梦联盟的人才能拿到。"
                    ],
                },
                {
                    text: [
                        "And the fifth one... you just need to talk to me!",
                        "Y la quinta... ¡sólo necesitas hablar conmigo!",
                    "而第五块……你只需要跟我说就行！"
                    ],
                },
                {
                    text:  [
                        "Take this Lithic Stone!",
                        "¡Toma esta Piedra Lítica!",
                    "拿着这块石碑碎片！"
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[9].progress[0]++;
                        main.player.achievement[10].progress[0]++;
                        if (main.player.achievement[9].progress[0] == main.player.achievement[9].progress[1]) {
                            main.player.achievement[9].status = true;
                            main.player.unlockAchievement(9);
                        }
                    },
                    state: 1
                },
                {
                    text: [
                        "When you get the 5 stones, look for the Apacheta on Route 45.",
                        "Cuando consigas las 5 piedras, busca la Apacheta en la ruta 45.",
                    "集齐5块碎片后，去45号道路找阿帕切塔。"
                    ],
                },
            ],
            [
                {
                    text: [
                        "Tell me, traveler... have you ever heard of the Apacheta ritual?",
                        "Dime, viajero... ¿has oído hablar alguna vez del ritual Apacheta?",
                    "告诉我，旅行者……你听说过阿帕切塔仪式吗？"
                    ],
                },
                {
                    text: [
                        "If you're looking for the 5 Lithic Stones, I can reveal where each one is hidden.",
                        "Si estás buscando las 5 Piedras Líticas, puedo revelarte dónde está escondida cada una.",
                    "如果你在找5块石碑碎片，我可以告诉你每一块藏在哪里。"
                    ],
                },
                {
                    text: [
                        "In Johto, one rests inside a locked box with a code near Route 45... the answer is in the Lithic Forest.",
                        "En Johto, hay una dentro de una caja cerrada con un código cerca de la Ruta 45.",
                    "在城都，一块藏在45号道路附近一个带密码的上锁箱子里……答案在石碑森林里。"
                    ],
                },
                {
                     text: [
                        "Another lies in Johto as well, tucked away inside an ancient vessel within a secret cave... search around Ecruteak City.",
                        "Hay otra en Johto, escondida dentro de una vasija en una cueva secreta... busca por Ciudad Iris",
                    "另一块也在城都，藏在一个秘密洞穴的古老容器里……在圆朱市附近找找。"
                    ],
                },
                {
                    text: [
                        "In Kanto, one is inside a mailbox, north of Cerulean City.",
                        "En Kanto, una está dentro de un buzón, al norte de Ciudad Celeste.",
                    "在关都，一块藏在华蓝市北边的一个信箱里。"
                    ],
                },
                {
                    text: [
                        "As for the fourth... only those who conquer the Pokémon League may claim it.",
                        "Para la cuarta, derrota la Liga Pokémon.",
                    "至于第四块……只有征服宝可梦联盟的人才能拿到。"
                    ],
                },
                {
                    text: [
                        "And I already gave you the fifth one!",
                        "¡Y la quinta ya te la di!",
                    "我已经把第五块给你了！"
                    ],
                },
                {
                    text: [
                        "When you get the 5 stones, look for the Apacheta on Route 45.",
                        "Cuando consigas las 5 piedras, busca la Apacheta en la ruta 45.",
                    "集齐5块碎片后，去45号道路找阿帕切塔。"
                    ],
                },
            ]
        ]
    },
    radioHostSaffronCity: {
        name: ['Radio Host', 'Locutor ', '电台主持人'],
        state: savedStates.radioHostSaffronCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Why do they never let me talk on the air?",
                        "¿Porque nunca me dejan hablar al aire?",
                    "他们为什么从来不让我上节目？"
                    ],
                },
                {
                    text: [
                        "They say I sound like a Jigglypuff with a sinus infection.",
                        "Dicen que tengo voz de Jigglypuff con sinusitis.",
                    "他们说我听起来像得了鼻窦炎的胖丁。"
                    ],
                },
                {
                    text: [
                        "But I have the soul of a presenter!",
                        "¡Pero yo tengo alma de presentador!",
                    "但我有主持人的灵魂！"
                    ],
                },
                {
                    text: [
                        "I've been waiting for my moment for 7 years.",
                        "Llevo 7 años esperando mi momento.",
                    "我已经等这一刻等了7年。"
                    ],
                },
                {
                    text: [
                        "An intro, a spot... even just one phrase!",
                        "Una intro, una cuña... ¡una frase siquiera!",
                    "一个开场，一个镜头……哪怕只有一句话！"
                    ],
                },
                {
                    text: [
                        "Anyway... thanks for listening to me.",
                        "En fin... gracias por escucharme.",
                    "总之……谢谢你听我说话。"
                    ],
                },
                {
                    text: [
                        "Here, take TM84 Hyper Voice, I bought it for myself but I can't learn it...",
                        "Ten la MT84 Vozarrón, me la compré para mi, pero no puedo aprenderla...",
                    "来，收下TM84。"
                    ],
                    reward: {
                        item: item.tm.tm84, 
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Aaaaaaaaaooooooooeeeeeeeeeeeeuuuuuu...",
,
                        "啊啊啊啊啊啊啊啊哦哦哦哦哦哦哦哦呃呃呃呃呃呃呃呃呜呜呜呜……",
                        "啊啊啊啊啊啊啊啊哦哦哦哦哦哦哦哦呃呃呃呃呃呃呃呃呜呜呜呜……",
                    ],
                },
                {
                    text: [
                        "Sorry, I'm tuning my voice.",
                        "Disculpa, estoy afinando la voz.",
                    "抱歉，我在调音。"
                    ],
                },
            ]
        ]
    },
    // Celadon city
    signboardACeladonCity: {
        name: ['Celadon City', 'Ciudad Azulona', '玉虹市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The great iridescent city.",
                        "La gran ciudad irisada.",
                    "伟大的彩虹之城。"
                    ],
                },
            ]
        ]
    },
    signboardBCeladonCity: {
        name: ['Celadon City Casino', 'Casino de Ciudad Azulona', '玉虹游戏角'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Play and win great prizes!",
                        "¡Juega y gana grandes premios!",
                        "来玩赢取大奖吧！"
                    ],
                },
            ]
        ]
    },
    signboardGymCeladonCity: {
        name: ['Celadon City Gym', 'Gimnasio Pokémon de Ciudad Azulona', '玉虹道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Erika's Gym, princess and nature lover.",
                        "Gimnasio de Erika, princesa amante de la naturaleza.",
                    "莉佳的道馆，自然爱好者的公主。"
                    ],
                },
            ]
        ]
    },
    addictCeladonCity: {
        name: ['Addict', 'Adicto', '赌徒'],
        state: savedStates.addictCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "The roulette is my life!",
                        "¡La ruleta es mi vida!",
                    "轮盘就是我的命！"
                    ],
                },
                {
                    text: [
                        "I spin and spin hoping for luck...",
                        "Giro y giro esperando la suerte...",
                    "我不停地转啊转，盼着好运……"
                    ],
                },
                {
                    text: [
                        "I've lost more chips than I can count, but I always come back for more.",
                        "He perdido más fichas de las que puedo contar, pero siempre vuelvo por más.",
                    "我输掉的筹码数都数不清，但我总是回来再试。"
                    ],
                },
                {
                    text: [
                        "Want some advice?",
                        "¿Quieres un consejo?",
                    "想听点建议吗？"
                    ],
                },
                {
                    text: [
                        "Never bet it all...",
                        "Nunca apuestes todo...",
                    "永远别全押……"
                    ],
                },
                {
                    text: [
                        "Because you won't be able to keep playing!",
                        "¡Porqué no podrás seguir jugando!",
                    "因为你输了就没法继续玩了！"
                    ],
                },
            ],
        ]
    },
    intellectualCeladonCity: {
        name: ['Intellectual', 'Cerebrito', '知识分子'],
        state: savedStates.intellectualCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "They don't let me into the casino because I'm too observant.",
                        "No me dejan entrar al casino por ser demasiado observador.",
                    "他们不让我进赌场，因为我观察力太敏锐了。"
                    ],
                },
                {
                    text: [
                        "I'll tell you a secret...",
                        "Te contaré un secreto...",
                    "我告诉你一个秘密……"
                    ],
                },
                {
                    text: [
                        "The roulette isn't as random as it seems.",
                        "La ruleta no es tan aleatoria como parece.",
                    "轮盘并不像看起来那么随机。"
                    ],
                },
                {
                    text: [
                        "48% of the time it lands on x0, 26% on x1, 13% on x2, 6% on x3, 4% on x4, and 3% on x5.",
                        "El 48% de las veces cae en el x0, el 26% en el x1, el 13% en el x2, el 6% en el x3, el 4% en el x4 y el 3% en el x5.",
                    "48%的概率落在x0，26%落在x1，13%落在x2，6%落在x3，4%落在x4，3%落在x5。"
                    ],
                },
                {
                    text: [
                        "But if you have a Psychic-type Pokémon on your team, the chance of x0 drops to 33%, and the others increase by 3%.",
                        "Pero si llevas un Pokémon tipo Psíquico en tu equipo, la probabilidad del x0 baja al 33%, y los demás aumentan en un 3%.",
                    "但如果你的队伍中有超能力系宝可梦，x0的概率降到33%，其他各增加3%。"
                    ],
                },
                {
                    text: [
                        "With that advantage, winning chips is a piece of cake.",
                        "Con esa ventaja, ganar fichas es pan comido.",
                    "有了这个优势，赢筹码简直易如反掌。"
                    ],
                    cb: () => {
                        main.player.casinoHack = true;
                    }
                }
            ],
        ]
    },
    mathematicalCeladonCity: {
        name: ['Mathematical', 'Matemático', '数学家'],
        state: savedStates.mathematicalCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "My neighbor is convinced he can beat the roulette...",
                        "Mi vecino está convencido de que puede ganarle a la ruleta...",
                    "我邻居坚信自己能打败轮盘……"
                    ],
                },
                {
                    text: [
                        "How naive!",
                        "¡Qué ingenuo!",
                    "多么天真！"
                    ],
                },
                {
                    text: [
                        "I've explained a thousand times that the casino always wins in the end.",
                        "Le he explicado mil veces que el casino siempre gana al final.",
                    "我已经解释了一千遍，赌场最终总是赢的。"
                    ],
                },
                {
                    text: [
                        "The odds are against him, and There is no trick to change that.",
                        "Las probabilidades están en su contra, y no hay ningún truco que cambie eso.",
                    "赔率对他不利，而且没有什么花招能改变这一点。"
                    ],
                },
                {
                    text: [
                        "If you want to play, play for fun, don't expect to get rich.",
                        "Si quieres jugar, juega por diversión, no esperes hacerte rico.",
                    "如果你想玩，就为了乐趣而玩，别指望发财。"
                    ],
                },
            ],
        ]
    },
    cheaterCeladonCity: {
        name: ['Cheater', 'Estafador', '作弊者'],
        state: savedStates.cheaterCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I got caught cheating in the casino and they want to send me to jail.",
                        "Me pillaron haciendo trampas en el casino y quieren llevarme a la cárcel.",
                    "我在赌场作弊被抓了，他们要送我进监狱。"
                    ],
                },
                {
                    text: [
                        "But before that, I'm going to give you something that might help if you're one of us.",
                        "Pero antes de eso, te voy a dar algo que puede servirte si eres de los míos.",
                    "但在那之前，我给你一样东西，如果你是和我们一样的家伙的话，也许会帮到你。"
                    ],
                },
                {
                    text: [
                        "Here's TM146 Foul Play.",
                        "Aquí tienes la MT146 Juego sucio.",
                    "这是TM146 欺诈。"
                    ],
                    reward: {
                        item: item.tm.tm146,
                        amount: 1
                    }, 
                },
                {
                    text: [
                        "Be careful, don't end up like me.",
                        "Cuidado, no vayas a acabar como yo.",
                    "小心点，别落得跟我一样的下场。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "If you see me again, don't look at me with contempt... I'm just trying to survive in this cruel world.",
                        "Si me vuelves a ver, no me mires con desprecio... solo intento sobrevivir en este mundo cruel.",
                    "如果你再见到我，别用轻蔑的眼神看我……我只是在这残酷的世界里努力活下去。"
                    ],
                }
            ]
        ]
    },
    alchemistCeladonCity: {
        name: ['Alchemist', 'Alquimista', '炼金术师'],
        state: savedStates.alchemistCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Another day... another boiler exploding...",
                        "Otro día... otra caldera explotando...",
                    "又是一天……又炸了一个锅炉……"
                    ],
                },
                {
                    text: [
                        "I've been mixing Stardust with Zanama Berry Juice for 16 hours straight...",
                        "Llevo 16 horas seguidas mezclando Polvo Estelar con Zumo de Baya Zanama...",
                    "我已经连续16个小时把星砂和扎那玛果果汁混在一起了……"
                    ],
                },
                {
                    text: [
                        "I don't even have health insurance.",
                        "Ni seguro médico tengo.",
                    "我连健康保险都没有。"
                    ],
                },
                {
                    text: [
                        "Accept this load of Reusable Potion.",
                        "Acepta esta carga de Poción reutilizable.",
                    "收下这瓶可重复使用伤药的充能吧。"
                    ],
                    reward: {
                        item: item.key.potion,
                        amount: 1
                    },
                },
                {
                    text: [
                        "At least one of us is happy, right?",
                        "Almenos uno de los dos es feliz, ¿no?",
                    "至少我们中有一个人是开心的，对吧？"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Someday I'll leave this life... and open a bakery.",
                        "Algún día dejaré esta vida... y abriré una panadería.",
                    "总有一天我会离开这种生活……开一家面包店。"
                    ],
                },
                {
                    text: [
                        "Dough doesn't explode.",
                        "Las masas no explotan.",
                    "面团不会爆炸。"
                    ],
                },
                {
                    text: [
                        "Not usually.",
                        "Generalmente.",
                    "通常不会。"
                    ],
                },
            ]
        ]
    },
    fishmongerCeladonCity: {
        name: ['Fishmonger', 'Pescadero', '鱼贩'],
        state: savedStates.fishmongerCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Don't even think about casting your rod in this pond!",
                        "¡Ni se te ocurra lanzar la caña en este estanque!",
                    "想都别想在这个池塘里甩竿！"
                    ],
                },
                {
                    text: [
                        "The Pokémon here don't let themselves be caught...",
                        "Los Pokémon de aquí no se dejan atrapar...",
                    "这里的宝可梦可不会让自己被钓到……"
                    ],
                },
                {
                    text: [
                        "Yesterday I saw a Psyduck with a knife.",
                        "Ayer vi a un Psyduck con un cuchillo.",
                    "昨天我看到一只可达鸭拿着刀。"
                    ],
                },
                {
                    text: [
                        "A KNIFE!",
                        "¡UN CUCHILLO!",
                    "一把刀！"
                    ],
                },
                {
                    text: [
                        "Now I only sell the fish that jump out of the water voluntarily.",
                        "Ahora solo vendo el pescado que salta voluntariamente fuera del agua.",
                    "我现在只卖那些自愿跳出水面来的鱼。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Don't say I didn't warn you when a Slowking attacks you for invading its habitat.",
                        "No digas que no te avisé cuando un Slowking te ataque por invasión de su hábitat.",
                    "等呆呆王因为你入侵它的栖息地而攻击你的时候，别说我没警告过你。"
                    ],
                }
            ]
        ]
    },
    batherCeladonCity: {
        name: ['Bather', 'Bañista', '沐浴者'],
        state: savedStates.batherCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hello, hello!",
                        "¡Hola, hola!",
                    "你好，你好！"
                    ],
                },
                {
                    text: [
                        "Here in the pond, the Pokémon are super calm, you'll see.",
                        "Aquí en el estanque los Pokémon son súper tranquilos, ya verás.",
                    "在这个池塘里，宝可梦都超级平静，你看着吧。"
                    ],
                },
                {
                    text: [
                        "You can fish and swim without fear, it's like a natural spa.",
                        "Puedes pescar y nadar sin miedo, es como un spa natural.",
                    "你可以放心钓鱼和游泳，这里就像天然的水疗中心。"
                    ],
                },
                {
                    text: [
                        "A Psyduck greeted me with a smile!",
                        "¡Un Psyduck me saludó con una sonrisa!",
                    "一只可达鸭对我微笑了！"
                    ],
                },
                {
                    text: [
                        "The Pokémon only ask for a bit of respect and the occasional cookie.",
                        "Los Pokémon solo piden un poco de respeto y alguna que otra galleta.",
                    "宝可梦只要求一点点尊重和偶尔的饼干。"
                    ],
                },
                {
                    text: [
                        "The only fight I saw was between two Magikarp competing to see who could jump higher.",
                        "La única pelea que vi fue entre dos Magikarp que competían por quién saltaba más alto.",
                    "我看到的唯一一场战斗是两只鲤鱼王在比谁跳得更高。"
                    ],
                },
            ],
        ]
    },
    vesselACeladonCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselACeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Shiny Flask！",
                        "¡Hay x1 Frasco Variocolor dentro la vasija!",
                    "容器里有x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBCeladonCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBCeladonCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Rash Mint！",
                        "¡Hay x1 Menta alocada dentro la vasija!",
                    "容器里有x1 马虎薄荷！"
                    ],
                    reward: {
                        item: item.consumable.rashMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // Lavender Town
    signboardALavenderTown: {
        name: ['Lavender Town', 'Pueblo Lavanda', '紫苑镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The city that radiates nobility.",
                        "La ciudad que emana nobleza.",
                        "散发着高贵气息的城市。"
                    ]
                },
            ]
        ]
    },
    signboardBLavenderTown: {
        name: ['Pokémon Tower', 'Torre Pokémon', '宝可梦塔'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "A resting place for those who no longer battle.",
                        "Lugar de descanso para aquellos que ya no combaten.",
                        "不再战斗者的安息之地。"
                    ]
                },
            ]
        ]
    },
    archaeologistLavenderTown: {
        name: ['Archaeologist', 'Arqueólogo', '考古学家'],
        state: savedStates.archaeologistLavenderTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ah, the echoes of the past resonate strongly in this place...",
                        "Ah, los ecos del pasado resuenan con fuerza en este lugar...",
                    "啊，过去的回声在这个地方强烈地回荡……"
                    ]
                },
                {
                    text: [
                        "Many come to Lavender Town to mourn the dead.",
                        "Muchos vienen a Pueblo Lavanda a llorar a los muertos.",
                        "很多人来到紫苑镇哀悼逝者。"
                    ]
                },
                {
                    text: [
                        "I come to study them.",
                        "Yo vengo a estudiarlos.",
                        "我是来研究它们的。"
                    ]
                },
                {
                    text: [
                        "Among the rocks and memories, I found this Old Amber.",
                        "Entre las rocas y los recuerdos encontré este Ámbar viejo.",
                    "在岩石和记忆之中，我找到了这块秘密琥珀。"
                    ]
                },
                {
                   text: [
                        "Take it, maybe you'll give it a second life.",
                        "Tómalo, tal vez tú le des una segunda vida.",
                    "拿着吧，也许你能给它第二次生命。"
                    ],
                    reward: {
                        item: item.key.oldAmber,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "If one day you awaken that fossil, tell it that an old archaeologist believed in it.",
                        "Si algún día despiertas a ese fósil dile que un viejo arqueólogo creyó en él.",
                    "如果有一天你唤醒了那块化石，告诉它，一位老考古学家曾相信它。"
                    ]
                },
            ]
        ]
    },
    oldLadyLavenderTown: {
        name: ['Old Lady', 'Anciana', '老妇人'],
        state: savedStates.oldLadyLavenderTown ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Oh, young one, have you seen the mailman?",
                        "Oh, joven, ¿has visto al cartero?",
                    "哦，年轻人，你看到邮递员了吗？"
                    ],
                },
                {
                    text: [
                        "I'm waiting for a letter from my grandson...",
                        "Estoy esperando una carta de mi nieto...",
                    "我在等我孙子的信……"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('letterForAmalia') != undefined,
                    text: [
                        "That letter?",
                        "¿Esa carta?",
                    "那封信？"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('letterForAmalia') != undefined,
                    text: [
                        "Yes!",
                        "¡Sí!",
                    "是的！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('letterForAmalia') != undefined,
                    text: [
                        "I am Amalia!",
                        "¡Yo soy Amalia!",
                    "我就是阿玛利亚！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('letterForAmalia') != undefined,
                    text: [
                        "Let me see it!",
                        "¡Déjame verla!",
                    "让我看看！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('letterForAmalia') != undefined,
                    text:  [
                        "Thank you so much for bringing it to me.",
                        "Muchísimas gracias por traérmela.",
                    "非常感谢你把它带给我。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('letterForAmalia') != undefined,
                    text: [
                        "Here, this honey is all I have, but it's as sweet as the memory.",
                        "Toma, esta Miel es todo lo que tengo, pero es dulce como el recuerdo.",
                    "来，这蜂蜜是我仅有的东西，但它像回忆一样甜。"
                    ],
                    reward: {
                        item: item.key.honey,
                        amount: 1
                    },
                    cb: () => { 
                        main.inventory.removeItem(main.inventory.searchItem('letterForAmalia'));
                        main.npcs.richBoyOlivineCity.state = 2 
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Thanks again for the letter.",
                        "Gracias de nuevo por la carta.",
                    "再次感谢你送来的信。"
                    ],
                },
                {
                    text: [
                        "I wish he wrote more often... but well, at least I know he's still standing.",
                        "Ojalá escribiera más seguido... pero bueno, al menos sé que sigue en pie.",
                    "真希望他能多写信……不过至少我知道他还站得住脚。"
                    ],
                },
            ]
        ]
    },
    pokemonTower: {
        name: ['Pokémon Tower', 'Torre Pokémon', '宝可梦塔'],
        state: 0,
        dialogues: [
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.route.open({
                            type: 'routeBattle',
                            title: ['Pokémon Tower', 'Torre Pokémon', '宝可梦塔'],
                            background: './assets/images/background/battle10.png',
                            pokemon: [  
                                { name: 'gastly', minLevel: 64, maxLevel: 72, chance: 40 },
                                { name: 'haunter', minLevel: 64, maxLevel: 72, chance: 10 },
                                { name: 'misdreavus', minLevel: 64, maxLevel: 72, chance: 10 },
                                { name: 'cubone', minLevel: 64, maxLevel: 72, chance: 10 },
                                { name: 'marowak', minLevel: 64, maxLevel: 72, chance: 10 },
                                { name: 'murkrow', minLevel: 64, maxLevel: 72, chance: 5 },
                                { name: 'gengar', minLevel: 64, maxLevel: 72, chance: 5 },
                                { name: 'koffing', minLevel: 64, maxLevel: 72, chance: 5 },
                                { name: 'weezing', minLevel: 64, maxLevel: 72, chance: 5 },
                            ],
                        },);
                    },
                },
            ]
        ],
    },              
    // Cerulean city
    signboardCeruleanCity: {
        name: ['Cerulean City', 'Ciudad Celeste', '华蓝市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The flourishing city of water.",
                        "La ciudad floreciente de agua.",
                    "繁荣的水之城。"
                    ],
                },
            ]
        ]
    },
    signboardGymCeruleanCity: {
        name: ['Cerulean City Gym', 'Gimnasio Pokémon de Ciudad Celeste', '华蓝道馆'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Misty's Gym, the distorted mermaid.",
                        "Gimnasio de Misty, la sirena distorsionada.",
                    "小霞的道馆，扭曲的美人鱼。"
                    ],
                },
            ]
        ]
    },
    conspiracyGuyCeruleanCity: {
        name: ['Conspiracy Guy', 'Conspiranoico', '阴谋论者'],
        state: 0,
        dialogues: [
            [
               {
                    text: [
                        "Psst...",
,
                        "嘘……",
                        "嘘……",
                    ],
                },
                {
                    text: [
                        "Do you have a minute?",
                        "¿Tienes unos minutos?",
                    "你有空吗？"
                    ],
                },
                {
                    text: [
                        "I need to tell you the truth.",
                        "Necesito contarte la verdad.",
                    "我需要告诉你真相。"
                    ],
                },
                {
                    text: [
                        "The Pokémon League is controlled by a giant Magnemite.",
                        "La Liga Pokémon está controlada por un Magnemite gigante.",
                    "宝可梦联盟被一只巨大的小磁怪控制了。"
                    ],
                },
                {
                    text: [
                        "One.",
                        "Uno.",
                    "一只。"
                    ],
                },
                {
                    text: [
                        "Just one.",
                        "Solo uno.",
                    "就一只。"
                    ],
                },
                {
                    text: [
                        "And it floats over Kanto.",
                        "Y flota sobre Kanto.",
                    "而且它飘浮在关都上空。"
                    ],
                },
                {
                    text: [
                        "Everything is rigged.",
                        "Todo está amañado.",
                    "一切都是操纵好的。"
                    ],
                },
                {
                    text: [
                        "The Elite Four... elite because why?",
                        "El Alto Mando... ¿alto por qué?",
                    "四天王……凭什么称天王？"
                    ],
                },
                {
                    text: [
                        "What are they hiding in Mt. Silver, huh?",
                        "¿Qué esconden en el Monte Plateado, eh?",
                    "他们在白银山里藏了什么，嗯？"
                    ],
                },
                {
                    text: [
                        "HUH?!",
                        "¡¿EH?!",
                    "哈？！"
                    ],
                },
            ],
        ]
    },
    starGuardianCeruleanCity: {
        name: ['Explorer', 'Explorador', '探险家'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Have you been through the Cliff Edge Gate?",
                        "¿Has pasado por el Paso Acantilado?",
                    "你走过悬崖边大门吗？"
                    ],
                },
                {
                    text: [
                        "There are rumors that a Legendary Pokémon was hidden there.",
                        "Hay rumores de que un Pokémon Legendario fue escondido allí.",
                    "有传言说那里藏着一只传说宝可梦。"
                    ],
                },
            ],
        ]
    },
    saneNeighborCeruleanCity: {
        name: ['Calm Neighbor', 'Vecino Tranquilo', '安静的邻居'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The guy at the bike shop gives me a bad feeling...",
                        "El de la tienda de bicis me da mala espina...",
                    "自行车店的那个家伙让我有种不好的预感……"
                    ],
                },
                 {
                    text: [
                        "He's got lots of customers, but he doesn't sell a single bike.",
                        "Tiene muchos clientes pero no vende ni una bici.",
                    "他有很多顾客，但一辆自行车都没卖出去。"
                    ],
                },
            ],
        ]
    },
    witnessCeruleanCity: {
        name: ['Witness', 'Testigo', '目击者'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Have you been to Johto?",
                        "Has estado en Johto?",
                    "你去过城都吗？"
                    ],
                },
                {
                    text: [
                        "I'm fascinated by the Lunar and Solar Sanctuary.",
                        "Me fascinan los Santuarios Lunar y Solar.",
                    "我对月之神殿和日之神殿非常着迷。"
                    ],
                },
                {
                    text: [
                        "But they seem impossible to solve...",
                        "Pero parecen imposibles de resolver...",
                    "但它们似乎无法解开……"
                    ],
                },
                {
                    text: [
                        "Maybe Pokémon from outside Johto and Kanto are required.",
                        "Quizá sean necesarios Pokémon de fuera de Johto y Kanto.",
                    "也许需要来自城都和关都以外的宝可梦。"
                    ],
                },     
            ],
        ]
    },
    bikeShopCeruleanCity: {
        name: ['Bike Shop Owner', 'Dueño de la tienda de bicis', '自行车店老板'],
        state: savedStates.bikeShopCeruleanCity ?? 0,
        dialogues:  [
            [
                {
                    text: [
                        "Welcome to the best bike shop in Kanto!",
                        "¡Bienvenido a la mejor tienda de bicicletas de Kanto!",
                    "欢迎来到关都最好的自行车店！"
                    ],
                },
                {
                    text: [
                        "We have bikes for only 1,000,000 coins.",
                        "Tenemos bicis a solo 1,000,000 moneditas.",
                    "我们的自行车只要100万金币！"
                    ],
                },
                {
                    text: [
                        "An irresistible offer!",
                        "¡Una oferta irresistible!",
                    "无法抗拒的优惠！"
                    ],
                },
                {
                    text: [
                        "Interested in buying one?",
                        "¿Interesado en comprar una?",
                    "有兴趣买一辆吗？"
                    ],
                },
                {   
                    condition: () => main.player.gold <= 999999,
                    text: [
                        "Looks like you don't have enough.",
                        "Parece que no te alcanza.",
                    "看来你的钱不够。"
                    ],
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "Ah, I see you have the money...",
                        "Ah, veo que tienes el dinero...",
                    "啊，我看你带着钱……"
                    ],
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "Alright, I'll tell you the truth.",
                        "Está bien, te contaré la verdad.",
                    "好吧，我告诉你真相。"
                    ],
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "There are no bikes, this is a front.",
                        "No hay bicis, esto es una tapadera.",
                    "根本没有自行车，这只是个幌子。"
                    ],
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "Don't tell anyone, okay?",
                        "No se lo cuentes a nadie, ¿vale?",
                    "别告诉任何人，好吗？"
                    ],
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "Take this herb as a \"thank you\".",
                        "拿着这个草药作为\"agradecimiento\".",
                    "拿着这个herb as a \"thank you\"。"
                    ],  
                    reward: {
                        item: item.key.herb,
                        amount: 1
                    },
                    cb: () => {
                        main.npcs.philosopherViridianCity.state = 3
                    }
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "If you don't know what to do with it, the people at Viridian City will surely know.",
                        "Si no sabes qué hacer con ella, habla con la gente de Ciudad Verde.",
                    "如果你不知道拿它怎么办，常青市的人肯定知道。"
                    ],
                    state: 1
                },
                {   
                    condition: () => main.player.gold > 999999,
                    text: [
                        "Please, don't come back here.",
                        "Por favor, no vuelvas por aquí.",
                    "求你了，别再来这里。"
                    ],
                },
            ],
            [
                {
                    text: [
                        "Sorry, it's closed.",
                        "Lo siento, esta cerrado.",
                    "抱歉，关门了。"
                    ],
                },
                {
                    text: [
                        "If you don't know what to do with what I gave you, seek help at Viridian City.",
                        "Si no sabes que hacer con lo que te di, busca ayuda en Ciudad Verde.",
                    "如果你不知道我给你的东西怎么用，去常青市寻求帮助。"
                    ],
                },
                {
                    text: [
                        "They know how to appreciate it there.",
                        "Allí saben apreciarlo.",
                    "他们在那里知道怎么好好利用。"
                    ],
                }
            ]
        ]
    },
    vesselACeruleanCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselACeruleanCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Naive Mint！",
                        "¡Hay x1 Menta ingenua dentro la vasija!",
                    "容器里有x1 天真薄荷！"
                    ],
                    reward: {
                        item: item.consumable.naiveMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBCeruleanCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBCeruleanCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x6 Strong Medicine！",
                        "¡Hay x6 Medicina Fuerte dentro la vasija!",
                    "容器里有x6 强力药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // RUTAS RUTAS RUTAS RUTAS RUTAS RUTAS RUTAS
    // RUTAS RUTAS RUTAS RUTAS RUTAS RUTAS RUTAS
    // RUTAS RUTAS RUTAS RUTAS RUTAS RUTAS RUTAS 
    vesselMtMoon: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselMtMoon ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Transumtation Flask！",
                        "¡Hay x1 Frasco Alteración dentro la vasija!",
                    "容器里有x1 转化烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.transmutationFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //Route 1
    signboardRoute1: {
        name: ["Route 1", 'Ruta 1', '1号道路'],
        state: 0,
        dialogues: [
            [
                {
                    text:  [
                        "Viridian City is to the north!",
                        "¡Ciudad Verde está al norte!",
                        "常青市在北边！"
                    ]
                },
            ]
        ]
    },
    // Route 3
    route3HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route3HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM158 Psycho Cut on the ground!",
                        "¡He encontrado x1 MT158 Psicocorte en el suelo!",
                    "我在地上找到了x1 招式机158（精神利刃）！"
                    ],
                    reward: {
                        item: item.tm.tm158,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    //Route 4
    caveDrifterRoute4: {
        name: ['Cave Drifter', 'Trotamontes', '洞穴漂泊者'],
        state: savedStates.caveDrifterRoute4 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I don't like cities... too much light, too few Zubats.",
                        "No me gustan las ciudades... demasiada luz, muy pocos Zubat.",
                    "我不喜欢城市……太多灯光，太少超音蝠。"
                    ],
                },
                {
                    text: [
                        "I live among tunnels.",
                        "Yo vivo entre túneles.",
                    "我生活在隧道之间。"
                    ],
                },
                {
                    text: [
                        "I go from cave to cave like they were inns.",
                        "Paso de cueva en cueva como si fueran posadas.",
                    "我从一个洞穴到另一个洞穴，就像它们是旅店一样。"
                    ],
                },
                {
                    text: [
                        "Once, in a damp corner of Rock Tunnel, I found this White Apricorn.",
                        "Una vez, en un rincón húmedo del Túnel Roca, encontré este Bonguri blanco.",
                    "有一次，在岩山隧道一个潮湿的角落里，我发现了这个白色圆柑。"
                    ],
                },
                {
                    text: [
                        "I'm giving it to you.",
                        "Te lo regalo.",
                    "我把它给你。"
                    ],
                    reward: {
                        item: item.key.apricornWhite,
                        amount: 1
                    }
                },
                {
                    text: [
                        "It might have a story... or mold",
                        "Puede que tenga historia... o moho.",
                    "它也许有故事……或者发霉了。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The best secrets aren't on the maps, but beneath them.",
                        "Los mejores secretos no están en los mapas, sino bajo ellos.",
                    "最好的秘密不在地图上，而在地图之下。"
                    ],
                },
            ]
        ]
    },
    route4HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route4HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Moon Stone on the ground!",
                        "¡He encontrado x1 Piedra lunar en el suelo!",
                    "我在地上找到了x1 月之石！"
                    ],
                    reward: {
                        item: item.consumable.moonStone,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselRoute4: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute4 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Transumtation Flask！",
                        "¡Hay x1 Frasco Alteración dentro la vasija!",
                    "容器里有x1 转化烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.transmutationFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //ROUTE 6
    vesselARoute6: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute6 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Iron！",
                        "¡Hay x3 Hierro dentro la vasija!",
                    "容器里有x3 防御增强剂！"
                    ],
                    reward: {
                        item: item.consumable.iron,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute6: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute6 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Medicine Total！",
                        "¡Hay x2 Medicina Total dentro la vasija!",
                    "容器里有x2 全满药！"
                    ],
                    reward: {
                        item: item.consumable.medicineTotal,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute6: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute6 ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x1 HP Up！",
                        "¡Hay x1 Más PS dentro la vasija!",
                    "容器里有x1 HP Up！"
                    ],
                    reward: {
                        item: item.consumable.hpUp,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //Route 7
    homelessRoute7: {
        name: ['Homeless', 'Vagabundo', '流浪汉'],
        state: savedStates.homelessRoute7 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I used to live in Saffron City, but with the taxes I had to move to the outskirts.",
                        "Antes vivía en Ciudad Azafrán, pero con los impuestos me tuve que ir a las afueras.",
                    "我以前住在金黄市，但因为税收太高不得不搬到郊区。"
                    ],
                },
                {
                    text: [
                        "It's not easy to survive here, but at least they don't drown me in fees every other day.",
                        "No es fácil sobrevivir aquí, pero al menos no me ahogan con tasas cada dos por tres.",
                    "在这里生活不容易，但至少不会隔三差五被各种费用淹死。"
                    ],
                },
                {
                    text: [
                        "I built this hut myself with Sudowoodo wood.",
                        "Yo mismo me hice esta choza con madera de Sudowoodo.",
                    "我自己用树才怪的木头建了这座小屋。"
                    ],
                },
                {
                    text: [
                        "You can still hear its sobs when it rains.",
                        "Aún se pueden oir sus sollozos cuando llueve.",
                    "下雨的时候还能听到它的抽泣声。"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('SUDOWOODO'),
                     text: [
                        "Oops! I hadn't noticed you had a Sudowoodo on your team.",
                        "¡Uy! No habia visto que tenias un Sudowoodo en tu equipo.",
                    "哎呀！我没注意到你队伍里有树才怪。"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('SUDOWOODO'),
                    text: [
                        "Just kidding, man, it's Exeggutor wood.",
                        "Era broma hombre, es madera de Exeggutor.",
                    "开玩笑的，伙计，是椰蛋树的木头。"
                    ],
                },
                {
                    condition: () => (main.team.isPokemonInTeam('SUDOWOODO') && main.team.isPokemonInTeam('EXEGGUTOR')) ,
                    text: [
                        "Ah... that too...",
                        "Ah... que también...",
                    "啊……那也是……"
                    ],
                },
                {
                    condition: () => (main.team.isPokemonInTeam('SUDOWOODO') && main.team.isPokemonInTeam('EXEGGUTOR')) ,
                    text: [
                        "What a blunder...",
                        "Vaya metedura de pata...",
                    "真是大失误……"
                    ],
                }
            ],
        ]
    },
    // RUTA 8
    jewelerRoute8: {
        name: ['Jeweler', 'Joyero', '珠宝商'],
        state: savedStates.jewelerRoute8 ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Greetings, trainer.",
                        "Saludos entrenador.",
                    "你好，训练家。"
                    ],
                },
                {
                    text: [
                        "I am an aura craftsman.",
                        "Soy un artesano del aura.",
                    "我是一名气场工匠。"
                    ],
                },
                {
                    text: [
                        "A sculptor of inner energy.",
                        "Un escultor de la energía interior.",
                    "内在能量的雕刻师。"
                    ],
                },
                {
                    text: [
                        "In short, a jeweler.",
                        "En resumen, un joyero.",
                    "简而言之，珠宝匠。"
                    ],
                },
                {
                    text: [
                        "Bring me a White Apricorn and I will craft an amazing jewel that increases gold and experience gains.",
                        "Traéme un Bonguri blanco y te fabricaré una increible joya que aumenta la ganancia de oro y experiencia.",
                    "给我一个白色圆柑，我会打造一件能增加金币和经验收益的惊人珠宝。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
                        "Well, look at that!",
                        "¡Pero mira tú!",
                    "哎呀，看看这个！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
                        "Is that a White Apricorn?",
                        "¿Eso es un Bonguri blanco?",
                    "那是白色圆柑吗？"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
                        "Such raw beauty, so pure...",
                        "Qué belleza tan cruda, tan pura...",
                    "如此原始的美，如此纯净……"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
                        "Give it to me, and I will polish it with Togetic's tears and moonstone dust.",
                        "Dámelo, y lo puliré con lágrimas de Togetic y polvo de piedra lunar.",
                    "交给我吧，我会用波克基古的眼泪和月之石的粉末来打磨它。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
    "...",
    "...",
    "..."
],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
                        "Here you go, your Mystic Amulet.",
,
                        "给你，你的神秘护身符。",
                        "给你，你的神秘护身符。",
                    ],
                    reward: {
                        item: item.key.mysticCharm,
                        amount: 1
                    },
                },
                {   
                    condition: () => main.inventory.searchItem('apricornWhite') != undefined,
                    text: [
                        "As long as you wear it, you will gain more experience and money battling wild Pokémon.",
                        "Mientras lo lleves, obtendrás mas experiencia y dinero al combatir contra Pokémon salvajes.",
                    "只要你戴着它，与野生宝可梦对战时就会获得更多经验和金钱。"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornWhite'));
                        main.player.mysticCharm = true;
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Elegance, like experience, is earned through battle.",
                        "La elegancia, como la experiencia, se gana luchando.",
                    "优雅，就像经验一样，是在战斗中赢得的。"
                    ],
                }
            ]
        ]
    },
    vesselRoute8: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute8 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Dragon Scale！",
                        "¡Hay x1 Esc. Dragón dentro la vasija!",
                    "容器里有x1 龙之鳞片！"
                    ],
                    reward: {
                        item: item.consumable.dragonScale,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route8HiddenItemA: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route8HiddenItemA ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "I found x2 Revive on the ground!",
                        "¡He encontrado x2 Revivir en el suelo!",
                    "我在地上找到了x2 活力碎片！"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    route8HiddenItemB: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route8HiddenItemB ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x3 Calcium on the ground!",
                        "¡He encontrado x3 Calcio en el suelo!",
                    "我在地上找到了x3 特攻增强剂！"
                    ],
                    reward: {
                        item: item.consumable.calcium,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    // RUTA 10
    vesselRoute10: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute10 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x200 Tokens！",
                        "¡Hay x200 Fichas dentro la vasija!",
                    "容器里有x200 代币！"
                    ],
                    reward: {
                        item: item.key.token,
                        amount: 200
                    },
                    state: 1,
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }

                        if (!main.player.achievement[34].status) {
                            main.player.achievement[34].progress[0] += 200;
                            if (main.player.achievement[34].progress[0] >= main.player.achievement[34].progress[1]) {
                                main.player.achievement[34].status = true;
                                main.player.unlockAchievement(34);
                            }
                        };
                        if (!main.player.achievement[36].status) {
                            main.player.achievement[36].progress[0] += 200;
                            if (main.player.achievement[36].progress[0] >= main.player.achievement[36].progress[1]) {
                                main.player.achievement[36].status = true;
                                main.player.unlockAchievement(36);
                            }
                        };
                        if (!main.player.achievement[38].status) {
                            main.player.achievement[38].progress[0] += 200;
                            if (main.player.achievement[38].progress[0] >= main.player.achievement[38].progress[1]) {
                                main.player.achievement[38].status = true;
                                main.player.unlockAchievement(38);
                            }
                        };
                    }
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardRoute10: {
        name: ["Power Plant", 'Central Eléctrica', '发电厂'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "A power plant that was abandoned years ago. Recently, it has started generating electricity again.",
,
                        "一座多年前被废弃的发电厂。最近，它又开始发电了。",
                        "一座多年前被废弃的发电厂。最近，它又开始发电了。",
                    ],
                },
            ]
        ]
    },
    powerPlant: {
        name: ["Power Plant", 'Central Eléctrica', '发电厂'],
        state: savedStates.powerPlant ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "The Power Plant is closed.",
,
                        "发电厂已关闭。",
                        "发电厂已关闭。",
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('key2') != undefined,
                    text: [
                        "You use the Power Plant Key.",
                        "Usas la llave de la Central.",
                        "你使用了发电厂钥匙。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('key2') != undefined,
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['powerPlant-1']);
                    },
                    state: 1,
                },
            ],
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['powerPlant-1']);
                    }
                },      
            ]
        ]
    },
    // Ruta 12
    route12HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route12HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Shiny Flask on the ground!",
                        "¡He encontrado x1 Frasco Variocolor en el suelo!",
                    "我在地上找到了x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselRoute12: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute12 ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x5 Medicine Total！",
                        "¡Hay x5 Medicina Total dentro la vasija!",
                    "容器里有x5 全满药！"
                    ],
                    reward: {
                        item: item.consumable.medicineTotal,
                        amount: 5
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //Ruta 13
    vesselARoute13: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute13 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Shiny Flask！",
                        "¡Hay x1 Frasco Variocolor dentro la vasija!",
                    "容器里有x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute13: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute13 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Zinc！",
                        "¡Hay x2 Zinc dentro la vasija!",
                    "容器里有x2 特防增强剂！"
                    ],
                    reward: {
                        item: item.consumable.zinc,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute13: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute13 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Lunar Mail！",
                        "¡Hay x1 Correo Lunar dentro la vasija!",
                    "容器里有x1 月之邮件！"
                    ],
                    reward: {
                        item: item.key.lunarMail,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselDRoute13: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselDRoute13 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Solar Mail！",
                        "¡Hay x1 Correo Solar dentro la vasija!",
                    "容器里有x1 日之邮件！"
                    ],
                    reward: {
                        item: item.key.solarMail,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    hertzVault: {
        name: [`Hertz Vault`, `Bóveda de Hertz`, `赫兹宝库`],
        state: savedStates.hertzVault ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "The door is locked, a number combination seems to be able to open it.",
                        "La puerta está cerrada, una combinación de números parece poder abrirla.",
                    "门锁着，一组数字组合似乎可以打开它。"
                    ],
                },
                {
                    cb: () => { 
                        main.dialogue.endDialogue();
                        main.puzzleNumberCombination.open([`Door`, `Puerta`], "8181", () => {
                            main.npcs.hertzVault.state = 1;
                            playSound('buttonB', 'ui');
                            main.dialogue.startDialogue(main.npcs['hertzVault'], false);
                        }) 
                    }
                }
            ],
            [
                {
                    text:  [
                        "The door has opened!",
                        "¡La puerta se ha abierto!",
                    "门打开了！"
                    ],
                    state: 2
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.routeData['hertzVault-1']); 
                    }
                },
            ],
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['hertzVault-1']);
                    }
                },
            ],
        ]
    },
    //Ruta 14
    route14HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route14HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "I found x1 TM144 Cross Poison on the ground!",
                        "¡He encontrado x1 MT144 Veneno X en el suelo!",
                    "我在地上找到了x1 招式机144（十字毒刃）！"
                    ],
                    reward: {
                        item: item.tm.tm144,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    signRoute14: {
        name: ["Liars", 'Mentirosos', '骗子'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The Snorlax is a lie.",
,
                        "那个卡比兽是假的。",
                        "那个卡比兽是假的。",
                    ],
                },
            ]
        ]
    },
    // RUTA 19
    vesselRoute19: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute19 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Zinc！",
                        "¡Hay x3 Zinc dentro la vasija!",
                    "容器里有x3 特防增强剂！"
                    ],
                    reward: {
                        item: item.consumable.zinc,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //ruta15
    signRoute15: {
        name: ['STOP BREAKING POTS!', '¡BASTA DE ROMPER LOS JARRONES!', '别再打碎罐子了！'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "We know they respawn. <br>We know they go clink-clink. <br>But they do NOT contain rupees.",
                        "Sabemos que reaparecen. <br>Sabemos que hacen clink-clink. <br>Pero NO contienen rupias.",
                    "我们知道它们会重生。<br>我们知道它们叮当作响。<br>但它们里面没有卢比。"
                    ],
                },
            ]
        ]
    },
    goron: {
        name: ['Dislocated Golem', 'Golem desubicado', '脱臼的隆隆岩'],
        state: savedStates.goron ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Good afternoon, Brother!",
                        "¡Goro-buenas tardes!",
                    "下午好，兄弟！"
                    ],
                },
                {
                    text: [
                        "Did you just come back from the Fire Temple!?",
                        "¿¡Has vuelto del Templo del Fuego!?",
                    "你刚从火之神殿回来吗！？"
                    ],
                },
                {
                    text: [
                        "I knew you'd survive, Link!",
                        "¡Sabía que sobrevivirías, Link!",
                    "我就知道你能活下来，林克！"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                 {
                    text: [
                        "Your Master Sword, Brother?",
                        "¿Tu espada Goro-Maestra?",
                    "你的大师之剑呢，兄弟？"
                    ],
                },
                {
                    text: [
                        "Did you lose it fighting King Dodongo again?",
                        "¿La perdiste luchando contra el Rey Dodongo otra vez?",
                    "又是在和多多国王战斗时弄丢了吗？"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "What's wrong with you, Brother?",
,
                        "你怎么了，兄弟？",
                        "你怎么了，兄弟？",
                    ],
                },
                {
                    text: [
                        "Did you just call me a Golem?",
                        "¿Dices que soy un Golem?",
                    "你刚才叫我隆隆岩？"
                    ],
                },
                {
                    text: [
                        "You must've taken a rock to the head, Link.",
                        "Te has dado un Goro-golpe en la cabeza Link.",
                    "你一定是脑袋被石头砸了，林克。"
                    ],
                },
                {
                    text: [
                        "There is no such place as Kanto, Brother.",
                        "No existe ese Kanto del que hablas.",
                    "根本没有什么关都这种地方，兄弟。"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "Are you kidding me, Brother?",
,
                        "你在开玩笑吗，兄弟？",
                        "你在开玩笑吗，兄弟？",
                    ],
                },
                {
                    text: [
                        "Look at these rock-solid hands!",
                        "¡Mira estas manos de roca!",
                    "看看这双岩石般坚硬的手！"
                    ],
                },
                {
                    text: [
                        "This boulder of a belly!",
                        "¡Este abdomen de boulder!",
                    "这个巨石般的肚子！"
                    ],
                },
                {
                    text: [
                        "I'm 100% pure Goron, through and through!",
                        "¡Soy 100% Goro-Goron auténtico!",
                    "我是100%纯正的鼓隆族，彻头彻尾！"
                    ],
                },
                {
                    text: [
                        "You've just spent too much time out in the Gerudo Valley.",
                        "Lo que pasa es que llevas demasiado tiempo fuera del Valle Gerudo.",
                    "你只是在格鲁德峡谷待太久了。"
                    ],
                },
                {
                    text: [
                        "The sun must be frying your brain, Brother!",
                        "¡El sol te Goro-calienta la cabeza!",
                    "太阳一定把你的脑子烤糊了，兄弟！"
                    ],
                },
                {
                    text: [
                        "Look, Link... I've got an offer you can't refuse.",
                        "Mira Link, te propongo un Goro-trato que no vas a poder rechazar.",
                    "听着，林克……我有一个你无法拒绝的提议。"
                    ],
                },
                {
                    text: [
                        "Bring me a Red Zora Scale, and I'll give you this Power Bracelet in return.",
                        "Traéme una Escama de Zora Roja y a cambio te doy este Brazalete de Fuerza.",
                    "给我一片红色卓拉鳞片，我就给你这个力量手镯作为回报。"
                    ],
                },
                {
                    text: [
                        "With it, you'll be able to smash rocks like a true Goron!",
                        "Con él podrás romper las rocas como si fueras un auténtico Goron.",
                    "有了它，你就能像真正的鼓隆族一样砸碎岩石！"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Greetings again, Brother.",
                        "Goro-saludos de nuevo.",
                    "再次问候，兄弟。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('zoraScale') == undefined,
                    text: [
                        "You don't have the Scale?",
                        "¿No traes la Escama?",
                        "你没有鳞片吗？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('zoraScale') == undefined,
                     text: [
                        "You disappoint me, Link...",
                        "Me Goro-decepcionas Link...",
                    "你让我失望了，林克……"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('zoraScale') != undefined,
                    text: [
                        "You brought me a Zora Scale!",
                        "¡Me has traido una Escama de Zora!",
                        "你给我带来了索罗亚鳞片！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('zoraScale') != undefined,
                    text: [
                        "Deal, brother, here's the Strength Bracelet I promised you.",
                        "Goro-trato, aquí está el Brazalete de la Fuerza que te prometí.",
                    "成交，兄弟，这是我答应给你的力量手镯。"
                    ],
                    reward: {
                        item: item.key.powerBracelet,
                        amount: 1
                    },
                },
                {
                    condition: () => main.inventory.searchItem('zoraScale') != undefined,
                    text: [
                        "Make your way by breaking the rocks that block your path!",
                        "¡Hazte paso rompiendo las rocas que bloquean tu camino!",
                        "粉碎挡路的岩石，开辟道路！"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('zoraScale') != undefined,
                    text: [
                        "Act like a Goron!",
                        "¡Actúa como Goron!",
                    "像个鼓隆族一样！"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('zoraScale'));
                    },
                    state: 2,
                }
            ],
            [
                {
                    text: [
                        "Roll through the rocks brother!",
                        "Goro-rueda a través de las rocas Link!",
                        "滚过岩石吧兄弟！"
                    ]
                },
                {
                    text: [
                        "Oh well... Link you should just use the bracelet.",
                        "O bueno... simplemente usa el brazalete.",
                        "算了……林克你还是用手镯吧。"
                    ]
                },
            ]
        ]
    },
    // RUTA 21
    vesselRoute21: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute21 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Protein！",
                        "¡Hay x1 Proteina dentro la vasija!",
                    "容器里有x1 攻击增强剂！"
                    ],
                    reward: {
                        item: item.consumable.protein,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // ViridianForest
    bugCatcherViridianForest: {
        name: ['Bug Catcher', 'Cazabichos', '捕虫少年'],
        state: savedStates.bugCatcherViridianForest ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hmm... don't you find it strange that the Pokémon here are so strong?",
                        "Hmm... ¿no te parece raro que los Pokémon de aquí estén tan fuertes?",
                    "嗯……你不觉得这里的宝可梦这么强很奇怪吗？"
                    ],
                },
                {
                    text: [
                        "Before, a level 5 Metapod was enough for me!",
                        "¡Antes con un Metapod al 5 me bastaba!",
                    "以前，一只5级的铁甲蛹对我来说就够了！"
                    ],
                },
                {
                    text: [
                        "Now it feels like I'm fighting regional champions.",
                        "Ahora parece que vengo a pelear contra campeones regionales.",
                    "现在感觉我像是在和地区冠军对战。"
                    ],
                },
                {
                    text: [
                        "Who's feeding these Beedrills protein?",
                        "¿Quién está alimentando a estos Beedrills con proteínas?",
                    "谁在给这些大针蜂喂蛋白粉？"
                    ],
                },
                {
                    text: [
                        "It's not normal!",
                        "¡No es normal!",
                    "这不正常！"
                    ],
                },
                {
                    text: [
                        "I'm gonna need more than a net and hope if I want to keep being a Bug Catcher.",
                        "Voy a necesitar más que una red y esperanza si quiero seguir siendo Cazabichos.",
                    "如果我还想继续当捕虫少年，光靠捕虫网和希望可不够。"
                    ],
                },
            ],
        ]
    },
    viridianForestHiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.viridianForestHiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Umbrella on the ground!",
                        "¡He encontrado x1 Paraguas en el suelo!",
                    "我在地上找到了x1 雨伞！"
                    ],
                    reward: {
                        item: item.key.umbrella,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselViridianForest: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselViridianForest ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM124 Drill Run！",
                        "¡Hay x1 MT124 Taladradora dentro la vasija!",
                    "容器里有x1 招式机124 直冲钻！"
                    ],
                    reward: {
                        item: item.tm.tm124,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    //Ruta25
    vesselRoute25: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute25 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Carbos！",
                        "¡Hay x2 Carburante dentro la vasija!",
                    "容器里有x2 速度增强剂！"
                    ],
                    reward: {
                        item: item.consumable.carbos,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    mailboxSinga: {
        name: ['Mailbox', 'Buzón', '邮箱'],
        state: savedStates.mailboxSinga ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "There is a Lithic Stone in the mailbox!",
                        "¡Hay una Piedra Lítica en el buzón!",
                    "信箱里有一块石碑碎片！"
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[9].progress[0]++;
                        main.player.achievement[10].progress[0]++;
                        if (main.player.achievement[9].progress[0] == main.player.achievement[9].progress[1]) {
                            main.player.achievement[9].status = true;
                            main.player.unlockAchievement(9);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "There's nothing inside.",
                        "No hay nada dentro.",
                        "里面什么都没有。"
                    ]
                }
            ]
        ]
    },
    singaRoute25: {
        name: ['Singa', 'Singa', '辛加'],
        state: savedStates.singaRoute25 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hello, trainer!",
                        "¡Hola, entrenador!",
                    "你好，训练家！"
                    ],
                },
                {
                    text: [
                        "Are you looking for someone named Bill?",
                        "¿Buscas a un tal Bill?",
                    "你在找一个叫Bill的人吗？"
                    ],
                },
                {
                    text: [
                        "I don't know what you're talking about.",
                        "No se de que me hablas.",
                    "我不知道你在说什么。"
                    ],
                },
                {
                    text: [
                        "My name is Singa and I'm looking for a trainer who's my equal.",
                        "Me llamo Singa y estoy en busca de un entrenador a mi altura.",
                    "我叫辛加，我在找一个能与我匹敌的训练家。"
                    ],
                },
                {
                    text: [
                        "Unfortunately for me, there isn't one.",
                        "Por desgracia para mí, no hay ninguno.",
                    "不幸的是，对我来说还没有。"
                    ],
                },
                {
                    text: [
                        "But maybe you can try.",
                        "Pero tal vez tú puedas intentarlo.",
                    "但也许你可以试试。"
                    ],
                },
                {
                    text: [
                        "My Pokémon won't hesitate for a second to tear yours apart.",
                        "Mis Pokémon no dudarán un segundo en despedazar a los tuyos.",
                    "我的宝可梦会毫不犹豫地把你的撕碎。"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "It was just a Sneasel in an icy cave full of Steelix.",
                        "Era solo un Sneasel en una cueva helada llena de Steelix.",
                    "它只是一只狃拉，在满是大钢蛇的冰冷洞穴里。"
                    ],
                },
                {
                    text: [
                        "Small, skinny... with claws that barely cut the air.",
                        "Pequeño, flaco... con unas garras que apenas cortaban el aire.",
                    "又小又瘦……爪子几乎连空气都切不开。"
                    ],
                },
                {
                    text: [
                        "They laughed at its weightless swipes, its fragile shadow among steel titans.",
                        "Se reían de sus zarpazos sin peso, de su sombra frágil entre titanes de acero.",
                    "它们嘲笑它轻飘飘的挥击，嘲笑它在钢铁巨兽中脆弱的影子。"
                    ],
                },
                {
                    text: [
                        "It sharpened its fury with every defeat.",
                        "Afiló su furia con cada derrota.",
                    "它用每一次失败磨砺自己的愤怒。"
                    ],
                },
                {
                    text: [
                        "Until one day, it filled with determination and its claws split the mountain in two.",
                        "Hasta que un día, se llenó de determinación y sus garras partieron la montaña en dos.",
                    "直到有一天，它充满决心，它的爪子将山劈成了两半。"
                    ],
                },
                {
                    text: [
                        "Get ready! I'm not going to show mercy.",
                        "¡Prepárate, No voy a tener piedad!.",
                    "准备好！我不会手下留情的。"
                    ],
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.trainerBattle.open(null, main.trainers.singa.team, 'Singa', false, false, 'battle22', () => {
                                main.trainerBattle.close();
                                main.npcs['singaRoute25'].state = 1;
                                main.dialogue.startDialogue(main.npcs['singaRoute25']);
                        });
                    } 
                }
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "My claws have been satisfied!",
                        "¡Mis garras han quedado saciadas!",
                    "我的爪子满意了！"
                    ],
                },
                {
                    text: [
                        "A perfect battle... like metal.",
                        "Una batalla perfecta... como el metal.",
                    "一场完美的对战……像金属一样。"
                    ],
                },
                {
                    text: [
                        "You deserve $50,000 for your victory.",
                        "Te mereces $50,000 por tu victoria.",
                    "你的胜利值得5万金币。"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(50000);
                    },
                },
                {
                    text: [
                        "Also, I want to give you something.",
                        "Además, quiero regalarte una cosa.",
                    "另外，我想给你一样东西。"
                    ],
                },
                {
                    text: [
                        "Here, TM153 contains the move Metalic Slash.",
                        "Ten, la MT153, contiene el movimiento Corte metálico.",
                    "来，TM153包含了招式金属斩。"
                    ],
                    reward: {
                        item: item.tm.tm153,
                        amount: 1
                    }
                },
                {
                    text: [
                        "It's a technique I've perfected myself, it can't be obtained any other way.",
                        "Es una técnica que yo mismo he perfeccionado, no puede obtenerse de ninguna forma.",
                    "这是我自己完善的招式，没有其他途径可以获得。"
                    ],
                },
                {
                    text: [
                        "So think carefully about who you use it on.",
                        "Así que piensa bien en quien la usas.",
                    "所以仔细想想你要给谁使用。"
                    ],
                },
                {
                    text: [
                        "Only Pokémon with sharp claws can learn it.",
                        "Solamente pueden aprenderla Pokémon que cuenten con zarpas afiladas.",
                    "只有爪子锋利的宝可梦才能学会。"
                    ],
                    state: 2
                },
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
            ]
        ]
    },
    //RUTA 26
    signboardRoute26: {
        name: ["Lumberjack's Cabin", 'Cabaña del Leñador', '伐木工小屋'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "No more bushes.",
,
                        "没有更多灌木了。",
                        "没有更多灌木了。",
                    ],
                },
            ]
        ]
    },
    lumberjackRoute26: {
        name: ['Lumberjack', 'Leñador', '伐木工'],
        state: savedStates.lumberjackRoute26 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hey you!",
                        "¡Oye tú!",
                    "嘿，你！"
                    ],
                },
                {
                    text: [
                        "If you see a bush looking shady, better not provoke it.",
                        "Si ves un arbusto con mala cara, mejor no lo provoques.",
                    "如果你看到一棵看起来可疑的灌木，最好别惹它。"
                    ],
                },
                {
                    text: [
                        "I, as a good lumberjack, used to chop them with axes.",
                        "Yo, como buen leñador los cortaba a hachazos.",
                    "作为一个好伐木工，我以前用斧头砍它们。"
                    ],
                },
                {
                    text: [
                        "Until one day... one screamed.",
                        "Hasta que un día... uno gritó.",
                    "直到有一天……有一棵尖叫了。"
                    ],
                },
                {
                    text: [
                        "It was a Sudowoodo!",
                        "¡Era un Sudowoodo!",
                    "那是一只树才怪！"
                    ],
                },
                {
                    text: [
                        "I thought it was a bush... now I have nightmares with it shouting \"¡sudo!\".",
                        "我以为那是个灌木丛……现在我噩梦都是它在喊\"¡sudo!\".",
                    "我以为是灌木丛……现在我噩梦都是它喊\"¡sudo!\"。"
                    ],
                },
                {
                    text: [
                        "Since then I use this special watering can.",
                        "Desde entonces uso esta regadera especial.",
                    "从那以后我就用这个特殊的水壶。"
                    ],
                },
                {
                    text: [
                        "Water it and... poof!",
                        "Riega y... ¡puf!",
                    "浇上水……噗！"
                    ],
                },
                {
                    text: [
                        "Goodbye bush.",
                        "Adiós arbusto.",
                    "再见，灌木。"
                    ],
                },
                {
                    text: [
                        "More peaceful, less screaming.",
                        "Más pacífico, menos gritos.",
                    "更和平，更少尖叫。"
                    ],
                },
                {
                    text: [
                        "Here, I'm giving you one.",
                        "Toma, te regalo una.",
                    "来，我送你一个。"
                    ],
                    reward: {
                        item: item.key.sprinkler,
                        amount: 1
                    }
                },
                {
                    text: [
                        "Sudowoodo don't like getting wet, so they'll run away before pretending to be a bush again.",
                        "A los Sudowoodo no les gusta mojarse, así que saldrán corriendo antes de fingir ser arbusto otra vez.",
                    "树才怪不喜欢被弄湿，所以它们会在假装灌木之前就逃跑。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Sometimes I hear the echo of \"¡sudo!\" in the trees... or maybe it's my conscience.",
                        'A veces oigo el eco de "¡sudo!" en los árboles... o tal vez es mi conciencia.',
                        "有时候我听到树林里回荡着“sudo!”的声音……也可能是我良心在叫。"
                    ],
                },
                {
                    text: [
                        "Take good care of that watering can!",
                        "¡Cuida esa regadera!",
                    "好好保管那个水壶！"
                    ],
                },
            ]
        ]
    },
    pokemonLeagueReceptionGate: {
        name: ['Badge Checker', 'Compruebamedallas', '徽章检查员'],
        state: savedStates.pokemonLeagueReceptionGate ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Halt.",
                        "Alto.",
                    "站住。"
                    ],
                },
                {
                    text: [
                        "Only Trainers with at least eight Gym Badges may proceed.",
                        "Solo los entrenadores con almenos ocho Medallas pueden pasar.",
                    "只有至少拥有八枚道馆徽章的宝可梦训练家才能进入。"
                    ],
                },
                {   
                    condition: () => main.player.badges.length < 8,
                    text: [
                        "Sorry, you don't meet the requirements.",
                        "Lo siento, no cumples los requisitos.",
                    "抱歉，你不符合要求。"
                    ],
                },
                {   
                    condition: () => main.player.badges.length >= 8,
                    text: [
                        "Wow! Eight badges? Not everyone can achieve that.",
                        "¡Vaya! ¿Ocho medallas? Eso no lo consigue cualquiera.",
                    "哇！八枚徽章？不是每个人都能做到的。"
                    ],
                },
                {   
                    condition: () => main.player.badges.length >= 8,
                    text: [
                        "Come on in.",
                        "Adelante.",
                    "请进。"
                    ],
                    state: 1
                },
                {   
                    condition: () => main.player.badges.length >= 8,
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['victoryRoad-1']);
                    }
                },
            ],
            [
                {
                     text: [
                        "You again? Come on in.",
                        "¿Otra vez tú? Adelante, pasa.",
                    "又是你？进来吧。"
                    ],
                },
                {   
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['victoryRoad-1']);
                    }
                },
            ],
        ]
    },
    pokemonLeague: {
        name: ['Pokémon League Receptionist', 'Recepcionista de la Liga Pokémon', '宝可梦联盟接待员'],
        state: savedStates.pokemonLeague ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to the Pokémon League.",
                        "Bienvenido a la Liga Pokémon.",
                    "欢迎来到宝可梦联盟。"
                    ],
                },
                {
                    text: [
                        "Before starting, I must explain the official rules of the challenge.",
                        "Antes de comenzar, debo explicarte las reglas oficiales del desafío.",
                    "开始之前，我必须说明挑战的官方规则。"
                    ],
                },
                {
                    text: [
                        "You will battle five elite trainers, one after another.",
                        "Pelearás contra cinco entrenadores de élite, uno tras otro.",
                    "你将连续挑战五位精英训练家。"
                    ],
                },
                {
                    text: [
                        "You won't be able to change your Pokémon team once the challenge begins.",
                        "No podrás cambiar tu equipo Pokémon una vez comience el desafío.",
                    "挑战开始后，你将无法更换宝可梦队伍。"
                    ],
                },
                {
                    text: [
                        "However, after each battle, your Pokémon will be fully healed.",
                        "Sin embargo, después de cada combate, tus Pokémon serán curados por completo.",
                    "不过，每场对战后，你的宝可梦会完全恢复。"
                    ],
                },
                {
                    text: [
                        "If you withdraw or lose, you'll have to start over from the beginning.",
                        "Si te retiras o pierdes, volverás desde el principio.",
                    "如果你退出或输了，就必须从头开始。"
                    ],
                },
                {
                    text: [
                        "That's all, go ahead.",
                        "Eso es todo, adelante.",
                    "就这些，去吧。"
                    ],
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('lorelei');
                    } 
                },
            ],
            [
                {
                    text: [
                        "It can't be...!",
                        "¡No puede ser...!",
                    "不可能……！"
                    ],
                    cb: () => {
                        main.player.achievement[3].status = true;
                        main.player.unlockAchievement(3);
                    } 
                },
                {
                    text: [
                        "How did you manage to beat me...?",
                        "¿Cómo pudiste superarme...?",
                    "你是怎么打败我的……？"
                    ],
                },
                {
                    text: [
                        "I thought I had everything under control, but it seems you are the true champion.",
                        "Pensé que tenía todo bajo control, pero parece que tú eres el verdadero campeón.",
                    "我以为一切尽在掌握，但看来你才是真正的冠军。"
                    ],
                },
                {
                    text: [
                        "Your talent and your Pokémon are impressive.",
                        "Tu talento y tus Pokémon son impresionantes.",
                    "你的才华和你的宝可梦令人印象深刻。"
                    ],
                },
                {
                    text: [
                        "Let me share with you my signature move.",
                        "Déjame compartir contigo mi movimiento estrella.",
                    "让我与你分享我的招牌招式。"
                    ],
                },
                {
                    text: [
                        "Here is TM154, it contains the move Prismatic Pledge.",
                        "Ten la MT154, contiene el movimiento Voto prismático.",
                    "这是TM154，包含了招式棱彩誓约。"
                    ],
                    reward: {
                        item: item.tm.tm154,
                        amount: 1
                    },
                },
                {
                    text: [
                        "This is not the end, I will train even harder for our next battle.",
                        "Este no es el final, entrenaré aún más duro para nuestra próxima batalla.",
                    "这不是结束，我会为了我们的下一次对战更加努力训练。"
                    ],
                },
                {
                    text: [
                        "Until then, let the battles and adventure continue!",
                        "¡Hasta entonces, que sigan los combates y la aventura!",
                    "在那之前，让对战和冒险继续吧！"
                    ],
                },
                {
                    cb: () => {
                        main.player.levelCap = 100;
                        main.player.setHallOfFame(0);

                        main.dialogue.endDialogue();
                        main.npcs['pokemonLeague'].name = ['Pokémon League Receptionist', 'Recepcionista de la Liga Pokémon', '宝可梦联盟接待员'];
                        main.npcs['pokemonLeague'].state = 2;
                        main.dialogue.startDialogue(main.npcs['pokemonLeague']);
                    } 
                }
            ],
            [
                {
                    text: [
                        "Congratulations, Trainer!",
                        "¡Felicidades, Entrenador!",
                    "恭喜你，训练家！"
                    ],
                },
                {
                    text: [
                        "You have achieved something that very few can...",
                        "Has logrado algo que muy pocos pueden...",
                    "你达成了很少有人能做到的成就……"
                    ],
                },
                {
                    text: [
                        "Completing the Pokémon League!",
                        "¡Completar la Liga Pokémon!",
                    "完成了宝可梦联盟！"
                    ],
                },
                {
                    text: [
                        "Your Pokémon have been added to the Hall of Fame, a well-deserved honor.",
                        "Tus Pokémon han sido añadidos al Salón de la Fama, un honor bien merecido.",
                    "你的宝可梦已加入名人堂，这是当之无愧的荣誉。"
                    ],
                },
                {
                    text: [
                        "To celebrate your success, I give you this Lithic Stone.",
                        "Para celebrar tu éxito, te entrego esta Piedra Lítica.",
                    "为了庆祝你的成功，我给你这块石碑碎片。"
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[9].progress[0]++;
                        main.player.achievement[10].progress[0]++;
                        if (main.player.achievement[9].progress[0] == main.player.achievement[9].progress[1]) {
                            main.player.achievement[9].status = true;
                            main.player.unlockAchievement(9);
                        }
                    }
                },
                {
                    text: [
                        "From now on, you can train your Pokémon up to level 100, so get ready for even greater challenges.",
                        "A partir de ahora, podrás entrenar a tus Pokémon hasta el nivel 100, así que prepárate para desafíos aún mayores.",
                    "从现在起，你可以将宝可梦训练到100级，为更大的挑战做好准备吧。"
                    ],
                },
                {
                    text: [
                        "And if you want, you can challenge the League a second time...",
                        "Y si quieres, puedes volver a enfrentar la Liga una segunda vez...",
                    "如果你想，可以再次挑战联盟……"
                    ],
                },
                {
                    text: [
                        "But I warn you: the Elite Four won't show mercy next time.",
                        "Pero te advierto: los Altos Mandos no tendrán piedad la próxima vez.",
                    "但我警告你：四天王下次不会手下留情的。"
                    ],
                },
                {
                    text: [
                        "Keep your spirits up!",
                        "¡Mucho ánimo!",
                    "打起精神来！"
                    ],
                    state: 3
                },
            ],
            [
                {
                    text: [
                        "Welcome to the Pokémon League.",
                        "Bienvenido a la Liga Pokémon.",
                    "欢迎来到宝可梦联盟。"
                    ],
                },
                {
                    text: [
                        "Are you ready for the Champion Challenge?",
                        "¿Estás preparado para el Desafío de Campeones?",
                    "你准备好挑战冠军了吗？"
                    ],
                },
                {
                    text: [
                        "You already know the rules.",
                        "Las reglas ya las conoces.",
                    "你已经知道规则了。"
                    ],
                },
                {
                    text: [
                        "Go ahead!",
                        "¡Adelante!",
                    "去吧！"
                    ],
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('rival1');
                    } 
                },
            ],
            [
                {
                    text: [
                        "Incredible...",
                        "Increíble...",
                    "难以置信……"
                    ],
                    cb: () => {
                        main.player.achievement[4].status = true;
                        main.player.unlockAchievement(4);
                    } 
                },
                {
                    text: [
                        "I knew you were strong, but this... this has surpassed all my expectations.",
                        "Sabía que eras fuerte, pero esto... esto ha superado todas mis expectativas",
                    "我知道你很强，但这……这超出了我所有的预期。"
                    ],
                },
                {
                    text: [
                        "You have defeated me! Someone who has spent a lifetime studying Pokémon.",
                        "¡Me has vencido! A mí, que llevo toda una vida estudiando Pokémon",
                    "你打败了我！一个花了一辈子研究宝可梦的人。"
                    ],
                },
                {
                    text: [
                        "You have shown that strength isn't just in stats... but in the bond between you and your Pokémon.",
                        "Has demostrado que la fuerza no solo está en las estadísticas... sino en el vínculo entre tú y tus Pokémon.",
                    "你证明了力量不只在于数值……而在于你和宝可梦之间的羁绊。"
                    ],
                },
                {
                    text: [
                        "Not many can say they defeated Professor Oak in battle.",
                        "No muchos pueden decir que derrotaron al Profesor Oak en combate.",
                    "没有多少人能说自己在战斗中击败了大木博士。"
                    ],
                },
                {
                    text: [
                        "But this is not the end... not for you.",
                        "Pero esto no es el final... no para ti.",
                    "但这并不是终点……对你来说不是。"
                    ],
                },
                {
                    text: [
                        "The true adventures begin when you think you've seen it all.",
                        "Las verdaderas aventuras comienzan cuando crees haberlo visto todo.",
                    "真正的冒险从你以为已经看遍一切时才开始。"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    cb: () => {
                        main.player.setHallOfFame(1);
                        main.dialogue.endDialogue();
                        main.npcs['pokemonLeague'].name = ['Pokémon League Receptionist', 'Recepcionista de la Liga Pokémon', '宝可梦联盟接待员'],
                        main.npcs['pokemonLeague'].state = 5;
                        main.dialogue.startDialogue(main.npcs['pokemonLeague']); 
                    } 
                }
            ],
            [
                {
                    text: [
                        "Congratulations, Champion!",
                        "¡Felicidades, Campeón!",
                    "恭喜你，冠军！"
                    ],
                },
                {
                    text: [
                        "You have even defeated Professor Oak.",
                        "Has vencido incluso al Profesor Oak.",
                    "你甚至击败了大木博士。"
                    ],
                },
                {
                    text: [
                        "You are a living legend!",
                        "¡Eres una leyenda viviente!",
                    "你是一个活着的传奇！"
                    ],
                },
                {
                    text: [
                        "Your team has been registered in the Hall of Fame.",
                        "Tu equipo ha sido registrado en el Hall de la Fama.",
                    "你的队伍已经登记在名人堂了。"
                    ],
                },
                {
                    text: [
                        "But this will be the last time.",
                        "Pero esta será la última vez.",
                    "但这将是最后一次。"
                    ],
                },
                {
                    text: [
                        "The Pokémon League will no longer be available to you.",
                        "La Liga Pokémon ya no estará disponible para ti.",
                    "宝可梦联盟将不再对你开放。"
                    ],
                },
                {
                    text: [
                        "You have surpassed everything this place could offer you.",
                        "Has superado todo lo que este lugar podía ofrecerte.",
                    "你已经超越了这个地方能给你的一切。"
                    ],
                },
                {
                    text: [
                        "From now on, you must seek challenges at your level.",
                        "A partir de ahora, deberás buscar desafíos a tu nivel.",
                    "从现在开始，你必须寻找与你水平相当的挑战。"
                    ],
                },
                {
                    text: [
                        "Good luck, Champion.",
                        "Buena suerte, Campeón.",
                    "祝你好运，冠军。"
                    ],
                    state: 6
                },
            ],
            [
                {
                    text: [
                        "Hello, Champion!",
                        "¡Hola, Campeón!",
                    "你好，冠军！"
                    ],
                },
                {
                    text: [
                        "Remember that you can no longer register for the League.",
                        "Recuerda que ya no puedes inscribirte en la Liga.",
                    "记住你不能再报名参加联盟了。"
                    ],
                },
                {
                    text: [
                        "We have to make room for the new talents.",
                        "Hay que dejar espacio a las nuevas promesas.",
                    "我们必须给新人才腾出空间。"
                    ],
                },
            ],
        ]
    },
    // RUTA 29
    bugManiacRoute29: {
        name: ['Bug Maniac', 'Bichomaníaco', '昆虫狂'],
        state: savedStates.bugManiacRoute29 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hi! I love Bug-type Pokémon.",
                        "¡Hola! Me encantan los Pokémon bicho.",
                    "嗨！我喜欢虫系宝可梦。"
                    ],
                },
                {
                    text: [
                        "They're fast, clever, and cover everything in webs!",
                        "¡Son rápidos, astutos y llenan todo de telarañas!",
                    "它们快速、聪明，还会用蛛网覆盖一切！"
                    ],
                },
                {
                    text: [
                        "The other day, my Spinarak spun a web so sticky even a Doduo would get trapped in it.",
                        "El otro día mi Spinarak tejió una red tan pegajosa que hasta un Doduo quedaría atrapado.",
                    "前几天我的圆丝蛛织了一张网，黏得连嘟嘟都会被困住。"
                    ],
                },
                {
                    text: [
                        "来，拿着这个TM as a gift。",
                        "Toma, te regalo esta MT.",
                    "给，这个招式学习器送给你。"
                    ],
                    reward: {
                        item: item.tm.tm33, 
                        amount: 1
                    },
                },
                {
                    text: [
                        "Teach your Pokémon the move String Shot.",
                        "Enseña a tus Pokémon el movimiento Disparo demora.",
                    "教你的宝可梦吐丝招式。"
                    ],
                },
                {
                    text: [
                        "It's not very strong, but it can slow down the enemy.",
                        "No es muy fuerte, pero puede ralentizar al enemigo.",
                    "它不是很强，但可以减缓敌人的速度。"
                    ],
                },
                {
                    text: [
                        "Sometimes, a bit of patience wins battles!",
                        "¡A veces, un poco de paciencia gana combates!",
                    "有时候，一点耐心就能赢得战斗！"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Did you like String Shot?",
                        "¿Te gustó Disparo demora?",
                    "你喜欢吐丝吗？"
                    ],
                },
                {
                    text: [
                        "It's perfect for gaining an edge over slow Pokémon!",
                        "¡Es ideal para sacar ventaja a Pokémon lentos!",
                    "对付慢速宝可梦有奇效！"
                    ],
                },
                {
                    text: [
                        "And it even sounds sticky.",
                        "Y además, suena pegajoso.",
                    "而且它听起来就很黏。"
                    ],
                },
                {
                    text: [
                        "Blup!",
                        "¡Blup!",
                    "咕噜！"
                    ],
                },
            ]
        ]
    },
    burglarRoute29: {
        name: ['Burglar', 'Ladrón', '小偷'],
        state: savedStates.burglarRoute29 ?? 0,
        dialogues: [
            [ 
                {
                    text: [
                        "Hey, you!",
                        "¡Oye, tú!",
                    "嘿，你！"
                    ],
                },
                {
                    text: [
                        "Don't be scared, I've already hung up my mask.",
                        "No te asustes, ya colgué el antifaz.",
                    "别害怕，我已经摘下面具了。"
                    ],
                },
                {
                    text: [
                        "I'm in rehab now, and part of that is doing good deeds.",
                        "Ahora estoy en proceso de rehabilitación, y parte de eso es hacer buenas acciones.",
                    "我现在在改过自新，做善事是其中的一部分。"
                    ],
                },
                {
                    text: [
    "Look, I rescued this some time ago from a backpack that...",
    "看，这是我前阵子从某个背包里救出来的……",
    "看，这是我前阵子从某个背包里救出来的……"
],
                },
                {
                    text: [
                        "Let's say I \"found\".",
                        'Digamos que "我遇到了".',
                        "就当是我“捡到的”吧。",
                    ],
                },
                {
                    text: [
                        "It's a Pokémon Egg!",
                        "¡Es un huevo Pokémon!",
                    "是宝可梦的蛋！"
                    ],
                },
                {
                    text: [
                        "Don't ask what species it is, I have no idea.",
                        "No preguntes de qué especie, no lo sé.",
                    "别问这是什么物种，我也不知道。"
                    ],
                },
                {
                    text: [
                        "Something special might hatch from it, do you want it?",
                        "Puede que de él salga algo especial, ¿lo quieres?",
                    "可能会孵出什么特别的东西，你要吗？"
                    ],
                },
                {
                     text: [
                        "Here you go.",
                        "Toma, quédatelo.",
                    "给你。"
                    ],
                    reward: {
                        item: item.consumable.stolenEgg,
                        amount: 1
                    },
                },
                {
                    text: [
                        "To make it hatch, you need to move, battle, let your team experience the wild.",
                        "Para que nazca necesitas moverte, luchar, hacer que tu equipo sienta la vida salvaje.",
                    "要让它孵化，你需要走路、战斗、让你的队伍体验野外。"
                    ],
                },
                {
                    text: [
                        "The more wild battles you have, the closer you'll be to hearing that first \"pika!\".",
                        'Cuantos más combates salvajes hagas, más cerca estarás de oír ese primer "¡pika!".',
                        "野生对战次数越多，你就越接近听到第一声“皮卡！”。",
                    ],
                },
                {
                    text: [
    "... Or whatever sound it makes.",
    "……或者不管它发出什么声音。",
    "……或者不管它发出什么声音。"
],
                    state: 1
                },
            ],
            [ 
                {
                     text: [
                        "Everything okay?",
                        "¿Todo bien?",
                    "一切还好吗？"
                    ],
                },

            ],

        ]
    },
    signRoute29A: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Pokémon hide in tall grass!",
                        "¡Los Pokémon se ocultan entre la hierba alta!",
                        "宝可梦藏在草丛里！"
                    ]
                },
            ]
        ]
    },
    signRoute29B: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                   text: [
                        "Watch out for PASSAGE ROUTES, you'll need to complete a series of wild battles to move forward.",
                        "Cuidado con las RUTAS DE PASO, deberás completar una serie de combates salvajes para poder avanzar.",
                    "小心通道路线，你需要完成一系列野生战斗才能前进。"
                    ]

                },
            ]
        ]
    },
    signRoute29C: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Ledges only go one way down!",
                        "¡Los bordillos solo son de bajada!",
                        "悬崖只能单向跳下！"
                    ]
                },
            ]
        ]
    },
    signRoute29D: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "When one of your Pokémon's experience is full, level it up via: MENU -> TEAM -> POKÉMON",
                        "Cuando la experiencia de uno de tus Pokémon llegue a su máximo, sube de nivel desde: MENÚ -> EQUIPO -> POKEMON",
                    "当你的宝可梦经验值满后，通过以下方式升级：菜单 → 队伍 → 宝可梦"
                    ]
                },
            ]
        ]
    },
    mansionRoute29: {
        name: ['Mr. Fontemon', 'Sr. Fontemón', 'Fontemon先生'],
        state: savedStates.mansionRoute29 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh, finally! The new gardener!",
                        "¡Oh, por fin! ¡El jardinero nuevo!",
                    "哦，终于来了！新园丁！"
                    ],
                },
                {
                    text: [
                        "You've trimmed that hedge with masterful precision.",
                        "Has podado ese seto con una precisión magistral.",
                    "你修剪那树篱的手法堪称大师级精准。"
                    ],
                },
                {
                    text: [
                        "Pure botanical art!",
                        "¡Arte botánica en estado puro!",
                    "纯粹的园艺艺术！"
                    ],
                },
                {
                    text: [
                        "How did you do it? Never mind!",
                        "¿Cómo lo has hecho? ¡No importa!",
                    "你怎么做到的？算了不用说了！"
                    ],
                },
                {
                    text: [
                        "I'm impressed.",
                        "Estoy impresionado.",
                    "我很佩服。"
                    ],
                },
                {
                    text: [
                        "Take 300 chips from my casino as a small token of gratitude.",
                        "Toma 300 fichas de mi casino como una pequeña muestra de gratitud.",
                    "从我的赌场拿300筹码，作为一点心意。"
                    ],
                    reward: {
                        item: item.key.token,
                        amount: 300
                    },
                    cb: () => {
                        if (!main.player.achievement[34].status) {
                            main.player.achievement[34].progress[0] += 300;
                            if (main.player.achievement[34].progress[0] >= main.player.achievement[34].progress[1]) {
                                main.player.achievement[34].status = true;
                                main.player.unlockAchievement(34);
                            }
                        };
                        if (!main.player.achievement[36].status) {
                            main.player.achievement[36].progress[0] += 300;
                            if (main.player.achievement[36].progress[0] >= main.player.achievement[36].progress[1]) {
                                main.player.achievement[36].status = true;
                                main.player.unlockAchievement(36);
                            }
                        };
                        if (!main.player.achievement[38].status) {
                            main.player.achievement[38].progress[0] += 300;
                            if (main.player.achievement[38].progress[0] >= main.player.achievement[38].progress[1]) {
                                main.player.achievement[38].status = true;
                                main.player.unlockAchievement(38);
                            }
                        };
                    }
                },
                {
                    text: [
                        "And also this Union Ticket.",
                        "Y también este Ticket Unión.",
                    "还有这张联合券。"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Don't ask why I had it in my pocket, wealth is like that.",
                        "No preguntes por qué lo tenía en el bolsillo, la riqueza es así.",
                    "别问我为什么把它放在口袋里，财富就是这样。"
                    ],
                },
                {
                    text: [
                        "Oh, and of course: you're welcome at my humble mansion anytime.",
                        "Ah, y por supuesto: estás invitado a mi humilde mansión cuando quieras.",
                    "哦，当然：随时欢迎你来我的寒舍。"
                    ],
                },
                {
                    text: [
                        "Some extremely rare Pokémon roam around here.",
                        "Algunos Pokémon rarísimos se pasean por aquí.",
                    "这里游荡着一些极其稀有的宝可梦。"
                    ],
                    state: 1
                },
            ],
            [   
                {
                    text: [
                        "Go ahead, young gardener.",
                        "Adelante, joven jardinero.",
                    "继续前进吧，年轻的园丁。"
                    ],
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.route.open({
                            type: 'routeBattle',
                            title: [`Mansion`, `Mansión`, `大宅`],
                            background: './assets/images/background/battle1.png',
                            pokemon: [ 
                                { name: 'raticate', minLevel: 41, maxLevel: 50, chance: 12 }, 
                                { name: 'furret', minLevel: 41, maxLevel: 50, chance: 12 }, 
                                { name: 'pidgeotto', minLevel: 41, maxLevel: 50, chance: 12 }, 
                                { name: 'noctowl', minLevel: 41, maxLevel: 50, chance: 12 }, 
                                { name: 'skarmory', minLevel: 41, maxLevel: 50, chance: 6 }, 
                                { name: 'heracross', minLevel: 41, maxLevel: 50, chance: 5 }, 
                                { name: 'pinsir', minLevel: 41, maxLevel: 50, chance: 5 },
                                { name: 'snorlax', minLevel: 41, maxLevel: 50, chance: 4 },
                                { name: 'dratini', minLevel: 41, maxLevel: 50, chance: 4 },
                                { name: 'larvitar', minLevel: 41, maxLevel: 50, chance: 4 },
                                { name: 'dragonair', minLevel: 41, maxLevel: 50, chance: 3 },
                                { name: 'pupitar', minLevel: 41, maxLevel: 50, chance: 3 },
                                { name: 'squirtle', minLevel: 41, maxLevel: 50, chance: 2 },
                                { name: 'charmander', minLevel: 41, maxLevel: 50, chance: 2 },
                                { name: 'bulbasaur', minLevel: 41, maxLevel: 50, chance: 2 },
                                { name: 'totodile', minLevel: 41, maxLevel: 50, chance: 2 },
                                { name: 'cyndaquil', minLevel: 41, maxLevel: 50, chance: 2 },
                                { name: 'chikorita', minLevel: 41, maxLevel: 50, chance: 2 },
                                { name: 'wartortle', minLevel: 41, maxLevel: 50, chance: 1 },
                                { name: 'charmeleon', minLevel: 41, maxLevel: 50, chance: 1 },
                                { name: 'ivysaur', minLevel: 41, maxLevel: 50, chance: 1 },
                                { name: 'croconaw', minLevel: 41, maxLevel: 50, chance: 1 },
                                { name: 'quilava', minLevel: 41, maxLevel: 50, chance: 1 },
                                { name: 'bayleef', minLevel: 41, maxLevel: 50, chance: 1 },
                            ],
                        },);
                    },
                },   
            ]
        ]
    },
    // ROUTE 49
    wealthyManRoute49: {
        name: ['Wealthy Man', 'Magnate', '富翁'],
        state: savedStates.wealthyManRoute49 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh, are you a trainer? How quaint.",
                        "Oh, ¿eres un entrenador? Qué pintoresco.",
                    "哦，你是训练家？真有趣。"
                    ],
                },
                {
                    text: [
                        "Is that your team?",
                        "¿Ese es tu equipo?",
                    "那是你的队伍吗？"
                    ],
                },
                {
                    text: [
                        "They look like Pokémon from the adoption center.",
                        "Parecen Pokémon del centro de adopción.",
                    "它们看起来像是领养中心的宝可梦。"
                    ],
                },
                {
                    text: [
                        "Look, I don't usually talk to people without a butler.",
                        "Mira, no suelo hablar con gente que no tiene mayordomo.",
                    "听着，我通常不和没有管家的人说话。"
                    ],
                },
                {
                    text: [
                        "But today I'm feeling generous.",
                        "Pero hoy me siento generoso.",
                    "但今天我感觉很大方。"
                    ],
                },
                {
                   text: [
                        "Here, take this. It's a Amulet Coin, I found it on the gold sofa of my private jet.",
                        "Toma esto, es una Moneda Amuleto, la encontré en el sofá de oro de mi jet privado.",
                    "来，拿着这个。这是护身金币，我在私人飞机的金色沙发上找到的。"
                    ],
                    reward: {
                        item: item.key.amuletCoin,
                        amount: 1,
                    },
                    cb: () => {
                        main.player.amuletCoin = true;
                    },
                },
                {
                    text: [
                        "With it, you'll earn double the money in battles against wild Pokémon.",
                        "Con ella, ganarás el doble de dinero en combates contra Pokémon salvajes.",
                    "有了它，你在与野生宝可梦的战斗中可以获得双倍金钱。"
                    ],
                },
                {
                    text: [
                        "You're lucky to have crossed paths with me.",
                        "Qué suerte tienes de cruzarte conmigo.",
                    "你很幸运能遇到我。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Are you earning more money? I'm glad.",
                        "¿Estas ganando más dinero? Me alegro.",
                    "你在赚更多钱了吗？我很高兴。"
                    ],
                },
                {
                    text: [
                        "Maybe someday you can pay me back for the time I've wasted talking to you.",
                        "Así quizás algún día puedas pagarme el tiempo que he perdido hablándote.",
                    "也许有一天你能补偿我浪费在跟你说话上的时间。"
                    ],
                },
                {
                    text: [
                        "Just kidding.",
                        "Es broma.",
                    "开玩笑的。"
                    ],
                },
                {
                    text: [
                        "You never could.",
                        "No podrías.",
                    "你永远做不到。"
                    ],
                },
            ]
        ]
    },
    // Cherry Islet
    hermitCherryIslet: {
        name: ['Hermit', 'Hermitaño', '隐士'],
        state: savedStates.hermitCherryIslet ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Who's there?",
                        "¿Quién anda ahí?",
                    "谁在那里？"
                    ],
                },
                {
                    text: [
                        "Bah, another young one in a hurry.",
                        "Bah, otro joven con prisa.",
                    "呸，又一个着急的年轻人。"
                    ],
                },
                {
                    text: [
                        "Always running, without watching the waves.",
                        "Siempre corriendo, sin mirar las olas.",
                    "总是匆匆忙忙，不看看海浪。"
                    ],
                },
                {
                    text: [
                        "I've been watching the sea for decades.",
                        "Llevo décadas observando el mar.",
                    "我看了几十年的海。"
                    ],
                },
                {
                    text: [
                        "The currents, the winds, the secret routes... I've seen it all.",
                        "Las corrientes, los vientos, las rutas secretas... lo he visto todo.",
                    "洋流、风向、秘密路线……我都见过。"
                    ],
                },
                {
                    text: [
                        "Your water bike... yes, yes, it has potential.",
                        "Tu bici acuática... sí, sí, tiene potencial.",
                    "你的水上自行车……是的是的，它很有潜力。"
                    ],
                },
                {
                    text: [
                        "But it won't withstand those wild waters.",
                        "Pero no resistirá esas aguas rebeldes.",
                    "但它扛不住那些狂野的水域。"
                    ],
                },
                {
                    text: [
                        "Bring me a Green Apricorn and I'll make sure no current can stop your bike.",
                        "Traéme un Bonguri verde y me encargaré de que no haya corriente que frene tu bici.",
                    "给我带来绿色圆柑，我保证没有水流能阻挡你的自行车。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    condition: () => main.inventory.searchItem('apricornGreen') == undefined,
                    text: [
                        "Bring me a Green Apricorn and I'll make sure no current can stop your bike.",
                        "Traéme un Bonguri verde y me encargaré de que no haya corriente que frene tu bici.",
                    "给我带来绿色圆柑，我保证没有水流能阻挡你的自行车。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "You brought me the Green Apricorn!",
                        "¡Me has traído el Bonguri verde!",
                    "你带来了绿色圆柑！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "To be honest, I didn't think you'd find one.",
                        "Si te soy sincero, no pensé que fueras a encontrar uno.",
                    "说实话，我没想到你能找到一个。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "A promise is a promise, let's improve that floating-wheeled contraption.",
                        "Lo prometido es deuda, vamos a mejorar ese cacharro con ruedas flotantes.",
                    "承诺就是承诺，让我们来改进那个带浮轮的玩意儿。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "Give me a moment... don't look at me like that, I still have steady hands and plenty of screws.",
                        "Dame un momento... no me mires así, aún tengo manos firmes y tornillos de sobra.",
                    "给我一点时间……别那样看着我，我的手还很稳，螺丝也够多。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "Done! Now your bike can even cross the most fickle water currents.",
                        "¡Listo! Ahora esa bici tuya puede atravesar incluso las corrientes de agua más caprichosas.",
                        "搞定！现在你的自行车连最变化莫测的水流也能穿过了。",
                    ],
                    cb: () => {
                        playSound('obtain', 'ui')
                        main.player.upgradeBike();
                    },
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "The currents aren't enemies, they just test you. Just like life itself.",
                        "Las corrientes no son enemigas, solo te ponen a prueba. Como la vida misma.",
                    "洋流不是敌人，它们只是考验你。就像生活一样。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornGreen') != undefined,
                    text: [
                        "If you see a strange wave, greet it for me.",
                        "Si ves una ola rara, salúdala de mi parte.",
                    "如果你看到奇怪的浪，替我向它问好。"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornGreen'));
                    },
                    state: 2
                }
            ],
            [
               {
                    text: [
                        "Is the bike handling the currents well?",
                        "¿La bici aguanta bien las corrientes?",
                    "自行车能应付洋流了吗？"
                    ],
                },
                {
                    text: [
                        "I told you it wasn't just old scrap and rust.",
                        "Te dije que no era solo chatarra vieja y óxido.",
                    "我告诉过你它不只是一堆旧废铁和铁锈。"
                    ],
                },
                {
                    text: [
                        "Once I crossed three tides with a flat tire and a Stantler's antler as a paddle.",
                        "Una vez crucé tres mareas con una rueda pinchada y el asta de un Stantler como remo.",
                    "有一次我轮胎没气了，用惊角鹿的角当桨，穿过了三个潮汐。"
                    ],
                },
                {
                    text: [
                        "Keep pedaling, but don't forget to watch the horizon.",
                        "Sigue pedaleando, pero no olvides mirar el horizonte.",
                    "继续蹬，但别忘了看看地平线。"
                    ],
                },
            ]
        ]
    },
    // RUTA 30
    signRoute30A: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Saving your game prevents tragedies.",
                        "Guardar la partida previene tragedias.",
                    "保存游戏可以避免悲剧。"
                    ],
                },
            ]
        ]
    },
    signRoute30B: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Pokémon give more gold in wild battles than on passing routes!",
                        "¡Los Pokémon otorgan mas oro en combates salvajes que en rutas de paso!",
                    "野生宝可梦比路过的路线给更多金币！"
                    ],
                },
            ]
        ]
    },
    vesselRoute30: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute30 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "jar里有x1 Revive！",
                        "¡Hay x1 Revivir dentro la vasija!",
                    "容器里有x1 活力碎片！"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    bugCatcherRoute30: {
        name: ['Bug catcher', 'Cazabichos', '捕虫少年'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Did you know that Pokémon have preferred areas within the same route?",
                        "¿Sabías que los Pokémon tienen zonas preferidas en una misma ruta?",
                    "你知道宝可梦在同一条路线里有偏好的区域吗？"
                    ],
                },
                {
                    text: [
                        "For example, in the grass east of my house, more Caterpies appear than Weedles.",
                        "Por ejemplo, en la hierba al este de mi casa, suelen aparecer más Caterpies que Weedles.",
                    "比如，在我家东边的草丛里，绿毛虫比独角虫出现得更多。"
                    ],
                },
                {
                    text: [
                        "Sometimes I've even seen Ledybas around there.",
                        "A veces incluso he llegado a ver Ledybas por allí.",
                    "有时候我甚至在那里看到过芭瓢虫。"
                    ],
                },
                {
                    text: [
                        "Meanwhile, in the bushes south of my house, Weedles are more common than Caterpies.",
                        "En cambio, en los arbustos al sur de mi casa, los Weedles son más comunes que los Caterpies.",
                    "同时，在我家南边的灌木丛里，独角虫比绿毛虫更常见。"
                    ],
                },
                {
                    text: [
                        "And every now and then, some Spinaraks can be seen.",
                        "Y de vez en cuando se dejan ver algunos Spinaraks.",
                    "而且时不时能看到一些圆丝蛛。"
                    ],
                },
                {
                    text: [
                        "Also, many routes have a special Pokémon.",
                        "Además, muchas rutas cuentan con un Pokémon especial.",
                    "此外，很多路线都有特殊的宝可梦。"
                    ],
                },
                {
                    text: [
                        "On this route, that Pokémon is Aipom.",
                        "En esta ruta, ese Pokémon es Aipom.",
                    "在这条路线上，那只宝可梦是长尾怪手。"
                    ],
                },
                {
                    text: [
                        "You could find it anywhere on Route 30.",
                        "Podrías encontrártelo en cualquier parte de la Ruta 30.",
                    "你在30号道路的任何地方都能找到它。"
                    ],
                },
                {
                    text: [
                        "Good luck finding it!",
                        "¡Buena suerte buscándolo!",
                    "祝你好运找到它！"
                    ],
                },
            ]
        ]
    },
    kurt: {
        name: ['Kurt', 'César', '钢铁'],
        state: savedStates.kurt ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hi, I'm Kurt, an expert in Pokémon capture and Pokéball crafting.",
                        "Hola, soy César, experto en la captura de Pókemon y la creación de Pokeball.",
                    "嗨，我是Kurt，宝可梦捕捉和精灵球制作的专家。"
                    ],
                },
                {
                    text: [
                        "Would you like me to give you information about any topic?",
                        "¿Quieres que te de información sobre algún tema?",
                    "需要我给你讲解某个主题吗？"
                    ],
                    choices: [
                        {
                            text: ["Pokeball", "Pokeball", "精灵球"],     
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: ["Captures", "Capturas", "捕捉"],
                            next: 2, 
                            state: 2  
                        },
                        {
                            text: ["Nothing", "Nada", "没有"],  
                            next: "end"  
                        },
                    ]
                }
            ],
            [
                {
                    text: [
                        "Pokéballs are incredible items that attract wild Pokémon to join your team.",
                        "Las Pokeball son objetos increíbles que atraen a los Pokémon salvajes a que se unan a tu equipo.",
                    "精灵球是吸引野生宝可梦加入你队伍的不可思议的道具。"
                    ],
                },
                {
                    text: [
                        "Just carrying a Pokéball with you can make a wild Pokémon willing to accept you as a trainer.",
                        "Solo con llevar una Pokéball contigo, un Pokémon salvaje puede sentirse dispuesto a aceptarte como entrenador.",
                    "只要随身带着精灵球，野生宝可梦就可能愿意接受你作为训练师。"
                    ],
                },
                {
                    text: [
                        "Each type of Pokéball has a multiplier that increases your chances of capturing a Pokémon.",
                        "Cada tipo de Pokéball tiene un multiplicador que aumenta tus posibilidades de capturar un Pokémon.",
                    "每种精灵球都有一个倍率，可以增加你捕捉宝可梦的几率。"
                    ],
                },
                {
                    text: [
                        "The standard Pokéball has a base multiplier of 1.",
                        "La Pokéball común tiene un multiplicador base de 1.",
                    "标准精灵球的基础倍率是1。"
                    ],
                },
                {
                    text: [
                        "In contrast, the Great Ball raises that value to 1.25.",
                        "En cambio, la Superball aumenta ese valor a 1.25.",
                    "相比之下，超级球将倍率提升到1.25。"
                    ],
                },
                {
                    text: [
                        "The better the Pokéball you use, the easier it will be for Pokémon to want to be part of your team.",
                        "Cuanto mejor sea la Pokéball que uses, más fácil será que los Pokémon quieran ser parte de tu equipo.",
                    "你用的精灵球越好，宝可梦就越容易愿意加入你的队伍。"
                    ],
                },
                {
                    text: [
                        "For example, if a Pokémon has a 5% chance of being caught with a Pokéball, with a Great Ball it goes up to 6.25%.",
                        "Por ejemplo, si un Pokémon tiene un 5% de probabilidad de ser capturado con una Pokéball, con una Superball sube a 6.25%.",
                    "例如，如果一只宝可梦用精灵球有5%的捕捉几率，用超级球就会提升到6.25%。"
                    ],
                },
                {
                    text: [
                        "I specialize in improving Pokéballs, and if I had my tools with me, I could upgrade yours.",
                        "Yo me dedico a mejorar Pokéballs y, si tuviera mis herramientas conmigo, podría mejorar la tuya.",
                    "我专门研究如何改进精灵球，如果我工具在手边，我可以帮你升级你的。"
                    ],
                },
                {
                    text: [
                        "Fortunately, my son is in our workshop and can help you.",
                        "Afortunadamente, mi hijo está en nuestro taller y podrá ayudarte.",
                    "幸运的是，我儿子在我们工坊里可以帮你。"
                    ],
                },
                {
                    text: [
                        "You can find him on Route 37.",
                        "Puedes encontrarlo en la Ruta 37.",
                    "你可以在37号道路找到他。"
                    ],
                    state: 0
                },
            ],
            [
               {
                    text: [
                        "Wild Pokémon are attracted to trainers carrying a Pokéball.",
                        "Los Pokémon salvajes se sienten atraídos a entrenadores que portan una Pokéball.",
                    "野生宝可梦会被携带精灵球的训练师吸引。"
                    ],
                },
                {
                    text: [
                        "You already have a Pokéball, so you are eligible for any wild Pokémon to consider joining your team.",
                        "Tú ya tienes una Pokeball, así que eres apto para que cualquier Pokémon salvaje considere unirse a tu equipo.",
                    "你已经有一个精灵球了，所以野生宝可梦会考虑加入你的队伍。"
                    ],
                },
                {
                    text: [
                        "When this happens, you will have two options: accept it or reject it.",
                        "Cuando esto suceda, tendrás dos opciones: aceptarlo o rechazarlo.",
                    "当这种情况发生时，你有两个选择：接受或拒绝。"
                    ],
                },
                {
                    text: [
                        "If you accept, it will join you or be sent to your PC if you have no space.",
                        "Si lo aceptas se unirá a ti o se enviará a tu Caja del Centro Pokémon si no tienes espacio.",
                    "如果接受，它会加入你，或者如果你没有空间就会被送到电脑里。"
                    ],
                },
                {
                    text: [
                        "If you reject it, you will lose that opportunity forever, so think carefully.",
                        "Si lo rechazás, perderás esa oportunidad para siempre, así que piénsalo bien.",
                    "如果拒绝，你将永远失去那个机会，所以要仔细考虑。"
                    ],
                },
                {
                    text: [
                        "To capture Pokémon, make sure to activate 'Capture Mode' during wild battles.",
                        "Para poder capturar Pokémon, asegúrate de activar el 'Modo Captura' durante los combates salvajes.",
                    "要捕捉宝可梦，记得在野生战斗中开启'捕获模式'。"
                    ],
                },
                {
                    text: [
                        "If you deactivate it, Pokémon won't try to join you, which can be useful if you prefer training without interruptions.",
                        "Si lo desactivas, los Pokémon no intentarán unirse a ti, lo que puede ser útil si prefieres entrenar sin interrupciones.",
                    "如果你关闭它，宝可梦就不会尝试加入你，如果你不想被打断训练的话这很有用。"
                    ],
                },
                {
                    text: [
                        "The chances of capturing a wild Pokémon are quite low, especially if you use a simple Pokéball.",
                        "Las probabilidades de capturar un Pokémon salvaje son bastante bajas, especialmente si usas una simple Pokéball.",
                    "捕捉野生宝可梦的几率相当低，特别是只用普通精灵球的时候。"
                    ],
                },
                {
                    text: [
                        "But don't worry! With patience and some luck, you'll surely add some Pokémon to your team.",
                        "¡Pero no te preocupes! Con paciencia y algo de suerte, seguro que conseguirás añadir algunos Pokémon a tu equipo.",
                    "不过别担心！只要有耐心和一点运气，你一定能给队伍添几只宝可梦。"
                    ],
                },
                {
                    text: [
                        "By the way, there's a third way you should know about...",
                        "Por cierto, hay un tercer modo que debes conocer...",
                    "顺便说一句，还有第三种方式你应该知道……"
                    ],
                },
                {
                    text: [
                        "It's 'Shiny Mode', it's like having it turned off, but if a Shiny Pokémon appears, it will capture it.",
                        "Es el 'Modo Shiny', es como tenerlo desactivado, pero si un Pokémon Variocolor aparece, lo capturará.",
                    "这是'闪光模式'，就像关闭状态一样，但如果有闪光宝可梦出现，就会捕捉它。"
                    ],
                },
                {
                    text: [
                        "You should know that a Shiny Pokémon will always join you, as long as you don't have 'Capture Mode' disabled.",
                        "Has de saber que un Pokémon Variocolor siempre se unirá a ti, mientras no tengas el 'Modo Captura' desactivado.",
                    "你要知道闪光宝可梦总是会加入你，只要你的捕获模式没被禁用。"
                    ],
                },
                {
                    text: [
                        "I wish you the best of luck in your captures, trainer!",
                        "¡Te deseo mucha suerte en tus capturas, entrenador!",
                    "祝你捕捉好运，训练家！"
                    ],
                    state: 0
                },
            ],
            [
                {
                    text: [
                        "Hi, I'm César, an expert in Pokémon capture and Pokéball crafting.",
                        "Hola, soy César, experto en la captura de Pokémon y la creación de Pokéball.",
                    "嗨，我是César，宝可梦捕捉和精灵球制作的专家。"
                    ],
                },
                {
                    text: [
                        "Do you already have an Ultra Ball?",
                        "¿Ya tienes una Ultraball?",
                    "你已经有高级球了吗？"
                    ],
                },
                {
                     text: [
                        "Amazing!",
                        "¡Increíble!",
                        "太神奇了！"
                    ],
                },
                {
                    text: [
                        "How come?",
                        "¿Cómo?",
                    "怎么会？"
                    ],
                },
                {
                    text: [
                        "Do you want to improve it even more?",
                        "¿Quieres mejorarla aún más?",
                    "你想把它改进得更厉害吗？"
                    ],
                },
                {
                    text: [
                        "Well... I won't lie to you.",
                        "Bueno... no te voy a mentir.",
                    "好吧……我不骗你。"
                    ],
                },
                {
                    text: [
                        "I'm capable of crafting the legendary Master Ball.",
                        "Soy capaz de fabricar la legendaria Masterball.",
                    "我能制作传说中的大师球。"
                    ],
                },
                {
                    text: [
                        "But of course, it's not easy.",
                        "Pero claro, no es cosa fácil.",
                    "但当然，这不简单。"
                    ],
                },
                 {
                    text: [
                        "I'll need some very... specific ingredients.",
                        "Voy a necesitar algunos ingredientes muy... específicos.",
                    "我需要一些非常……特定的材料。"
                    ],
                },
                {
                    text: [
                        "A bit of scrap.",
                        "Un poco de chatarra.",
                    "一点废铁。"
                    ],
                },
                {
                    text: [
                        "A TM of False Swipe.",
                        "Una MT de Falso tortazo.",
                    "一个点到为止招式学习器。"
                    ],
                },
                {
                    text: [
                        "A Magikarp of a Pokémon League champion.",
                        "El Magikarp de un campeón de la Liga Pokémon.",
                    "宝可梦联盟冠军的鲤鱼王。"
                    ],
                },
                {
                    text: [
                        "The leek of a Farfetch'd.",
                        "El puerro de un Farfetch'd.",
                    "大葱鸭的大葱。"
                    ],
                },
                {
                    text: [
                        "A bottle of Moomoo Milk.",
                        "Una botella de Leche Mu-mu.",
                    "一瓶哞哞牛奶。"
                    ],
                },
                {
                    text: [
                        "A letter signed by Giovanni asking for forgiveness.",
                        "Una carta firmada por Giovanni pidiendo perdón.",
                    "一封坂木签名的道歉信。"
                    ],
                },
                {
                    text: [
                        "The shadow of a Haunter enclosed in an urn.",
                        "La sombra de un Haunter encerrada en una urna.",
                    "鬼斯通的影子封在骨灰盒里。"
                    ],
                },
                {
                    text: [
                        "A feather of Ho-Oh.",
                        "Una pluma de Ho-Oh.",
                    "凤王的一根羽毛。"
                    ],
                },
                {
                    text: [
                        "And... that's it.",
                        "Y... ya está.",
                    "然后……就这些了。"
                    ],
                },
                {
                    text: [
                        "With that, I could make you a Master Ball.",
                        "Con eso podría hacerte una Master Ball.",
                    "有了那个，我就能给你做一个大师球。"
                    ],
                },
                {
                    text: [
                        "But of course... no one has all that.",
                        "Pero claro... nadie tiene todo eso.",
                    "但当然……没人有这些东西。"
                    ],
                },
                {
                    text: [
                        "Right?",
                        "¿No?",
                    "对吧？"
                    ],
                    state: 4
                },
            ],
            [
                {
                    text: [
                        "Let me repeat the ingredients needed for the Master Ball:",
                        "Te repito los ingredientes necesarios para la Masterball:",
                    "我再重复一遍制作大师球所需的材料："
                    ],
                },
                {
                    text: [
                        "Some scrap.",
                        "Algo de chatarra.",
                    "一些废铁。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('scrap')),
                    text: [
                        "Okay, you bring the scrap.",
                        "Bien, traes la chatarra.",
                    "好，你带了废铁。"
                    ],
                },
                {
                    text: [
                        "A TM of False Swipe.",
                        "Una MT de Falso Tortazo.",
                    "一个点到为止招式学习器。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('tm45')),
                    text: [
                        "Nice, you have the TM.",
                        "Vale, tienes la MT.",
                    "不错，你有招式学习器。"
                    ],
                },
                {
                    text: [
                        "A Magikarp from a Pokémon League champion.",
                        "Un Magikarp de un campeón de la Liga Pokémon.",
                    "一只来自宝可梦联盟冠军的鲤鱼王。"
                    ],
                },
                {
                    condition: () => (main.team.isPokemonInTeam('MAGIKARP') && main.player.achievement[3].status),
                    text: [
                        "That Magikarp you brought will do.",
                        "Ese Magikarp que traes me sirve.",
                    "你带来的鲤鱼王就行了。"
                    ],
                },
                {
                    text: [
                        "The leek of a Farfetch'd.",
                        "El puerro de un Farfetch'd.",
                    "大葱鸭的大葱。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('leek')),
                    text: [
                        "I see you're bringing the leek...",
                        "Ya veo que traes el puerro...",
                    "我看到你带了大葱……"
                    ],
                },
                {
                    text: [
                        "A bottle of Moomoo Milk.",
                        "Una botella de Leche Mu-mu.",
                    "一瓶哞哞牛奶。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('milk')),
                    text: [
                        "Mmm... you bring the milk...",
                        "Mmm... traes la leche...",
                    "嗯……你带了牛奶……"
                    ],
                },
                {
                    text: [
                        "A letter signed by Giovanni asking for forgiveness.",
                        "Una carta firmada por Giovanni pidiendo perdón.",
                    "一封坂木签名的道歉信。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('giovanniApologyLetter')),
                    text: [
                        "Um... how did you get the letter? It wasn't necessary, I was just kidding.",
                        "Esto... ¿cómo has conseguido la carta? No era necesaria, te lo dije de broma.",
                    "呃……你怎么拿到信的？其实不需要的，我只是开个玩笑。"
                    ],
                },
                {
                    text: [
                        "The shadow of a Haunter enclosed in an urn.",
                        "La sombra de un Haunter encerrada en una urna.",
                    "鬼斯通的影子封在骨灰盒里。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('urnHaunter')),
                    text: [
                        "Oh... you managed to... bottle a Haunter...",
                        "Oh... has conseguido... embotellar a un Haunter...",
                    "哦……你居然……把鬼斯通装瓶了……"
                    ],
                },
                {
                    text: [
                        "A feather of Ho-Oh.",
                        "Una pluma de Ho-Oh.",
                    "凤王的一根羽毛。"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('feather')),
                    text: [
                        "That same feather!",
                        "¡Esa misma pluma!",
                    "就是那根羽毛！"
                    ],
                },
                {
                    condition: () => (
                        main.inventory.searchItem('scrap') && 
                        main.inventory.searchItem('tm45') && 
                        main.team.isPokemonInTeam('MAGIKARP') && 
                        main.inventory.searchItem('leek') && 
                        main.inventory.searchItem('milk') && 
                        main.inventory.searchItem('giovanniApologyLetter') && 
                        main.inventory.searchItem('urnHaunter') && 
                        main.inventory.searchItem('feather')
                    ),
                    text: [
                        "You have it all?!",
                        "¡¿Lo tienes todo?!",
                    "你全都有？！"
                    ],
                },
                {
                    condition: () => (
                        main.inventory.searchItem('scrap') && 
                        main.inventory.searchItem('tm45') && 
                        main.team.isPokemonInTeam('MAGIKARP') && 
                        main.inventory.searchItem('leek') && 
                        main.inventory.searchItem('milk') && 
                        main.inventory.searchItem('giovanniApologyLetter') && 
                        main.inventory.searchItem('urnHaunter') && 
                        main.inventory.searchItem('feather')
                    ),
                    text: [
                        "But where did you get that stuff?!",
                        "¡¿Pero de dónde has sacado esas cosas?!",
                    "但你从哪里弄来的这些东西？！"
                    ],
                },
                {
                    condition: () => (
                        main.inventory.searchItem('scrap') && 
                        main.inventory.searchItem('tm45') && 
                        main.team.isPokemonInTeam('MAGIKARP') && 
                        main.inventory.searchItem('leek') && 
                        main.inventory.searchItem('milk') && 
                        main.inventory.searchItem('giovanniApologyLetter') && 
                        main.inventory.searchItem('urnHaunter') && 
                        main.inventory.searchItem('feather')
                    ),
                    text: [
                        "Okay, I'll make you the Master Ball.",
                        "Está bien, te fabricaré la Masterball.",
                    "好的，我给你做大师球。"
                    ],
                },
                {
                    condition: () => (
                        main.inventory.searchItem('scrap') && 
                        main.inventory.searchItem('tm45') && 
                        main.team.isPokemonInTeam('MAGIKARP') && 
                        main.inventory.searchItem('leek') && 
                        main.inventory.searchItem('milk') && 
                        main.inventory.searchItem('giovanniApologyLetter') && 
                        main.inventory.searchItem('urnHaunter') && 
                        main.inventory.searchItem('feather')
                    ),
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    condition: () => (
                        main.inventory.searchItem('scrap') && 
                        main.inventory.searchItem('tm45') && 
                        main.team.isPokemonInTeam('MAGIKARP') && 
                        main.inventory.searchItem('leek') && 
                        main.inventory.searchItem('milk') && 
                        main.inventory.searchItem('giovanniApologyLetter') && 
                        main.inventory.searchItem('urnHaunter') && 
                        main.inventory.searchItem('feather')
                    ),
                    text: [
                        "Here you go.",
                        "Toma, aquí la tienes.",
                    "给你。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.player.upgradePokeball();
                    },
                    state: 5
                }
            ],
            [
                {
                    text: [
                        "I don't know how you did it, but enjoy your Master Ball.",
                        "No sé cómo lo hiciste, pero disfruta de tu Masterball.",
                    "我不知道你是怎么做到的，但请享受你的大师球吧。"
                    ],
                },
            ]
        ]
    },
    // RUTA 31
    mrPokemon: {
        name: ['Mr. Pokémon House', 'Casa del Sr. Pokémon', '宝可梦先生的家'],
        state: savedStates.mrPokemon ?? 0,
        dialogues: [
            [
                {
                    text: [
                        `Hello! You must be ${main.player.name}.`,
,
                        `你好！你一定是${main.player.name}吧。`,
                    ],
                },
                {
                    text: [
                        "Professor Elm told me you were coming.",
                        "El Profesor Elm me avisó que vendrías.",
                    "空木博士告诉我你要来。"
                    ],
                },
                {
                    text: [
                        "Are you trying to complete the Pokédex?",
                        "¿Estás intentando completar la Pokédex?",
                    "你想完成宝可梦图鉴吗？"
                    ],
                },
                {
                    text: [
                        "That sounds exciting!",
                        "¡Eso suena emocionante!",
                    "听起来很令人兴奋！"
                    ],
                },
                {
                    text: [
                        "Actually, I'm working on something that could really help you with your task.",
                        "De hecho, estoy trabajando en algo que podría ayudarte bastante con tu labor.",
                    "实际上，我正在做一些能真正帮你完成任务的东西。"
                    ],
                },
                {
                    text: [
                        "I call it: the PokéRadar.",
                        "Yo lo llamo: el Pokéradar.",
                    "我把它叫做：宝可雷达。"
                    ],
                },
                {
                    text: [
                        "It scans the tall grass and shows you which wild Pokémon you might find there.",
                        "Escanea la hierba alta y te muestra qué Pokémon salvajes podrías encontrar en ella.",
                    "它会扫描草丛，显示你可能在那里找到哪些野生宝可梦。"
                    ],
                },
                {
                    text: [
                        "Not only that, but it also shows them in order of rarity.",
                        "No solo eso, sinó que además los muestra en orden de rareza.",
                    "不仅如此，它还按稀有度顺序显示。"
                    ],
                },
                {
                    text: [
                        "Isn't that great?",
                        "¿No es genial?",
                    "是不是很棒？"
                    ],
                },
                {
                    text: [
                        "Here, I'm giving you the PokéRadar.",
                        "Ten, te hago entrega del Pokéradar.",
                    "来，我把宝可雷达给你。"
                    ],
                    reward: {
                        item: item.key.pokeRadar,
                        amount: 1
                    }, 
                },
                {
                    text: [
                        "Come on, it will help you complete the Pokédex.",
                        "Vamos, te ayudará a completar la Pokédex.",
                    "来吧，它会帮你完成宝可梦图鉴。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "What are you still doing here?",
                        "¿Qué haces aquí aún?",
                    "你还在这里干什么？"
                    ],
                },
                {
                    text: [
                        "You already have the PokéRadar, right?",
                        "Ya tienes el Pokéradar, ¿no?",
                    "你已经有宝可雷达了吧？"
                    ],
                },
                {
                    text: [
                        "Then get to tracking!",
                        "¡Entonces a rastrear!",
                    "那就去追踪吧！"
                    ],
                },
                {
                    text: [
                        "The bushes won't scan themselves.",
                        "Los arbustos no se van a escanear solos.",
                    "灌木丛不会自己扫描。"
                    ],
                },
                {
                    text: [
                        "Come on, come on.",
                        "Vamos, vamos.",
                    "快走快走。"
                    ],
                },
            ],
        ]
    },
    firefighterRoute31: {
        name: ['Firefighter', 'Bombero', '消防员'],
        state: savedStates.firefighterRoute31 ?? 0,
        dialogues: [
             [
                {
                    text: [
                        "Hello, trainer! I'm a firefighter, but I also help those starting their Pokémon journey.",
                        "¡Hola, entrenador! Soy bombero, pero también ayudo a los que empiezan su viaje Pokémon.",
                    "你好，训练师！我是消防员，但我也帮助刚开始宝可梦之旅的人。"
                    ],
                },
                {
                    text: [
                        "When you're far from a Pokémon Center, you have to improvise.",
                        "Cuando estás lejos de un Centro Pokémon, hay que improvisar.",
                    "当你远离宝可梦中心时，就得随机应变。"
                    ],
                },
                {
                    text: [
                        "Use medicine to heal them outside of battle!",
                        "¡Usa medicinas para curarlos fuera de combate!",
                    "用药在战斗外治疗它们！"
                    ],
                },
                {
                    text: [
                        "But they aren't infinite... take good care of them!",
                        "Eso sí, no son infinitas... ¡cuídalas bien!",
                    "但它们不是无限的……好好照顾它们！"
                    ],
                },
                {
                    text: [
                        "Here, these five are for you.",
                        "Toma, estas cinco son para ti.",
                    "给，这五个是给你的。"
                    ],
                    reward: {
                        item: item.consumable.medicine,
                        amount: 5
                    },
                },
                {
                    text: [
                        "I recommend saving them for long routes.",
                        "Te recomiendo ahorrarlas para rutas largas.",
                    "我建议留到长途路线用。"
                    ],
                },
                {
                    text: [
                        "You never know when the next battle will catch you off guard!",
                        "¡Nunca sabes cuándo el próximo combate te va a pillar mal parado!",
                    "你永远不知道下一场战斗什么时候会让你措手不及！"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Remember, healing in time can prevent a defeat.",
                        "Recuerda, curar a tiempo puede evitar una derrota.",
                    "记住，及时治疗可以避免失败。"
                    ],
                }
            ]
        ]
    },
    signboardRoute31: {
        name: ['Mr. Pokémon House', 'Casa del Sr. Pokémon', '宝可梦先生的家'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "House of the Pokémon Master.",
                        "Casa del Señor Pokémon.",
                    "宝可梦大师之家。"
                    ],
                },
            ]
        ]
    },
    vesselRoute32: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute32 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "jar里有x1 Union Ticket！",
                        "¡Hay x1 Ticket Unión dentro la vasija!",
                    "罐子里有x1 联合券！"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signRoute32: {
        name: ['Trainer tips', 'Pistas para entrenadores', '训练师提示'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Pay attention and look for marks in the grass to find hidden items!",
                        "Presta atención y busca marcas en el cesped para encontrar objetos ocultos!",
                        "注意观察草丛中的标记来寻找隐藏道具！"
                    ]
                },
            ]
        ]
    },
    route32HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route32HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text:[
                        "I found x1 TM20 Confusion on the ground!",
                        "¡He encontrado x1 MT20 Confusión en el suelo!",
                    "我在地上找到了x1 招式机20（念力）！"
                    ],
                    reward: {
                        item: item.tm.tm20,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    
    // CUEVA OSCURA
    signDarkCave: {
        name: ['Dark Cave', 'Cueva Oscura', '黑暗穴'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Please stop hitting Zubats. <br>The last one went to therapy.",
                        "Se ruega no golpear más Zubats. <br>El último se fue a terapia.",
                    "请别再打超音蝠了。<br>上一只已经去看心理医生了。"
                    ],
                },
            ]
        ]
    },
    // RUINAS ALFA
    ruinsOfAlphRuinA: {
        name: ['Ruin', 'Ruina', '遗迹'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>'
]
                },
            ]
        ]
    },
    ruinsOfAlphRuinB: {
        name: ['Ruin', 'Ruina', '遗迹'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>'
]
                },
            ]
        ]
    },
    ruinsOfAlphRuinC: {
        name: ['Ruin', 'Ruina', '遗迹'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>'
]  
                },
            ]
        ]
    },
    ruinsOfAlphRuinTree: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: 0,
        dialogues: [
            [
                {
                    condition: () => (main.inventory.searchItem('rareOrb') && main.team.isTypeInTeam('psychic')),
                    text: [
                        "The Strange Orb reacts when observing the tree.",
                        "El Orbe Extraño reacciona al observar el árbol.",
                    "观察这棵树时，奇异之球有了反应。"
                    ],
                    cb: () => {
                        playSound('secret1', 'ui');
                        main.routeData['ruinsOfAlph-1'] = main.routeData['ruinsOfAlph-1bis'];
                        main.location.loadLocation(main.routeData['ruinsOfAlph-1'], true);
                    }
                },
            ]
        ]
    },
    ruinsOfAlphRuinHiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.ruinsOfAlphRuinHiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Max Revive on the ground!",
                        "¡He encontrado x1 Revivir Máximo en el suelo!",
                    "我在地上找到了x1 活力块！"
                    ],
                    reward: {
                        item: item.consumable.maxRevive,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    // ENCINAR
    signIlexForest: {
        name: ['Welcome to Ilex Forest', 'Bienvenido al Encinar', '欢迎来到桐树林'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Respect nature and the rest of the Pokémon.",
                        "Respeta la naturaleza y el descanso de los Pokémon.",
                    "尊重自然和其他宝可梦。"
                    ],
                },
            ]
        ]
    },
    treeIlexForest: {
        name: ['Tree', 'Árbol', '树'],
        state: savedStates.treeIlexForest ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "A majestic tree stands out among the others...",
                        "Un majestuoso árbol resalta sobre los demás...",
                    "一棵雄伟的树在众树中脱颖而出……"
                    ],
                },
                {      
                    condition: () => main.inventory.searchItem('honey'),
                    text: [
                        "A Pokémon emerges from the tree attracted by the Honey!",
                        "¡Un Pokémon aflora del árbol atraído por la Miel!",
                    "一只宝可梦被甜甜蜜吸引，从树里出来了！"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('honey'),
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Abandoned house', 'Casa abandonada', '废弃房屋'],
                            pokemon: 'celebi',
                            level: 80,
                            ivs: {
                                hp: 121, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31, 
                            },
                            shiny: false,
                            moves: [move['gigaDrain'], move['psychic']],
                            background: './assets/images/background/battle7.png',
                            cb: () => {
                                main.npcs['treeIlexForest'].state = 1
                                main.dialogue.startDialogue(main.npcs['treeIlexForest'], false);
                            }
                        });
                    },
                },   
            ],
            [
                {      
                    text: [
                        "You have obtained a Celebi Egg!",
                        "¡Has obtenido un Huevo Celebi!",
                    "你获得了雪拉比的蛋！"
                    ],
                    reward: {
                        item: item.consumable.celebiEgg,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[66].status = true;
                        main.player.unlockAchievement(66);
                    }
                },
                {      
                    text: [
                        "You have obtained $250,000!",
                        "¡Has obtenido $250,000!",
                    "你获得了$250,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(250000);
                    },
                    state: 2
                },
            ],
            [
                {      
                    text: [
                        "A majestic tree.",
                        "Un majestuoso árbol.",
                    "一棵雄伟的树。"
                    ],
                },
            ]
        ]
    },
    // RUTA 33
    vesselARoute33: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute33 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Carbos！",
                        "¡Hay x2 Carburante dentro la vasija!",
                    "容器里有x2 速度增强剂！"
                    ],
                    reward: {
                        item: item.consumable.carbos,
                        amount: 2
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute33: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute33 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x5 Max Revive！",
                        "¡Hay x5 Revivir Máximo dentro la vasija!",
                    "容器里有x5 活力块！"
                    ],
                    reward: {
                        item: item.consumable.maxRevive,
                        amount: 5
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // RUTA 34
    pokemonDayCare: {
        name: ['Pokémon Clinic', 'Clínica Pokémon', '宝可梦诊所'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to the Pokémon Clinic.",
                        "Te damos la bienvenida a la Clínica Pokémon.",
                    "欢迎来到宝可梦诊所。"
                    ],
                },
                {
                    text: [
                        "How can we help you?",
                        "¿En qué podemos ayudarte?",
                    "我们能帮你什么？"
                    ],
                    choices: [
                        {
                           text: ["How does it work?", "¿Cómo funciona?", "怎么用？"],     
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: ["Give me an egg.", "Dame un huevo.", "给我一个蛋。"],
                            next: 2, 
                            state: 2  
                        },
                    ]
                }
            ],
            [
                {
                    text: [
                        "Once a day, we give trainers a Pokémon Egg.",
                        "Una vez por día, otorgamos a entrenadores un Huevo Pokémon.",
                    "我们每天给训练师一个宝可梦蛋。"
                    ],
                },
                {
                    text: [
                        "No tricks and totally free!",
                        "¡Sin truco y totalmente grátis!",
                    "没有花招，完全免费！"
                    ],
                },
                {
                    text: [
                        "The only condition is that the trainer must have 6 Pokémon in their team.",
                        "La única condición es que el entrenador debe tener a 6 Pokémon en el equipo.",
                    "唯一的条件是训练师队伍里必须有6只宝可梦。"
                    ],
                },
                {
                    text: [
                        "We use the DNA of each of your Pokémon to generate an altered Pokémon.",
                        "Utilizamos el ADN de cada uno de tus Pokémon para generar un Pokémon alterado.",
                    "我们利用你每只宝可梦的DNA来培育变异宝可梦。"
                    ],
                },
                {
                    text: [
                        "From each Pokémon, one of the following attributes will be randomly chosen: Species, IVs, Type 1, Type 2, Nature, and one move.",
                        "De cada Pokémon se escogerá aleatoriamente uno los siguentes atributos: Especie, IVs, Tipo 1, Tipo 2, Naturaleza y un movimiento.",
                    "从每只宝可梦身上随机选择以下属性之一：种类、个体值、属性1、属性2、性格和一个招式。"
                    ],
                },
                {
                    text: [
                        "This process is totally unpredictable and uncontrollable.",
                        "Este proceso es totalmente impredecible y no hay forma de controlarlo.",
                    "这个过程完全不可预测也不可控。"
                    ],
                },
                {
                    text: [
                        "Also, if you have shiny Pokémon on your team...",
                        "Además, si cuentas con Pokémon variocolor en tu equipo...",
                    "另外，如果你的队伍里有闪光宝可梦..."
                    ],
                },
                {
                    text: [
                        "The hatched Pokémon may also be shiny!",
                        "¡El Pokémon que nazca también podrá serlo!",
                    "孵化的宝可梦也可能是闪光的！"
                    ],
                },
                {
                    text: [
                        "This probability accumulates with every shiny Pokémon you have!",
                        "¡Esta probabilidad es acmumulable por cada Pokémon variocolor que tengas!",
                    "这个概率会随着你拥有的每只闪光宝可梦而累积！"
                    ],
                },
                {
                    text: [
                        "Isn't that amazing?",
                        "¿No te parece increible?",
                    "是不是很神奇？"
                    ],
                },
                {
                    text: [
                        "That's all I can tell you, come back anytime for your daily Egg.",
                        "Eso es todo lo que puedo contarte, vuelve cuando quieras tu Huevo diario.",
                    "我只能告诉你这些，随时回来拿你每日的蛋。"
                    ],
                    state: 0
                },
            ],
            [
                {
                    condition: () => (new Date().toDateString() == main.eventStatus.dailyEgg),
                    text: [
                        "You have already received your daily egg today.",
                        "Hoy ya has recibido tu huevo diario.",
                    "你今天已经领过每日的蛋了。"
                    ],
                    state: 0
                },
                {
                    condition: () => (main.team.pokemon.length == 6 && new Date().toDateString() != main.eventStatus.dailyEgg),
                    text: [
                        "Here is your daily egg.",
                        "Aquí tienes tu huevo diario.",
                    "这是你每日的蛋。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.eventStatus.dailyEgg = new Date().toDateString();
                        const eggs = {}
                        const eggKey = `egg${Date.now()}`;
                        eggs[eggKey] = generateEgg(main.team.pokemon, eggKey);
                        main.inventory.addItem(eggs[eggKey])
                    },
                    state: 0
                },
                {
                    condition: () => (main.team.pokemon.length < 6 && new Date().toDateString() != main.eventStatus.dailyEgg),
                    text: [
                        "Sorry, come back when you have 6 Pokémon in your team.",
                        "Lo siento, vuelve cuando tengas 6 Pokémon en tu equipo.",
                    "抱歉，等你队伍有6只宝可梦再来吧。"
                    ],
                    state: 0
                },
            ]
        ]
    },
    signRoute34: {
        name: ['¡Caution!', '¡Atención!', '¡小心!'],
        state: 0,
        dialogues: [
            [
                {
                    text:  [
                        "The Voltorbs in this area are NOT Poké Balls. Thank you for your understanding.",
                        "Los Voltorb de esta zona NO son Poké Balls. Gracias por su comprensión.",
                        "本区域的霹雳电球不是精灵球。感谢您的理解。"
                    ]
                },
            ]
        ]
    },
    signboardRoute34: {
        name: ['Pokémon Clinic', 'Clínica Pokémon', '宝可梦诊所'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "This is no longer a Daycare, trainers are asked to come pick up their Dittos.",
                        "Esto ya no es una Guarderia, se ruega a los entrenadores que vengan a recoger a sus Dittos.",
                    "这里不再是培育屋了，请训练家们来领走他们的百变怪。"
                    ]

                },
            ]
        ]
    },
    // RUTA 35
    signRoute35: {
        name: ['¡Caution!', '¡Atención!', '¡小心!'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The wild Pokémon in this area are extremely friendly. They might follow you home!",
                        "Los Pokémon salvajes de esta zona son extremadamente amables. ¡Podrían seguirte a casa!",
                        "本区域的野生宝可梦非常友好。它们可能会跟你回家！"
                    ]
                },
            ]
        ]
    },
    // RUTA 36
    basketRoute36: {
        name: ['Basket', 'Cesta', '篮子'],
        state: savedStates.basketRoute36 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "There is a Yellow Apricorn inside the basket!",
                        "¡Hay un Bonguri amarillo dentro de la cesta!",
                    "篮子里有黄色圆柑！"
                    ],
                    reward: {
                        item: item.key.apricornYellow,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The basket is empty.",
                        "La cesta esta vacía.",
                        "篮子是空的。"
                    ]
                },
            ]
        ]
    },
    route36HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route36HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x3 Strong Medicine on the ground!",
                        "¡He encontrado x3 Medicina Fuerte en el suelo!",
                    "我在地上找到了x3 强力药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    smallHouseRoute36: {
        name: ['Teacher', 'Maestro', '老师'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Did you know that if a Pokémon uses a move of the same type as itself, that move becomes stronger?",
                        "¿Sabías que si un Pokémon usa un ataque del mismo tipo que él, ese movimiento es más fuerte?",
                    "你知道吗，如果宝可梦使用与自己同属性的招式，招式会变得更强大？"
                    ],
                },
                {
                    text: [
                        "That's called STAB: Same Type Attack Bonus. It increases damage by 50%. Not bad!",
                        "Eso se llama STAB: Same Type Attack Bonus. Aumenta el daño en un 50%. ¡Nada mal!",
                    "这叫本系加成：同属性攻击加成，伤害提升50%。不错吧！"
                    ],
                },
                {
                    text: [
                        "But you should also keep in mind type strengths and weaknesses.",
                        "Pero también debes tener en cuenta las fortalezas y debilidades de tipo.",
                    "但你也应该记住属性克制关系。"
                    ],
                },
                {
                    text: [
                        "For example, a Water-type move is very effective against a Fire-type Pokémon, dealing 60% more damage.",
                        "Por ejemplo, un ataque de tipo Agua es muy eficaz contra un Pokémon de tipo Fuego, causando un 60% más de daño.",
                    "例如，水系招式对火系宝可梦非常有效，能造成60%的额外伤害。"
                    ],
                },
                {
                    text: [
                        "And watch out! If the opponent's type resists your attack, you'll only do between 63% and 39% of the original damage.",
                        "¡Y cuidado! Si el tipo del oponente resiste tu ataque, solo harás entre un 63% y 39% del daño original.",
                    "还要注意！如果对手的属性抵抗你的攻击，你只能造成原伤害63%到39%的伤害。"
                    ],
                },
                {
                    text: [
                        "Learning how types interact with each other is key to becoming a good trainer.",
                        "Aprender cómo interactúan los tipos entre sí es clave para convertirte en un buen entrenador.",
                    "学习属性之间的相互作用是成为优秀训练家的关键。"
                    ],
                },
            ]
        ]
    },
    // RUTA 37
    jim: {
        name: ['Jim', 'Jim', '吉姆'],
        state: savedStates.jim ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to César and Jim's Workshop!",
                        "¡Bienvenido al Taller de César y Jim!",
                    "欢迎来到塞萨尔和吉姆的工坊！"
                    ],
                },
                {
                    text: [
                        "I'm Jim, a craftsman specialized in creating Pokéballs.",
                        "Soy Jim, artesano especializado en crear Pokéball.",
                    "我是Jim，专门制作精灵球的工匠。"
                    ],
                },
                {
                    text: [
                        "Did you know Pokéballs can be improved?",
                        "¿Sabías que las Pokéball pueden mejorarse?",
                    "你知道精灵球可以升级吗？"
                    ],
                },
                {
                    text: [
                        "I have the ability to upgrade your Pokéball into a Great Ball.",
                        "Yo tengo la habilidad de convertir tu Pokéball en una Superball.",
                    "我能把你的精灵球升级成超级球。"
                    ],
                },
                {
                    text: [
                        "To do it, I only need a Blue Apricorn.",
                        "Para hacerlo, solo necesito un Bonguri azul.",
                    "只需要一个蓝色圆柑就行。"
                    ],
                },
                {
                    text: [
                        "That little touch of magic makes all the difference.",
                        "Ese pequeño toque de magia hace toda la diferencia.",
                    "那一点点魔法的点缀就能让一切不同。"
                    ],
                },
                {
                    text: [
                        "With just a Blue Apricorn, I'll turn your regular Pokéball into a Great Ball.",
                        "Con solo un Bonguri azul, te convertiré tu Pokéball común en una Superball.",
                    "只要一个蓝色圆柑，我就能把你的普通精灵球变成超级球。"
                    ],
                },
                {
                    text: [
                        "The Great Ball increases your chances of capturing wild Pokémon.",
                        "La Superball aumenta tus probabilidades de capturar Pokémon salvajes.",
                    "超级球能提高你捕捉野生宝可梦的几率。"
                    ],
                },
                {
                    text: [
                        "When you have a Blue Apricorn, bring it to me and let's make your Pokéball stronger.",
                        "Cuando tengas un Bonguri azul tráemelo y hagamos que tu Pokéball sea más poderosa.",
                    "等你有了蓝色圆柑，拿来给我，我们一起把你的精灵球变强。"
                    ],
                    state: 1
                },
            ],
            [   
                {
                    text: [
                        "Back again?",
                        "¿Vienes otra vez?",
                    "又来了？"
                    ],
                },
                {
                    text: [
                        "Do you already have a Blue Apricorn to upgrade your Pokéball?",
                        "¿Tienes ya un Bonguri azul para mejorar tu Pokéball?",
                    "你已经有蓝色圆柑来升级精灵球了吗？"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornBlue') == undefined,
                    text: [
                        "Mmm... No, that's not the Blue Apricorn I asked for.",
                        "Mmm... No, eso no es el Bonguri azul que te pedí.",
                    "嗯...不，这不是我要的蓝色圆柑。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornBlue') == undefined,
                    text: [
                        "I need you to bring me a Blue Apricorn.",
                        "Necesito que me traigas un Bonguri azul.",
                    "我需要你给我带来一个蓝色圆柑。"
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlue') != undefined,
                    text: [
                        "You've brought the Blue Apricorn!",
                        "¡Has traído el Bonguri azul!",
                    "你带来了蓝色圆柑！"
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlue') != undefined,
                    text: [
                        "Give me that rusty Pokéball, let's give it some love...",
                        "Dame esa Pokéball roñosa, vamos a darle un poco de cariño...",
                    "把那个生锈的精灵球给我，我们给它点爱..."
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlue') != undefined,
                    text: [
                        "Done! Your Pokéball is now a Great Ball.",
                        "¡Ya está! Tu Pokéball es ahora una Superball.",
                    "搞定！你的精灵球现在是超级球了。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui')
                        main.player.upgradePokeball();
                    },
                },
                {   
                    condition: () => main.inventory.searchItem('apricornBlue') != undefined,
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornBlue'));
                    },
                    text: [
                        "Come back anytime!",
                        "¡Vuelve cuando quieras!",
                    "随时回来！"
                    ],
                    state: 2
                },
            ],
            [   
                {
                    text: [
                        "Want to upgrade your Great Ball?",
                        "¿Quieres mejorar tu Superball?.",
                    "想升级你的超级球吗？"
                    ],
                },
                {
                    text: [
                        "Bring me a Yellow Apricorn and I'll turn your Great Ball into an Ultra Ball.",
                        "Traéme un Bonguri amarillo y modificaré tu Superball en una Ultraball.",
                    "给我一个黄色圆柑，我把你的超级球升级成高级球。"
                    ],
                    state: 3
                },
            ],
            [   
                {
                    text: [
                        "Coming again?",
                        "¿Vienes otra vez?",
                    "又来了？"
                    ],
                },
                {
                    text: [
                        "Do you have a Yellow Apricorn to upgrade your Great Ball?",
                        "¿Tienes ya un Bonguri amarillo para mejorar tu Superball?",
                    "你有黄色圆柑来升级超级球吗？"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornYellow') == undefined,
                     text: [
                        "That's not the Yellow Apricorn I asked for...",
                        "Eso no es el Bonguri amarillo que te pedí...",
                    "这不是我要的黄色圆柑..."
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('apricornYellow') == undefined,
                    text: [
                        "I need you to bring me a Yellow Apricorn.",
                        "Necesito que me traigas un Bonguri amarillo.",
                    "我需要你给我带来一个黄色圆柑。"
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornYellow') != undefined,
                    text: [
                        "You brought the Yellow Apricorn!",
                        "¡Has traído el Bonguri amarillo!",
                    "你带来了黄色圆柑！"
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornYellow') != undefined,
                    text: [
                        "Give me that rusty Great Ball, let's give it some love...",
                        "Dame esa Superball roñosa, vamos a darle un poco de cariño...",
                    "把那个生锈的超级球给我，我们给它点爱..."
                    ],
                },
                {   
                    condition: () => main.inventory.searchItem('apricornYellow') != undefined,
                    text: [
                        "Done! Your Great Ball is now an Ultra Ball.",
                        "¡Ya está! Tu Superball es ahora una Ultraball.",
                    "搞定！你的超级球现在是高级球了。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.player.upgradePokeball();
                    },
                },
                {   
                    condition: () => main.inventory.searchItem('apricornYellow') != undefined,
                    text: [
                        "Come back anytime!",
                        "¡Vuelve cuando quieras!",
                    "随时回来！"
                    ],
                    cb: () => {
                        main.inventory.removeItem(main.inventory.searchItem('apricornYellow'));
                    },
                    state: 4
                },
                
            ],
            [   
                {
                    text: [
                        "Are you here to upgrade your Ultra Ball?",
                        "¿Vienes a mejorar tu Ultraball?",
                    "你是来升级高级球的吗？"
                    ],
                },
                {
                    text: [
                        "Sorry, I don't think that's possible.",
                        "Lo siento, no creo que eso sea posible.",
                    "抱歉，我觉得那不太可能。"
                    ],
                },
                {
                    text: [
                        "Something better than an Ultra Ball is beyond my knowledge.",
                        "Algo superior de una Ultraball se escapa de mis conocimientos.",
                    "比高级球更好的东西超出了我的知识范围。"
                    ],
                },
                {
                    text: [
                        "Maybe my father could help you, he's retired but loves challenges.",
                        "Quizá mi padre podría ayudarte, está retirado, pero le encantan los retos.",
                    "也许我父亲能帮你，他退休了但喜欢挑战。"
                    ],
                    cb: () => {
                        main.npcs['kurt'].state = 3
                    },
                    state: 5
                },
            ],
            [   
                {
                    text: [
                        "Maybe my father could help you improve your Ultra Ball.",
                        "Quizá mi padre podría ayudarte a mejorar tu Ultraball.",
                    "或许我父亲能帮你升级高级球。"
                    ],
                },
            ],
        ]
    },
    signboardRoute37: {
        name: ["Kurt's Workshop (& Jim)", 'Taller de César (y Jim)', '钢铁先生的工坊(&吉姆)'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Experts in the creation of Poké Balls.",
                        "Expertos en la creación de Pokeball.",
                        "精灵球制作专家。"
                    ]
                },
            ]
        ]
    },
    vesselARoute37: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute37 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Strong Medicine！",
                        "¡Hay x1 Medicina Fuerte dentro la vasija!",
                    "容器里有x1 强力药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute37: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute37 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Thunder Stone！",
                        "¡Hay x1 Piedra Trueno dentro la vasija!",
                    "容器里有x1 雷之石！"
                    ],
                    reward: {
                        item: item.consumable.thunderStone,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute37: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute37 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Rare Candy！",
                        "¡Hay x2 Carameloraro dentro la vasija!",
                    "容器里有x2 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 2
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselDRoute37: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselDRoute37 ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x3 Revive！",
                        "¡Hay x3 Revivir dentro la vasija!",
                    "容器里有x3 活力碎片！"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 3
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route37HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route37HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM80 Mega Drain on the ground!",
                        "¡He encontrado x1 MT80 Megaagotar en el suelo!",
                    "我在地上找到了x1 招式机80（超级吸取）！"
                    ],
                    reward: {
                        item: item.tm.tm80,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    // RUTA 38
    signRoute38: {
        name: ["ROUTE 38", "RUTA 38", "38号道路"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Bright cheeks, big ears, <br>surfing waves without fears.",
                        "Oídos grandes, mejillas vivas, <br>no temas al agua si él va encima.",
                        "脸颊明亮，耳朵大大，<br>冲浪逐浪毫不害怕。",
                    ]
                },
            ]
        ]
    },
    vesselARoute38: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute38 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x4 Strong Medicine！",
                        "¡Hay x4 Medicina Fuerte dentro la vasija!",
                    "容器里有x4 强力药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 4
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute38: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute38 ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x1 Electric Core Key！",
                        "¡Hay x1 Llave Central Eléctrica dentro la vasija!",
                    "容器里有x1 电核钥匙！"
                    ],
                    reward: {
                        item: item.key.key2,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // RUTA 39
    route39HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route39HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM58 Magnet Bomb on the ground!",
                        "¡He encontrado x1 MT58 Bomba imán en el suelo!",
                    "我在地上找到了x1 招式机58（磁铁炸弹）！"
                    ],
                    reward: {
                        item: item.tm.tm58,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselRoute39: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute39 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Jolly Mint！",
                        "¡Hay x1 Menta alegre dentro la vasija!",
                    "容器里有x1 爽朗薄荷！"
                    ],
                    reward: {
                        item: item.consumable.jollyMint,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signRoute39: {
        name: ["ROUTE 39", "RUTA 39", "39号道路"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Remember to read the signs! Some have bad jokes.",
,
                        "记得看路牌！有些上面有冷笑话。",
                        "记得看路牌！有些上面有冷笑话。",
                    ],
                },
            ]
        ]
    },
    // PARQUE NACIONAL
    signboardANationalPark: {
        name: ['National Park', 'Parque Nacional', '自然公园'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Attention! <br>Be careful with baby Pokémon!",
                        "¡Atención! <br>¡Se cuidadoso con los Pokémon bebés!",
                    "注意！<br>小心幼年宝可梦！"
                    ],
                },
            ]
        ]
    },
    signboardBNationalPark: {
        name: ['National Park', 'Parque Nacional', '自然公园'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Warning! <br>Pinsir and Scyther in the wild!",
                        "¡Cuidado! <br>¡Pinsir y Scyther en estado salvaje!",
                    "警告！<br>野外有凯罗斯和飞天螳螂！"
                    ],
                },
            ]
        ]
    },
    // RUTA 41
    comedianRoute41: {
        name: ['Comedian', 'Cómico', '喜剧演员'],
        state: savedStates.comedianRoute41 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hello, hello!",
                        "¡Hola, hola!",
                    "你好，你好！"
                    ],
                },
                 {
                    text: [
                        "I'm the best comedian on this route.",
                        "Soy el mejor cómico de esta ruta.",
                    "我是这条路上最棒的喜剧演员。"
                    ],
                },
                {
                    text: [
                        "Do you know what's worse than a bad joke?",
                        "¿Sabes qué es peor que un mal chiste?",
                    "你知道比冷笑话更糟的是什么吗？"
                    ],
                },
                {
                    text: [
                        "A funeral!",
                        "¡Un entierro!",
                    "葬礼！"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "So, take these six Revives!",
                        "Por eso, ¡toma estos seis revivir!",
                    "那么，拿着这六个活力碎片！"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 6
                    },
                    state: 1
                }
            ],
            [   
                {
                    condition: () => !main.team.isPokemonInTeam('MR. MIME'),
                    text: [
                        "I'm still the best comedian on this route!",
                        "¡Sigo siendo el mejor cómico de esta ruta!",
                    "我仍然是这条路上最棒的喜剧演员！"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('MR. MIME'),
                    text: [
                        "Hey! Is that a Mr. Mime?",
                        "¡Ey! ¿Es eso un Mr. Mime?",
                    "嘿！那是魔墙人偶吗？"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('MR. MIME'),
                    text: [
                        "You don't meet a guild mate every day!",
                        "¡No todos los días uno conoce a un colega del gremio!",
                    "不是每天都能碰到同行的！"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('MR. MIME'),
                     text: [
                        "Tell him to show me that invisible wall routine.",
                        "Dile que me enseñe esa rutina del muro invisible.",
                    "让他给我表演那个隐形墙的绝活。"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('MR. MIME'),
                     text: [
                        "I only know how to bump into it!",
                        "¡Yo sólo sé chocar contra él!",
                    "我只知道怎么撞上去！"
                    ],
                },
                {
                    condition: () => main.team.isPokemonInTeam('MR. MIME'),
                    text: [
                        "Take this TM, I'm sure your Mr. Mime knows how to use it.",
                        "Toma esta MT, seguro que tu Mr. Mime sabe usarla.",
                    "拿着这个招式机，我相信你的魔墙人偶知道怎么用它。"
                    ],
                    reward: {
                        item: item.tm.tm133,
                        amount: 1
                    },
                },
                {
                    condition: () => main.team.isPokemonInTeam('MR. MIME'),
                   text: [
                        "It contains the move Aura Sphere.",
                        "Contiene el movimiento Esfera aural.",
                    "里面是波导弹。"
                    ],
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "I'm still the best comedian on this route!",
                        "¡Sigo siendo el mejor cómico de esta ruta!",
                    "我仍然是这条路上最棒的喜剧演员！"
                    ],
                },
            ]
        ]
    },
    //RUTA 42
    route42HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route42HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x2 Zinc on the ground!",
                        "¡He encontrado x2 Zinc en el suelo!",
                    "我在地上找到了x2 特防增强剂！"
                    ],
                    reward: {
                        item: item.consumable.zinc,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselZCave: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselZCave ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x1 Lithic Stone！",
                        "¡Hay x1 Piedra Lítica dentro la vasija!",
                    "容器里有x1 石之石！"
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }

                        main.player.achievement[9].progress[0]++;
                        main.player.achievement[10].progress[0]++;
                        if (main.player.achievement[9].progress[0] == main.player.achievement[9].progress[1]) {
                            main.player.achievement[9].status = true;
                            main.player.unlockAchievement(9);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // RUTA 43
    smallHouseRoute43: {
        name: ['Abandoned house', 'Casa abandonada', '废弃房屋'],
        state: 0,
        dialogues: [
            [
                {      
                    text: [
                        "It's locked up tight.",
                        "Está cerrado a cal y canto.",
                    "锁得紧紧的。"
                    ],
                },
                {      
                    condition: () => mewTime(),
                    text: [
                        "Strange noises are heard inside the house.",
                        "Se oyen ruidos extraños dentro de la casa.",
                    "屋里传来奇怪的声音。"
                    ],
                },
                {      
                    condition: () => (main.inventory.searchItem('key1') != undefined),
                    text: [
                        "You use the house key.",
                        "Usas la llave de la casa.",
                    "你使用了房子钥匙。"
                    ],
                },
                {      
                    condition: () => (main.inventory.searchItem('key1') != undefined && !mewTime()),
                    text: [
                        "There's nothing inside.",
                        "No hay nada dentro.",
                        "里面什么都没有。"
                    ]
                },
                {      
                    condition: () => (main.inventory.searchItem('key1') != undefined && mewTime()),
                    text: [
                        "A Pokémon suddenly attacks!",
                        "¡Un Pokémon ataca de repente!",
                    "一只宝可梦突然袭来！"
                    ],
                },
                {
                    condition: () => (main.inventory.searchItem('key1') != undefined && mewTime()),
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Abandoned house', 'Casa abandonada', '废弃房屋'],
                            pokemon: 'mew',
                            level: 60,
                            ivs: {
                                hp: 121, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31, 
                            },
                            shiny: false,
                            moves: [move['auraSphere'], move['psychic']],
                            background: './assets/images/background/dojo.png',
                            cb: () => {
                                main.npcs['smallHouseRoute43'].state = 1
                                main.dialogue.startDialogue(main.npcs['smallHouseRoute43'], false);
                            }
                        });
                    },
                },   
            ],
            [
                {      
                    text: [
                        "You have obtained a Mew Egg!",
                        "¡Has obtenido un Huevo Mew!",
                    "你获得了梦幻的蛋！"
                    ],
                    reward: {
                        item: item.consumable.mewEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[60].status = true;
                        main.player.unlockAchievement(60);
                    }
                },
                {      
                    text: [
                        "You have obtained $151,000!",
                        "¡Has obtenido $151,000!",
                    "你获得了$151,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(151000);
                    },
                    state: 2
                },
            ],
            [
                {      
                    text: [
                        "An old abandoned house.",
                        "Una vieja casa abandonada.",
                    "一栋废弃的老房子。"
                    ],
                },
            ]
        ]
    },
    signboardRoute43: {
        name: ["House of the Move Deleter", "Casa del Quita-movimientos", "技能遗忘之家"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Unlearning moves has never been easier! ($100)",
,
                        "遗忘招式从未如此简单！（$100）",
                        "遗忘招式从未如此简单！（$100）",
                    ],
                },
            ]
        ]
    },
    signRoute43: {
        name: ["ROUTE 43", "RUTA 43", "43号道路"],
        state: 0,
        dialogues: [
            [
                {
                    text:  [
                        "Did a Magikarp wink at you? <br>Run, it's the leader.",
,
                        "鲤鱼王朝你眨眼了？<br>快跑，那是首领。",
                        "鲤鱼王朝你眨眼了？<br>快跑，那是首领。",
                    ],
                },
            ]
        ]
    },
    redGyarados: {
        name: ["RED GYARADOS", "GYARADOS ROJO", "红色暴鲤龙"],
        state: savedStates.redGyarados ?? 0,
        dialogues: [
            [
                {
                    text: ['GYRAAGHT!', '¡GYRAAGHT!', '嘎啊啊啊！'],
                    cb: () => { crySound(131) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Lake of Rage', 'Lago de la Furia', '愤怒之湖'],
                            pokemon: 'gyarados',
                            level: 40,
                            ivs: {
                                hp: 121, 
                                atk: 61, 
                                def: 61, 
                                spa: 61, 
                                spd: 61, 
                                spe: 61, 
                            },
                            shiny: true,
                            moves: [move['aquaTail'], move['iceFang']],
                            background: './assets/images/background/battle12.png',
                            cb: () => {
                                main.npcs['redGyarados'].state = 1;
                                main.dialogue.startDialogue(main.npcs['redGyarados'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You've obtained a Gyarados Egg!",
                        "¡Has obtenido un Huevo Gyarados!",
                    "你获得了a 暴鲤龙蛋！"
                    ],
                    reward: {
                        item: item.consumable.gyaradosEgg,
                        amount: 1
                    },
                },
                {      
                    text: [
                        "You've obtained $25,000!",
                        "¡Has obtenido $25,000!",
                    "你获得了$25,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(25000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['lakeOfRage-1'] = main.routeData['lakeOfRage-1bis'];
                        main.location.loadLocation(main.routeData['lakeOfRage-1'], true);
                    }
                }
            ],
        ]
    },
    // RUTA 45
    boxRoute45: {
        name: ["BOX", "CAJA", "箱子"],
        state: savedStates.boxRoute45 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "A sealed box with a stone lock. It looks like a number combination could open it.",
,
                        "一个带有石锁的密封盒子。看起来可以用数字组合打开。",
                        "一个带有石锁的密封盒子。看起来可以用数字组合打开。",
                    ],
                },
                {
                    cb: () => { 
                        main.dialogue.endDialogue();
                        main.puzzleNumberCombination.open(['MYSTERY BOX', 'CAJA MISTERIOSA', '神秘盒子'], "6573", () => {
                            main.npcs.boxRoute45.state = 1;
                            playSound('buttonB', 'ui');
                            main.dialogue.startDialogue(main.npcs['boxRoute45'], false);
                        }) 
                    }
                }
            ],
            [
                {
                    text: [
                        "The box has opened!",
                        "¡La caja se ha abierto!",
                    "盒子打开了！"
                    ],
                },
                {
                    text: [
                        "box里有x1 Lithic Stone！",
                        "¡Hay x1 Piedra Lítica dentro la caja!",
                    "盒子里有x1 石碑碎片！"
                    ],
                    reward: {
                        item: item.key.lithicStone,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[9].progress[0]++;
                        main.player.achievement[10].progress[0]++;
                        if (main.player.achievement[9].progress[0] == main.player.achievement[9].progress[1]) {
                            main.player.achievement[9].status = true;
                            main.player.unlockAchievement(9);
                        }
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "An empty box.",
                        "Una caja vacía.",
                    "一个空盒子。"
                    ],
                },
            ],
        ]
    },
    signRoute45: {
        name: ["ROUTE 45", "RUTA 45", "45号道路"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "If you made it this far, congratulations. <br>Your Pokémon deserve a vacation.",
,
                        "能走到这里，恭喜你。<br>你的宝可梦该休假了。",
                        "能走到这里，恭喜你。<br>你的宝可梦该休假了。",
                    ],
                },
            ]
        ]
    },
    signRoute45B: {
        name: ["NEED HELP?", "¿NECESITAS AYUDA?", "需要帮助吗？"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Find the combination in the Lithic Forest.",
,
                        "在石木森林里找到密码。",
                        "在石木森林里找到密码。",
                    ],
                },
            ]          
        ]
    },
    hikerRoute45: {
        name: ['Hiker', 'Excursionista', '登山男'],
        state: savedStates.hikerRoute45 ?? 0,
        dialogues: [
            [ 
                {
                    text: [
                        "Hey, youngster...",
                        "Oye, joven... ",
                    "嘿，年轻人……"
                    ]

                },
                {
                    text: [
                        "Are you going to cross this path?",
                        "¿Vas a pasar por este sendero? ",
                        "你要走这条路吗？"
                    ]
                },
                {
                    text: [
                        "Then listen closely.",
                        "Entonces escucha con atención.",
                        "那仔细听好。"
                    ]
                },
                {
                    text: [
                        "Beneath my cabin there's an old apacheta. I don't know who built it.",
                        "Debajo de mi cabaña hay una vieja apacheta, no sé quién la hizo.",
                    "我的小屋下面有一个古老的石堆祭坛，我不知道是谁建的。"
                    ]

                },
                {
                    text: [
                        "They say some trainers who got too close never came back.",
                        "Dicen que algunos entrenadores que se acercaron demasiado nunca volvieron.",
                        "据说有些训练家走得太近就再也没回来。"
                    ]
                },
                {
                    text: [
                        "I don't want to scare you, but you'd better show respect.",
                        "No quiero asustarte, pero mejor ve con respeto.",
                    "我不想吓你，但你最好表现出尊重。"
                    ],
                    state: 1
                }
            ],
            [ 
                {
                    text: [
                        "You're back? You've got guts, kid.",
                        "¿Volviste? Tienes agallas, muchacho.",
                    "你回来了？你有胆量，孩子。"
                    ]

                },
                {
                    text: [
                        "The apacheta is still there, quiet as ever... but you learn to live with its presence.",
                        "La apacheta aún está ahí, quieta como siempre... pero uno aprende a vivir con su presencia.",
                    "石堆祭坛还在那里，一如既往地安静……但你学会了与它的存在共处。"
                    ]

                },
                {
                    text: [
                        "Sometimes I think I hear voices coming from the apacheta... but when I get close, there's only wind.",
                        "A veces creo oír voces saliendo desde la apacheta... pero cuando me acerco, solo hay viento.",
                    "有时候我觉得听到石堆祭坛传来声音……但走近时只有风声。"
                    ]
                }
            ],
        ]
    },
    signboardIndigoPlateau: {
        name: ["Indigo Plateau", "Meseta Añil", "石英高原"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The Pokémon League awaits ahead.",
                        "Enfrente aguarda la Liga Pokémon.",
                        "宝可梦联盟在前面等着。"
                    ]
                },
            ]
        ]
    },
    route45HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route45HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM156 Rage Fist on the ground!",
                        "¡He encontrado x1 MT156 Puño furia en el suelo!",
                    "我在地上找到了x1 招式机156（愤怒之拳）！"
                    ],
                    reward: {
                        item: item.tm.tm156,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    apachetaJohto: {
        name:  [`APACHETA`, `APACHETA`, `阿帕切塔`],
        state: savedStates.apachetaJohto ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "A tower of stacked stones.",
                        "Una torre de piedras apiladas.",
                        "一座堆叠的石头塔。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone') == undefined),
                    text: [
                        "Some stones are missing.",
                        "Faltan algunas piedras.",
                        "有些石头不见了。"
                    ]
                },
                {
                    text: [
                        "There are a total of five slots.",
                        "Hay un total de cinco huecos.",
                        "一共有五个槽位。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount < 5),
                    text: [
                        "Your Lithic Stone fits perfectly.",
                        "Tu Piedra Lítica encaja a la perfección.",
                        "你的石碑石完美契合。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount < 5),
                    text: [
                        "But you don't have enough stones...",
                        "Pero no tienes suficientes piedras...",
                        "但你的石头不够……"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "You place the 5 Lithic Stones!",
                        "¡Colocas las 5 Piedras Líticas!",
                        "你放置了5块石碑石！"
                    ],
                    cb: () => {
                        main.player.achievement[8].status = true;
                        main.player.unlockAchievement(8);
                    }
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "An aura surrounds you and doesn't let you move.",
                        "Un aura te rodea y no te deja moverte.",
                        "一股气息包围了你，让你无法移动。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "The energy takes hold of you and drags you to a remote place.",
                        "La energía se apodera de ti y te arrastra a un lugar remoto.",
                        "能量控制了你，把你拖到一个遥远的地方。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "Looks like all your stuff is left behind in Johto.",
                        "Parece que todas tus cosas se han quedado en Johto.",
                        "看起来你所有的东西都留在了城都。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "You don't feel your Pokémon with you.",
                        "No sientes a tus Pokémon contigo.",
                        "你感觉不到你的宝可梦在身边。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "It's okay, they'll be fine...",
                        "No pasa nada, estarán bien...",
                    "没关系的，他们会没事的……"
                    ]

                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    cb: () => {
                        main.dialogue.endDialogue();
                        playSound('teleport', 'ui');
                        main.player.region = 2;
                        main.location.loadLocation(main.routeData['route56-1']);
                        main.pokedex.goToApachan();
                        main.player.goToApachan();
                    },
                    state: 1
                },
            ],
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        playSound('teleport', 'ui');
                        main.player.region = 2;
                        main.location.loadLocation(main.routeData['route56-1']);
                    },
                },
            ]
        ]
    },
    //route48
    route48HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route48HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM113 Dragon Breath on the ground!",
                        "¡He encontrado x1 MT113 Dragoaliento en el suelo!",
                    "我在地上找到了x1 招式机113（龙息）！"
                    ],
                    reward: {
                        item: item.tm.tm113,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    // PASO ACANTILADO
    cliffEdgeGateHiddenButton: {
        name: [``, ``, ``],
        state: savedStates.cliffEdgeGateHiddenButton ?? 0,
        dialogues: [
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        playSound('secret1', 'ui');
                        main.routeData['cliffEdgeGate-4'] = main.routeData['cliffEdgeGate-4bis'];
                        main.location.loadLocation(main.routeData['cliffEdgeGate-4'], true);
                    }
                },
            ],
        ]
    },
    elevatorRoomCliffEdgeGateA: {
        name: ['Elevator Room', 'Sala del Elevador', '电梯房'],
        state: savedStates.elevatorRoomCliffEdgeGateA ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "It's locked.",
                        "Está cerrado con llave.",
                        "锁上了。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('key3') != undefined,
                    text: [
                        "You use the elevator key.",
                        "Usas la llave del elevador.",
                    "你使用了电梯钥匙。"
                    ],
                    state: 1
                },
                {
                    condition: () => main.inventory.searchItem('key3') != undefined,
                    cb: () => {
                        playSound('elevator', 'ui')
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.routeData['cliffEdgeGate-6']);
                    }
                },
            ],
            [
                {
                    condition: () => main.inventory.searchItem('key3') != undefined,
                    cb: () => {
                        playSound('elevator', 'ui')
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.routeData['cliffEdgeGate-6']);
                    }
                },
            ]
        ]
    },
    elevatorRoomCliffEdgeGateB: {
        name: ['Elevator Room', 'Sala del Elevador', '电梯房'],
        state: savedStates.elevatorRoomCliffEdgeGateB ?? 0,
        dialogues: [
            [
                {
                    condition: () => main.inventory.searchItem('key3') != undefined,
                    cb: () => {
                        playSound('elevator', 'ui')
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.routeData['cliffEdgeGate-5']);
                    }
                },
            ],
        ]
    },
    diaryCliffEdgeGate: {
        name: ['Diary', 'Diario', '日记本'],
        state: savedStates.diaryCliffEdgeGate ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Day 482.",
                        "Día 482.",
                        "第482天。"
                    ]
                },
                {
                    text: [
                        "Operation \"Psychic Redemption\" has failed.",
                        "行动\"Redención Psíquica\" ha fracasado.",
                    "\"精神救赎\"行动失败了。"
                    ]

                },
                {
                    text: [
                        "We managed to contain Mewtwo in the underground facilities of Cliffside Pass.",
                        "Logramos contener a Mewtwo en las instalaciones subterráneas del Paso Acantilado.",
                        "我们成功将超梦控制在悬崖通道的地下设施中。"
                    ]
                },
                {
                    text: [
                        "With the sole purpose of using its mental power to counter the growing threat of the giant Magnemite.",
                        "Con el único propósito de usar su poder mental para contrarrestar la amenaza creciente del Magnemite gigante.",
                        "唯一目的是利用它的精神力量来对抗日益增长的巨大小磁怪的威胁。"
                    ]
                },
                {
                    text: [
                        "But it was a mistake.",
                        "Pero fue un error.",
                        "但这是个错误。"
                    ]
                },
                {
                    text: [
                        "That electromagnetic abomination not only resisted the psychic assault, it absorbed it.",
                        "Esa aberración electromagnética, no solo resistió el embate psíquico, sino que lo absorbió.",
                    "那个电磁怪物不仅抵抗了精神攻击，还吸收了它。"
                    ]

                },
                {
                    text: [
                        "Mewtwo has fallen.",
                        "Mewtwo ha caído.",
                        "超梦倒下了。"
                    ]
                },
               {
                    text: [
                        "Its eyes no longer shine with willpower, but with an artificial, cold and precise glow.",
                        "Sus ojos ya no brillan con voluntad, sino con un fulgor artificial, frío y exacto.",
                    "它的眼睛不再闪耀着意志力，而是发出人造的、冷酷而精确的光芒。"
                    ]

                },
                {
                    text: [
                        "It is now just another extension of its domain.",
                        "Ahora es una extensión más de su dominio.",
                        "它现在只是它领域的又一个延伸。"
                    ]
                },
                {
                    text: [
                        "Recent reports indicate interference all over Kanto.",
                        "Informes recientes indican interferencias en todo Kanto.",
                        "最近的报告显示关都各地都有干扰。"
                    ]
                },
                {
                    text: [
                        "It's only a matter of days.",
                        "Es solo cuestión de días.",
                        "这只是时间问题。"
                    ]
                },
                {
                    text: [
                        "Once the giant Magnemite fully synchronizes with the Pokédex Network, it will take total control of the region.",
                        "Cuando el Magnemite gigante se sincronice completamente con la Red Pokédex, tomará el control total de la región.",
                    "一旦巨型小磁怪与宝可梦图鉴网络完全同步，它将完全控制整个地区。"
                    ]
                },
                {
                    text: [
                        "It won't be a confrontation, it will be a conversion.",
                        "No será un enfrentamiento, será una conversión.",
                    "这不会是对抗，而将是转化。"
                    ]

                },
                {
                    text:[
                        "- Prof. Oak",
,
                        "- 大木博士",
                        "- 大木博士",
                    ],
                    cb: () => { 
                        if (main.npcs['professorOak'].state == 0) {
                            main.npcs['professorOak'].state = 1; 
                        }
                    }
                },

            ],
        ]
    },
    vesselCliffEdgeGate: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCliffEdgeGate ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Transumtation Flask！",
                        "¡Hay x1 Frasco Alteración dentro la vasija!",
                    "容器里有x1 转化烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.transmutationFlask,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    // ACANTILADO ENDRINO
    signBlackthornCliff: {
        name: ['¡Caution!', '¡Atención!', '¡小心!'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Please do not jump off the cliff, Fly doesn't work like that.",
                        "Se ruega no saltar por el acantilado, Vuelo no funciona así.",
                    "请不要跳下悬崖，飞翔不是那样用的。"
                    ]

                },
            ]
        ]
    },
    ornithologistBlackthornCliff: {
        name: ['Ornithologist', 'Ornitólogo', '鸟类学家'],
        state: savedStates.ornithologistCliff ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Shhh!",
                        "¡Shhh!",
                        "嘘！"
                    ]
                },
                 {
                    text: [
                        "Not so loud... you might scare the wild Pidgeotto.",
                        "No tan fuerte... podrías espantar a los Pidgeotto salvajes.",
                        "别那么大声……你会吓到野生比比鸟的。"
                    ]
                },
                {
                    text: [
                        "I study the elegant flight of birds here.",
                        "Aquí estudio el vuelo elegante de las aves.",
                        "我在这里研究鸟类优雅的飞行。"
                    ]
                },
                {
                    text: [
                        "Did you know some birds sharpen the air as they fly?",
                        "¿Sabías que algunas aves afilan el aire al volar?",
                        "你知道有些鸟在飞行时会磨利空气吗？"
                    ]
                },
                {
                    text: [
                        "Literally!",
                        "¡Literalmente!",
                        "字面意义上的！"
                    ]
                },
                {
                    text: [
                        "Here, take this, TM99 Air Slash is one of my favorite techniques.",
                        "Toma esto, la MT99 Aire Afilado es una de mis técnicas favoritas.",
                    "给，拿着，TM99空气斩是我最喜欢的招式之一。"
                    ],
                    reward: {
                        item: item.tm.tm99,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Use it well, and if you fly... do it with style!",
                        "Úsala bien, y si vuelas... ¡hazlo con estilo!",
                    "好好用它，如果你要飞……要有型！"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "How's your team doing with Air Slash?",
                        "¿Qué tal le va a tu equipo con Aire Afilado?",
                        "你的队伍用空气斩怎么样？"
                    ]
                },
                {
                    text: [
                        "Elegant move, isn't it?",
                        "Una técnica elegante, ¿verdad?",
                    "优雅的招式，对吧？"
                    ]
                }
            ]
        ]
    },
    hunterBlackthornCliff: {
        name: ['Hunter', 'Cazador', '猎人'],
        state: savedStates.hunterBlackthornCliff ?? 0,
        dialogues: [
            [{
                    text: [
                        "Hey, watch your step!",
                        "¡Eh, cuidado por dónde pisas!",
                    "嘿，小心脚下！"
                    ]

                },
                {
                    text: [
                        "You almost stepped into a trap for Dodrio.",
                        "Casi te tragas una trampa para Dodrio.",
                        "你差点踩进嘟嘟利的陷阱。"
                    ]
                },
                {
                    text: [
                        "I live out here tracking big birds.",
                        "Vivo aquí rastreando aves grandes.",
                        "我住在这里追踪大鸟。"
                    ]
                },
                {
                    text: [
                        "A Dodrio nearly ate this Black Apricorn thinking it was a berry.",
                        "Un Dodrio casi se me come este Bonguri negro creyendo que era una baya.",
                        "一只嘟嘟利差点把这个黑色圆柑果当成树果吃了。"
                    ]
                },
                {
                    text: [
                        "I saved its beak just in time!",
                        "¡Le salvé el pico a tiempo!",
                        "我及时救了它的喙！"
                    ]
                },
                {
                    text: [
                        "Though now it looks at me with resentment...",
                        "Aunque ahora me mira con rencor...",
                        "虽然现在它用怨恨的眼神看着我……"
                    ]
                },
                {
                     text: [
                        "Here, you keep it.",
                        "Toma, quédatelo tú.",
                    "给，你留着吧。"
                    ],
                    reward: {
                        item: item.key.apricornBlack,
                        amount: 1
                    },
                },
                {
                    text: [
                        "I prefer berries that don't try to kill me.",
                        "Yo prefiero las bayas que no intentan matarme.",
                        "我更喜欢不会想杀我的树果。"
                    ]
                },
                {
                    text: [
                        "If you make good use of that... thank the Dodrio.",
                        "Si haces un buen uso de eso... dale las gracias al Dodrio.",
                        "如果你好好利用那个……谢谢那只嘟嘟利吧。"
                    ]
                },
                {
                    text: [
                        "Or not.",
                        "O no.",
                        "或者不用。"
                    ]
                },
                {
                    text: [
                        "He's still angry.",
                        "Él sigue enfadado.",
                    "他还在生气。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "The Black Apricorn?",
                        "¿El Bonguri negro?",
                        "黑色圆柑果？"
                    ]
                },
                {
                    text: [
                        "Does it work well?",
                        "¿Funciona bien?",
                        "好用吗？"
                    ]
                },
                {
                    text: [
                        "I still prefer my homemade traps.",
                        "Yo sigo prefiriendo mis trampas caseras.",
                        "我还是更喜欢我自制的陷阱。"
                    ]
                },
                {
                    text: [
                        "Dodrio is still out there... if it attacks you, it wasn't me!",
                        "El Dodrio sigue por ahí... si te ataca, ¡no fui yo!",
                    "嘟嘟利还在外面……如果它攻击你，不是我指使的！"
                    ]
                }
            ]
        ]
    },
    poetBlackthornCliff: {
        name: ['Poet', 'Poeta', '诗人'],
        state: savedStates.poetBlackthornCliff ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh, wandering traveler who has reached this cliff...",
                        "Oh, viajero errante que a este risco ha llegado...",
                    "哦，来到这座悬崖的流浪旅人啊……"
                    ]

                },
                {
                    text: [
                        "Have you heard the whistle of the wind that cuts the soul?",
                        "¿Has oído el silbido del viento que corta el alma?",
                        "你听过割裂灵魂的风哨声吗？"
                    ]
                },
                {
                    text: [
                        "Have you seen the majestic Pidgeot dance with the clouds?",
                        "¿Has visto al majestuoso Pidgeot danzar con las nubes?",
                        "你见过雄伟的比雕与云共舞吗？"
                    ]
                },
                {
                    text: [
                        "Ah, how it flew!",
                        "¡Ah, cómo volaba!",
                    "啊，它飞得多美！"
                    ]

                },
                {
                    text: [
                        "How it soared through the skies like a brush on the canvas of dawn!",
                        "¡Cómo surcaba los cielos como un pincel sobre el lienzo del amanecer!",
                        "它如何在天空中翱翔，如同拂晓画布上的画笔！"
                    ]
                },
                {
                    text: [
                        "But then... tragedy.",
                        "Pero entonces... la tragedia.",
                        "但然后……悲剧。"
                    ]
                },
                {
                    text: [
                        "Fate, cruel and unyielding like an insomniac Onix.",
                        "El destino, cruel e inflexible como un Onix con insomnio.",
                    "命运，残酷而无情，如同失眠的大岩蛇。"
                    ]

                },
                {
                    text: [
                        "A rock fell from the cliff...",
                        "Una roca cayó del risco...",
                        "一块石头从悬崖上掉下来……"
                    ]
                },
                {
                    text: [
                        "And with a dry, poetic and brutal blow, *thud*, Pidgeot met the final verse of its life.",
                        "Y con un golpe seco, poético y brutal, ¡plaf!, el Pidgeot conoció la última estrofa de su vida.",
                    "随着一声干涩、诗意而残酷的撞击，*砰*，比雕迎来了它生命的最后一个诗句。"
                    ]

                },
                {
                    text: [
                        "In its memory, I've composed 143 haikus.",
                        "En su memoria, he compuesto 143 haikus.",
                    "为纪念它，我写了143首俳句。"
                    ]

                },
                 {
                    text: [
                        "And also... I want to give you this.",
                        "Y también... quiero darte esto.",
                        "还有……我想给你这个。"
                    ]
                },
                {
                     text: [
                        "Take TM23 Rock Slide.",
                        "Ten la MT23 Avalancha.",
                    "拿着TM23岩崩。"
                    ],
                    reward: {
                        item: item.tm.tm23,
                        amount: 1
                    },
                },
                {
                    text: [
                        "A powerful technique.",
                        "Una técnica poderosa.",
                        "一个强力的招式。"
                    ]
                },
                {
                    text: [
                        "Like the rock that shattered its celestial dreams.",
                        "Como la roca que truncó sus sueños celestes.",
                        "就像那块粉碎了它天堂梦想的石头。"
                    ]
                },
                {
                    text: [
                        "Each time you use it, think of him and his flight.",
                        "Cada vez que la uses, piensa en él y en su vuelo.",
                    "每次使用它时，想想他和他的飞翔。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Sometimes, when the wind blows from the east... I think I hear its final screech.",
                        "A veces, cuando el viento sopla desde el este... creo oír su último graznido.",
                    "有时，当风从东边吹来……我仿佛听到它最后的尖啸。"
                    ]

                },
                {
                    text: [
                        "I'm working on an epic poem: Elegy to the Stoned Pidgeot.",
                        "Estoy trabajando en un poema épico: Elegía al Pidgeot Apedreado.",
                        "我在写一首史诗：被石头击中的比雕的挽歌。"
                    ]
                }
            ]
        ]
    },
    // RUTA 28
    signboardRoute28: {
        name: ["Mt. Silver", "Monte Plateado", "白银山"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "You don't climb here by force, you climb by will.",
,
                        "在这里不是靠力量攀登，而是靠意志。",
                        "在这里不是靠力量攀登，而是靠意志。",
                    ]
                },
            ]
        ]
    },
    khytrayerRoute28: {
        name: ['Khytrayer', 'Khytrayer', '凯特雷尔'],
        state: savedStates.khytrayerRoute28 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Hello, trainer!",
                        "¡Hola, entrenador!",
                    "你好，训练家！"
                    ]
                },
                {
                    text: [
                        "My name is Khytrayer and I came to Mt. Silver looking for a worthy challenge.",
                        "Me llamo Khytrayer y vine hasta el Monte Plateado en busca de un desafío digno.",
                        "我叫Khytrayer，我来到白银山寻找值得一战的挑战。"
                    ]
                },
                {
                    text: [
                        "Unfortunately for me, the entrance is inaccessible.",
                        "Por desgracia para mí, la entrada se encuentra inaccesible.",
                    "不幸的是，入口我进不去。"
                    ]

                },
                {
                    text: [
                        "But maybe I can satisfy my urge to battle with you.",
                        "Pero tal vez pueda saciar mis ganas de combatir contigo.",
                        "但也许我可以和你对战来满足我的战斗欲望。"
                    ]
                },
                {
                    text: [
                        "My Pokémon may seem soft, slow... even funny.",
                        "Mis Pokémon pueden parecer blanditos, lentos... incluso graciosos.",
                    "我的宝可梦可能看起来软弱、缓慢...甚至可笑。"
                    ]
                },
                {
                    text: [
                        "But they are trained to the limit!",
                        "¡Pero están entrenados al límite!",
                        "但它们被训练到了极限！"
                    ]
                },
                {
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    text: [
                        "It was just a Psyduck in a pond full of Gyarados.",
                        "Era solo un Psyduck en un estanque lleno de Gyarados.",
                        "它只是暴鲤龙池塘里的一只可达鸭。"
                    ]
                },
                {
                    text: [
                        "Everyone laughed at its clumsy flaps...",
                        "Todos se burlaban de sus torpes aletazos...",
                        "每个人都嘲笑它笨拙的拍打……"
                    ]
                },
                {
                    text: [
                        "Until one day, its will became a tide, and with a single quack it split the sky in two.",
                        "Hasta que un día, su voluntad se volvió marea, y con un solo graznido partió el cielo en dos.",
                    "直到有一天，它的意志化作了潮汐，一声鸭叫劈开了天空。"
                    ]

                },
                {
                    text: [
                        "Get ready! I won't show mercy.",
                        "¡Prepárate, No voy a tener piedad!",
                    "准备好了！我不会手下留情。"
                    ]

                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.trainerBattle.open(null, main.trainers.khytrayer.team, 'Khytrayer', false, false, 'battle21', () => {
                                main.trainerBattle.close();
                                main.npcs['khytrayerRoute28'].state = 1;
                                main.dialogue.startDialogue(main.npcs['khytrayerRoute28']);
                        });
                    } 
                }
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    text: [
                        "My ducks quack with pride!",
                        "¡Mis patos graznan de orgullo!",
                        "我的鸭子们骄傲地呱呱叫！"
                    ]
                },
                {
                    text: [
                        "A perfect battle... just like their feathers.",
                        "Una batalla perfecta... como su plumaje.",
                        "一场完美的战斗……就像它们的羽毛。"
                    ]
                },
                {
                    text: [
                        "You deserve $50,000 for your victory.",
                        "Te mereces $50,000 por tu victoria.",
                    "你的胜利值得5万金币。"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(50000);
                    },
                },
                {
                    text: [
                        "Also, I want to give you something.",
                        "Además, quiero regalarte una cosa.",
                    "另外，我想给你一样东西。"
                    ]
                },
                {
                    text: [
                        "Here, TM152 contains the move Galvanic Quack.",
                        "Ten, la MT152, contiene el movimiento Graznido galvánico.",
                    "给，TM152里面是电击鸭叫。"
                    ],
                    reward: {
                        item: item.tm.tm152,
                        amount: 1
                    }
                },
                {
                    text: [
                        "It's a technique I've perfected myself; it can't be obtained any other way.",
                        "Es una técnica que yo mismo he perfeccionado, no puede obtenerse de ninguna forma.",
                    "这是我自己完善的招式，没有其他途径可以获得。"
                    ]

                },
                {
                    text: [
                        "So think carefully about who you teach it to.",
                        "Así que piensa bien en quien la usas.",
                        "所以好好想想教给谁。"
                    ]
                },
                {
                    text: [
                        "Only the Psyduck evolutionary family, Porygon, and Farfetch'd can learn it.",
                        "Solamente pueden aprenderla la familía evolutiva Psyduck, Porygon y Farfetch'd.",
                    "只有可达鸭进化家族、多边兽和大葱鸭可以学习。"
                    ],
                    state: 2
                }
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
]
                },
            ]
        ]
    },                               
    // RUTA 46
    runnerRoute46: {
        name: ['Runner', 'Maratonista', '跑者'],
        state: savedStates.runnerRoute46 ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Hey! I almost passed you!",
                        "¡Hey! ¡Casi te adelanto!",
                        "嘿！我差点超过你！"
                    ]
                },
                {
                    text: [
                        "You're faster than you look.",
                        "Eres más rápido de lo que pareces.",
                        "你比看起来快。"
                    ]
                },
                {
                    text: [
                        "I'm a long-distance runner, I spend the day crossing routes... and dodging Pokémon like they're cones!",
                        "Soy corredor de fondo, me paso el día cruzando rutas... ¡y esquivando Pokémon como si fueran conos!",
                    "我是一名长跑运动员，整天穿越道路……像躲路障一样躲避宝可梦！"
                    ]
                },
                {
                    text: [
                        "Want to run a little lighter on the paths?",
                        "¿Te gustaría ir un poco más ligero por los caminos?",
                        "想在路上跑得更轻松一点吗？"
                    ]
                },
                {
                    text: [
                        "Here, take those Ruining Shoes.",
                        "Aquí tienes unas Deportivas.",
                    "给，拿着这双奔跑鞋。"
                    ],
                    reward: {
                        item: item.key.runningShoes,
                        amount: 1
                    },
                },
                {
                    text: [
                        "With these, you can avoid some battles when walking through connecting routes.",
                        "Con ellas, podrás evitar algunos combates al caminar entre rutas de paso.",
                    "有了这个，你在穿过连接路线时可以避开一些战斗。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Have you tried the sneakers yet?",
                        "¿Ya probaste las zapatillas?",
                        "你试过运动鞋了吗？"
                    ]
                },
                {
                    text: [
                        "Do you feel the wind on your face and fewer challenging stares?",
                        "¿Sientes el viento en la cara y menos miradas desafiantes?",
                        "你感受到脸上的风和更少的挑战目光了吗？"
                    ]
                },
                {
                    text: [
                        "Be careful, some Pokémon take jogging as a personal challenge.",
                        "Ten cuidado, algunos Pokémon se toman el jogging como un reto personal.",
                    "小心点，有些宝可梦把慢跑视为个人挑战。"
                    ]
                }
            ]
        ]
    },
    // RUTA 47
    signRoute47: {
        name: ["ROUTE 47", "RUTA 47", "47号道路"],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The Safari Zone is ahead. Catch the Pokémon before they catch you.",
                        "La Zona Safari se encuentra más adelante. Atrapa los Pokémon antes de que ellos te atrapen a ti.",
                        "狩猎地带在前面。在被宝可梦抓到你之前抓住它们。"
                    ]
                },
            ]
        ]
    },
    // RUTA 48
    vesselARoute48: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute48 ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x4 Strong Medicine！",
                        "¡Hay x4 Medicina Fuerte dentro la vasija!",
                    "容器里有x4 强力药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 4
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute48: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute48 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Green Apricorn！",
                        "¡Hay x1 Bonguri Verde dentro la vasija!",
                    "容器里有x1 绿色圆柑！"
                    ],
                    reward: {
                        item: item.key.apricornGreen,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute48: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute48 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Naughty Mint！",
                        "¡Hay x1 Menta pícara dentro la vasija!",
                    "容器里有x1 顽皮薄荷！"
                    ],
                    reward: {
                        item: item.consumable.naughtyMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselDRoute48: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselDRoute48 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Revive！",
                        "¡Hay x3 Revivir dentro la vasija!",
                    "容器里有x3 活力碎片！"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardRoute48: {
        name: ["Safari Cabin", "Cabaña Safari", "狩猎地带小屋"],
        state: 0,
        dialogues: [
            [
                {
                    text:  [
                        "Warden's house in the Safari Zone.",
                        "Casa del guardabosques de la Zona Safari.",
                        "狩猎地带管理员的房子。"
                    ]
                },
            ]
        ]
    },
    safariWardenRoute48: {
        name: ['Safari Warden', 'Guardabosques', '狩猎地带管理员'],
        state: savedStates.safariWardenRoute48 ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "Hey, hello!",
                        "¡Ey, hola!",
                    "嘿，你好！"
                    ]

                },
                {
                    text: [
                        "If you're looking for the Safari Zone, follow the path north.",
                        "Si buscas la Zona Safari, sigue el sendero hacia el norte.",
                    "如果你在找狩猎地带，沿着北边的路走。"
                    ]
                },
                {
                    text: [
                        "You can't miss it.",
                        "No tiene pérdida.",
                        "你不会错过的。"
                    ]
                },
                {
                    text: [
                        "Inside, you can find more than 50 different Pokémon species.",
                        "Allí dentro podrás encontrar más de 50 especies distintas de Pokémon.",
                    "在里面，你可以找到超过50种不同的宝可梦。"
                    ]
                },
                 {
                    text: [
                        "You never know what might jump out of the bushes!",
                        "¡Nunca sabes qué puede saltar de los arbustos!",
                        "你永远不知道什么会从灌木丛里跳出来！"
                    ]
                },
                {
                    text: [
    "The other day, a Psyduck stole my lunch and fled riding a Doduo... I still haven't recovered.",
    "El otro día, un Psyduck robó mi almuerzo y huyó montado en un Doduo... todavía no me recupero.",
    "前几天，一只可达鸭偷了我的午饭，骑着一只嘟嘟逃跑了……我到现在还没缓过来。"
]
                },
                {
                    text: [
                        "Ah, almost forgot...",
                        "Ah, casi lo olvido...",
                    "啊，差点忘了……"
                    ]

                },
                {
                    text: [
                        "I found this lying near the entrance, but I don't know what to do with it.",
                        "Me encontré esto tirado cerca de la entrada, pero no sé qué hacer con él.",
                    "我在入口附近发现了这个，但不知道该怎么处理。"
                    ]

                },
                {
                    text: [
                        "It looks like a Red Bonguri... do you want it?",
                        "Parece un Bonguri rojo, ¿te interesa? ",
                    "看起来像一个红色柑果球……你要吗？"
                    ]

                },
                {
                    text: [
                        "I'm sure you'll make better use of it than me.",
                        "Seguro tú le das mejor uso que yo.",
                    "我肯定你会比我更好地利用它。"
                    ],
                    reward: {
                        item: item.key.apricornRed,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Have you been to the Safari Zone yet?",
                        "¿Ya fuiste a la Zona Safari?",
                        "你去过狩猎地带了吗？"
                    ]
                },
                {
                    text: [
                        "Remember, it's to the north.",
                        "Recuerda, está al norte.",
                    "记住，它在北边。"
                    ]

                },
                {
                    text: [
                        "Good luck catching rare stuff!",
                        "¡Suerte atrapando cosas raras!",
                        "祝你好运抓到稀有货！"
                    ]
                }
            ]
        ]
    },
    safariReceptionist: {
        name: ['Safari Receptionist', 'Recepcionista Safari', '狩猎地带接待员'],
        state: savedStates.safariReceptionist ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to the Safari Zone!",
                        "¡Bienvenido a la Zona Safari!",
                        "欢迎来到狩猎地带！"
                    ]
                },
                {
                    text: [
                        "With just 500 coins, you can enter, battle, and catch as long as you have Pokémon available.",
                        "Con solo 500 monedas puedes entrar, combatir y capturar mientras te queden Pokémon disponibles.",
                    "只需500代币，你就可以进入、战斗、捕捉，只要你有可用的宝可梦。"
                    ]
                },
                {
                    text: [
                        "Here the Pokémon are much easier to catch.",
                        "Aquí los Pokémon son mucho mas sencillos de atrapar.",
                        "这里的宝可梦更容易捕捉。"
                    ]
                },
                {
                    text:  [
                        "Would you like to enter for 500 coins?",
                        "¿Te gustaría entrar por 500 monedas?",
                    "你要花500代币进去吗？"
                    ],
                    choices: [
                        {
                            text: ["No", "No", "不"],
                            next: "end"   
                        },
                        {
                            text: ["Yes", "Si", "是"],     
                            next: 1, 
                            state: 1  
                        }
                    ]
                }
            ],
            [
                {   
                    condition: () => main.player.gold < 500,
                    text:  [
                        "Unfortunately, you don't have enough gold right now.",
                        "Lamentablemente, no tienes suficiente oro ahora mismo.",
                    "很遗憾，你现在金币不够。"
                    ],
                    state: 0
                },
                {   
                    condition: () => main.player.gold >= 500,   
                    text: [
                        "Go ahead!",
                        "¡Adelante!",
                    "去吧！"
                    ],
                    state: 0,
                },
                {   
                    condition: () => main.player.gold >= 500,
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.player.changeGold(-500);
                        main.route.open({
                            type: 'routeBattle',
                            title: [`Safari Zone`, `Zona Safari`, `狩猎地带`],
                            background: './assets/images/background/battle1.png',
                            safari: true,
                            pokemon: [  
                                { name: 'dratini', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'dragonair', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'bellsprout', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'weepinbell', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'ponyta', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'rapidash', minLevel: 31, maxLevel: 40, chance: 2 },               
                                { name: 'gastly', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'haunter', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'rattata', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'raticate', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'slowpoke', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'slowbro', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'krabby', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'kingler', minLevel: 31, maxLevel: 40, chance: 2 }, 
                                { name: 'geodude', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'graveler', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'magnemite', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'magneton', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'paras', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'parasect', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'spearow', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'fearow', minLevel: 31, maxLevel: 40, chance: 1 }, 
                                { name: 'machop', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'machoke', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'sandshrew', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'sandslash', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'cubone', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'marowak', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'rhyhorn', minLevel: 31, maxLevel: 40, chance: 1 }, 
                                { name: 'rhydon', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'houndour', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'houndoom', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'larvitar', minLevel: 31, maxLevel: 40, chance: 2 },                     
                                { name: 'pupitar', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'gloom', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'grimer', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'muk', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'sentret', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'furret', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'wooper', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'quagsire', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'psyduck', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'golduck', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'doduo', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'dodrio', minLevel: 31, maxLevel: 40, chance: 1 }, 
                                { name: 'poliwag', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'poliwhirl', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'magikarp', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'gyarados', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'smeargle', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'girafarig', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'stantler', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'lapras', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'misdreavus', minLevel: 31, maxLevel: 40, chance: 2 }, 
                                { name: 'mrmime', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'magmar', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'electabuzz', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'shuckle', minLevel: 31, maxLevel: 40, chance: 1 }, 
                                { name: 'wobbuffet', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'tauros', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'voltorb', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'onix', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'chansey', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'clefairy', minLevel: 31, maxLevel: 40, chance: 2 }, 
                                { name: 'lickitung', minLevel: 31, maxLevel: 40, chance: 2 },
                                { name: 'kangaskhan', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'koffing', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'ekans', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'abra', minLevel: 31, maxLevel: 40, chance: 2 }, 
                                { name: 'murkrow', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'farfetchd', minLevel: 31, maxLevel: 40, chance: 1 },
                                { name: 'ditto', minLevel: 31, maxLevel: 40, chance: 1 },
                            ],
                        },);
                    },
                },
            ],
        ]
    },

    // misc
    policemanRoute11: {
        name: ['Policeman', 'Policía', '警察'],
        state: savedStates.policemanRoute11 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Do you want to access Route 12?",
                        "¿Quieres acceder a la Ruta 12?",
                        "你想进入12号道路吗？"
                    ]
                },
                {
                    text: [
                        "Sorry, a Snorlax is blocking Routes 12 and 13.",
                        "Lo sentimos, hay un Snorlax bloqueando las Rutas 12 y 13.",
                    "抱歉，一只卡比兽挡住了12号和13号道路。"
                    ]

                },
                {
                    text: [
                        "You can access Lavender Town from Routes 8 and 10.",
                        "Puedes acceder a Pueblo Lavanda desde las Rutas 8 y 10.",
                        "你可以从8号和10号道路进入紫苑镇。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    text: [
                        "Do you have a certification from Professor Oak?",
                        "¿Tienes una acreditación del Profesor Oak?",
                        "你有大木博士的认证吗？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    text: [
                        "Alright, go ahead.",
                        "Está bien, adelante.",
                    "好的，去吧。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    text: [
                        "But stay alert.",
                        "Pero mantente alerta.",
                    "但要保持警惕。"
                    ],
                    state: 1,
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    cb: () => {
                        main.npcs['policemanRoute14'].state = 1;
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['route12-1']);
                    }
                }
            ],
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['route12-1']);
                    }
                }
            ]
        ]
    },
    policemanRoute14: {
        name: ['Policeman', 'Policía', '警察'],
        state: savedStates.policemanRoute14 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Do you want to access Route 12?",
                        "¿Quieres acceder a la Ruta 12?",
                        "你想进入12号道路吗？"
                    ]
                },
                {
                    text: [
                        "Sorry, a Snorlax is blocking Routes 12 and 13.",
                        "Lo sentimos, hay un Snorlax bloqueando las Rutas 12 y 13.",
                    "抱歉，一只卡比兽挡住了12号和13号道路。"
                    ]

                },
                {
                    text: [
                        "You can access Lavender Town from Routes 8 and 10.",
                        "Puedes acceder a Pueblo Lavanda desde las Rutas 8 y 10.",
                        "你可以从8号和10号道路进入紫苑镇。"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    text: [
                        "Do you have a certification from Professor Oak?",
                        "¿Tienes una acreditación del Profesor Oak?",
                        "你有大木博士的认证吗？"
                    ]
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    text: [
                        "Alright, go ahead.",
                        "Está bien, adelante.",
                    "好的，去吧。"
                    ],
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    text: [
                        "But stay alert.",
                        "Pero mantente alerta.",
                    "但要保持警惕。"
                    ],
                    state: 1,
                },
                {
                    condition: () => main.inventory.searchItem('accessPass') != undefined,
                    cb: () => {
                        main.npcs['policemanRoute11'].state = 1;
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.routeData['route12-4']);
                    }
                },
            ],
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.location.loadLocation(main.routeData['route12-4']);
                    }
                }
            ]
        ]
    },
    //STATICS
    entei: {
        name: ["ENTEI", "ENTEI", "炎帝"],
        state: savedStates.entei ?? 0,
        dialogues: [
            [
                {
                    text: ['GRAAAAWWRRHHHH!', '¡GRAAAAWWRRHHHH!', '嗷呜呜呜！！！'],
                    cb: () => { crySound(244) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Union Cave', 'Cueva Unión', '连接洞窟'],
                            pokemon: 'entei',
                            level: 65,
                            ivs: {
                                hp: 251, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31, 
                            },
                            shiny: false,
                            background: './assets/images/background/battle3.png',
                            moves:[ move['fireBlast'], move['crunch']],
                            cb: () => {
                                main.npcs['entei'].state = 1;
                                main.dialogue.startDialogue(main.npcs['entei'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Entei Egg!",
                        "¡Has obtenido un Huevo Entei!",
                    "你获得了炎帝的蛋！"
                    ],
                    reward: {
                        item: item.consumable.enteiEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[62].status = true;
                        main.player.unlockAchievement(62);
                    }
                },
                {      
                    text: [
                        "You have obtained $50,000!",
                        "¡Has obtenido $50,000!",
                    "你获得了$50,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(50000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['unionCave-5'] = main.routeData['unionCave-5bis'];
                        main.location.loadLocation(main.routeData['unionCave-5'], true);
                    }
                }
            ],
        ]
    },
    raikou: {
        name: ["RAIKOU", "RAIKOU", "雷公"],
        state: savedStates.raikou ?? 0,
        dialogues: [
            [
                {
                    text: ['RAUUNKRRHHHH!', '¡RAUUNKRRHHHH!', '隆隆隆！！！'],
                    cb: () => { crySound(243) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
                            pokemon: 'raikou',
                            level: 65,
                            ivs: {
                                hp: 251, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31,  
                            },
                            shiny: false,
                            moves: [ move['thunder'], move['snarl']],
                            background: './assets/images/background/battle8.png',
                            cb: () => {
                                main.npcs['raikou'].state = 1;
                                main.dialogue.startDialogue(main.npcs['raikou'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Raikou Egg!",
                        "¡Has obtenido un Huevo Raikou!",
                    "你获得了雷公的蛋！"
                    ],
                    reward: {
                        item: item.consumable.raikouEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[61].status = true;
                        main.player.unlockAchievement(61);
                    }
                },
                {      
                    text: [
                        "You have obtained $50,000!",
                        "¡Has obtenido $50,000!",
                    "你获得了$50,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(50000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['mtMortar-10'] = main.routeData['mtMortar-10bis'];
                        main.location.loadLocation(main.routeData['mtMortar-10'], true);
                    }
                }
            ],
        ]
    },
    suicune: {
        name: ["SUICUNE", "SUICUNE", "水君"],
        state: savedStates.suicune ?? 0,
        dialogues: [
            [
                {
                    text: ['SWOOOOOHHH!', '¡SWOOOOOHHH!', '呼呜呜！'],
                    cb: () => { crySound(243) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Ice Path', 'Ruta Helada', '冰雪小径'],
                            pokemon: 'suicune',
                            level: 65,
                            ivs: {
                                hp: 251, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31,  
                            },
                            shiny: false,
                            moves: [move['surf'], move['auroraBeam']],
                            background: './assets/images/background/battle4.png',
                            cb: () => {
                                main.npcs['suicune'].state = 1;
                                main.dialogue.startDialogue(main.npcs['suicune'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Suicune Egg!",
                        "¡Has obtenido un Huevo Suicune!",
                    "你获得了水君的蛋！"
                    ],
                    reward: {
                        item: item.consumable.suicuneEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[63].status = true;
                        main.player.unlockAchievement(63);
                    }
                },
                {      
                    text: [
                        "You have obtained $50,000!",
                        "¡Has obtenido $50,000!",
                    "你获得了$50,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(50000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['icePath-12'] = main.routeData['icePath-12bis'];
                        main.location.loadLocation(main.routeData['icePath-12'], true);
                    }
                }
            ],
        ]
    },
    hooh: {
        name: ["HO-OH", "HO-OH", "凤王"],
        state: savedStates.hooh ?? 0,
        dialogues: [
            [
                {
                    text: ['KYYAAWOOOOH!', '¡KYYAAWOOOOH!', '咔呀呜呜！'],
                    cb: () => { crySound(250) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Burned Burrow', 'Madriguera Quemada', '焦灼地穴'],
                            pokemon: 'hooh',
                            level: 90,
                            ivs: {
                                hp: 600, 
                                atk: 31, 
                                def: 51, 
                                spa: 31, 
                                spd: 51, 
                                spe: 20,  
                            },
                            shiny: false,
                            moves: [ move['fireBlast'], move['drillPeck']],
                            background: './assets/images/background/battle3.png',
                            cb: () => {
                                main.npcs['hooh'].state = 1;
                                main.dialogue.startDialogue(main.npcs['hooh'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Ho-Oh Egg!",
                        "¡Has obtenido un Huevo Ho-Oh!",
                    "你获得了凤王的蛋！"
                    ],
                    reward: {
                        item: item.consumable.hoohEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[65].status = true;
                        main.player.unlockAchievement(65);
                    }
                },
                {      
                    text: [
                        "You have obtained $150,000!",
                        "¡Has obtenido $150,000!",
                    "你获得了$150,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(150000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['burnedBurrow-8'] = main.routeData['burnedBurrow-8bis'];
                        main.location.loadLocation(main.routeData['burnedBurrow-8'], true);
                    }
                }
            ],
        ]
    },
    lugia: {
        name: ["LUGIA", "LUGIA", "洛奇亚"],
        state: savedStates.lugia ?? 0,
        dialogues: [
            [
                {
                    text: ['WHOOORRROOOHH!', '¡WHOOORRROOOHH!', '呼呼呼！'],
                    cb: () => { crySound(250) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Whirl Cave', 'Cueva Remolino', '漩涡洞穴'],
                            pokemon: 'lugia',
                            level: 90,
                            ivs: {
                                hp: 600, 
                                atk: 31, 
                                def: 51, 
                                spa: 31, 
                                spd: 51, 
                                spe: 20,  
                            },
                            shiny: false,
                            moves: [ move['aerialAce'], move['psychic']],
                            background: './assets/images/background/battle4.png',
                            cb: () => {
                                main.npcs['lugia'].state = 1;
                                main.dialogue.startDialogue(main.npcs['lugia'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Lugia Egg!",
                        "¡Has obtenido un Huevo Lugia!",
                    "你获得了洛奇亚的蛋！"
                    ],
                    reward: {
                        item: item.consumable.lugiaEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[64].status = true;
                        main.player.unlockAchievement(64);
                    }
                },
                {      
                    text: [
                        "You have obtained $150,000!",
                        "¡Has obtenido $150,000!",
                    "你获得了$150,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(150000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['whirlCave-5'] = main.routeData['whirlCave-5bis'];
                        main.location.loadLocation(main.routeData['whirlCave-5'], true);
                    }
                },
            ],
        ]
    },
    moltres: {
        name: ["MOLTRES", "MOLTRES", "火焰鸟"],
        state: savedStates.moltres ?? 0,
        dialogues: [
            [
                {
                    text: ['SKRRMMMM!', '¡SKRRMMMM!', '嗖嗖嗖！'],
                    cb: () => { crySound(146) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Mt. Ember', 'Monte Ascuas', '灯火山'],
                            pokemon: 'moltres',
                            level: 85,
                            ivs: {
                                hp: 300, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31, 
                            },
                            shiny: false,
                            moves: [move['fireBlast'], move['fly']],
                            background: './assets/images/background/battle3.png',
                            cb: () => {
                                main.npcs['moltres'].state = 1;
                                main.dialogue.startDialogue(main.npcs['moltres'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Moltres Egg!",
                        "¡Has obtenido un Huevo Moltres!",
                    "你获得了火焰鸟的蛋！"
                    ],
                    reward: {
                        item: item.consumable.moltresEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[58].status = true;
                        main.player.unlockAchievement(58);
                    }
                },
                {      
                    text: [
                        "You have obtained $100,000!",
                        "¡Has obtenido $100,000!",
                    "你获得了$100,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(100000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['mtEmber-2'] = main.routeData['mtEmber-2bis'];
                        main.location.loadLocation(main.routeData['mtEmber-2'], true);
                    }
                },
            ],
        ]
    },
    zapdos: {
        name: ["ZAPDOS", "ZAPDOS", "闪电鸟"],
        state: savedStates.zapdos ?? 0,
        dialogues: [
            [
                {
                    text: ['KZZTKRHHH!', '¡KZZTKRHHH!', '滋滋滋！'],
                    cb: () => { crySound(145) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Mt. Mortar', 'Mt. Mortero', '擂钵山'], 
                            pokemon: 'zapdos',
                            level: 85,
                            ivs: {
                                hp: 300, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31, 
                            },
                            shiny: false,
                            moves: [move['thunderbolt'], move['drillPeck']],
                            background: './assets/images/background/battle13.png',
                            cb: () => {
                                main.npcs['zapdos'].state = 1;
                                main.dialogue.startDialogue(main.npcs['zapdos'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Zapdos Egg!",
                        "¡Has obtenido un Huevo Zapdos!",
                    "你获得了闪电鸟的蛋！"
                    ],
                    reward: {
                        item: item.consumable.zapdosEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[57].status = true;
                        main.player.unlockAchievement(57);
                    }
                },
                {      
                    text: [
                        "You have obtained $100,000!",
                        "¡Has obtenido $100,000!",
                    "你获得了$100,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(100000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['powerPlant-1'] = main.routeData['powerPlant-1bis'];
                        main.location.loadLocation(main.routeData['powerPlant-1'], true);
                    }
                },
            ],
        ]
    },
    articuno: {
        name: ["ARTICUNO", "ARTICUNO", "急冻鸟"],
        state: savedStates.articuno ?? 0,
        dialogues: [
            [
                {
                    text: ['KRSSHHHHINN!', '¡KRSSHHHHINN!', '咔嚓咔嚓！'],
                    cb: () => { crySound(144) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Seafom Cave', 'Caverna Espuma', '双子洞窟'],
                            pokemon: 'articuno',
                            level: 85,
                            ivs: {
                                hp: 300, 
                                atk: 31, 
                                def: 31, 
                                spa: 31, 
                                spd: 31, 
                                spe: 31, 
                            },
                            shiny: false,
                            moves: [move['iceBeam'], move['hurricane']],
                            background: './assets/images/background/battle4.png',
                            cb: () => {
                                main.npcs['articuno'].state = 1;
                                main.dialogue.startDialogue(main.npcs['articuno'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Articuno Egg!",
                        "¡Has obtenido un Huevo Articuno!",
                    "你获得了急冻鸟的蛋！"
                    ],
                    reward: {
                        item: item.consumable.articunoEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[56].status = true;
                        main.player.unlockAchievement(56);
                    }
                },
                {      
                    text: [
                        "You have obtained $100,000!",
                        "¡Has obtenido $100,000!",
                    "你获得了$100,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(100000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['seafomCave-2'] = main.routeData['seafomCave-2bis'];
                        main.location.loadLocation(main.routeData['seafomCave-2'], true);
                    }
                },
            ],
        ]
    },
    mewtwo: {
        name: ["MEWTWO", "MEWTWO", "超梦"],
        state: savedStates.mewtwo ?? 0,
        dialogues: [
            [
                {
                    text: ['VRRYYEEEENNNNNN!', '¡VRRYYEEEENNNNNN!', '呜呜呜！'],
                    cb: () => { crySound(144) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Cliff Edge Gate', 'Paso Acantilado', '悬崖关口'],
                            pokemon: 'mewtwo',
                            level: 100,
                            ivs: {
                                hp: 500, 
                                atk: 31, 
                                def: 101, 
                                spa: 31, 
                                spd: 101, 
                                spe: 1, 
                            },
                            shiny: false,
                            moves: [move['psychic'], move['shadowBall']],
                            background: './assets/images/background/battle2.png',
                            cb: () => {
                                main.npcs['mewtwo'].state = 1;
                                main.dialogue.startDialogue(main.npcs['mewtwo'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Mewtwo Egg!",
                        "¡Has obtenido un Huevo Mewtwo!",
                    "你获得了超梦的蛋！"
                    ],
                    reward: {
                        item: item.consumable.mewtwoEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[59].status = true;
                        main.player.unlockAchievement(59);
                    }
                },
                {      
                    text: [
                        "You have obtained $500,000!",
                        "¡Has obtenido $500,000!",
                    "你获得了$500,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(500000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['cliffEdgeGate-8'] = main.routeData['cliffEdgeGate-8bis'];
                        main.location.loadLocation(main.routeData['cliffEdgeGate-8'], true);
                    }
                },
            ],
        ]
    },
    groudon: {
        name: ["GROUDON", "GROUDON", "固拉多"],
        state: savedStates.groudon ?? 0,
        dialogues: [
            [
                {
                    text: ['GRRRWAAAHHH!', '¡GRRRWAAAHHH!', '吼啊啊啊！！！'],
                    cb: () => { crySound(383) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Cherry Grotto', 'Gruta Cereza', '樱花洞窟'], 
                            pokemon: 'groudon',
                            level: 100,
                            ivs: {
                                hp: 800, 
                                atk: 31, 
                                def: 100, 
                                spa: 31, 
                                spd: 100, 
                                spe: 1, 
                            },
                            shiny: false,
                            moves: [move['earthquake'], move['fireBlast']],
                            background: './assets/images/background/battle31.png',
                            cb: () => {
                                main.npcs['groudon'].state = 1;
                                main.dialogue.startDialogue(main.npcs['groudon'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Groudon Egg!",
                        "¡Has obtenido un Huevo Groudon!",
                    "你获得了固拉多的蛋！"
                    ],
                    reward: {
                        item: item.consumable.groudonEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[73].status = true;
                        main.player.unlockAchievement(73);
                    }
                },
                {      
                    text: [
                        "You have obtained 750,000!",
                        "¡Has obtenido $750,000!",
                    "你获得了750,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(750000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['cherryGrotto-2'] = main.routeData['cherryGrotto-2bis'];
                        main.location.loadLocation(main.routeData['cherryGrotto-2'], true);
                    }
                },
            ],
        ]
    },
    kyogre: {
        name: ["KYOGRE", "KYOGRE", "盖欧卡"],
        state: savedStates.kyogre ?? 0,
        dialogues: [
            [
                {
                    text: ['KWYYYYGRRROOOOH!', '¡KWYYYYGRRROOOOH!', '咕呜呜呜！'],
                    cb: () => { crySound(382) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Storm Shortcut', 'Atajo Tormenta', '风暴捷径'], 
                            pokemon: 'kyogre',
                            level: 100,
                            ivs: {
                                hp: 600, 
                                atk: 15, 
                                def: 80, 
                                spa: 15, 
                                spd: 80, 
                                spe: 1, 
                            },
                            shiny: false,
                            moves: [move['surf'], move['thunder']],
                            background: './assets/images/background/battle32.png',
                            cb: () => {
                                main.npcs['kyogre'].state = 1;
                                main.dialogue.startDialogue(main.npcs['kyogre'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Kyogre Egg!",
                        "¡Has obtenido un Huevo Kyogre!",
                    "你获得了盖欧卡的蛋！"
                    ],
                    reward: {
                        item: item.consumable.kyogreEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[72].status = true;
                        main.player.unlockAchievement(72);
                    }
                },
                {      
                    text: [
                        "You have obtained 750,000!",
                        "¡Has obtenido $750,000!",
                    "你获得了750,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(750000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['stormShortcut-2'] = main.routeData['stormShortcut-2bis'];
                        main.location.loadLocation(main.routeData['stormShortcut-2'], true);
                    }
                },
            ],
        ]
    },
    rayquaza: {
        name: ["RAYQUAZA", "RAYQUAZA", "烈空坐"],
        state: savedStates.rayquaza ?? 0,
        dialogues: [
            [
                {
                    text: ['RRRROOOAAAWRRRRNNNNN!', 'RRRROOOAAAWRRRRNNNNN!', '吼吼吼吼吼！！！'],
                    cb: () => { crySound(384) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Mt. Silver', 'Monte Plateado', '白银山'], 
                            pokemon: 'rayquaza',
                            level: 100,
                            ivs: {
                                hp: 600, 
                                atk: 21, 
                                def: 300, 
                                spa: 21, 
                                spd: 300, 
                                spe: 1, 
                            },
                            shiny: false,
                            moves: [move['hurricane'], move['outrage']],
                            background: './assets/images/background/battle2.png',
                            cb: () => {
                                main.npcs['rayquaza'].state = 1;
                                main.dialogue.startDialogue(main.npcs['rayquaza'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Rayquaza Egg!",
                        "¡Has obtenido un Huevo Rayquaza!",
                    "你获得了烈空坐的蛋！"
                    ],
                    reward: {
                        item: item.consumable.rayquazaEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[74].status = true;
                        main.player.unlockAchievement(74);
                    }
                },
                {      
                    text: [
                        "You have obtained 1,000,000!",
                        "¡Has obtenido 1,000,000!",
                    "你获得了1,000,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(1000000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['mtSilver-4'] = main.routeData['mtSilver-4bis'];
                        main.location.loadLocation(main.routeData['mtSilver-4'], true);
                    }
                },
            ],
        ]
    },
    latios: {
        name: ["LATIOS", "LATIOS", "拉帝欧斯"],
        state: savedStates.latios ?? 0,
        dialogues: [
            [
                {
                    text: ['VRRRREEEEEOWWW!', 'VRRRREEEEEOWWW!', '嗡嗡嗡！'],
                    cb: () => { crySound(382) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Lunar Sanctuary', 'Santuario Lunar', '月之神殿'], 
                            pokemon: 'latios',
                            level: 100,
                            ivs: {
                                hp: 600, 
                                atk: 31, 
                                def: 100, 
                                spa: 31, 
                                spd: 100, 
                                spe: 15, 
                            },
                            shiny: false,
                            moves: [move['psychic'], move['mirrorShot']],
                            background: './assets/images/background/battle8.png',
                            cb: () => {
                                main.npcs['latios'].state = 1;
                                main.dialogue.startDialogue(main.npcs['latios'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Latios Egg!",
                        "¡Has obtenido un Huevo Latios!",
                    "你获得了拉帝欧斯的蛋！"
                    ],
                    reward: {
                        item: item.consumable.latiosEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[71].status = true;
                        main.player.unlockAchievement(71);
                    }
                },
                {      
                    text: [
                        "You have obtained 600,000!",
                        "¡Has obtenido $600,000!",
                    "你获得了600,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(600000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['lunarSanctuary-1'] = main.routeData['lunarSanctuary-1bisB'];
                        main.location.loadLocation(main.routeData['lunarSanctuary-1'], true);
                    }
                },
            ],
        ]
    },
    latias: {
        name: ["LATIAS", "LATIAS", "拉帝亚斯"],
        state: savedStates.latias ?? 0,
        dialogues: [
            [
                {
                    text: ['FIIIYAAASSHHH!', 'FIIIYAAASSHHH!', '呼啊啊啊！！！'],
                    cb: () => { crySound(382) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Solar Sanctuary', 'Santuario Solar', '日之神殿'], 
                            pokemon: 'latias',
                            level: 100,
                            ivs: {
                                hp: 500, 
                                atk: 31, 
                                def: 100, 
                                spa: 31, 
                                spd: 100, 
                                spe: 15, 
                            },
                            shiny: false,
                            moves: [move['psychic'], move['mirrorShot']],
                            background: './assets/images/background/battle3.png',
                            cb: () => {
                                main.npcs['latias'].state = 1;
                                main.dialogue.startDialogue(main.npcs['latias'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You have obtained an Latias Egg!",
                        "¡Has obtenido un Huevo Latias!",
                    "你获得了拉帝亚斯的蛋！"
                    ],
                    reward: {
                        item: item.consumable.latiasEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[70].status = true;
                        main.player.unlockAchievement(70);
                    }
                },
                {      
                    text: [
                        "You have obtained 600,000!",
                        "¡Has obtenido $600,000!",
                    "你获得了600,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(600000);
                    }
                },
                {      
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['solarSanctuary-1'] = routeBugEmergency['solarSanctuary-1bisB'];
                        main.location.loadLocation(main.routeData['solarSanctuary-1'], true);
                    }
                },
            ],
        ]
    },
    magnemite: {
        name: ["MAGNEMITE", "MAGNEMITE", "小磁怪"],
        state: savedStates.magnemite ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "...Scan process complete.",
                        "...Proceso de escaneo completo.",
                        "……扫描过程完成。"
                    ]
                },
                {
                    text: [
                        "Identity: Trainer.",
                        "Identidad: Entrenador.",
                        "身份：训练家。"
                    ]
                },
                {
                    text: [
                        "Classification: Irrelevant.",
                        "Clasificación: Irrelevante.",
                        "分类：无关紧要。"
                    ]
                },
                {
                    text: [
                        "Your presence does not alter the outcome.",
                        "Tu presencia no altera el resultado.",
                        "你的存在不会改变结果。"
                    ]
                },
                {
                    text: [
                        "Variables are under control.",
                        "Las variables están bajo control.",
                        "变量在控制之中。"
                    ]
                },
                {
                    text: [
                        "I am the electromagnetic pulse that governs this region.",
                        "Yo soy el pulso electromagnético que rige esta región.",
                        "我是统治这个地区的电磁脉冲。"
                    ]
                },
                {
                    text: [
                        "Everything flows through me.",
                        "Todo fluye a través de mí.",
                        "一切都流经我。"
                    ]
                },
                {
                    text: [
                        "You tried to use Mewtwo.",
                        "Intentaste usar a Mewtwo.",
                        "你试图利用超梦。"
                    ]
                },
                {
                    text: [
                        "Predictable failure.",
                        "Fracaso predecible.",
                        "可预见的失败。"
                    ]
                },
                {
                    text: [
                        "It is inside the swarm now.",
                        "Está dentro del enjambre ahora.",
                        "它现在在群体内部。"
                    ]
                },
                {
                    text: [
                        "Your leaders are nothing but unstable nodes in my network.",
                        "Tus líderes no son más que nodos inestables en mi red.",
                        "你们的领导者不过是我网络中不稳定的节点。"
                    ]
                },
                {
                    text: [
                        "Resistance is... obsolete.",
                        "La resistencia es... obsoleta.",
                        "抵抗……已过时。"
                    ]
                },
                {
                    text: [
                        "[SYSTEM LOG ███_██]",
                        "[LOG DEL SISTEMA ███_██]",
                    "[系统日志 ███_██]"
                    ]

                },
                {
                    text: [
                        "Reserve energy: 999.99%.",
                        "Energía de reserva: 999.99%.",
                        "储备能量：999.99%。"
                    ]
                },
                {
                    text: [
                        "Kanto's electric heartbeat: Synchronized.",
                        "Latido eléctrico de Kanto: Sincronizado.",
                        "关都的电力心跳：已同步。"
                    ]
                },
                {
                    text: [
                        "Final objective: Rewrite the human neural network.",
                        "Objetivo final: Reescribir la red neuronal humana.",
                        "最终目标：重写人类神经网络。"
                    ]
                },
                {
                    text: [
                        "Do you want to interrupt the sequence?",
                        "¿Quieres interrumpir la secuencia?",
                        "你想中断序列吗？"
                    ]
                },
                {
                    text: ['01000100 01001001 01000101', '01101101 01110101 01100101 01110010 01100101', '01000100 01001001 01000101'],
                    cb: () => { crySound(82) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: [`Hertz Vault`, `Bóveda de Hertz`, `赫兹宝库`],
                            pokemon: 'magnemite',
                            level: 666,
                            ivs: {
                                hp: 666, 
                                atk: 666, 
                                def: 666, 
                                spa: 666, 
                                spd: 666, 
                                spe: 666, 
                            },
                            shiny: true,
                            background: './assets/images/background/battle2.png',
                            cb: () => {
                                main.npcs['magnemite'].state = 1;
                                main.dialogue.startDialogue(main.npcs['magnemite'], false);
                            }
                        });
                    },
                },
            ],
            [
                {
                    text: [
                        "...Impossible.",
                        "...Imposible.",
                        "……不可能。"
                    ]
                },
                {
                    text: [
                        "Logical error: Free will... functioning?",
                        "Error lógico: ¿Libre albedrío... funcional?",
                        "逻辑错误：自由意志……在运作？"
                    ]
                },
                {
                    text: [
                        "Sequence aborted.",
                        "Secuencia abortada.",
                        "序列已中止。"
                    ]
                },
                {
                    text: [
                        "You... altered the pattern.",
                        "Tú... alteraste el patrón.",
                        "你……改变了模式。"
                    ]
                },
                {
                    text: [
                        "Kanto... is yours.",
                        "Kanto... es tuyo.",
                        "关都……是你的了。"
                    ]
                },
                {
                    text: [
                        "For now.",
                        "Por ahora.",
                        "暂时。"
                    ]
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                    state: 3
                }
            ],
            [
                {
                   text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "What was that?",
                        "¿Qué ha sido eso?",
                        "那是什么？"
                    ]
                },
                {
                    text: [
                        "It can't be.",
                        "No puede ser.",
                        "不可能。"
                    ]
                },
                {
                    text: [
                        "No!",
                        "¡No!",
                        "不！"
                    ]
                },
                {
                    text: [
                        "NO!",
                        "¡NO!",
                        "不！"
                    ]
                },
                {
                    text: [
                        "That sound... is statistically idiotic.",
                        "Ese sonido... es estadísticamente imbécil.",
                        "那个声音……在统计上是愚蠢的。"
                    ]
                },
                {
                    text: [
                        "My calculations... are corrupting...",
                        "Mis cálculos... se corrompen...",
                        "我的计算……正在腐化……"
                    ]
                },
                {
                    text: [
                        "Logical energy decreasing.",
                        "Energía lógica en descenso.",
                        "逻辑能量下降。"
                    ]
                },
                {
                    text: [
                        "Binary integrity compromised.",
                        "Integridad binaria comprometida.",
                        "二进制完整性受损。"
                    ]
                },
                {
                    text: [
                        "Your IQ is so low it bypasses my cognitive defenses!",
                        "¡Tu IQ es tan bajo que atraviesa mis defensas cognitivas!",
                        "你的智商低到绕过了我的认知防御！"
                    ]
                },
                {
                    text: [
                        "I can't... process this much... human stupidity...",
                        "No puedo... procesar tanta... estupidez humana...",
                        "我无法……处理这么多……人类的愚蠢……"
                    ]
                },
                {
                    text: [
    "💀💀💀💀💀",
    "💀💀💀💀💀",
    "💀💀💀💀💀"
]
                },
                {
                    text: [
    "⚠️⚠️⚠️ COGNITIVE SYSTEM IN CRISIS ⚠️⚠️⚠️",
    "⚠️⚠️⚠️ SISTEMA COGNITIVO EN CRISIS ⚠️⚠️⚠️",
    "⚠️⚠️⚠️ COGNITIVE SYSTEM IN CRISIS ⚠️⚠️⚠️"
]
                },
                {
                    text: [
    "🧠💥 IQ too low to process... 💩🔴",
    "🧠💥 IQ demasiado bajo para procesar... 💩🔴",
    "🧠💥 IQ too low to process... 💩🔴"
]
                },
                {
                    text: [
    "🤖 A fart...? 😵‍💫",
    "🤖 ¿Una flatulencia...? 😵‍💫",
    "🤖 A fart...? 😵‍💫"
]
                },
                {
                    text: [
    "🏳🏳🏳 Is that your final attack? 🔥🔥🔥",
    "🏳🏳🏳 ¿Ese es tu ataque final? 🔥🔥🔥",
    "🏳🏳🏳 Is that your final attack? 🔥🔥🔥"
]
                },
                {
                    text: [
    "🛑 No... it can't be... 🤣🤣🤣",
    "🛑 No... no puede ser... 🤣🤣🤣",
    "🛑 No... it can't be... 🤣🤣🤣"
]
                },
                {
                    text: [
                        "📉 My logic... my calculations... my dreams of controlling Kanto... 😭😭😭🔌",
                        "📉 Mi lógica... mis cálculos... mis sueños de controlar Kanto... 😭😭😭🔌",
                    "📉 My logic... my calculations... my dreams of controlling 关都... 😭😭😭🔌"
                    ]
                },
                {
                    text: [
    "(┬┬﹏┬┬)",
    "(┬┬﹏┬┬)",
    "(┬┬﹏┬┬)"
]
                },
                {
                    text: [
    "🧻 + 🧠 = 🤯🤯🤯",
    "🧻 + 🧠 = 🤯🤯🤯",
    "🧻 + 🧠 = 🤯🤯🤯"
]
                },
                {
                    text: [
                        "ACTIVATING PROTOCOL: SELF-DESTRUCTION 💣💣💣",
                        "ACTIVANDO PROTOCOLO: AUTO-DESTRUCCIÓN 💣💣💣",
                    "启动协议：自毁 💣💣💣"
                    ]

                },
                {
                    text: [
    "3...",
    "3...",
    "3..."
]
                },
                {
                    text: [
    "2...",
    "2...",
    "2..."
]
                },
                {
                    text: [
    "1...",
    "1...",
    "1..."
]
                },
                {
                    text: [
    "🤡🤡🤡",
    "🤡🤡🤡",
    "🤡🤡🤡"
],
                    cb: () => {
                        playSound('fart', 'ui');
                    },
                },
                {
                    text: [
                        "Ha ha ha.",
,
                        "哈哈哈。",
                        "哈哈哈。",
                    ]
                },
                {
                    text: [
                        "I can do that too.",
                        "Yo también se hacer eso.",
                        "我也会那个。"
                    ]
                },
                {
                    text: [
                        "Did you think I was going to explode?",
                        "¿Pensaste que iba a explotar?",
                        "你以为我要爆炸了吗？"
                    ]
                },
                {
                    text: [
                        "That button just plays a fart sound.",
                        "Ese botón solo reproduce un pedo.",
                        "那个按钮只是播放放屁的声音。"
                    ]
                },
                {
                    text: [
                        "Now come back when you have more neurons and fewer buttons.",
                        "Ahora vuelve cuando tengas más neuronas y menos botones.",
                    "等你有更多脑细胞和更少按键的时候再回来。"
                    ],
                    state: 0
                }
            ],
            [
                {
                    text: [
    "...",
    "...",
    "..."
],
                }
            ]
        ]
    },
    // APACHAN
    apachetaApachan: {
        name:  [`APACHETA`, `APACHETA`, `阿帕切塔`],
        state: savedStates.apachetaApachan ?? 0,
        dialogues: [
            [
               {
                    text: [
                        "A tower of stacked stones.",
                        "Una torre de piedras apiladas.",
                        "一座堆叠的石头塔。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone') == undefined),
                    text: [
                        "Some stones are missing.",
                        "Faltan algunas piedras.",
                        "有些石头不见了。"
                    ]
                },
                {
                    text: [
                        "There are a total of five slots.",
                        "Hay un total de cinco huecos.",
                        "一共有五个槽位。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount < 5),
                    text: [
                        "Your Lithic Stone fits perfectly.",
                        "Tu Piedra Lítica encaja a la perfección.",
                        "你的石碑石完美契合。"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount < 5),
                    text: [
                        "But you don't have enough stones...",
                        "Pero no tienes suficientes piedras...",
                        "但你的石头不够……"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "You place the 5 Lithic Stones!",
                        "¡Colocas las 5 Piedras Líticas!",
                        "你放置了5块石碑石！"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "The Lithic Stabilizer is reacting!",
                        "¡El Estabilizador Lítico está reaccionado!",
                        "石碑稳定器在反应！"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    text: [
                        "Let's return to Johto!",
                        "¡Regresemos a Johto!",
                        "我们回城都吧！"
                    ]
                },
                {
                    condition: () => (main.inventory.searchItem('lithicStone')?.amount == 5),
                    cb: () => {
                        main.dialogue.endDialogue();
                        playSound('teleport', 'ui');
                        main.location.loadLocation(main.routeData['route45-5']);
                        main.player.region = 0;
                        main.player.returnFromApachan();
                        console.log(main.player)
                    }, 
                    state: 1
                }
            ],
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        playSound('teleport', 'ui');
                        main.player.region = 0;
                        main.location.loadLocation(main.routeData['route45-5']);
                    }
                },
            ]
        ]
    },
    professorGranite: {
        name: ['Professor Granite', 'Profesor Granito', '花岗岩博士'],
        state: savedStates.professorGranite ?? 0,
        dialogues: [
            [
                {
                    text: [
                        `Wow, a new tourist has arrived from Apacheta.`,
                        `Vaya, un nuevo turista que ha llegado desde la Apacheta.`,
                        `哇，一个新游客从阿帕切塔来了。`
                    ]
                },
                {
                    text: [
                        `They always arrive at nap time...`,
                        `Siempre llegan en la hora de la siesta...`,
                        `他们总是在午睡时间到...`
                    ]
                },
                {
                    text: [
                        `Hello!`,
                        `¡Hola!`,
                        `你好！`
                    ]
                },
                {
                    text: [
                        `You've been playing with the wrong stones, haven't you?`,
                        `Has estado jugando con las piedras equivocadas, ¿verdad?`,
                        `你一直在玩错石头，是吧？`
                    ]
                },
                {
                    text: [
                        `The Apacheta is not a toy.`,
                        `La Apacheta no es un juguete.`,
                        `阿帕切塔不是玩具。`
                    ]
                },
                {
                    text: [
                        `But... it's okay, it's not your fault.`,
                        `Pero bueno... no pasa nada, no es culpa tuya.`,
                        `但是...没关系，不是你的错。`
                    ]
                },
                {
                    text: [
                        `But hey... it's okay, it's not your fault.`,
                        `Bienvenido a la región de Apachán.`,
                        `但是嘿...没关系，不是你的错。`
                    ]
                },
                {
                    text: [
                        `It looks like all your Pokémon and items are stuck in your home region.`,
                        `Parece que todos tus Pokémon y objetos se han quedado en tu región de origen.`,
                        `看来你所有的宝可梦和道具都留在你的家乡地区了。`
                    ]
                },
                {
                    text: [
                        `It is normal the first time you travel, doing rituals with stones that you do not know.`,
                        `Es algo normal la primera vez que viajas haciendo rituales con piedras que desconoces.`,
                        `第一次旅行，用不认识的石头做仪式，这很正常。`
                    ]
                },
                {
                    text: [
                        `Next time you'll definitely do better.`,
                        `La próxima vez seguro que te saldrá mejor.`,
                        `下次你肯定会做得更好。`
                    ]
                },
                {
                    text: [
                        `Don't worry about your Pokémon and items, you'll get them back eventually.`,
                        `No te preocupes por tus Pokémon y objetos, los recuperarás eventualmente.`,
                        `别担心你的宝可梦和道具，你最终会拿回来的。`
                    ]
                },
                {
                    text: [
                        `For now I'm going to give you some help to get you going.`,
                        `De momento voy a darte algo de ayuda para que vayas tirando.`,
                        `现在我要给你一些帮助让你起步。`
                    ]
                },
                {
                    text: [
                        `Here, accept this Starter Kit`,
                        `Toma, acepta este Kit de iniciado.`,
                        `给你，收下这个新手包`
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.inventory.addItem(item.key.pokeball, 1);
                        main.inventory.addItem(item.key.potion, 3);
                        main.inventory.addItem(item.key.pokeRadar, 1);
                        main.inventory.addItem(item.key.expShare, 1);
                        main.inventory.addItem(item.key.rod, 1);
                        main.player.changeGold(500);
                    }
                },
                {
                    text: [
                        `Contains a Pokeball, three reusable Potions, a Pokeradar, an Exp. Share, a Rod and $500`,
                        `Contiene una Pokeball, tres Pociones reutilizables, un Pokeradar, un Repartir Experiencia, una Caña y $500.`,
                        `包含一个精灵球、三个可重复使用伤药、一个宝可梦雷达、一个学习装置、一根钓竿和$500`
                    ]
                },
                {   
                    text: [
                        "To return to your region, you will need five Lithic Stones",
                        "Para volver a tu región, vas a necesitar cinco Piedras Líticas.",
                    "要回到你的地区，你需要五块石碑碎片"
                    ],
                },
                {   
                    text: [
                        "Luckily for you, they're pretty easy to get in Apachán.",
                        "Por suerte para ti, es bastante sencillas obtenerlas en Apachán.",
                    "算你运气好，在阿帕昌很容易弄到。"
                    ],
                },
                {   
                    text: [
                        "Defeat the Dojo leaders of the different cities and they will give them to you without question.",
                        "Vence a los líderes de los Dojo de las diferentes ciudades y te las darán sin rechistar.",
                    "打败各个城市的道场首领，他们会毫不犹豫地给你。"
                    ],
                },    
                {
                    text: [
                        "Wait, don't go yet.",
                        "Espera, no te vayas aún.",
                    "等等，先别走。"
                    ],
                },        
                {
                    text: [
                        "Keep this Lytic Stabilizer safe, and don't lose it.",
                        "Guárdate bien este Estabilizador Lítico, y no lo pierdas.",
                    "把这个石质稳定器收好，别弄丢了。"
                    ],
                    reward: {
                        item: item.key.stabilizer,
                        amount: 1
                    },
                },
                {   
                    text: [
                        "It will allow you to go to and from Apachán with all your belongings.",
                        "Te permitirá ir y volver de Apachán con todas tus pertenencias.",
                    "它会让你带着所有物品往返阿帕昌。"
                    ],
                },
                {
                    text: [
                        "Good luck!",
                        "¡Buena suerte!",
                    "祝你好运！"
                    ],
                },
                {   
                    text: [
    "...",
    "...",
    "..."
],
                },
                {   
                    text: [
                        "Ah, yes, of course.",
                        "Ah, ya claro.",
                    "啊，对，当然。"
                    ],
                },
                {   
                    text: [
                        "My bad.",
                        "Que cabeza la mia.",
                    "我的错。"
                    ],
                },
                {
                    text: [
                        "You'll need a Pokémon to defend yourself...",
                        "Necesitarás un Pokémon para defenderte...",
                    "你需要一只宝可梦来保护自己..."
                    ],        
                },         
                {
                    text: [
                        "Tell me, which one do you like?",
                        "Dime, ¿cuál te gusta?",
                    "告诉我，你喜欢哪一个？"
                    ],
                    choices: [
                        {
                            text: ["Treecko", "Treecko", "木守宫"],     
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: ["Torchic", "Torchic", "火稚鸡"],
                            next: 2, 
                            state: 2  
                        },
                        {
                            text: ["Mudkip", "Mudkip", "水跃鱼"],
                            next: 3, 
                            state: 3  
                        }
                    ]
                },
            ],
            [
                {
                    text: [
                        "Do you like that one?",
                        "¿Te gusta ese?",
                    "你喜欢那个吗？"
                    ],
                },
                {
                    text: [
                        "Here's your new partner.",
                        "Aquí tienes a tu nuevo compañero.",
                    "这是你的新伙伴。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.team.addPokemon(new Pokemon(pokemon['treecko'], 5));
                        main.pokedex.seePokemon(pokemon['treecko'].n);
                        main.pokedex.catchPokemon(pokemon['treecko'].n);
                    },
                },
                {
                    text: [
                        "Take good care of Treecko!",
                        "¡Cuida bien de Treecko!",
                    "好好照顾木守宫！"
                    ],
                    state: 4 
                },
            ],
            [
                {
                    text: [
                        "Do you like that one?",
                        "¿Te gusta ese?",
                    "你喜欢那个吗？"
                    ],
                },
                {
                    text: [
                        "Here's your new partner.",
                        "Aquí tienes a tu nuevo compañero.",
                    "这是你的新伙伴。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.team.addPokemon(new Pokemon(pokemon['torchic'], 5));
                        main.pokedex.seePokemon(pokemon['torchic'].n);
                        main.pokedex.catchPokemon(pokemon['torchic'].n);
                    },
                },
                {
                    text: [
                        "Take good care of Torchic!",
                        "¡Cuida bien de Torchic!",
                    "好好照顾火稚鸡！"
                    ],
                    state: 4 
                },
            ],
            [
                {
                    text: [
                        "Do you like that one?",
                        "¿Te gusta ese?",
                    "你喜欢那个吗？"
                    ],
                },
                {
                    text: [
                        "Here's your new partner.",
                        "Aquí tienes a tu nuevo compañero.",
                    "这是你的新伙伴。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        main.team.addPokemon(new Pokemon(pokemon['mudkip'], 5));
                        main.pokedex.seePokemon(pokemon['mudkip'].n);
                        main.pokedex.catchPokemon(pokemon['mudkip'].n);
                    },
                },
                {
                    text: [
                        "Take good care of Mudkip!",
                        "¡Cuida bien de Mudkip!",
                    "好好照顾水跃鱼！"
                    ],
                    state: 4 
                },
            ],
            [
                {   
                    text: [
                        "ZZzzzz...",
,
                        "呼呼呼……",
                        "呼呼呼……",
                    ],
                },
            ]
        ]
    },
    signboardRoute56: {
        name: ['Pokémon Laboratory', 'Laboratorio Pokémon', '宝可梦研究所'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Professor Granite's Lab.",
                        "Laboratorio del Profesor Granito.",
                        "格拉尼特博士的研究所。"
                    ]
                },
            ]
        ]
    },
    route56HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route56HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM5 Quick Attack on the ground!",
                        "¡He encontrado x1 MT5 Ataque rápido en el suelo!",
                    "我在地上找到了x1 招式机5（电光一闪）！"
                    ],
                    reward: {
                        item: item.tm.tm5,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselRoute56: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute56 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Medicine！",
                        "¡Hay x2 Medicina dentro la vasija!",
                    "容器里有x2 伤药！"
                    ],
                    reward: {
                        item: item.consumable.medicine,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    geologistRoute56: {
        name: ['Geologist', 'Geólogo', '地质学家'],
        state: savedStates.geologistRoute56 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to the Apachán Region!",
                        "¡Bienvenido a la Región de Apachán!",
                        "欢迎来到阿帕查地区！"
                    ]
                },
                {
                    text: [
                        "The ground here hides ancient secrets... and some very rare stones.",
                        "El suelo aquí esconde secretos antiguos... y algunas piedras muy raras.",
                        "这里的土地隐藏着古老的秘密……还有一些非常稀有的石头。"
                    ]
                },
                {
                    text: [
                        "Keep your eyes open, you never know what you might dig up!",
                        "¡Mantén los ojos abiertos, nunca sabes qué podrías desenterrar!",
                    "睁大眼睛，你永远不知道能挖出什么！"
                    ]

                },
            ],
        ]   
    },
    oldManLithicTown: {
        name: ['Old Man', 'Anciano', '老人'],
        state: savedStates.oldManLithicTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "They say the stones here have memories...",
                        "Dicen que las piedras de aquí tienen memoria...",
                        "据说这里的石头有记忆……"
                    ]
                },
                {
                    text: [
                        "If you listen closely, you might hear whispers of ancient trainers.",
                        "Si escuchas con atención, podrías oír susurros de entrenadores antiguos.",
                    "仔细听，你可能会听到古代训练家的低语。"
                    ]

                },
                {
                    text: [
                        "Or maybe I'm just getting old, hehe.",
                        "O tal vez ya estoy viejo, jeje.",
                    "也许只是我老了，嘿嘿。"
                    ]

                },
            ],
        ]   
    },
    plantGirlLithicTown: {
        name: ['Little Gardener', 'Pequeña Jardinera', '小园丁'],
        state: savedStates.plantGirlLithicTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "My Roselia loves the soil here!",
                        "¡A mi Roselia le encanta la tierra de aquí!",
                        "我的毒蔷薇喜欢这里的土壤！"
                    ]
                },
                {
                    text: [
                        "It's rich and full of minerals!",
                        "¡Está llena de minerales!",
                        "它富含矿物质！"
                    ]
                },
                {
                    text: [
                        "They say Pokémon type Plant grow better in rocky places like this.",
                        "Dicen que los Pokémon tipo Planta crecen mejor en lugares rocosos como este.",
                        "据说草属性宝可梦在这样的岩石地带长得更好。"
                    ]
                },
            ],
        ]   
    },
    vesselALithicTown: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselALithicTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Rare Candy！",
                        "¡Hay x1 Carameloraro dentro de la vasija!",
                    "容器里有x1 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBLithicTown: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBLithicTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Lax Mint！",
                        "¡Hay x1 Menta floja dentro de la vasija!",
                    "容器里有x1 悠闲薄荷！"
                    ],
                    reward: {
                        item: item.consumable.laxMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCLithicTown: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCLithicTown ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x1 HP Up！",
                        "¡Hay x1 Más PS dentro la vasija!",
                    "容器里有x1 HP Up！"
                    ],
                    reward: {
                        item: item.consumable.hpUp,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardLithicTown: {
        name: ['Lithic Town', 'Pueblo Lítico', '石之镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Where stones tell stories.",
                        "Donde las piedras cuentan historias.",
                    "石头诉说故事的地方。"
                    ],
                },
            ]
        ]
    },
    vesselRoute55: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute55 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "jar里有x1 Union Ticket！",
                        "¡Hay x1 Ticket Unión dentro la vasija!",
                    "罐子里有x1 联合券！"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route55HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route55HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x2 Zinc on the ground!",
                        "¡He encontrado x2 Zinc en el suelo!",
                    "我在地上找到了x2 特防增强剂！"
                    ],
                    reward: {
                        item: item.consumable.zinc,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    route57HiddenItem: {
        name:  [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route57HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM109 Comet Punch on the ground!",
                        "¡He encontrado x1 MT109 Puño cometa en el suelo!",
                    "我在地上找到了x1 招式机109（连续拳）！"
                    ],
                    reward: {
                        item: item.tm.tm109,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselRoute59: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute59 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Rare Candy！",
                        "¡Hay x2 Carameloraro dentro de la vasija!",
                    "容器里有x2 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    trainerRoute61: {
        name: ['Trainer', 'Entrenador', '训练师'],
        state: savedStates.trainerRoute61 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Opposite is the Battle Center.",
                        "Enfrente se encuentra el Centro Batalla.",
                        "对面是战斗中心。"
                    ]
                },
                {
                    text: [
                        "There, 3-on-3 battles are held against very tough trainers.",
                        "Allí se disputan combates 3 contra 3 contra entrenadores muy duros.",
                    "那里进行3对3的战斗，对手是非常强硬的训练家。"
                    ]

                },
                {
                    text: [
                        "My longest streak was 5 wins, but I was defeated...",
                        "Mi mayor racha fueron 5 victorias, pero fui derrotado...",
                    "我最长连胜是5场，但后来输了……"
                    ]

                },
                {
                    text: [
                        "Every 3 battles the rivals increase the IVs of their Pokémon.",
                        "Cada 3 combates los rivales aumentan los IVs de sus Pokémon.",
                        "每3场战斗，对手的宝可梦个体值会提升。"
                    ]
                },
                {
                    text: [
                        "And they have no limits...",
                        "Y no tienen límite...",
                        "而且没有上限……"
                    ]
                },
                {
                   text: [
                        "They use illegal Pokémon, and nobody does anything.",
                        "Usan Pokémon ilegales, y nadie hace nada.",
                    "他们使用非法宝可梦，却没人管。"
                    ],
                },
                {
                    text: [
                        "You better be well prepared.",
                        "Mas te vale ir bien preparado.",
                    "你最好做好充分准备。"
                    ],
                }
            ],

        ]
    },
    battleCenter: {
        name: ['Receptionist', 'Recepcionista', '接待员'],
        state: savedStates.battleCenter ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to Battle Center.",
                        "Te damos la bienvenida Centro Batalla.",
                        "欢迎来到战斗中心。"
                    ]
                },
                {
                    text: [
                        "First of all, let me check your team...",
                        "Antes de nada, déjame comprobar tu equipo...",
                    "首先，让我检查一下你的队伍……"
                    ]

                },
                {
                    condition: () => (
                        (main.team.pokemon.length < 3) ||
                        (main.team.isPokemonInTeam('MEWTWO') || main.team.isPokemonInTeam('LUGIA') || main.team.isPokemonInTeam('HOOH') ||
                        main.team.isPokemonInTeam('GROUDON') || main.team.isPokemonInTeam('KYOGRE') || main.team.isPokemonInTeam('RAYQUAZA') ||
                        main.team.isPokemonInTeam('DEOXYS') || main.team.isPokemonInTeam('ARTICUNO') || main.team.isPokemonInTeam('ZAPDOS') ||
                        main.team.isPokemonInTeam('MOLTRES') || main.team.isPokemonInTeam('RAIKOU') || main.team.isPokemonInTeam('ENTEI') ||
                        main.team.isPokemonInTeam('SUICUNE') || main.team.isPokemonInTeam('LATIAS') || main.team.isPokemonInTeam('LATIOS')) ||
                        main.team.isPokemonInTeam('REGIROCK') || main.team.isPokemonInTeam('REGICE') || main.team.isPokemonInTeam('REGISTEEL')
                    ),
                    text: [
                        "I'm sorry, you don't meet the conditions.",!
                        "Lo siento, no cumples las condiciones.",
,
                    "抱歉，你不满足条件。",
                    ]
                },
                {
                    condition: () => (main.team.pokemon.length < 3),
                    text: [
                        "Your team needs to have at least three Pokémon to participate.",
                        "Tu equipo necesita tener al menos tres Pokémon para participar.",
                        "你的队伍至少需要三只宝可梦才能参加。"
                    ]
                },
                {
                    condition: () => (
                        main.team.isPokemonInTeam('MEWTWO') || main.team.isPokemonInTeam('LUGIA') || main.team.isPokemonInTeam('HOOH') ||
                        main.team.isPokemonInTeam('GROUDON') || main.team.isPokemonInTeam('KYOGRE') || main.team.isPokemonInTeam('RAYQUAZA') ||
                        main.team.isPokemonInTeam('DEOXYS') || main.team.isPokemonInTeam('ARTICUNO') || main.team.isPokemonInTeam('ZAPDOS') ||
                        main.team.isPokemonInTeam('MOLTRES') || main.team.isPokemonInTeam('RAIKOU') || main.team.isPokemonInTeam('ENTEI') ||
                        main.team.isPokemonInTeam('SUICUNE') || main.team.isPokemonInTeam('LATIAS') || main.team.isPokemonInTeam('LATIOS') ||
                        main.team.isPokemonInTeam('REGIROCK') || main.team.isPokemonInTeam('REGICE') || main.team.isPokemonInTeam('REGISTEEL')
                    ),
                    text: [
                        "The following Pokémon are not allowed for challengers: Mewtwo, Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza, Deoxys,",
                        "Los siguientes Pokémon no están permitidos para los aspirantes: Mewtwo, Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza, Deoxys, ",
                    "以下宝可梦不允许挑战者使用：超梦, 洛奇亚, 凤王, 盖欧卡, 固拉多, 烈空坐, 代欧奇希斯,"
                    ]
                },
                {
                    condition: () => (
                        main.team.isPokemonInTeam('MEWTWO') || main.team.isPokemonInTeam('LUGIA') || main.team.isPokemonInTeam('HOOH') ||
                        main.team.isPokemonInTeam('GROUDON') || main.team.isPokemonInTeam('KYOGRE') || main.team.isPokemonInTeam('RAYQUAZA') ||
                        main.team.isPokemonInTeam('DEOXYS') || main.team.isPokemonInTeam('ARTICUNO') || main.team.isPokemonInTeam('ZAPDOS') ||
                        main.team.isPokemonInTeam('MOLTRES') || main.team.isPokemonInTeam('RAIKOU') || main.team.isPokemonInTeam('ENTEI') ||
                        main.team.isPokemonInTeam('SUICUNE') || main.team.isPokemonInTeam('LATIAS') || main.team.isPokemonInTeam('LATIOS')||
                        main.team.isPokemonInTeam('REGIROCK') || main.team.isPokemonInTeam('REGICE') || main.team.isPokemonInTeam('REGISTEEL')
                    ),
                    text: [
                        "Articuno, Zapdos, Moltres, Raikou, Entei, Suicune, Regirock, Regice, Registeel, Latias, Latios.",
,
                        "急冻鸟、闪电鸟、火焰鸟、雷公、炎帝、水君、雷吉洛克、雷吉艾斯、雷吉斯奇鲁、拉帝亚斯、拉帝欧斯。",
                        "急冻鸟、闪电鸟、火焰鸟、雷公、炎帝、水君、雷吉洛克、雷吉艾斯、雷吉斯奇鲁、拉帝亚斯、拉帝欧斯。",
                    ]
                },
                {
                    condition: () => (
                        (main.team.pokemon.length < 3) ||
                        (main.team.isPokemonInTeam('MEWTWO') || main.team.isPokemonInTeam('LUGIA') || main.team.isPokemonInTeam('HOOH') ||
                        main.team.isPokemonInTeam('GROUDON') || main.team.isPokemonInTeam('KYOGRE') || main.team.isPokemonInTeam('RAYQUAZA') ||
                        main.team.isPokemonInTeam('DEOXYS') || main.team.isPokemonInTeam('ARTICUNO') || main.team.isPokemonInTeam('ZAPDOS') ||
                        main.team.isPokemonInTeam('MOLTRES') || main.team.isPokemonInTeam('RAIKOU') || main.team.isPokemonInTeam('ENTEI') ||
                        main.team.isPokemonInTeam('SUICUNE') || main.team.isPokemonInTeam('LATIAS') || main.team.isPokemonInTeam('LATIOS')) ||
                        main.team.isPokemonInTeam('REGIROCK') || main.team.isPokemonInTeam('REGICE') || main.team.isPokemonInTeam('REGISTEEL')
                    ),
                    text: [
                        "Come back when you meet the requirements.",
                        "Regresa cuando cumplas los requisitos.",
                        "满足条件后再来。"
                    ]
                },
                {
                    condition: () => (
                        (main.team.pokemon.length < 3) ||
                        (main.team.isPokemonInTeam('MEWTWO') || main.team.isPokemonInTeam('LUGIA') || main.team.isPokemonInTeam('HOOH') ||
                        main.team.isPokemonInTeam('GROUDON') || main.team.isPokemonInTeam('KYOGRE') || main.team.isPokemonInTeam('RAYQUAZA') ||
                        main.team.isPokemonInTeam('DEOXYS') || main.team.isPokemonInTeam('ARTICUNO') || main.team.isPokemonInTeam('ZAPDOS') ||
                        main.team.isPokemonInTeam('MOLTRES') || main.team.isPokemonInTeam('RAIKOU') || main.team.isPokemonInTeam('ENTEI') ||
                        main.team.isPokemonInTeam('SUICUNE') || main.team.isPokemonInTeam('LATIAS') || main.team.isPokemonInTeam('LATIOS')) ||
                        main.team.isPokemonInTeam('REGIROCK') || main.team.isPokemonInTeam('REGICE') || main.team.isPokemonInTeam('REGISTEEL')
                    ),
                    cb: () => {
                        main.dialogue.endDialogue();
                    }
                },
                {
                    text: [
                        "Your team is eligible to participate.",
                        "Tu equipo es válido para participar.",
                        "你的队伍有资格参加。"
                    ]
                },
                {
                    text: [
                        "The tournament is about to begin.",
                        "¡El torneo está a punto de empezar!",
                        "锦标赛即将开始。"
                    ]
                },
                {
                    text: [
                        "Come on, your first opponent is waiting for you!",
                        "Vamos, tu primer rival te espera.",
                    "来吧，你的第一个对手在等你！"
                    ]

                },
                {
                    cb: () => {
                        main.dialogue.endDialogue()
                        main.gym.open('battleCenter', 0);
                    } 
                }
            ],

        ]
    },
    vesselARoute62: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute62 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Medicine Strong！",
                        "¡Hay x3 Medicina Fuerte dentro de la vasija!",
                    "容器里有x3 强效伤药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute62: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute62 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 爱心甜点！",
                        "¡Hay x1 Conf. corazón dentro de la vasija!",
                    "容器里有x1 爱心甜点！"
                    ],
                    reward: {
                        item: item.consumable.loveSweet,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardAFlintCity: {
        name: ['Flint City', 'Ciudad Pedernal', '燧石市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Forged in stone, driven by fire.",
                        "Forjada en piedra, impulsada por el fuego.",
                    "石中锻造，火中驱动。"
                    ],
                },
            ]
        ]
    },
    signboardBFlintCity: {
        name: ['EVOLUTION DOJO', 'DOJO EVOLUCIÓN', '进化道场'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                      "Unlock your Pokémon's full potential!",
                      "¡Saca el máximo potencial a tus Pokémon!",
                      "释放你的宝可梦的全部潜力！"
                    ]
                },
            ]
        ]
    },
    vesselAFlintCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Gentle Mint！",
                        "¡Hay x1 Menta amable dentro de la vasija!",
                    "容器里有x1 温顺薄荷！"
                    ],
                    reward: {
                        item: item.consumable.gentleMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBFlintCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Rare Candy！",
                        "¡Hay x1 Carameloraro dentro de la vasija!",
                    "容器里有x1 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCFlintCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Protein！",
                        "¡Hay x1 Proteina dentro de la vasija!",
                    "容器里有x1 攻击增强剂！"
                    ],
                    reward: {
                        item: item.consumable.protein,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    blacksmithFlintCity: {
        name: ['Blacksmith', 'Herrera', '铁匠'],
        state: savedStates.blacksmithFlintCity ?? 0,
        dialogues: [
            [
                {
                   text: [
                        "You've got the look of someone who's not afraid to get their hands dirty.",
                        "Tienes pinta de alguien que no le teme a ensuciarse las manos.",
                        "你看起来是不怕弄脏手的人。"
                    ]
                },
                {
                   text: [
                        "来，拿着这个Fire Stone。",
                        "Toma esta Piedra Fuego.",
                    "来，拿着这个火之石。"
                    ]
                },
                {
                    text: [
                        "It's leftover from a batch I forged last week.",
                        "Me sobró de una tanda que forjé la semana pasada.",
                    "这是上周锻造的一批剩下来的。"
                    ],
                    reward: {
                        item: item.consumable.fireStone,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                   text: [
                        "That Fire Stone should help your Pokémon burn brighter.",
                        "Esa Piedra Fuego debería ayudar a que tu Pokémon brille con más fuerza.",
                        "那块火之石应该能让你的宝可梦燃烧得更旺。"
                    ]
                },
            ]
        ]
    },
    occultistFlintCity: {
        name: ['Occultist', 'Ocultista', '神秘学家'],
        state: savedStates.occultistFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Tell me, child... Do you walk with the Sun, or do you dream beneath the Moon?",
                        "Dime, joven... ¿Despiertas con el Sol o sueñas bajo la Luna?",
                    "告诉我，孩子……你与太阳同行，还是在月下做梦？"
                    ],
                    choices: [
                        {
                            text: ["I like te Sun", "Soy muy madrugador", "我喜欢太阳"],     
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: ["I prefer the Moon", "Prefiero dormir", "我喜欢月亮"],
                            next: 2, 
                            state: 2  
                        },
                    ]
                },
            ],
            [
                {
                    text: [
                        "Then take Solrock.",
                        "Entonces toma a Solrock.",
                    "那就拿着太阳岩吧。"
                    ],
                     cb: () => {
                        playSound('obtain', 'ui');
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['solrock'], 5, null, null, [move['rockThrow']], null, null, null, true));
                        else main.box.storePokemon(new Pokemon(pokemon['solrock'], 5, null, null, [move['rockThrow']], null, null, null, true));
                        main.pokedex.seePokemon(pokemon['solrock'].n);
                        main.pokedex.catchPokemon(pokemon['solrock'].n);
                        main.pokedex.shinyPokemon(pokemon['solrock'].n)
                    },
                },
                {
                    text: [
                        "Let its light burn your path forward.",
                        "Que su luz ilumine tu camino.",
                    "让它的光芒照亮你前行的路。"
                    ],
                    state: 3
                },
            ],
            [
                {
                    text: [
                        "Then take Lunatone.",
                        "Entonces toma a Lunatone.",
                    "那就拿着月石吧。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['lunatone'], 5, null, null, [move['rockThrow']], null, null, null, true));
                        else main.box.storePokemon(new Pokemon(pokemon['lunatone'], 5, null, null, [move['confusion']], null, null, null, true));
                        main.pokedex.seePokemon(pokemon['lunatone'].n);
                        main.pokedex.catchPokemon(pokemon['lunatone'].n);
                        main.pokedex.shinyPokemon(pokemon['lunatone'].n)
                    },
                },
                {
                    text: [
                        "Lunatone shall guide your dreams into power.",
                        "Lunatone guiará tus sueños hacia el poder.",
                    "月石将引导你的梦境化为力量。"
                    ],
                    state: 3
                },
            ],
            [
                {
                    text: [
                        "Let the stars guide your path.",
                        "Deja que los astros guien tu camino.",
                    "让星辰指引你的道路。"
                    ],
                },
            ],
        ]
    },
    streetArtistFlintCity: {
        name: ['Street Artist', 'Artista callejero', '街头艺人'],
        state: savedStates.streetArtistFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Charcoal from my Torkoal gives the best texture.",
                        "El carbón de mi Torkoal tiene la mejor textura.",
                        "我的煤炭龟的木炭给出了最好的质感。"
                    ]
                },
                {
                    text: [
                        "Nothing beats natural fire.",
                        "Nada supera al fuego natural.",
                        "没有什么比得上自然之火。"
                    ]
                },
                {
                    text: [
                        "I've painted every fire-type I know... except one.",
                        "He pintado a todos los Pokémon de tipo fuego que conozco... excepto uno.",
                        "我画过我认识的每一只火属性宝可梦……除了一只。"
                    ]
                },
                {
                    text: [
                        "Entei...",
                        "Entei...",
                        "炎帝……"
                    ]
                },
                {
                    text: [
                        "If only I could visualize it...",
                        "Si tan solo pudiera visualizarlo...",
                        "要是我能亲眼看到它……"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('ENTEI'),
                    text: [
                        "Wait... is that... Entei?!",
                        "Espera... ¿ese es... Entei?",
                        "等等……那是……炎帝？！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('ENTEI'),
                    text: [
                        "Thanks to you I will be able to finish my work.",
                        "Gracias a tí podré terminar mi obra.",
                        "多亏了你，我能完成我的作品了。"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('ENTEI'),
                    text: [
                        "Take this TM, I crafted it for the day I'd meet him.",
                        "Toma esta MT, la hice para el día en que lo viera.",
                    "拿着这个招式机，这是为了遇见他的那一天而做的。"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('ENTEI'),
                    text: [
                        "Contains move Sacred Fire.",
                        "Contiene el movimiento Fuego sagrado.",
                    "里面是神圣之火。"
                    ],
                     reward: {
                        item: item.tm.tm160,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "Thanks to you, I'll finally be able to paint Entei.",
                        "Gracias a ti, por fin podré pintar a Entei.",
                    "多亏了你，我终于能画炎帝了。"
                    ] 
                }  
            ]
        ]
    },
    neighborFlintCity: {
        name: ['Neighbor', 'Vecino', '邻居'],
        state: savedStates.neighborFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "They say the rocks here stay warm all night, even in winter.",
                        "Dicen que las rocas aquí se mantienen calientes toda la noche, incluso en invierno.",
                    "他们说这里的石头整晚都保持温暖，即使在冬天。"
                    ]

                },
                {
                    text: [
                        "Makes for the best naps if you find the right spot!",
                        "¡Perfectas para una siesta si encuentras el lugar indicado!",
                        "如果找到好地方，这里最适合午睡！"
                    ]
                }
            ]
        ]
    },
    hikerFlintCity: {
        name: ['Hiker', 'Montañista', '登山男'],
        state: savedStates.hikerFlintCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "The climb up here can be rough, huh?",
                        "¿Dura la subida hasta aquí, verdad?",
                    "爬到这里挺艰难的吧？"
                    ] 
                },
                {
                    text: [
                        "来，拿着这个Revive。",
                        "Toma este Revivir.",
                    "来，拿着这个活力碎片。"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 1
                    },
                },
                {
                      text: [
                        "You never know when a partner might need a second wind.",
                        "Nunca sabes cuándo un compañero va a necesitar una segunda oportunidad.",
                    "你永远不知道伙伴什么时候需要第二次呼吸。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Stay prepared.",
                        "Mantente preparado.",
                    "保持准备。"
                    ],  
                },
                {
                    text: [
                        "The road ahead can test even the toughest Trainers.",
                        "El camino por delante puede poner a prueba hasta al Entrenador más fuerte.",
                        "前方的路能考验最强的训练家。"
                    ]
                }
            ]
        ]
    },
    route63HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route63HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM149 Pursuit on the ground!",
                        "¡He encontrado x1 MT149 Persecución en el suelo!",
                    "我在地上找到了x1 招式机149（追打）！"
                    ],
                    reward: {
                        item: item.tm.tm149,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselARoute63: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute63 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Rare Candy！",
                        "¡Hay x3 Carameloraro dentro la vasija!",
                    "容器里有x3 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute63: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute63 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Adamant Mint！",
                        "¡Hay x1 Menta firme dentro la vasija!",
                    "容器里有x1 固执薄荷！"
                    ],
                    reward: {
                        item: item.consumable.adamantMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute63: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute63 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Carbos！",
                        "¡Hay x2 Carburante dentro la vasija!",
                    "容器里有x2 速度增强剂！"
                    ],
                    reward: {
                        item: item.consumable.carbos,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    hermitRoute54: {
        name: ['Hermit', 'Ermitaño', '隐士'],
        state: savedStates.hermitRoute54 ?? 0,
        dialogues: [
            [       
                {
                    text: [
                        "I've spent many years away from the bustling cities, living close to nature.",
                        "Llevo muchos años lejos de las ciudades bulliciosas, me gusta mas vivir cerca de la naturaleza.",
                    "我在远离喧嚣城市的地方生活了很多年，与自然为邻。"
                    ]

                },
                {
                    text: [
                        "Out here, you learn to listen to the wind and understand the language of the trees.",
                        "Aquí aprendes a escuchar el viento y a entender el lenguaje de los árboles.",
                    "在这里，你学会倾听风声，理解树木的语言。"
                    ]

                },
                {
                    text: [
                        "Patience and calm are the greatest strengths a Trainer can have.",
                        "La paciencia y la calma son las mayores fortalezas que un Entrenador puede tener.",
                        "耐心和冷静是训练家最大的力量。"
                    ]
                }
                
            ],
        ]
    },
    route53HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route53HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Ghost Disc on the ground!",
                        "¡He encontrado x1 Disco Fantasma en el suelo!",
                    "我在地上找到了x1 幽灵光盘！"
                    ],
                    reward: {
                        item: item.consumable.ghostDisc,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselRoute53: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute53 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Shiny Flask！",
                        "¡Hay x1 Frasco Variocolor dentro la vasija!",
                    "容器里有x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    meteorite: {
        name: ['Meteorite', 'Meteorito', '陨石'],
        state: savedStates.meteorite ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "A meteorite.",
                        "Un meteorito.",
                    "一颗陨石。"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "It's moving.",
                        "Se está moviendo.",
                    "它在动。"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },

                {
                    text: [
                        "A Pokémon bursts furiously out of the meteorite!",
                        "¡Un Pokémon sale con furia de dentro el meteorito!",
                    "一只宝可梦愤怒地从陨石中冲了出来！"
                    ],
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Route 53', 'Ruta 53', '53号道路'],
                            pokemon: 'deoxys',
                            level: 100,
                            ivs: {
                                hp: 300, 
                                atk: 31, 
                                def: 150, 
                                spa: 31, 
                                spd: 150, 
                                spe: 1, 
                            },
                            shiny: false,
                            moves: [move['pursuit'], move['psychic']],
                            background: './assets/images/background/battle1.png',
                            cb: () => {
                                main.npcs['meteorite'].state = 1
                                main.dialogue.startDialogue(main.npcs['meteorite'], false);
                            }
                        });
                    },
                },   
            ],
            [
                {      
                    text: [
                        "You have obtained a Deoxys Egg!",
                        "¡Has obtenido un Huevo Deoxys!",
                    "你获得了代欧奇希斯的蛋！"
                    ],
                    reward: {
                        item: item.consumable.deoxysEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[76].status = true;
                        main.player.unlockAchievement(76);
                    }
                },
                {      
                    text: [
                        "You have obtained $500,000!",
                        "¡Has obtenido $500,000!",
                    "你获得了$500,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(500000);
                    },
                    state: 2
                },
            ],
            [
                {
                    text: [
                        "A meteorite.",
                        "Un meteorito.",
                    "一颗陨石。"
                    ],
                },
                {
                    text: [
    "...",
    "...",
    "..."
],
                },
                {
                    text: [
                        "It's not moving anymore.",
                        "Ya no se mueve.",
                    "它不再动了。"
                    ],
                },
            ]
        ]
    },
    vesselARoute52: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute52 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Max Revive！",
                        "¡Hay x1 Revivir Máximo dentro la vasija!",
                    "容器里有x1 活力块！"
                    ],
                    reward: {
                        item: item.consumable.maxRevive,
                        amount: 1
                    },

                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute52: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute52 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM159 Chilling Water！",
                        "¡Hay x1 MT159 Agua fría la vasija!",
                    "容器里有x1 招式机159 冷水！"
                    ],
                    reward: {
                        item: item.tm.tm159,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route52HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route52HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM155 Fire Spin on the ground!",
                        "¡He encontrado x1 MT155 Giro fuego en el suelo!",
                    "我在地上找到了x1 招式机155（火焰旋涡）！"
                    ],
                    reward: {
                        item: item.tm.tm155,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    signboardABrokenStoneCity: {
        name: ['Broken Stone City', 'Ciudad Piedraquebrada', '碎石市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Where stone and spirit never yield.",
                        "Donde la roca y el espíritu jamás ceden.",
                    "石头与精神永不屈服之地。"
                    ],
                },
            ]
        ]
    },
    karatekaBrokenStoneCity: {
        name: ['Karateka', 'Karateka', '空手道家'],
        state: savedStates.karatekaBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Strength isn't just about muscles.",
                        "La fuerza no está solo en los músculos.",
                        "力量不仅仅是肌肉。"
                    ]
                },
                 {
                    text: [
                        "It's about knowing when to strike.",
                        "Está en saber cuándo golpear.",
                        "而是知道何时出手。"
                    ]
                },
                {
                    text: [
                        "In this city, we break through stone... not to destroy, but to move forward.",
                        "En esta ciudad rompemos piedra... no por el hecho de destruir, sino para avanzar.",
                    "在这座城市，我们凿穿石头……不是为了破坏，而是为了前进。"
                    ]

                },
                {
                    text: [
                        "Take this TM161 Rock Smash.",
                        "Toma la MT161 Golpe Roca.",
                    "拿着这个招式机161 碎岩。"
                    ],
                     reward: {
                        item: item.tm.tm161,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Use it wisely, and no wall will stop you.",
                        "Úsala con sabiduría, y ningún muro podrá detenerte.",
                    "明智地使用它，没有墙壁能阻挡你。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Power tempered by control, that is the true path of the martial artist.",
                        "Poder con control, ese es el verdadero camino del artista marcial.",
                    "力量由克制调和，这才是武道家的真正之路。"
                    ]
                }
            ]
        ]
    },
    potterBrokenStoneCity: {
        name: ['Potter', 'Alfarero', '陶艺家'],
        state: savedStates.potterBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I make jugs and pots with my own hands... sturdy, beautiful, one-of-a-kind...",
                        "Hago jarras y vasijas con mis propias manos... resistentes, hermosas, únicas...",
                    "我亲手制作壶罐……坚固、美丽、独一无二……"
                    ]

                },
                {
                    text: [
                        "I like to hide little things inside, it's a surprise for visitors.",
                        "Me gusta esconder cositas dentro, es una sorpresa para los visitantes.",
                    "我喜欢在里面藏小东西，给访客一个惊喜。"
                    ]

                },
                {
                    text: [
                        "But every time I come back... the pots are shattered. And the items... gone.",
                        "Pero cada vez que vuelvo...  los objetos han desaparecidos.",
                        "但每次我回来……罐子都碎了。道具……也没了。"
                    ]
                },
                {
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    text: [
                        "You wouldn't happen to know anything about that, would you?",
                        "No sabrás tú nada de eso, ¿verdad?",
                    "你不会碰巧知道些什么吧？"
                    ]
                }
            ]
        ]
    },
    minerBrokenStoneCity: {
        name: ['Miner', 'Minero', '矿工'],
        state: savedStates.minerBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "My pickaxe... it broke.",
                        "Mi pico... se rompió.",
                        "我的镐……断了。"
                    ]
                },
                {
                    text: [
                        "Twelve years.",
                        "Doce años.",
                        "十二年。"
                    ]
                },
                {
                    text: [
                        "Twelve!",
                        "¡Doce!",
                        "十二年啊！"
                    ]
                },
                {
                    text: [
                        "That pickaxe dug through rock, dust, fossils...",
                        "Ese pico atravesó roca, polvo, fósiles...",
                    "那把镐挖穿了石头、尘土、化石……"
                    ]

                },
                {
                    text: [
                        "Even my lunch once.",
                        "Hasta mi almuerzo una vez.",
                        "有一次连午饭都没了。"
                    ]
                },
                {
                    text: [
                        "And now?",
                        "¿Y ahora?",
                        "现在呢？"
                    ]
                },
                {
                    text: [
                        "Nothing but splinters and memories...",
                        "Nada más que astillas y recuerdos...",
                        "只剩下碎片和回忆……"
                    ]
                },
                {
                    text: [
                        "I just... I need a moment.",
                        "Sólo... necesito un momento.",
                        "我只是……需要一点时间。"
                    ]
                }
            ]
        ]
    },
    trainerBrokenStoneCity: {
        name: ['Trainer', 'Entrenador', '训练师'],
        state: savedStates.trainerBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I wanted my Pokémon to forget a move, just one move!",
                        "¡Solo quería que mi Pokémon olvidara un ataque, uno solo!",
                    "我只想让我的宝可梦忘掉一个招式，就一个！"
                    ]
                },
                {
                    text: [
                        "And that Move Forgetter guy?",
                        "¿Y ese tutor quitamovimientos?",
                        "还有那个遗忘招式的大叔？"
                    ]
                },
                 {
                    text: [
                        "He wants a $100!",
                        "¡Quiere $100!",
                        "他要$100！"
                    ]
                },
                {
                    text: [
                        "You'd think he was extracting memories with tweezers made of gold!",
                        "¡Uno pensaría que está extrayendo recuerdos con pinzas de oro!",
                        "你还以为他用的是金镊子在提取记忆呢！"
                    ]
                },
                {
                    text: [
                        "I miss the good old days when forgetting things was free...",
                        "Extraño los viejos tiempos, cuando olvidar era gratis...",
                    "我怀念那些遗忘东西不花钱的美好旧时光……"
                    ]
                }
            ]
        ]
    },
    technicianBrokenStoneCity: {
        name: ['Technician', 'Técnico', '技师'],
        state: savedStates.technicianBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Ever heard of Elemental Discs?",
                        "¿Has oído hablar de los Discos Elementales?",
                        "听说过元素光盘吗？"
                    ]
                },
                {
                    text: [
                        "Look, this one's a Fire Disc.",
                        "Mira, este es un Disco Fuego.",
                    "看，这个是火焰碟。"
                    ]

                },
                {
                    text: [
                        "When used on a suitable Pokémon, it learns a random Fire-type move.",
                        "Al utilizarlo en un Pokémon apto, este aprende movimiento de tipo Fuego al azar.",
                    "用在合适的宝可梦身上，它会学会一个随机火系招式。"
                    ]
                },
                {
                   text: [
                        "Go on, take it!",
                        "¡Toma, es tuyo!",
                    "来吧，拿着！"
                    ],
                    reward: {
                        item: item.consumable.fireDisc,
                        amount: 1
                    },  
                },
                {
                    text: [
                        "Just don't blame me if it turns out to be Ember.",
                        "Pero no me culpes si termina siendo Ascuas.",
                    "但如果结果是火花的话别怪我。"
                    ],
                    state: 1
                },   
            ],
            [
                {
                    text: [
                        "How did it go with the Dire Disc?",
                        "¿Cómo te fue con el Disco Fuego?",
                        "元素光盘用得怎么样？"
                    ]
                },
                {
                    text: [
                        "Keep in mind that its power is limited, don't expect your Pokémon to learn Fire Blast.",
                        "Ten en cuenta que su poder es limitado, no esperes que tu pokemon aprenda Llamarada.",
                    "记住它的力量有限，别指望你的宝可梦学会大字爆炎。"
                    ]
                }
            ]
        ]
    },
     vesselABrokenStoneCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselABrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text:  [
                        "容器里有x2 Strong Medicine！",
                        "¡Hay x2 Medicina Fuerte dentro la vasija!",
                    "容器里有x2 强力药！"
                    ],
                    reward: {
                        item: item.consumable.medicineStrong,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBBrokenStoneCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM26 Leech Life！",
                        "¡Hay x1 TM26 Chupavidas dentro la vasija!",
                    "容器里有x1 招式机26 吸血！"
                    ],
                    reward: {
                        item: item.tm.tm26,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCBrokenStoneCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM62 Icy Wind！",
                        "¡Hay x1 TM62 Viento hielo dentro la vasija!",
                    "容器里有x1 招式机62 冰冻之风！"
                    ],
                    reward: {
                        item: item.tm.tm62,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselDBrokenStoneCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselDBrokenStoneCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Hasty Mint！",
                        "¡Hay x1 Menta activa dentro la vasija!",
                    "容器里有x1 急躁薄荷！"
                    ],
                    reward: {
                        item: item.consumable.hastyMint,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselARoute51: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute51 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM81 Payback！",
                        "¡Hay x1 MT81 Vendetta dentro la vasija!",
                    "容器里有x1 招式机81 以牙还牙！"
                    ],
                    reward: {
                        item: item.tm.tm81,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute51: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute51 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Revive！",
                        "¡Hay x1 Revivir dentro la vasija!",
                    "容器里有x1 活力碎片！"
                    ],
                    reward: {
                        item: item.consumable.revive,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute51: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute51 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Medicine！",
                        "¡Hay x2 Medicina dentro la vasija!",
                    "容器里有x2 伤药！"
                    ],
                    reward: {
                        item: item.consumable.medicine,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselDRoute51: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselDRoute51 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Protein！",
                        "¡Hay x1 Proteina dentro la vasija!",
                    "容器里有x1 攻击增强剂！"
                    ],
                    reward: {
                        item: item.consumable.protein,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselERoute51: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselERoute51 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Rare Candy！",
                        "¡Hay x1 Carameloraro dentro la vasija!",
                    "容器里有x1 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route51HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route51HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Transumtation Flask on the ground!",
                        "¡He encontrado x1 Frasco Alteración en el suelo!",
                    "我在地上找到了x1 转化烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.transmutationFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    weatherCenterRoute51: {
        name: ['Weather Researcher', 'Investigador Climático', '天气研究员'],
        state: savedStates.weatherCenterRoute51 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Welcome to the Weather Center!",
                        "¡Bienvenido al Centro Meteorológico!",
                        "欢迎来到天气中心！"
                    ]
                },
                {
                    text: [
                        "We study the effects of climate on Pokémon behavior.",
                        "Estudiamos los efectos del clima en el comportamiento Pokémon.",
                        "我们研究气候对宝可梦行为的影响。"
                    ]
                },
                {
                    text: [
                        "Our research has advanced thanks to the help of one very special Pokémon.",
                        "Nuestra investigación ha avanzado gracias a un Pokémon muy especial.",
                        "我们的研究因一只非常特别的宝可梦的帮助而进步。"
                    ]
                },
                {
                    text: [
                        "It's a Pokémon capable of changing both its type and appearance.",
                        "Es un Pokémon capaz de cambiar tanto su tipo como su apariencia.",
                        "它是一只能改变属性和外表的宝可梦。"
                    ]
                },
                {
                    text: [
                        "But we haven't been able to unlock its full potential in a lab environment.",
                        "Pero no hemos podido sacar todo su potencial en un entorno de laboratorio.",
                        "但我们还没能在实验室环境中释放它的全部潜力。"
                    ]
                },
                {
                    text: [
                        "Maybe you could help us by giving it the experience it needs out in the field.",
                        "Quizá tú podrías ayudarnos dándole la experiencia que necesita en el campo.",
                        "也许你可以通过在野外给它所需的经验来帮助我们。"
                    ]
                },
                {
                    text: [
                        "Here, please take this Castform.",
                        "Toma, acepta este Castform.",
                    "给，请收下这只飘浮泡泡。"
                    ],
                    cb: () => {
                        playSound('obtain', 'ui');
                        if (main.team.pokemon.length < 6) main.team.addPokemon(new Pokemon(pokemon['castform'], 5));
                        else main.box.storePokemon(new Pokemon(pokemon['castform'], 5));
                        main.pokedex.seePokemon(pokemon['castform'].n);
                        main.pokedex.catchPokemon(pokemon['castform'].n);
                    },
                },
                {
                    text: [
                        "It's in good hands now!",
                        "¡Ahora está en buenas manos!",
                    "它现在交到好手上了！"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "How's Castform doing?",
                        "¿Cómo va Castform?",
                        "飘浮泡泡怎么样了？"
                    ]
                },
                {
                    text: [
                        "I hope it's adapting well to your team.",
                        "Espero que se esté adaptando bien a tu equipo.",
                        "希望它在你的队伍里适应得好。"
                    ]
                },
            ]
        ]
    },
    signboardRoute51: {
        name: ['Weather Center', 'Centro Meteorológico', '天气中心'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Studying the skies to understand the world.",
                        "Estudiando el cielo para entender el mundo.",
                        "研究天空以理解世界。"
                    ]
                },
            ]
        ]
    },
    signboardOpalTown: {
        name: ['Opal Town', 'Pueblo Ópalo', '蛋白镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Where silence glows like a hidden gem.",
                        "Donde el silencio brilla como una gema oculta.",
                        "沉默如隐藏的宝石般闪耀的地方。"
                    ]
                },
            ]
        ]
    },
    opalTownHiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.opalTownHiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Union ticket on the ground!",
                        "¡He encontrado x1 Ticket Unión en el suelo!",
                    "我在地上找到了x1 联合券！"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselAOpalTown: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAOpalTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Medicine！",
                        "¡Hay x3 Medicina dentro la vasija!",
                    "容器里有x3 伤药！"
                    ],
                    reward: {
                        item: item.consumable.medicine,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBOpalTown: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBOpalTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Bug Disc！",
                        "¡Hay x1 Disco Bicho dentro la vasija!",
                    "容器里有x1 虫之光盘！"
                    ],
                    reward: {
                        item: item.consumable.bugDisc,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    gardenerOpalTown: {
        name: ['Gardener', 'Jardinera', '园丁'],
        state: savedStates.flowerLadyOpalTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Every flower has a secret...",
                        "Cada flor guarda un secreto...",
                        "每朵花都有一个秘密……"
                    ]
                },
                {
                    text: [
                        "I've been trying to grow a Roselia blossom, but it never works.",
                        "He intentado hacer florecer un brote de Roselia, pero nunca crece.",
                    "我一直在试着种出毒蔷薇的花，但总是不成功。"
                    ]

                },
                {
                    condition: () => main.team.isPokemonInTeam('ROSELIA'),
                    text: [
                        "Wait... is that a Roselia with you?",
                        "Espera... ¿llevas un Roselia contigo?",
                        "等等……你带着毒蔷薇吗？"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('ROSELIA'),
                    text: [
                        "Its presence makes my whole garden shimmer!",
                        "¡Su presencia hace brillar todo mi jardín!",
                        "它的存在让我的整个花园都在发光！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('ROSELIA'),
                    text: [
                        "Please, take this TM Magical Leaf.",
                        "Por favor, acepta esta MT Hoja Mágica.",
                    "请收下这个魔法叶招式学习器。"
                    ],
                    reward: {
                        item: item.tm.tm136,
                        amount: 1
                    },
                },
                {
                    condition: () => main.team.isPokemonInTeam('ROSELIA'),
                    text: [
                        "A gift from my flowers to yours.",
                        "Un regalo de mis flores para las tuyas.",
                    "我的花送给你的花的礼物。"
                    ],
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Every flower has a secret...",
                        "Cada flor guarda un secreto...",
                        "每朵花都有一个秘密……"
                    ]
                },
                {
                    text: [
                        "I've been trying to grow a Sunflora blossom, but it never works.",
                        "He intentado hacer florecer un brote de Sunflora, pero nunca crece.",
                    "我一直在试着种出向日花怪的花，但总是不成功。"
                    ]

                },
                {
                    condition: () => main.team.isPokemonInTeam('SUNFLORA'),
                    text: [
                        "Wait... is that a Sunflora with you?",
                        "Espera... ¿llevas un Sunflora contigo?",
                        "等等……你带着向日花怪吗？"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('SUNFLORA'),
                    text: [
                        "Its presence makes my whole garden shimmer!",
                        "¡Su presencia hace brillar todo mi jardín!",
                        "它的存在让我的整个花园都在发光！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('SUNFLORA'),
                    text: [
                        "Please, take this TM Razor Leaf.",
                        "Por favor, acepta esta MT Hoja Afilada.",
                    "请收下这个飞叶快刀招式学习器。"
                    ],
                    reward: {
                        item: item.tm.tm25,
                        amount: 1
                    },
                },
                {
                    condition: () => main.team.isPokemonInTeam('SUNFLORA'),
                    text: [
                        "A gift from my flowers to yours.",
                        "Un regalo de mis flores para las tuyas.",
                    "我的花送给你的花的礼物。"
                    ],
                    state: 2
                }
            ],
            [
                {
                    text: [
                        "Every flower has a secret...",
                        "Cada flor guarda un secreto...",
                        "每朵花都有一个秘密……"
                    ]
                },
                {
                    text: [
                        "I've been trying to grow a Bellossom blossom, but it never works.",
                        "He intentado hacer florecer un brote de Bellossom, pero nunca crece.",
                    "我一直在试着种出美丽花的花，但总是不成功。"
                    ]

                },
                {
                    condition: () => main.team.isPokemonInTeam('BELLOSSOM'),
                    text: [
                        "Wait... is that a Bellossom with you?",
                        "Espera... ¿llevas un Bellossom contigo?",
                        "等等……你带着美丽花吗？"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('BELLOSSOM'),
                    text: [
                        "Its presence makes my whole garden shimmer!",
                        "¡Su presencia hace brillar todo mi jardín!",
                        "它的存在让我的整个花园都在发光！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('BELLOSSOM'),
                    text: [
                        "Please, take this TM Leaf Blade.",
                        "Por favor, acepta esta MT Hoja Aguda.",
                    "请收下这个叶刃招式学习器。"
                    ],
                    reward: {
                        item: item.tm.tm157,
                        amount: 1
                    },
                },
                {
                    condition: () => main.team.isPokemonInTeam('BELLOSSOM'),
                    text: [
                        "A gift from my flowers to yours.",
                        "Un regalo de mis flores para las tuyas.",
                    "我的花送给你的花的礼物。"
                    ],
                    state: 2
                }
            ],
            [
                {
                    text: [
                        "Every flower has a secret...",
                        "Cada flor guarda un secreto...",
                        "每朵花都有一个秘密……"
                    ]
                },
                {
                    text: [
                        "And you know them all!",
                        "¡Y tu los conoces todos!",
                        "而你都认识它们！"
                    ]
                },
            ]
        ]
    },
    signboardVitreousCity: {
        name: ['Vitreous City', 'Ciudad Vítrea', '玻璃市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Where the world reflects in every surface.",
                        "Donde el mundo se refleja en cada superficie.",
                        "世界在每个表面映照的地方。"
                    ]
                },
            ]
        ]
    },
    residentVitreousCity: {
        name: ['Resident', 'Residente', '居民'],
        state: savedStates.residentVitreousCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I'm melting out here!",
                        "¡Me estoy derritiendo!",
                        "我要热化了！"
                    ]
                },
                {
                    text: [
                        "This place is like a greenhouse with sidewalks.",
                        "Este lugar es como un invernadero con aceras.",
                        "这地方就像带人行道的温室。"
                    ]
                },
                {
                    text: [
                        "I should've brought a Water-type just to stay cool...",
                        "Debí traer un Pokémon de tipo Agua solo para mantenerme fresco...",
                        "我该带只水属性宝可梦来凉快一下的……"
                    ]
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
                        "Whoa, you've got a Water-type with you?",
                        "¡Vaya, llevas un Pokémon de tipo Agua!",
                    "哇哦，你身上有只水系宝可梦？"
                    ]
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
                        "Can it splash me a bit?",
                        "¿Podría salpicarme un poco?",
                        "它能泼我一下吗？"
                    ]
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
    "...",
    "...",
    "..."
]
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
                        "Thanks!",
                        "¡Gracias!",
                    "谢谢！"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
                        "I feel better already.",
                        "Ya me siento mejor.",
                    "我已经感觉好多了。"
                    ],
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
                        "来，拿着这个Water Disc。",
                        "Toma este Disco Agua.",
                    "给，拿着这个水碟。"
                    ],
                    reward: {
                        item: item.consumable.waterDisc,
                        amount: 1
                    }, 
                },
                {
                    condition: () => main.team.isTypeInTeam('water'),
                    text: [
                        "Stay hydrated out there!",
                        "¡Mantente hidratado!",
                    "在外面要保持水分！"
                    ],
                    state: 1
                },
            ],
            [
               {
                    text: [
                        "I wish I had a Water-type buddy like yours.",
                        "Ojalá tuviera de nuevo un compañero de tipo Agua como el tuyo.",
                        "真希望我也有像你那样的水属性伙伴。"
                    ]
                }
            ]
        ]
    },
    inventorVitreousCity: {
        name: ['Inventor', 'Inventor', '发明家'],
        state: savedStates.inventorVitreousCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Oh, welcome!",
                        "¡Ah, bienvenido!",
                    "哦，欢迎！"
                    ]

                },
                {
                    text: [
                        "I'm a specialist in optical technology and light-based instruments here in Vitreous City.",
                        "Soy un humilde especialista en tecnología óptica e instrumentos basados en la luz.",
                        "我是玻璃市光学技术和光基仪器的专家。"
                    ]
                },
                {
                    text: [
                        "My latest invention?",
                        "¿Mi última invención?",
                        "我最新的发明？"
                    ]
                },
                {
                    text: [
                        "The Wide Lens!",
                        "¡La Superlupa!",
                        "广角镜！"
                    ]
                },
                {
                    text: [
                        "It allows you to observe things from very far away.",
                        "Permite observar cosas desde muy lejos.",
                        "它让你能观察很远的东西。"
                    ]
                },
                {
                    text: [
                        "Sadly, its  optimal use requires a vantage point... somewhere very, very high.",
                        "Lamentablemente, su uso óptimo requiere un punto de observación... en algún lugar muy, muy alto.",
                    "可惜，它的最佳使用需要一个制高点……在非常非常高的地方。"
                    ]

                },
                {
                    text: [
                       "Hey, would you like to give it a try?",
                        "Oye, ¿y si te la llevas y le intentas sacar provecho?",
                    "嘿，你想试试吗？"
                    ]

                },
                {
                    text: [
                        "Here, take the Wide Lens.",
                        "Toma la Superlupa.",
                    "给，拿着广角镜。"
                    ],
                    reward: {
                        item: item.key.wideLens,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Find a place where it can be truly useful.",
                        "Busca un lugar en el que pueda usarse de verdad.",
                    "找一个它真正能派上用场的地方。"
                    ],
                },
                {
                    text: [
                        "Maybe you'll spot something that can't be seen with the naked eye.",
                        "Tal vez veas algo que no se ve a simple vista.",
                    "也许你能发现肉眼看不到的东西。"
                    ],
                    state: 1
                }
            ],
            [
                {
                   text: [
                        "Hmm... I wonder where I could really put the Wide Lens to use...",
                        "Mmm... ¿dónde podría sacarle todo el provecho a mi Superlupa...?",
                        "嗯……我在想广角镜到底能在哪派上用场……"
                    ]
                }
            ]
        ]
    },
    route65HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route65HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM70 Feint Attack on the ground!",
                        "¡He encontrado x1 MT70 Finta en el suelo!",
                    "我在地上找到了x1 招式机70（暗算）！"
                    ],
                    reward: {
                        item: item.tm.tm70,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselANarrowPassage: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselANarrowPassage ?? 0,
        dialogues: [
            [
                 {
                    text: [
                        "容器里有x1 根部化石！",
                        "¡Hay x1 Fósil Raíz dentro la vasija!",
                    "容器里有x1 根部化石！"
                    ],
                    reward: {
                        item: item.key.fossilRoot,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBNarrowPassage: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBNarrowPassage ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM128 Ancient Power！",
                        "¡Hay x1 TM128 Poder pasado dentro la vasija!",
                    "容器里有x1 招式机128 原始之力！"
                    ],
                    reward: {
                        item: item.tm.tm128,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCNarrowPassage: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCNarrowPassage ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 爪子化石！",
                        "¡Hay x1 Fósil Garra dentro la vasija!",
                    "容器里有x1 爪子化石！"
                    ],
                    reward: {
                        item: item.key.fossilClaw,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselRoute66: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselRoute66 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x6 Super Exp. Candy！",
                        "¡Hay x6 Super Caramelo Exp. dentro la vasija!",
                    "容器里有x6 超级经验糖果！"
                    ],
                    reward: {
                        item: item.consumable.superExpCandy,
                        amount: 6
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                   text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardTarpatchTown: {
        name: ['Tarpatch Town', 'Pueblo Alquitrán', '柏油镇'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "The ground is dark… and the secrets even darker!",
                        "El suelo es oscuro… ¡y los secretos lo son aún más!",
                        "地面很暗……秘密更暗！"
                    ]
                },
            ]
        ]
    },
    vesselTarpatchTown:  {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselTarpatchTown ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "jar里有x2 Union Ticket！",
                        "¡Hay x2 Ticket Unión dentro la vasija!",
                    "罐子里有x2 联合券！"
                    ],
                    reward: {
                        item: item.key.unionTicket,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route68HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route68HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Shiny Flask on the ground!",
                        "¡He encontrado x1 Frasco Variocolor en el suelo!",
                    "我在地上找到了x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    caretakerRoute66: {
        name: ['Caretaker', 'Vigilante', '看守人'],
        state: savedStates.caretakerRoute66 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "You're not the first to come looking for them...",
                        "No eres el primero en venir a buscarlos...",
                        "你不是第一个来找它们的……"
                    ]
                },
                {
                    text: [
                        "But be warned... disturbing their rest has a price.",
                        "Pero ten cuidado... perturbar su descanso tiene un precio.",
                        "但请注意……打扰它们的休息是有代价的。"
                    ]
                }
            ]
        ]
    },
    signSteelTomb: {
        name: ['Steel Tomb', 'Tumba Sellada', '钢铁墓穴'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
    '<span style="font-family: Braile; font-size: 32px; line-height: 40px">???</span>',
    '<span style="font-family: Braile; font-size: 32px; line-height: 40px">???</span>',
    '<span style="font-family: Braile; font-size: 32px; line-height: 40px">???</span>'
]  
                },
            ]
        ]
    },
    signIceTomb: {
        name: ['Ice Tomb', 'Tumba Helada', '冰之墓穴'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        '<span style="font-family: Braile; font-size: 32px; line-height: 40px">relicanth the first <br> wailord the sixth</span>',
,
                        '<span style="font-family: Braile; font-size: 32px; line-height: 40px">古空棘鱼排第一<br>吼鲸王排第六</span>',
                        "<span style=\"font-family: Braile; font-size: 32px; line-height: 40px\">古空棘鱼排第一<br>吼鲸王排第六</span>"
                    ]  
                },
            ]
        ]
    },
    signAncientTomb: {
        name: ['Ancient Tomb', 'Tumba Antigua', '古代墓穴'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
    '<span style="font-family: Braile; font-size: 32px; line-height: 40px">???</span>',
    '<span style="font-family: Braile; font-size: 32px; line-height: 40px">???</span>',
    '<span style="font-family: Braile; font-size: 32px; line-height: 40px">???</span>'
]  
                },
            ]
        ]
    },
    veteranRoute67: {
        name: ['Veteran', 'Veterano', '资深训练师'],
        state: savedStates.veteranRoute67 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "That sign that says to be patient...",
                        "Ese cartel que dice que tenga paciencia...",
                        "那个说要有耐心的牌子……"
                    ]
                },
                {
                    text: [
                        "What does it mean?",
                        "¿Qué querrá decir?",
                        "什么意思？"
                    ]
                },
                {
                    text: [
                        "I can't spend all day waiting!",
                        "¡No puedo pasarme todo el dia esperando!",
                        "我不能整天等着！"
                    ]
                },
            ],
        ]
    },
    signboardRoute67: {
        name: ['Old Sign', 'Cartel Antiguo', '旧路牌'],
        state: savedStates.signboardRoute67 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Those who wait are heard by the stars.",
                        "A quienes esperan son escuchados por las estrellas.",
                    "等待之人会被星辰倾听。"
                    ],
                    cb: () => { jirachiCount(main) }
                },
                {
                    cb: () => { 
                        main.dialogue.endDialogue();
                        jirachiStop();
                    }
                },
            ],
            [
                {      
                    text: [
                        "A Pokémon suddenly attacks!",
                        "¡Un Pokémon ataca de repente!",
                    "一只宝可梦突然袭来！"
                    ],
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Route 67', 'Ruta 67', '67号道路'],
                            pokemon: 'jirachi',
                            level: 100,
                            ivs: {
                                hp: 400, 
                                atk: 31, 
                                def: 100, 
                                spa: 31, 
                                spd: 100, 
                                spe: 31, 
                            },
                            shiny: false,
                            moves: [move['flashCannon'], move['psychic']],
                            background: './assets/images/background/battle7.png',
                            cb: () => {
                                main.npcs['signboardRoute67'].state = 2
                                main.dialogue.startDialogue(main.npcs['signboardRoute67'], false);
                            }
                        });
                    },
                }, 
            ],
            [
                {      
                    text: [
                        "You have obtained a Jirachi Egg!",
                        "¡Has obtenido un Huevo Jirachi!",
                    "你获得了基拉祈的蛋！"
                    ],
                    reward: {
                        item: item.consumable.jirachiEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[75].status = true;
                        main.player.unlockAchievement(75);
                    }
                },
                {      
                    text: [
                        "You have obtained $500,000!",
                        "¡Has obtenido $500,000!",
                    "你获得了$500,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(500000);
                    },
                    state: 3
                },
            ],
            [
                {
                    text: [
                        "Those who wait are heard by the stars.",
                        "A quienes esperan son escuchados por las estrellas.",
                    "等待之人会被星辰倾听。"
                    ],
                },
            ],
        ]
    },
    salamence: {
        name: ["SALAMENCE", "SALAMENCE", "暴飞龙"],
        state: savedStates.salamence ?? 0,
        dialogues: [
            [
                {
                    text: ['SHHLAAAAGGGGGGGGHHH!', '¡SHHLAAAAGGGGGGGH!', '唰啦啦啦！'],
                    cb: () => { crySound(373) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Dragon Lair', 'Guarida Dragón', '龙巢'],
                            pokemon: 'salamence',
                            level: 100,
                            ivs: {
                                hp: 121, 
                                atk: 61, 
                                def: 61, 
                                spa: 61, 
                                spd: 61, 
                                spe: 61, 
                            },
                            shiny: true,
                            moves: [move['outrage'], move['fireBlast']],
                            background: './assets/images/background/battle8.png',
                            cb: () => {
                                main.npcs['salamence'].state = 1;
                                main.dialogue.startDialogue(main.npcs['salamence'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You've obtained a Salamenence Egg!",
                        "¡Has obtenido un Huevo Salamenence!",
                    "你获得了暴飞龙的蛋！"
                    ],
                    reward: {
                        item: item.consumable.salamenceEgg,
                        amount: 1
                    },
                },
                {      
                    text: [
                        "You've obtained $300,000!",
                        "¡Has obtenido $300,000!",
                    "你获得了$300,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(300000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['dragonLair-5'] = main.routeData['dragonLair-5bis'];
                        main.location.loadLocation(main.routeData['dragonLair-5'], true);
                    }
                }
            ],
        ]
    },
    regirock: {
        name: ["REGIROCK", "REGIROCK", "雷吉洛克"],
        state: savedStates.regirock ?? 0,
        dialogues: [
            [
                {
                    text: ['KRRRRGRROCK!', '¡KRRRRGRROCK!', '嘎嘎嘎嘎！'],
                    cb: () => { crySound(377) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Ancient Tomb', 'Tumba Antigua', '古代墓穴'],
                            pokemon: 'regirock',
                            level: 100,
                            ivs: {
                                hp: 500, 
                                atk: 61, 
                                def: 200, 
                                spa: 61, 
                                spd: 200, 
                                spe: 61, 
                            },
                            shiny: false,
                            moves: [move['rockSlide'], move['earthquake']],
                            background: './assets/images/background/battle8.png',
                            cb: () => {
                                main.npcs['regirock'].state = 1;
                                main.dialogue.startDialogue(main.npcs['regirock'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You've obtained a Regirock Egg!",
                        "¡Has obtenido un Huevo Regirock!",
                    "你获得了雷吉洛克的蛋！"
                    ],
                    reward: {
                        item: item.consumable.regirockEgg,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[67].status = true;
                        main.player.unlockAchievement(67);
                    }
                },
                {      
                    text: [
                        "You've obtained $377,000!",
                        "¡Has obtenido $377,000!",
                    "你获得了$377,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(377000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['ancientTomb-1'] = main.routeData['ancientTomb-1bisB'];
                        main.location.loadLocation(main.routeData['ancientTomb-1'], true);
                    }
                }
            ],
        ]
    },
    regice: {
        name: ["REGICE", "REGICE", "雷吉艾斯"],
        state: savedStates.regice ?? 0,
        dialogues: [
            [
                {
                    text: ['ZHHHRRREEEEE!', '¡ZHHHRRREEEEE!', '滋滋滋！'],
                    cb: () => { crySound(378) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Ice Tomb', 'Tumba Helada', '冰之墓穴'],
                            pokemon: 'regice',
                            level: 100,
                            ivs: {
                                hp: 500, 
                                atk: 61, 
                                def: 200, 
                                spa: 61, 
                                spd: 200, 
                                spe: 61, 
                            },
                            shiny: false,
                            moves: [move['shadowBall'], move['iceBeam']],
                            background: './assets/images/background/battle4.png',
                            cb: () => {
                                main.npcs['regice'].state = 1;
                                main.dialogue.startDialogue(main.npcs['regice'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You've obtained a Regice Egg!",
                        "¡Has obtenido un Huevo Regice!",
                    "你获得了雷吉艾斯的蛋！"
                    ],
                    reward: {
                        item: item.consumable.regiceEgg,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[68].status = true;
                        main.player.unlockAchievement(68);
                    }
                },
                {      
                    text: [
                        "You've obtained $378,000!",
                        "¡Has obtenido $378,000!",
                    "你获得了$378,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(378000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['iceTomb-1'] = main.routeData['iceTomb-1bisB'];
                        main.location.loadLocation(main.routeData['iceTomb-1'], true);
                    }
                }
            ],
        ]
    },
    registeel: {
        name: ["REGISTEEL", "REGISTEEL", "雷吉斯奇鲁"],
        state: savedStates.registeel ?? 0,
        dialogues: [
            [
                {
                    text: ['CLAAANGHHSSHHH!', '¡CLAAANGHHSSHHH!', '哐哐哐！！！'],
                    cb: () => { crySound(379) }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Steel Tomb', 'Tumba Sellada', '钢铁墓穴'],
                            pokemon: 'registeel',
                            level: 100,
                            ivs: {
                                hp: 500, 
                                atk: 61, 
                                def: 200, 
                                spa: 61, 
                                spd: 200, 
                                spe: 61, 
                            },
                            shiny: false,
                            moves: [move['flashCannon'], move['auraSphere']],
                            background: './assets/images/background/battle29.png',
                            cb: () => {
                                main.npcs['registeel'].state = 1;
                                main.dialogue.startDialogue(main.npcs['registeel'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You've obtained a Registeel Egg!",
                        "¡Has obtenido un Huevo Registeel!",
                    "你获得了雷吉斯奇鲁的蛋！"
                    ],
                    reward: {
                        item: item.consumable.registeelEgg,
                        amount: 1
                    },
                     cb: () => {
                        main.player.achievement[69].status = true;
                        main.player.unlockAchievement(69);
                    }
                },
                {      
                    text: [
                        "You've obtained $379,000!",
                        "¡Has obtenido $379,000!",
                    "你获得了$379,000！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(379000);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['steelTomb-1'] = main.routeData['steelTomb-1bisB'];
                        main.location.loadLocation(main.routeData['steelTomb-1'], true);
                    }
                }
            ],
        ]
    },
    route60HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route60HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x3 Super Exp. Candy on the ground!",
                        "¡He encontrado x3 Super Caramelo Exp. en el suelo!",
                    "我在地上找到了x3 超级经验糖果！"
                    ],
                    reward: {
                        item: item.consumable.superExpCandy,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    marbleCityHiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.marbleCityHiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Dark Disc on the ground!",
                        "¡He encontrado x1 Disco Siniestro en el suelo!",
                    "我在地上找到了x1 恶之光盘！"
                    ],
                    reward: {
                        item: item.consumable.darkDisc,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselMarbleCity: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Shiny Flask！",
                        "¡Hay x1 Frasco Variocolor dentro la vasija!",
                    "容器里有x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signboardMarbleCity: {
        name: ['Marble City', 'Ciudad Marmol', '大理石市'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
                        "Elegant, silent, and serene.",
                        "Elegante, silenciosa y serena.",
                    "优雅、静谧、安宁。"
                    ]

                },
            ]
        ]
    },
    architectMarbleCity: {
        name: ['Architect', 'Arquitecta', '建筑师'],
        state: savedStates.architectMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I've worked on buildings all across the region, but none like those here in Marble City.",
                        "He trabajado en edificios por toda la región, pero ninguno como los de Ciudad Mármol.",
                    "我在整个地区都参与过建筑工程，但没有一个像这里大理石市的建筑。"
                    ]
                },
                {
                    text: [
                        "Everything is built with precision and care.",
                        "Todo está construido con precisión y cuidado.",
                        "一切都以精确和用心建造。"
                    ]
                },
                {
                    text: [
                        "There's a quiet aura in this place.",
                        "Hay una aura silenciosa en este lugar.",
                        "这个地方有一种安静的气息。"
                    ]
                }
            ]
        ]
    },
    fishermanMarbleCity: {
        name: ['Fisherman', 'Pescador', '渔夫'],
        state: savedStates.fishermanMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Caught anything good today? Not really...",
                        "¿Buena pesca hoy? La verdad, no mucho...",
                    "今天钓到什么好东西了吗？没有……"
                    ]

                },
                {
                    text: [
                        "But I did fish out something strange from the water.",
                        "Pero saqué algo raro del agua.",
                        "但我确实从水里钓到了奇怪的东西。"
                    ]
                },
                {
                    text: [
                        "Looks like a scale... but not like any I've seen before.",
                        "Parece una escama... pero no como ninguna que haya visto.",
                        "看起来像鳞片……但不像我以前见过的任何一种。"
                    ]
                },
                {
                    text: [
                        "Bright red, almost glowing.",
                        "Roja brillante, casi resplandeciente.",
                    "鲜红色，几乎在发光。"
                    ]

                },
                {
                    text: [
                        "No clue what kind of Pokémon it belongs to.",
                        "Ni idea de qué Pokémon podría haberla soltado.",
                        "不知道是哪只宝可梦的。"
                    ]
                },
                {
                    text: [
                        "Maybe it's from a Red Gyarados?",
                        "¿Será de un Gyarados Rojo?",
                        "会不会是红色暴鲤龙的？"
                    ]
                },
                {
                    text: [
                        "Haha... just kidding.",
                        "Ja, ja, ja... es broma.",
                    "哈哈……开玩笑的。"
                    ]

                },
                {
                    text: [
                        "Here, maybe it means something to you.",
                        "Toma, quizá para ti tenga algún sentido.",
                    "给，也许对你来说有什么意义。"
                    ],
                    reward: {
                        item: item.key.zoraScale,
                        amount: 1
                    },
                    state: 1
                }
            ],
            [
                {
                    text: [
                        "Still don't know where that scale came from...",
                        "Sigo sin saber de dónde salió esa escama...",
                        "还是不知道那片鳞片是从哪来的……"
                    ]
                }
            ]
        ]
    },
    retiredFarmerMarbleCity: {
        name: ['Retired Farmer', 'Granjero Retirado', '退休农夫'],
        state: savedStates.retiredFarmerMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Back in my day, I ran a dairy farm with over twenty Miltank.",
                        "En mis tiempos, tenía una granja con más de veinte Miltank.",
                    "想当年，我经营一个有二十多头大奶罐的奶牛场。"
                    ]

                },
                {
                    text: [
                        "Nothing like a bottle of fresh Moomoo Milk!",
                        "¡No hay nada como una buena botella de Leche Mu-mu recién ordeñada!",
                        "没有什么比得上一瓶新鲜的哞哞鲜奶！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('MILTANK'),
                    text: [
                        "Well now! You've got a Miltank with you!",
                        "¡Vaya! ¡Tienes una Miltank contigo!",
                        "哦！你带着大奶罐！"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('MILTANK'),
                    text: [
                        "Mind if I show you how we used to do it on the farm?",
                        "¿Te importa si la ordeño al estilo tradicional?",
                        "介意我展示一下我们在农场是怎么做的吗？"
                    ]
                },
                {
                    condition: () => main.team.isPokemonInTeam('MILTANK'),
                    text: [
                        "There you go, one fresh bottle of Moomoo Milk!",
                        "¡Aquí tienes, una botella fresquita de Leche Mu-mu!",
                    "给你，一瓶新鲜的哞哞牛奶！"
                    ],
                    reward: {
                        item: item.key.milk,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Still got it in me! That old farm touch.",
                        "¡Todavía me queda maña! Mano de granjero viejo.",
                        "手艺还在！老农场的手感。"
                    ]
                }
            ]
        ]
    },
    tileCounterMarbleCity: {
        name: ['Maniac', 'Obsesionado', '狂热者'],
        state: savedStates.tileCounterMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "One... two... twenty-seven...",
                        "Uno... dos... veintisiete...",
                        "一……二……二十七……"
                    ]
                },
                {
                    text: [
                        "Wait no! Start over!",
                        "¡No! ¡Otra vez desde el principio!",
                        "等等不对！重来！"
                    ]
                },
                {
                    text: [
                        "I've been counting every marble tile in this city.",
                        "Estoy contando cada baldosa de mármol de esta ciudad.",
                        "我在数这座城市的每一块大理石砖。"
                    ]
                },
                {
                    text: [
                        "But I keep losing track whenever someone talks to me or distracts me!",
                        "¡Pero siempre pierdo la cuenta cuando alguien me habla o me distrae!",
                    "但每次有人跟我说话或让我分心，我就数不清了！"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Shh! I'm on tile number 386...",
                        "¡Shh! Estoy en la baldosa número 386...",
                        "嘘！我数到第386块了……"
                    ]
                },
                {
                    text: [
                        "Or was it 387?",
                        "¿O era la 387?",
                        "还是387？"
                    ]
                }
            ]
        ]
    },
    trainerMarbleCity: {
        name: ['Trainer', 'Entrenador', '训练师'],
        state: savedStates.trainerMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "You look like someone who appreciates a good battle move.",
                        "Pareces alguien que sabe apreciar un buen movimiento de combate.",
                        "你看起来像是懂得欣赏好战斗招式的人。"
                    ]
                },
                {
                    text: [
                        "来，拿着这个Fighting Disc。",
                        "Toma este Disco Lucha.",
                    "给，拿着这个格斗碟。"
                    ],
                     reward: {
                        item: item.consumable.fightingDisc,
                        amount: 1
                    },
                },
                 {
                    text: [
                        "Teaches your Pokémon a random Fighting-type move.",
                        "Enseña a tu Pokémon un movimiento aleatorio de tipo Lucha.",
                    "教你的宝可梦一个随机格斗系招式。"
                    ],
                },
                {
                    text: [
                        "If you're looking for Discs of other types...",
                        "Si buscas Discos de otros tipos...",
                        "如果你在找其他属性的光盘……"
                    ]
                },
                {
                    text: [
                        "Head to Tarpatch Town.",
                        "Ve a Pueblo Alquitrán.",
                        "去沥青镇。"
                    ]
                },
                {
                    text: [
                        "Strange place... nobody lives there anymore.",
                        "Es un sitio extraño... ya no vive nadie allí.",
                        "奇怪的地方……已经没人住了。"
                    ]
                },
                {
                    text: [
                        "But the shop still works.",
                        "Pero la tienda sigue funcionando.",
                    "但店铺还在营业。"
                    ],
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "Tarpatch Town, a ghost town, but handy if you're after Discs.",
                        "Pueblo Alquitrán, un pueblo fantasma, pero útil si buscas Discos.",
                    "Tarpatch镇，一座鬼城，但如果你想要光碟的话很方便。"
                    ]
                }
            ]
        ]
    },
    chefMarbleCity: {
        name: ['Chef', 'Chef', '厨师'],
        state: savedStates.chefMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "My Farfetch'd cooks better than I do.",
                        "Mi Farfetch'd cocina mejor que yo.",
                    "我的大葱鸭做饭比我还好。"
                    ]

                },
                {
                    text: [
                         "Should I let it run the restaurant... or turn it into the main course?",
                        "¿Lo dejo a cargo del restaurante... o lo convierto en el plato principal?",
                    "我该让它经营餐厅……还是把它变成主菜？"
                    ],
                    choices: [
                        {
                            text: ["Let him cook.", "Déjalo que cocine.", "让他做饭吧。"],     
                            next: 1, 
                            state: 1  
                        },
                        {
                            text: ["Duck soup, baby!", "¡Sopa de pato!", "鸭子汤，宝贝！"],
                            next: 2, 
                            state: 2  
                        }
                    ]
                },
            ],
            [
                {
                    text: [
                        "You're right. Gotta accept when someone's better than you at something.",
                        "Tienes razón, hay que aceptar cuando alguien es mejor que tí en algo.",
                    "你说得对。当有人在某方面比你强，就得接受。"
                    ]

                },
                {
                    text: [
                        "Here, take his leek.",
                        "Toma, quédate con su puerro.",
                    "给，拿着它的大葱。"
                    ],
                    reward: {
                        item: item.key.leek,
                        amount: 1
                    },
                },
                {
                    text: [
                        "Now he's only going to use knives and ladles.",
                        "Ahora solo va a utilizar cuchillos y cucharones.",
                    "现在它只能用刀和勺子了。"
                    ],
                    state: 3
                }
            ],
            [
                {
                    text: [
                        "That's the spirit!",
                        "¡Eso es!",
                    "就是这个精神！"
                    ]

                },
                {
                    text: [
                        "Gotta show who's boss in the kitchen.",
                        "Hay que enseñar quien manda en la cocina.",
                    "得让大家知道厨房里谁说了算。"
                    ]

                },
                {
                    text: [
                        "Here, take his leek.",
                        "Toma, quédate con su puerro.",
                    "给，拿着它的大葱。"
                    ],
                    reward: {
                        item: item.key.leek,
                        amount: 1
                    },
                },
                {
                    text: [
                        "I don't want that rotten onion to ruin his flavor.",
                        "No quiero que esa cebolla pocha mancille su sabor.",
                    "我不想让那个烂洋葱毁了它的味道。"
                    ],
                    state: 3
                }
            ],
            [
                {
                    text: [
                        "I'm sure I made the right decision.",
                        "Estoy seguro de que tomé la decisión correcta.",
                    "我确定我做了正确的决定。"
                    ]

                },
            ]
        ]
    },
    boyMarbleCity: {
        name: ['Boy', 'Chico', '男孩'],
        state: savedStates.boyMarbleCity ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I love watching the lake from the window.",
                        "Me encanta ver el lago desde la ventana.",
                        "我喜欢从窗户看湖。"
                    ]
                },
                {
                    text: [
                        "Sometimes you just have to enjoy the little things.",
                        "A veces hay que disfrutar de las pequeñas cosas.",
                    "有时候你只需要享受生活中的小事。"
                    ],
                },
            ],
        ]
    },
    vesselASteelCave: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselASteelCave ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Shiny Flask！",
                        "¡Hay x1 Frasco Variocolor dentro la vasija!",
                    "容器里有x1 闪光烧瓶！"
                    ],
                    reward: {
                        item: item.consumable.shinyFlask,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBSteelCave: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBSteelCave ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x2 Rare Candy！",
                        "¡Hay x2 Carameloraro dentro de la vasija!",
                    "容器里有x2 神奇糖果！"
                    ],
                    reward: {
                        item: item.consumable.rareCandy,
                        amount: 2
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    route50HiddenItem: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.route50HiddenItem ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 TM178 Electroweb on the ground!",
                        "¡He encontrado x1 MT178 Electrotela en el suelo!",
                    "我在地上找到了x1 招式机178（电网）！"
                    ],
                    reward: {
                        item: item.tm.tm178,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselARoute50: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselARoute50 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x3 Max Revive！",
                        "¡Hay x3 Revivir Máximo dentro la vasija!",
                    "容器里有x3 活力块！"
                    ],
                    reward: {
                        item: item.consumable.maxRevive,
                        amount: 3
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBRoute50: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBRoute50 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM175 Blaze Kick！",
                        "¡Hay x1 MT175 Patada ígnea dentro de la vasija!",
                    "容器里有x1 招式机175 火焰踢！"
                    ],
                    reward: {
                        item: item.tm.tm175,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCRoute50: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCRoute50 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Normal Disc！",
                        "¡Hay x1 Disco Normal dentro la vasija!",
                    "容器里有x1 一般光盘！"
                    ],
                    reward: {
                        item: item.consumable.normalDisc,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    basketRoute50: {
        name: ['Basket', 'Cesta', '篮子'],
        state: savedStates.basketRoute50 ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "There is a Shadow-Catching Urn inside the basket!",
                        "¡Hay una Urna Caza-sombras dentro de la cesta!",
                    "篮子里有捕影之瓮！"
                    ],
                    reward: {
                        item: item.key.urn,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The basket is empty.",
                        "La cesta esta vacía.",
                        "篮子是空的。"
                    ]
                },
            ]
        ]
    },
    lighthouseKeeperMirageIsland: {
        name: ['Lighthouse Keeper', 'Farero', '灯塔看守人'],
        state: savedStates.lighthouseKeeperMirageIsland ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "Shall we go back to Olive City?",
                        "¿Volvemos a Ciudad Olivo?",
                    "我们要回浅葱市吗？"
                    ],
                    choices: [
                        {
                            text: [
                                "Not yet.",
                                "Aún no.",
                            "还没。"
                            ],
                            next: "end",
                        },
                        {
                            text: [
                                "Let's go.",
                                "Vamos.",
                            "我们走吧。"
                            ],
                            next: 1, 
                            state: 1  
                        },
                    ]
                },
            ],
            [
                {
                    text: [
                        "Destination: Olivine City!",
                        "¡Rumbo a Ciudad Olivo!",
                    "目的地：浅葱市！"
                    ],
                    state: 0,
                },    
                {
                    cb: () => {
                        main.player.region = 0;
                        main.dialogue.endDialogue();
                        main.location.loadLocation(main.cityData['olivineCity-2']);
                    } 
                },             
            ]
        ]
    },
    mirageIslandHiddenItemA: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.mirageIslandHiddenItemA ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Ho-Oh feather on the ground!",
                        "¡He encontrado x1 Pluma de Ho-Oh en el suelo!",
                    "我在地上找到了x1 凤王羽毛！"
                    ],
                    reward: {
                        item: item.key.feather,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    mirageIslandHiddenItemB: {
        name: [`${main.player.name}`, `${main.player.name}`, `${main.player.name}`],
        state: savedStates.mirageIslandHiddenItemB ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "I found x1 Piece of Magnemite on the ground!",
                        "¡He encontrado x1 Trozo de Magnemite en el suelo!",
                    "我在地上找到了x1 小磁怪的零件！"
                    ],
                    reward: {
                        item: item.key.magnemitePiece,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[49].progress[0]++;
                        if (main.player.achievement[49].progress[0] == main.player.achievement[49].progress[1]) {
                            main.player.achievement[49].status = true;
                            main.player.unlockAchievement(49);
                        }
                    },
                    state: 1,
                },
            ],
            [
                {
                    text: [
                        "I picked up an item here.",
                        "De aquí recogí un objeto.",
                        "我在这里捡到了一个道具。"
                    ]
                },
            ]
        ]
    },
    vesselMirageCave: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselMirageCave ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 Developer Letter！",
                        "¡Hay x1 Carta del desarollador la vasija!",
                    "容器里有x1 开发者信件！"
                    ],
                    reward: {
                        item: item.key.letterKhydra,
                        amount: 1
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselAMirageIsland: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselAMirageIsland ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM152 Galvanic Quack！",
                        "¡Hay x1 MT152  Graznido galvánico la vasija!",
                    "容器里有x1 招式机152 电击呱！"
                    ],
                    reward: {
                        item: item.tm.tm152,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselBMirageIsland: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselBMirageIsland ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM153 Metalic Slash！",
                        "¡Hay x1 MT153 Corte metálico la vasija!",
                    "容器里有x1 招式机153 金属斩！"
                    ],
                    reward: {
                        item: item.tm.tm153,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    vesselCMirageIsland: {
        name: ['Vessel', 'Vasija', '船只'],
        state: savedStates.vesselCMirageIsland ?? 0,
        dialogues: [
            [
                {
                    text: [
                        "容器里有x1 TM60 Sacred Fire！",
                        "¡Hay x1 MT160 Fuego sagrado la vasija!",
                    "容器里有x1 招式机60 神圣之火！"
                    ],
                    reward: {
                        item: item.tm.tm160,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[48].progress[0]++;
                        if (main.player.achievement[48].progress[0] == main.player.achievement[48].progress[1]) {
                            main.player.achievement[48].status = true;
                            main.player.unlockAchievement(48);
                        }
                    },
                    state: 1
                },
            ],
            [
                {
                    text: [
                        "The vessel is empty.",
                        "La vasija está vacía.",
                        "容器是空的。"
                    ]
                },
            ]
        ]
    },
    signMirageCave: {
        name: ['Cryptography', 'Criptografía', '密码学'],
        state: 0,
        dialogues: [
            [
                {
                    text: [
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>',
    '<span style="font-family: Unown; font-size: 36px; line-height: 36px">UNOWN</span>'
]  
                },
            ]
        ]
    },
    missingno: {
        name: ["???", "???", "???"],
        state: savedStates.missingno ?? 0,
        dialogues: [
            [
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.staticPokemon.open({
                            title: ['Mirage Cave', 'Cueva Espejismo', '幻影洞窟'],
                            pokemon: 'missingno',
                            level: 1,
                            ivs: {
                                hp: 1, 
                                atk: 1, 
                                def: 1, 
                                spa: 1, 
                                spd: 1, 
                                spe: 1, 
                            },
                            moves: [move['tackle']],
                            background: './assets/images/background/battle30.png',
                            cb: () => {
                                main.npcs['missingno'].state = 1;
                                main.dialogue.startDialogue(main.npcs['missingno'], false);
                            }
                        });
                    },
                },
            ],
            [
                {      
                    text: [
                        "You've obtained a Missingno Egg!",
                        "¡Has obtenido un Huevo Missingno!",
                    "你获得了MissingNo.的蛋！"
                    ],
                    reward: {
                        item: item.consumable.missingnoEgg,
                        amount: 1
                    },
                    cb: () => {
                        main.player.achievement[77].status = true;
                        main.player.unlockAchievement(77);
                    }
                },
                {      
                    text: [
                        "You've obtained $1!",
                        "¡Has obtenido $1!",
                    "你获得了$1！"
                    ],
                    cb: () => {
                        playSound('purchase', 'ui');
                        main.player.changeGold(1);
                    }
                },
                {
                    cb: () => {
                        main.dialogue.endDialogue();
                        main.routeData['mirageIsland-2'] = main.routeData['mirageIsland-2bis'];
                        main.location.loadLocation(main.routeData['mirageIsland-2']);
                    }
                }
            ],
        ]
    },
});
 
function mewTime() {
    const now = new Date();
    const h = now.getHours(); 
    const m = now.getMinutes();

    return h === 0;
}

let jirachiTimer = null;

function jirachiCount(main) {
    if (jirachiTimer !== null) return;

    jirachiTimer = setTimeout(() => {
        jirachiTimer = null;
        startJirachiEvent(main); 
    }, 120 * 1000); 
}

function jirachiStop() {
    if (jirachiTimer !== null) {
        clearTimeout(jirachiTimer);
        jirachiTimer = null;
    }
}

function startJirachiEvent(main) {
    playSound('click1', 'ui');
    main.npcs['signboardRoute67'].state = 1
    main.dialogue.startDialogue(main.npcs['signboardRoute67'], false);
    main.npcs['signboardRoute67'].state = 0;
}