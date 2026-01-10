<script setup>
const props = defineProps({
    text: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <div>
        <v-btn>
            {{ text }}
        </v-btn>
    </div>
</template>



<style lang="scss" scoped>

</style>