import { galleryItems } from './gallery-items.js';

const galleryElem = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join("");

galleryElem.insertAdjacentHTML('beforeend', galleryMarkup);



const lightboxOptions = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt', captionDelay: 250});