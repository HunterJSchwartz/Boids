import { Vector } from "../scripts/Vector"; 

describe("Testing Vector Operations", () => {
  test("Vector Equality", () => {
    const vec1: Vector = new Vector(0, 0);
    const vec2: Vector = new Vector(0, 0);
    const equal: boolean = (vec1.x === vec2.x) && (vec1.y === vec2.y); 
    expect(equal).toBe(true);
  });
  test("Vector Inequality", () => {
    const vec1: Vector = new Vector(1, 2);
    const vec2: Vector = new Vector(2, 0);
    const equal: boolean = (vec1.x === vec2.x) && (vec1.y === vec2.y); 
    expect(equal).toBe(false);
  });
  test("Vector Addition 1", () => {
    const vec1: Vector = new Vector(0, 0);
    const vec2: Vector = new Vector(0, 0);
    const sum: Vector = vec1.Add(vec2);
    expect(sum).toStrictEqual(new Vector(0, 0));
  });
  test("Vector Addition 2", () => {
    const vec1: Vector = new Vector(0, -5);
    const vec2: Vector = new Vector(1, 3);
    const sum: Vector = vec1.Add(vec2);
    expect(sum).toStrictEqual(new Vector(1, -2));
  });
  test("Vector Subtraction 1", () => {
    const vec1: Vector = new Vector(3, -5);
    const vec2: Vector = new Vector(0, -3);
    const diff: Vector = vec1.Sub(vec2);
    expect(diff).toStrictEqual(new Vector(3, -2));
  });
  test("Vector Subtraction 2", () => {
    const vec1: Vector = new Vector(5, 3);
    const vec2: Vector = new Vector(8, -1);
    const diff: Vector = vec1.Sub(vec2);
    expect(diff).toStrictEqual(new Vector(-3, 4));
  });
  test("Vector Subtraction 3", () => {
    const vec1: Vector = new Vector(9, 4);
    const vec2: Vector = new Vector(2, -3);
    const diff1: Vector = vec1.Sub(vec2);
    const diff2: Vector = vec2.Sub(vec1);
    expect(diff1).not.toStrictEqual(diff2);
  });
  test("Vector Multiplication 1", () => {
    const vec: Vector = new Vector(0, -5);
    const val: number = 3;
    const product: Vector = vec.Mult(val);
    expect(product).toStrictEqual(new Vector(0, -15));
  });
  test("Vector Multiplication 2", () => {
    const vec: Vector = new Vector(1, -5);
    const val: number = -2;
    const product: Vector = vec.Mult(val);
    expect(product).toStrictEqual(new Vector(-2, 10));
  });
  test("Vector Division 1", () => {
    const vec: Vector = new Vector(1, -5);
    const val: number = -2;
    const quotient: Vector = vec.Div(val);
    expect(quotient).toStrictEqual(new Vector(-0.5, 2.5));
  });
  test("Vector Division 2", () => {
    const vec: Vector = new Vector(12, 0);
    const val: number = 3;
    const quotient: Vector = vec.Div(val);
    expect(quotient).toStrictEqual(new Vector(4, 0));
  });
  test("Vector Division 3", () => {
    const vec: Vector = new Vector(12, 9);
    const val: number = 0;
    const quotient: Vector = vec.Div(val);
    expect(quotient).toStrictEqual(new Vector(Infinity, Infinity));
  });
  test("Vector Mag 1", () => {
    const vec: Vector = new Vector(0, 0);
    const val: number = vec.GetMag();
    expect(val).toStrictEqual(0);
  });
  test("Vector Mag 2", () => {
    const vec: Vector = new Vector(1, 0);
    const val: number = vec.GetMag();
    expect(val).toStrictEqual(1);
  });
  test("Vector Mag 3", () => {
    const vec: Vector = new Vector(10, 7);
    const val: number = vec.GetMag();
    expect(val).toStrictEqual(Math.sqrt(149));
  });
  test("Vector Normalization 1", () => {
    const vec: Vector = new Vector(0, 0);
    const normal: Vector = vec.Normalize();
    expect(normal).toStrictEqual(new Vector(0, 0));
  });
  test("Vector Normalization 2", () => {
    const vec: Vector = new Vector(1, 0);
    const normal: Vector = vec.Normalize();
    expect(normal).toStrictEqual(new Vector(1, 0));
  });
  test("Vector Normalization 3", () => {
    const vec: Vector = new Vector(9, 3);
    const normal: Vector = vec.Normalize();
    expect(normal).toStrictEqual(new Vector(3 / (Math.sqrt(10)), 1 / (Math.sqrt(10))));
  });
  test("Vector Limit 1", () => {
    const vec: Vector = new Vector(1, 0);
    const lim: Vector = vec.Limit(3);
    expect(lim).toStrictEqual(new Vector(1, 0));
  });
  test("Vector Limit 2", () => {
    const vec: Vector = new Vector(1, 0);
    const lim: Vector = vec.Limit(0.5);
    expect(lim).toStrictEqual(new Vector(0.5, 0));
  });
  test("Vector Limit 3", () => {
    const vec: Vector = new Vector(7, -3);
    const lim: Vector = vec.Limit(4);
    expect(lim).toStrictEqual(new Vector(28 / (Math.sqrt(58)), -12 / Math.sqrt(58)));
  });
  test("Vector Distance 1", () => {
    const vec1: Vector = new Vector(5, 3);
    const vec2: Vector = new Vector(8, -1);
    const dist: number = vec1.Distance(vec2);
    expect(dist).toStrictEqual(5);
  });
  test("Vector Distance 2", () => {
    const vec1: Vector = new Vector(5, 8);
    const vec2: Vector = new Vector(3, -1);
    const dist: number = vec1.Distance(vec2);
    expect(parseFloat(dist.toFixed(6))).toStrictEqual(9.219544);
  });
});
