define("game", function () {
    // Private variables
    var gameType, gamePlayers;

    // Private functions
    function restartGame() {

    }

    // Public API
    return {
        startGame: function () {
            console.log("Game started!");

            restartGame();
        },

        shootAt: function (pointOffset) {
            console.log("you shooted at " + JSON.stringify(pointOffset));
        },

        gameName: "Mnoo qka"
    }
});