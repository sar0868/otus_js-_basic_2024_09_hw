import { isDate, isEmail, isNumberPhone } from "./scriptHW10";

describe("tests hew 10", () => {
  describe("check input is a date", () => {
    it.each([
      { inp: "01.01.2024", expected: true },
      { inp: "17.11.2024", expected: true },
      { inp: "32.01.2024", expected: false },
      { inp: "01.13.2024", expected: false },
      { inp: "01.01.20241", expected: false },
      { inp: "0a.01.20241", expected: false },
    ])("should for input=$inp is a date: $expected", ({ inp, expected }) => {
      const result = isDate(inp);

      expect(result).toBe(expected);
    });
  });

  describe("check input is a email", () => {
    it.each([
      { inp: "example@exampl.com", expected: true },
      { inp: "ex12@exampl.com", expected: true },
      { inp: "eXam12@exampl.com", expected: true },
      { inp: "example.com", expected: false },
      { inp: "example@example.c", expected: false },
      { inp: "example@exa_mpl.com", expected: false },
      { inp: "example@exampl.1om", expected: false },
      { inp: "name@exampl.caaaaa", expected: false },
      { inp: "цname@exampl.com", expected: false },
      { inp: "namщe@exampl.com", expected: false },
    ])("should for input=$inp is a email: $expected", ({ inp, expected }) => {
      const result = isEmail(inp);

      expect(result).toBe(expected);
    });
  });

  describe("check input is a phone number", () => {
    it.each([
      { inp: "8(100)121-21-22", expected: true },
      { inp: "+7(100)121-21-22", expected: true },
      { inp: "8(010)121-21-22", expected: false },
      { inp: "8(100)121-21-221", expected: false },
      { inp: "8(100)121-211-22", expected: false },
      { inp: "8(100)12-21-22", expected: false },
      { inp: "8(100)12a-21-22", expected: false },
      { inp: "8100)122-21-22", expected: false },
      { inp: "8(100)022-21-22", expected: false },
      { inp: "8(100)1222122", expected: false },
    ])("should for input=$inp is a phone: $expected", ({ inp, expected }) => {
      const result = isNumberPhone(inp);

      expect(result).toBe(expected);
    });
  });
});
