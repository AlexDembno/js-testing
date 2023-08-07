function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
  divEl: document.querySelector("#boxes"),
};

const { inputEl, createButton, destroyButton, divEl } = refs;

let qwe;

const lisenInput = (event) => {
  qwe = event.currentTarget.value;
  return qwe;
};

inputEl.addEventListener("input", lisenInput);

const clickButton = () => {
  createBoxes(qwe);
};

createButton.addEventListener("click", clickButton);

const createBoxes = (amount) => {
  for (let i = 0; i < Number(amount); i += 1) {
    let firstSize = 30 + i * 10;
    divEl.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${firstSize}px; height: ${firstSize}px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
};

const clear = () => {
  divEl.innerHTML = "";
};

destroyButton.addEventListener("click", clear);
