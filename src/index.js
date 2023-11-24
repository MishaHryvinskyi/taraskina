import { markup, portfolioEl} from '../src/js/markup-portfolio';
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


// mobile-menu
const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");


menuBtnRef.addEventListener("click", () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle("is-open");

})



