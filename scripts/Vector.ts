export class Vector {

    x: number;
    y: number;
    mag: number;

    constructor(x: number = 0, y: number = 0) {
       this.x = x;
       this.y = y;
       this.mag = this.CalcMag();
    }

    CalcMag(): number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y)); 
    }

    Print() {
        console.log(`(${this.x}, ${this.y})`); 
    }
}
