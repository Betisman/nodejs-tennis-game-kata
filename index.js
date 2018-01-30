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

    const checkPoints = (points) => [0, 15, 30, 40].indexOf(points) > -1;
    const setScore = (_score_) => {
        [playerAPoints, playerBPoints] = _score_.split('-').map(x => parseInt(x));
        score = {
            playerA: checkPoints(playerAPoints) ? playerAPoints : 999,
            playerB: checkPoints(playerBPoints) ? playerBPoints : 999,
        };

    }

    return {
        displayScore,
        playerScores,
        setScore,
    }
};

module.exports = Game;