// src/libs/__tests__/title-formatter.js
import { titleFormatter } from "./scriptTM";

describe("titleFormatter", () => {
  it("форматирует заголовки", () => {
    const formattedTitle = titleFormatter(["test", "test2"]);
    expect(formattedTitle).toEqual("test — test2");
  });
});
