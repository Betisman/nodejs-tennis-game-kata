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
});