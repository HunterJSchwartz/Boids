import { Vector } from "./Vector.js";
import { Boid } from "./Boid.js";
export class Boids {
    constructor(numBoids, sets, width, height) {
        this.boids = [];
        this.CreateBoids(numBoids, sets, width, height);
    }
    CreateBoids(numBoids, sets, width, height) {
        for (let i = 0; i < numBoids; i++) {
            const pos = this.GetRandomPos(width, height);
            const vel = this.GetRandomVel(sets.maxSpeed);
            const acc = new Vector(0, 0);
            const boid = new Boid(pos, vel, acc, sets);
            this.boids.push(boid);
        }
    }
    UpdateBoids(ctx) {
        for (let i = 0; i < this.boids.length; i++) {
            this.boids[i].Move();
            this.boids[i].Draw(ctx);
        }
    }
    GetRandomPos(width, height) {
        return new Vector(Math.random() * width, Math.random() * height);
    }
    GetRandomVel(maxSpeed) {
        return new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)
            .Mult(Math.random() * (maxSpeed - 0.5) + 0.5);
    }
}
