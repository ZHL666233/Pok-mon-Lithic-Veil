export class Pokedex {
    constructor(main, pokedexData) {
        this.main = main;
        this.pokemon = pokedexData;
        this.pokemonByNumber = {};
    }

    seePokemon(number) {
        if (this.pokemon[number] === "unseen") {
            this.pokemon[number] = "seen";

            if (!this.main.player.achievement[14].status) {
                this.main.player.achievement[14].progress[0]++;
                if (this.main.player.achievement[14].progress[0] == this.main.player.achievement[14].progress[1]) {
                    this.main.player.achievement[14].status = true;
                    this.main.player.unlockAchievement(14);
                }
            }

            if (!this.main.player.achievement[17].status) {
                this.main.player.achievement[17].progress[0]++;
                if (this.main.player.achievement[17].progress[0] == this.main.player.achievement[17].progress[1]) {
                    this.main.player.achievement[17].status = true;
                    this.main.player.unlockAchievement(17);
                }
            }

            if (!this.main.player.achievement[20].status) {
                this.main.player.achievement[20].progress[0]++;
                if (this.main.player.achievement[20].progress[0] == this.main.player.achievement[20].progress[1]) {
                    this.main.player.achievement[20].status = true;
                    this.main.player.unlockAchievement(20);
                }
            }
        }
    }

    catchPokemon(number) {
        if (this.pokemon[number] === "seen") {
            this.pokemon[number] = "catched";

            if (!this.main.player.achievement[15].status) {
                this.main.player.achievement[15].progress[0]++;
                if (this.main.player.achievement[15].progress[0] == this.main.player.achievement[15].progress[1]) {
                    this.main.player.achievement[15].status = true;
                    this.main.player.unlockAchievement(15);
                }
            }

            if (!this.main.player.achievement[18].status) {
                this.main.player.achievement[18].progress[0]++;
                if (this.main.player.achievement[18].progress[0] == this.main.player.achievement[18].progress[1]) {
                    this.main.player.achievement[18].status = true;
                    this.main.player.unlockAchievement(18);
                }
            }

            if (!this.main.player.achievement[21].status) {
                this.main.player.achievement[21].progress[0]++;
                if (this.main.player.achievement[21].progress[0] == this.main.player.achievement[21].progress[1]) {
                    this.main.player.achievement[21].status = true;
                    this.main.player.unlockAchievement(21);
                }
            }

            if (!this.main.player.achievement[24].status && this.totalCatched() == 387) {
                this.main.player.achievement[24].status = true;
                this.main.player.unlockAchievement(24);
            }
        }
    }

    shinyPokemon(number) {
        if (this.pokemon[number] === "catched") {
            this.pokemon[number] = "shiny";

            if (!this.main.player.achievement[16].status) {
                this.main.player.achievement[16].progress[0]++;
                if (this.main.player.achievement[16].progress[0] == this.main.player.achievement[16].progress[1]) {
                    this.main.player.achievement[16].status = true;
                    this.main.player.unlockAchievement(16);
                }
            }

            if (!this.main.player.achievement[19].status) {
                this.main.player.achievement[19].progress[0]++;
                if (this.main.player.achievement[19].progress[0] == this.main.player.achievement[19].progress[1]) {
                    this.main.player.achievement[19].status = true;
                    this.main.player.unlockAchievement(19);
                }
            }

            if (!this.main.player.achievement[22].status) {
                this.main.player.achievement[22].progress[0]++;
                if (this.main.player.achievement[22].progress[0] == this.main.player.achievement[22].progress[1]) {
                    this.main.player.achievement[22].status = true;
                    this.main.player.unlockAchievement(22);
                }
            }
        }
    }

    totalSeen() {
        return Object.values(this.pokemon).filter(
            status => status === "seen" || status === "catched" || status === "shiny"
        ).length;
    }

    totalCatched() {
        return Object.values(this.pokemon).filter(
           status => status === "catched" || status === "shiny"
        ).length;
    }

    totalShiny() {
        return Object.values(this.pokemon).filter(
           status => status === "shiny"
        ).length;
    }

    resumen() {
        return {
            seen: this.totalSeen(),
            catched: this.totalCatched(),
        };
    }

    showPokedex() {
        return Object.entries(this.pokemon).map(([number, status]) => ({
            number: parseInt(number),
            status
        }));
    }

    getSeenCatchedAndShiny() {
        const seen = [];
        const catched = [];
        const shiny = [];

        for (const [number, status] of Object.entries(this.pokemon)) {
            const num = parseInt(number);
            if (status === "catched" || status === "shiny") {
                catched.push(num);
            } else if (status === "seen") {
                seen.push(num);
            }
            if (status === "shiny") {
                shiny.push(num);
            }
        }

        return {
            seen,
            catched,
            shiny
        };
    }

    getSeenAndCatchedByNumber(number) {
        const status = this.pokemon[number];
        return status || "unseen";
    }

    goToApachan() {
        const pokedexData = this.pokemon
        for (let i = 252; i <= 387; i++) {
            pokedexData[i] = "unseen";
        }
        this.pokemon = pokedexData;
    }
    
    getSaveData() {
        return { ...this.pokemon };
    }
}