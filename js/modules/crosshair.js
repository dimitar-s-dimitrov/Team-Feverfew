define("crosshair", function () {
    var $crosshair = $("#crosshair"),
        $gameField = $("#game-field"),
        gameFieldOffset = $gameField.offset(),
        crosshairWidth = $crosshair.width(),
        crosshairHeight = $crosshair.height();

    $gameField.on("mousemove", function (e) {
        if (e.target == $gameField[0]) {
            $crosshair.css({
                top: e.pageY - gameFieldOffset.top - crosshairHeight,
                left: e.pageX - gameFieldOffset.left - crosshairWidth
            });
        }
    });

    return {
        move: function () { }
    };
});