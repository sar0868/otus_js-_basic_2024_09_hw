import { createDate, week, calcMinutes } from "./scriptHW8";

describe("tests hw 8", () => {
  describe("day of the week", () => {
    it.each([
      { date: "17.11.2024", day: "Воскресенье" },
      { date: "02.10.2023", day: "Понедельник" },
      { date: "06.10.2023", day: "Пятница" },
    ])("should date $date day $day", ({ date, day }) => {
      const result = week(createDate(date).getDay());
      console.log(createDate(date).getDay());

      expect(result).toBe(day);
    });
  });

  describe("get minutes elapsed since the beginning of today", () => {
    it.each([
      { datetime: new Date(2024, 10, 16, 12, 30, 0, 0), expected: 750 },
      { datetime: new Date(2024, 10, 16, 13, 0, 0, 0), expected: 780 },
      { datetime: new Date(2024, 10, 16, 0, 10, 0, 0), expected: 10 },
      { datetime: new Date(2024, 10, 16, 0, 0, 0, 0), expected: 0 },
    ])("should for $datetime: $expected", ({ datetime, expected }) => {
      const result = calcMinutes(datetime);

      expect(result).toBe(expected);
    });
  });
});
