import { expect } from 'chai';
import RPS from '../src/rps.js';

describe(`RPS tests`, () => {

    let testRPS;
    let testResult;

    beforeEach(() => {
        testRPS = new RPS(`Player1`, `Player2`);
    });

    it(`should create a player with the correct name`, () => {
        expect(testRPS.player1.getName()).to.equal(`Player1`);
    });

    it(`getWinner() should return a string`, () => {
        testRPS.player1.weaponChoice(`rock`);
        testRPS.player2.weaponChoice(`scissors`);
        testRPS.result();

        expect(testRPS.getWinner()).contains(`winner!`);
    });

    it(`should return the correct string when player 2 wins`, () => {
        testRPS.player1.weaponChoice(`rock`);
        testRPS.player2.weaponChoice(`paper`);
        testRPS.result();

        testResult = testRPS.getWinner();

        expect(testResult).to.equal(`Player2 is the winner!`)
    });

    it(`should return the correct string when it's a draw`, () => {
        testRPS.player1.weaponChoice(`rock`);
        testRPS.player2.weaponChoice(`rock`);
        testRPS.result();

        testResult = testRPS.getWinner();

        expect(testResult).to.equal(`Draw! Play again!`)
    });
});