import Computer from "./computer.js";
import Player from "./player.js";

export default class RPSOnePlayer {

    newPlayer;
    computerChoice;
    outcome;

    playerConstructor(name, weapon) {
        return (this.newPlayer = new Player(name, weapon));
    }

    computerFight() {
        let computer = new Computer();
        return (this.computerChoice = computer.computerWeapon());
    }

    gameOutcome() {

        const weapon1 = this.newPlayer.weapon;
        const weapon2 = this.computerChoice;
        // console.log(weapon1);
        // console.log(weapon2);

        if (weapon1 === weapon2) {
            this.outcome = "Its a draw. Play again!";
        } else if (this.computerChoice === 'rock' && this.newPlayer.weapon === 'paper') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'rock' && this.newPlayer.weapon === 'scissors') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'rock' && this.newPlayer.weapon === 'lizard') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'rock' && this.newPlayer.weapon === 'spock') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'paper' && this.newPlayer.weapon === 'rock') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'paper' && this.newPlayer.weapon === 'scissors') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'paper' && this.newPlayer.weapon === 'lizard') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'paper' && this.newPlayer.weapon === 'spock') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'scissors' && this.newPlayer.weapon === 'rock') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'scissors' && this.newPlayer.weapon === 'paper') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'scissors' && this.newPlayer.weapon === 'lizard') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'scissors' && this.newPlayer.weapon === 'spock') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'lizard' && this.newPlayer.weapon === 'rock') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'lizard' && this.newPlayer.weapon === 'paper') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'lizard' && this.newPlayer.weapon === 'scissors') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'lizard' && this.newPlayer.weapon === 'spock') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'spock' && this.newPlayer.weapon === 'rock') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'spock' && this.newPlayer.weapon === 'paper') {
            this.outcome = "You win! Play again!";
        } else if (this.computerChoice === 'spock' && this.newPlayer.weapon === 'scissors') {
            this.outcome = "You lose! Play again!";
        } else if (this.computerChoice === 'spock' && this.newPlayer.weapon === 'lizard') {
            this.outcome = "You win! Play again!";
        }
        return this.outcome;
    };

    // getOutcome() {
    //     return this.outcome;
    // };
};