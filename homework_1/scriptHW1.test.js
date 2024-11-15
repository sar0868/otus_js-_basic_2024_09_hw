import { sum, mult, totalChar, sumNumbers } from "./scriptHW1";
// const sumNumbers = require("./scriptHW1");

describe("test1", function () {
  it("should sum 2 and 3 expected 5", function () {
    const a = 2;
    const b = 3;
    const expected = 5;

    const fnSum = sum(a, b);

    expect(fnSum).toBe(expected);
  });
});
