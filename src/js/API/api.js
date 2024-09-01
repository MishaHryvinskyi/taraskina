const API = "https://taraskina-api.onrender.com/api/paints";

async function getPaintsData() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Помилка при завантаженні даних:', error);
    }
};

export { getPaintsData };