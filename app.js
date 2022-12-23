import express from 'express';
const app = express();
const host = 'localhost';
const port = 4000;

app.set(`view engine`, `ejs`);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import { router as indexRouter } from './routes/index.js'
import { router as gameRouter } from './routes/game.js'
import { router as winnerRouter } from './routes/winner.js'
import { router as landingRouter } from './routes/landing.js'
import { router as indexOnePlayerRouter } from './routes/indexOnePlayer.js'
import { router as gameOnePlayerRouter } from './routes/gameOnePlayer.js'
import { router as winnerOnePlayerRouter } from './routes/winnerOnePlayer.js'

app.use('/', landingRouter);
app.use('/index', indexRouter);
app.use('/game', gameRouter);
app.use('/winner', winnerRouter);
app.use('/indexOnePlayer', indexOnePlayerRouter);
app.use('/gameOnePlayer', gameOnePlayerRouter);
app.use('/winnerOnePlayer', winnerOnePlayerRouter);


const server = app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
});

export default server;