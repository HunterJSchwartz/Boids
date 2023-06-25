import { BoidSettings } from "./BoidSettings.js";
import { Boids } from "./Boids.js";

const HEIGHT: number = 720;
const WIDTH: number = 1280;

const CANVAS: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const CTX = CANVAS.getContext("2d") as CanvasRenderingContext2D; 

const boidSets: BoidSettings =  {
    visionRad: 50,
    maxSpeed: 5.5,
    containForce: .5,
    pullForce: .6,
    alignForce: 0.3,
    cohesionForce: 0.05,
    seperationForce: 0.12,
    avoidForce: 0.25,
    size: 5,
    fillColor: "blue",
    strokeColor: "cyan",
}

const boids = new Boids(200, boidSets, WIDTH, HEIGHT);

function Setup(): void {
    CANVAS.width = WIDTH;
    CANVAS.height = HEIGHT;
    Update();
}

function Update() {
    CTX.clearRect(0, 0, WIDTH, HEIGHT);
    boids.UpdateBoids(CTX);
    window.requestAnimationFrame(Update);
}

function Sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

Setup();
