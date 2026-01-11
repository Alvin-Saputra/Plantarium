<script setup>
const model = defineModel({ type: Boolean, default: false });
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
        <v-switch v-model="model" :label="toggleLabels" inset></v-switch>
    </div>
</template>


<style lang="scss" scoped></style>