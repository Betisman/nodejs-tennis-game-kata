const Game = () => {
    const score = {
        playerA: 0,
        playerB: 0,
    };

    const displayScore = () => `${score.playerA} - ${score.playerB}`;

    return {
        displayScore,
    }
};

module.exports = Game;