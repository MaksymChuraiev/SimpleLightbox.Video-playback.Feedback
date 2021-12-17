import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import itemsTemplate from '../templates/gallery-items.hbs';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');

createListImage();

function createListImage() {
  galleryListRef.insertAdjacentHTML('beforeend', itemsTemplate(galleryItems));
}

new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
  doubleTapZoom: 5,
});
