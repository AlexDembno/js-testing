const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const items = ingredients.map((item) => `<li>${item}</li>`).join("");

listEl.insertAdjacentHTML("beforeend", items);
