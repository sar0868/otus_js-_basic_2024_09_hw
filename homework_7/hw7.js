export function addPararaph(el) {
  el.innerHTML = `
        <input> 
        <button style='display: none'>add paragraph</button>
        <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        </div>
    `;
  const inp = el.querySelector("input");
  const btn = el.querySelector("button");

  btn.addEventListener("click", () => {
    let text = inp.value;
    inp.value = "";
    addElem(text);
    checkCountElem();
    btn.style.display = "none";
  });

  inp.oninput = () => {
    btn.style.display = "inline-block";
  };

  addElem = (text) => {
    const newEl = document.createElement("p");
    newEl.innerHTML = text;
    el.querySelector("div").prepend(newEl);
  };

  checkCountElem = () => {
    const elements = el.querySelectorAll("div p");
    for (const [k, v] of elements.entries()) {
      if (k >= 5) {
        el.querySelector("div").removeChild(v);
      }
    }
  };
}
