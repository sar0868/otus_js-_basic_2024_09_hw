/**
 * @jest-environment jsdom
 */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(
  `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
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
      <script src="./scriptHW7.js"></script>
    </body>
  </html>`
);
global.document = dom.window.document;
global.window = dom.window;

import { buttonClick, addElement } from "./scriptHW7";

describe("tests hw 7", () => {
  //   beforeAll(() => {
  //     Object.defineProperty(global, "document", {});
  //   });
  //   jest.mock("document");
  it.todo("should button hide");

  it.todo("should added new p insert input text");

  it.todo("should count p equals 5, new p always first.");
});
