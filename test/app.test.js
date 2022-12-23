import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';
chai.use(chaiHttp);

describe(`App tests`, () => {

    it(`should render when the app is started`, async () => {
        const res = await chai.request(server)
            .get(`/`)

        expect(res.status).to.equal(200);
    });

    it(`should render the title text`, async () => {
        const res = await chai.request(server)
            .get(`/`)

        expect(res.text).to.include(`Rock, Paper, Scissors!`);
    });

    describe(`route '/game' tests`, () => {

        it(`should have a 200 status (post)`, async () => {
            const res = await chai.request(server)
                .post(`/game`)
                .send({ player1: `Player1`, player2: `Player2` })

            expect(res.status).to.equal(200);
        });

        it(`should render 'game' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/game`)

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.include(`Choose your weapon!`);
        });
    });

    describe(`route '/gameOnePlayer' tests`, () => {

        it(`should have a 200 status (post)`, async () => {
            const res = await chai.request(server)
                .post(`/gameOnePlayer`)
                .send({ newPlayer: `Player1` })

            expect(res.status).to.equal(200);
        });

        it(`should render 'gameOnePlayer' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/gameOnePlayer`)

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.include(`Choose your weapon:`);
        });
    });

    describe(`route '/winner' tests`, () => {

        it(`should have a 200 status (post)`, async () => {
            const res = await chai.request(server)
                .post(`/winner`)
                .send({ player1: `Player1`, player2: `Player2` })

            expect(res.status).to.equal(200);
        });

        it(`should render 'winner' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/winner`)

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.include(`And the winner is...`);
        });
    });

    describe(`route '/winnerOnePlayer' tests`, () => {
        it(`should have a 200 status (post)`, async () => {
            const res = await chai.request(server)
                .post(`/winnerOnePlayer`)
                .send({ newPlayer: `Player1` })

            expect(res.status).to.equal(200);
        });
    });
});