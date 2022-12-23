import express from 'express';
export const router = express.Router();

router.post('/', (req, res) => {
    const weapon1 = req.body.weapon1;
    const weapon2 = req.body.weapon2;
    const rps = req.app.locals.rps;
    rps.player1.weaponChoice(weapon1);
    rps.player2.weaponChoice(weapon2);
    rps.result();

    res.redirect(`/winner`);
})

router.get('/', (req, res) => {
    const winner = req.app.locals.rps.getWinner();

    res.render('winner', {
        winner: winner
    });
});







