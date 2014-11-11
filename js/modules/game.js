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

        isGameStarted: false,

        gameName: "Mnoo qka"
    }
});