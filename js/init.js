var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);

var camera;

// Contains code to run the graphics
function initRenderer() {

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.15, 0, 0.15);

    camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -1), scene);
    camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

    camera.orthoTop = canvas.height / 400;
    camera.orthoBottom = -canvas.height / 400;
    camera.orthoLeft = -canvas.width / 400;
    camera.orthoRight = canvas.width / 400;

    return scene;
};

var renderer = initRenderer();

window.addEventListener("resize", function() {
    engine.resize();

    // Recalculate projection
    camera.orthoTop = canvas.height / 400;
    camera.orthoBottom = -canvas.height / 400;
    camera.orthoLeft = -canvas.width / 400;
    camera.orthoRight = canvas.width / 400;
});

var GARDEN = { version: '1.0' };
