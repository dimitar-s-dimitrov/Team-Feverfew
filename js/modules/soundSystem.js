define("soundSystem", function () {
    // Vzemame referenciq kum audio html tag-a
    var mainAudio = document.getElementById("#main-audio");
    var effectsAudio = document.getElementById("#effects-audio");

    function shoot() {
        effectsAudio.load();
        effectsAudio.play();
    }
    function playSong() {
        mainAudio.load();
        mainAudio.play();
    }

    // The object that we will call on "require"
    var module = {
        produceShootSound: function () {
            // calling the private function
            shoot();
            playSong();
        }
    };

    // Vrushtame go
    return module;
});