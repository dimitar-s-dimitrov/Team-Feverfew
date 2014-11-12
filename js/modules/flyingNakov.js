"use strict";

define("flyingNakov", function () {
    var $gameField = $("#game-field"),
        $gameFieldWidth = $gameField.width(),
        $gameFieldHeight = $gameField.height(),
        $flyingNakovTemplates, templatesCount;

    /******************************************************
        TODO:
            *Implement element self destruction after animation or hit
            *Maybe implement fly-out animation


            *Animations cant be improved!!!
    *******************************************************/

    // Cache templates and their count
    $flyingNakovTemplates = $("#flying-nakov-templates-wrapper").children();
    templatesCount = $flyingNakovTemplates.length;

    // Generate and return flying nakov with random type
    function generateRandomType() {
        var randomNumber = Math.random() * templatesCount;
        var randomTemplate = $flyingNakovTemplates[Math.floor(randomNumber)];
        return $(randomTemplate).clone();
    }

    // Generates random element position relative to the game field
    function generateRandomPosition(elementWidth, elementHeight) {
        var left = Math.random() * ($gameFieldWidth - elementWidth - 1) + 1;
        var top = Math.random() * ($gameFieldHeight - elementHeight - 1) + 1;

        return {
            top: top,
            left: left
        };
    }

    // Creates the element animation
    function animateElement(flyingNakov, movesLeft) {
        var newRandomPosition = generateRandomPosition(flyingNakov.width, flyingNakov.height);
        flyingNakov.$element.animate(newRandomPosition, flyingNakov.speed, function () {
            if (--movesLeft > 0) {
                animateElement(flyingNakov, movesLeft);
                
            } else {
                // TODO: check main todo list
            }
        });
    }

    function FlyingNakov(defaultSpeed) {
        var elementTop, elementLeft;

        // Create flying nakov with random type
        this.$element = generateRandomType();

        // Append the element to the game field
        this.reinitialize();
        this.$element.prependTo($gameField);
        this.width = this.$element.width();
        this.height = this.$element.height();
        this.speed = defaultSpeed || 1300;

        this.startAnimation();
    }

    // Public API
    FlyingNakov.prototype = {

        // Start the moving animation
        startAnimation: function () {
            var self = this;

            setTimeout(function () {
                self.isMoving = true;

                self.$element.removeClass("hidden");
                animateElement(self, self.movesCount);
            }, self.approachDelay);
        },

        // Checks if the given coordinates are inside the object
        isHit: function (shootXPos, shootYPos) {
            var currentPosition = this.$element.position();
            if (shootXPos >= currentPosition.left &&
                shootXPos <= currentPosition.left + this.width) {
                if (shootYPos >= currentPosition.top &&
                    shootYPos <= currentPosition.top + this.height) {
                    return true;
                }
            }

            return false;
        },

        reinitialize: function () {
            var position = generateRandomPosition(this.width, this.height);
            position.top = $gameFieldHeight;

            this.$element
                .addClass("hidden")
                .clearQueue()
                .stop()
                .css(position);
        },

        // Get the element points
        getPoints: function () {
            return this.$element.data("points");
        },

        // Moves count per fly
        movesCount: 5,
    };

    return FlyingNakov;
});