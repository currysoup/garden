GARDEN.spriteManagers = {};

GARDEN.getSprite = function(name, size) {
    if (!GARDEN.spriteManagers[name]) {
        GARDEN.addSpriteManager(name, size);
    }

    return new BABYLON.Sprite("abc", GARDEN.spriteManagers[name]);
};

GARDEN.addSpriteManager = function(name, size) {
    if (!GARDEN.spriteManagers[name]) {
        GARDEN.spriteManagers[name] = new BABYLON.SpriteManager(name, name, 128, size, renderer);
    }
};
