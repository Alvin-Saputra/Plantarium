<script setup>
import { ref } from 'vue'
import { watch } from 'vue';
const props = defineProps({
    min: {
        type: Number,
        required: true,
        default: 0 // Nilai default jika parent tidak mengirim apa-apa
    },

    max: {
        type: Number,
        required: true,
        default: 5 // Nilai default jika parent tidak mengirim apa-apa
    },

    label: {
        type: String,
        required: false,
        default: "Slider"
    },

    tickLabel: {
        type: Object,
        required: false,
        default: undefined
    },

});
const value = ref(0);

const emit = defineEmits(['update-active']);

watch(value, (newValue) => {
    emit('update-active', newValue)
});

</script>

<template>
    <div class="slider-wrapper">
    <h5 class="text-xl ">{{ props.label }}</h5>
    <v-slider v-model="value" :max="props.max" :min="props.min" :step="1" :ticks="tickLabel" show-ticks="always"></v-slider>
    </div>
</template>


<style lang="scss" scoped></style>