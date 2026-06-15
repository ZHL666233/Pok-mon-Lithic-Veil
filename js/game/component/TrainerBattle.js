import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { Pokemon } from '../manager/Pokemon.js'; 
import { useMove } from '../manager/damageCalculator.js';
import { text, formatNumberWithCommas } from '../../file/text.js';
import { playSound, crySound, playMusic } from '../../file/audio.js';

export class TrainerBattle extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.playerTeam;
        this.trainerTeam;
        this.isGym = false;
        this.badge = null;
        this.cb = null;

        this.enemy;
        this.spriteInterval = { player: null, enemy: null };
        this.render();

        this.battle = {
            player: null,
            enemy: null,
            loop: null,
            moveSelected: 0,
            chargeMax: 100,
            playerCharge: 0,
            enemyCharge: 0,
            playerRatio: 0,
            enemyRatio: 0,
            playerSlowed: 0,
            enemySlowed: 0,
            playerStuned: 0,
            enemyStuned: 0,
            playerCombo: {
                moveName: '', 
                count: 0     
            },
            enemyCombo: {
                moveName: '', 
                count: 0 
            }
        };

        this.winData = new TrainerWin(this);
        this.loseData = new TrainerLose(this);
    }

    render() {
        const lang = this.main.lang;

        this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = '#888';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '1px';
        this.container.style.backgroundSize = 'cover';
        this.container.style.backgroundPosition = 'center';
        this.container.style.imageRendering = 'pixelated';
        this.container.style.backgroundImage = 'url("./assets/images/background/gym.png")';
        this.playerPokemon = new Element(this.container, { className: 'route-player-pokemon' }).element;
        this.enemyPokemon = new Element(this.container, { className: 'route-enemy-pokemon' }).element;

        this.movesetContainer = new Element(this.container, { className: 'route-moveset-container' }).element;
        this.moves = [];
        this.movesComboContainer = [];
        this.movesComboBalls = [[], []];

        for (let i = 0; i < 2; i++) {
            this.moves[i] = new Element(this.movesetContainer, { className: 'route-move stroke' }).element;
            this.moves[i].style.display = 'none';

            this.movesComboContainer[i] = new Element(this.movesetContainer, { className: 'route-move-combo-container stroke' }).element;
            this.movesComboContainer[i].style.display = 'none';

            this.moves[i].addEventListener('click', () => { 
                playSound('click1', 'ui');
                this.selectMove(i);
            })
            this.moves[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })  
        };

        this.teamPokemonContainer = new Element(this.container, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];

        this.battleInfoContainer = new Element(this.container, { className: 'route-battle-info-container' }).element;
    }

    update() {
        this.name.innerText = this.title;  

        this.teamPokemonContainer.innerHTML = '';
        this.teamPokemon = [];

        for (let i = 0; i < 2; i++) {
            this.moves[i].style.display = 'none';
            this.movesComboContainer[i].style.display = 'none';
        }

        this.playerTeam.forEach((pokemon, i) => { 
            this.updateTeamPokemon(pokemon, i);   
        })

        this.enemy = this.generateTrainerPokemon();
        this.battle.enemy = this.enemy;
        this.displayPokemon(this.enemy, 'enemy');
    }   

    open(playerTeam, trainerTeam, title, isGym = false, badge = null, bg = null, cb = null, streak = null) {
        super.open(true); 
        if (bg) {
            this.container.style.backgroundImage = `url("./assets/images/background/${bg}.png")`;
        } else this.container.style.backgroundImage = 'url("./assets/images/background/gym.png")';

        this.main.menu.available = false;
        this.battleInfoContainer.innerHTML = '';

        this.isGym = isGym;
        this.badge = badge;

        (playerTeam != null) ? this.playerTeam = playerTeam : this.playerTeam = this.main.team.pokemon;
        
        this.trainerTeam = [...trainerTeam];
        this.cb = cb;
        this.streak = streak;
        this.title = title;
        
        this.update();
    }

    close() {
        playSound('close', 'ui');
        super.close();

        if (this.battle.loop) {
            clearInterval(this.battle.loop);
            this.battle.loop = null;
        }

        ['player', 'enemy', '玩家'].forEach(pos => {
            if (this.spriteInterval[pos]) {
                clearInterval(this.spriteInterval[pos]);
                this.spriteInterval[pos] = null;
            }
            const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;
            target.innerHTML = '';
        });

        this.main.currentSong = this.main.player.location.song;
        playMusic(this.main.currentSong);

        this.battle = {
            player: null,
            enemy: null,
            loop: null,
            moveSelected: 0,
            chargeMax: 100,
            playerCharge: 0,
            enemyCharge: 0,
            playerRatio: 0,
            enemyRatio: 0,
            //TEST
            playerSlowed: 0,
            enemySlowed: 0,
            playerStuned: 0,
            enemyStuned: 0,
            playerCombo: {
                moveName: '', 
                count: 0      
            },
            enemyCombo: {
                moveName: '', 
                count: 0     
            }
        };

        this.main.menu.available = true;
    }

    updateTeamPokemon(pokemon, pos) {
        const lang = this.main.lang;

        this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
        this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
        this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `${text.stats.short.level[lang]} ${pokemon.lvl}` }).element;

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprite.base;
        sprite.className = 'route-team-pokemon-sprite';
        sprite.style.pointerEvents = 'none'
        this.teamPokemon[pos].appendChild(sprite);

        this.teamPokemon[pos].healthBarContainer = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-health-bar-container' }).element;
        this.teamPokemon[pos].healthBarProgress = new Element(this.teamPokemon[pos].healthBarContainer, { className: 'route-team-pokemon-health-bar-progress' }).element;

        const hpPercent = (pokemon.hp[0] / pokemon.hp[1]) * 100;
        this.teamPokemon[pos].healthBarProgress.style.width = `${Math.max(0, hpPercent)}%`;
        this.teamPokemon[pos].healthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (hpPercent === 0) {
            this.teamPokemon[pos].style.filter = 'grayscale(100%)';
            this.teamPokemon[pos].style.pointerEvents = 'none'
        } else {
            this.teamPokemon[pos].style.filter = 'revert-layer';
            this.teamPokemon[pos].style.pointerEvents = 'revert-layer'
        }

        this.teamPokemon[pos].expBarContainer = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-exp-bar-container' }).element;
        this.teamPokemon[pos].expBarProgress = new Element(this.teamPokemon[pos].expBarContainer, { className: 'route-team-pokemon-exp-bar-progress' }).element;

        const expPercent = (pokemon.exp[0] / pokemon.exp[1]) * 100;
        this.teamPokemon[pos].expBarProgress.style.width = `${Math.max(0, expPercent)}%`;
        this.teamPokemon[pos].expBarProgress.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';

        this.teamPokemon[pos].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
        this.teamPokemon[pos].addEventListener('click', () => { 
            if (pokemon.hp[0] <= 0) return;
            if (this.battle.player === pokemon) return;

            this.removePokemonElements('player');

            this.battle.player = pokemon;
            this.battle.player.teamHpBar = this.teamPokemon[pos].healthBarProgress;
            this.battle.player.teamExpBar = this.teamPokemon[pos].expBarProgress;
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = 0;

            this.displayPokemon(pokemon, 'player');
        });
    }

    generateTrainerPokemon() {
        let pokemon = this.trainerTeam[0];
        pokemon.hp[0] = pokemon.hp[1];
        this.main.pokedex.seePokemon(pokemon.specie.n);

        this.battle.enemySlowed = 0;
        this.battle.enemyStuned = 0;
        
        return pokemon;
    }

    displayPokemon(pokemon, pos, mode = 'idle') {
        const lang = this.main.lang;
        const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;
        crySound(pokemon.specie.n);

        if (pokemon.shiny) playSound('shiny', 'effect');
        this.animateSprite(pokemon, pos, mode);

        this.displayBattleBar(pos);

        if (pos === 'player') {
            this.displayPokemonMoves(pokemon);
            this.battle.playerCharge = 0;
            this.battle.playerCombo = {
                moveName: '', 
                count: 0  
            }
        } else {
            this.addBattleInfoMessage(`${pokemon.name} ${text.stats.short.level[lang]} ${pokemon.lvl}`);
            this.battle.enemyCombo = {
                moveName: '', 
                count: 0      
            }
        }

        if (this.playerPokemon.innerHTML && this.enemyPokemon.innerHTML && this.battle.player && this.battle.enemy) {
            this.animateSprite(this.battle.player, 'player', 'attack');
            this.animateSprite(this.battle.enemy, 'enemy', 'attack');

            this.setBattleBobAnimation(true, 'player');   
            this.setBattleBobAnimation(true, 'enemy'); 

            this.startBattleLoop();
        }
    }

    displayPokemonMoves(pokemon) {
        const lang = this.main.lang;

        for (let i = 0; i < 2; i++) {
            this.moves[i].style.display = 'none';
            this.movesComboContainer[i].innerHTML = "";
            this.movesComboContainer[i].style.display = 'none';
            this.movesComboBalls[i] = [];
        }

        pokemon.moves.forEach((move, i) => {
            this.moves[i].style.display = 'block';
            this.moves[i].innerText = move.name[lang].toUpperCase();
            this.moves[i].style.backgroundColor = move.type.color;
            if (move.combo) {
                this.movesComboContainer[i].style.display = 'flex';
                for (let j = 0; j < move.combo.length - 1; j++) {
                    this.movesComboBalls[i][j] = new Element(this.movesComboContainer[i], { className: 'route-move-combo-ball' }).element;
                }
                this.movesComboContainer[i].style.left = (i == 1) ? '278px' : (pokemon.moves.length == 1) ? '166px' : '54px';
            }
        })

        this.selectMove(0);
    }

    selectMove(movePosition) {
        this.battle.moveSelected = movePosition;

        for (let i = 0; i < 2; i++) {
            this.moves[i].className = 'route-move stroke';
            if (i === movePosition) this.moves[i].className = 'route-move-selected stroke';
        }
    }

    animateSprite(pokemon, pos, mode = 'idle') {
        const ANIMATION_CYCLE_MS = 1100;  
        const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;
        let sprite = target.querySelector('.route-pokemon-animated-sprite');

        if (!sprite) {
            sprite = document.createElement('div');
            sprite.className = 'route-pokemon-animated-sprite';
            target.appendChild(sprite);
        }

        if (this.spriteInterval[pos]) {
            clearInterval(this.spriteInterval[pos]);
            this.spriteInterval[pos] = null;
        }

        const spriteData = pokemon.sprite[mode];
        const frameW = spriteData.size[0] / spriteData.framesX;
        const frameH = spriteData.size[1] / spriteData.framesY;

        sprite.style.backgroundImage = `url("${spriteData.src}")`;
        sprite.style.width = `${frameW}px`;
        sprite.style.height = `${frameH}px`;
        sprite.style.position = 'absolute';
        sprite.style.left = `calc(50% + ${spriteData.correctionX || 0}px)`;
        sprite.style.bottom = `${spriteData.correctionY || 0}px`;
        sprite.style.backgroundRepeat = 'no-repeat';
        sprite.style.imageRendering = 'pixelated';
        sprite.style.backgroundSize = `${spriteData.size[0]}px ${spriteData.size[1]}px`;

        const totalFrames = spriteData.framesX;               
        const frameTimeMs = ANIMATION_CYCLE_MS / totalFrames; 

        const baseFrameY = spriteData.position; 
        let frame = 0;

        const setFrame = () => {
            const currentX = frame % totalFrames;             
            sprite.style.backgroundPosition =
                `${-currentX * frameW}px ${-baseFrameY * frameH}px`;
        };

        setFrame(); 

        this.spriteInterval[pos] = setInterval(() => {
            frame = (frame + 1) % totalFrames;  
            setFrame();
        }, frameTimeMs);
    }


    displayBattleBar(pos) {
        const isPlayer = pos == 'player';
        const base = isPlayer ? this.playerPokemon : this.enemyPokemon;

        const healthContainer = new Element(base, { className: 'route-pokemon-health-bar-container' }).element;
        const healthBar = new Element(healthContainer, { className: 'route-pokemon-health-bar-progress' }).element;

        const chargeContainer = new Element(base, { className: 'route-pokemon-charge-bar-container' }).element;
        const chargeBar = new Element(chargeContainer, { className: 'route-pokemon-charge-bar-progress' }).element;

        if (isPlayer) {
            healthContainer.style.transform = 'scaleX(-1)';
            chargeContainer.style.transform = 'scaleX(-1)';

            this.playerPokemonHealthBarContainer = healthContainer;
            this.playerPokemonHealthBarProgress = healthBar;
            this.playerPokemonChargeBarContainer = chargeContainer;
            this.playerPokemonChargeBarProgress = chargeBar;         
        } else {
            this.enemyPokemonHealthBarContainer = healthContainer;
            this.enemyPokemonHealthBarProgress = healthBar;
            this.enemyPokemonChargeBarContainer = chargeContainer;
            this.enemyPokemonChargeBarProgress = chargeBar;
        }

        const currentHp = isPlayer ? this.battle.player.hp[0] : this.battle.enemy.hp[0];
        const maxHp = isPlayer ? this.battle.player.hp[1] : this.battle.enemy.hp[1];
        const hpPercent = (currentHp / maxHp) * 100;

        healthBar.style.width = `${Math.max(0, hpPercent)}%`;
        healthBar.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        chargeBar.style.width = `0%`;
    }

    startBattleLoop() {
        if (this.battle.loop) {
            clearInterval(this.battle.loop);
            this.battle.loop = null;
        }

        const playerSpe = (this.battle.player.stat.spe * 0.9) + 35;
        const enemySpe = (this.battle.enemy.stat.spe * 0.9) + 35;
        const totalSpe = playerSpe + enemySpe;

        const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

        this.battle.playerRatio = clamp(playerSpe / totalSpe, 0.3, 0.7);
        this.battle.enemyRatio = clamp(enemySpe / totalSpe, 0.3, 0.7);

        this.battle.loop = setInterval(() => {
            if (this.battle.enemyStuned > 0) {
                this.battle.enemyStuned--;
                if (this.battle.enemyStuned === 0) this.setBattleBobAnimation(true, 'enemy');
                this.battle.enemyCharge += this.battle.enemyRatio * 0;
            } else if (this.battle.enemySlowed > 0) {
                this.battle.enemySlowed--;
                this.battle.enemyCharge += this.battle.enemyRatio * 3;
            } else this.battle.enemyCharge += this.battle.enemyRatio * 6;
            
            if (this.battle.playerStuned > 0) {
                this.battle.playerStuned--;
                if (this.battle.playerStuned === 0) this.setBattleBobAnimation(true, 'player');
                this.battle.playerCharge += this.battle.playerRatio * 0;
            } else if (this.battle.playerSlowed > 0) {
                this.battle.playerSlowed--;
                this.battle.playerCharge += this.battle.playerRatio * 3;
            } else this.battle.playerCharge += this.battle.playerRatio * 6;

            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;

            if (this.battle.playerCharge >= this.battle.chargeMax) {
                this.battle.playerCharge = 0;
                this.playerAttack();
            }

            if (this.battle.enemyCharge >= this.battle.chargeMax) {
                this.battle.enemyCharge = 0;
                this.enemyAttack();
            }
        }, 100);
    }

    updateComboUI() {
        this.battle.player.moves.forEach((move, i) => {
            if (move.combo) {
                if (move === this.battle.player.moves[this.battle.moveSelected]) {
                    if (this.battle.playerCombo.count == move.combo.length - 1) {
                        this.movesComboBalls[i].forEach(ball => ball.style.backgroundColor = 'revert-layer')
                    } else this.movesComboBalls[i][this.battle.playerCombo.count].style.backgroundColor = move.type.color;
                } else {
                    this.movesComboBalls[i].forEach(ball => ball.style.backgroundColor = 'revert-layer')
                } 
            }
        })
    }

    criticalChance(move) {
        const baseCriticalChance = 0.0625;
        const moveCriticalBonus = move.criticalBonus ?? 0;
        const criticalChance = baseCriticalChance + moveCriticalBonus;
        const critical = Math.random() < criticalChance ? 1.5 : 1;
        return critical;
    }

    playerAttack() {
        const lang = this.main.lang;
        const move = this.battle.player.moves[this.battle.moveSelected];
        let bonusPower = 0;

        if (move.payback) {
            this.playerTeam.forEach((pokemon, i) => { 
                if (pokemon.hp[0] == 0) bonusPower += move.payback;
            })
        }

        if (move.combo) {
            if (this.battle.playerCombo.moveName == move.name[0]) {
                this.battle.playerCombo.count++; 
                if (this.battle.playerCombo.count == move.combo.length) this.battle.playerCombo.count = 0;
            } else {
                this.battle.playerCombo = {
                    moveName: move.name[0],
                    count: 0
                }
            }
            bonusPower = move.combo[this.battle.playerCombo.count];
        } else if (this.battle.playerCombo.moveName != '') {
            this.battle.playerCombo = {
                moveName: '',
                count: 0
            }       
        }
        this.updateComboUI() 

        const critical = this.criticalChance(move);
        const damage = useMove(move, this.battle.player, this.battle.enemy, bonusPower, critical);
        let message;

        if (critical == 1) {
            message = (lang == 0) ? `${this.battle.player.name} uses ${move.name[lang].toUpperCase()}` : (lang == 1) ? `${this.battle.player.name} usa ${move.name[lang].toUpperCase()}` : `${this.battle.player.name} 使用了 ${move.name[lang].toUpperCase()}`;
        } else {
            message = (lang == 0) ? `${this.battle.player.name} uses ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : (lang == 1) ? `${this.battle.player.name} usa ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : `${this.battle.player.name} 使用了 ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}`;
            this.showStatusAnimation('critical', 'player')
        }

        this.addBattleInfoMessage(message);

        if (move.fakeOut && this.battle.enemy.hp[0] == this.battle.enemy.hp[1]) {
            this.showStatusAnimation('flinch', 'enemy')
            this.battle.enemyCharge = 0;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.slow) {
            this.showStatusAnimation('slow', 'enemy')
            this.battle.enemySlowed = move.slow;
        }

        if (move.autoStun) {
            this.showStatusAnimation('stun', 'player');
            this.setBattleBobAnimation(false, 'player'); 
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = move.autoStun;
        }
        
        if (move.stun && Math.random() < move.stunChance) {
            this.showStatusAnimation('stun', 'enemy');
            this.setBattleBobAnimation(false, 'enemy'); 

            this.battle.enemySlowed = 0;
            this.battle.enemyStuned = move.stun;
        }

        this.battle.enemy.changeHp(-damage);

        const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
        this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
        this.enemyPokemonHealthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (move.chargeBonus) {
            this.battle.playerCharge += move.chargeBonus;
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.pursuit) {
            this.battle.playerCharge += (this.battle.enemyCharge * 0.8);
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.restore) {
            this.battle.player.changeHp(Math.floor(damage * move.restore));
            const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
            this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.playerPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            if (this.battle.player.teamHpBar) {
                this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
                this.battle.player.teamHpBar.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            }
        }

        if (move.chargeOnKill && this.battle.enemy.hp[0] == 0) {
            this.battle.playerCharge += move.chargeOnKill;
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.restoreOnKill && this.battle.enemy.hp[0] == 0) {
            this.battle.player.changeHp(Math.floor(this.battle.player.hp[0] * move.restoreOnKill));
            const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
            this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.playerPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';

            if (this.battle.player.teamHpBar) {
                this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
                this.battle.player.teamHpBar.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            }
        }

        if (move.autoDamage) {
            let recoil = damage * move.autoDamage;
            if (recoil >= this.battle.player.hp[0]) recoil = this.battle.player.hp[0] - 1;

            this.battle.player.changeHp(-recoil);
            const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
            this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.playerPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
   
            if (this.battle.player.teamHpBar) {
                this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
                this.battle.player.teamHpBar.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
            }
        }

        if (move.gold) {
            let goldEarn =  Math.min(Math.ceil(damage * move.gold), move.goldMax); 
            this.main.player.changeGold(goldEarn);
            this.showGoldAnimation(goldEarn, true);
        }

        if (this.battle.enemy.hp[0] <= 0) this.endBattle("player");
    }

    enemyAttack() {
        const lang = this.main.lang;
        let move;
        let bonusPower = 0;

        // SELECCION DE ATAQUE
        if (this.battle.enemy.moves.length === 1) { move = this.battle.enemy.moves[0];
        } else {
            const randomIndex = Math.floor(Math.random() * this.battle.enemy.moves.length);
            move = this.battle.enemy.moves[randomIndex];
        }

        if (move.combo) {
            if (this.battle.enemyCombo.moveName == move.name[0]) {
                bonusPower = move.combo[this.battle.enemyCombo.count];
                this.battle.enemyCombo.count++;
                if (this.battle.enemyCombo.count == move.combo.length) this.battle.enemyCombo.count = 0;
            } else {
                this.battle.enemyCombo = {
                    moveName: move.name[0],
                    count: 0
                }
            }
        } else if (this.battle.enemyCombo.moveName != '') {
            this.battle.enemyCombo = {
                moveName: '',
                count: 0
            }
        }

        const critical = this.criticalChance(move);
        const damage = useMove(move, this.battle.enemy, this.battle.player, bonusPower, critical);
        let message;

         if (critical == 1) {
            message = (lang == 0) ? `${this.battle.enemy.name} uses ${move.name[lang].toUpperCase()}` : (lang == 1) ? `${this.battle.enemy.name} usa ${move.name[lang].toUpperCase()}` : `${this.battle.enemy.name} 使用了 ${move.name[lang].toUpperCase()}`;
        } else {
            message = (lang == 0) ? `${this.battle.enemy.name} uses ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : (lang == 1) ? `${this.battle.enemy.name} usa ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}` : `${this.battle.enemy.name} 使用了 ${move.name[lang].toUpperCase()} ${text.misc.gc[lang]}`;
            this.showStatusAnimation('critical', 'enemy')
        }

        this.addBattleInfoMessage(message);

        if (move.fakeOut && this.battle.player.hp[0] == this.battle.player.hp[1]) {
            this.showStatusAnimation('flinch', 'player');
            this.battle.playerCharge = 0;
            this.playerPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.playerCharge)}%`;
        }

        if (move.slow) {
            this.showStatusAnimation('slow', 'player');
            this.battle.playerSlowed = move.slow;
        }

        if (move.autoStun) {
            this.showStatusAnimation('stun', 'enemy');
            this.setBattleBobAnimation(false, 'enemy'); 
            this.battle.enemySlowed = 0;
            this.battle.enemyStuned = move.autoStun;
        }
        
        if (move.stun && Math.random() < move.stunChance) {
            this.showStatusAnimation('stun', 'player');
            this.setBattleBobAnimation(false, 'player'); 
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = move.stun;
        }

        this.battle.player.changeHp(-damage)

        const hpPercent = (this.battle.player.hp[0] / this.battle.player.hp[1]) * 100;
        this.playerPokemonHealthBarProgress.style.width = `${hpPercent}%`;
        this.playerPokemonHealthBarProgress.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';

        if (this.battle.player.teamHpBar) {
            this.battle.player.teamHpBar.style.width = `${Math.max(0, hpPercent)}%`;
            this.battle.player.teamHpBar.style.backgroundColor =
            hpPercent > 50 ? '#4CAF50' :
            hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (move.chargeBonus) {
            this.battle.enemyCharge += move.chargeBonus;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.pursuit) {
            this.battle.enemyCharge += (this.battle.playerCharge * 0.8);
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.restore) {
            this.battle.enemy.changeHp(Math.floor(damage * move.restore));
            const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
            this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.enemyPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
        }
        
        if (move.chargeOnKill && this.battle.player.hp[0] == 0) {
            this.battle.enemyCharge += move.chargeOnKill;
            this.enemyPokemonChargeBarProgress.style.width = `${Math.min(100, this.battle.enemyCharge)}%`;
        }

        if (move.restoreOnKill && this.battle.player.hp[0] == 0) {
            this.battle.enemy.changeHp(Math.floor(this.battle.enemy.hp[0] * move.restoreOnKill));
            const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
            this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.enemyPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (move.autoDamage) {
            let recoil = damage * move.autoDamage;
            if (recoil >= this.battle.enemy.hp[0]) recoil = this.battle.enemy.hp[0] - 1;

            this.battle.enemy.changeHp(-recoil);
            const hpPercent = (this.battle.enemy.hp[0] / this.battle.enemy.hp[1]) * 100;
            this.enemyPokemonHealthBarProgress.style.width = `${hpPercent}%`;
            this.enemyPokemonHealthBarProgress.style.backgroundColor =
                hpPercent > 50 ? '#4CAF50' :
                hpPercent > 20 ? '#FFC107' : '#F44336';
        }

        if (this.battle.player.hp[0] <= 0) this.endBattle("enemy");
    }

    endBattle(winner) {

        playSound('faint', 'effect');
        this.setBattleBobAnimation(false, 'player');
        this.setBattleBobAnimation(false, 'enemy');  
        clearInterval(this.battle.loop);
        this.battle.loop = null;

        if (winner === "player") {
            this.battle.enemyCharge = 0;
            this.enemyPokemonChargeBarProgress.style.width = '0%';
            this.playerPokemonChargeBarProgress.style.width =`${Math.min(100, this.battle.playerCharge)}%`

            this.removePokemonElements('enemy');
            this.animateSprite(this.battle.player, 'player', 'idle');
        } else {
            this.battle.playerCharge = 0;
            this.playerPokemonChargeBarProgress.style.width = '0%';
            this.enemyPokemonChargeBarProgress.style.width =`${Math.min(100, this.battle.enemyCharge)}%`

            this.playerTeam.forEach((pokemon, pos) => { 
                if (pokemon.hp[0] == 0)  {
                    this.teamPokemon[pos].style.filter = 'grayscale(100%)';
                    this.teamPokemon[pos].style.pointerEvents = 'none'
                }
            })

            this.removePokemonElements('player');
            this.animateSprite(this.battle.enemy, 'enemy', 'idle');

            this.checkDefeated();
        }
        if (winner === "player") {
            this.trainerTeam.shift();
            if (this.trainerTeam.length > 0) this.nextBattle();
            else {
                if (this.cb) this.cb();
                else {
                    if (this.streak != null) this.winData.open(false, false, this.streak);
                    else this.winData.open(this.isGym, this.badge);
                } 
            }
        }
    }

    nextBattle() {
        setTimeout(() => {
            this.enemy = this.generateTrainerPokemon();
            this.battle.enemy = this.enemy;
            this.displayPokemon(this.enemy, 'enemy');
        }, 800);
    }

    removePokemonElements(pos) {
        const target = pos === 'player' ? this.playerPokemon : this.enemyPokemon;

        if (pos === 'player') {
            for (let i = 0; i < 2; i++) {
                this.moves[i].style.display = 'none';
                this.movesComboContainer[i].style.display = 'none';
            }
        }

        const sprite = target.querySelector('.route-pokemon-animated-sprite');
        if (sprite) {
            target.removeChild(sprite);
        }

        const healthBarContainer = target.querySelector('.route-pokemon-health-bar-container');
        if (healthBarContainer) {
            target.removeChild(healthBarContainer);
        }

        const chargeBarContainer = target.querySelector('.route-pokemon-charge-bar-container');
        if (chargeBarContainer) {
            target.removeChild(chargeBarContainer);
        }
    }

    addBattleInfoMessage(messageText) {
        const messageElement = new Element(this.battleInfoContainer, { 
            className: 'route-battle-info-message', 
            text: messageText 
        }).element;

        messageElement.style.opacity = '1';
        messageElement.style.transition = 'opacity 0.5s';


        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.parentNode.removeChild(messageElement);
                }
            }, 500); 
        }, 2000);
    }

    setBattleBobAnimation(active, position) {
        if (position === 'player') {
            const playerSprite = this.playerPokemon.querySelector('.route-pokemon-animated-sprite');
            if (playerSprite) {
                if (active){
                    playerSprite.classList.add('route-pokemon-bob');
                    this.animateSprite(this.battle.player, 'player', 'attack');
                } 
                else {
                    playerSprite.classList.remove('route-pokemon-bob');
                    this.animateSprite(this.battle.player, 'player', 'idle');
                }
            }
        } else if (position === 'enemy') {
            const enemySprite = this.enemyPokemon.querySelector('.route-pokemon-animated-sprite');
            if (enemySprite) {
                if (active) {
                    enemySprite.classList.add('route-pokemon-bob-enemy');
                    this.animateSprite(this.battle.enemy, 'enemy', 'attack');
                }
                else {
                    enemySprite.classList.remove('route-pokemon-bob-enemy');
                    this.animateSprite(this.battle.enemy, 'enemy', 'idle');
                }
            }
        }
    }

    checkDefeated() {
        let defeat = true;
        this.playerTeam.forEach((pokemon, i) => { 
            if (pokemon.hp[0] > 0) {
                defeat = false;
            } 
        })
        if (defeat) this.loseData.open();
    }

    showGoldAnimation(amount) {
        playSound('purchase', 'ui')
        const goldPopup = document.createElement('div');
        goldPopup.className = 'stroke';
        goldPopup.innerText = `+${amount}${text.route.goldUnit[this.component.main.lang]}`;

        goldPopup.style.position = 'absolute';
        goldPopup.style.left = '40%';
        goldPopup.style.top = '35%';
        goldPopup.style.transform = 'translate(-50%, -40%)';
        goldPopup.style.fontSize = '12px';
        goldPopup.style.color = 'var(--yellow)';
        goldPopup.style.fontWeight = 'bold';
        goldPopup.style.pointerEvents = 'none';
        goldPopup.style.zIndex = 1000;
        goldPopup.style.opacity = 1;
        goldPopup.style.transition = 'transform 2s ease-out, opacity 2s ease-out';

        this.container.appendChild(goldPopup);

        this.container.appendChild(goldPopup);
        goldPopup.offsetHeight; 
        goldPopup.style.transform = 'translate(-50%, -150%)';
        goldPopup.style.opacity = 0;

        setTimeout(() => {
            if (goldPopup && goldPopup.parentNode) {
                goldPopup.parentNode.removeChild(goldPopup);
            }
        }, 2000);
    }

    showStatusAnimation(status, target) {
        const statusPopup = document.createElement('div');
        statusPopup.className = 'stroke';
        const lang = this.main.lang;

        statusPopup.style.position = 'absolute';
        statusPopup.style.top = '40%';
        if (target == 'player') statusPopup.style.left = '40%';
        else statusPopup.style.left = '60%';

        statusPopup.style.transform = 'translate(-50%, -50%)';
        statusPopup.style.fontSize = '10px';
        statusPopup.style.pointerEvents = 'none';
        statusPopup.style.zIndex = 1000;
        statusPopup.style.opacity = 1;
        statusPopup.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        statusPopup.style.fontWeight = 'bold';
       
        switch(status) {
            case 'slow':
                statusPopup.style.color = 'var(--blue)';
                statusPopup.innerText = text.route.statusSlowed[lang];
                break;
            case 'stun':
                statusPopup.style.color = 'var(--yellow)';
                statusPopup.innerText = text.route.statusStuned[lang];
                break;
            case 'flinch':
                statusPopup.style.color = 'var(--red)';
                statusPopup.innerText = text.route.statusFlinched[lang];
                break;
            case 'critical':
                statusPopup.style.color = 'var(--orangeRed)';
                statusPopup.innerText = '!';
        }

        this.container.appendChild(statusPopup);

        this.container.appendChild(statusPopup);
        statusPopup.offsetHeight; 
        statusPopup.style.transform = 'translate(-50%, -150%)';
        statusPopup.style.opacity = 0;

        setTimeout(() => {
            if (statusPopup && statusPopup.parentNode) {
                statusPopup.parentNode.removeChild(statusPopup);
            }
        }, 1000);
    }
}

class TrainerWin extends Popup {
    constructor(component) {
        super(400, 250);
        this.component = component;
        this.isGym = false;
        this.isBC = false;
        this.badge = null;
        this.streak = null;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;
    }

    render() {
        const lang = this.component.main.lang;
        this.promp = new Element(this.popup, { className: 'popup-route-capture-prompt' }).element;
        this.prompBottom = new Element(this.popup, { className: 'popup-gym-prompt-bottom' }).element;
        this.badgeImage = new Element(this.popup, { className: 'popup-gym-badge' }).element;

        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;
        this.buttonAccept.style.right = '50%';
        this.buttonAccept.style.transform = 'translate(50%)';
        this.buttonAccept.addEventListener('click', () => this.close());
    }

    update() {
        const lang = this.component.main.lang;
        this.badgeImage.innerHTML = "";
        if (this.streak != null) {

            const prompt = [`${text.route.victory[0]}${this.component.title}!`, `${text.route.victory[1]}${this.component.title}!`, `${text.route.victory[2]}${this.component.title}!`];
            this.promp.innerText = prompt[lang];

            this.streak++;
            let goldEarn = Math.floor(((3250 + (this.streak * 237)) * (this.streak + 1)) / 3.5);
            this.component.main.player.changeGold(goldEarn);

            const badge = document.createElement('img');
            badge.src = this.component.battle.player.image;
            badge.className = 'route-team-pokemon-sprite';
            this.badgeImage.appendChild(badge);

            let bottomPrompt = [
                `${text.route.streak[0]}${this.streak}`, 
                `${text.route.streak[1]}${this.streak}`,
                `${text.route.streak[2]}${this.streak}`
            ]

            if (this.streak > this.component.main.player.battleCenterRecord) {
                this.component.main.player.battleCenterRecord++;

                bottomPrompt = [
                    `${text.route.streak[0]}${this.streak}
                     ${text.route.newRecord[0]}`, 
                    `${text.route.streak[1]}${this.streak}   
                    ${text.route.newRecord[1]}`,
                    `${text.route.streak[2]}${this.streak}
                     ${text.route.newRecord[2]}`
                ]  

                for (let i = 5; i < 8; i++) {
                    if (!this.component.main.player.achievement[i].status) {
                        this.component.main.player.achievement[i].progress[0]++;
                        if (this.component.main.player.achievement[i].progress[0] == this.component.main.player.achievement[i].progress[1]) {
                            this.component.main.player.achievement[i].status = true;
                            this.component.main.player.unlockAchievement(i);
                        }
                    }
                }                  
            }
            this.prompBottom.innerText = bottomPrompt[lang];
        }
        else if (
        ['lorelei', 'bruno', 'agatha', 'lance', 'oak',
        this.component.main.trainers['rival0'].name[0].toLowerCase(),
        this.component.main.trainers['rival1'].name[0].toLowerCase(),
        this.component.main.trainers['rival2'].name[0].toLowerCase(),
        this.component.main.trainers['rival3'].name[0].toLowerCase(),
        this.component.main.trainers['rival4'].name[0].toLowerCase(),
        ].includes(this.isGym)) {
            let goldEarn = 50000;
            this.component.main.player.changeGold(goldEarn);

            const badge = document.createElement('img');
            badge.src = this.component.battle.player.image;
            badge.className = 'route-team-pokemon-sprite';
            this.badgeImage.appendChild(badge);

            const prompt = [
                `${this.isGym.toUpperCase()}${text.route.defeated[0]}`, 
                `¡${this.isGym.toUpperCase()}${text.route.defeated[1]}`,
                `${this.isGym.toUpperCase()}${text.route.defeated[2]}`
            ]
            const bottomPrompt = [
                `${text.route.earned[0]}${formatNumberWithCommas(goldEarn)}.`, 
                `${text.route.earned[1]}${formatNumberWithCommas(goldEarn)}.`,
                `${text.route.earned[2]}${formatNumberWithCommas(goldEarn)}。`
            ]
            this.promp.innerText = prompt[lang];
            this.prompBottom.innerText = bottomPrompt[lang];
        } 
        else if (this.isGym) {
            const leader = this.component.main.trainers[this.isGym];
            const leaderName = leader.name[lang] || leader.name[0];
            const prompt = [`${leaderName}${text.route.defeated[0]}`, `¡${leaderName}${text.route.defeated[1]}`, `${leaderName}${text.route.defeated[2]}`];
            let goldEarn;

            if (this.badge == 'apachan') {
                goldEarn = 250 * this.component.main.player.levelCap;
                this.component.main.player.updateApachanLevelCap();
            } else goldEarn = 815 + (this.component.main.player.badges.length * 3833) + (this.component.main.player.badges.length + 1 * 927) + (this.component.main.player.badges.length + 2 * 587)

            this.component.main.npcs[this.isGym].state = 1;
            if (this.badge != 'apachan') this.component.main.player.obtainBadge(this.badge);
            this.component.main.player.changeGold(goldEarn);

            const badge = document.createElement('img');
            if (this.badge == 'apachan') badge.src = `./assets/images/item/lithic-stone.png`;
            else badge.src = `./assets/images/badge/${leader.badge}.png`
            badge.className = 'route-team-pokemon-sprite';
            this.badgeImage.appendChild(badge);

            this.promp.innerText = prompt[lang];
            const bottomPrompt = [
                `${text.route.earned[0]}${formatNumberWithCommas(goldEarn)}. 
                ${text.route.maxLevel[0]}${this.component.main.player.levelCap}.  
                ${text.route.shopMore[0]}`, 
                `${text.route.earned[1]}${formatNumberWithCommas(goldEarn)}. 
                ${text.route.maxLevel[1]}${this.component.main.player.levelCap}. 
                ${text.route.shopMore[1]}`,
                `${text.route.earned[2]}${formatNumberWithCommas(goldEarn)}。 
                ${text.route.maxLevel[2]}${this.component.main.player.levelCap}。  
                ${text.route.shopMore[2]}`
            ]
            this.prompBottom.innerText = bottomPrompt[lang];
        } 
    }

    open(isGym, badge, streak = null) {
        super.open(); 
        this.isGym = isGym;
        this.badge = badge;
        this.streak = streak;
        this.update();
    }

    close() {
        this.component.close();
        super.close(); 
        if (this.streak != null) {
            this.component.main.gym.open('battleCenter', this.streak);
        }
        else if (['lorelei', 'bruno', 'agatha', 'lance', this.component.main.trainers['rival0'].name[0].toLowerCase()].includes(this.isGym)) {
            if (this.isGym == 'lorelei') this.component.main.gym.open('bruno');
            else if (this.isGym == 'bruno') this.component.main.gym.open('agatha');
            else if (this.isGym == 'agatha') this.component.main.gym.open('lance');
            else if (this.isGym == 'lance') this.component.main.gym.open('rival0');
            else {
                this.component.main.npcs['pokemonLeague'].state = 1;
                this.component.main.npcs['pokemonLeague'].name = this.component.main.trainers['rival0'].name;
                this.component.main.dialogue.startDialogue(this.component.main.npcs['pokemonLeague']);
            }
        } else if (['oak', 
            this.component.main.trainers['rival1'].name[0].toLowerCase(),
            this.component.main.trainers['rival2'].name[0].toLowerCase(),
            this.component.main.trainers['rival3'].name[0].toLowerCase(),
            this.component.main.trainers['rival4'].name[0].toLowerCase()].includes(this.isGym)) {
            if (this.isGym == this.component.main.trainers['rival1'].name[0].toLowerCase()) this.component.main.gym.open('rival2');
            else if (this.isGym == this.component.main.trainers['rival2'].name[0].toLowerCase()) this.component.main.gym.open('rival3');
            else if (this.isGym == this.component.main.trainers['rival3'].name[0].toLowerCase()) this.component.main.gym.open('rival4');
            else if (this.isGym == this.component.main.trainers['rival4'].name[0].toLowerCase()) this.component.main.gym.open('oak');
            else {
                this.component.main.npcs['pokemonLeague'].state = 4;
                this.component.main.npcs['pokemonLeague'].name = ['Oak', 'Oak', '大木博士'];
                this.component.main.dialogue.startDialogue(this.component.main.npcs['pokemonLeague']);
            }
        } else if (this.isGym) this.component.main.dialogue.startDialogue(this.component.main.npcs[this.isGym]);
    }
}

class TrainerLose extends Popup {
    constructor(component) {
        super(400, 300);
        this.component = component;
        this.render();

        this.popup.style.outline = '5px solid var(--white)';
        this.popup.style.backgroundImage = 'url("./assets/images/textures/texture8.png")';
        this.popup.style.border =  'none';
        this.popup.style.boxShadow = '0 0 15px black, 0 0 25px black, inset 1px 1px 2px black, inset -1px -1px 2px black'
        this.popup.style.backgroundColor = `var(--white)`;
    }

    render() {
        const lang = this.component.main.lang;
        this.promp = new Element(this.popup, { className: 'popup-route-capture-prompt' }).element;
        this.prompBottom = new Element(this.popup, { className: 'popup-route-capture-prompt-bottom ' }).element;

        this.buttonAccept = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.misc.accept[lang] }).element;
        this.buttonAccept.style.right = '50%';
        this.buttonAccept.style.transform = 'translate(50%)';
        this.buttonAccept.addEventListener('click', () => this.close());
        this.buttonAccept.addEventListener('mouseover', () => playSound('hover0', 'ui'));

        this.sprite = new Element(this.popup, { className: 'popup-route-capture-pokemon-sprite' }).element;
        this.sprite.style.top = '45%';
        const sprite = document.createElement('img');
        sprite.src = './assets/images/misc/ghost.png';
        sprite.className = 'route-team-pokemon-sprite';
        this.sprite.appendChild(sprite);
    }

    update() {
        const lang = this.component.main.lang;

        this.promp.innerText = text.route.defeatedPrompt[lang];
        this.prompBottom.innerText = text.route.defeatedPromptBottom[lang];
    }

    open() {
        super.open(); 
        this.update();
    }

    close() {
        playSound('click1', 'ui');
        this.component.main.player.potion.charge[0] = this.component.main.player.potion.charge[1];
        this.component.main.team.pokemon.forEach(pokemon => {
            pokemon.hp[0] = pokemon.hp[1];
        });

        this.component.main.location.loadLocation(this.component.main.player.savedLocation);
        this.component.close(true);
        super.close();
    }
}