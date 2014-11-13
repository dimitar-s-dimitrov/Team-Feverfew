"use strict";

define("game", function () {
    // Private variables
    var FlyingBird, flyingBirds,
        totalPoints, speed, speed2,
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

    // Generates birds. Accepts level as first parameter
    function generateBirds(level) {
        var birds = [];

        // TODO: Generate birds

        return birds;
    }

    return {
        // Initializes and starts the game
        startGame: function () {
            totalPoints = 0;
            speed = 1300;
            speed2 = 1000;
            flyingBirds = [];
            FlyingBird = require("FlyingBird");

            // Adding more birds here
            // Or implement a birds generator as a private function!!!
            flyingBirds.push(new FlyingBird(speed));
            flyingBirds.push(new FlyingBird(speed));
            flyingBirds.push(new FlyingBird(speed2));
            flyingBirds.push(new FlyingBird(speed2));

            // TODO: check main todo list
        },

        /* Accepts plain object with top and left properties
         * The values must be relative to the game field
         * Reinitializes the element
         */
        shootAt: function (pointOffset) {
            var i, len, flyingBird;

            // Check if any flying Bird is hit
            for (i = 0, len = flyingBirds.length; i < len; i++) {
                flyingBird = flyingBirds[i];

                if (flyingBird.isHit(pointOffset.left, pointOffset.top)) {
                    // Sum and set points
                    totalPoints += flyingBird.getPoints();
                    $pointsHeading.text(totalPoints + " points");

                    // Reinit and start again after given delay
                    flyingBird.reinitialize();

                    // setTimeout has bug with the flyingBird reference! It does not point to the proper element.
                    //setTimeout(function () {
                    flyingBird.startAnimation();
                    //}, 1000);


                    // TODO: check main todo list
                }
            }
        }
    }
});