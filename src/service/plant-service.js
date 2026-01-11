import axios from 'axios';

// 1. Buat instance axios dengan konfigurasi dasar
const apiClient = axios.create({
    baseURL: 'https://perenual.com/api',
});

const key = import.meta.env.VITE_API_KEY

// 2. Fungsi untuk mengambil data plant berdasarkan beberapa parameter
export const getPlantList = async (indoor, watering, sunlight) => {
    try {

        const response = await apiClient.get(`/species-list?key=${key}`, {
            params: {
                indoor,
                watering,
                sunlight,
            },
        });
        return response.data;

    } catch (error) {

        throw error;
    }
};