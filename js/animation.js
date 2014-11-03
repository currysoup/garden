// Map animation states onto starts and ends of a sprite sheet
GARDEN.AnimationController = function(spriteIndexObject) {
    this.sio = spriteIndexObject;
}

GARDEN.AnimationController.prototype = {
    construct: GARDEN.AnimationController,

    beginAnimation: function(sprite, state, flip) {
        var animation = this.sio[state];
        sprite.playAnimation(animation.start, animation.end, true, 100);
        sprite.invertU = flip;
    }
};
