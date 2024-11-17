const elInput = document.querySelector(".inputText");
const button = document.querySelector("#button");

button.hidden = true;
elInput.oninput = function () {
  newText = elInput.value;
  button.hidden = false;
  // document.addEventListener("keyup", (event) => {
  //   if (event.code === "Enter") {
  //     buttonClick();
  //   }
  // });
};

function buttonClick() {
  const divBox = document.querySelector(".text");
  if (divBox.childElementCount == 5) {
    divBox.removeChild(document.querySelector(".text :last-Child"));
  }
  addElement(newText);
  clearInput();
  button.hidden = true;
}

function addElement(text) {
  const divBox = document.querySelector(".text");
  const newEl = document.createElement("p");
  newEl.innerText = text;
  divBox.insertBefore(newEl, divBox.firstChild);
}

function clearInput() {
  elInput.value = "";
}

button.addEventListener("click", buttonClick);

module.exports = { button, buttonClick, addElement };
