import { Vector } from "./Vector.js";
import { Boid } from "./Boid.js";
export class Boids {
    constructor(numBoids, sets) {
        this.boids = [];
        this.CreateBoids(numBoids, sets);
    }
    CreateBoids(numBoids, sets) {
        for (let i = 0; i < numBoids; i++) {
            const pos = new Vector(0, 0);
            const vel = new Vector(0, 0);
            const acc = new Vector(0, 0);
            const boid = new Boid(pos, vel, acc, sets);
            this.boids.push(boid);
        }
    }
    UpdateBoids(ctx) {
        for (let i = 0; i < this.boids.length; i++) {
            this.boids[i].Draw(ctx);
        }
    }
}
