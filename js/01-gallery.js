import { galleryItems } from './gallery-items.js';


const galleryElem = document.querySelector('.gallery');
const bodyElem = document.querySelector('body');
let modalImage;

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

galleryElem.insertAdjacentHTML('beforeend', galleryMarkup);


// 2.Реалізація делегування на div.gallery і отримання url великого зображення.

const onGalleryClick = event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

onOpenModal(event.target.dataset.source);
};

galleryElem.addEventListener('click', onGalleryClick);


// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.

const onCreateModal = img => basicLightbox.create(`
    <img src="${img}" width="1200" alt="${img}">
`);


// const onOpenModal = img => {
//     modalImage = onCreateModal(img);
//     modalImage.show();
//     console.log("Open modal");
// };


// const onKeyPress = event => {
//     if (event.code === "Escape") modalImage.close();
//     console.log("Close modal with escape");
//     document.removeEventListener("keyup", onKeyPress);
// };