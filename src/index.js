import worksItem from "../src/db/works.json";

const portfolioEl = document.querySelector('.portfolio__list');

const markup = worksItem.map(({ url, name }) => `
  <li class="portfolio__list-item">
    <img class="portfolio__img" src="${url}" alt="${name}" width="300" height="300">
    <h3 class="portfolio__title">${name}</h3>
  </li>
`).join('');

portfolioEl.innerHTML = markup;