import { Element } from '../../utils/Element.js';
import { Window } from '../../utils/Window.js';
import { Popup } from '../../utils/Popup.js';
import { text, formatNumberWithCommas } from '../../file/text.js';
import { item } from '../data/item/itemData.js';
import { playSound } from '../../file/audio.js';

const TITLE = ['CASINO', 'CASINO', '赌场'];
const GAME = ['blackjack', 'roulette', 'voltorb', 'slot'];
const BET_VALUES = [5, 10, 20, 50, 100, 200, 500, 1000]

export class Casino extends Window {
    constructor(main) {
        super(null, 600, 450);
        this.main = main;
        this.selectedBet = 0;
        this.blackjackIsOpen = false;
        this.rouletteIsOpen = false;
        this.voltorbIsOpen = false;
        this.slotIsOpen = false;

        this.segments = [
            { color: '#deaa10', label: 'x4', multiplier: 4 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#DC3545', label: 'x3', multiplier: 3 },
            { color: '#007BFF', label: 'x1', multiplier: 1 },
            { color: '#28A745', label: 'x2', multiplier: 2 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#6610f2', label: 'x5', multiplier: 5 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#28A745', label: 'x2', multiplier: 2 },
            { color: '#007BFF', label: 'x1', multiplier: 1 },
            { color: '#DC3545', label: 'x3', multiplier: 3 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#deaa10', label: 'x4', multiplier: 4 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#DC3545', label: 'x3', multiplier: 3 },
            { color: '#007BFF', label: 'x1', multiplier: 1 },
            { color: '#28A745', label: 'x2', multiplier: 2 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#6610f2', label: 'x5', multiplier: 5 },
            { color: '#000000', label: 'x0', multiplier: 0 },
            { color: '#28A745', label: 'x2', multiplier: 2 },
            { color: '#007BFF', label: 'x1', multiplier: 1 },
            { color: '#DC3545', label: 'x3', multiplier: 3 },
            { color: '#000000', label: 'x0', multiplier: 0 },
        ];
        this.isSpinning = false;

        this.render();

        this.blackjackEndGameInfo = new BlackjackEndGameInfo(this);
    }

    render() {
        const lang = this.main.lang;

    	this.title = TITLE[this.main.lang];
        this.name.innerText = this.title;

    	this.window.style.background = '#000';
        this.scene.style.boxShadow = 'inset 0px 0px 0px';
        this.container.style.background = '#888';
        this.container.style.top = '1px';
        this.container.style.left = '1px';
        this.container.style.right = '1px';
        this.container.style.bottom = '0px';
        this.container.style.overflow = 'hidden';
        this.container.style.backgroundSize = 'cover';
        this.container.style.backgroundPosition = 'bottom';
        this.container.style.backgroundImage = 'url("./assets/images/background/casino.png")';

        this.gameBoxContainer = new Element(this.container, { className: 'casino-game-box-container' } ).element;
        this.gameBox = {}

        GAME.forEach(label => {
            this.gameBox[label] = new Element(this.gameBoxContainer, { className: 'casino-game-box super-stroke' } ).element;
            this.gameBox[label].innerText = text.casino.game[label][lang].toUpperCase();
            this.gameBox[label].style.backgroundImage = `url("./assets/images/misc/${label}.png")`
            this.gameBox[label].addEventListener('click', () => { this.buttonHandler(label) });
            this.gameBox[label].addEventListener('mouseenter', () => { playSound('hover4', 'ui') });
        })

        this.betContainer = new Element(this.container, { className: 'casino-bet-container' } ).element;
        this.betLabel = new Element(this.betContainer, { className: 'casino-bet-label stroke', text: text.casino.betSelection[lang].toUpperCase() } ).element;
        this.betPrev = new Element(this.betContainer, { className: 'casino-bet-prev stroke', text: '<' } ).element;
        this.betNext = new Element(this.betContainer, { className: 'casino-bet-next stroke', text: '>' } ).element;
        this.betValue = new Element(this.betContainer, { className: 'casino-bet-value stroke' } ).element;
        this.betError = new Element(this.betContainer, { className: 'casino-bet-error', text: text.casino.notEnoughTokens[lang] } ).element;

        this.betPrev.addEventListener('click', () => { this.changeBet(-1) })
        this.betNext.addEventListener('click', () => { this.changeBet(1) })
        this.betPrev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
        this.betNext.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

        this.blackjackRender();
        this.rouletteRender();   
    }

    blackjackRender() {
        const lang = this.main.lang;

        this.blackjackScene = new Element(this.container, { className: 'casino-game-scene' } ).element;

        this.blackjackGameBet = new Element(this.blackjackScene, { className: 'blackjack-game-bet stroke' } ).element;
        this.blackjackGameDrawCard = new Element(this.blackjackScene, { className: 'blackjack-game-draw-card stroke', text: text.casino.blackjack.hit[lang].toUpperCase() } ).element;
        this.blackjackGameStand = new Element(this.blackjackScene, { className: 'blackjack-game-stand stroke', text: text.casino.blackjack.stand[lang].toUpperCase() } ).element;
        this.blackjackGamePlayerScore = new Element(this.blackjackScene, { className: 'blackjack-game-player-score stroke' } ).element;
        this.blackjackGameDealerScore = new Element(this.blackjackScene, { className: 'blackjack-game-dealer-score stroke' } ).element;

        this.blackjackPlayerCards = new Element(this.blackjackScene, { className: 'blackjack-player-cards' }).element;
        this.blackjackDealerCards = new Element(this.blackjackScene, { className: 'blackjack-dealer-cards' }).element;

        this.blackjackGameDrawCard.addEventListener('click', () => { this.hit() });
        this.blackjackGameStand.addEventListener('click', () => { this.stand() });
        this.blackjackGameDrawCard.addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
        this.blackjackGameStand.addEventListener('mouseenter', () => { playSound('hover1', 'ui') }); 
    }

    rouletteRender() {
        const lang = this.main.lang;

        this.rouletteScene = new Element(this.container, { className: 'casino-game-scene' }).element;

        this.rouletteGameBet = new Element(this.rouletteScene, { className: 'roulette-game-bet stroke' } ).element;

        this.rouletteGameSpin = new Element(this.rouletteScene, { className: 'roulette-game-spin stroke', text: text.casino.spin[lang].toUpperCase() }).element;
        this.rouletteGameSpin.addEventListener('click', () => this.spinRoulette());
        this.rouletteGameSpin.addEventListener('mouseenter', () => { playSound('hover1', 'ui'); });

        this.rouletteContainer = new Element(this.rouletteScene, { className: 'roulette-container' }).element;
        this.roulette = new Element(this.rouletteContainer, { className: 'roulette' }).element;

        this.rouletteIndicator = new Element(this.rouletteScene, { className: 'roulette-indicator' }).element;

        this.segments.forEach((seg, i) => {
            const el = new Element(this.roulette, {
              className: 'roulette-segment',
              text: seg.label
            }).element;

            el.style.setProperty('--i', i);
        });

        const degreesPerSegment = 360 / this.segments.length;
        const gradientParts = this.segments.map((seg, i) => {
            const start = i * degreesPerSegment;
            const end = start + degreesPerSegment;
            return `${seg.color} ${start}deg ${end}deg`;
        });
        const gradientString = `conic-gradient(from -90deg, ${gradientParts.join(', ')})`;
        this.roulette.style.background = gradientString;

        this.rouletteGameLastResult = [];
        this.rouletteGameLastResultLabel = new Element(this.rouletteScene, { className: 'roulette-game-last-result-label stroke', text: text.casino.latestResults[lang].toUpperCase() }).element;
        this.rouletteGameLastResultContainer = new Element(this.rouletteScene, { className: 'roulette-game-last-result-container stroke' }).element;
        this.rouletteGameResult = new Element(this.rouletteScene, { className: 'roulette-game-result stroke' }).element;
    }

	open() {
        playSound('buttonB', 'ui');
        this.main.goldUI.style.display = 'block';
        this.main.tokenUI.style.display = 'block';

        super.open(true); 
        this.main.menu.available = false;
        this.update();
    }

    close() {
        playSound('close', 'ui');
        this.main.goldUI.style.display = 'none';
        this.main.tokenUI.style.display = 'none';
        super.close();

        if (this.blackjackIsOpen) this.closeBlackjack();
        if (this.rouletteIsOpen) this.closeRoulette();

        this.main.menu.available = true;
    }

    buttonHandler(btn) {
        if (!this.main.inventory.searchItem('token') || this.main.inventory.searchItem('token').amount < BET_VALUES[this.selectedBet]) {
            playSound('pop1', 'ui');
            return;
        }

        playSound('click1', 'ui');
        switch(btn) {
            case 'blackjack': 
                this.openBlackjack();
                break;
            case 'roulette':
                this.openRoulette();
                break;
        }
    }

    update() {
        const lang = this.main.lang;

        this.main.goldUI.innerText = `$${formatNumberWithCommas(this.main.player.gold)}`;  
        this.main.tokenUI.innerText = (this.main.inventory.searchItem('token')) 
        ? `${this.main.inventory.searchItem('token').amount} ${text.pokeMart.tokens[lang]}` 
        : `0 ${text.pokeMart.tokens[lang]}`; 
         
        this.updateBet();
    }

    changeBet(dir) {
        playSound('option', 'ui');
        this.selectedBet += dir;

        if (this.selectedBet == BET_VALUES.length) this.selectedBet = 0;
        else if (this.selectedBet < 0) this.selectedBet = BET_VALUES.length - 1;

        this.updateBet();
    }

    updateBet() {
        const lang = this.main.lang;
        this.betValue.innerText = `${BET_VALUES[this.selectedBet]} ${text.pokeMart.tokens[lang]}`;

        if (!this.main.inventory.searchItem('token'))  this.betError.style.display = 'block';
        else if (this.main.inventory.searchItem('token').amount >= BET_VALUES[this.selectedBet]) {
            this.betError.style.display = 'none';
        } else this.betError.style.display = 'block';    
    }

    openRoulette() {
        const lang = this.main.lang;
        this.rouletteIsOpen = true;
        this.rouletteScene.style.display = 'block';
        this.rouletteGameBet.innerText = `${text.casino.bet[lang]}: ${BET_VALUES[this.selectedBet]}`;
    }

    closeRoulette() {
        playSound('close', 'ui');
        this.rouletteIsOpen = false;
        this.rouletteScene.style.display = 'none';
    }

    pickSegment() {
        let weights = {};

        if (this.main.player.casinoHack && this.main.team.isTypeInTeam('psychic')) {
            weights = {
                'x0': 0.33,
                'x1': 0.29,
                'x2': 0.16,
                'x3': 0.09,
                'x4': 0.07,
                'x5': 0.06
            }
        } else {
            weights = {
                'x0': 0.48,
                'x1': 0.26,
                'x2': 0.13,
                'x3': 0.06,
                'x4': 0.04,
                'x5': 0.03
            };
        }
        
        const rand = Math.random();
        let cumulative = 0;

        for (const seg of this.segments) {
            const weight = weights[seg.label] || 0;
            cumulative += weight;
            if (rand < cumulative) return seg;
        }

        return this.segments.find(s => s.label === 'x0');
    }

    updateRouletteUI(result) {
        const lang = this.main.lang;

        this.rouletteGameResult.innerText = `+${(result.multiplier * BET_VALUES[this.selectedBet])} ${text.pokeMart.tokens[lang]}`;
        this.rouletteGameLastResult.unshift(result);

        if (this.rouletteGameLastResult.length > 8) this.rouletteGameLastResult.pop();
        
        this.rouletteGameLastResultContainer.innerHTML = '';
        this.rouletteGameLastResult.forEach(r => {
            const el = new Element(this.rouletteGameLastResultContainer, {
                className: 'roulette-game-last-result',
                text: r.label
            }).element;

            el.style.backgroundColor = r.color;
        });
        this.update();
    }

    spinRoulette() {
        const bet = BET_VALUES[this.selectedBet];

        if (this.main.inventory.searchItem('token').amount < bet) {
            playSound('pop1', 'ui')
            return
        }
        if (this.isSpinning) return;

        playSound('click1', 'ui')
        playSound('roulette1', 'ui')

        this.isSpinning = true;
        this.main.inventory.removeItem(this.main.inventory.searchItem('token'), bet);
        this.update();

        const selected = this.pickSegment();
        const segmentIndex = this.segments.findIndex(s => s.label === selected.label);
        const degreesPerSegment = 360 / this.segments.length;

        const extraSpins = 2 * 360;
        const targetAngle = (this.segments.length - segmentIndex) * degreesPerSegment - (degreesPerSegment / 2);
        const finalAngle = extraSpins + targetAngle;

        const duration = 2.7;
        this.roulette.style.transition = `none`;
        this.roulette.style.transform = `rotate(0deg)`; 

        setTimeout(() => {
            this.roulette.style.transition = `transform ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1)`;
            this.roulette.style.transform = `rotate(${finalAngle}deg)`;
        }, 50);

        setTimeout(() => {             
            this.updateRouletteUI(selected);
            this.isSpinning = false;
            if (selected.multiplier == 0) playSound('faint', 'ui');
            else {
                playSound('obtain', 'ui');
                this.main.inventory.addItem(item.key.token, (bet * selected.multiplier));
                if (!this.main.player.achievement[34].status) {
                    this.main.player.achievement[34].progress[0] += (bet * selected.multiplier);
                    if (this.main.player.achievement[34].progress[0] >= this.main.player.achievement[34].progress[1]) {
                        this.main.player.achievement[34].status = true;
                        this.main.player.unlockAchievement(34);
                    }
                };
                if (!this.main.player.achievement[36].status) {
                    this.main.player.achievement[36].progress[0] += (bet * selected.multiplier);
                    if (this.main.player.achievement[36].progress[0] >= this.main.player.achievement[36].progress[1]) {
                        this.main.player.achievement[36].status = true;
                        this.main.player.unlockAchievement(36);
                    }
                };
                if (!this.main.player.achievement[38].status) {
                    this.main.player.achievement[38].progress[0] += (bet * selected.multiplier);
                    if (this.main.player.achievement[38].progress[0] >= this.main.player.achievement[38].progress[1]) {
                        this.main.player.achievement[38].status = true;
                        this.main.player.unlockAchievement(38);
                    }
                };
            }
            this.update();
        }, duration * 1000 + 50);
    }

    openBlackjack = () => {
        const lang = this.main.lang;
        this.blackjackIsOpen = true;
        this.blackjackScene.style.display = 'block';
        this.blackjackGameBet.innerText = `${text.casino.bet[lang]}: ${BET_VALUES[this.selectedBet]}`;
        this.startBlackjack();
    }

    closeBlackjack = () => {
        playSound('close', 'ui');
        this.blackjackIsOpen = false;
        this.blackjackScene.style.display = 'none';
    }

    startBlackjack = async () => {
        const lang = this.main.lang;
        playSound('click1', 'ui');
        this.closeButton.style.pointerEvents = 'none';
        this.blackjackGameDrawCard.style.pointerEvents = 'none';
        this.blackjackGameStand.style.pointerEvents = 'none';
        this.main.inventory.removeItem(this.main.inventory.searchItem('token'), BET_VALUES[this.selectedBet]);

        this.blackjackGameDealerScore.innerText = `${text.casino.blackjack.dealer[lang]}:`;
        this.blackjackGamePlayerScore.innerText = `${this.main.player.name}:`;

        this.playerHand = [];
        this.dealerHand = [];
        this.blackjackPlayerCards.innerHTML = '';
        this.blackjackDealerCards.innerHTML = '';

        const card1 = this.drawCard();
        this.playerHand.push(card1);
        await this.animateCardDraw(card1, this.blackjackPlayerCards);

        const card2 = this.drawCard();
        this.dealerHand.push(card2);
        await this.animateCardDraw(card2, this.blackjackDealerCards);

        const card3 = this.drawCard();
        this.playerHand.push(card3);
        await this.animateCardDraw(card3, this.blackjackPlayerCards);

        const card4 = this.drawCard();
        this.dealerHand.push(card4);
        await this.animateCardDraw(card4, this.blackjackDealerCards, false, true);

        this.updateBlackjackUI();
        this.update();

        this.closeButton.style.pointerEvents = 'all';
        this.blackjackGameDrawCard.style.pointerEvents = 'all';
        this.blackjackGameStand.style.pointerEvents = 'all';
    }

    formatCardValue(card) {
        return card === 11 ? 'A' : card;
    }

    updateBlackjackUI(showDealer = false) {
        const lang = this.main.lang;
        const playerCalc = this.calcWithAlternatives(this.playerHand);
        const dealerCalc = this.calcWithAlternatives(this.dealerHand);

        this.blackjackPlayerCards.innerHTML = '';
        this.playerHand.forEach(card => {
            const img = document.createElement('img');
            img.src = `./assets/images/blackjack/card-${card}.png`;
            img.className = 'blackjack-card';
            this.blackjackPlayerCards.appendChild(img);
        });

        this.blackjackDealerCards.innerHTML = '';
        this.dealerHand.forEach((card, i) => {
            const img = document.createElement('img');
            img.src = showDealer || i === 0 ? `./assets/images/blackjack/card-${card}.png` : `./assets/images/blackjack/card-back.png`;
            img.className = 'blackjack-card';
            this.blackjackDealerCards.appendChild(img);
        });

        const playerCardsStr = this.playerHand.map(this.formatCardValue).join(', ');
        const dealerCardsStr = this.dealerHand.map(this.formatCardValue).join(', ');

        let playerScoreText = `${this.main.player.name}: ${playerCardsStr} (Total: ${playerCalc.main}`;
        if (playerCalc.alternative !== null) {
            playerScoreText += ` ${text.misc.or[lang]} ${playerCalc.alternative}`;
        }
        playerScoreText += ')';

        let dealerScoreText = `${text.casino.blackjack.dealer[lang]}: ${showDealer ? dealerCardsStr + ' (Total: ' + dealerCalc.main + (dealerCalc.alternative !== null ? ` ${text.misc.or[lang]} ${dealerCalc.alternative}` : '') + ')' : this.formatCardValue(this.dealerHand[0]) + ', ?'}`;

        this.blackjackGamePlayerScore.innerText = playerScoreText;
        this.blackjackGameDealerScore.innerText = dealerScoreText;
    }
    
    drawCard() {
        playSound('card', 'ui'); 
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
        return values[Math.floor(Math.random() * values.length)];
    }

    calc(hand) {
        let sum = hand.reduce((a, b) => a + b, 0);
        let aces = hand.filter(c => c === 11).length;
        while (sum > 21 && aces--) sum -= 10;
        return sum;
    }

    calcWithAlternatives(hand) {
        let total = 0;
        let aceCount = 0;

        hand.forEach(card => {
            if (card === 11) { // As
                aceCount++;
                total += 1;
            } else {
                total += card;
            }
        });

        let alternative = null;
        for (let i = 1; i <= aceCount; i++) {
            const altTotal = total + i * 10;
            if (altTotal <= 21) {
                alternative = altTotal;
            }
        }

        return {
            main: total,
            alternative: alternative === total ? null : alternative,
        };
    }

    async hit() {
        playSound('click1', 'ui')

        this.blackjackGameDrawCard.style.pointerEvents = 'none';
        this.blackjackGameStand.style.pointerEvents = 'none';
        this.closeButton.style.pointerEvents = 'none';

        const card = this.drawCard();
        this.playerHand.push(card);

        await this.animateCardDraw(card, this.blackjackPlayerCards);

        this.updateBlackjackUI();

        if (this.calc(this.playerHand) > 21) {
            this.blackjackEndGameInfo.open('lose');
        } else {
            this.blackjackGameDrawCard.style.pointerEvents = 'all';
            this.blackjackGameStand.style.pointerEvents = 'all';
            this.closeButton.style.pointerEvents = 'all';
        }
    }

    async stand() {
        playSound('click1', 'ui')
        this.blackjackGameDrawCard.style.pointerEvents = 'none';
        this.blackjackGameStand.style.pointerEvents = 'none';
        this.closeButton.style.pointerEvents = 'none';

        this.updateBlackjackUI(true);
        await new Promise(resolve => setTimeout(resolve, 600));

        while (this.calc(this.dealerHand) < 17 || (this.calc(this.dealerHand) === 17 && this.hasSoft17(this.dealerHand))) {
            const newCard = this.drawCard();
            this.dealerHand.push(newCard);
            await this.animateCardDraw(newCard, this.blackjackDealerCards, true);
            this.updateBlackjackUI(true);
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        const playerTotal = this.calc(this.playerHand);
        const dealerTotal = this.calc(this.dealerHand);

        if (dealerTotal > 21 || playerTotal > dealerTotal) {
            this.blackjackEndGameInfo.open('win');  
        } else if (dealerTotal === playerTotal) {
            this.blackjackEndGameInfo.open('draw');
        } else {
            this.blackjackEndGameInfo.open('lose');
        }

        this.update();
    }

    hasSoft17(hand) {
        let sum = hand.reduce((a, b) => a + b, 0);
        return sum === 17 && hand.includes(11);
    }

    animateCardDraw(cardValue, container, forceVisible = false, keepInvisible = false) {
        return new Promise(resolve => {
            const img = document.createElement('img');
            img.src = forceVisible
                ? `./assets/images/blackjack/card-${cardValue}.png`
                : `./assets/images/blackjack/card-back.png`;
            img.className = 'blackjack-card blackjack-card-animating';

            container.appendChild(img);
            void img.offsetWidth;
            img.classList.add('animate-in');

            img.addEventListener('animationend', () => {
                if (!forceVisible && !keepInvisible) {
                    img.src = `./assets/images/blackjack/card-${cardValue}.png`; 
                }
                img.classList.remove('blackjack-card-animating', 'animate-in');

                setTimeout(() => resolve(), 200); 
            }, { once: true });
        });
    }
}

class BlackjackEndGameInfo extends Popup {
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
        this.prompBottom = new Element(this.popup, { className: 'popup-route-capture-prompt-bottom' }).element;
        this.prompGains = new Element(this.popup, { className: 'popup-casino-prompt-gains' }).element;
        
        this.buttonLeave = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-cancel stroke', text: text.casino.blackjack.leave[lang] }).element;
        this.buttonRematch = new Element(this.popup, { className: 'popup-route-capture-button popup-route-capture-button-accept stroke', text: text.casino.blackjack.rematch[lang] }).element;

        this.buttonLeave.addEventListener('click', () => this.return());
        this.buttonRematch.addEventListener('click', () => this.rematch());

        this.buttonLeave.addEventListener('mouseover', () => playSound('hover0', 'ui'));
        this.buttonRematch.addEventListener('mouseover', () => playSound('hover0', 'ui'));

        this.sprite = new Element(this.popup, { className: 'popup-route-capture-pokemon-sprite' }).element;
        this.sprite.style.top = '45%';
    }

    update() {
        const lang = this.component.main.lang;

        let bet = BET_VALUES[this.component.selectedBet]
        let rematchPrompt = [];

        this.sprite.innerHTML = "";
        const sprite = document.createElement('img');
        sprite.className = 'route-team-pokemon-sprite';

        if (this.result == 'win') {
            playSound('obtain', 'ui');
            this.component.main.inventory.addItem(item.key.token, (bet*2)); // Ganancia = +apuesta
            this.promp.innerHTML = `${text.casino.blackjack.win[lang]}`;
            this.prompGains.innerHTML = `+${(bet*2)} ${text.pokeMart.tokens[lang]}`;
            sprite.src = './assets/images/misc/win.png';
            this.sprite.appendChild(sprite);

            if (!this.component.main.player.achievement[34].status) {
                this.component.main.player.achievement[34].progress[0] += (bet*2);
                if (this.component.main.player.achievement[34].progress[0] >= this.component.main.player.achievement[34].progress[1]) {
                    this.component.main.player.achievement[34].status = true;
                    this.component.main.player.unlockAchievement(34);
                }
            };
            if (!this.component.main.player.achievement[36].status) {
                this.component.main.player.achievement[36].progress[0] += (bet*2);
                if (this.component.main.player.achievement[36].progress[0] >= this.component.main.player.achievement[36].progress[1]) {
                    this.component.main.player.achievement[36].status = true;
                    this.component.main.player.unlockAchievement(36);
                }
            };
            if (!this.component.main.player.achievement[38].status) {
                this.component.main.player.achievement[38].progress[0] += (bet*2);
                if (this.component.main.player.achievement[38].progress[0] >= this.component.main.player.achievement[38].progress[1]) {
                    this.component.main.player.achievement[38].status = true;
                    this.component.main.player.unlockAchievement(38);
                }
            };

        } else if (this.result == 'draw') {
            playSound('obtain', 'ui');
            this.component.main.inventory.addItem(item.key.token, bet); // Devolver apuesta
            this.promp.innerHTML =`${text.casino.blackjack.draw[lang]}`;
            this.prompGains.innerHTML = `+${bet} ${text.pokeMart.tokens[lang]}`; 
            sprite.src = './assets/images/misc/win.png';
            this.sprite.appendChild(sprite);

            if (!this.component.main.player.achievement[34].status) {
                this.component.main.player.achievement[34].progress[0] += bet;
                if (this.component.main.player.achievement[34].progress[0] >= this.component.main.player.achievement[34].progress[1]) {
                    this.component.main.player.achievement[34].status = true;
                    this.component.main.player.unlockAchievement(34);
                }
            };
            if (!this.component.main.player.achievement[36].status) {
                this.component.main.player.achievement[36].progress[0] += bet;
                if (this.component.main.player.achievement[36].progress[0] >= this.component.main.player.achievement[36].progress[1]) {
                    this.component.main.player.achievement[36].status = true;
                    this.component.main.player.unlockAchievement(36);
                }
            };
            if (!this.component.main.player.achievement[38].status) {
                this.component.main.player.achievement[38].progress[0] += bet;
                if (this.component.main.player.achievement[38].progress[0] >= this.component.main.player.achievement[38].progress[1]) {
                    this.component.main.player.achievement[38].status = true;
                    this.component.main.player.unlockAchievement(38);
                }
            };

        } else if (this.result == 'lose') {
            playSound('faint', 'ui');
            this.promp.innerHTML = text.casino.blackjack.lose[lang];
            this.prompGains.innerHTML = text.casino.blackjack.lostTokens[lang];
            sprite.src = './assets/images/misc/ghost.png';
            this.sprite.appendChild(sprite);
        }
    
        if (!this.component.main.inventory.searchItem('token') || this.component.main.inventory.searchItem('token').amount < bet) {
            this.buttonRematch.style.pointerEvents = 'none';
            this.buttonRematch.style.filter = 'brightness(0.8)';
            rematchPrompt = text.casino.blackjack.notEnoughTokensContinue;
        } else {
            this.buttonRematch.style.pointerEvents = 'all';
            this.buttonRematch.style.filter = 'revert-layer';
            rematchPrompt = [`Do you want to play again for ${bet} tokens?`, `¿Quieres volver a jugar por ${bet} fichas?`]
        }

        this.prompBottom.innerText = rematchPrompt[lang];
    }

    open(result) {
        super.open(); 
        this.result = result;
        this.component.closeButton.style.pointerEvents = 'all';
        this.update();
    }

    rematch() {
        this.component.startBlackjack();
        super.close(); 
    }

    return() {
        playSound('close', 'ui');
        this.component.closeBlackjack();
        super.close(); 
    }

}