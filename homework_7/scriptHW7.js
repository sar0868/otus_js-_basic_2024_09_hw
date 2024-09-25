const elInput = document.querySelector(".inputText");
const button = document.querySelector("#button");
const divBox = document.querySelector(".text");

button.hidden = true;
elInput.oninput = function () {
  newText = elInput.value;
  button.hidden = false;
};

function buttonClick() {
  if (divBox.childElementCount == 4) {
    divBox.removeChild(divBox.firstChild);
  }
  addElement(newText);
  clearInput();
  button.hidden = true;
}

function addElement(text) {
  const newEl = document.createElement("p");
  newEl.innerText = text;
  divBox.append(newEl);
}

function clearInput() {
  elInput.value = "";
}

// function afterInputText() {
//   newText = elInput.value;
//   button.hidden = false;
// }
