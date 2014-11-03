function playerUpdate() {
    var animating = false;

    // Animation
    if (this.runDelta !== 0) {
        this.position.x += 0.1 * this.runDelta;
        animating = true;
    }

    // Begin running cycle
    if (animating && !this.animating) {
        this.animController.beginAnimation(this.sprite, "RUNNING", this.runDelta < 0);
    }

    // Stop running cycle
    if (!animating && !this.animating) {
        this.animController.beginAnimation(this.sprite, "IDLE", this.runDelta < 0);
    }

    this.animating = animating;
};

var player = new GARDEN.Entity(new BABYLON.Vector2(0, 0), GARDEN.getSprite("img/youmu_run.png", 120), playerUpdate);

player.jumping = false;
player.runDelta = 0;
player.animating = false;
player.animController = new GARDEN.AnimationController(
        {
            IDLE: { start: 0, end: 0},
            RUNNING: { start: 0, end: 8 },
            //   JUMPING: { start: 0, end: 0 },
            //  FALLING: { start: 0, end: 0},
        });
