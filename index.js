const Game = () => {
    let score = {
        playerA: 0,
        playerB: 0,
    };

    const formattedScore = (_score_) => ({
        '40 - 40': 'DEUCE',
        '50 - 40': 'ADV PLAYER A',
        '40 - 50': 'ADV PLAYER B',
    })[_score_] || _score_;

    const displayScore = () => formattedScore(`${score.playerA} - ${score.playerB}`);

    const getNewScore = {
        0: 15,
        15: 30,
        30: 40,
        40: 50,
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
    };

    return {
        displayScore,
        playerScores,
        setScore,
    };
};

module.exports = Game;