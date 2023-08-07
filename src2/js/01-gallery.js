import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (objekt) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${objekt.original}">
    <img
      class="gallery__image"
      src="${objekt.preview}"
      data-source="${objekt.original}"
      alt="${objekt.description}"
    />
  </a>
</div>`
  )
  .join("");

divEl.insertAdjacentHTML("afterbegin", markup);

const galleryImg = document.querySelectorAll(".gallery__image");

const clickImege = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    event.preventDefault();
    const instance = basicLightbox.create(`
		    <img src="${event.target.getAttribute(
          "data-source"
        )}" width="800" height="600">
		`);

    instance.show();
    const closeModal = (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    };

    document.addEventListener("keydown", closeModal);
  }
};

divEl.addEventListener("click", clickImege);
