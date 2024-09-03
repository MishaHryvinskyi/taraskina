const goToTopBtn = document.querySelector('.go-to-top');

goToTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function goTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}

function trackScroll() {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        goToTopBtn.classList.add('go-top--show');
    } else {
        goToTopBtn.classList.remove('go-top--show');
    }
}