import 'animate.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from './markup-portfolio';
import { getPaintsData } from './API/api';

const portfolioEl = document.querySelector('.portfolio__list');
const targetScroll = document.querySelector('.js-guard');

const lightbox = new SimpleLightbox('.portfolio__list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let options = {
  root: null,
  rottMargin: '30px',
  threshold: 1.0,
};

let currentPage = 1;
let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      currentPage += 1;

      getPaintsData(currentPage)
      .then(({ data }) => {
        const { paints } = data;
        const { pagination } = data;
        const currentPage = pagination.currentPage;
        const totalPages = pagination.totalPages;
        
        portfolioEl.insertAdjacentHTML('beforeend', createMarkup(paints));
        lightbox.refresh();
        if (currentPage === totalPages) {
          observer.unobserve(targetScroll);
        }

    }).catch(err => console.log(err));
    }
  })
}

getPaintsData().then(({ data }) => {
  const { paints } = data;
    portfolioEl.insertAdjacentHTML('beforeend',createMarkup(paints));
    observer.observe(targetScroll);
    lightbox.refresh();
});