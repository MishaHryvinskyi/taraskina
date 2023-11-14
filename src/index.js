import { markup, portfolioEl} from '../src/js/markup-portfolio';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

portfolioEl.innerHTML = markup;

const portfolioLinks = document.querySelectorAll('.portfolio__link');

const lightbox = new SimpleLightbox(portfolioLinks, {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});