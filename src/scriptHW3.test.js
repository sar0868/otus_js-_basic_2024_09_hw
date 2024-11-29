import { sum, mult7, mean } from "./scriptHW3";

const logSpy = jest.spyOn(console, "log");

describe("tests hw 03", () => {
  afterEach(() => jest.clearAllMocks());
  describe("sum integer 50...100", () => {
    it("should summa numbers 50-100: 3825", () => {
      const expected = 3825;

      const result = sum();
      const inpResult = `Сумма целых цисел от 50 до 100 равна ${expected}`;

      expect(result).toBe(expected);
      expect(logSpy).toHaveBeenCalledWith(inpResult);
    });
  });

  describe("7 multiplication table", () => {
    it("should input equal expected", () => {
      const expected =
        "7 x 1 = 7\n" +
        "7 x 2 = 14\n" +
        "7 x 3 = 21\n" +
        "7 x 4 = 28\n" +
        "7 x 5 = 35\n" +
        "7 x 6 = 42\n" +
        "7 x 7 = 49\n" +
        "7 x 8 = 56\n" +
        "7 x 9 = 63\n";
      const result = mult7();

      expect(result).toEqual(expected);
    });
    it("should 9 call console.log", () => {
      mult7();

      expect(logSpy).toHaveBeenCalledTimes(9);
    });
  });

  describe("Calculate average odd numbers", () => {
    it.each([
      { n: 1, expected: 1 },
      { n: 4, expected: 2 },
      { n: 0, expected: NaN },
      { n: -3, expected: NaN },
    ])("should average odd numbers 1..$n = $expected", ({ n, expected }) => {
      const result = mean(n);
      const inpResult = `Среднее арифиметическое нечетных чисел от 1 до ${n} равно ${expected}`;

      expect(result).toBe(expected);
      expect(logSpy).toHaveBeenCalledWith(inpResult);
    });
  });
});
