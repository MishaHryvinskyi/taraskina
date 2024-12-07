import 'animate.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from './markup-portfolio';
import { getPaintsData } from './API/api';

let currentPage = 1;

const portfolioEl = document.querySelector('.portfolio__list');
const targetScroll = document.querySelector('.js-guard');

let options = {
  root: null,
  rottMargin: '30px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      currentPage += 1;
      getPaintsData(currentPage)
      .then(({ data }) => {
        const { paints } = data;
        const { pagination } = data;
        portfolioEl.insertAdjacentHTML('beforeend', createMarkup(paints));

        if (pagination.currentPage === pagination.totalPages) {
          observer.unobserve(targetScroll);
        }

        const portfolioLinks = document.querySelectorAll('.portfolio__link');
        const lightbox = new SimpleLightbox(portfolioLinks, {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
    }).catch(err => console.log(err));
    }
  })
}

getPaintsData().then(res => {
    portfolioEl.insertAdjacentHTML('beforeend',createMarkup(res.data.paints));
    observer.observe(targetScroll);

    const portfolioLinks = document.querySelectorAll('.portfolio__link');
    const lightbox = new SimpleLightbox(portfolioLinks, {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
});