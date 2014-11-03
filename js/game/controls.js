// Player controls
window.addEventListener("keydown", function (evt) {
    // A
    if (evt.keyCode == 65) {
        player.runDelta = -1;
    }
    // D
    if (evt.keyCode == 68) {
        player.runDelta = 1;
    }
    // Space
    if (evt.keyCode == 32) {
        player.jumping = true;
    }
});

window.addEventListener("keyup", function (evt) {
    // A
    if (evt.keyCode == 65) {
        player.runDelta = 0;
    }
    // D
    if (evt.keyCode == 68) {
        player.runDelta = 0;
    }
    // Space
    if (evt.keyCode == 32) {
        player.jumping = true;
    }
});
