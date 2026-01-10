import axios from 'axios';

// 1. Buat instance axios dengan konfigurasi dasar
const apiClient = axios.create({
    baseURL: 'https://perenual.com/api',
    key: import.meta.env.API_KEY,
});

// 2. Fungsi untuk mengambil data plant berdasarkan beberapa parameter
export const getWeatherByCity = async (indoor, watering) => {
    try {

        const response = await apiClient.get('/species-list', {
            params: { indoor: indoor, watering: watering },
        });
        return response.data;

    } catch (error) {

        throw error;
    }
};