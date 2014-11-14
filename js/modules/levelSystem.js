"use strict";

define("levelSystem", function (flyingBirds) {

    var levels = {
        level1: 3,
        level2: 4,
        level3: 5,
    },
        FlyingBird = require("FlyingBird"),
        currentLevel;

    function createBirds() {
        // TODO: Add specific classes for levels
        for (var i = 0, count = currentLevel - flyingBirds.length; i < count; i++) {
            flyingBirds.push(new FlyingBird());
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
            flyingBirds[i].flyIn(movesCount);
        }
    }

    return {
        reset: function () {
            currentLevel = levels.level1;
            while (flyingBirds.length > 0) {
                flyingBirds.pop();
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