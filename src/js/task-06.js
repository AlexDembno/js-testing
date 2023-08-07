const inputEl = document.querySelector("#validation-input");

const number = Number(inputEl.dataset.length);

const readingInput = (event) => {
  if (event.currentTarget.value.length > 6) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", readingInput);
