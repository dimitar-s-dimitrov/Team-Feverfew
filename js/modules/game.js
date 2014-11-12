"use strict";

define("game", function () {
    // Private variables
    var FlyingNakov, flyingNakovs,
        totalPoints, speed,
        $pointsHeading = $("#points-heading");

    /***************************************************
        TODO:
            *Implement levels
            *Implement speed controller
            *Implement flying nakovs array generator with given count
            *Maybe implement flying nakovs array controller
            *Implement hit animations
            *shootAt method does so many work, improve it
            *implement delay variable for the levels
    ****************************************************/

    return {
        // Initializes and starts the game
        startGame: function () {
            totalPoints = 0;
            speed = 1300;
            flyingNakovs = [];
            FlyingNakov = require("flyingNakov");

            // Adding new Flying Nakov object
            flyingNakovs.push(new FlyingNakov(speed));
            // TODO: check main todo list
        },

        /* Accepts plain object with top and left properties
         * The values must be relative to the game field
         * Reinitializes the element
         */
        shootAt: function (pointOffset) {
            var i, len, flyingNakov;

            // Check if any flying nakov is hit
            for (i = 0, len = flyingNakovs.length; i < len; i++) {
                flyingNakov = flyingNakovs[i];

                if (flyingNakov.isHit(pointOffset.left, pointOffset.top)) {
                    // Sum and set points
                    totalPoints += flyingNakov.getPoints();
                    $pointsHeading.text(totalPoints + " points");

                    // Reinit and start again after given delay
                    flyingNakov.reinitialize();
                    setTimeout(function () {
                        flyingNakov.startAnimation();
                    }, 1000);

                    // TODO: check main todo list
                }
            }
        }
    }
});