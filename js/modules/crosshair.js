define("crosshair", function () {
    var $crosshair = $("#crosshair"),
        $gameField = $("#game-field"),
        gameFieldOffset = $gameField.offset();

    $gameField.on("mousemove", function(e) {
        $crosshair.css({
            top: e.pageY - gameFieldOffset.top - $crosshair.height(),
            left: e.pageX - gameFieldOffset.left - $crosshair.width()
        });
    });

    return {
        move: function () { }
    };
});