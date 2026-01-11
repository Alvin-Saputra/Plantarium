<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,

    },
    subtitle: {
        type: String,
        required: true,
        default: undefined // Nilai default jika parent tidak mengirim apa-apa
    },

    imageUrl: {
        type: String,
        required: true,
        default: undefined // Nilai default jika parent tidak mengirim apa-apa
    }
});

</script>

<template>
    <v-card class="mx-auto rounded-xl" max-width="344">
        <v-img height="200px" :src="props.imageUrl" cover></v-img>

        <v-card-title>
            {{ props.title }}
        </v-card-title>

        <v-card-subtitle>
           {{ props.subtitle }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" text="Explore"></v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>


    </v-card>
</template>





<style lang="scss" scoped></style>