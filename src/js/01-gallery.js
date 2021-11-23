import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

let galleryMarkup = '';

galleryItems.forEach((galleryItem) => {

    const itemMarkup =
    `<a class="gallery__link" href="${galleryItem.original}">
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
        />
    </a>`

    galleryMarkup += itemMarkup;
});

const galleryElem = document.querySelector('.gallery');
galleryElem.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryLightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });



console.log(galleryItems);
