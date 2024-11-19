/**
 * @jest-environment jsdom
 */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(
  `<body>
    <input
      type="text"
      class="inputText"
      placeholder="Введите текст параграфа"
    />
    <button id="button">Добавить параграф</button>
    <div class="text">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
    </body> `
);
global.document = dom.window.document;
global.window = dom.window;

import { buttonClick, addElement } from "./scriptHW7";

// jest.mock("./__mocks__/document.js");
describe("tests hw 7", () => {
  //   beforeAll(() => {
  //     Object.defineProperty(global, "document", {});
  //   });
  //   jest.mock("document");
  it.skip("should button hide", () => {
    // const result = button.hidden;
    // expect(result).toBe(true);
  });

  it.todo("should added new p insert input text", () => {
    const elInput = document.querySelector(".text p");
    // elInput.value = "hello";
    console.log(elInput.textContent);
    // const el = document.querySelector(".text p");
    // const result = addElement(newText);
    // const getText = el.textContent;
    // const getText = elInput.value;

    // expect(getText).toBe(1);
  });

  it.todo("should count p equals 5, new p always first.");
});
