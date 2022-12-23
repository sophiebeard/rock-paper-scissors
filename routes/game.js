import express from 'express';
export const router = express.Router();
import RPS from '../src/rps.js';

router.post('/', (req, res) => {
    const rps = new RPS(req.body.player1, req.body.player2);
    req.app.locals.rps = rps;
    res.redirect('/game');
});

router.get('/', (req, res) => {
    const player1 = req.app.locals.rps.player1;
    const player2 = req.app.locals.rps.player2;
    res.render('game', {
        p1name: player1.getName(),
        p2name: player2.getName()
    });
});






