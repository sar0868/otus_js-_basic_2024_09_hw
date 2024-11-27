import { createArray, sumElArray, arrDouble, max, min } from "./scriptHW5";

describe("tests hw 5", () => {
  it("should array (arr) integer this length = 10", () => {
    expect(createArray()).toHaveLength(10);
  });

  it.each([
    { array: [1, 2, 3], expected: 6 },
    { array: [1, -1, 1], expected: 1 },
    { array: [], expected: 0 },
  ])(
    "should for $array summa elemens equals: $expected",
    ({ array, expected }) => {
      const result = sumElArray(array);

      expect(result).toBe(expected);
    },
  );

  it.each([
    { array: [1, 2], expected: [2, 4] },
    { array: [0, 1, 0], expected: [0, 2, 0] },
    { array: [], expected: [] },
  ])(
    "should arrDouble($array) expected elements are twice as big as arr: $expected",
    ({ array, expected }) => {
      const result = arrDouble(array);

      expect(result).toEqual(expected);
    },
  );
  it.each([
    { array: [1, 2, 3], minEl: 1, maxEl: 3 },
    { array: [4, 2, 3], minEl: 2, maxEl: 4 },
    { array: [0, 0, -1], minEl: -1, maxEl: 0 },
    { array: [1, 0, 0], minEl: 0, maxEl: 1 },
  ])(
    "should min=$minEl and max=$maxEl element for $array",
    ({ array, minEl, maxEl }) => {
      const minimum = min(array);
      const maximum = max(array);

      expect(minimum).toBe(minEl);
      expect(maximum).toBe(maxEl);
    },
  );
});
