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
            console.log("you shooted at " + pointOffset.toString());
        },

        gameName: "Mnoo qka"
    }
});