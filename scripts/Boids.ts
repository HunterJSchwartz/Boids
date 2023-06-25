import { Vector } from "./Vector.js";
import { Boid } from "./Boid.js";
import { BoidSettings } from "./BoidSettings.js";

export class Boids {

    boids: Boid[] = [];
    
    constructor(numBoids: number, sets: BoidSettings, width: number, height: number) {
        this.CreateBoids(numBoids, sets, width, height);   
    }

    CreateBoids(numBoids: number, sets: BoidSettings, width: number, height: number): void {
        for(let i = 0; i < numBoids; i++) {
            const pos = this.GetRandomPos(width, height); 
            const vel = this.GetRandomVel(sets.maxSpeed);
            const acc = new Vector(Math.random(), Math.random());
            const boid = new Boid(pos, vel, acc, sets);
            this.boids.push(boid);
        }
    }

    UpdateBoids(ctx: CanvasRenderingContext2D): void {
        for(let i = 0; i < this.boids.length; i++) {
            this.boids[i].Move(this.boids);
            this.boids[i].Draw(ctx);
        }
    }

    GetRandomPos(width: number, height: number): Vector {
        return new Vector(Math.random() * width, Math.random() * height);
    }

    GetRandomVel(maxSpeed: number): Vector {
        return new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)
                            .Mult(Math.random() * (maxSpeed - 0.5) + 0.5);
    }
}
