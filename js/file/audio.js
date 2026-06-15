function loadSounds(paths, options = {}) {
	const sounds = {};
	for (const [key, path] of Object.entries(paths)) {
		const audio = new Audio(path);
		if (options.loop) audio.loop = true;
		sounds[key] = audio;
	}
	return sounds;
}

export const soundUi = loadSounds({
	loadMenu: './assets/audio/ui/loadMenu.wav',
	option: './assets/audio/ui/option.wav',
	key0: './assets/audio/ui/key0.wav',
	key1: './assets/audio/ui/key1.wav',
	pop0: './assets/audio/ui/pop0.wav',
	pop1: './assets/audio/ui/pop1.wav',
	click0: './assets/audio/ui/click0.wav',
	click1: './assets/audio/ui/click1.wav',
	buttonA: './assets/audio/ui/buttonA.wav',
	buttonB: './assets/audio/ui/buttonB.wav',
	hover0: './assets/audio/ui/hover0.wav',
	hover1: './assets/audio/ui/hover1.wav',
	hover2: './assets/audio/ui/hover2.wav',
	hover3: './assets/audio/ui/hover3.wav',
	hover4: './assets/audio/ui/hover4.wav',
	hover5: './assets/audio/ui/hover5.wav',
	step: './assets/audio/ui/step.wav',
	select: './assets/audio/ui/select.wav',
	start: './assets/audio/ui/start.wav',
	open: './assets/audio/ui/open.wav',
	close: './assets/audio/ui/close.wav',
	purchase: './assets/audio/ui/purchase.wav',
	levelUp: './assets/audio/ui/levelUp.wav',
	storage: './assets/audio/ui/storage.wav',
	heal: './assets/audio/ui/heal.wav',
	equip: './assets/audio/ui/equip.wav',
	unequip: './assets/audio/ui/unequip.wav',
	obtain: './assets/audio/ui/obtain.wav',
	teleport: './assets/audio/ui/teleport.wav',
	card: './assets/audio/ui/card.wav',
	roulette1: './assets/audio/ui/roulette.wav',
	faint: './assets/audio/effect/faint.wav',
	cut: './assets/audio/ui/cut.wav',
	rockSmash: './assets/audio/ui/rockSmash.wav',
	secret1: './assets/audio/ui/secret1.wav',
	jump1: './assets/audio/ui/jump1.wav',
	stairs: './assets/audio/ui/stairs.wav',
	water1: './assets/audio/ui/water1.wav',
	water2: './assets/audio/ui/water2.wav',
	fall: './assets/audio/ui/fall.wav',
	elevator: './assets/audio/ui/elevator.wav',
	achievement: './assets/audio/ui/achievement.wav',
	fart: './assets/audio/ui/fart.wav',
});

export const soundEffect = loadSounds({
	potion: './assets/audio/effect/potion.wav',
	effective: './assets/audio/effect/effective.wav',
	superEffective: './assets/audio/effect/superEffective.wav',
	noEffective: './assets/audio/effect/noEffective.wav',
	faint: './assets/audio/effect/faint.wav',
	shiny: './assets/audio/effect/shiny.wav',
});

export const soundMusic = loadSounds({
	titleScreen: './assets/audio/music/titleScreen.mp3',

	newBarkTown: './assets/audio/music/newBarkTown.mp3',
	cherrygroveCity: './assets/audio/music/cherrygroveCity.mp3',
	violetCity: './assets/audio/music/violetCity.mp3',
	azaleaTown: './assets/audio/music/azaleaTown.mp3',
	goldenrodCity: './assets/audio/music/goldenrodCity.mp3',
	ecruteakCity: './assets/audio/music/ecruteakCity.mp3',
	cianwoodCity: './assets/audio/music/cianwoodCity.mp3',
	gymBattleJohto: './assets/audio/music/gymBattleJohto.mp3',
	
	route1: './assets/audio/music/route1.mp3',
	route3: './assets/audio/music/route3.mp3',
	route11: './assets/audio/music/route11.mp3',
	route24: './assets/audio/music/route24.mp3',
	route26: './assets/audio/music/route26.mp3',
	route29: './assets/audio/music/route29.mp3',
	route30: './assets/audio/music/route30.mp3',
	unionCave: './assets/audio/music/unionCave.mp3',
	ruinsOfAlph: './assets/audio/music/ruinsOfAlph.mp3',
	route34: './assets/audio/music/route34.mp3',
	nationalPark: './assets/audio/music/nationalPark.mp3',
	route38: './assets/audio/music/route38.mp3',
	burnedTower: './assets/audio/music/burnedTower.mp3',
	route42: './assets/audio/music/route42.mp3',
	icePath: './assets/audio/music/icePath.mp3',
	safariZone: './assets/audio/music/safariZone.mp3',
	victoryRoad: './assets/audio/music/victoryRoad.mp3',
	mtMoon: './assets/audio/music/mtMoon.mp3',
	goron: './assets/audio/music/goron.mp3',

	palletTown: './assets/audio/music/palletTown.mp3',
	celadonCity: './assets/audio/music/celadonCity.mp3',
	ceruleanCity: './assets/audio/music/ceruleanCity.mp3',
	vermilionCity: './assets/audio/music/vermilionCity.mp3',
	pewterCity: './assets/audio/music/pewterCity.mp3',
	cinnabarIsland: './assets/audio/music/cinnabarIsland.mp3',
	fuchsiaCity: './assets/audio/music/fuchsiaCity.mp3',
	lavenderTown: './assets/audio/music/lavenderTown.mp3',
	gymBattleKanto: './assets/audio/music/gymBattleKanto.mp3',

	route1: './assets/audio/music/route1.mp3',
	route3: './assets/audio/music/route3.mp3',
	viridianForest: './assets/audio/music/viridianForest.mp3',

	groudonKyogre: './assets/audio/music/groudonKyogre.mp3',
	mirageIsland: './assets/audio/music/pokemonTower.mp3',

}, { loop: true });

const soundBanks = {
	ui: soundUi,
	effect: soundEffect,
	music: soundMusic
};

export function playSound(sound, origin) {
	const s = soundBanks[origin]?.[sound];
	if (!s) return;

	if (s.readyState === 0) {
		s.load();
	}

	s.pause();
	s.currentTime = 0;
	s.play().catch(() => {});
}

export function setVolume() {
	const audio = JSON.parse(window.localStorage.getItem("data")).config.audio;

	const master = audio.master * 0.05;
	const volUi = audio.ui * 0.05 * master;
	const volMusic = audio.music * 0.05 * master;
	const volEffect = audio.effects * 0.05 * master;

	Object.keys(soundUi).forEach((key) => soundUi[key].volume = volUi);
	Object.keys(soundMusic).forEach((key) => soundMusic[key].volume = volMusic);
	Object.keys(soundEffect).forEach((key) => soundEffect[key].volume = volEffect);
}

let currentMusic = null;
let fadeOutInterval = null;
let fadeInInterval = null;

export function playMusic(trackName) {
	const newTrack = soundMusic[trackName];
	if (!newTrack) return;

	if (currentMusic === newTrack) return;

	newTrack.loop = true;
	newTrack.volume = 0;

	if (currentMusic) {
		clearInterval(fadeOutInterval);
		fadeOutInterval = setInterval(() => {
			if (currentMusic.volume > 0.01) {
				currentMusic.volume -= 0.01;
			} else {
				currentMusic.pause();
				currentMusic.currentTime = 0;
				clearInterval(fadeOutInterval);
				startNewTrack(newTrack);
			}
		}, 30);
	} else {
		startNewTrack(newTrack);
	}
}

function startNewTrack(track) {
	const audio = JSON.parse(window.localStorage.getItem("data")).config.audio;
	const master = audio.master * 0.05;
	const music = audio.music * 0.05;
	const targetVolume = master * music;

	//console.log(targetVolume)
	track.play();
	currentMusic = track;

	clearInterval(fadeInInterval);
	let vol = 0;
	fadeInInterval = setInterval(() => {
		if (vol < targetVolume) {
			vol += 0.02;
			track.volume = Math.min(vol, targetVolume);
		} else {
			clearInterval(fadeInInterval);
			track.volume = targetVolume;
		}
	}, 50);
}

export function crySound(pokemonNumber) {
	const audio = JSON.parse(window.localStorage.getItem("data")).config.audio;
	let num =  String(pokemonNumber).padStart(3, '0');

	let cry = new Audio(`./assets/audio/cries/${num}.wav`);

	const master = audio.master * 0.05;
	const effects = audio.effects * 0.05;

	cry.volume = master * effects * 0.5;
	cry.play();
}	
