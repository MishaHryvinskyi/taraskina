import axios from "axios";

const API = "https://taraskina-api.onrender.com/api/paints";
const limitItem = 8;

async function getPaintsData(page = 1) {
    try {
      const response = await axios.get(`${API}?page=${page}&limit=${limitItem}`);
      return response;
    } catch (error) {
      console.error('Помилка при завантаженні даних:', error);
    }
};

export { getPaintsData };