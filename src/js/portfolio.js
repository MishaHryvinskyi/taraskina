import { createMarkup } from './markup-portfolio';
import { getPaintsData } from './API/api';
import 'animate.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const portfolioEl = document.querySelector('.portfolio__list');

getPaintsData().then(data => {
  if (data && portfolioEl) {
    const markup = createMarkup(data);
    portfolioEl.innerHTML = markup;

    const portfolioLinks = document.querySelectorAll('.portfolio__link');

    const lightbox = new SimpleLightbox(portfolioLinks, {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  }
});