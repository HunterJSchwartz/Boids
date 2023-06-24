var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Boids } from "./Boids.js";
const HEIGHT = 720;
const WIDTH = 1280;
const FPS = 60;
const TICK_RATE = 1000 / FPS;
const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const boidSets = {
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
};
const boids = new Boids(50, boidSets);
function Setup() {
    CANVAS.width = WIDTH;
    CANVAS.height = HEIGHT;
    console.log(boids.boids);
    Update();
}
function Update() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Sleep(TICK_RATE);
        boids.UpdateBoids(CTX);
        Update();
    });
}
function Sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
Setup();
