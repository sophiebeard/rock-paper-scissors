import express from 'express';
import RPSOnePlayer from '../src/rpsOnePlayer.js';
import Player from '../src/player.js';
export const router = express.Router();

router.post('/', (req, res) => {

    const name = req.body.player;
    req.app.locals.name = name;

    const rpsOnePlayer = new RPSOnePlayer();
    rpsOnePlayer.computerFight();
    req.app.locals.rpsOnePlayer = rpsOnePlayer;

    const player = new Player(name)
    req.app.locals.player = player;

    res.redirect('/gameOnePlayer');
})

router.get('/', (req, res) => {
    const user = req.app.locals.name;
    res.render('gameOnePlayer', {
        name: user
    });
})





