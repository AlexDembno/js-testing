const refs = {
  minusButton: document.querySelector('button[data-action="decrement"]'),
  span: document.querySelector("#value"),
  plusButton: document.querySelector('button[data-action="increment"]'),
};

const { minusButton, span, plusButton } = refs;

let counterValue = 0;

minusButton.addEventListener("click", () => {
  return (span.textContent -= 1);
});

plusButton.addEventListener("click", () => {
  return (span.textContent = counterValue += 1);
});
