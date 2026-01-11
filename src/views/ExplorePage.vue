<script setup>
import Slider from '@/components/Slider.vue';
import Toggle from '@/components/Toggle.vue';
import PlantCard from '@/components/PlantCard.vue';

import { getPlantList } from '@/service/plant-service';

const wateringFreqLabels = {
    0: 'None',
    1: 'Minimum',
    2: 'Average',
    3: 'Frequent',
};

const sunlightLabels = {
    0: 'Full Shade',
    1: 'Shade',
    2: 'Sun-Part Shade',
    3: 'Full Sun',
};

const weatherData = ref(null);


const handleSearch = async (indoor, watering, sunlight) => {
    try {
        const response = await getPlantList(indoor, watering, sunlight);
        // Format data menggunakan Model yang sudah Anda buat
        weatherData.value = response;
    } catch (error) {
        console.error("Gagal mengambil data tanaman:", error);
        alert("Terjadi Kesalahan.");
    }
};
</script>
<template>
    <div class="explore-wrapper">
        <v-container class="fill-height">
            <v-row justify="space-evenly" class="mt-5">
                
                <v-col cols="12" md="5">
                    <v-card class="pa-8 rounded-xl sticky-card" elevation="4">
                        <div class="mb-6">
                            <h2 class="text-3xl font-bold text-green-darken-2 mb-2">Filter Tanaman</h2>
                            <p class="text-grey-darken-1 text-sm">Sesuaikan preferensi tanaman untuk ruanganmu.</p>
                        </div>

                        <div class="flex flex-col gap-6">
                            <Slider :min="0" :max="3" label="Kebutuhan Air" :tickLabel="wateringFreqLabels" />
                            <Slider :min="0" :max="3" label="Intensitas Cahaya" :tickLabel="sunlightLabels" />
                            
                            <div class="mt-2">
                                <Toggle toggleLabels="Tanaman Indoor" />
                            </div>
                        </div>

                        <v-btn 
                            block 
                            color="green-lighten-1" 
                            size="large" 
                            class="mt-8 text-white font-weight-bold" 
                            rounded="xl" 
                            elevation="2"
                        >
                            Cari Tanaman
                        </v-btn>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6" class="flex-col justify-center">
                    <PlantCard></PlantCard>
                    <PlantCard></PlantCard>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>



<style lang="scss" scoped>
.explore-wrapper {
    font-family: 'Google Sans', sans-serif;
    font-weight: 500;
}
.sticky-card {
    /* Agar card tetap pada posisinya saat parent discroll */
    position: sticky;
    
    /* Jarak dari bagian atas layar (misal: di bawah navbar) */
    top: 24px; 
    
    /* Pastikan z-index cukup agar tidak tertutup elemen lain */
    z-index: 10;
}
</style>