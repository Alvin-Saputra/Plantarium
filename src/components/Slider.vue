<script setup>
import { ref } from 'vue'

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

});
const value = ref(0);

const emit = defineEmits(['update-active']);

watch(value, (newValue) => {
    emit('update-active', newValue)
});

</script>

<template>
    <v-slider v-model="value" :max="props.max" :min="props.min" :step="1" thumb-label></v-slider>
</template>


<style lang="scss" scoped></style>