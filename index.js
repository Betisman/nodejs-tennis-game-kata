const Game = () => {
    let score = {
        playerA: 0,
        playerB: 0,
    };

    const displayScore = () => `${score.playerA} - ${score.playerB}`;

    const getNewScore = {
        0: 15,
        15: 30,
        30: 40,
        40: 0,
    };

    const playerScores = (player) => {
        score[player] = getNewScore[score[player]];
    };

    return {
        displayScore,
        playerScores,
    }
};

module.exports = Game;