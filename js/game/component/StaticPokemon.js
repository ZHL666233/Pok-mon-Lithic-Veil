import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { pokemon } from '../data/pokemon/pokemonData.js';
import { Pokemon } from '../manager/Pokemon.js'; 
import { useMove } from '../manager/damageCalculator.js';
import { text } from '../../file/text.js';
import { playSound, crySound } from '../../file/audio.js';

export class StaticPokemon extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.data;
        this.enemy;
        this.spriteInterval = { player: null, enemy: null };
        this.cb;

        this.denySwap = false;
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

        this.winData = new StaticWin(this);
        this.loseData = new StaticLose(this);
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
        this.container.style.imageRendering = 'pixelated';
        
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
        }

        this.teamPokemonContainer = new Element(this.container, { className: 'route-team-pokemon-container' }).element;
        this.teamPokemon = [];

        this.potionButton = new Element(this.container, { className: 'route-potion-button' }).element;
        this.potionAmount = new Element(this.potionButton, { className: 'route-potion-amount stroke' }).element;
        this.potionButton.addEventListener('click', () => { this.usePotion() });
        this.potionButton.addEventListener('mouseenter', () => { playSound('hover5', 'ui') });

        this.battleInfoContainer = new Element(this.container, { className: 'route-battle-info-container' }).element;
    }

    open(staticData) {
        super.open(true); 
        this.main.menu.available = false;
        this.data = staticData;
        this.battleInfoContainer.innerHTML = '';

        this.update();
    }
 
    update() {
        this.title = this.data.title[this.main.lang].toUpperCase();
        this.name.innerText = this.title;
        this.container.style.backgroundImage = `url("${this.data.background}")`;

        this.teamPokemonContainer.innerHTML = '';
        this.teamPokemon = [];

        for (let i = 0; i < 2; i++) {
            this.moves[i].style.display = 'none';
            this.movesComboContainer[i].style.display = 'none';
        }

        this.main.team.pokemon.forEach((pokemon, i) => { 
            this.updateTeamPokemon(pokemon, i);   
        })

        this.enemy = this.generateStaticPokemon();
        this.battle.enemy = this.enemy;
        this.displayPokemon(this.enemy, 'enemy');
        this.displayPotion();
    }   

    close(mute = false) {
        super.close();
        if (!mute) playSound('close', 'ui');
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

        this.main.menu.available = true;
    }

    usePotion = () => {
        if (this.battle.player == null || this.battle.player.hp[0] == 0) return;
        playSound('potion', 'effect');
        const lang = this.main.lang;
        this.main.player.potion.charge[0]--;
        this.battle.player.changeHp(this.main.player.potion.heal);
        this.displayPotion();

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
        if (this.battle.player.hp[0] <= 0) this.endBattle("enemy");

        this.addBattleInfoMessage(`${this.battle.player.name} +${this.main.player.potion.heal} ${text.stats.hp[lang].toUpperCase()}`);
    }

    displayPotion = () => {
        if (this.main.player.potion.charge[0] == 0) {
            this.potionButton.style.pointerEvents = 'none';
        } else this.potionButton.style.pointerEvents = 'revert-layer';

        this.potionButton.style.backgroundImage = `url("${this.main.inventory.item['potion'].image}")`;
        this.potionAmount.innerText = `x${this.main.player.potion.charge[0]}`;
    }

    updateTeamPokemon(pokemon, pos) {
        this.teamPokemon[pos] = new Element(this.teamPokemonContainer, { className: 'route-team-pokemon' }).element;
        this.teamPokemon[pos].name = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-name stroke', text: pokemon.name }).element;
        this.teamPokemon[pos].level = new Element(this.teamPokemon[pos], { className: 'route-team-pokemon-level stroke', text: `Lv. ${pokemon.lvl}` }).element;

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

        this.teamPokemon[pos].addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
        this.teamPokemon[pos].addEventListener('click', () => { 
            if (pokemon.hp[0] <= 0 || this.denySwap || this.battle.player === pokemon) return;

            this.removePokemonElements('player');

            this.battle.player = pokemon;
            this.battle.player.teamHpBar = this.teamPokemon[pos].healthBarProgress;
            this.battle.player.teamExpBar = this.teamPokemon[pos].expBarProgress;
            this.battle.playerSlowed = 0;
            this.battle.playerStuned = 0;

            this.displayPokemon(pokemon, 'player');
        });
    }

    generateStaticPokemon() {
        const level = this.data.level;
        const specie = pokemon[this.data.pokemon];
        const nature = this.data.nature || null;
        const ivs = this.data.ivs || null;
        const moves = this.data.moves || null;

        let staticPokemon = new Pokemon(specie, level, nature, ivs, moves);
        if (this.data.shiny) staticPokemon.setShiny();

        this.main.pokedex.seePokemon(specie.n);
        return staticPokemon;
    }

    displayPokemon(pokemon, pos, mode = 'idle') {
        if (!this.isOpen) return;
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
            this.addBattleInfoMessage(`${pokemon.name} Lv. ${pokemon.lvl}`);
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
            this.main.team.pokemon.forEach((pokemon, i) => { 
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
        this.updateComboUI();

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
        if (this.battle.enemy.hp[0] > 0) {
            if (move.capture) this.tryCapture();          
        }
    }

    enemyAttack() {
        const lang = this.main.lang;
        let move;
        let bonusPower = 0;

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

            this.updateEggs();

            const goldBase = this.battle.enemy.specie.gold;
            const goldMax = Math.floor(goldBase * 2.15); 
            const mysticGoldBonus = this.main.player.mysticCharm ? 1.3 : 1;
            const amuletBonus = this.main.player.amuletCoin ? 2 : 1;

            let goldEarn = Math.floor(Math.random() * (goldMax - goldBase + 1)) + goldBase + Math.ceil(this.battle.enemy.lvl / 3);
            goldEarn = Math.floor(goldEarn * amuletBonus * mysticGoldBonus);
            if (this.travel == undefined) {
                goldEarn += Math.floor(1.5 * (this.main.player.badges.length + 1));
                goldEarn = Math.floor(goldEarn * 1.2);
            }

            this.main.player.changeGold(goldEarn);
            this.showGoldAnimation(goldEarn);

            const expBase = Math.floor(this.battle.enemy.specie.exp * this.battle.enemy.lvl * 0.3) + 10;
            const charmBonus = this.main.player.expCharm ? 1.5 : 1;
            const mysticExpBonus = this.main.player.mysticCharm ? 1.3 : 1;
            let expEarn = Math.ceil(expBase * charmBonus * mysticExpBonus);

            this.battle.player.exp[0] += expEarn;
            if (this.battle.player.exp[0] > this.battle.player.exp[1]) this.battle.player.exp[0] = this.battle.player.exp[1];
            const expPercent = (this.battle.player.exp[0] / this.battle.player.exp[1]) * 100;
            this.battle.player.teamExpBar.style.width = `${Math.max(0, expPercent)}%`;
            this.battle.player.teamExpBar.style.backgroundColor = expPercent === 100 ? 'var(--yellow)' : 'var(--blue)';
            
            this.removePokemonElements('enemy');
            this.animateSprite(this.battle.player, 'player', 'idle');
            this.winData.open();
        } else {
            this.battle.playerCharge = 0;
            this.playerPokemonChargeBarProgress.style.width = '0%';
            this.enemyPokemonChargeBarProgress.style.width =`${Math.min(100, this.battle.enemyCharge)}%`

            this.main.team.pokemon.forEach((pokemon, pos) => { 
                if (pokemon.hp[0] == 0)  {
                    this.teamPokemon[pos].style.filter = 'grayscale(100%)';
                    this.teamPokemon[pos].style.pointerEvents = 'none'
                }
            })

            this.removePokemonElements('player');
            this.animateSprite(this.battle.enemy, 'enemy', 'idle');

            this.checkDefeated();
        }
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

    updateEggs() {
        let inventory = this.main.inventory.item;

        Object.keys(inventory).forEach(key => {
            if (inventory[key]?.use?.effect === 'egg') {
                if (inventory[key].use.hatch[0] < inventory[key].use.hatch[1]) inventory[key].use.hatch[0]++;
            }
        })
    }

    checkDefeated() {
        let defeat = true;
        this.main.team.pokemon.forEach((pokemon, i) => { 
            if (pokemon.hp[0] > 0) {
                defeat = false;
            } 
        })
        if (defeat) this.loseData.open();
    }
  
}

class StaticWin extends Popup {
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
        sprite.src = './assets/images/misc/egg.png';
        sprite.className = 'route-team-pokemon-sprite';
        this.sprite.appendChild(sprite);
    }

    update() {
        const lang = this.component.main.lang;

        const promptText = [
            `${this.component.data.pokemon.toUpperCase()} defeated!`,
            `¡${this.component.data.pokemon.toUpperCase()} derrotado!`
        ];

        const promptBottomText = [
            `A ${this.component.data.pokemon.toUpperCase()} egg lies on the ground.`, 
            `Un huevo de ${this.component.data.pokemon.toUpperCase()} reposa en el suelo.`
        ]

        this.promp.innerText = promptText[lang];
        this.prompBottom.innerText = promptBottomText[lang];
    }

    open(pokemon) {
        super.open(); 
        this.pokemon = pokemon;
        this.update();
    }

    close() {
        playSound('click1', 'ui');
        this.component.data.cb();
        this.component.close(true);
        super.close(); 
    }
}

class StaticLose extends Popup {
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