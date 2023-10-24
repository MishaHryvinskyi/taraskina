import worksItem from "../src/db/works.json";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const portfolioEl = document.querySelector('.portfolio__list');

const markup = worksItem.map(({ url, name }) => `
  <li class="portfolio__list-item">
    <a href="${url}" class="portfolio__link" data-lightbox="portfolio-images">
      <img class="portfolio__img" src="${url}" alt="${name}" width="300" height="300">
      <h3 class "portfolio__title">${name}</h3>
    </a>
  </li>
`).join('');

portfolioEl.innerHTML = markup;

const portfolioLinks = document.querySelectorAll('.portfolio__link');

const lightbox = new SimpleLightbox(portfolioLinks, {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});