<script setup>
const props = defineProps({
    toggleLabels: {
        type: String,
        required: false,
        default: 'Toggle' // Nilai default jika parent tidak mengirim apa-apa
    },
});
</script>


<template>
    <div>
        <v-switch :label="toggleLabels" inset></v-switch>
    </div>
</template>


<style lang="scss" scoped></style>