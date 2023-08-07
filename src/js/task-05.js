const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const textWrite = (event) => {
  if (!event) {
    return (spanEl.textContent = "Anonymous");
  }
  return (spanEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener("input", textWrite);
