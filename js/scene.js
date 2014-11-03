GARDEN.Scene = function() {
    this.entities = [];
};

GARDEN.Scene.prototype = {
    constructor: GARDEN.Scene,

    addEntity: function(entity) {
        this.entities.push(entity);
    },

    addEntities: function(toAdd) {
        for (index = 0; index < this.toAdd.length; ++index) {
            this.entities.push(toAdd[index]);
        }
    },

    update: function() {
        for (index = 0; index < this.entities.length; ++index) {
            this.entities[index].update();
        }
    },

    draw: function() {
        for (index = 0; index < this.entities.length; ++index) {
            this.entities[index].draw();
        }
    }
};

