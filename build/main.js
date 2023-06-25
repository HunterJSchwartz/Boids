import { Boids } from "./Boids.js";
const HEIGHT = 720;
const WIDTH = 1280;
const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const boidSets = {
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
};
const boids = new Boids(200, boidSets, WIDTH, HEIGHT);
function Setup() {
    CANVAS.width = WIDTH;
    CANVAS.height = HEIGHT;
    Update();
}
function Update() {
    CTX.clearRect(0, 0, WIDTH, HEIGHT);
    boids.UpdateBoids(CTX);
    window.requestAnimationFrame(Update);
}
function Sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
Setup();
