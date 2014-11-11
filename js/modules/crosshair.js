define("crosshair", function () {
    var $crosshair = $("#crosshair"),
        $gameField = $("#game-field"),
        gameFieldOffset = $gameField.offset(),
        crosshairWidth = $crosshair.width(),
        crosshairHeight = $crosshair.height();

    $gameField.on("mousemove", function (e) {
        $crosshair.css({
            top: e.pageY - gameFieldOffset.top - crosshairHeight,
            left: e.pageX - gameFieldOffset.left - crosshairWidth
        });
    });


    return {
        /* 
         * Binds handler to the shoot event.
         * Passes plain object with the offset of the
         * element to the handler.
         */
        onShoot: function (action) {
            $gameField.on("click", function (e) {
                action($crosshair.offset());
            });
        }
    };
});