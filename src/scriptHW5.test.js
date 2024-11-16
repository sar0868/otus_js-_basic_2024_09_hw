import { arr, arrDouble, max, min } from "./scriptHW5";

describe("tests hw 5", () => {
  it("should array (arr) integer this length = 10", () => {
    expect(arr).toHaveLength(10);
  });

  it("should array (arrDouble) array elements are twice as big as arr", () => {
    const expectedEl1 = arr[0] * 2;
    const expectedEl3 = arr[2] * 2;
    const expectedEl10 = arr[9] * 2;

    expect(arrDouble).toHaveLength(10);
    expect(arrDouble[0]).toBe(expectedEl1);
    expect(arrDouble[2]).toBe(expectedEl3);
    expect(arrDouble[9]).toBe(expectedEl10);
  });
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
    }
  );
});
