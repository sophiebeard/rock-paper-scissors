export default class Player {

    name
    weapon

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    };

    weaponChoice(choice) {
        this.weapon = choice;
    }

    getName() {
        return this.name;
    };

    getWeapon() {
        return this.weapon;
    };
};