import { Element } from '../utils/Element.js';
import { Menu } from './Menu.js';
import { text } from '../file/text.js';
import { playSound, setVolume } from '../file/audio.js';

export class Init {
	constructor(data) {
	    this.data = data;
	    this.handleClick = this.handleClick.bind(this);
	    this.render();

    	this.lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

	    this.loadingPuns = [
	    		[
			        "Magnemite is being screwed together...",
				    "Abra is teleporting the textures...",
				    "Psyduck is trying to understand the code...",
				    "Diglett is digging through the files...",
				    "Slowpoke is still waking up...",
				    "Machop is loading the heavy assets...",
				    "Haunter is tickling the loading time...",
				    "Voltorb is loading... carefully...",
				    "Pidgey is delivering files by air mail...",
				    "Mr. Mime is organizing invisible barriers...",
				    "Ditto is replicating missing assets...",
				    "Lickitung is cleaning residual errors...",
				    "Cubone is searching through system memories...",
				    "Misdreavus is hiding bugs in the shadows...",
				    "Hoppip is floating through lines of code...",
				    "Smeargle is drawing sprites by hand...",
				    "Unown is encrypting hidden messages...",
				    "Girafarig is processing data from both ends...",
				    "Sunkern is germinating lines of code...",
				    "Miltank is pasteurizing the data...",
				    "Quagsire doesn't know what it's doing, but it's doing it well...",
				    "Donphan is rolling over the file system...",
				    "Sneasel is rummaging through hidden files..."
		    	],
	    		[
			        "Magnemite está siendo atornillado...",
				    "Abra está teleportando las texturas...",
				    "Psyduck está intentando entender el código...",
				    "Diglett está excavando entre los archivos...",
				    "Slowpoke aún se está despertando...",
				    "Machop está cargando los assets pesados...",
				    "Haunter está haciendo cosquillas al tiempo de carga...",
				    "Voltorb se está cargando... con cuidado...",
				    "Pidgey está entregando los archivos por correo aéreo...",
				    "Mr. Mime está organizando barreras invisibles...",
				    "Ditto está replicando assets faltantes...",
				    "Lickitung está limpiando los errores residuales...",
				    "Cubone está buscando entre los recuerdos del sistema...",
				    "Misdreavus está ocultando los bugs en las sombras...",
				    "Hoppip está flotando entre líneas de código...",
				    "Smeargle está dibujando los sprites a mano...",
				    "Unown está cifrando mensajes ocultos...",
				    "Girafarig está procesando datos desde ambos extremos...",
				    "Sunkern está germinando líneas de código...",
				    "Miltank está pasteurizando los datos...",
				    "Quagsire no sabe qué hace, pero lo está haciendo bien...",
				    "Donphan está rodando sobre el sistema de archivos...",
				    "Sneasel está hurgando entre los archivos ocultos..."
		    	],
	    		[
			        "小磁怪正在拧紧螺丝...",
				    "凯西正在传送纹理贴图...",
				    "可达鸭正在试图理解代码...",
				    "地鼠正在挖掘文件...",
				    "呆呆兽还在起床中...",
				    "腕力正在加载大型素材...",
				    "鬼斯通正在挠加载时间的痒痒...",
				    "雷电球正在加载中...小心...",
				    "波波正在空运文件...",
				    "魔墙人偶正在布置隐形屏障...",
				    "百变怪正在复制缺失的素材...",
				    "大舌头正在清理残留错误...",
				    "卡拉卡拉正在搜索系统记忆...",
				    "梦妖正在阴影中藏匿 Bug...",
				    "毽子草正在代码行间飘浮...",
				    "图图犬正在手绘精灵图...",
				    "未知图腾正在加密隐藏信息...",
				    "麒麟奇正在从两端处理数据...",
				    "向日种子正在催生代码行...",
				    "大奶罐正在巴氏杀菌数据...",
				    "沼王不知道自己在干什么，但干得不错...",
				    "顿甲正在碾压文件系统...",
				    "狃拉正在翻找隐藏文件..."
		    	]
	    	]
	}

	handleClick() {
		this.scene.removeEventListener("click", this.handleClick);
	    this.scene.innerHTML = ''; 
	    new Element(this.scene, { className: 'init-title', text: 'POKÉMON LITHIC VEIL' });
	    this.createLoadingBar();
	    this.startLoadingPuns();

	    fetch("./assets/assets.json")
	    .then(res => res.json())
	    .then(assets => {
	        this.preloadAssets(assets, () => { 
	        	playSound('start', 'ui');
	            this.stopLoadingPuns();  
	            this.scene.remove();
	        	new Menu(this.data); 
	        });
	    }); 
	}

	render = () => {
	    const lang = JSON.parse(window.localStorage.getItem("data")).config.language.text;

	    this.scene = new Element(document.getElementById("screen"), { className: 'init-scene' }).element;
	    new Element(this.scene, { className: 'init-title', text: 'POKÉMON LITHIC VEIL' });
	    new Element(this.scene, { className: 'init-prompt', text: `${text.menu.prompt[lang]}` });

	    // 汉化标识
	    const creditEl = new Element(this.scene, { className: 'init-credit', text: '人民汉化' }).element;
	    creditEl.style.position = 'absolute';
	    creditEl.style.left = '10px';
	    creditEl.style.bottom = '10px';
	    creditEl.style.fontSize = '10px';
	    creditEl.style.color = '#1b1b19';
	    creditEl.style.fontFamily = 'inherit';

	    setVolume();

	    this.scene.addEventListener("click", this.handleClick);
	}

	createLoadingBar() {
		this.scene.style.cursor = `url("./assets/images/misc/cursor-loading.png") 0 0, auto`;
	    this.loadingText = new Element(this.scene, { className: 'loading-text' }).element;
	    this.loadingBarBackground = new Element(this.scene, { className: 'loading-bar-bg' }).element;
	    this.loadingBar = new Element(this.loadingBarBackground, { className: 'loading-bar' }).element;
	}

	preloadAssets(assets, onComplete) {
	    let loaded = 0;
	    const total = 1;
	    
	    const checkLoaded = () => {
	        loaded++;
	        const percent = Math.floor((loaded / total) * 100);
	        this.loadingBar.style.width = `${percent}%`;
	
	        if (loaded === total) {
	            onComplete();
	        }
	    };
	    
	    window.assetCache = {
	        images: {},
	        audios: {}
	    };
	    
	    window.loadImage = (src) => {
	        if (window.assetCache.images[src]) {
	            return window.assetCache.images[src];
	        }
	        const img = new Image();
	        img.src = src;
	        window.assetCache.images[src] = img;
	        return img;
	    };
	    
	    window.loadAudio = (src) => {
	        if (window.assetCache.audios[src]) {
	            return window.assetCache.audios[src];
	        }
	        const audio = new Audio();
	        audio.src = src;
	        window.assetCache.audios[src] = audio;
	        return audio;
	    };
	    
	    setTimeout(checkLoaded, 100);
	}

	startLoadingPuns() {
	    this.changePun();
	    this.punInterval = setInterval(() => {
	        this.changePun();
	    }, 1500);
	}

	changePun() {
	  	const puns = this.loadingPuns[this.lang];
	  	const randomIndex = Math.floor(Math.random() * puns.length);
	  	this.loadingText.textContent = puns[randomIndex];
	}

	stopLoadingPuns() {
	    clearInterval(this.punInterval);
	}
}

