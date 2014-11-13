"use strict";

define("FlyingBird", function () {
    var $gameField = $("#game-field"),
        gameFieldWidth = $gameField.width(),
        gameFieldHeight = $gameField.height(),
        $flyingBirdTemplates, templatesCount;

    /******************************************************
        TODO:
            *Implement element self destruction after animation or hit
            *Maybe implement fly-out animation


            *Animations cant be improved!!!
            *animateElement function is not optimized!!!
    *******************************************************/

    // Cache templates and their count
    $flyingBirdTemplates = $("#flying-bird-templates-wrapper").children();
    templatesCount = $flyingBirdTemplates.length;

    // Generate and return flying nakov with random type
    // TODO: this is unnecessary function
    function generateRandomType() {
        var randomNumber = Math.random() * templatesCount;
        var randomTemplate = $flyingBirdTemplates.eq(Math.floor(randomNumber));
        return randomTemplate.clone();
    }

    // Generates random element position relative to the game field
    function generateRandomPosition(elementWidth, elementHeight) {
        var left = Math.random() * (gameFieldWidth - elementWidth - 1) + 1;
        var top = Math.random() * (gameFieldHeight - elementHeight - 1) + 1;

        return {
            top: top,
            left: left
        };
    }

    function createBird(birdClass) {
        // TODO: implement it!
    }

    // Creates the element animation
    // Change recurse with while loop to set the animation queue proper.
    // With recursive method we build the animation trail after each move end.
    // TODO: check main todo list
    function animateElement(flyingBird, movesLeft) {
        var newRandomPosition = generateRandomPosition(flyingBird.width, flyingBird.height);

        flyingBird.$element.animate(newRandomPosition, flyingBird.speed, function () {
            if (--movesLeft > 0) {
                animateElement(flyingBird, movesLeft);
                
            } else {
                // TODO: check main todo list
            }
        });
    }

    // Constructor
    function FlyingBird(defaultSpeed, birdClass) {
        var elementTop, elementLeft;

        // Check if class is passed to the constructor
        if (birdClass) {
            this.$element = createBird(birdClass);
        }
        
        // TODO: improve exists!!! createBird without class can make a random class bird!
        this.$element = generateRandomType();

        // Append the element to the game field        
        this.$element.prependTo($gameField);
        this.width = this.$element.width();
        this.height = this.$element.height();
        this.speed = defaultSpeed || 1300;

        // Prepare and start
        this.reinitialize();
        this.startAnimation();
    }

    // Public API
    FlyingBird.prototype = {

        // Start the moving animation
        startAnimation: function () {
            this.$element.removeClass("hidden");
            animateElement(this, this.movesCount);
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

        // Reinitializes the element to new starging position and stops any animation running
        reinitialize: function () {
            var position = generateRandomPosition(this.width, this.height);
            position.top = gameFieldHeight;

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

    return FlyingBird;
});