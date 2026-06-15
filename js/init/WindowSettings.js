import { Window } from '../utils/Window.js';
import { Element } from '../utils/Element.js';
import { Selector } from '../utils/Selector.js';
import { text } from '../file/text.js';
import { playSound, setVolume } from '../file/audio.js';

const SECTION = ['language', 'game', 'audio', 'data'];
const OPTION = {
 	language: ['English', 'Español', '中文'],
    captureWindow: [['Show', 'Skip', '显示'], ['Mostrar', 'Saltar', '显示'], ['显示', '跳过']],
    autoLevel: [['Off', 'On', '关'], ['No', 'Si', '否'], ['关闭', '开启']],
 	audio: Array.from({ length: 21 }, (_, i) => (i * 5).toString()),
}

export class WindowSettings extends Window {
	constructor(component) {
		const title = text.menu.button['settings'][JSON.parse(window.localStorage.getItem("data")).config.language.text].toUpperCase();

	    super(title, 600, 450); 
	    this.component = component;
	    this.render();

        this.confirmDelete = 0;
	}

	getConfig() {
        return JSON.parse(window.localStorage.getItem("data")).config;
    }

    saveConfig(newConfig) {
        let data = JSON.parse(window.localStorage.getItem("data"));
        data.config = newConfig;
        window.localStorage.setItem("data", JSON.stringify(data));
    }

	render = () => {
		this.section = {};
		this.selector = {};

		SECTION.forEach((label) => {
			this.section[label] = new Element(this.container, { className: 'window-section' }).element;
			this.section[label].header = new Element(this.section[label], { className: 'window-section-header super-stroke' }).element;
			this.section[label].selector = new Element(this.section[label], { className: 'window-section-selector super-stroke' }).element;
		})

		this.renderLanguage();
        this.renderGame();
		this.renderAudio();
		this.renderData();
  	}

  	renderLanguage = () => {
  		const config = this.getConfig();
        const lang = config.language.text;

  		this.section['language'].header.innerText = text.menu.settings.section['language'][lang];

  		const updateLanguageSetting = (key, indx) => {
            let config = this.getConfig();
            config.language[key] = indx;
            this.saveConfig(config);
            this.updateLanguage();
            this.confirmDelete = 0;
        };
  		
  		this.selector['language'] = new Selector(
            this.section['language'].selector,
            text.menu.settings.language[0][lang],
            OPTION.language,
            { currentIndex: config.language.text },
            (indx) => updateLanguageSetting('text', indx)
        );
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
  		this.section['data'].button = new Element(this.section['data'], { className: 'window-section-button', text: text.menu.settings.data[0][lang].toUpperCase() }).element;
        this.section['data'].button.addEventListener('click', () => {
            playSound('option', 'ui');
            this.confirmDelete += 1;
            switch(this.confirmDelete) {
                case 1: 
                    this.section['data'].button.innerText = text.menu.settings.data[this.confirmDelete][this.getConfig().language.text].toUpperCase();
                    break;
                case 2:
                    this.section['data'].button.innerText = text.menu.settings.data[this.confirmDelete][this.getConfig().language.text].toUpperCase();
                    break;
                case 3:
                    this.section['data'].button.innerText = text.menu.settings.data[this.confirmDelete][this.getConfig().language.text].toUpperCase();
                    break;
                case 4:
                    const data = JSON.parse(window.localStorage.getItem("data"));
                    data.save = {};
                    window.localStorage.setItem("data", JSON.stringify(data));
                    location.reload();
                    break;
            }
        })
  	}

  	updateLanguage = () => {
  		const lang = this.getConfig().language.text;
  		this.title = text.menu.button.settings[lang].toUpperCase();
  		this.name.innerText = this.title;

  		this.section['language'].header.innerText = text.menu.settings.section['language'][lang];
        this.section['game'].header.innerText = text.menu.settings.section['game'][lang];
  		this.section['audio'].header.innerText = text.menu.settings.section['audio'][lang];
  		this.section['data'].header.innerText = text.menu.settings.section['data'][lang];

		this.selector['language'].updateLabelText(text.menu.settings.language[0][lang]);

        this.selector['captureWindow'].updateLabelText(text.menu.settings.game[0][lang]);
        this.selector['autoLevel'].updateLabelText(text.menu.settings.game[1][lang]);

		this.selector['master'].updateLabelText(text.menu.settings.audio[0][lang]);
		this.selector['music'].updateLabelText(text.menu.settings.audio[1][lang]);
		this.selector['interface'].updateLabelText(text.menu.settings.audio[2][lang]);
		this.selector['effects'].updateLabelText(text.menu.settings.audio[3][lang]);

		this.section['data'].button.innerText = text.menu.settings.data[0][lang].toUpperCase();

		this.component.update();
  	}

  	open() {
	    super.open(true); 
        this.confirmDelete = 0;
        this.section['data'].button.innerText =  text.menu.settings.data[0][this.getConfig().language.text].toUpperCase()
  	}

    close() {
        playSound('close', 'ui');
        super.close(); 
    }
}
