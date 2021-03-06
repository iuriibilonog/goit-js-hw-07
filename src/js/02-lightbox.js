import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryNode = document.querySelector('.gallery');

const imagesList = galleryItems.map((item) =>
  `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');

galleryNode.insertAdjacentHTML('beforeend', imagesList);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});

console.log(galleryItems);
