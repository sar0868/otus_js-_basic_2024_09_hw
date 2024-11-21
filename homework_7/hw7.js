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
    inp.value = "";
  });

  inp.oninput = () => {
    btn.style.display = "inline-block";
  };
}
