export class Boid {
    constructor(position, velocity, acceleration, sets) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.sets = sets;
    }
    Draw(ctx) {
        ctx.fillStyle = this.sets.fillColor;
        ctx.strokeStyle = this.sets.strokeColor;
        ctx.lineWidth = 1;
        ctx.fillRect(150, 150, 25, 25);
    }
}
