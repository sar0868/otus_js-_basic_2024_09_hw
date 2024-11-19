import { JSDOM } from "jsdom";
const dom = new JSDOM(
  `
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
    `,
  { runScripts: "dangerously" }
);
global.document = dom.window.document;
global.window = dom.window;
