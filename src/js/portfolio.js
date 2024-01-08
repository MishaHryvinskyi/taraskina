import { markup, portfolioEl } from './markup-portfolio';
import 'animate.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// portfolio
if (portfolioEl) {
  portfolioEl.innerHTML = markup;

  const portfolioLinks = document.querySelectorAll('.portfolio__link');

const lightbox = new SimpleLightbox(portfolioLinks, {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

}