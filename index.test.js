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

    it('score can be set', () => {
        game.setScore('0 - 0');
        expect(game.displayScore()).to.eql('0 - 0');
        game.setScore('15 - 0');
        expect(game.displayScore()).to.eql('15 - 0');
        game.setScore('30 - 15');
        expect(game.displayScore()).to.eql('30 - 15');
        game.setScore('40 - 30');
        expect(game.displayScore()).to.eql('40 - 30');
        game.setScore('sfdffs');
        expect(game.displayScore()).to.eql('999 - 999');
    })

    it('DEUCE', () => {
        game.setScore('40-30');
        game.playerScores('playerB');
        expect(game.displayScore()).to.eql('DEUCE');
    });

    it('player B gets Advantage', () => {
        game.setScore('40-40');
        game.playerScores('playerB');
        expect(game.displayScore()).to.eql('ADV PLAYER B');
    })
});