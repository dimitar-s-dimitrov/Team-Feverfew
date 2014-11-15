"use strict";

define("levelSystem", function (birds) {

    var levels = {
        level1: 3,
        level2: 4,
        level3: 5,
    },
        Bird = require("Bird"),
        currentLevel;

    function createBirds() {
        // TODO: Add specific classes for levels
        for (var i = 0, count = currentLevel - birds.length; i < count; i++) {
            birds.push(new Bird());
        }
    }
   
    function letBirdsFly() {
        var movesCount;

        switch (currentLevel) {
            case levels.level1: movesCount = 7; break;
            case levels.level2: movesCount = 5; break;
            case levels.level3: movesCount = 2; break;
        }

        for (var i = 0; i < currentLevel; i++) {
            birds[i].flyIn(movesCount);
        }
    }

    return {
        reset: function () {
            currentLevel = levels.level1;
            while (birds.length > 0) {
                var bird = birds.pop();
                bird.$element.remove();
            }
        },

        startLevel: function () {
            createBirds();
            letBirdsFly();
        },

        killBird: function (bird) {
            bird.flyOut();

            // Let the bird flyin in the proper level/time
            // Without interval, the css animations wont stop
            setTimeout(function () {
                bird.flyIn(currentLevel + 3);
            }, 20);
        },

        levels: levels,

        onGameOver: $.noop
    }
});