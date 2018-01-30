const expect = require('expect.js');
const Game = require('./index');

let game;

beforeEach(() => {
    game = Game();
});

describe('A tennis game', () => {
    it('score is 0 - 0 when it is about to start', () => {
        expect(game.displayScore()).to.eql('0 - 0');
    });

    it('player A scores => 15 - 0', () => {
        game.playerScores('playerA');
        expect(game.displayScore()).to.eql('15 - 0');
    });

    it('tied to 15-all', () => {
        game.playerScores('playerA');
        game.playerScores('playerB');
        expect(game.displayScore()).to.eql('15 - 15');
    });
});