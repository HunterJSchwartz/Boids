import { Vector } from "./Vector.js";
import { DrawableObject } from "./DrawableObject.js";
import { BoidSettings } from "./BoidSettings.js";

export class Boid implements DrawableObject {
    
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    sets: BoidSettings;
    containPadding: number = 75;

    constructor(position: Vector, velocity: Vector, acceleration: Vector, sets: BoidSettings) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.sets = sets;
    }

    Move(boids: Boid[]): void {
        this.acceleration = this.acceleration.Add(this.Contain())
                                            .Add(this.Align(boids))
                                            .Add(this.Seperate(boids))
                                            .Add(this.Cohesion(boids));
        this.velocity = this.CapSpeed(this.velocity.Add(this.acceleration));
        this.position = this.position.Add(this.velocity);
    }

    CapSpeed(vec: Vector): Vector {
        if(vec.GetMag() > this.sets.maxSpeed) {
           return vec.Normalize().Mult(this.sets.maxSpeed); 
        }
        else {
            return vec;
        }
    }

    Contain(): Vector {
       const left: number = this.position.x - this.containPadding; 
       const right: number = this.position.x + this.containPadding; 
       const bottom: number = this.position.y + this.containPadding; 
       const top: number = this.position.y - this.containPadding; 
       
       let dir: Vector = new Vector(0, 0);
       if(left < 0) {
            dir = dir.Add(new Vector(1, 0)).Mult(this.sets.containForce);
       }
       if(right > 1280) {
            dir = dir.Add(new Vector(-1, 0)).Mult(this.sets.containForce);
       }
       if(top < 0) {
            dir = dir.Add(new Vector(0, 1)).Mult(this.sets.containForce);
       }
       if(bottom > 720) {
            dir = dir.Add(new Vector(0, -1)).Mult(this.sets.containForce);
       }
       return dir;
    }

    Align(boids: Boid[]): Vector {
        let dir: Vector = new Vector(0, 0);
        let localBoids: number = 0;
        for(const boid of boids) {
            const dist: number = this.position.Distance(boid.position);
            if(dist <= this.sets.visionRad && boid !== this) {
                dir = dir.Add(boid.velocity);
                localBoids++;
            }
        }
        if(localBoids > 0) {
            dir = dir.Div(localBoids);
            dir = dir.Normalize().Mult(this.sets.maxSpeed);
            dir = dir.Sub(this.velocity);
            dir = dir.Normalize().Mult(this.sets.pullForce).Mult(this.sets.alignForce);
        }
        return dir;
    }

    Seperate(boids: Boid[]): Vector {
        let dir: Vector = new Vector(0, 0);
        let localBoids: number = 0;
        for(const boid of boids) {
            const dist: number = this.position.Distance(boid.position);
            if(dist <= this.sets.visionRad && boid !== this) {
                let diff: Vector = this.position.Sub(boid.position);
                diff = diff.Div(dist * dist);
                dir = dir.Add(diff);
                localBoids++;
            } 
        }
        if(localBoids > 0) {
            dir = dir.Div(localBoids);
            dir = dir.Normalize().Mult(this.sets.maxSpeed);
            dir = dir.Sub(this.velocity);
            dir = dir.Normalize().Mult(this.sets.pullForce).Mult(this.sets.seperationForce);
        }
        return dir;
    }

    Cohesion(boids: Boid[]): Vector {
        let dir: Vector = new Vector(0, 0);
        let localBoids: number = 0;
        for(const boid of boids) {
            const dist: number = this.position.Distance(boid.position);
            if(dist <= this.sets.visionRad && boid !== this) {
                dir = dir.Add(boid.position);
                localBoids++;
            } 
        }
        if(localBoids > 0) {
            dir = dir.Div(localBoids);
            dir = dir.Sub(this.position);
            dir = dir.Normalize().Mult(this.sets.maxSpeed);
            dir = dir.Sub(this.velocity);
            dir = dir.Normalize().Mult(this.sets.pullForce).Mult(this.sets.cohesionForce);
        }
        return dir;
    }

    GetPoints(): Vector[] {
        let dir: Vector;
        let perp: Vector;
        if(this.velocity.GetMag() === 0) {
            dir = new Vector(0, 1);
            perp = new Vector(1, 0);
        }
        else {
            dir = new Vector(this.velocity.x, this.velocity.y).Normalize();
            perp = new Vector(this.velocity.y, -this.velocity.x).Normalize();
        }
        const point1: Vector = new Vector(this.position.x + dir.x * this.sets.size * 2, 
                                            this.position.y + dir.y * this.sets.size * 2);
        const point2: Vector = new Vector(this.position.x - dir.x * this.sets.size + perp.x * this.sets.size * 1.35,
                                            this.position.y - dir.y * this.sets.size + perp.y * this.sets.size * 1.35);
        const point3:Vector = new Vector(this.position.x - dir.x * this.sets.size - perp.x * this.sets.size * 1.35,
                                            this.position.y - dir.y * this.sets.size - perp.y * this.sets.size * 1.35);
        return [point1, point2, point3];
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        const points: Vector[] = this.GetPoints();
        ctx.fillStyle = this.sets.fillColor; 
        ctx.strokeStyle = this.sets.strokeColor;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);
        ctx.lineTo(points[2].x, points[2].y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    //Debug
    DrawVisionCircle(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.sets.visionRad, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
