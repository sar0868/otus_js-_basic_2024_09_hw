const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

import { addPararaph } from "./hw7";

describe("hw7", () => {
  it("create basic markup", () => {
    const el = document.createElement("div");
    addPararaph(el);

    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("div")).toBeTruthy();
    expect(el.querySelectorAll("div p")).toBeTruthy();
    expect(el.querySelectorAll("div p")).toHaveLength(3);
    expect(el.querySelector("button").style.display).toBe("none");
  });

  it("clear input on button click", () => {
    const el = document.createElement("div");
    addPararaph(el);

    el.querySelector("button").click();
    expect(el.querySelector("input").value).toBe("");
  });

  it("button is visible after input text", () => {
    const el = document.createElement("div");
    addPararaph(el);

    el.querySelector("input").value = "new";
    el.querySelector("input").oninput();
    expect(el.querySelector("button").style.display).toBe("inline-block");
  });

  it("add paragraph after button click", () => {
    const el = document.createElement("div");
    addPararaph(el);

    el.querySelector("input").value = "new";
    el.querySelector("button").click();
    expect(el.querySelectorAll("div p")).toHaveLength(4);
    expect(el.querySelector("button").style.display).toBe("none");
    expect(el.querySelector("div").firstChild.textContent).toBe("new");
  });

  it("count paragraphs equal 5", () => {
    const el = document.createElement("div");
    addPararaph(el);

    for (let i = 0; i < 6; i++) {
      el.querySelector("input").value = "new";
      el.querySelector("button").click();
    }
    expect(el.querySelectorAll("div p")).toHaveLength(5);
  });
});
