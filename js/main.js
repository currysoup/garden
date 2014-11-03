var mainScene = new GARDEN.Scene();

function cameraChase() {
    var deltaX = 0.1 * (player.position.x - camera.position.x);
    var deltaY = 0.1 * (player.position.y - camera.position.y);
    camera.position.x += deltaX;
    camera.position.y += deltaY;
};

function loadScene() {
    mainScene.addEntity(player);
    mainScene.addEntity(world);
};

loadScene();

function loop() {
    cameraChase();
    mainScene.update();

    // Draw links up entity positions to render position
    mainScene.draw();

    // Render Babylon.js graphics scene
    renderer.render();
};


engine.runRenderLoop(function () {
    loop();
});
