export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    Add(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }
    Sub(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }
    Mult(val) {
        return new Vector(this.x * val, this.y * val);
    }
    Div(val) {
        return new Vector(this.x / val, this.y / val);
    }
    GetMag() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    Normalize() {
        const mag = this.GetMag();
        if (mag === 0) {
            return this;
        }
        return this.Div(mag);
    }
    Limit(val) {
        const mag = this.GetMag();
        if (mag < val) {
            return this;
        }
        else {
            return this.Normalize().Mult(val);
        }
    }
    Distance(vec) {
        const xDist = (this.x - vec.x) * (this.x - vec.x);
        const yDist = (this.y - vec.y) * (this.y - vec.y);
        return Math.sqrt(xDist + yDist);
    }
    Equals(vec) {
        return (this.x === vec.x) && (this.y === vec.y);
    }
    Print() {
        console.log(`(${this.x}, ${this.y})`);
    }
}
