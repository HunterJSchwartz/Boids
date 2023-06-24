import { Vector } from "./Vector.js";
import { DrawableObject } from "./DrawableObject.js";
import { BoidSettings } from "./BoidSettings.js";

export class Boid implements DrawableObject {
    
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    sets: BoidSettings;

    constructor(position: Vector, velocity: Vector, acceleration: Vector, sets: BoidSettings) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.sets = sets;
    }

    Draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.sets.fillColor; 
        ctx.strokeStyle = this.sets.strokeColor;
        ctx.lineWidth = 1;
        ctx.fillRect(150, 150, 25, 25);
    }
}
