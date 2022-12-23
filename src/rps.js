import Player from "./player.js";

export default class RPS {

    player1;
    player2;
    #winner;

    weaponBank = {
        rock: { beats: [`scissors`, `lizard`], beatenBy: [`paper`, `spock`] },
        paper: { beats: [`rock`, `spock`], beatenBy: [`scissors`, `lizard`] },
        scissors: { beats: [`paper`, `lizard`], beatenBy: [`rock`, `spock`] },
        lizard: { beats: [`spock`, `paper`], beatenBy: [`rock`, `scissors`] },
        spock: { beats: [`rock`, `scissors`], beatenBy: [`lizard`, `paper`] }
    };

    constructor(player1, player2) {
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
    }

    result() {

        const weapon1 = this.player1.getWeapon();
        const weapon2 = this.player2.getWeapon();
        const whoWins = this.weaponBank[weapon1];

        if (weapon1 === weapon2) {
            this.#winner = `Draw! Play again!`
        } else if (whoWins.beats === weapon2) {
            this.#winner = `${this.player1.getName()} is the winner!`;
        } else {
            this.#winner = `${this.player2.getName()} is the winner!`;
        };
    };

    getWinner() {
        return this.#winner;
    };
};

