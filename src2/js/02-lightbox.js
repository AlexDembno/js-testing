import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (objekt) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${objekt.original}">
    <img
      class="gallery__image"
      src="${objekt.preview}"
      alt="${objekt.description}"
    />
  </a>
</li>`
  )
  .join("");

divEl.insertAdjacentHTML("afterbegin", markup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
