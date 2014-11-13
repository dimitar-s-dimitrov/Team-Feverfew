"use strict";

define("game", function () {
    // Private variables
    var FlyingNakov, flyingNakovs, FlyingDean, flyingDeans,
        totalPoints, speed, speedDean,
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
            speedDean = 1000;
            flyingNakovs = [];
            FlyingNakov = require("flyingNakov");
            flyingDeans = [];
            FlyingDean = require("flyingDean");

            // Adding new Flying Dean object
            flyingDeans.push(new FlyingDean(speedDean));
            flyingDeans.push(new FlyingDean(speedDean));

            // Adding new Flying Nakov object
            flyingNakovs.push(new FlyingNakov(speed));
            flyingNakovs.push(new FlyingNakov(speed));

            // TODO: check main todo list
        },

        /* Accepts plain object with top and left properties
         * The values must be relative to the game field
         * Reinitializes the element
         */
        shootAt: function (pointOffset) {
            var i, len, flyingNakov, flyingDean;

            // Check if any flying Dean is hit
            for (i = 0, len = flyingDeans.length; i < len; i++) {
                flyingDean = flyingDeans[i];

                if (flyingDean.isHit(pointOffset.left, pointOffset.top)) {
                    // Sum and set points
                    totalPoints += flyingDean.getPoints();
                    $pointsHeading.text(totalPoints + " points");

                    // Reinit and start again after given delay
                    flyingDean.reinitialize();

                    // setTimeout has bug with the flyingDean reference! It does not point to the proper element.
                    //setTimeout(function () {
                    flyingDean.startAnimation();
                    //}, 1000);


                    // TODO: check main todo list
                }
            }
            // Check if any flying nakov is hit
            for (i = 0, len = flyingNakovs.length; i < len; i++) {
                flyingNakov = flyingNakovs[i];

                if (flyingNakov.isHit(pointOffset.left, pointOffset.top)) {
                    // Sum and set points
                    totalPoints += flyingNakov.getPoints();
                    $pointsHeading.text(totalPoints + " points");

                    // Reinit and start again after given delay
                    flyingNakov.reinitialize();

                    // setTimeout has bug with the flyingNakov reference! It does not point to the proper element.
                    //setTimeout(function () {
                        flyingNakov.startAnimation();
                    //}, 1000);

                    
                    // TODO: check main todo list
                }
            }
        }
    }
});