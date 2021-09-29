import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryNode = document.querySelector('.gallery');

const imagesList = galleryItems.map((item) =>
  `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`).join('');


galleryNode.insertAdjacentHTML('beforeend', imagesList)

galleryNode.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);

  document.addEventListener('keydown', e => {
  if (e.code === 'Escape')
    instance.close();
})

    instance.show();

})



console.log(galleryItems);
