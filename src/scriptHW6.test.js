import { diff, isWord, pow } from "./scriptHW6";

describe("tests he 6", () => {
  describe("test diff", () => {
    it.each([
      { num1: 10, num2: 0, expected: 10 },
      { num1: -1, num2: 1, expected: 2 },
      { num1: -1, num2: -3, expected: 2 },
    ])(
      "should get diff between $num1 and $num2: $expected",
      ({ num1, num2, expected }) => {
        const result = diff(num1, num2);

        expect(result).toBe(expected);
      },
    );
  });

  describe("test isWord", () => {
    it.each([
      { text: "hello", expected: true },
      { text: " Hello", expected: true },
      { text: "hello world", expected: false },
      { text: "h.ll", expected: false },
      { text: "", expected: false },
    ])(
      "should check count word equal 1 for '$text': $expected",
      ({ text, expected }) => {
        const result = isWord(text);

        expect(result).toBe(expected);
      },
    );
  });

  describe("test pow", () => {
    it.each([
      { a: 2, x: 2, expected: 4 },
      { a: 2, x: 1, expected: 2 },
      { a: 2, x: 0, expected: 1 },
      { a: -2, x: 3, expected: -8 },
      { a: 0, x: 3, expected: 0 },
    ])(
      "should get $a a raised to the power $x.: $expected",
      ({ a, x, expected }) => {
        const result = pow(a, x);

        expect(result).toBe(expected);
      },
    );
  });
});
