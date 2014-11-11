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

    // Prevent the children elements from triggering this event
    $gameField.children().on("mousemove", function (e) {
        e.stopPropagation();
    });

    return {
        onShoot: function (action) {

        }
    };
});