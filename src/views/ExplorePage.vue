<script setup>
import Slider from '@/components/Slider.vue';
import Toggle from '@/components/Toggle.vue';
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
</script>
<template>
    <div class="explore-wrapper">
        <div class="flex justify-space-evenly items-center mr-32 ml-32">

            <div class="input-section flex-1 p-10 bg-green-200">
                <Slider min="0" max="3" label="Watering" :tickLabel="wateringFreqLabels" />
                <Slider min="0" max="3" label="Sunlight" :tickLabel="sunlightLabels"></Slider>
                <Toggle toggleLabels="Indoor"></Toggle>
            </div>
            <div class="info-section">
                <img src="/images/Plant-img.png" alt="plant">

            </div>


        </div>
    </div>
</template>



<style lang="scss" scoped>
.explore-wrapper {
    font-family: 'Google Sans', sans-serif;
    font-weight: 500;
}
</style>