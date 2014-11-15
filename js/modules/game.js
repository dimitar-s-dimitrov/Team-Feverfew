"use strict";

define("game", function () {
    // Private variables
    var birds = [],
        levelSystem = require("levelSystem", [birds]),

        totalPoints,
        $pointsHeading = $("#points-heading");

    /***************************************************
        TODO:
            *Implement speed controller
            *Implement flying nakovs array generator with given count
            *Maybe implement flying nakovs array controller
            *Implement hit animationsss
            *shootAt method does so many work, improve it
            *Implement game over handler
    ****************************************************/

    // Sets values to default
    function initializeGame() {
        totalPoints = 0;
        levelSystem.reset();
    }

    // Handles the game over event
    function onGameOver(message) {
        // TODO: implement it!
    }

    return {
        // Starts the game
        startGame: function () {
            initializeGame();

            // Bind handler for the game over event
            levelSystem.onGameOver = onGameOver;

            levelSystem.startLevel();
        },

        /* Accepts plain object with top and left properties
         * The values must be relative to the game field
         * Reinitializes the element
         */
        shootAt: function (pointOffset) {
            var i, len, bird;

            // Check if any flying Bird is hit
            for (i = 0, len = birds.length; i < len; i++) {
                bird = birds[i];

                if (bird.isHit(pointOffset.left, pointOffset.top)) {
                    // Sum and set points
                    totalPoints += bird.getPoints();
                    $pointsHeading.text(totalPoints + " points");

                    // Inform the level system that we have killed a bird
                    levelSystem.killBird(bird);
                }
            }
        }
    }
});