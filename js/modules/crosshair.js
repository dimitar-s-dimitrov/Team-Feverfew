"use strict";

define("crosshair", function () {
    var $crosshair = $("#crosshair"),
        $gameField = $("#game-field"),
        gameFieldWidth = $gameField.width(),
        gameFieldHeight = $gameField.height(),
        gameFieldOffset = $gameField.offset(),
        crosshairWidth = $crosshair.width(),
        crosshairHeight = $crosshair.height();

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
            $gameField.on("click", function (e) {
                e.stopPropagation();

                action({
                    top: e.pageY - gameFieldOffset.top,
                    left: e.pageX - gameFieldOffset.left
                });
            });
        }
    };
});