import { max, getMonth, isCircleIntoSquare } from "./scriptHW2";

const logSpy = jest.spyOn(console, "log");
describe("tests hw2", () => {
  afterEach(() => jest.clearAllMocks());
  describe("max is tow numbers", () => {
    it.each([
      { num1: 2, num2: 1, expected: 2 },
      { num1: 1, num2: 3, expected: 3 },
      { num1: 1, num2: 1, expected: 1 },
    ])(
      "should max number of $num1 and $num2: $expected",
      ({ num1, num2, expected }) => {
        const result = max(num1, num2);

        expect(result).toBe(expected);
      }
    );
    it("should call console.log", () => {
      max(1, 2);

      expect(logSpy).toHaveBeenCalled();
    });
  });

  describe("get title month by number", () => {
    it.each([
      { num1: "3", expected: "Март" },
      { num1: "12", expected: "Декабрь" },
      { num1: "13", expected: "" },
    ])("should for $num1 it month $expected", ({ num1, expected }) => {
      const result = getMonth(num1);

      expect(result).toBe(expected);
    });

    it("should call console.log", () => {
      getMonth(13);

      expect(logSpy).toHaveBeenCalled();
    });
  });

  describe(`check if a circle ($circle) 
    fits into a square ($square): $expected`, () => {
    it.each([
      { circle: 1, square: 2, expected: true },
      { circle: 2, square: 2, expected: true },
      { circle: 3, square: 2, expected: false },
    ])(
      "should circle $circle into square $square: $expected",
      ({ circle, square, expected }) => {
        const result = isCircleIntoSquare(circle, square);

        expect(result).toBe(expected);
      }
    );
  });
});
