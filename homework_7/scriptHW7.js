const elInput = document.querySelector(".inputText");
const button = document.querySelector("#button");

// button.hidden = true;
elInput.addEventListener("input", function () {
  button.style.display = "inline-block";
  // document.addEventListener("keyup", (event) => {
  //   if (event.code === "Enter") {
  //     buttonClick();
  //   }
  // });
});

function buttonClick() {
  const divBox = document.querySelector(".text");
  if (divBox.childElementCount === 5) {
    divBox.removeChild(document.querySelector(".text :last-Child"));
  }
  addElement(elInput.value);
  clearInput();
  button.style.display = "none";
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

module.exports = { elInput, buttonClick, addElement };
