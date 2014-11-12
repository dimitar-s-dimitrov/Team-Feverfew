"use strict";

define("flyingNakov", function () {
    function FlyingNakov(element, width, height) {
        // Constructor logic
        if (!element instanceof jQuery) {
            element = $(element);
        }
        this.element = element;
        this.width = width;
        this.height = height;
    }

    // Public API
    FlyingNakov.prototype = {

        // Starts jquery moving animation
        startMoving: function (speed) {

        },

        // Checks if the given coordinates are inside the object
        isHit: function (shootXPos, shootYPos) {
            var currentPosition = this.element.position();
            if (shootXPos >= currentPosition.left &&
                shootXPos <= currentPosition.left + this.width) {
                if (shootYPos >= currentPosition.top &&
                    shootYPos <= currentPosition.top + this.height) {
                    return true;
                }
            }

            return false;
        }
    };

    return FlyingNakov;
});