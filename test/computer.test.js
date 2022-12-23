import chai, { expect } from "chai";
import Computer from "../src/computer.js";
chai.should();

describe("Computer class tests", () => {

    const computer = new Computer();
    const computerData = computer.computerWeapon();

    it("The computer should choose a valid weapon", () => {
        expect(computerData).to.be.a(`string`);
        expect(computer.computerWeaponBank).contains(computerData);
    });

    it("The computerWeaponBank should be an array of 5 weapons", () => {
        expect(computer.computerWeaponBank).to.have.lengthOf(5);
        expect(computer.computerWeaponBank).to.be.an(`Array`);
        expect(computer.computerWeaponBank).to.contain.oneOf([`rock`, `paper`, `scissors`, `lizard`, `spock`]);
    });
});