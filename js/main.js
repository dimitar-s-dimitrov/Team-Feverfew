
// Setup the game
$(function () {
    var game = require("game");
    var crosshair = require("crosshair");
    
    // Bind crosshair shooting event
    crosshair.onShoot(function (shootPointOffset) {
        game.shootAt(shootPointOffset);
    });

    game.startGame();
});