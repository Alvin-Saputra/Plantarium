<script setup>
import Slider from '@/components/Slider.vue';
import Toggle from '@/components/Toggle.vue';
import PlantCard from '@/components/PlantCard.vue';
import { ref } from 'vue';
import { getPlantList } from '@/service/plant-service';
import loadingAnim from '@/assets/animation/loadingAnim.json';
import NoData from '@/assets/animation/NoData.json';
import PlantJump from '@/assets/animation/PlantJump.json';

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


const wateringApiValues = [
    'none',      // index 0
    'minimum',   // index 1
    'average',   // index 2
    'frequent'   // index 3
];

const sunlightApiValues = [
    'full_shade',     // index 0
    'part_shade',     // index 1
    'sun_part_shade', // index 2
    'full_sun'        // index 3
];

const wateringLevel = ref(0);
const sunlightLevel = ref(0);
const isIndoor = ref(false);

const plantData = ref(null);
const isSearch = ref(false);
const hasSearch = ref(false);

const handleSearch = async () => {
    hasSearch.value = true;
    plantData.value = null;
    const wateringQuery = wateringApiValues[wateringLevel.value];
    const sunlightQuery = sunlightApiValues[sunlightLevel.value];
    let indoorQuery = 0;
    if (isIndoor.value) {
        indoorQuery = 1;
    }
    else {
        indoorQuery = 0;
    }
    console.log("Request Params:", {
        key: import.meta.env.VITE_API_KEY, // Cek di console apakah key terbaca?
        indoor: indoorQuery,
        watering: wateringQuery,
        sunlight: sunlightQuery
    });
    try {
        isSearch.value = true;
        const response = await getPlantList(indoorQuery, wateringQuery, sunlightQuery);
        // Format data menggunakan Model yang sudah Anda buat
        plantData.value = response;

    } catch (error) {
        console.error("Gagal mengambil data tanaman:", error);
        alert("Terjadi Kesalahan.");
    }
    finally {
        isSearch.value = false;
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
                            <Slider :min="0" :max="3" label="Kebutuhan Air" :tickLabel="wateringFreqLabels"
                                @update-value="(val) => wateringLevel = val" />
                            <Slider :min="0" :max="3" label="Intensitas Cahaya" :tickLabel="sunlightLabels"
                                @update-value="(val) => sunlightLevel = val" />

                            <div class="mt-2">
                                <Toggle v-model="isIndoor" toggleLabels="Tanaman Indoor" />
                            </div>
                        </div>

                        <v-btn block color="green-lighten-1" size="large" class="mt-8 text-white font-weight-bold"
                            rounded="xl" elevation="2" @click="handleSearch">
                            Cari Tanaman
                        </v-btn>
                    </v-card>
                </v-col>

                <v-col v-if="isSearch" cols="12" md="6" class="flex-col justify-center items-center">
                    <Vue3Lottie :animationData="PlantJump" :height="500" :width="500" />
                </v-col>

                    <v-col v-else-if="!isSearch && hasSearch && plantData.data.length == 0" cols="12" md="6" class="flex-col justify-center items-center">
                   <Vue3Lottie :animationData="NoData" :height="500" :width="500" />
                    <!-- <h1>No Data</h1> -->
                </v-col>

                <v-col v-else cols="12" md="6" class="flex-col justify-center">

                    <PlantCard v-for="item in plantData?.data" :key="item.id" :title="item.common_name"
                        :scientific-name="item.scientific_name?.[0]" :image-url="item.default_image?.medium_url"
                        class="mt-8 mb-8" />
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