export default class Computer {

    computerWeaponBank = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    computerWeapon() {
        const number = Math.floor(Math.random() * 5);
        return this.computerWeaponBank[number];
    };
};
