import { portfolioEl, getPaintsData, createMarkup } from './markup-portfolio';
import 'animate.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Отримання даних і створення розмітки
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