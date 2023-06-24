import { Vector } from "./Vector.js";
import { Boid } from "./Boid.js";
import { BoidSettings } from "./BoidSettings.js";

export class Boids {

    boids: Boid[] = [];
    
    constructor(numBoids: number, sets: BoidSettings) {
        this.CreateBoids(numBoids, sets);   
    }

    CreateBoids(numBoids: number, sets: BoidSettings) {
        for(let i = 0; i < numBoids; i++) {
            const pos = new Vector(0, 0);
            const vel = new Vector(0, 0);
            const acc = new Vector(0, 0);
            const boid = new Boid(pos, vel, acc, sets);
            this.boids.push(boid);
        }
    }

    UpdateBoids(ctx: CanvasRenderingContext2D) {
        for(let i = 0; i < this.boids.length; i++) {
            this.boids[i].Draw(ctx);
        }
    }
}
