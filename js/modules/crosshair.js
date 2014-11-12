define("crosshair", function () {
    var $crosshair = $("#crosshair"),
        $gameField = $("#game-field"),
        gameFieldOffset = $gameField.offset(),
        crosshairWidth = $crosshair.width(),
        crosshairHeight = $crosshair.height();

    $gameField.on("mousemove", function (e) {
        e.stopPropagation();

        $crosshair.css({
            top: e.pageY - gameFieldOffset.top - crosshairHeight / 2,
            left: e.pageX - gameFieldOffset.left - crosshairWidth / 2
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