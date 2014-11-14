"use strict";

define("Bird", function () {
    var $gameField = $("#game-field"),
        gameFieldWidth = $gameField.width(),
        gameFieldHeight = $gameField.height(),
        $BirdTemplates, templatesCount;

    /******************************************************
        TODO:
            *Implement element self destruction after animation or hit
            *Maybe implement fly-out animation


            *Animations cant be improved!!!
            *animateElement function is not optimized!!!
    *******************************************************/

    // Cache templates and their count
    $BirdTemplates = $("#bird-templates-wrapper").children();
    templatesCount = $BirdTemplates.length;

    // Generate and return flying nakov with random type
    function generateRandomTypeBird() {
        var randomNumber = Math.random() * templatesCount;
        var randomTemplate = $BirdTemplates.eq(Math.floor(randomNumber));
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

    // Creates bird with given class
    // If no class is passed, returns bird with random class.
    function createBird(birdClass) {
        var bird;

        if (birdClass) {
            bird = $BirdTemplates.find("." + birdClass);

            if (!bird.length) {
                console.error("there is no bird template with this class: " + birdClass);
                return generateRandomTypeBird();
            }
        } else {
            return generateRandomTypeBird();
        }

        // Return copy of the template
        return bird.clone();
    }

    // Creates the element animation
    // Change recurse with while loop to set the animation queue proper.
    // With recursive method we build the animation trail after each move end.
    // TODO: check main todo list
    function animateElement(movesLeft) {
        var currentPosition, movesQueue, self = this;

        movesQueue = setInterval(function () {
            if (movesLeft--) {
                var randomPosition = generateRandomPosition(self.width, self.height);
                self.$element.css(randomPosition);
            } else {
                clearInterval(movesQueue);
            }
        }, 1000);

        return movesQueue;
    }

    // Constructor
    function Bird(birdClass) {
        var elementTop, elementLeft;

        // Check if class is passed to the constructor
        if (birdClass) {
            this.$element = createBird(birdClass);
        } else {
            this.$element = generateRandomTypeBird();
        }

        // Append the element to the game field        
        this.$element.prependTo($gameField);
        this.width = this.$element.width();
        this.height = this.$element.height();
    }

    // Public API
    Bird.prototype = {

        // Start the moving animation
        flyIn: function (movesCount) {
            this.reset();
            this.$element.removeClass("hidden");
            this.$element.addClass("animated");
            
            this.animationQueue = animateElement.apply(this, [movesCount]);
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

        reset: function() {
            var randomPosition = generateRandomPosition(this.width, this.height);
            randomPosition.top = gameFieldHeight;
            this.$element.css(randomPosition);
        },

        // Starts flyout animation
        flyOut: function () {
            // TODO: Implement it
            clearInterval(this.animationQueue);
            this.$element.removeClass("animated");
            this.$element.addClass("hidden");
            this.reset();
        },

        // Get the element points
        getPoints: function () {
            return this.$element.data("points");
        },

        changeSpeed: function () {

        }
    };

    return Bird;
});