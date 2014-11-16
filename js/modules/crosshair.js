"use strict";

define("crosshair", function () {
    var $crosshair = $("#crosshair"),
        $gameField = $("#game-field"),
        gameFieldWidth = $gameField.width(),
        gameFieldHeight = $gameField.height(),
        gameFieldOffset = $gameField.offset(),
        crosshairWidth = $crosshair.width(),
        crosshairHeight = $crosshair.height();

    // Using sound system module
    var soundSystem = require("soundSystem");

    // Set the crosshair movement handler
    $(document.body).on("mousemove", function (e) {
        e.stopPropagation();

        var topOffset = e.pageY - gameFieldOffset.top - crosshairHeight / 2;
        var leftOffset = e.pageX - gameFieldOffset.left - crosshairWidth / 2;
        
        if (leftOffset < 0) {
            leftOffset = 0;
        }
        if (leftOffset > gameFieldWidth) {
            leftOffset = gameFieldWidth;
        }
        if (topOffset < 0) {
            topOffset = 0;
        }
        if (topOffset > gameFieldHeight) {
            topOffset = gameFieldHeight;
        }
        
        $crosshair.css({
            top: topOffset,
            left: leftOffset
        });
    });


    return {
        /* 
         * Binds handler to the shoot event.
         * Passes plain object with the position of the
         * element(relative to the parent) to the handler.
         */
        onShoot: function (action) {
            $gameField.on("mousedown", function (e) {
                e.stopPropagation();
                e.preventDefault();

                // When we pass a function to the onShoot function
                // It defines a event handler to the mouse left click event
                // $gameField.on is the function that defines the event handlers
                // So every mouse left click tells the browser to run over this lines of code
                // We should make changes here!!

                // The user has shooted in my head... anyway...
                // We can use your module as we have already included it
                soundSystem.produceShootSound();
                // I expect to hear a "booooom" sound by using this function, right?
                // Ako chuq neshto drugo, shte si kaja "kakvo pravish ti, gad mrusna!?"

                action({
                    top: e.pageY - gameFieldOffset.top,
                    left: e.pageX - gameFieldOffset.left
                });
            });
        }
    };
});