import worksItem from "../db/works.json";


export const portfolioEl = document.querySelector('.portfolio__list');

export const markup = worksItem.map(({ url, name }) => `
    <li class="portfolio__list-item">
    <a href="${url}" class="portfolio__link" data-lightbox="portfolio-images">
        <div class="portfolio__img-wrapper">
            <img class="portfolio__img" src="${url}" alt="${name}" width="300" height="300">
            <div class="portfolio__overlay">
                <p>${name}</p>
            </div>
        </div>
        <h3 class="portfolio__title">${name}</h3>
    </a>
    </li>
`).join('');
