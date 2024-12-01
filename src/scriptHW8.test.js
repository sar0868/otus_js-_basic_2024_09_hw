import { createDate, week, calcMinutes, getYounger } from "./scriptHW8";

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
    let originalDate;
    beforeEach(() => {
      originalDate = global.Date;
    });
    afterEach(() => (global.Date = originalDate));
    /*global global */
    it.each([
      { datetime: new Date(2024, 10, 16, 12, 30, 0, 0), expected: 750 },
      { datetime: new Date(2024, 10, 16, 13, 0, 0, 0), expected: 780 },
      { datetime: new Date(2024, 10, 16, 0, 10, 0, 0), expected: 10 },
      { datetime: new Date(2024, 10, 16, 0, 0, 0, 0), expected: 0 },
    ])("should for $datetime: $expected", ({ datetime, expected }) => {
      global.Date = jest.fn(() => datetime);
      global.Date.setDate = originalDate.setDate;

      const result = calcMinutes();

      expect(result).toBe(expected);
    });
  });

  describe("compare birth dates and get younger", () => {
    it.each([
      { date1: "01.01.2024", date2: "02.01.2024", expected: "02.01.2024" },
      { date1: "03.01.2024", date2: "02.01.2024", expected: "03.01.2024" },
      { date1: "01.01.2024", date2: "01.01.2024", expected: "01.01.2024" },
    ])(
      "should for dates $date1 and $date2 the younger date is $expected)",
      ({ date1, date2, expected }) => {
        const result = getYounger(date1, date2);

        expect(result).toBe(expected);
      },
    );
  });
});
