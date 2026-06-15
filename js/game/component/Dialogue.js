import { Element } from '../../utils/Element.js';
import { playSound } from '../../file/audio.js';

export class Dialogue {
    constructor(main) {
        this.main = main;

        this.dialogueBox = new Element(this.main.dialogueScene, { className: 'dialogue-box' }).element;
        this.dialogueName = new Element(this.dialogueBox, { className: 'dialogue-name' }).element;
        this.dialogueText = new Element(this.dialogueBox, { className: 'dialogue-text' }).element;
        this.dialogueChoices = new Element(this.dialogueBox, { className: 'dialogue-choices' }).element;
        this.nextButton = new Element(this.dialogueBox, { className: 'dialogue-next', text: '(...)' }).element;

        this.currentNPC = null;
        this.dialogueIndex = 0;
        this.dialogueSeries = 0;
        this.partialTextIndex = 0;

        this.useTypewriter = true; 
        this.choiceButtons = [];   
        this.isAnimating = false;  
        this.typewriterTimeout = null;
    }

    startDialogue(npc, useTypewriter = true) {
        this.main.menu.available = false;

        this.currentNPC = npc;
        this.dialogueSeries = npc.state || 0;
        this.dialogueIndex = 0;
        this.partialTextIndex = 0;
        this.useTypewriter = useTypewriter;
        this.main.dialogueScene.style.display = "block";

        this.showNextDialogue();
    }

    showNextDialogue() {
        const dialogues = this.currentNPC.dialogues[this.dialogueSeries];

        // let dialogue = dialogues[this.dialogueIndex];

        if (!dialogues) {
            console.warn(`No se encontró la serie de diálogo ${this.dialogueSeries} para el NPC ${this.currentNPC.name[0]}`);
            this.endDialogue();
            return;
        }

        let found = false;
        while (this.dialogueIndex < dialogues.length) {
            const current = dialogues[this.dialogueIndex];
            if (!current.condition || current.condition()) {
                found = true;
                break;
            }
            this.dialogueIndex++;
        }

        if (!found) {
            this.endDialogue();
            return;
        }

        const dialogue = dialogues[this.dialogueIndex];
        const npcName = this.currentNPC.name[this.main.lang] || this.currentNPC.name[0];
        this.dialogueName.innerHTML = npcName.toUpperCase();
        this.dialogueChoices.innerHTML = "";
        this.choiceButtons = []; 

        let rawText = dialogue.text ?? ""; 
        if (rawText != "") rawText = (Array.isArray(dialogue.text) ? (dialogue.text[this.main.lang] || dialogue.text[0]) : dialogue.text);

        this.textFragments = Array.isArray(rawText) ? rawText : [rawText];
        // this.textFragments = Array.isArray(dialogue.text) ? dialogue.text : [dialogue.text];
        this.partialTextIndex = 0;
        this.animateText(this.textFragments[this.partialTextIndex]);

        if (dialogue.reward) {
            playSound('obtain', 'ui')
            this.main.inventory.addItem(dialogue.reward.item, dialogue.reward.amount);
            if (dialogue.reward.item.key == 'potion') this.main.player.obtainPotion();
        }
        
        if (dialogue.cb) dialogue.cb();

        if (dialogue.choices) {
            this.nextButton.style.display = 'none';
            dialogue.choices.forEach(choice => {
                if (choice.condition && !choice.condition(this.main)) return;

                const button = new Element(this.dialogueChoices, {
                    className: 'dialogue-choice',
                    text: choice.text[this.main.lang]
                }).element;

 
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.5';

                button.addEventListener("click", () => {
                    if (this.isAnimating) return; 
                    this.selectChoice(choice);
                });

                this.choiceButtons.push(button);
            });
        } else {
            if (dialogue.state !== undefined) {
                this.currentNPC.state = dialogue.state;
            }

            if (dialogue.next === "end") {
                this.endDialogue();
                return;
            }

            if (dialogue.next) {
                this.dialogueSeries = dialogue.next;
                this.dialogueIndex = 0;
                this.partialTextIndex = 0;
                this.showNextDialogue();
                return;
            }

            this.nextButton.style.display = 'block';
        }
    }

    selectChoice(choice) {
        if (choice.state !== undefined) {
            this.currentNPC.state = choice.state;
        }

        if (choice.next === "end") {
            this.endDialogue();
        } else {
            this.dialogueSeries = choice.next;
            this.dialogueIndex = 0;
            this.partialTextIndex = 0;
            this.showNextDialogue();
        }
    }

    endDialogue() {
        this.main.menu.available = true;
        this.main.dialogueScene.style.display = "none";
        this.dialogueIndex = 0;
        this.partialTextIndex = 0;
    }
    
    animateText(text) {
        this.dialogueText.innerHTML = "";

        if (!this.useTypewriter) {

            this.dialogueText.innerHTML = text;
            this.isAnimating = false;

            this.enableChoiceButtons();

            this.nextButton.onclick = () => {
                playSound('click1', 'ui');
                if (this.partialTextIndex < this.textFragments.length - 1) {
                    this.partialTextIndex++;
                    this.animateText(this.textFragments[this.partialTextIndex]);
                } else {
                    this.dialogueIndex++;
                    this.showNextDialogue();
                }
            };
            return;
        }

        this.isAnimating = true;
        this.skipAnimation = false;
        this.disableChoiceButtons();

        const sounds = ['key0', 'key1'];
        const measure = document.createElement("span");
        measure.style.visibility = "hidden";
        measure.style.position = "absolute";
        measure.style.whiteSpace = "nowrap";
        measure.style.font = getComputedStyle(this.dialogueText).font;
        document.body.appendChild(measure);

        const words = text.split(' ');
        let currentLine = "";
        let wordIndex = 0;
        let charIndex = 0;
        let writingWord = '';

        const stopAnimation = () => {
            this.skipAnimation = true;
            this.isAnimating = false;

            if (this.typewriterTimeout) {
                clearTimeout(this.typewriterTimeout);
                this.typewriterTimeout = null;
            }

            this.dialogueText.innerHTML = text;
            this.enableChoiceButtons();

            if (document.body.contains(measure)) {
                document.body.removeChild(measure);
            }
        };

        const nextButtonHandler = () => {
            playSound('click1', 'ui');
            if (this.isAnimating) {
                stopAnimation();
            } else if (this.partialTextIndex < this.textFragments.length - 1) {
                this.partialTextIndex++;
                this.animateText(this.textFragments[this.partialTextIndex]);
            } else {
                this.dialogueIndex++;
                this.showNextDialogue();
            }
        };

        this.nextButton.onclick = nextButtonHandler;

        const writeNextChar = () => {
            if (this.skipAnimation) return;

            if (writingWord.length === 0 && wordIndex < words.length) {
                const word = words[wordIndex];
                const wordWithSpace = word + " ";

                measure.innerText = currentLine + wordWithSpace;
                if (measure.offsetWidth > this.dialogueText.offsetWidth) {
                    this.dialogueText.innerHTML += "<br>";
                    currentLine = "";
                }

                writingWord = wordWithSpace;
                charIndex = 0;
                wordIndex++;
            }

            if (this.skipAnimation) return;

            if (charIndex < writingWord.length) {
                const char = writingWord[charIndex];
                this.dialogueText.innerHTML += char;
                currentLine += char;
                charIndex++;

                if (charIndex % 2 === 0) {
                    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
                    playSound(randomSound, 'ui');
                }

                this.typewriterTimeout = setTimeout(writeNextChar, 25);
            } else if (wordIndex < words.length) {
                writingWord = '';
                this.typewriterTimeout = setTimeout(writeNextChar, 0);
            } else {
                this.isAnimating = false;
                this.enableChoiceButtons();

                if (document.body.contains(measure)) {
                    document.body.removeChild(measure);
                }
            }
        };

        writeNextChar();
    }

    disableChoiceButtons() {
        this.choiceButtons.forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.5';
        });
    }

    enableChoiceButtons() {
        this.choiceButtons.forEach(btn => {
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
}
