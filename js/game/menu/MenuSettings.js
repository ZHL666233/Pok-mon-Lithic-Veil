import { MenuComponent } from './MenuComponent.js';
import { Element } from '../../utils/Element.js';
import { Selector } from '../../utils/Selector.js';
import { text } from '../../file/text.js';
import { playSound, setVolume } from '../../file/audio.js';

const SECTION = ['game', 'audio', 'data'];
const OPTION = {
 	audio: Array.from({ length: 21 }, (_, i) => (i * 5).toString()),
    captureWindow: [['Show', 'Skip', '显示'], ['Mostrar', 'Saltar', '显示'], ['显示', '跳过']],
    autoLevel: [['Off', 'On', '关'], ['No', 'Si', '否'], ['关闭', '开启']],
}

export class MenuSettings extends MenuComponent {
	constructor(menu) {
		super(menu);	
		this.key = 'settings';
		this.render();
	}

	render() {
		this.content = new Element(this.container, { className: 'window-container' }).element;

		this.section = {};
		this.selector = {};

		SECTION.forEach((label) => {
			this.section[label] = new Element(this.content, { className: 'menu-settings-section' }).element;
			this.section[label].header = new Element(this.section[label], { className: 'menu-settings-section-header' }).element;
			this.section[label].selector = new Element(this.section[label], { className: 'menu-settings-section-selector' }).element;
		})

		this.renderAudio();
        this.renderGame();
        this.renderData();
	}

	getConfig() {
        return JSON.parse(window.localStorage.getItem("data")).config;
    }

    saveConfig(newConfig) {
        let data = JSON.parse(window.localStorage.getItem("data"));
        data.config = newConfig;
        window.localStorage.setItem("data", JSON.stringify(data));
    }

    renderGame = () => {
        const config = this.getConfig();
        const lang = config.language.text;

        this.section['game'].header.innerText = text.menu.settings.section['game'][lang];
        
        const updateCaptureWindowSetting = (key, indx) => {
            let config = this.getConfig();
            config.captureWindow = indx;
            this.saveConfig(config);
        };

        const updateAutoLevelSetting = (key, indx) => {
            let config = this.getConfig();
            config.autoLevel = indx;
            this.saveConfig(config);
        };

        this.selector['captureWindow'] = new Selector(
            this.section['game'].selector,
            text.menu.settings.game[0][lang],
            OPTION.captureWindow[lang],
            { currentIndex: config.captureWindow },
            (indx) => updateCaptureWindowSetting('text', indx)
        );

        this.selector['autoLevel'] = new Selector(
            this.section['game'].selector,
            text.menu.settings.game[1][lang],
            OPTION.autoLevel[lang],
            { currentIndex: config.autoLevel },
            (indx) => updateAutoLevelSetting('text', indx)
        );    
    }

  	renderAudio = () => {
  		const config = this.getConfig();
        const lang = config.language.text;

        this.section['audio'].header.innerText = text.menu.settings.section['audio'][lang];

        function applyAudioSettings() {
            const config = JSON.parse(window.localStorage.getItem("data")).config.audio;

            window.localStorage.setItem("settings", JSON.stringify({
                master: config.master,
                ui: config.ui,
                music: config.music,
                effects: config.effects
            }));

            setVolume(); 
        }

        const updateAudioSetting = (key, indx) => {
            let config = this.getConfig();
            config.audio[key] = indx;
            this.saveConfig(config);
            applyAudioSettings(); 
        };

        this.selector['master'] = new Selector(
            this.section['audio'].selector,
            text.menu.settings.audio[0][lang],
            OPTION.audio,
            { currentIndex: config.audio.master },
            (indx) => updateAudioSetting('master', indx)
        );

        this.selector['music'] = new Selector(
            this.section['audio'].selector,
            text.menu.settings.audio[1][lang],
            OPTION.audio,
            { currentIndex: config.audio.music },
            (indx) => updateAudioSetting('music', indx)
        );

        this.selector['interface'] = new Selector(
            this.section['audio'].selector,
            text.menu.settings.audio[2][lang],
            OPTION.audio,
            { currentIndex: config.audio.ui },
            (indx) => updateAudioSetting('ui', indx)
        );

        this.selector['effects'] = new Selector(
            this.section['audio'].selector,
            text.menu.settings.audio[3][lang],
            OPTION.audio,
            { currentIndex: config.audio.effects },
            (indx) => updateAudioSetting('effects', indx)
        );
  	}

	renderData = () => {
		const lang = this.getConfig().language.text;
		this.section['data'].header.innerText = text.menu.settings.section['data'][lang];

		const buttonContainer = new Element(this.section['data'], { className: 'menu-settings-data-buttons' }).element;

		this.dataExportBtn = new Element(buttonContainer, { className: 'window-section-button', text: text.menu.settings.data[4][lang].toUpperCase() }).element;
		this.dataExportBtn.addEventListener('click', () => {
			playSound('option', 'ui');
			const data = window.localStorage.getItem('data');
			if (!data) return;
			const blob = new Blob([data], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			const now = new Date();
			const pad = n => String(n).padStart(2, '0');
			const ts = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
			a.download = `pokemon-lithic-veil-save-${ts}.json`;
			a.click();
			URL.revokeObjectURL(url);
		});

		this.dataImportBtn = new Element(buttonContainer, { className: 'window-section-button', text: text.menu.settings.data[5][lang].toUpperCase() }).element;
		this.dataImportBtn.addEventListener('click', () => {
			playSound('option', 'ui');
			const input = document.createElement('input');
			input.type = 'file';
			input.accept = '.json';
			input.style.display = 'none';
			document.body.appendChild(input);
			input.onchange = (e) => {
				const file = e.target.files[0];
				if (!file) { document.body.removeChild(input); return; }
				const reader = new FileReader();
				reader.onload = (ev) => {
					try {
						const data = JSON.parse(ev.target.result);
						if (!data.config || !data.save) throw new Error('Invalid save');
						window.localStorage.setItem('data', JSON.stringify(data));
						location.reload();
					} catch (err) {
						playSound('close', 'ui');
					}
					document.body.removeChild(input);
				};
				reader.readAsText(file);
			};
			input.click();
		});
	}

	open() {
		super.open(); 
	}
}
