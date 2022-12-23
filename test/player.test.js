import { expect } from 'chai';
import Player from '../src/player.js';

describe(`Player tests`, () => {

    let testPlayer;

    beforeEach(() => {
        testPlayer = new Player(`Sophie`);
    });

    it(`a player should have a name`, () => {

        expect(testPlayer.getName()).to.equal(`Sophie`);
    });

    it(`a player should have a weapon choice of undefined`, () => {

        expect(testPlayer.getWeapon()).to.equal(undefined);
    });

    it(`should give a weapon based on the choice`, () => {

        testPlayer.weaponChoice(`rock`);

        expect(testPlayer.getWeapon()).to.equal(`rock`);
    });
});