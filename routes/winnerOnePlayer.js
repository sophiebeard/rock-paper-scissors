import express from 'express';
import RPSOnePlayer from '../src/rpsOnePlayer.js';
export const router = express.Router();

router.post('/', (req, res) => {
    const rpsOnePlayer = new RPSOnePlayer();
    const weapon = req.body.weapon;
    const name = req.app.locals.name;
    req.app.locals.weapon = weapon;
    const person = rpsOnePlayer.playerConstructor(name, weapon);
    rpsOnePlayer.computerFight();
    const outcome = rpsOnePlayer.gameOutcome();
    // console.log(person.name);
    // console.log(person.weapon);
    // console.log(outcome);

    res.render('winnerOnePlayer', {
        name: name,
        weapon: weapon,
        computer: rpsOnePlayer.computerChoice,
        result: outcome
    });
});
