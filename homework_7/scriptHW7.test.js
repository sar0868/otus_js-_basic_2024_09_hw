/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
// const fs = require("fs");
// global.window.document.html.innerHTML = fs.readFileSync("./index.html");

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(
//   `
//     <body>
//       <input
//         type="text"
//         class="inputText"
//         placeholder="Введите текст параграфа"
//       />
//       <button id="button">Добавить параграф</button>
//       <div class="text">
//         <p>1</p>
//         <p>2</p>
//         <p>3</p>
//       </div>
//     </body>`
// );
// global.document = dom.window.document;
// global.window = dom.window;

// import {} from "./scriptHW7";

describe("tests hw 7", () => {
  //   beforeAll(() => {
  //     Object.defineProperty(global, "document", {});
  //   });
  //   jest.mock("document");
  it.todo("should button hide");

  it.todo("should added new p insert input text");

  it.todo("should count p equals 5, new p always first.");
});

// npm install -D jest-environment-jsdom
