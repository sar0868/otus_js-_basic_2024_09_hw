import { sum, mult, totalChar, sumNumbers } from "./scriptHW1";

describe("tests hw01", () => {
  describe("tests sum numbers", () => {
    it.each([
      { inputA: 2, inputB: 3, expected: 5 },
      { inputA: -2, inputB: 1, expected: -1 },
      { inputA: 2, inputB: 0, expected: 2 },
      { inputA: 0, inputB: 0, expected: 0 },
    ])(
      "should sum:  $inputA + $inputB = $expected",
      ({ inputA, inputB, expected }) => {
        const result = sum(inputA, inputB);

        expect(result).toBe(expected);
      }
    );
  });

  describe("tests mult numbers", () => {
    it.each([
      { inputA: 2, inputB: 3, expected: 6 },
      { inputA: -2, inputB: 1, expected: -2 },
      { inputA: 2, inputB: 0, expected: 0 },
      { inputA: 0, inputB: 0, expected: 0 },
    ])(
      "should mult:  $inputA * $inputB = $expected",
      ({ inputA, inputB, expected }) => {
        const result = mult(inputA, inputB);

        expect(result).toBe(expected);
      }
    );
  });

  describe("tests totalChar", () => {
    it.each([
      { str1: "aa", str2: "aa", expected: 4 },
      { str1: "aa", str2: "", expected: 2 },
      { str1: "", str2: "aa", expected: 2 },
      { str1: "", str2: "", expected: 0 },
    ])(
      "should summa total char: '$str1', '$str2': $expected",
      ({ str1, str2, expected }) => {
        const result = totalChar(str1, str2);

        expect(result).toBe(expected);
      }
    );
  });

  describe("tests sumNumbers", () => {
    it.each([
      { number: 123, expected: 6 },
      { number: 100, expected: 1 },
      { number: 0, expected: 0 },
    ])(
      "should summa numbers for $number =  $expected",
      ({ number, expected }) => {
        const result = sumNumbers(number);

        expect(result).toBe(expected);
      }
    );
  });
});