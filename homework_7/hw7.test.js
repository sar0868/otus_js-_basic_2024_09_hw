const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

import { addParagraph } from "./hw7";
import { beforeEach } from "@jest/globals";

const el = document.createElement("div");

describe("hw7", () => {
  beforeEach(() => {
    addParagraph(el);
  });

  it("create basic markup", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("div")).toBeTruthy();
    expect(el.querySelectorAll("div p")).toBeTruthy();
    expect(el.querySelectorAll("div p")).toHaveLength(3);
    expect(el.querySelector("button").style.display).toBe("none");
  });

  it("clear input on button click", () => {
    el.querySelector("button").click();

    expect(el.querySelector("input").value).toBe("");
  });

  it("button is visible after input text", () => {
    el.querySelector("input").value = "new";
    el.querySelector("input").oninput();

    expect(el.querySelector("button").style.display).toBe("inline-block");
  });

  it("add paragraph after button click", () => {
    el.querySelector("input").value = "new";
    el.querySelector("button").click();

    expect(el.querySelectorAll("div p")).toHaveLength(4);
    expect(el.querySelector("button").style.display).toBe("none");
    expect(el.querySelector("div").firstChild.textContent).toBe("new");
  });

  it("count paragraphs equal 5", () => {
    for (let i = 0; i < 6; i++) {
      el.querySelector("input").value = "new";
      el.querySelector("button").click();
    }

    expect(el.querySelectorAll("div p")).toHaveLength(5);
  });
});
