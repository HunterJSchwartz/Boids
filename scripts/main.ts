const HEIGHT: number = 720;
const WIDTH: number = 1280;

const FPS: number = 60;
const TICK_RATE: number = 1000 / FPS;

const CANVAS: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const CTX = CANVAS.getContext("2d") as CanvasRenderingContext2D; 

function Setup() {
    CANVAS.width = WIDTH;
    CANVAS.height = HEIGHT;
    Update();
}

async function Update() {
    await Sleep(TICK_RATE);
    Update();
}

function Sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

Setup();
