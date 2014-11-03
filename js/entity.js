GARDEN.Entity = function(startPos, spriteIn, updateFunc) {
    this.position = startPos;
    this.update = updateFunc;
    if (spriteIn) {
        this.sprite = spriteIn;
    }
};

GARDEN.Entity.prototype = {
    constructor: GARDEN.Entity,

    draw: function() {
        if (this.sprite) {
            this.sprite.position.x = this.position.x;
            this.sprite.position.y = this.position.y + (this.sprite.size * 0.5);
        }
    },

    getReactionForce: function(other) {
        if (other.sprite) {

        }
    }
};
