const portfolioEl = document.querySelector('.portfolio__list');

async function getPaintsData() {
  try {
    const response = await fetch("https://taraskina-api.onrender.com/api/paints");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при завантаженні даних:', error);
  }
}

function createMarkup(data) {
  return data.map(({ url, name, size, year }) => `
    <li class="portfolio__list-item">
      <a href="${url}" class="portfolio__link" data-lightbox="portfolio-images">
        <div class="portfolio__img-wrapper">
          <img class="portfolio__img" src="${url}" alt="${name}" width="300" height="300">
          <div class="portfolio__overlay">
            <p class="portfolio__paragraph">${name}</p>
            <p class="portfolio__paragraph">${size}</p>
            <p>${year}</p>
          </div>
        </div>
        <h3 class="portfolio__title">${name}</h3>
      </a>
    </li>
  `).join('');
}

export { portfolioEl, getPaintsData, createMarkup };