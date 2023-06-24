export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.mag = this.CalcMag();
    }
    CalcMag() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    Print() {
        console.log(`(${this.x}, ${this.y})`);
    }
}
