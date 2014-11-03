var worldLayout = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,1,1,0,0],
    [0,1,0,0,0,0,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1]];

var world = new GARDEN.Entity(new BABYLON.Vector2(0, 0), null, worldUpdate);
world.tiles = [];

function worldUpdate() {
    for (i = 0; i < this.tiles.length; ++i) {
        this.tiles[i].draw();
    }
};

function setupTiles() {
    worldLayout.reverse();

    for (y = 0; y < worldLayout.length; ++y) {
        for (x = 0; x < worldLayout[y].length; ++x) {
            if (worldLayout[y][x] === 1) {
                var pos = new BABYLON.Vector2(x, y);
                world.tiles.push(new GARDEN.Entity(pos, GARDEN.getSprite("img/bricks.jpg", 400), function() {}));
            }
        }
    }
};

setupTiles();

