import {
  checkRightTriangle,
  getCircumferenceAndAreaCircle,
  rootsEquation,
} from "./scriptHW9";

describe("tests he 9", () => {
  describe("check right triangle", () => {
    it.each([
      { sides: [1, 2, 3, 4], expected: false },
      { sides: [1, 1, 3], expected: false },
      { sides: [3, 4, 6], expected: false },
      { sides: [0, 4, 6], expected: false },
      { sides: [3, 4, 5], expected: true },
    ])("should check triangle $sides: $expected", ({ sides, expected }) => {
      const result = checkRightTriangle(sides);

      expect(result).toBe(expected);
    });
  });

  describe("get circumference and area circle by radius", () => {
    it.each([
      { r: 1, c: "6.28", a: "3.14" },
      { r: 3, c: "18.85", a: "28.27" },
    ])("should for radius=$r circum: $c, area:$a", ({ r, c, a }) => {
      const result = getCircumferenceAndAreaCircle(r);

      expect(result).toEqual({ circumference: c, area: a });
    });
  });

  describe("get roots equation", () => {
    it.each([
      { a: 4, b: 1, c: 2, expected: undefined },
      { a: 1, b: 2, c: 1, expected: -1 },
      { a: 1, b: 2, c: -3, expected: [-3, 1] },
    ])("should for ($a, $b, $c) roots: $expected", ({ a, b, c, expected }) => {
      const result = rootsEquation(a, b, c);

      expect(result).toEqual(expected);
    });
  });
});
