import { BoidSettings } from "./BoidSettings.js";
import { Boids } from "./Boids.js";

const HEIGHT: number = 720;
const WIDTH: number = 1280;

const FPS: number = 60;
const TICK_RATE: number = 1000 / FPS;

const CANVAS: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const CTX = CANVAS.getContext("2d") as CanvasRenderingContext2D; 

const boidSets: BoidSettings =  {
    visionRad: 30,
    maxSpeed: 2.75,
    pullForce: 0.5,
    alignForce: 0.2,
    cohesionForce: 0.05,
    seperationForce: 0.15,
    avoidForce: 0.25,
    size: 5,
    fillColor: "blue",
    strokeColor: "cyan",
}

const boids = new Boids(50, boidSets);

function Setup() {
    CANVAS.width = WIDTH;
    CANVAS.height = HEIGHT;
    console.log(boids.boids);
    Update();
}

async function Update() {
    await Sleep(TICK_RATE);
    boids.UpdateBoids(CTX);
    Update();
}

function Sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

Setup();
